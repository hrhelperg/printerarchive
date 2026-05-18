import { site } from "@/lib/site";
import { allEntries } from "@/lib/content/registry";

export const dynamic = "force-static";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
  const items = [...allEntries]
    .sort((a, b) => (a.updated < b.updated ? 1 : -1))
    .slice(0, 30)
    .map(
      (e) => `    <item>
      <title>${esc(e.title)}</title>
      <link>${site.url}/${e.section}/${e.slug}</link>
      <guid>${site.url}/${e.section}/${e.slug}</guid>
      <pubDate>${new Date(e.updated).toUTCString()}</pubDate>
      <description>${esc(e.description)}</description>
    </item>`,
    )
    .join("\n");
  const lastBuild =
    [...allEntries]
      .map((e) => e.updated)
      .sort()
      .reverse()[0] ?? new Date().toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>
    <title>${esc(site.name)}</title>
    <link>${site.url}</link>
    <atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${esc(site.description)}</description>
    <language>en</language>
    <lastBuildDate>${new Date(lastBuild).toUTCString()}</lastBuildDate>
${items}
</channel></rss>`;
  return new Response(xml, {
    headers: { "content-type": "application/rss+xml; charset=utf-8" },
  });
}
