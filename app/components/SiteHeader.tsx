"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/impact", label: "Impact" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/enactus-logo.png" alt="Enactus" width={28} height={28} className="h-7 w-auto" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            / Philippines
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.slice(1).map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                pathname === n.href ? "text-foreground" : "text-foreground/80"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="inline-flex h-10 items-center rounded-full bg-secondary px-5 text-sm font-semibold text-secondary-foreground transition-transform hover:-translate-y-0.5"
        >
          Join Us
        </Link>
      </div>
    </header>
  );
}