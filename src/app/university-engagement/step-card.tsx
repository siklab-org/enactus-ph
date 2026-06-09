"use client";

import type { ReactNode } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";

interface StepCardProps {
  step: number;
  title: string;
  children: ReactNode;
}

export function StepCard({ step, title, children }: StepCardProps) {
  const padded = String(step).padStart(2, "0");
  return (
    <AnimatedSection>
      <div className="flex gap-5 md:gap-8">
        <div className="flex shrink-0 flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary/20 bg-background font-mono text-sm font-bold text-primary md:h-12 md:w-12 md:text-base">
            {padded}
          </div>
          {step < 10 && <div className="mt-2 w-px flex-1 bg-border/60" />}
        </div>
        <div className="flex-1 rounded-2xl border border-border/60 bg-gradient-to-b from-muted/5 to-muted/10 p-6 transition-all duration-200 hover:border-primary/20 md:p-8">
          <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>
          <div className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
            {children}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
