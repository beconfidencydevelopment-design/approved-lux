import BlogPageClient from "@/components/blog/blog-page-client";
import { fetchInitialArticles } from "@/lib/blog-api";

export default async function BlogPage() {
  const initialArticles = await fetchInitialArticles();
  return (
    <>
      <BlogPageClient initialArticles={initialArticles} />
    </>
  );
}
