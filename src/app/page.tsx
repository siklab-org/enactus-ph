import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Cpu, LineChart, Sprout, Users } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatsCounter } from "@/components/StatsCounter";

const stats = [
  { value: "32", label: "Partner Universities" },
  { value: "78", label: "Active Ventures" },
  { value: "12K+", label: "Volunteer Hours" },
  { value: "240K", label: "Lives Impacted" },
];

const pillars = [
  {
    icon: Cpu,
    tag: "01 / Innovation",
    title: "Tech-enabled ventures",
    body: "We back student teams shipping software, IoT, fintech and AI solutions for Philippine communities.",
  },
  {
    icon: Sprout,
    tag: "02 / Sustainability",
    title: "Climate-positive enterprise",
    body: "From agri-tech to circular plastics, our projects align with the UN Sustainable Development Goals.",
  },
  {
    icon: Users,
    tag: "03 / Community",
    title: "Inclusive by design",
    body: "Co-built with farmers, MSMEs, and out-of-school youth across Luzon, Visayas and Mindanao.",
  },
  {
    icon: LineChart,
    tag: "04 / Scale",
    title: "From campus to country",
    body: "Mentors, partners and capital that take a thesis project into a registered social enterprise.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div
          className="absolute right-[-6rem] top-[-6rem] h-[28rem] w-[28rem] rounded-full bg-primary/40 blur-3xl "
          style={{ animationDelay: "800ms" }}
          aria-hidden
        />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8 pb-20 md:pb-28 pt-12 md:pt-23">
          {/* 3.1 Eyebrow — fast slide from right */}
          <div
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground animate-slide-in-right"
            style={{ animationDelay: "0ms", animationDuration: "600ms" }}
          >
            <span className="inline-block h-px w-8 bg-foreground/40" />
            Enactus.ph · est. network of 33 countries
          </div>
          {/* 3.2 Title lines — dramatic cascade */}
          <h1 className="max-w-5xl text-hero font-semibold leading-[1.12] tracking-tight">
              <span
                className="block animate-slide-in-right"
                style={{ animationDelay: "0ms" }}
              >
                We believe{" "}
                <span className="text-foreground/30">investing</span> in
              </span>
              <span
                className="block animate-slide-in-right"
                style={{ animationDelay: "100ms" }}
              >
                students who <span className="text-foreground/30">take </span>
              </span>
              <span
                className="block animate-slide-in-right"
                style={{ animationDelay: "200ms" }}
              >
                <span className="inline-block bg-primary italic">
                  entrepreneurial action
                </span>{" "}
                for
              </span>
              <span
                className="block animate-slide-in-right"
                style={{ animationDelay: "300ms" }}
              >
                others <span className="text-foreground/30">creates a</span>{" "}
                better world
              </span>
              <span
                className="block animate-slide-in-right"
                style={{ animationDelay: "400ms" }}
              >
                <span className="inline-block bg-primary px-3 italic">
                  for us all.
                </span>
              </span>
          </h1>
          {/* 3.3 CTA buttons — mid pace */}
          <div
            className="flex flex-wrap items-center gap-4 animate-slide-in-right"
            style={{ animationDelay: "380ms", animationDuration: "800ms" }}
          >
            <Link
              href="/what-we-do"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-secondary px-6 text-sm font-semibold text-secondary-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore the network
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-foreground/20 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
            >
              Start a team
            </Link>
          </div>
        </div>
        {/* 3.4 Yellow slash — delay 400ms */}
        <div
          className="absolute bottom-0 left-0 h-16 w-1/2 yellow-slash animate-slide-in-left"
          style={{ animationDelay: "400ms" }}
          aria-hidden
        />
      </section>

      {/* STATS */}
      <section className="border-b border-border/60 bg-secondary text-secondary-foreground">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {stats.map((s) => (
            <StatsCounter
              key={s.label}
              value={s.value}
              label={s.label}
              className="px-6 py-12"
            />
          ))}
        </div>
      </section>

      {/* EN-ACT-US */}
      <section className="border-b border-border/60">
        <div className="mx-auto grid w-full max-w-7xl gap-16 px-4 sm:px-6 lg:px-8 py-16 md:py-24 md:grid-cols-12">
          <AnimatedSection className="md:col-span-4">
            <h2 className="mt-4 text-5xl font-semibold tracking-tight">
              en<span className="text-primary">·</span>act
              <span className="text-primary">·</span>us
            </h2>
            <p className="mt-6 text-muted-foreground">
              Three syllables. One operating model for solving the
              country&apos;s hardest problems.
            </p>
          </AnimatedSection>
          <div className="space-y-8 md:col-span-8">
            {[
              {
                k: "En",
                v: "trepreneurial — initiating innovation with integrity and passion.",
              },
              {
                k: "Act",
                v: "ion — the experience of social impact that sparks social enterprise.",
              },
              {
                k: "Us",
                v: " — students, academics and business leaders building a better Philippines.",
              },
            ].map((row, i) => (
              <div
                key={row.k}
                className="flex gap-6 border-b border-border/60 pb-8 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-20 shrink-0 font-display text-3xl font-semibold text-primary">
                  {row.k}
                </div>
                <p className="text-lg leading-relaxed text-foreground/80">
                  {row.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="border-b border-border/60">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <AnimatedSection>
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              · Our Partners
            </div>
            <h2 className="mt-4 max-w-2xl text-section font-semibold">
              The organizations powering our mission.
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex aspect-[3/2] items-center justify-center rounded-xl border border-border/60 bg-muted/20 p-6 transition-all hover:border-border">
              <Image
                src="/khan-academy-logo.svg"
                alt="Khan Academy"
                width={240}
                height={96}
                className="h-20 w-auto object-contain"
              />
            </div>
            <div className="flex aspect-[3/2] items-center justify-center rounded-xl border border-border/60 bg-muted/20 p-6 transition-all hover:border-border">
              <Image
                src="/kpmg-logo.svg"
                alt="KPMG"
                width={240}
                height={96}
                className="h-20 w-auto object-contain"
              />
            </div>
            <div className="flex aspect-[3/2] items-center justify-center rounded-xl border border-border/60 bg-muted/20 p-6 transition-all hover:border-border">
              <Image
                src="/arete-logo.png"
                alt="Arete"
                width={240}
                height={96}
                className="h-20 w-auto object-contain"
              />
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/partners"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground hover:text-primary"
            >
              View all partners →
            </Link>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-b border-border/60 bg-muted/40">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <AnimatedSection>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  · How we work
                </div>
                <h2 className="mt-4 max-w-2xl text-section font-semibold">
                  A platform for the next generation of Filipino founders.
                </h2>
              </div>
              <Link
                href="/what-we-do"
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground hover:text-primary"
              >
                All programs →
              </Link>
            </div>
          </AnimatedSection>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border md:grid-cols-2">
            {pillars.map((p, i) => (
              <div
                key={p.tag}
                className="group relative bg-background p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:bg-secondary hover:text-secondary-foreground hover:shadow-[0_8px_30px_oklch(0_0_0/0.12)]"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <p.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] opacity-60">
                  {p.tag}
                </div>
                <h3 className="mt-2 text-subsection font-semibold">{p.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed opacity-80">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-b border-border/60 bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 grid-bg opacity-[0.06]" aria-hidden />
        <AnimatedSection>
          <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:px-8 py-16 md:py-24 md:grid-cols-2 md:items-end">
            <h2 className="text-hero font-semibold leading-[1.05] tracking-tight">
              Build a venture.
              <br />
              Change a community.
              <br />
              <span className="text-primary">Shape a country.</span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg opacity-80">
                Whether you&apos;re a student forming a campus team, a faculty
                member, or an industry partner, there&apos;s a seat at the
                table.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  Get involved
                </Link>
                <Link
                  href="/news"
                  className="inline-flex h-12 items-center rounded-full border border-white/20 px-6 text-sm font-semibold hover:bg-white/5"
                >
                  Latest news
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
