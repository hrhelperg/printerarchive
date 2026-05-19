# PrinterArchive.net Editorial Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform PrinterArchive.net into a visually richer, premium editorial archive while preserving its architecture, SSR/SEO systems, typed content model, and calm paper-and-ink direction.

**Architecture:** Extend the existing Next.js 16 App Router / Tailwind v4 / typed-content system in place. Add a graceful-by-default image system (typographic frontispiece is the *default* identity, not a fallback) plus an editorial component layer. No Client Components, no new runtime/font dependencies, all Server Components, fully static.

**Tech Stack:** Next.js 16.2.6, React 19, TypeScript (strict), Tailwind CSS v4 (`@tailwindcss/postcss`), `next/font/google` (existing fonts only), `next/image`, Node built-in `node:test` for unit tests (zero dependency).

---

## Conventions & Constraints (read once, apply to every task)

- **Source of truth:** `docs/superpowers/specs/2026-05-19-printerarchive-editorial-redesign-design.md`. Where silent, the foundation spec governs.
- **Branch:** `feat/foundation-architecture`. Never `main`. One logical commit per task (or per coherent sub-step set).
- **TDD reconciliation (important):** The repo has no component-test framework and the spec hard-forbids new dependencies (user constraint, which takes precedence). Therefore: **real red→green TDD is applied to the two pure-logic units** (image integrity validation, entry-kicker derivation) using Node's built-in `node:test` (zero dependency). **Visual/layout tasks** are verified by the gate `npm run typecheck && npm run lint && npm run test:content && npm run test:unit && npm run build` plus the explicit acceptance criteria listed in the task. "Green build after every phase" is mandatory.
- **Next.js 16 specifics:** `next/image`'s `priority` prop is **deprecated in Next 16 → use `preload`** (boolean). Default `loading` is `lazy`; do not set `loading` on the hero, set `preload`.
- **Tailwind v4:** custom `@theme` `--color-*` tokens auto-generate named utilities (`bg-paper-raised`, `border-rule-strong`, `text-ink-display`). **Always use the named utility. Never** `bg-[--color-...]` (renders transparent in v4).
- **No Client Components:** no `"use client"`, no hooks, no `usePathname`. The header therefore has hover states only (no active-route highlight — that would require a Client Component; explicitly out of scope).
- **Motifs:** abstract/geometric only (decision a). No literal printer/fax illustrations.
- **Type/texture:** reuse Source Serif 4 at the display tier (decision b); whisper grain on large surfaces only with the `--grain-opacity` kill-switch, never under body text (decision c).
- **Key rule:** every page is premium and complete with **zero images**. No reserved image gaps, no "coming soon" affordances. Images strengthen pages when present; their absence is a first-class composed state.

## File Structure

**Create:**
- `components/content/Motif.tsx` — abstract geometric SVG mark (decorative, `aria-hidden`)
- `components/content/Frontispiece.tsx` — typographic title plate; the graceful-default identity primitive
- `components/content/ArchiveImage.tsx` — `next/image` wrapper: plate frame + museum-placard credit
- `components/content/Pullquote.tsx` — `pullquote` block renderer
- `components/content/Figure.tsx` — inline `figure` block renderer (wraps `ArchiveImage`)
- `components/home/HomeHero.tsx`, `ThenNow.tsx`, `CategoryGrid.tsx`, `FeaturedBand.tsx`, `EraRail.tsx`, `ClosingBand.tsx` — focused homepage sections
- `components/history/EvolutionBand.tsx` — old→modern progression band
- `lib/content/kicker.ts` — pure `entryKicker(entry)` per-type kicker derivation
- `scripts/integrity.test.mjs`, `scripts/kicker.test.mjs` — `node:test` unit tests
- `public/images/.gitkeep` — establishes the static image pipeline directory

**Modify:**
- `app/globals.css` — tokens, display/kicker/separator classes, drop cap, grain
- `next.config.ts` — `images.formats`
- `package.json` — `test:unit` script
- `lib/site.ts` — `FOOTER_GROUPS`
- `lib/content/types.ts` — `ArchiveImage`, `hero`, `figure`, `pullquote`
- `lib/content/integrity.ts` — image validation
- `lib/seo/schema.ts` — `image` in `articleSchema`
- `components/layout/Header.tsx`, `Footer.tsx`
- `components/content/ArticleBody.tsx`, `SectionList.tsx`, `RelatedLinks.tsx`, `Timeline.tsx`, `Callout.tsx`, `KeyTakeaways.tsx`, `StepList.tsx`
- `components/layout/MetaBar.tsx`
- `components/pages/ArticlePage.tsx`, `SectionHub.tsx`
- `app/page.tsx`

---

## Task 1 — Phase 1: Design foundations (tokens, type scale, separator, drop cap, grain)

**Files:**
- Modify: `app/globals.css` (full replacement)

- [ ] **Step 1: Replace `app/globals.css` with the extended foundation**

```css
@import "tailwindcss";

@theme {
  --color-paper: #fbfaf7;
  --color-paper-raised: #f4f1e9;
  --color-ink: #1a1a1a;
  --color-ink-display: #121211;
  --color-ink-soft: #4a4a46;
  --color-ink-faint: #5c5c54;
  --color-rule: #e3e0d8;
  --color-rule-strong: #d8d4c8;
  --color-accent: #1f5d5a;
  --color-accent-hover: #15413f;
  --color-sepia: #efe7d6;
  --color-warn: #b45309;
  --font-serif: var(--font-source-serif), Georgia, "Times New Roman", serif;
  --font-sans: var(--font-inter), system-ui, -apple-system, sans-serif;
  --font-mono: var(--font-mono-font), ui-monospace, SFMono-Regular, monospace;
}

:root {
  color-scheme: light;
  /* Single kill-switch for the paper texture. Set to 0 to disable site-wide. */
  --grain-opacity: 0.03;
}

html {
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

body {
  background: var(--color-paper);
  color: var(--color-ink);
  font-family: var(--font-serif);
  font-size: 1.0625rem;
  line-height: 1.7;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: var(--color-accent);
  text-underline-offset: 3px;
}

a:hover {
  color: var(--color-accent-hover);
}

:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* Editorial display + label scale (Source Serif 4 reused at display sizes) */
.text-display {
  font-family: var(--font-serif);
  color: var(--color-ink-display);
  font-size: clamp(2.4rem, 5.4vw, 4rem);
  line-height: 1.06;
  letter-spacing: -0.02em;
}

.text-display-sm {
  font-family: var(--font-serif);
  color: var(--color-ink-display);
  font-size: clamp(1.9rem, 3.6vw, 2.75rem);
  line-height: 1.1;
  letter-spacing: -0.015em;
}

.kicker {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-ink-faint);
}

/* Section separator */
.rule-sep {
  border: 0;
  border-top: 1px solid var(--color-rule);
}

/* Tasteful drop cap for an article's first paragraph (CSS only) */
.dropcap::first-letter {
  float: left;
  font-family: var(--font-serif);
  font-size: 3.3em;
  line-height: 0.78;
  padding-right: 0.08em;
  color: var(--color-ink-display);
}

/* Whisper paper texture. Large surfaces only; never under body text.
   Parent isolates a stacking context so the -1 layer sits above the
   surface background but below all content children. */
.surface-grain {
  position: relative;
  isolation: isolate;
}
.surface-grain::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  opacity: var(--grain-opacity, 0.03);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E");
}
```

- [ ] **Step 2: Verify the build is green**

Run: `cd /Users/petrohrys/printerarchive && npm run lint && npm run build`
Expected: lint clean; `next build` completes with no errors and statically renders all existing routes.

- [ ] **Step 3: Acceptance check**

Confirm: `bg-paper-raised`, `border-rule-strong`, `text-ink-display` are usable (they auto-generate from `@theme`); `.text-display`, `.kicker`, `.rule-sep`, `.dropcap`, `.surface-grain` exist; setting `--grain-opacity: 0` in `:root` would disable texture site-wide (do not change it now — just confirm the mechanism).

- [ ] **Step 4: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add app/globals.css
git commit -m "feat(design): editorial token, display type, separator, grain foundation

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 2 — Phase 1: `next.config.ts` image formats + image pipeline dir + `test:unit` script

**Files:**
- Modify: `next.config.ts`
- Modify: `package.json`
- Create: `public/images/.gitkeep`

- [ ] **Step 1: Replace `next.config.ts`**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
```

- [ ] **Step 2: Add the `test:unit` script to `package.json`**

In `package.json`, the `scripts` block becomes exactly:

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "typecheck": "tsc --noEmit",
    "test:content": "node --experimental-strip-types scripts/check-content.mjs",
    "test:unit": "node --test --experimental-strip-types"
  },
```

(Node 24: `node --test` with **no path** recursively discovers `*.test.*` files,
ignores `node_modules`/`.next`, exits 0 with zero test files and runs them when
present. A trailing `scripts/` path makes Node treat it as a module entrypoint
and exit 1 — do not add a path.)

- [ ] **Step 3: Create the image pipeline directory**

```bash
cd /Users/petrohrys/printerarchive
mkdir -p public/images
printf '' > public/images/.gitkeep
```

- [ ] **Step 4: Verify**

Run: `cd /Users/petrohrys/printerarchive && npm run build`
Expected: build completes; no image config warnings.

- [ ] **Step 5: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add next.config.ts package.json public/images/.gitkeep
git commit -m "feat(images): avif/webp output, public/images pipeline, test:unit script

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 3 — Phase 2: Shared chrome — Header mark + Footer grouping

**Files:**
- Modify: `lib/site.ts` (append `FOOTER_GROUPS`)
- Modify: `components/layout/Header.tsx`
- Modify: `components/layout/Footer.tsx`

- [ ] **Step 1: Append `FOOTER_GROUPS` to `lib/site.ts`**

Add at the end of `lib/site.ts` (after the existing `getSectionMeta` export), keeping everything above unchanged:

```ts
export const FOOTER_GROUPS: { heading: string; ids: SectionId[] }[] = [
  { heading: "Learn", ids: ["guides", "troubleshooting", "workflows"] },
  { heading: "History", ids: ["history", "fax"] },
  {
    heading: "Reference",
    ids: ["brands", "glossary", "tools", "mobile-printing"],
  },
];
```

- [ ] **Step 2: Replace `components/layout/Header.tsx`**

```tsx
import Link from "next/link";
import { SECTIONS, site } from "@/lib/site";
import { Container } from "./Container";
import { Motif } from "@/components/content/Motif";

export function Header() {
  return (
    <header className="border-b border-rule">
      <Container
        width="wide"
        className="flex flex-wrap items-center justify-between gap-y-3 py-5"
      >
        <Link
          href="/"
          className="group flex items-center gap-3 no-underline"
          aria-label={`${site.name} — home`}
        >
          <Motif className="h-7 w-7 text-ink-faint" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl font-semibold tracking-tight text-ink">
              {site.name}
            </span>
            <span className="mt-1 hidden font-sans text-[0.68rem] uppercase tracking-[0.18em] text-ink-faint sm:block">
              {site.tagline}
            </span>
          </span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 font-sans text-sm text-ink-soft">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/${s.id}`}
                  className="no-underline transition-colors hover:text-accent"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
```

- [ ] **Step 3: Replace `components/layout/Footer.tsx`**

```tsx
import Link from "next/link";
import { FOOTER_GROUPS, site, getSectionMeta } from "@/lib/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-rule py-14">
      <Container width="wide">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-lg text-ink">{site.name}</p>
            <p className="mt-2 max-w-prose text-sm text-ink-soft">
              {site.description}
            </p>
          </div>
          {FOOTER_GROUPS.map((g) => (
            <nav key={g.heading} aria-label={g.heading}>
              <p className="kicker">{g.heading}</p>
              <ul className="mt-3 space-y-1.5 font-sans text-sm text-ink-soft">
                {g.ids.map((id) => (
                  <li key={id}>
                    <Link
                      href={`/${id}`}
                      className="no-underline transition-colors hover:text-accent"
                    >
                      {getSectionMeta(id).label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-rule pt-6 font-sans text-xs text-ink-faint">
          <Link href="/about" className="no-underline hover:text-accent">
            About
          </Link>
          <Link href="/contact" className="no-underline hover:text-accent">
            Contact
          </Link>
          <a href="/feed.xml" className="no-underline hover:text-accent">
            RSS
          </a>
          <a href="/llms.txt" className="no-underline hover:text-accent">
            llms.txt
          </a>
          <a href="/sitemap.xml" className="no-underline hover:text-accent">
            Sitemap
          </a>
        </div>

        <p className="mt-6 font-sans text-xs text-ink-faint">
          Published by {site.publisher.name} ·{" "}
          <a href={`mailto:${site.publisher.email}`}>
            {site.publisher.email}
          </a>{" "}
          · © {new Date().getFullYear()} {site.publisher.name}. Educational
          reference content.
        </p>
      </Container>
    </footer>
  );
}
```

(Note: `Header.tsx` imports `Motif`, created in Task 4. Do Task 4 before running the build in Step 4.)

- [ ] **Step 4: Verify (after Task 4 is complete)**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run lint && npm run build`
Expected: all pass; footer renders four columns collapsing to one on mobile; `HELPERG LLC` and `info@helperg.com` strings present unchanged.

- [ ] **Step 5: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add lib/site.ts components/layout/Header.tsx components/layout/Footer.tsx
git commit -m "feat(chrome): archival header mark + grouped editorial footer

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 4 — Phase 3: Abstract motif primitive

**Files:**
- Create: `components/content/Motif.tsx`

- [ ] **Step 1: Create `components/content/Motif.tsx`**

```tsx
// Abstract, geometric archival mark — registration/platen-inspired hairlines.
// Decorative only (decision a: no literal printer illustrations).
export function Motif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect
        x="6.5"
        y="6.5"
        width="35"
        height="35"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line x1="6.5" y1="18" x2="41.5" y2="18" stroke="currentColor" strokeWidth="1" />
      <line x1="6.5" y1="30" x2="41.5" y2="30" stroke="currentColor" strokeWidth="1" />
      <line x1="24" y1="2" x2="24" y2="10" stroke="currentColor" strokeWidth="1" />
      <line x1="24" y1="38" x2="24" y2="46" stroke="currentColor" strokeWidth="1" />
      <circle cx="24" cy="24" r="3.25" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
```

- [ ] **Step 2: Verify**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run build`
Expected: pass. (This unblocks Task 3 Step 4.)

- [ ] **Step 3: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add components/content/Motif.tsx
git commit -m "feat(ui): abstract geometric archival motif

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 5 — Phase 3: Typed image model (`ArchiveImage`, `hero`, `figure`, `pullquote`)

**Files:**
- Modify: `lib/content/types.ts`

- [ ] **Step 1: Edit `lib/content/types.ts`**

Add the `ArchiveImage` interface immediately above `export interface ContentRef`:

```ts
export interface ArchiveImage {
  src: string; // /images/<section>/<file>.<ext> committed under public/
  alt: string;
  width: number;
  height: number;
  caption?: string;
  credit: { source: string; url?: string; license: string };
}
```

Extend the `ContentBlock` union by adding two members (place after the `steps` member, before the closing `;`):

```ts
  | { kind: "figure"; image: ArchiveImage }
  | { kind: "pullquote"; text: string; attribution?: string };
```

Add `hero` to `BaseEntry` (after the `body: ContentBlock[];` line):

```ts
  hero?: ArchiveImage;
```

- [ ] **Step 2: Verify types compile**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run test:content`
Expected: typecheck passes; content integrity still passes (no entry uses the new optional fields yet).

- [ ] **Step 3: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add lib/content/types.ts
git commit -m "feat(content): ArchiveImage type + hero/figure/pullquote (optional)

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 6 — Phase 3: Integrity gate — image validation (TDD, `node:test`)

**Files:**
- Create: `scripts/integrity.test.mjs`
- Modify: `lib/content/integrity.ts`

- [ ] **Step 1: Write the failing test**

Create `scripts/integrity.test.mjs`:

```js
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
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `cd /Users/petrohrys/printerarchive && npm run test:unit`
Expected: FAIL — the `alt`/`license`/`width` validation tests fail because `findContentIssues` does not yet validate images.

- [ ] **Step 3: Extend `lib/content/integrity.ts`**

Add this helper above `export function findContentIssues`:

```ts
function imageIssues(
  key: string,
  label: string,
  img: {
    src?: unknown;
    alt?: unknown;
    width?: unknown;
    height?: unknown;
    credit?: { source?: unknown; license?: unknown } | undefined;
  },
): string[] {
  const out: string[] = [];
  const nonEmpty = (v: unknown) => typeof v === "string" && v.trim().length > 0;
  const posInt = (v: unknown) =>
    typeof v === "number" && Number.isInteger(v) && v > 0;
  if (!nonEmpty(img.src)) out.push(`${key}: ${label} image src missing`);
  if (!nonEmpty(img.alt)) out.push(`${key}: ${label} image alt missing`);
  if (!posInt(img.width))
    out.push(`${key}: ${label} image width must be a positive integer`);
  if (!posInt(img.height))
    out.push(`${key}: ${label} image height must be a positive integer`);
  if (!nonEmpty(img.credit?.source))
    out.push(`${key}: ${label} image credit.source missing`);
  if (!nonEmpty(img.credit?.license))
    out.push(`${key}: ${label} image credit.license missing`);
  return out;
}
```

Inside the `for (const e of entries)` loop, after the `if (!Array.isArray(e.body) ...)` block, add:

```ts
    if (e.hero) {
      issues.push(...imageIssues(key, "hero", e.hero));
    }
    if (Array.isArray(e.body)) {
      e.body.forEach((b, idx) => {
        if (b && (b as { kind?: string }).kind === "figure") {
          const img = (b as { image?: Record<string, unknown> }).image ?? {};
          issues.push(...imageIssues(key, `figure[${idx}]`, img));
        }
      });
    }
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `cd /Users/petrohrys/printerarchive && npm run test:unit && npm run test:content && npm run typecheck`
Expected: all unit tests PASS; existing content integrity still PASS; typecheck clean.

- [ ] **Step 5: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add scripts/integrity.test.mjs lib/content/integrity.ts
git commit -m "feat(content): build-time image integrity (alt/license/source/dims)

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 7 — Phase 3: `ArchiveImage` component + Article schema `image`

**Files:**
- Create: `components/content/ArchiveImage.tsx`
- Modify: `lib/seo/schema.ts`

- [ ] **Step 1: Create `components/content/ArchiveImage.tsx`**

```tsx
import Image from "next/image";
import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";

// 1x1 paper-toned placeholder; avoids per-image blur tooling (zero dependency).
const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23f4f1e9'/%3E%3C/svg%3E";

export function ArchiveImage({
  image,
  preload = false,
  sizes = "(max-width: 768px) 100vw, 768px",
  className = "",
}: {
  image: ArchiveImageData;
  preload?: boolean;
  sizes?: string;
  className?: string;
}) {
  const { src, alt, width, height, caption, credit } = image;
  return (
    <figure className={`my-8 ${className}`}>
      <div className="border border-rule-strong bg-paper-raised p-2">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          preload={preload}
          placeholder={PLACEHOLDER}
          className="h-auto w-full"
          style={{ aspectRatio: `${width} / ${height}` }}
        />
      </div>
      {(caption || credit.source) && (
        <figcaption className="mt-2 font-sans text-xs text-ink-faint">
          {caption ? <span className="text-ink-soft">{caption}</span> : null}
          {caption ? " — " : ""}
          {credit.url ? (
            <a href={credit.url} rel="noopener noreferrer nofollow">
              {credit.source}
            </a>
          ) : (
            credit.source
          )}
          {`, ${credit.license}`}
        </figcaption>
      )}
    </figure>
  );
}
```

- [ ] **Step 2: Add `image` to `articleSchema` in `lib/seo/schema.ts`**

Replace the `articleSchema` export with:

```ts
export const articleSchema = (e: ContentEntry) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: e.title,
  description: e.description,
  datePublished: e.published,
  dateModified: e.updated,
  author: { "@type": "Organization", name: e.author },
  editor: e.editor,
  publisher: { "@type": "Organization", name: site.publisher.name },
  mainEntityOfPage: `${site.url}/${e.section}/${e.slug}`,
  keywords: e.keywords.join(", "),
  ...(e.hero ? { image: `${site.url}${e.hero.src}` } : {}),
});
```

- [ ] **Step 3: Verify**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run lint && npm run build`
Expected: all pass. (No entry has a `hero` yet, so `image` is correctly omitted from JSON-LD.)

- [ ] **Step 4: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add components/content/ArchiveImage.tsx lib/seo/schema.ts
git commit -m "feat(images): ArchiveImage plate component + Article image schema

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 8 — Phase 3: `Frontispiece` (graceful-default identity primitive)

**Files:**
- Create: `components/content/Frontispiece.tsx`

- [ ] **Step 1: Create `components/content/Frontispiece.tsx`**

```tsx
import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";
import { ArchiveImage } from "./ArchiveImage";
import { Motif } from "./Motif";

// The default visual identity of a page. Complete and premium with ZERO
// images (typographic composition + abstract motif). When a real, approved
// image exists it is shown instead of the motif panel — same footprint,
// no layout shift, no reserved empty gap.
export function Frontispiece({
  kicker,
  title,
  lede,
  meta,
  image,
  tone = "default",
  preload = false,
  titleClassName = "text-display",
}: {
  kicker?: string;
  title: string;
  lede?: string;
  meta?: string;
  image?: ArchiveImageData;
  tone?: "default" | "sepia";
  preload?: boolean;
  titleClassName?: string;
}) {
  const surface =
    tone === "sepia" ? "bg-sepia" : "bg-paper-raised";
  return (
    <section
      className={`surface-grain ${surface} border-y border-rule-strong`}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:px-8 lg:py-20">
        <div>
          {kicker ? <p className="kicker">{kicker}</p> : null}
          <h1 className={`mt-3 text-balance ${titleClassName}`}>{title}</h1>
          {lede ? (
            <p className="mt-5 max-w-2xl font-serif text-lg text-ink-soft text-pretty">
              {lede}
            </p>
          ) : null}
          {meta ? (
            <p className="mt-5 font-sans text-xs text-ink-faint">{meta}</p>
          ) : null}
        </div>
        <div className="lg:justify-self-end">
          {image ? (
            <ArchiveImage
              image={image}
              preload={preload}
              sizes="(max-width: 1024px) 100vw, 420px"
              className="my-0 w-full max-w-md"
            />
          ) : (
            <div
              aria-hidden
              className="flex aspect-[4/3] w-full max-w-md items-center justify-center border border-rule-strong"
            >
              <Motif className="h-20 w-20 text-rule-strong" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run build`
Expected: pass.

- [ ] **Step 3: Acceptance check**

The image-absent branch renders a fully composed plate (no "image coming soon", no blank reserved box that looks broken — the motif panel is intentional identity). Footprint is identical with/without an image (no CLS when one is later added).

- [ ] **Step 4: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add components/content/Frontispiece.tsx
git commit -m "feat(ui): Frontispiece — graceful-default editorial identity plate

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 9 — Phase 6 prep: `Pullquote` + `Figure` block renderers, wired into `ArticleBody`

**Files:**
- Create: `components/content/Pullquote.tsx`
- Create: `components/content/Figure.tsx`
- Modify: `components/content/ArticleBody.tsx`

- [ ] **Step 1: Create `components/content/Pullquote.tsx`**

```tsx
export function Pullquote({
  text,
  attribution,
}: {
  text: string;
  attribution?: string;
}) {
  return (
    <figure className="my-10 border-l-2 border-accent pl-6">
      <blockquote className="font-serif text-2xl leading-snug text-ink-display text-pretty">
        {text}
      </blockquote>
      {attribution ? (
        <figcaption className="mt-3 font-sans text-xs uppercase tracking-wide text-ink-faint">
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
```

- [ ] **Step 2: Create `components/content/Figure.tsx`**

```tsx
import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";
import { ArchiveImage } from "./ArchiveImage";

export function Figure({ image }: { image: ArchiveImageData }) {
  return (
    <ArchiveImage
      image={image}
      sizes="(max-width: 768px) 100vw, 720px"
      className="mx-auto max-w-2xl"
    />
  );
}
```

- [ ] **Step 3: Update `components/content/ArticleBody.tsx`**

Replace the file with (adds `figure`/`pullquote` cases and restyles `table` header to the token palette; everything else preserved):

```tsx
import type { ContentBlock } from "@/lib/content/types";
import { Callout } from "./Callout";
import { KeyTakeaways } from "./KeyTakeaways";
import { StepList } from "./StepList";
import { Timeline } from "./Timeline";
import { Pullquote } from "./Pullquote";
import { Figure } from "./Figure";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.kind) {
          case "heading": {
            const id = b.id ?? slugify(b.text);
            return b.level === 2 ? (
              <h2
                key={i}
                id={id}
                className="mt-14 mb-3 scroll-mt-24 font-serif text-2xl tracking-tight text-balance"
              >
                {b.text}
              </h2>
            ) : (
              <h3
                key={i}
                id={id}
                className="mt-8 mb-2 scroll-mt-24 font-serif text-xl text-balance"
              >
                {b.text}
              </h3>
            );
          }
          case "paragraph":
            return (
              <p
                key={i}
                className={`my-5 text-pretty ${i === 0 ? "dropcap" : ""}`}
              >
                {b.text}
              </p>
            );
          case "list":
            return b.ordered ? (
              <ol
                key={i}
                className="my-5 list-decimal space-y-1.5 pl-6 text-pretty"
              >
                {b.items.map((t, j) => (
                  <li key={j}>{t}</li>
                ))}
              </ol>
            ) : (
              <ul
                key={i}
                className="my-5 list-disc space-y-1.5 pl-6 text-pretty"
              >
                {b.items.map((t, j) => (
                  <li key={j}>{t}</li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <Callout key={i} tone={b.tone} title={b.title} text={b.text} />
            );
          case "keyTakeaways":
            return <KeyTakeaways key={i} items={b.items} />;
          case "steps":
            return <StepList key={i} steps={b.steps} />;
          case "timeline":
            return <Timeline key={i} events={b.events} />;
          case "pullquote":
            return (
              <Pullquote key={i} text={b.text} attribution={b.attribution} />
            );
          case "figure":
            return <Figure key={i} image={b.image} />;
          case "table":
            return (
              <figure key={i} className="my-6 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      {b.headers.map((h, j) => (
                        <th
                          key={j}
                          className="border border-rule bg-paper-raised px-3 py-2 text-left font-sans"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>
                        {r.map((c, k) => (
                          <td
                            key={k}
                            className="border border-rule px-3 py-2"
                          >
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {b.caption && (
                  <figcaption className="mt-2 font-sans text-xs text-ink-faint">
                    {b.caption}
                  </figcaption>
                )}
              </figure>
            );
          default: {
            const _exhausted: never = b;
            return _exhausted;
          }
        }
      })}
    </>
  );
}
```

- [ ] **Step 4: Verify**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run lint && npm run test:content && npm run build`
Expected: all pass; `ContentBlock` switch is exhaustive (no TS narrowing error).

- [ ] **Step 5: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add components/content/Pullquote.tsx components/content/Figure.tsx components/content/ArticleBody.tsx
git commit -m "feat(article): pullquote + figure blocks, drop cap, token table

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 10 — Phase 5 prep: per-type kicker helper (TDD, `node:test`)

**Files:**
- Create: `lib/content/kicker.ts`
- Create: `scripts/kicker.test.mjs`

- [ ] **Step 1: Write the failing test — create `scripts/kicker.test.mjs`**

```js
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
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `cd /Users/petrohrys/printerarchive && npm run test:unit`
Expected: FAIL — `lib/content/kicker.ts` does not exist (import throws).

- [ ] **Step 3: Create `lib/content/kicker.ts`**

```ts
import type { ContentEntry } from "@/lib/content/types";

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

// One short, typographic eyebrow per entry, derived from its typed shape.
export function entryKicker(e: Partial<ContentEntry> & { section: string }): string {
  switch (e.section) {
    case "history":
      return ("era" in e && e.era ? String(e.era) : "History");
    case "guides":
    case "mobile-printing":
    case "fax":
      return "difficulty" in e && e.difficulty
        ? cap(String(e.difficulty))
        : "Guide";
    case "troubleshooting":
      return "Troubleshooting";
    case "brands":
      return "brand" in e && e.brand ? String(e.brand) : "Brand";
    case "workflows":
      return "Workflow";
    case "tools":
      return "Tool";
    case "glossary":
      return "Definition";
    default:
      return "Entry";
  }
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `cd /Users/petrohrys/printerarchive && npm run test:unit && npm run typecheck`
Expected: all unit tests PASS; typecheck clean.

- [ ] **Step 5: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add lib/content/kicker.ts scripts/kicker.test.mjs
git commit -m "feat(content): per-type entryKicker helper

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 11 — Phase 5: Editorial card list + grouped related links + restyled blocks

**Files:**
- Modify: `components/content/SectionList.tsx`
- Modify: `components/content/RelatedLinks.tsx`
- Modify: `components/content/Timeline.tsx`
- Modify: `components/content/Callout.tsx`
- Modify: `components/content/KeyTakeaways.tsx`
- Modify: `components/content/StepList.tsx`
- Modify: `components/layout/MetaBar.tsx`

- [ ] **Step 1: Replace `components/content/SectionList.tsx`**

```tsx
import Link from "next/link";
import type { ContentEntry } from "@/lib/content/types";
import { entryKicker } from "@/lib/content/kicker";

export function SectionList({ items }: { items: ContentEntry[] }) {
  if (items.length === 0) return null;
  const [lead, ...rest] = items;
  return (
    <div className="mt-10">
      <Link
        href={`/${lead.section}/${lead.slug}`}
        className="group block border-t border-rule-strong py-8 no-underline"
      >
        <p className="kicker">{entryKicker(lead)}</p>
        <h2 className="mt-2 text-display-sm text-balance group-hover:text-accent">
          {lead.title}
        </h2>
        <p className="mt-3 max-w-2xl font-serif text-lg text-ink-soft text-pretty">
          {lead.summary}
        </p>
        <p className="mt-3 font-sans text-xs uppercase tracking-wide text-ink-faint">
          Updated <time dateTime={lead.updated}>{lead.updated}</time>
        </p>
      </Link>
      {rest.length > 0 && (
        <ul className="divide-y divide-rule border-y border-rule">
          {rest.map((e) => (
            <li key={`${e.section}/${e.slug}`}>
              <Link
                href={`/${e.section}/${e.slug}`}
                className="group block py-6 no-underline"
              >
                <p className="kicker">{entryKicker(e)}</p>
                <h3 className="mt-1.5 font-serif text-xl tracking-tight text-ink group-hover:text-accent">
                  {e.title}
                </h3>
                <p className="mt-1.5 text-ink-soft text-pretty">{e.summary}</p>
                <p className="mt-2 font-sans text-xs uppercase tracking-wide text-ink-faint">
                  Updated <time dateTime={e.updated}>{e.updated}</time>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Replace `components/content/RelatedLinks.tsx`**

```tsx
import Link from "next/link";
import type { ContentEntry } from "@/lib/content/types";
import { getSectionMeta } from "@/lib/site";
import { entryKicker } from "@/lib/content/kicker";

export function RelatedLinks({ items }: { items: ContentEntry[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-14 border-t border-rule pt-8">
      <p className="kicker">Continue in the archive</p>
      <h2 className="mt-2 font-serif text-2xl tracking-tight">
        Related reading
      </h2>
      <ul className="mt-5 grid gap-px border border-rule bg-rule sm:grid-cols-2">
        {items.map((e) => (
          <li key={`${e.section}/${e.slug}`} className="bg-paper">
            <Link
              href={`/${e.section}/${e.slug}`}
              className="group block h-full p-5 no-underline transition-colors hover:bg-paper-raised"
            >
              <p className="kicker">
                {getSectionMeta(e.section).label} · {entryKicker(e)}
              </p>
              <p className="mt-2 font-serif text-lg tracking-tight text-ink group-hover:text-accent">
                {e.title}
              </p>
              <p className="mt-1 text-sm text-ink-soft text-pretty">
                {e.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

- [ ] **Step 3: Replace `components/content/Timeline.tsx` (elevated rail)**

```tsx
export function Timeline({
  events,
}: {
  events: { period: string; text: string }[];
}) {
  return (
    <ol className="my-8 border-l border-rule-strong">
      {events.map((e, i) => (
        <li key={i} className="relative py-5 pl-6 last:pb-0">
          <span
            aria-hidden
            className="absolute left-[-4.5px] top-7 h-2 w-2 rounded-full border border-rule-strong bg-paper"
          />
          <p className="kicker">{e.period}</p>
          <p className="mt-1.5 text-ink-soft text-pretty">{e.text}</p>
        </li>
      ))}
    </ol>
  );
}
```

- [ ] **Step 4: Replace `components/content/Callout.tsx`**

```tsx
export function Callout({
  tone,
  title,
  text,
}: {
  tone: "note" | "tip" | "warning";
  title?: string;
  text: string;
}) {
  const border = tone === "warning" ? "border-l-warn" : "border-l-accent";
  return (
    <aside className={`my-7 border-l-2 ${border} bg-paper-raised px-5 py-4`}>
      {title && (
        <p className="kicker">{title}</p>
      )}
      <p className="mt-1.5 text-ink-soft text-pretty">{text}</p>
    </aside>
  );
}
```

- [ ] **Step 5: Replace `components/content/KeyTakeaways.tsx`**

```tsx
export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <section className="my-8 border border-rule-strong bg-paper-raised p-6">
      <p className="kicker">Key takeaways</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft text-pretty">
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </section>
  );
}
```

(Note: this changes the internal heading to a styled label. The page `<h1>` and body `<h2>`s are unaffected; the prior `<h2>"Key takeaways"` was not part of the article outline contract — replacing it with a label improves the heading hierarchy. `FaqList`'s `<h2>` is unchanged.)

- [ ] **Step 6: Replace `components/content/StepList.tsx`**

```tsx
export function StepList({
  steps,
}: {
  steps: { title: string; text: string }[];
}) {
  return (
    <ol className="my-7 space-y-5">
      {steps.map((s, i) => (
        <li
          key={i}
          className="grid grid-cols-[2rem_1fr] gap-4 border-l border-rule-strong pl-4"
        >
          <span
            aria-hidden
            className="font-serif text-2xl leading-none text-rule-strong"
          >
            {i + 1}
          </span>
          <div>
            <p className="font-sans text-sm font-semibold text-ink">
              {s.title}
            </p>
            <p className="mt-1 text-ink-soft text-pretty">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
```

- [ ] **Step 7: Replace `components/layout/MetaBar.tsx`**

```tsx
export function MetaBar({
  author,
  editor,
  updated,
}: {
  author: string;
  editor: string;
  updated: string;
}) {
  return (
    <p className="mt-6 flex flex-wrap gap-x-3 gap-y-1 border-t border-rule pt-4 font-sans text-xs text-ink-faint">
      <span>By {author}</span>
      <span aria-hidden>·</span>
      <span>Edited by {editor}</span>
      <span aria-hidden>·</span>
      <time dateTime={updated}>Last updated {updated}</time>
    </p>
  );
}
```

- [ ] **Step 8: Verify**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run lint && npm run test:content && npm run test:unit && npm run build`
Expected: all pass.

- [ ] **Step 9: Acceptance check**

Each content page still has exactly one `<h1>`; `<h2>` order is preserved (KeyTakeaways no longer injects an `<h2>`; FaqList `<h2>` retained). Hover states are restrained (color/`bg-paper-raised` only, no shadow). Timeline reads as an editorial rail.

- [ ] **Step 10: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add components/content/SectionList.tsx components/content/RelatedLinks.tsx components/content/Timeline.tsx components/content/Callout.tsx components/content/KeyTakeaways.tsx components/content/StepList.tsx components/layout/MetaBar.tsx
git commit -m "feat(editorial): card list, grouped related, elevated timeline, blocks

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 12 — Phase 5: Section hub with frontispiece + cluster grouping

**Files:**
- Modify: `components/pages/SectionHub.tsx`

- [ ] **Step 1: Replace `components/pages/SectionHub.tsx`**

```tsx
import type { Metadata } from "next";
import { getSectionMeta, type SectionId } from "@/lib/site";
import { getSection, getBreadcrumbs } from "@/lib/content/queries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Frontispiece } from "@/components/content/Frontispiece";
import { SectionList } from "@/components/content/SectionList";
import { EvolutionBand } from "@/components/history/EvolutionBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";

export function hubMetadata(section: SectionId): Metadata {
  const m = getSectionMeta(section);
  return buildMetadata({
    title: m.title,
    description: m.description,
    path: `/${section}`,
  });
}

export function SectionHub({ section }: { section: SectionId }) {
  const m = getSectionMeta(section);
  const items = getSection(section);
  const crumbs = getBreadcrumbs(section);
  const isHistory = section === "history";

  // Group by cluster when more than one cluster is present; otherwise a
  // single flat list. Order: clusters in first-seen order, then "Other".
  const groups = new Map<string, typeof items>();
  for (const e of items) {
    const key = e.cluster ?? "__none__";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(e);
  }
  const useGroups = groups.size > 1 && items.length >= 6;

  return (
    <>
      <Container width="wide" className="pt-8">
        <Breadcrumbs items={crumbs} />
      </Container>
      <div className="mt-6">
        <Frontispiece
          kicker="Section"
          title={m.title}
          lede={m.description}
          meta={`${items.length} ${items.length === 1 ? "entry" : "entries"}`}
          tone={isHistory ? "sepia" : "default"}
          titleClassName="text-display-sm"
        />
      </div>

      {isHistory ? <EvolutionBand /> : null}

      <Container width="wide" className="py-14">
        <JsonLd data={breadcrumbSchema(crumbs)} />
        {items.length === 0 ? (
          <p className="text-ink-faint">
            New entries are being added to this section.
          </p>
        ) : useGroups ? (
          [...groups.entries()].map(([key, list], idx) => (
            <section
              key={key}
              aria-labelledby={`group-${key}`}
              className={idx > 0 ? "mt-14" : ""}
            >
              <p id={`group-${key}`} className="kicker">
                {key === "__none__"
                  ? "More in this section"
                  : key.replace(/-/g, " ")}
              </p>
              <SectionList items={list} />
            </section>
          ))
        ) : (
          <SectionList items={items} />
        )}
      </Container>
    </>
  );
}
```

(Note: imports `EvolutionBand` from Task 13; complete Task 13 before Step 2.)

- [ ] **Step 2: Verify (after Task 13)**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run lint && npm run build`
Expected: all pass; every `/<section>` hub renders a frontispiece + editorial list; history hub shows the evolution band; cluster grouping appears only where ≥2 clusters and ≥6 entries.

- [ ] **Step 3: Acceptance check**

Hubs are no longer "text-only": frontispiece plate + lead-entry treatment + grouped/edited list. No hub depends on images. Breadcrumb appears above the frontispiece (semantic nav preserved). The frontispiece `<h1>` is the page's single `<h1>`.

- [ ] **Step 4: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add components/pages/SectionHub.tsx
git commit -m "feat(hub): frontispiece + cluster-grouped editorial section hubs

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 13 — Phase 7: History evolution band

**Files:**
- Create: `components/history/EvolutionBand.tsx`

- [ ] **Step 1: Create `components/history/EvolutionBand.tsx`**

All target slugs below exist in `lib/content/registry.ts` (verified) so no link breaks; each panel is typographic by default and is an image-ready slot for later approved imagery.

```tsx
import Link from "next/link";
import { Container } from "@/components/layout/Container";

const STAGES: { era: string; title: string; href: string; note: string }[] = [
  {
    era: "Impact",
    title: "Mechanical & dot matrix",
    href: "/history/dot-matrix-printers-explained",
    note: "Characters formed by striking an inked ribbon against the page.",
  },
  {
    era: "Non-impact",
    title: "The laser revolution",
    href: "/history/evolution-of-laser-printing",
    note: "Static electricity and fused toner replace the hammer and ribbon.",
  },
  {
    era: "Non-impact",
    title: "Inkjet for everyone",
    href: "/history/evolution-of-inkjet-printers",
    note: "Tiny droplets bring affordable colour to the home and office.",
  },
  {
    era: "Networked",
    title: "The shared office",
    href: "/history/office-printing-in-the-1990s",
    note: "Printers become networked, multifunction, shared infrastructure.",
  },
];

export function EvolutionBand() {
  return (
    <section className="border-b border-rule">
      <Container width="wide" className="py-14">
        <p className="kicker">Evolution</p>
        <h2 className="mt-2 text-display-sm text-balance">
          From the hammer to the network
        </h2>
        <p className="mt-3 max-w-2xl font-serif text-lg text-ink-soft text-pretty">
          Printing did not arrive — it evolved. Each era solved the limits of
          the one before it.
        </p>
        <ol className="mt-8 grid gap-px border border-rule bg-rule md:grid-cols-4">
          {STAGES.map((s, i) => (
            <li key={s.href} className="bg-paper-raised">
              <Link
                href={s.href}
                className="group flex h-full flex-col p-6 no-underline transition-colors hover:bg-paper"
              >
                <span className="font-serif text-3xl leading-none text-rule-strong">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="kicker mt-4">{s.era}</span>
                <span className="mt-1.5 font-serif text-lg tracking-tight text-ink group-hover:text-accent">
                  {s.title}
                </span>
                <span className="mt-2 text-sm text-ink-soft text-pretty">
                  {s.note}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Verify**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run build`
Expected: pass; the four hrefs resolve to real pages (no 404 in build output). This unblocks Task 12 Step 2.

- [ ] **Step 3: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add components/history/EvolutionBand.tsx
git commit -m "feat(history): old to modern evolution band (image-ready)

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 14 — Phase 6: Article page masthead + hero + references apparatus

**Files:**
- Modify: `components/pages/ArticlePage.tsx`

- [ ] **Step 1: Replace `components/pages/ArticlePage.tsx`**

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { SectionId } from "@/lib/site";
import { getSectionMeta } from "@/lib/site";
import { getEntry, getBreadcrumbs, getRelated } from "@/lib/content/queries";
import { entryKicker } from "@/lib/content/kicker";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MetaBar } from "@/components/layout/MetaBar";
import { ArchiveImage } from "@/components/content/ArchiveImage";
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
    title: e.title,
    description: e.description,
    path: `/${section}/${slug}`,
    type: "article",
    published: e.published,
    modified: e.updated,
    keywords: e.keywords,
  });
}

export function ArticlePage({
  section,
  slug,
}: {
  section: SectionId;
  slug: string;
}) {
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
          <p className="kicker">
            {getSectionMeta(e.section).label} · {entryKicker(e)}
          </p>
          <h1 className="mt-3 text-display-sm leading-tight text-balance">
            {e.title}
          </h1>
          <p className="mt-4 font-serif text-xl text-ink-soft text-pretty">
            {e.summary}
          </p>
          <MetaBar author={e.author} editor={e.editor} updated={e.updated} />
        </header>
        {e.hero ? (
          <ArchiveImage
            image={e.hero}
            preload
            sizes="(max-width: 768px) 100vw, 768px"
            className="mt-8"
          />
        ) : null}
        <div className="mt-8 font-serif text-[1.0625rem] leading-[1.75] text-ink">
          <ArticleBody blocks={e.body} />
        </div>
        {e.faqs?.length ? <FaqList faqs={e.faqs} /> : null}
        {e.sources?.length ? <SourcesList sources={e.sources} /> : null}
        <RelatedLinks items={related} />
      </article>
    </Container>
  );
}
```

- [ ] **Step 2: Verify**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run lint && npm run test:content && npm run test:unit && npm run build`
Expected: all pass; every article renders with kicker + display `h1` + standfirst + byline rule. With no `hero`, no image area renders (no gap, no CLS). Drop cap appears on the first paragraph only.

- [ ] **Step 3: Acceptance check**

`articleSchema` emits `image` only when a `hero` exists (none yet → absent, valid). Semantic `<article>`/`<header>`/single `<h1>` preserved. Hero, when later added, is `preload` (Next 16 LCP) with intrinsic dimensions → no layout shift.

- [ ] **Step 4: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add components/pages/ArticlePage.tsx
git commit -m "feat(article): editorial masthead, hero slot, references apparatus

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 15 — Phase 4: Homepage section components

**Files:**
- Create: `components/home/HomeHero.tsx`
- Create: `components/home/ThenNow.tsx`
- Create: `components/home/CategoryGrid.tsx`
- Create: `components/home/FeaturedBand.tsx`
- Create: `components/home/EraRail.tsx`
- Create: `components/home/ClosingBand.tsx`

- [ ] **Step 1: Create `components/home/HomeHero.tsx`** (compact hero — must not push content far below the fold; no oversized full-viewport hero)

```tsx
import { site } from "@/lib/site";
import { Container } from "@/components/layout/Container";
import { Motif } from "@/components/content/Motif";

export function HomeHero() {
  return (
    <section className="surface-grain border-b border-rule bg-paper-raised">
      <Container
        width="wide"
        className="grid gap-8 py-16 lg:grid-cols-[1.6fr_1fr] lg:items-center lg:py-20"
      >
        <div>
          <p className="kicker">{site.tagline}</p>
          <h1 className="mt-4 max-w-3xl text-display text-balance">
            The internet archive of printing technology.
          </h1>
          <p className="mt-5 max-w-2xl font-serif text-lg text-ink-soft text-pretty">
            {site.description}
          </p>
        </div>
        <div
          aria-hidden
          className="hidden items-center justify-center lg:flex"
        >
          <Motif className="h-28 w-28 text-rule-strong" />
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Create `components/home/ThenNow.tsx`** (typographic diptych; both panels image-ready, premium with zero images)

```tsx
import Link from "next/link";
import { Container } from "@/components/layout/Container";

const PANELS = [
  {
    tag: "Then",
    title: "Mechanical & impact printing",
    note: "Hammers, ribbons, and continuous-feed paper — the loud origins of the office printer.",
    href: "/history/history-of-printers",
  },
  {
    tag: "Now",
    title: "Wireless & mobile printing",
    note: "Driverless standards let a phone print across the room without thinking about it.",
    href: "/guides/how-wireless-printing-works",
  },
];

export function ThenNow() {
  return (
    <Container width="wide" className="py-14">
      <hr className="rule-sep" />
      <div className="mt-10 grid gap-px border border-rule bg-rule md:grid-cols-2">
        {PANELS.map((p) => (
          <Link
            key={p.tag}
            href={p.href}
            className="group flex flex-col bg-paper-raised p-8 no-underline transition-colors hover:bg-paper"
          >
            <span className="kicker">{p.tag}</span>
            <span className="mt-3 font-serif text-2xl tracking-tight text-ink group-hover:text-accent">
              {p.title}
            </span>
            <span className="mt-2 max-w-sm text-ink-soft text-pretty">
              {p.note}
            </span>
          </Link>
        ))}
      </div>
    </Container>
  );
}
```

- [ ] **Step 3: Create `components/home/CategoryGrid.tsx`**

```tsx
import Link from "next/link";
import { SECTIONS } from "@/lib/site";
import { getSection } from "@/lib/content/queries";
import { Container } from "@/components/layout/Container";

export function CategoryGrid() {
  return (
    <Container width="wide" className="py-14">
      <hr className="rule-sep" />
      <p className="kicker mt-10">Browse the archive</p>
      <h2 className="mt-2 text-display-sm text-balance">
        Eight ways into printing technology
      </h2>
      <ul className="mt-8 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {SECTIONS.map((s, i) => {
          const count = getSection(s.id).length;
          return (
            <li key={s.id} className="bg-paper">
              <Link
                href={`/${s.id}`}
                className="group flex h-full flex-col p-6 no-underline transition-colors hover:bg-paper-raised"
              >
                <span className="font-serif text-2xl leading-none text-rule-strong">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-4 font-serif text-xl tracking-tight text-ink group-hover:text-accent">
                  {s.title}
                </span>
                <span className="mt-1.5 flex-1 text-sm text-ink-soft text-pretty">
                  {s.description}
                </span>
                <span className="mt-4 font-sans text-xs uppercase tracking-wide text-ink-faint">
                  {count} {count === 1 ? "entry" : "entries"}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
```

- [ ] **Step 4: Create `components/home/FeaturedBand.tsx`**

```tsx
import Link from "next/link";
import { getSectionMeta, type SectionId } from "@/lib/site";
import { getSection } from "@/lib/content/queries";
import { entryKicker } from "@/lib/content/kicker";
import { Container } from "@/components/layout/Container";

export function FeaturedBand({ section }: { section: SectionId }) {
  const meta = getSectionMeta(section);
  const items = getSection(section).slice(0, 3);
  if (items.length === 0) return null;
  return (
    <Container width="wide" className="border-t border-rule py-14">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="kicker">{meta.label}</p>
          <h2 className="mt-2 font-serif text-2xl tracking-tight">
            {meta.title}
          </h2>
        </div>
        <Link
          href={`/${section}`}
          className="shrink-0 font-sans text-sm no-underline hover:underline"
        >
          All {meta.label.toLowerCase()} →
        </Link>
      </div>
      <ul className="mt-7 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {items.map((e) => (
          <li key={e.slug} className="bg-paper">
            <Link
              href={`/${e.section}/${e.slug}`}
              className="group flex h-full flex-col p-6 no-underline transition-colors hover:bg-paper-raised"
            >
              <span className="kicker">{entryKicker(e)}</span>
              <span className="mt-2 font-serif text-lg tracking-tight text-ink group-hover:text-accent">
                {e.title}
              </span>
              <span className="mt-1.5 text-sm text-ink-soft text-pretty">
                {e.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
```

- [ ] **Step 5: Create `components/home/EraRail.tsx`** (all hrefs verified to exist in registry)

```tsx
import Link from "next/link";
import { Container } from "@/components/layout/Container";

const ERAS = [
  { era: "Early", title: "Early computer printing", href: "/history/early-computer-printing" },
  { era: "Impact", title: "Dot matrix printers", href: "/history/dot-matrix-printers-explained" },
  { era: "Non-impact", title: "Evolution of laser printing", href: "/history/evolution-of-laser-printing" },
  { era: "Networked", title: "Office printing in the 1990s", href: "/history/office-printing-in-the-1990s" },
  { era: "Mobile", title: "What is AirPrint?", href: "/mobile-printing/what-is-airprint" },
];

export function EraRail() {
  return (
    <section className="surface-grain border-y border-rule-strong bg-sepia">
      <Container width="wide" className="py-14">
        <p className="kicker">A short history</p>
        <h2 className="mt-2 text-display-sm text-balance">
          Five eras of putting marks on a page
        </h2>
        <ol className="mt-8 grid gap-px border border-rule-strong bg-rule-strong sm:grid-cols-2 lg:grid-cols-5">
          {ERAS.map((s, i) => (
            <li key={s.href} className="bg-sepia">
              <Link
                href={s.href}
                className="group flex h-full flex-col p-5 no-underline"
              >
                <span className="font-serif text-2xl leading-none text-rule-strong">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="kicker mt-3">{s.era}</span>
                <span className="mt-1.5 font-serif text-base tracking-tight text-ink group-hover:text-accent">
                  {s.title}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
```

- [ ] **Step 6: Create `components/home/ClosingBand.tsx`**

```tsx
import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "@/components/layout/Container";

export function ClosingBand() {
  return (
    <Container width="wide" className="py-16">
      <hr className="rule-sep" />
      <div className="mt-10 max-w-2xl">
        <p className="kicker">About the archive</p>
        <h2 className="mt-2 text-display-sm text-balance">
          A calm, factual record of printing technology
        </h2>
        <p className="mt-4 font-serif text-lg text-ink-soft text-pretty">
          {site.name} is an educational reference, not a marketplace. No
          reviews, no affiliate links — only structured, source-ready
          explanations of how printing, fax, and document technology works and
          how it evolved.
        </p>
        <p className="mt-5 font-sans text-sm">
          <Link href="/about" className="no-underline hover:underline">
            Read about the archive →
          </Link>
        </p>
      </div>
    </Container>
  );
}
```

- [ ] **Step 7: Verify**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run lint && npm run build`
Expected: all pass (components compile in isolation; wired in Task 16).

- [ ] **Step 8: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add components/home
git commit -m "feat(home): hero, then/now, category grid, featured, era rail, closing

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 16 — Phase 4: Compose the homepage

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace `app/page.tsx`**

```tsx
import { HomeHero } from "@/components/home/HomeHero";
import { ThenNow } from "@/components/home/ThenNow";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { EraRail } from "@/components/home/EraRail";
import { FeaturedBand } from "@/components/home/FeaturedBand";
import { ClosingBand } from "@/components/home/ClosingBand";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ThenNow />
      <CategoryGrid />
      <EraRail />
      <FeaturedBand section="guides" />
      <FeaturedBand section="troubleshooting" />
      <FeaturedBand section="history" />
      <FeaturedBand section="mobile-printing" />
      <FeaturedBand section="brands" />
      <ClosingBand />
    </>
  );
}
```

- [ ] **Step 2: Verify**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run lint && npm run test:content && npm run test:unit && npm run build`
Expected: all pass. Homepage statically renders.

- [ ] **Step 3: Acceptance check**

- Exactly one `<h1>` (in `HomeHero`); all other homepage headings are `<h2>`.
- The hero is compact (`py-16/20`, not full-viewport): `ThenNow` / `CategoryGrid` begin within the first scroll on a standard laptop viewport — useful content is not pushed far below the fold.
- Premium and complete with zero images (motif + typography + sepia era rail). No reserved image gaps.
- All era/diptych/rail hrefs resolve (no 404 lines in `next build` output).
- Hover states restrained (color + `bg-paper-raised`/`bg-paper`, never shadow).

- [ ] **Step 4: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add app/page.tsx
git commit -m "feat(home): compose memorable, calm editorial homepage

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 17 — Phase 8: Full QA gate, responsive/a11y pass, report

**Files:** none (verification + report only)

- [ ] **Step 1: Run the full verification gate**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run lint && npm run test:content && npm run test:unit && npm run build`
Expected: every command exits 0. `next build` output: all routes statically generated, zero `404`/broken-link warnings, no hydration warnings (no Client Components were added).

- [ ] **Step 2: Manual responsive & accessibility review**

Run `npm run start` and review at 375px, 768px, 1280px:
- Each page has exactly one `<h1>`; heading order is sequential.
- Type remains readable; body measure unchanged at `prose` width.
- No layout shift: every `next/image` (none populated yet, but the component) carries intrinsic `width`/`height` + `aspectRatio`.
- Footer collapses 4→1 column cleanly; header nav wraps without overlap.
- Focus-visible ring present on every link/control; AA contrast holds on `bg-paper-raised` and `bg-sepia` (ink/ink-soft on both meet AA at body size).
- Frontispieces and bands look intentional and premium with zero images; no element reads as "missing image".

- [ ] **Step 3: Push the branch**

```bash
cd /Users/petrohrys/printerarchive
git push origin feat/foundation-architecture
```
If push credentials are unavailable, stop and report the exact remaining command for the user to run. Do not push to `main`.

- [ ] **Step 4: Write the final report**

Produce a report covering: visual changes made; components redesigned/created; image-system implementation (types, `ArchiveImage`, integrity gate, schema, graceful default); homepage improvements; UX improvements; performance-impact observations (zero new deps, zero Client Components, static-first preserved, AVIF/WebP enabled, CLS-safe image component); and the verification results from Step 1. Note that real public-domain images are populated later via the approved per-image workflow — not in this redesign.

- [ ] **Step 5: Commit any report artifact (if saved to the repo)**

```bash
cd /Users/petrohrys/printerarchive
git add -A
git commit -m "docs: editorial redesign QA + final report

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>" || echo "nothing to commit"
```

---

## Self-Review

**1. Spec coverage**

| Spec section | Implemented by |
|---|---|
| §4 Foundations (tokens, display tier, kicker, separator, grain, drop cap) | Task 1 |
| §4 / §11 image formats, pipeline | Task 2 |
| §6 Header mark + microline; grouped Footer | Task 3 (+ Task 4 motif) |
| Decision (a) abstract motif | Task 4 |
| §5 typed `ArchiveImage` / `hero` / `figure` / `pullquote` | Task 5 |
| §5 integrity gate (alt/license/source/dims) | Task 6 (TDD) |
| §5 `ArchiveImage` component; §5 schema `image` | Task 7 |
| §5 graceful-default Frontispiece (the key rule) | Task 8 |
| §9 pullquote/figure/drop cap/token blocks | Task 9 |
| §8 per-type kicker | Task 10 (TDD) |
| §8/§9/§10 editorial cards, grouped related, elevated timeline, restyled blocks, byline | Task 11 |
| §8 hub frontispiece + cluster grouping | Task 12 |
| §10 history evolution band | Task 13 |
| §9 article masthead + hero + references | Task 14 |
| §7 homepage sections (hero, then/now, category grid, era rail, featured, closing) | Tasks 15–16 |
| §11/§13 performance, SEO, QA gate; §15 delivery | Task 17 |
| §3 no Client Components / no new deps / publisher strings | Conventions + enforced every task |

No spec section is unimplemented.

**2. Placeholder scan:** No "TBD/TODO/handle edge cases/similar to Task N". Every code step contains complete, paste-ready code.

**3. Type consistency:** `ArchiveImage` (type, Task 5) vs `ArchiveImage` (component, Task 7) — distinct names by file/usage; `ArchiveImage.tsx` imports the type as `ArchiveImageData` to avoid the collision (consistent in Tasks 7, 8, 9). `entryKicker` signature `(Partial<ContentEntry> & { section: string }) => string` is used consistently (Tasks 10, 11, 14, 15). `Frontispiece` props match call sites (Task 8 def vs Task 12 use: `kicker/title/lede/meta/tone/titleClassName`). `ArchiveImage` props (`image/preload/sizes/className`) match all call sites (Tasks 8, 12 via Frontispiece, 14). `imageIssues` strings (`image alt`, `image credit.license`, `image width`) match the failing-test assertions in Task 6. `FOOTER_GROUPS` shape matches Footer consumption (Task 3). `next/image` uses `preload` (Next 16), not `priority`, everywhere.

Cross-task dependency note resolved: Task 3 (Header imports Motif) and Task 12 (SectionHub imports EvolutionBand) explicitly defer their build verification until Tasks 4 and 13 respectively are complete; recommended execution order is sequential by task number.

No issues found.

---

## Execution Handoff

Plan complete. Choose execution mode in the next message.
