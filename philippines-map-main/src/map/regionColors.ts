import { PH_REGIONS } from "./types.js";

const PALETTE = [
  "#e6194b", "#3cb44b", "#ffe119", "#4363d8", "#f58231", "#911eb4",
  "#46f0f0", "#f032e6", "#bcf60c", "#fabebe", "#008080", "#e6beff",
  "#9a6324", "#fffac8", "#800000", "#aaffc3", "#808000",
];

export const UNASSIGNED_COLOR = "#333333";
export const UNKNOWN_REGION_COLOR = "#555555";

/**
 * One fixed color per region (by its position in PH_REGIONS), so the region
 * preview and the tooltip always agree — even when the preview is switched off.
 */
export function getRegionColor(region: string | null | undefined): string {
  if (!region) return UNASSIGNED_COLOR;
  const i = PH_REGIONS.indexOf(region);
  return i === -1 ? UNKNOWN_REGION_COLOR : PALETTE[i % PALETTE.length];
}
