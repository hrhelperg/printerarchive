// Integrity test for the manufacturer registry (lib/knowledge-graph/manufacturers.ts).
// Runs under `npm run test:unit` (node --test --experimental-strip-types).

import test from "node:test";
import assert from "node:assert/strict";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const root = join(import.meta.dirname, "..");
const { MANUFACTURERS, flagshipManufacturers } = await import(
  pathToFileURL(join(root, "lib/knowledge-graph/manufacturers.ts")).href
);
const { TAXONOMY } = await import(
  pathToFileURL(join(root, "lib/knowledge-graph/taxonomy.ts")).href
);

const ids = new Set(MANUFACTURERS.map((m) => m.id));
const clusterIds = new Set(TAXONOMY.map((c) => c.id));
const STATUS = new Set(["active", "historical", "absorbed"]);
const SOURCING = new Set(["flagship-verified", "documented-structure"]);
const REL_TYPES = new Set([
  "spun-off-from",
  "acquired-printing-business-of",
  "merged-to-form",
  "subsidiary-of",
  "succeeded-by",
  "supplies-engines-to",
]);

test("manufacturer ids are unique and kebab-case", () => {
  assert.equal(ids.size, MANUFACTURERS.length);
  for (const m of MANUFACTURERS) {
    assert.match(m.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `bad id ${m.id}`);
  }
});

test("every manufacturer has name, hqCountry, valid status + sourcing", () => {
  for (const m of MANUFACTURERS) {
    assert.ok(m.name && m.name.trim(), `${m.id}: missing name`);
    assert.ok(m.hqCountry && m.hqCountry.trim(), `${m.id}: missing hqCountry`);
    assert.ok(STATUS.has(m.status), `${m.id}: bad status ${m.status}`);
    assert.ok(SOURCING.has(m.sourcing), `${m.id}: bad sourcing ${m.sourcing}`);
    assert.ok(Array.isArray(m.categories) && m.categories.length > 0, `${m.id}: no categories`);
  }
});

test("relationships resolve to real manufacturers with valid types", () => {
  for (const m of MANUFACTURERS) {
    for (const r of m.relationships) {
      assert.ok(ids.has(r.to), `${m.id}: relationship -> unknown ${r.to}`);
      assert.notEqual(r.to, m.id, `${m.id}: self relationship`);
      assert.ok(REL_TYPES.has(r.type), `${m.id}: bad relationship type ${r.type}`);
    }
  }
});

test("relatedClusters resolve to taxonomy cluster ids", () => {
  for (const m of MANUFACTURERS) {
    assert.ok(m.relatedClusters.length > 0, `${m.id}: no relatedClusters`);
    for (const c of m.relatedClusters) {
      assert.ok(clusterIds.has(c), `${m.id}: relatedCluster ${c} does not resolve`);
    }
  }
});

test("model families are well-formed (name + category)", () => {
  for (const m of MANUFACTURERS) {
    for (const f of m.modelFamilies) {
      assert.ok(f.name && f.name.trim(), `${m.id}: empty family name`);
      assert.ok(f.category && f.category.trim(), `${m.id}: family ${f.name} has no category`);
      if (f.era !== undefined) {
        assert.ok(["current", "historical"].includes(f.era), `${m.id}: bad era ${f.era}`);
      }
    }
  }
});

test("flagship invariants: 10 flagships, each verified with model families", () => {
  const flags = flagshipManufacturers();
  assert.equal(flags.length, 10, `expected 10 flagships, got ${flags.length}`);
  for (const m of flags) {
    assert.equal(m.sourcing, "flagship-verified", `${m.id}: flagship must be flagship-verified`);
    assert.ok(m.modelFamilies.length > 0, `${m.id}: flagship needs model families`);
  }
  // Non-flagships must not claim flagship-verified sourcing.
  for (const m of MANUFACTURERS) {
    if (!m.flagship) {
      assert.notEqual(m.sourcing, "flagship-verified", `${m.id}: non-flagship marked verified`);
    }
  }
});
