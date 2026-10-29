import { fetchSvgText } from "./api.js";
import { mountSvg } from "./svg.js";
import { Editor } from "./editor.js";
import { RegionPreview } from "./regionPreview.js";
import { MapHover } from "./hover.js";
import { MapTooltip } from "./tooltip.js";
import { MapZoom } from "./mapZoom.js";
import { IslandNav } from "./islandNav.js";

/**
 * Mounts the interactive map and all its features inside one page section.
 * The section must contain the [data-map-host] element and the map controls.
 */
export async function initMap(page: HTMLElement): Promise<void> {
  const mapHost = page.querySelector<HTMLElement>("[data-map-host]");
  if (!mapHost) return;

  const svg = mountSvg(mapHost, await fetchSvgText());
  new Editor(svg, page);
  new RegionPreview(svg, page);
  new MapHover(svg); // highlights one province; pass "island" to highlight whole islands
  new MapTooltip(svg, mapHost);
  const zoom = new MapZoom(mapHost, svg, page);
  new IslandNav(svg, page, zoom);
}
