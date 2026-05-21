// Post-build launch-safety route audit. Pure Node, zero dependencies.
//
// Walks the prerendered HTML in .next/server/app and verifies, per route:
//   - exactly one <h1>
//   - a non-empty <title> and <meta name="description">
//   - an https://printerarchive.net canonical link
//   - Open Graph tags present
//   - no "localhost" leak, no accidental noindex
// Then cross-checks every internal navigation <a href> against the set of
// generated routes (broken-link check) and every /images/... reference
// against the files in public/ (missing-image check).
//
// Usage: npm run build && node scripts/check-routes.mjs
// Exits non-zero if any issue is found, so it can gate a launch.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const root = join(import.meta.dirname, "..");
const APP = join(root, ".next/server/app");

if (!existsSync(APP)) {
  console.error(
    "✗ .next/server/app not found. Run `npm run build` before this check.",
  );
  process.exit(1);
}

function walk(dir) {
  let out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out = out.concat(walk(p));
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}

const files = walk(APP);
const routeOf = (f) =>
  ("/" + relative(APP, f).replace(/\.html$/, "").replace(/index$/, "")).replace(
    /\/$/,
    "",
  ) || "/";

const validRoutes = new Set(files.map(routeOf));
validRoutes.add("/");
// Non-HTML routes emitted by route handlers / metadata files.
for (const r of [
  "/sitemap.xml",
  "/robots.txt",
  "/llms.txt",
  "/feed.xml",
  "/icon.svg",
  "/favicon.ico",
  "/contact",
]) {
  validRoutes.add(r);
}

const SKIP = new Set(["/_not-found", "/_global-error"]);
const issues = [];
let navLinks = 0;
let imageRefs = 0;

for (const f of files) {
  const r = routeOf(f);
  if (SKIP.has(r)) continue;
  const t = readFileSync(f, "utf8");

  const h1 = (t.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) issues.push(`${r}: expected 1 <h1>, found ${h1}`);
  if (!/<title>[^<]+<\/title>/.test(t)) issues.push(`${r}: missing <title>`);
  if (!/<meta name="description" content="[^"]+"/.test(t))
    issues.push(`${r}: missing meta description`);
  if (!/<link rel="canonical" href="https:\/\/printerarchive\.net/.test(t))
    issues.push(`${r}: missing https canonical`);
  if (!/<meta property="og:/.test(t)) issues.push(`${r}: missing Open Graph tags`);
  if (/localhost/i.test(t)) issues.push(`${r}: contains "localhost"`);
  if (/noindex/i.test(t)) issues.push(`${r}: contains noindex`);

  // Internal navigation links (exclude build assets and external/anchor/query).
  for (const m of t.matchAll(/href="(\/[^"#?]*)/g)) {
    const href = m[1];
    if (href.startsWith("/_next")) continue;
    navLinks++;
    const clean = href.replace(/\/$/, "") || "/";
    if (!validRoutes.has(clean) && !validRoutes.has(href)) {
      issues.push(`${r}: broken internal link -> ${href}`);
    }
  }

  // Committed-image references must exist under public/.
  for (const m of t.matchAll(
    /\/images\/[A-Za-z0-9._/-]+\.(?:jpg|jpeg|png|webp|avif|svg)/g,
  )) {
    imageRefs++;
    if (!existsSync(join(root, "public", m[0]))) {
      issues.push(`${r}: missing image file -> ${m[0]}`);
    }
  }
}

const unique = [...new Set(issues)];
console.log(
  `Routes audited: ${files.length} | nav links: ${navLinks} | image refs: ${imageRefs}`,
);
if (unique.length > 0) {
  console.error(`✗ Route audit: ${unique.length} issue(s)`);
  for (const i of unique) console.error(`  - ${i}`);
  process.exit(1);
}
console.log("✓ Route audit OK — no broken links, missing images, or metadata gaps.");
