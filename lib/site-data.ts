export const SITE_NAME = "FlushTheGrease";
export const SITE_URL = "https://flushthegrease.com";
export const PHONE_DISPLAY = "1-888-328-8990";
export const PHONE_E164 = "+18883288990";
export const PHONE_HREF = "tel:+18883288990";
export const STARTING_PRICE = "Starting at $199";
export const SOCIAL_PROOF = "5 years in business, 100+ clients served across Canada";

export type StaticPageSlug =
  | "grease-trap-cleaning"
  | "grease-trap-cleaning-cost"
  | "restaurant-grease-trap-cleaning"
  | "emergency-grease-trap-cleaning";

export type StaticPageContent = {
  slug: StaticPageSlug;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string[];
  whyIntro: string;
  pricingIntro?: string;
  faqs: Array<{ q: string; a: string }>;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  toc: Array<{ id: string; label: string }>;
  sections: Array<{ id: string; title: string; body: string[] }>;
  quote: string;
  conclusion: string;
  relatedPath: string;
  relatedLabel: string;
  faqs: Array<{ q: string; a: string }>;
};

export type CityPage = {
  slug: string;
  name: string;
  provinceName: string;
  provinceAbbr: string;
  healthAuthority: string;
  industries: string[];
};

export const SERVICE_CARDS = [
  {
    title: "Commercial Cleaning",
    description:
      "We pump, scrape, and wash grease traps thoroughly so you can keep wastewater flowing and avoid odour, backup, and inspection risk.",
  },
  {
    title: "Restaurant Service",
    description:
      "From quick-service chains to hotel kitchens, we work around prep schedules and busy service windows to reduce disruption.",
  },
  {
    title: "Emergency Response",
    description:
      "If your trap is overflowing or the kitchen cannot operate safely, we prioritise same-day dispatch and clear next steps.",
  },
  {
    title: "Preventive Maintenance",
    description:
      "Routine service plans help you stay compliant, avoid costly call-outs, and protect staff, customers, and equipment.",
  },
] as const;

export const TRUST_POINTS = [
  {
    title: "Licensed & Insured Technicians",
    description: "Every visit is handled by trained crews who work safely in active commercial kitchens.",
  },
  {
    title: "Health Code Compliance Guaranteed",
    description: "You receive documented cleaning, waste handling, and service notes that support inspection readiness.",
  },
  {
    title: "Transparent Flat-Rate Pricing",
    description: "We quote clearly before work starts, with no forms, no hidden admin fees, and no vague upsells.",
  },
  {
    title: "Same-Day & Emergency Service",
    description: "Urgent kitchen downtime gets priority scheduling so you can get back to service faster.",
  },
  {
    title: "Eco-Friendly Disposal",
    description: "Removed grease and waste are transported and disposed of using compliant commercial handling practices.",
  },
  {
    title: "Serving Kitchens Across Canada",
    description: "We support restaurants, food courts, hotels, and franchise groups in major Canadian markets.",
  },
] as const;

export const PROCESS_STEPS = [
  "Call 1-888-328-8990 and tell us the trap size, site type, and urgency level.",
  "We confirm access, inspect the grease interceptor, and flag any overflow, odour, or blockage risks.",
  "Your technician pumps out solids and liquids, scrapes the walls and baffles, and cleans the unit properly.",
  "Waste is removed for compliant disposal and your service documentation is prepared before the crew leaves.",
  "If needed, we outline a maintenance schedule so you can avoid future shutdowns and keep inspectors satisfied.",
] as const;

export const PRICING_ROWS = [
  { label: "Small trap (under 50 gal)", price: "Starting at $199" },
  { label: "Medium trap (50-100 gal)", price: "Starting at $299" },
  { label: "Large trap (100-500 gal)", price: "Starting at $449" },
  { label: "Emergency call-out", price: "Additional surcharge applies" },
] as const;

export const STATIC_PAGES: Record<StaticPageSlug, StaticPageContent> = {
  "grease-trap-cleaning": {
    slug: "grease-trap-cleaning",
    title: "Grease Trap Cleaning Canada",
    metaTitle: "Grease Trap Cleaning Canada | Call 24/7",
    metaDescription:
      "Grease trap cleaning across Canada for restaurants and commercial kitchens. Same-day service, flat-rate pricing, and phone-only quotes at 1-888-328-8990.",
    heroTitle: "Grease Trap Cleaning Across Canada",
    heroSubtitle:
      "Keep your kitchen open, compliant, and free from overflow risk with licensed grease trap cleaning and maintenance.",
    intro: [
      "If your trap is full, slow-draining, or starting to smell, **grease trap cleaning** cannot wait. Restaurant managers and commercial kitchen teams need a contractor who shows up quickly, works cleanly, and leaves behind the paperwork needed for compliance.",
      "FlushTheGrease provides commercial grease trap cleaning for restaurants, hotels, food courts, and franchise operators across Canada. You get same-day scheduling when available, flat-rate pricing, and technicians who understand how to work around active kitchen operations.",
      "Whether you manage one location or multiple sites, we help you stay ahead of local health authority inspections, reduce odour complaints, and prevent messy emergency shutdowns.",
    ],
    whyIntro:
      "You need a contractor that keeps the process simple: one call, one clear quote, one crew that handles the dirty work properly.",
    faqs: [
      {
        q: "How often should a grease trap be cleaned in Canada?",
        a: "Most commercial kitchens need service every one to three months, but the right schedule depends on trap size, menu type, and grease output. High-volume kitchens often need more frequent cleaning to stay compliant and avoid odours or backups.",
      },
      {
        q: "What is included in your grease trap cleaning service?",
        a: "We pump out the trap, remove solids and sludge, scrape interior surfaces, inspect baffles and access points, and prepare disposal and service documentation. If we see signs of damage or unusual buildup, we explain the issue before leaving.",
      },
      {
        q: "Do you provide compliance documentation?",
        a: "Yes. Your visit includes service records that support health code and waste-handling compliance. Many operators keep these documents on file for inspections, franchise reporting, and internal maintenance logs.",
      },
      {
        q: "How quickly can you respond?",
        a: "Same-day service is available in many markets, and emergency calls are prioritised 24/7. When you call 1-888-328-8990, we confirm urgency, access details, and the fastest practical arrival window.",
      },
      {
        q: "What types of businesses do you serve?",
        a: "We work with restaurants, hotel kitchens, commissaries, food courts, cafeterias, care facilities, and other commercial food operations. If your site produces grease wastewater, we can help keep the interceptor clean and functioning properly.",
      },
    ],
  },
  "grease-trap-cleaning-cost": {
    slug: "grease-trap-cleaning-cost",
    title: "Grease Trap Cleaning Cost",
    metaTitle: "Grease Trap Cleaning Cost | Pricing Guide",
    metaDescription:
      "See grease trap cleaning cost ranges in Canada, what affects pricing, and when emergency surcharges apply. Call 1-888-328-8990 for a free quote.",
    heroTitle: "Grease Trap Cleaning Cost In Canada",
    heroSubtitle:
      "Understand what affects grease trap cleaning prices before you book, from trap size to service frequency and emergency timing.",
    intro: [
      "If you are comparing **grease trap cleaning cost**, the biggest drivers are trap size, how full the unit is, and whether the visit is routine or urgent. A small interceptor that is serviced on schedule costs less to clean than a neglected unit packed with solids.",
      "FlushTheGrease starts pricing at $199 for smaller units and keeps quoting straightforward. You will know what is included, what the emergency surcharge covers, and whether a maintenance schedule could lower your long-term spend.",
      "For busy operators, the cheapest call is rarely the most affordable outcome. Preventive service helps you avoid kitchen downtime, odour complaints, blocked lines, and expensive emergency dispatches.",
    ],
    whyIntro:
      "Pricing should help you plan, not confuse you. We explain the real variables that change cost so you can budget with confidence.",
    pricingIntro:
      "Routine service is usually the most cost-effective option because the trap is easier to pump, clean, and document. Larger units, excessive buildup, difficult access, and after-hours call-outs can increase the final price.",
    faqs: [
      {
        q: "How much does grease trap cleaning cost?",
        a: "Small traps typically start at $199, medium traps at $299, and larger commercial units at $449 and up. The final amount depends on capacity, grease volume, access conditions, and whether the job is routine or emergency service.",
      },
      {
        q: "What is included in the quoted price?",
        a: "Our pricing includes pumping, cleaning, waste disposal, and compliance documentation. If a site has unusual access restrictions or needs emergency attendance after hours, we explain that before dispatch so there are no surprises.",
      },
      {
        q: "Does regular maintenance lower grease trap cleaning prices?",
        a: "Yes. Traps that are cleaned on schedule are faster to service and far less likely to need emergency pumping or line clearing. That usually means lower cost per visit and fewer disruptions to your kitchen.",
      },
      {
        q: "What causes an emergency surcharge?",
        a: "Emergency pricing applies when you need immediate dispatch, overnight service, or urgent response during weekends or holidays. Those calls require technician availability on short notice and are priced separately from planned maintenance visits.",
      },
      {
        q: "Can you quote by phone?",
        a: "Yes. Call 1-888-328-8990 with your trap size, kitchen type, and urgency. We will give you a fast quote range and let you know if we need any extra site details before dispatch.",
      },
    ],
  },
  "restaurant-grease-trap-cleaning": {
    slug: "restaurant-grease-trap-cleaning",
    title: "Restaurant Grease Trap Cleaning",
    metaTitle: "Restaurant Grease Trap Cleaning | Canada",
    metaDescription:
      "Restaurant grease trap cleaning for commercial kitchens, hotels, and food courts across Canada. Same-day support and compliance-focused service. Call 1-888-328-8990.",
    heroTitle: "Restaurant Grease Trap Cleaning",
    heroSubtitle:
      "Protect service hours, staff safety, and inspection readiness with grease trap cleaning built for working commercial kitchens.",
    intro: [
      "Busy kitchens produce grease fast, which means **restaurant grease trap cleaning** needs to be consistent, documented, and timed around service. If the trap is neglected, you risk odours, drainage problems, pest issues, and failed inspections that hit revenue immediately.",
      "FlushTheGrease works with restaurants, hotel kitchens, food courts, bars, cafeterias, and franchise groups across Canada. We schedule around prep windows when possible and keep the job moving so your team can stay focused on service.",
      "Whether you run a single neighbourhood restaurant or a multi-site brand, we help you build a maintenance rhythm that supports compliance and keeps your kitchen operating cleanly.",
    ],
    whyIntro:
      "Commercial kitchens need more than a pump-out. They need a partner that understands service rushes, access constraints, and inspection pressure.",
    faqs: [
      {
        q: "Do you clean grease traps for all types of restaurants?",
        a: "Yes. We service full-service restaurants, quick-service chains, hotel kitchens, food courts, commissaries, and institutional kitchens. If your operation produces greasy wastewater, we can clean and maintain the trap properly.",
      },
      {
        q: "Can service be scheduled outside peak kitchen hours?",
        a: "Whenever possible, yes. Many restaurant managers prefer early morning, mid-afternoon, or after-service visits so the crew can work with less disruption. Call us and we will match the schedule to your operating reality.",
      },
      {
        q: "What if our restaurant has multiple grease traps?",
        a: "We can clean multiple units during the same visit and document each one separately if needed. This is common for larger kitchens, hotel operations, and multi-tenant food service sites.",
      },
      {
        q: "Do you provide documentation for restaurant inspections?",
        a: "Yes. We leave service records that many operators keep for local health inspections, landlord requirements, and internal audit files. Good documentation helps demonstrate that your maintenance program is active and current.",
      },
      {
        q: "How often should a restaurant grease trap be cleaned?",
        a: "Many restaurants need monthly or bi-monthly service, especially if they fry heavily or serve high-volume dinner traffic. The right schedule depends on trap size, menu, and grease loading patterns.",
      },
    ],
  },
  "emergency-grease-trap-cleaning": {
    slug: "emergency-grease-trap-cleaning",
    title: "Emergency Grease Trap Cleaning",
    metaTitle: "Emergency Grease Trap Cleaning | 24/7",
    metaDescription:
      "Emergency grease trap cleaning with same-day and 24/7 response for kitchens facing overflow, odours, or shutdown risk. Call 1-888-328-8990 now.",
    heroTitle: "Emergency Grease Trap Cleaning",
    heroSubtitle:
      "Get fast help when a full trap, bad odour, or wastewater backup is putting your kitchen at risk right now.",
    intro: [
      "When you need **emergency grease trap cleaning**, every hour matters. Overflowing grease, strong odours, slow drainage, or a backed-up sink line can force your kitchen to stop service and create an immediate health and safety issue.",
      "FlushTheGrease is available 24/7 for urgent commercial kitchen response. We move quickly, explain what the crew needs before arrival, and focus on restoring safe operation as fast as the site conditions allow.",
      "If your restaurant cannot open, continue prep, or pass an inspection without immediate service, call 1-888-328-8990 now. We will triage the issue and dispatch the fastest available crew.",
    ],
    whyIntro:
      "In an emergency, you need direct answers and a clear arrival plan. We keep the call simple and move to action quickly.",
    faqs: [
      {
        q: "What counts as a grease trap emergency?",
        a: "Overflow, wastewater backup, severe odour, grease coming up through floor drains, or a trap so full that the kitchen cannot operate safely are all common emergency triggers. If service cannot continue normally, call us immediately.",
      },
      {
        q: "Are you really available 24/7?",
        a: "Yes. Emergency grease trap cleaning is available 24/7/365. Call 1-888-328-8990 any time and we will confirm urgency, location, and the fastest available response window.",
      },
      {
        q: "What should we do before the crew arrives?",
        a: "Limit grease-producing activity if possible, keep the access point clear, and make sure a manager is available to confirm the issue on arrival. We will tell you anything else that matters during the call.",
      },
      {
        q: "How quickly can you respond to an emergency call?",
        a: "Response time depends on your market, access conditions, and current dispatch load, but urgent shutdown-risk calls are prioritised. We will always give you the clearest possible arrival expectation before we send a crew.",
      },
      {
        q: "Do emergency visits include documentation?",
        a: "Yes. Even urgent service includes cleaning records and disposal documentation where applicable. If the crew finds additional mechanical or plumbing concerns, those are noted so you can plan the next step properly.",
      },
    ],
  },
};

export const CITY_PAGES: CityPage[] = [
  { slug: "winnipeg", name: "Winnipeg", provinceName: "Manitoba", provinceAbbr: "MB", healthAuthority: "Winnipeg Regional Health Authority", industries: ["food manufacturing plants", "casual dining chains", "hotel kitchens"] },
  { slug: "calgary", name: "Calgary", provinceName: "Alberta", provinceAbbr: "AB", healthAuthority: "Alberta Health Services", industries: ["hotel kitchens", "oil and gas cafeterias", "restaurant groups"] },
  { slug: "vancouver", name: "Vancouver", provinceName: "British Columbia", provinceAbbr: "BC", healthAuthority: "Vancouver Coastal Health", industries: ["high-density restaurant districts", "sushi restaurants", "hotel kitchens"] },
  { slug: "toronto", name: "Toronto", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "Toronto Public Health", industries: ["downtown restaurants", "food courts", "franchise kitchens"] },
  { slug: "edmonton", name: "Edmonton", provinceName: "Alberta", provinceAbbr: "AB", healthAuthority: "Alberta Health Services", industries: ["arena concessions", "hotel kitchens", "institutional cafeterias"] },
  { slug: "ottawa", name: "Ottawa", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "Ottawa Public Health", industries: ["government campus cafeterias", "hotel kitchens", "downtown restaurants"] },
  { slug: "montreal", name: "Montreal", provinceName: "Quebec", provinceAbbr: "QC", healthAuthority: "Direction regionale de sante publique de Montreal", industries: ["bistros", "hotel kitchens", "multi-unit food halls"] },
  { slug: "mississauga", name: "Mississauga", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "Peel Public Health", industries: ["airport-area kitchens", "franchise chains", "large commissaries"] },
  { slug: "hamilton", name: "Hamilton", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "Hamilton Public Health", industries: ["pub kitchens", "hospitality venues", "care facility kitchens"] },
  { slug: "burnaby", name: "Burnaby", provinceName: "British Columbia", provinceAbbr: "BC", healthAuthority: "Fraser Health", industries: ["mall food courts", "casual dining", "institutional kitchens"] },
  { slug: "victoria", name: "Victoria", provinceName: "British Columbia", provinceAbbr: "BC", healthAuthority: "Island Health", industries: ["tourism dining", "hotel kitchens", "waterfront restaurants"] },
  { slug: "kelowna", name: "Kelowna", provinceName: "British Columbia", provinceAbbr: "BC", healthAuthority: "Interior Health", industries: ["winery kitchens", "tourism restaurants", "hotel dining rooms"] },
  { slug: "surrey", name: "Surrey", provinceName: "British Columbia", provinceAbbr: "BC", healthAuthority: "Fraser Health", industries: ["banquet kitchens", "franchise operators", "high-volume takeout kitchens"] },
  { slug: "abbotsford", name: "Abbotsford", provinceName: "British Columbia", provinceAbbr: "BC", healthAuthority: "Fraser Health", industries: ["family restaurants", "food processing kitchens", "truck stop diners"] },
  { slug: "langley", name: "Langley", provinceName: "British Columbia", provinceAbbr: "BC", healthAuthority: "Fraser Health", industries: ["brewpub kitchens", "franchise restaurants", "event venues"] },
  { slug: "chilliwack", name: "Chilliwack", provinceName: "British Columbia", provinceAbbr: "BC", healthAuthority: "Fraser Health", industries: ["family dining", "highway service kitchens", "institutional cafeterias"] },
  { slug: "coquitlam", name: "Coquitlam", provinceName: "British Columbia", provinceAbbr: "BC", healthAuthority: "Fraser Health", industries: ["shopping-centre kitchens", "quick-service restaurants", "franchise groups"] },
  { slug: "richmond", name: "Richmond", provinceName: "British Columbia", provinceAbbr: "BC", healthAuthority: "Vancouver Coastal Health", industries: ["airport hospitality kitchens", "seafood restaurants", "food court operators"] },
  { slug: "new-westminster", name: "New Westminster", provinceName: "British Columbia", provinceAbbr: "BC", healthAuthority: "Fraser Health", industries: ["brewpub kitchens", "care facility kitchens", "downtown restaurants"] },
  { slug: "delta", name: "Delta", provinceName: "British Columbia", provinceAbbr: "BC", healthAuthority: "Fraser Health", industries: ["industrial cafeterias", "hotel kitchens", "family restaurants"] },
  { slug: "maple-ridge", name: "Maple Ridge", provinceName: "British Columbia", provinceAbbr: "BC", healthAuthority: "Fraser Health", industries: ["independent restaurants", "pub kitchens", "community facility kitchens"] },
  { slug: "west-kelowna", name: "West Kelowna", provinceName: "British Columbia", provinceAbbr: "BC", healthAuthority: "Interior Health", industries: ["tourism kitchens", "wineries", "family dining restaurants"] },
  { slug: "langford", name: "Langford", provinceName: "British Columbia", provinceAbbr: "BC", healthAuthority: "Island Health", industries: ["growing restaurant plazas", "pub kitchens", "franchise operators"] },
  { slug: "victoria-bc", name: "Victoria BC", provinceName: "British Columbia", provinceAbbr: "BC", healthAuthority: "Island Health", industries: ["tourism dining", "hotel kitchens", "busy downtown restaurants"] },
  { slug: "vancouver-island", name: "Vancouver Island", provinceName: "British Columbia", provinceAbbr: "BC", healthAuthority: "Island Health", industries: ["resort kitchens", "pubs", "coastal restaurants"] },
  { slug: "sherwood-park-ab", name: "Sherwood Park", provinceName: "Alberta", provinceAbbr: "AB", healthAuthority: "Strathcona County and Alberta Health Services", industries: ["sports facility kitchens", "casual dining chains", "institutional cafeterias"] },
  { slug: "red-deer", name: "Red Deer", provinceName: "Alberta", provinceAbbr: "AB", healthAuthority: "Alberta Health Services", industries: ["roadside restaurants", "hotel kitchens", "care facility kitchens"] },
  { slug: "bonnyville", name: "Bonnyville", provinceName: "Alberta", provinceAbbr: "AB", healthAuthority: "Alberta Health Services", industries: ["work camp kitchens", "local diners", "institutional food service"] },
  { slug: "kitchener", name: "Kitchener", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "Region of Waterloo Public Health", industries: ["tech campus cafeterias", "brewpub kitchens", "franchise restaurants"] },
  { slug: "markham", name: "Markham", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "York Region Public Health", industries: ["mall food courts", "banquet kitchens", "franchise operators"] },
  { slug: "scarborough", name: "Scarborough", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "Toronto Public Health", industries: ["strip-plaza restaurants", "takeout kitchens", "multi-unit food halls"] },
  { slug: "etobicoke", name: "Etobicoke", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "Toronto Public Health", industries: ["airport-adjacent hotels", "franchise kitchens", "event venues"] },
  { slug: "ajax", name: "Ajax", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "Durham Region Health", industries: ["casual dining", "retail plaza restaurants", "community facility kitchens"] },
  { slug: "oakville", name: "Oakville", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "Halton Region Health", industries: ["waterfront dining", "golf club kitchens", "franchise restaurants"] },
  { slug: "brampton", name: "Brampton", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "Peel Public Health", industries: ["large banquet kitchens", "takeout restaurants", "franchise operators"] },
  { slug: "st-catharines", name: "St. Catharines", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "Niagara Region Public Health", industries: ["tourism restaurants", "brewpub kitchens", "hotel dining rooms"] },
  { slug: "burlington", name: "Burlington", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "Halton Region Health", industries: ["mall restaurants", "hotel kitchens", "care facility food service"] },
  { slug: "oshawa", name: "Oshawa", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "Durham Region Health", industries: ["campus cafeterias", "casual dining", "institutional kitchens"] },
  { slug: "kingston", name: "Kingston", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "Kingston, Frontenac, Lennox and Addington Public Health", industries: ["student-area restaurants", "hotel kitchens", "institutional food service"] },
  { slug: "sudbury", name: "Sudbury", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "Public Health Sudbury and Districts", industries: ["camp kitchens", "casual dining", "institutional cafeterias"] },
  { slug: "london-ontario", name: "London", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "Middlesex-London Health Unit", industries: ["student dining", "hotel kitchens", "healthcare food service"] },
  { slug: "windsor-ontario", name: "Windsor", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "Windsor-Essex County Health Unit", industries: ["border hospitality", "casino kitchens", "franchise restaurants"] },
  { slug: "cambridge", name: "Cambridge", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "Region of Waterloo Public Health", industries: ["industrial cafeterias", "family dining", "event venue kitchens"] },
  { slug: "niagara", name: "Niagara", provinceName: "Ontario", provinceAbbr: "ON", healthAuthority: "Niagara Region Public Health", industries: ["tourism dining", "hotel kitchens", "wineries"] },
  { slug: "moncton", name: "Moncton", provinceName: "New Brunswick", provinceAbbr: "NB", healthAuthority: "Vitalite Health Network", industries: ["hotel kitchens", "family restaurants", "care facility food service"] },
  { slug: "sackville", name: "Sackville", provinceName: "New Brunswick", provinceAbbr: "NB", healthAuthority: "Vitalite Health Network", industries: ["campus dining", "local diners", "care home kitchens"] },
  { slug: "halifax", name: "Halifax", provinceName: "Nova Scotia", provinceAbbr: "NS", healthAuthority: "Nova Scotia Environment and Climate Change", industries: ["waterfront restaurants", "hotel kitchens", "seafood operations"] },
  { slug: "bridgewater", name: "Bridgewater", provinceName: "Nova Scotia", provinceAbbr: "NS", healthAuthority: "Nova Scotia Environment and Climate Change", industries: ["community restaurants", "care facility kitchens", "franchise operators"] },
  { slug: "gatineau", name: "Gatineau", provinceName: "Quebec", provinceAbbr: "QC", healthAuthority: "CISSS de l'Outaouais", industries: ["government cafeterias", "hotel kitchens", "downtown restaurants"] },
  { slug: "saskatoon", name: "Saskatoon", provinceName: "Saskatchewan", provinceAbbr: "SK", healthAuthority: "Saskatchewan Health Authority", industries: ["campus kitchens", "family dining", "hotel restaurants"] },
  { slug: "whitehorse", name: "Whitehorse", provinceName: "Yukon", provinceAbbr: "YT", healthAuthority: "Yukon Environmental Health", industries: ["tourism kitchens", "lodges", "community dining rooms"] },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-clean-a-grease-trap",
    title: "How to Clean a Grease Trap Safely",
    description:
      "Learn how grease traps are cleaned, what steps are safe for staff, and when commercial kitchens should call a licensed service provider.",
    intro:
      "Cleaning a grease trap sounds simple until you are dealing with odour, sludge, wastewater, and compliance rules at the same time. This guide explains what professional grease trap cleaning involves, what your team can handle safely, and when it is smarter to call for licensed service before the kitchen loses time.",
    toc: [
      { id: "what-it-is", label: "What grease trap cleaning includes" },
      { id: "safe-steps", label: "Safe steps before service" },
      { id: "when-to-call", label: "When to call a professional" },
      { id: "mistakes", label: "Mistakes that create bigger problems" },
    ],
    sections: [
      {
        id: "what-it-is",
        title: "What grease trap cleaning actually includes",
        body: [
          "A full cleaning is more than skimming grease off the top. The trap needs to be pumped out completely, with solids, sludge, and floating fats removed before the interior walls, baffles, and lids are scraped and checked.",
          "Commercial kitchens usually need documentation after the visit because local inspectors and landlords often want proof that grease waste was removed properly. That is one reason many operators leave the work to a licensed provider instead of asking staff to improvise.",
        ],
      },
      {
        id: "safe-steps",
        title: "Safe steps your team can take before service arrives",
        body: [
          "Your staff can clear access to the interceptor, reduce grease-producing activity, and note symptoms such as odour, backup, or slow drainage. Those details help the technician understand whether the issue is routine buildup or a possible blockage.",
          "What your team should not do is dump chemicals into the system or wash grease deeper into the line. Quick fixes often make the problem worse and can complicate disposal and inspection records later.",
        ],
      },
      {
        id: "when-to-call",
        title: "When to call a professional grease trap cleaning company",
        body: [
          "Call a professional if the trap is overdue, odours are noticeable in the kitchen, wastewater is backing up, or the site is due for an inspection. If the trap is nearly full, waiting can force an emergency shutdown during service hours.",
          "Professional cleaning is also the better choice when you need waste disposal records, proof of maintenance, or a clear schedule for future visits. Those details matter for franchise operators and busy multi-site kitchens.",
        ],
      },
      {
        id: "mistakes",
        title: "Mistakes that create bigger grease trap problems",
        body: [
          "The most common mistake is leaving the trap too long between visits. Once grease hardens and solids compact, the job becomes slower, dirtier, and more expensive than a routine maintenance visit.",
          "Another mistake is treating odour as the only warning sign. By the time the smell is obvious, the trap may already be affecting drainage, kitchen hygiene, and inspection readiness.",
        ],
      },
    ],
    quote: "Routine grease trap cleaning is almost always cheaper than emergency downtime.",
    conclusion:
      "If your team is dealing with odour, overflow risk, or an overdue service schedule, act before it turns into a shutdown. A professional visit keeps the cleaning process safe, documented, and much easier on your kitchen schedule.",
    relatedPath: "/grease-trap-cleaning",
    relatedLabel: "Grease Trap Cleaning",
    faqs: [
      {
        q: "Can kitchen staff clean a grease trap themselves?",
        a: "Staff can help with access and observation, but full commercial grease trap cleaning is usually better handled by a licensed contractor. Proper pumping, waste disposal, and documentation are the parts most operators do not want to manage internally.",
      },
      {
        q: "What tools are used to clean a grease trap?",
        a: "Professional crews typically use pumping equipment, scraping tools, wash-down gear, and sealed containers or hoses designed for grease waste removal. The exact setup depends on trap size and access conditions.",
      },
      {
        q: "How long does grease trap cleaning take?",
        a: "Many routine visits are finished in under two hours, but timing changes with trap size, buildup level, and access. Emergency jobs or neglected traps can take longer because the waste is heavier and the cleaning is more involved.",
      },
    ],
  },
  {
    slug: "how-often-should-grease-trap-be-cleaned",
    title: "How Often Should a Grease Trap Be Cleaned?",
    description:
      "Find the right grease trap cleaning schedule for restaurants and commercial kitchens based on trap size, menu volume, and inspection risk.",
    intro:
      "There is no single grease trap cleaning schedule that fits every kitchen. The right frequency depends on how much grease your menu creates, how large the interceptor is, and how closely your site is monitored for odour, overflow, or local compliance issues.",
    toc: [
      { id: "typical-schedule", label: "Typical cleaning schedules" },
      { id: "signs", label: "Signs your trap needs service sooner" },
      { id: "high-volume", label: "High-volume kitchen planning" },
      { id: "documentation", label: "Why records matter" },
    ],
    sections: [
      {
        id: "typical-schedule",
        title: "Typical grease trap cleaning schedules",
        body: [
          "Many restaurants are serviced every month or every two months. Smaller or lower-volume sites may stretch to quarterly cleaning, but only if grease levels stay controlled and the trap is inspected regularly.",
          "A good rule is to avoid letting solids and grease occupy too much of the unit. Once buildup becomes heavy, odour, drainage issues, and emergency costs become far more likely.",
        ],
      },
      {
        id: "signs",
        title: "Signs your trap needs service sooner",
        body: [
          "Strong odours, slower drains, grease around the lid, wastewater backup, or repeated sink issues all point to a trap that may already be overdue. Those warning signs usually appear before a full shutdown, which is why early service matters.",
          "Inspection timing is another reason to bring service forward. If a local authority visit is approaching, many operators clean first so records are current and the kitchen is easier to present.",
        ],
      },
      {
        id: "high-volume",
        title: "How high-volume kitchens should plan",
        body: [
          "Fry-heavy menus, buffet service, hotel breakfast programs, and multi-shift kitchens usually need more frequent visits than lower-output operations. Those sites produce grease faster and can overwhelm a trap surprisingly quickly.",
          "The safest approach is to set a maintenance schedule based on real usage, then review it after a few service cycles. If buildup is heavier than expected, shorten the interval before it becomes a compliance problem.",
        ],
      },
      {
        id: "documentation",
        title: "Why the service record matters as much as the cleaning",
        body: [
          "Service records help show that your kitchen follows an active maintenance schedule. That can matter for inspections, landlord files, franchise reporting, and internal operations planning.",
          "A documented schedule also helps you budget better because you can compare routine service cost against the much higher cost of emergency pumping or forced downtime.",
        ],
      },
    ],
    quote: "If you only clean the trap after it smells, you are already late.",
    conclusion:
      "The right cleaning frequency keeps your kitchen predictable, not reactive. When you set a realistic schedule and keep records current, grease trap service becomes a routine operating task instead of a crisis.",
    relatedPath: "/grease-trap-cleaning-cost",
    relatedLabel: "Grease Trap Cleaning Cost",
    faqs: [
      {
        q: "How often should a restaurant grease trap be cleaned?",
        a: "Many restaurants need monthly or bi-monthly service, especially if they run fryers, high-volume prep, or long service hours. Lower-output kitchens may be able to schedule quarterly visits, but only if grease levels stay controlled.",
      },
      {
        q: "Can a trap be cleaned too often?",
        a: "Cleaning too often is less common than waiting too long. Most operators benefit from a schedule based on actual grease output, because routine visits are easier to manage than emergency shutdowns or inspection problems.",
      },
      {
        q: "What happens if a grease trap is not cleaned often enough?",
        a: "You increase the risk of odours, wastewater backup, line blockage, pest attraction, and failed inspections. Delayed cleaning also makes the service messier and can raise the final cost.",
      },
    ],
  },
  {
    slug: "grease-trap-cleaning-regulations-canada",
    title: "Grease Trap Cleaning Regulations In Canada",
    description:
      "A practical overview of grease trap cleaning requirements, inspection expectations, and documentation habits for Canadian commercial kitchens.",
    intro:
      "Grease trap cleaning regulations in Canada are shaped by local health authorities, municipal wastewater rules, and the practical expectation that kitchens manage grease before it hits the sewer. This article breaks down what operators usually need to show, what records matter, and why regular cleaning protects more than compliance.",
    toc: [
      { id: "who-regulates", label: "Who regulates grease trap maintenance" },
      { id: "records", label: "Records kitchens should keep" },
      { id: "frequency", label: "How frequency ties to compliance" },
      { id: "common-risks", label: "Common compliance risks" },
    ],
    sections: [
      {
        id: "who-regulates",
        title: "Who regulates grease trap maintenance",
        body: [
          "In most markets, kitchens answer to a mix of municipal wastewater rules and local health inspection standards. The exact wording can vary by province or city, but the underlying expectation is consistent: grease waste must be captured, removed, and handled properly.",
          "That is why commercial operators should think beyond the trap itself. Inspectors care about odour, cleanliness, maintenance records, and whether the site is creating avoidable sanitation issues.",
        ],
      },
      {
        id: "records",
        title: "The records operators should keep on file",
        body: [
          "A service log with dates, provider details, and disposal documentation is one of the simplest ways to show that grease trap maintenance is current. Many operators also track trap size, service frequency, and any notes about unusual buildup or damage.",
          "Keeping these records accessible makes inspections easier and helps management spot patterns, such as locations that need more frequent service because of menu changes or increased throughput.",
        ],
      },
      {
        id: "frequency",
        title: "Why cleaning frequency is part of compliance",
        body: [
          "A trap that is technically installed but rarely cleaned still creates compliance risk. If grease is escaping, odours are spreading, or wastewater is backing up, the kitchen is not meeting the practical goal of the interceptor system.",
          "Routine service is therefore part of regulatory compliance, not just maintenance. It is how you demonstrate that the system is doing its job.",
        ],
      },
      {
        id: "common-risks",
        title: "Common grease trap compliance risks",
        body: [
          "The biggest risks are poor record keeping, delayed service, inaccessible trap lids, and relying on additives instead of proper cleaning. Those shortcuts often show up during inspections or after a drainage problem becomes obvious.",
          "Operators who clean on schedule and keep documentation current usually have far fewer surprises. The process is easier for staff, managers, landlords, and inspectors alike.",
        ],
      },
    ],
    quote: "Compliance is not just about having a grease trap. It is about proving that it is maintained.",
    conclusion:
      "If you treat grease trap cleaning as a documented operating routine, compliance becomes much easier to manage. Clear service records and a realistic schedule protect your kitchen from avoidable regulatory pressure.",
    relatedPath: "/restaurant-grease-trap-cleaning",
    relatedLabel: "Restaurant Grease Trap Cleaning",
    faqs: [
      {
        q: "Do grease trap cleaning regulations differ by city?",
        a: "Yes. Local wording and inspection focus can vary, but most jurisdictions expect kitchens to control grease discharge, maintain the interceptor, and keep records showing that cleaning is current and properly handled.",
      },
      {
        q: "What documents should a kitchen keep after grease trap cleaning?",
        a: "At minimum, keep service dates, provider details, and waste disposal or maintenance records. Those documents help support inspections and prove that the interceptor is being maintained as part of normal operations.",
      },
      {
        q: "Can a kitchen be cited for poor grease trap maintenance?",
        a: "Yes. If a site shows odour, sanitation issues, wastewater backup, or missing maintenance records, poor grease trap management can become part of a broader compliance problem during inspection.",
      },
    ],
  },
  {
    slug: "grease-trap-smells-after-cleaning",
    title: "Why a Grease Trap Smells After Cleaning",
    description:
      "Learn why grease trap odours can linger after service and what kitchens should check when smells return too quickly.",
    intro:
      "A grease trap that smells after cleaning usually means there is another issue still in play. The trap may not have been fully cleaned, grease could be sitting elsewhere in the line, or the kitchen may already be back to overloading the interceptor faster than expected.",
    toc: [
      { id: "lingering-odour", label: "Why odour can linger" },
      { id: "trap-vs-line", label: "Trap issue or drainage issue?" },
      { id: "when-urgent", label: "When the smell is urgent" },
      { id: "prevent-return", label: "How to stop odour returning" },
    ],
    sections: [
      {
        id: "lingering-odour",
        title: "Why odour can linger after a cleaning visit",
        body: [
          "If the trap was not fully pumped, scraped, and cleaned, residue can stay behind and start smelling again quickly. Odour can also come from surrounding drain lines, floor drains, or grease buildup under lids and seals that were not addressed properly.",
          "In some kitchens, the smell returns because the trap is simply too small for the volume of grease being produced. In that case, cleaning helps temporarily but the underlying overload problem remains.",
        ],
      },
      {
        id: "trap-vs-line",
        title: "How to tell whether the trap or the line is the problem",
        body: [
          "A trap-related smell is often strongest near the interceptor lid or sink area. If the odour spreads through several fixtures or returns along with slow drainage, there may also be a line blockage or grease accumulation beyond the trap.",
          "That distinction matters because pumping the trap alone will not fix a downstream line issue. A technician may need to inspect both before the kitchen gets reliable relief.",
        ],
      },
      {
        id: "when-urgent",
        title: "When grease trap odour should be treated as urgent",
        body: [
          "If the smell is severe, staff are complaining, customers can notice it, or wastewater is draining poorly, treat it as urgent. Odour is often the first warning sign before a more disruptive sanitation problem appears.",
          "A persistent smell after cleaning can also point to incomplete work. In that case, a follow-up assessment helps confirm what was missed and what needs to happen next.",
        ],
      },
      {
        id: "prevent-return",
        title: "How to stop the smell from coming back",
        body: [
          "The best prevention is a realistic cleaning schedule, proper scraping of the trap during each visit, and clear documentation of what was done. If the kitchen is producing more grease than expected, shorten the service interval before odour returns.",
          "It also helps to review staff habits around grease disposal. Pouring oils down the sink or letting solids bypass pre-scraping makes smells come back faster.",
        ],
      },
    ],
    quote: "If the smell comes back quickly, the kitchen probably has more than one problem to solve.",
    conclusion:
      "A lingering grease trap smell is usually a sign to check the quality of the cleaning, the service interval, and the surrounding drainage system together. The sooner you assess it, the easier it is to prevent a bigger kitchen disruption.",
    relatedPath: "/emergency-grease-trap-cleaning",
    relatedLabel: "Emergency Grease Trap Cleaning",
    faqs: [
      {
        q: "Is it normal for a grease trap to smell a little after cleaning?",
        a: "A mild odour right after service can happen briefly, but it should not linger or become strong again quickly. If the smell is obvious within a short time, the trap or surrounding line likely needs another look.",
      },
      {
        q: "Can a blocked line make a grease trap smell after cleaning?",
        a: "Yes. If grease or solids remain in the drain line, odour can continue even after the interceptor itself has been cleaned. That is why persistent smells sometimes require more than a pump-out.",
      },
      {
        q: "When should I call for follow-up service?",
        a: "Call if the smell is strong, customers can notice it, drains are slow, or the odour returns much sooner than expected. Those signs usually mean the root cause has not been fully addressed.",
      },
    ],
  },
  {
    slug: "start-grease-trap-cleaning-business-canada",
    title: "How To Start a Grease Trap Cleaning Business In Canada",
    description:
      "A grounded look at what it takes to start a grease trap cleaning business in Canada, from equipment and disposal planning to market positioning.",
    intro:
      "Starting a grease trap cleaning business in Canada can look attractive because commercial kitchens always need service, but it is not a casual side hustle. You need equipment, disposal planning, commercial safety habits, and a sales process that earns trust from operators who are calling under pressure.",
    toc: [
      { id: "services", label: "What services to offer" },
      { id: "equipment", label: "Equipment and disposal planning" },
      { id: "sales", label: "How to win restaurant clients" },
      { id: "operations", label: "What keeps the business stable" },
    ],
    sections: [
      {
        id: "services",
        title: "What services a new operator should offer",
        body: [
          "Most new companies start with grease trap cleaning, scheduled maintenance, and emergency response. Some also add line jetting or used cooking oil support, but those services should only be offered if the equipment and disposal process are ready from day one.",
          "Restaurants care less about fancy branding than about speed, reliability, and documentation. If you can answer the phone, show up on time, and keep the records clean, you already stand out.",
        ],
      },
      {
        id: "equipment",
        title: "Equipment, waste handling, and disposal planning",
        body: [
          "This business requires proper pumping and containment equipment, not improvised tools. You also need a clear disposal process because grease waste cannot just be treated like ordinary garbage or wastewater.",
          "Before you market heavily, make sure the operational side is real. Disposal relationships, transport procedures, and technician safety matter just as much as lead generation.",
        ],
      },
      {
        id: "sales",
        title: "How to win your first restaurant clients",
        body: [
          "Operators respond well to direct offers: clear pricing, easy phone quotes, and same-day availability when possible. They do not want long forms or vague promises. They want to know whether you can solve a problem fast and document the work properly.",
          "Niche positioning helps. If you present yourself as a grease trap cleaning specialist instead of a generic drain company, the offer is easier for restaurant managers to understand.",
        ],
      },
      {
        id: "operations",
        title: "What keeps the business stable over time",
        body: [
          "Recurring maintenance accounts are what make the model sustainable. Emergency jobs bring revenue, but scheduled work keeps crews busy, routes efficient, and client relationships stronger.",
          "The companies that last are the ones that build dependable service habits. Answer the phone, keep records tight, and make it easy for kitchen managers to book again.",
        ],
      },
    ],
    quote: "The strongest grease trap businesses are built on repeat maintenance, not one-off emergencies.",
    conclusion:
      "If you are serious about entering this market, focus on operations before expansion. Reliable service, compliant waste handling, and a simple booking process are what turn a greasy job into a durable business.",
    relatedPath: "/grease-trap-cleaning",
    relatedLabel: "Grease Trap Cleaning",
    faqs: [
      {
        q: "Is there demand for grease trap cleaning in Canada?",
        a: "Yes. Restaurants, hotels, food courts, and institutional kitchens all need ongoing grease trap maintenance. Demand is strongest for providers who can offer routine service, fast emergency response, and dependable documentation.",
      },
      {
        q: "What is the hardest part of starting a grease trap cleaning business?",
        a: "Operations are usually the hardest part. Equipment, disposal procedures, route planning, and technician reliability all need to work smoothly before the business can scale or keep repeat clients happy.",
      },
      {
        q: "Do grease trap cleaning businesses rely on recurring work?",
        a: "Yes. Recurring maintenance contracts are usually more stable than one-off emergency calls. They make scheduling easier, improve route density, and create a more predictable revenue base.",
      },
    ],
  },
];

export function getStaticPage(slug: string) {
  return STATIC_PAGES[slug as StaticPageSlug] ?? null;
}

export function getCityPage(slug: string) {
  return CITY_PAGES.find((city) => city.slug === slug) ?? null;
}

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug) ?? null;
}

export function getNearbyCities(slug: string) {
  const city = getCityPage(slug);

  if (!city) {
    return [];
  }

  return CITY_PAGES.filter((candidate) => candidate.slug !== slug && candidate.provinceAbbr === city.provinceAbbr).slice(0, 6);
}
