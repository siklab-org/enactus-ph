import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "2026 Faculty Fellows | Enactus Philippines",
  description:
    "Meet the inaugural cohort of the Enactus Philippines Faculty Fellows Program 2026.",
};

export default function FacultyFellows2026() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="Faculty Development"
        title={
          <>
            2026 Faculty
            <br />
            <span className="text-foreground/40">Fellows</span>
          </>
        }
        subtitle="Meet the inaugural cohort of the Enactus Philippines Faculty Fellows Program"
      />

      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Google Drive
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Fellow Bionotes & Photos
              </h2>
              <p className="mt-4 text-body leading-relaxed text-muted-foreground">
                Access the complete directory of 2026 Faculty Fellows, including
                their bionotes and profile images.
              </p>
              <div className="mt-10 flex justify-center">
                <a
                  href="https://drive.google.com/drive/folders/1q5E_Jrb8ebT0WfhQq7PqIO9DNVB1ZWN8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-14 items-center gap-3 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                >
                  View Fellows on Google Drive
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
