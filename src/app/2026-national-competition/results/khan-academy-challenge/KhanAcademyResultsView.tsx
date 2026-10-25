"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import styles from "./khan-academy-results.module.css";

const schoolLogos: Record<string, string> = {
  "University of Santo Tomas - General Santos City": "ust-general santos.png",
  "University of the Philippines - Baguio":
    "University_of_the_Philippines_logo.png",
  "Bulacan State University - A (ISKOLI)": "bulacan state univ.png",
  "University of the Philippines - Manila":
    "University_of_the_Philippines_logo.png",
};

const topTenSchools = [
  {
    school: "Ilocos Sur Polytechnic State College",
    faculty: "Mr. Allan Jay F. Lardizabal",
    students: ["Junil P. Madrid", "Jefferson C. Uy", "Gabriel Rhian L. Repdos"],
  },
  {
    school: "National University - Fairview",
    faculty: "Engr. Mary Jane F. Somao-i",
    students: ["Jay Louel S. Albano", "Julian Miguel U. Vibar", "Kenneth Z. Torcuator"],
  },
  {
    school: "University of Santo Tomas - General Santos City",
    faculty: "Dr. Joseph M. Buguis",
    students: ["Kathleen Keith Sanchez", "Arri Zacarias Lozano", "Joshua Peñaflorida"],
  },
  {
    school: "Ateneo de Manila University - B (iKHAN)",
    faculty: "Mr. Galvin Radley L. Ngo",
    students: [
      "Karelle Vanessa A. Martinez",
      "Martina Dominique S. Villanueva",
      "John Steven G. Pioquid",
    ],
  },
  {
    school: "Cebu Technological University",
    faculty: "Dr. Judith M. Aleguen",
    students: ["Jiah G. Escalante", "Trisha Mae A. Saragena", "Rochel Mae C. Fuentes"],
  },
  {
    school: "University of the Philippines - Baguio",
    faculty: "Mr. Achim A. Lumague",
    students: [
      "Jasper Wayne Molitas Bides",
      "Jasper Kurt Benitez Corsal",
      "Makki Bileg Kanani",
    ],
  },
  {
    school: "Bicol University - Polangui",
    faculty: "Engr. Ben L. Saminiano",
    students: ["Aran Joshua P. Ofracio", "Ian Forrest R. Rogel", "Jude Melvin B. Grutas"],
  },
  {
    school: "Bulacan State University - A (ISKOLI)",
    faculty: "Mr. Jayson A. Batoon",
    students: [
      "Vonlery D. Villanueva",
      "Glenndale Yhuan C. Jumaquio",
      "John Ace V. Padilla",
    ],
  },
  {
    school: "Ateneo de Manila University - A (Yes We Khan)",
    faculty: "Ms. Eunice T. Gan",
    students: [
      "Daniel S. Hans",
      "Matteo Rafael P. Mercado",
      "Alec Nathan U. Rongo",
    ],
  },
  {
    school: "University of the Philippines - Manila",
    faculty: "Mr. John Justin C. Mesias",
    students: [
      "Matthew Emmanuel T. Labrador",
      "Harry C. Gomez",
      "Paul Andrei H. Recio",
    ],
  },
];

const topFourAwards = [
  { award: "Champion", school: topTenSchools[9] },
  { award: "1st Runner-Up", school: topTenSchools[6] },
  { award: "2nd Runner-Up", school: topTenSchools[5] },
  {
    award: "3rd Runner-Up",
    school: topTenSchools[7],
  },
];

export default function KhanAcademyResultsView() {
  const [view, setView] = useState<"top-10" | "top-4">("top-10");
  const isTopFour = view === "top-4";
  const displayedSchools = isTopFour
    ? topFourAwards
    : topTenSchools.map((school) => ({ school, award: null }));

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-muted/20">
        <div
          className="pointer-events-none absolute inset-0 grid-bg opacity-40"
          aria-hidden="true"
        />
        <div className="shell relative py-10 md:py-14">
          <Link
            href="/2026-national-competition"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            National Competition 2026
          </Link>

          <div className="mt-7">
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Khan Academy Challenge Results
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              National Competition 2026 · Khan Academy Challenge
            </p>
          </div>
        </div>
      </section>

      <section
        id="results"
        className={`scroll-mt-24 ${styles.resultsSection}`}
        aria-labelledby="results-heading"
      >
        <div className="shell relative z-10 py-12 md:py-16">
          <div className={styles.resultsLayout}>
            <div className={styles.sectionIntro}>
              <h2
                id="results-heading"
                className="text-section font-bold leading-tight text-balance"
              >
                {isTopFour ? "Top 4 awardees" : "Top 10 schools"}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {isTopFour
                  ? "The four schools recognized as awardees."
                  : "Listed in no particular order."}
              </p>
              <div className={styles.filter}>
                <label
                  htmlFor="results-view"
                  className="mb-2 block text-sm font-semibold"
                >
                  Filter results
                </label>
                <Select
                  value={view}
                  onValueChange={(value) => {
                    if (value === "top-10" || value === "top-4") {
                      setView(value);
                    }
                  }}
                >
                  <SelectTrigger
                    id="results-view"
                    aria-label="Filter results"
                    className="border-border bg-background text-foreground"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="top-10">Top 10</SelectItem>
                    <SelectItem value="top-4">Top 4</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <ul className={styles.schoolList}>
              {displayedSchools.map(
                ({ school: { school: schoolName, faculty, students }, award }) => {
                  const logo = schoolLogos[schoolName];
                  return (
                    <li className={styles.schoolEntry} key={schoolName}>
                      {award && <p className={styles.awardLabel}>{award}</p>}
                      <div className={styles.schoolHeading}>
                        {logo && (
                          <Image
                            src={`/school%20logos/${encodeURIComponent(logo)}`}
                            alt=""
                            width={64}
                            height={64}
                            sizes="64px"
                            className={styles.schoolLogo}
                          />
                        )}
                        <h3 className={styles.schoolName}>{schoolName}</h3>
                      </div>
                      <dl className={styles.teamMembers}>
                        <div className={styles.teamMember}>
                          <dt>Faculty</dt>
                          <dd>{faculty}</dd>
                        </div>
                        {students.map((student, index) => (
                          <div className={styles.teamMember} key={student}>
                            <dt>Student {index + 1}</dt>
                            <dd>{student}</dd>
                          </div>
                        ))}
                      </dl>
                    </li>
                  );
                },
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
