export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
      <div className="absolute right-[-4rem] top-[-4rem] h-72 w-72 rounded-full bg-primary/40 blur-3xl" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-20 md:pt-28">
        <div
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          · {eyebrow}
        </div>
        <h1
          className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            {subtitle}
          </p>
        )}
      </div>
      <div
          className="absolute bottom-0 left-0 h-10 w-1/3 yellow-slash animate-slide-in-left"
          style={{ animationDelay: "300ms" }}
          aria-hidden
        />
    </section>
  );
}