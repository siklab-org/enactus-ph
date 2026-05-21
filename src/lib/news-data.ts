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
  avatar: "/enactus-logo.svg",
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
    slug: "partnership-with-tech-startup",
    title: "Enactus PH Signs Landmark Partnership with TechStartup PH",
    body: "We are proud to announce a strategic partnership with TechStartup PH, an organization dedicated to nurturing tech entrepreneurship across the Philippines.\n\nThis partnership will provide Enactus teams with access to mentorship, funding opportunities, and technical resources to scale their ventures. Together, we aim to accelerate the impact of student-led social enterprises in underserved communities.\n\nKey initiatives under this partnership include:\n- Quarterly hackathons focused on social impact\n- Mentorship matching between TechStartup PH network and Enactus teams\n- Joint research on technology adoption in rural communities\n\nWe look forward to building a lasting collaboration that empowers the next generation of Filipino innovators.",
    excerpt: "A new strategic partnership to empower student-led social enterprises with mentorship and technical resources.",
    category: "partnerships",
    imageUrl: undefined,
    imageAlt: undefined,
    publishedAt: "2026-05-20T08:00:00Z",
  },
  {
    slug: "national-competition-2026-winners",
    title: "National Competition 2026: Celebrating This Year's Champions",
    body: "The Enactus Philippines National Competition 2026 brought together the brightest student entrepreneurs from 32 partner universities across the country.\n\nThis year's theme, 'Innovation for Resilience,' challenged teams to develop solutions addressing climate adaptation, food security, and digital inclusion. After three days of intense presentations and judging, we are thrilled to celebrate all participants who demonstrated exceptional creativity and dedication.\n\nThe winning team, from the University of the Philippines, presented a circular plastics venture that has already diverted 12 tons of waste from landfills while creating livelihood opportunities for waste workers.\n\nCongratulations to all finalists and thank you to our judges, sponsors, and volunteers who made this event possible.",
    excerpt: "32 universities, countless innovations — relive the highlights of this year's national competition.",
    category: "events",
    imageUrl: PLACEHOLDER,
    imageAlt: "National Competition 2026 event photo",
    publishedAt: "2026-05-15T10:30:00Z",
  },
  {
    slug: "community-impact-report-2026",
    title: "Q1 2026 Community Impact Report",
    body: "The first quarter of 2026 has been our most impactful yet. Here are the key numbers:\n\n- 12 new ventures launched across 8 partner universities\n- 3,200+ community members reached through Enactus projects\n- 45 partner organizations actively supporting our teams\n- 8,000+ volunteer hours logged by student members\n\nHighlights this quarter include the launch of a solar-powered irrigation project in Nueva Ecija, a digital literacy program for out-of-school youth in Quezon City, and a sustainable aquaculture venture in Iloilo.\n\nWe remain committed to tracking outcomes, not just outputs. Every project reports against the UN Sustainable Development Goals, ensuring our work contributes to global development priorities.\n\nRead the full report to learn more about the communities we serve and the students leading the charge.",
    excerpt: "12 new ventures, 3,200+ community members reached — our most impactful quarter yet.",
    category: "announcements",
    imageUrl: undefined,
    imageAlt: undefined,
    publishedAt: "2026-04-28T06:00:00Z",
  },
  {
    slug: "welcome-new-executive-director",
    title: "Welcome to Our New Executive Director",
    body: "Enactus Philippines is pleased to welcome Maria Santos as our new Executive Director. Maria brings over 15 years of experience in social enterprise development and education.\n\nPreviously, Maria served as Program Director at the Philippine Social Enterprise Network, where she led capacity-building programs for over 200 social enterprises. She holds a Master's in Development Management from the Asian Institute of Management.\n\n\"I am honored to join Enactus Philippines at such an exciting time,\" said Maria. \"The energy and creativity of Filipino students are unparalleled, and I look forward to supporting them in building ventures that create lasting change.\"\n\nMaria succeeds Carlos Reyes, who served as Executive Director for five years and will remain an advisor to the organization.",
    excerpt: "New leadership to guide Enactus Philippines into its next chapter of growth and impact.",
    category: "announcements",
    imageUrl: undefined,
    imageAlt: undefined,
    publishedAt: "2026-04-10T09:00:00Z",
  },
  {
    slug: "regional-summit-2026-announcement",
    title: "Save the Date: Luzon Regional Summit 2026",
    body: "We are excited to announce the Luzon Regional Summit 2026, happening on June 15–16 at the University of Santo Tomas.\n\nThis two-day event will bring together Enactus teams from across Luzon for workshops, networking, and project showcases. Attendees will have the opportunity to learn from industry leaders, connect with fellow changemakers, and gain insights on scaling their ventures.\n\nAgenda highlights:\n- Day 1: Keynote sessions, breakout workshops on fundraising and impact measurement, networking dinner\n- Day 2: Project showcase, feedback clinics with mentors, and closing ceremony\n\nRegistration opens on May 1. Space is limited to 200 participants, so early registration is encouraged.\n\nStay tuned for the registration link and speaker announcements.",
    excerpt: "Join us on June 15–16 at UST for two days of workshops, networking, and project showcases.",
    category: "events",
    imageUrl: undefined,
    imageAlt: undefined,
    publishedAt: "2026-04-01T12:00:00Z",
  },
];

export function getNewsPosts(category?: NewsCategory): NewsPost[] {
  const filtered = !category || category === "all" ? posts : posts.filter((p) => p.category === category);
  return [...filtered].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getNewsPost(slug: string): NewsPost | undefined {
  return posts.find((p) => p.slug === slug);
}
