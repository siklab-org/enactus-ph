/* ─── Types ─── */

export type ResourceCategory =
  | "getting-started"
  | "team-toolkits"
  | "competitions"
  | "impact-reporting";

export interface Resource {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fileType: "pdf" | "docx" | "xlsx" | "pptx" | "zip" | "image";
  fileSize: string;
  category: ResourceCategory;
  localPath: string;
  googleDriveId?: string;
}

/* ─── Categories ─── */

export interface CategoryDef {
  key: ResourceCategory | "all";
  label: string;
}

export const CATEGORIES: CategoryDef[] = [
  { key: "all", label: "All" },
  { key: "getting-started", label: "Getting Started" },
  { key: "team-toolkits", label: "Team Toolkits" },
  { key: "competitions", label: "Competitions" },
  { key: "impact-reporting", label: "Impact & Reporting" },
];

/* ─── Data ─── */

const resources: Resource[] = [
  {
    id: "welcome-to-enactus",
    title: "Welcome to Enactus, Your Impact Journey",
    subtitle: "An Enactus Overview",
    description:
      "A comprehensive introduction to Enactus — the global mission, how the Philippine chapter operates, and what you can expect as a member.",
    fileType: "pdf",
    fileSize: "TBD",
    category: "getting-started",
    localPath: "/resources/welcome-to-enactus.pdf",
    googleDriveId: "1WntEXUKE2qeXvfzugcpjcTqQrlDAx2Fd",
  },
  {
    id: "building-an-enactus-team",
    title: "Building an Enactus Team",
    subtitle: "Team Structure, Leadership, & Culture",
    description:
      "Guidance on recruiting, structuring, and leading a strong Enactus team, including best practices for team culture and governance.",
    fileType: "pdf",
    fileSize: "TBD",
    category: "team-toolkits",
    localPath: "/resources/building-an-enactus-team.pdf",
    googleDriveId: "1JGqezq3UsBpSOQi8fuFA26-x3DU8V0ng",
  },
  {
    id: "project-development-and-criterion",
    title: "Project Development & The Enactus Criterion",
    subtitle: "Everything About Developing Your Project",
    description:
      "A deep dive into the Enactus Criterion framework and how to apply it at every stage of your project's lifecycle.",
    fileType: "pdf",
    fileSize: "TBD",
    category: "competitions",
    localPath: "/resources/project-development-and-criterion.pdf",
    googleDriveId: "1joFgLyLeUczZnzs6DpAi4R8xnL-2V7-4",
  },
  {
    id: "measuring-impact",
    title: "Measuring Impact",
    subtitle: "Data, Storytelling & Reporting",
    description:
      "Learn how to track, quantify, and communicate your project's impact through data collection, narrative building, and structured reporting.",
    fileType: "pdf",
    fileSize: "TBD",
    category: "impact-reporting",
    localPath: "/resources/measuring-impact.pdf",
    googleDriveId: "1ReTJaqYKui8fo8qzuBMQ0ImUmJtnvakv",
  },
  {
    id: "preparing-for-competitions",
    title: "Preparing For Competitions",
    subtitle: "Nationals & World Cup",
    description:
      "A complete guide to turning your project journey into a clear, credible competition story — from presentation prep to judging criteria.",
    fileType: "pdf",
    fileSize: "TBD",
    category: "competitions",
    localPath: "/resources/preparing-for-competitions.pdf",
    googleDriveId: "1vpdi9GGVf5JeadrmuyZN7Sig_Btdwl7W",
  },
  {
    id: "faculty-advisor-guide",
    title: "Faculty Advisor Best Practice Guide",
    subtitle: "How to Best Support Your Enactus Team",
    description:
      "Best practices for faculty advisors on mentoring, navigating university systems, and maximizing team potential.",
    fileType: "pdf",
    fileSize: "TBD",
    category: "team-toolkits",
    localPath: "/resources/faculty-advisor-guide.pdf",
    googleDriveId: "1y5M-F2Tp2Pg_4R8ZhNmvAOX_92c7WynI",
  },
];

/* ─── Helpers ─── */

export function getResourcesByCategory(category?: string): Resource[] {
  if (!category || category === "all") return resources;
  return resources.filter((r) => r.category === category);
}

export function getResource(id: string): Resource | undefined {
  return resources.find((r) => r.id === id);
}

export function googleDriveViewUrl(id: string): string {
  return `https://drive.google.com/file/d/${id}/view`;
}

export function googleDriveDownloadUrl(id: string): string {
  return `https://drive.google.com/uc?export=download&id=${id}`;
}
