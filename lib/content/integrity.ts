import type { ContentEntry } from "@/lib/content/types";

/**
 * Pure content-integrity check. Returns a list of human-readable problems;
 * an empty array means the content set is valid. Used by the content check
 * script and enforced at build time so `next build` fails on violations.
 */
export function findContentIssues(entries: ContentEntry[]): string[] {
  const issues: string[] = [];
  const isoDate = /^\d{4}-\d{2}-\d{2}$/;
  const keys = new Set(entries.map((e) => `${e.section}/${e.slug}`));
  const seen = new Set<string>();

  for (const e of entries) {
    const key = `${e.section}/${e.slug}`;

    if (seen.has(key)) issues.push(`Duplicate entry: ${key}`);
    seen.add(key);

    for (const field of [
      "title",
      "description",
      "summary",
      "author",
      "editor",
    ] as const) {
      if (!e[field] || String(e[field]).trim().length === 0) {
        issues.push(`${key}: missing ${field}`);
      }
    }

    if (e.description && e.description.length > 165) {
      issues.push(
        `${key}: description too long (${e.description.length} > 165)`,
      );
    }

    if (!isoDate.test(e.published)) {
      issues.push(`${key}: published is not an ISO date (${e.published})`);
    }
    if (!isoDate.test(e.updated)) {
      issues.push(`${key}: updated is not an ISO date (${e.updated})`);
    }

    if (!Array.isArray(e.body) || e.body.length === 0) {
      issues.push(`${key}: body is empty`);
    }

    for (const ref of e.related ?? []) {
      if (!keys.has(`${ref.section}/${ref.slug}`)) {
        issues.push(
          `${key}: related ref does not resolve -> ${ref.section}/${ref.slug}`,
        );
      }
    }

    if (e.section === "glossary") {
      for (const ref of e.seeAlso ?? []) {
        if (!keys.has(`${ref.section}/${ref.slug}`)) {
          issues.push(
            `${key}: seeAlso ref does not resolve -> ${ref.section}/${ref.slug}`,
          );
        }
      }
    }
  }

  return issues;
}
