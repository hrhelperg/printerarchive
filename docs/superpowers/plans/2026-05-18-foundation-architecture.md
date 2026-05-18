# PrinterArchive.net Foundation Architecture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the production-ready foundation of PrinterArchive.net — a static-first Next.js 15 editorial knowledge platform with a typed content model, SEO + internal-linking systems, an editorial design system, and a small set of real sample pages.

**Architecture:** Standalone Next.js 15 App Router (TypeScript strict, Tailwind, Server Components, fully static). Content lives as typed TypeScript modules under `content/`, aggregated by a registry and queried by pure functions. Nine section folders are thin route wrappers around two shared page components (`SectionHub`, `ArticlePage`) so the system scales to thousands of pages by adding one typed module per page. SEO (metadata, JSON-LD, sitemap, robots, llms.txt, RSS) and internal linking (breadcrumbs, related, clusters) are modular libraries.

**Tech Stack:** Next.js 15, React 19, TypeScript (strict), Tailwind CSS (as scaffolded), `next/font/google`. No DB/auth/payments/analytics. No added runtime deps. Verification: `tsc --noEmit`, `next lint` (if present), **`next build` is the source of truth**, plus a Node content-integrity test.

**Section IDs (canonical, 9):** `history`, `guides`, `troubleshooting`, `brands`, `workflows`, `tools`, `glossary`, `mobile-printing`, `fax`.

---

## File Structure

```
app/
  layout.tsx                root: fonts, metadataBase, Header/Footer, skip-link, Org+WebSite JSON-LD
  page.tsx                  homepage
  about/page.tsx
  contact/page.tsx
  not-found.tsx
  globals.css               Tailwind + editorial theme tokens
  sitemap.ts  robots.ts
  llms.txt/route.ts  feed.xml/route.ts
  <section>/page.tsx              thin -> <SectionHub section="..."/>
  <section>/[slug]/page.tsx       thin -> <ArticlePage .../> + generateStaticParams
components/
  layout/   Container.tsx Header.tsx Footer.tsx Breadcrumbs.tsx MetaBar.tsx
  content/  Prose.tsx ArticleBody.tsx SectionList.tsx RelatedLinks.tsx
            SourcesList.tsx FaqList.tsx Callout.tsx KeyTakeaways.tsx
            StepList.tsx Timeline.tsx
  pages/    SectionHub.tsx ArticlePage.tsx
  seo/      JsonLd.tsx
content/<section>/*.ts        typed content modules
lib/
  site.ts                   site constants + section metadata
  content/types.ts          ContentEntry union + ContentBlock
  content/registry.ts        aggregates all modules
  content/queries.ts         getEntry/getSection/getRelated/getBreadcrumbs/getAllRoutes
  content/integrity.test.mjs node:test content-integrity checks
  seo/metadata.ts           buildMetadata()
  seo/schema.ts             JSON-LD builders
docs/superpowers/...         spec + this plan
```

**Naming contract (used consistently across all tasks):**
- `SectionId` union (9 ids above). `ContentRef = { section: SectionId; slug: string }`.
- Registry export: `allEntries: ContentEntry[]`.
- Queries: `getEntry(section, slug)`, `getSection(section)`, `getRelated(entry, limit?)`, `getBreadcrumbs(section, slug)`, `getAllRoutes()`, `getSectionMeta(section)`.
- SEO: `buildMetadata(opts)`; `organizationSchema()`, `websiteSchema()`, `articleSchema(entry)`, `breadcrumbSchema(items)`, `faqSchema(faqs)`.
- Site: `site` object with `site.publisher = { name: "HELPERG LLC", email: "info@helperg.com" }`.

---

## Task 1: Scaffold Next.js 15 project

**Files:** Create: entire scaffold in `/Users/petrohrys/printerarchive` (existing: `.git/`, `docs/`).

- [ ] **Step 1: Scaffold into the existing directory**

Run:
```bash
cd /Users/petrohrys/printerarchive && npx --yes create-next-app@latest . --typescript --tailwind --app --eslint --no-src-dir --import-alias "@/*" --use-npm --no-turbopack --skip-install --disable-git
```
If it refuses because the directory is non-empty, the only conflicting entries are `docs/` and `.git/` — re-run with `--yes` and accept; create-next-app ignores `.git` and `docs` is not a conflicting file. If a `.gitignore` collision occurs, keep the create-next-app version.

- [ ] **Step 2: Install dependencies**

Run: `cd /Users/petrohrys/printerarchive && npm install`
Expected: lockfile created, `node_modules/` present, exit 0.

- [ ] **Step 3: Capture scaffold reality**

Run: `cd /Users/petrohrys/printerarchive && cat package.json && ls app && npx next --version`
Record: Next version, Tailwind major (v3 has `tailwind.config.ts`; v4 uses `@tailwindcss/postcss` + `@theme` in CSS), whether `next lint` exists (`npm run lint` script present). Follow whatever was scaffolded; do not add deps to change it.

- [ ] **Step 4: Add typecheck script**

In `package.json` `scripts`, add: `"typecheck": "tsc --noEmit"`. Leave `lint`/`build`/`dev`/`start` as scaffolded.

- [ ] **Step 5: Commit**

```bash
cd /Users/petrohrys/printerarchive && git add -A && git commit -m "chore: scaffold Next.js 15 app router project

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

## Task 2: Strip boilerplate, set base globals

**Files:** Modify `app/page.tsx`, `app/layout.tsx`, `app/globals.css`. Delete `public/*.svg` defaults (next.svg, vercel.svg) if unused.

- [ ] **Step 1: Replace `app/globals.css`** with Tailwind import + editorial CSS custom properties (no component styles yet):

For Tailwind v4 `globals.css`:
```css
@import "tailwindcss";

@theme {
  --color-paper: #fbfaf7;
  --color-ink: #1a1a1a;
  --color-ink-soft: #4a4a46;
  --color-ink-faint: #6f6f68;
  --color-rule: #e3e0d8;
  --color-accent: #1f5d5a;
  --color-accent-hover: #15413f;
  --font-serif: var(--font-source-serif), Georgia, "Times New Roman", serif;
  --font-sans: var(--font-inter), system-ui, sans-serif;
  --font-mono: var(--font-mono-font), ui-monospace, SFMono-Regular, monospace;
}

:root { color-scheme: light; }
html { -webkit-text-size-adjust: 100%; }
body {
  background: var(--color-paper);
  color: var(--color-ink);
  font-family: var(--font-serif);
  font-size: 1.0625rem;
  line-height: 1.7;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
a { color: var(--color-accent); text-underline-offset: 3px; }
a:hover { color: var(--color-accent-hover); }
:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
```
(If scaffold is Tailwind v3: keep `@tailwind base/components/utilities`, move the tokens into `:root` as plain CSS vars and into `tailwind.config.ts` `theme.extend.colors/fontFamily`. Same token names.)

- [ ] **Step 2: Minimal `app/layout.tsx`** placeholder (fonts/JSON-LD added in Task 10):
```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "PrinterArchive", description: "" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: Minimal `app/page.tsx`** (real homepage in Task 12):
```tsx
export default function HomePage() {
  return <main>PrinterArchive</main>;
}
```

- [ ] **Step 4: Verify build**

Run: `cd /Users/petrohrys/printerarchive && npm run build`
Expected: build succeeds, exit 0.

- [ ] **Step 5: Commit**
```bash
cd /Users/petrohrys/printerarchive && git add -A && git commit -m "chore: strip boilerplate, add editorial theme tokens

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

## Task 3: Site constants & section metadata (`lib/site.ts`)

**Files:** Create `lib/site.ts`.

- [ ] **Step 1: Write `lib/site.ts`**
```ts
export type SectionId =
  | "history" | "guides" | "troubleshooting" | "brands"
  | "workflows" | "tools" | "glossary" | "mobile-printing" | "fax";

export interface SectionMeta {
  id: SectionId;
  label: string;        // nav label
  title: string;        // hub <h1>
  description: string;  // hub meta + lede
}

export const SECTIONS: SectionMeta[] = [
  { id: "history", label: "History", title: "Printing History",
    description: "How printing, fax, and document technology developed over time." },
  { id: "guides", label: "Guides", title: "Technology Guides",
    description: "Clear explanations of how printing and scanning technologies work." },
  { id: "troubleshooting", label: "Troubleshooting", title: "Troubleshooting",
    description: "Structured, methodical fixes for common printing problems." },
  { id: "brands", label: "Brands", title: "Printer Brands",
    description: "Reference overviews of major printer and imaging manufacturers." },
  { id: "workflows", label: "Workflows", title: "Document Workflows",
    description: "Repeatable processes for scanning, printing, and document handling." },
  { id: "tools", label: "Tools", title: "Tools & Formats",
    description: "Reference explanations of printing-related tools, formats, and standards." },
  { id: "glossary", label: "Glossary", title: "Printing Glossary",
    description: "Definitions of printing, scanning, and document terminology." },
  { id: "mobile-printing", label: "Mobile Printing", title: "Mobile Printing",
    description: "Printing from phones and tablets, including AirPrint and standards." },
  { id: "fax", label: "Fax", title: "Fax Technology",
    description: "How fax technology works and how it evolved." },
];

export const site = {
  name: "PrinterArchive",
  legalName: "PrinterArchive.net",
  url: "https://printerarchive.net",
  tagline: "The internet archive of printing knowledge.",
  description:
    "PrinterArchive.net is an educational reference on printing, fax, scanning, mobile printing, document workflows, and the history of printing technology.",
  publisher: { name: "HELPERG LLC", email: "info@helperg.com" },
  sections: SECTIONS,
} as const;

export const getSectionMeta = (id: SectionId): SectionMeta => {
  const s = SECTIONS.find((x) => x.id === id);
  if (!s) throw new Error(`Unknown section: ${id}`);
  return s;
};
```

- [ ] **Step 2: Typecheck**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck`
Expected: exit 0.

- [ ] **Step 3: Commit**
```bash
cd /Users/petrohrys/printerarchive && git add lib/site.ts && git commit -m "feat: add site constants and section metadata

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

## Task 4: Typed content model (`lib/content/types.ts`)

**Files:** Create `lib/content/types.ts`.

- [ ] **Step 1: Write `lib/content/types.ts`**
```ts
import type { SectionId } from "@/lib/site";

export interface ContentRef { section: SectionId; slug: string }

export type ContentBlock =
  | { kind: "heading"; level: 2 | 3; text: string; id?: string }
  | { kind: "paragraph"; text: string }
  | { kind: "list"; ordered?: boolean; items: string[] }
  | { kind: "callout"; tone: "note" | "tip" | "warning"; title?: string; text: string }
  | { kind: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { kind: "keyTakeaways"; items: string[] }
  | { kind: "timeline"; events: { period: string; text: string }[] }
  | { kind: "steps"; steps: { title: string; text: string }[] };

export interface BaseEntry {
  section: SectionId;
  slug: string;
  title: string;
  description: string;   // <=160 chars, SEO meta
  summary: string;       // lede paragraph
  body: ContentBlock[];
  published: string;     // ISO date
  updated: string;       // ISO date
  author: string;
  editor: string;
  keywords: string[];
  cluster?: string;
  related?: ContentRef[];
  faqs?: { q: string; a: string }[];
  sources?: { title: string; url?: string; publisher?: string }[];
}

export interface GuideEntry extends BaseEntry {
  section: "guides" | "mobile-printing";
  difficulty: "introductory" | "intermediate" | "advanced";
  estimatedTime: string;
}
export interface TroubleshootingEntry extends BaseEntry {
  section: "troubleshooting";
  symptom: string;
  appliesTo: string[];
}
export interface HistoryEntry extends BaseEntry {
  section: "history" | "fax";
  era: string;
}
export interface GlossaryEntry extends BaseEntry {
  section: "glossary";
  term: string;
  shortDefinition: string;
  seeAlso: ContentRef[];
}
export interface BrandEntry extends BaseEntry {
  section: "brands";
  brand: string;
  focusAreas: string[];
}
export interface WorkflowEntry extends BaseEntry {
  section: "workflows";
  goal: string;
  toolsUsed: string[];
}
export interface ToolEntry extends BaseEntry {
  section: "tools";
  purpose: string;
}

export type ContentEntry =
  | GuideEntry | TroubleshootingEntry | HistoryEntry
  | GlossaryEntry | BrandEntry | WorkflowEntry | ToolEntry;
```

- [ ] **Step 2: Typecheck**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck` → exit 0.

- [ ] **Step 3: Commit**
```bash
cd /Users/petrohrys/printerarchive && git add lib/content/types.ts && git commit -m "feat: add typed content model

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

## Task 5: Content stubs, registry, queries + integrity test

**Files:** Create `content/<section>/_index.ts` placeholder modules (one minimal real entry per section so routes/build work; replaced with full content in Task 16), `lib/content/registry.ts`, `lib/content/queries.ts`, `lib/content/integrity.test.mjs`.

- [ ] **Step 1: Create one minimal but real entry per section.** Example `content/guides/how-laser-printers-work.ts`:
```ts
import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  section: "guides",
  slug: "how-laser-printers-work",
  title: "How Laser Printers Work",
  description: "How a laser printer turns digital pages into printed output using static charge, toner, and heat.",
  summary: "Laser printing uses electrostatic charge and fused toner powder to produce sharp, fast text output.",
  difficulty: "introductory",
  estimatedTime: "8 min read",
  body: [
    { kind: "paragraph", text: "Placeholder factual lede — replaced with full content in Task 16." },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["laser printer", "toner", "electrophotography"],
  cluster: "printing-technology",
  related: [{ section: "guides", slug: "how-inkjet-printers-work" }],
};
export default entry;
```
Create equivalent minimal real entries (no lorem, factual one-liners) for: `content/history/history-of-printers.ts`, `content/history/history-of-fax-machines.ts`, `content/guides/how-inkjet-printers-work.ts`, `content/troubleshooting/printer-offline-guide.ts`, `content/mobile-printing/what-is-airprint.ts`, `content/fax/how-fax-machines-work.ts`, `content/brands/hewlett-packard.ts`, `content/workflows/scan-to-searchable-pdf.ts`, `content/tools/what-is-pdf.ts`, and glossary entries `content/glossary/dpi.ts`, `content/glossary/duplex-printing.ts`, `content/glossary/toner.ts`, `content/glossary/airprint.ts`, `content/glossary/ocr.ts`, `content/glossary/ppm.ts`. Use the correct interface per section (`HistoryEntry` with `era`, `TroubleshootingEntry` with `symptom`/`appliesTo`, `GlossaryEntry` with `term`/`shortDefinition`/`seeAlso`, `BrandEntry` with `brand`/`focusAreas`, `WorkflowEntry` with `goal`/`toolsUsed`, `ToolEntry` with `purpose`). `mobile-printing/what-is-airprint` uses `GuideEntry` (section `"mobile-printing"`).

- [ ] **Step 2: Write `lib/content/registry.ts`** (explicit imports — static, tree-shakeable, no fs):
```ts
import type { ContentEntry } from "@/lib/content/types";
import historyOfPrinters from "@/content/history/history-of-printers";
import historyOfFax from "@/content/history/history-of-fax-machines";
import howLaser from "@/content/guides/how-laser-printers-work";
import howInkjet from "@/content/guides/how-inkjet-printers-work";
import printerOffline from "@/content/troubleshooting/printer-offline-guide";
import whatIsAirprint from "@/content/mobile-printing/what-is-airprint";
import howFax from "@/content/fax/how-fax-machines-work";
import hp from "@/content/brands/hewlett-packard";
import scanToPdf from "@/content/workflows/scan-to-searchable-pdf";
import whatIsPdf from "@/content/tools/what-is-pdf";
import gDpi from "@/content/glossary/dpi";
import gDuplex from "@/content/glossary/duplex-printing";
import gToner from "@/content/glossary/toner";
import gAirprint from "@/content/glossary/airprint";
import gOcr from "@/content/glossary/ocr";
import gPpm from "@/content/glossary/ppm";

export const allEntries: ContentEntry[] = [
  historyOfPrinters, historyOfFax, howLaser, howInkjet, printerOffline,
  whatIsAirprint, howFax, hp, scanToPdf, whatIsPdf,
  gDpi, gDuplex, gToner, gAirprint, gOcr, gPpm,
];
```

- [ ] **Step 3: Write `lib/content/queries.ts`**
```ts
import type { SectionId } from "@/lib/site";
import { getSectionMeta } from "@/lib/site";
import type { ContentEntry, ContentRef } from "@/lib/content/types";
import { allEntries } from "@/lib/content/registry";

export const getSection = (section: SectionId): ContentEntry[] =>
  allEntries
    .filter((e) => e.section === section)
    .sort((a, b) => (a.updated < b.updated ? 1 : -1));

export const getEntry = (section: SectionId, slug: string): ContentEntry | undefined =>
  allEntries.find((e) => e.section === section && e.slug === slug);

export const getAllRoutes = (): ContentRef[] =>
  allEntries.map((e) => ({ section: e.section, slug: e.slug }));

export function getRelated(entry: ContentEntry, limit = 4): ContentEntry[] {
  const explicit = (entry.related ?? [])
    .map((r) => getEntry(r.section, r.slug))
    .filter((e): e is ContentEntry => Boolean(e));
  const kw = new Set(entry.keywords);
  const scored = allEntries
    .filter((e) => !(e.section === entry.section && e.slug === entry.slug))
    .filter((e) => !explicit.includes(e))
    .map((e) => {
      let score = 0;
      if (entry.cluster && e.cluster === entry.cluster) score += 3;
      score += e.keywords.filter((k) => kw.has(k)).length;
      return { e, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.e);
  return [...explicit, ...scored].slice(0, limit);
}

export function getBreadcrumbs(section: SectionId, slug?: string) {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: getSectionMeta(section).label, href: `/${section}` },
  ];
  if (slug) {
    const e = getEntry(section, slug);
    if (e) crumbs.push({ name: e.title, href: `/${section}/${slug}` });
  }
  return crumbs;
}
```

- [ ] **Step 4: Write `lib/content/integrity.test.mjs`** (Node built-in test runner; tests real registry logic):
```js
import { test } from "node:test";
import assert from "node:assert/strict";
import { allEntries } from "../../lib/content/registry.ts";

test("slugs are unique within a section", () => {
  const seen = new Set();
  for (const e of allEntries) {
    const key = `${e.section}/${e.slug}`;
    assert.ok(!seen.has(key), `duplicate ${key}`);
    seen.add(key);
  }
});

test("related refs resolve to real entries", () => {
  const keys = new Set(allEntries.map((e) => `${e.section}/${e.slug}`));
  for (const e of allEntries)
    for (const r of e.related ?? [])
      assert.ok(keys.has(`${r.section}/${r.slug}`),
        `${e.section}/${e.slug} -> missing ${r.section}/${r.slug}`);
});

test("required fields present and dates ISO", () => {
  const iso = /^\d{4}-\d{2}-\d{2}$/;
  for (const e of allEntries) {
    for (const f of ["title", "description", "summary", "author", "editor"])
      assert.ok(e[f] && String(e[f]).trim().length > 0, `${e.slug} missing ${f}`);
    assert.ok(e.description.length <= 165, `${e.slug} description too long`);
    assert.ok(iso.test(e.published) && iso.test(e.updated), `${e.slug} bad date`);
    assert.ok(Array.isArray(e.body) && e.body.length > 0, `${e.slug} empty body`);
  }
});
```
Add script to `package.json`: `"test:content": "node --experimental-strip-types --test lib/content/integrity.test.mjs"`.

- [ ] **Step 5: Run integrity test + typecheck**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run test:content`
Expected: typecheck exit 0; tests pass. If `--experimental-strip-types` is unsupported on the installed Node, change the import to compile via `tsx` ONLY if `tsx` is already present; otherwise convert the test to import a precompiled check — do NOT add a dependency. (Node 24 supports `--experimental-strip-types`.)

- [ ] **Step 6: Commit**
```bash
cd /Users/petrohrys/printerarchive && git add -A && git commit -m "feat: add content registry, queries, and integrity test

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

## Task 6: SEO libraries (`lib/seo/metadata.ts`, `lib/seo/schema.ts`)

**Files:** Create `lib/seo/metadata.ts`, `lib/seo/schema.ts`.

- [ ] **Step 1: Write `lib/seo/metadata.ts`**
```ts
import type { Metadata } from "next";
import { site } from "@/lib/site";

interface MetaOpts {
  title: string;
  description: string;
  path: string;             // e.g. "/guides/how-laser-printers-work"
  type?: "website" | "article";
  published?: string;
  modified?: string;
  keywords?: string[];
}

export function buildMetadata(o: MetaOpts): Metadata {
  const url = `${site.url}${o.path === "/" ? "" : o.path}`;
  const fullTitle = o.path === "/" ? `${site.name} — ${site.tagline}` : `${o.title} — ${site.name}`;
  return {
    title: fullTitle,
    description: o.description,
    keywords: o.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle, description: o.description, url, siteName: site.name,
      type: o.type ?? "website", locale: "en_US",
      ...(o.published ? { publishedTime: o.published, modifiedTime: o.modified } : {}),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: o.description },
    robots: { index: true, follow: true },
  };
}
```

- [ ] **Step 2: Write `lib/seo/schema.ts`**
```ts
import { site } from "@/lib/site";
import type { ContentEntry } from "@/lib/content/types";

export const organizationSchema = () => ({
  "@context": "https://schema.org", "@type": "Organization",
  name: site.name, url: site.url, legalName: site.publisher.name,
  publisher: { "@type": "Organization", name: site.publisher.name },
  email: site.publisher.email,
});

export const websiteSchema = () => ({
  "@context": "https://schema.org", "@type": "WebSite",
  name: site.name, url: site.url, description: site.description,
});

export const articleSchema = (e: ContentEntry) => ({
  "@context": "https://schema.org", "@type": "Article",
  headline: e.title, description: e.description,
  datePublished: e.published, dateModified: e.updated,
  author: { "@type": "Organization", name: e.author },
  editor: e.editor,
  publisher: { "@type": "Organization", name: site.publisher.name },
  mainEntityOfPage: `${site.url}/${e.section}/${e.slug}`,
  keywords: e.keywords.join(", "),
});

export const breadcrumbSchema = (items: { name: string; href: string }[]) => ({
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem", position: i + 1, name: it.name,
    item: `${site.url}${it.href === "/" ? "" : it.href}`,
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question", name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
```

- [ ] **Step 3: Typecheck** → `npm run typecheck` exit 0.

- [ ] **Step 4: Commit**
```bash
cd /Users/petrohrys/printerarchive && git add lib/seo && git commit -m "feat: add SEO metadata and JSON-LD schema builders

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

## Task 7: Design system primitives (`Container`, `Prose`, `JsonLd`)

**Files:** Create `components/layout/Container.tsx`, `components/content/Prose.tsx`, `components/seo/JsonLd.tsx`.

- [ ] **Step 1: `components/layout/Container.tsx`**
```tsx
export function Container({ children, width = "default", className = "" }:
  { children: React.ReactNode; width?: "default" | "prose" | "wide"; className?: string }) {
  const w = width === "prose" ? "max-w-[72ch]" : width === "wide" ? "max-w-6xl" : "max-w-4xl";
  return <div className={`mx-auto w-full ${w} px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}
```

- [ ] **Step 2: `components/seo/JsonLd.tsx`**
```tsx
export function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((d, i) => (
        <script key={i} type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
    </>
  );
}
```

- [ ] **Step 3: `components/content/Prose.tsx`** — editorial typographic wrapper:
```tsx
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-serif text-[1.0625rem] leading-[1.75] text-ink
      [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:tracking-tight
      [&_h3]:font-serif [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-2
      [&_p]:my-5 [&_ul]:my-5 [&_ol]:my-5 [&_li]:my-1.5 [&_ul]:list-disc [&_ol]:list-decimal
      [&_ul]:pl-6 [&_ol]:pl-6 [&_a]:underline">
      {children}
    </div>
  );
}
```

- [ ] **Step 4: Typecheck** → exit 0.

- [ ] **Step 5: Commit**
```bash
cd /Users/petrohrys/printerarchive && git add components && git commit -m "feat: add layout/prose/jsonld primitives

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

## Task 8: Content block renderer + content components

**Files:** Create `components/content/ArticleBody.tsx`, `Callout.tsx`, `KeyTakeaways.tsx`, `StepList.tsx`, `Timeline.tsx`, `FaqList.tsx`, `SourcesList.tsx`, `RelatedLinks.tsx`, `SectionList.tsx`.

- [ ] **Step 1: `Callout.tsx`, `KeyTakeaways.tsx`, `StepList.tsx`, `Timeline.tsx`** — calm, bordered, no shadow:
```tsx
// Callout.tsx
export function Callout({ tone, title, text }:
  { tone: "note" | "tip" | "warning"; title?: string; text: string }) {
  const border = tone === "warning" ? "border-l-amber-700" : "border-l-accent";
  return (
    <aside className={`my-6 border-l-2 ${border} bg-black/[0.02] px-4 py-3`}>
      {title && <p className="font-sans text-xs font-semibold uppercase tracking-wide text-ink-soft">{title}</p>}
      <p className="mt-1 text-ink-soft">{text}</p>
    </aside>
  );
}
```
```tsx
// KeyTakeaways.tsx
export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <section className="my-8 border border-rule bg-black/[0.015] p-5">
      <h2 className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-soft">Key takeaways</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">{items.map((t, i) => <li key={i}>{t}</li>)}</ul>
    </section>
  );
}
```
```tsx
// StepList.tsx
export function StepList({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="my-6 space-y-5">
      {steps.map((s, i) => (
        <li key={i} className="border-l border-rule pl-4">
          <p className="font-sans text-sm font-semibold text-ink">{i + 1}. {s.title}</p>
          <p className="mt-1 text-ink-soft">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
```
```tsx
// Timeline.tsx
export function Timeline({ events }: { events: { period: string; text: string }[] }) {
  return (
    <ol className="my-6 space-y-4">
      {events.map((e, i) => (
        <li key={i} className="grid grid-cols-[8rem_1fr] gap-4 max-sm:grid-cols-1 max-sm:gap-1">
          <span className="font-sans text-sm font-semibold text-ink-soft">{e.period}</span>
          <span className="text-ink-soft">{e.text}</span>
        </li>
      ))}
    </ol>
  );
}
```

- [ ] **Step 2: `ArticleBody.tsx`** — maps `ContentBlock[]` to semantic HTML, deriving heading ids for in-page anchors:
```tsx
import type { ContentBlock } from "@/lib/content/types";
import { Callout } from "./Callout";
import { KeyTakeaways } from "./KeyTakeaways";
import { StepList } from "./StepList";
import { Timeline } from "./Timeline";

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.kind) {
          case "heading": {
            const id = b.id ?? slugify(b.text);
            return b.level === 2
              ? <h2 key={i} id={id}>{b.text}</h2>
              : <h3 key={i} id={id}>{b.text}</h3>;
          }
          case "paragraph": return <p key={i}>{b.text}</p>;
          case "list": return b.ordered
            ? <ol key={i}>{b.items.map((t, j) => <li key={j}>{t}</li>)}</ol>
            : <ul key={i}>{b.items.map((t, j) => <li key={j}>{t}</li>)}</ul>;
          case "callout": return <Callout key={i} {...b} />;
          case "keyTakeaways": return <KeyTakeaways key={i} items={b.items} />;
          case "steps": return <StepList key={i} steps={b.steps} />;
          case "timeline": return <Timeline key={i} events={b.events} />;
          case "table":
            return (
              <figure key={i} className="my-6 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead><tr>{b.headers.map((h, j) =>
                    <th key={j} className="border border-rule bg-black/[0.02] px-3 py-2 text-left font-sans">{h}</th>)}</tr></thead>
                  <tbody>{b.rows.map((r, j) =>
                    <tr key={j}>{r.map((c, k) =>
                      <td key={k} className="border border-rule px-3 py-2">{c}</td>)}</tr>)}</tbody>
                </table>
                {b.caption && <figcaption className="mt-2 font-sans text-xs text-ink-faint">{b.caption}</figcaption>}
              </figure>
            );
        }
      })}
    </>
  );
}
```

- [ ] **Step 3: `FaqList.tsx`, `SourcesList.tsx`, `RelatedLinks.tsx`, `SectionList.tsx`**
```tsx
// FaqList.tsx
export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section className="mt-12 border-t border-rule pt-8">
      <h2 className="font-serif text-2xl tracking-tight">Frequently asked questions</h2>
      <dl className="mt-5 space-y-5">
        {faqs.map((f, i) => (
          <div key={i}>
            <dt className="font-sans text-sm font-semibold text-ink">{f.q}</dt>
            <dd className="mt-1 text-ink-soft">{f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
```
```tsx
// SourcesList.tsx
export function SourcesList({ sources }: { sources: { title: string; url?: string; publisher?: string }[] }) {
  return (
    <section className="mt-12 border-t border-rule pt-8">
      <h2 className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-soft">References</h2>
      <ul className="mt-3 space-y-2 text-sm text-ink-soft">
        {sources.map((s, i) => (
          <li key={i}>
            {s.url ? <a href={s.url} rel="noopener noreferrer">{s.title}</a> : s.title}
            {s.publisher && <span className="text-ink-faint"> — {s.publisher}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}
```
```tsx
// RelatedLinks.tsx
import Link from "next/link";
import type { ContentEntry } from "@/lib/content/types";
export function RelatedLinks({ items }: { items: ContentEntry[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-12 border-t border-rule pt-8">
      <h2 className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-soft">Related reading</h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {items.map((e) => (
          <li key={`${e.section}/${e.slug}`} className="border border-rule p-4">
            <Link href={`/${e.section}/${e.slug}`} className="font-serif text-lg no-underline hover:underline">{e.title}</Link>
            <p className="mt-1 text-sm text-ink-soft">{e.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
```
```tsx
// SectionList.tsx — used by hub pages, must be genuinely useful (not thin)
import Link from "next/link";
import type { ContentEntry } from "@/lib/content/types";
export function SectionList({ items }: { items: ContentEntry[] }) {
  return (
    <ul className="mt-8 divide-y divide-rule border-y border-rule">
      {items.map((e) => (
        <li key={`${e.section}/${e.slug}`} className="py-6">
          <Link href={`/${e.section}/${e.slug}`} className="font-serif text-xl tracking-tight no-underline hover:underline">{e.title}</Link>
          <p className="mt-1.5 text-ink-soft">{e.summary}</p>
          <p className="mt-2 font-sans text-xs uppercase tracking-wide text-ink-faint">Updated {e.updated}</p>
        </li>
      ))}
    </ul>
  );
}
```

- [ ] **Step 4: Typecheck** → exit 0.

- [ ] **Step 5: Commit**
```bash
cd /Users/petrohrys/printerarchive && git add components && git commit -m "feat: add content block renderer and content components

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

## Task 9: Header, Footer, Breadcrumbs, MetaBar

**Files:** Create `components/layout/Header.tsx`, `Footer.tsx`, `Breadcrumbs.tsx`, `MetaBar.tsx`.

- [ ] **Step 1: `Breadcrumbs.tsx`**
```tsx
import Link from "next/link";
export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-sans text-xs text-ink-faint">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center gap-1.5">
            {i < items.length - 1
              ? <Link href={it.href} className="no-underline hover:underline">{it.name}</Link>
              : <span aria-current="page" className="text-ink-soft">{it.name}</span>}
            {i < items.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

- [ ] **Step 2: `MetaBar.tsx`**
```tsx
export function MetaBar({ author, editor, updated }:
  { author: string; editor: string; updated: string }) {
  return (
    <p className="mt-4 font-sans text-xs text-ink-faint">
      By {author} · Edited by {editor} ·{" "}
      <time dateTime={updated}>Last updated {updated}</time>
    </p>
  );
}
```

- [ ] **Step 3: `Header.tsx`** — minimal editorial nav, all 9 sections:
```tsx
import Link from "next/link";
import { SECTIONS, site } from "@/lib/site";
import { Container } from "./Container";
export function Header() {
  return (
    <header className="border-b border-rule">
      <Container width="wide" className="flex flex-wrap items-baseline justify-between gap-y-3 py-5">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight no-underline">
          {site.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 font-sans text-sm text-ink-soft">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <Link href={`/${s.id}`} className="no-underline hover:text-accent">{s.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
```

- [ ] **Step 4: `Footer.tsx`** — editorial, publisher = HELPERG LLC / info@helperg.com:
```tsx
import Link from "next/link";
import { SECTIONS, site } from "@/lib/site";
import { Container } from "./Container";
export function Footer() {
  return (
    <footer className="mt-20 border-t border-rule py-12">
      <Container width="wide">
        <p className="font-serif text-lg">{site.name}</p>
        <p className="mt-1 max-w-prose text-sm text-ink-soft">{site.description}</p>
        <nav aria-label="Sections" className="mt-6">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 font-sans text-sm text-ink-soft">
            {SECTIONS.map((s) => (
              <li key={s.id}><Link href={`/${s.id}`} className="no-underline hover:text-accent">{s.label}</Link></li>
            ))}
            <li><Link href="/about" className="no-underline hover:text-accent">About</Link></li>
            <li><Link href="/contact" className="no-underline hover:text-accent">Contact</Link></li>
          </ul>
        </nav>
        <p className="mt-8 font-sans text-xs text-ink-faint">
          Published by {site.publisher.name} · <a href={`mailto:${site.publisher.email}`}>{site.publisher.email}</a>
          {" "}· © {new Date().getFullYear()} {site.publisher.name}. Educational reference content.
        </p>
      </Container>
    </footer>
  );
}
```

- [ ] **Step 5: Typecheck** → exit 0.

- [ ] **Step 6: Commit**
```bash
cd /Users/petrohrys/printerarchive && git add components && git commit -m "feat: add header, footer, breadcrumbs, metabar

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

## Task 10: Root layout (fonts, JSON-LD, chrome, not-found)

**Files:** Modify `app/layout.tsx`; create `app/not-found.tsx`.

- [ ] **Step 1: `app/layout.tsx`**
```tsx
import type { Metadata } from "next";
import { Source_Serif_4, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";

const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-source-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-font", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s — ${site.name}` },
  description: site.description,
  alternates: { canonical: "/", types: { "application/rss+xml": "/feed.xml" } },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2">Skip to content</a>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```
If a chosen `next/font/google` family fails to resolve at build, substitute the nearest available family (e.g. `Source_Serif_4`→`Lora`; `Inter`→`Work_Sans`; `JetBrains_Mono`→`IBM_Plex_Mono`) keeping the same variable names. Do not add font dependencies.

- [ ] **Step 2: `app/not-found.tsx`**
```tsx
import Link from "next/link";
import { Container } from "@/components/layout/Container";
export default function NotFound() {
  return (
    <Container className="py-24">
      <h1 className="font-serif text-3xl tracking-tight">Page not found</h1>
      <p className="mt-3 text-ink-soft">This page is not part of the archive. Return to the <Link href="/">homepage</Link>.</p>
    </Container>
  );
}
```

- [ ] **Step 3: Build** → `npm run build` exit 0; confirm fonts resolve.

- [ ] **Step 4: Commit**
```bash
cd /Users/petrohrys/printerarchive && git add -A && git commit -m "feat: root layout with fonts, JSON-LD, chrome, 404

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

## Task 11: Shared SectionHub & ArticlePage + 9 section routes

**Files:** Create `components/pages/SectionHub.tsx`, `components/pages/ArticlePage.tsx`; create for each of the 9 sections `app/<section>/page.tsx` and `app/<section>/[slug]/page.tsx`.

- [ ] **Step 1: `components/pages/SectionHub.tsx`** (genuinely useful hub, not thin):
```tsx
import type { Metadata } from "next";
import { getSectionMeta, type SectionId } from "@/lib/site";
import { getSection, getBreadcrumbs } from "@/lib/content/queries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionList } from "@/components/content/SectionList";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";

export function hubMetadata(section: SectionId): Metadata {
  const m = getSectionMeta(section);
  return buildMetadata({ title: m.title, description: m.description, path: `/${section}` });
}

export function SectionHub({ section }: { section: SectionId }) {
  const m = getSectionMeta(section);
  const items = getSection(section);
  const crumbs = getBreadcrumbs(section);
  return (
    <Container className="py-12">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <h1 className="mt-6 font-serif text-4xl tracking-tight">{m.title}</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-soft">{m.description}</p>
      {items.length > 0
        ? <SectionList items={items} />
        : <p className="mt-10 text-ink-faint">New entries are being added to this section.</p>}
    </Container>
  );
}
```

- [ ] **Step 2: `components/pages/ArticlePage.tsx`**
```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { SectionId } from "@/lib/site";
import { getEntry, getBreadcrumbs, getRelated } from "@/lib/content/queries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MetaBar } from "@/components/layout/MetaBar";
import { Prose } from "@/components/content/Prose";
import { ArticleBody } from "@/components/content/ArticleBody";
import { FaqList } from "@/components/content/FaqList";
import { SourcesList } from "@/components/content/SourcesList";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema";

export function articleMetadata(section: SectionId, slug: string): Metadata {
  const e = getEntry(section, slug);
  if (!e) return {};
  return buildMetadata({
    title: e.title, description: e.description, path: `/${section}/${slug}`,
    type: "article", published: e.published, modified: e.updated, keywords: e.keywords,
  });
}

export function ArticlePage({ section, slug }: { section: SectionId; slug: string }) {
  const e = getEntry(section, slug);
  if (!e) notFound();
  const crumbs = getBreadcrumbs(section, slug);
  const related = getRelated(e);
  const schemas: object[] = [articleSchema(e), breadcrumbSchema(crumbs)];
  if (e.faqs?.length) schemas.push(faqSchema(e.faqs));
  return (
    <Container width="prose" className="py-12">
      <JsonLd data={schemas} />
      <Breadcrumbs items={crumbs} />
      <article className="mt-6">
        <header>
          <h1 className="font-serif text-4xl leading-tight tracking-tight">{e.title}</h1>
          <p className="mt-4 font-serif text-xl text-ink-soft">{e.summary}</p>
          <MetaBar author={e.author} editor={e.editor} updated={e.updated} />
        </header>
        <Prose><ArticleBody blocks={e.body} /></Prose>
        {e.faqs?.length ? <FaqList faqs={e.faqs} /> : null}
        {e.sources?.length ? <SourcesList sources={e.sources} /> : null}
        <RelatedLinks items={related} />
      </article>
    </Container>
  );
}
```

- [ ] **Step 3: Generate the 18 route files.** For EACH section id S in
`history guides troubleshooting brands workflows tools glossary mobile-printing fax`:

`app/S/page.tsx`:
```tsx
import { SectionHub, hubMetadata } from "@/components/pages/SectionHub";
export const metadata = hubMetadata("S");          // replace S with literal id
export default function Page() { return <SectionHub section="S" />; }
```
`app/S/[slug]/page.tsx`:
```tsx
import { ArticlePage, articleMetadata } from "@/components/pages/ArticlePage";
import { getSection } from "@/lib/content/queries";
export const dynamicParams = false;
export function generateStaticParams() {
  return getSection("S").map((e) => ({ slug: e.slug }));   // replace S with literal id
}
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then((p) => articleMetadata("S", p.slug));
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ArticlePage section="S" slug={slug} />;
}
```
Write all 9 pairs with the literal section id substituted (e.g. `app/history/page.tsx` uses `"history"`). Note `params` is a Promise in Next 15 — keep the `await`/`.then` form exactly.

- [ ] **Step 4: Build** → `npm run build`. Expected: all section + article routes prerendered as static, exit 0. Visit nothing manually; the build output must list each `/<section>` and `/<section>/<slug>` as ○ (Static).

- [ ] **Step 5: Commit**
```bash
cd /Users/petrohrys/printerarchive && git add -A && git commit -m "feat: shared section hub + article page and 9 section routes

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

## Task 12: Homepage

**Files:** Modify `app/page.tsx`.

- [ ] **Step 1: Write `app/page.tsx`** — editorial hero + category architecture + featured pulled from registry (no hardcoded fake lists):
```tsx
import Link from "next/link";
import { SECTIONS, site } from "@/lib/site";
import { getSection } from "@/lib/content/queries";
import { Container } from "@/components/layout/Container";

const featured = (id: Parameters<typeof getSection>[0], n = 3) => getSection(id).slice(0, n);

export default function HomePage() {
  return (
    <>
      <section className="border-b border-rule">
        <Container width="wide" className="py-20">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-ink-faint">{site.tagline}</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.1] tracking-tight max-sm:text-4xl">
            A calm, factual reference for printing, fax, and document technology.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">{site.description}</p>
        </Container>
      </section>

      <Container width="wide" className="py-16">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-soft">Browse the archive</h2>
        <ul className="mt-6 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s) => (
            <li key={s.id} className="bg-paper p-6">
              <Link href={`/${s.id}`} className="font-serif text-xl tracking-tight no-underline hover:underline">{s.title}</Link>
              <p className="mt-1.5 text-sm text-ink-soft">{s.description}</p>
            </li>
          ))}
        </ul>
      </Container>

      {(["guides", "troubleshooting", "history", "mobile-printing", "brands"] as const).map((id) => {
        const items = featured(id);
        if (items.length === 0) return null;
        const meta = SECTIONS.find((s) => s.id === id)!;
        return (
          <Container key={id} width="wide" className="border-t border-rule py-14">
            <div className="flex items-baseline justify-between">
              <h2 className="font-serif text-2xl tracking-tight">{meta.title}</h2>
              <Link href={`/${id}`} className="font-sans text-sm no-underline hover:underline">All {meta.label.toLowerCase()} →</Link>
            </div>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((e) => (
                <li key={e.slug} className="border border-rule p-5">
                  <Link href={`/${e.section}/${e.slug}`} className="font-serif text-lg tracking-tight no-underline hover:underline">{e.title}</Link>
                  <p className="mt-1.5 text-sm text-ink-soft">{e.description}</p>
                </li>
              ))}
            </ul>
          </Container>
        );
      })}
    </>
  );
}
```

- [ ] **Step 2: Build** → exit 0; homepage prerendered static.

- [ ] **Step 3: Commit**
```bash
cd /Users/petrohrys/printerarchive && git add app/page.tsx && git commit -m "feat: editorial homepage with category architecture

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

## Task 13: About & Contact pages

**Files:** Create `app/about/page.tsx`, `app/contact/page.tsx`.

- [ ] **Step 1: `app/about/page.tsx`** — serious, archival mission, no fake claims:
```tsx
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Prose } from "@/components/content/Prose";

export const metadata: Metadata = buildMetadata({
  title: "About", path: "/about",
  description: "PrinterArchive.net is an educational reference documenting printing, fax, scanning, and document technology.",
});

export default function AboutPage() {
  return (
    <Container width="prose" className="py-12">
      <h1 className="font-serif text-4xl tracking-tight">About PrinterArchive</h1>
      <Prose>
        <p>{site.name} is an independent educational reference. Its purpose is to document how printing, fax, scanning, mobile printing, and document workflows actually work — clearly, accurately, and without marketing language.</p>
        <h2>Editorial approach</h2>
        <p>Entries are written to be conservative and source-ready. We prefer to explain a mechanism precisely rather than state figures or dates we cannot stand behind. Where a claim depends on a specific source, that source is cited; where it cannot be verified, it is not asserted.</p>
        <h2>Scope</h2>
        <p>The archive covers printing history, technology guides, troubleshooting, brands, document workflows, tools and formats, a glossary, mobile printing, and fax technology. It is reference material, not product reviews or recommendations.</p>
        <h2>Publisher</h2>
        <p>{site.name} is published by {site.publisher.name}. Editorial questions and corrections can be sent to <a href={`mailto:${site.publisher.email}`}>{site.publisher.email}</a>.</p>
      </Prose>
    </Container>
  );
}
```

- [ ] **Step 2: `app/contact/page.tsx`** — trust-oriented, no fabricated address/phone/form backend:
```tsx
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Prose } from "@/components/content/Prose";

export const metadata: Metadata = buildMetadata({
  title: "Contact", path: "/contact",
  description: `Contact ${site.publisher.name}, publisher of ${site.name}, for corrections and editorial questions.`,
});

export default function ContactPage() {
  return (
    <Container width="prose" className="py-12">
      <h1 className="font-serif text-4xl tracking-tight">Contact</h1>
      <Prose>
        <p>{site.name} is published by {site.publisher.name}. We welcome corrections, clarifications, and factual feedback on any entry.</p>
        <h2>Corrections & editorial</h2>
        <p>Email <a href={`mailto:${site.publisher.email}`}>{site.publisher.email}</a>. When reporting a correction, please include the page URL and the specific statement in question so it can be verified against sources.</p>
        <h2>Scope of contact</h2>
        <p>We do not provide individual device support or product recommendations. Troubleshooting guidance is published in the troubleshooting section and applies generally rather than to specific support cases.</p>
      </Prose>
    </Container>
  );
}
```

- [ ] **Step 3: Build** → exit 0.

- [ ] **Step 4: Commit**
```bash
cd /Users/petrohrys/printerarchive && git add app/about app/contact && git commit -m "feat: about and contact pages

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

## Task 14: sitemap.ts & robots.ts

**Files:** Create `app/sitemap.ts`, `app/robots.ts`.

- [ ] **Step 1: `app/sitemap.ts`**
```ts
import type { MetadataRoute } from "next";
import { site, SECTIONS } from "@/lib/site";
import { allEntries } from "@/lib/content/registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about", "/contact", ...SECTIONS.map((s) => `/${s.id}`)];
  const statics = staticPaths.map((p) => ({
    url: `${site.url}${p}`, lastModified: new Date(), changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
  const articles = allEntries.map((e) => ({
    url: `${site.url}/${e.section}/${e.slug}`,
    lastModified: new Date(e.updated), changeFrequency: "yearly" as const, priority: 0.6,
  }));
  return [...statics, ...articles];
}
```

- [ ] **Step 2: `app/robots.ts`**
```ts
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
```

- [ ] **Step 3: Build** → exit 0; confirm `/sitemap.xml` and `/robots.txt` generated in build output.

- [ ] **Step 4: Commit**
```bash
cd /Users/petrohrys/printerarchive && git add app/sitemap.ts app/robots.ts && git commit -m "feat: sitemap and robots

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

## Task 15: llms.txt & feed.xml routes

**Files:** Create `app/llms.txt/route.ts`, `app/feed.xml/route.ts`.

- [ ] **Step 1: `app/llms.txt/route.ts`**
```ts
import { site, SECTIONS } from "@/lib/site";
import { getSection } from "@/lib/content/queries";

export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [
    `# ${site.name}`, "", `> ${site.description}`, "",
    `Site: ${site.url}`, `Publisher: ${site.publisher.name}`, "",
    "## Sections", "",
  ];
  for (const s of SECTIONS) {
    lines.push(`### ${s.title}`, s.description);
    for (const e of getSection(s.id))
      lines.push(`- ${e.title}: ${site.url}/${e.section}/${e.slug}`);
    lines.push("");
  }
  return new Response(lines.join("\n"),
    { headers: { "content-type": "text/plain; charset=utf-8" } });
}
```

- [ ] **Step 2: `app/feed.xml/route.ts`**
```ts
import { site } from "@/lib/site";
import { allEntries } from "@/lib/content/registry";

export const dynamic = "force-static";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
  const items = [...allEntries]
    .sort((a, b) => (a.updated < b.updated ? 1 : -1))
    .slice(0, 30)
    .map((e) => `    <item>
      <title>${esc(e.title)}</title>
      <link>${site.url}/${e.section}/${e.slug}</link>
      <guid>${site.url}/${e.section}/${e.slug}</guid>
      <pubDate>${new Date(e.updated).toUTCString()}</pubDate>
      <description>${esc(e.description)}</description>
    </item>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
    <title>${esc(site.name)}</title>
    <link>${site.url}</link>
    <description>${esc(site.description)}</description>
${items}
</channel></rss>`;
  return new Response(xml, { headers: { "content-type": "application/rss+xml; charset=utf-8" } });
}
```

- [ ] **Step 3: Build** → exit 0; `/llms.txt` and `/feed.xml` listed as static routes.

- [ ] **Step 4: Commit**
```bash
cd /Users/petrohrys/printerarchive && git add app/llms.txt app/feed.xml && git commit -m "feat: llms.txt and RSS feed routes

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

## Task 16: Author full sample content (replace stubs)

**Files:** Rewrite the 16 content modules created in Task 5 with full, factual, conservative, source-ready bodies. No new files; same paths/exports/types.

Authoring rules (apply to every module):
- Use `ContentBlock[]` only. Real explanatory prose. No lorem, no filler, no fabricated dates/specs/statistics/citations. Explain mechanisms conceptually; do not assert a precise year, market figure, or manufacturer claim unless it is uncontested general knowledge.
- Each long-form article (the 7 spec articles): `summary`, then a `keyTakeaways` block, 4–7 `heading`(level 2) sections with `paragraph`/`list`/`steps`/`timeline`/`table`/`callout` as appropriate, 3–5 `faqs`, and `sources` only if a genuine, well-known reference applies (else omit `sources`). Set `cluster` and `related` so each article links to ≥2 others. Heading hierarchy: page `<h1>` is the title; body uses level-2/level-3 only.
- Troubleshooting (`printer-offline-guide`): `symptom`, `appliesTo`, body built around an ordered `steps` block (methodical, general, safe — no destructive commands), plus `faqs`.
- History articles use `timeline` blocks framed by era/period words ("early mechanical era", "the laser era") rather than invented exact dates where exact dates are uncertain.
- Glossary entries: concise — `term`, `shortDefinition`, a 1–3 paragraph body, `seeAlso` to ≥1 related glossary/guide entry.
- Brand page (`hewlett-packard`): neutral reference overview of the company's role in printing/imaging at a general, uncontested level; `focusAreas`; cross-link to relevant guides + troubleshooting via `related`. No invented financials, dates, or product specs.
- Workflow (`scan-to-searchable-pdf`): `goal`, `toolsUsed`, ordered `steps`, conceptual (not vendor-specific).
- Tool (`what-is-pdf`): `purpose`, explanatory body about the format's role in printing workflows; informational only.

- [ ] **Step 1:** Rewrite `content/history/history-of-printers.ts` and `content/history/history-of-fax-machines.ts` (full bodies, timelines, cluster `printing-history`, cross-link to each other and to `fax/how-fax-machines-work`).
- [ ] **Step 2:** Rewrite `content/guides/how-laser-printers-work.ts` and `content/guides/how-inkjet-printers-work.ts` (cluster `printing-technology`, related to each other + glossary `toner`/`dpi`).
- [ ] **Step 3:** Rewrite `content/troubleshooting/printer-offline-guide.ts` (steps-based; related to guides + `mobile-printing/what-is-airprint`).
- [ ] **Step 4:** Rewrite `content/mobile-printing/what-is-airprint.ts` and `content/fax/how-fax-machines-work.ts`.
- [ ] **Step 5:** Rewrite `content/brands/hewlett-packard.ts`, `content/workflows/scan-to-searchable-pdf.ts`, `content/tools/what-is-pdf.ts`.
- [ ] **Step 6:** Rewrite the 6 glossary entries (`dpi`, `duplex-printing`, `toner`, `airprint`, `ocr`, `ppm`) with real definitions and `seeAlso` cross-links.
- [ ] **Step 7: Verify content integrity + types**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run test:content`
Expected: typecheck exit 0; all integrity tests pass (unique slugs, resolvable related refs, required fields, ISO dates, non-empty bodies, description length).

- [ ] **Step 8: Build** → `npm run build` exit 0; spot-check build output lists all article routes static.

- [ ] **Step 9: Commit**
```bash
cd /Users/petrohrys/printerarchive && git add content && git commit -m "content: author factual sample content for all sections

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

## Task 17: Full verification pass

**Files:** none (fixes only if needed).

- [ ] **Step 1: Typecheck** — `cd /Users/petrohrys/printerarchive && npm run typecheck` → exit 0.
- [ ] **Step 2: Lint** — `npm run lint`. If the script exists, it must pass (fix issues, no rule-disabling to hide real problems). **If `next lint`/lint script is absent**, record: "next lint unavailable in Next 15 scaffold — skipped per spec §3; no lint deps added." Do not install lint tooling.
- [ ] **Step 3: Content integrity** — `npm run test:content` → all pass.
- [ ] **Step 4: Production build (source of truth)** — `npm run build` → exit 0, zero errors. Confirm in output: homepage, `/about`, `/contact`, all 9 `/<section>`, every `/<section>/<slug>`, `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/feed.xml`, 404 — all present and static (○) where expected.
- [ ] **Step 5: Link & SSR sanity** — `npm run build` then `npx next start &` ; `curl -s localhost:3000 | grep -q '<h1'` and `curl -s localhost:3000/guides/how-laser-printers-work | grep -q 'application/ld+json'`; `curl -sI localhost:3000/sitemap.xml`; kill the server. Confirm SSR HTML contains real content and JSON-LD. (Use `run_in_background` for the server; stop it after.)
- [ ] **Step 6: Commit any fixes**
```bash
cd /Users/petrohrys/printerarchive && git add -A && git commit -m "chore: verification fixes (typecheck/lint/build/links)

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>" || echo "no fixes needed"
```

## Task 18: Remote, push, PR (or report exact commands)

**Files:** none.

- [ ] **Step 1: Add remote**
```bash
cd /Users/petrohrys/printerarchive && git remote add origin https://github.com/hrhelperg/printerarchive.git 2>/dev/null || git remote set-url origin https://github.com/hrhelperg/printerarchive.git
git remote -v
```
- [ ] **Step 2: Determine remote state** — `git ls-remote --heads origin 2>&1`. Branches:
  - If `main` exists remotely → PR base is `main`.
  - If repo empty/unreachable/no creds → go to Step 5 (report).
- [ ] **Step 3: Push feature branch** — `git push -u origin feat/foundation-architecture`. If it fails on auth/non-existent repo, capture the exact error and go to Step 5.
- [ ] **Step 4: Open PR** — `gh` is NOT installed. Attempt `gh` only if it became available; otherwise do not fake a PR. If push succeeded, report the compare URL `https://github.com/hrhelperg/printerarchive/compare/main...feat/foundation-architecture?expand=1` for the user to click, and stop.
- [ ] **Step 5: If push/PR blocked, report EXACT remaining commands** verbatim to the user (no fabricated success), e.g.:
```bash
cd /Users/petrohrys/printerarchive
git remote add origin https://github.com/hrhelperg/printerarchive.git
git push -u origin feat/foundation-architecture
# then open: https://github.com/hrhelperg/printerarchive/compare/main...feat/foundation-architecture?expand=1
```
- [ ] **Step 6:** Never push to `main`. Final report: branch state, commit list, build status, and either the PR/compare URL or the exact remaining commands.

---

## Self-Review

**Spec coverage:** §1–2 positioning/constraints → enforced in content rules (T16) + site copy (T12/13). §3 build/lint/no-fabrication → T1 step3, T17. §4 stack → T1. §5 directory → all tasks match File Structure. §6 typed content model → T4. §7 design system → T2/T7/T8/T9. §8 SEO (metadata, JSON-LD ×5, sitemap, robots, llms.txt, RSS) → T6/T10/T14/T15 + per-page T11. §9 internal linking (breadcrumbs, related, clusters, brand cross-links, glossary see-also) → T8/T9/T11/T16. §10 pages + sample content → T11/T12/T13/T16. §11 trust infra (footer, sources, MetaBar, last-updated) → T8/T9. §12 delivery → T17/T18. §13 out-of-scope respected (no search/i18n/CMS/tools-interactivity). §14 risks (lint absent, creds, Tailwind variance) → T1/T5/T17/T18. All covered.

**Placeholder scan:** Task 5 intentionally creates minimal real one-line entries (explicitly replaced with full content in Task 16) — not lorem, not shipped as final. No "TBD/handle edge cases/similar to" instructions; every code step has full code. OK.

**Type consistency:** `SectionId`, `ContentEntry`, `ContentRef`, `allEntries`, `getEntry/getSection/getRelated/getBreadcrumbs/getAllRoutes`, `getSectionMeta`, `buildMetadata`, `organizationSchema/websiteSchema/articleSchema/breadcrumbSchema/faqSchema`, `site.publisher`, font CSS variables (`--font-source-serif/--font-inter/--font-mono-font`), component prop shapes — all defined once and referenced identically across tasks. `GuideEntry` covers `section: "guides" | "mobile-printing"` so `what-is-airprint` typechecks. `params` treated as Promise in Next 15 routes. Consistent.

**Spec gaps fixed:** Section count reconciled to 9 (spec §10 said "10"); recorded in plan header and File Structure.
