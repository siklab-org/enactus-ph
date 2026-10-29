export type IslandGroup = "luzon" | "visayas" | "mindanao";

export interface ProvinceUpdate {
  id: string;
  province: string;
  region: string;
}

/** The 17 current PH administrative regions, for the editor's Region dropdown. */
export const PH_REGIONS: string[] = [
  "NCR – National Capital Region",
  "CAR – Cordillera Administrative Region",
  "Region I – Ilocos Region",
  "Region II – Cagayan Valley",
  "Region III – Central Luzon",
  "Region IV-A – CALABARZON",
  "MIMAROPA Region",
  "Region V – Bicol Region",
  "Region VI – Western Visayas",
  "Region VII – Central Visayas",
  "Region VIII – Eastern Visayas",
  "Region IX – Zamboanga Peninsula",
  "Region X – Northern Mindanao",
  "Region XI – Davao Region",
  "Region XII – SOCCSKSARGEN",
  "Region XIII – Caraga",
  "BARMM – Bangsamoro Autonomous Region in Muslim Mindanao",
];

export const ISLAND_LABELS: Record<IslandGroup, string> = {
  luzon: "Luzon",
  visayas: "Visayas",
  mindanao: "Mindanao",
};
