import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-data";
import type { BlogPost } from "@/lib/site-data";

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <main className="page-shell">
      <section className="hero-band slim">
        <div className="shell narrow">
          <p className="eyebrow">Blog Article</p>
          <h1 className="hero-title">{post.title}</h1>
          <p className="hero-subtitle">{post.intro}</p>
        </div>
      </section>

      <section className="section-block">
        <div className="shell narrow">
          <div className="content-card">
            <h2>Table of Contents</h2>
            <div className="toc-list">
              {post.toc.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {post.sections.map((section) => (
            <article key={section.id} id={section.id} className="content-card article-card">
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}

          <blockquote className="pull-quote">{post.quote}</blockquote>

          <article className="content-card article-card">
            <h2>Conclusion</h2>
            <p>{post.conclusion}</p>
            <p>
              Need professional grease trap cleaning in Canada? FlushTheGrease offers licensed, same-day service
              nationwide. Call us at <a href={PHONE_HREF}>{PHONE_DISPLAY}</a> for a free quote.
            </p>
            <p>
              Related service: <Link href={post.relatedPath}>{post.relatedLabel}</Link>
            </p>
          </article>

          <article className="content-card article-card">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {post.faqs.map((faq) => (
                <details key={faq.q} className="faq-item">
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </article>

          <article className="content-card article-card">
            <h2>Author</h2>
            <p>Mike Fernandes - 20+ Years of Blue Collar Jobs</p>
          </article>
        </div>
      </section>
    </main>
  );
}
