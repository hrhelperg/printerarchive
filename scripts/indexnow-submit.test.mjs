import { test } from "node:test";
import assert from "node:assert/strict";
import {
  isValidKey,
  envBool,
  hostFromUrl,
  parseSitemapLocs,
  chunk,
  buildPayload,
  filterSameHost,
  MAX_URLS_PER_REQUEST,
} from "./indexnow-submit.mjs";

test("envBool only treats 1/true/yes/on as true (not 'false' or '0')", () => {
  for (const v of ["1", "true", "TRUE", "yes", "on", " true "]) {
    assert.equal(envBool(v), true, `${v} should be true`);
  }
  for (const v of ["0", "false", "FALSE", "no", "off", "", undefined, null]) {
    assert.equal(envBool(v), false, `${JSON.stringify(v)} should be false`);
  }
});

test("isValidKey accepts 8–128 char keys of [A-Za-z0-9-]", () => {
  assert.equal(isValidKey("0123456789abcdef0123456789abcdef"), true);
  assert.equal(isValidKey("abc-DEF-123"), true);
  assert.equal(isValidKey("short"), false); // < 8
  assert.equal(isValidKey("has space00"), false);
  assert.equal(isValidKey("under_score0"), false);
  assert.equal(isValidKey("a".repeat(129)), false); // > 128
  assert.equal(isValidKey(undefined), false);
});

test("hostFromUrl returns the bare host", () => {
  assert.equal(hostFromUrl("https://printerarchive.net"), "printerarchive.net");
  assert.equal(hostFromUrl("https://printerarchive.net/"), "printerarchive.net");
  assert.equal(
    hostFromUrl("https://printerarchive.net/guides/x"),
    "printerarchive.net",
  );
});

test("parseSitemapLocs extracts, trims, decodes, and de-dupes <loc>", () => {
  const xml = `<?xml version="1.0"?>
    <urlset>
      <url><loc>https://printerarchive.net/</loc></url>
      <url><loc>
        https://printerarchive.net/guides/how-laser-printers-work
      </loc></url>
      <url><loc>https://printerarchive.net/tools/a?b=1&amp;c=2</loc></url>
      <url><loc>https://printerarchive.net/</loc></url>
    </urlset>`;
  const locs = parseSitemapLocs(xml);
  assert.deepEqual(locs, [
    "https://printerarchive.net/",
    "https://printerarchive.net/guides/how-laser-printers-work",
    "https://printerarchive.net/tools/a?b=1&c=2",
  ]);
});

test("parseSitemapLocs returns [] for empty / no-loc input", () => {
  assert.deepEqual(parseSitemapLocs(""), []);
  assert.deepEqual(parseSitemapLocs("<urlset></urlset>"), []);
});

test("chunk splits arrays and respects the 10k cap default", () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
  assert.deepEqual(chunk([], 2), []);
  const big = Array.from({ length: 25000 }, (_, i) => i);
  const parts = chunk(big);
  assert.equal(parts.length, 3);
  assert.equal(parts[0].length, MAX_URLS_PER_REQUEST);
  assert.equal(parts[2].length, 25000 - 2 * MAX_URLS_PER_REQUEST);
});

test("buildPayload derives host and keyLocation and passes urls through", () => {
  const p = buildPayload({
    siteUrl: "https://printerarchive.net/",
    key: "0123456789abcdef0123456789abcdef",
    urls: ["https://printerarchive.net/a"],
  });
  assert.deepEqual(p, {
    host: "printerarchive.net",
    key: "0123456789abcdef0123456789abcdef",
    keyLocation:
      "https://printerarchive.net/0123456789abcdef0123456789abcdef.txt",
    urlList: ["https://printerarchive.net/a"],
  });
});

test("filterSameHost drops foreign and malformed URLs", () => {
  const urls = [
    "https://printerarchive.net/ok",
    "https://evil.example.com/x",
    "not-a-url",
    "https://printerarchive.net/ok2",
  ];
  assert.deepEqual(filterSameHost(urls, "https://printerarchive.net"), [
    "https://printerarchive.net/ok",
    "https://printerarchive.net/ok2",
  ]);
});
