import Link from "next/link";
import { ArrowLeft, ImageIcon } from "lucide-react";
import { AUTHOR, PLACEHOLDER, type NewsPost } from "@/lib/news-data";

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

function renderBody(body: string): string {
  return body
    .split("\n")
    .filter((line) => line.trim())
    .map((line) => {
      if (line.startsWith("- ")) {
        return `<li class="ml-6 list-disc text-muted-foreground">${line.slice(2)}</li>`;
      }
      return `<p class="text-muted-foreground leading-relaxed">${line}</p>`;
    })
    .join("");
}

export function NewsPostDetail({ post }: { post: NewsPost }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Back link */}
      <div className="mx-auto max-w-7xl px-6 pt-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to news
        </Link>
      </div>

      {/* Post content */}
      <article className="mx-auto max-w-2xl px-6 py-12">
        {/* Author row */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
            <img
              src={AUTHOR.avatar}
              alt={AUTHOR.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="font-display text-base font-semibold text-foreground">
              {AUTHOR.name}
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              {formatDate(post.publishedAt)}
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="mt-8 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          {post.title}
        </h1>

        {/* Image / Placeholder */}
        {post.imageUrl ? (
          <div className="mt-8">
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

        {/* Body */}
        <div
          className="mt-8 space-y-4 text-base leading-relaxed [&_p]:text-muted-foreground [&_p]:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: renderBody(post.body) }}
        />
      </article>
    </div>
  );
}
