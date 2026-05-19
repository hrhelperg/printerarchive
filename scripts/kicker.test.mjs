import test from "node:test";
import assert from "node:assert/strict";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const root = join(import.meta.dirname, "..");
const { entryKicker } = await import(
  pathToFileURL(join(root, "lib/content/kicker.ts")).href
);

test("history -> era", () => {
  assert.equal(
    entryKicker({ section: "history", era: "Impact era" }),
    "Impact era",
  );
});

test("guides -> difficulty", () => {
  assert.equal(
    entryKicker({ section: "guides", difficulty: "intermediate" }),
    "Intermediate",
  );
});

test("troubleshooting -> Troubleshooting", () => {
  assert.equal(
    entryKicker({ section: "troubleshooting", symptom: "x" }),
    "Troubleshooting",
  );
});

test("brands -> brand", () => {
  assert.equal(
    entryKicker({ section: "brands", brand: "Canon" }),
    "Canon",
  );
});

test("glossary -> Definition", () => {
  assert.equal(
    entryKicker({ section: "glossary", term: "DPI" }),
    "Definition",
  );
});

test("unknown/empty -> section label fallback", () => {
  assert.equal(entryKicker({ section: "workflows" }), "Workflow");
});

test("fax HistoryEntry -> era (not Guide)", () => {
  assert.equal(
    entryKicker({ section: "fax", era: "The fax era" }),
    "The fax era",
  );
});

test("history HistoryEntry still -> era", () => {
  assert.equal(
    entryKicker({ section: "history", era: "Impact era" }),
    "Impact era",
  );
});
