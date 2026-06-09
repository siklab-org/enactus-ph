"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calc(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calc(targetDate));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calc(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-6 md:gap-10">
      {items.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <span className="font-display text-4xl font-semibold leading-none tracking-tight md:text-6xl">
            {String(value).padStart(2, "0")}
          </span>
          <span className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
