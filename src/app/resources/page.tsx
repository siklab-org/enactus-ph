import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { ResourcesContent } from "./resources-content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Toolkits, guides and templates for Enactus Philippines campus teams and founders.",
};

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      {/* ─── HERO ─── */}
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Resources &amp;
            <br />
            <span className="text-foreground/40">Toolkits.</span>
          </>
        }
        subtitle="Handbooks, guides, and templates to help you build, lead, and compete with your Enactus team."
      />

      {/* ─── FILTERABLE LIST ─── */}
      <Suspense
        fallback={
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="text-muted-foreground">Loading resources…</p>
          </div>
        }
      >
        <ResourcesContent />
      </Suspense>
    </div>
  );
}
