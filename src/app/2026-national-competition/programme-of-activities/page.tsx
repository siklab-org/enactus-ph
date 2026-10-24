import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { ProgrammeAnimations } from "./ProgrammeAnimations";
import styles from "./programme.module.css";

export const metadata: Metadata = {
  title: "Programme of Activities | National Competition 2026",
  description:
    "View the Enactus Philippines National Competition and Philippine Youth Innovation Summit programme for October 9–10, 2026.",
};

type ScheduleRow = {
  time: string;
  competition: string;
  summit: string | null;
  venue: string;
};

const dayOne: ScheduleRow[] = [
  {
    time: "8:00 AM - 9:30 AM",
    competition: "Arrival, Registration, and Campus Tour",
    summit: "Arrival, Registration, and Campus Tour",
    venue: "DLSU South Gate (Beside McDo)",
  },
  {
    time: "9:30 AM - 10:30 AM",
    competition:
      "Welcome and Opening Ceremonies · Ceremonial MOU Signing with Regional Innovation Partners: SCALE NCR, SILLAG, UMWAD, SICAD-SOX, IDEAS DAVAO",
    summit:
      "Welcome and Opening Ceremonies · Ceremonial MOU Signing with Regional Innovation Partners: SCALE NCR, SILLAG, UMWAD, SICAD-SOX, IDEAS DAVAO",
    venue: "Yuchengco Auditorium (7th Floor)",
  },
  {
    time: "10:30 AM - 11:30 AM",
    competition: "Session: Sustainable Development and Social Entrepreneurship",
    summit: "Session: Sustainable Development and Social Entrepreneurship",
    venue: "Yuchengco Auditorium (7th Floor)",
  },
  {
    time: "11:30 AM - 12:30 PM",
    competition: "Lunch Break",
    summit: "Lunch Break",
    venue: "Yuchengco Lobby and Grounds",
  },
  {
    time: "12:30 PM - 1:00 PM",
    competition: "Judges Orientation",
    summit: "Lunch Break",
    venue: "Yuchengco Lobby and Grounds",
  },
  {
    time: "1:00 PM - 1:30 PM",
    competition: "Opening Round of the Competition - Early Stage Track (60 Teams)",
    summit: "Transition to Next Venue",
    venue: "Br. Andrew Gonzalez Hall",
  },
  {
    time: "1:30 PM - 2:30 PM",
    competition: "Opening Round of the Competition - Early Stage Track (60 Teams)",
    summit: "Session: Artificial Intelligence",
    venue: "Br. Andrew Gonzalez Hall",
  },
  {
    time: "2:30 PM - 3:00 PM",
    competition: "Opening Round of the Competition - Early Stage Track (60 Teams)",
    summit: "Special Session: Impact Challenge with AIESEC in the Philippines",
    venue: "Br. Andrew Gonzalez Hall",
  },
  {
    time: "3:00 PM - 3:30 PM",
    competition: "Reflect and Connect",
    summit: "Special Session: Impact Challenge with AIESEC in the Philippines",
    venue: "Br. Andrew Gonzalez Hall",
  },
  {
    time: "3:30 PM - 4:00 PM",
    competition: "Announcement of the First Set of Qualifiers",
    summit: "Special Session: Impact Challenge with AIESEC in the Philippines",
    venue: "Br. Andrew Gonzalez Hall",
  },
  {
    time: "4:00 PM - 5:30 PM",
    competition:
      "Top 30 Round of the Competition - Early Stage Track / Khan Academy Special Challenge Opening Round (30 Teams)",
    summit: "Special Session: Impact Challenge with AIESEC in the Philippines",
    venue: "Br. Andrew Gonzalez Hall",
  },
  {
    time: "5:30 PM - 6:00 PM",
    competition: "Free Time",
    summit: "Free Time",
    venue: "Br. Andrew Gonzalez Hall",
  },
  {
    time: "6:00 PM",
    competition: "Departure",
    summit: "Departure",
    venue: "DLSU South Gate (Beside McDo)",
  },
];
const dayTwo: ScheduleRow[] = [
  {
    time: "7:00 AM - 8:30 AM",
    competition: "Arrival and Registration",
    summit: null,
    venue: "DLSU South Gate (beside McDo)",
  },
  {
    time: "8:30 AM - 9:00 AM",
    competition:
      "Announcement of Top 10 (Early Stage Track and KEIC Track); Judge Orientation",
    summit: "Open Time",
    venue: "—",
  },
  {
    time: "9:00 AM - 10:00 AM",
    competition: "Semi-Finals Round (Top 10) - Early Stage Track",
    summit: "Session: Needs Assessment & Problem Validation",
    venue: "Enactus: Yuchengco Hall; PYIS: Br. Andrew Gonzalez Hall",
  },
  {
    time: "10:00 AM - 11:00 AM",
    competition: "Semi-Finals Round (Top 10) - Early Stage Track",
    summit: "Session: Innovation, Solution Design, and Scalability",
    venue: "Enactus: Yuchengco Hall; PYIS: Br. Andrew Gonzalez Hall",
  },
  {
    time: "11:00 AM - 12:00 PM",
    competition:
      "Semi-Finals Round (Top 10) - Khan Academy PH Special Challenge Track",
    summit: "Session: Pitch Development",
    venue: "Enactus: Yuchengco Hall; PYIS: Br. Andrew Gonzalez Hall",
  },
  {
    time: "12:00 PM - 1:00 PM",
    competition: "Lunch Break",
    summit: null,
    venue: "Yuchengco Lobby and Grounds",
  },
  {
    time: "1:00 PM - 1:30 PM",
    competition: "Reflect and Connect",
    summit: "Workshop: Pitching Simulation",
    venue: "Yuchengco Auditorium (7th floor)",
  },
  {
    time: "1:30 PM - 2:30 PM",
    competition: "Judge Orientation",
    summit: "Workshop: Pitching Simulation",
    venue: "Yuchengco Auditorium (7th floor)",
  },
  {
    time: "2:30 PM - 4:30 PM",
    competition:
      "Final Round of the Competition - Early Stage Track / Khan Academy PH Special Challenge",
    summit: null,
    venue: "Yuchengco Auditorium (7th floor)",
  },
  {
    time: "4:30 PM - 5:00 PM",
    competition: "Reflect and Connect",
    summit: null,
    venue: "Yuchengco Auditorium (7th floor)",
  },
  {
    time: "5:00 PM - 6:30 PM",
    competition: "Closing and Awarding Ceremonies",
    summit: null,
    venue: "Yuchengco Auditorium (7th floor)",
  },
  {
    time: "6:30 PM",
    competition: "Departure",
    summit: null,
    venue: "DLSU South Gate (beside McDo)",
  },
];

function DaySchedule({
  day,
  date,
  title,
  summary,
  rows,
}: {
  day: string;
  date: string;
  title: string;
  summary: string;
  rows: ScheduleRow[];
}) {
  return (
    <section
      id={day.toLowerCase().replace(" ", "-")}
      className="scroll-mt-28"
      aria-labelledby={`${day.toLowerCase().replace(" ", "-")}-title`}
    >
      <div
        className="mb-7 grid gap-5 md:grid-cols-[1fr_auto] md:items-end"
        data-programme-reveal
      >
        <div>
          <p className="text-base font-semibold text-primary">
            {day} · {date}, 2026
          </p>
          <h2
            id={`${day.toLowerCase().replace(" ", "-")}-title`}
            className="mt-2 text-3xl font-bold tracking-tight md:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {summary}
          </p>
        </div>
        <p className="text-base leading-relaxed text-foreground md:text-right">
          De La Salle University
          <br />
          Manila, Philippines
        </p>
      </div>

      <div className={styles.schedule}>
        <div className="hidden grid-cols-[150px_1fr_1fr_220px] gap-5 bg-secondary px-5 py-4 text-sm font-semibold text-secondary-foreground md:grid lg:grid-cols-[170px_1fr_1fr_240px]">
          <span>Time</span>
          <span>Enactus Philippines National Competition 2026</span>
          <span>Philippine Youth Innovation Summit 2026</span>
          <span>Venue</span>
        </div>
        <ol className={styles.scheduleRows}>
          {rows.map((row) => (
            <li
              key={row.time}
              className="grid gap-x-5 gap-y-4 px-5 py-5 odd:bg-card even:bg-muted/50 md:grid-cols-[150px_1fr_1fr_220px] md:items-start md:py-6 lg:grid-cols-[170px_1fr_1fr_240px]"
              data-programme-reveal
            >
              <time className="text-lg font-bold tabular-nums text-primary md:pt-0.5 md:text-base">
                {row.time}
              </time>
              <div className={row.summit ? undefined : "md:col-span-2"}>
                <p className="mb-1 text-sm font-semibold text-primary md:hidden">
                  {row.summit ? "Enactus Competition" : "Shared programme"}
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  {row.competition}
                </p>
              </div>
              {row.summit && (
                <div>
                  <p className="mb-1 text-sm font-semibold text-primary md:hidden">
                    Youth Innovation Summit
                  </p>
                  <p className="text-base leading-relaxed text-foreground">
                    {row.summit}
                  </p>
                </div>
              )}
              <div>
                <p className="mb-1 text-sm font-semibold text-primary md:hidden">
                  Venue
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {row.venue}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function ProgrammeOfActivitiesPage() {
  return (
    <main id="top" className={styles.page} data-programme-page>
      <ProgrammeAnimations />
      <section className="relative overflow-hidden border-b border-border/60 bg-transparent">
        <div
          className="pointer-events-none absolute inset-0 grid-bg opacity-100"
          aria-hidden
        />
        <div className="shell relative z-10 bg-transparent py-4 md:py-5">
          <div className={styles.cover}>
            <div>
              <Link
                href="/2026-national-competition"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                data-programme-reveal
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                National Competition 2026
              </Link>
              <h1
                className="mt-2 max-w-xl text-4xl font-bold leading-[1.04] tracking-tight text-foreground sm:text-5xl md:text-6xl"
                data-programme-reveal
              >
                Programme of Activities
              </h1>
              <p
                className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
                data-programme-reveal
              >
                Two days of competition, learning, and youth-led innovation at
                De La Salle University, Manila.
              </p>
            </div>
            <div className="md:text-right">
              <p
                className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
                data-programme-reveal
              >
                October 9–10, 2026
              </p>
              <nav
                aria-label="Jump to a day"
                className="mt-3 flex flex-wrap gap-3 md:justify-end"
                data-programme-reveal
              >
                <a href="#day-1" className={styles.jumpLink}>
                  Day 1 <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="#day-2" className={styles.jumpLinkSecondary}>
                  Day 2 <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 h-10 w-1/3 yellow-slash animate-slide-in-left"
          style={{ animationDelay: "300ms" }}
          aria-hidden
        />
      </section>

      <div className="shell space-y-16 py-14 md:space-y-24 md:py-20">
        <DaySchedule
          day="Day 1"
          date="October 9"
          title="Opening day"
          summary="Opening ceremonies, summit learning sessions, and the Early Stage opening and Top 30 rounds."
          rows={dayOne}
        />
        <DaySchedule
          day="Day 2"
          date="October 10"
          title="Finals and celebration"
          summary="Semi-finals, final rounds, and the closing and awarding ceremonies."
          rows={dayTwo}
        />
      </div>

      <footer className="bg-secondary text-secondary-foreground">
        <div className="shell flex flex-col gap-5 py-9 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold">
              Enactus Philippines National Competition
            </p>
            <p className="mt-1 text-sm text-secondary-foreground/75">
              October 9–10, 2026 · Manila
            </p>
          </div>
          <Link
            href="/2026-national-competition"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Competition details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </footer>
    </main>
  );
}
