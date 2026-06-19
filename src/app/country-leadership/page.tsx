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
    image: "/people/ton.webp",
    bio: "",
  },
  {
    name: "Samantha Batul",
    role: "Communications & Partnerships",
    email: "SBatul@enactus.org",
    image: "/people/sam.webp",
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
    name: "Joey Leviste",
    role: "Founding Chairman & CEO",
    organization: "Enactus Philippines",
    bio: 'Dr. Jose "Joey" Paredes Leviste Jr. is a prominent Filipino corporate leader, former public servant, and social development advocate who serves as the founding Chairman and Chief Executive Officer of Enactus Philippines. Born in Malvar, Batangas, to a family rooted in public service, he cultivated a strong academic foundation, earning a Bachelor of Arts in Economics from Ateneo de Manila University, a Master of Arts in Economics from Fordham University, and a Master of Business Administration from Columbia University. His early career was marked by significant contributions to the public sector, serving as a young delegate to the 1970 Constitutional Convention, Secretary-General of the Office of the Prime Minister, and Deputy Minister of Trade and Industry. In the private sector, Dr. Leviste has held top executive roles across major industrial enterprises, serving as the Chairman of OceanaGold Philippines, Vice Chairman of the Chamber of Mines of the Philippines, and Chairman of Constellation Energy Corporation.',
  },
  // {
  //   name: "Geraldine Sunshine Acuna",
  //   role: "President",
  //   organization: "Resolution Project",
  // },
  {
    name: "Roberto G. Manabat",
    role: "Chairman Emeritus",
    organization: "KPMG RG Manabat & Co.",
    image: "/people/roberto.png",
    bio: "Roberto G. Manabat has more than 50 years of track record in the field of accounting and has been an adviser to a number of corporations on financial reporting, internal audit and good corporate governance. He is a recipient of many awards in recognition of his achievements in the accounting profession and in the business community.",
  },
  // {
  //   name: "Sharon Dayoan",
  //   role: "Chairman and Chief Executive Officer",
  //   organization: "KPMG RG Manabat & Co.",
  //   image: "/people/sharon.png",
  //   bio: "Sharon G. Dayoan is the Chairman and Chief Executive Officer of R.G. Manabat & Co. (KPMG in the Philippines). She brings over 30 years of experience in professional services, with expertise in Risk Management and Audit and Assurance. Over the years, she has worked with many of the country\u2019s top conglomerates across a range of industries. Sharon plays a key role in shaping the firm\u2019s direction as it continues to evolve into a more digitally enabled and technology-driven organization, aligned with KPMG\u2019s global commitment to innovation and long-term value. As Chairman and CEO, Sharon champions the firm\u2019s People, Performance, and Culture agenda, with a strong focus on professional growth, inclusion, and collaboration. Sharon chairs the Auditing and Assurance Standards Council of the Philippines and collaborates actively with regulators, the academe, and professional organizations to support the development of the accountancy profession. She is also a Trustee and Treasurer of the NextGen Organization of Women Corporate Directors (NOWCD), empowering future women leaders in their career journeys. A proud cum laude graduate of the University of the Philippines Diliman, she was honored with the UP Alumni Association\u2019s Distinguished Alumna Award for Public Service in Financial Management and Audit. She is also a Distinguished Alumna Awardee of the UP Virata School of Business. She is passionate about developing future leaders and advancing good governance, diversity, and inclusion.",
  // },
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
              guidance from seasoned leaders.
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
