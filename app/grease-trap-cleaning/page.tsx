import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { ServicePage } from "@/components/service-page";
import { PHONE_E164, SITE_NAME, SOCIAL_PROOF, STATIC_PAGES } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

const page = STATIC_PAGES["grease-trap-cleaning"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "/grease-trap-cleaning" },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: absoluteUrl("/grease-trap-cleaning"),
    type: "website",
    siteName: SITE_NAME,
  },
};

export default function GreaseTrapCleaningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: SITE_NAME,
    description: page.metaDescription,
    url: absoluteUrl("/grease-trap-cleaning"),
    telephone: PHONE_E164,
    areaServed: { "@type": "Country", name: "Canada" },
    priceRange: "Starting at $199",
    slogan: SOCIAL_PROOF,
  };

  return (
    <>
      <JsonLd data={schema} />
      <ServicePage
        keyword="grease trap cleaning"
        heroTitle={page.heroTitle}
        heroSubtitle={page.heroSubtitle}
        intro={page.intro}
        whyTitle={`Why Choose ${SITE_NAME}`}
        whyIntro={page.whyIntro}
        faqs={page.faqs}
        internalLinks={[
          { href: "/grease-trap-cleaning-cost", label: "Grease Trap Cleaning Cost" },
          { href: "/restaurant-grease-trap-cleaning", label: "Restaurant Grease Trap Cleaning" },
          { href: "/emergency-grease-trap-cleaning", label: "Emergency Grease Trap Cleaning" },
          { href: "/blog/how-often-should-grease-trap-be-cleaned", label: "How Often Should a Grease Trap Be Cleaned?" },
        ]}
      />
    </>
  );
}
