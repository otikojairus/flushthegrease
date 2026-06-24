import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE_NAME} | Grease Trap Cleaning Canada`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Grease trap cleaning, emergency service, and commercial kitchen maintenance pages for Canadian restaurant operators and property managers.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} | Grease Trap Cleaning Canada`,
    description:
      "Same-day grease trap cleaning, compliance-focused maintenance, and city pages for Canadian commercial kitchens.",
    url: absoluteUrl("/"),
    type: "website",
    siteName: SITE_NAME,
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Grease Trap Cleaning Canada`,
    description: "National grease trap cleaning and emergency service for Canadian kitchens.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${manrope.variable} ${bebasNeue.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: '(function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.defer=!0;a.src=document.location.protocol+"//dist.routingapi.com/jsapi/v1/retreaver.min.js";a.onload=a.onreadystatechange=function(){Retreaver.configure({host:"api.routingapi.com",prefix:"https:"==document.location.protocol?"https":"http"});(new Retreaver.Campaign({campaign_key:"ff97b1af347572af5363ff0efe41842d"})).auto_replace_numbers()};(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)})();',
          }}
        />
      </head>
      <body>
        <SiteNavbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
