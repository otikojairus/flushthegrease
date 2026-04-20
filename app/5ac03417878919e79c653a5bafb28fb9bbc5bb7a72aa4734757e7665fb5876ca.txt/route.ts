export const dynamic = "force-static";

const TOKEN = "5ac03417878919e79c653a5bafb28fb9bbc5bb7a72aa4734757e7665fb5876ca";

export function GET() {
  return new Response(TOKEN, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
