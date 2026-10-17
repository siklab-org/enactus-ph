"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface SlideshowImage {
  src: string;
  alt: string;
}

interface SlideshowProps {
  images: SlideshowImage[];
  interval?: number;
  className?: string;
}

export function Slideshow({
  images,
  interval = 4200,
  className = "",
}: SlideshowProps) {
  const [active, setActive] = useState(0);
  // Static on purpose: honors prefers-reduced-motion for the whole session
  const [paused] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (paused || images.length < 2) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % images.length),
      interval
    );
    return () => clearInterval(id);
  }, [paused, images.length, interval]);

  return (
    <div className={`group relative overflow-hidden bg-muted/40 ${className}`}>
      {images.map((img, i) => {
        const isActive = i === active;
        return (
          <div
            key={img.src}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isActive ? "opacity-100 duration-[1600ms]" : "opacity-0 duration-[1200ms]"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              quality={100}
              sizes="100vw"
              priority={i === 0}
              className={`object-cover transition-transform ease-out ${
                isActive ? "scale-100 duration-[7000ms]" : "scale-[1.08] duration-0"
              }`}
            />
            {/* Warm monochrome grade — blends photos into the palette */}
            <div className="pointer-events-none absolute inset-0 bg-ink/[0.04] mix-blend-multiply" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-ink/[0.06]" />
          </div>
        );
      })}
      {/* Slide progress bar */}
      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-0 z-10 h-[3px] bg-ink/15">
          <div
            key={active}
            className="h-full origin-left bg-foreground/80 shadow-[0_0_8px_rgba(0,0,0,0.45)] animate-slide-progress"
            style={
              {
                animationDuration: `${interval}ms`,
                animationPlayState: paused ? "paused" : "running",
              } as React.CSSProperties
            }
          />
        </div>
      )}
    </div>
  );
}
