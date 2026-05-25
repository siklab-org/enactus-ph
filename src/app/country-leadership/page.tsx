import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Country Leadership",
  description:
    "The team and advisers leading Enactus Philippines — country staff and board of advisers.",
};

/* ─── Data ─── */

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
    email: "SBatul@enactus.org",
  },
  {
    name: "Paula Cuasay",
    role: "Programs Associate",
    email: undefined,
  },
];

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

export default function CountryLeadership() {
  return (
    <div className="min-h-screen bg-background">
      {/* ─── HERO ─── */}
      <PageHero
        eyebrow="Country Leadership"
        title={
          <>
            The team behind
            <br />
            <span className="text-foreground/40">the movement.</span>
          </>
        }
        subtitle="The people building Enactus in the Philippines."
      />

      {/* ─── COUNTRY LEADERSHIP ─── */}
      <section className="border-b border-border/60 bg-muted/40">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-6 py-24">
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
              Country Leadership
            </h2>
            <div className="mt-2 font-mono text-sm  text-muted-foreground">
              The team behind the movement.
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {staff.map((person) => (
                <div
                  key={person.name}
                  className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_oklch(0_0_0/0.12)]"
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
        </AnimatedSection>
      </section>

      {/* ─── BOARD OF ADVISERS ─── */}
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-6 py-24">
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
              Board of Advisers
            </h2>
            <div className="mt-2 font-mono text-sm text-muted-foreground">
              guidance from seasoned leaders.
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_oklch(0_0_0/0.12)]">
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
        </AnimatedSection>
      </section>
    </div>
  );
}
