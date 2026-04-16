import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { ServicePage } from "@/components/service-page";
import { PHONE_E164, SITE_NAME, STATIC_PAGES } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

const page = STATIC_PAGES["grease-trap-cleaning-cost"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "/grease-trap-cleaning-cost" },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: absoluteUrl("/grease-trap-cleaning-cost"),
    type: "website",
    siteName: SITE_NAME,
  },
};

export default function GreaseTrapCleaningCostPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: SITE_NAME,
      description: page.metaDescription,
      url: absoluteUrl("/grease-trap-cleaning-cost"),
      telephone: PHONE_E164,
      areaServed: { "@type": "Country", name: "Canada" },
      priceRange: "Starting at $199",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <ServicePage
        keyword="grease trap cleaning cost"
        heroTitle={page.heroTitle}
        heroSubtitle={page.heroSubtitle}
        intro={page.intro}
        whyTitle="Why operators trust our pricing process"
        whyIntro={page.whyIntro}
        pricingTitle="Grease Trap Cleaning Cost In Canada"
        pricingIntro={page.pricingIntro}
        faqs={page.faqs}
        internalLinks={[
          { href: "/grease-trap-cleaning", label: "Grease Trap Cleaning" },
          { href: "/restaurant-grease-trap-cleaning", label: "Restaurant Grease Trap Cleaning" },
          { href: "/emergency-grease-trap-cleaning", label: "Emergency Grease Trap Cleaning" },
        ]}
      />
    </>
  );
}
