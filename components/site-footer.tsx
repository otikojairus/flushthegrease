import Link from "next/link";
import { BLOG_POSTS, PHONE_DISPLAY, PHONE_HREF, SITE_NAME, STATIC_PAGES } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-title">{SITE_NAME}</p>
          <p className="footer-copy">
            Licensed grease trap cleaning and maintenance for restaurants, hotel kitchens, food courts, and commercial
            kitchens across Canada.
          </p>
          <a href={PHONE_HREF} className="btn btn-primary">
            Call {PHONE_DISPLAY}
          </a>
        </div>

        <div>
          <p className="footer-title">Core Pages</p>
          <div className="footer-links">
            {Object.values(STATIC_PAGES).map((page) => (
              <Link key={page.slug} href={`/${page.slug}`}>
                {page.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="footer-title">Blog</p>
          <div className="footer-links">
            {BLOG_POSTS.slice(0, 4).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
