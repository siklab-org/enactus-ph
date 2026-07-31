import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CountdownTimer } from "@/components/CountdownTimer";
import {
  ArrowUpRight,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Lightbulb,
  MessageSquare,
  ScrollText,
  Sparkles,
  Target,
  Trophy,
  Users,
  BookOpen,
  Building2,
  Scale,
  Globe,
  Medal,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "2026 National Competition | Enactus Philippines",
  description:
    "Official announcement, competition guidelines, and mechanics for the Enactus Philippines National Competition 2026 — Early-Stage Project Competition Track.",
};

const timeline = [
  { date: "July 31, 2026", event: "Call for Applications Opens" },
  { date: "August 25, 2026", event: "Application Deadline (11:59 PM PHT)" },
  { date: "August 25–30, 2026", event: "Screening and Evaluation" },
  { date: "August 31, 2026", event: "Announcement of Accepted Teams" },
  { date: "September 2026", event: "National Capacity-Building Program (Every Saturday)" },
  { date: "October 8–10, 2026", event: "Enactus Philippines National Competition" },
];

const objectives = [
  {
    icon: Lightbulb,
    title: "Early-Stage Support",
    body: "Provide constructive feedback and mentorship to strengthen student projects during their earliest stages of development.",
  },
  {
    icon: Users,
    title: "Increased Opportunity",
    body: "Expand participation by allowing more student innovators to showcase promising ideas before implementation.",
  },
  {
    icon: MessageSquare,
    title: "Enhanced Judging",
    body: "Enable judges to directly influence the development of emerging social enterprises through meaningful feedback.",
  },
  {
    icon: Target,
    title: "Stronger Projects",
    body: "Prepare teams to become competitive in future Enactus Core Competitions by improving project quality and scalability.",
  },
];

const criteria = [
  { name: "Needs Assessment", weight: "20%" },
  { name: "Business Principles & Financials", weight: "20%" },
  { name: "Innovation", weight: "20%" },
  { name: "Potential to Scale", weight: "20%" },
  { name: "Potential Positive Impact", weight: "20%" },
];

const rubricLevels = [
  { rating: "A", description: "Advanced", points: 4 },
  { rating: "B", description: "Proficient", points: 3 },
  { rating: "C", description: "Developing", points: 2 },
  { rating: "D", description: "Basic", points: 1 },
];

const rubricCriteria = [
  { title: "Needs Assessment", body: "Evaluates the team's understanding of community needs, strengths, and the evidence supporting the proposed intervention." },
  { title: "Business Principles & Financials", body: "Evaluates the viability of the business model, financial sustainability, revenue generation strategy, and understanding of entrepreneurship principles." },
  { title: "Innovation", body: "Evaluates originality, creativity, and the extent to which the project introduces or improves products, services, technologies, or methodologies." },
  { title: "Potential to Scale", body: "Evaluates the project's capacity for growth, replication, expansion, and long-term sustainability." },
  { title: "Potential Positive Impact", body: "Evaluates the project's potential to generate measurable, lasting social, environmental, and economic improvements." },
  { title: "Pitch", body: "Evaluates clarity, organization, persuasiveness, confidence, storytelling, and overall communication effectiveness." },
  { title: "Question & Answer", body: "Evaluates the team's ability to provide thoughtful, well-supported, and insightful responses during the judges' questions." },
];

const awards = [
  {
    icon: Trophy,
    title: "National Champion",
    prize: "PHP 100,000",
    color: "text-amber-500",
    items: [
      "Trophy for the Champion Team",
      "Champion Certificates for the official student delegates and faculty advisor",
      "Cash Prize of PHP 100,000",
      "Official designation as the Enactus Philippines Early-Stage Project National Champion 2026",
      "The right to represent the Philippines at the Enactus World Cup 2026 – Early-Stage Competition Track",
    ],
  },
  {
    icon: Medal,
    title: "First Runner-Up",
    prize: "PHP 50,000",
    color: "text-slate-400",
    items: [
      "Trophy",
      "Certificates",
      "Cash Prize of PHP 50,000",
    ],
  },
  {
    icon: Medal,
    title: "Second Runner-Up",
    prize: "PHP 25,000",
    color: "text-amber-700",
    items: [
      "Trophy",
      "Certificates",
      "Cash Prize of PHP 25,000",
    ],
  },
];

const scheduleSlots = [
  { activity: "Team Set-up", duration: "1 minute" },
  { activity: "Project Presentation", duration: "5 minutes" },
  { activity: "Judges' Question and Answer", duration: "4 minutes" },
];

export default function National2026Page() {
  const targetDate = new Date("2026-10-08T00:00:00+08:00");

  return (
    <div className="min-h-screen bg-background">
      {/* ─── HERO ─── */}
      <PageHero
        eyebrow="National Competition"
        title={
          <>
            Enactus Philippines
            <br />
            <span className="text-foreground/40">National Competition 2026</span>
          </>
        }
        subtitle="Early-Stage Project Competition Track  ·  October 8–10, 2026  ·  Manila, Philippines"
      />

      {/* ─── COUNTDOWN BANNER ─── */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 grid-bg opacity-[0.06]" aria-hidden />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <AnimatedSection>
            <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-secondary-foreground/60">
                  · Call for Applications opens July 31, 2026
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Competition countdown
                </h2>
                <p className="mt-2 max-w-lg text-secondary-foreground/80">
                  The premier gathering of student leaders, faculty advisors, and
                  social innovators across the Philippines.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <CountdownTimer targetDate={targetDate} />
              </div>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 h-8 w-1/4 yellow-slash" aria-hidden />
      </section>

      {/* ─── OVERVIEW ─── */}
      <section className="border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Overview
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                A new chapter for{" "}
                <span className="text-foreground/50">Filipino innovators.</span>
              </h2>
              <div className="mt-8 space-y-5 text-body leading-relaxed text-muted-foreground">
                <p>
                  Enactus Philippines proudly announces the Enactus Philippines
                  National Competition 2026, the country&apos;s premier gathering of
                  student leaders, faculty advisors, entrepreneurs, industry
                  experts, government partners, and social innovators committed to
                  creating a better world through entrepreneurial action.
                </p>
                <p>
                  As 2026 marks the relaunch year of Enactus in the Philippines,
                  this year&apos;s national competition introduces the{" "}
                  <strong className="text-foreground">Early-Stage Project Competition Track</strong>{" "}
                  as the official competition category. Instead of the traditional
                  Enactus Core Competition, student teams will present innovative
                  entrepreneurial project concepts that are still in the ideation
                  or early implementation stage.
                </p>
                <p>
                  The Early-Stage Competition was first introduced globally by
                  Enactus at the Enactus World Cup 2024 to strengthen support for
                  student teams at the beginning of their entrepreneurial journey.
                  It provides students the opportunity to receive expert feedback
                  before their projects begin generating measurable impact.
                </p>
                <p>
                  Projects developed through this year&apos;s competition are
                  expected to mature and eventually compete in the Enactus Core
                  Competition, which will officially return beginning in 2027.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── COMPETITION TIMELINE ─── */}
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Timeline
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Key dates for{" "}
                <span className="text-foreground/50">competition season.</span>
              </h2>
            </div>
            <div className="mt-12 grid gap-3">
              {timeline.map((item, i) => (
                <div
                  key={item.event}
                  className="flex items-center gap-4 rounded-xl border border-border/60 bg-background p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm md:gap-6 md:p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-1 flex-col gap-1 md:flex-row md:items-center md:justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {item.event}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground md:text-right">
                      {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── ELIGIBILITY ─── */}
      <section className="border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Eligibility
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Who can{" "}
                <span className="text-foreground/50">participate.</span>
              </h2>
              <div className="mt-8 space-y-6">
                <p className="text-body leading-relaxed text-muted-foreground">
                  The competition is open to all recognized Higher Education
                  Institutions (HEIs) in the Philippines.
                </p>
                <div className="rounded-xl border border-border/60 bg-background p-6">
                  <h3 className="flex items-center gap-2 text-sm font-semibold">
                    <Users className="h-4 w-4 text-primary" />
                    Team Composition
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Each participating institution shall send:
                  </p>
                  <ul className="mt-3 space-y-2">
                    {[
                      "One (1) Faculty Advisor",
                      "Three (3) Student Team Members",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border/60 bg-background p-6">
                  <h3 className="flex items-center gap-2 text-sm font-semibold">
                    <Building2 className="h-4 w-4 text-primary" />
                    One Team Per Campus Policy
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    In accordance with Enactus Global policies:
                  </p>
                  <ul className="mt-3 space-y-2">
                    {[
                      "Only one (1) team may represent a school's campus.",
                      "Institutions operating multiple legally distinct campuses may send one team per campus.",
                      "Campuses must be officially recognized as separate campuses by the institution.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── ABOUT EARLY-STAGE ─── */}
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · About the Competition
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                What is an{" "}
                <span className="text-foreground/50">Early-Stage Project?</span>
              </h2>
              <p className="mt-6 text-body leading-relaxed text-muted-foreground">
                An Early-Stage Project is a project that has not yet produced
                measurable or tangible impact at the time of competition.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {[
                "Idea conceptualization",
                "Prototype development",
                "Validation",
                "Pilot implementation",
                "Initial market testing",
              ].map((stage, i) => (
                <div
                  key={stage}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-background p-4"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium leading-snug">{stage}</span>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
              Teams are expected to present the project&apos;s vision, business
              model, innovation, implementation strategy, and anticipated
              positive impact rather than completed results.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── OBJECTIVES ─── */}
      <section className="border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Objectives
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                What the competition aims to achieve
              </h2>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border md:grid-cols-2 lg:grid-cols-4">
              {objectives.map((obj) => (
                <div
                  key={obj.title}
                  className="group relative bg-background p-8 transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary hover:text-secondary-foreground hover:shadow-md"
                >
                  <obj.icon
                    className="h-5 w-5 text-primary"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-6 text-subsection font-semibold leading-tight">
                    {obj.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-80">
                    {obj.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── APPLICATION REQUIREMENTS ─── */}
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Application Requirements
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                How to{" "}
                <span className="text-foreground/50">apply.</span>
              </h2>
              <p className="mt-6 text-body leading-relaxed text-muted-foreground">
                Interested teams must submit an Entrepreneurial Project Concept
                through the official online submission portal. The concept shall
                be evaluated based on the following criteria:
              </p>
            </div>
            <div className="mt-10 overflow-hidden rounded-2xl border border-border/60">
              {criteria.map((c, i) => (
                <div
                  key={c.name}
                  className={`flex items-center justify-between px-6 py-4 text-sm ${
                    i % 2 === 0 ? "bg-background" : "bg-muted/20"
                  }`}
                >
                  <span className="font-medium text-foreground">{c.name}</span>
                  <Badge variant="secondary" className="font-mono text-xs">
                    {c.weight}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-border/60 bg-muted/30 p-6">
              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Applications must be submitted on or before:
                  </p>
                  <p className="mt-1 text-lg font-semibold tracking-tight">
                    August 25, 2026
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Applications received after the deadline shall no longer be
                    considered.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <a
                href="https://tinyurl.com/enactusph2026join"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
              >
                Apply Now
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Application Form:{" "}
              <a
                href="https://tinyurl.com/enactusph2026join"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono underline underline-offset-2 hover:text-foreground"
              >
                tinyurl.com/enactusph2026join
              </a>
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── SELECTION PROCESS ─── */}
      <section className="border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Selection Process
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                How teams are{" "}
                <span className="text-foreground/50">selected.</span>
              </h2>
              <div className="mt-8 space-y-4">
                {[
                  { label: "Independent Evaluation", desc: "All submitted applications shall undergo an independent evaluation." },
                  { label: "Top 60 Teams", desc: "The Top 60 Teams nationwide will be selected." },
                  { label: "Official Notification", desc: "Accepted teams will be officially notified on August 31, 2026." },
                  { label: "Advancement", desc: "Only accepted teams shall advance to the National Competition." },
                ].map((step, i) => (
                  <div
                    key={step.label}
                    className="flex items-start gap-4 rounded-xl border border-border/60 bg-background p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold">{step.label}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── CAPACITY-BUILDING PROGRAM ─── */}
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Capacity-Building Program
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Mandatory training for{" "}
                <span className="text-foreground/50">all accepted teams.</span>
              </h2>
              <p className="mt-6 text-body leading-relaxed text-muted-foreground">
                Participation in the Capacity-Building Program is mandatory for
                all accepted teams. The program consists of four (4) Saturday
                sessions throughout September 2026, organized in partnership with
                the{" "}
                <strong className="text-foreground">
                  Department of Science and Technology – Philippine Council for
                  Industry, Energy and Emerging Technology Research and
                  Development (DOST-PCIEERD)
                </strong>{" "}
                and its Regional Consortia.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Lightbulb, label: "Refined entrepreneurial project concept" },
                { icon: Target, label: "Improved business model" },
                { icon: ScrollText, label: "Professionally developed pitch deck" },
                { icon: CheckCircle, label: "Competition-ready presentation" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-3 rounded-xl border border-border/60 bg-background p-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── PITCHING FORMAT ─── */}
      <section className="border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Competition Format
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Four rounds to{" "}
                <span className="text-foreground/50">the championship.</span>
              </h2>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
              {[
                { round: "Opening Round", desc: "All accepted teams. Multiple leagues with independent judging panels." },
                { round: "Top 30", desc: "Advancing teams compete before a new judging panel." },
                { round: "Semi-Final", desc: "Top 10 teams compete for a place in the championship round." },
                { round: "Final", desc: "Top 4 teams compete for the title of National Champion." },
              ].map((r, i) => (
                <div key={r.round} className="flex items-center gap-3 md:gap-4">
                  <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background px-5 py-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-primary">
                      Round {i + 1}
                    </span>
                    <span className="text-sm font-semibold">{r.round}</span>
                    <span className="max-w-[10rem] text-[11px] leading-relaxed text-muted-foreground">
                      {r.desc}
                    </span>
                  </div>
                  {i < 3 && (
                    <ChevronRight className="hidden h-5 w-5 shrink-0 text-muted-foreground/30 md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── SCHEDULE PER TEAM ─── */}
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Per Team Schedule
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                10 minutes to{" "}
                <span className="text-foreground/50">make an impact.</span>
              </h2>
              <p className="mt-6 text-body leading-relaxed text-muted-foreground">
                Each team shall be allocated a total competition slot of 10
                minutes. Unused presentation time cannot be transferred to the
                Question-and-Answer period.
              </p>
            </div>
            <div className="mt-10 overflow-hidden rounded-2xl border border-border/60">
              <div className="grid grid-cols-2 gap-px bg-border">
                <div className="bg-muted/40 px-6 py-4 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Activity
                </div>
                <div className="bg-muted/40 px-6 py-4 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Duration
                </div>
                {scheduleSlots.map((slot, i) => (
                  <>
                    <div
                      key={`act-${i}`}
                      className={`flex items-center gap-3 px-6 py-4 text-sm ${
                        i % 2 === 0 ? "bg-background" : "bg-muted/10"
                      }`}
                    >
                      <Clock className="h-3.5 w-3.5 text-primary" />
                      <span>{slot.activity}</span>
                    </div>
                    <div
                      key={`dur-${i}`}
                      className={`flex items-center px-6 py-4 text-sm font-medium ${
                        i % 2 === 0 ? "bg-background" : "bg-muted/10"
                      }`}
                    >
                      {slot.duration}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── JUDGING RUBRIC ─── */}
      <section className="border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Judging Rubric
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                How teams are{" "}
                <span className="text-foreground/50">evaluated.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Throughout the competition, judges shall answer one overarching
                question:
              </p>
              <div className="mt-4 rounded-xl border border-border/60 bg-background p-5 text-center">
                <p className="text-sm font-medium italic leading-relaxed text-foreground">
                  &ldquo;Which Enactus team most effectively presented a project
                  idea with the greatest potential for sustainable positive social
                  and/or environmental impact?&rdquo;
                </p>
              </div>
            </div>

            {/* Scoring levels */}
            <div className="mt-12 grid gap-3 sm:grid-cols-4">
              {rubricLevels.map((level) => (
                <div
                  key={level.rating}
                  className="rounded-xl border border-border/60 bg-background p-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <span className="font-mono text-2xl font-bold text-primary">
                    {level.rating}
                  </span>
                  <p className="mt-1 text-sm font-medium">{level.description}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                    {level.points} {level.points === 1 ? "point" : "points"}
                  </p>
                </div>
              ))}
            </div>

            {/* Criteria cards */}
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border md:grid-cols-2 lg:grid-cols-3">
              {rubricCriteria.map((c) => (
                <div
                  key={c.title}
                  className="bg-background p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <Scale className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    <h3 className="text-sm font-semibold leading-snug">
                      {c.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── CODE OF CONDUCT ─── */}
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Code of Conduct
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Standards we{" "}
                <span className="text-foreground/50">uphold.</span>
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Demonstrate professionalism at all times.",
                  "Observe honesty and integrity.",
                  "Treat fellow competitors, judges, volunteers, and organizers with respect.",
                  "Refrain from disruptive or unethical behavior.",
                  "Follow all instructions issued by Enactus Philippines.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-background p-4"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Violation of competition policies may result in deductions,
                disqualification, or other disciplinary actions at the discretion
                of the Organizing Committee.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── COMPETITION RULES ─── */}
      <section className="border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Competition Rules
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Guidelines all participants{" "}
                <span className="text-foreground/50">must follow.</span>
              </h2>
              <div className="mt-8 space-y-3">
                {[
                  "Only officially accepted teams may compete.",
                  "All competing students must be officially enrolled in the institution they represent during Academic Year 2026–2027.",
                  "Teams shall consist of the officially registered delegation only.",
                  "Presentations must not exceed five (5) minutes.",
                  "Judges' decisions are final and non-appealable.",
                  "Enactus Philippines reserves the right to modify schedules and operational procedures when necessary.",
                  "Participation in the mandatory Capacity-Building Program is required to maintain eligibility for the National Competition.",
                  "Projects must be original works developed by the competing team and must comply with applicable laws, ethical standards, and intellectual property regulations.",
                ].map((rule) => (
                  <div
                    key={rule}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-background p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/30 text-[10px] font-bold text-primary">
                      !
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {rule}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── AWARDS ─── */}
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Awards
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                What&apos;s at{" "}
                <span className="text-foreground/50">stake.</span>
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {awards.map((award) => (
                <Card
                  key={award.title}
                  className={`relative overflow-hidden border-border/60 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                    award.title === "National Champion" ? "ring-1 ring-primary/20" : ""
                  }`}
                >
                  {award.title === "National Champion" && (
                    <div className="absolute right-3 top-3 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary">
                      Top Prize
                    </div>
                  )}
                  <CardHeader className="pb-3">
                    <award.icon className={`h-8 w-8 ${award.color}`} strokeWidth={1.5} />
                    <CardTitle className="mt-4 text-lg font-semibold">
                      {award.title}
                    </CardTitle>
                    <p className="text-2xl font-bold tracking-tight text-primary">
                      {award.prize}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {award.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                          <Sparkles className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── WORLD CUP REPRESENTATION ─── */}
      <section className="border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · World Cup
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Philippine Representative to the{" "}
                <span className="text-foreground/50">Enactus World Cup 2026</span>
              </h2>
              <p className="mt-6 text-body leading-relaxed text-muted-foreground">
                The Enactus Philippines Early-Stage Project National Champion
                shall be officially designated as the Philippine Representative to
                the Enactus World Cup 2026 – Early-Stage Competition Track,
                subject to full compliance with all eligibility requirements,
                competition rules, and participation policies prescribed by
                Enactus Global.
              </p>
              <div className="mt-8 rounded-xl border border-border/60 bg-background p-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold">
                  <Globe className="h-4 w-4 text-primary" />
                  World Cup Sponsorship Package
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Enactus Philippines shall provide an all-expense-paid
                  sponsorship for the official delegation composed of three (3)
                  student representatives and one (1) Faculty Advisor.
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {[
                    "Round-trip international airfare",
                    "Hotel accommodation for the World Cup program",
                    "Registration and participation fees",
                    "Local transportation for competition activities",
                    "Comprehensive travel insurance",
                    "Daily allowance per diem",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── FORFEITURE POLICY ─── */}
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Forfeiture Policy
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Responsibilities of the{" "}
                <span className="text-foreground/50">National Champion.</span>
              </h2>
              <p className="mt-6 text-body leading-relaxed text-muted-foreground">
                The title of National Champion and the corresponding opportunity
                to represent the Philippines carries significant responsibilities.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "Eligibility for Representation",
                    body: "The National Champion must remain fully compliant with all eligibility requirements, competition rules, and participation policies.",
                  },
                  {
                    title: "Grounds for Forfeiture",
                    body: "Voluntary withdrawal, failure to confirm participation, failure to submit required documents, disqualification, or discovery of misrepresentation.",
                  },
                  {
                    title: "Alternate Representative",
                    body: "Should the National Champion forfeit, the next highest-ranked eligible team shall be designated. Order of succession: First Runner-Up → Second Runner-Up → Next highest-ranked finalist.",
                  },
                  {
                    title: "No Cash Conversion",
                    body: "The opportunity to represent the Philippines and the corresponding sponsorship package are non-transferable and may not be converted into cash.",
                  },
                ].map((policy, i) => (
                  <div
                    key={policy.title}
                    className="flex items-start gap-4 rounded-xl border border-border/60 bg-background p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold">{policy.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {policy.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── CONTACT / CTA ─── */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 grid-bg opacity-[0.06]" aria-hidden />
        <AnimatedSection>
          <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-secondary-foreground/60">
              · Apply Now
            </div>
            <h2 className="mt-4 max-w-3xl text-hero font-semibold leading-[1.05] tracking-tight">
              Ready to make your mark?
              <br />
              <span className="text-primary">Applications open July 31.</span>
            </h2>
            <p className="mt-6 max-w-xl text-secondary-foreground/80">
              For inquiries regarding eligibility, competition mechanics,
              submissions, or participation, please contact the Enactus
              Philippines Secretariat.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://tinyurl.com/enactusph2026join"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              >
                Apply Now
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="mailto:enactusph@enactus.org"
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-7 text-sm font-semibold transition-colors hover:bg-white/5"
              >
                enactusph@enactus.org
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.enactus.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-7 text-sm font-semibold transition-colors hover:bg-white/5"
              >
                www.enactus.ph
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-10 max-w-2xl text-sm leading-relaxed text-secondary-foreground/60">
              Together, let us empower the next generation of entrepreneurial
              leaders and create innovative solutions that improve lives,
              strengthen communities, and build a more sustainable Philippines.
            </p>
            <p className="mt-4 font-semibold text-secondary-foreground/80">
              See you at the Enactus Philippines National Competition 2026!
            </p>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 h-12 w-1/3 yellow-slash" aria-hidden />
      </section>
    </div>
  );
}
