import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Partners | Enactus Philippines",
  description:
    "Meet the organizations that make Enactus Philippines possible — from presenting sponsors to university, host, and travel partners.",
};

/* ─── Data ─── */

interface Tier {
  name: string;
  intro: string;
  count: number;
}

const tiers: Tier[] = [
  {
    name: "Presenting Sponsor",
    intro: "Our presenting sponsor makes our national events possible.",
    count: 1,
  },
  {
    name: "Innovation Partners",
    intro:
      "Partners who contribute expertise and resources outside formal tiers.",
    count: 3,
  },
  {
    name: "Impact Partners",
    intro:
      "Government agencies and private organizations driving social impact.",
    count: 4,
  },
  {
    name: "University Partners",
    intro: "Academic institutions that partner with Enactus Philippines.",
    count: 6,
  },
  {
    name: "Host Partners",
    intro:
      "Venue partners who host our national competitions and events.",
    count: 3,
  },
  {
    name: "Travel Partners",
    intro: "Travel and logistics partners supporting our teams.",
    count: 2,
  },
];

/* ─── Helpers ─── */

function PlaceholderGrid({ count }: { count: number }) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="flex aspect-[3/2] items-center justify-center rounded-xl border border-border/60 bg-muted/20 p-6 transition-all duration-150 ease-out hover:border-border"
        >
          <span className="text-center font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground/50">
            Placeholder
          </span>
        </div>
      ))}
    </div>
  );
}

/* ─── Page ─── */

export default function Partners() {
  return (
    <div className="min-h-screen bg-background">
      {/* ─── HERO ─── */}
      <PageHero
        eyebrow="Partners"
        title={
          <>
            Our
            <br />
            <span className="text-foreground/40">Partners.</span>
          </>
        }
        subtitle="The organizations that power Enactus Philippines — from sponsors and government agencies to universities and venues."
      />

      {/* ─── TIER SECTIONS ─── */}
      {tiers.map((tier, idx) => (
        <section
          key={tier.name}
          className={`border-b border-border/60 ${idx % 2 === 1 ? "bg-muted/5" : ""}`}
        >
          <AnimatedSection>
            <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-24">
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
                {tier.name}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                {tier.intro}
              </p>
              <PlaceholderGrid count={tier.count} />
            </div>
          </AnimatedSection>
        </section>
      ))}
    </div>
  );
}
