"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const nav = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
  { href: "/national-2026-competition", label: "National 2026 Competition" },
] as const;

function NavLink({
  href,
  label,
  pathname,
}: {
  href: string;
  label: string;
  pathname: string;
}) {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`relative text-sm font-medium transition-all duration-200 hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 hover:after:scale-x-100 ${isActive ? "text-foreground after:scale-x-100" : "text-foreground/80"
        }`}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<"who" | "what" | null>(null);
  const [compSubOpen, setCompSubOpen] = useState(false);

  // Reset sub-menu when the What We Do dropdown closes
  useEffect(() => {
    if (activeMenu !== "what") setCompSubOpen(false);
  }, [activeMenu]);

  const isWhoWeAreActive =
    pathname === "/about" || pathname === "/country-leadership";
  const isWhatWeDoActive =
    pathname === "/competitions" ||
    pathname.startsWith("/competitions/handbook") ||
    pathname.startsWith("/competitions/early-stage") ||
    pathname === "/partnerships" ||
    pathname === "/resources" ||
    pathname === "/news";

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-2 transition-all duration-200 hover:opacity-80"
        >
          <Image
            src="/enactus-logo.webp"
            alt="Enactus"
            width={110}
            height={48}
            className="h-12 w-auto"
          />

        </Link>
        <nav className="flex items-center gap-8">
          <NavLink href="/" label="Home" pathname={pathname} />

          {/* ─── Who We Are dropdown ─── */}
          <NavigationMenu
            className="flex-initial"
            delayDuration={0}
            onMouseEnter={() => setActiveMenu("who")}
            style={{
              zIndex:
                activeMenu === "who"
                  ? 20
                  : activeMenu === "what"
                    ? 10
                    : undefined,
            }}
          >
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuPrimitive.Trigger
                  className={`group flex cursor-pointer items-center gap-1 text-sm font-medium transition-all duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 ${isWhoWeAreActive
                      ? "text-foreground after:scale-x-100"
                      : "text-foreground/80"
                    }`}
                >
                  Who We Are
                  <ChevronDown className="h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                </NavigationMenuPrimitive.Trigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 gap-0.5 p-2">
                    <li>
                      <NavigationMenuLink
                        asChild
                        active={pathname === "/about"}
                      >
                        <Link
                          href="/about"
                          className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[active]:bg-accent data-[active]:text-accent-foreground"
                        >
                          About Enactus
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        asChild
                        active={pathname === "/country-leadership"}
                      >
                        <Link
                          href="/country-leadership"
                          className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[active]:bg-accent data-[active]:text-accent-foreground"
                        >
                          Country Leadership
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* ─── What We Do dropdown ─── */}
          <NavigationMenu
            className="flex-initial"
            delayDuration={0}
            onMouseEnter={() => setActiveMenu("what")}
            onMouseLeave={() => setCompSubOpen(false)}
            style={{
              zIndex:
                activeMenu === "what"
                  ? 20
                  : activeMenu === "who"
                    ? 10
                    : undefined,
            }}
          >
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuPrimitive.Trigger
                  className={`group flex cursor-pointer items-center gap-1 text-sm font-medium transition-all duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 ${isWhatWeDoActive
                      ? "text-foreground after:scale-x-100"
                      : "text-foreground/80"
                    }`}
                >
                  What We Do
                  <ChevronDown className="h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                </NavigationMenuPrimitive.Trigger>
                <NavigationMenuContent>
                  <ul className="grid w-56 gap-0.5 p-2">
                    <li>
                      <NavigationMenuLink
                        asChild
                        active={pathname === "/competitions"}
                      >
                        <Link
                          href="/competitions"
                          onMouseEnter={() => setCompSubOpen((prev) => !prev)}
                          className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          Competitions
                          <ChevronRight
                            className={`h-3 w-3 transition-transform duration-200 ${
                              compSubOpen ? "rotate-90" : ""
                            }`}
                          />
                        </Link>
                      </NavigationMenuLink>
                      {/* Sub-items: toggle on re-hovering the Competitions <a> tag */}
                      <div
                        className={`overflow-hidden transition-all duration-200 ease-out ${
                          compSubOpen ? "max-h-32" : "max-h-0"
                        }`}
                      >
                        <div className="border-t border-border/40 mx-2 my-1" />
                        <NavigationMenuLink asChild active={pathname === "/competitions/handbook"}>
                          <Link
                            href="/competitions/handbook"
                            className="block rounded-md px-6 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground data-[active]:bg-accent data-[active]:text-accent-foreground"
                          >
                            ├─ Competition Handbook
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild active={pathname === "/competitions/early-stage-collaboration"}>
                          <Link
                            href="/competitions/early-stage-collaboration"
                            className="block rounded-md px-6 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            └─ Early Stage Track
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </li>
                    <li>
                      <NavigationMenuLink
                        asChild
                        active={pathname === "/partnerships"}
                      >
                        <Link
                          href="/partnerships"
                          className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[active]:bg-accent data-[active]:text-accent-foreground"
                        >
                          Partnerships
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        asChild
                        active={pathname === "/resources"}
                      >
                        <Link
                          href="/resources"
                          className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[active]:bg-accent data-[active]:text-accent-foreground"
                        >
                          Resources
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild active={pathname === "/news"}>
                        <Link
                          href="/news"
                          className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[active]:bg-accent data-[active]:text-accent-foreground"
                        >
                          News
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {nav.slice(1).map((n) => (
            <NavLink
              key={n.href}
              href={n.href}
              label={n.label}
              pathname={pathname}
            />
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
