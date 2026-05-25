import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Competitions",
  description:
    "Enactus Philippines competitions — from campus qualifiers to the National Expo and World Cup.",
};

/* ─── Shared sub-components ─── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 text-2xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

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

/* ─── Main Competition Content ─── */

function MainCompetitionColumn() {
  return (
    <div className="space-y-4">
      {/* ── Welcome ── */}
      <AnimatedSection>
        <SectionHeading>Welcome to the Enactus Competition</SectionHeading>
        <Body>
          The Enactus Competition is the culmination of a year of
          entrepreneurial action. It is where student teams showcase the
          community outreach projects they have developed using business
          principles and innovation to create sustainable positive impact. Each
          year, teams from universities around the world compete at local,
          national, and global levels, demonstrating how their projects have
          transformed lives and communities.
        </Body>
      </AnimatedSection>

      {/* ── Competition Journey ── */}
      <AnimatedSection>
        <SectionHeading>Competition Journey</SectionHeading>
        <Body>
          The journey begins on your campus. Teams develop and implement their
          projects throughout the academic year. The competition season
          typically follows this path:
        </Body>
        <List
          items={[
            "Campus-level qualifying rounds to identify your strongest team",
            "National Expo — compete against teams from across the Philippines",
            "Advancing teams earn the right to represent the Philippines at the Enactus World Cup",
            "World Cup — global showcase of the most impactful student-led projects",
          ]}
        />
      </AnimatedSection>

      {/* ── Team Guidelines ── */}
      <AnimatedSection>
        <SectionHeading>Team Guidelines</SectionHeading>
        <Body>
          Each participating university fields a single team to represent them
          at the National Expo. Teams must consist of currently enrolled
          students, and each team member must have contributed meaningfully to
          the projects being presented.
        </Body>
        <List
          items={[
            "One team per university campus",
            "Team members must be currently enrolled students",
            "Projects presented must be active and ongoing",
            "Teams must adhere to the Enactus Code of Conduct",
            "All team members must be registered with Enactus Philippines",
          ]}
        />
      </AnimatedSection>

      {/* ── Mandatory Reporting ── */}
      <AnimatedSection>
        <SectionHeading>Mandatory Reporting</SectionHeading>
        <Body>
          Participating teams must complete mandatory reporting requirements
          prior to the competition. This ensures all teams are evaluated fairly
          and consistently.
        </Body>
        <List
          items={[
            "Submit team roster and student registration forms",
            "Complete the Annual Report for each project being presented",
            "Submit impact and financial data for all projects",
            "Confirm adherence to competition rules via signed declaration",
            "Meet all submission deadlines — late entries may be disqualified",
          ]}
        />
      </AnimatedSection>

      {/* ── Enactus Project Criterion ── */}
      <AnimatedSection>
        <SectionHeading>Enactus Project Criterion</SectionHeading>
        <Body>
          Projects are evaluated against five core criteria that define the
          Enactus methodology. Each criterion carries equal weight in the
          judging process.
        </Body>

        <SubHeading>Entrepreneurial Leadership</SubHeading>
        <Body>
          Judges look for evidence that the team demonstrated entrepreneurial
          leadership — taking initiative, making strategic decisions, and
          empowering others through the project. Teams should show how they
          identified opportunities, mobilized resources, and inspired others to
          act.
        </Body>

        <SubHeading>Business Principles</SubHeading>
        <Body>
          Projects must apply sound business principles. This includes financial
          sustainability, operational efficiency, market analysis, and
          measurable outcomes. Judges assess whether the project uses business
          acumen to achieve its social mission.
        </Body>

        <SubHeading>Innovation</SubHeading>
        <Body>
          Innovation can take many forms — a novel approach to an old problem, a
          creative use of technology, or an original business model. Judges
          reward teams that think differently and bring fresh solutions to
          community challenges.
        </Body>

        <SubHeading>Sustainable Positive Impact</SubHeading>
        <Body>
          The most important criterion: has the project created lasting,
          measurable change? Teams must demonstrate both qualitative and
          quantitative evidence of impact across environmental, social, and/or
          economic dimensions. Impact must be ongoing, not a one-time event.
        </Body>
      </AnimatedSection>

      {/* ── Developing Your Project ── */}
      <AnimatedSection>
        <SectionHeading>Developing Your Project</SectionHeading>
        <Body>
          Building a competition-ready project takes time and deliberate effort.
          Start by identifying a real community need, then work with the
          community to co-create a solution.
        </Body>
        <List
          items={[
            "Engage with the community to understand their needs",
            "Design a solution that is both impactful and financially sustainable",
            "Test and iterate — use feedback to refine your approach",
            "Document everything: decisions, challenges, outcomes, and data",
            "Prepare your story — how did you get from idea to impact?",
          ]}
        />
      </AnimatedSection>

      {/* ── Impact Definitions ── */}
      <AnimatedSection>
        <SectionHeading>Impact Definitions</SectionHeading>
        <Body>
          Enactus defines impact across three dimensions. Projects may address
          one or more of these areas.
        </Body>

        <SubHeading>Environmental Impact</SubHeading>
        <Body>
          Projects that improve the natural environment — reducing waste,
          conserving resources, promoting renewable energy, protecting
          ecosystems, or addressing climate change.
        </Body>

        <SubHeading>Social Impact</SubHeading>
        <Body>
          Projects that improve quality of life — advancing education, improving
          health outcomes, fostering inclusion, empowering marginalized groups,
          or strengthening communities.
        </Body>

        <SubHeading>Economic Impact</SubHeading>
        <Body>
          Projects that create economic opportunity — generating income,
          creating jobs, developing workforce skills, increasing financial
          literacy, or building local enterprise capacity.
        </Body>
      </AnimatedSection>

      {/* ── Presentation Format ── */}
      <AnimatedSection>
        <SectionHeading>Presentation Format</SectionHeading>
        <Body>
          Each team delivers a live presentation to a panel of judges, followed
          by a Q&A session. Presentations follow a strict format to ensure
          fairness.
        </Body>
        <List
          items={[
            "Presentation time: 13 minutes maximum",
            "Q&A session: 5-6 minutes with judges",
            "Presentations may use slides, videos, or live demonstrations",
            "All team members presenting must be currently enrolled students",
            "No props or giveaways that could be considered bribes",
            "Professional attire is expected",
          ]}
        />
      </AnimatedSection>

      {/* ── Annual Report ── */}
      <AnimatedSection>
        <SectionHeading>Annual Report</SectionHeading>
        <Body>
          The Annual Report is your project&apos;s written record. It
          accompanies your presentation and gives judges a detailed view of your
          work throughout the year.
        </Body>
        <List
          items={[
            "Must follow the official Enactus Annual Report template",
            "Include project overview, methodology, and timeline",
            "Provide quantitative data on outcomes and impact",
            "Include financial statements and budgets",
            "Submit by the published deadline — no extensions",
          ]}
        />
      </AnimatedSection>

      {/* ── Judge Process ── */}
      <AnimatedSection>
        <SectionHeading>Judge Process</SectionHeading>
        <Body>
          Judges are business leaders, entrepreneurs, and community development
          professionals. They are trained to evaluate projects against the five
          criteria consistently.
        </Body>
        <List
          items={[
            "Each judging panel consists of 3-5 judges",
            "Judges review the Annual Report before the presentation",
            "Scoring is based on the five criteria, each scored 1-10",
            "Judges may ask clarifying questions during Q&A",
            "Scores are tabulated after all presentations in a round",
            "Top-scoring teams advance to the next round",
          ]}
        />
      </AnimatedSection>

      {/* ── Impact & Financial Reporting Review ── */}
      <AnimatedSection>
        <SectionHeading>Impact &amp; Financial Reporting Review</SectionHeading>
        <Body>
          All impact and financial data submitted by teams is subject to review.
          Teams must be prepared to provide supporting documentation for their
          claims.
        </Body>
        <List
          items={[
            "Impact data must be verifiable and accurately reported",
            "Financial information must match project budgets and statements",
            "Teams may be asked to provide source documentation",
            "Misrepresentation of data may result in disqualification",
            "The review ensures integrity and fairness across all entries",
          ]}
        />
      </AnimatedSection>

      {/* ── Top Tips ── */}
      <AnimatedSection>
        <SectionHeading>Top Tips</SectionHeading>
        <List
          items={[
            "Tell a compelling story — connect emotionally while showing data",
            "Practice your timing obsessively — 13 minutes goes fast",
            "Know your numbers — be ready with exact figures during Q&A",
            "Involve the community in your presentation if possible",
            "Show, don&apos;t just tell — use visuals, videos, and demonstrations",
            "Prepare for tough questions — have your supporting data ready",
            "Arrive early, test all equipment, have backups",
          ]}
        />
      </AnimatedSection>

      {/* ── FAQ ── */}
      <AnimatedSection>
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <Qa
          q="Can we present more than one project?"
          a="Teams typically present their single strongest project. The Annual Report may document multiple projects, but the presentation should focus on one."
        />
        <Qa
          q="Can alumni help with preparation?"
          a="Yes, alumni may mentor and coach the team, but they may not participate in the presentation or be listed as team members."
        />
        <Qa
          q="What if our project is less than one year old?"
          a="Projects of any duration are welcome, but judges will evaluate based on demonstrated impact relative to the project timeline."
        />
        <Qa
          q="Is there a registration fee?"
          a="Contact Enactus Philippines for current fee structure. Fee waivers or sponsorships may be available."
        />
      </AnimatedSection>
    </div>
  );
}

/* ─── Early Stage Track Content ─── */

function EarlyStageColumn() {
  return (
    <div className="space-y-4">
      {/* ── Overview ── */}
      <AnimatedSection>
        <SectionHeading>Overview</SectionHeading>
        <Body>
          The Early Stage Collaboration &amp; Competition Track is designed for
          teams that are newer to Enactus or in the early stages of developing
          their projects. This track provides a supportive environment where
          emerging teams can gain competition experience, receive mentorship,
          and build toward the Main Competition track.
        </Body>
      </AnimatedSection>

      {/* ── Selecting a Team ── */}
      <AnimatedSection>
        <SectionHeading>Selecting a Team</SectionHeading>
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
        <SectionHeading>Purpose</SectionHeading>
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
        <SectionHeading>Experience</SectionHeading>
        <Body>
          Participants in the Early Stage Track go through a structured
          multi-phase experience designed to build confidence and capability.
        </Body>

        <SubHeading>Immersion</SubHeading>
        <Body>
          Teams begin with an immersion phase where they learn the fundamentals
          of the Enactus methodology, competition expectations, and project
          development frameworks. This phase includes workshops on identifying
          community needs, designing interventions, and measuring impact.
        </Body>

        <SubHeading>Showcase &amp; Workshops</SubHeading>
        <Body>
          Teams participate in showcase events and intensive workshops where
          they present their work-in-progress to peers, mentors, and Enactus
          leadership. This is a feedback-rich environment designed to help teams
          refine their approach before formal competition.
        </Body>

        <SubHeading>Pitch</SubHeading>
        <Body>
          The culmination of the track is a pitch event where teams present
          their projects to a panel of judges in a supportive setting. Teams
          receive detailed feedback and recognition, regardless of competitive
          outcome. This prepares them for the format and pressure of the Main
          Competition.
        </Body>
      </AnimatedSection>

      {/* ── Recognition & Certification ── */}
      <AnimatedSection>
        <SectionHeading>Recognition &amp; Certification</SectionHeading>
        <Body>
          All participating teams receive certificates of participation. The
          Early Stage Track features six award categories recognizing different
          dimensions of achievement:
        </Body>
        <List
          items={[
            "Best Emerging Team — recognizes new teams showing exceptional promise",
            "Most Innovative Approach — for creative solutions to community challenges",
            "Strongest Community Engagement — teams with deep community integration",
            "Best Presentation — excellence in storytelling and delivery",
            "Greatest Potential for Impact — projects with the highest projected outcomes",
            "Spirit of Enactus — embodies the values and mission of Enactus",
          ]}
        />
      </AnimatedSection>

      {/* ── Outcomes ── */}
      <AnimatedSection>
        <SectionHeading>Outcomes</SectionHeading>
        <Body>
          Teams that participate in the Early Stage Track gain valuable
          experience and concrete outcomes that accelerate their development:
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
        <SectionHeading>University Value</SectionHeading>
        <Body>
          The Early Stage Track delivers significant value to participating
          universities:
        </Body>
        <List
          items={[
            "Develops student leadership and entrepreneurial skills early in their academic journey",
            "Strengthens the university&apos;s Enactus chapter for long-term sustainability",
            "Provides faculty advisors with structured development resources",
            "Creates a pipeline of experienced teams ready for Main Competition",
            "Enhances the university&apos;s reputation for social innovation education",
          ]}
        />
      </AnimatedSection>

      {/* ── Supporting Participation ── */}
      <AnimatedSection>
        <SectionHeading>Supporting Participation</SectionHeading>
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
        <SectionHeading>Frequently Asked Questions</SectionHeading>
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

/* ─── Page ─── */

export default function Competitions() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* ─── HERO ─── */}
      <PageHero
        eyebrow="Competitions"
        title={
          <>
            Where teams prove their
            <br />
            <span className="text-foreground/40">impact.</span>
          </>
        }
        subtitle="Two tracks, one mission: empowering Filipino students to create positive change through entrepreneurial action. Explore the Main Competition and the Early Stage Collaboration & Competition Track."
      />

      {/* ─── TWO-COLUMN CONTENT ─── */}
      <div className="flex flex-1 flex-col border-t border-border/60 md:flex-row md:min-h-0">
        {/* Main Competition — Left Column */}
        <div className="border-b border-border/60 px-6 py-10 md:w-1/2 md:overflow-y-auto md:border-b-0 md:border-r md:border-border/60">
          <div className="mx-auto max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              · Main Competition
            </div>
            <MainCompetitionColumn />
          </div>
        </div>

        {/* Early Stage Track — Right Column */}
        <div className="px-6 py-10 md:w-1/2 md:overflow-y-auto">
          <div className="mx-auto max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              · Early Stage Collaboration &amp; Competition Track
            </div>
            <EarlyStageColumn />
          </div>
        </div>
      </div>
    </div>
  );
}
