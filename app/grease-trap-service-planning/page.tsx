import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { ServicePage } from "@/components/service-page";
import { PHONE_E164, SITE_NAME, STATIC_PAGES } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

const page = STATIC_PAGES["grease-trap-service-planning"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "/grease-trap-service-planning" },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: absoluteUrl("/grease-trap-service-planning"),
    type: "website",
    siteName: SITE_NAME,
  },
};

export default function GreaseTrapServicePlanningPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: SITE_NAME,
      description: page.metaDescription,
      url: absoluteUrl("/grease-trap-service-planning"),
      telephone: PHONE_E164,
      areaServed: { "@type": "Country", name: "Canada" },
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
        keyword="grease trap service planning"
        heroTitle={page.heroTitle}
        heroSubtitle={page.heroSubtitle}
        intro={page.intro}
        whyTitle="Why operators trust our service planning process"
        whyIntro={page.whyIntro}
        pricingTitle="Grease Trap Service Planning In Canada"
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
