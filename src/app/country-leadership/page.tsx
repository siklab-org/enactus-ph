import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AdviserCard } from "./AdviserCard";

export const metadata: Metadata = {
  title: "Country Leadership",
  description:
    "The team and advisers leading Enactus Philippines — country staff and board of advisers.",
};

const staff = [
  {
    name: "Saje Molato",
    role: "CEO & Country Lead",
    email: "SMolato@enactus.org",
    image: "/people/saje.webp",
  },
  {
    name: "Kristoni Go",
    role: "COO & Country Director",
    email: "KGo@enactus.org",
    image: "/people/kristoni.webp",
    bio: "",
  },
  {
    name: "Samantha Batul",
    role: "Communications & Partnerships",
    email: "SBatul@enactus.org",
    image: "/people/samantha.webp",
  },
  {
    name: "Paula Cuasay",
    role: "Programs Associate",
    email: "EnactusPH@enactus.org",
    image: "/people/paula.webp",
  },
];

const advisers = [
  {
    name: "Ms. Geraldine Acuña-Sunshine",
    role: "President and Chief Executive Officer",
    organization: "Khan Academy Philippines",
    image: "/boa/Geraldine.png",
    bio: "A corporate lawyer turned social-impact leader, she serves as President and CEO of Khan Academy Philippines, the platform's first international licensee, which she has scaled to millions of learners across thousands of public schools. A graduate of Harvard College, the Harvard Kennedy School, and Columbia Law School, she was the first Filipino to serve on the Harvard Board of Overseers. She also founded the Sunshine Care Foundation and a Massachusetts General Hospital research center devoted to X-Linked Dystonia Parkinsonism, a rare disease affecting people of Filipino descent.",
  },
  {
    name: 'Mr. Roberto "Bert" G. Manabat',
    role: "Founding Chairman Emeritus, KPMG Philippines / Lead Independent Director",
    organization: "UnionBank of the Philippines",
    image: "/boa/Roberto.png",
    bio: "A Certified Public Accountant, he is Chairman Emeritus of KPMG R.G. Manabat & Co.—the KPMG International member firm in the Philippines that bears his name—which he led as Chairman and CEO. He has served as Lead Independent Director of UnionBank of the Philippines since 2018 and is a board adviser on corporate governance and internal audit for SM Investments Corporation. He holds an MBA from the Asian Institute of Management.",
  },
  {
    name: "Dr. Victor C. Manabat",
    role: "President",
    organization: "Philippine Association of Colleges and Schools of Business (PACSB)",
    image: "/boa/Victor.png",
    bio: "He is Dean of the College of Business Education and Tourism at Southville International School and Colleges and Executive Director of the Capital Markets Institute of the Philippines. Before entering academe, he spent over a decade as a marketing and advertising executive at agencies including McCann Erickson Philippines. He earned his MBA and Doctor in Business Administration from the Pamantasan ng Lungsod ng Maynila and is active in business-education accreditation.",
  },
  {
    name: "Dr. Amado L. Magsino",
    role: "Immediate Past President",
    organization: "Philippine Association of Colleges and Schools of Business (PACSB)",
    image: "/boa/Amado.png",
    bio: "An educator with more than two decades of leadership across Philippine higher-education institutions, he served multiple terms as President of PACSB. He founded Passage to ASEAN (P2A) Philippines, a regional consortium promoting student mobility among ASEAN member schools, and has held leadership roles in the Philippine Council of Deans and Educators in Business. He holds a PhD in Management from Colegio de San Juan de Letran.",
  },
  {
    name: 'Prof. Aristheo "Aris" Lacuna',
    role: "Board Member",
    organization: "Philippine Association of Colleges and Schools of Business (PACSB)",
    image: "/boa/Aristheo.png",
    bio: "He is an Assistant Professor at Southville International School and Colleges and a voice in social-enterprise education, serving as Vice Chairperson of the National Association of Social Enterprise Educators and Administrators (NASEEA). His work centers on integrating social entrepreneurship and design thinking into business curricula.",
  },
  {
    name: "Dr. Norby Roque Salonga, CHRP",
    role: "President",
    organization:
      "National Association of Social Enterprise Educators and Administrators (NASEEA)",
    image: "/boa/Norby.png",
    bio: "He is the Founding Director of De La Salle University's award-winning Lasallian Social Enterprise for Economic Development (LSEED) Center and President of NASEEA, and he teaches social entrepreneurship at DLSU. A development practitioner who helped pioneer the localization of the UN Sustainable Development Goals within Philippine academe, he has engaged dozens of universities and civil-society groups across the region. His recognitions include being named Asia-Pacific Entrepreneurship Educator of the Year, and he holds a doctorate from the University of the Philippines Diliman.",
  },
  {
    name: "Ms. Maria Cristina Ibañez",
    role: "President",
    organization:
      "Entrepreneurship Educators Association of the Philippines (ENEDA)",
    image: "/boa/Maria.png",
    bio: "An entrepreneurship educator affiliated with Miriam College, she serves as President of the Entrepreneurship Educators Association of the Philippines (ENEDA) and leads the SCALE NCR Technology Business Incubator (TBI) Consortium. Her work focuses on building collaborative startup ecosystems and mentoring young entrepreneurs.",
  },
];

export default function CountryLeadership() {
  return (
    <div className="min-h-screen bg-background">
      {/* ─── HERO ─── */}
      <PageHero
        eyebrow="Country Leadership"
        title={
          <>
            The team behind
            <br />
            <span className="text-foreground/40">the movement.</span>
          </>
        }
        subtitle="The people building Enactus in the Philippines."
      />

      {/* ─── COUNTRY LEADERSHIP ─── */}
      <section className="border-b border-border/60 bg-muted/40">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <h2 className="max-w-3xl text-section font-bold">
              Country Leadership
            </h2>
            <div className="mt-2 font-mono text-sm  text-muted-foreground">
              The team behind the movement.
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {staff.map((person) => (
                <div
                  key={person.name}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-background p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_oklch(0_0_0/0.12)]"
                >
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={400}
                    height={400}
                    className="aspect-[4/5] w-full rounded-xl object-cover"
                  />
                  <h3 className="mt-5 text-lg font-semibold">{person.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {person.role}
                  </p>
                  {person.email && (
                    <a
                      href={`mailto:${person.email}`}
                      className="mt-2 block text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      {person.email}
                    </a>
                  )}
                  {person.bio && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80">
                      {person.bio}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── BOARD OF ADVISERS ─── */}
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <h2 className="max-w-3xl text-section font-bold">
              Board of Advisers
            </h2>
            <div className="mt-2 font-mono text-sm text-muted-foreground">
              Inaugural Board of Advisers · 2026–2028
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {advisers.map((person) => (
                <AdviserCard key={person.name} person={person} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
