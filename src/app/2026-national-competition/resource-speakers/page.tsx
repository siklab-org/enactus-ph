import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { ResourceSpeakersAnimations } from "./ResourceSpeakersAnimations";
import styles from "./resource-speakers.module.css";

export const metadata: Metadata = {
  title: "Resource Speakers | National Competition 2026",
  description:
    "Meet the resource speakers leading sessions on social entrepreneurship, artificial intelligence, problem validation, and scalable innovation at the Enactus Philippines National Competition 2026.",
};

const speakers = [
  {
    name: "Dr. Norby R. Salonga, CHRP",
    session: "Sustainable Development and Social Entrepreneurship",
    image: "/RESOURCESPEAKERS/NORBY.png",
    alt: "Dr. Norby R. Salonga",
    tone: "dark",
    biography:
      "He is the Founding Director of De La Salle University's award-winning Lasallian Social Enterprise for Economic Development (LSEED) Center and President of NASEEA, and he teaches social entrepreneurship at DLSU. A development practitioner who helped pioneer the localization of the UN Sustainable Development Goals within Philippine academe, he has engaged dozens of universities and civil-society groups across the region. His recognitions include being named Asia-Pacific Entrepreneurship Educator of the Year, and he holds a doctorate from the University of the Philippines Diliman.",
  },
  {
    name: "Mr. Christopher Nash Jasmin",
    session: "Expert Session - Artificial Intelligence",
    image: "/RESOURCESPEAKERS/CHRISTOPHER.png",
    alt: "Mr. Christopher Nash Jasmin",
    tone: "muted",
    biography:
      "Christopher Nash A. Jasmin is a Data Scientist at the Education Center for Artificial Intelligence Research (ECAIR) under the Department of Education, specializing in AI, data systems, education, governance, and responsible AI. He is the Project Co-lead and Data Science Lead for TALAAN and an Adjunct Faculty at the Asian Institute of Management. A former public school mathematics teacher and Licensed Professional Teacher, he holds master's degrees in Data Science and Mathematics and graduated magna cum laude with a Bachelor of Secondary Education in Mathematics.",
  },
  {
    name: "Ms. Pauline Marie Villar",
    session: "Expert Session - Artificial Intelligence",
    image: "/RESOURCESPEAKERS/PAULINE.png",
    alt: "Ms. Pauline Marie Villar",
    tone: "muted",
    biography:
      'Pauline Marie "Pam" Villar is the Learning and Development Lead of the Education Center for AI Research (ECAIR), Department of Education Philippines. With over a decade of experience in professional development, policy advocacy, and research, she leads data science and AI literacy programs that support educators and decision-makers. Her work also focuses on inclusive governance, social development, and creating meaningful public impact. She holds a Master of Public Administration and a Bachelor of Arts in European Studies.',
  },
  {
    name: "Ms. Gianina Joy Nathania L. Napo",
    session: "Needs Assessment and Problem Validation",
    image: "/RESOURCESPEAKERS/GIANINA.png",
    alt: "Ms. Gianina Joy Nathania L. Napo",
    tone: "accent",
    biography:
      "Gianina Joy Nathania L. Napo is a program development and advocacy professional with over 10 years of experience leading initiatives that support MSMEs, youth, and grassroots communities across the Philippines. She has led national initiatives under Go Negosyo and the ASEAN Business Advisory Council Philippines, contributed to development projects, and supported entrepreneurship and innovation at the FEU Tech Innovation Center. Currently pursuing a Juris Doctor degree at the Polytechnic University of the Philippines, she is passionate about public service, policy, entrepreneurship, and creating more inclusive opportunities for underserved communities.",
  },
  {
    name: "Mr. Kevin Martin dela Cruz",
    session: "Innovation, Solution Design, and Scalability",
    image: "/RESOURCESPEAKERS/KEVIN.png",
    alt: "Mr. Kevin Martin dela Cruz",
    tone: "paper",
    biography:
      "He is a development professional with over fifteen years of experience in social entrepreneurship, sustainability, education, innovation, and program management. He is the Co-Founder and Lead Consultant of Strago Solutions Consulting and an Adjunct Faculty at Life College International and Ateneo de Manila University. He also serves as President of the Rotary Club of Eisenhower and was recognized as a MEGA Magazine 30 Under 30 Youth Mover and Achiever and a finalist for Startup Ecosystem Hero of the Year at the 2020 ASEAN Startup Awards. He holds a Master in Public Management from the Ateneo School of Government.",
  },
  {
    name: "Ms. Xid Kayla Lapiz",
    session: "Sustainable Development and Social Entrepreneurship",
    image: "/RESOURCESPEAKERS/KAYLA.png",
    alt: "Ms. Xid Kayla Lapiz",
    tone: "dark",
    biography:
      "Kayla is a development communication practitioner with years of experience in community engagement, communications, and knowledge management in both local and global roles. She has worked for the public and non-profit sectors and has ultimately embraced the value of inclusion and intersectionality. Apart from this, she is a fur mom to three cute cats and the strays of Las Pinas.",
  },
] as const;

export default function ResourceSpeakersPage() {
  return (
    <div id="top" className={styles.page} data-resource-speakers-page>
      <ResourceSpeakersAnimations />
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-100" aria-hidden />
        <div className="shell relative z-10 bg-transparent py-4 md:py-5">
          <div className={styles.cover}>
            <div>
              <Link
                href="/2026-national-competition"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                data-speaker-reveal
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                National Competition 2026
              </Link>
              <h1
                className="mt-2 max-w-xl text-4xl font-bold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl"
                data-speaker-reveal
              >
                Resource speakers
              </h1>
              <p
                className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
                data-speaker-reveal
              >
                Meet the practitioners guiding conversations on sustainable
                development, artificial intelligence, and youth-led innovation.
              </p>
              <Link
                href="#speakers"
                className={styles.jumpLink}
                data-speaker-reveal
              >
                Meet the speakers
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className={styles.heroDetails} data-speaker-reveal>
              <p className={styles.heroDate}>October 9–10, 2026</p>
              <div className={styles.heroVenue}>
                <p>De La Salle University</p>
                <p>Manila, Philippines</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 h-10 w-1/3 yellow-slash animate-slide-in-left"
          style={{ animationDelay: "300ms" }}
          aria-hidden
        />
      </section>

      <section id="speakers" className={`${styles.roster} shell scroll-mt-24`}>
        <div className={styles.rosterHeading} data-speaker-reveal>
          <h2 className="text-section font-bold leading-tight text-balance">
            Meet the resource speakers
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Six practitioners bring experience from education, public service,
            entrepreneurship, and community development.
          </p>
        </div>

        <div className={styles.speakerList}>
          {speakers.map((speaker) => (
            <article
              key={speaker.name}
              className={`${styles.speaker} ${styles[`tone${speaker.tone}`]}`}
              data-speaker-reveal
            >
              <figure className={styles.portrait}>
                <Image
                  src={speaker.image}
                  alt={speaker.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1100px) 42vw, 38vw"
                  className={styles.image}
                />
              </figure>
              <div className={styles.speakerCopy}>
                <p className={styles.session}>{speaker.session}</p>
                <h3 className={styles.speakerName}>{speaker.name}</h3>
                <p className={styles.biography}>{speaker.biography}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16 text-secondary-foreground md:py-20">
        <div className="shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div data-speaker-reveal>
            <h2 className="max-w-[15ch] text-3xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
              Keep exploring the summit.
            </h2>
            <p className="mt-4 text-lg text-secondary-foreground/80">
              October 9–10, 2026 · De La Salle University, Manila
            </p>
          </div>
          <Link
            href="/2026-national-competition/programme-of-activities"
            className={styles.programmeLink}
            data-speaker-reveal
          >
            View the programme
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
