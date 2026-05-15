import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Enactus Philippines is a national network of student, academic and business leaders driving entrepreneurial action across the country.",
};

export default function WhoWeAre() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="Who we are"
        title={<>A community of <span className="bg-primary px-2 italic">doers</span>.</>}
        subtitle="Part of a global network in 33 countries, Enactus Philippines connects campuses, capital and communities to solve the country's most pressing challenges."
      />
      <section className="border-b border-border/60">
        <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 py-24 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Our vision</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Young leaders everywhere use innovation and business skills to ensure that
              all people thrive in a sustainable world.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Our mission</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              To engage the next generation of entrepreneurial leaders to use innovation
              and business principles to improve the world.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-muted/40">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            · The network
          </div>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            One of 33 country offices in the global Enactus federation.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border md:grid-cols-3">
            {[
              { k: "Students", v: "Build, lead and pitch ventures that solve real-world problems." },
              { k: "Academics", v: "Mentor teams, embed experiential learning, advance research with impact." },
              { k: "Business", v: "Sponsor programs, judge competitions and recruit standout talent." },
            ].map((c) => (
              <div key={c.k} className="bg-background p-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Stakeholder
                </div>
                <h3 className="mt-2 text-2xl font-semibold">{c.k}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}