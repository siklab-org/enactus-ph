import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatsCounter } from "@/components/StatsCounter";
import { sdgGoals } from "@/lib/sdg";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Numbers, stories and SDGs: the measurable impact of Enactus Philippines campus teams.",
};

const numbers = [
  { v: "800+", l: "Partner Universities" },
  { v: "78", l: "Active Ventures" },
  { v: "12K+", l: "Volunteer Hours" },
  { v: "240K", l: "Lives Impacted" },
  { v: "17", l: "SDGs Addressed" },
  { v: "8", l: "Years Active" },
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
        <div className="shell grid grid-cols-2 divide-y divide-white/10 md:grid-cols-3 md:divide-x">
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
          <div className="shell py-16 md:py-24">
            <div className="grid items-start gap-12 md:grid-cols-5">
              <div className="md:col-span-3">
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">· Aligned with the UN SDGs</div>
                <h2 className="mt-4 max-w-3xl text-section font-semibold">
                  17 goals. One country. A generation of operators.
                </h2>
                <ul className="sdg-impact-list mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {sdgGoals.map((goal) => (
                    <li
                      className="sdg-impact-item"
                      key={goal.id}
                      style={{ borderTopColor: goal.color }}
                    >
                      <a href={goal.href} target="_blank" rel="noreferrer">
                        <span style={{ color: goal.color }}>Goal {goal.id}</span>
                        <span>{goal.name}</span>
                      </a>
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