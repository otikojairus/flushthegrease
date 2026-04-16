import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF, PRICING_ROWS, PROCESS_STEPS, SERVICE_CARDS, SOCIAL_PROOF, STARTING_PRICE, TRUST_POINTS } from "@/lib/site-data";

type ServicePageProps = {
  keyword: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string[];
  whyTitle: string;
  whyIntro: string;
  faqs: Array<{ q: string; a: string }>;
  pricingTitle?: string;
  pricingIntro?: string;
  serviceAreas?: Array<{ href: string; label: string; description: string }>;
  internalLinks?: Array<{ href: string; label: string }>;
  servicesTitle?: string;
};

function emphasizeFirstKeyword(paragraph: string, keyword: string) {
  const index = paragraph.toLowerCase().indexOf(keyword.toLowerCase());

  if (index === -1) {
    return paragraph;
  }

  return (
    <>
      {paragraph.slice(0, index)}
      <strong>{paragraph.slice(index, index + keyword.length)}</strong>
      {paragraph.slice(index + keyword.length)}
    </>
  );
}

export function ServicePage({
  keyword,
  heroTitle,
  heroSubtitle,
  intro,
  whyTitle,
  whyIntro,
  faqs,
  pricingTitle,
  pricingIntro,
  serviceAreas,
  internalLinks,
  servicesTitle = "Our Grease Trap Cleaning Services",
}: ServicePageProps) {
  return (
    <main className="page-shell">
      <section className="hero-band">
        <div className="shell hero-grid">
          <div>
            <p className="eyebrow">{keyword}</p>
            <h1 className="hero-title">{heroTitle}</h1>
            <p className="hero-subtitle">{heroSubtitle}</p>
            <div className="cta-row">
              <a href={PHONE_HREF} className="btn btn-primary">
                Call {PHONE_DISPLAY}
              </a>
              <a href={PHONE_HREF} className="btn btn-secondary">
                Call Now - Free Quote
              </a>
            </div>
            <ul className="trust-inline">
              <li>Licensed &amp; Insured</li>
              <li>Same-Day Service</li>
              <li>Health Code Compliant</li>
            </ul>
          </div>

          <aside className="hero-card">
            <p className="card-kicker">Trusted by 100+ kitchens across Canada</p>
            <h2>{STARTING_PRICE}</h2>
            <p>{SOCIAL_PROOF}</p>
            <p className="phone-block">Call {PHONE_DISPLAY} for a direct quote and dispatch timing.</p>
          </aside>
        </div>
      </section>

      <section className="section-block">
        <div className="shell content-grid">
          <div className="content-card prose-card">
            <h2>Fast, compliant service without the runaround</h2>
            {intro.map((paragraph, index) => (
              <p key={paragraph}>{index === 0 ? emphasizeFirstKeyword(paragraph, keyword) : paragraph}</p>
            ))}
            <p className="alt-note">[ALT: technician performing grease trap cleaning in a Canadian commercial kitchen]</p>
          </div>

          <div className="content-card callout-card">
            <p className="card-kicker">Need a fast answer?</p>
            <p>Phone-only booking keeps things simple when the kitchen is busy.</p>
            <a href={PHONE_HREF} className="btn btn-primary wide">
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Service Scope</p>
            <h2>{servicesTitle}</h2>
          </div>
          <div className="card-grid four">
            {SERVICE_CARDS.map((card) => (
              <article key={card.title} className="content-card">
                <p className="icon-chip">[ICON]</p>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block muted-section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Why Choose Us</p>
            <h2>{whyTitle}</h2>
            <p>{whyIntro}</p>
          </div>
          <div className="card-grid three">
            {TRUST_POINTS.map((point) => (
              <article key={point.title} className="content-card">
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Our Process</p>
            <h2>How Our Grease Trap Cleaning Works</h2>
          </div>
          <div className="process-list">
            {PROCESS_STEPS.map((step, index) => (
              <article key={step} className="content-card">
                <p className="step-badge">0{index + 1}</p>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {pricingTitle ? (
        <section className="section-block">
          <div className="shell content-card">
            <div className="section-head left">
              <p className="eyebrow">Pricing</p>
              <h2>{pricingTitle}</h2>
              <p>{pricingIntro}</p>
            </div>
            <div className="pricing-table">
              {PRICING_ROWS.map((row) => (
                <div key={row.label} className="pricing-row">
                  <span>{row.label}</span>
                  <strong>{row.price}</strong>
                </div>
              ))}
            </div>
            <p className="pricing-note">All prices include waste disposal and compliance documentation.</p>
          </div>
        </section>
      ) : null}

      <section className="section-block accent-strip">
        <div className="shell split-cta">
          <div>
            <p className="eyebrow">Same-Day Help</p>
            <h2>Need service today?</h2>
            <p>Call {PHONE_DISPLAY} now and we will confirm availability, pricing, and the fastest practical dispatch window.</p>
          </div>
          <a href={PHONE_HREF} className="btn btn-primary">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <section className="section-block">
        <div className="shell content-card">
          <div className="section-head left">
            <p className="eyebrow">FAQs</p>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.q} className="faq-item">
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {serviceAreas?.length ? (
        <section className="section-block">
          <div className="shell content-card">
            <div className="section-head left">
              <p className="eyebrow">Service Areas</p>
              <h2>Areas We Serve Near This Market</h2>
            </div>
            <div className="service-area-list">
              {serviceAreas.map((area) => (
                <Link key={area.href} href={area.href} className="service-area-item">
                  <strong>{area.label}</strong>
                  <span>{area.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {internalLinks?.length ? (
        <section className="section-block">
          <div className="shell content-card">
            <div className="section-head left">
              <p className="eyebrow">Internal Links</p>
              <h2>Explore related pages</h2>
            </div>
            <div className="inline-links">
              {internalLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
