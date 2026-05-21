import Link from "next/link";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AUTHOR, PLACEHOLDER, CATEGORIES, type NewsPost } from "@/lib/news-data";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ImagePlaceholder({ aspect = "16/9" }: { aspect?: string }) {
  return (
    <div
      className="flex items-center justify-center rounded-xl bg-muted text-muted-foreground"
      style={{ aspectRatio: aspect }}
    >
      <ImageIcon className="h-8 w-8 opacity-40" />
    </div>
  );
}

function categoryLabel(key: string): string {
  return CATEGORIES.find((c) => c.key === key)?.label ?? key;
}

export function NewsPostCard({ post }: { post: NewsPost }) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="group block rounded-2xl border border-border/40 bg-background px-5 py-6 transition-colors hover:border-border/80 sm:px-6"
    >
      {/* Author row + category tag */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full bg-muted">
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
        <h2 className="font-display text-lg font-semibold leading-snug tracking-tight text-foreground group-hover:text-primary transition-colors">
          {post.title}
        </h2>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
      </div>

      {/* Image / Placeholder */}
      {post.imageUrl ? (
        <div className="mt-4">
          {post.imageUrl === PLACEHOLDER ? (
            <ImagePlaceholder />
          ) : (
            <img
              src={post.imageUrl}
              alt={post.imageAlt ?? ""}
              className="w-full rounded-xl object-cover"
              style={{ aspectRatio: "16/9" }}
            />
          )}
        </div>
      ) : null}

      {/* Divider + meta */}
      <div className={cn("mt-5 border-t border-border/40 pt-3")}>
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          Read more
        </span>
      </div>
    </Link>
  );
}
