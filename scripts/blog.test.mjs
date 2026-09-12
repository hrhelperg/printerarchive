// Unit tests for the editorial Blog layer: the content-integrity rules that
// guard inline links and blog posts, and the deterministic reading estimate.
//
// Runs under Node type-stripping alongside the other suites:
//   node --test --experimental-strip-types

import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

// Modules are loaded by path because only type-only "@/" imports survive
// Node's type-stripping — the same approach the other suites use. The post
// modules themselves are read straight from content/blog, which is also how
// scripts/check-content.mjs loads them.
const root = join(import.meta.dirname, "..");
const load = (rel) => import(pathToFileURL(join(root, rel)).href);

const { findContentIssues } = await load("lib/content/integrity.ts");
const { readingMinutes } = await load("lib/blog/reading-time.ts");

const postFiles = readdirSync(join(root, "content/blog"))
  .filter((f) => f.endsWith(".ts"))
  .sort();
const allPosts = [];
for (const f of postFiles) {
  const mod = await load(`content/blog/${f}`);
  allPosts.push(mod.default);
}

const basePost = (over = {}) => ({
  section: "blog",
  slug: "test-post",
  title: "Test post",
  description: "A test post.",
  summary: "A test post summary.",
  category: "Digital Publishing",
  body: [{ kind: "paragraph", text: "Body text." }],
  published: "2026-01-01",
  updated: "2026-01-01",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["test"],
  sources: [{ title: "A source", url: "https://example.org" }],
  ...over,
});

test("a well-formed blog post passes integrity", () => {
  assert.deepEqual(findContentIssues([basePost()]), []);
});

test("a blog post must declare a category", () => {
  const issues = findContentIssues([basePost({ category: "" })]);
  assert.ok(issues.some((i) => i.includes("must declare a category")));
});

test("a blog post must cite at least one source", () => {
  const issues = findContentIssues([basePost({ sources: [] })]);
  assert.ok(issues.some((i) => i.includes("must cite at least one source")));
});

test("factsVerified must be an ISO date when present", () => {
  const issues = findContentIssues([basePost({ factsVerified: "Sept 2026" })]);
  assert.ok(issues.some((i) => i.includes("factsVerified is not an ISO date")));
});

test("an inline anchor missing from the paragraph text is an error", () => {
  const issues = findContentIssues([
    basePost({
      body: [
        {
          kind: "paragraph",
          text: "Body text.",
          links: [{ anchor: "not present", href: "/tools/what-is-pdf" }],
        },
      ],
    }),
  ]);
  assert.ok(issues.some((i) => i.includes("occurs 0x in text")));
});

test("an ambiguous inline anchor (appearing twice) is an error", () => {
  const issues = findContentIssues([
    basePost({
      body: [
        {
          kind: "paragraph",
          text: "PDF and PDF again.",
          links: [{ anchor: "PDF", href: "/tools/what-is-pdf" }],
        },
      ],
    }),
  ]);
  assert.ok(issues.some((i) => i.includes("occurs 2x in text")));
});

test("an internal inline link to a non-existent route is an error", () => {
  const issues = findContentIssues([
    basePost({
      body: [
        {
          kind: "paragraph",
          text: "See the widget page.",
          links: [{ anchor: "widget page", href: "/guides/no-such-widget" }],
        },
      ],
    }),
  ]);
  assert.ok(issues.some((i) => i.includes("internal link does not resolve")));
});

test("an internal inline link to a static route resolves", () => {
  const issues = findContentIssues([
    basePost({
      body: [
        {
          kind: "paragraph",
          text: "See the timeline.",
          links: [{ anchor: "timeline", href: "/timeline" }],
        },
      ],
    }),
  ]);
  assert.deepEqual(issues, []);
});

test("an off-site link must be marked external and use https", () => {
  const unmarked = findContentIssues([
    basePost({
      body: [
        {
          kind: "paragraph",
          text: "See elsewhere.",
          links: [{ anchor: "elsewhere", href: "https://example.org" }],
        },
      ],
    }),
  ]);
  assert.ok(unmarked.some((i) => i.includes("not marked external")));

  const insecure = findContentIssues([
    basePost({
      body: [
        {
          kind: "paragraph",
          text: "See elsewhere.",
          links: [
            { anchor: "elsewhere", href: "http://example.org", external: true },
          ],
        },
      ],
    }),
  ]);
  assert.ok(insecure.some((i) => i.includes("must be https")));
});

test("readingMinutes is deterministic and at least one minute", () => {
  const short = basePost();
  assert.equal(readingMinutes(short), readingMinutes(short));
  assert.equal(readingMinutes(short), 1);

  const long = basePost({
    body: [{ kind: "paragraph", text: "word ".repeat(440).trim() }],
  });
  // 440 body words + 4 summary words at 220 wpm rounds up to 3 minutes.
  assert.equal(readingMinutes(long), 3);
});

test("every registered post is unique by slug and has a body", () => {
  const slugs = allPosts.map((p) => p.slug);
  assert.equal(new Set(slugs).size, slugs.length, "duplicate blog slug");
  for (const p of allPosts) {
    assert.equal(p.section, "blog", `${p.slug}: section must be "blog"`);
    assert.ok(p.body.length > 0, `${p.slug}: empty body`);
  }
});

test("at most one post is featured", () => {
  const featuredCount = allPosts.filter((p) => p.featured).length;
  assert.ok(featuredCount <= 1, "at most one post may be featured");
});

test("every post file is registered in the blog registry", async () => {
  const registry = readFileSync(join(root, "lib/blog/registry.ts"), "utf8");
  for (const f of postFiles) {
    const slug = f.replace(/\.ts$/, "");
    assert.ok(
      registry.includes(`@/content/blog/${slug}`),
      `content/blog/${slug}.ts is not imported by lib/blog/registry.ts`,
    );
  }
});

test("every cross-register reference in a post points at a real content file", () => {
  // findContentIssues resolves refs against whatever set it is handed, and the
  // real gate (scripts/check-content.mjs, plus the build gate in app/sitemap.ts)
  // hands it the whole corpus. Here the same targets are checked directly
  // against the content tree, so a post can never ship a dangling cross-link.
  const exists = (section, slug) =>
    existsSync(join(root, "content", section, `${slug}.ts`));

  for (const post of allPosts) {
    for (const ref of post.related ?? []) {
      assert.ok(
        exists(ref.section, ref.slug),
        `${post.slug}: related -> ${ref.section}/${ref.slug} does not exist`,
      );
    }
    for (const item of post.deepReading ?? []) {
      assert.ok(
        exists(item.ref.section, item.ref.slug),
        `${post.slug}: deepReading -> ${item.ref.section}/${item.ref.slug} does not exist`,
      );
    }
    for (const b of post.body) {
      for (const l of b.links ?? []) {
        if (l.external) continue;
        const parts = l.href.replace(/^\//, "").split("/");
        if (parts.length !== 2) continue; // section hub or static route
        assert.ok(
          exists(parts[0], parts[1]),
          `${post.slug}: inline link -> ${l.href} does not exist`,
        );
      }
    }
  }
});

test("external links in posts are https and restrained in number", () => {
  for (const post of allPosts) {
    const external = post.body.flatMap((b) =>
      (b.links ?? []).filter((l) => l.external),
    );
    for (const l of external) {
      assert.ok(
        l.href.startsWith("https://"),
        `${post.slug}: external link is not https -> ${l.href}`,
      );
    }
    assert.ok(
      external.length <= 5,
      `${post.slug}: ${external.length} external links is not restrained`,
    );
  }
});

test("no ChatGPT-style citation or markdown artefacts leak into post prose", () => {
  const forbidden = [
    /【[^】]*】/, // 【…】 citation brackets
    /\[\d+\]/, // [1] style inline citations
    /\]\(https?:\/\//, // markdown links
    /(^|\s)\*\*\S/, // bold markers
    /(^|\n)#{1,6}\s/, // markdown headings
    /`{1,3}/, // code fences / inline code
  ];
  const strings = [];
  const walk = (v) => {
    if (typeof v === "string") strings.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === "object") Object.values(v).forEach(walk);
  };
  for (const p of allPosts) {
    walk({ ...p, sources: undefined, footnotes: p.footnotes });
  }
  for (const s of strings) {
    if (s.startsWith("http")) continue;
    for (const re of forbidden) {
      assert.ok(!re.test(s), `artefact ${re} found in: ${s.slice(0, 90)}`);
    }
  }
});
