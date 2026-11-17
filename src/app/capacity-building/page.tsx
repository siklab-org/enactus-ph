import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, CalendarDays, Clock3, Video } from "lucide-react";
import styles from "./capacity-building.module.css";

export const metadata: Metadata = {
  title: "National Capacity-Building Program | Enactus Philippines",
  description:
    "Explore the Enactus Philippines National Capacity-Building Program: five online sessions for student teams, September 25 to October 1, 2026.",
};

const sessions = [
  {
    number: 1,
    date: "September 25, 2026",
    title: "Kick-off session",
    focus: "Welcome and program orientation",
    partners: "Enactus Philippines and Khan Academy Philippines",
    speakers: [
      {
        name: "Saje Molato",
        role: "CEO, Siklab Pilipinas and Enactus Philippines",
      },
      {
        name: "Ryza Martinez-Solaña",
        role: "Director of Program Implementation, Khan Academy Philippines",
      },
    ],
    image: "/Capacity%20Building/Session%201.jpg",
    imageAlt: "Kick-off session poster featuring Saje Molato and Ryza Martinez-Solaña",
    link: "https://tinyurl.com/enactusphcap1",
  },
  {
    number: 2,
    date: "September 28, 2026",
    title: "Needs assessment",
    focus: "Understand community needs and the people a project serves",
    partners: "IDEAS Davao and SCALE NCR",
    speakers: [
      {
        name: "Rob Gumba",
        role: "Startup Growth and Development Professional",
      },
      {
        name: "Maria Cristina Ibañez",
        role: "President, SCALE NCR",
      },
    ],
    image: "/Capacity%20Building/Session%202.jpg",
    imageAlt: "Needs assessment session poster featuring Rob Gumba and Maria Cristina Ibañez",
    link: "https://tinyurl.com/enactusphcap2",
  },
  {
    number: 3,
    date: "September 29, 2026",
    title: "Scalability and positive impact",
    focus: "Grow solutions so they can reach more communities and create lasting change",
    partners: "UMWAD and Fyrlab",
    speakers: [
      {
        name: "Dr. Carmelo V. Ambut",
        role: "Executive Director, UMWAD",
      },
      {
        name: "Daryl Z. Lasafin",
        role: "Operations Director, Fyrlab",
      },
    ],
    image: "/Capacity%20Building/Session%203.jpg",
    imageAlt: "Scalability and positive impact session poster featuring its two speakers",
    link: "https://tinyurl.com/enactusphcap3",
  },
  {
    number: 4,
    date: "September 30, 2026",
    title: "Business models, financials, and innovation",
    focus: "Build viable, financially sustainable ventures through innovation",
    partners: "SILLAG Region 1 and the Luzon Cluster",
    speakers: [
      {
        name: "Prof. Arnie C. Sabugo",
        role: "Director, MSU Innovation and Technology Directorate",
      },
      {
        name: "Engr. Roy R. Flores",
        role: "Core Member, DOST-PSU Aligwas Technology Business Incubator",
      },
      {
        name: "Nestor Feland B. Panopio",
        role: "SILLAG Region 1 Management Team and COO, IAM Contact Solutions",
      },
    ],
    image: "/Capacity%20Building/Session%204.jpg",
    imageAlt: "Business models, financials, and innovation session poster featuring its speakers",
    link: "https://tinyurl.com/enactusphcap4",
  },
  {
    number: 5,
    date: "October 1, 2026",
    title: "Pitching, storytelling, and Q&A essentials",
    focus: "Bring the program together and prepare to communicate project impact",
    partners: "SICAD-SOX and the Mindanao Cluster",
    speakers: [
      {
        name: "Romeo Jr. E. Tejada",
        role: "Startup enabler and faculty member, Mindanao State University–General Santos",
      },
      {
        name: "Giselle Eve O. Siladan",
        role: "Director, SICAD-SOX",
      },
    ],
    image: "/Capacity%20Building/Session%205.jpg",
    imageAlt: "Pitching and storytelling session poster featuring its two speakers",
    link: "https://tinyurl.com/enactusphcap5",
  },
];

const learningAreas = [
  "Needs assessment",
  "Business models and financials",
  "Innovation",
  "Scalability",
  "Positive impact",
  "Pitching and storytelling",
  "Q&A essentials",
];

export default function CapacityBuildingPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="capacity-title">
        <div className={styles.heroCopy}>
          <h1 id="capacity-title" className={styles.heroTitle}>
            Build ideas
            <br />
            that go further.
          </h1>
          <p className={styles.heroDescription}>
            The Enactus Philippines National Capacity-Building Program brings
            student innovators together to strengthen their projects for the
            national stage.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryAction} href="#sessions">
              Explore sessions <ArrowDown aria-hidden="true" size={18} />
            </Link>
            <span className={styles.heroDates}>
              September 25–October 1, 2026
              <br />
              Online via Zoom
            </span>
          </div>
          <div className={styles.heroAudience}>
            <span>Open to all</span>
            <p>
              Designed for the Top 60 Early-Stage Project Competition teams and
              Top 30 Khan Academy Philippines Education Impact Challenge teams.
            </p>
          </div>
        </div>
        <div className={styles.heroArtwork}>
          <Image
            src={sessions[0].image}
            alt={sessions[0].imageAlt}
            fill
            priority
            sizes="(max-width: 760px) 86vw, 42vw"
            className={styles.posterImage}
          />
          <span className={styles.artworkCaption}>A national learning series</span>
        </div>
        <Link className={styles.scrollCue} href="#sessions" aria-label="Scroll to sessions">
          <ArrowDown aria-hidden="true" size={20} />
        </Link>
      </section>

      <section className={styles.intro} aria-labelledby="program-title">
        <div className={styles.introTitleBlock}>
          <h2 id="program-title">Learn across regions. Build for impact.</h2>
        </div>
        <div className={styles.introCopy}>
          <p>
            From NCR to Davao, the Visayas, Luzon, and Mindanao, partners and
            practitioners bring different experience to one shared goal:
            helping student teams build solutions grounded in community needs.
          </p>
          <p>
            Five live Zoom sessions run from September 25 to October 1. The
            program is open to everyone interested in strengthening an
            early-stage social enterprise.
          </p>
          <Link className={styles.textLink} href="#sessions">
            See the full program <ArrowDown aria-hidden="true" size={17} />
          </Link>
        </div>
      </section>

      <section className={styles.learning} aria-labelledby="learning-title">
        <div className={styles.learningHeading}>
          <h2 id="learning-title">What teams will build on</h2>
          <p>
            Practical learning for stronger projects, clearer stories, and
            solutions ready to grow.
          </p>
        </div>
        <ul className={styles.learningList}>
          {learningAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <section id="sessions" className={styles.sessions} aria-labelledby="sessions-title">
        <div className={styles.sessionsHeading}>
          <div>
            <h2 id="sessions-title">
              Five sessions.
              <br />
              Shared purpose.
            </h2>
          </div>
          <p>
            Each session runs from 5:00–7:00 PM via Zoom. Choose a session to
            view its details and join.
          </p>
        </div>

        <div className={styles.sessionList}>
          {sessions.map((session) => (
            <article
              className={`${styles.session} ${session.number % 2 === 0 ? styles.sessionReverse : ""}`}
              key={session.number}
            >
              <div className={styles.sessionCopy}>
                <p className={styles.sessionDate}>
                  Session {session.number} <span>{session.date}</span>
                </p>
                <h3>{session.title}</h3>
                <p className={styles.sessionFocus}>{session.focus}</p>
                <p className={styles.sessionPartner}>{session.partners}</p>
                <div className={styles.speakers}>
                  <h4>Featuring</h4>
                  <ul>
                    {session.speakers.map((speaker) => (
                      <li key={speaker.name}>
                        <strong>{speaker.name}</strong>
                        <span>{speaker.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.sessionMeta}>
                  <span>
                    <Clock3 aria-hidden="true" size={17} />
                    5:00–7:00 PM
                  </span>
                  <span>
                    <Video aria-hidden="true" size={17} />
                    Via Zoom
                  </span>
                </div>
                <a
                  className={styles.joinAction}
                  href={session.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Join session <ArrowUpRight aria-hidden="true" size={17} />
                </a>
              </div>
              <div className={styles.sessionArtwork}>
                <Image
                  src={session.image}
                  alt={session.imageAlt}
                  fill
                  sizes="(max-width: 760px) 86vw, 38vw"
                  className={styles.posterImage}
                  loading={session.number === 1 ? "eager" : "lazy"}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.partners} aria-labelledby="partners-title">
        <div className={styles.partnersIntro}>
          <h2 id="partners-title">One country. Many ideas in motion.</h2>
          <p>
            Regional collaboration connects local knowledge with the tools
            student teams need to create sustainable impact.
          </p>
        </div>
        <div className={styles.partnerNames} aria-label="Program partners">
          <span>IDEAS Davao</span>
          <span>SCALE NCR</span>
          <span>UMWAD</span>
          <span>Fyrlab</span>
          <span>SILLAG Region 1</span>
          <span>Luzon Cluster</span>
          <span>SICAD-SOX</span>
          <span>Mindanao Cluster</span>
        </div>
        <p className={styles.coPresenters}>
          The Enactus Philippines National Competition and Innovation Summit
          2026 is co-presented by Khan Academy Philippines and co-hosted by the
          Lasallian Social Enterprise for Economic Development Center (LSEED).
        </p>
        <div className={styles.mouNote}>
          <CalendarDays aria-hidden="true" size={23} />
          <p>
            The October 1 culmination also marks the ceremonial MOU signing
            between Enactus Philippines and LSEED.
          </p>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="closing-title">
        <div>
          <h2 id="closing-title">Bring your idea to the national stage.</h2>
          <p>
            Join the learning series and strengthen the work you are building
            for your community.
          </p>
        </div>
        <Link className={styles.closingAction} href="#sessions">
          Choose a session <ArrowDown aria-hidden="true" size={18} />
        </Link>
      </section>
    </div>
  );
}
