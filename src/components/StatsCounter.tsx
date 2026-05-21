"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

interface StatsCounterProps {
  value: string;
  label: string;
  className?: string;
}

function parseValue(raw: string): { numeric: number; prefix: string; suffix: string } {
  const match = raw.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!match) return { numeric: 0, prefix: "", suffix: raw };
  const [, prefix, numStr, suffix] = match;
  const numeric = parseInt(numStr.replace(/,/g, ""), 10);
  return { numeric, prefix, suffix };
}

function formatValue(numeric: number, prefix: string, suffix: string): string {
  return `${prefix}${numeric.toLocaleString("en-US")}${suffix}`;
}

export function StatsCounter({ value, label, className = "" }: StatsCounterProps) {
  const { ref, isInView } = useInView({ threshold: 0.15 });
  const [displayValue, setDisplayValue] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const { numeric, prefix, suffix } = parseValue(value);
    if (numeric === 0) {
      setDisplayValue(value);
      return;
    }

    const duration = 1500;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.round(numeric * eased);
      setDisplayValue(formatValue(current, prefix, suffix));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <div ref={ref} className={className}>
      <div className="font-display text-5xl font-semibold text-primary md:text-6xl">
        {displayValue}
      </div>
      <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] opacity-70">
        {label}
      </div>
    </div>
  );
}