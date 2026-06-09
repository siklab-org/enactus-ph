export type NewsCategory = "all" | "announcements" | "partnerships" | "events";

export interface NewsAuthor {
  name: string;
  avatar: string;
  role: string;
}

export interface NewsPost {
  slug: string;
  title: string;
  body: string;
  excerpt: string;
  category: NewsCategory;
  imageUrl?: string;
  imageAlt?: string;
  publishedAt: string; // ISO 8601
}

export const AUTHOR: NewsAuthor = {
  name: "Enactus PH",
  avatar: "/enactus.webp",
  role: "Enactus Philippines",
};

export const CATEGORIES: { key: NewsCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "announcements", label: "Announcements" },
  { key: "partnerships", label: "Partnerships" },
  { key: "events", label: "Events" },
];

export const PLACEHOLDER = "placeholder";

const posts: NewsPost[] = [
  {
    slug: "enactus-philippines-2026-relaunch",
    title:
      "Enactus Philippines to Relaunch in 2026, Ateneo\u2019s Aret\u00e9 Chosen as Launchpad",
    body: "QUEZON CITY, Philippines \u2014 Enactus Philippines is set to officially relaunch in 2026, signaling the return of one of the country\u2019s most prominent university-based platforms for entrepreneurship, innovation, leadership, and social impact.\n\nThe official relaunch event is scheduled on July 3, 2026 at Aret\u00e9, the creativity and innovation hub of Ateneo de Manila University, and is expected to gather distinguished representatives from the government, private sector, academe, development organizations, alumni networks, and student communities from across the country.\n\nOperating in 36 countries worldwide, Enactus is a global organization that empowers university students to use entrepreneurship and innovation to create sustainable solutions to pressing social, economic, and environmental challenges. For more than two decades, Enactus Philippines served as a premier national platform for student-led innovation and community impact, engaging thousands of Filipino students and hundreds of universities across the country.\n\nThe 2026 relaunch marks the beginning of a renewed national movement aimed at rebuilding and expanding the Enactus ecosystem throughout the Philippines. Beyond the return of the national competition, the organization is positioning itself as a long-term platform for youth leadership development, startup incubation, social innovation, and cross-sector collaboration.\n\nAccording to Enactus Philippines, the choice of Aret\u00e9 as the official venue carries strong symbolic and strategic significance. Widely recognized as Ateneo de Manila University\u2019s premier center for creativity, interdisciplinary collaboration, innovation, and cultural exchange, Aret\u00e9 embodies many of the same principles that define the Enactus movement globally.\n\n\u201cEnactus has always stood at the intersection of innovation, entrepreneurship, and purposeful leadership,\u201d said Kristoni G. Go, Country Director and Chief Operating Officer of Enactus Philippines. \u201cWe believe that Aret\u00e9 represents the kind of environment where creativity, excellence, collaboration, and transformative ideas thrive \u2014 values that strongly resonate with what Enactus seeks to cultivate among Filipino students and future leaders.\u201d\n\nThe relaunch event will feature:\n- Keynote addresses\n- Institutional partnership presentations\n- Networking engagements\n- Discussions focused on innovation, entrepreneurship, sustainability, education, and youth empowerment\n\nThe event is expected to serve as the formal launchpad for the organization\u2019s nationwide operational roadmap for 2026, which includes:\n- Regional events\n- University onboarding initiatives\n- Mentoring and capacity-building activities\n- The National Competition and Innovation Festival later in the year\n\nDignitaries and representatives from various sectors are expected to attend, including government officials, corporate executives, university presidents and administrators, faculty advisers, alumni leaders, development partners, and student innovators from across the Philippines.\n\nThe organization is likewise strengthening partnerships with universities, academic associations, private corporations, and institutional partners in line with its long-term vision of establishing one of the country\u2019s largest university innovation and entrepreneurship ecosystems. Enactus Philippines hopes to significantly expand its reach in the coming years and position the country as one of the leading Enactus centers in Asia.\n\nAs the country prepares for the relaunch, Enactus Philippines expressed optimism that the initiative will help inspire a new generation of Filipino changemakers who will use innovation, business, and collaboration to create meaningful and sustainable impact in their communities.",
    excerpt:
      "Enactus Philippines is set to officially relaunch in 2026 at Ateneo de Manila University\u2019s Aret\u00e9, signaling the return of one of the country\u2019s most prominent platforms for student entrepreneurship and social impact.",
    category: "announcements",
    imageUrl: undefined,
    imageAlt: undefined,
    publishedAt: "2026-06-01T08:00:00Z",
  },
];

export function getNewsPosts(category?: NewsCategory): NewsPost[] {
  const filtered =
    !category || category === "all"
      ? posts
      : posts.filter((p) => p.category === category);
  return [...filtered].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getNewsPost(slug: string): NewsPost | undefined {
  return posts.find((p) => p.slug === slug);
}
