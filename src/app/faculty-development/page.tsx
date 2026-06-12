import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CountdownTimer } from "@/components/CountdownTimer";
import {
  BookOpen,
  Building2,
  Calendar,
  ChevronRight,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  LineChart,
  Sparkles,
  Target,
  Users,
  Waypoints,
 ClipboardList,
  ScrollText,
  Route,
  ArrowUpRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Faculty Development Program | Enactus Philippines",
  description:
    "Enactus Philippines Faculty Fellows Program 2026 — a leadership fellowship for educators in entrepreneurship, innovation, and social impact.",
};

const objectives = [
  {
    icon: Users,
    title: "National Educator Pool",
    body: "Develop a national pool of entrepreneurial educators and innovation champions.",
  },
  {
    icon: Lightbulb,
    title: "Faculty Mentorship",
    body: "Strengthen faculty competencies in mentoring student-led innovation and entrepreneurship initiatives.",
  },
  {
    icon: Target,
    title: "Sustainable Development",
    body: "Deepen understanding of sustainable development, systems thinking, and social impact creation.",
  },
  {
    icon: ClipboardList,
    title: "Practical Tools",
    body: "Equip educators with practical tools for project design, implementation, measurement, and storytelling.",
  },
  {
    icon: HeartHandshake,
    title: "Community of Practice",
    body: "Build a community of practice among educators committed to innovation-driven and impact-oriented education.",
  },
  {
    icon: Building2,
    title: "Ecosystem Readiness",
    body: "Prepare faculty to establish, support, and sustain Enactus teams and innovation ecosystems within their institutions.",
  },
];

const sessions = [
  {
    day: 1,
    date: "June 15, 2026",
    title: "Entrepreneurial Leadership and the Future of Higher Education",
  },
  {
    day: 2,
    date: "June 17, 2026",
    title: "Design Thinking, Systems Thinking, and Social Innovation",
  },
  {
    day: 3,
    date: "June 19, 2026",
    title: "Sustainable Development and Creating Impact",
  },
  {
    day: 4,
    date: "June 22, 2026",
    title: "Mentoring Student Innovators and Building High-Performing Teams",
  },
  {
    day: 5,
    date: "June 24, 2026",
    title: "The Enactus Ecosystem and Capstone Fellowship Session",
  },
];

const participants = [
  "Current Enactus Faculty Advisors",
  "Prospective Faculty Advisors",
  "Entrepreneurship Educators",
  "Social Innovation & Sustainability Educators",
  "Student Affairs & Leadership Formation Personnel",
  "University Extension & Community Engagement Officers",
  "Innovation & Incubation Center Personnel",
  "Academic Administrators in Innovation & Entrepreneurship",
];

const deliverables = [
  {
    icon: ScrollText,
    title: "Leadership Reflection",
    body: "Personal reflection on entrepreneurial leadership and innovation.",
  },
  {
    icon: Route,
    title: "Faculty Mentorship Action Plan",
    body: "Strategy for mentoring students and supporting innovation initiatives.",
  },
  {
    icon: Waypoints,
    title: "Institutional Innovation & Enactus Development Roadmap",
    body: "A practical plan for strengthening innovation, entrepreneurship, and/or Enactus engagement within your institution.",
  },
];

const frameworkStages = [
  { label: "Inspire", color: "bg-primary" },
  { label: "Discover", color: "bg-amber-400" },
  { label: "Design", color: "bg-emerald-400" },
  { label: "Lead", color: "bg-blue-400" },
  { label: "Impact", color: "bg-violet-400" },
  { label: "Elevate", color: "bg-rose-400" },
];

export default function FacultyDevelopment() {
  const deadline = new Date("2026-06-12T23:59:00+08:00");

  return (
    <div className="min-h-screen bg-background">
      {/* ─── HERO ─── */}
      <PageHero
        eyebrow="Faculty Development"
        title={
          <>
            Faculty Fellows
            <br />
            <span className="text-foreground/40">Program 2026</span>
          </>
        }
        subtitle="Leading Innovation, Entrepreneurship, and Social Impact in Higher Education"
      />

      {/* ─── APPLY NOW BANNER ─── */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 grid-bg opacity-[0.06]" aria-hidden />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <AnimatedSection>
            <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-secondary-foreground/60">
                  · Applications close June 12, 2026
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Apply to the Fellowship
                </h2>
                <p className="mt-2 max-w-lg text-secondary-foreground/80">
                  Join the inaugural cohort of the Enactus Philippines Faculty
                  Fellows Program.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <CountdownTimer targetDate={deadline} />
                <a
                  href="https://tinyurl.com/enactusphfacultyfellowapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                >
                  Apply Now
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 h-8 w-1/4 yellow-slash" aria-hidden />
      </section>

      {/* ─── BACKGROUND & RATIONALE ─── */}
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Background &amp; Rationale
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Beyond teaching business.
                <br />
                <span className="text-foreground/50">
                  Building educator-leaders.
                </span>
              </h2>
              <div className="mt-8 space-y-5 text-body leading-relaxed text-muted-foreground">
                <p>
                  The future of entrepreneurship education extends beyond
                  teaching business concepts. It requires educators who can
                  cultivate innovation, guide multidisciplinary teams, mentor
                  student leaders, build partnerships, and create learning
                  experiences that translate into measurable social and economic
                  impact.
                </p>
                <p>
                  As Enactus Philippines undergoes its national relaunch in
                  2026, the organization recognizes that strong student teams
                  are built upon strong faculty leadership. However, the role of
                  a Faculty Advisor goes far beyond understanding competition
                  mechanics or overseeing student activities. Faculty Advisors
                  are educators, mentors, ecosystem builders, institutional
                  champions, and catalysts for innovation.
                </p>
                <p>
                  The Enactus Philippines Faculty Fellows Program is therefore
                  designed not merely as a training on Enactus operations, but
                  as a leadership and professional development fellowship that
                  equips educators with competencies in entrepreneurship and
                  innovation; design thinking and systems thinking; sustainable
                  development and social impact; project development and impact
                  measurement; mentorship and student leadership development;
                  community engagement and partnership building; and future-ready
                  higher education practices.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── OBJECTIVES ─── */}
      <section className="border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Fellowship Objectives
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                What the Fellowship aims to achieve
              </h2>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border md:grid-cols-3">
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

      {/* ─── FELLOWSHIP STRUCTURE ─── */}
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Fellowship Structure
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Five-day virtual fellowship,
                <br />
                <span className="text-foreground/50">
                  one in-person awarding ceremony.
                </span>
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-5">
              {sessions.map((s) => (
                <Card
                  key={s.day}
                  className="relative overflow-hidden border-border/60 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="absolute right-2 top-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary">
                    Day {s.day}
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {s.date}
                    </div>
                    <CardTitle className="mt-2 text-sm leading-snug">
                      {s.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      05:00 PM – 07:00 PM PHT
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-border/60 bg-muted/30 p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    · Awarding Ceremony
                  </div>
                  <h3 className="mt-2 text-subsection font-semibold leading-tight">
                    Enactus Philippines National Relaunch Ceremony
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      July 3, 2026
                    </span>
                    <span>4:00 PM – 8:00 PM PHT</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Areté, Ateneo de Manila University
                  </p>
                </div>
                <Badge variant="outline" className="w-fit shrink-0 border-primary/40 text-primary">
                  In-Person
                </Badge>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── LEARNING FRAMEWORK ─── */}
      <section className="border-b border-border/60 bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden />
        <AnimatedSection>
          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-secondary-foreground/60">
                · Learning Framework
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                The Enactus Impact Journey
              </h2>
              <p className="mt-4 text-secondary-foreground/80">
                Transformative educators first develop their own capacities
                before empowering students to create meaningful change.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
              {frameworkStages.map((stage, i) => (
                <div key={stage.label} className="flex items-center gap-3 md:gap-4">
                  <div className="flex items-center gap-2 rounded-full bg-secondary-foreground/10 px-4 py-2.5 backdrop-blur-sm">
                    <span
                      className={`inline-block h-2.5 w-2.5 rounded-full ${stage.color}`}
                    />
                    <span className="text-sm font-semibold uppercase tracking-wider">
                      {stage.label}
                    </span>
                  </div>
                  {i < frameworkStages.length - 1 && (
                    <ChevronRight className="hidden h-4 w-4 text-secondary-foreground/30 md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── TARGET PARTICIPANTS ─── */}
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Target Participants
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                Who should apply
              </h2>
            </div>
            <div className="mt-10 flex flex-wrap gap-2.5">
              {participants.map((p) => (
                <Badge
                  key={p}
                  variant="secondary"
                  className="rounded-full px-4 py-2 text-sm font-medium"
                >
                  {p}
                </Badge>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── DELIVERABLES ─── */}
      <section className="border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Fellowship Deliverables
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                What you will produce
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {deliverables.map((d) => (
                <Card
                  key={d.title}
                  className="border-border/60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <CardHeader>
                    <d.icon
                      className="h-5 w-5 text-primary"
                      strokeWidth={1.5}
                    />
                    <CardTitle className="mt-4 text-sm leading-snug">
                      {d.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {d.body}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── RECOGNITION & POST-FELLOWSHIP ─── */}
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto grid gap-12 md:grid-cols-2 md:gap-16">
              {/* Recognition */}
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  · Recognition
                </div>
                <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
                  Become an{" "}
                  <span className="text-primary">Enactus Philippines</span>{" "}
                  Faculty Fellow
                </h2>
                <div className="mt-6 space-y-4">
                  <div className="flex gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Sparkles className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Certificate of Fellowship Completion
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <GraduationCap className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Formal conferral of the title{" "}
                      <strong className="text-foreground">
                        Enactus Philippines Faculty Fellow (EPFF)
                      </strong>{" "}
                      during the National Relaunch Ceremony at Areté, Ateneo de
                      Manila University on July 3, 2026
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Users className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Induction into the{" "}
                      <strong className="text-foreground">
                        Enactus Philippines Faculty Fellows Network
                      </strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Post-Fellowship */}
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  · Post-Fellowship Engagement
                </div>
                <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
                  Network benefits
                </h2>
                <ul className="mt-6 space-y-3">
                  {[
                    "Access to future learning sessions",
                    "Invitations to national Enactus activities",
                    "Faculty roundtables and forums",
                    "Mentorship opportunities",
                    "Collaborative research and innovation initiatives",
                    "Priority participation in advanced fellowships",
                    "Opportunities to serve as speakers, mentors, judges, and resource persons",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── LONG-TERM VISION ─── */}
      <section className="border-b border-border/60 bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Long-Term Vision
              </div>
              <h2 className="mt-4 text-section font-semibold leading-tight tracking-tight">
                The country&apos;s premier fellowship for
                <br />
                <span className="text-foreground/50">
                  entrepreneurial educators.
                </span>
              </h2>
              <p className="mt-6 text-body leading-relaxed text-muted-foreground">
                Over time, the program aims to develop a nationwide community of
                faculty leaders capable of transforming universities into hubs
                of innovation, entrepreneurship, and societal impact while
                strengthening the long-term sustainability and growth of the
                Enactus movement in the Philippines.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 grid-bg opacity-[0.06]" aria-hidden />
        <AnimatedSection>
          <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-secondary-foreground/60">
              · Apply Now
            </div>
            <h2 className="mt-4 max-w-2xl text-hero font-semibold leading-[1.05] tracking-tight">
              Shape the next generation
              <br />
              <span className="text-primary">of Filipino innovators.</span>
            </h2>
            <div className="mt-8">
              <CountdownTimer targetDate={deadline} />
            </div>
            <div className="mt-8 space-y-3">
              <a
                href="https://tinyurl.com/enactusphfacultyfellowapp"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 items-center gap-3 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              >
                Apply to the Fellowship
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <p className="text-sm text-secondary-foreground/60">
                Applications close June 12, 2026
              </p>
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 h-12 w-1/3 yellow-slash" aria-hidden />
      </section>
    </div>
  );
}
