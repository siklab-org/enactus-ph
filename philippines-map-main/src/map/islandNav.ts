import type { IslandGroup } from "./types.js";
import { getAllRegionPaths, getPathsForIsland } from "./svg.js";
import type { MapZoom } from "./mapZoom.js";

/**
 * Wires the Luzon / Visayas / Mindanao buttons: zoom onto that island group and
 * dim the other islands. The 1:1 button clears the dimming again.
 */
export class IslandNav {
  private svg: SVGSVGElement;

  constructor(svg: SVGSVGElement, root: HTMLElement, zoom: MapZoom) {
    this.svg = svg;

    for (const btn of root.querySelectorAll<HTMLButtonElement>("[data-island-btn]")) {
      const island = btn.dataset.islandBtn as IslandGroup;
      btn.addEventListener("click", () => {
        this.dimAllExcept(island);
        zoom.zoomToElements(getPathsForIsland(svg, island));
      });
    }

    // MapZoom's own listener does the zoom reset; this one just brings the other islands back.
    root.querySelector("[data-zoom-reset]")?.addEventListener("click", () => this.clearDim());
  }

  private dimAllExcept(island: IslandGroup): void {
    for (const p of getAllRegionPaths(this.svg)) {
      p.classList.toggle("dimmed", p.getAttribute("data-island") !== island);
    }
  }

  private clearDim(): void {
    for (const p of getAllRegionPaths(this.svg)) p.classList.remove("dimmed");
  }
}
