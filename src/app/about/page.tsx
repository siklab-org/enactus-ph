import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatsCounter } from "@/components/StatsCounter";
import { Slideshow } from "@/components/Slideshow";

export const metadata: Metadata = {
  title: "About Enactus",
  description:
    "Enactus is a global social innovation and entrepreneurial education network — Enactus Philippines is its Philippine chapter.",
};

/* ─── Data ─── */

const stats = [
  { value: "30,000+", label: "Filipino students engaged" },
  { value: "300+", label: "Universities engaged" },
  { value: "ONE", label: "Team qualified until Global Semi-Finals in 2018" },
];

const slideshowImages = [
  { src: "/ENACTUSSLIDESHOW/1.jpg", alt: "Enactus Philippines students at a community project" },
  { src: "/ENACTUSSLIDESHOW/2.jpg", alt: "Filipino student entrepreneurs presenting their venture" },
  { src: "/ENACTUSSLIDESHOW/3.jpg", alt: "Enactus team collaborating on a social enterprise" },
  { src: "/ENACTUSSLIDESHOW/4.jpg", alt: "Students engaging with community partners" },
  { src: "/ENACTUSSLIDESHOW/5.jpg", alt: "Enactus Philippines event with student participants" },
  { src: "/ENACTUSSLIDESHOW/6.jpg", alt: "Young entrepreneurs showcasing their impact project" },
  { src: "/ENACTUSSLIDESHOW/7.jpg", alt: "Team work session during an Enactus competition" },
  { src: "/ENACTUSSLIDESHOW/8.jpg", alt: "Enactus community outreach in the Philippines" },
  { src: "/ENACTUSSLIDESHOW/9.jpeg", alt: "Students celebrating at an Enactus gathering" },
  { src: "/ENACTUSSLIDESHOW/10.jpeg", alt: "Enactus Philippines team photo" },
];

export default function About() {
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
        <AnimatedSection>
          <div className="relative">
            <Slideshow
              images={slideshowImages}
              className="h-[62vh] min-h-[420px] w-full md:h-[78vh]"
            />
            {/* Readability scrim — right side only, photos stay visible on the left */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-background via-background/70 to-transparent md:via-background/40 md:to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent md:hidden" />
            {/* About copy — fused into the top right of the photo */}
            <div className="absolute inset-x-0 top-0 p-6 sm:p-10 md:inset-x-auto md:right-0 md:max-w-xl md:p-16 lg:max-w-2xl lg:p-20">
              <div className="font-mono font-bold text-xs uppercase tracking-[0.25em] text-muted-foreground md:text-sm">
                About Enactus
              </div>
              <p className="mt-6 text-sm leading-relaxed text-foreground/80 sm:text-base md:mt-8 md:text-lg md:leading-relaxed">
                Enactus is a global social innovation and entrepreneurial
                education network that empowers students to use business and
                innovation to create social impact. For over 20 years, Enactus
                Philippines has served as the premier platform for Filipino
                students to ideate, incubate, and pitch innovative
                entrepreneurial solutions to solve the most pressing issues in
                their communities.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── STATS ─── */}
      <section className="border-b border-border/60 bg-secondary text-secondary-foreground">
        <div className="shell grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((s) => (
            <StatsCounter
              key={s.label}
              value={s.value}
              label={s.label}
              className="px-6 py-14 text-center"
            />
          ))}
        </div>
      </section>

    </div>
  );
}
