import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, TriangleAlert, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Competitions | Enactus Philippines",
  description:
    "Enactus Philippines competitions — from the Core Competition to the Early Stage Collaboration Track. Find your path to compete, collaborate, and create impact.",
};

export default function CompetitionsLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/10">
        <div
          className="absolute inset-0 grid-bg opacity-[0.04]"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 sm:px-6 lg:px-8 pb-16 md:pb-20 pt-20 md:pt-28 text-center sm:pb-28 sm:pt-36">
          <span className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Competitions
          </span>
          <h1 className="max-w-4xl text-hero font-bold leading-[1.1] tracking-tight">
            Where teams prove their
            <br />
            <span className="text-foreground/40">impact.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Two tracks, one mission: empowering Filipino students to create
            positive change through entrepreneurial action. Choose your path
            below.
          </p>
        </div>
      </section>

      {/* ─── TRACK CARDS ─── */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Main Competition Card */}
          <Link
            href="/competitions/handbook"
            className="group relative rounded-2xl border border-border/60 bg-gradient-to-b from-muted/5 to-muted/10 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Core Competition
            </h2>
            <span className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-600">
              <TriangleAlert className="h-3.5 w-3.5 text-amber-500" />
              On Hold for Philippines 2026
            </span>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              The complete guide to the Enactus Core Competition. Learn about
              the judging criterion, presentation format, reporting
              requirements, and how to prepare your team for the National
              Competition and Enactus World Cup.
            </p>
            <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
              {[
                "13 comprehensive sections",
                "Real-world project examples",
                "Impact definitions & measurement",
                "FAQ with 15 common questions",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary/60" />
                  {item}
                </li>
              ))}
            </ul>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
              View Handbook
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>

          {/* Early Stage Track Card */}
          <Link
            href="/competitions/early-stage-collaboration"
            className="group relative rounded-2xl border border-border/60 bg-gradient-to-b from-muted/5 to-muted/10 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Early Stage Track
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              A supportive competition track for emerging Enactus teams. Gain
              experience, receive mentorship, and build toward the Main
              Competition in a low-pressure environment.
            </p>
            <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
              {[
                "Ideal for first- and second-year teams",
                "Structured mentorship & workshops",
                "6 award categories",
                "Pathway to the Main Competition",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary/60" />
                  {item}
                </li>
              ))}
            </ul>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
              View Track Details
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
