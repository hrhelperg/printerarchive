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

test("figure image with credit entirely absent -> source and license issues", () => {
  const e = {
    ...base,
    body: [
      {
        kind: "figure",
        image: {
          src: "/images/guides/z.webp",
          alt: "Detail",
          width: 1200,
          height: 800,
        },
      },
    ],
  };
  const issues = findContentIssues([e]);
  assert.ok(issues.some((i) => i.includes("image credit.source")));
  assert.ok(issues.some((i) => i.includes("image credit.license")));
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

// --- Phase 5.2 integrity rules ---

test("footnoteRef without matching footnote -> issue", () => {
  const e = {
    ...base,
    body: [
      { kind: "paragraph", text: "p" },
      { kind: "footnoteRef", n: 1 },
    ],
  };
  const issues = findContentIssues([e]);
  assert.ok(
    issues.some((i) => i.includes("footnoteRef 1 has no matching footnote")),
  );
});

test("orphan footnote (no footnoteRef in body) -> issue", () => {
  const e = {
    ...base,
    body: [{ kind: "paragraph", text: "p" }],
    footnotes: [{ n: 1, text: "Source citation." }],
  };
  const issues = findContentIssues([e]);
  assert.ok(issues.some((i) => i.includes("orphan footnote 1")));
});

test("duplicate footnote n -> issue", () => {
  const e = {
    ...base,
    body: [
      { kind: "paragraph", text: "p" },
      { kind: "footnoteRef", n: 1 },
    ],
    footnotes: [
      { n: 1, text: "First." },
      { n: 1, text: "Second." },
    ],
  };
  const issues = findContentIssues([e]);
  assert.ok(issues.some((i) => i.includes("duplicate footnote 1")));
});

test("footnoteRef with non-positive n -> issue", () => {
  const e = {
    ...base,
    body: [
      { kind: "paragraph", text: "p" },
      { kind: "footnoteRef", n: 0 },
    ],
  };
  const issues = findContentIssues([e]);
  assert.ok(
    issues.some((i) =>
      i.includes("footnoteRef n must be a positive integer"),
    ),
  );
});

test("footnote with missing text -> issue", () => {
  const e = {
    ...base,
    body: [
      { kind: "paragraph", text: "p" },
      { kind: "footnoteRef", n: 1 },
    ],
    footnotes: [{ n: 1, text: "" }],
  };
  const issues = findContentIssues([e]);
  assert.ok(issues.some((i) => i.includes("footnote 1 text missing")));
});

test("figurePair with missing alt on left -> issue", () => {
  const e = {
    ...base,
    body: [
      {
        kind: "figurePair",
        left: {
          src: "/images/x/a.jpg",
          alt: "",
          width: 1600,
          height: 1066,
          credit: { source: "NARA", license: "Public domain" },
        },
        right: {
          src: "/images/x/b.jpg",
          alt: "Right ok",
          width: 1600,
          height: 1066,
          credit: { source: "NARA", license: "Public domain" },
        },
      },
    ],
  };
  const issues = findContentIssues([e]);
  assert.ok(
    issues.some((i) => i.includes("figurePair[0].left image alt missing")),
  );
});

test("figurePair with missing license on right -> issue", () => {
  const e = {
    ...base,
    body: [
      {
        kind: "figurePair",
        left: {
          src: "/images/x/a.jpg",
          alt: "Left ok",
          width: 1600,
          height: 1066,
          credit: { source: "NARA", license: "Public domain" },
        },
        right: {
          src: "/images/x/b.jpg",
          alt: "Right ok",
          width: 1600,
          height: 1066,
          credit: { source: "NARA", license: "" },
        },
      },
    ],
  };
  const issues = findContentIssues([e]);
  assert.ok(
    issues.some((i) =>
      i.includes("figurePair[0].right image credit.license"),
    ),
  );
});

test("archivalTable with empty caption -> issue", () => {
  const e = {
    ...base,
    body: [
      {
        kind: "archivalTable",
        caption: "",
        headers: ["A", "B"],
        rows: [["1", "2"]],
      },
    ],
  };
  const issues = findContentIssues([e]);
  assert.ok(
    issues.some((i) =>
      i.includes("archivalTable[0] caption missing or empty"),
    ),
  );
});

test("deepReading ref does not resolve -> issue", () => {
  const e = {
    ...base,
    deepReading: [
      { ref: { section: "history", slug: "does-not-exist" } },
    ],
  };
  const issues = findContentIssues([e]);
  assert.ok(
    issues.some((i) =>
      i.includes("deepReading ref does not resolve -> history/does-not-exist"),
    ),
  );
});

test("modernTools with unknown id -> issue", () => {
  const e = { ...base, modernTools: ["not-a-real-product"] };
  const issues = findContentIssues([e]);
  assert.ok(
    issues.some((i) => i.includes("modernTools id does not resolve")),
  );
});

test("modernTools with valid ids -> no issues", () => {
  const e = { ...base, modernTools: ["smart-printer", "pdf-editor"] };
  assert.deepEqual(findContentIssues([e]), []);
});

test("valid essay exercising all new variants -> no issues", () => {
  // A self-referencing entry that exercises every new block kind + new
  // BaseEntry field added in Phase 5.2. The deepReading entry points
  // back at this entry itself so the ref resolves within the closed set.
  const self = {
    ...base,
    slug: "longform-essay-fixture",
    body: [
      { kind: "paragraph", text: "p" },
      { kind: "footnoteRef", n: 1 },
      {
        kind: "sourceCallout",
        text: "A source quote.",
        attribution: "Author",
      },
      { kind: "editorialAside", text: "An editor's note." },
      { kind: "timelineBreak", era: "Impact era" },
      {
        kind: "figurePair",
        left: {
          src: "/images/x/a.jpg",
          alt: "Left",
          width: 1600,
          height: 1066,
          credit: { source: "NARA", license: "Public domain" },
        },
        right: {
          src: "/images/x/b.jpg",
          alt: "Right",
          width: 1600,
          height: 1066,
          credit: { source: "NARA", license: "Public domain" },
        },
        caption: "Two views of the same scene.",
      },
      {
        kind: "quotePlate",
        text: "A featured line.",
        attribution: "Author",
      },
      {
        kind: "archivalTable",
        caption: "Output by year.",
        headers: ["Year", "Pages"],
        rows: [["1985", "120k"]],
      },
      {
        kind: "researchInset",
        title: "Key data",
        items: ["one", "two"],
      },
    ],
    footnotes: [{ n: 1, text: "First citation." }],
    essayLead: {
      kicker: "Essay",
      standfirst: "A short standfirst.",
      byline: "PrinterArchive Editorial",
    },
    deepReading: [
      {
        ref: { section: "guides", slug: "longform-essay-fixture" },
        note: "Recurses to self for closed-set test.",
      },
    ],
  };
  assert.deepEqual(findContentIssues([self]), []);
});
