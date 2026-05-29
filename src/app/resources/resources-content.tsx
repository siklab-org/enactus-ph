"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  FileText,
  FileSpreadsheet,
  Presentation,
  FileArchive,
  FileImage,
  File,
  Download,
  ExternalLink,
} from "lucide-react";
import type { Resource } from "@/lib/resources-data";
import {
  CATEGORIES,
  getResourcesByCategory,
  googleDriveViewUrl,
  googleDriveDownloadUrl,
} from "@/lib/resources-data";
import { AnimatedSection } from "@/components/AnimatedSection";

/* ─── File-type icon map ─── */

type FileIconConfig = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  bg: string;
  iconColor: string;
};

const FILE_ICON_MAP: Record<string, FileIconConfig> = {
  pdf: {
    icon: FileText,
    label: "PDF",
    bg: "bg-red-100/20",
    iconColor: "text-red-600/80",
  },
  docx: {
    icon: FileText,
    label: "DOCX",
    bg: "bg-blue-100/20",
    iconColor: "text-blue-600/80",
  },
  xlsx: {
    icon: FileSpreadsheet,
    label: "XLSX",
    bg: "bg-green-100/20",
    iconColor: "text-green-600/80",
  },
  pptx: {
    icon: Presentation,
    label: "PPTX",
    bg: "bg-orange-100/20",
    iconColor: "text-orange-600/80",
  },
  zip: {
    icon: FileArchive,
    label: "ZIP",
    bg: "bg-purple-100/20",
    iconColor: "text-purple-600/80",
  },
  image: {
    icon: FileImage,
    label: "IMG",
    bg: "bg-cyan-100/20",
    iconColor: "text-cyan-600/80",
  },
};

function getFileIconConfig(fileType: string): FileIconConfig {
  return FILE_ICON_MAP[fileType] ?? { icon: File, label: fileType.toUpperCase(), bg: "bg-muted/20", iconColor: "text-muted-foreground" };
}

/* ─── Category badge styles ─── */

const CATEGORY_STYLES: Record<string, string> = {
  "getting-started": "bg-blue-100/20 text-blue-700",
  "team-toolkits": "bg-green-100/20 text-green-700",
  "competitions": "bg-amber-100/20 text-amber-700",
  "impact-reporting": "bg-purple-100/20 text-purple-700",
};

function getCategoryStyle(category: string): string {
  return CATEGORY_STYLES[category] ?? "bg-muted/20 text-muted-foreground";
}

const CATEGORY_LABELS: Record<string, string> = {
  "getting-started": "Getting Started",
  "team-toolkits": "Team Toolkits",
  "competitions": "Competitions",
  "impact-reporting": "Impact & Reporting",
};

/* ─── Filter Pill ─── */

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-full px-5 py-2 text-sm font-medium tracking-tight transition-all duration-200 ${
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "border border-border/60 bg-background text-muted-foreground hover:border-primary/30 hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}

/* ─── Resource Row ─── */

function ResourceRow({ resource }: { resource: Resource }) {
  const fileIcon = getFileIconConfig(resource.fileType);
  const IconComponent = fileIcon.icon;

  return (
    <div className="group flex items-start gap-5 border-b border-border/60 py-6 transition-colors duration-200 hover:bg-muted/10 md:items-center">
      {/* Icon box */}
      <div
        className={`flex size-12 shrink-0 items-center justify-center rounded-lg ${fileIcon.bg}`}
      >
        <IconComponent className={`size-6 ${fileIcon.iconColor}`} />
      </div>

      {/* Metadata */}
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-semibold leading-snug tracking-tight">
          {resource.title}
        </h3>
        <p className="mt-0.5 line-clamp-1 text-sm text-muted-foreground">
          {resource.subtitle}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
          <span
            className={`inline-block rounded-full px-2.5 py-0.5 font-medium ${getCategoryStyle(resource.category)}`}
          >
            {CATEGORY_LABELS[resource.category] ?? resource.category}
          </span>
          <span className="text-muted-foreground/60">{resource.fileSize}</span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/40">
            {fileIcon.label}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex shrink-0 flex-col gap-2">
        <a
          href={googleDriveDownloadUrl(resource.googleDriveId)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90"
        >
          <Download className="size-4" />
          Download
        </a>
        <a
          href={googleDriveViewUrl(resource.googleDriveId)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:text-foreground"
        >
          <ExternalLink className="size-4" />
          View in Drive
        </a>
      </div>
    </div>
  );
}

/* ─── Empty State ─── */

function EmptyState() {
  return (
    <div className="py-20 text-center">
      <File className="mx-auto size-10 text-muted-foreground/40" />
      <p className="mt-4 text-base text-muted-foreground">
        No resources in this category yet.
      </p>
      <p className="mt-1 text-sm text-muted-foreground/60">
        Check back soon or browse another category.
      </p>
    </div>
  );
}

/* ─── Main Content (Client) ─── */

export function ResourcesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeCategory = searchParams.get("category") || "all";
  const resources = getResourcesByCategory(activeCategory);

  function setCategory(key: string) {
    const params = new URLSearchParams(searchParams);
    if (key === "all") {
      params.delete("category");
    } else {
      params.set("category", key);
    }
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <AnimatedSection>
      <section className="mx-auto w-full max-w-7xl px-6 pb-24 pt-16">
        {/* Filter bar */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {CATEGORIES.map((cat) => (
            <FilterPill
              key={cat.key}
              label={cat.label}
              active={activeCategory === cat.key}
              onClick={() => setCategory(cat.key)}
            />
          ))}
        </div>

        {/* Resource list */}
        <div className="mt-10" role="list" aria-label="Resources">
          {resources.length > 0 ? (
            resources.map((resource) => (
              <ResourceRow key={resource.id} resource={resource} />
            ))
          ) : (
            <EmptyState />
          )}
        </div>
      </section>
    </AnimatedSection>
  );
}
