import { PH_REGIONS } from "./types.js";

// Index into PH_REGIONS by short label, so this table can't drift out of sync
// with the dropdown's exact option strings.
const [
  NCR, CAR, R1, R2, R3, R4A, MIMAROPA, R5, R6, R7, R8, R9, R10, R11, R12, R13, BARMM,
] = PH_REGIONS;

/** Province (and common Metro Manila city) name -> full region label, lowercase keys. */
export const PROVINCE_REGION_MAP: Record<string, string> = {
  // Region I - Ilocos Region
  "ilocos norte": R1, "ilocos sur": R1, "la union": R1, "pangasinan": R1,

  // Region II - Cagayan Valley
  "batanes": R2, "cagayan": R2, "isabela": R2, "nueva vizcaya": R2, "quirino": R2,

  // CAR - Cordillera Administrative Region
  "abra": CAR, "apayao": CAR, "benguet": CAR, "ifugao": CAR,
  "kalinga": CAR, "mountain province": CAR,

  // Region III - Central Luzon
  "aurora": R3, "bataan": R3, "bulacan": R3, "nueva ecija": R3,
  "pampanga": R3, "tarlac": R3, "zambales": R3,

  // NCR - National Capital Region (common city names)
  "manila": NCR, "quezon city": NCR, "makati": NCR, "pasig": NCR, "taguig": NCR,
  "caloocan": NCR, "pasay": NCR, "mandaluyong": NCR, "marikina": NCR,
  "muntinlupa": NCR, "paranaque": NCR, "parañaque": NCR, "las pinas": NCR,
  "las piñas": NCR, "valenzuela": NCR, "malabon": NCR, "navotas": NCR,
  "san juan": NCR, "pateros": NCR, "metro manila": NCR, "ncr": NCR,

  // Region IV-A - CALABARZON
  "batangas": R4A, "cavite": R4A, "laguna": R4A, "quezon": R4A, "rizal": R4A,

  // MIMAROPA
  "marinduque": MIMAROPA, "occidental mindoro": MIMAROPA, "mindoro occidental": MIMAROPA,
  "oriental mindoro": MIMAROPA, "mindoro oriental": MIMAROPA,
  "palawan": MIMAROPA, "romblon": MIMAROPA,

  // Region V - Bicol Region
  "albay": R5, "camarines norte": R5, "camarines sur": R5,
  "catanduanes": R5, "masbate": R5, "sorsogon": R5,

  // Region VI - Western Visayas
  "aklan": R6, "antique": R6, "capiz": R6, "guimaras": R6,
  "iloilo": R6, "negros occidental": R6,

  // Region VII - Central Visayas
  "bohol": R7, "cebu": R7, "negros oriental": R7, "siquijor": R7,

  // Region VIII - Eastern Visayas
  "biliran": R8, "eastern samar": R8, "leyte": R8, "northern samar": R8,
  "samar": R8, "western samar": R8, "southern leyte": R8,

  // Region IX - Zamboanga Peninsula
  "zamboanga del norte": R9, "zamboanga del sur": R9, "zamboanga sibugay": R9,

  // Region X - Northern Mindanao
  "bukidnon": R10, "camiguin": R10, "lanao del norte": R10,
  "misamis occidental": R10, "misamis oriental": R10,

  // Region XI - Davao Region
  "davao de oro": R11, "compostela valley": R11, "davao del norte": R11,
  "davao del sur": R11, "davao occidental": R11, "davao oriental": R11,

  // Region XII - SOCCSKSARGEN
  "cotabato": R12, "north cotabato": R12, "sarangani": R12,
  "south cotabato": R12, "sultan kudarat": R12,

  // Region XIII - Caraga
  "agusan del norte": R13, "agusan del sur": R13, "dinagat islands": R13,
  "surigao del norte": R13, "surigao del sur": R13,

  // BARMM
  "basilan": BARMM, "lanao del sur": BARMM, "maguindanao": BARMM,
  "maguindanao del norte": BARMM, "maguindanao del sur": BARMM,
  "sulu": BARMM, "tawi-tawi": BARMM, "tawi tawi": BARMM,
};

/** All known province/city names, for the editor's autocomplete datalist. */
export const PROVINCE_NAMES: string[] = Object.keys(PROVINCE_REGION_MAP)
  .filter((k) => k !== "ncr" && k !== "metro manila") // skip the two non-title-case aliases
  .map((k) => k.replace(/\b\w/g, (c) => c.toUpperCase()))
  .sort();

/** Normalizes a typed province name and looks up its region, or undefined if unrecognized. */
export function lookupRegionForProvince(typed: string): string | undefined {
  const key = typed.trim().toLowerCase();
  if (!key) return undefined;
  return PROVINCE_REGION_MAP[key];
}
