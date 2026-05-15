import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Programs, competitions and partnerships that turn student ideas into scalable social ventures across the Philippines.",
};

const programs = [
  { code: "PRG.01", name: "Campus Teams", body: "Chartered student chapters at universities nationwide running year-round venture programs." },
  { code: "PRG.02", name: "National Expo", body: "An annual showcase where teams pitch live to industry judges for the chance to represent PH at the Enactus World Cup." },
  { code: "PRG.03", name: "Founders Track", body: "Bootcamps, fellowships and capital connections to graduate projects into registered enterprises." },
  { code: "PRG.04", name: "Industry Lab", body: "Sponsor-driven challenges where teams prototype solutions for partner companies." },
  { code: "PRG.05", name: "Alumni Network", body: "A growing community of graduates working across tech, finance, NGOs and government." },
  { code: "PRG.06", name: "Faculty Forum", body: "Curriculum support and research collaborations for partner universities." },
];

export default function WhatWeDo() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="What we do"
        title={<>Programs that <span className="bg-primary px-2 italic">ship</span>.</>}
        subtitle="From first idea to incorporated enterprise — our programs give Filipino students the network, skills and capital to make their ventures real."
      />
      <section className="border-b border-border/60">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border md:grid-cols-2">
            {programs.map((p) => (
              <article key={p.code} className="group relative bg-background p-8 transition-colors hover:bg-secondary hover:text-secondary-foreground">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] opacity-60">
                  <span>{p.code}</span>
                  <span>↗</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold">{p.name}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed opacity-80">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}