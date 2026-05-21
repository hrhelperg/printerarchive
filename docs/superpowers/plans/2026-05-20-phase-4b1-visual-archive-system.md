# Phase 4B.1 — Visual Archive System (Infrastructure) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the site stop feeling like a placeholder typography shell — ship a production-grade logo + image-presentation components + richer separators/pullquote/timeline/archival-card patterns + CSS-only motion + image-led layout density + homepage storytelling restructure, without committing any image binaries and without adding any Client Components or dependencies.

**Architecture:** Eight logical commit batches as eight tasks. Pure Server Components, zero new runtime/font deps, all CSS-only motion gated by `prefers-reduced-motion`. One small pure helper (`groupAdjacentFigures`) gets real TDD; everything else is gated by the full verification suite + explicit acceptance criteria. No edits to `lib/content/types.ts`, `lib/content/integrity.ts`, or `lib/content/kicker.ts`. No new `ContentBlock` kinds.

**Tech Stack:** Next.js 16.2.6, React 19, TypeScript strict, Tailwind CSS v4 via `@tailwindcss/postcss`, `next/font/google` (existing fonts only), Node built-in `node:test` for unit tests.

---

## Conventions & Constraints (read once, apply to every task)

- **Source of truth:** `docs/superpowers/specs/2026-05-20-phase-4b1-visual-archive-system-design.md`. §3 = enforceable register, §5 = density patterns, §6 = motion system, §7 = logo bar.
- **Branch:** `feat/foundation-architecture`. Never `main`. New commit per task on current branch HEAD (no amend/rebase). Before each commit verify `git symbolic-ref --short HEAD` reads `feat/foundation-architecture` (detached-HEAD anomaly seen earlier in the session — guard against it).
- **Commit trailer:** every commit body ends with exactly:
  `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`
  (if gpg signing blocks the commit, use `git -c commit.gpgsign=false commit ...`)
- **Verification gate (run after every task; ALL must pass before declaring task done):**
  `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run lint && npm run test:content && npm run test:unit && npm run build`
  Expected: typecheck/lint clean; `✓ Content integrity OK — 72 entries, no issues found.` (entries unchanged across the whole phase); `test:unit` 14/14 baseline, grows to 14+N after Task 2 adds N tests; build green; static route count unchanged from Phase 4A (91+). No hydration warnings. No dangling-ref errors. The benign pre-existing `MODULE_TYPELESS_PACKAGE_JSON` Node warning is acceptable.
- **Hard rules (carry forward from spec §2):** zero new runtime/font dependencies; zero new Client Components (no `"use client"`, no hooks, no `IntersectionObserver`); no scroll-coupled motion; no new `ContentBlock` kinds; no image binaries; calm article-body prose untouched (66–72ch measure preserved); WCAG-AA contrast and focus-visible preserved; semantic HTML; single `<h1>` per page.
- **Motion discipline (carry forward from spec §6):** every keyframe lives inside `@media (prefers-reduced-motion: no-preference)`. Durations ≤300ms. No scale, no rotation, no parallax. Opacity + ≤2px translate only. `ease-out` is the heaviest easing permitted.
- **No-placeholder-wireframe register (spec §3):** every visual element must read as a deliberate, finished archival artifact at its default state. This applies especially to the logo (Task 7) but also to plates, bands, separators, and cards.
- **No marketing/SaaS aesthetics:** no drop shadows beyond a 1–2px low-opacity card-suggestion shadow on `<ArchivePlate>` (off by default, opt-in via `raised` prop); no gradients; no neon; no scale-on-hover; no animation libraries.

---

## File Structure

**Create:**
- `lib/content/blocks.ts` — pure `groupAdjacentFigures(blocks)` helper (TDD subject)
- `scripts/blocks.test.mjs` — `node:test` unit tests
- `components/content/ArchivePlate.tsx`
- `components/content/ImageGroup.tsx`
- `components/content/ArchivalNote.tsx`
- `components/content/ArchivalCard.tsx`
- `components/content/Separators.tsx` (exports `NumericSeparator` + `MarkSeparator`)
- `components/home/StorytellingBand.tsx`
- `components/identity/Logomark.tsx`
- `components/identity/Wordmark.tsx`
- `app/icon.svg`

**Modify:**
- `app/globals.css` — motion keyframes, `prefers-reduced-motion` gate, fade-up utilities, archival-card base styles, paper-placard utility, separator hairline variants used by Separators components, optional density-spacing utilities
- `components/content/ArchiveImage.tsx` — richer caption rhythm + subtle hover
- `components/content/Frontispiece.tsx` — adopt `<ArchivePlate>` for the image branch
- `components/content/ArticleBody.tsx` — call `groupAdjacentFigures`, render `figure-group` via `<ImageGroup>`, preserve `never` exhaustiveness guard on the remaining `ContentBlock` switch
- `components/content/Pullquote.tsx` — richer paper-feel treatment per spec §5
- `components/content/Timeline.tsx` — era-label affordance + optional `tone="sepia"` prop
- `components/pages/ArticlePage.tsx` — hero uses `<ArchivePlate>`
- `components/layout/Header.tsx` — swap the current `Motif`+text composition for the new `<Wordmark>` (which internally uses `<Logomark>`)
- `components/home/ThenNow.tsx` — refactor to use `<StorytellingBand>` (2 bands, alternating direction)
- `app/page.tsx` — compose new homepage flow (HomeHero → ThenNow-as-bands → CategoryGrid → EraRail → FeaturedBand×N → Archival highlights band → ClosingBand)

(`components/content/Motif.tsx`, `Frontispiece.tsx`'s `<Motif>` fallback, `EraRail.tsx`, `HomeHero.tsx`, `CategoryGrid.tsx`, `FeaturedBand.tsx`, `ClosingBand.tsx`, all content modules, registry, schema, sitemap, `lib/content/types.ts`, `lib/content/integrity.ts`, `lib/content/kicker.ts`, `next.config.ts` — UNCHANGED in 4B.1.)

---

## Task 1 — Motion foundations + density tokens + separator hairlines in `globals.css`

**Files:** Modify `app/globals.css` (append, do not delete existing content)

- [ ] **Step 1: Append motion + utility blocks to `app/globals.css`**

Append the following to the end of the file. Keep every existing rule unchanged:

```css

/* ============================================================
   Phase 4B.1 — motion + visual-system primitives
   ============================================================ */

/* Motion is opt-in: nothing animates for prefers-reduced-motion users. */
@media (prefers-reduced-motion: no-preference) {
  @keyframes fade-up {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes separator-grow {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  @keyframes dot-stagger {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .fade-up   { animation: fade-up 280ms ease-out both; }
  .fade-up-1 { animation: fade-up 280ms ease-out  50ms both; }
  .fade-up-2 { animation: fade-up 280ms ease-out 100ms both; }
  .fade-up-3 { animation: fade-up 280ms ease-out 150ms both; }
  .fade-up-4 { animation: fade-up 280ms ease-out 200ms both; }
  .fade-up-5 { animation: fade-up 280ms ease-out 250ms both; }

  .rule-sep,
  .rule-sep-hairline {
    transform-origin: left;
    animation: separator-grow 400ms ease-out both;
  }

  .timeline-dot {
    animation: dot-stagger 280ms ease-out both;
  }
}

/* Archival placard frame — used by ArchivePlate and image-led cards. */
.archival-placard {
  border: 1px solid var(--color-rule-strong);
  background: var(--color-paper-raised);
  padding: 0.5rem;
}
.archival-placard--raised {
  /* Quiet 1–2px low-opacity shadow to suggest a physical card.
     Off by default — only used when ArchivePlate is given raised={true}. */
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.04), 0 2px 4px rgb(0 0 0 / 0.03);
}

/* Archival-card surface — used by ArchivalCard and editorial cards. */
.archival-card {
  background: var(--color-paper-raised);
  border: 1px solid var(--color-rule);
  transition: background-color 200ms ease-out, border-color 200ms ease-out;
}
.archival-card:hover {
  background: var(--color-paper);
  border-color: var(--color-rule-strong);
}

/* Hairline used by NumericSeparator and MarkSeparator. */
.rule-sep-hairline {
  border: 0;
  border-top: 1px solid var(--color-rule);
  width: 100%;
}

/* Pullquote enrichment hooks (semantic structure unchanged in component). */
.pullquote-frame {
  border-top: 1px solid var(--color-rule-strong);
  border-bottom: 1px solid var(--color-rule-strong);
  padding: 1.5rem 0;
}
.pullquote-glyph {
  font-family: var(--font-serif);
  color: var(--color-rule-strong);
  font-size: 3rem;
  line-height: 0.8;
}
```

- [ ] **Step 2: Verify gate**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run lint && npm run test:content && npm run test:unit && npm run build`
Expected: all green; `test:content` 72 entries; `test:unit` 14/14; build OK. (CSS-only; nothing imports these new classes yet — that's fine.)

- [ ] **Step 3: Commit**

```
cd /Users/petrohrys/printerarchive
git symbolic-ref --short HEAD   # must be feat/foundation-architecture
git add app/globals.css
git commit -m "feat(motion): CSS-only animation foundations + visual-system primitives

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 2 — `groupAdjacentFigures` pure helper (TDD)

**Files:** Create `lib/content/blocks.ts`; Create `scripts/blocks.test.mjs`

- [ ] **Step 1: Write the failing test — create `scripts/blocks.test.mjs`**

```js
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
```

- [ ] **Step 2: Run RED**

Run: `cd /Users/petrohrys/printerarchive && npm run test:unit`
Expected: existing 14 tests still pass; the 8 new `groupAdjacentFigures` tests FAIL because `lib/content/blocks.ts` does not exist (dynamic import throws). Paste the failing summary. If the new tests pass, STOP and report.

- [ ] **Step 3: Implement — create `lib/content/blocks.ts`**

```ts
import type { ContentBlock } from "@/lib/content/types";

type FigureBlock = Extract<ContentBlock, { kind: "figure" }>;

export interface FigureGroupBlock {
  kind: "figure-group";
  figures: FigureBlock[];
}

export type ProcessedBlock = ContentBlock | FigureGroupBlock;

/**
 * Collapse runs of ≥ minGroupSize adjacent `figure` blocks into a single
 * `figure-group` synthetic block. Non-figure blocks and shorter runs pass
 * through unchanged. Pure — no side effects, no dependencies.
 */
export function groupAdjacentFigures(
  blocks: ContentBlock[],
  minGroupSize = 2,
): ProcessedBlock[] {
  const out: ProcessedBlock[] = [];
  let i = 0;
  while (i < blocks.length) {
    if (blocks[i].kind === "figure") {
      const run: FigureBlock[] = [];
      while (i < blocks.length && blocks[i].kind === "figure") {
        run.push(blocks[i] as FigureBlock);
        i++;
      }
      if (run.length >= minGroupSize) {
        out.push({ kind: "figure-group", figures: run });
      } else {
        out.push(...run);
      }
    } else {
      out.push(blocks[i]);
      i++;
    }
  }
  return out;
}
```

- [ ] **Step 4: Run GREEN**

Run: `cd /Users/petrohrys/printerarchive && npm run test:unit && npm run typecheck && npm run lint && npm run test:content && npm run build`
Expected: ALL unit tests pass (now 22: 6 integrity + 8 kicker + 8 blocks); typecheck/lint clean; `test:content` 72; build green; no new routes. Paste the unit summary line + build OK line.

- [ ] **Step 5: Commit**

```
cd /Users/petrohrys/printerarchive
git symbolic-ref --short HEAD
git add lib/content/blocks.ts scripts/blocks.test.mjs
git commit -m "feat(content): groupAdjacentFigures helper for image grouping (TDD)

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 3 — Image-presentation components

**Files:** Create `components/content/ArchivePlate.tsx`, `components/content/ImageGroup.tsx`, `components/content/ArchivalNote.tsx`, `components/content/ArchivalCard.tsx`, `components/content/Separators.tsx`; Modify `components/content/ArchiveImage.tsx`.

- [ ] **Step 1: Create `components/content/ArchivePlate.tsx`**

```tsx
import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";
import { ArchiveImage } from "./ArchiveImage";

interface ArchivePlateProps {
  image: ArchiveImageData;
  preload?: boolean;
  sizes?: string;
  label?: string;
  raised?: boolean;
  className?: string;
}

/**
 * Museum-placard frame for an archival image. Hairline outer frame +
 * paper-raised mat + optional kicker label + full caption block under
 * the image. Subtle 1–2px shadow opt-in via `raised`. Server Component.
 */
export function ArchivePlate({
  image,
  preload = false,
  sizes = "(max-width: 768px) 100vw, 768px",
  label,
  raised = false,
  className = "",
}: ArchivePlateProps) {
  return (
    <figure
      className={`my-8 archival-placard${raised ? " archival-placard--raised" : ""} ${className}`}
    >
      {label ? (
        <p className="kicker mb-2">{label}</p>
      ) : null}
      <ArchiveImage
        image={image}
        preload={preload}
        sizes={sizes}
        className="my-0"
      />
    </figure>
  );
}
```

- [ ] **Step 2: Create `components/content/ImageGroup.tsx`**

```tsx
import type { ReactNode } from "react";

interface ImageGroupProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

/**
 * Editorial collage for 2–4 adjacent figures. Renders children in a
 * responsive CSS grid; the children are expected to be <Figure> or
 * <ArchiveImage> elements. Server Component.
 */
export function ImageGroup({
  children,
  columns = 2,
  className = "",
}: ImageGroupProps) {
  const cols =
    columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : columns === 3
        ? "md:grid-cols-2 lg:grid-cols-3"
        : "md:grid-cols-2";
  return (
    <div className={`my-8 grid grid-cols-1 gap-4 ${cols} ${className}`}>
      {children}
    </div>
  );
}
```

- [ ] **Step 3: Create `components/content/ArchivalNote.tsx`**

```tsx
import type { ReactNode } from "react";

interface ArchivalNoteProps {
  label?: string;
  children: ReactNode;
}

/**
 * Paper-feel archival note. Complements <Callout> with a tighter
 * documentary register. Server Component.
 */
export function ArchivalNote({
  label = "Note from the archive",
  children,
}: ArchivalNoteProps) {
  return (
    <aside className="my-7 border border-rule-strong bg-paper-raised px-5 py-4">
      <p className="kicker">{label}</p>
      <div className="mt-1.5 text-ink-soft text-pretty">{children}</div>
    </aside>
  );
}
```

- [ ] **Step 4: Create `components/content/ArchivalCard.tsx`**

```tsx
import type { ReactNode } from "react";

interface ArchivalCardProps {
  variant?: "default" | "lead";
  href?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Editorial archival-card surface used by hub lead entries, homepage
 * bands, and feature blocks. Two variants: default (compact) and lead
 * (larger, for prominent feature cards). When `href` is given, the
 * whole card becomes a single accessible link via the inner anchor.
 * Server Component.
 */
export function ArchivalCard({
  variant = "default",
  href,
  children,
  className = "",
}: ArchivalCardProps) {
  const sizing = variant === "lead" ? "p-7 md:p-9" : "p-5 md:p-6";
  const base = `archival-card ${sizing} ${className}`;
  if (href) {
    return (
      <a href={href} className={`group block no-underline ${base}`}>
        {children}
      </a>
    );
  }
  return <div className={base}>{children}</div>;
}
```

- [ ] **Step 5: Create `components/content/Separators.tsx`**

```tsx
import { Motif } from "./Motif";

interface NumericSeparatorProps {
  n: number;
  className?: string;
}

/**
 * Richer separator: hairline · centered ordinal numeral · hairline.
 * Used between major homepage bands. Server Component.
 */
export function NumericSeparator({ n, className = "" }: NumericSeparatorProps) {
  return (
    <div
      role="separator"
      aria-hidden="true"
      className={`my-12 grid grid-cols-[1fr_auto_1fr] items-center gap-6 ${className}`}
    >
      <hr className="rule-sep-hairline" />
      <span className="font-serif text-2xl leading-none text-rule-strong">
        {String(n).padStart(2, "0")}
      </span>
      <hr className="rule-sep-hairline" />
    </div>
  );
}

interface MarkSeparatorProps {
  className?: string;
}

/**
 * Richer separator: hairline · tiny abstract Motif glyph · hairline.
 * Used between article sections where a chapter break is meaningful.
 * Server Component.
 */
export function MarkSeparator({ className = "" }: MarkSeparatorProps) {
  return (
    <div
      role="separator"
      aria-hidden="true"
      className={`my-12 grid grid-cols-[1fr_auto_1fr] items-center gap-6 ${className}`}
    >
      <hr className="rule-sep-hairline" />
      <Motif className="h-5 w-5 text-rule-strong" />
      <hr className="rule-sep-hairline" />
    </div>
  );
}
```

- [ ] **Step 6: Modify `components/content/ArchiveImage.tsx` — richer caption rhythm + subtle hover**

Replace the file entirely with:

```tsx
import Image from "next/image";
import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";

// Paper-toned 1×1 placeholder; avoids per-image blur tooling.
const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23f4f1e9'/%3E%3C/svg%3E";

interface ArchiveImageProps {
  image: ArchiveImageData;
  preload?: boolean;
  sizes?: string;
  className?: string;
}

export function ArchiveImage({
  image,
  preload = false,
  sizes = "(max-width: 768px) 100vw, 768px",
  className = "",
}: ArchiveImageProps) {
  const { src, alt, width, height, caption, credit } = image;
  return (
    <figure
      className={`my-8 transition-opacity duration-200 hover:opacity-95 ${className}`}
    >
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
        <figcaption className="mt-3 font-sans text-xs text-ink-faint">
          {caption ? (
            <span className="block text-ink-soft">{caption}</span>
          ) : null}
          <span className={caption ? "mt-0.5 block" : "block"}>
            {credit.url ? (
              <a href={credit.url} rel="noopener noreferrer nofollow">
                {credit.source}
              </a>
            ) : (
              credit.source
            )}
            {credit.license ? ` · ${credit.license}` : ""}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
```

(Changes vs prior: caption now renders on its own line; `source · license` on a second line under the caption; subtle `transition-opacity` hover on the figure. Behavioral parity for callers — same props, same CLS guarantees, same Next 16 `preload`.)

- [ ] **Step 7: Verify**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run lint && npm run test:content && npm run test:unit && npm run build`
Expected: all green; 72 entries; 22/22 unit tests; build green; no new routes (these are utility components not yet wired into pages). Paste key lines.

- [ ] **Step 8: Commit**

```
cd /Users/petrohrys/printerarchive
git symbolic-ref --short HEAD
git add components/content/ArchivePlate.tsx components/content/ImageGroup.tsx components/content/ArchivalNote.tsx components/content/ArchivalCard.tsx components/content/Separators.tsx components/content/ArchiveImage.tsx
git commit -m "feat(ui): image-presentation components + richer captions

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 4 — Richer Pullquote + Timeline (era-label + sepia)

**Files:** Modify `components/content/Pullquote.tsx`; Modify `components/content/Timeline.tsx`

- [ ] **Step 1: Replace `components/content/Pullquote.tsx`**

```tsx
interface PullquoteProps {
  text: string;
  attribution?: string;
}

/**
 * Editorial pullquote with paper-feel top/bottom hairline frame,
 * oversized decorative opening quote glyph (aria-hidden), display-sm
 * serif body, and small-caps attribution with a leading em-dash.
 * Semantic <figure>/<blockquote>/<figcaption> preserved.
 */
export function Pullquote({ text, attribution }: PullquoteProps) {
  return (
    <figure className="my-10 pullquote-frame">
      <span aria-hidden="true" className="pullquote-glyph block leading-none">
        “
      </span>
      <blockquote className="mt-2 text-display-sm leading-snug text-ink-display text-pretty">
        {text}
      </blockquote>
      {attribution ? (
        <figcaption className="mt-4 font-sans text-xs uppercase tracking-wide text-ink-faint">
          — {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
```

- [ ] **Step 2: Replace `components/content/Timeline.tsx`**

```tsx
interface TimelineProps {
  events: { period: string; text: string }[];
  tone?: "default" | "sepia";
}

/**
 * Elevated vertical timeline rail. Era-label affordance: `period`
 * renders in serif with a hairline tick marker. Optional sepia tone
 * for History-cluster usage. Dots stagger-fade on load via the
 * `.timeline-dot` keyframe (gated by prefers-reduced-motion).
 */
export function Timeline({ events, tone = "default" }: TimelineProps) {
  const railColor =
    tone === "sepia" ? "border-l-rule-strong" : "border-l-rule-strong";
  const periodColor =
    tone === "sepia" ? "text-ink-display" : "text-ink-display";
  return (
    <ol className={`my-8 border-l ${railColor}`}>
      {events.map((e, i) => (
        <li key={i} className="relative py-6 pl-6 last:pb-0">
          <span
            aria-hidden="true"
            className="timeline-dot absolute left-[-4.5px] top-9 h-2 w-2 rounded-full border border-rule-strong bg-paper"
            style={{ animationDelay: `${i * 50}ms` }}
          />
          <p
            className={`font-serif text-base leading-snug ${periodColor} flex items-center gap-3`}
          >
            <span
              aria-hidden="true"
              className="inline-block h-px w-4 bg-rule-strong"
            />
            <span className="font-semibold tracking-tight">{e.period}</span>
          </p>
          <p className="mt-1.5 text-ink-soft text-pretty">{e.text}</p>
        </li>
      ))}
    </ol>
  );
}
```

(Note: `tone` accepted but the visual delta is intentionally restrained — the rail/period color stays the same; the sepia tone is reserved for surrounding band background, not for the timeline itself, to keep AA contrast on the period label. The prop is accepted for caller ergonomics and future extension; document via the comment.)

- [ ] **Step 3: Verify**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run lint && npm run test:content && npm run test:unit && npm run build`
Expected: all green; 22/22 unit tests; build green (existing pages that use Pullquote/Timeline keep working with the same props — both signatures unchanged). Paste key lines.

- [ ] **Step 4: Commit**

```
cd /Users/petrohrys/printerarchive
git symbolic-ref --short HEAD
git add components/content/Pullquote.tsx components/content/Timeline.tsx
git commit -m "feat(ui): richer pullquote frame + era-affordance timeline

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 5 — Page-template adoption (Frontispiece + ArticlePage + ArticleBody)

**Files:** Modify `components/content/Frontispiece.tsx`; Modify `components/pages/ArticlePage.tsx`; Modify `components/content/ArticleBody.tsx`

- [ ] **Step 1: Replace `components/content/Frontispiece.tsx`**

```tsx
import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";
import { ArchivePlate } from "./ArchivePlate";
import { Motif } from "./Motif";

interface FrontispieceProps {
  kicker?: string;
  title: string;
  lede?: string;
  meta?: string;
  image?: ArchiveImageData;
  tone?: "default" | "sepia";
  preload?: boolean;
  titleClassName?: string;
}

/**
 * The default visual identity of a page. Premium-with-zero-images:
 * when no image, the motif panel renders in the same bounded frame
 * — no reserved empty gap. When an image exists, ArchivePlate slots
 * in at the same footprint (no CLS).
 */
export function Frontispiece({
  kicker,
  title,
  lede,
  meta,
  image,
  tone = "default",
  preload = false,
  titleClassName = "text-display",
}: FrontispieceProps) {
  const surface = tone === "sepia" ? "bg-sepia" : "bg-paper-raised";
  return (
    <section
      className={`surface-grain ${surface} border-y border-rule-strong fade-up`}
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
            <ArchivePlate
              image={image}
              preload={preload}
              sizes="(max-width: 1024px) 100vw, 420px"
              className="my-0 w-full max-w-md"
            />
          ) : (
            <div
              aria-hidden
              className="flex aspect-[4/3] w-full max-w-md items-center justify-center border border-rule-strong bg-paper-raised"
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

(Changes vs prior: image branch uses `<ArchivePlate>` instead of raw `<ArchiveImage>`; motif fallback gets explicit `bg-paper-raised` so the empty branch reads as a deliberate plate even though the parent section already has the same bg — defends against any future restructure; `fade-up` class on the section so the frontispiece animates in. All other behavior identical: same single `<h1>`, same footprint, no CLS.)

- [ ] **Step 2: Replace `components/pages/ArticlePage.tsx`**

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
import { ArchivePlate } from "@/components/content/ArchivePlate";
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
  const sectionLabel = getSectionMeta(e.section).label;
  const kick = entryKicker(e);
  const showKick =
    kick.toLowerCase() !== sectionLabel.toLowerCase() &&
    kick.toLowerCase() !== sectionLabel.toLowerCase().replace(/s$/, "");
  return (
    <Container width="prose" className="py-12">
      <JsonLd data={schemas} />
      <Breadcrumbs items={crumbs} />
      <article className="mt-6 fade-up">
        <header>
          <p className="kicker">
            {sectionLabel}
            {showKick ? ` · ${kick}` : ""}
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
          <ArchivePlate
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

(Changes vs prior: hero now uses `<ArchivePlate>` instead of raw `<ArchiveImage>` (richer caption/credit + frame); article gets `fade-up` class so the masthead animates in. Single `<h1>` preserved. No Frontispiece usage. Existing kicker-dedupe logic preserved verbatim.)

- [ ] **Step 3: Replace `components/content/ArticleBody.tsx` — use `groupAdjacentFigures` + render `figure-group` via `<ImageGroup>`**

```tsx
import type { ContentBlock } from "@/lib/content/types";
import { groupAdjacentFigures } from "@/lib/content/blocks";
import { Callout } from "./Callout";
import { KeyTakeaways } from "./KeyTakeaways";
import { StepList } from "./StepList";
import { Timeline } from "./Timeline";
import { Pullquote } from "./Pullquote";
import { Figure } from "./Figure";
import { ImageGroup } from "./ImageGroup";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  const processed = groupAdjacentFigures(blocks);
  return (
    <>
      {processed.map((b, i) => {
        if (b.kind === "figure-group") {
          const cols = b.figures.length >= 3 ? 3 : 2;
          return (
            <ImageGroup key={i} columns={cols as 2 | 3 | 4}>
              {b.figures.map((f, j) => (
                <Figure key={j} image={f.image} />
              ))}
            </ImageGroup>
          );
        }
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
                          <td key={k} className="border border-rule px-3 py-2">
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

(Net change: handle `figure-group` BEFORE the `ContentBlock` switch; the inner switch retains its `never` exhaustiveness guard so any future `ContentBlock` variant still fails compile until handled. Dropcap currently keyed on `i === 0` of the processed array — that may match `figure-group` as index 0 in unusual content; since no current entry leads with a figure block (and the spec forbids image data in 4B.1 entirely), this is safe in practice. No content modules need to change.)

- [ ] **Step 4: Verify**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run lint && npm run test:content && npm run test:unit && npm run build`
Expected: all green; 22/22 unit tests; 72 entries; build green; existing pages render unchanged (no entry currently has any `figure` blocks so the new `groupAdjacentFigures` branch is dead in production — but its TDD coverage proves correctness for when images arrive). Paste key lines.

- [ ] **Step 5: Commit**

```
cd /Users/petrohrys/printerarchive
git symbolic-ref --short HEAD
git add components/content/Frontispiece.tsx components/pages/ArticlePage.tsx components/content/ArticleBody.tsx
git commit -m "feat(templates): adopt ArchivePlate + group adjacent figures + fade-up

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 6 — StorytellingBand + homepage restructure + Archival highlights band

**Files:** Create `components/home/StorytellingBand.tsx`; Modify `components/home/ThenNow.tsx`; Modify `app/page.tsx`

- [ ] **Step 1: Create `components/home/StorytellingBand.tsx`**

```tsx
import Link from "next/link";
import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";
import { ArchivePlate } from "@/components/content/ArchivePlate";
import { Motif } from "@/components/content/Motif";
import { Container } from "@/components/layout/Container";

interface StorytellingBandProps {
  kicker?: string;
  title: string;
  lede?: string;
  body?: string[];
  href: string;
  hrefLabel?: string;
  image?: ArchiveImageData;
  direction?: "image-right" | "image-left";
  tone?: "default" | "raised";
  className?: string;
}

/**
 * Image-led editorial storytelling band. Asymmetrical split with the
 * text on one side and an ArchivePlate (or graceful Motif fallback)
 * on the other. Same bounded image footprint in both branches — no
 * CLS when an image later arrives. Server Component.
 */
export function StorytellingBand({
  kicker,
  title,
  lede,
  body,
  href,
  hrefLabel = "Continue in the archive →",
  image,
  direction = "image-right",
  tone = "default",
  className = "",
}: StorytellingBandProps) {
  const surface = tone === "raised" ? "bg-paper-raised" : "bg-paper";
  const order =
    direction === "image-left"
      ? "lg:grid-cols-[1fr_1.4fr]"
      : "lg:grid-cols-[1.4fr_1fr]";
  const imageOrderClass =
    direction === "image-left" ? "lg:order-first" : "lg:order-last";
  return (
    <section className={`border-y border-rule ${surface} fade-up ${className}`}>
      <Container width="wide" className="py-14 lg:py-20">
        <div className={`grid grid-cols-1 gap-10 ${order} lg:items-center`}>
          <div>
            {kicker ? <p className="kicker">{kicker}</p> : null}
            <h2 className="mt-3 text-display-sm text-balance">{title}</h2>
            {lede ? (
              <p className="mt-4 max-w-xl font-serif text-lg text-ink-soft text-pretty">
                {lede}
              </p>
            ) : null}
            {body?.map((p, i) => (
              <p
                key={i}
                className="mt-4 max-w-xl text-ink-soft text-pretty"
              >
                {p}
              </p>
            ))}
            <p className="mt-6 font-sans text-sm">
              <Link href={href} className="no-underline hover:underline">
                {hrefLabel}
              </Link>
            </p>
          </div>
          <div className={imageOrderClass}>
            {image ? (
              <ArchivePlate
                image={image}
                sizes="(max-width: 1024px) 100vw, 480px"
                className="my-0 w-full max-w-md"
              />
            ) : (
              <div
                aria-hidden
                className="flex aspect-[4/3] w-full max-w-md items-center justify-center border border-rule-strong bg-paper-raised"
              >
                <Motif className="h-20 w-20 text-rule-strong" />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Replace `components/home/ThenNow.tsx`** — composes two `<StorytellingBand>`s, alternating direction

```tsx
import { StorytellingBand } from "./StorytellingBand";

export function ThenNow() {
  return (
    <>
      <StorytellingBand
        kicker="Then"
        title="Mechanical & impact printing"
        lede="Hammers, ribbons, and continuous-feed paper — the loud origins of the office printer."
        href="/history/history-of-printers"
        hrefLabel="Read the impact era →"
        direction="image-left"
      />
      <StorytellingBand
        kicker="Now"
        title="Wireless & mobile printing"
        lede="Driverless standards let a phone print across the room without thinking about it."
        href="/guides/how-wireless-printing-works"
        hrefLabel="Read the wireless era →"
        direction="image-right"
        tone="raised"
      />
    </>
  );
}
```

- [ ] **Step 3: Replace `app/page.tsx`** — insert "Archival highlights" band before ClosingBand

```tsx
import { HomeHero } from "@/components/home/HomeHero";
import { ThenNow } from "@/components/home/ThenNow";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { EraRail } from "@/components/home/EraRail";
import { FeaturedBand } from "@/components/home/FeaturedBand";
import { ClosingBand } from "@/components/home/ClosingBand";
import { StorytellingBand } from "@/components/home/StorytellingBand";

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
      <StorytellingBand
        kicker="Archival highlights"
        title="A documentary record of how printing reshaped office work"
        lede="From shared department printers to driverless mobile output — printing reorganised the workday around itself, and the archive follows that trail."
        href="/history"
        hrefLabel="Enter the archive →"
        direction="image-left"
        tone="raised"
      />
      <ClosingBand />
    </>
  );
}
```

- [ ] **Step 4: Verify**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run lint && npm run test:content && npm run test:unit && npm run build`
Expected: all green; 22/22 unit tests; 72 entries; build green, same static route count (homepage `/` still one route). Paste key lines + the `/` route line from build output.

- [ ] **Step 5: Acceptance**

Confirm: homepage has exactly ONE `<h1>` (still in `HomeHero`); the two `<StorytellingBand>` `<h2>`s + the Archival highlights `<h2>` add three `<h2>`s alongside the existing band `<h2>`s — heading order unchanged. All hrefs resolve (history-of-printers, how-wireless-printing-works, /history all exist; the integrity gate would fail otherwise). Premium-with-zero-images preserved (motif panels render in the same `max-w-md aspect-[4/3]` footprint, so an image arriving via 4B.3 swaps in without CLS).

- [ ] **Step 6: Commit**

```
cd /Users/petrohrys/printerarchive
git symbolic-ref --short HEAD
git add components/home/StorytellingBand.tsx components/home/ThenNow.tsx app/page.tsx
git commit -m "feat(home): storytelling bands + archival highlights band

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 7 — Logo redesign (Logomark + Wordmark + Header swap + favicon)

**Files:** Create `components/identity/Logomark.tsx`; Create `components/identity/Wordmark.tsx`; Create `app/icon.svg`; Modify `components/layout/Header.tsx`

This task carries an enforceable acceptance gate (spec §7 bar): the mark must read as a deliberate archival-institution mark (NOT a refined wireframe), stay recognisable as PrinterArchive at **16×16 and 32×32**, and work in header / favicon / monochrome SVG / social previews / mobile navbar.

- [ ] **Step 1: Sketch 2–3 SVG candidates (the design exercise)**

Before writing the final Logomark, draft 2–3 distinct SVG candidates in plain text (you may use an inline scratch file like `/tmp/sketch-logomark.md` — do not commit it). Each candidate must satisfy ALL of:
- Square `viewBox="0 0 24 24"` (primary) for crisp scaling
- Single-color `stroke="currentColor"`, single stroke weight throughout
- At LEAST ONE solid (filled) element of meaningful visible mass — a small filled square, a thick bar, a solid dot of sufficient size, etc. (this is the spec §7 elevation move that prevents the "all-hairlines wireframe" feeling)
- Optical balance over geometric symmetry — composition reads as deliberate, not just centered
- Whole-pixel coordinates so 32×32 and 48×48 renders stay crisp
- No literal printer/fax outline; no cartoon; no gradient/color; no AI-look
- Distinctive enough at 16×16 to be identifiable as PrinterArchive (apply the test: imagine the favicon — does the silhouette read?)

Concrete starting directions (use one, or invent better — the goal is to elevate, not to copy a prompt):
- (i) Archival-stamp inspired: hairline frame + one small filled square corner element (registration-mark-like)
- (ii) Print-bed inspired: hairline frame + one solid horizontal bar (abstract platen/baseline) at a deliberate non-center horizontal axis
- (iii) Plate inspired: hairline outer frame + a solid inner square offset slightly off-center (suggests a stamped/imprinted artifact)

Pick the candidate that BEST passes the 16px legibility test AND reads most as a deliberate archival mark (not as a sketch). Document your choice + reasoning in the commit message body.

- [ ] **Step 2: Create `components/identity/Logomark.tsx`** with the chosen primary SVG

Skeleton (fill in the chosen geometry — keep the prop API exactly as shown):

```tsx
interface LogomarkProps {
  className?: string;
  accessibleName?: string;
}

/**
 * Primary PrinterArchive mark. Single-color SVG (uses currentColor).
 * 24×24 viewBox. Decorative by default (aria-hidden); pass
 * `accessibleName` only when the mark is the link's accessible name.
 */
export function Logomark({ className = "", accessibleName }: LogomarkProps) {
  const a11y = accessibleName
    ? { role: "img" as const, "aria-label": accessibleName }
    : { "aria-hidden": true as const };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      className={className}
      {...a11y}
    >
      {/*
        Replace the placeholder geometry below with the chosen primary
        composition from Step 1. Constraints (must hold in the final SVG):
        - One solid <rect> or filled element of visible mass (≥ 4×4 units)
        - Hairline outer/structural elements at stroke-width 1
        - Whole-pixel coordinates
        - No gradient; fill values are either "currentColor" or "none"
        - stroke="currentColor" on stroked elements
      */}
      <rect
        x="3.5" y="3.5" width="17" height="17"
        stroke="currentColor" strokeWidth="1" fill="none"
      />
      <rect
        x="14" y="14" width="6" height="6"
        fill="currentColor"
      />
    </svg>
  );
}
```

(That body is a known-passing baseline if Step 1 doesn't produce something better — hairline frame + one solid corner block. Replace with the chosen Step-1 design.)

- [ ] **Step 3: Create `components/identity/Wordmark.tsx`**

```tsx
import { Logomark } from "./Logomark";

interface WordmarkProps {
  size?: "default" | "compact";
  showTagline?: boolean;
  tagline?: string;
  name?: string;
  className?: string;
}

/**
 * Wordmark = Logomark + serif name + hairline divider + optional
 * small-caps tagline microline. Used in Header and any identity
 * context. Server Component.
 */
export function Wordmark({
  size = "default",
  showTagline = true,
  tagline,
  name = "PrinterArchive",
  className = "",
}: WordmarkProps) {
  const markSize = size === "compact" ? "h-6 w-6" : "h-7 w-7";
  const nameSize =
    size === "compact"
      ? "text-base font-semibold"
      : "text-xl font-semibold";
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <Logomark className={`${markSize} text-ink`} />
      <span className="flex h-7 items-center">
        <span aria-hidden="true" className="h-5 w-px bg-rule-strong" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif tracking-tight text-ink ${nameSize}`}
        >
          {name}
        </span>
        {showTagline && tagline ? (
          <span className="mt-1 hidden font-sans text-[0.68rem] uppercase tracking-[0.18em] text-ink-faint sm:block">
            {tagline}
          </span>
        ) : null}
      </span>
    </span>
  );
}
```

- [ ] **Step 4: Create `app/icon.svg`** — favicon-tuned SVG

Choose ONE of two strategies for the favicon based on the 16px test of the primary mark:
- **(A) Primary mark passes 16px:** copy the chosen Logomark geometry into `app/icon.svg` with `viewBox="0 0 24 24"`, single-color (use literal `#1a1a1a` or `currentColor`-equivalent), no Tailwind classes, no external refs.
- **(B) Primary mark needs heavier strokes at 16px:** draft a slightly different small-size variant — same composition, but with thicker stroke (≥1.25–1.5 units) or proportionally bolder solid block — tuned for crisp 16×16 / 32×32 render. The two SVGs may share visual identity without being identical pixel-for-pixel.

Concrete starting `app/icon.svg` (matches the baseline geometry; replace if you chose a different primary):

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
  <rect x="3.5" y="3.5" width="17" height="17" fill="none" stroke="#1a1a1a" stroke-width="1.25"/>
  <rect x="14" y="14" width="6" height="6" fill="#1a1a1a"/>
</svg>
```

Test by opening `app/icon.svg` rendered at 16×16 and 32×32 (use a browser zoom, or imagine the render — the silhouette must still read). If it doesn't, return to Step 1 with a different candidate.

- [ ] **Step 5: Replace `components/layout/Header.tsx`**

```tsx
import Link from "next/link";
import { SECTIONS, site } from "@/lib/site";
import { Container } from "./Container";
import { Wordmark } from "@/components/identity/Wordmark";

export function Header() {
  return (
    <header className="border-b border-rule">
      <Container
        width="wide"
        className="flex flex-wrap items-center justify-between gap-y-3 py-5"
      >
        <Link
          href="/"
          className="group no-underline"
          aria-label={`${site.name} — home`}
        >
          <Wordmark tagline={site.tagline} />
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

- [ ] **Step 6: Verify**

Run: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run lint && npm run test:content && npm run test:unit && npm run build`
Expected: all green; 22/22; 72 entries; build green; `app/icon.svg` recognised by Next 16's file convention (no warnings about favicon).

Manually verify the 16px legibility test by inspecting `app/icon.svg`: open it in a browser (or render mentally), zoom to 16×16. The silhouette must read as a deliberate mark — not a tiny hairline blob. If it fails, return to Step 1 with a different candidate before committing.

- [ ] **Step 7: Acceptance**

- `grep -n "use client" components/identity/` → empty (Server Components only)
- `grep -rn "<h1" components/identity/ components/layout/Header.tsx` → empty (logo never carries `<h1>`; page `<h1>`s remain on individual pages)
- Header renders the new Wordmark; the old `Motif` component is still imported elsewhere (Separators, Frontispiece motif fallback, StorytellingBand motif fallback) — `grep -rn 'from "@/components/content/Motif"' components` should list multiple consumers; the file must NOT be deleted.
- `app/icon.svg` exists; `app/favicon.ico` is preserved as legacy fallback (do not delete it).

- [ ] **Step 8: Commit**

```
cd /Users/petrohrys/printerarchive
git symbolic-ref --short HEAD
git add components/identity/Logomark.tsx components/identity/Wordmark.tsx components/layout/Header.tsx app/icon.svg
git commit -m "feat(identity): production-grade Logomark + Wordmark + favicon

<one-paragraph description of the chosen geometry and the reasoning
that satisfied the 16px legibility test; this body documents the
design decision so a future contributor can see why the mark is
shaped this way>

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 8 — Final QA + push + report

**Files:** none (verification + push + report)

- [ ] **Step 1: Run the full fresh gate**

`cd /Users/petrohrys/printerarchive && npm run typecheck && npm run lint && npm run test:content && npm run test:unit && npm run build`
Expected: all green; `test:content` 72 entries (unchanged); `test:unit` 22/22 (14 baseline + 8 new from Task 2); build green, same static route count as Phase 4A (91+ — homepage `/` unchanged in count, just visually richer); no hydration warnings; benign `MODULE_TYPELESS_PACKAGE_JSON` Node warning acceptable.

- [ ] **Step 2: Cross-cutting checks**

- `grep -rn '"use client"' app components` → empty (zero Client Components introduced)
- `grep -rn 'kind: "figure"\|hero:' content` → empty (no image binaries / no `hero` data added)
- `git diff <Phase-4A HEAD> HEAD -- package.json package-lock.json` → empty (zero new deps)
- `grep -rn 'animation-timeline\|IntersectionObserver' app components` → empty (no scroll-coupled motion)
- Every keyframe in `app/globals.css` lives inside the `@media (prefers-reduced-motion: no-preference)` block

- [ ] **Step 3: Push (user durably authorized push to this branch only)**

```
cd /Users/petrohrys/printerarchive
git symbolic-ref --short HEAD   # feat/foundation-architecture
git push origin feat/foundation-architecture
```
Expect a fast-forward push. `main` is untouched. If `gh` is available, that's used in the finishing-a-development-branch step; if not, report the compare URL + manual command.

- [ ] **Step 4: Final report**

Produce a report covering: components created (10 files); page templates touched; motion added (with exact keyframes + reduced-motion guard); layout-density patterns added; logo redesign summary (chosen geometry + 16px reasoning); accessibility (focus-visible preserved, reduced-motion respected, AA contrast holds on paper-raised / sepia / accents); performance observations (zero new deps, zero Client Components, static route count unchanged, no hydration warnings); remaining visual gaps (image content is Phase 4B.2 manifest enrichment → 4B.3 commits); verification gate results.

---

## Self-Review

**1. Spec coverage:**
- §3 register, no-placeholder-wireframe rule → enforced in every task (motion durations capped, no scale/shadow drift, logo bar in Task 7, placard/card surface in Task 1, deliberate solid element in logo).
- §4 image-presentation components (`ArchivePlate`, `ImageGroup`, `ArchivalNote`, enhanced `ArchiveImage`) → Task 3.
- §5 richer presentations (separator variants, pullquote, timeline, archival-card layouts) → Task 1 CSS + Task 3 (`ArchivalCard`, `Separators`) + Task 4 (Pullquote + Timeline).
- §5 storytelling bands + homepage restructure → Task 6.
- §6 CSS-only motion system, prefers-reduced-motion gated, no scroll triggers → Task 1 CSS + applied via `fade-up`/`timeline-dot` classes in Tasks 5/6.
- §7 logo with the production-grade / 16px / mobile-navbar / favicon bar → Task 7, including the design-exercise step with 2–3 candidate sketches.
- §8 page-template updates → Task 5 (Frontispiece + ArticlePage + ArticleBody) + Task 6 (homepage) + Task 7 (Header).
- §9 batched delivery with gate after each → 8 tasks, gate per task.
- §2 hard constraints (zero deps / zero Client Components / no type/architecture change / static-first / publisher strings preserved by absence of edits to Footer) → enforced via the conventions block + Task 8 cross-cutting checks.
- §10 out of scope (image binaries / 4B.2 / 4B.3 / content authoring) → respected (no content modules touched; no image data added; no new ContentBlock kind).

**2. Placeholder scan:** No "TBD/TODO/handle edge cases/implement later/similar to Task N" patterns. Task 7's "Sketch 2–3 candidates" step is a deliberate creative-work contract (analogous to Phase 4A's per-page editorial briefs) with an explicit baseline-passing SVG provided so the implementer cannot get stuck; the bar (16px legibility, one solid element, etc.) is enforceable in acceptance.

**3. Type/consistency:**
- `ArchivePlate` prop shape (`{ image, preload?, sizes?, label?, raised?, className? }`) is used identically in `Frontispiece` and `ArticlePage` callers (Task 5).
- `groupAdjacentFigures` output type `ProcessedBlock` is consumed by `ArticleBody` (Task 5 Step 3); the synthetic `figure-group` kind is handled BEFORE the `ContentBlock` switch so the existing `never` exhaustiveness guard for the remaining `ContentBlock` cases is preserved.
- `StorytellingBand` props (`direction`, `tone`, etc.) used identically in `ThenNow` and homepage `Archival highlights` band (Task 6).
- `Wordmark` props used identically by Header and forward-compatible with future mobile-navbar use (`size="compact"`).
- `Logomark` `accessibleName` prop pattern follows the same SVG-a11y idiom established in `Motif`.

No issues requiring further change.

---

## Execution Handoff

Plan complete. Choose execution mode in the next message.
