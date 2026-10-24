"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { top30Projects } from "../top30-results";
import styles from "./top-30-results.module.css";

const fillerPhotos = Array.from(
  { length: 11 },
  (_, index) => `/bg-fillers/bg${index + 1}.jpg`,
);

const top12Schools = [
  "Mariano Marcos State University - Batac Campus",
  "West Visayas State University - Main Campus",
  "Quezon City University - San Bartolome Campus",
  "Iloilo State University of Fisheries Science and Technology - Dingle Campus",
  "University of San Carlos - Downtown Campus",
  "Iloilo Science and Technology University - Iloilo City Campus",
  "Mapúa University - Intramuros Campus",
  "Capiz State University - Dayao Campus",
  "State University of Northern Negros - Main Campus",
  "Holy Trinity College of General Santos City",
  "Camarines Sur Polytechnic Colleges - Main Campus",
  "Ateneo de Davao University",
];

const top4Schools = [
  { award: "Champion", school: "Mapúa University - Intramuros Campus" },
  { award: "1st Runner-Up", school: "Ateneo de Davao University" },
  {
    award: "2nd Runner-Up",
    school: "West Visayas State University - Main Campus",
  },
  {
    award: "3rd Runner-Up",
    school: "Quezon City University - San Bartolome Campus",
  },
];

type ResultsView = "top-30" | "top-12" | "top-4";

const resultCounts: Record<ResultsView, number> = {
  "top-30": 30,
  "top-12": 12,
  "top-4": 4,
};

const photoCounts: Record<ResultsView, number> = {
  "top-30": 8,
  "top-12": 4,
  "top-4": 2,
};

export default function ResultsView() {
  const [view, setView] = useState<ResultsView>("top-30");
  const count = resultCounts[view];
  const photos = fillerPhotos.slice(0, photoCounts[view]);
  const title = `Top ${count} Results`;
  const description = {
    "top-30": "Meet the 30 schools and projects recognized in this track.",
    "top-12": "The 12 schools advancing in the Early-Stage Project Competition.",
    "top-4": "The four schools recognized at the top of the competition.",
  }[view];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-muted/20">
        <div
          className="pointer-events-none absolute inset-0 grid-bg opacity-40"
          aria-hidden
        />
        <div className="shell relative py-10 md:py-14">
          <Link
            href="/2026-national-competition"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            National Competition 2026
          </Link>

          <div className="mt-7 grid items-end gap-6 md:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                {title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                National Competition 2026 · Early-Stage Project Competition
                Track
              </p>
            </div>
            <div className="w-full shrink-0 bg-secondary px-5 py-4 text-secondary-foreground sm:w-52">
              <label
                htmlFor="results-view"
                className="mb-2 block text-sm font-semibold"
              >
                Filter results
              </label>
              <Select
                value={view}
                onValueChange={(value) => {
                  if (value === "top-30" || value === "top-12" || value === "top-4") {
                    setView(value);
                  }
                }}
              >
                <SelectTrigger
                  id="results-view"
                  aria-label="Filter results"
                  className="border-secondary-foreground/20 bg-background text-foreground"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="top-30">Top 30</SelectItem>
                  <SelectItem value="top-12">Top 12</SelectItem>
                  <SelectItem value="top-4">Top 4</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="shell scroll-mt-24 py-12 md:py-16">
        <div className={styles.resultsLayout}>
          <aside className={styles.visualRail} aria-labelledby="track-heading">
            <h2
              id="track-heading"
              className="text-section font-bold leading-tight text-balance"
            >
              Early-Stage Project Competition Track
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
            <div className={styles.photoRail} aria-hidden="true">
              {photos.map((photo, index) => (
                <div
                  key={photo}
                  className={styles.photo}
                  style={{
                    backgroundImage: `url("${photo}")`,
                    backgroundPosition:
                      index % 2 === 0 ? "center 44%" : "center 58%",
                  }}
                />
              ))}
            </div>
          </aside>

          <div>
            {view === "top-30" && (
              <ul className="space-y-2">
                {top30Projects.map((project, index) => (
                  <li
                    key={`${project.school}-${project.project}`}
                    className={`grid gap-x-10 gap-y-3 px-4 py-6 sm:px-6 md:grid-cols-[minmax(14rem,0.8fr)_minmax(0,1.2fr)] md:py-7 ${
                      index % 2 === 0 ? "bg-muted/40" : ""
                    }`}
                  >
                    <div>
                      <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                        {project.school}
                      </p>
                      <h3 className="mt-1 text-xl font-bold leading-snug tracking-tight">
                        {project.project}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/90 md:text-base">
                      {project.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            {view === "top-12" && (
              <ol className={styles.schoolList}>
                {top12Schools.map((school, index) => (
                  <li className={styles.schoolRow} key={school}>
                    <span className={styles.rank} aria-label={`Rank ${index + 1}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.schoolName}>{school}</span>
                  </li>
                ))}
              </ol>
            )}

            {view === "top-4" && (
              <ol className={styles.podium}>
                {top4Schools.map(({ award, school }, index) => (
                  <li
                    className={`${styles.podiumRow} ${
                      index === 0 ? styles.champion : ""
                    }`}
                    key={award}
                  >
                    <span className={styles.award}>{award}</span>
                    <span className={styles.podiumSchool}>{school}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
        <p className="sr-only" aria-live="polite">
          Showing the Top {count} results.
        </p>
      </section>
    </>
  );
}
