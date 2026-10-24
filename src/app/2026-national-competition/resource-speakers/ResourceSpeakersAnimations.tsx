"use client";

import { useEffect } from "react";

export function ResourceSpeakersAnimations() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(
      "[data-resource-speakers-page]",
    );
    if (
      !page ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const elements = page.querySelectorAll<HTMLElement>(
      "[data-speaker-reveal]",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
    );

    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.9) {
        element.setAttribute("data-revealed", "true");
      }
      observer.observe(element);
    });
    page.setAttribute("data-motion-ready", "true");

    return () => observer.disconnect();
  }, []);

  return null;
}
