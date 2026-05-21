import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsPost } from "@/lib/news-data";
import { NewsPostDetail } from "@/components/news/NewsPostDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getNewsPost(slug);

  if (!post) {
    notFound();
  }

  return <NewsPostDetail post={post} />;
}
