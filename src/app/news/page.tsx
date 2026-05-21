import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { NewsFeed } from "@/components/news/NewsFeed";
import { NewsSidebar } from "@/components/news/NewsSidebar";
import type { NewsCategory } from "@/lib/news-data";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "Latest news, announcements, and updates from Enactus Philippines — partnerships, events, and community impact stories.",
};

export default async function NewsPage(props: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await props.searchParams;
  const activeCategory = (category as NewsCategory) || undefined;

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="Media"
        title={<>News <span className="bg-primary px-2 italic">&amp;</span> Updates.</>}
        subtitle="Partnerships, events, and stories from across the Enactus Philippines community."
      />
      <section className="border-b border-border/60">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
          <div className="lg:grid lg:grid-cols-[14rem_1fr] lg:gap-12">
            <NewsSidebar active={activeCategory} />
            <div className="mt-10 lg:mt-0">
              <NewsFeed category={activeCategory} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
