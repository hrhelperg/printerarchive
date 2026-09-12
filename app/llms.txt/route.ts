import { site, SECTIONS } from "@/lib/site";
import { getSection } from "@/lib/content/queries";
import { BLOG, getPosts } from "@/lib/blog/queries";

export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Site: ${site.url}`,
    `Publisher: ${site.publisher.name}`,
    "",
    "## About this archive",
    "",
    `- Editorial policy: ${site.url}/editorial-policy`,
    `- Source policy: ${site.url}/source-policy`,
    `- Methodology: ${site.url}/archive-methodology`,
    `- Changelog: ${site.url}/changelog`,
    `- About: ${site.url}/about`,
    "",
    "## Blog",
    "",
    "Editorial stories about printing, documents, publishing, information systems and the evolution from physical to digital workflows. Distinct from the reference sections below: these are essays, not encyclopedia entries.",
    "",
    `Hub: ${site.url}${BLOG.path}`,
    "",
  ];
  for (const p of getPosts()) {
    const sourceCount = p.sources?.length ?? 0;
    const suffix = sourceCount > 0 ? ` [${sourceCount} sources]` : "";
    lines.push(
      `- ${p.title} (${p.category}, ${p.published}): ${site.url}${BLOG.path}/${p.slug}${suffix}`,
    );
  }
  lines.push("", "## Sections", "");
  for (const s of SECTIONS) {
    lines.push(`### ${s.title}`, s.description);
    for (const e of getSection(s.id)) {
      const sourceCount = e.sources?.length ?? 0;
      const suffix = sourceCount > 0 ? ` [${sourceCount} sources]` : "";
      lines.push(`- ${e.title}: ${site.url}/${e.section}/${e.slug}${suffix}`);
    }
    lines.push("");
  }
  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
