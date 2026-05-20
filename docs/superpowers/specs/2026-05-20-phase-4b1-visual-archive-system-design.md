# PrinterArchive.net — Phase 4B.1: Visual Archive System (Infrastructure)

- **Date:** 2026-05-20
- **Status:** Approved (design); pending spec review before implementation plan
- **Repo:** `/Users/petrohrys/printerarchive` → `github.com/hrhelperg/printerarchive`
- **Branch:** `feat/foundation-architecture` (never push to `main`)
- **Builds on:** `2026-05-18-printerarchive-foundation-design.md`, `2026-05-19-printerarchive-editorial-redesign-design.md`, `2026-05-19-phase-4a-historical-authority-design.md`. Where silent, those govern.
- **Phase:** Phase 4B is decomposed. **This spec covers Phase 4B.1 only:** visual-system infrastructure — image-presentation components, layout-density patterns, CSS-only motion, logo redesign, page-template updates. **Out of 4B.1:** the concrete candidate-image manifest enrichment (Phase 4B.2) and approved-image commit batches (Phase 4B.3); homepage *content* expansion beyond template restructure; any content authoring.

---

## 1. Purpose & Positioning

The platform now has strong editorial architecture, historical authority content, premium typography, SSR/static SEO, and deep entity relationships — yet visually still reads as too text-heavy. Phase 4B.1 ships the **visual-archive infrastructure** that makes the site immediately richer (logo + layout density + image-presentation components + restrained motion) without requiring any image to exist. When 4B.3 commits approved public-domain images into the slots this phase wires, pages light up incrementally without further structural change.

The register is **digital museum / documentary knowledge platform / internet-era printing institution** — not modern SaaS, not startup UI, not flashy motion. Visual richness comes from *layout, identity, framing, and discipline*, not from JS-driven effects.

## 2. Hard Constraints (non-negotiable)

- **Zero new runtime/font dependencies.** No npm install of any package. `next/image`, `next/font` only.
- **Zero new Client Components.** Site remains 100% Server Components — no `"use client"`, no hooks, no `IntersectionObserver`, no scroll-coupled motion. All motion is CSS-only.
- **No image binaries committed in 4B.1.** Pages render graceful-default. Image slots accept image data from 4B.3.
- **No new `ContentBlock` kinds.** No edits to `lib/content/types.ts`, `lib/content/integrity.ts`, or `lib/content/kicker.ts`. Image grouping (`<ImageGroup>` layout) is delivered via CSS treatment of consecutive existing `figure` blocks — no type-system change.
- **`prefers-reduced-motion: reduce`** disables every animation introduced. Every keyframe lives inside `@media (prefers-reduced-motion: no-preference)`.
- **Calm editorial spacing preserved on long-form prose.** Layout density via image-led editorial sections does NOT apply to article body, which keeps the 66–72ch measure and existing vertical rhythm. No compression of long-form reading.
- **Static-first, fully prerendered.** `next build` succeeds with the same static-route count as Phase 4A (91+) + zero hydration warnings.
- WCAG-AA contrast preserved; focus-visible intact; semantic HTML; single `<h1>` per page; integrity gate unchanged.
- Publisher strings unchanged: **HELPERG LLC**, **info@helperg.com**.
- Branch `feat/foundation-architecture`; logical commit batches; push; never merge `main`.

## 3. Visual Direction (enforceable register)

Documentary atmosphere via:
- **Paper-feel surfaces** — restrained `paper-raised` mats, hairline `rule-strong` frames, *quiet* shadows (no SaaS drop shadows; the most that's permitted is a 1–2px low-opacity shadow on `<ArchivePlate>` to suggest a physical card; defaults to none).
- **Museum-style typography** — captions in `font-sans text-xs text-ink-faint` with source · license on a second line; "Note from the archive"-style labels for archival asides.
- **Restrained motion** — short opacity/translate-2px transitions; load-fade-ups under 300ms; no scale, no parallax, no rotation, no easing curves more exotic than `ease-out`.
- **Layered editorial composition** — asymmetrical 1.6fr/1fr split bands alternating direction; image-led storytelling not grids-of-equal-cards.
- **No "placeholder-wireframe" feeling.** Hairline geometry alone is not sufficient; every visual element must read as a deliberate, finished archival artifact — not a sketch or a frame waiting for content. This applies especially to the logo (§7) but also to plates, bands, and separators: composition, proportion, and one distinctive structural detail per element prevent the "wireframe" trap. The graceful-default state IS the finished state, not a missing-content state.

Explicitly forbidden (per brief): startup SaaS dashboard aesthetics, flashy animation, hydration-heavy motion, JS animation frameworks, cartoon printers in the logo, gradient/neon logos, generic AI-look logos, glossy marketing renders.

## 4. Image-Presentation System (Server Components)

All graceful-default: render correctly with zero images.

- **`components/content/ArchivePlate.tsx`** — wraps an `<ArchiveImage>` in a museum placard frame:
  - hairline `border border-rule-strong` outer frame
  - `bg-paper-raised` inner mat
  - optional small "ARCHIVAL" or numeric kicker label above the image
  - full caption block under the image: caption (when present), then `source · license` (with optional linked `credit.url`), then optional date-conceptual
  - subtle 1–2px low-opacity shadow optional via prop (default: none)
  - props: `{ image: ArchiveImageData; preload?: boolean; sizes?: string; label?: string; className?: string; raised?: boolean }`
- **`components/content/ImageGroup.tsx`** — semantic wrapper for 2–4 adjacent `figure` items rendered as an editorial collage via CSS Grid (`md:grid-cols-2` for 2; `md:grid-cols-2 lg:grid-cols-3` for 3; configurable via `columns` prop). Does **not** introduce a new `ContentBlock` kind; consumed by page templates and (optionally) by article authors who wrap consecutive `Figure` renders inline.
- **`components/content/ArchivalNote.tsx`** — paper-feel note variant complementing `<Callout>`:
  - `bg-paper-raised` with hairline `border-rule-strong` frame
  - `kicker`-styled label (default: "Note from the archive"; overridable)
  - tighter body type than `<Callout>`
  - one tone only (`note`); no warning/tip variants (use `<Callout>` for those)
- **Enhanced `components/content/ArchiveImage.tsx`** — additive enhancements:
  - caption renders on its own line; `source · license` line below in `text-ink-faint`
  - linked `credit.url` (when present) gets `rel="noopener noreferrer nofollow"` (already done)
  - subtle `transition-opacity duration-200` on the figure for hover lift
  - all CLS-safety / `preload` / placeholder behavior unchanged

## 5. Layout Density & Visual Storytelling

- **`components/home/StorytellingBand.tsx`** — full-bleed image-led band:
  - asymmetrical 1.6fr/1fr or 1fr/1.4fr grid (`direction` prop alternates which side carries the image)
  - text side: `kicker` + display-`sm` `h2` + lede + 1–2 body paragraphs + an in-band link
  - image side: `<ArchivePlate>` when image present, otherwise `<Motif>` panel in the same bounded `max-w-md aspect-[4/3]` frame (same footprint, no CLS when image arrives)
  - graceful-default: NO reserved empty gap; the motif fallback is a fully composed plate
- **Homepage restructure** (`app/page.tsx`) — preserves order from the redesign (hero → then/now → category grid → era rail → featured bands → closing) and:
  - elevates **Then / Now** from the current diptych to a `<StorytellingBand>` pair (image-ready)
  - elevates **Era Rail** stops to read as a denser editorial chronology (still sepia, still graceful-default)
  - inserts an **"Archival highlights"** typographic frontispiece band above the closing band (image-ready; no new `<h1>`)
- **Hub frontispieces** (`components/content/Frontispiece.tsx`) — adopt `<ArchivePlate>` for the image cell when present (motif fallback unchanged when absent).
- **Article hero** (`components/pages/ArticlePage.tsx`) — `<ArchivePlate>` replaces direct `<ArchiveImage>` usage in the masthead; preserves the single page `<h1>`.
- **Article body grouping** — `components/content/ArticleBody.tsx` gains CSS treatment for consecutive `figure` blocks: 2 adjacent figures render in a 2-column grid on `md+`, 3 in a 3-column grid on `lg+`. Implementation via CSS sibling selectors + a small wrapper helper *or* by checking adjacency at render time within the existing block map (no new `ContentBlock` kind).
- **Density tokens** — new CSS spacing tokens for storytelling bands (`band-y`, `band-x` paddings) and editorial-grid `gap-px` / `gap-3` choices, documented inline in `globals.css`.
- **Calm long-form prose untouched.** `Container width="prose"` keeps the 66–72ch body measure and existing vertical rhythm. Density applies to bands, hubs, and homepage — not to article-body prose.

**Richer presentation patterns (in addition to the bands above):**
- **Richer visual separators.** The current `.rule-sep` hairline is austere. Add two complementary separator variants alongside it (without removing it): `.rule-sep-numeric` (centered small numeral or ordinal in `font-serif text-rule-strong` between two hairlines, used between major homepage bands) and `.rule-sep-mark` (centered tiny `<Motif>` glyph between two hairlines, used between article sections where a chapter break is meaningful). Both are CSS components; both respect `prefers-reduced-motion`.
- **Richer pullquote styling.** Existing `<Pullquote>` is a left-bordered serif quote. Enhance with a paper-feel surround variant: hairline frame on top + bottom only (not full box), oversized opening quote glyph in `text-rule-strong` (decorative, `aria-hidden`), serif body in `text-display-sm` weight, attribution in `kicker` small-caps with a leading em-dash. Preserve the semantic `<blockquote>`/`<figcaption>` structure; only enrich the visual treatment. The `pullquote` `ContentBlock` kind is unchanged.
- **Richer timeline styling.** Elevated `<Timeline>` from Phase-3 gains era-label affordance (`period` rendered larger and tighter, in `font-serif`, with a hairline tick mark), staggered dot fade-in on load (already in §6), and an optional `tone="sepia"` prop for History-cluster usage. Same `events:{period,text}[]` data shape; no `ContentBlock` change.
- **Archival-card layouts.** A documented set of editorial-card variants composed from existing tokens: `archival-card` base (paper-raised + hairline + subtle hover), `archival-card-lead` (larger, used for lead entries in `<SectionList>` and band callouts), `archival-card-image` (image-led, uses `<ArchivePlate>` inline). These are CSS utility classes + a small `<ArchivalCard>` component for the variants that need composition; existing `<SectionList>` and band components adopt them where applicable.

## 6. Motion System (CSS-only)

Every animation gated by:
```css
@media (prefers-reduced-motion: no-preference) { /* keyframes here */ }
```
The default state for reduced-motion users is **no motion** — no fades, no transforms, no transitions other than the existing color/border focus styles.

- **On-load fade-up** — `opacity 0 → 1` + `translateY(8px → 0)` over ~280ms `ease-out`. Applied to: homepage bands, hub frontispieces, article masthead, key article sections (h2 + first paragraph). Staggered via `animation-delay` (50ms per major band, cap at 250ms total cascade).
- **Hover transitions** — `transition-colors duration-200` on cards/links/titles; figure `transition-opacity duration-200` for a subtle brightness lift on hover. No scale, no shadow change, no translate (or at most 1–2px translate on featured-band cards).
- **Separator load** — `rule-sep` lines animate `scale-x: 0 → 1` over 400ms with `transform-origin: left` on initial page load.
- **Timeline rail dots** — staggered fade-in on initial load (50ms apart) for the elevated `<Timeline>` component.
- **Image arrival** — native `next/image` blur-to-real opacity transition (already in place; verify it's smooth across pages).
- **No scroll-triggered animation.** No `animation-timeline: view()` usage; no `IntersectionObserver`; no Client Components.

## 7. Logo Redesign — Direction A (Refined Motif Evolution)

Identity work executed deliberately: the geometric DNA evolved into a **premium, modern, recognizable archival-institution mark** — explicitly not a tighter wireframe.

### Bar (non-negotiable)
- Reads as **premium and finished**, not as a placeholder/sketch/wireframe.
- Recognizable as a deliberate institutional mark — distinctive silhouette at a glance.
- Works in **every deployment context**: header at desktop and mobile navbar sizes, `app/icon.svg` favicon (browser tabs, bookmarks), monochrome SVG anywhere, social-preview thumbnails (rendered into OG images downstream by other tooling — the SVG asset itself must scale into a 1200×630 social preview without losing recognizability).
- **16px and 32px legibility test** — the compact mark MUST remain identifiable as PrinterArchive at 16×16 and 32×32 device pixels (the actual favicon sizes). Hairline strokes that thin out at small sizes fail this test.

### Concept
Same fundamental vocabulary as `<Motif>` (hairline geometry, rectilinear, no curves except optical adjustments, no literal printer outline) but composed as a deliberate institutional mark with three concrete elevation moves:
1. **One distinctive structural detail** beyond hairlines — e.g. a single solid ink-block element (a small filled square or rectangle integrated into the composition) that gives the mark identity at any size. Pure hairlines alone read as wireframe; a deliberate solid element grounds the composition. Exact shape determined at implementation, drafted by an opus-grade subagent against the bar above (the implementation plan will require the subagent to propose 2–3 concrete SVG sketches and pick the one that best satisfies the 16px legibility test).
2. **Optical balance over geometric precision.** The current `<Motif>` is mathematically symmetric. The new Logomark uses optical-balance proportions (slight stroke compensation; centering by visual weight, not bounding box). `viewBox="0 0 24 24"`; strokes scale up at favicon sizes via the SVG `vector-effect="non-scaling-stroke"` or a separate `app/icon.svg` artwork tuned for 32px.
3. **Refined stroke precision and spacing.** Single stroke weight throughout (no mix); whole-pixel coordinates at 24×24 (so 32×32 and 48×48 renders stay crisp); explicit padding inside the bounding viewBox so the mark reads as composed-and-framed, not flush-edged.

### Typography pairing (Wordmark)
- `font-serif` (Source Serif 4) at refined display weight for "PrinterArchive"
- Tightened letter-spacing (~`-0.01em`) calibrated against the Logomark's stroke weight
- Thin vertical hairline divider (`border-l border-rule-strong`) between mark and wordmark, sized to match cap-height
- Optional small-caps tagline microline beneath on `sm+` screens (current Header pattern preserved)

### Deliverables
- `components/identity/Logomark.tsx` — primary SVG symbol; `viewBox="0 0 24 24"`; accepts `className` (sizes via Tailwind `h-N w-N`); `aria-hidden="true"` by default with an `accessibleName?` prop that, when set, replaces `aria-hidden` with `role="img"` + `<title>{accessibleName}</title>` (rare — used only when the mark IS the link's accessible name; Header keeps the existing `aria-label` pattern).
- `components/identity/Wordmark.tsx` — composes Logomark + serif wordmark + hairline divider; props `{ size?: "default"|"compact"; showTagline?: boolean }` so it adapts to header, mobile navbar, and other identity contexts.
- `app/icon.svg` — SVG favicon based on Logomark, tuned for crisp rendering at 16×16 and 32×32 (may use slightly heavier strokes than the 24-viewBox primary — a separate, deliberately-drawn small-size variant if the primary doesn't pass the 16px test as-is). Next 16 file convention. Keep `app/favicon.ico` for legacy.
- (Implementation-time deliverable, recorded in the plan) — 2–3 concrete SVG sketch proposals from the implementing subagent, choosing one that passes the 16px legibility test.

### Constraints
No literal printer/fax illustration. No gradients, no colors (single-color `currentColor` SVG). No cartoon, no AI-look, no startup gradients. The compact-mark form must remain recognizable at 16px — this disqualifies overly-detailed designs.

### Header integration
`components/layout/Header.tsx` swaps the current `<Motif>` for the new `<Wordmark>` composition; preserves hover-only nav, zero-Client-Component discipline, and the existing tagline-microline-on-`sm+` behavior. Mobile-navbar usage uses `<Wordmark size="compact" showTagline={false}>`.

### `<Motif>` remains
The existing `<Motif>` component stays as the decorative archival glyph used inside `<Frontispiece>`, `<StorytellingBand>`'s image fallback, and the new `.rule-sep-mark` separator (§5). Do NOT delete it. The new Logomark is a sibling, dedicated to identity contexts (Header, favicon, social previews).

## 8. Page-Template Updates (concrete file list)

- **Modify** `components/layout/Header.tsx` — replace `<Motif>` with `<Wordmark>`/`<Logomark>` composition; preserve nav.
- **Modify** `components/content/Frontispiece.tsx` — image branch uses `<ArchivePlate>` (motif fallback unchanged).
- **Modify** `components/pages/ArticlePage.tsx` — hero uses `<ArchivePlate>` instead of raw `<ArchiveImage>`.
- **Modify** `components/content/ArchiveImage.tsx` — richer caption layout + subtle hover.
- **Modify** `components/content/ArticleBody.tsx` — CSS or render-time treatment for consecutive `figure` blocks into `<ImageGroup>`.
- **Modify** `app/page.tsx` — compose new storytelling bands; insert "Archival highlights" band.
- **Modify** `app/globals.css` — new keyframes (`fade-up`, `separator-grow`, `dot-stagger`); `prefers-reduced-motion` gate; new density-spacing tokens; `<ArchivePlate>` placard styles; subtle paper-frame utility.
- **Create** `components/content/ArchivePlate.tsx`, `components/content/ImageGroup.tsx`, `components/content/ArchivalNote.tsx`, `components/home/StorytellingBand.tsx`.
- **Create** `components/identity/Logomark.tsx`, `components/identity/Wordmark.tsx`.
- **Create** `app/icon.svg`.

## 9. Verification & Delivery

- **Logical commit batches.** (1) Motion system foundations + design tokens in `globals.css`; (2) Image-presentation components (`ArchivePlate`, `ImageGroup`, `ArchivalNote`, `ArchiveImage` enhancements); (3) Storytelling-band component + homepage restructure; (4) Page-template integration (Frontispiece, ArticlePage, ArticleBody); (5) Logo redesign (Logomark, Wordmark, Header swap, `app/icon.svg`); (6) Final QA + report.
- **Gate after each batch:** `npm run typecheck && npm run lint && npm run test:content && npm run test:unit && npm run build`. All green. Content unchanged at 72 entries; `test:unit` unchanged at 14/14. Static route count unchanged (no new routes). No hydration warnings.
- **Final report:** components created, page templates touched, motion added, logo deliverables, accessibility checks (focus-visible, reduced-motion respected, AA contrast), performance observations (zero new deps, zero Client Components, static-first preserved), remaining visual gaps (image content per 4B.2/4B.3).

## 10. Out of Scope (4B.1)

- Image binaries; concrete candidate-URL/license/attribution work (→ Phase 4B.2 manifest enrichment).
- Approved-image commit batches (→ Phase 4B.3, after 4B.2 candidates are user-approved).
- Content authoring (history/fax/brand pages — completed in 4A; 4B.1 only touches templates, not content modules).
- Architecture changes: no new `ContentBlock` kinds; no edits to `types.ts`/`integrity.ts`/`kicker.ts`; no new routes.
- New runtime/font/JS dependencies.
- Any Client Components or scroll-coupled motion.
- Marketing/SaaS aesthetics: drop shadows beyond 1–2px low-opacity, gradients, neon, animation libraries.

## 11. Risks

- **Motion taste drift** — over-zealous animation easily reads as SaaS. Mitigated by §3 register caps (≤280ms, opacity/translate-2px only, no scale/parallax/shadow change) and `prefers-reduced-motion` default-off discipline.
- **Layout-density vs calm prose** — risk of compressing article reading. Mitigated by §5 explicit exception: `Container width="prose"` and article body untouched; density applies only to bands/hubs/homepage.
- **Logo whiplash** — Direction A explicitly evolves the approved Motif to avoid this; the old `<Motif>` is retained as a decorative element in non-identity contexts.
- **CSS grouping of adjacent `figure` blocks** — relying on CSS sibling selectors or adjacency detection adds template-level complexity. Mitigation: prefer a small `groupAdjacentFigures(blocks)` helper inside `ArticleBody`'s render that emits an `<ImageGroup>` wrapper around runs of 2+ consecutive `figure` blocks — pure render-time logic, no type change, no client behavior. This is the implementation default in 4B.1; alternative inline CSS fallback documented for the plan if the helper proves awkward.
- **Image-arrival quality** — when 4B.3 commits images, blur-to-real transitions and band layouts must hold. Mitigated by graceful-default discipline + `<ArchivePlate>`/`<StorytellingBand>` shared `max-w-md` footprints (no CLS when an image replaces a motif fallback).
