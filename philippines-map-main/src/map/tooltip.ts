import { getRegionColor } from "./regionColors.js";
import { closestRegionPath } from "./svg.js";
import { ISLAND_LABELS } from "./types.js";
import type { IslandGroup } from "./types.js";

const CURSOR_OFFSET = 14;
const EDGE_MARGIN = 8;

function make<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className: string,
  parent?: HTMLElement
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  node.className = className;
  parent?.appendChild(node);
  return node;
}

/**
 * Province tooltip: follows the cursor on hover (mouse) and appears at the
 * tap position on click/tap (touch). Shows island, province, region and the
 * region's color.
 */
export class MapTooltip {
  private host: HTMLElement;
  private el: HTMLElement;
  private islandEl: HTMLElement;
  private nameEl: HTMLElement;
  private regionEl: HTMLElement;
  private swatchEl: HTMLElement;
  private hexEl: HTMLElement;

  constructor(svg: SVGSVGElement, host: HTMLElement) {
    this.host = host;

    this.el = make("div", "map-tooltip");
    this.el.setAttribute("role", "tooltip");
    this.islandEl = make("div", "map-tooltip-island", this.el);
    this.nameEl = make("strong", "map-tooltip-name", this.el);
    this.regionEl = make("div", "map-tooltip-region", this.el);
    const colorRow = make("div", "map-tooltip-color", this.el);
    this.swatchEl = make("span", "map-tooltip-swatch", colorRow);
    this.hexEl = make("span", "map-tooltip-hex", colorRow);
    document.body.appendChild(this.el);

    svg.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      if (this.host.classList.contains("panning")) return this.hide();
      const p = closestRegionPath(e.target);
      if (p) this.show(p, e.clientX, e.clientY);
      else this.hide();
    });
    svg.addEventListener("pointerleave", (e) => {
      if (e.pointerType === "mouse") this.hide();
    });

    // Tap/click: show at the pointer. (A drag never reaches here — MapZoom swallows that click.)
    svg.addEventListener("click", (e) => {
      const p = closestRegionPath(e.target);
      if (p) this.show(p, e.clientX, e.clientY);
      else this.hide();
    });

    // Touch: starting a pan, or tapping outside the map, dismisses it.
    host.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse") this.hide();
    });
    document.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse" && !this.host.contains(e.target as Node)) this.hide();
    });
  }

  private show(p: SVGPathElement, x: number, y: number): void {
    const province = p.getAttribute("data-province")?.trim();
    const region = p.getAttribute("data-region")?.trim();
    const island = p.getAttribute("data-island") as IslandGroup | null;
    const color = getRegionColor(region);

    const islandLabel = island ? ISLAND_LABELS[island] : undefined;
    this.islandEl.textContent = islandLabel ?? "";
    this.islandEl.hidden = !islandLabel;

    this.nameEl.textContent = province || "Unassigned";
    this.nameEl.classList.toggle("is-empty", !province);
    this.regionEl.textContent = region || "No region set";
    this.swatchEl.style.background = color;
    this.hexEl.textContent = color;

    this.el.classList.add("visible");
    this.position(x, y);
  }

  private position(x: number, y: number): void {
    const { width, height } = this.el.getBoundingClientRect();
    let left = x + CURSOR_OFFSET;
    let top = y + CURSOR_OFFSET;
    if (left + width > window.innerWidth - EDGE_MARGIN) left = x - CURSOR_OFFSET - width;
    if (top + height > window.innerHeight - EDGE_MARGIN) top = y - CURSOR_OFFSET - height;
    this.el.style.left = `${Math.max(EDGE_MARGIN, left)}px`;
    this.el.style.top = `${Math.max(EDGE_MARGIN, top)}px`;
  }

  private hide(): void {
    this.el.classList.remove("visible");
  }
}
