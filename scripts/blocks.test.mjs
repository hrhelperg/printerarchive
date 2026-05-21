import test from "node:test";
import assert from "node:assert/strict";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const root = join(import.meta.dirname, "..");
const { groupAdjacentFigures } = await import(
  pathToFileURL(join(root, "lib/content/blocks.ts")).href
);

const fig = (alt) => ({
  kind: "figure",
  image: {
    src: "/x.webp", alt, width: 800, height: 600,
    credit: { source: "Wikimedia Commons", license: "Public domain" },
  },
});
const para = (t) => ({ kind: "paragraph", text: t });

test("empty array -> empty array", () => {
  assert.deepEqual(groupAdjacentFigures([]), []);
});

test("no figures -> blocks pass through unchanged", () => {
  const blocks = [para("a"), para("b"), { kind: "heading", level: 2, text: "h" }];
  assert.deepEqual(groupAdjacentFigures(blocks), blocks);
});

test("single figure is NOT grouped (below minGroupSize=2)", () => {
  const blocks = [para("a"), fig("one"), para("b")];
  assert.deepEqual(groupAdjacentFigures(blocks), blocks);
});

test("two adjacent figures collapse into one figure-group of 2", () => {
  const blocks = [para("a"), fig("one"), fig("two"), para("b")];
  const out = groupAdjacentFigures(blocks);
  assert.equal(out.length, 3);
  assert.equal(out[0].kind, "paragraph");
  assert.equal(out[1].kind, "figure-group");
  assert.equal(out[1].figures.length, 2);
  assert.equal(out[1].figures[0].image.alt, "one");
  assert.equal(out[1].figures[1].image.alt, "two");
  assert.equal(out[2].kind, "paragraph");
});

test("three adjacent figures collapse into one figure-group of 3", () => {
  const out = groupAdjacentFigures([fig("a"), fig("b"), fig("c")]);
  assert.equal(out.length, 1);
  assert.equal(out[0].kind, "figure-group");
  assert.equal(out[0].figures.length, 3);
});

test("non-adjacent figures (with a paragraph between) stay singletons", () => {
  const blocks = [fig("a"), para("p"), fig("b")];
  assert.deepEqual(groupAdjacentFigures(blocks), blocks);
});

test("two runs separated by a paragraph each form their own group", () => {
  const blocks = [fig("a"), fig("b"), para("p"), fig("c"), fig("d")];
  const out = groupAdjacentFigures(blocks);
  assert.equal(out.length, 3);
  assert.equal(out[0].kind, "figure-group");
  assert.equal(out[0].figures.length, 2);
  assert.equal(out[1].kind, "paragraph");
  assert.equal(out[2].kind, "figure-group");
  assert.equal(out[2].figures.length, 2);
});

test("minGroupSize override (3) keeps a 2-figure run as singletons", () => {
  const out = groupAdjacentFigures([fig("a"), fig("b")], 3);
  assert.equal(out.length, 2);
  assert.equal(out[0].kind, "figure");
  assert.equal(out[1].kind, "figure");
});
