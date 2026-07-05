// IndexNow submitter for PrinterArchive. Pure Node, zero dependencies.
//
// Notifies IndexNow-participating search engines (Bing, Yandex, Seznam, …)
// that URLs have been added or updated, so they recrawl sooner. Designed to
// run AFTER a deployment: it reads the *live* sitemap (the set of URLs that
// are actually published) and submits them in one batched request.
//
// The verification key is NEVER hardcoded here. It is read from the
// INDEXNOW_KEY environment variable and must match the committed public key
// file at  public/<INDEXNOW_KEY>.txt  which the engines fetch to verify
// ownership.
//
// Usage:
//   INDEXNOW_KEY=xxxx node scripts/indexnow-submit.mjs            # submit live sitemap
//   INDEXNOW_KEY=xxxx node scripts/indexnow-submit.mjs --dry-run  # print, do not POST
//   INDEXNOW_KEY=xxxx node scripts/indexnow-submit.mjs --url https://printerarchive.net/guides/how-laser-printers-work
//   INDEXNOW_KEY=xxxx SITEMAP_FILE=./sitemap.xml node scripts/indexnow-submit.mjs
//
// Environment:
//   INDEXNOW_KEY        (required) the IndexNow key; must equal the .txt filename stem
//   SITE_URL           (default https://printerarchive.net) canonical origin
//   SITEMAP_URL        (default $SITE_URL/sitemap.xml) where to read URLs from
//   SITEMAP_FILE       (optional) read a local sitemap file instead of fetching
//   INDEXNOW_ENDPOINT  (default https://api.indexnow.org/indexnow)
//   DRY_RUN            (optional) 1/true/yes/on to skip the network POST
//
// Exit codes: 0 success (or nothing to do), 1 configuration/submission error.

import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

export const DEFAULT_SITE_URL = "https://printerarchive.net";
export const DEFAULT_ENDPOINT = "https://api.indexnow.org/indexnow";
// IndexNow accepts at most 10,000 URLs per request.
export const MAX_URLS_PER_REQUEST = 10000;

/** IndexNow keys are 8–128 chars of [A-Za-z0-9-]. */
export function isValidKey(key) {
  return typeof key === "string" && /^[A-Za-z0-9-]{8,128}$/.test(key);
}

/**
 * Parse an env var as a boolean. Only 1/true/yes/on (case-insensitive) are
 * true; empty, 0, false, no, off, and unset are false — so `DRY_RUN=false`
 * does NOT accidentally enable dry-run.
 */
export function envBool(v) {
  return v != null && /^(1|true|yes|on)$/i.test(String(v).trim());
}

/** Return the bare hostname for a site origin (host field of the payload). */
export function hostFromUrl(siteUrl) {
  return new URL(siteUrl).host;
}

const XML_ENTITIES = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&apos;": "'",
};

function decodeXml(s) {
  return s.replace(/&(amp|lt|gt|quot|apos);/g, (m) => XML_ENTITIES[m]);
}

/** Extract and de-duplicate all <loc> URLs from a sitemap XML string. */
export function parseSitemapLocs(xml) {
  const out = [];
  const seen = new Set();
  for (const m of String(xml).matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)) {
    const url = decodeXml(m[1].trim());
    if (url && !seen.has(url)) {
      seen.add(url);
      out.push(url);
    }
  }
  return out;
}

/** Split an array into chunks of at most `size`. */
export function chunk(arr, size = MAX_URLS_PER_REQUEST) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

/** Build the IndexNow JSON payload for a batch of URLs. */
export function buildPayload({ siteUrl, key, urls }) {
  const origin = siteUrl.replace(/\/$/, "");
  return {
    host: hostFromUrl(origin),
    key,
    keyLocation: `${origin}/${key}.txt`,
    urlList: urls,
  };
}

/** Keep only URLs that belong to the site origin (IndexNow rejects the rest). */
export function filterSameHost(urls, siteUrl) {
  const host = hostFromUrl(siteUrl);
  return urls.filter((u) => {
    try {
      return new URL(u).host === host;
    } catch {
      return false;
    }
  });
}

function parseArgs(argv) {
  const opts = { urls: [], dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--dry-run") opts.dryRun = true;
    else if (a === "--url") opts.urls.push(argv[++i]);
  }
  return opts;
}

async function readSitemap({ sitemapFile, sitemapUrl }) {
  if (sitemapFile) return readFileSync(sitemapFile, "utf8");
  const res = await fetch(sitemapUrl, {
    headers: { "user-agent": "PrinterArchive-IndexNow/1.0" },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap ${sitemapUrl}: HTTP ${res.status}`);
  }
  return res.text();
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const key = process.env.INDEXNOW_KEY;
  const siteUrl = (process.env.SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, "");
  const endpoint = process.env.INDEXNOW_ENDPOINT || DEFAULT_ENDPOINT;
  const dryRun = opts.dryRun || envBool(process.env.DRY_RUN);

  if (!key) {
    console.error(
      "✗ INDEXNOW_KEY is not set. Refusing to submit.\n" +
        "  Set it in the environment (it must equal the public key-file stem).",
    );
    process.exit(1);
  }
  if (!isValidKey(key)) {
    console.error(
      `✗ INDEXNOW_KEY is malformed (${key.length} chars). ` +
        "Expected 8–128 chars of [A-Za-z0-9-].",
    );
    process.exit(1);
  }

  // URL source: explicit --url flags win; otherwise read the sitemap.
  let urls = opts.urls;
  if (urls.length === 0) {
    const sitemapUrl = process.env.SITEMAP_URL || `${siteUrl}/sitemap.xml`;
    const sitemapFile = process.env.SITEMAP_FILE;
    const xml = await readSitemap({ sitemapFile, sitemapUrl });
    urls = parseSitemapLocs(xml);
    console.log(
      `Read ${urls.length} URL(s) from ${sitemapFile || sitemapUrl}`,
    );
  }

  urls = filterSameHost(urls, siteUrl);
  if (urls.length === 0) {
    console.log("Nothing to submit (0 same-host URLs). Done.");
    process.exit(0);
  }

  const batches = chunk(urls);
  console.log(
    `Submitting ${urls.length} URL(s) to ${endpoint} in ${batches.length} batch(es)` +
      (dryRun ? " [DRY RUN]" : ""),
  );

  for (const [i, batch] of batches.entries()) {
    const payload = buildPayload({ siteUrl, key, urls: batch });
    if (dryRun) {
      console.log(
        `  batch ${i + 1}/${batches.length}: ${batch.length} URL(s) — ` +
          `host=${payload.host} keyLocation=${payload.keyLocation}`,
      );
      continue;
    }
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=utf-8",
        "user-agent": "PrinterArchive-IndexNow/1.0",
      },
      body: JSON.stringify(payload),
    });
    // IndexNow returns 200 (accepted) or 202 (accepted, pending verification).
    if (res.status !== 200 && res.status !== 202) {
      const text = await res.text().catch(() => "");
      throw new Error(
        `IndexNow rejected batch ${i + 1}: HTTP ${res.status} ${text}`.trim(),
      );
    }
    console.log(
      `  batch ${i + 1}/${batches.length}: ${batch.length} URL(s) — HTTP ${res.status}`,
    );
  }

  console.log("✓ IndexNow submission complete.");
}

// Only run when executed directly, so tests can import the pure helpers.
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  main().catch((err) => {
    console.error(`✗ ${err.message}`);
    process.exit(1);
  });
}
