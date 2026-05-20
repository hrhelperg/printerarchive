# Phase 5.2 — Longform Editorial Component Library (Design)

**Date:** 2026-05-20
**Branch:** `feat/foundation-architecture`
**Sub-phase of:** Phase 5 — Institutional Authority & Premium Editorial Expansion
**Predecessor:** Phase 5.1 — Institutional Trust Foundation (complete, green, pushed)
**Successors planned:** 5.3 (AI search + discovery), 5.4 (visual depth pass)

## 1. Goal

Establish the reusable longform editorial infrastructure needed for future 4 000 – 8 000 word institutional-grade essays — without adding bulk content this phase. Eight new `ContentBlock` discriminated-union kinds, two standalone components, three new optional `BaseEntry` fields, four new integrity-gate rules, and a unit-test pass that proves the integrity rules. Zero new dependencies, zero client components, zero new pages.

## 2. Hard constraints (carried from Phase 5.1 and earlier)

- Server Components only. No `"use client"`, no React hooks, no event handlers.
- Zero new runtime / font / animation / build dependencies.
- Static-first rendering. All build artefacts remain prerendered HTML.
- The existing `table`, `pullquote`, `figure`, `callout`, `keyTakeaways`, `timeline`, `steps`, `heading`, `paragraph`, `list` ContentBlock kinds are **not modified**. New variants are added; nothing existing is changed.
- The existing `SourceTransparency`, `RelatedLinks`, `Callout`, `Pullquote`, `Timeline`, `Figure`, `KeyTakeaways`, `ImageGroup`, `StepList`, `FaqList` components are **not modified** by this phase.
- Single `<h1>` per page preserved.
- Branch is `feat/foundation-architecture` only. Never merged to `main` in this sub-phase.
- One concern per commit. Two-stage review per task: spec-compliance, then code-quality.
- No new content entries.

## 3. Type-system additions

### 3.1 New `ContentBlock` discriminated-union variants

Append these 8 variants to `lib/content/types.ts` ContentBlock union, after the existing `pullquote` variant:

```ts
| { kind: "footnoteRef"; n: number }
| {
    kind: "sourceCallout";
    text: string;
    attribution: string;
    source?: { title: string; url?: string };
  }
| { kind: "editorialAside"; title?: string; text: string }
| { kind: "timelineBreak"; era: string; year?: string }
| {
    kind: "figurePair";
    left: ArchiveImage;
    right: ArchiveImage;
    caption?: string;
  }
| {
    kind: "quotePlate";
    text: string;
    attribution: string;
    citation?: string;
  }
| {
    kind: "archivalTable";
    caption: string;
    headers: string[];
    rows: string[][];
    sources?: string[];
    figureNumber?: string;
  }
| { kind: "researchInset"; title: string; items: string[] };
```

Field-shape notes:
- `footnoteRef.n` is a positive integer. The integrity gate enforces this and resolution.
- `sourceCallout.source.url?` is optional (offline-only citations are allowed; matches the `sources?[]` pattern from 5.1).
- `figurePair.left` and `figurePair.right` use the existing `ArchiveImage` interface verbatim. The build-time integrity gate already validates `ArchiveImage` shape via `imageIssues`; this extends to figurePair.
- `archivalTable.caption` is **required** (institutional convention: every archival table has a caption). `archivalTable.figureNumber` is the human-facing label (e.g., `"Table 3"`); presentation only — no auto-numbering in this phase.
- `archivalTable.sources` is a list of free-form citation strings (one per line). For URL-linked sources the editor uses the existing `sources?[]` BaseEntry field; archivalTable.sources is for inline-with-the-table citations.
- `researchInset.items` is a list of strings (one bullet each). No nested structure in v1.

### 3.2 New optional `BaseEntry` fields

Append these 3 fields to the `BaseEntry` interface in `lib/content/types.ts`, after the existing `sources?` field:

```ts
essayLead?: {
  kicker?: string;
  standfirst: string;
  byline?: string;
};
footnotes?: { n: number; text: string }[];
deepReading?: { ref: ContentRef; note?: string }[];
```

Notes:
- `essayLead.standfirst` is required when `essayLead` is present; the other two fields are optional.
- `essayLead.kicker` is the kicker label for the essay; if omitted, ArticlePage falls back to the section label as it does today.
- `footnotes` is keyed by `n` (number). The integrity gate enforces uniqueness, no orphans, no dangling refs.
- `deepReading[].ref` uses the existing `ContentRef` interface — same shape as `related` and `seeAlso`.

## 4. ArticleBody renderer changes

`components/content/ArticleBody.tsx` already uses a `switch (b.kind)` over the discriminated union. The 8 new variants each get a new `case` clause that renders the corresponding component. The new components are imported at the top of the file.

Imports to add:
```ts
import { FootnoteRef } from "./FootnoteRef";
import { SourceCallout } from "./SourceCallout";
import { EditorialAside } from "./EditorialAside";
import { TimelineBreak } from "./TimelineBreak";
import { FigurePair } from "./FigurePair";
import { QuotePlate } from "./QuotePlate";
import { ArchivalTable } from "./ArchivalTable";
import { ResearchInset } from "./ResearchInset";
```

Cases to add (in this order, after the existing `pullquote` case):

```tsx
case "footnoteRef":
  return <FootnoteRef key={i} n={b.n} />;
case "sourceCallout":
  return (
    <SourceCallout
      key={i}
      text={b.text}
      attribution={b.attribution}
      source={b.source}
    />
  );
case "editorialAside":
  return <EditorialAside key={i} title={b.title} text={b.text} />;
case "timelineBreak":
  return <TimelineBreak key={i} era={b.era} year={b.year} />;
case "figurePair":
  return (
    <FigurePair
      key={i}
      left={b.left}
      right={b.right}
      caption={b.caption}
    />
  );
case "quotePlate":
  return (
    <QuotePlate
      key={i}
      text={b.text}
      attribution={b.attribution}
      citation={b.citation}
    />
  );
case "archivalTable":
  return (
    <ArchivalTable
      key={i}
      caption={b.caption}
      headers={b.headers}
      rows={b.rows}
      sources={b.sources}
      figureNumber={b.figureNumber}
    />
  );
case "researchInset":
  return <ResearchInset key={i} title={b.title} items={b.items} />;
```

The existing `groupAdjacentFigures` helper is NOT extended to group `figurePair` blocks — figurePair is its own grouping unit; it shouldn't combine with adjacent figures or other figurePairs in this phase. The helper continues to operate only on `figure` blocks.

## 5. Component specifications

All components are Server Components. Each lives at `components/content/<Name>.tsx`. All follow the existing institutional visual register: serif body, sans chrome, mono catalog refs, `text-ink`/`text-ink-soft`/`text-ink-faint`, `border-rule`/`border-rule-strong`, `bg-paper`/`bg-paper-raised`/`bg-sepia`. No shadows, no gradients, no rounded chips, no blog-card chrome.

### 5.1 `FootnoteRef`

**File:** `components/content/FootnoteRef.tsx`

```tsx
interface FootnoteRefProps {
  n: number;
}

export function FootnoteRef({ n }: FootnoteRefProps) {
  return (
    <sup className="font-sans text-xs">
      <a
        href={`#footnote-${n}`}
        id={`footnote-ref-${n}`}
        aria-label={`Footnote ${n}`}
        className="no-underline hover:underline"
      >
        [{n}]
      </a>
    </sup>
  );
}
```

Renders inline within a paragraph. The id `footnote-ref-{n}` lets ArchiveFootnotes back-link to it.

### 5.2 `ArchiveFootnotes`

**File:** `components/content/ArchiveFootnotes.tsx`

```tsx
interface ArchiveFootnotesProps {
  footnotes: { n: number; text: string }[];
}

export function ArchiveFootnotes({ footnotes }: ArchiveFootnotesProps) {
  if (footnotes.length === 0) return null;
  return (
    <section
      aria-labelledby="footnotes"
      className="mt-12 border-t border-rule pt-8"
    >
      <h2
        id="footnotes"
        className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-soft"
      >
        Footnotes
      </h2>
      <ol className="mt-3 space-y-2 text-sm text-ink-soft">
        {footnotes.map((f) => (
          <li
            key={f.n}
            id={`footnote-${f.n}`}
            className="scroll-mt-24 text-pretty"
          >
            <span className="font-mono text-ink-faint">[{f.n}]</span>{" "}
            {f.text}{" "}
            <a
              href={`#footnote-ref-${f.n}`}
              className="font-sans text-xs text-ink-faint no-underline hover:underline"
              aria-label={`Return to reference ${f.n}`}
            >
              ↩
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
```

The `↩` back-link returns the reader to the body reference. Single `<h2>` per section, matching the SourceTransparency pattern (no new `<h1>`).

### 5.3 `SourceCallout`

**File:** `components/content/SourceCallout.tsx`

```tsx
interface SourceCalloutProps {
  text: string;
  attribution: string;
  source?: { title: string; url?: string };
}

export function SourceCallout({ text, attribution, source }: SourceCalloutProps) {
  return (
    <aside className="my-8 border-l-2 border-rule-strong bg-paper-raised px-6 py-5">
      <p className="font-serif text-lg italic leading-snug text-ink text-pretty">
        “{text}”
      </p>
      <p className="mt-3 font-sans text-sm text-ink-soft">
        — {attribution}
        {source ? (
          <span className="text-ink-faint">
            {" "}·{" "}
            {source.url ? (
              <a href={source.url} rel="noopener noreferrer">
                {source.title}
              </a>
            ) : (
              source.title
            )}
          </span>
        ) : null}
      </p>
    </aside>
  );
}
```

Quotation marks are typographic (`“ ”`). Italic body distinguishes the source's voice from the article's.

### 5.4 `EditorialAside`

**File:** `components/content/EditorialAside.tsx`

```tsx
interface EditorialAsideProps {
  title?: string;
  text: string;
}

export function EditorialAside({ title, text }: EditorialAsideProps) {
  return (
    <aside className="my-8 border-l border-rule pl-5 text-ink-soft">
      {title ? (
        <p className="kicker text-ink-faint">{title}</p>
      ) : (
        <p className="kicker text-ink-faint">Editor's note</p>
      )}
      <p className="mt-2 text-pretty">{text}</p>
    </aside>
  );
}
```

A quieter register than `Callout` (which has colored tones). Used for editorial framing rather than warnings/tips.

### 5.5 `TimelineBreak`

**File:** `components/content/TimelineBreak.tsx`

```tsx
interface TimelineBreakProps {
  era: string;
  year?: string;
}

export function TimelineBreak({ era, year }: TimelineBreakProps) {
  return (
    <div
      role="separator"
      aria-label={year ? `${era} (${year})` : era}
      className="my-12 flex items-center gap-4"
    >
      <span className="h-px flex-1 bg-rule" aria-hidden />
      <span className="font-sans text-xs uppercase tracking-wider text-ink-faint">
        {era}
        {year ? (
          <span className="ml-2 font-mono text-ink-faint">· {year}</span>
        ) : null}
      </span>
      <span className="h-px flex-1 bg-rule" aria-hidden />
    </div>
  );
}
```

Horizontal hairlines with the era label centered — institutional museum-publication style.

### 5.6 `FigurePair`

**File:** `components/content/FigurePair.tsx`

```tsx
import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";
import { ArchiveImage } from "./ArchiveImage";

interface FigurePairProps {
  left: ArchiveImageData;
  right: ArchiveImageData;
  caption?: string;
}

export function FigurePair({ left, right, caption }: FigurePairProps) {
  return (
    <figure className="my-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <ArchiveImage image={left} noMargin />
        <ArchiveImage image={right} noMargin />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center font-sans text-xs text-ink-faint text-pretty">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
```

A single `<figure>` wrapping two `ArchiveImage`s with a shared optional `<figcaption>`. Per-image captions inside ArchiveImage continue to render; the shared caption sits below both.

### 5.7 `QuotePlate`

**File:** `components/content/QuotePlate.tsx`

```tsx
interface QuotePlateProps {
  text: string;
  attribution: string;
  citation?: string;
}

export function QuotePlate({ text, attribution, citation }: QuotePlateProps) {
  return (
    <figure className="my-10 border-y border-rule py-8 text-center">
      <blockquote className="font-serif text-2xl leading-snug text-ink text-balance">
        “{text}”
      </blockquote>
      <figcaption className="mt-4 font-sans text-sm text-ink-soft">
        — {attribution}
        {citation ? (
          <span className="block text-xs text-ink-faint">{citation}</span>
        ) : null}
      </figcaption>
    </figure>
  );
}
```

Larger and centred — distinct from inline `Pullquote` which is a smaller in-flow emphasis. `QuotePlate` is for the essay's "the line the reader will remember" moment.

### 5.8 `ArchivalTable`

**File:** `components/content/ArchivalTable.tsx`

```tsx
interface ArchivalTableProps {
  caption: string;
  headers: string[];
  rows: string[][];
  sources?: string[];
  figureNumber?: string;
}

export function ArchivalTable({
  caption,
  headers,
  rows,
  sources,
  figureNumber,
}: ArchivalTableProps) {
  return (
    <figure className="my-8 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <caption className="mb-3 text-left font-sans text-xs text-ink-soft text-pretty">
          {figureNumber ? (
            <span className="mr-2 font-mono text-ink-faint">{figureNumber}</span>
          ) : null}
          {caption}
        </caption>
        <thead>
          <tr>
            {headers.map((h, j) => (
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
          {rows.map((r, j) => (
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
      {sources && sources.length > 0 ? (
        <p className="mt-2 font-sans text-xs text-ink-faint text-pretty">
          {sources.length === 1 ? "Source: " : "Sources: "}
          {sources.join("; ")}
        </p>
      ) : null}
    </figure>
  );
}
```

Renders `<caption>` (institutional table convention; semantic) with optional figure number in mono. Existing inline `table` block keeps its own simpler rendering; this is the longform variant.

### 5.9 `ResearchInset`

**File:** `components/content/ResearchInset.tsx`

```tsx
interface ResearchInsetProps {
  title: string;
  items: string[];
}

export function ResearchInset({ title, items }: ResearchInsetProps) {
  return (
    <aside className="my-8 border border-rule bg-paper-raised p-5">
      <p className="kicker">{title}</p>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink-soft text-pretty">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </aside>
  );
}
```

Small bordered side-note. Floats in the body wherever placed. No floats CSS — just inline; future flow-around can be added in 5.4.

### 5.10 `EssayLead` (standalone)

**File:** `components/content/EssayLead.tsx`

```tsx
interface EssayLeadProps {
  kicker?: string;
  title: string;
  standfirst: string;
  byline?: string;
}

export function EssayLead({ kicker, title, standfirst, byline }: EssayLeadProps) {
  return (
    <header>
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h1 className="mt-3 text-display-sm leading-tight text-balance">
        {title}
      </h1>
      <p className="mt-5 font-serif text-xl italic text-ink-soft text-pretty">
        {standfirst}
      </p>
      {byline ? (
        <p className="mt-4 font-sans text-sm text-ink-faint">{byline}</p>
      ) : null}
    </header>
  );
}
```

This component is called by ArticlePage when an entry has `essayLead?` set. It REPLACES the default header (kicker + H1 + summary + MetaBar). When `essayLead?` is absent, ArticlePage continues to render the existing header verbatim — no regression.

### 5.11 `DeepReadingLinks` (standalone)

**File:** `components/content/DeepReadingLinks.tsx`

```tsx
import Link from "next/link";
import type { ContentRef, ContentEntry } from "@/lib/content/types";
import { getEntry } from "@/lib/content/queries";

interface DeepReadingItem {
  ref: ContentRef;
  note?: string;
}

interface DeepReadingLinksProps {
  items: DeepReadingItem[];
}

export function DeepReadingLinks({ items }: DeepReadingLinksProps) {
  const resolved: { entry: ContentEntry; note?: string }[] = items
    .map((it) => {
      const entry = getEntry(it.ref.section, it.ref.slug);
      return entry ? { entry, note: it.note } : null;
    })
    .filter((x): x is { entry: ContentEntry; note?: string } => x !== null);

  if (resolved.length === 0) return null;

  return (
    <section
      aria-labelledby="deep-reading"
      className="mt-12 border-t border-rule pt-8"
    >
      <h2
        id="deep-reading"
        className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-soft"
      >
        Continue reading
      </h2>
      <ul className="mt-4 space-y-5">
        {resolved.map(({ entry, note }) => (
          <li key={`${entry.section}/${entry.slug}`}>
            <Link
              href={`/${entry.section}/${entry.slug}`}
              className="group block no-underline"
            >
              <span className="font-serif text-lg tracking-tight text-ink group-hover:text-accent">
                {entry.title}
              </span>
            </Link>
            {note ? (
              <p className="mt-1 text-sm text-ink-soft text-pretty">{note}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
```

Defensive resolution: if any `getEntry` returns undefined (shouldn't happen because the integrity gate validates refs), it's silently filtered. Returns `null` if zero entries resolved (matches the `SourceTransparency` empty-state pattern).

## 6. `ArticlePage` modifications

**File:** `components/pages/ArticlePage.tsx`

Three changes:

### 6.1 Add imports

```ts
import { EssayLead } from "@/components/content/EssayLead";
import { ArchiveFootnotes } from "@/components/content/ArchiveFootnotes";
import { DeepReadingLinks } from "@/components/content/DeepReadingLinks";
```

### 6.2 Conditional header rendering

Replace this block:

```tsx
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
```

With:

```tsx
{e.essayLead ? (
  <EssayLead
    kicker={e.essayLead.kicker ?? sectionLabel}
    title={e.title}
    standfirst={e.essayLead.standfirst}
    byline={e.essayLead.byline}
  />
) : (
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
)}
```

When `essayLead?` is set: EssayLead renders the header with standfirst and optional byline. MetaBar is **not** rendered in essay mode (essays carry the byline inside EssayLead instead). When `essayLead?` is absent: the existing header renders verbatim.

### 6.3 Render new bottom sections

Find the block:

```tsx
{e.faqs?.length ? <FaqList faqs={e.faqs} /> : null}
{e.sources?.length ? <SourceTransparency sources={e.sources} /> : null}
<RelatedLinks items={related} />
```

Replace with:

```tsx
{e.faqs?.length ? <FaqList faqs={e.faqs} /> : null}
{e.sources?.length ? <SourceTransparency sources={e.sources} /> : null}
{e.footnotes?.length ? <ArchiveFootnotes footnotes={e.footnotes} /> : null}
{e.deepReading?.length ? <DeepReadingLinks items={e.deepReading} /> : null}
<RelatedLinks items={related} />
```

Final bottom order: FAQ → SourceTransparency → ArchiveFootnotes → DeepReadingLinks → RelatedLinks. Each is conditional; when none are present, only RelatedLinks renders (current behaviour).

## 7. Integrity gate extensions

**File:** `lib/content/integrity.ts`

Extend `findContentIssues` with four new checks inside the existing `for (const e of entries)` loop, after the existing related-ref check:

### 7.1 Footnote validation

```ts
// Footnotes integrity: collect refs from body, footnotes from entry-level field.
const refs: number[] = [];
const fnIndex = new Map<number, number>(); // n -> count, for uniqueness check
if (Array.isArray(e.body)) {
  e.body.forEach((b) => {
    if (b && (b as { kind?: string }).kind === "footnoteRef") {
      const n = (b as { n?: unknown }).n;
      if (typeof n === "number" && Number.isInteger(n) && n > 0) refs.push(n);
      else issues.push(`${key}: footnoteRef n must be a positive integer`);
    }
  });
}
const fns = (e as { footnotes?: { n?: unknown; text?: unknown }[] }).footnotes;
if (Array.isArray(fns)) {
  fns.forEach((f) => {
    const n = f.n;
    if (typeof n !== "number" || !Number.isInteger(n) || n <= 0) {
      issues.push(`${key}: footnote n must be a positive integer`);
      return;
    }
    fnIndex.set(n, (fnIndex.get(n) ?? 0) + 1);
    if (typeof f.text !== "string" || f.text.trim().length === 0) {
      issues.push(`${key}: footnote ${n} text missing`);
    }
  });
  // Duplicates
  for (const [n, count] of fnIndex) {
    if (count > 1) issues.push(`${key}: duplicate footnote ${n} (x${count})`);
  }
}
// Dangling refs (ref without matching footnote)
for (const n of refs) {
  if (!fnIndex.has(n)) {
    issues.push(`${key}: footnoteRef ${n} has no matching footnote`);
  }
}
// Orphan footnotes (footnote without matching ref)
for (const [n] of fnIndex) {
  if (!refs.includes(n)) {
    issues.push(`${key}: orphan footnote ${n} (no footnoteRef in body)`);
  }
}
```

### 7.2 `figurePair` image validation

Inside the existing body iteration that handles `figure`, extend to also handle `figurePair`:

```ts
if (b && (b as { kind?: string }).kind === "figurePair") {
  const left = (b as { left?: Record<string, unknown> }).left ?? {};
  const right = (b as { right?: Record<string, unknown> }).right ?? {};
  issues.push(...imageIssues(key, `figurePair[${idx}].left`, left));
  issues.push(...imageIssues(key, `figurePair[${idx}].right`, right));
}
```

### 7.3 `archivalTable` caption requirement

Inside the body iteration:

```ts
if (b && (b as { kind?: string }).kind === "archivalTable") {
  const caption = (b as { caption?: unknown }).caption;
  if (typeof caption !== "string" || caption.trim().length === 0) {
    issues.push(`${key}: archivalTable[${idx}] caption missing or empty`);
  }
}
```

### 7.4 `deepReading` ref resolution

After the existing `related` ref-check loop:

```ts
const deep = (e as { deepReading?: { ref?: { section?: string; slug?: string } }[] })
  .deepReading;
if (Array.isArray(deep)) {
  for (const item of deep) {
    const r = item.ref;
    const refKey = `${r?.section}/${r?.slug}`;
    if (!r || !keys.has(refKey)) {
      issues.push(`${key}: deepReading ref does not resolve -> ${refKey}`);
    }
  }
}
```

All four checks use the same `issues.push(...)` pattern as the existing checks and feed the same `findContentIssues` return value, so the build-time integrity gate continues to fail on any new violation.

## 8. Unit-test extension

**File:** `scripts/integrity.test.mjs`

Existing suite has 14 tests under "integrity". Add these new test cases (each as a separate `test()` call within the same suite). Use the same JS-only test patterns the existing suite uses (no new test framework, no `describe` blocks beyond what's already used).

Test fixtures should be inline `ContentEntry`-shaped objects with the minimum required fields, exercising one new rule per test.

Cases to add (titles verbatim, each test asserts the issue messaging contains a recognizable substring):

1. `"footnoteRef without matching footnote -> issue"` — entry with `body: [{ kind: 'footnoteRef', n: 1 }]` and no `footnotes` field; assert `footnoteRef 1 has no matching footnote` is in issues.
2. `"orphan footnote (no footnoteRef in body) -> issue"` — entry with `footnotes: [{ n: 1, text: 'x' }]` and no `footnoteRef` in body; assert `orphan footnote 1` substring.
3. `"duplicate footnote n -> issue"` — entry with `footnotes: [{n:1,text:'a'},{n:1,text:'b'}]` and a matching ref; assert `duplicate footnote 1`.
4. `"footnoteRef with non-positive n -> issue"` — entry with `body: [{ kind: 'footnoteRef', n: 0 }]`; assert `footnoteRef n must be a positive integer`.
5. `"footnote with missing text -> issue"` — entry with `footnotes: [{ n: 1, text: '' }]` (and a matching ref); assert `footnote 1 text missing`.
6. `"figurePair with missing alt on left -> issue"` — entry with figurePair where left.alt is empty; assert `figurePair[0].left image alt missing`.
7. `"figurePair with missing license on right -> issue"` — entry with figurePair where right.credit.license is empty; assert `figurePair[0].right image credit.license missing`.
8. `"archivalTable with empty caption -> issue"` — entry with archivalTable where caption is `""`; assert `archivalTable[0] caption missing or empty`.
9. `"deepReading ref does not resolve -> issue"` — entry with `deepReading: [{ ref: { section: 'history', slug: 'does-not-exist' } }]`; assert `deepReading ref does not resolve`.
10. `"valid essay with all new blocks -> no issues"` — comprehensive fixture exercising one of every new block + valid footnotes + valid deepReading (pointing to a fixture self-reference); assert `issues.length === 0`.

Existing tests must continue to pass unchanged.

## 9. File inventory

| File | Action | Notes |
|---|---|---|
| `lib/content/types.ts` | MODIFY | Append 8 ContentBlock variants + 3 BaseEntry fields |
| `lib/content/integrity.ts` | MODIFY | Add 4 new validation rules inside findContentIssues |
| `components/content/ArticleBody.tsx` | MODIFY | Add 8 new switch cases + imports |
| `components/pages/ArticlePage.tsx` | MODIFY | EssayLead conditional + 2 new bottom sections |
| `components/content/FootnoteRef.tsx` | CREATE | Task 1 |
| `components/content/ArchiveFootnotes.tsx` | CREATE | Task 1 |
| `components/content/SourceCallout.tsx` | CREATE | Task 2 |
| `components/content/EditorialAside.tsx` | CREATE | Task 2 |
| `components/content/TimelineBreak.tsx` | CREATE | Task 2 |
| `components/content/QuotePlate.tsx` | CREATE | Task 2 |
| `components/content/FigurePair.tsx` | CREATE | Task 3 |
| `components/content/ArchivalTable.tsx` | CREATE | Task 3 |
| `components/content/ResearchInset.tsx` | CREATE | Task 3 |
| `components/content/EssayLead.tsx` | CREATE | Task 4 |
| `components/content/DeepReadingLinks.tsx` | CREATE | Task 4 |
| `scripts/integrity.test.mjs` | MODIFY | Add 10 new unit tests |

Net: 10 new components, 4 modified shared modules, 1 modified test file. **No new content entries. No new pages.**

## 10. Verification gate

```
npm run typecheck      ✓ clean
npm run lint           ✓ clean
npm run test:content   ✓ 72 entries, no issues (no new entries; existing entries unaffected)
npm run test:unit      ✓ 32/32 (22 existing + 10 new)
npm run build          ✓ 96 prerendered routes (unchanged; no new pages)
```

Additional manual checks:
- `git grep "use client"` returns only pre-existing legitimate matches (none from this phase).
- `grep -nE "^export function [A-Z]" components/content/{FootnoteRef,ArchiveFootnotes,SourceCallout,EditorialAside,TimelineBreak,QuotePlate,FigurePair,ArchivalTable,ResearchInset,EssayLead,DeepReadingLinks}.tsx` shows all 11 component exports.
- Render an existing entry (e.g., `/history/history-of-fax-machines`) and confirm SourceTransparency still renders (no regression).
- llms.txt still builds with the source counts from Phase 5.1.

## 11. Out of scope (explicit, deferred forward)

- **Sub-phase 5.3** — per-article BreadcrumbList JSON-LD enrichment, "Verified archival source" per-source-item badge, "Technology succeeded by" / "Era cohort" sidebars, image-provenance summary block, richer entity graph in llms.txt.
- **Sub-phase 5.4** — visual depth pass (subtle archival textures, figure indexing automation, catalog-reference styling, section registration markers, side annotation flow-around).
- **Future content phase** — authoring an actual longform essay using these components.
- **Auto-flow side-annotations** — ResearchInset and EditorialAside render inline in v1; flow-around (CSS `float`) is deferred to 5.4 visual depth.

## 12. Risks

- **Risk:** Adding 8 ContentBlock variants is the largest type-system change since the foundation phase. Mitigation: each variant has a `kind` discriminator; the existing `switch (b.kind)` in ArticleBody handles unknown kinds gracefully (no default `never` assertion, so build won't break if a new variant is added in the future without an immediate case). For *this* phase, every new variant has a case clause, verified by the build.
- **Risk:** The `essayLead` field replaces the default header — entries that author `essayLead?` lose the MetaBar (author/editor/updated visible). Mitigation: when an editor opts into `essayLead?`, they are making an editorial decision to suppress MetaBar; the entry's `published` and `updated` ISO dates are still in the JSON-LD schema (so SEO is preserved). The MetaBar's institutional purpose is byline, which `essayLead.byline` carries.
- **Risk:** `groupAdjacentFigures` doesn't group `figurePair` blocks. Mitigation: documented; figurePair is its own grouping unit. If an essay alternates `figure` and `figurePair` adjacently, the existing grouping helper handles the `figure`s and treats each `figurePair` as a standalone block. Acceptable for v1.
- **Risk:** The integrity gate's footnote checks introduce two new failure modes (dangling ref + orphan footnote). Mitigation: both are explicit, named, with the offending `n` in the error message. An editor authoring footnotes can fix them by inspection.

## 13. Done criteria

- All 10 new components exist as Server Components under `components/content/`.
- The 8 new ContentBlock variants are present in `lib/content/types.ts` and rendered by `ArticleBody`.
- The 3 new BaseEntry fields are present in `lib/content/types.ts`.
- `lib/content/integrity.ts` enforces footnote-ref resolution, footnote uniqueness, footnote-orphan detection, figurePair image metadata, archivalTable caption presence, and deepReading ref resolution.
- `scripts/integrity.test.mjs` has 10 new tests covering the new rules + a valid-comprehensive-essay case; test:unit runs 32/32 green.
- `npm run build` still emits 96 prerendered routes; existing entries render unchanged.
- `git grep "use client"` shows no new client-component boundaries.
- Branch is `feat/foundation-architecture` only; no merge to `main`.
- Final report delivered.
