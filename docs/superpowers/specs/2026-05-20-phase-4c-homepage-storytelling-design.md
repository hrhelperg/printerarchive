# Phase 4C — Homepage Storytelling & Launch Polish (Design)

**Date:** 2026-05-20
**Branch:** `feat/foundation-architecture`
**Status:** Design approved (Approach A + Mixed lead-thumbnail variant)
**Scope:** Homepage refresh only — no new pages, no new content modules, no new image binaries, no new dependencies, no Client Components.

---

## 1. Goal

Make the homepage and top-level discovery experience feel **launch-ready, memorable, visually rich, and clearly positioned as a premium archive of printing technology** — without expanding content, dependencies, or runtime complexity. The page should read less like a section index and more like a guided archival front page.

## 2. Architectural posture (unchanged invariants)

The following constraints from prior phases are inviolable for Phase 4C:

- Server Components only (no `"use client"`, no hooks, no effects).
- Zero new runtime/font dependencies. Only existing primitives — `next/image`, `next/link`, `Container`, `ArchivePlate`, `ArchiveImage`, `ArchivalCard`, `Motif`, `Wordmark`, `Logomark` — are used.
- Static-first rendering: all changes are SSG-compatible; no dynamic imports of client surfaces.
- Single `<h1>` per page (the hero's H1); all subsequent section headings use `<h2>`.
- Semantic landmarks preserved: `<section>` wrappers, `<nav aria-label="Primary">` in header, `<main id="main">` in layout.
- All imagery must already be **committed** to `public/images/` and already carry full `ArchiveImage` metadata. **No new image downloads.**
- No edits to existing content modules in `content/`.
- Branch discipline: commits go to `feat/foundation-architecture` only; never merged to `main` in this phase.

## 3. Final homepage composition (top → bottom)

```
1. HomeHero            (image-led, primary H1)
2. ThenNow             (StorytellingBand × 2 — Then/Now anchor)
3. EraRail             (5 eras — moved UP, lands the historical-evolution flow)
4. FeaturedStories     (NEW — curated editorial block, 7 hand-picked stories)
5. FeaturedBand        section="history"
6. FeaturedBand        section="fax"     (NEW on homepage)
7. FeaturedBand        section="brands"
8. CategoryGrid        (re-headed "Continue browsing the whole archive")
9. ClosingBand         ("About the archive")
```

**Removed from homepage:** the three FeaturedBands `guides`, `troubleshooting`, `mobile-printing`, and the bottom `StorytellingBand` "Archival highlights". Those sections remain reachable via header nav, CategoryGrid, and cross-links within content pages.

**Net effect:** 5 generic FeaturedBands → 3 selective section anchors + 1 curated editorial tier above them; the bound-printout image gets promoted to the hero rather than living at the bottom of the page.

## 4. Component changes

### 4.1 `HomeHero` — accept an optional `ArchiveImage`

**File:** [components/home/HomeHero.tsx](components/home/HomeHero.tsx)

**Current shape:** text + `Motif` ornament in a 1.6fr/1fr grid (motif is hidden below `lg`).

**New shape:** text + optional `ArchivePlate` (graceful fallback to `Motif` when no image).

- Add `image?: ArchiveImage` prop. The component is invoked from `app/page.tsx` with the bound-printout image.
- When `image` is provided, the right column renders `<ArchivePlate image={image} sizes="(max-width: 1024px) 100vw, 520px" noMargin className="w-full max-w-lg" />` instead of the `Motif`.
- The right column becomes visible at `lg` only when there's an image; on smaller breakpoints the image renders below the text (vertical stack), keeping above-the-fold text-led on mobile. (Mobile-first discipline.)
- Layout grid changes from `lg:grid-cols-[1.6fr_1fr]` to `lg:grid-cols-[1.4fr_1fr]` to give the image enough room without dominating.
- Hero gets a single, primary CTA: a textual "Enter the archive →" link below the lede, pointing to `/history`. The CTA is a plain `<Link>` with hover underline — no button chrome. This satisfies the "discovery into History" priority from the brief.
- The `<h1>` text is unchanged: "The internet archive of printing technology."
- The `<section>`'s top/bottom padding tightens slightly (`py-14 lg:py-20` → keep `py-16 lg:py-20`; minor only) so the eye reaches the ThenNow band sooner. *Actual padding values to be finalized at implementation time, not in spec.*

### 4.2 `FeaturedStories` — NEW component

**File:** `components/home/FeaturedStories.tsx` (CREATE)

**Purpose:** Curated, editorial-grade block surfacing hand-picked archival narratives. This is the section that distinguishes the homepage from a section-index.

**Server Component, zero state.**

**Shape:**

- One `lead` card (full width on mobile; 5/8 columns at `lg`) with a small approved-image thumbnail on the right, kicker, H3-as-`<h3>` (NOT `<h2>` — keeps the section's `<h2>` singular), one-line synopsis, and "Read the story →" affordance.
- Six secondary text-only cards in a `lg:grid-cols-3` arrangement (`sm:grid-cols-2`).
- Section wrapper: `<section>` with kicker "Featured archival stories" and H2 "Hand-picked stories from the archive."
- The entries are referenced by `{ section, slug, leadImageSrc?, leadImageAlt?, leadImageWidth?, leadImageHeight? }` — only the lead card needs the image metadata; the rest of the cards pull their kicker, title, and synopsis from the resolved content module via `getEntry(section, slug)`.

**Curated story set (7 entries, in display order):**

| Slot | section | slug | Image |
|---|---|---|---|
| Lead | `history` | `dot-matrix-printers-explained` | `/images/history/dot-matrix-printers-explained.jpg` (Facit E560 — has its own committed hero image; no other page loses its image) |
| 1 | `history` | `transition-from-impact-to-laser-printing` | — |
| 2 | `history` | `history-of-desktop-publishing` | — |
| 3 | `history` | `early-network-printing-systems` | — |
| 4 | `history` | `office-printing-before-wifi` | — |
| 5 | `history` | `early-computer-printing` | — |
| 6 | `fax` | `history-of-business-faxing` | — |

**Why dot-matrix as lead:** it owns its committed hero image (`history/dot-matrix-printers-explained.jpg`); reusing that thumbnail in the lead card does not cause an image to appear on two pages with conflicting roles. All other featured stories carry their archival imagery as inline figures within their own pages — pulling them to a homepage card would dilute the in-page narrative.

**Card surface:** `<ArchivalCard variant="lead">` for the lead, `<ArchivalCard variant="default">` for the rest. No additional new styles required.

**Accessibility:** Each card is a single anchor (`href` passed to ArchivalCard); kicker is decorative text, not a link.

### 4.3 `app/page.tsx` — orchestration

**File:** [app/page.tsx](app/page.tsx)

- Import `FeaturedStories`.
- Pass an `image` prop to `HomeHero` referencing the existing committed `ARCHIVAL_HIGHLIGHTS_IMAGE` (rename to `HERO_IMAGE` for clarity, with caption tweaked to fit the hero role — caption is still archival, naming the bound printout and the era).
- Remove the trailing `StorytellingBand kicker="Archival highlights"` block — that visual moment is now at the top.
- Remove `FeaturedBand section="guides"`, `section="troubleshooting"`, `section="mobile-printing"`.
- Add `FeaturedBand section="fax"`.
- Insert `<FeaturedStories />` between `<EraRail />` and the FeaturedBands.
- Move `<EraRail />` to position 3 (after ThenNow).
- Re-head `<CategoryGrid />` to read "Continue browsing the whole archive" — implemented as a prop on `CategoryGrid` (`title?: string`, optional, default unchanged) so existing usages elsewhere remain stable.

### 4.4 `CategoryGrid` — optional `title` + `kicker` props

**File:** [components/home/CategoryGrid.tsx](components/home/CategoryGrid.tsx)

- Add `kicker?: string` and `title?: string` props (both optional; defaults preserve current copy verbatim).
- Used on the homepage as `<CategoryGrid kicker="Continue browsing" title="The whole archive in nine sections" />`.

### 4.5 No changes to other components

`ThenNow`, `EraRail`, `FeaturedBand`, `ClosingBand`, `StorytellingBand`, `ArchivePlate`, `ArchiveImage`, `ArchivalCard`, `Container`, `Motif`, `Wordmark`, `Header`, `Footer` — untouched.

## 5. Visual rhythm

The new top-to-bottom rhythm reads:

```
IMAGE-LED  ━━ HomeHero (bound printout, paper-raised)
IMAGE-LED  ━━ ThenNow (tractor-feed → LaserJet I)
TEXT BAND  ━━ EraRail (sepia surface, 5 cells)
EDITORIAL  ━━ FeaturedStories (1 lead w/ thumb + 6 text cards)
COMPACT    ━━ FeaturedBand history
COMPACT    ━━ FeaturedBand fax
COMPACT    ━━ FeaturedBand brands
INDEX      ━━ CategoryGrid (9 sections, paper)
QUIET CLOSE━━ ClosingBand ("About the archive")
```

The page alternates image-led → text-led density and closes on a quiet textual reflection rather than yet another visual moment. The single `bg-sepia` band (EraRail) and the single `bg-paper-raised` band (the hero, and ThenNow's "Now" half) provide distinctive surface rhythm without competing.

## 6. SEO / SSR / accessibility invariants

- **One `<h1>`:** only `HomeHero` carries `<h1>`. All other section headings use `<h2>` (existing convention); the lead card inside FeaturedStories uses `<h3>` so the curated block's `<h2>` ("Hand-picked stories from the archive") remains the sole H2 in that section.
- **Static rendering:** all routes remain `○` (Static) or `●` (SSG); no `dynamic = "force-dynamic"`, no `revalidate`, no client boundaries.
- **Metadata:** `app/page.tsx` continues to inherit the root `metadata` block from `app/layout.tsx`; no new `generateMetadata` is introduced. Canonical stays `/`. RSS alternate stays `/feed.xml`.
- **Schema:** `<JsonLd>` is rendered exactly once from `app/layout.tsx` with `organizationSchema()` and `websiteSchema()`. The homepage adds no per-page JSON-LD (matches prior policy — the homepage is the website's `WebSite` schema host, no `BreadcrumbList` needed).
- **Sitemap / RSS / `llms.txt`:** all three are generated from the content layer (not from page composition), so no regeneration is required by this phase. Verify they still resolve cleanly during QA.
- **Accessibility:**
  - Hero image carries `alt` from `ArchiveImage` metadata.
  - Each FeaturedStories card is a single accessible link (the `<a>` in `ArchivalCard`).
  - Kickers and decorative numerals remain non-interactive spans.
  - Focus styles inherit the global `:focus-visible` ring (unchanged).
- **CLS:** the hero image carries explicit `width`/`height`; `ArchivePlate` reserves layout box; rendering on mobile stacks vertically (no layout shift when image loads).

## 7. Approved imagery to be reused

All four images cited below are already committed and carry full `ArchiveImage` metadata; no new binaries:

| Slot | File | Already in repo at |
|---|---|---|
| Hero | bound-printout | [public/images/home/archival-highlights-bound-printout.jpg](public/images/home/archival-highlights-bound-printout.jpg) |
| ThenNow "Then" | tractor-feed | [public/images/home/then-tractor-feed.jpg](public/images/home/then-tractor-feed.jpg) |
| ThenNow "Now" | HP LaserJet I | [public/images/home/now-hp-laserjet-i.jpg](public/images/home/now-hp-laserjet-i.jpg) |
| FeaturedStories lead thumb | Facit E560 dot-matrix | [public/images/history/dot-matrix-printers-explained.jpg](public/images/history/dot-matrix-printers-explained.jpg) |

The remaining committed images (NORAD, IBM 1401 lab, 1940 Census, Hughes mainframe, Panasonic KX-F90, early-laser-printer) stay as in-page figures within their respective content modules and are **not** surfaced on the homepage in this phase. This preserves the "image lives on its strongest page" discipline.

## 8. Out of scope (explicit)

- No new image binaries, no image re-encoding, no new ArchiveImage metadata.
- No content edits — no copy changes to any `content/` module.
- No changes to `Header`, `Footer`, navigation labels, or routes.
- No theming/CSS-variable changes.
- No new `<script>`, `<noscript>`, or analytics integrations.
- No A/B/preview-mode branches.

## 9. Verification gate (post-implementation)

```
npm run typecheck           # tsc --noEmit, clean
npm run lint                # eslint, clean
npm run test:content        # 72 entries OK, content integrity gate
npm run test:unit           # 22 tests pass
npm run build               # 92 prerendered routes, no warnings
```

Additional manual inspection:

- View-source on `/` — confirm a single `<h1>`, that the hero image's `alt` is the descriptive one (not the caption), and that JSON-LD blocks are intact.
- `curl -s http://localhost:3000/sitemap.xml | head -40` — confirm no broken URLs.
- `curl -s http://localhost:3000/feed.xml | head -40` — confirm RSS still validates.
- `curl -s http://localhost:3000/llms.txt | head` — confirm llms manifest still resolves.
- Grep build output for `noindex` to confirm no accidental robots regression.
- Grep generated `.next/server/app/page.html` for `localhost` to confirm no leaked URLs.
- Mobile viewport check at ~375px and ~414px: hero stacks correctly; FeaturedStories cards stack; no horizontal scroll.

## 10. Risks and follow-ups

- **Risk:** Promoting the bound-printout image into the hero removes a visual band from the bottom of the page. Mitigation: the `FeaturedStories` editorial block plus the moved `EraRail` provide replacement visual rhythm earlier in the page; the bottom now closes on a quiet text-led `ClosingBand`, which is editorial-appropriate.
- **Risk:** Dropping three FeaturedBands could reduce direct discovery into guides/troubleshooting/mobile-printing. Mitigation: those sections remain in the `Header` primary nav (always visible) and in the `CategoryGrid` (which now reads "Continue browsing the whole archive" — explicit discovery affordance). FeaturedStories also includes cross-section links that touch into those areas via the related-links within each story page.
- **Risk:** `HomeHero` now has an `image` prop — easy to forget to pass it from `app/page.tsx`. Mitigation: prop is optional with graceful `Motif` fallback (matches the `StorytellingBand` pattern). Type-system enforced via TS.
- **Follow-up (out of scope for this phase):** A future phase could surface a few "Glossary" anchors near the FeaturedStories block, or add a "Workflows" callout. The brief calls for discovery into workflows + glossary; the CategoryGrid covers both, but a dedicated mini-band could strengthen them in a later launch-polish pass.

## 11. Done criteria

- Homepage renders with the new composition in production build (`npm run build` static output).
- All five QA commands pass.
- No new files outside `components/home/` and `docs/superpowers/specs/`.
- Branch is `feat/foundation-architecture` only; no `main` touched.
- Final report delivered with: files changed, image usage, verification results, launch-readiness assessment, remaining risks.
