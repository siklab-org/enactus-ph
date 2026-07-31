import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, TriangleAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Core Competition | Enactus Philippines",
  description:
    "The complete Core Competition guide — develop high-impact projects, understand evaluation criteria, and prepare your team for the National Competition and Enactus World Cup.",
};

/* ─── Shared helpers (server-safe) ─── */

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground/90">
      {children}
    </h3>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-2 text-base leading-relaxed text-muted-foreground"
        >
          <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Qa({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <div className="mt-6">
      <p className="text-base font-medium text-foreground">Q: {q}</p>
      <div className="mt-1 text-base leading-relaxed text-muted-foreground">
        {a}
      </div>
    </div>
  );
}

function ImageCredit({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-6 overflow-hidden rounded-xl border border-border/60">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={400}
        className="w-full object-cover"
      />
      {caption && (
        <figcaption className="border-t border-border/60 bg-muted/20 px-4 py-2 text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function TipCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-5">
      <p className="text-sm font-medium text-foreground">How to Showcase in a Presentation?</p>
      <div className="mt-2 text-sm leading-relaxed text-foreground/90">{children}</div>
    </div>
  );
}

function ExampleCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-lg border border-border/60 bg-muted/20 p-5">
      <p className="text-sm font-semibold text-foreground">Enactus Example: {title}</p>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

export default function HandbookPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/10">
        <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-20 pt-20 md:pt-28 text-center sm:pb-28 sm:pt-36">
          <Link
            href="/competitions"
            className="mb-6 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to Competitions
          </Link>
          <span className="mb-6 block font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Core Competition
          </span>
          <h1 className="text-hero font-bold leading-[1.1] tracking-tight">
            Core Competition
            <br />
            <span className="text-foreground/40">Official Guide</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
            Never doubt that a small group of thoughtful, committed people can
            change the world. Indeed, it&apos;s the only thing that ever has.
            <br />
            <span className="text-xs text-muted-foreground/60">—Margaret Mead</span>
          </p>
        </div>
      </section>

      {/* ─── ON HOLD NOTICE ─── */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="rounded-xl border-2 border-amber-500/30 bg-amber-500/10 px-5 py-6 shadow-sm">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-amber-600">
            <TriangleAlert className="h-4 w-4 text-amber-500" />
            On Hold for Philippines 2026
          </span>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            As 2026 marks the relaunch of Enactus Philippines, the Enactus Core
            Competition Track will not yet be conducted at the national level
            this year.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Instead, the{" "}
            <Link
              href="/2026-national-competition"
              className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
            >
              Enactus Philippines National Competition 2026
            </Link>{" "}
            will exclusively feature the Early-Stage Project Competition Track,
            an official competition format introduced by Enactus Global to
            support student teams at the earliest stages of developing their
            social entrepreneurial ventures. It is envisioned that many of the
            projects developed through this year&apos;s competition will mature
            into high-impact ventures ready to compete in the Enactus Core
            Competition, which Enactus Philippines aims to launch beginning in
            2027.
          </p>
        </div>
      </div>

      {/* ─── TABLE OF CONTENTS ─── */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-12 rounded-xl border border-border/60 bg-muted/10 p-5">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            In this guide
          </p>
          <ul className="space-y-1">
            {[
              { id: "welcome", label: "Welcome" },
              { id: "journey", label: "Your Competition Journey" },
              { id: "guidelines", label: "Team & Competition Guidelines" },
              { id: "reporting", label: "Mandatory Reporting" },
              { id: "criterion", label: "The Enactus Project Criterion" },
              { id: "developing", label: "Developing Your Project" },
              { id: "impact-defs", label: "Impact Definitions & Measuring Impact" },
              { id: "format", label: "Presentation Format & Impact Period" },
              { id: "annual-report", label: "Annual Report & Standardized Impact Page" },
              { id: "judge-process", label: "Judge Process" },
              { id: "impact-review", label: "Impact & Financial Reporting Review" },
              { id: "top-tips", label: "Top Tips for the Review" },
              { id: "faq", label: "FAQ" },
            ].map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm transition-colors hover:bg-primary/10 text-muted-foreground hover:text-primary"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/30 transition-colors group-hover:bg-primary" />
                  <span className="flex-1">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ─── HANDBOOK CONTENT ─── */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <ImageCredit
          src="/competitions/team.webp"
          alt="Team"
          caption='The Enactus World Cup — where national champions from every Enactus country compete.'
        />

        {/* ═══ SECTION 1: WELCOME ═══ */}
        <section id="welcome" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">Welcome</h2>
          <Body>
            Competition season is here, and your dedication over the past few
            months is about to shine! At Enactus, competition isn&apos;t just
            about winning — it&apos;s about fueling innovation, driving real-world
            change, and creating a better future together. This page is your
            go-to guide for navigating the Enactus competition process, whether
            you&apos;re a student competitor or a faculty advisor. Here,
            you&apos;ll find everything you need to:
          </Body>
          <List
            items={[
              "Develop high-impact projects aligned with the Enactus mission",
              "Understand competition structure, evaluation criteria, and impact measurement",
              "Effectively present your work to judges and global leaders",
              "Showcase how your entrepreneurial action improves lives",
            ]}
          />
          <Body>
            By following these guidelines, you&apos;re not just competing — you&apos;re
            contributing to meaningful societal change while pushing your team to
            be the best it can be and showcase your impact. Use this as your
            roadmap — from project conception to presentation — and take your
            team to the next level. Because when we compete to improve lives,{" "}
            <strong>#WeAllWin</strong>.
          </Body>
          <Body>
            This section focuses primarily on the Enactus Core Competition (also
            known as the Enactus World Cup Qualifier in some countries), where
            your innovative projects are evaluated against our criterion,
            highlighting the impact on people, planet, and prosperity. It&apos;s
            your chance to compete for the title of National Champion and
            potentially represent the Philippines at the Enactus World Cup — an
            annual event where students, educators, business leaders,
            entrepreneurs, and changemakers from across the world gather to
            compete, collaborate, and connect.
          </Body>
        </section>

        <hr className="my-12 border-border/40" />

        {/* ═══ SECTION 2: YOUR COMPETITION JOURNEY ═══ */}
        <section id="journey" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">Your Competition Journey</h2>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Enactus Core Competition
          </p>
          <Body>
            Enactus Competitions offer a fantastic opportunity for students and
            teams to receive feedback from business leaders, connect with peers
            and entrepreneurs, learn, collaborate, and, of course, celebrate
            your journey and efforts.
          </Body>
          <Body>
            The Enactus program year ends with an annual competitive experience.
            This process provides teams with the opportunity to present their
            projects and impact to a panel of judges who evaluate those efforts
            and determine which projects most successfully met the Enactus judging
            criterion. The journey follows this path:
          </Body>
          <List
            items={[
              "Develop and implement projects throughout the academic year",
              "Participate in the National Competition — compete against teams from across the Philippines",
              "The National Champion advances to represent the Philippines at the Enactus World Cup",
              "World Cup — global showcase where national champions from every Enactus country compete",
            ]}
          />
          <Body>
            In every country around the world, and at each level of the overall
            competition, the format, rules, and judging criterion remain the same.
            Countries that operate large Enactus programs may host a series of
            regional competitions to narrow down the number of teams eligible to
            compete at their national event.
          </Body>
          <Body>
            The Enactus World Cup is an annual event where students, educators,
            business leaders, entrepreneurs, and changemakers from across the
            world gather to compete, collaborate, and connect. The location and
            theme of this event changes annually.
          </Body>

          <SubHeading>Other Competitions</SubHeading>
          <Body>
            Enactus Country offices may also hold other types of competitions as
            part of their Regional and/or National events, such as:
          </Body>
          <List
            items={[
              "Early-stage competitions",
              "Pitch competition",
              "Activities or competitions relating to Special Competitions",
              "Other competitions organized by the Country office",
            ]}
          />
          <Body>
            Regional or National events may also offer special awards to
            recognize outstanding teams, faculty advisors, alumni, partners, etc.
          </Body>
        </section>

        <hr className="my-12 border-border/40" />

        {/* ═══ SECTION 3: TEAM & COMPETITION GUIDELINES ═══ */}
        <section id="guidelines" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
            Enactus Team &amp; Competition Guidelines
          </h2>
          <Body>
            Enactus teams operate within a global framework designed to foster
            entrepreneurial action, innovation, and impact. While teams have
            flexibility in organization and project development, certain
            foundational guidelines ensure fairness, transparency, and alignment
            with Enactus&apos; mission.
          </Body>
          <Body>Here&apos;s what you need to know:</Body>

          <SubHeading>Single Team Rule</SubHeading>
          <Body>
            Each institution / university may have only <strong>one</strong>{" "}
            Enactus team. Multi-campus universities can have separate teams if
            each has its own Faculty Advisor. Some countries may have additional
            criteria.
          </Body>

          <SubHeading>Faculty Advisor Requirement</SubHeading>
          <Body>
            Every team must have a <strong>Faculty Advisor</strong> employed by
            the institution, with no restrictions on their role.
          </Body>

          <SubHeading>Flexible Team Structure</SubHeading>
          <Body>
            Teams have the flexibility to structure themselves in a way that best
            suits their local context. However, some Enactus countries have
            specific requirements for team organization, so be sure to check with
            your <strong>Country Leader or Program Manager</strong> for any local
            guidelines.
          </Body>

          <SubHeading>Project Development</SubHeading>
          <Body>
            Teams have full freedom to design projects within the{" "}
            <strong>Enactus Criterion</strong>, choosing their beneficiaries and
            approach. Enactus staff are available for guidance.
          </Body>

          <SubHeading>Review &amp; Compliance</SubHeading>
          <Body>
            Teams competing in the <strong>Enactus World Cup</strong> must pass a
            Review Process by their country office to ensure fairness. Reviews can
            occur at any time, so teams should maintain year-round readiness and
            are encouraged to keep good documentation of their activities. The
            official <strong>reporting period</strong> for teams participating in
            the <strong>Enactus World Cup</strong> is one year with a gap of one
            month to the World Cup. For example: If the World Cup is held on 01
            October 2027, the reporting period then would be from 1 September 2026
            – 31 August 2027.
          </Body>

          <List
            items={[
              "One team per university campus may represent their institution",
              "Projects presented must be implemented by an Enactus team formed per the Operating as an Enactus Team guidelines",
              "Teams must present work on projects engaged in social innovation that meet the Enactus Judging Criterion",
              "Projects must have realized measurable impact on people, planet, and/or prosperity",
              "Team members must be currently enrolled students who have contributed meaningfully to the projects",
              "All team members must be registered with their Enactus country office",
              "Teams must complete all mandatory reporting requirements before their National Competition",
            ]}
          />
        </section>

        <hr className="my-12 border-border/40" />

        {/* ═══ SECTION 4: MANDATORY REPORTING ═══ */}
        <section id="reporting" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
            Mandatory Reporting Requirements
          </h2>
          <Body>
            Before participating in their National Competition, teams are
            required to submit three key documents and reports: the{" "}
            <strong>Project Report Form</strong>,{" "}
            <strong>Team Information Form</strong>, and the{" "}
            <strong>Project Verification Form</strong>.
          </Body>
          <Body>
            This helps Enactus gain a deeper understanding of our global program
            impact, allowing us to continuously improve programming, events, and
            resources to better support teams worldwide.
          </Body>

          <SubHeading>Data Privacy</SubHeading>
          <Body>
            We have implemented specific privacy measures regarding the data
            submitted in the Team Information Form:
          </Body>
          <List
            items={[
              "Automated Notifications: Students who are added to the form will receive an automated email notification.",
              "Transparency & Control: In this notification, students can immediately view exactly which data we have on file. They have the direct option to modify their information or request its removal.",
            ]}
          />

          <SubHeading>1. Project Report Form &amp; Team Information Form</SubHeading>
          <Body>
            Enactus teams are required to submit both their Team Information Form
            (information about your team) and their Project Report Form
            (information about your projects). It is recommended to submit the
            forms at least <strong>two weeks before the National Competition</strong>.
            Both forms are available in one{" "}
            <a
              href="https://forms.enactus.org/studentdata"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              submission link
            </a>
            . In this link, students can select the type of form they want to
            fill in, whether Team Information Form or Project Report Form.
          </Body>
          <Body>
            We advise you to have a look at the{" "}
            <a
              href="https://drive.google.com/file/d/1GTAheqHbR43mXjf0Ssz995DHibIo_K20/view"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Team Information Form Preparation Overview
            </a>{" "}
            and the{" "}
            <a
              href="https://drive.google.com/file/d/1HjExS6Nxo1ZHpTour2Hn2eD_veT7gjsB/view"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Project Report Form Preparation Overview
            </a>{" "}
            before starting your submission. These documents give you an idea of
            the type of data we are asking you to submit.
          </Body>

          <SubHeading>2. Project Verification Form</SubHeading>
          <Body>
            Every team must request that their Faculty Advisor, one student, and
            one administrator (e.g., dean, department chair, or institution
            president) review their Annual Report and sign the{" "}
            <a
              href="https://drive.google.com/file/d/1yT5ILHlrfS_2hhBirufYKsZLR0N5c6Uq/view"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Project Verification Form
            </a>
            . This form must be submitted to your Enactus country office prior to
            competition.
          </Body>
        </section>

        <hr className="my-12 border-border/40" />

        {/* ═══ SECTION 5: THE ENACTUS PROJECT CRITERION ═══ */}
        <section id="criterion" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
            The Enactus Project Criterion
          </h2>
          <Body>
            As Enactus students, you&apos;re at the forefront of entrepreneurial
            action, driving social innovation. Enactus Projects all over the
            world follow a simple framework that guides the creation of new
            projects, called <strong>the Enactus Criterion</strong>. It is used
            to evaluate your realized outcomes and direct impact at Regional,
            National, and Global Enactus competitions.
          </Body>
          <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-5">
            <p className="text-sm font-medium text-foreground">
              The Enactus Judging Criterion:
            </p>
            <p className="mt-2 text-base leading-relaxed text-foreground/90">
              <em>
                &ldquo;Which Enactus team most effectively demonstrated
                entrepreneurial leadership to drive business and innovation for
                sustainable positive impact to benefit people, planet, and
                prosperity within the last year?&rdquo;
              </em>
            </p>
          </div>

          {/* ── Entrepreneurial Leadership ── */}
          <SubHeading>Entrepreneurial Leadership</SubHeading>
          <Body>
            <strong>Identifying a need</strong> and{" "}
            <strong>capitalizing on opportunities</strong> by taking personal
            responsibility, managing risk, and managing change within a dynamic
            environment.
          </Body>
          <p className="mt-3 text-sm font-medium text-foreground">Tips:</p>
          <List
            items={[
              "Demonstrate the capability to lead and develop the project, leveraging skills within the team and from partnerships",
              "Make effective use of resources and establish a supportive network, ensuring the team's ownership and operational control",
              "Build a solid foundation through a thorough needs assessment informing the project's direction",
            ]}
          />

          <ExampleCard title="India — Clean Drinking Water">
            A team in India identified a lack of accessible clean drinking water
            in rural villages. Instead of waiting for external aid, they:
            <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
              <li>Designed a low-cost filtration system using locally sourced materials</li>
              <li>Partnered with community members to distribute and educate people on water purification</li>
              <li>Took personal responsibility by testing, iterating, and scaling their solution to serve multiple villages</li>
            </ul>
          </ExampleCard>

          <TipCard>
            Describe how your team identified the problem and took initiative to
            address it. Highlight how you managed risks, challenges, and change
            throughout the project.
          </TipCard>

          {/* ── Business Principles ── */}
          <SubHeading>Use of Business Principles</SubHeading>
          <Body>
            Applying a sound <strong>business model</strong> and{" "}
            <strong>business plan</strong>.
          </Body>
          <p className="mt-3 text-sm font-medium text-foreground">Tips:</p>
          <List
            items={[
              "A robust, clear, and comprehensive business model incorporating strategy, marketing, and logistics",
              "Financial self-sufficiency highlighted by a logical and complete financial plan",
              "Proof of income generated in the past year, reflecting the project's financial health",
              "A strategy for scaling the project from a student initiative to a sustainable enterprise",
            ]}
          />

          <ExampleCard title="Kenya — Eco-Friendly Briquettes">
            A team in Kenya built an eco-friendly briquette business to replace
            charcoal. They:
            <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
              <li>Developed a self-sustaining business model, selling briquettes made from agricultural waste</li>
              <li>Used customer research to set the right pricing and distribution strategy</li>
              <li>Reinvested profits to train more women entrepreneurs, ensuring financial sustainability</li>
            </ul>
          </ExampleCard>

          <TipCard>
            Explain how your project is financially viable and not just a one-time
            intervention. Share business model details like revenue streams,
            partnerships, and scaling plans.
          </TipCard>

          {/* ── Innovation ── */}
          <SubHeading>Innovation</SubHeading>
          <Body>
            The process of <strong>introducing new</strong> or{" "}
            <strong>improving existing</strong> ideas, services, technologies,
            products, or methodologies.
          </Body>
          <p className="mt-3 text-sm font-medium text-foreground">Tips:</p>
          <List
            items={[
              "Implementation or improvement of new ideas, technologies, or methods in the past year",
            ]}
          />

          <ExampleCard title="Brazil — AI Food Waste Reduction">
            A team in Brazil tackled food waste in urban areas. They:
            <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
              <li>Developed an AI-powered app that connects restaurants with surplus food to NGOs feeding people in need</li>
              <li>Introduced a tracking system to measure food saved and people fed</li>
              <li>Improved upon existing food redistribution methods by reducing food waste by 40% in their pilot phase</li>
            </ul>
          </ExampleCard>

          <TipCard>
            Highlight what makes your solution unique, scalable, or an improvement
            over existing methods. Use visuals to demonstrate the before-and-after
            impact of your innovation.
          </TipCard>

          {/* ── Sustainable Positive Impact ── */}
          <SubHeading>Sustainable Positive Impact</SubHeading>
          <Body>
            Demonstrating a <strong>measurable, lasting improvement</strong> for
            people, planet, and prosperity.
          </Body>
          <p className="mt-3 text-sm font-medium text-foreground">Tips:</p>
          <List
            items={[
              "Evident resolution of the identified issue through the project's actions",
              "Advancements in social, environmental, and economic areas, as reflected by the project's initiatives over the past year",
              "Detailed measurement of the project's impact, showing direct influence and clear before/after comparisons",
            ]}
          />

          <ExampleCard title="UK — Fast Fashion Upcycling">
            A team from the UK tackled fast fashion waste while supporting
            unemployed individuals. They:
            <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
              <li>Upcycled 5,000+ garments, turning textile waste into professional workwear</li>
              <li>Provided free interview clothing and coaching in partnership with job centers</li>
              <li>Hired job seekers to work in the social enterprise, gaining skills in retail, tailoring, and business operations</li>
              <li>Created a self-sustaining model, reinvesting sales revenue into job training and employment programs</li>
            </ul>
          </ExampleCard>

          <TipCard>
            Share real stories of individuals who gained jobs through the
            initiative. Highlight direct impact metrics (garments saved, jobs
            created, waste reduced). Show how the project empowers people while
            promoting sustainability.
          </TipCard>
        </section>

        <hr className="my-12 border-border/40" />

        {/* ═══ SECTION 6: DEVELOPING YOUR PROJECT ═══ */}
        <section id="developing" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
            Developing Your Project
          </h2>
          <Body>
            Aligning your Enactus project with the{" "}
            <a
              href="https://sdgs.un.org/goals"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Sustainable Development Goals
            </a>{" "}
            (SDGs) offers a powerful framework to ensure your initiatives
            contribute meaningfully to local, regional, and global challenges.
            Here&apos;s a condensed overview of everything you have learned this
            year, to guide your project&apos;s development.
          </Body>

          <SubHeading>Identify Community Needs</SubHeading>
          <Body>
            Use the SDGs as a starting point to understand and articulate the
            specific needs your project aims to address, considering economic,
            social, and environmental factors. This aligns with Entrepreneurial
            Leadership by recognizing opportunities for impactful action within
            your community.
          </Body>

          <SubHeading>Target Audience Engagement</SubHeading>
          <Body>
            Engage directly with your target audience to deeply understand their
            needs and aspirations. This approach not only embodies
            Entrepreneurial Leadership but also ensures your project&apos;s
            outcomes are directly beneficial to them, contributing to Sustainable
            Positive Impact.
          </Body>

          <SubHeading>Innovative Solutions</SubHeading>
          <Body>
            Craft your project around innovative solutions that are economically
            viable, socially equitable, and environmentally sustainable. This
            directly ties into Innovation and Use of Business Principles,
            ensuring your project is grounded in sound business.
          </Body>

          <SubHeading>Ethical Considerations</SubHeading>
          <Body>
            Ethical mindfulness in project planning and execution is crucial.
            Ensure you&apos;re following guidelines for ethical community
            engagement and data collection, underpinning the integrity and
            sustainability of your project&apos;s impact.
          </Body>

          <SubHeading>Partnership for Impact</SubHeading>
          <Body>
            When partnering on projects, it&apos;s crucial to emphasize that the
            focus is on the impact created by the <strong>student-led team&apos;s
              efforts</strong>, rather than the partner&apos;s contributions.
            Collaborations should enhance the project&apos;s reach and
            effectiveness, but the primary measurement of success is the change
            your team directly facilitates. Always articulate your role clearly
            in the partnership and ensure that the project&apos;s outcomes can be
            attributed to your team&apos;s innovative and entrepreneurial actions.
          </Body>

          <SubHeading>Link with SDGs</SubHeading>
          <Body>
            Explicitly connect your project&apos;s objectives and impact to
            specific SDGs, illustrating how your team is contributing to broader
            local and global impact.
          </Body>

          <Body>
            <strong>REMEMBER:</strong> Your projects should not just aim for
            immediate results (outputs) but strive for lasting benefits (direct
            impact) that contribute to people, planet, and prosperity. Keep
            focusing on real, measurable impacts that align with the SDGs to
            demonstrate how your project contributes to global goals, showcasing
            the full spectrum of Entrepreneurial Leadership, Innovation, Business
            Principles, and Sustainable Positive Impact.
          </Body>
        </section>

        <hr className="my-12 border-border/40" />

        {/* ═══ SECTION 7: IMPACT DEFINITIONS ═══ */}
        <section id="impact-defs" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
            Impact Definitions &amp; Measuring Impact
          </h2>
          <Body>
            When developing Enactus projects, it&apos;s crucial to understand the
            core impact we and our projects are creating for people, planet, and
            prosperity. It&apos;s not just about meeting the Enactus Project
            Criterion; it&apos;s about generating positive, sustainable outcomes
            and impact now.
          </Body>
          <Body>
            To understand and judge how successful projects are, teams need to
            know and articulate clearly the difference between what they put in
            (<strong>inputs</strong>), what they produce (<strong>outputs</strong>),
            the positive changes they create (<strong>direct &amp; indirect
              impact</strong> — also known as outcomes), and the longer term and
            wider impact they have (<strong>sustainable long-term impact</strong>).
          </Body>
          <Body>
            <strong>RECOMMENDATION:</strong> For the most accurate and impactful
            reporting of your results, please familiarize yourself with the
            impact definitions below.
          </Body>

          <SubHeading>Inputs</SubHeading>
          <Body>
            <strong>Inputs</strong> are the resources the team invests in their
            project, including time, money, and skills.
          </Body>

          <SubHeading>Outputs</SubHeading>
          <Body>
            <strong>Outputs</strong> are the immediate, tangible products or
            services resulting from the team&apos;s efforts. This includes
            activities, goods, or services the project delivers.
          </Body>

          <SubHeading>Direct Impact</SubHeading>
          <Body>
            <strong>Direct Impact</strong> reflects the measurable improvements
            in knowledge, skills, behaviors, or resources among individuals or
            organizations with whom the team directly worked. These outcomes
            represent the short- to medium-term outcomes caused by the team&apos;s
            direct intervention (not their project partners).
          </Body>
          <Body>
            <em>Example:</em> As a result of a training organized by the team, 15
            local seamstresses gained skills in upcycling techniques, pattern
            making, and fashion design.
          </Body>
          <Body>
            <strong>IMPORTANT NOTE:</strong> In the Enactus context, we prioritize
            direct impact to ensure our projects create meaningful changes. Direct
            impact refers to the measurable benefits experienced by individuals
            you&apos;ve directly worked with. These benefits include new knowledge,
            skills, or resources they&apos;ve gained and applied, directly because
            of your project within the current academic year.
          </Body>

          <SubHeading>Indirect Impact</SubHeading>
          <Body>
            <strong>Indirect Impact</strong> includes those who indirectly gain
            measurable improvements in knowledge, resources, or benefits from
            the project but with whom the team did not work directly. These
            outcomes contribute to broader positive changes for people, planet,
            and prosperity in communities, as a result of the project&apos;s
            ripple effect.
          </Body>
          <Body>
            <em>Example:</em> Indirect impact can be seen in the improved
            well-being of the families of the local seamstresses, who now
            experience increased financial stability due to their mothers&apos;
            enhanced earning potential.
          </Body>

          <SubHeading>Reach</SubHeading>
          <Body>
            <strong>Reach</strong> measures the number of people exposed (e.g.,
            media reach, awareness campaigns, application downloads, etc.) to
            the project but does not necessarily indicate direct or indirect
            impact. While reach is an important metric, it does not reflect
            measurable change and therefore should not be classified as impact.
          </Body>

          <SubHeading>Income or Revenue</SubHeading>
          <Body>
            <strong>Income/Revenue</strong> refers to the total amount of
            financial resources a team and/or its project(s) has generated from
            activities such as sales, grants, sponsorships, or donations. This
            relates to income generated by the team, not by its project partners.
          </Body>

          <SubHeading>Profit or Surplus</SubHeading>
          <Body>
            <strong>Profit/Surplus</strong> is the money remaining after
            deducting all expenses from the income/revenue generated. This can be
            both team/project related.
          </Body>

          <SubHeading>Sustainable Long-Term Impact</SubHeading>
          <Body>
            <strong>Sustainable Long-Term Impact</strong> refers to the lasting
            and significant changes in people&apos;s lives that continue beyond
            the project period. This represents the ultimate societal,
            environmental, or economic improvements that persist after direct
            project activities have ended and come as a result of a series of
            interventions and outcomes. <em>This impact may not be achieved
              during the Enactus project timeline.</em>
          </Body>

          <SubHeading>Projections</SubHeading>
          <Body>
            <strong>Projections</strong> show what <em>might</em> happen in the
            future, based on your current success. While helpful for showing
            long-term potential, judges will primarily focus on the actual impact
            you&apos;ve achieved this year.
          </Body>
        </section>

        <hr className="my-12 border-border/40" />

        {/* ═══ SECTION 8: PRESENTATION FORMAT ═══ */}
        <section id="format" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
            Presentation Format &amp; Impact Period
          </h2>
          <Body>
            Having covered the Enactus criterion, impact definitions, team
            guidelines, and pre-Nationals reporting, this section outlines the
            structure for your pitch, essential for both National Competitions
            and the Enactus World Cup.
          </Body>

          <SubHeading>How to Prepare for Your Presentation</SubHeading>
          <Body>
            Your team will have a unique opportunity to showcase your
            project&apos;s impact on a regional, national, and/or global stage.
            Here&apos;s the breakdown of the presentation time:
          </Body>
          <List
            items={[
              "Set-Up Period: 3 minutes for setting up and checking any audio-visual equipment. Annual Reports should be handed out to the judges. A plain black screen should be displayed during this time.",
              "Presentation: 12 minutes to deliver your impactful presentation. Conclude with a blank screen. Exceeding this limit will result in being cut off.",
              "Question and Answer Period: 5 minutes for judges' questions, displayed against a black screen. If an interpreter is needed, the Q&A period extends to 10 minutes.",
            ]}
          />
          <Body>
            <em>Note: Only student members of the competition team may
              participate in the presentation and answer questions from the
              judges.</em>
          </Body>

          <SubHeading>Impact Reporting Guidelines</SubHeading>
          <Body>
            <strong>For the National Competition:</strong> Teams must present
            only impact data and project implementations realized within the last
            12 months, from the previous National Competition to the current one.
            This ensures that results showcased align with the Enactus Project
            Criterion and accurately reflect recent achievements.
          </Body>
          <Body>
            <strong>For the Enactus World Cup:</strong> The official reporting
            period for teams participating in the Enactus World Cup is one year
            with a gap of one month to the World Cup. For example: If the World
            Cup is held on 01 October 2027, the reporting period then would be
            from 1 September 2026 – 31 August 2027.
          </Body>

          <SubHeading>Reporting Multi-Year Project Impact</SubHeading>
          <Body>
            Teams with multi-year projects (e.g., started in 2023 or 2024) may
            briefly mention past impact for context, but their evaluation must
            focus on impact achieved within the official reporting period. This
            approach recognizes project continuity, which is essential for
            scaling initiatives into long-term, sustainable enterprises.
          </Body>
          <Body>
            To avoid confusion, Country Operations must ensure that teams clearly
            differentiate between past and current-year impacts before being
            approved to compete at the Enactus World Cup. The National Champion
            Review serves as a checkpoint for Country Leaders to verify this
            distinction.
          </Body>

          <SubHeading>National Competition Variations</SubHeading>
          <Body>
            For a variety of reasons, some countries may opt for different
            presentation time guidelines, such as a 3-minute setup, 7-minute
            presentation, and 7-minute Q&A format. Your country office will
            inform you of such adjustments to ensure you&apos;re well-prepared.
          </Body>
        </section>

        <hr className="my-12 border-border/40" />

        {/* ═══ SECTION 9: ANNUAL REPORT ═══ */}
        <section id="annual-report" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
            Annual Report &amp; Standardized Impact Page
          </h2>
          <Body>
            Every competing team must produce an Annual Report summarizing its
            projects, highlighting the impact over the last required impact
            period. This document, mandatory to be shared with judges, should
            detail project descriptions, target beneficiaries, and actual impacts
            achieved.
          </Body>

          <SubHeading>Format Requirements</SubHeading>
          <List
            items={[
              "Maximum 4 pages — displayed as four single sheets (8.5\" × 11\" or A4) or two double-sided sheets",
              "Must include a Standardized Impact Page as one of the 4 pages",
              "Only Annual Reports are permissible during the set-up period — no products, prototypes, or other items may be distributed",
              "Covers count towards your page count. Avoid using external folders or covers.",
              "Leftover reports will be recycled.",
              "A digital copy must be submitted prior to competition via your Country Office's platform",
            ]}
          />

          <SubHeading>Standardized Impact Page</SubHeading>
          <Body>
            To enhance transparency and provide a clear and consistent impact
            assessment at the Enactus World Cup, each team&apos;s Annual Report
            must include one standardized page displaying impact and financial
            results based on Enactus&apos; official definitions. This page must
            include:
          </Body>
          <List
            items={[
              "Direct Impact — individuals directly affected by your project",
              "Indirect Impact — broader influence beyond direct beneficiaries",
              "Reach — awareness campaigns, media, and social media reach",
              "Projections — expected future outcomes and growth",
              "Financial Results — income/revenue and profit/surplus",
            ]}
          />
          <Body>
            For more detailed information about the content of this standardized
            page and a template that you can use, please check{" "}
            <a
              href="https://drive.google.com/file/d/1fCgQzI3piveKhMx8kjp9wjZ9wEFtQku-/view"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              here
            </a>.
          </Body>

          <SubHeading>Tips for an Effective Annual Report</SubHeading>
          <List
            items={[
              "Focus exclusively on the past year, emphasizing actual impacts, not future projections",
              "Clearly articulate the tangible impact achieved within this timeframe",
              "Utilize this report to complement your presentation, offering judges a concise, impactful overview",
              "Ensure the report is directly aligned with the Enactus Project Criterion, reinforcing the project's alignment with our goals",
            ]}
          />

          <SubHeading>Equipment</SubHeading>
          <Body>
            For your presentation at Enactus National Competitions or Enactus
            World Cup, be mindful of the provided and required equipment:
          </Body>
          <List
            items={[
              "Provided: Projector, screen, (HDMI) cable",
              "Not provided: Laptops, HDMI connectors, and other presentation equipment. Teams must bring these.",
              "Consistency: The competition room setup will remain the same from the Tech Check to the competition",
              "Country-specific details: Your country office will inform you about any specific equipment or setup details",
            ]}
          />

          <SubHeading>Tech Checks</SubHeading>
          <Body>
            Before your presentation, you&apos;ll be able to perform a tech
            check, which could be scheduled for the evening, morning, or
            afternoon prior to your presentation rounds. Your country office will
            provide further details and scheduling.
          </Body>
        </section>

        <hr className="my-12 border-border/40" />

        {/* ═══ SECTION 10: JUDGE PROCESS ═══ */}
        <section id="judge-process" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
            Judge Process
          </h2>
          <Body>
            To make the most of your presentation, it&apos;s helpful to understand
            how the judges will be evaluating you. This section explains the
            judging process used in all competitions, including how judges are
            prepared for their role. This knowledge can help you tailor your
            presentation and increase your chances of success!
          </Body>
          <List
            items={[
              "1. Judge Orientation — Judges receive training on how to evaluate teams according to the competition's criteria, including both a virtual and in-person judge orientation",
              "2. Judge Oath — Every judge must agree to the Judge's Oath, committing to provide fair and quality assessments",
              "3. Team Presentation — Introduced by the competition coordinator, each team presents their project to a panel of judges",
              "4. Team Evaluation — Judges use the Individual Team Evaluation Form (ITEF) to assess the quality and impact of teams' initiatives",
              "5. Team Ranking — Judges use the Cumulative Evaluation Form (CEF) to assess and rank the teams",
              "6. Present at All Presentations — Judges must be present for all presentations for their votes to be counted",
            ]}
          />

          <div className="mt-6 rounded-lg border border-border/60 bg-muted/20 p-5">
            <p className="text-sm font-medium text-foreground">
              The Judge&apos;s Oath
            </p>
            <p className="mt-2 text-sm italic leading-relaxed text-muted-foreground">
              &ldquo;On my honor, I agree to serve as an official judge of an
              Enactus competition with utmost fairness and impartiality. I
              undertake this responsibility free from any prior conflicts of
              interest or preconceived notions about the competition&apos;s
              outcomes. I commit to basing my evaluations solely on the
              teams&apos; presentations and annual report, with a focused lens on
              the realized impact and tangible outcomes they have achieved. My
              assessments will adhere strictly to the judging criteria provided,
              ensuring a just and equitable evaluation process.&rdquo;
            </p>
          </div>
        </section>

        <hr className="my-12 border-border/40" />

        {/* ═══ SECTION 11: IMPACT & FINANCIAL REPORTING REVIEW ═══ */}
        <section id="impact-review" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
            Impact &amp; Financial Reporting Review
          </h2>
          <Body>
            After the National Competition, the Champion team is subject to an
            in-depth Impact &amp; Financial Reporting Review by the Enactus
            Country Office, as part of an Enactus Global reviewing initiative.
          </Body>
          <Body>
            Countries that have the capacity may even do pre-competition impact
            &amp; financial reporting and/or additional (finalist) teams
            post-competition.
          </Body>

          <SubHeading>What to Expect</SubHeading>
          <List
            items={[
              "All guidelines governing the review are provided by Enactus Global to Country Offices",
              "The reviewer may be the Country Leader, Head of Program, Program Manager, or a similar role. Enactus staff may engage third-party reviewers subject to certain protocols.",
              "The process is typically conducted within five weeks after the National event",
              "Once the National Champion successfully passes the review, they are eligible for the Enactus World Cup",
              "If the team fails the review, the first runner-up will be subject to the review process",
              "The team that failed has one week from the date of formal email notification to appeal the decision",
            ]}
          />

          <SubHeading>Phase 1: Team Engagement</SubHeading>
          <Body>
            This involves interviews with key team members and advisors, alongside
            document reviews to ensure information accuracy presented at
            Nationals.
          </Body>

          <SubHeading>Phase 2: Team Operation Review</SubHeading>
          <Body>
            This phase assesses the team&apos;s capacity, resources, and
            infrastructure, including financial scrutiny.
          </Body>

          <SubHeading>Phase 3: Project Review &amp; Site Visits</SubHeading>
          <Body>
            This phase seeks to gain insight on the team&apos;s projects including
            planning, processes, and achieved results. This may include (but is
            not limited to) project site visits, interviews with beneficiaries,
            stakeholder questionnaires, and other means of research to verify the
            project information reported by the team.
          </Body>

          <SubHeading>How Can a Team Fail a Reporting Review?</SubHeading>
          <Body>
            Teams may not pass the review if there is a case of material
            infractions. Such material infractions could include, although are not
            limited to:
          </Body>
          <List
            items={[
              "The Project never existed",
              "The Project need has been exaggerated",
              "Project results and outcomes have been exaggerated",
              "Actions or outcomes taken by third-parties, presented intentionally as if they were taken by the team",
              "The team has falsified information on team structure, membership, or finances",
              "Actions or outcomes from prior years presented intentionally to mislead that they were achieved in the current year",
            ]}
          />

          <SubHeading>Pre-World Cup Reporting Requirements</SubHeading>
          <Body>
            Teams that successfully pass the Impact &amp; Financial Reporting
            Review and earn the right to represent their country at the Enactus
            World Cup will receive full support from their country office in
            preparation for the competition.
          </Body>
          <Body>
            To ensure transparency and uphold competition integrity for the
            Enactus World Cup, country offices must submit the following
            documentation to Enactus Global{" "}
            <strong>one month prior to the World Cup at 18:00 GMT</strong>:
          </Body>
          <List
            items={[
              "Team's Presentation Script",
              "Team's Annual Report, including the Standardized Impact Table",
            ]}
          />
          <Body>
            <strong>⚠️ Important:</strong> Teams must ensure these numbers align
            with the official Enactus Impact Definitions. Misrepresentation,
            exaggeration of impact, or failure to address discrepancies may
            result in <strong>disqualification from competing at the Enactus
              World Cup</strong>.
          </Body>
        </section>

        <hr className="my-12 border-border/40" />

        {/* ═══ SECTION 12: TOP TIPS ═══ */}
        <section id="top-tips" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
            Top Tips for the Impact &amp; Financial Reporting Review
          </h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-lg border border-border/60 bg-muted/20 p-5">
              <p className="text-base font-semibold text-foreground">📋 Plan Ahead</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Don&apos;t wait! Integrate self-reviews into your regular
                operations to track impact and finances year-round.
              </p>
            </div>

            <div className="rounded-lg border border-border/60 bg-muted/20 p-5">
              <p className="text-base font-semibold text-foreground">👤 Assign a Lead</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Have a team member or faculty advisor oversee documentation and
                reporting.
              </p>
            </div>

            <div className="rounded-lg border border-border/60 bg-muted/20 p-5">
              <p className="text-base font-semibold text-foreground">📊 Keep Clear Records</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Maintain organized data on team members &amp; hours contributed,
                beneficiaries &amp; demographics, project partners &amp;
                materials used, financials (income &amp; surplus), and photos,
                videos &amp; media coverage.
              </p>
            </div>

            <div className="rounded-lg border border-border/60 bg-muted/20 p-5">
              <p className="text-base font-semibold text-foreground">🗣️ Prepare Beneficiaries</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Inform beneficiaries early that they may be contacted for
                verification.
              </p>
            </div>

            <div className="rounded-lg border border-border/60 bg-muted/20 p-5">
              <p className="text-base font-semibold text-foreground">✅ Be Transparent</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Ensure data aligns with Enactus&apos; impact and financial
                definitions to avoid misrepresentation.
              </p>
            </div>
          </div>

          <Body>
            💡 <strong>Strong documentation boosts your Annual Report,
              competition presentations, and credibility.</strong>
          </Body>
        </section>

        <hr className="my-12 border-border/40" />

        {/* ═══ SECTION 13: FAQ ═══ */}
        <section id="faq" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>

          <Qa
            q="Who can participate in the Enactus Competition?"
            a="Enactus competitions are open to officially recognized Enactus teams from universities and colleges. Each institution can have only one team, unless it has multiple campuses with separate Faculty Advisors."
          />

          <Qa
            q="What are the key reporting requirements before competing in Nationals?"
            a="Before participating in your National Competition, your team must submit: Project Report Form, Team Information Sheet, and Project Verification Form. These documents help Enactus assess global program impact and improve future events and programming."
          />

          <Qa
            q="What is the official impact reporting period for competitions?"
            a={<span><strong>National Competitions:</strong> Impact data must reflect outcomes achieved between the last and current national competition.<br /><br /><strong>Enactus World Cup:</strong> The official reporting period is one year with a gap of one month to the World Cup. For example: If the World Cup is held on 01 October 2027, the reporting period would be from 1 September 2026 – 31 August 2027.<br /><br />For multi-year projects, teams may briefly mention past achievements for context, but only the current-year impact is evaluated.</span>}
          />

          <Qa
            q="What is the Impact & Financial Reporting Review?"
            a="This review ensures that teams accurately report their project impact and financial results before competing at the Enactus World Cup. National Champion teams undergo this review after their National Competition. This Review was previously called the <em>Audit</em>."
          />

          <Qa
            q="What happens if a team fails the Impact & Financial Reporting Review?"
            a="If a team does not pass, the first runner-up may undergo the review to determine their eligibility for the Enactus World Cup. Teams have one week to appeal the decision if they fail."
          />

          <Qa
            q="What information must be included in the Annual Report?"
            a={<span><strong>Page limits:</strong> Teams may submit up to four single-sided pages (A4 or 8½&quot; x 11&quot;), or two double-sided sheets. Covers count toward the limit, and QR codes to bypass the limit are not allowed.<br /><br /><strong>Must include:</strong> Project descriptions &amp; target beneficiaries, actual impacts achieved in the previous year, and a <strong>Standardized Impact Page</strong> displaying Direct Impact, Indirect Impact, Reach, Projections, and Financial Results (income/revenue &amp; profit/surplus).<br /><br /><strong>Failure to comply</strong> may result in disqualification from the competition.</span>}
          />

          <Qa
            q="Can teams present financial and impact projections?"
            a="Teams can include projections in their presentation and Annual Report, but they must clearly differentiate projections from actual impact and financial results. The teams are being assessed based on their actual and realized impact, not based on projections."
          />

          <Qa
            q="What is the role of Country Leaders and Program Staff in impact reporting?"
            a={<span>Country Leaders play a crucial role in ensuring transparency and consistency in impact reporting. They are responsible for:<br /><br />✔ <strong>Verifying Impact Reporting:</strong> Ensuring teams clearly distinguish between past and current-year impact<br />✔ <strong>Ensuring Data Integrity:</strong> Confirming that teams have measured their impact based on initial needs assessments<br />✔ <strong>Approving Teams for the Enactus World Cup:</strong> Teams must meet all reporting requirements before representing their country<br />✔ <strong>Overseeing the National Champion Review:</strong> A critical step to validate impact data, financial reporting, and overall compliance</span>}
          />

          <Qa
            q="Can teams use past project impact in their presentations?"
            a="Teams with multi-year projects may reference past impact for context but must focus their evaluation on results within the official reporting period."
          />

          <Qa
            q="How can teams prepare for the Impact & Financial Reporting Review?"
            a={<span>✔ Conduct self-reviews regularly<br />✔ Assign a team member or faculty advisor to oversee documentation<br />✔ Maintain clear records of team hours, beneficiaries, financials, and media coverage<br />✔ Inform beneficiaries in advance that they may be contacted for verification<br />✔ Follow Enactus&apos; official impact definitions to avoid misrepresentation</span>}
          />

          <Qa
            q="What equipment is provided at competitions?"
            a={<span><strong>Enactus provides:</strong> Projector, screen, and HDMI cable<br /><br /><strong>Teams must bring their own:</strong> Laptops, HDMI adapters, or additional presentation equipment<br /><br />Always double check with your country office, as this may vary per country.</span>}
          />

          <Qa
            q="How does the judge process work?"
            a="Judges follow a structured evaluation process: (1) Orientation on Enactus Project Criterion, (2) Taking the Judge's Oath, (3) Evaluating presentations and annual reports, (4) Using ITEF and CTEF forms for scoring, (5) Ranking teams based on cumulative assessments."
          />

          <Qa
            q="What are the key presentation rules?"
            a={<span><strong>Time limits:</strong> 3 minutes set-up, 12 minutes presentation, 5 minutes Q&A (10 minutes with interpreter). Presentations exceeding time will be cut off.<br /><br /><strong>Materials:</strong> Only Annual Reports may be handed out during set-up. No products, prototypes, or other materials allowed.<br /><br /><strong>Screen:</strong> A plain black screen must be shown before and after the presentation.</span>}
          />

          <Qa
            q="Where can I find official guidelines and definitions?"
            a="All teams must align with Enactus' official impact and financial definitions, as listed on this Core Competition webpage."
          />

          <Qa
            q="Can graduating students present at the Enactus World Cup?"
            a="Yes, students who graduate in the same academic year can participate in the Enactus World Cup of that same year when they became national champions."
          />
        </section>
      </div>

      {/* ─── FOOTER NOTE ─── */}
      <div className="border-t border-border/60 bg-muted/20 px-6 py-4 text-center text-xs text-muted-foreground">
        Content sourced from{" "}
        <a
          href="https://enactus.org/competition-handbook/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          enactus.org/competition-handbook/
        </a>
        . Images &copy; Enactus. Last reviewed May 2026. Verify exact wording
        against the official source.
      </div>
    </div>
  );
}
