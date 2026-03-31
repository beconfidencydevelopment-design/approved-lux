const ARTICLES_API = "https://backend.approvedexperiences.com/api/articles";

async function parseJsonBody<T>(res: Response): Promise<T | null> {
  const ct = res.headers.get("content-type") || "";
  if (!res.ok || !ct.includes("application/json")) {
    return null;
  }
  try {
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

type ArticlesPayload = { data?: { articles?: unknown[] } };
type ArticlePayload = { data?: { article?: unknown } };

export async function fetchInitialArticles(): Promise<unknown[]> {
  try {
    const res = await fetch(`${ARTICLES_API}?page=1&limit=7`, {
      next: { revalidate: 60 },
    });
    const data = await parseJsonBody<ArticlesPayload>(res);
    return data?.data?.articles ?? [];
  } catch {
    return [];
  }
}

export async function fetchArticleSlugsForStaticParams(): Promise<{ slug: string }[]> {
  try {
    const res = await fetch(ARTICLES_API, { cache: "force-cache" });
    const data = await parseJsonBody<ArticlesPayload>(res);
    const articles = data?.data?.articles ?? [];
    if (!Array.isArray(articles)) return [];
    return articles
      .filter(
        (b): b is { slug: string } =>
          !!b &&
          typeof b === "object" &&
          "slug" in b &&
          typeof (b as { slug: string }).slug === "string"
      )
      .map((b) => ({ slug: b.slug }));
  } catch {
    return [];
  }
}

export async function fetchArticleBySlug(slug: string) {
  try {
    const res = await fetch(`${ARTICLES_API}/slug/${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },
    });
    const data = await parseJsonBody<ArticlePayload>(res);
    return data?.data?.article ?? null;
  } catch {
    return null;
  }
}

export async function fetchRelatedArticles(slug: string): Promise<unknown[]> {
  try {
    const res = await fetch(
      `${ARTICLES_API}/slug/${encodeURIComponent(slug)}/related?limit=3`,
      { next: { revalidate: 60 } }
    );
    const data = await parseJsonBody<ArticlesPayload>(res);
    return data?.data?.articles ?? [];
  } catch {
    return [];
  }
}
