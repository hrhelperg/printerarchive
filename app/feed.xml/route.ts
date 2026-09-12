import { site } from "@/lib/site";
import { allEntries } from "@/lib/content/registry";
import { allPosts } from "@/lib/blog/registry";

export const dynamic = "force-static";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
  // The feed represents the archive's latest published work of any kind.
  // Editorial posts and encyclopedia entries share the same item shape — only
  // the path prefix differs — so including posts needs no schema change.
  const feedItems = [
    ...allEntries.map((e) => ({
      title: e.title,
      description: e.description,
      updated: e.updated,
      path: `/${e.section}/${e.slug}`,
      category: "Encyclopedia",
    })),
    ...allPosts.map((p) => ({
      title: p.title,
      description: p.description,
      updated: p.updated,
      path: `/blog/${p.slug}`,
      category: p.category,
    })),
  ];
  const items = [...feedItems]
    .sort((a, b) => (a.updated < b.updated ? 1 : -1))
    .slice(0, 30)
    .map(
      (e) => `    <item>
      <title>${esc(e.title)}</title>
      <link>${site.url}${e.path}</link>
      <guid>${site.url}${e.path}</guid>
      <pubDate>${new Date(e.updated).toUTCString()}</pubDate>
      <category>${esc(e.category)}</category>
      <description>${esc(e.description)}</description>
    </item>`,
    )
    .join("\n");
  const lastBuild =
    [...feedItems]
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
