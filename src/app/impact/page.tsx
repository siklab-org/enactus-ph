import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatsCounter } from "@/components/StatsCounter";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Numbers, stories and SDGs: the measurable impact of Enactus Philippines campus teams.",
};

const numbers = [
  { v: "32", l: "Partner Universities" },
  { v: "78", l: "Active Ventures" },
  { v: "12K+", l: "Volunteer Hours" },
  { v: "240K", l: "Lives Impacted" },
  { v: "17", l: "SDGs Addressed" },
  { v: "8", l: "Years Active" },
];

const sdgs = [
  "No Poverty", "Zero Hunger", "Quality Education", "Gender Equality",
  "Clean Water", "Affordable Energy", "Decent Work", "Industry & Innovation",
  "Reduced Inequalities", "Sustainable Cities", "Responsible Consumption",
  "Climate Action", "Life Below Water", "Life on Land", "Peace & Justice",
  "Partnerships",
];

export default function Impact() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="Our impact"
        title={<>Measurable. <span className="bg-primary px-2 italic">Local.</span> Lasting.</>}
        subtitle="We track outcomes, not just outputs. Every team reports against the UN Sustainable Development Goals."
      />
      <section className="border-b border-border/60 bg-secondary text-secondary-foreground">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 divide-y divide-white/10 md:grid-cols-3 md:divide-x">
          {numbers.map((n) => (
            <StatsCounter
              key={n.l}
              value={n.v}
              label={n.l}
              className="px-6 py-12"
            />
          ))}
        </div>
      </section>
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid items-start gap-12 md:grid-cols-5">
              <div className="md:col-span-3">
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">· Aligned with the UN SDGs</div>
                <h2 className="mt-4 max-w-3xl text-section font-semibold">
                  17 goals. One country. A generation of operators.
                </h2>
                <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border md:grid-cols-4 break-words">
                  {sdgs.map((s, i) => (
                    <li key={s} className="flex items-baseline gap-3 bg-background p-5">
                      <span className="font-mono text-[11px] text-primary">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-sm font-medium">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:col-span-2 md:mt-20">
                <Image
                  src="https://enactus.org/wp-content/uploads/2025/05/54067492790_2477d9ccdb_c-e1746800685568.jpg"
                  alt="Enactus team working on community impact project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}