"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
  { href: "/national-2026-competition", label: "National 2026 Competition" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2 transition-all duration-200 hover:opacity-80">
          <Image src="/enactus-logo.svg" alt="Enactus" width={64} height={28} className="h-7 w-auto" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            / Philippines
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.slice(1).map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`relative text-sm font-medium transition-all duration-200 hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 hover:after:scale-x-100 ${pathname === n.href
                  ? "text-foreground after:scale-x-100"
                  : "text-foreground/80"
                }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="inline-flex h-10 items-center rounded-full bg-secondary px-5 text-sm font-semibold text-secondary-foreground transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-secondary/90 hover:shadow-[0_4px_20px_oklch(0_0_0/0.15)]"
        >
          Compete
        </Link>
      </div>
    </header>
  );
}
