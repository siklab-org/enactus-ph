import Link from "next/link";
import Image from "next/image";

const exploreLinks = [
  { href: "/about", label: "About Enactus" },
  { href: "/impact", label: "Our impact" },
  { href: "/2026-national-competition", label: "National competition" },
  { href: "/news", label: "News" },
];

const getInvolvedLinks = [
  { href: "/university-engagement", label: "Join a team" },
  { href: "/faculty-development", label: "Faculty" },
  { href: "/partners", label: "Partner with us" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer-main">
        <div className="site-footer-brand">
          <Link href="/" aria-label="Enactus Philippines home">
            <Image
              src="/enactus-logo.webp"
              alt="Enactus Philippines"
              width={1920}
              height={1080}
              className="site-footer-logo"
            />
          </Link>
          <p>
            Student, academic and business leaders using entrepreneurial action
            to build a more sustainable Philippines.
          </p>
          <span>Bonifacio Global City, Manila</span>
        </div>

        <nav className="site-footer-nav" aria-label="Explore Enactus">
          <h2>Explore</h2>
          {exploreLinks.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
        </nav>

        <nav className="site-footer-nav" aria-label="Get involved">
          <h2>Get involved</h2>
          {getInvolvedLinks.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
        </nav>

        <div className="site-footer-nav">
          <h2>Our network</h2>
          <a href="https://enactus.org" target="_blank" rel="noreferrer">
            Enactus Global
          </a>
          <a href="https://siklab.org.ph/" target="_blank" rel="noreferrer">
            Siklab Pilipinas
          </a>
        </div>
      </div>

      <div className="site-footer-bottom">
        <div className="shell">
          <span>Enactus Philippines is a chapter of Enactus Global.</span>
          <span>© {new Date().getFullYear()} Enactus Global. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
