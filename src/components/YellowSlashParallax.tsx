"use client";

import { useEffect, useRef } from "react";

export function YellowSlashParallax() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    function handleScroll() {
      const scrollY = window.scrollY;
      element!.style.transform = `translateY(${scrollY * 0.3}px)`;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute bottom-0 left-0 h-16 w-1/2 yellow-slash animate-slide-in-left"
      style={{ animationDelay: "400ms" }}
      aria-hidden
    />
  );
}