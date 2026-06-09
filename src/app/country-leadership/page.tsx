import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Country Leadership",
  description:
    "The team and advisers leading Enactus Philippines — country staff and board of advisers.",
};

const staff = [
  {
    name: "Saje Molato",
    role: "CEO & Country Lead",
    email: "SMolato@enactus.org",
    image: "/people/saje.webp",
  },
  {
    name: "Kristoni Go",
    role: "COO & Country Director",
    email: "KGo@enactus.org",
    image: "/people/ton.webp",
    bio: "",
  },
  {
    name: "Samantha Batul",
    role: "Communications & Partnerships",
    email: "SBatul@enactus.org",
    image: "/people/sam.webp",
  },
  {
    name: "Paula Cuasay",
    role: "Programs Associate",
    email: "EnactusPH@enactus.org",
    image: "/people/paula.webp",
  },
];

const advisers = [
  {
    name: "Roberto G. Manabat",
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
    <div className="flex aspect-[4/5] w-full items-center justify-center rounded-xl bg-muted">
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
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-background p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_oklch(0_0_0/0.12)]"
                >
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={400}
                      height={400}
                      className="aspect-[4/5] w-full rounded-xl object-cover"
                    />
                  ) : (
                    <PlaceholderAvatar name={person.name} />
                  )}
                  <h3 className="mt-5 text-lg font-semibold">{person.name}</h3>
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
              {advisers.map((person) => (
                <div
                  key={person.name}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-background p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_oklch(0_0_0/0.12)]"
                >
                  <PlaceholderAvatar name={person.name} />
                  <h3 className="mt-5 text-lg font-semibold">{person.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
