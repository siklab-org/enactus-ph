"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

/* ─── Section IDs (shared with TOC) ─── */

const MAIN_SECTIONS = [
  { id: "welcome", label: "Welcome" },
  { id: "journey", label: "Your Competition Journey" },
  { id: "guidelines", label: "Team & Competition Guidelines" },
  { id: "reporting", label: "Mandatory Reporting" },
  { id: "criterion", label: "The Enactus Project Criterion" },
  { id: "developing", label: "Developing Your Project" },
  { id: "impact-defs", label: "Impact Definitions & Measurement" },
  { id: "format", label: "Presentation Format & Impact Period" },
  { id: "annual-report", label: "Annual Report & Impact Page" },
  { id: "judge-process", label: "Judge Process" },
  { id: "impact-review", label: "Impact & Financial Reporting Review" },
  { id: "top-tips", label: "Top Tips for the Review" },
  { id: "faq", label: "FAQ" },
] as const;

/* ─── Expandable Section ─── */

function ExpandableSection({
  id,
  title,
  children,
  expanded,
  onToggle,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  expanded: boolean;
  onToggle: (id: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    onToggle(id);
    // scroll after state updates on next tick
    requestAnimationFrame(() => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <AnimatedSection>
      <div ref={ref} id={id}>
        <button
          type="button"
          onClick={handleToggle}
          className="flex w-full items-center justify-between gap-3 py-3 text-left transition-colors hover:text-foreground/80"
        >
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <svg
            className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? "max-h-[9999px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4">{children}</div>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ─── Table of Contents ─── */

function TableOfContents({
  expandedSections,
  onToggle,
}: {
  expandedSections: Set<string>;
  onToggle: (id: string) => void;
}) {
  return (
    <nav className="mb-8 rounded-xl border border-border/60 bg-muted/10 p-5">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        In this handbook
      </p>
      <ul className="space-y-1">
        {MAIN_SECTIONS.map((s) => {
          const isOpen = expandedSections.has(s.id);
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => onToggle(s.id)}
                className={`group flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm transition-colors hover:bg-primary/10 ${
                  isOpen ? "font-medium text-primary" : "text-muted-foreground"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                    isOpen ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
                <span className="flex-1">{s.label}</span>
                <svg
                  className={`h-3 w-3 shrink-0 transition-transform ${
                    isOpen ? "rotate-0 text-primary" : "-rotate-90 text-muted-foreground/40"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/* ─── Shared helpers ─── */

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

/* ─── Main Competition Content ─── */

function MainCompetitionColumn({
  expandedSections,
  onToggle,
}: {
  expandedSections: Set<string>;
  onToggle: (id: string) => void;
}) {
  return (
    <div className="space-y-0">
      <TableOfContents
        expandedSections={expandedSections}
        onToggle={onToggle}
      />

      {/* ── Welcome ── */}
      <ExpandableSection
        id="welcome"
        title="Welcome"
        expanded={expandedSections.has("welcome")}
        onToggle={onToggle}
      >
        <Body>
          Competition season is here, and your dedication over the past few
          months is about to shine! At Enactus, competition isn&apos;t just
          about winning — it&apos;s about fueling innovation, driving real-world
          change, and creating a better future together. This guide walks you
          through the Enactus competition process — for both student competitors
          and faculty advisors. Here you&apos;ll find everything you need to:
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
      </ExpandableSection>

      {/* ── Your Competition Journey ── */}
      <ExpandableSection
        id="journey"
        title="Your Competition Journey"
        expanded={expandedSections.has("journey")}
        onToggle={onToggle}
      >
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
      </ExpandableSection>

      {/* ── Team & Competition Guidelines ── */}
      <ExpandableSection
        id="guidelines"
        title="Team &amp; Competition Guidelines"
        expanded={expandedSections.has("guidelines")}
        onToggle={onToggle}
      >
        <Body>
          Enactus teams operate within a global framework designed to foster
          entrepreneurial action, innovation, and impact. While teams have
          flexibility in organization and project development, certain
          foundational guidelines ensure fairness, transparency, and alignment
          with Enactus&apos; mission.
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
      </ExpandableSection>

      {/* ── Mandatory Reporting ── */}
      <ExpandableSection
        id="reporting"
        title="Mandatory Reporting Requirements"
        expanded={expandedSections.has("reporting")}
        onToggle={onToggle}
      >
        <Body>
          Before participating in the National Competition, teams are required
          to submit three key documents and reports. It is recommended to submit
          these at least two weeks before the National Competition.
        </Body>
        <SubHeading>1. Project Report Form</SubHeading>
        <Body>
          The Project Report Form compiles all key aspects of your project. This
          is where you collect impact data and metrics. The form is available
          online, and a downloadable Excel spreadsheet version can be used as a
          working document to regularly track project details.
        </Body>
        <SubHeading>2. Team Information Form</SubHeading>
        <Body>
          The Team Information Form captures information about your team —
          members, faculty advisors, and institutional details. Both the Team
          Information Form and Project Report Form are available in one
          submission link.
        </Body>
        <SubHeading>3. Project Verification Form</SubHeading>
        <Body>
          Teams must request that their Faculty Advisor, one student, and one
          administrator (dean, department chair, or institution president)
          review their Annual Report and sign the Project Verification Form.
          This form must be submitted to your Enactus country office prior to
          competition.
        </Body>
      </ExpandableSection>

      {/* ── The Enactus Project Criterion ── */}
      <ExpandableSection
        id="criterion"
        title="The Enactus Project Criterion"
        expanded={expandedSections.has("criterion")}
        onToggle={onToggle}
      >
        <Body>
          As Enactus students, you&apos;re at the forefront of entrepreneurial
          action, driving social innovation. Enactus Projects all over the world
          follow a simple framework that guides the creation of new projects,
          called the Enactus Criterion. It is used to evaluate your realized
          outcomes and direct impact at Regional, National, and Global Enactus
          competitions.
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
        <SubHeading>Entrepreneurial Leadership</SubHeading>
        <Body>
          Identifying a need and capitalizing on opportunities by taking
          personal responsibility, managing risk, and managing change within a
          dynamic environment. Your team should:
        </Body>
        <List
          items={[
            "Demonstrate the capability to lead and develop the project, leveraging skills within the team and from partnerships",
            "Make effective use of resources and establish a supportive network, ensuring the team's ownership and operational control",
            "Build a solid foundation through a thorough needs assessment informing the project's direction",
          ]}
        />
        <SubHeading>Use of Business Principles</SubHeading>
        <Body>
          Applying a sound business model and business plan. Judges evaluate:
        </Body>
        <List
          items={[
            "A robust, clear, and comprehensive business model incorporating strategy, marketing, and logistics",
            "Financial self-sufficiency highlighted by a logical and complete financial plan",
            "Proof of income generated in the past year, reflecting the project's financial health",
            "A strategy for scaling the project from a student initiative to a sustainable enterprise",
          ]}
        />
        <SubHeading>Innovation</SubHeading>
        <Body>
          The process of introducing new or improving existing ideas, services,
          technologies, products, or methodologies. Judges look for
          implementation or improvement of new ideas, technologies, or methods
          in the past year.
        </Body>
        <SubHeading>Sustainable Positive Impact</SubHeading>
        <Body>
          Demonstrating a measurable, lasting improvement for people, planet,
          and prosperity. The core question: has your project created lasting,
          measurable change that benefits people (social impact), planet
          (environmental impact), and/or prosperity (economic impact)?
        </Body>
      </ExpandableSection>

      {/* ── Developing Your Project ── */}
      <ExpandableSection
        id="developing"
        title="Developing Your Project"
        expanded={expandedSections.has("developing")}
        onToggle={onToggle}
      >
        <Body>
          Aligning your Enactus project with the Sustainable Development Goals
          (SDGs) offers a powerful framework to ensure your initiatives
          contribute meaningfully to local, regional, and global challenges.
          Projects typically progress through these stages:
        </Body>
        <List
          items={[
            "Basic Concept/Idea — Identify a community need using the SDGs as a starting point",
            "Needs and Strengths Assessment — Understand the specific needs your project aims to address",
            "Project Planning — Design innovative solutions that are economically viable, socially equitable, and environmentally sustainable",
            "Project Implementation — Apply sound business principles and entrepreneurial leadership to execute your plan",
            "Impact Realization — Measure and document the outcomes and impact achieved",
            "Project Continuation — Plan for scalability and long-term sustainability",
          ]}
        />
        <Body>
          Successful Enactus projects consider relevant economic, social, and
          environmental factors; identify an appropriate target group with a
          clear need; demonstrate entrepreneurial action, innovation, and
          collaboration; apply sound business principles; articulate true impact
          using both quantitative data and qualitative information; collaborate
          with the team&apos;s Business Advisory Board; and define potential for
          continuation and expansion.
        </Body>
      </ExpandableSection>

      {/* ── Impact Definitions ── */}
      <ExpandableSection
        id="impact-defs"
        title="Impact Definitions &amp; Measuring Impact"
        expanded={expandedSections.has("impact-defs")}
        onToggle={onToggle}
      >
        <Body>
          Enactus defines impact across the dimensions of people, planet, and
          prosperity. The direct impact of your project is the number of people
          who have gained new knowledge, skills, or resources — or experienced a
          positive change in their everyday life — as a direct result of the
          project.
        </Body>
        <SubHeading>People (Social Impact)</SubHeading>
        <Body>
          Projects that improve quality of life — advancing education, improving
          health outcomes, fostering inclusion, empowering marginalized groups,
          or strengthening communities.
        </Body>
        <SubHeading>Planet (Environmental Impact)</SubHeading>
        <Body>
          Projects that improve the natural environment — reducing waste,
          conserving resources, promoting renewable energy, protecting
          ecosystems, or addressing climate change.
        </Body>
        <SubHeading>Prosperity (Economic Impact)</SubHeading>
        <Body>
          Projects that create economic opportunity — generating income,
          creating jobs, developing workforce skills, increasing financial
          literacy, or building local enterprise capacity.
        </Body>
        <Body>
          When measuring project impact, consider using both qualitative and
          quantitative methods to assess program outcomes and impact. Proper
          documentation — including names of team members, partners,
          beneficiaries, photographs, videos, quantitative data, and press
          clippings — will help teams create more complete annual reports and
          competition presentations.
        </Body>
      </ExpandableSection>

      {/* ── Presentation Format ── */}
      <ExpandableSection
        id="format"
        title="Presentation Format &amp; Impact Period"
        expanded={expandedSections.has("format")}
        onToggle={onToggle}
      >
        <Body>
          Having covered the Enactus criterion, impact definitions, team
          guidelines, and pre-Nationals reporting, this section outlines the
          structure for your pitch, essential for both National Competitions and
          the Enactus World Cup.
        </Body>
        <SubHeading>Timing Breakdown</SubHeading>
        <List
          items={[
            "Set-Up Period: 3 minutes for setting up and checking any audio-visual equipment. Annual Reports should be handed out to the judges.",
            "Presentation: 12 minutes to deliver your impactful presentation. Exceeding this limit will result in being cut off.",
            "Question and Answer Period: 5 minutes for judges' questions. If an interpreter is needed, the Q&A period extends to 10 minutes.",
          ]}
        />
        <SubHeading>Impact Period</SubHeading>
        <Body>
          The official reporting period for teams participating in the Enactus
          World Cup is one year with a gap of one month to the World Cup. For
          National Competitions, this period is determined by the Country
          Office.
        </Body>
      </ExpandableSection>

      {/* ── Annual Report ── */}
      <ExpandableSection
        id="annual-report"
        title="Annual Report &amp; Standardized Impact Page"
        expanded={expandedSections.has("annual-report")}
        onToggle={onToggle}
      >
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
      </ExpandableSection>

      {/* ── Judge Process ── */}
      <ExpandableSection
        id="judge-process"
        title="Judge Process"
        expanded={expandedSections.has("judge-process")}
        onToggle={onToggle}
      >
        <Body>
          Judges are business leaders, entrepreneurs, and community development
          professionals. They follow a structured evaluation process:
        </Body>
        <List
          items={[
            "1. Orientation on the Enactus Project Criterion and evaluation forms",
            "2. Taking the Judge's Oath for fairness and impartiality",
            "3. Evaluating presentations and reviewing Annual Reports",
            "4. Using the Individual Team Evaluation Form (ITEF) for scoring each team",
            "5. Using the Cumulative Team Evaluation Form (CTEF) for ranking teams",
            "6. Ranking teams based on cumulative assessments across all criteria",
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
            the realized impact and tangible outcomes they have achieved in the
            last year. My assessments will adhere strictly to the Enactus
            Project Criterion provided, ensuring a just and equitable evaluation
            process.&rdquo;
          </p>
        </div>
      </ExpandableSection>

      {/* ── Impact & Financial Reporting Review ── */}
      <ExpandableSection
        id="impact-review"
        title="Impact &amp; Financial Reporting Review"
        expanded={expandedSections.has("impact-review")}
        onToggle={onToggle}
      >
        <Body>
          After the National Competition, the Champion team is subject to an
          in-depth Impact &amp; Financial Reporting Review by the Enactus
          Country Office, as part of an Enactus Global reviewing initiative.
          This review ensures that teams accurately report their project impact
          and financial results before competing at the Enactus World Cup.
        </Body>
        <SubHeading>What to Expect</SubHeading>
        <List
          items={[
            "All guidelines governing the review are provided by Enactus Global to Country Offices",
            "The reviewer may be the Country Leader, Head of Program, Program Manager, or a similar role",
            "The process is typically conducted within five weeks after the National event",
            "Once the National Champion successfully passes, they are eligible for the Enactus World Cup",
            "If the team fails the review, the first runner-up will be subject to the review process",
            "The team that failed has one week from formal notification to appeal the decision",
          ]}
        />
        <SubHeading>Pre-World Cup Reporting Requirements</SubHeading>
        <Body>
          Teams advancing to the Enactus World Cup must pass the Impact &amp;
          Financial Reporting Review and submit all required documentation to
          Enactus Global one month before the World Cup. Teams should maintain
          year-round readiness and keep clear records of:
        </Body>
        <List
          items={[
            "Team members and hours contributed",
            "Beneficiaries and demographics",
            "Project partners and materials used",
            "Financials — income and surplus",
            "Photos, videos, and media coverage",
            "Press clippings and social media reach data",
          ]}
        />
      </ExpandableSection>

      {/* ── Top Tips ── */}
      <ExpandableSection
        id="top-tips"
        title="Top Tips for the Review"
        expanded={expandedSections.has("top-tips")}
        onToggle={onToggle}
      >
        <Body>
          Prepare for the Impact &amp; Financial Reporting Review with these
          tips from the handbook:
        </Body>
        <List
          items={[
            "Conduct self-reviews of your impact and financial data before submission",
            "Assign a team member or faculty advisor to oversee documentation",
            "Maintain clear records of team hours, beneficiaries, financials, and media coverage",
            "Inform beneficiaries in advance that they may be contacted for verification",
            "Follow Enactus' official impact definitions to avoid misrepresentation",
            "Keep organized documentation throughout the year — don't wait until competition season",
          ]}
        />
      </ExpandableSection>

      {/* ── FAQ ── */}
      <ExpandableSection
        id="faq"
        title="Frequently Asked Questions"
        expanded={expandedSections.has("faq")}
        onToggle={onToggle}
      >
        <Qa
          q="What are the key reporting requirements before competing in Nationals?"
          a="Teams must submit their Project Report Form, Team Information Form, and Project Verification Form. It is recommended to submit these at least two weeks before the National Competition."
        />
        <Qa
          q="What is the Impact & Financial Reporting Review?"
          a="This review ensures that teams accurately report their project impact and financial results before competing at the Enactus World Cup."
        />
        <Qa
          q="What happens if a team fails the review?"
          a="If a team does not pass, the first runner-up may undergo the review. Teams have one week to appeal the decision if they fail."
        />
        <Qa
          q="What must be in the Annual Report?"
          a="The Annual Report must include project descriptions, target beneficiaries, actual impacts, and a Standardized Impact Page with Direct Impact, Indirect Impact, Reach, Projections, and Financial Results."
        />
        <Qa
          q="How does the judge process work?"
          a="Judges follow: Orientation on the Enactus Project Criterion, taking the Judge's Oath, evaluating presentations and annual reports, using ITEF and CTEF forms for scoring, then ranking teams."
        />
        <Qa
          q="What is the role of Country Leaders in impact reporting?"
          a="Country Leaders and Program Staff oversee the review process, provide guidance to teams, and ensure compliance with Enactus Global's reporting standards."
        />
        <Qa
          q="How can teams prepare for the review?"
          a="Teams should conduct self-reviews, assign a documentation lead, maintain clear records, inform beneficiaries about potential contact for verification, and follow Enactus' official impact definitions."
        />
        <Qa
          q="Can teams present more than one project?"
          a="Teams typically present their single strongest project in the Core Competition. The Annual Report may document multiple projects, but the presentation should focus on one."
        />
      </ExpandableSection>
    </div>
  );
}

/* ─── Early Stage Track Content ─── */

function EarlyStageColumn() {
  return (
    <div className="space-y-4">
      {/* ── Overview ── */}
      <AnimatedSection>
        <h2 className="mt-10 text-2xl font-semibold tracking-tight first:mt-0">
          Overview
        </h2>
        <Body>
          The Early Stage Collaboration &amp; Competition Track is designed for
          teams that are newer to Enactus or in the early stages of developing
          their projects. This track provides a supportive environment where
          emerging teams can gain competition experience, receive mentorship,
          and build toward the Main Competition track. Projects must be
          validated but not yet delivering full impact.
        </Body>
      </AnimatedSection>

      {/* ── Selecting a Team ── */}
      <AnimatedSection>
        <h2 className="mt-10 text-2xl font-semibold tracking-tight first:mt-0">
          Selecting a Team
        </h2>
        <Body>
          Teams are selected for the Early Stage Track based on their level of
          development and readiness for competition. The track is ideal for:
        </Body>
        <List
          items={[
            "Newly formed Enactus teams in their first or second year",
            "Teams with projects still in the pilot or early implementation phase",
            "Teams seeking structured mentorship before entering the Main Competition",
            "Universities newly partnered with Enactus Philippines",
          ]}
        />
      </AnimatedSection>

      {/* ── Purpose ── */}
      <AnimatedSection>
        <h2 className="mt-10 text-2xl font-semibold tracking-tight first:mt-0">
          Purpose
        </h2>
        <Body>
          The Early Stage Track exists to lower the barrier to entry for
          competition. It provides emerging teams with the scaffolding they need
          to develop competitive projects — training, mentorship, peer learning,
          and a low-stakes environment to practice their presentation and
          storytelling skills before advancing to the main stage.
        </Body>
      </AnimatedSection>

      {/* ── Experience ── */}
      <AnimatedSection>
        <h2 className="mt-10 text-2xl font-semibold tracking-tight first:mt-0">
          Experience
        </h2>
        <Body>
          Participants in the Early Stage Track go through a structured
          multi-phase experience designed to build confidence and capability.
        </Body>
        <SubHeading>Immersion</SubHeading>
        <Body>
          Teams begin with an immersion phase where they learn the fundamentals
          of the Enactus methodology, competition expectations, and project
          development frameworks.
        </Body>
        <SubHeading>Showcase &amp; Workshops</SubHeading>
        <Body>
          Teams participate in showcase events and intensive workshops where
          they present their work-in-progress to peers, mentors, and Enactus
          leadership for feedback.
        </Body>
        <SubHeading>Pitch</SubHeading>
        <Body>
          The culmination is a pitch event where teams present their projects to
          a panel of judges in a supportive setting, receiving detailed feedback
          regardless of competitive outcome.
        </Body>
      </AnimatedSection>

      {/* ── Recognition & Certification ── */}
      <AnimatedSection>
        <h2 className="mt-10 text-2xl font-semibold tracking-tight first:mt-0">
          Recognition &amp; Certification
        </h2>
        <Body>
          All participating teams receive certificates of participation. The
          Early Stage Track features six award categories:
        </Body>
        <List
          items={[
            "Best Emerging Team — new teams showing exceptional promise",
            "Most Innovative Approach — creative solutions to community challenges",
            "Strongest Community Engagement — deep community integration",
            "Best Presentation — excellence in storytelling and delivery",
            "Greatest Potential for Impact — highest projected outcomes",
            "Spirit of Enactus — embodies the values and mission of Enactus",
          ]}
        />
      </AnimatedSection>

      {/* ── Outcomes ── */}
      <AnimatedSection>
        <h2 className="mt-10 text-2xl font-semibold tracking-tight first:mt-0">
          Outcomes
        </h2>
        <Body>
          Teams gain valuable experience and concrete outcomes that accelerate
          their development:
        </Body>
        <List
          items={[
            "Hands-on competition experience in a low-pressure environment",
            "Detailed feedback from experienced judges and mentors",
            "Structured mentorship pathway to the Main Competition",
            "Network-building with other emerging teams across the Philippines",
            "Certificate of participation and eligibility for track-specific awards",
            "Clear roadmap for project development and competition readiness",
          ]}
        />
      </AnimatedSection>

      {/* ── University Value ── */}
      <AnimatedSection>
        <h2 className="mt-10 text-2xl font-semibold tracking-tight first:mt-0">
          University Value
        </h2>
        <Body>
          The Early Stage Track delivers significant value to participating
          universities:
        </Body>
        <List
          items={[
            "Develops student leadership and entrepreneurial skills early in their academic journey",
            "Strengthens the university's Enactus chapter for long-term sustainability",
            "Provides faculty advisors with structured development resources",
            "Creates a pipeline of experienced teams ready for Main Competition",
            "Enhances the university's reputation for social innovation education",
          ]}
        />
      </AnimatedSection>

      {/* ── Supporting Participation ── */}
      <AnimatedSection>
        <h2 className="mt-10 text-2xl font-semibold tracking-tight first:mt-0">
          Supporting Participation
        </h2>
        <Body>
          Enactus Philippines provides comprehensive support to Early Stage
          Track participants:
        </Body>
        <List
          items={[
            "Dedicated mentor assigned to each participating team",
            "Access to training materials, templates, and toolkits",
            "Quarterly check-ins with Enactus Philippines staff",
            "Peer learning circles with other early-stage teams",
            "Travel and accommodation support where available",
            "Direct line to Enactus Philippines for questions and guidance",
          ]}
        />
      </AnimatedSection>

      {/* ── FAQ ── */}
      <AnimatedSection>
        <h2 className="mt-10 text-2xl font-semibold tracking-tight first:mt-0">
          Frequently Asked Questions
        </h2>
        <Qa
          q="Who is eligible for the Early Stage Track?"
          a="Any Enactus team in their first two years of operation, or any team with projects still in early development stages, is eligible."
        />
        <Qa
          q="Can a team participate in both tracks?"
          a="Teams typically participate in one track per competition cycle. Early Stage Track is designed as a stepping stone to the Main Competition."
        />
        <Qa
          q="Is there a limit on team size?"
          a="Team size guidelines follow the Main Competition rules. Contact Enactus Philippines for specific caps."
        />
        <Qa
          q="How are winners selected?"
          a="Projects are evaluated on criteria adapted from the Main Competition framework, with additional emphasis on growth trajectory and learning."
        />
        <Qa
          q="Is there a cost to participate?"
          a="Costs vary by year. Enactus Philippines works to minimize financial barriers. Contact us for current information."
        />
        <Qa
          q="What happens after the Early Stage Track?"
          a="Teams are encouraged to continue developing their projects and enter the Main Competition in the following cycle. Mentorship continues through the transition."
        />
        <Qa
          q="Can alumni mentor Early Stage teams?"
          a="Yes! Alumni mentors are welcome and often provide invaluable guidance. Contact Enactus Philippines to be matched with a team."
        />
        <Qa
          q="How do we register our interest?"
          a="Reach out to Enactus Philippines through the contact information on this site. Early expression of interest is encouraged."
        />
      </AnimatedSection>
    </div>
  );
}

/* ─── Root Client Component ─── */

export default function CompetitionsContent() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    () => new Set(["welcome"])
  );

  const handleToggle = useCallback((id: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* ─── HERO ─── */}
      <div className="relative">
        {/* <PageHero /> */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/10">
          <div className="absolute inset-0 bg-[url('/grid-bg.svg')] bg-center opacity-[0.03]" />
          <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-20 pt-28 text-center sm:pb-28 sm:pt-36">
            <span className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Competitions
            </span>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              Where teams prove their
              <br />
              <span className="text-foreground/40">impact.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Two tracks, one mission: empowering Filipino students to create
              positive change through entrepreneurial action. Explore the Main
              Competition and the Early Stage Collaboration &amp; Competition
              Track.
            </p>
          </div>
        </section>
      </div>

      {/* ─── TWO-COLUMN CONTENT ─── */}
      <div className="flex flex-1 flex-col border-t border-border/60 md:flex-row md:min-h-0">
        {/* Main Competition — Left Column */}
        <div className="border-b border-border/60 px-6 py-10 md:w-1/2 md:overflow-y-auto md:border-b-0 md:border-r md:border-border/60">
          <div className="mx-auto max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              · Enactus Competition Handbook — Core Competition
            </div>

            <ImageCredit
              src="/competitions/enactus-logo.png"
              alt="Enactus Logo"
              caption="The Enactus World Cup — where national champions from every Enactus country compete."
            />

            <MainCompetitionColumn
              expandedSections={expandedSections}
              onToggle={handleToggle}
            />
          </div>
        </div>

        {/* Early Stage Track — Right Column */}
        <div className="px-6 py-10 md:w-1/2 md:overflow-y-auto">
          <div className="mx-auto max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              · Early Stage Collaboration &amp; Competition Track
            </div>

            <ImageCredit
              src="/competitions/enactus-gray-logo.png"
              alt="Enactus collaboration"
              caption="Emerging teams building skills through the Early Stage Track."
            />

            <EarlyStageColumn />
          </div>
        </div>
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
        . Images &copy; Enactus. Verify exact wording against the official
        handbook.
      </div>
    </div>
  );
}
