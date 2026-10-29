import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  ChartNoAxesCombined,
  GraduationCap,
  Handshake,
  Lightbulb,
  Network,
  Sprout,
  UsersRound,
} from "lucide-react";
import { getNewsPosts } from "@/lib/news-data";
import { PhilippinesMap } from "@/components/PhilippinesMap";

const impact = [
  { value: "800+", label: "Partner universities" },
  { value: "78", label: "Student-led ventures" },
  { value: "12K+", label: "Volunteer hours" },
  { value: "240K+", label: "Lives impacted" },
];

const pathways = [
  {
    slug: "students",
    title: "Students",
    description: "Find your campus team and turn an idea into action.",
    href: "/university-engagement",
    icon: GraduationCap,
  },
  {
    slug: "faculty",
    title: "Faculty",
    description: "Help students build ventures with lasting community value.",
    href: "/faculty-development",
    icon: BookOpenCheck,
  },
  {
    slug: "partners",
    title: "Partners",
    description: "Bring expertise, resources and opportunity to the network.",
    href: "/partners",
    icon: Handshake,
  },
  {
    slug: "alumni",
    title: "Alumni",
    description: "Share what you have learned with the next generation.",
    href: "/about",
    icon: UsersRound,
  },
];

const ventureStages = [
  {
    title: "Start with a need",
    description:
      "Listen to communities and understand the challenge before designing a response.",
    image: "/ENACTUSSLIDESHOW/6.jpg",
    alt: "Students and mentors gather at an Enactus Philippines event",
    icon: Sprout,
  },
  {
    title: "Build a solution",
    description:
      "Bring entrepreneurial thinking, practical skills and partners together around an idea.",
    image: "/ENACTUSSLIDESHOW/4.jpg",
    alt: "Enactus participants share ideas during a university event",
    icon: Lightbulb,
  },
  {
    title: "Measure what changes",
    description:
      "Learn from the work, track outcomes and improve the venture over time.",
    image: "/ENACTUSSLIDESHOW/5.jpg",
    alt: "A student presents at an Enactus Philippines competition",
    icon: ChartNoAxesCombined,
  },
];

const partners = [
  { src: "/manabat-logo.png", alt: "R.G. Manabat & Co. (KPMG in the Philippines)" },
  { src: "/arete-logo.png", alt: "Areté" },
  { src: "/pacsb-logo.svg", alt: "Philippine Association of Collegiate Schools of Business" },
  { src: "/eneda-logo.svg", alt: "ENEDA" },
  { src: "/naseea-logo.svg", alt: "NASEEA" },
  { src: "/ja-philippines-logo.png", alt: "JA Philippines" },
  { src: "/acent-logo.png", alt: "ACeNT" },
  { src: "/NEWPARTNERS/IDEAS.png", alt: "IDEAS" },
  { src: "/NEWPARTNERS/lseed-logo-1.jpg.png", alt: "LSEED" },
  { src: "/NEWPARTNERS/SCALENCR.jpg", alt: "Scale NCR" },
  { src: "/NEWPARTNERS/SICAD.jpg", alt: "SICAD" },
  { src: "/NEWPARTNERS/SILLAG.jpg", alt: "SILLAG" },
  { src: "/NEWPARTNERS/UMWAD.jpg", alt: "UMWAD" },
];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-PH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default function Home() {
  const news = getNewsPosts().slice(0, 2).map((post) => ({
    ...post,
    headline:
      post.slug === "pyis-2026-enactus-philippines-national-competition"
        ? "PYIS and Nationals Join"
        : "Enactus Returns in 2026",
  }));

  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-photo home-hero-map">
          <PhilippinesMap />
        </div>
        <div className="home-hero-copy">
          <div className="home-hero-copy-inner">
            <h1 id="home-title">
              Student ideas.<br />National impact.
            </h1>
            <p>
              Enactus Philippines brings students, educators and business leaders
              together to build ventures that move communities forward.
            </p>
            <div className="home-hero-actions">
              <Link className="home-button home-button-dark" href="/university-engagement">
                Find your place <ArrowUpRight aria-hidden="true" size={18} />
              </Link>
              <Link className="home-text-link" href="/about">
                What is Enactus?
              </Link>
            </div>
            <a className="home-scroll-link" href="#our-impact">
              Explore our impact
            </a>
          </div>
        </div>
      </section>

      <section className="home-impact" id="our-impact" aria-labelledby="impact-title">
        <div className="home-impact-intro">
          <h2 id="impact-title">A network in action</h2>
          <p>Students turning entrepreneurial action into measurable change.</p>
        </div>
        <div className="home-impact-stats">
          {impact.map((stat) => (
            <div className="home-impact-stat" key={stat.label}>
              <p className="home-stat-value">{stat.value}</p>
              <p className="home-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-story" aria-labelledby="story-title">
        <div className="home-story-copy">
          <h2 id="story-title">Business for good.</h2>
          <p className="home-story-lead">
            Enactus is a global network of students who use entrepreneurship to
            address social, environmental and economic challenges.
          </p>
          <p>
            In the Philippines, campus teams work alongside communities to
            develop practical ventures, learn by doing and build a more
            sustainable future.
          </p>
          <div className="home-story-focus" aria-label="Explore the challenges Enactus addresses">
            <h3>Choose a challenge</h3>
            <details name="story-focus">
              <summary>Social</summary>
              <p>Use entrepreneurship to address social challenges alongside communities.</p>
            </details>
            <details name="story-focus">
              <summary>Environmental</summary>
              <p>Develop practical responses to environmental challenges.</p>
            </details>
            <details name="story-focus">
              <summary>Economic</summary>
              <p>Build ventures that help address economic challenges.</p>
            </details>
          </div>
          <Link className="home-inline-link" href="/about">
            Get to know Enactus <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
        <figure className="home-story-photo">
          <Image
            src="/ENACTUSSLIDESHOW/3.jpg"
            alt="Enactus Philippines representatives at a memorandum of agreement signing"
            fill
            sizes="(max-width: 800px) 100vw, 48vw"
            className="home-cover-image"
          />
          <figcaption>Partnerships connect ideas with the people and resources to grow them.</figcaption>
        </figure>
      </section>

      <section className="home-pathways" aria-labelledby="pathways-title">
        <div className="home-pathways-intro">
          <h2 id="pathways-title">There is a place for you here.</h2>
          <p>Choose where you want to take part in the movement.</p>
          <Link className="home-pathways-contact" href="/contact">
            Talk with our team <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
        <nav className="home-pathway-list" aria-label="Choose your pathway">
          {pathways.map((pathway) => (
            <Link
              className={`home-pathway home-pathway-${pathway.slug}`}
              href={pathway.href}
              key={pathway.title}
            >
              <span className="home-pathway-icon" aria-hidden="true">
                <pathway.icon size={26} strokeWidth={1.8} />
              </span>
              <span className="home-pathway-copy">
                <h3>{pathway.title}</h3>
                <p>{pathway.description}</p>
              </span>
              <span className="home-pathway-arrow" aria-hidden="true">
                <ArrowUpRight size={22} />
              </span>
            </Link>
          ))}
        </nav>
      </section>

      <section className="home-venture" aria-labelledby="venture-title">
        <div className="home-section-heading home-venture-heading">
          <div>
            <h2 id="venture-title">Local need. Lasting venture.</h2>
            <p>Good work begins with listening, grows through action and keeps learning.</p>
          </div>
          <Link className="home-inline-link" href="/university-engagement">
            Explore our programs <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
        <div className="home-venture-grid">
          {ventureStages.map((stage) => (
            <Link
              className="home-venture-item"
              href="/university-engagement"
              key={stage.title}
            >
              <article>
                <div className="home-venture-image">
                  <Image
                    src={stage.image}
                    alt={stage.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                    className="home-cover-image"
                  />
                  <span className="home-venture-icon" aria-hidden="true">
                    <stage.icon size={34} strokeWidth={1.8} />
                  </span>
                </div>
                <div className="home-venture-copy">
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                  <span className="home-venture-action">
                    Explore university programs
                    <ArrowUpRight aria-hidden="true" size={19} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-co-presented" aria-labelledby="home-competition-title">
        <div className="home-co-presented-copy">
          <h2 id="home-competition-title">
            <Link
              className="home-co-presented-title"
              href="/2026-national-competition"
            >
              Enactus Philippines National Competition
              <ArrowRight aria-hidden="true" size={25} />
            </Link>
          </h2>
          <p>
            A national stage for student ventures to share ideas, learn, and
            create lasting impact in their communities.
          </p>
        </div>
        <figure className="home-co-presented-poster">
          <Image
            src="/enactus nat comp.png"
            alt="Enactus Philippines National Competition 2026 poster"
            width={1434}
            height={1316}
            sizes="(max-width: 700px) 60vw, (max-width: 1050px) 28vw, 20vw"
          />
        </figure>
        <div className="home-co-presented-partner">
          <span>Co-presented with</span>
          <Image
            src="/khan-academy-logo.svg"
            alt="Khan Academy Philippines"
            width={1200}
            height={330}
            sizes="(max-width: 700px) 90vw, (max-width: 1050px) 55vw, 34vw"
          />
          <p>Learning and enterprise come together on a national stage.</p>
        </div>
      </section>

      <section className="home-partners" aria-labelledby="partners-title">
        <div className="home-partners-intro">
          <h2 id="partners-title">Stronger together.</h2>
          <p>
            Our partners help student ventures access the support, expertise and
            connections they need to grow.
          </p>
          <Link className="home-inline-link" href="/partners">
            Meet our partners <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
        <div className="home-partner-logos" aria-label="Enactus Philippines partners">
          {partners.map((partner) => (
            <div className="home-partner-logo" key={partner.src}>
              <Image
                src={partner.src}
                alt={partner.alt}
                width={260}
                height={120}
                sizes="(max-width: 700px) 40vw, 16vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="home-news" aria-labelledby="news-title">
        <div className="home-section-heading">
          <div>
            <div className="home-news-title">
              <h2 id="news-title">Latest from our network.</h2>
              <span className="home-news-network-icon" aria-hidden="true">
                <Network size={25} strokeWidth={1.8} />
              </span>
            </div>
            <p>Updates from across our network.</p>
          </div>
          <Link className="home-inline-link" href="/news">
            All news <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
        <div className="home-news-list">
          {news.map((post) => (
            <article className="home-news-item" key={post.slug}>
              <p className="home-news-date">{formatDate(post.publishedAt)}</p>
              <div>
                <h3><Link href={`/news/${post.slug}`}>{post.headline}</Link></h3>
                <p>{post.excerpt}</p>
              </div>
              <Link
                className="home-news-arrow"
                href={`/news/${post.slug}`}
                aria-label={`Read ${post.title}`}
              >
                <ArrowUpRight aria-hidden="true" size={21} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="home-join" aria-labelledby="join-title">
        <div className="home-join-copy">
          <h2 id="join-title">Build a better Philippines.</h2>
          <p>
            Bring your ideas, experience or partnership to a network turning
            entrepreneurial action into community impact.
          </p>
        </div>
        <Link className="home-button home-join-button" href="/contact">
          Get involved <ArrowUpRight aria-hidden="true" size={18} />
        </Link>
      </section>
    </div>
  );
}
