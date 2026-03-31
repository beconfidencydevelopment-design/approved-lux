import { notFound } from "next/navigation";
import SingleBLogClient from "@/components/blog/single-blog-client";
import {
  fetchArticleBySlug,
  fetchArticleSlugsForStaticParams,
  fetchRelatedArticles,
} from "@/lib/blog-api";

export const revalidate = 60;

export async function generateStaticParams() {
  return fetchArticleSlugsForStaticParams();
}

export default async function SingleBlog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = await fetchArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  const relatedBlogs = await fetchRelatedArticles(slug);

  return <SingleBLogClient article={article} relateds={relatedBlogs} />;
}
