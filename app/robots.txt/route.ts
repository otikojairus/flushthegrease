export const revalidate = 3600;

const ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: https://flushthegrease.com/sitemap.xml
`;

export function GET() {
  return new Response(ROBOTS_TXT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
