import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatsCounter } from "@/components/StatsCounter";

export const metadata: Metadata = {
  title: "About Enactus",
  description:
    "Enactus is a global social innovation and entrepreneurial education network — Enactus Philippines is its Philippine chapter.",
};

/* ─── Data ─── */

const stats = [
  { value: "30,000+", label: "Filipino students engaged" },
  { value: "300+", label: "Universities engaged" },
  { value: "ONE", label: "Team qualified until Global Semi-Finals in 2018" },
];

const partners = Array.from({ length: 8 }, (_, i) => ({
  name: `Partner ${i + 1}`,
  src: null as string | null,
}));

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* ─── HERO ─── */}
      <PageHero
        eyebrow="Who we are"
        title={
          <>
            Enactus is a global movement.
            <br />
            <span className="text-foreground/40">
              The Philippines is our home.
            </span>
          </>
        }
        subtitle="The world needs more impact-focused, highly-skilled, globally-informed leaders to solve our most pressing problems. Enactus prepares the next generation of leaders we need now."
      />

      {/* ─── ABOUT ENACTUS ─── */}
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-6 py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono font-bold text-xl uppercase tracking-[0.25em] text-muted-foreground">
                About Enactus
              </div>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                Enactus is a global social innovation and entrepreneurial
                education network that empowers students to use business and
                innovation to create social impact. For over 20 years, Enactus
                Philippines has served as the premier platform for Filipino
                students to ideate, incubate, and pitch innovative
                entrepreneurial solutions to solve the most pressing issues in
                their communities.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── STATS ─── */}
      <section className="border-b border-border/60 bg-secondary text-secondary-foreground">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((s) => (
            <StatsCounter
              key={s.label}
              value={s.value}
              label={s.label}
              className="px-6 py-14 text-center"
            />
          ))}
        </div>
      </section>

      {/* ─── PARTNERS ─── */}
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-6 py-24">
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
              Powered by our partners.
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 xl:grid-cols-6">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex aspect-[3/2] items-center justify-center rounded-xl border border-border/60 bg-muted/20 p-6 transition-all duration-150 ease-out hover:border-border"
                >
                  <span className="text-center font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground/50">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
