import { closestRegionPath, getAllRegionPaths } from "./svg.js";

/** Which shapes light up together when one of them is hovered. */
export type HoverGroupBy = "island" | "province";

/**
 * Highlights every shape that belongs to the same province as the hovered one
 * (a province split into several pieces lights up together). Shapes with no
 * province name yet light up alone. Pass "island" to highlight whole islands
 * instead. In edit mode only the single shape lights up, since the editor
 * selects shapes one by one.
 */
export class MapHover {
  private svg: SVGSVGElement;
  private attr: string;
  private lit: SVGPathElement[] = [];

  constructor(svg: SVGSVGElement, groupBy: HoverGroupBy = "province") {
    this.svg = svg;
    this.attr = groupBy === "island" ? "data-island" : "data-province";

    svg.addEventListener("pointerover", (e) => {
      if (e.pointerType !== "mouse") return;
      this.highlight(closestRegionPath(e.target));
    });
    svg.addEventListener("pointerleave", (e) => {
      if (e.pointerType === "mouse") this.highlight(null);
    });
    // Touch has no hover, so a tap lights the group up instead.
    svg.addEventListener("click", (e) => this.highlight(closestRegionPath(e.target)));
  }

  private groupFor(p: SVGPathElement): SVGPathElement[] {
    if (this.svg.closest(".edit-mode")) return [p];
    const key = p.getAttribute(this.attr);
    if (!key) return [p];
    return getAllRegionPaths(this.svg).filter((x) => x.getAttribute(this.attr) === key);
  }

  private highlight(p: SVGPathElement | null): void {
    const group = p ? this.groupFor(p) : [];
    if (group.length === this.lit.length && group.every((g, i) => g === this.lit[i])) return;
    for (const old of this.lit) old.classList.remove("hovered");
    for (const g of group) g.classList.add("hovered");
    this.lit = group;
  }
}
