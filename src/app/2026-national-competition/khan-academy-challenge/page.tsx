import type { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CountdownTimer } from "@/components/CountdownTimer";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Bot,
  Building2,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Globe,
  GraduationCap,
  Layers,
  Lightbulb,
  Medal,
  MessageSquare,
  Repeat,
  Rocket,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Users,
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
  title: "Khan Academy Education Impact Challenge 2026 | Enactus Philippines",
  description:
    "Official announcement, mechanics, and guidelines for the Khan Academy Education Impact Challenge (KEIC) 2026 — an Official Special Track of the Enactus Philippines National Competition 2026.",
};

const APPLY_URL = "https://tinyurl.com/enactusphkeic2026";

const timeline = [
  { date: "August 30, 2026", event: "Official Call for Applications" },
  { date: "August 30 – September 18, 2026", event: "Team Application" },
  { date: "September 4, 2026", event: "Khan Academy Special Track Information Session" },
  { date: "September 19, 2026", event: "Screening and Evaluation" },
  { date: "September 20, 2026", event: "Announcement of Top 30 Teams" },
  { date: "September 21–26, 2026", event: "Mandatory Virtual Capacity-Building Program" },
  { date: "October 9–10, 2026", event: "Khan Academy Track – National Competition" },
  { date: "November 1, 2026 – March 31, 2027", event: "Winning Initiative Implementation" },
];

const solveQuestions = [
  "How can we get more schools and teachers to adopt Khan Academy?",
  "How can we turn initial adoption into consistent, meaningful student learning?",
  "How can we empower teachers to become Khan Academy champions in their schools or communities?",
  "How can we reach learners in underserved, low-connectivity, or resource-constrained communities?",
  "How can partnerships with LGUs, businesses, universities, community organizations, or other stakeholders accelerate adoption?",
  "What creative incentives, campaigns, training models, technology solutions, or community-based approaches could make Khan Academy part of everyday learning?",
  "Most importantly: How can your solution continue and scale after the competition ends?",
];

const lookingFor = [
  {
    icon: Users,
    title: "Reach",
    body: "More students, teachers, classrooms, or schools actively using Khan Academy.",
  },
  {
    icon: BookOpen,
    title: "Engagement",
    body: "Meaningful use—such as learning time, skills practiced or mastered, teacher usage, or repeat participation.",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    body: "Evidence or a credible pathway showing improvements in learning, teaching, access, motivation, or educational opportunity.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "An entrepreneurial approach that addresses a real barrier to adoption or engagement.",
  },
  {
    icon: Layers,
    title: "Scalability",
    body: "A model that can be replicated across more schools, communities, cities, or provinces.",
  },
  {
    icon: Repeat,
    title: "Sustainability",
    body: "A solution that can continue creating impact beyond March 2027 without depending indefinitely on the Enactus team.",
  },
];

const journeyStages = [
  {
    label: "Application & Selection",
    desc: "Submit your team information and entrepreneurial project concept. Thirty (30) entries will be selected.",
  },
  {
    label: "Mandatory Virtual Capacity-Building",
    desc: "Selected teams strengthen problem validation, entrepreneurship, solution design, impact measurement, Khan Academy integration, and pitching.",
  },
  {
    label: "Project Development",
    desc: "Teams refine and develop their initiatives in preparation for the National Competition.",
  },
  {
    label: "National Competition",
    desc: "The 30 selected entries compete in person in the Khan Academy track. The field advances from Top 30 → Top 10 → Top 4 → Champion.",
  },
  {
    label: "Implementation",
    desc: "Winning teams implement their proposed initiatives from November 1, 2026 to March 31, 2027 and report progress and impact.",
  },
];

const applicationCriteria = [
  { name: "Needs Assessment", weight: "15%" },
  { name: "Business Principles & Financials", weight: "15%" },
  { name: "Innovation", weight: "15%" },
  { name: "Meaningful Khan Academy Integration", weight: "25%" },
  { name: "Potential to Scale", weight: "15%" },
  { name: "Potential Positive Impact", weight: "15%" },
];

const selectionSteps = [
  { label: "Application", desc: "Teams submit their application and entrepreneurial project concept." },
  { label: "Screening and Evaluation", desc: "Applications are evaluated using the official KEIC criteria." },
  { label: "Top 30 Teams", desc: "The Top 30 teams are selected." },
  { label: "Official Notification", desc: "Selected teams are announced on September 20, 2026." },
  { label: "Advancement", desc: "The selected teams proceed to the mandatory Virtual Capacity-Building Program and subsequently to the Khan Academy track of the National Competition." },
];

const capacityAreas = [
  { icon: Target, label: "Problem validation" },
  { icon: Rocket, label: "Entrepreneurship" },
  { icon: Lightbulb, label: "Solution design" },
  { icon: BarChart3, label: "Impact measurement" },
  { icon: GraduationCap, label: "Khan Academy integration" },
  { icon: MessageSquare, label: "Pitching" },
];

const rounds = [
  { round: "Opening Round", desc: "The 30 selected teams compete in person. The Top 10 teams advance." },
  { round: "Semi-Final", desc: "The Top 10 teams compete for a place in the championship round." },
  { round: "Final / Championship", desc: "The Top 4 teams compete. The Grand Champion and runners-up are crowned." },
];

const scheduleSlots = [
  { activity: "Team Set-up", duration: "1 minute" },
  { activity: "Project Presentation", duration: "5 minutes" },
  { activity: "Judges' Question and Answer", duration: "4 minutes" },
];

const judgingCriteria = [
  { name: "Needs Assessment", weight: "15%" },
  { name: "Business Principles & Financials", weight: "15%" },
  { name: "Innovation", weight: "15%" },
  { name: "Meaningful Khan Academy Integration", weight: "15%" },
  { name: "Potential to Scale", weight: "15%" },
  { name: "Potential Positive Impact", weight: "15%" },
  { name: "Pitch & Q&A", weight: "10%" },
];

const rubricCriteria = [
  { title: "Needs Assessment", body: "Real problem, barriers, target users, context, evidence, and validation." },
  { title: "Business Principles & Financials", body: "Viability, resource strategy, financial sustainability, cost logic, and continuation pathway." },
  { title: "Innovation", body: "Originality and creativity in solving a real barrier." },
  { title: "Meaningful Khan Academy Integration", body: "Strategic integration of Khan Academy into the initiative." },
  { title: "Potential to Scale", body: "Ability to replicate across schools, communities, cities, or provinces." },
  { title: "Potential Positive Impact", body: "Potential for measurable improvements in learning, teaching, access, motivation, or educational opportunity." },
  { title: "Pitch & Q&A", body: "Clarity, storytelling, persuasiveness, evidence, confidence, and ability to defend assumptions." },
];

const majorAwards = [
  {
    icon: Trophy,
    title: "Grand Champion",
    prize: "₱200,000",
    color: "text-amber-500",
    items: [
      "₱100,000 Team Award",
      "₱100,000 Implementation Grant",
    ],
  },
  {
    icon: Medal,
    title: "First Runner-up",
    prize: "₱150,000",
    color: "text-slate-400",
    items: [
      "₱75,000 Team Award",
      "₱75,000 Implementation Grant",
    ],
  },
  {
    icon: Medal,
    title: "Second Runner-up",
    prize: "₱100,000",
    color: "text-amber-700",
    items: [
      "₱50,000 Team Award",
      "₱50,000 Implementation Grant",
    ],
  },
];

const specialAwards = [
  { title: "Best Literacy Initiative", total: "₱30,000", split: "₱15,000 Team Award + ₱15,000 Implementation Grant" },
  { title: "Best Numeracy Initiative", total: "₱30,000", split: "₱15,000 Team Award + ₱15,000 Implementation Grant" },
  { title: "Best School Adoption Initiative", total: "₱30,000", split: "₱15,000 Team Award + ₱15,000 Implementation Grant" },
  { title: "Best Teacher Empowerment Initiative", total: "₱30,000", split: "₱15,000 Team Award + ₱15,000 Implementation Grant" },
  { title: "Best Student Engagement Initiative", total: "₱30,000", split: "₱15,000 Team Award + ₱15,000 Implementation Grant" },
  { title: "Best Digital Engagement Campaign", total: "₱30,000", split: "₱15,000 Team Award + ₱15,000 Implementation Grant" },
  { title: "People's Choice Award", total: "₱20,000", split: "₱10,000 Team Award + ₱10,000 Implementation Grant" },
];

const beyondCash = [
  "Khan Academy Philippines Education Innovation Award trophy and certificate",
  "National recognition through Khan Academy Philippines and Enactus Philippines",
  "Mentorship from education, technology, and business leaders during implementation",
  "Priority consideration for internships and ambassador opportunities with Khan Academy Philippines",
  "Opportunities to showcase successful projects at national education events",
  "Potential consideration for broader replication and scale through Khan Academy Philippines",
];

const implementationDuties = [
  "Establish agreed milestones and measurable targets at the start of implementation.",
  "Use implementation grants only for approved project expenses directly related to the winning proposal.",
  "Provide progress and impact reports to Khan Academy Philippines and Enactus Philippines.",
  "Provide supporting evidence of implementation, reach, engagement, and impact.",
];

const privacyRules = [
  "Not collect, publish, or share identifiable student data, student accounts, photos, videos, quotes, or assessment results without required school and parental permissions.",
  "Use aggregated and anonymized reporting unless a lawful and expressly authorized basis permits otherwise.",
  "Obtain required permissions for learner-facing activities and comply with applicable school, child-protection, and data-privacy requirements.",
];

const aiRules = [
  "Use AI only to support—not replace—team ideas, teacher judgment, learner agency, or responsible implementation.",
  "Protect personal data and obtain required school and parent/guardian permissions for learner-facing activities.",
  "Ensure adult supervision for learner-facing AI activities.",
  "Disclose meaningful AI use and verify AI-generated content.",
  "Never use AI for high-stakes learner decisions or process sensitive data without authorization.",
  "Never fabricate project results.",
];

const tocItems = [
  { id: "timeline", label: "Timeline" },
  { id: "challenge", label: "The Challenge" },
  { id: "solve", label: "What Can You Solve?" },
  { id: "looking-for", label: "What We're Looking For" },
  { id: "eligibility", label: "Eligibility" },
  { id: "about", label: "About the Competition" },
  { id: "journey", label: "Competition Journey" },
  { id: "application", label: "Application" },
  { id: "selection", label: "Selection Process" },
  { id: "capacity-building", label: "Capacity-Building" },
  { id: "competition", label: "National Competition" },
  { id: "judging", label: "Judging Rubric" },
  { id: "awards", label: "Awards" },
  { id: "implementation", label: "Implementation" },
  { id: "safeguards", label: "Participant Safeguards" },
  { id: "world-cup", label: "World Cup Eligibility" },
  { id: "faq", label: "FAQ" },
  { id: "apply", label: "Apply Now" },
];

const faqCategories: {
  title: string;
  items: { q: string; a: React.ReactNode }[];
}[] = [
  {
    title: "General",
    items: [
      {
        q: "Who may participate in the Khan Academy Education Impact Challenge?",
        a: "The competition is open to all recognized Higher Education Institutions (HEIs) in the Philippines.",
      },
      {
        q: "How many students and faculty members compose the team?",
        a: (
          <span>
            Each participating institution shall send:
            <br />
            &bull; One (1) Faculty Advisor
            <br />
            &bull; Three (3) Student Team Members
          </span>
        ),
      },
      {
        q: "Can another team from our university participate in the Early-Stage Project Track?",
        a: (
          <span>
            Yes. However, the KEIC team and the Early-Stage Project Track team
            must be distinct and independently constituted, with different
            faculty advisers and student members. No faculty adviser or student
            member may participate in both teams.
          </span>
        ),
      },
      {
        q: "Does our project need to be fully implemented before we apply?",
        a: (
          <span>
            No. KEIC is designed as an early-stage, developmental competition.
            Teams need to demonstrate a credible understanding of the problem, a
            promising entrepreneurial solution, and clear potential for
            meaningful impact.
          </span>
        ),
      },
    ],
  },
  {
    title: "Application",
    items: [
      {
        q: "When is the application period?",
        a: "August 30 – September 18, 2026.",
      },
      {
        q: "When will the Top 30 teams be announced?",
        a: "September 20, 2026.",
      },
      {
        q: "Where do we apply?",
        a: (
          <span>
            Through the official KEIC application form:{" "}
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-2 hover:opacity-80"
            >
              Apply Now
            </a>
          </span>
        ),
      },
    ],
  },
  {
    title: "Competition",
    items: [
      {
        q: "How many teams will compete in the National Competition?",
        a: "Thirty (30) selected entries will compete in person in the Khan Academy track.",
      },
      {
        q: "How does the competition progress?",
        a: "Top 30 → Top 10 → Top 4 → Champion",
      },
      {
        q: "How long is the competition presentation?",
        a: (
          <span>
            Each team has a total 10-minute competition slot:
            <br />
            &bull; 1 minute — Team Set-up
            <br />
            &bull; 5 minutes — Project Presentation
            <br />
            &bull; 4 minutes — Judges&apos; Q&amp;A
          </span>
        ),
      },
      {
        q: "When is the Khan Academy track?",
        a: (
          <span>
            The Enactus Philippines Early-Stage Project Competition Track and
            the Khan Academy Education Impact Challenge Track will both be
            implemented at the Enactus Philippines National Competition and
            Innovation Summit on October 9–10, 2026 in De La Salle University.
          </span>
        ),
      },
    ],
  },
  {
    title: "Implementation",
    items: [
      {
        q: "When will winning teams implement their initiatives?",
        a: "November 1, 2026 – March 31, 2027.",
      },
      {
        q: "Do winning teams need to report their results?",
        a: (
          <span>
            Yes. Winning teams are required to provide progress and impact
            reports and supporting evidence of implementation, reach,
            engagement, and impact.
          </span>
        ),
      },
    ],
  },
  {
    title: "Awards",
    items: [
      {
        q: "What is the total prize pool?",
        a: (
          <span>
            The total prize pool is ₱650,000, consisting of ₱325,000 in Team
            Awards and ₱325,000 in Implementation Grants.
          </span>
        ),
      },
      {
        q: "Can implementation grants from different awards be combined?",
        a: (
          <span>
            Yes. If a team receives both a Major and Special Award, the
            implementation funding from both awards may be combined to support
            the winning initiative.
          </span>
        ),
      },
    ],
  },
];

export default function KhanAcademyChallengePage() {
  const targetDate = new Date("2026-09-18T23:59:59+08:00");
  const competitionDate = new Date("2026-10-09T00:00:00+08:00");

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="Khan Academy Special Track"
        title={
          <>
            Khan Academy
            <br />
            <span className="text-foreground/40">
              Education Impact Challenge 2026
            </span>
          </>
        }
        subtitle={"An Official Special Track of the Enactus Philippines National Competition 2026  ·  October 9–10, 2026  ·  De La Salle University, Manila, Philippines"}
      />

      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 grid-bg opacity-[0.06]" aria-hidden />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <AnimatedSection>
            <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-secondary-foreground/60">
                  · Applications close September 18, 2026
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Application countdown
                </h2>
                <p className="mt-2 max-w-lg text-secondary-foreground/80">
                  Design a scalable, sustainable, and entrepreneurial initiative
                  that expands the meaningful use of Khan Academy across the
                  Philippines.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <CountdownTimer targetDate={targetDate} />
              </div>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-secondary-foreground/60">
                    · Khan Academy Track · October 9–10, 2026
                  </div>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                    Competition countdown
                  </h2>
                  <p className="mt-2 max-w-lg text-secondary-foreground/80">
                    The premier gathering of student leaders, faculty advisors,
                    and social innovators across the Philippines.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <CountdownTimer targetDate={competitionDate} />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 h-8 w-1/4 yellow-slash" aria-hidden />
      </section>

      <section className="border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Overview
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Turn an education challenge into{" "}
                <span className="text-foreground/50">real impact.</span>
              </h2>
              <div className="mt-8 space-y-5 text-body leading-relaxed text-muted-foreground">
                <p>
                  The{" "}
                  <strong className="text-foreground">
                    Khan Academy Education Impact Challenge (KEIC) 2026
                  </strong>{" "}
                  invites Enactus teams across the Philippines to design
                  scalable, sustainable, and entrepreneurial initiatives that
                  expand the meaningful use of Khan Academy among more students,
                  teachers, and schools.
                </p>
                <p>
                  We are looking for teams that can identify a real barrier,
                  build a compelling solution, measure meaningful engagement,
                  and show how their model can grow beyond their initial
                  community.
                </p>
                <p>
                  If your team has an idea that can help make free, world-class
                  education more accessible to Filipino learners, this is your
                  chance to build it, test it, pitch it, and take it further.
                </p>
              </div>
              <div className="relative mt-10 aspect-square overflow-hidden rounded-2xl border border-border/60 bg-muted">
                <Image
                  src="/keic-2026/keic-2026-poster.png"
                  alt="Official poster of the Khan Academy Education Impact Challenge (KEIC) 2026 — October 9–10, 2026, De La Salle University, Manila, Philippines"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="mx-auto max-w-3xl">
          <nav className="rounded-xl border border-border/60 bg-muted/10 p-5">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              On this page
            </p>
            <ul className="space-y-1">
              {tocItems.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-[11px] font-semibold text-primary">
                      {i + 1}
                    </span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <section id="timeline" className="scroll-mt-24 border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Timeline
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Key dates for the{" "}
                <span className="text-foreground/50">
                  KEIC 2026 competition season.
                </span>
              </h2>
            </div>
            <div className="mt-12 grid gap-3">
              {timeline.map((item) => (
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

      <section id="challenge" className="scroll-mt-24 border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · The Challenge
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                What is the{" "}
                <span className="text-foreground/50">
                  Khan Academy Education Impact Challenge?
                </span>
              </h2>
              <div className="mt-8 space-y-5 text-body leading-relaxed text-muted-foreground">
                <p>
                  The Khan Academy Education Impact Challenge asks Enactus teams
                  to design a scalable and sustainable initiative that can be
                  implemented from{" "}
                  <strong className="text-foreground">
                    November 1, 2026 to March 31, 2027
                  </strong>{" "}
                  to measurably expand the meaningful use of Khan Academy among
                  more students, teachers, and schools.
                </p>
                <p>
                  The initiative should contribute to Khan Academy
                  Philippines&apos; mission of bringing free, world-class
                  education to every Filipino learner.
                </p>
              </div>
              <div className="mt-8 rounded-xl border border-border/60 bg-background p-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold">
                  <Target className="h-4 w-4 text-primary" />
                  The Challenge Question
                </h3>
                <p className="mt-3 text-sm font-medium italic leading-relaxed text-foreground">
                  &ldquo;How can your Enactus team design a scalable and
                  sustainable initiative that, if selected, can be implemented
                  from November 1, 2026 to March 31, 2027 to measurably expand
                  the meaningful use of Khan Academy among more students, more
                  teachers, and more schools to accelerate Khan Academy
                  Philippines&apos; mission of bringing free, world-class
                  education to every Filipino learner?&rdquo;
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  By March 31, 2027, what will be different because your Enactus
                  team acted—and how will you prove it?
                </p>
                <p className="mt-4 text-sm font-medium leading-relaxed text-foreground">
                  Every idea, pitch, implementation plan, and impact report
                  should ultimately answer this question with evidence.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="solve" className="scroll-mt-24 border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · What Can You Solve?
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Questions your team{" "}
                <span className="text-foreground/50">may explore.</span>
              </h2>
              <div className="mt-8 space-y-3">
                {solveQuestions.map((question) => (
                  <div
                    key={question}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-background p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {question}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="looking-for" className="scroll-mt-24 border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · What We&apos;re Looking For
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Six things{" "}
                <span className="text-foreground/50">matter.</span>
              </h2>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border md:grid-cols-2 lg:grid-cols-3">
              {lookingFor.map((item) => (
                <div
                  key={item.title}
                  className="group relative bg-background p-8 transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary hover:text-secondary-foreground hover:shadow-md"
                >
                  <item.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-6 text-subsection font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-80">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="eligibility" className="scroll-mt-24 border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Eligibility
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Who may{" "}
                <span className="text-foreground/50">apply.</span>
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
                <div className="rounded-xl border border-border/60 bg-background p-6">
                  <h3 className="flex items-center gap-2 text-sm font-semibold">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    Unique and Separate Team from the Early-Stage Project Track
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    A team participating in the Khan Academy Education Impact
                    Challenge Track may come from the same university as a team
                    participating in the Early-Stage Project Track. However, the
                    two participating teams must be distinct and independently
                    constituted, with different faculty advisers and student
                    members.
                  </p>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
                    No faculty adviser or student member may participate in both
                    teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="about" className="scroll-mt-24 border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · About the Competition
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                You don&apos;t need a fully implemented project{" "}
                <span className="text-foreground/50">to apply.</span>
              </h2>
              <p className="mt-6 text-body leading-relaxed text-muted-foreground">
                KEIC is designed as an early-stage, developmental competition.
                At the application stage, your team does not need to have a
                fully implemented project. What matters is that you demonstrate:
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                "A credible understanding of the problem",
                "A promising entrepreneurial solution",
                "Clear potential for meaningful impact",
              ].map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-background p-4"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="journey" className="scroll-mt-24 border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Competition Journey
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                From idea to{" "}
                <span className="text-foreground/50">implementation.</span>
              </h2>
              <div className="mt-8 space-y-4">
                {journeyStages.map((stage, i) => (
                  <div
                    key={stage.label}
                    className="flex items-start gap-4 rounded-xl border border-border/60 bg-background p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold">{stage.label}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="application" className="scroll-mt-24 border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Application
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
              {applicationCriteria.map((c, i) => (
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
              <div className="flex items-center justify-between border-t border-border/60 bg-secondary px-6 py-4 text-sm text-secondary-foreground">
                <span className="font-semibold">Total</span>
                <Badge className="font-mono text-xs">100%</Badge>
              </div>
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
              The strongest entries will show that Khan Academy is strategically
              integrated into the proposed solution—not simply added as a
              registration or branding exercise.
            </p>
            <div className="mt-8 rounded-xl border border-border/60 bg-background p-6">
              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Application Period: August 30 – September 18, 2026
                  </p>
                  <p className="mt-3 text-sm font-medium text-foreground">
                    Applications must be submitted on or before:
                  </p>
                  <p className="mt-1 text-lg font-semibold tracking-tight">
                    September 18, 2026
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
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
              >
                Apply Now
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="selection" className="scroll-mt-24 border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Selection Process
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                How teams{" "}
                <span className="text-foreground/50">advance.</span>
              </h2>
              <div className="mt-8 space-y-4">
                {selectionSteps.map((step, i) => (
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

      <section id="capacity-building" className="scroll-mt-24 border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Capacity-Building Program
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Mandatory virtual capacity-building for{" "}
                <span className="text-foreground/50">selected teams.</span>
              </h2>
              <p className="mt-6 text-body leading-relaxed text-muted-foreground">
                The selected teams participate in the Mandatory Virtual
                Capacity-Building Program from{" "}
                <strong className="text-foreground">
                  September 21–26, 2026
                </strong>
                . The program is designed to strengthen teams&apos; ability to
                develop their proposed initiatives, and participation forms part
                of the KEIC competition journey.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {capacityAreas.map((item) => (
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

      <section id="competition" className="scroll-mt-24 border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · National Competition
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Three rounds to{" "}
                <span className="text-foreground/50">the championship.</span>
              </h2>
              <p className="mt-6 text-body leading-relaxed text-muted-foreground">
                The Khan Academy Education Impact Challenge Track will be held
                as part of the Enactus Philippines National Competition 2026.
                The 30 selected entries compete in person, and the field
                advances from Top 30 → Top 10 → Top 4 → Champion.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
              {rounds.map((r, i) => (
                <div key={r.round} className="flex items-center gap-3 md:gap-4">
                  <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background px-5 py-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-primary">
                      Round {i + 1}
                    </span>
                    <span className="text-sm font-semibold">{r.round}</span>
                    <span className="max-w-[12rem] text-[11px] leading-relaxed text-muted-foreground">
                      {r.desc}
                    </span>
                  </div>
                  {i < rounds.length - 1 && (
                    <ChevronRight className="hidden h-5 w-5 shrink-0 text-muted-foreground/30 md:block" />
                  )}
                </div>
              ))}
            </div>
            <div className="mx-auto mt-16 max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Per-Team Competition Schedule
              </div>
              <h3 className="mt-4 text-subsection font-semibold leading-tight tracking-tight">
                10 minutes to{" "}
                <span className="text-foreground/50">make an impact.</span>
              </h3>
              <p className="mt-4 text-body leading-relaxed text-muted-foreground">
                Each team shall be allocated a total competition slot of 10
                minutes.
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-border/60">
              <div className="grid grid-cols-2 gap-px bg-border">
                <div className="bg-muted/40 px-6 py-4 text-left font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Activity
                </div>
                <div className="bg-muted/40 px-6 py-4 text-left font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Duration
                </div>
                {scheduleSlots.map((slot, i) => (
                  <Fragment key={slot.activity}>
                    <div
                      className={`flex items-center gap-3 px-6 py-4 text-sm ${
                        i % 2 === 0 ? "bg-background" : "bg-muted/10"
                      }`}
                    >
                      <Clock className="h-3.5 w-3.5 text-primary" />
                      <span>{slot.activity}</span>
                    </div>
                    <div
                      className={`flex items-center px-6 py-4 text-sm font-medium ${
                        i % 2 === 0 ? "bg-background" : "bg-muted/10"
                      }`}
                    >
                      {slot.duration}
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="judging" className="scroll-mt-24 border-b border-border/60 bg-muted/30">
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
            </div>
            <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-border/60">
              {judgingCriteria.map((c, i) => (
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
              <div className="flex items-center justify-between border-t border-border/60 bg-secondary px-6 py-4 text-sm text-secondary-foreground">
                <span className="font-semibold">Total</span>
                <Badge className="font-mono text-xs">100%</Badge>
              </div>
            </div>
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

      <section id="awards" className="scroll-mt-24 border-b border-border/60">
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
              <p className="mt-6 text-body leading-relaxed text-muted-foreground">
                Winning teams receive both recognition for their achievement and
                implementation funding to bring their proposed initiatives to
                life. Each Major and Special Award is divided equally between a
                Team Award and an Implementation Grant.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {majorAwards.map((award) => (
                <Card
                  key={award.title}
                  className={`relative overflow-hidden border-border/60 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                    award.title === "Grand Champion" ? "ring-1 ring-primary/20" : ""
                  }`}
                >
                  {award.title === "Grand Champion" && (
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
            <div className="mx-auto mt-12 max-w-3xl">
              <h3 className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                · Special Awards
              </h3>
              <div className="mt-6 overflow-hidden rounded-2xl border border-border/60">
                {specialAwards.map((award, i) => (
                  <div
                    key={award.title}
                    className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${
                      i % 2 === 0 ? "bg-background" : "bg-muted/20"
                    }`}
                  >
                    <div>
                      <span className="text-sm font-medium text-foreground">
                        {award.title}
                      </span>
                      <p className="text-xs text-muted-foreground">
                        {award.split}
                      </p>
                    </div>
                    <Badge variant="secondary" className="w-fit font-mono text-xs">
                      {award.total}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-border/60 bg-secondary p-6 text-center text-secondary-foreground">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-secondary-foreground/60">
                  · Total Prize Pool
                </p>
                <p className="mt-2 text-3xl font-bold tracking-tight text-primary">
                  ₱650,000
                </p>
                <p className="mt-1 text-sm text-secondary-foreground/80">
                  ₱325,000 in Team Awards + ₱325,000 in Implementation Grants
                </p>
              </div>
              <p className="mt-6 text-center text-sm leading-relaxed text-muted-foreground">
                If a team receives both a Major and Special Award, the
                implementation funding from both awards may be combined to
                support the winning initiative.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-3xl">
              <h3 className="text-center text-subsection font-semibold leading-tight tracking-tight">
                More than{" "}
                <span className="text-foreground/50">a cash prize.</span>
              </h3>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {beyondCash.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-background p-4"
                  >
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="implementation" className="scroll-mt-24 border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Implementation
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Winning means building,{" "}
                <span className="text-foreground/50">not just pitching.</span>
              </h2>
              <p className="mt-6 text-body leading-relaxed text-muted-foreground">
                Winning teams are expected to implement their proposed
                initiatives from{" "}
                <strong className="text-foreground">
                  November 1, 2026 through March 31, 2027
                </strong>
                . Proposals alone are not eligible for the major awards. Winning
                teams must:
              </p>
              <div className="mt-8 space-y-3">
                {implementationDuties.map((duty) => (
                  <div
                    key={duty}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-background p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {duty}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="safeguards" className="scroll-mt-24 border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Participant Safeguards
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Standards that{" "}
                <span className="text-foreground/50">protect learners.</span>
              </h2>
              <div className="mt-8 space-y-6">
                <div className="rounded-xl border border-border/60 bg-background p-6">
                  <h3 className="flex items-center gap-2 text-sm font-semibold">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    Data Privacy &amp; Child Protection
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Teams must:
                  </p>
                  <ul className="mt-3 space-y-2">
                    {privacyRules.map((rule) => (
                      <li key={rule} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border/60 bg-background p-6">
                  <h3 className="flex items-center gap-2 text-sm font-semibold">
                    <Bot className="h-4 w-4 text-primary" />
                    Responsible Use of AI
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Teams must:
                  </p>
                  <ul className="mt-3 space-y-2">
                    {aiRules.map((rule) => (
                      <li key={rule} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border/60 bg-background p-6">
                  <h3 className="flex items-center gap-2 text-sm font-semibold">
                    <Scale className="h-4 w-4 text-primary" />
                    Integrity
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Misrepresentation of participant counts, partner
                    commitments, funding secured, learning outcomes, platform
                    usage, or other material claims is grounds for
                    disqualification. All claims and evidence must be truthful
                    and supportable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="world-cup" className="scroll-mt-24 border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Enactus World Cup Non-Eligibility
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                An important note for{" "}
                <span className="text-foreground/50">participating teams.</span>
              </h2>
              <div className="mt-8 rounded-xl border border-border/60 bg-background p-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold">
                  <Globe className="h-4 w-4 text-primary" />
                  KEIC is a terminal competition
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Winning teams in this track are not eligible for Philippine
                  representation at the Enactus World Cup 2026 because KEIC is
                  not an official Enactus Global competition track.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="faq" className="scroll-mt-24 border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · FAQ
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Frequently asked{" "}
                <span className="text-foreground/50">questions.</span>
              </h2>
              <p className="mt-6 text-body leading-relaxed text-muted-foreground">
                Answers to the most common questions about eligibility,
                applications, the competition, implementation, and awards.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-3xl space-y-10">
              {faqCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="mb-4 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {category.title}
                  </h3>
                  <Accordion
                    type="single"
                    collapsible
                    className="overflow-hidden rounded-2xl border border-border/60 bg-background px-5 sm:px-6"
                  >
                    {category.items.map((item, i) => (
                      <AccordionItem
                        key={item.q}
                        value={`${category.title}-${i}`}
                        className="border-border/60 last:border-0"
                      >
                        <AccordionTrigger className="py-4 text-left text-sm font-medium text-foreground hover:no-underline">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="apply" className="relative scroll-mt-24 overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 grid-bg opacity-[0.06]" aria-hidden />
        <AnimatedSection>
          <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-secondary-foreground/60">
              · Apply Now
            </div>
            <h2 className="mt-4 max-w-3xl text-hero font-semibold leading-[1.05] tracking-tight">
              Ready to build the next
              <br />
              <span className="text-primary">education innovation?</span>
            </h2>
            <p className="mt-6 max-w-xl text-secondary-foreground/80">
              If your team is ready to tackle a real education challenge, create
              meaningful engagement with Khan Academy, and build a model that
              can scale, we want to hear your idea.
            </p>
            <p className="mt-3 max-w-xl text-sm text-secondary-foreground/60">
              For competition inquiries, contact the Enactus Philippines
              Secretariat.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={APPLY_URL}
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
            </div>
            <p className="mt-10 max-w-2xl text-sm leading-relaxed text-secondary-foreground/60">
              Official announcements, application instructions, schedules, venue
              information, technical requirements, prize details, implementation
              requirements, reporting procedures, and other advisories will be
              issued through the official channels of Enactus Philippines and
              Khan Academy Philippines.
            </p>
            <p className="mt-4 font-semibold text-secondary-foreground/80">
              See you at the Khan Academy Education Impact Challenge 2026!
            </p>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 h-12 w-1/3 yellow-slash" aria-hidden />
      </section>
    </div>
  );
}
