import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ServicePage } from "@/components/service-page";
import { CITY_PAGES, PHONE_E164, SITE_NAME, getCityPage, getNearbyCities } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

type PageProps = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  return CITY_PAGES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityPage(slug);

  if (!city) {
    return { title: "Page Not Found" };
  }

  const title = `Grease Trap Cleaning ${city.name}`;
  const description = `Grease trap cleaning in ${city.name}, ${city.provinceAbbr} for restaurants and commercial kitchens. Same-day service and compliance documents. Call 1-888-328-8990.`;

  return {
    title,
    description,
    alternates: { canonical: `/grease-trap-cleaning/${city.slug}` },
    openGraph: {
      title,
      description,
      url: absoluteUrl(`/grease-trap-cleaning/${city.slug}`),
      type: "website",
      siteName: SITE_NAME,
    },
  };
}

export default async function CityGreaseTrapCleaningPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCityPage(slug);

  if (!city) {
    notFound();
  }

  const nearby = getNearbyCities(city.slug);
  const healthAuthority = city.healthAuthority ?? `local public health and wastewater authorities in ${city.provinceName}`;
  const industries = city.industries?.join(", ") ?? "restaurants, hotel kitchens, food courts, franchise kitchens, and institutional food-service sites";
  const intro = [
    `If you need grease trap cleaning in ${city.name}, ${city.provinceAbbr}, you need a crew that understands how fast commercial kitchens can fall behind once grease buildup starts affecting drainage. FlushTheGrease helps ${city.name} restaurants, hotel kitchens, and food operators keep service moving with same-day support and clear documentation.`,
    `Commercial kitchens in and around ${city.name} answer to ${healthAuthority}, which is why local operators use scheduled cleaning to stay ahead of odours, overflow, and inspection pressure. We work with sites serving ${industries}, and we keep the process direct so managers can book fast by phone.`,
    `Whether your kitchen is overdue for routine service or facing a same-day emergency, we provide grease trap cleaning in ${city.name} with flat-rate quoting, compliant waste handling, and a realistic maintenance plan for your location.`,
  ];

  const faqs = [
    {
      q: `How often should a grease trap be cleaned in ${city.name}?`,
      a: `Most kitchens in ${city.name} need service every one to three months, but high-volume restaurants often need monthly visits. The right schedule depends on trap size, menu grease load, and how closely the site is monitored by ${healthAuthority}.`,
    },
    {
      q: `What is included in your grease trap cleaning service in ${city.name}?`,
      a: "We pump out grease and sludge, scrape the interceptor, inspect accessible components, and provide service documentation. If the trap shows unusual buildup or signs of a line issue, we explain it clearly before leaving the site.",
    },
    {
      q: `Do you provide compliance documentation for kitchens in ${city.name}?`,
      a: `Yes. Your visit includes records many operators keep on file for landlords, franchise reporting, and local health inspections. Good documentation makes it easier to show that the kitchen is maintaining the interceptor responsibly.`,
    },
    {
      q: `How much does grease trap cleaning cost in ${city.name}?`,
      a: "Pricing starts at $199 for small traps, with larger units priced based on size, buildup, and access. Emergency service may carry an added surcharge, but we explain the range before dispatch so you can approve the work confidently.",
    },
    {
      q: `How quickly can you respond in ${city.name}?`,
      a: `Same-day service is available in many markets, and emergency calls are prioritised. When you call 1-888-328-8990, we confirm urgency, access details, and the fastest practical response for your ${city.name} kitchen.`,
    },
    {
      q: `What types of businesses do you serve in ${city.name}?`,
      a: `We serve restaurants, hotel kitchens, food courts, commissaries, institutions, and franchise operators in ${city.name}. If your site produces grease wastewater, we can help you keep the trap clean and the kitchen operating properly.`,
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: SITE_NAME,
    description: `Grease trap cleaning in ${city.name}, ${city.provinceAbbr} for restaurants and commercial kitchens.`,
    url: absoluteUrl(`/grease-trap-cleaning/${city.slug}`),
    telephone: PHONE_E164,
    areaServed: {
      "@type": "City",
      name: city.name,
      addressRegion: city.provinceAbbr,
    },
    priceRange: "Starting at $199",
  };

  return (
    <>
      <JsonLd data={schema} />
      <ServicePage
        keyword={`grease trap cleaning ${city.name.toLowerCase()}`}
        heroTitle={`Grease Trap Cleaning ${city.name}`}
        heroSubtitle={`Same-day grease trap cleaning for ${city.name}, ${city.provinceAbbr} restaurants and commercial kitchens that need fast, compliant service.`}
        intro={intro}
        whyTitle={`Why ${city.name} businesses trust us`}
        whyIntro={`Commercial kitchens in ${city.name} need fast service, clean paperwork, and a crew that can work around busy prep and service windows.`}
        servicesTitle={`Our grease trap cleaning services in ${city.name}`}
        pricingTitle={`Grease Trap Cleaning Cost In ${city.name}`}
        pricingIntro={`Pricing in ${city.name} depends on trap size, grease volume, access, and whether the visit is routine or urgent. Scheduled service is usually the most cost-effective option for busy kitchens.`}
        faqs={faqs}
        serviceAreas={nearby.map((area) => ({
          href: `/grease-trap-cleaning/${area.slug}`,
          label: `${area.name}, ${area.provinceAbbr}`,
          description: `Grease trap cleaning support for kitchens near ${city.name}.`,
        }))}
        internalLinks={[
          { href: "/grease-trap-cleaning", label: "Grease Trap Cleaning Canada" },
          { href: "/grease-trap-cleaning-cost", label: "Grease Trap Cleaning Cost" },
          { href: "/restaurant-grease-trap-cleaning", label: "Restaurant Grease Trap Cleaning" },
          { href: "/emergency-grease-trap-cleaning", label: "Emergency Grease Trap Cleaning" },
        ]}
      />
    </>
  );
}
