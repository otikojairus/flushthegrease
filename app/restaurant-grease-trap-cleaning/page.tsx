import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { ServicePage } from "@/components/service-page";
import { PHONE_E164, SITE_NAME, STATIC_PAGES } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

const page = STATIC_PAGES["restaurant-grease-trap-cleaning"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "/restaurant-grease-trap-cleaning" },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: absoluteUrl("/restaurant-grease-trap-cleaning"),
    type: "website",
    siteName: SITE_NAME,
  },
};

export default function RestaurantGreaseTrapCleaningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: SITE_NAME,
    description: page.metaDescription,
    url: absoluteUrl("/restaurant-grease-trap-cleaning"),
    telephone: PHONE_E164,
    areaServed: { "@type": "Country", name: "Canada" },
    priceRange: "Starting at $199",
  };

  return (
    <>
      <JsonLd data={schema} />
      <ServicePage
        keyword="restaurant grease trap cleaning"
        heroTitle={page.heroTitle}
        heroSubtitle={page.heroSubtitle}
        intro={page.intro}
        whyTitle="Why restaurant kitchens trust FlushTheGrease"
        whyIntro={page.whyIntro}
        faqs={page.faqs}
        internalLinks={[
          { href: "/grease-trap-cleaning", label: "Grease Trap Cleaning" },
          { href: "/grease-trap-cleaning-cost", label: "Grease Trap Cleaning Cost" },
          { href: "/blog/grease-trap-cleaning-regulations-canada", label: "Grease Trap Cleaning Regulations In Canada" },
        ]}
      />
    </>
  );
}
