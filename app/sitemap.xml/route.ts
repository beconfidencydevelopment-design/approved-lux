type Article = {
  slug: string;
  updated_at?: string;
  created_at?: string;
};

export async function GET(request: Request) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    new URL(request.url).origin;

  const staticPages = [
    "",
    "/traveler",
    "/approvedlux",
    "/traveler/pricing",
    "/approvedlux/pricing",
    "/blog"
  ];

  const staticUrls = staticPages.map(
    (path) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>${path === "" ? "1.0" : "0.7"}</priority>
    </url>`
  ).join("");

  let blogUrls = "";

  try {
    const res = await fetch(
      "https://backend.approvedexperiences.com/api/articles",
      { cache: "no-store" }
    );

    const data = await res.json();
    const blogs: Article[] = data?.data?.articles || [];

    blogUrls = blogs.map(
      (b) => `
      <url>
        <loc>${baseUrl}/blog/${b.slug}</loc>
        <lastmod>${new Date(
          b.updated_at || b.created_at || Date.now()
        ).toISOString()}</lastmod>
        <priority>0.8</priority>
      </url>`
    ).join("");
  } catch (error) {
    console.error("Sitemap blog fetch failed:", error);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls}
  ${blogUrls}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
