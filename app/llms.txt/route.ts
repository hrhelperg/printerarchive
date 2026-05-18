import { site, SECTIONS } from "@/lib/site";
import { getSection } from "@/lib/content/queries";

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
    "## Sections",
    "",
  ];
  for (const s of SECTIONS) {
    lines.push(`### ${s.title}`, s.description);
    for (const e of getSection(s.id)) {
      lines.push(`- ${e.title}: ${site.url}/${e.section}/${e.slug}`);
    }
    lines.push("");
  }
  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
