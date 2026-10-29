/** Parses raw SVG text and mounts it inside the given container, returning the <svg> element. */
export function mountSvg(container: HTMLElement, svgText: string): SVGSVGElement {
  const doc = new DOMParser().parseFromString(svgText, "image/svg+xml");
  const svg = doc.documentElement as unknown as SVGSVGElement;
  container.innerHTML = "";
  container.appendChild(svg);
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.removeAttribute("width");
  svg.removeAttribute("height");
  return svg;
}

export function getAllRegionPaths(svg: SVGSVGElement): SVGPathElement[] {
  return Array.from(svg.querySelectorAll<SVGPathElement>("path.region"));
}

export function getPathsForIsland(svg: SVGSVGElement, island: string): SVGPathElement[] {
  return Array.from(svg.querySelectorAll<SVGPathElement>(`path.region[data-island="${island}"]`));
}

/** Returns the province <path> an event target sits in (or is), or null. */
export function closestRegionPath(target: EventTarget | null): SVGPathElement | null {
  return target instanceof Element ? target.closest<SVGPathElement>("path.region") : null;
}

/** Serializes the live, in-DOM SVG (including any unsaved edits) and triggers a browser download. */
export function downloadSvg(svg: SVGSVGElement, filename = "ph_islands.svg"): void {
  const clone = svg.cloneNode(true) as SVGSVGElement;
  clone.removeAttribute("class");
  clone.style.transform = "";
  for (const p of Array.from(clone.querySelectorAll<SVGPathElement>("path.region"))) {
    p.classList.remove("hovered", "selected", "dimmed");
    p.style.fill = "";
  }
  const xml = new XMLSerializer().serializeToString(clone);
  const blob = new Blob([xml], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
