const MIN_SCALE = 1;
const MAX_SCALE = 8;
const WHEEL_STEP = 0.0015; // scale change per pixel of wheel delta
const BUTTON_STEP = 1.5; // multiplicative zoom per button click
const DRAG_THRESHOLD = 4; // px of movement before a pointer-down counts as a drag, not a click
const FOCUS_FILL = 0.8; // fraction of the map area a focused island should cover (as long as it fits)
const ANIMATION_MS = 550; // keep in sync with .map-host svg.animating in styles.css

export class MapZoom {
  private host: HTMLElement;
  private content: SVGSVGElement;

  private scale = 1;
  private tx = 0;
  private ty = 0;
  private animTimer: number | undefined;

  private dragging = false;
  private dragMoved = false;
  private startX = 0;
  private startY = 0;
  private startTx = 0;
  private startTy = 0;

  constructor(host: HTMLElement, content: SVGSVGElement, root: HTMLElement) {
    this.host = host;
    this.content = content;

    this.wireWheel();
    this.wireDrag();
    this.wireButtons(root);
    this.apply();
  }

  /** Smoothly zooms and centers the view so the given elements fill the map. */
  zoomToElements(els: Element[]): void {
    if (els.length === 0) return;
    // Settle any running animation first so the measured rects match this.tx/ty/scale.
    this.stopAnimation();

    const hostRect = this.host.getBoundingClientRect();
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const el of els) {
      const r = el.getBoundingClientRect();
      minX = Math.min(minX, r.left);
      minY = Math.min(minY, r.top);
      maxX = Math.max(maxX, r.right);
      maxY = Math.max(maxY, r.bottom);
    }

    // screen rect -> untransformed content coordinates (where scale = 1, no pan)
    const bx = (minX - hostRect.left - this.tx) / this.scale;
    const by = (minY - hostRect.top - this.ty) / this.scale;
    const bw = (maxX - minX) / this.scale;
    const bh = (maxY - minY) / this.scale;
    if (bw <= 0 || bh <= 0) return;

    const hostW = this.host.clientWidth;
    const hostH = this.host.clientHeight;
    const fit = Math.min((hostW * FOCUS_FILL) / bw, (hostH * FOCUS_FILL) / bh);
    const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, fit));

    this.scale = newScale;
    this.tx = hostW / 2 - (bx + bw / 2) * newScale;
    this.ty = hostH / 2 - (by + bh / 2) * newScale;
    this.applyAnimated();
  }

  reset(): void {
    this.scale = 1;
    this.tx = 0;
    this.ty = 0;
    this.applyAnimated();
  }

  private clamp(): void {
    const hostW = this.host.clientWidth;
    const hostH = this.host.clientHeight;
    const scaledW = hostW * this.scale;
    const scaledH = hostH * this.scale;

    const minTx = Math.min(0, hostW - scaledW);
    const minTy = Math.min(0, hostH - scaledH);
    this.tx = Math.min(0, Math.max(minTx, this.tx));
    this.ty = Math.min(0, Math.max(minTy, this.ty));
  }

  private apply(): void {
    this.clamp();
    this.content.style.transform = `translate(${this.tx}px, ${this.ty}px) scale(${this.scale})`;
  }

  private applyAnimated(): void {
    this.stopAnimation();
    this.content.classList.add("animating");
    this.apply();
    this.animTimer = window.setTimeout(() => this.content.classList.remove("animating"), ANIMATION_MS + 50);
  }

  private stopAnimation(): void {
    window.clearTimeout(this.animTimer);
    this.content.classList.remove("animating");
  }

  private zoomAt(clientX: number, clientY: number, factor: number): void {
    const rect = this.host.getBoundingClientRect();
    const mx = clientX - rect.left;
    const my = clientY - rect.top;

    const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, this.scale * factor));
    if (newScale === this.scale) return;

    // keep the point under the cursor fixed while scaling
    const contentX = (mx - this.tx) / this.scale;
    const contentY = (my - this.ty) / this.scale;
    this.tx = mx - contentX * newScale;
    this.ty = my - contentY * newScale;
    this.scale = newScale;
    this.apply();
  }

  private wireWheel(): void {
    this.host.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        this.stopAnimation();
        const factor = Math.exp(-e.deltaY * WHEEL_STEP);
        this.zoomAt(e.clientX, e.clientY, factor);
      },
      { passive: false }
    );
  }

  private wireDrag(): void {
    this.host.addEventListener("pointerdown", (e) => {
      if (e.button !== 0) return;
      this.stopAnimation();
      this.dragging = true;
      this.dragMoved = false;
      this.startX = e.clientX;
      this.startY = e.clientY;
      this.startTx = this.tx;
      this.startTy = this.ty;
      this.host.classList.add("panning");

      // Track the drag on window rather than via setPointerCapture: capturing
      // the pointer on the host retargets subsequent pointer/mouse events and
      // can suppress the "click" a plain (non-dragged) tap needs to fire on
      // the province <path> underneath — which would silently break selection.
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);
    });

    const onMove = (e: PointerEvent) => {
      if (!this.dragging) return;
      const dx = e.clientX - this.startX;
      const dy = e.clientY - this.startY;
      if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
        this.dragMoved = true;
      }
      this.tx = this.startTx + dx;
      this.ty = this.startTy + dy;
      this.apply();
    };

    const onUp = () => {
      if (!this.dragging) return;
      this.dragging = false;
      this.host.classList.remove("panning");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);

      if (this.dragMoved) {
        // swallow the click that would otherwise fire on the shape under the
        // pointer at the end of a real drag gesture (province selection, etc.)
        const suppress = (ce: MouseEvent) => {
          ce.stopPropagation();
          ce.preventDefault();
          this.host.removeEventListener("click", suppress, true);
        };
        this.host.addEventListener("click", suppress, true);
      }
    };
  }

  private wireButtons(root: HTMLElement): void {
    const inBtn = root.querySelector<HTMLButtonElement>("[data-zoom-in]");
    const outBtn = root.querySelector<HTMLButtonElement>("[data-zoom-out]");
    const resetBtn = root.querySelector<HTMLButtonElement>("[data-zoom-reset]");

    const center = () => {
      const rect = this.host.getBoundingClientRect();
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    };

    inBtn?.addEventListener("click", () => {
      const c = center();
      this.zoomAt(c.x, c.y, BUTTON_STEP);
    });
    outBtn?.addEventListener("click", () => {
      const c = center();
      this.zoomAt(c.x, c.y, 1 / BUTTON_STEP);
    });
    resetBtn?.addEventListener("click", () => this.reset());
  }
}
