import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Early Stage Collaboration & Competition Track | Enactus Philippines",
  description:
    "The Early Stage Collaboration & Competition Track is designed for newer Enactus teams to gain competition experience, receive mentorship, and build toward the Main Competition.",
};

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

export default function EarlyStagePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/10">
        <div
          className="absolute inset-0 grid-bg opacity-[0.04]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-20 pt-20 md:pt-28 text-center sm:pb-28 sm:pt-36">
          <Link
            href="/competitions"
            className="mb-6 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to Competitions
          </Link>
          <span className="mb-6 block font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Early Stage Collaboration &amp; Competition Track
          </span>
          <h1 className="text-hero font-bold leading-[1.1] tracking-tight">
            Early Stage
            <br />
            <span className="text-foreground/40">Collaboration Track</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
            A supportive environment where emerging teams can gain competition
            experience, receive mentorship, and build toward the Main
            Competition.
          </p>
        </div>
      </section>

      {/* ─── TABLE OF CONTENTS ─── */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-12 mt-6 rounded-xl border border-border/60 bg-muted/10 p-5">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            On this page
          </p>
          <ul className="space-y-1">
            {[
              { id: "overview", label: "Overview" },
              { id: "selecting-a-team", label: "Selecting a Team" },
              { id: "purpose", label: "Purpose" },
              { id: "experience", label: "Experience" },
              { id: "recognition-certification", label: "Recognition & Certification" },
              { id: "outcomes", label: "Outcomes" },
              { id: "university-value", label: "University Value" },
              { id: "supporting-participation", label: "Supporting Participation" },
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

      {/* ─── CONTENT ─── */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        {/* ── Overview ── */}
        <section id="overview" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
          <Body>
            The Early Stage Collaboration &amp; Competition Track is designed
            for teams that are newer to Enactus or in the early stages of
            developing their projects. This track provides a supportive
            environment where emerging teams can gain competition experience,
            receive mentorship, and build toward the Main Competition track.
            Projects must be validated but not yet delivering full impact.
          </Body>
        </section>

        <hr className="my-12 border-border/40" />

        {/* ── Selecting a Team ── */}
        <section id="selecting-a-team" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
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
        </section>

        <hr className="my-12 border-border/40" />

        {/* ── Purpose ── */}
        <section id="purpose" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">Purpose</h2>
          <Body>
            The Early Stage Track exists to lower the barrier to entry for
            competition. It provides emerging teams with the scaffolding they
            need to develop competitive projects — training, mentorship, peer
            learning, and a low-stakes environment to practice their
            presentation and storytelling skills before advancing to the main
            stage.
          </Body>
        </section>

        <hr className="my-12 border-border/40" />

        {/* ── Experience ── */}
        <section id="experience" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <Body>
            Participants in the Early Stage Track go through a structured
            multi-phase experience designed to build confidence and capability.
          </Body>

          <SubHeading>Immersion</SubHeading>
          <Body>
            Teams begin with an immersion phase where they learn the
            fundamentals of the Enactus methodology, competition expectations,
            and project development frameworks.
          </Body>

          <SubHeading>Showcase &amp; Workshops</SubHeading>
          <Body>
            Teams participate in showcase events and intensive workshops where
            they present their work-in-progress to peers, mentors, and Enactus
            leadership for feedback.
          </Body>

          <SubHeading>Pitch</SubHeading>
          <Body>
            The culmination is a pitch event where teams present their projects
            to a panel of judges in a supportive setting, receiving detailed
            feedback regardless of competitive outcome.
          </Body>
        </section>

        <hr className="my-12 border-border/40" />

        {/* ── Recognition & Certification ── */}
        <section id="recognition-certification" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
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
        </section>

        <hr className="my-12 border-border/40" />

        {/* ── Outcomes ── */}
        <section id="outcomes" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">Outcomes</h2>
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
        </section>

        <hr className="my-12 border-border/40" />

        {/* ── University Value ── */}
        <section id="university-value" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
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
        </section>

        <hr className="my-12 border-border/40" />

        {/* ── Supporting Participation ── */}
        <section id="supporting-participation" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
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
        </section>

        <hr className="my-12 border-border/40" />

        {/* ── FAQ ── */}
        <section id="faq" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
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
        </section>
      </div>

      {/* ─── FOOTER NOTE ─── */}
      <div className="border-t border-border/60 bg-muted/20 px-6 py-4 text-center text-xs text-muted-foreground">
        Content sourced from Enactus Philippines competition documentation.
        Images &copy; Enactus.
      </div>
    </div>
  );
}
