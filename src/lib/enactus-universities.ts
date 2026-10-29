export type IslandGroup = "luzon" | "visayas" | "mindanao";

export const islandGroups: IslandGroup[] = ["luzon", "visayas", "mindanao"];

export const islandGroupLabels: Record<IslandGroup, string> = {
  luzon: "Luzon",
  visayas: "Visayas",
  mindanao: "Mindanao",
};

export const mapViewBox = {
  x: 0,
  y: 0,
  width: 1429,
  height: 2465,
} as const;

const mapGeographicBounds = {
  west: 116.9,
  east: 126.6,
  south: 4.6,
  north: 21.1,
} as const;

type CampusCoordinates = {
  latitude: number;
  longitude: number;
};

export type EnactusUniversityLocation = {
  id: string;
  name: string;
  cityProvince: string;
  islandGroup: IslandGroup;
  coordinates: CampusCoordinates;
  mapCoordinates: { x: number; y: number };
  participationEvidence: string;
};

const participatingCampuses: Omit<EnactusUniversityLocation, "mapCoordinates">[] = [
  {
    id: "mariano-marcos-state-university",
    name: "Mariano Marcos State University — Batac Campus",
    cityProvince: "Batac City, Ilocos Norte",
    islandGroup: "luzon",
    coordinates: { latitude: 18.056, longitude: 120.565 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "tarlac-state-university",
    name: "Tarlac State University — Main Campus",
    cityProvince: "Tarlac City, Tarlac",
    islandGroup: "luzon",
    coordinates: { latitude: 15.486, longitude: 120.596 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "university-of-santo-tomas-manila",
    name: "University of Santo Tomas — Manila",
    cityProvince: "Manila, Metro Manila",
    islandGroup: "luzon",
    coordinates: { latitude: 14.6091, longitude: 120.9897 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "camarines-sur-polytechnic-colleges",
    name: "Camarines Sur Polytechnic Colleges — Main Campus",
    cityProvince: "Naga City, Camarines Sur",
    islandGroup: "luzon",
    coordinates: { latitude: 13.6218, longitude: 123.1948 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "universidad-de-dagupan",
    name: "Universidad de Dagupan",
    cityProvince: "Dagupan City, Pangasinan",
    islandGroup: "luzon",
    coordinates: { latitude: 16.043, longitude: 120.333 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "don-mariano-marcos-memorial-state-university",
    name: "Don Mariano Marcos Memorial State University — South La Union Campus",
    cityProvince: "Agoo, La Union",
    islandGroup: "luzon",
    coordinates: { latitude: 16.322, longitude: 120.365 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "asian-institute-of-management",
    name: "Asian Institute of Management",
    cityProvince: "Makati City, Metro Manila",
    islandGroup: "luzon",
    coordinates: { latitude: 14.5547, longitude: 121.0165 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "mapua-university-intramuros",
    name: "Mapúa University — Intramuros Campus",
    cityProvince: "Manila, Metro Manila",
    islandGroup: "luzon",
    coordinates: { latitude: 14.5896, longitude: 120.9757 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "angeles-university-foundation",
    name: "Angeles University Foundation — Main Campus",
    cityProvince: "Angeles City, Pampanga",
    islandGroup: "luzon",
    coordinates: { latitude: 15.145, longitude: 120.593 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "de-la-salle-college-of-saint-benilde-antipolo",
    name: "De La Salle — College of Saint Benilde — Antipolo",
    cityProvince: "Antipolo City, Rizal",
    islandGroup: "luzon",
    coordinates: { latitude: 14.588, longitude: 121.176 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "quezon-city-university-san-bartolome",
    name: "Quezon City University — San Bartolome Campus",
    cityProvince: "Quezon City, Metro Manila",
    islandGroup: "luzon",
    coordinates: { latitude: 14.738, longitude: 121.049 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "bulacan-state-university",
    name: "Bulacan State University — Main Campus",
    cityProvince: "Malolos City, Bulacan",
    islandGroup: "luzon",
    coordinates: { latitude: 14.852, longitude: 120.816 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "naga-college-foundation",
    name: "Naga College Foundation Inc.",
    cityProvince: "Naga City, Camarines Sur",
    islandGroup: "luzon",
    coordinates: { latitude: 13.626, longitude: 123.185 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "iloilo-science-and-technology-university",
    name: "Iloilo Science and Technology University — Iloilo City Campus",
    cityProvince: "Iloilo City, Iloilo",
    islandGroup: "visayas",
    coordinates: { latitude: 10.708, longitude: 122.571 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "state-university-of-northern-negros",
    name: "State University of Northern Negros — Main Campus",
    cityProvince: "Sagay City, Negros Occidental",
    islandGroup: "visayas",
    coordinates: { latitude: 10.876, longitude: 123.408 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "capiz-state-university-dayao",
    name: "Capiz State University — Dayao Campus",
    cityProvince: "Roxas City, Capiz",
    islandGroup: "visayas",
    coordinates: { latitude: 11.585, longitude: 122.753 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "aklan-state-university-kalibo",
    name: "Aklan State University — Kalibo Campus",
    cityProvince: "Kalibo, Aklan",
    islandGroup: "visayas",
    coordinates: { latitude: 11.709, longitude: 122.365 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "iloilo-state-university-of-fisheries-science-and-technology",
    name: "Iloilo State University of Fisheries Science and Technology — Dingle Campus",
    cityProvince: "Dingle, Iloilo",
    islandGroup: "visayas",
    coordinates: { latitude: 11.001, longitude: 122.669 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "university-of-san-agustin",
    name: "University of San Agustin",
    cityProvince: "Iloilo City, Iloilo",
    islandGroup: "visayas",
    coordinates: { latitude: 10.697, longitude: 122.565 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "west-visayas-state-university",
    name: "West Visayas State University — Main Campus",
    cityProvince: "Iloilo City, Iloilo",
    islandGroup: "visayas",
    coordinates: { latitude: 10.712, longitude: 122.562 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "university-of-san-carlos",
    name: "University of San Carlos — Downtown Campus",
    cityProvince: "Cebu City, Cebu",
    islandGroup: "visayas",
    coordinates: { latitude: 10.295, longitude: 123.899 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "central-mindanao-university",
    name: "Central Mindanao University — Main Campus",
    cityProvince: "Musuan, Maramag, Bukidnon",
    islandGroup: "mindanao",
    coordinates: { latitude: 7.884, longitude: 125.058 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "university-of-the-philippines-cebu",
    name: "University of the Philippines — Cebu",
    cityProvince: "Cebu City, Cebu",
    islandGroup: "visayas",
    coordinates: { latitude: 10.329, longitude: 123.906 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "university-of-the-philippines-tacloban",
    name: "University of the Philippines — Tacloban",
    cityProvince: "Tacloban City, Leyte",
    islandGroup: "visayas",
    coordinates: { latitude: 11.24, longitude: 125.0 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "holy-trinity-college-general-santos",
    name: "Holy Trinity College of General Santos City",
    cityProvince: "General Santos City, South Cotabato",
    islandGroup: "mindanao",
    coordinates: { latitude: 6.115, longitude: 125.166 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "university-of-southern-mindanao-kabacan",
    name: "University of Southern Mindanao — Kabacan Campus",
    cityProvince: "Kabacan, Cotabato",
    islandGroup: "mindanao",
    coordinates: { latitude: 7.116, longitude: 124.83 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "university-of-the-philippines-mindanao",
    name: "University of the Philippines — Mindanao",
    cityProvince: "Davao City, Davao del Sur",
    islandGroup: "mindanao",
    coordinates: { latitude: 7.19, longitude: 125.46 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "university-of-mindanao",
    name: "University of Mindanao — Main Campus",
    cityProvince: "Davao City, Davao del Sur",
    islandGroup: "mindanao",
    coordinates: { latitude: 7.066, longitude: 125.596 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "ateneo-de-davao-university",
    name: "Ateneo de Davao University",
    cityProvince: "Davao City, Davao del Sur",
    islandGroup: "mindanao",
    coordinates: { latitude: 7.0731, longitude: 125.6128 },
    participationEvidence: "2026 National Competition Top 30",
  },
  {
    id: "university-of-santo-tomas-general-santos",
    name: "University of Santo Tomas — General Santos",
    cityProvince: "General Santos City, South Cotabato",
    islandGroup: "mindanao",
    coordinates: { latitude: 6.112, longitude: 125.172 },
    participationEvidence: "2026 National Competition Top 30",
  },
];

export const enactusUniversityLocations: EnactusUniversityLocation[] =
  participatingCampuses.map((campus) => ({
    ...campus,
    mapCoordinates: {
      x:
        ((campus.coordinates.longitude - mapGeographicBounds.west) /
          (mapGeographicBounds.east - mapGeographicBounds.west)) *
        mapViewBox.width,
      y:
        ((mapGeographicBounds.north - campus.coordinates.latitude) /
          (mapGeographicBounds.north - mapGeographicBounds.south)) *
        mapViewBox.height,
    },
  }));
