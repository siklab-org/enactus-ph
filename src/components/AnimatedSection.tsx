"use client";

import { useInView } from "@/hooks/use-in-view";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export function AnimatedSection({
  children,
  className = "",
  stagger = false,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`${className} ${
        isInView
          ? "animate-fade-up"
          : "opacity-0 translate-y-6"
      }`}
      style={stagger ? { animationDelay: "var(--stagger-delay, 0ms)" } : undefined}
    >
      {children}
    </div>
  );
}