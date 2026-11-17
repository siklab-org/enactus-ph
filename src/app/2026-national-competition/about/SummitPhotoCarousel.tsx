"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface SummitPhotoCarouselProps {
  photos: string[];
}

export function SummitPhotoCarousel({ photos }: SummitPhotoCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const goToPhoto = useCallback(
    (index: number) => {
      const viewport = viewportRef.current;
      if (!viewport || photos.length === 0) return;

      const nextIndex = (index + photos.length) % photos.length;
      viewport.scrollTo({
        left: nextIndex * viewport.clientWidth,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    },
    [photos.length, prefersReducedMotion],
  );

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updateMotionPreference = () =>
      setPrefersReducedMotion(motionPreference.matches);

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () =>
      motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const updatePageVisibility = () =>
      setIsPageVisible(!document.hidden);

    updatePageVisibility();
    document.addEventListener("visibilitychange", updatePageVisibility);
    return () =>
      document.removeEventListener("visibilitychange", updatePageVisibility);
  }, []);

  useEffect(() => {
    if (
      isPaused ||
      !isPageVisible ||
      prefersReducedMotion ||
      photos.length < 2
    ) {
      return;
    }

    const intervalId = window.setInterval(
      () => goToPhoto(activeIndex + 1),
      6000,
    );
    return () => window.clearInterval(intervalId);
  }, [
    activeIndex,
    goToPhoto,
    isPageVisible,
    isPaused,
    photos.length,
    prefersReducedMotion,
  ]);

  if (photos.length === 0) return null;

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onTouchCancel={() => setIsPaused(false)}
    >
      <div className="mb-6 flex items-end justify-between gap-4">
        <h3 id="summit-photo-heading" className="text-subsection font-bold leading-tight">
          The summit in pictures
        </h3>
        <span className="shrink-0 text-sm tabular-nums text-muted-foreground" aria-hidden="true">
          {activeIndex + 1} / {photos.length}
        </span>
      </div>

      <div className="relative">
        <div
          ref={viewportRef}
          role="region"
          aria-labelledby="summit-photo-heading"
          aria-roledescription="carousel"
          aria-label="Summit photos"
          tabIndex={0}
          onScroll={(event) => {
            const viewport = event.currentTarget;
            if (viewport.clientWidth > 0) {
              setActiveIndex(
                Math.min(
                  photos.length - 1,
                  Math.round(viewport.scrollLeft / viewport.clientWidth),
                ),
              );
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              goToPhoto(activeIndex - 1);
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              goToPhoto(activeIndex + 1);
            }
          }}
          className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          {photos.map((alt, index) => (
            <figure
              key={alt}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${photos.length}`}
              className="relative aspect-[5/3] w-full shrink-0 snap-start overflow-hidden bg-muted"
            >
              <Image
                src={`/summit-photos/${index + 1}.jpg`}
                alt={alt}
                fill
                priority={index === 0}
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
            </figure>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 hidden items-center pl-4 md:flex">
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => goToPhoto(activeIndex - 1)}
            className="inline-flex size-11 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ArrowLeft className="size-5" aria-hidden="true" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 hidden items-center pr-4 md:flex">
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => goToPhoto(activeIndex + 1)}
            className="inline-flex size-11 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ArrowRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
