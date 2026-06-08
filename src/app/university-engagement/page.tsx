import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StepCard } from "./step-card";

export const metadata: Metadata = {
  title: "University Engagement",
  description:
    "Enactus Philippines Educational Institution Onboarding System — 10-Step Affiliation Process for Philippine Educational Institutions.",
};

export default function UniversityEngagement() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="University Engagement"
        title={
          <>
            Onboard your
            <br />
            <span className="text-foreground/40">institution.</span>
          </>
        }
        subtitle="A structured 10-step affiliation process designed to make it easy for Philippine educational institutions to formally join Enactus Philippines."
      />

      {/* OVERVIEW */}
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-6 py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Onboarding System
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Enactus Philippines Educational Institution Onboarding System
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                The following onboarding process is designed to make it easy,
                structured, and accessible for universities, colleges, and
                schools across the Philippines to formally join and participate
                in Enactus Philippines while ensuring alignment with Enactus
                global standards on student leadership, innovation,
                entrepreneurship, and impact creation.
              </p>
              <p className="mt-4 text-sm text-muted-foreground/60">
                As of May 18, 2026
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 10-STEP PROCESS */}
      <section className="border-b border-border/60">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <div className="space-y-10 md:space-y-12">
            {/* STEP 1 */}
            <StepCard step={1} title="Expression of Interest (EOI)">
              <p>
                The institution signifies its interest in becoming part of
                Enactus Philippines by filling out the preliminary Interest
                Form online.
              </p>
              <div className="mt-4">
                <Link
                  href="https://tinyurl.com/enactusphuniversityinterestform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Fill out Interest Form <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-4">
                <p className="font-medium text-foreground/80">
                  Required Initial Information:
                </p>
                <ul className="mt-2 space-y-1.5">
                  {[
                    "Institution name",
                    "Campus / location",
                    "Contact person",
                    "Proposed Faculty Adviser",
                    "Existing entrepreneurship / social innovation initiatives (if any)",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 text-sm italic text-muted-foreground/60">
                Note: This step may be skipped if the institution is already a
                part of a partner association of universities.
              </p>
            </StepCard>

            {/* STEP 2 */}
            <StepCard step={2} title="Introductory Orientation Session">
              <p>
                The institution representatives shall attend an official online
                or in-person Enactus Orientation facilitated by Enactus
                Philippines.
              </p>
              <div className="mt-4">
                <p className="font-medium text-foreground/80">
                  Orientation Topics:
                </p>
                <ul className="mt-2 space-y-1.5">
                  {[
                    "What is Enactus?",
                    "Enactus mission, vision, and values",
                    "How Enactus teams work globally",
                    "National Competition and World Cup pathway",
                    "Team structures and project development",
                    "Roles of students and Faculty Advisers",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StepCard>

            {/* STEP 3 */}
            <StepCard step={3} title="Formation of Core Institution Team">
              <p>The institution identifies:</p>
              <ul className="mt-2 space-y-1.5">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary/60" />
                  At least one (1) Faculty Adviser
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary/60" />
                  Initial student leaders / core members
                </li>
              </ul>
              <div className="mt-4">
                <p className="font-medium text-foreground/80">
                  Recommended Initial Team:
                </p>
                <ul className="mt-2 space-y-1.5">
                  {[
                    "Team Leader",
                    "Projects Lead",
                    "Communications Lead",
                    "Partnerships / Sponsorship Lead",
                    "Finance / Admin Lead",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StepCard>

            {/* STEP 4 */}
            <StepCard step={4} title="Review of Enactus Starter Resources">
              <p>
                The institution team shall review the official onboarding and
                learning materials provided by Enactus Philippines, including:
              </p>
              <ul className="mt-2 space-y-1.5">
                {[
                  "Welcome to Enactus Guide",
                  "Building an Enactus Team Guide",
                  "Project Development & Enactus Criterion Guide",
                  "Measuring Impact Guide",
                  "Preparing for Competition Guide",
                  "Faculty Adviser Best Practice Guide",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </StepCard>

            {/* STEP 5 */}
            <StepCard step={5} title="Institutional Endorsement">
              <p>
                The team secures internal acknowledgment or endorsement from
                the relevant office such as but not limited to:
              </p>
              <ul className="mt-2 space-y-1.5">
                {[
                  "Dean or Program Chair",
                  "Student Affairs Office",
                  "Entrepreneurship Center",
                  "Others",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm italic text-muted-foreground/60">
                Note: The exact institutional process may vary depending on the
                institution&apos;s policy.
              </p>
            </StepCard>

            {/* STEP 6 */}
            <StepCard step={6} title="Submission of Online Affiliation Form">
              <p>
                The institution officially signs up through the Enactus
                Philippines Online Affiliation Form.
              </p>
              <div className="mt-4">
                <Link
                  href="https://tinyurl.com/enactusphuniversityonboarding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Open Affiliation Form <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-4">
                <p className="font-medium text-foreground/80">
                  The Form Includes:
                </p>
                <ul className="mt-2 space-y-1.5">
                  {[
                    "Institution information",
                    "Faculty Adviser details",
                    "Initial student leadership roster",
                    "Consent to receive official communications",
                    "Acceptance of Enactus values and principles",
                    "Uploading of required documents",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StepCard>

            {/* STEP 7 */}
            <StepCard step={7} title="Digital Signing of Affiliation Agreement">
              <p>
                As part of the online form process, the institution shall
                digitally sign the &ldquo;Enactus Philippines Institutional
                Affiliation Agreement.&rdquo;
              </p>
              <div className="mt-4">
                <p className="font-medium text-foreground/80">
                  The agreement covers:
                </p>
                <ul className="mt-2 space-y-1.5">
                  {[
                    "Institutional affiliation",
                    "Participation guidelines",
                    "Use of Enactus branding",
                    "Compliance with Enactus standards",
                    "Participation in official activities and competitions",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StepCard>

            {/* STEP 8 */}
            <StepCard
              step={8}
              title="Official Recognition and Activation"
            >
              <p>Upon review and approval:</p>
              <ul className="mt-2 space-y-1.5">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary/60" />
                  The institution is officially recognized as an Enactus
                  Philippines-affiliated institution
                </li>
              </ul>
              <div className="mt-4">
                <p className="font-medium text-foreground/80">
                  The institution receives:
                </p>
                <ul className="mt-2 space-y-1.5">
                  {[
                    "Official onboarding confirmation",
                    "Access to Enactus resources and communications",
                    "Invitations to trainings, programs, and competitions",
                    "Inclusion in the national institution network",
                    "Visibility in Enactus Philippines website and social media pages by featuring institution logos",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StepCard>

            {/* STEP 9 */}
            <StepCard
              step={9}
              title="Team Development and Project Incubation"
            >
              <p>
                The newly affiliated institution proceeds to:
              </p>
              <ul className="mt-2 space-y-1.5">
                {[
                  "Recruit wider membership",
                  "Develop projects aligned with the Enactus Criterion",
                  "Attend national onboarding and mentoring sessions",
                  "Participate in regional and national activities",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <p className="font-medium text-foreground/80">
                  The project development process follows the Enactus &ldquo;Impact Journey&rdquo; model:
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["JOIN", "IDEA", "ACTION", "REFLECT", "IMPACT", "ELEVATE"].map(
                    (phase, i) => (
                      <span
                        key={phase}
                        className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs font-semibold tracking-wider text-primary"
                      >
                        {phase}
                      </span>
                    )
                  )}
                </div>
              </div>
            </StepCard>

            {/* STEP 10 */}
            <StepCard
              step={10}
              title="Participation in Enactus Philippines Competitions and Programs"
            >
              <p>
                Officially affiliated universities become eligible to:
              </p>
              <ul className="mt-2 space-y-1.5">
                {[
                  "Participate in Regional Events",
                  "Participate in the Enactus Philippines National Competition",
                  "Qualify for the Enactus World Cup",
                  "Access fellowships, mentorships, and innovation programs",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm italic text-muted-foreground/60">
                Note: These steps are subject to change.
              </p>
            </StepCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-b border-border/60 bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 grid-bg opacity-[0.06]" aria-hidden />
        <AnimatedSection>
          <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:items-end">
            <div>
              <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Ready to bring Enactus
                <br />
                <span className="text-primary">to your campus?</span>
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg opacity-80">
                Start your institution&apos;s journey today. Fill out the
                Interest Form or reach out to our team for guidance on the
                onboarding process.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://tinyurl.com/enactusphuniversityinterestform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  Express Interest <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="mailto:EnactusPH@enactus.org"
                  className="inline-flex h-12 items-center rounded-full border border-white/20 px-6 text-sm font-semibold hover:bg-white/5"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
