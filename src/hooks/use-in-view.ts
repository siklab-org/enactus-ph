"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.15, triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // For elements taller than the viewport, the maximum achievable
    // intersection ratio is viewportHeight / elementHeight, so the requested
    // threshold may never be crossed and the section would stay hidden.
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const elementHeight = element.getBoundingClientRect().height;
    const maxRatio = elementHeight > 0 ? Math.min(1, viewportHeight / elementHeight) : threshold;
    const effectiveThreshold = Math.min(threshold, maxRatio);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold: effectiveThreshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return { ref, isInView };
}