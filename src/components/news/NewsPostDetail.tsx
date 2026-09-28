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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderInline(line: string): string {
  return escapeHtml(line)
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" class="text-primary underline underline-offset-4 hover:opacity-80" target="_blank" rel="noopener noreferrer">$1</a>',
    )
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground">$1</strong>');
}

function renderBody(body: string): string {
  const html: string[] = [];
  let inList = false;

  const closeList = () => {
    if (inList) {
      html.push("</ul>");
      inList = false;
    }
  };

  for (const raw of body.split("\n")) {
    const line = raw.trim();

    if (!line) {
      closeList();
      continue;
    }

    if (line.startsWith("- ")) {
      if (!inList) {
        html.push('<ul class="ml-6 list-disc space-y-1">');
        inList = true;
      }
      html.push(
        `<li class="text-muted-foreground">${renderInline(line.slice(2))}</li>`,
      );
      continue;
    }

    closeList();

    if (line.startsWith("## ")) {
      html.push(
        `<h2 class="mt-6 font-display text-xl font-semibold tracking-tight text-foreground">${renderInline(line.slice(3))}</h2>`,
      );
      continue;
    }

    html.push(
      `<p class="text-muted-foreground leading-relaxed">${renderInline(line)}</p>`,
    );
  }

  closeList();
  return html.join("");
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
