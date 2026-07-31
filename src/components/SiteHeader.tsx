"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

const nav = [
  { href: "/", label: "Home" },
  { href: "/2026-national-competition", label: "2026 National Competition" },
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

interface NavLinkItem {
  href?: string;
  label: string;
  children?: NavLinkItem[];
}

const mobileNavLinks: NavLinkItem[] = [
  { href: "/", label: "Home" },
  {
    label: "Who We Are",
    children: [
      { href: "/about", label: "About Enactus" },
      { href: "/country-leadership", label: "Country Leadership" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    label: "What We Do",
    children: [
      {
        label: "Competitions",
        children: [
          { href: "/competitions/handbook", label: "Core Competition" },
          { href: "/competitions/early-stage-collaboration", label: "Early Stage Track" },
        ],
      },
      { href: "/partners", label: "Partnerships" },
      { href: "/resources", label: "Resources" },
      { href: "/news", label: "News" },
      { href: "/university-engagement", label: "University Engagement" },
      {
        label: "Faculty Development",
        children: [
          { href: "/faculty-development", label: "Program" },
          { href: "/faculty-development/2026-fellows", label: "2026 Fellows" },
        ],
      },
    ],
  },
  { href: "/2026-national-competition", label: "2026 National Competition" },
];

const whoWeArePaths = ["/about", "/country-leadership", "/contact"];
const whatWeDoPaths = [
  "/competitions", "/competitions/handbook",
  "/competitions/early-stage-collaboration",
  "/partners", "/resources", "/news",
  "/university-engagement", "/faculty-development",
  "/faculty-development/2026-fellows",
];

function getMobileAccordionValue(pathname: string): string | undefined {
  if (whoWeArePaths.includes(pathname)) return "who-we-are";
  if (whatWeDoPaths.includes(pathname)) return "what-we-do";
  return undefined;
}

function MobileNavItem({ item, pathname, depth = 0 }: { item: NavLinkItem; pathname: string; depth?: number }) {
  if (item.href && !item.children) {
    const isActive = pathname === item.href;
    return (
      <SheetClose asChild>
        <Link
          href={item.href}
          className={`block rounded-lg px-3 py-3.5 text-sm font-medium transition-colors ${
            isActive
              ? "bg-accent text-accent-foreground"
              : "text-foreground/80 hover:bg-accent/50 hover:text-foreground"
          }`}
          style={{ paddingLeft: `${1 + depth * 0.75}rem` }}
        >
          {item.label}
        </Link>
      </SheetClose>
    );
  }

  if (item.children && depth === 0) {
    return (
      <Collapsible className="w-full">
        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-sm font-medium text-foreground/80 hover:bg-accent/50 hover:text-foreground cursor-pointer">
          {item.label}
          <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 ui-open:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-4 pt-1 space-y-0.5">
          {item.children.map((child) => (
            <MobileNavItem key={child.label} item={child} pathname={pathname} depth={depth + 1} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  if (item.children) {
    return (
      <div className="space-y-0.5">
        <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
          {item.label}
        </div>
        {item.children.map((child) => (
          <MobileNavItem key={child.label} item={child} pathname={pathname} depth={depth + 1} />
        ))}
      </div>
    );
  }

  return null;
}

function MobileNav({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const accordionValue = getMobileAccordionValue(pathname);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg text-foreground/80 hover:bg-accent/50 hover:text-foreground transition-colors cursor-pointer"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[18rem] max-w-[85vw] bg-background p-0 [&>button]:hidden"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border/60 px-4 py-4">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <Image
                src="/enactus-logo.webp"
                alt="Enactus"
                width={90}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-foreground/60 hover:bg-accent/50 hover:text-foreground transition-colors cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <ScrollArea className="flex-1 px-3 py-4">
            <Accordion
              type="single"
              collapsible
              defaultValue={accordionValue}
              className="space-y-1"
            >
              {mobileNavLinks.map((item) => {
                if (item.href && !item.children) {
                  const isActive = pathname === item.href;
                  return (
                    <SheetClose key={item.label} asChild>
                      <Link
                        href={item.href}
          className={`block rounded-lg px-3 py-3.5 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-accent text-accent-foreground"
                            : "text-foreground/80 hover:bg-accent/50 hover:text-foreground"
                        }`}
                        >
                          {item.label}
                        </Link>
                    </SheetClose>
                  );
                }
                if (item.children) {
                  return (
                    <AccordionItem key={item.label} value={item.label === "Who We Are" ? "who-we-are" : "what-we-do"} className="border-0">
                      <AccordionTrigger className="rounded-lg px-3 py-3.5 text-sm font-medium text-foreground/80 hover:bg-accent/50 hover:text-foreground no-underline [&[data-state=open]>svg]:rotate-180 cursor-pointer">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="pb-1 pt-1">
                        <div className="space-y-0.5 pl-2">
                          {item.children.map((child) => (
                            <MobileNavItem key={child.label} item={child} pathname={pathname} depth={1} />
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                }
                return null;
              })}
            </Accordion>
          </ScrollArea>
          <div className="border-t border-border/60 p-4">
            <SheetClose asChild>
              <Link
                href="/2026-national-competition"
                className="flex w-full items-center justify-center rounded-full bg-secondary px-5 py-4 text-sm font-semibold text-secondary-foreground transition-all duration-200 hover:bg-secondary/90"
              >
                Compete
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  const isWhoWeAreActive =
    pathname === "/about" || pathname === "/country-leadership" || pathname === "/contact";
  const isWhatWeDoActive =
    pathname === "/competitions" ||
    pathname.startsWith("/competitions/handbook") ||
    pathname.startsWith("/competitions/early-stage") ||
    pathname === "/partners" ||
    pathname === "/resources" ||
    pathname === "/news" ||
    pathname === "/university-engagement" ||
    pathname === "/faculty-development" ||
    pathname === "/faculty-development/2026-fellows";

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 transition-all duration-200 hover:opacity-80"
        >
          <Image
            src="/enactus-logo.webp"
            alt="Enactus"
            width={110}
            height={48}
            className="h-12 w-auto"
          />
        </Link>
        <MobileNav pathname={pathname} />
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink href="/" label="Home" pathname={pathname} />

          {/* ─── Who We Are dropdown ─── */}
          <NavigationMenu
            className="flex-initial"
            delayDuration={0}
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
                    <li>
                      <NavigationMenuLink
                        asChild
                        active={pathname === "/contact"}
                      >
                        <Link
                          href="/contact"
                          className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[active]:bg-accent data-[active]:text-accent-foreground"
                        >
                          Contact
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
                    <li className="relative">
                      <div className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <NavigationMenuLink asChild active={pathname === "/competitions"}>
                          <Link
                            href="/competitions"
                            className="flex-1"
                          >
                            Competitions
                          </Link>
                        </NavigationMenuLink>
                        <ChevronDown className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="border-t border-border/40 mx-2 my-1" />
                        <NavigationMenuLink asChild active={pathname === "/competitions/handbook"}>
                          <Link
                            href="/competitions/handbook"
                            className="block rounded-md px-6 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground data-[active]:bg-accent data-[active]:text-accent-foreground"
                          >
                            Core Competition
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild active={pathname === "/competitions/early-stage-collaboration"}>
                          <Link
                            href="/competitions/early-stage-collaboration"
                            className="block rounded-md px-6 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            Early Stage Track
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
                          href="/partners"
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
                    <li>
                      <NavigationMenuLink asChild active={pathname === "/university-engagement"}>
                        <Link
                          href="/university-engagement"
                          className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[active]:bg-accent data-[active]:text-accent-foreground"
                        >
                          University Engagement
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li className="relative">
                      <div className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <NavigationMenuLink asChild active={pathname === "/faculty-development"}>
                          <Link
                            href="/faculty-development"
                            className="flex-1"
                          >
                            Faculty Development
                          </Link>
                        </NavigationMenuLink>
                        <ChevronDown className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="border-t border-border/40 mx-2 my-1" />
                        <NavigationMenuLink asChild active={pathname === "/faculty-development"}>
                          <Link
                            href="/faculty-development"
                            className="block rounded-md px-6 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground data-[active]:bg-accent data-[active]:text-accent-foreground"
                          >
                            Program
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild active={pathname === "/faculty-development/2026-fellows"}>
                          <Link
                            href="/faculty-development/2026-fellows"
                            className="block rounded-md px-6 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            2026 Fellows
                          </Link>
                        </NavigationMenuLink>
                      </div>
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
          href="/2026-national-competition"
          className="hidden lg:inline-flex h-10 items-center rounded-full bg-secondary px-5 text-sm font-semibold text-secondary-foreground transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-secondary/90 hover:shadow-[0_4px_20px_oklch(0_0_0/0.15)]"
        >
          Compete
        </Link>
      </div>
    </header>
  );
}
