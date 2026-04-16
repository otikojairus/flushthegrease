import type { MetadataRoute } from "next";
import { BLOG_POSTS, CITY_PAGES, STATIC_PAGES } from "@/lib/site-data";
import { getSiteUrl } from "@/lib/seo";

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl().replace(/\/+$/, "");
  const now = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...Object.values(STATIC_PAGES).map((page, index) => ({
      url: `${siteUrl}/${page.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: index === 0 ? 0.95 : 0.84,
    })),
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...CITY_PAGES.map((city) => ({
      url: `${siteUrl}/grease-trap-cleaning/${city.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.68,
    })),
  ];
}
