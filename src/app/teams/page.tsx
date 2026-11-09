import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { PhilippinesMap } from "@/components/PhilippinesMap";
import {
  enactusUniversityLocations,
  islandGroupLabels,
  islandGroups,
} from "@/lib/enactus-universities";
import styles from "./teams.module.css";

export const metadata: Metadata = {
  title: "Find a Team | Enactus Philippines",
  description:
    "Explore Enactus campuses across Luzon, Visayas, and Mindanao, organized by island group and province.",
};

const campusesByIsland = islandGroups.map((islandGroup) => {
  const campuses = enactusUniversityLocations.filter(
    (campus) => campus.islandGroup === islandGroup,
  );
  const provinces = new Map<string, typeof campuses>();

  campuses.forEach((campus) => {
    const province = campus.cityProvince.split(", ").at(-1) ?? campus.cityProvince;
    const provinceCampuses = provinces.get(province) ?? [];
    provinceCampuses.push(campus);
    provinces.set(province, provinceCampuses);
  });

  return {
    islandGroup,
    campuses,
    provinces: Array.from(provinces.entries()).sort(([a], [b]) =>
      a.localeCompare(b),
    ),
  };
});

export default function TeamsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="teams-title">
        <div className={styles.heroCopy}>
          <p className={styles.heroContext}>Enactus Philippines</p>
          <h1 id="teams-title">Find your campus team.</h1>
          <p className={styles.heroDescription}>
            Student-led ventures are growing across the country. Explore
            participating campuses by island group and province.
          </p>
          <a className={styles.browseLink} href="#campus-directory">
            Browse campuses <ArrowDown aria-hidden="true" size={18} />
          </a>
          <p className={styles.listNote}>
            This directory reflects campuses represented in the 2026 National
            Competition Top 30.
          </p>
        </div>
        <div
          className={styles.mapPanel}
          role="region"
          aria-label="Interactive map of Enactus campuses"
        >
          <PhilippinesMap />
        </div>
      </section>

      <section
        className={styles.directory}
        id="campus-directory"
        aria-labelledby="directory-title"
      >
        <div className={styles.directoryHeader}>
          <div>
            <p className={styles.directoryContext}>Across the Philippines</p>
            <h2 id="directory-title">Campus teams by island group.</h2>
          </div>
          <p>
            Browse each region, then find campuses grouped by the province or
            city where their team is based.
          </p>
        </div>

        <nav className={styles.islandNav} aria-label="Jump to an island group">
          {campusesByIsland.map(({ islandGroup, campuses }) => (
            <a href={`#${islandGroup}`} key={islandGroup}>
              <span>{islandGroupLabels[islandGroup]}</span>
              <span>{campuses.length} campuses</span>
            </a>
          ))}
        </nav>

        {campusesByIsland.map(({ islandGroup, campuses, provinces }) => (
          <section
            className={styles.islandSection}
            id={islandGroup}
            key={islandGroup}
            aria-labelledby={`${islandGroup}-title`}
          >
            <div className={styles.islandHeading}>
              <div>
                <h3 id={`${islandGroup}-title`}>
                  {islandGroupLabels[islandGroup]}
                </h3>
                <p>
                  {provinces.length} {provinces.length === 1 ? "province" : "provinces"}
                </p>
              </div>
              <strong>{campuses.length}</strong>
            </div>
            <div className={styles.provinceGrid}>
              {provinces.map(([province, provinceCampuses]) => (
                <section className={styles.province} key={province}>
                  <h4>{province}</h4>
                  <ul>
                    {provinceCampuses.map((campus) => (
                      <li key={campus.id}>
                        <MapPin aria-hidden="true" size={17} />
                        <div>
                          <span>{campus.name}</span>
                          <small>{campus.cityProvince}</small>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>
        ))}
      </section>

      <section className={styles.contact}>
        <div>
          <h2>Is your campus missing?</h2>
          <p>
            Get in touch to learn more about Enactus and how to connect with a
            team in your community.
          </p>
        </div>
        <Link href="/contact">
          Contact our team <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </section>
    </div>
  );
}
