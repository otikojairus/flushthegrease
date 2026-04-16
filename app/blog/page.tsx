import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Grease Trap Cleaning Blog",
  description: "Guides on grease trap cleaning, pricing, regulations, odours, and business operations for Canadian commercial kitchens.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <main className="page-shell">
      <section className="hero-band slim">
        <div className="shell">
          <p className="eyebrow">Blog</p>
          <h1 className="hero-title">Grease Trap Articles For Kitchen Operators</h1>
          <p className="hero-subtitle">
            Practical reading on cleaning schedules, compliance, pricing, and common grease trap problems in Canada.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="shell card-grid three">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="content-card service-link-card">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
