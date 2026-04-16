import { BLOG_POSTS, CITY_PAGES, STATIC_PAGES } from "@/lib/site-data";
import { getSiteUrl } from "@/lib/seo";

export const revalidate = 3600;

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const siteUrl = getSiteUrl().replace(/\/+$/, "");
  const nowIso = new Date().toISOString();

  const urls = new Set<string>([
    `${siteUrl}/`,
    ...Object.values(STATIC_PAGES).map((page) => `${siteUrl}/${page.slug}`),
    `${siteUrl}/blog`,
    ...CITY_PAGES.map((city) => `${siteUrl}/grease-trap-cleaning/${city.slug}`),
    ...BLOG_POSTS.map((post) => `${siteUrl}/blog/${post.slug}`),
  ]);

  const xmlItems = [...urls]
    .map(
      (url) => `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${nowIso}</lastmod>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
