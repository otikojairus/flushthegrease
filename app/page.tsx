import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { BLOG_POSTS, CITY_PAGES, PHONE_DISPLAY, PHONE_HREF, SITE_NAME, SOCIAL_PROOF, STATIC_PAGES } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Grease Trap Cleaning Canada",
  description:
    "FlushTheGrease provides grease trap cleaning, emergency response, and maintenance planning for restaurants and commercial kitchens across Canada.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} | Grease Trap Cleaning Canada`,
    description: "National grease trap cleaning pages with pricing, emergency response, blog resources, and city landing pages.",
    url: absoluteUrl("/"),
    type: "website",
    siteName: SITE_NAME,
  },
};

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: SITE_NAME,
    url: absoluteUrl("/"),
    telephone: "+18883288990",
    priceRange: "Starting at $199",
    areaServed: { "@type": "Country", name: "Canada" },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "FlushTheGrease Core Pages",
    itemListElement: Object.values(STATIC_PAGES).map((page, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: page.title,
      url: absoluteUrl(`/${page.slug}`),
    })),
  };

  return (
    <main className="page-shell">
      <JsonLd data={organizationSchema} />
      <JsonLd data={itemListSchema} />

      <section className="hero-band home-hero">
        <div className="shell hero-grid">
          <div>
            <p className="eyebrow">Canada-wide commercial kitchen support</p>
            <h1 className="hero-title">Grease trap cleaning that keeps your kitchen open</h1>
            <p className="hero-subtitle">
              FlushTheGrease helps restaurants, hotel kitchens, food courts, and franchise operators stay compliant,
              avoid odours, and book same-day service by phone.
            </p>
            <div className="cta-row">
              <a href={PHONE_HREF} className="btn btn-primary">
                Call {PHONE_DISPLAY}
              </a>
              <Link href="/grease-trap-cleaning" className="btn btn-secondary">
                Explore Cleaning
              </Link>
            </div>
            <p className="social-line">{SOCIAL_PROOF}</p>
          </div>

          <div className="hero-card">
            <p className="card-kicker">Direct phone-only booking</p>
            <h2>Call {PHONE_DISPLAY}</h2>
            <ul className="bullet-list">
              <li>Licensed and insured technicians</li>
              <li>Same-day service when available</li>
              <li>Compliance documents included</li>
              <li>Emergency response available 24/7/365</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Core Pages</p>
            <h2>Built for restaurant operators who need fast answers</h2>
          </div>
          <div className="card-grid four">
            {Object.values(STATIC_PAGES).map((page) => (
              <Link key={page.slug} href={`/${page.slug}`} className="content-card service-link-card">
                <h3>{page.title}</h3>
                <p>{page.metaDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block muted-section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">City Pages</p>
            <h2>Priority grease trap cleaning markets</h2>
            <p>These pages combine local health authority context, nearby service areas, and direct click-to-call CTAs.</p>
          </div>
          <div className="city-grid">
            {CITY_PAGES.slice(0, 12).map((city) => (
              <Link key={city.slug} href={`/grease-trap-cleaning/${city.slug}`} className="city-pill">
                {city.name}, {city.provinceAbbr}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Blog Resources</p>
            <h2>Useful reading for kitchen operators</h2>
          </div>
          <div className="card-grid three">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="content-card service-link-card">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block accent-strip">
        <div className="shell split-cta">
          <div>
            <p className="eyebrow">Need help now?</p>
            <h2>Phone-only booking keeps dispatch fast.</h2>
            <p>Call {PHONE_DISPLAY} and we will confirm pricing, availability, and the right service path immediately.</p>
          </div>
          <a href={PHONE_HREF} className="btn btn-primary">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </main>
  );
}
