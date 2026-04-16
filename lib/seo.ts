import { PHONE_DISPLAY, PHONE_E164, SITE_NAME, SITE_URL } from "@/lib/site-data";

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || SITE_URL;
}

export function absoluteUrl(path: string) {
  return `${getSiteUrl()}${path}`;
}

export function keywordWithLocation(keyword: string, locationName: string) {
  return `${keyword} ${locationName}`;
}

export { PHONE_DISPLAY, PHONE_E164, SITE_NAME };
