import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Partners | Enactus Philippines",
  description: "Meet the organizations that make Enactus Philippines possible.",
};

/* ─── Data ─── */

interface Tier {
  name: string;
  intro: string;
  count: number;
  logo?: { src: string; name: string };
  logos?: { src: string; name: string }[];
}

const tiers: Tier[] = [
  {
    name: "Presenting Sponsor",
    intro: "Our presenting sponsor makes our national events possible.",
    count: 1,
    logo: { src: "/khan-academy-logo.svg", name: "Khan Academy" },
  },
  {
    name: "Data Management Partners",
    intro: "Partners who contribute specialized expertise and resources.",
    count: 1,
    logo: { src: "/kpmg-logo.svg", name: "KPMG" },
  },
  {
    name: "Impact Partners",
    intro:
      "Government agencies and private organizations driving social impact.",
    count: 4,
    logos: [
      { src: "/pacsb-logo.svg", name: "PACSB" },
      { src: "/eneda-logo.svg", name: "ENEDA" },
      { src: "/naseea-logo.svg", name: "NASEEA" },
      { src: "/ja-philippines-logo.png", name: "JA Philippines" },
    ],
  },
  {
    name: "Event Assistance Partner",
    intro: "Organizations providing event support and venue assistance.",
    count: 1,
    logo: { src: "/acent-logo.png", name: "ACeNT" },
  },
  {
    name: "Host Partners",
    intro: "Venue partners who host our national competitions and events.",
    count: 1,
    logo: { src: "/arete-logo.png", name: "Arete" },
  },
];

/* ─── Helpers ─── */

function TierGrid({ tier }: { tier: Tier }) {
  if (tier.logos) {
    return (
      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
        {tier.logos.map((logo) => (
          <div
            key={logo.name}
            className="flex aspect-[3/2] items-center justify-center rounded-xl p-3 transition-all duration-150 ease-out"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={240}
              height={96}
              className="h-28 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    );
  }

  if (tier.logo) {
    return (
      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
        <div className="flex aspect-[3/2] items-center justify-center rounded-xl p-3 transition-all duration-150 ease-out">
          <Image
            src={tier.logo.src}
            alt={tier.logo.name}
            width={240}
            height={96}
            className="h-28 w-auto object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: tier.count }, (_, i) => (
        <div
          key={i}
          className="flex aspect-[3/2] items-center justify-center rounded-xl p-3 transition-all duration-150 ease-out"
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
        subtitle="Meet the organizations that power Enactus Philippines."
      />

      {/* ─── TIER SECTIONS ─── */}
      {tiers.map((tier, idx) => (
        <section
          key={tier.name}
          className={`border-b border-border/60 ${idx % 2 === 1 ? "bg-muted/5" : ""}`}
        >
          <AnimatedSection>
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
              <h2 className="max-w-3xl text-subsection font-semibold">
                {tier.name}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                {tier.intro}
              </p>
              <TierGrid tier={tier} />
            </div>
          </AnimatedSection>
        </section>
      ))}
    </div>
  );
}
