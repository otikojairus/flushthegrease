import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { ServicePage } from "@/components/service-page";
import { PHONE_E164, SITE_NAME, STATIC_PAGES } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

const page = STATIC_PAGES["emergency-grease-trap-cleaning"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "/emergency-grease-trap-cleaning" },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: absoluteUrl("/emergency-grease-trap-cleaning"),
    type: "website",
    siteName: SITE_NAME,
  },
};

export default function EmergencyGreaseTrapCleaningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: SITE_NAME,
    description: page.metaDescription,
    url: absoluteUrl("/emergency-grease-trap-cleaning"),
    telephone: PHONE_E164,
    areaServed: { "@type": "Country", name: "Canada" },
    priceRange: "Starting at $199",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <>
      <JsonLd data={schema} />
      <ServicePage
        keyword="emergency grease trap cleaning"
        heroTitle={page.heroTitle}
        heroSubtitle={page.heroSubtitle}
        intro={page.intro}
        whyTitle="Why urgent kitchen calls come to us first"
        whyIntro={page.whyIntro}
        faqs={page.faqs}
        internalLinks={[
          { href: "/grease-trap-cleaning", label: "Grease Trap Cleaning" },
          { href: "/restaurant-grease-trap-cleaning", label: "Restaurant Grease Trap Cleaning" },
          { href: "/blog/grease-trap-smells-after-cleaning", label: "Why a Grease Trap Smells After Cleaning" },
        ]}
      />
    </>
  );
}
