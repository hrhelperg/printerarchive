import type { ContentEntry } from "@/lib/content/types";

function imageIssues(
  key: string,
  label: string,
  img: {
    src?: unknown;
    alt?: unknown;
    width?: unknown;
    height?: unknown;
    credit?: { source?: unknown; license?: unknown } | undefined;
  },
): string[] {
  const out: string[] = [];
  const nonEmpty = (v: unknown) => typeof v === "string" && v.trim().length > 0;
  const posInt = (v: unknown) =>
    typeof v === "number" && Number.isInteger(v) && v > 0;
  if (!nonEmpty(img.src)) out.push(`${key}: ${label} image src missing`);
  if (!nonEmpty(img.alt)) out.push(`${key}: ${label} image alt missing`);
  if (!posInt(img.width))
    out.push(`${key}: ${label} image width must be a positive integer`);
  if (!posInt(img.height))
    out.push(`${key}: ${label} image height must be a positive integer`);
  if (!nonEmpty(img.credit?.source))
    out.push(`${key}: ${label} image credit.source missing`);
  if (!nonEmpty(img.credit?.license))
    out.push(`${key}: ${label} image credit.license missing`);
  return out;
}

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

    if (e.hero) {
      issues.push(...imageIssues(key, "hero", e.hero));
    }
    if (Array.isArray(e.body)) {
      e.body.forEach((b, idx) => {
        if (b && (b as { kind?: string }).kind === "figure") {
          const img = (b as { image?: Record<string, unknown> }).image ?? {};
          issues.push(...imageIssues(key, `figure[${idx}]`, img));
        }
      });
    }

    for (const ref of e.related ?? []) {
      if (!keys.has(`${ref.section}/${ref.slug}`)) {
        issues.push(
          `${key}: related ref does not resolve -> ${ref.section}/${ref.slug}`,
        );
      }
    }

    // Footnotes integrity: collect refs from body, footnotes from entry-level field.
    const refs: number[] = [];
    const fnIndex = new Map<number, number>(); // n -> count, for uniqueness check
    if (Array.isArray(e.body)) {
      e.body.forEach((b) => {
        if (b && (b as { kind?: string }).kind === "footnoteRef") {
          const n = (b as { n?: unknown }).n;
          if (typeof n === "number" && Number.isInteger(n) && n > 0) refs.push(n);
          else issues.push(`${key}: footnoteRef n must be a positive integer`);
        }
      });
    }
    const fns = (e as { footnotes?: { n?: unknown; text?: unknown }[] }).footnotes;
    if (Array.isArray(fns)) {
      fns.forEach((f) => {
        const n = f.n;
        if (typeof n !== "number" || !Number.isInteger(n) || n <= 0) {
          issues.push(`${key}: footnote n must be a positive integer`);
          return;
        }
        fnIndex.set(n, (fnIndex.get(n) ?? 0) + 1);
        if (typeof f.text !== "string" || f.text.trim().length === 0) {
          issues.push(`${key}: footnote ${n} text missing`);
        }
      });
      // Duplicates
      for (const [n, count] of fnIndex) {
        if (count > 1) issues.push(`${key}: duplicate footnote ${n} (x${count})`);
      }
    }
    // Dangling refs (ref without matching footnote)
    for (const n of refs) {
      if (!fnIndex.has(n)) {
        issues.push(`${key}: footnoteRef ${n} has no matching footnote`);
      }
    }
    // Orphan footnotes (footnote without matching ref)
    for (const [n] of fnIndex) {
      if (!refs.includes(n)) {
        issues.push(`${key}: orphan footnote ${n} (no footnoteRef in body)`);
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
