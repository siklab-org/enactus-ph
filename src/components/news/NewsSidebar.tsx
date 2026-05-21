import Link from "next/link";
import { CATEGORIES, getNewsPosts, type NewsCategory } from "@/lib/news-data";

export function NewsSidebar({ active }: { active?: NewsCategory }) {
  const counts = CATEGORIES.map((cat) => ({
    ...cat,
    count: cat.key === "all" ? getNewsPosts().length : getNewsPosts(cat.key).length,
  }));

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <nav className="mt-5 flex flex-wrap gap-2 lg:flex-col">
        {counts.map(({ key, label, count }) => {
          const href = key === "all" ? "/news" : `/news?category=${key}`;
          const isActive = active === key || (!active && key === "all");
          return (
            <Link
              key={key}
              href={href}
              className={`
                inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors
                ${isActive
                  ? "bg-primary text-primary-foreground"
                  : "border border-border/60 text-muted-foreground hover:border-border hover:text-foreground"
                }
              `}
            >
              {label}
              <span
                className={`font-mono text-[11px] ${isActive ? "text-primary-foreground/70" : "text-muted-foreground/60"
                  }`}
              >
                {count}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
