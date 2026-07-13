import type { MetadataRoute } from "next";
import { site, SECTIONS } from "@/lib/site";
import { allEntries } from "@/lib/content/registry";
import { findContentIssues } from "@/lib/content/integrity";
import { TAXONOMY } from "@/lib/knowledge-graph/taxonomy";

export default function sitemap(): MetadataRoute.Sitemap {
  // Build-time integrity gate: a violation fails `next build`.
  const issues = findContentIssues(allEntries);
  if (issues.length > 0) {
    throw new Error(
      `Content integrity failed (${issues.length}):\n` +
        issues.map((i) => `  - ${i}`).join("\n"),
    );
  }

  const staticPaths = [
    "",
    "/about",
    "/contact",
    "/editorial-policy",
    "/source-policy",
    "/archive-methodology",
    "/changelog",
    "/cookie-policy",
    "/knowledge-graph",
    ...TAXONOMY.map((c) => `/knowledge-graph/${c.id}`),
    ...SECTIONS.map((s) => `/${s.id}`),
  ];
  const statics = staticPaths.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
  const articles = allEntries.map((e) => ({
    url: `${site.url}/${e.section}/${e.slug}`,
    lastModified: new Date(e.updated),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [...statics, ...articles];
}
