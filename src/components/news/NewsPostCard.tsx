import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  AUTHOR,
  CATEGORIES,
  type NewsPost,
} from "@/lib/news-data";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function categoryLabel(key: string): string {
  return CATEGORIES.find((c) => c.key === key)?.label ?? key;
}

export function NewsPostCard({ post }: { post: NewsPost }) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="group block rounded-2xl border border-border/40 bg-background px-5 py-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-border/80 hover:shadow-[0_8px_30px_oklch(0_0_0/0.12)] sm:px-6"
    >
      {/* Author row + category tag */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <img
            src={AUTHOR.avatar}
            alt={AUTHOR.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-1 items-center justify-between gap-2">
          <div>
            <div className="font-display text-sm font-semibold text-foreground">
              {AUTHOR.name}
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              {formatDate(post.publishedAt)}
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-border/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
            {categoryLabel(post.category)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h2 className="font-display text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h2>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
      </div>

      {/* Divider + meta */}
      <div className={cn("mt-5 border-t border-border/40 pt-3")}>
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          Read more
        </span>
      </div>
    </Link>
  );
}
