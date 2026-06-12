import type { Metadata } from "next";
import Image from "next/image";
import { CountdownTimer } from "@/components/CountdownTimer";

export const metadata: Metadata = {
  title: "National 2026 Competition | Enactus Philippines",
  description:
    "Enactus Philippines National Competition 2026",
};

export default function National2026Page() {
  const targetDate = new Date("2026-09-11T00:00:00+08:00");

  return (
    <div className="min-h-screen bg-background">
      {/* ─── HERO IMAGE ─── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto flex justify-center px-4 sm:px-6 lg:px-8 pt-8 md:pt-16">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl">
            <Image
              src="/national-2026-hero.png"
              alt="National 2026 Competition"
              width={1920}
              height={1080}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
        <div className="mx-auto mt-8 h-10 w-1/3 yellow-slash" aria-hidden />
      </section>

      {/* ─── CONTENT BELOW ─── */}
      <section className="relative">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 pt-10 md:pt-16">
          <div className="animate-fade-up">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Enactus Philippines
            </div>
            <h1 className="mt-4 text-hero font-semibold leading-[1.05] tracking-tight">
              National 2026 Competition
            </h1>
            <p className="mt-3 text-base text-foreground/60 md:text-lg">
              September 11 - 13, 2026
            </p>
          </div>

          <div
            className="mt-10 animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            <CountdownTimer targetDate={targetDate} />
          </div>
        </div>
      </section>

      {/* ─── MORE SOON ─── */}
      <section className="border-t border-border/60 bg-gradient-to-b from-background via-background to-transparent pb-48">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            · Stay tuned
          </div>
          <h2 className="mt-6 text-subsection font-semibold">
            More soon<span className="text-primary">.</span>
            <span className="text-primary/40">.</span>
            <span className="text-primary/20">.</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Competition details, judging criteria, and registration will be
            announced here.
          </p>
        </div>
      </section>
    </div>
  );
}
