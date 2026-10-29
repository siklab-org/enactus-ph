import { getAllRegionPaths } from "./svg.js";
import { getRegionColor } from "./regionColors.js";
import { PH_REGIONS } from "./types.js";

export class RegionPreview {
  private svg: SVGSVGElement;
  private toggleBtn: HTMLButtonElement;
  private legend: HTMLElement;
  private on = false;

  constructor(svg: SVGSVGElement, root: HTMLElement) {
    this.svg = svg;
    this.toggleBtn = root.querySelector("[data-region-preview-toggle]")!;
    this.legend = root.querySelector("[data-region-legend]")!;
    this.toggleBtn.addEventListener("click", () => this.setOn(!this.on));
  }

  private setOn(on: boolean): void {
    this.on = on;
    this.toggleBtn.classList.toggle("active", on);
    this.toggleBtn.textContent = on ? "Hide Region Preview" : "Preview by Region";

    const paths = getAllRegionPaths(this.svg);

    if (!on) {
      for (const p of paths) p.style.fill = "";
      this.legend.innerHTML = "";
      this.legend.classList.remove("visible");
      return;
    }

    for (const p of paths) p.style.fill = getRegionColor(p.getAttribute("data-region"));
    this.renderLegend(paths);
  }

  private renderLegend(paths: SVGPathElement[]): void {
    const present = new Set(
      paths.map((p) => p.getAttribute("data-region")).filter((r): r is string => !!r)
    );
    const ordered = [
      ...PH_REGIONS.filter((r) => present.has(r)),
      ...Array.from(present).filter((r) => !PH_REGIONS.includes(r)).sort(),
    ];

    this.legend.innerHTML = "";
    for (const region of ordered) {
      const row = document.createElement("div");
      row.className = "legend-row";
      const swatch = document.createElement("span");
      swatch.className = "legend-swatch";
      swatch.style.background = getRegionColor(region);
      row.append(swatch, region);
      this.legend.appendChild(row);
    }
    this.legend.classList.add("visible");
  }
}
