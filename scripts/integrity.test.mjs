import test from "node:test";
import assert from "node:assert/strict";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const root = join(import.meta.dirname, "..");
const { findContentIssues } = await import(
  pathToFileURL(join(root, "lib/content/integrity.ts")).href
);

const base = {
  section: "guides",
  slug: "x",
  title: "T",
  description: "D",
  summary: "S",
  body: [{ kind: "paragraph", text: "p" }],
  published: "2026-05-19",
  updated: "2026-05-19",
  author: "A",
  editor: "E",
  keywords: ["k"],
  difficulty: "introductory",
  estimatedTime: "5 min",
};

test("valid entry with no image -> no issues", () => {
  assert.deepEqual(findContentIssues([base]), []);
});

test("hero missing alt -> issue", () => {
  const e = {
    ...base,
    hero: {
      src: "/images/guides/x.webp",
      alt: "",
      width: 1200,
      height: 800,
      credit: { source: "Wikimedia Commons", license: "Public domain" },
    },
  };
  const issues = findContentIssues([e]);
  assert.ok(issues.some((i) => i.includes("image alt")));
});

test("hero missing license -> issue", () => {
  const e = {
    ...base,
    hero: {
      src: "/images/guides/x.webp",
      alt: "A vintage device",
      width: 1200,
      height: 800,
      credit: { source: "Wikimedia Commons", license: "" },
    },
  };
  const issues = findContentIssues([e]);
  assert.ok(issues.some((i) => i.includes("image credit.license")));
});

test("figure block with non-positive dimensions -> issue", () => {
  const e = {
    ...base,
    body: [
      {
        kind: "figure",
        image: {
          src: "/images/guides/y.webp",
          alt: "Detail",
          width: 0,
          height: 800,
          credit: { source: "National Archives", license: "Public domain" },
        },
      },
    ],
  };
  const issues = findContentIssues([e]);
  assert.ok(issues.some((i) => i.includes("image width")));
});

test("fully valid hero + figure -> no issues", () => {
  const e = {
    ...base,
    hero: {
      src: "/images/guides/x.webp",
      alt: "A vintage line printer",
      width: 1600,
      height: 1066,
      credit: {
        source: "Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Example",
        license: "CC BY-SA 4.0",
      },
    },
    body: [
      {
        kind: "figure",
        image: {
          src: "/images/guides/y.webp",
          alt: "Print head detail",
          width: 1200,
          height: 800,
          credit: { source: "National Archives", license: "Public domain" },
        },
      },
    ],
  };
  assert.deepEqual(findContentIssues([e]), []);
});
