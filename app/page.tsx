import Link from "next/link";
import { ArrowUpRight, Cpu, LineChart, Sprout, Users } from "lucide-react";

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
          className="absolute right-[-6rem] top-[-6rem] h-[28rem] w-[28rem] rounded-full bg-primary/40 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 pb-28 pt-20 md:pt-28">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="inline-block h-px w-8 bg-foreground/40" />
            Enactus.ph · est. network of 33 countries
          </div>
          <h1 className="max-w-5xl text-[3.8rem] font-semibold leading-[1.12] tracking-tight md:text-[3.3rem] lg:text-[4.3rem]">
            We believe <span className="text-foreground/30">investing</span> in{" "}
            students
            <br />
            <span className="relative inline-block">
              who <span className="text-foreground/30">take </span>
              <span className="inline-block bg-primary italic">
                entrepreneurial action
              </span>
            </span>
            <br />
            <span className="relative inline-block">
              for others <span className="text-foreground/30">creates a</span>{" "}
              better world{" "}
              <span className="inline-block bg-primary px-3 italic">
                for us all.
              </span>
            </span>
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/what-we-do"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-secondary px-6 text-sm font-semibold text-secondary-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore the network
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-foreground/20 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
            >
              Start a team
            </Link>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 h-16 w-1/2 yellow-slash"
          aria-hidden
        />
      </section>

      {/* STATS */}
      <section className="border-b border-border/60 bg-secondary text-secondary-foreground">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-12">
              <div className="font-display text-5xl font-semibold text-primary md:text-6xl">
                {s.value}
              </div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] opacity-70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EN-ACT-US */}
      <section className="border-b border-border/60">
        <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 py-24 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              · The name
            </div>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight">
              en<span className="text-primary">·</span>act
              <span className="text-primary">·</span>us
            </h2>
            <p className="mt-6 text-muted-foreground">
              Three syllables. One operating model for solving the
              country&apos;s hardest problems.
            </p>
          </div>
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
            ].map((row) => (
              <div
                key={row.k}
                className="flex gap-6 border-b border-border/60 pb-8"
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

      {/* PILLARS */}
      <section className="border-b border-border/60 bg-muted/40">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · How we work
              </div>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
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
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border md:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.tag}
                className="group relative bg-background p-8 transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                <p.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] opacity-60">
                  {p.tag}
                </div>
                <h3 className="mt-2 text-2xl font-semibold">{p.title}</h3>
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
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:items-end">
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Build a venture.
            <br />
            Change a community.
            <br />
            <span className="text-primary">Shape a country.</span>
          </h2>
          <div className="space-y-6">
            <p className="text-lg opacity-80">
              Whether you're a student forming a campus team, a faculty member,
              or an industry partner — there's a seat at the table.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Get involved
              </Link>
              <Link
                href="/impact"
                className="inline-flex h-12 items-center rounded-full border border-white/20 px-6 text-sm font-semibold hover:bg-white/5"
              >
                Read our impact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
