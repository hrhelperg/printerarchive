// Integrity test for the knowledge-graph taxonomy (lib/knowledge-graph).
// Guards the long-term architecture map: unique ids, valid section/product
// references, sane capacity, resolving cross-links, and — critically — that no
// PLANNED page collides with a slug that is already published.
//
// Runs under `npm run test:unit` (node --test --experimental-strip-types), so
// the .ts modules load with their type-only "@/" imports erased.

import test from "node:test";
import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const root = join(import.meta.dirname, "..");

const {
  TAXONOMY,
  LIVE_SECTIONS,
  PROPOSED_SECTIONS,
  LIVE_PRODUCTS,
  PROPOSED_PRODUCTS,
} = await import(
  pathToFileURL(join(root, "lib/knowledge-graph/taxonomy.ts")).href
);

const VALID_SECTIONS = new Set([...LIVE_SECTIONS, ...PROPOSED_SECTIONS]);
const VALID_PRODUCTS = new Set([...LIVE_PRODUCTS, ...PROPOSED_PRODUCTS]);

// Slugs already published, derived from the content tree (section/slug),
// plus the bare slug stems (last path segment).
const existingSlugs = new Set(
  readdirSync(join(root, "content"), { recursive: true })
    .map(String)
    .filter((f) => f.endsWith(".ts"))
    .map((f) => f.replace(/\.ts$/, "").split(/[\\/]/).join("/")),
);
const existingStems = new Set([...existingSlugs].map((k) => k.split("/").pop()));

test("taxonomy is a non-empty array", () => {
  assert.ok(Array.isArray(TAXONOMY) && TAXONOMY.length > 0);
});

test("cluster ids are unique", () => {
  const ids = TAXONOMY.map((c) => c.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("every section reference is valid", () => {
  for (const c of TAXONOMY) {
    assert.ok(
      VALID_SECTIONS.has(c.primarySection),
      `${c.id}: bad primarySection ${c.primarySection}`,
    );
    for (const s of c.secondarySections) {
      assert.ok(VALID_SECTIONS.has(s), `${c.id}: bad secondary ${s}`);
    }
    for (const p of c.planned) {
      assert.ok(
        VALID_SECTIONS.has(p.section),
        `${c.id}/${p.slug}: bad section ${p.section}`,
      );
    }
  }
});

test("app anchors resolve to a known (live or proposed) product or null", () => {
  for (const c of TAXONOMY) {
    if (c.appAnchor !== null) {
      assert.ok(
        VALID_PRODUCTS.has(c.appAnchor),
        `${c.id}: unknown appAnchor ${c.appAnchor}`,
      );
    }
  }
});

test("capacity is sane (0 <= conservative <= ambitious) and covers planned", () => {
  for (const c of TAXONOMY) {
    const { conservative, ambitious } = c.capacity;
    assert.ok(
      Number.isInteger(conservative) && conservative >= 0,
      `${c.id}: bad conservative`,
    );
    assert.ok(ambitious >= conservative, `${c.id}: ambitious < conservative`);
    assert.ok(
      ambitious >= c.planned.length,
      `${c.id}: ambitious (${ambitious}) < planned (${c.planned.length})`,
    );
    assert.ok(Number.isInteger(c.livePages) && c.livePages >= 0);
  }
});

test("planned slugs are globally unique (one canonical page per concept)", () => {
  // Uniqueness is by SLUG alone, not section+slug: the same concept re-slugged
  // into a second section is the duplicate-concept sprawl the taxonomy forbids.
  const seen = new Map();
  for (const c of TAXONOMY) {
    for (const p of c.planned) {
      assert.ok(
        !seen.has(p.slug),
        `duplicate planned slug "${p.slug}" (${seen.get(p.slug)} & ${c.id})`,
      );
      seen.set(p.slug, c.id);
    }
  }
});

test("no planned page reuses an already-published route or slug stem", () => {
  for (const c of TAXONOMY) {
    for (const p of c.planned) {
      assert.ok(
        !existingSlugs.has(`${p.section}/${p.slug}`),
        `${c.id}: planned ${p.section}/${p.slug} already exists`,
      );
      assert.ok(
        !existingStems.has(p.slug),
        `${c.id}: planned slug "${p.slug}" re-slugs a published page`,
      );
    }
  }
});

test("cross-links resolve to real cluster ids", () => {
  const ids = new Set(TAXONOMY.map((c) => c.id));
  for (const c of TAXONOMY) {
    for (const link of c.crossLinks) {
      assert.ok(ids.has(link), `${c.id}: crossLink ${link} does not resolve`);
      assert.notEqual(link, c.id, `${c.id}: self cross-link`);
    }
  }
});

test("every cluster has entities and a slug prefix-free slug", () => {
  for (const c of TAXONOMY) {
    assert.ok(c.entities.length > 0, `${c.id}: no entities`);
    for (const p of c.planned) {
      assert.match(p.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `${c.id}: bad slug ${p.slug}`);
      assert.ok(!p.slug.includes("/"), `${c.id}: slug must not include section`);
    }
  }
});
