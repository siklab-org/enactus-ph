import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Enactus is a global social innovation and entrepreneurial education network — Enactus Philippines is its Philippine chapter.",
};

/* ─── Data ─── */

const stats = [
  { value: "30,000+", label: "Filipino students engaged" },
  { value: "300+", label: "Universities engaged" },
  { value: "ONE", label: "Team qualified until Global Semi-Finals in 2018" },
];

const staff = [
  {
    name: "Saje Molato",
    role: "CEO & Country Lead",
    email: "SMolato@enactus.org",
  },
  {
    name: "Kristoni Go",
    role: "COO & Country Director",
    email: "KGo@enactus.org",
    bio: "",
  },
  {
    name: "Samantha Batul",
    role: "Communications & Partnerships",
    email: undefined,
  },
  {
    name: "Paula Cuasay",
    role: "Support",
    email: undefined,
  },
];

const partners = Array.from({ length: 8 }, (_, i) => ({
  name: `Partner ${i + 1}`,
  src: null as string | null,
}));

/* ─── Components ─── */

function PlaceholderAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-muted">
      <span className="font-display text-4xl font-semibold text-muted-foreground/40">
        {initials}
      </span>
    </div>
  );
}

export default function WhoWeAre() {
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
              students to ideate, incubate, and pitch innovative entrepreneurial
              solutions to solve the most pressing issues in their communities.
            </p>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="border-b border-border/60 bg-secondary text-secondary-foreground">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-14 text-center">
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

      {/* ─── BOARD OF ADVISERS ─── */}
      <section className="border-b border-border/60">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Board of Advisers
          </h2>
          <div className="mt-2 font-mono text-sm text-muted-foreground">
            guidance from seasoned leaders.
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-muted/50">
                <span className="text-4xl font-semibold text-muted-foreground/20">
                  ──
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-muted-foreground/50">
                Coming Soon
              </h3>
              <p className="mt-1 text-sm text-muted-foreground/40">
                Board of Advisers to be announced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COUNTRY STAFF ─── */}
      <section className="border-b border-border/60 bg-muted/40">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Country Staff
          </h2>
          <div className="mt-2 font-mono text-sm  text-muted-foreground">
            The team behind the movement.
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {staff.map((person) => (
              <div
                key={person.name}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <PlaceholderAvatar name={person.name} />
                <h3 className="mt-4 text-lg font-semibold">{person.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {person.role}
                </p>
                {person.email && (
                  <a
                    href={`mailto:${person.email}`}
                    className="mt-2 block text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    {person.email}
                  </a>
                )}
                {person.bio && (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80">
                    {person.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ─── */}
      <section className="border-b border-border/60">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Powered by our partners.
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 xl:grid-cols-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex aspect-[3/2] items-center justify-center rounded-xl border border-border/60 bg-muted/20 p-6 transition-colors hover:border-border"
              >
                <span className="text-center font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground/50">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
