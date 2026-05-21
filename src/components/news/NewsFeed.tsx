import { NewsPostCard } from "./NewsPostCard";
import { getNewsPosts, type NewsCategory } from "@/lib/news-data";

export function NewsFeed({ category }: { category?: NewsCategory }) {
  const posts = getNewsPosts(category);

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="font-display text-xl font-semibold text-muted-foreground">
          No news posts yet
        </div>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          Check back soon for the latest updates from Enactus Philippines.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      {posts.map((post) => (
        <NewsPostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
