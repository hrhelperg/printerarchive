// Content-integrity check. Runs under Node type-stripping so it can import
// the typed .ts content modules directly (their only imports are type-only
// and are erased). Zero runtime dependencies.
//
// Usage: node --experimental-strip-types scripts/check-content.mjs

import { readdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const root = join(import.meta.dirname, "..");
const contentDir = join(root, "content");

const files = readdirSync(contentDir, { recursive: true })
  .map(String)
  .filter((f) => f.endsWith(".ts"))
  .sort();

const entries = [];
for (const rel of files) {
  const mod = await import(pathToFileURL(join(contentDir, rel)).href);
  if (!mod.default) {
    console.error(`✗ ${rel}: no default export`);
    process.exit(1);
  }
  entries.push(mod.default);
}

const { findContentIssues } = await import(
  pathToFileURL(join(root, "lib/content/integrity.ts")).href
);

const issues = findContentIssues(entries);

if (issues.length > 0) {
  console.error(`✗ Content integrity: ${issues.length} issue(s)`);
  for (const i of issues) console.error(`  - ${i}`);
  process.exit(1);
}

console.log(
  `✓ Content integrity OK — ${entries.length} entries, no issues found.`,
);
