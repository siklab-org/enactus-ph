import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About the Summit",
  description:
    "Meet the organizations behind the Nat Comp Innovation Summit 2026 and learn when and where the summit takes place.",
};

const organizations = [
  {
    name: "Enactus Philippines",
    eyebrow: "Student entrepreneurship",
    body: "For more than 20 years, Enactus Philippines has helped students turn entrepreneurial ideas into solutions for challenges in their communities. It is part of a global network for social innovation and entrepreneurial education.",
  },
  {
    name: "Khan Academy Philippines",
    eyebrow: "Learning for everyone",
    body: "Khan Academy Philippines brings free, localized education technology to learners across the country, with community-driven work at the heart of its localization efforts.",
  },
  {
    name: "LSEED Center",
    eyebrow: "Social innovation",
    body: "Based in the Philippines, the LSEED Center advances social entrepreneurship and community-led innovation, with work connected to the Sustainable Development Goals.",
  },
  {
    name: "Siklab Pilipinas",
    eyebrow: "Leadership and impact",
    body: "Rooted in Asia, Siklab Pilipinas works with public institutions, businesses, and communities to develop emerging leaders and turn policy into measurable change.",
  },
];

const audiences = [
  "Youth and student leaders",
  "Delegates from the Philippines, ASEAN, and beyond",
  "Educators and mentors",
  "Youth-serving organizations and partners",
  "Industry and business leaders",
  "Government and diplomatic representatives",
];

const partnerLogos = Array.from({ length: 18 }, (_, index) => index + 1).filter(
  (number) => number !== 6,
);

export default function SummitAboutPage() {
  return (
    <main id="top" className="overflow-hidden bg-background text-foreground">
      <section className="relative isolate overflow-hidden bg-secondary text-secondary-foreground">
        <Image
          src="/delasalle.JPG"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-secondary/70" aria-hidden="true" />
        <div className="shell relative grid items-center gap-8 py-10 md:min-h-[400px] md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:py-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">
              Enactus Philippines · National Competition 2026
            </p>
            <h1 className="mt-4 max-w-[16ch] text-balance text-5xl font-bold leading-[0.96] tracking-[-0.065em] md:text-6xl lg:text-7xl">
              A summit for young leaders
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-secondary-foreground/85 md:text-lg">
              The National Competition &amp; Innovation Summit brings young
              leaders and the people who support them together in Manila.
            </p>
          </div>

          <div className="flex flex-col gap-5 md:gap-6">
            <dl className="grid grid-cols-3 gap-2 text-left sm:gap-3">
              <div className="rounded-2xl border border-white/15 bg-secondary/75 p-3 sm:p-4">
                <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-secondary-foreground/75">
                  When
                </dt>
                <dd className="mt-2 text-sm font-semibold tabular-nums sm:text-base">
                  Oct 9–10
                </dd>
              </div>
              <div className="rounded-2xl border border-white/15 bg-secondary/75 p-3 sm:p-4">
                <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-secondary-foreground/75">
                  Where
                </dt>
                <dd className="mt-2 text-sm font-semibold sm:text-base">
                  Manila
                </dd>
              </div>
              <div className="rounded-2xl border border-white/15 bg-secondary/75 p-3 sm:p-4">
                <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-secondary-foreground/75">
                  Venue
                </dt>
                <dd className="mt-2 text-sm font-semibold sm:text-base">
                  DLSU
                </dd>
              </div>
            </dl>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#about"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                About the summit
              </a>
              <a
                href="/2026-national-competition/programme-of-activities"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-secondary/75 px-5 text-sm font-semibold text-secondary-foreground transition-colors hover:border-white/40 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Programme of activities
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="shell py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              About the gathering
            </p>
            <h2 className="mt-4 max-w-[13ch] text-section font-bold leading-tight text-balance">
              One room. Many paths to progress.
            </h2>
          </div>
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
            <p>
              Enactus Philippines and PYIS welcome delegates from academe,
              government, diplomatic missions, international organizations,
              industry, the youth sector, and the innovation ecosystem.
            </p>
            <p>
              Over two days, the summit creates space to exchange ideas, build
              connections, and advance youth-led innovation across the
              Philippines, ASEAN, and beyond.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
          {organizations.map((organization, index) => (
            <article
              key={organization.name}
              className="group rounded-[1.75rem] border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/40 hover:bg-muted/70 md:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium tabular-nums text-primary">0{index + 1}</span>
                <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {organization.eyebrow}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold md:text-2xl">{organization.name}</h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {organization.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted/70 py-20 md:py-24">
        <div className="shell grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Who gathers
            </p>
            <h2 className="mt-4 max-w-[12ch] text-section font-bold leading-tight text-balance">
              Different roles, shared work.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              The summit is for people building the conditions for young
              innovators to learn, lead, and put ideas into practice.
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {audiences.map((audience, index) => (
              <li
                key={audience}
                className="grid grid-cols-[2.5rem_1fr] items-start gap-4 rounded-2xl border border-border bg-background/50 p-4"
              >
                <span className="text-xs font-medium tabular-nums text-muted-foreground">
                  0{index + 1}
                </span>
                <span className="text-lg font-medium md:text-xl">{audience}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="shell py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              With thanks
            </p>
            <h2 className="mt-4 max-w-[12ch] text-section font-bold leading-tight text-balance">
              Made possible together.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              We are grateful to the partners and special guests who make
              meaningful dialogue and collaboration possible.
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-x-6 gap-y-5 sm:grid-cols-3 md:grid-cols-4">
            {partnerLogos.map((number) => (
              <div
                key={number}
                className="flex min-h-20 items-center justify-center px-3 py-4"
              >
                <Image
                  src={`/partnerlogos/Partner%20Logo%20(${number}).png`}
                  alt={`Summit partner ${number}`}
                  width={180}
                  height={90}
                  sizes="(max-width: 640px) 40vw, (max-width: 1024px) 22vw, 14vw"
                  className="max-h-16 w-full object-contain opacity-85"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 text-secondary-foreground md:py-20">
        <div className="shell grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-primary">
              Manila · October 2026
            </p>
            <h2 className="mt-4 max-w-[14ch] text-3xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
              See you at De La Salle University.
            </h2>
            <p className="mt-4 text-lg text-secondary-foreground/70">October 9–10, 2026</p>
          </div>
          <a
            href="#top"
            className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-primary underline decoration-primary/50 underline-offset-4 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Return to the summit <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
