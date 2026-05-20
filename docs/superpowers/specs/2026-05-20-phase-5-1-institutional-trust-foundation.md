# Phase 5.1 — Institutional Trust Foundation (Design)

**Date:** 2026-05-20
**Branch:** `feat/foundation-architecture`
**Sub-phase of:** Phase 5 — Institutional Authority & Premium Editorial Expansion
**Predecessors:** Phase 4A (historical authority), Phase 4B (visual archive system + archival imagery), Phase 4C (homepage storytelling)
**Successors planned:** 5.2 (longform component library), 5.3 (AI search + discovery), 5.4 (visual depth pass)

## 1. Goal

Establish the institutional trust surfaces of the archive — editorial policy, source policy, archive methodology, changelog — and promote the existing per-article `SourcesList` to a richer `SourceTransparency` block. Seed verifiable bibliographies on five representative history pages so the new transparency component has real data to render from day one.

This is the **trust foundation** sub-phase. It does not add bulk historical content. It does not introduce new dependencies, client components, or runtime JavaScript. It does not pretend the archive is a museum or invent institutional credentials. It states, plainly and conservatively, the editorial practice the archive already follows.

## 2. Hard constraints (carried from Phase 4)

- Server Components only. No `"use client"`, no hooks, no effects, no client bundles.
- Zero new runtime / font / animation / build dependencies.
- Static-first rendering. All new pages prerender to static HTML; no `force-dynamic`.
- Build-time content-integrity gate still passes after the source backfill (every image: alt, dimensions, source, license).
- Branch is `feat/foundation-architecture` only. Never merged to `main` in this sub-phase.
- One concern per commit. Two-stage review per task: spec-compliance, then editorial/design-quality.
- No fake institution language. No fake historians. No fake museum claims. No fabricated bibliographies. Every cited source must be a real Wikipedia article, a real published book, or a real institution.

## 3. New file inventory

| File | Action | Concern |
|---|---|---|
| `lib/changelog.ts` | CREATE | Typed data module of dated changelog entries |
| `app/changelog/page.tsx` | CREATE | Renders `lib/changelog.ts` |
| `app/editorial-policy/page.tsx` | CREATE | Editorial policy page |
| `app/source-policy/page.tsx` | CREATE | Source policy page |
| `app/archive-methodology/page.tsx` | CREATE | Archive methodology page |
| `app/about/page.tsx` | MODIFY | Upgrade with cross-links + Last reviewed |
| `components/content/SourceTransparency.tsx` | CREATE | Replaces `SourcesList`; collapsible, richer |
| `components/content/SourcesList.tsx` | DELETE | Superseded by `SourceTransparency` |
| `components/pages/ArticlePage.tsx` | MODIFY | Swap `SourcesList` → `SourceTransparency` |
| `components/layout/Footer.tsx` | MODIFY | Add links to 4 new institutional pages |
| `app/llms.txt/route.ts` | MODIFY | Surface institutional pages + per-entry source counts |
| `content/history/history-of-printers.ts` | MODIFY | Add `sources?` |
| `content/history/history-of-fax-machines.ts` | MODIFY | Add `sources?` |
| `content/history/transition-from-impact-to-laser-printing.ts` | MODIFY | Add `sources?` |
| `content/history/history-of-desktop-publishing.ts` | MODIFY | Add `sources?` |
| `content/history/evolution-of-laser-printing.ts` | MODIFY | Add `sources?` |

Net: 4 new pages, 1 new lib module, 1 new component, 1 component renamed away, 1 component replaced; 7 files modified (5 entries + 3 cross-cutting).

## 4. Component specification: `SourceTransparency`

**File:** `components/content/SourceTransparency.tsx` (Server Component)

**Replaces:** the existing `SourcesList`. Single import site (`components/pages/ArticlePage.tsx`).

**Props:**

```ts
interface SourceTransparencyProps {
  sources: { title: string; url?: string; publisher?: string }[];
}
```

**Markup contract:**

- Outer wrapper: `<section aria-labelledby="source-transparency">` with the institutional separator styling (`mt-12 border-t border-rule pt-8`).
- Heading **outside** `<details>` so it remains a discoverable section landmark even when collapsed; `id="source-transparency"` for `aria-labelledby`.
- Heading reads `Source transparency` (uppercase kicker style preserved from current SourcesList) followed by a small inline count in parentheses: `(N sources)`.
- Heading is `<h2>` to match the existing FAQ section pattern (FaqList renders `<h2>` for "Frequently asked questions"). Keeps article-page heading hierarchy consistent.
- Below the heading, one short prose line stating the archive's source policy in one sentence, with an inline link to `/source-policy`. This is the **always-visible** transparency line, not collapsed:
  > "These references support claims made in this entry. The archive uses verified institutional and public-domain sources only; see [Source policy](/source-policy)."
- Then a `<details>`:
  - `<summary>` reads: `Sources consulted (N)`. The summary is the only interactive element.
  - Inside: `<ul>` of source entries, same shape as today (title, url-linked when present, publisher in faint text).
  - Each `<li>` carries a small `aria-label` of the source's text so screen readers do not depend on visual context.
- No "Verified archival source" badge in this sub-phase. The brief calls for that badge "where appropriate" — the operational meaning of "appropriate" is not yet defined. A `<dfn>`-quality badge needs a source-side flag (e.g., `sources.some((s) => s.kind === 'institutional')`) which we don't yet have. **Defer the badge to sub-phase 5.3** when source-type taxonomy can be designed properly. Document this deferral in the component file's leading comment so it is not silently forgotten.

**Empty-state behaviour:** when called with `sources.length === 0`, the component returns `null` (mirroring current `SourcesList`).

**No JS required:** native `<details>` toggling. The summary collapsed state is the browser default. Cached state per-document is the browser's responsibility.

**Crawlability:** the closed `<details>` content remains in the HTML DOM and is indexed by all major crawlers including Google, Bing, Perplexity, ChatGPT browsing, and Claude browsing. This is well-documented browser behaviour — `<details>` is purely a presentation toggle, not a load gate.

## 5. Source backfill data — full bibliographies (verbatim)

These bibliographies are conservative: every entry is a real, verifiable source. Where I cannot verify a specific deep-link URL, the `url?` field is left undefined and only `publisher` is given. **Subagents must copy these arrays verbatim — no improvisation, no added entries, no URL guessing.**

### 5.1 `content/history/history-of-printers.ts`

Add `sources` field with these three entries:

```ts
sources: [
  {
    title: "History of printing",
    url: "https://en.wikipedia.org/wiki/History_of_printing",
    publisher: "Wikipedia",
  },
  {
    title: "Printer (computing)",
    url: "https://en.wikipedia.org/wiki/Printer_(computing)",
    publisher: "Wikipedia",
  },
  {
    title: "Computer History Museum collections",
    publisher: "Computer History Museum",
  },
],
```

### 5.2 `content/history/history-of-fax-machines.ts`

```ts
sources: [
  {
    title: "Faxed: The Rise and Fall of the Fax Machine",
    publisher: "Jonathan Coopersmith, Johns Hopkins University Press, 2015",
  },
  {
    title: "Fax",
    url: "https://en.wikipedia.org/wiki/Fax",
    publisher: "Wikipedia",
  },
  {
    title: "Telegraphy",
    url: "https://en.wikipedia.org/wiki/Telegraphy",
    publisher: "Wikipedia",
  },
],
```

### 5.3 `content/history/transition-from-impact-to-laser-printing.ts`

```ts
sources: [
  {
    title: "Laser printing",
    url: "https://en.wikipedia.org/wiki/Laser_printing",
    publisher: "Wikipedia",
  },
  {
    title: "Dot matrix printing",
    url: "https://en.wikipedia.org/wiki/Dot_matrix_printing",
    publisher: "Wikipedia",
  },
  {
    title: "IBM 3800 laser printer collection",
    publisher: "Computer History Museum",
  },
],
```

### 5.4 `content/history/history-of-desktop-publishing.ts`

```ts
sources: [
  {
    title: "Desktop publishing",
    url: "https://en.wikipedia.org/wiki/Desktop_publishing",
    publisher: "Wikipedia",
  },
  {
    title: "PostScript",
    url: "https://en.wikipedia.org/wiki/PostScript",
    publisher: "Wikipedia",
  },
  {
    title: "Aldus PageMaker",
    url: "https://en.wikipedia.org/wiki/Aldus_PageMaker",
    publisher: "Wikipedia",
  },
],
```

### 5.5 `content/history/evolution-of-laser-printing.ts`

```ts
sources: [
  {
    title: "Laser printing",
    url: "https://en.wikipedia.org/wiki/Laser_printing",
    publisher: "Wikipedia",
  },
  {
    title: "HP LaserJet",
    url: "https://en.wikipedia.org/wiki/HP_LaserJet",
    publisher: "Wikipedia",
  },
  {
    title: "Xerography",
    url: "https://en.wikipedia.org/wiki/Xerography",
    publisher: "Wikipedia",
  },
],
```

Each backfill is a single block placed **after `keywords:` and before `cluster:`** in the entry, preserving alphabetical-by-key order with existing entries (`sources` between `keywords` and `cluster` keeps the BaseEntry field grouping intact). Also bump `updated:` to `2026-05-20`.

## 6. Page specifications — copy verbatim

All 4 new pages share these mechanics:

- File location: `app/<slug>/page.tsx`.
- `export const metadata: Metadata = buildMetadata({ title, description, path: "/<slug>" });` — exact same pattern as the existing `app/about/page.tsx`.
- Layout: `<Container width="prose" className="py-12">` with a single `<h1>` and `<Prose>` wrapping the body. (Same shape as existing `/about`.)
- Each ends with a small `<p class="mt-12 text-xs text-ink-faint">Last reviewed: 2026-05-20</p>` line before the closing tag — gives the page a real institutional timestamp.
- No images. These are policy documents.
- No `<JsonLd>` per page; the root `WebSite` schema covers the site.
- No external links except to public archival institutions and other archive pages.

### 6.1 `/editorial-policy` — full copy

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Prose } from "@/components/content/Prose";

export const metadata: Metadata = buildMetadata({
  title: "Editorial policy",
  path: "/editorial-policy",
  description:
    "How PrinterArchive writes, sources, and corrects its entries — the conservative editorial practice the archive follows.",
});

export default function EditorialPolicyPage() {
  return (
    <Container width="prose" className="py-12">
      <h1 className="font-serif text-4xl tracking-tight">
        Editorial policy
      </h1>
      <Prose>
        <p>
          PrinterArchive is written to a conservative editorial standard. Its
          aim is not to be exhaustive, novel, or surprising; its aim is to be
          correct, sourceable, and durable. Where that goal forces a slower
          publication pace or a quieter claim, that trade is accepted.
        </p>

        <h2>Conservatism principle</h2>
        <p>
          The archive prefers to describe a mechanism precisely rather than
          assert a figure, date, or attribution it cannot stand behind. Where
          a claim depends on a specific source, that source is cited. Where
          the underlying historiography is contested or uneven, the entry is
          organised around the operational character of the technology — what
          it did, what it cost, what it changed — rather than around a single
          datable sequence. The recurring &quot;A note on dates&quot; callout
          used throughout the history cluster is the visible artefact of this
          rule.
        </p>

        <h2>Sourcing standards</h2>
        <p>
          Entries draw on institutional archives, peer-reviewed material,
          primary sources where available, and well-established encyclopedic
          references. The full allowed-source set, and the equally important
          forbidden-source set, is documented on the{" "}
          <a href="/source-policy">source policy page</a>. Each entry that
          carries external claims surfaces its references in the{" "}
          <em>Source transparency</em> block at the foot of the article, where
          the reader can inspect them without leaving the page.
        </p>

        <h2>Attribution methodology</h2>
        <p>
          Every image in the archive carries an explicit source, a license
          string, and a link to the descriptor page on the institution that
          holds the original. The build pipeline enforces this with a
          content-integrity gate that fails the build if any image lacks
          alt-text, dimensions, source, or license. Attribution is recorded
          verbatim as the source institution provides it; the archive does
          not paraphrase or shorten institutional credit lines.
        </p>

        <h2>Correction policy</h2>
        <p>
          When an entry is found to contain a factual error, an unsupported
          claim, or a mis-attributed image, the correction is made directly
          to the entry and the entry&apos;s <code>updated</code> date is
          advanced. Significant corrections — those that change the meaning
          of a claim rather than fix a typo — are also noted in the{" "}
          <a href="/changelog">changelog</a>. Editorial questions and
          corrections can be sent to{" "}
          <a href="mailto:info@helperg.com">info@helperg.com</a>.
        </p>

        <h2>No AI-fabricated history</h2>
        <p>
          The archive does not publish AI-generated historical imagery, fake
          retro recreations, or invented bibliographic citations.
          Machine-assistance is used in drafting and copy-editing, but every
          factual claim and every cited source is reviewed and verified by a
          human editor before publication. Entries that cannot be sourced
          honestly are not published.
        </p>

        <h2>Editorial cadence</h2>
        <p>
          Updates are made deliberately rather than continuously. Entries are
          revisited when new institutional sources become available, when
          reader corrections require it, or when adjacent entries surface a
          contradiction. The archive prefers fewer, more durable entries to a
          rapidly-expanding catalogue of unstable ones.
        </p>
      </Prose>
      <p className="mt-12 font-sans text-xs text-ink-faint">
        Last reviewed: 2026-05-20
      </p>
    </Container>
  );
}
```

### 6.2 `/source-policy` — full copy

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Prose } from "@/components/content/Prose";

export const metadata: Metadata = buildMetadata({
  title: "Source policy",
  path: "/source-policy",
  description:
    "Which sources PrinterArchive cites, which sources it refuses, and what evidence each image and claim must carry.",
});

export default function SourcePolicyPage() {
  return (
    <Container width="prose" className="py-12">
      <h1 className="font-serif text-4xl tracking-tight">
        Source policy
      </h1>
      <Prose>
        <p>
          The archive&apos;s usefulness rests on the quality of what it cites.
          This page records, plainly, which sources the archive draws from and
          which it refuses, so that any reader can audit how a given claim was
          arrived at.
        </p>

        <h2>Allowed sources for text claims</h2>
        <p>
          Text claims draw from: institutional archives (the Computer History
          Museum, the U.S. National Archives and Records Administration, the
          Library of Congress, the Smithsonian, the Internet Archive, museum
          and university collections); peer-reviewed historical literature
          (the <em>IEEE Annals of the History of Computing</em>, university
          press monographs on computing and printing history); primary sources
          where they are available (patents, manufacturer datasheets,
          contemporaneous trade press); and well-established encyclopedic
          references (Wikipedia, where its citations themselves resolve to
          one of the source categories above).
        </p>

        <h2>Allowed sources for images</h2>
        <p>
          Images draw exclusively from sources whose licensing posture is
          unambiguous: Wikimedia Commons (with the file&apos;s license string
          recorded verbatim), NARA, the Library of Congress &quot;Free to Use
          and Reuse&quot; sets, Smithsonian Open Access, the Internet Archive,
          and the Computer History Museum&apos;s public collections.
          Public-domain works (U.S. Federal Government works, works whose
          copyright has lapsed, works dedicated to the public domain) and
          compatible Creative Commons licenses (CC0, CC BY, CC BY-SA) are
          accepted; license-incompatible material is refused even when it
          would be visually preferable.
        </p>

        <h2>Forbidden sources</h2>
        <p>
          The archive does not source from stock-photo platforms (Alamy,
          Getty, Adobe Stock, iStock, Dreamstime, Shutterstock), content
          aggregators or social platforms (Pinterest, image-hosting
          aggregators without verifiable provenance), AI-generated imagery,
          fake retro recreations, or unverifiable personal blogs. The
          principle is not aesthetic: it is that the licensing chain on these
          sources is either non-existent or non-auditable, which makes them
          unsuitable for an archive that asks readers to trust its
          provenance claims.
        </p>

        <h2>License discipline</h2>
        <p>
          Every image carries an explicit license string recorded verbatim
          from the source institution&apos;s descriptor page. CC-BY-SA images
          are flagged as such; public-domain works are flagged as such; works
          released under a non-CC institutional rights statement (such as
          Flickr Commons&apos;s &quot;No known copyright restrictions&quot;)
          are recorded with that exact phrasing rather than translated into
          a different license. The archive does not attempt to relicense or
          paraphrase license terms.
        </p>

        <h2>Per-image metadata requirements</h2>
        <p>
          Every committed image must carry: descriptive alt-text, exact pixel
          dimensions, a source attribution line, a license string, and where
          available a URL pointing to the source institution&apos;s descriptor
          page (not the upload URL). The repository&apos;s build pipeline
          enforces this with a content-integrity gate; an image that fails
          any of these checks fails the build, and the entry cannot ship
          until the metadata is repaired.
        </p>
      </Prose>
      <p className="mt-12 font-sans text-xs text-ink-faint">
        Last reviewed: 2026-05-20
      </p>
    </Container>
  );
}
```

### 6.3 `/archive-methodology` — full copy

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Prose } from "@/components/content/Prose";

export const metadata: Metadata = buildMetadata({
  title: "Archive methodology",
  path: "/archive-methodology",
  description:
    "How PrinterArchive organises entries, treats contested historical claims, and structures cross-references between technologies and eras.",
});

export default function ArchiveMethodologyPage() {
  return (
    <Container width="prose" className="py-12">
      <h1 className="font-serif text-4xl tracking-tight">
        Archive methodology
      </h1>
      <Prose>
        <p>
          This page describes how the archive is organised — the choices
          behind the structure, the metadata that connects entries to one
          another, and the rules the archive applies when historical evidence
          is incomplete.
        </p>

        <h2>Why we organise around operational character, not dates</h2>
        <p>
          For most of the technologies the archive covers, the underlying
          historiography is uneven. Adoption happened at different times
          across industries, regions, and organisational sizes; vendor claims,
          contemporaneous press, and later retrospectives often disagree on
          specific dates. Rather than asserting a single canonical sequence,
          the archive describes the operational character of an arrangement —
          what it did, what it cost, what it changed about the day around it
          — and treats specific years and product names as supporting detail
          rather than as the spine of the narrative.
        </p>

        <h2>How contested claims are handled</h2>
        <p>
          When a claim cannot be settled from the available sources, the
          archive states the constraint explicitly. The recurring{" "}
          <em>A note on dates</em> callout, used throughout the history
          cluster, is the visible artefact of this rule: it signals that the
          surrounding section describes a pattern rather than a single
          datable event. The archive prefers to under-state a claim it cannot
          fully support than to over-state one it can.
        </p>

        <h2>The metadata system</h2>
        <p>
          Each entry carries three structural fields that organise it within
          the archive:
        </p>
        <ul>
          <li>
            <strong>era</strong> — a short label placing the entry within a
            longer technological arc (for example, <em>the impact-printing
            era and its lasting niches</em>). The era field anchors the entry
            on chronological rails like the homepage&apos;s five-era
            timeline.
          </li>
          <li>
            <strong>cluster</strong> — a topical grouping (for example,{" "}
            <em>impact-and-early-digital</em>, <em>fax-history</em>) used to
            associate entries that share a thematic concern even when their
            eras differ.
          </li>
          <li>
            <strong>related</strong> — a hand-curated list of cross-references
            to other entries. Related links are not automatically inferred
            from keywords; an editor chooses each one for a specific
            cross-reading reason.
          </li>
        </ul>

        <h2>Why archival imagery matters</h2>
        <p>
          An entry about technology that shaped office work for two decades
          loses force when it is illustrated by generic modern photography.
          The archive uses period-authentic institutional imagery — bound
          continuous-form printout, an HP LaserJet I as it was first sold, a
          NORAD command-room scene from the period the entry actually
          describes — because the visual register has to match the claim
          register. A documentary photograph from the National Archives sits
          alongside a documentary sentence; a stock image, even a flattering
          one, does not.
        </p>

        <h2>The integrity gate</h2>
        <p>
          The repository&apos;s build pipeline runs a content-integrity
          script that walks every entry and every image and fails the build
          if any image lacks alt-text, dimensions, source, or license, or if
          any entry is missing a required field. This is the mechanical
          enforcement behind the editorial commitments described on the{" "}
          <a href="/editorial-policy">editorial policy</a> and{" "}
          <a href="/source-policy">source policy</a> pages: a regression in
          provenance becomes a build failure rather than something a reader
          discovers months later.
        </p>
      </Prose>
      <p className="mt-12 font-sans text-xs text-ink-faint">
        Last reviewed: 2026-05-20
      </p>
    </Container>
  );
}
```

### 6.4 `/changelog` — page and data module

**Data module** — `lib/changelog.ts`:

```ts
export type ChangelogKind =
  | "redesign"
  | "feature"
  | "content"
  | "editorial"
  | "image-batch"
  | "infrastructure";

export interface ChangelogEntry {
  /** ISO date YYYY-MM-DD when the change shipped. */
  date: string;
  kind: ChangelogKind;
  title: string;
  summary: string;
}

/** Newest first. New entries are appended at the top. */
export const CHANGELOG: ChangelogEntry[] = [
  {
    date: "2026-05-20",
    kind: "editorial",
    title: "Phase 5.1 — Institutional trust foundation",
    summary:
      "Editorial policy, source policy, archive methodology, and changelog pages established. SourcesList promoted to SourceTransparency. First five history entries carry verified bibliographies.",
  },
  {
    date: "2026-05-20",
    kind: "redesign",
    title: "Phase 4C — Homepage storytelling and launch polish",
    summary:
      "Hero gained the bound-printout archival image and a primary 'Enter the archive' CTA; new FeaturedStories editorial block surfaces seven hand-picked archival narratives; FeaturedBands reduced from five to three; CategoryGrid re-framed as the comprehensive index beneath the editorial tier.",
  },
  {
    date: "2026-05-20",
    kind: "image-batch",
    title: "Phase 4B.3 Batch B — contextual archival imagery integrated",
    summary:
      "Four approved Wikimedia Commons images wired into three history pages: NORAD Computer Center 1984 (early-network-printing-systems), Hughes Aircraft mainframe scene c. 1979–80 (printing-in-the-1980s), 1940 Census Hollerith keypunch operator and IBM 1401 restoration lab (early-computer-printing).",
  },
  {
    date: "2026-05-19",
    kind: "image-batch",
    title: "Phase 4B.3 Batch A — first device-led archival imagery integrated",
    summary:
      "Six approved device-led images committed and wired: bound continuous-form printout (hero band), tractor-feed paper, original HP LaserJet I, IBM 3800 (laser-printer history), Facit E560 (dot-matrix-printers-explained), and Panasonic KX-F90 (history-of-business-faxing).",
  },
  {
    date: "2026-05-19",
    kind: "infrastructure",
    title: "Phase 4B.1 — visual archive system shipped",
    summary:
      "Introduced ArchivePlate, ArchiveImage, ImageGroup, the build-time content-integrity gate, CSS-only motion gated on prefers-reduced-motion, and production-grade Logomark/Wordmark identity. Established the image-presentation contract used by every later batch.",
  },
  {
    date: "2026-05-18",
    kind: "content",
    title: "Phase 4A — historical authority expansion",
    summary:
      "Twenty new history-cluster entries published and five brand pages deepened. All written to the conservative editorial standard now codified in the editorial-policy page.",
  },
];
```

**Page** — `app/changelog/page.tsx`:

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { CHANGELOG, type ChangelogKind } from "@/lib/changelog";

export const metadata: Metadata = buildMetadata({
  title: "Changelog",
  path: "/changelog",
  description:
    "A dated record of how PrinterArchive has changed — when major editorial, content, image, and infrastructure work shipped.",
});

const KIND_LABEL: Record<ChangelogKind, string> = {
  redesign: "Redesign",
  feature: "Feature",
  content: "Content",
  editorial: "Editorial",
  "image-batch": "Image batch",
  infrastructure: "Infrastructure",
};

export default function ChangelogPage() {
  return (
    <Container width="prose" className="py-12">
      <h1 className="font-serif text-4xl tracking-tight">Changelog</h1>
      <p className="mt-4 font-serif text-lg text-ink-soft text-pretty">
        A dated record of how the archive has changed. Entries are added
        deliberately as phases ship, newest first. Significant editorial
        corrections that change the meaning of a claim are noted here in
        addition to being applied to the relevant entry.
      </p>
      <ol className="mt-10 space-y-8">
        {CHANGELOG.map((c) => (
          <li key={`${c.date}-${c.title}`} className="border-t border-rule pt-6">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <time className="font-mono text-sm text-ink-faint" dateTime={c.date}>
                {c.date}
              </time>
              <span className="kicker">{KIND_LABEL[c.kind]}</span>
            </div>
            <h2 className="mt-2 font-serif text-xl tracking-tight">{c.title}</h2>
            <p className="mt-2 text-ink-soft text-pretty">{c.summary}</p>
          </li>
        ))}
      </ol>
      <p className="mt-12 font-sans text-xs text-ink-faint">
        Last reviewed: 2026-05-20
      </p>
    </Container>
  );
}
```

### 6.5 `/about` upgrade — replace contents

Replace the current `app/about/page.tsx` body with this. Preserves the existing top section (intro, editorial approach, scope, publisher) **verbatim**, and adds an institutional-cross-link section beneath them. No copy regressions on existing material.

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Prose } from "@/components/content/Prose";

export const metadata: Metadata = buildMetadata({
  title: "About",
  path: "/about",
  description:
    "PrinterArchive.net is an educational reference documenting printing, fax, scanning, and document technology.",
});

export default function AboutPage() {
  return (
    <Container width="prose" className="py-12">
      <h1 className="font-serif text-4xl tracking-tight">
        About PrinterArchive
      </h1>
      <Prose>
        <p>
          {site.name} is an independent educational reference. Its purpose is
          to document how printing, fax, scanning, mobile printing, and
          document workflows actually work — clearly, accurately, and without
          marketing language.
        </p>
        <h2>Editorial approach</h2>
        <p>
          Entries are written to be conservative and source-ready. We prefer
          to explain a mechanism precisely rather than state figures or dates
          we cannot stand behind. Where a claim depends on a specific source,
          that source is cited; where it cannot be verified, it is not
          asserted.
        </p>
        <h2>Scope</h2>
        <p>
          The archive covers printing history, technology guides,
          troubleshooting, brands, document workflows, tools and formats, a
          glossary, mobile printing, and fax technology. It is reference
          material, not product reviews or recommendations.
        </p>
        <h2>Publisher</h2>
        <p>
          {site.name} is published by {site.publisher.name}. Editorial
          questions and corrections can be sent to{" "}
          <a href={`mailto:${site.publisher.email}`}>
            {site.publisher.email}
          </a>
          .
        </p>

        <h2>Editorial standards</h2>
        <p>
          The full statement of the archive&apos;s editorial practice —
          conservatism principle, sourcing standards, attribution methodology,
          correction policy, and the no-AI-fabricated-history rule — is on
          the <Link href="/editorial-policy">editorial policy page</Link>.
        </p>

        <h2>Source transparency</h2>
        <p>
          The complete list of allowed and forbidden source categories, the
          archive&apos;s license discipline, and the per-image metadata
          requirements that the build pipeline enforces is on the{" "}
          <Link href="/source-policy">source policy page</Link>. Every entry
          that carries external claims surfaces its references in the{" "}
          <em>Source transparency</em> block at the foot of the article.
        </p>

        <h2>Image provenance</h2>
        <p>
          Every image carries an explicit source institution, license string,
          and link to the source institution&apos;s descriptor page. The
          allowed image-source set (Wikimedia Commons, NARA, Library of
          Congress, Smithsonian, Computer History Museum, and equivalent
          institutional archives) and the refused set (stock-photo platforms,
          content aggregators, AI-generated imagery) are documented on the{" "}
          <Link href="/source-policy">source policy page</Link>.
        </p>

        <h2>Correction policy</h2>
        <p>
          When an entry is found to contain a factual error or an unsupported
          claim, the correction is made directly to the entry and the
          entry&apos;s <code>updated</code> date is advanced. Significant
          corrections are also noted in the{" "}
          <Link href="/changelog">changelog</Link>. Send corrections to{" "}
          <a href={`mailto:${site.publisher.email}`}>
            {site.publisher.email}
          </a>
          .
        </p>

        <h2>Methodology</h2>
        <p>
          How the archive organises entries — eras, clusters, related links
          — and how it treats contested historical claims is described on
          the <Link href="/archive-methodology">archive methodology page</Link>.
        </p>

        <h2>Changes</h2>
        <p>
          A dated record of how the archive has changed since the foundation
          phase shipped is maintained on the{" "}
          <Link href="/changelog">changelog page</Link>.
        </p>
      </Prose>
      <p className="mt-12 font-sans text-xs text-ink-faint">
        Last reviewed: 2026-05-20
      </p>
    </Container>
  );
}
```

## 7. Footer wiring

**File:** `components/layout/Footer.tsx`

In the bottom utility bar (the `<div className="mt-10 flex flex-wrap items-center …">` block that currently lists About / Contact / RSS / llms.txt / Sitemap), insert these four `<Link>`s **between About and Contact**, in this order: `Editorial policy`, `Source policy`, `Methodology`, `Changelog`.

Resulting visible order in the utility bar:
`About · Editorial policy · Source policy · Methodology · Changelog · Contact · RSS · llms.txt · Sitemap`

Each new link uses the same class as the existing `<Link>` siblings (`no-underline hover:text-accent`) — no new styles introduced. They are `<Link>` (Next.js client-side transitions), not `<a>`, because they are internal.

## 8. `llms.txt` enrichment

**File:** `app/llms.txt/route.ts`

Two additions, no regressions to existing structure:

1. **Top of file, after the existing `Publisher:` line**, add an institutional-pages block:
   ```
   ## About this archive
   - Editorial policy: <url>/editorial-policy
   - Source policy: <url>/source-policy
   - Methodology: <url>/archive-methodology
   - Changelog: <url>/changelog
   - About: <url>/about
   ```
2. **Per-entry**, when `e.sources?.length` is present, append `[N sources]` to the entry line. Example:
   ```
   - The History of Business Faxing: <url>/fax/history-of-business-faxing [3 sources]
   ```

Implementation: small modification to the existing `for (const e of getSection(s.id))` loop in `app/llms.txt/route.ts`. No new exports or files.

## 9. `ArticlePage` swap

**File:** `components/pages/ArticlePage.tsx`

Replace this line:

```tsx
import { SourcesList } from "@/components/content/SourcesList";
```

With:

```tsx
import { SourceTransparency } from "@/components/content/SourceTransparency";
```

And this line:

```tsx
{e.sources?.length ? <SourcesList sources={e.sources} /> : null}
```

With:

```tsx
{e.sources?.length ? <SourceTransparency sources={e.sources} /> : null}
```

Delete `components/content/SourcesList.tsx` after the swap is verified by a successful build.

## 10. Verification gate

```
npm run typecheck      ✓ clean
npm run lint           ✓ clean
npm run test:content   ✓ 72 entries, no issues
npm run test:unit      ✓ 22/22 (no new tests needed in 5.1; component is presentation only)
npm run build          ✓ 96 prerendered routes (92 existing + 4 new institutional pages)
```

**Per-route HTML inspection** (controller during Task 6):

- `/editorial-policy`, `/source-policy`, `/archive-methodology`, `/changelog`, `/about`: each has exactly one `<h1>`, no `localhost`, no `noindex`.
- One of the 5 backfilled history pages (e.g., `/history/history-of-fax-machines`): the rendered HTML contains `<section aria-labelledby="source-transparency">`, the "(3 sources)" count, the always-visible policy line linking to `/source-policy`, and the collapsed `<details><summary>Sources consulted (3)</summary>` block with all three `<li>` entries still present in the DOM (verifying that `<details>` doesn't gate from crawlers).
- `llms.txt` body contains the new "## About this archive" block and at least one entry line ending in `[3 sources]`.
- Sitemap contains 5 new URLs (4 institutional pages + the existing /about modification, which doesn't add a URL but updates lastmod).

## 11. Out of scope (explicit)

- New `ContentBlock` kinds for footnotes, asides, pullquote variants — those belong to sub-phase 5.2 (longform component library).
- "Verified archival source" visible badge — needs a source-type taxonomy; deferred to sub-phase 5.3.
- Per-article `BreadcrumbList` JSON-LD enrichment beyond what already ships — deferred to 5.3.
- "Technology succeeded by" sidebar — deferred to 5.3.
- Image-provenance summary block (the per-article aggregation of each image's source/license, separate from text sources) — deferred to 5.3.
- Visual textures / catalog references / figure indexing — deferred to 5.4.
- Backfilling sources on the remaining 67 entries — content authoring work for a later phase.

## 12. Risks

- **Risk:** The `<details>` summary text "Sources consulted (N)" may visually compete with the always-visible policy line above it. **Mitigation:** the summary is rendered in `font-sans text-sm` (matching the existing utility bar style); the policy line is `font-serif`. They are typographically distinct registers.
- **Risk:** New institutional pages add 4 footer links to an already-busy utility bar. **Mitigation:** the bar wraps on narrow viewports (`flex-wrap` is already in place); on desktop, 9 link items + copyright fits within the wide container. Verified visually at desktop and at ~375px during Task 6.
- **Risk:** Renaming `SourcesList` to `SourceTransparency` and deleting the old file is a breaking change for any out-of-tree consumer. **Mitigation:** `SourcesList` has exactly one importer (`components/pages/ArticlePage.tsx`); no out-of-tree consumers exist. A `git grep SourcesList` after the swap should return zero matches.
- **Risk:** The Wikipedia URLs cited in the source backfill may move or be redirected. **Mitigation:** Wikipedia URLs are stable identifiers (article titles + URL-encoded slugs) and have been for the project's lifetime; redirects are handled by Wikipedia itself. If a URL goes 404, the editorial-policy correction process applies.
- **Risk:** Source bibliographies might be perceived as too sparse (only 3 sources per page). **Mitigation:** sparse-but-honest is the correct posture for the archive's conservatism principle. Future sub-phases can expand bibliographies entry-by-entry as deeper research is performed.

## 13. Done criteria

- All 4 new pages render in `npm run build`.
- All 5 backfilled history pages render the `SourceTransparency` block with the policy line and a collapsed `<details>` containing the three source `<li>`s.
- `git grep SourcesList` returns nothing.
- All five QA commands pass.
- Branch is still `feat/foundation-architecture` only. No merge to `main`.
- Final report delivered.
