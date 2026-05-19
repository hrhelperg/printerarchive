# PrinterArchive.net — Editorial Redesign Design

- **Date:** 2026-05-19
- **Status:** Approved (design); pending spec review before implementation plan
- **Repo:** standalone project at `/Users/petrohrys/printerarchive` → `github.com/hrhelperg/printerarchive`
- **Branch:** `feat/foundation-architecture` (never push to `main`)
- **Supersedes:** nothing — this builds on and preserves `2026-05-18-printerarchive-foundation-design.md`. Where this document is silent, the foundation design still governs.
- **Phase:** Visual/editorial redesign of an existing, technically sound foundation. NOT an architecture rewrite and NOT bulk content generation.

---

## 1. Purpose & Positioning

PrinterArchive.net is technically strong but visually too minimal and text-heavy. This redesign makes it a **premium editorial archive about printing technology** — a hybrid of an archival museum, a premium editorial publication, a technology-history journal, and a technical knowledge platform — *without* altering the architecture, SEO systems, typed content model, SSR quality, or calm archival direction.

This is explicitly **not** a SaaS redesign, **not** an affiliate-blog redesign, and **not** a flashy AI-style redesign.

**Governing rule (the key rule):** the redesign must look visually richer and more memorable *even before any real approved images exist*, and become progressively stronger as public-domain images are gradually populated. No layout, page, or component may depend on a quantity of images being available. The image-absent state is a first-class, fully-composed design — not a fallback.

## 2. Approved Approach & Decisions

**Approach C — Image-Ready Editorial System (hybrid).** Ship the full typographic/editorial richness now; build the complete image infrastructure now; populate real photographs incrementally over time.

**Imagery sourcing:** public-domain / CC sources only (e.g. Wikimedia Commons, national archives), each candidate proposed with source + license and **approved by the user before any image is committed**. No AI-generated imagery. No fabricated provenance. The system is built now; zero photographs are introduced by this redesign itself.

**Locked decisions:**
- **(a)** Decorative motifs are **abstract/geometric only** (hairline rules, plate frames, era markers, restrained platen-inspired repeats). No literal printer/fax illustrations. Identity stays premium, archival, never cartoon or AI-looking.
- **(b)** Reuse **Source Serif 4** at a new display tier. **Do not add another font.** Preserves performance, zero-runtime-dependency ethos, and visual consistency.
- **(c)** Include a **whisper-light paper texture (~2–3%)** on large surfaces only, behind content, with a single kill-switch token. **Never** under long body text.

## 3. Hard Constraints (preserved from foundation; non-negotiable)

- Next.js 16 App Router, TypeScript strict, Tailwind CSS v4 (`@tailwindcss/postcss`), static-first, **Server Components by default** — no Server Component is converted to a Client Component by this redesign; no `"use client"` is introduced.
- **Zero new runtime dependencies.** Fonts remain `next/font/google` only; no new font families. Imagery uses the built-in `next/image`.
- Content remains **typed TypeScript content modules**: no MDX, no CMS, no raw HTML strings. New content capabilities are added as typed, optional fields/blocks.
- **No invented facts, no fabricated imagery or provenance.** Every committed image must carry a real source and license. No mock/demo content, no lorem ipsum, no fake credits.
- Publisher identity strings are exact and unchanged: **HELPERG LLC**, **info@helperg.com**.
- `metadataBase` stays `https://printerarchive.net`. SEO/schema/sitemap/RSS/`llms.txt`/robots systems are preserved and extended, never regressed.
- Accessibility preserved/improved: WCAG AA contrast, visible focus, semantic landmarks, single `<h1>` per page, ordered headings, descriptive link text, no CLS from imagery.
- `next build` is the final source of truth and must complete cleanly; `tsc --noEmit` strict and `eslint` clean; `node --experimental-strip-types scripts/check-content.mjs` passes.

## 4. Design Foundations (`app/globals.css` `@theme`, extended not replaced)

**Palette additions** (keep existing `paper`, `ink`, `ink-soft`, `ink-faint`, `rule`, `accent`, `accent-hover`):
- `--color-paper-raised: #f4f1e9` — plates, cards, frontispieces, raised surfaces.
- `--color-rule-strong: #d8d4c8` — plate/frontispiece borders (heavier than the hairline `rule`).
- `--color-ink-display: #121211` — large display headings only.
- `--color-sepia: #efe7d6` — History-only era tint; used nowhere else.
- No gradients, glows, neon, or decorative color. The single accent remains links/active states only.

**Typography:**
- New **display tier** rendered with the existing `Source Serif 4` (`--font-serif`) at large sizes via fluid `clamp()` (hero, frontispiece, page `h1` on key templates). High-contrast tracking; `text-balance`. No new font is loaded.
- Body measure stays 66–72ch; existing sans (`Inter`) keeps nav/labels/metadata; mono unchanged.
- A formalized **kicker/label** style (sans, uppercase, tracked, `ink-faint`) used consistently for section eyebrows and metadata.

**Spacing & rhythm:** a formalized editorial vertical-rhythm scale and section-separator tokens (centered hairline + small numeral/motif). Larger, calmer spacing than the current build.

**Texture:** an inline-SVG grain at ~2–3% opacity exposed as a token and applied only to large surfaces (hero, frontispieces, era band), layered behind content via a non-interactive pseudo-element. A single token disables it globally. Never applied under article body text.

**Motion:** none beyond existing focus/hover. No entrance animations, parallax, carousels, or sliders.

## 5. Image System Infrastructure (built now; graceful by default)

**Types (`lib/content/types.ts`):**
- New interface `ArchiveImage`:
  ```
  interface ArchiveImage {
    src: string;        // /images/<section>/<file>.<ext> committed under public/
    alt: string;        // required, descriptive
    width: number;      // intrinsic px (zero-CLS)
    height: number;     // intrinsic px
    caption?: string;   // museum-placard caption
    credit: {           // required for every committed image
      source: string;   // e.g. "Wikimedia Commons"
      url?: string;     // canonical source page
      license: string;  // e.g. "Public domain", "CC BY-SA 4.0"
    };
  }
  ```
- `BaseEntry` gains optional `hero?: ArchiveImage`.
- `ContentBlock` union gains two kinds: `{ kind: "figure"; image: ArchiveImage }` and `{ kind: "pullquote"; text: string; attribution?: string }`. Both optional, both typed; no raw HTML.

**Component `components/content/ArchiveImage.tsx`:**
- Server Component wrapping `next/image`. Fixed aspect ratio from `width`/`height` (zero CLS). Lazy by default; `priority` only for an above-the-fold hero. Paper-toned blur/solid placeholder. Plate framing (`rule-strong` border, `paper-raised` mat) with a `<figure>`/`<figcaption>` museum placard rendering `caption` and a credit line ("Source — License", linked when `url` present).

**Graceful default (the key rule, enforced structurally):**
- When `hero` is absent, templates render a **typographic frontispiece** instead — a fully-composed title plate (kicker, display title, lede, motif, optional era tint). The frontispiece is the *default* visual identity, not a placeholder; pages are premium with zero images.
- `figure` blocks only render when present; no empty slots, no reserved gaps, no "image coming soon" affordances.

**Integrity gate (`lib/content/integrity.ts`, extended):**
- For any present `hero` or `figure` image: `alt` non-empty, `width`/`height` positive integers, `credit.source` non-empty, `credit.license` non-empty. Missing/invalid → issue → `next build` fails. This enforces "public-domain, credited, no fabrication" at build time.
- Validation only triggers when an image exists; absence is always valid.

**Pipeline & config:**
- Images committed locally under `public/images/<section>/` (static-first; no remote fetch, no `remotePatterns`).
- `next.config.ts` sets `images.formats` to `["image/avif","image/webp"]`. No other config change.
- `lib/seo/schema.ts`: `articleSchema` includes `image` (absolute URL) when `hero` exists; unchanged otherwise.
- Optional aggregated "Image credits" note rendered in the article references apparatus when any credited image is present.

## 6. Shared Chrome

**Header (`components/layout/Header.tsx`):** serif wordmark plus a small abstract archival mark (geometric platen/rule glyph per decision (a)); a tagline microline on large screens; hairline rule; calm active/hover state on primary nav. Remains static and a Server Component.

**Footer (`components/layout/Footer.tsx`):** richer multi-column editorial footer — sections grouped (Learn / History / Reference), an "about the archive" blurb, links to RSS / `llms.txt` / sitemap, and a trust block with the exact strings **HELPERG LLC · info@helperg.com** and copyright. Calm hairlines; no marketing language, badges, or CTAs.

## 7. Homepage (`app/page.tsx`)

Editorial composition, image-ready, premium with zero images:
1. **Hero:** kicker label, display-serif headline, lede; frontispiece treatment with whisper texture; optional approved hero slot (typographic by default).
2. **Then / Now diptych:** two plate panels expressing historical↔modern contrast; typographic by default, each an image-ready slot.
3. **Visual category navigation:** plate grid — section numeral, title, description, entry count, abstract motif; `paper-raised` hover, hairline emphasis, no shadows.
4. **Featured section bands:** richer editorial cards (kicker, serif title, summary, updated date) with stronger hierarchy and generous spacing; "all …" link per band.
5. **Era rail:** condensed Early → Impact → Non-impact → Networked → Mobile, linking into History — communicates the archive's identity immediately.
6. **Closing band:** about-the-archive + trust teaser → `/about`.

Elegant centered-hairline separators with a small numeral/motif between bands.

## 8. Category Hubs (`components/pages/SectionHub.tsx`)

Section **frontispiece** (display title plate, lede, entry count, optional approved hero, abstract motif, whisper texture) → refined editorial card list replacing the plain divided list: per-type kicker (History → era; Guides/mobile-printing/fax → difficulty + estimated time; Troubleshooting → symptom/appliesTo; Brands → brand; Workflows → goal; Glossary → term), serif title, summary, updated date, hairline dividers, `paper-raised` hover, a larger lead-entry treatment. **Cluster grouping** via the existing `cluster` field where it adds order. History hub uses the timeline layout (§10).

## 9. Article Page (`components/pages/ArticlePage.tsx`, `components/content/ArticleBody.tsx`)

Masthead: kicker (section + era/difficulty) → display-serif `h1` → serif standfirst (`summary`) → elegant byline rule (author/editor/"Last updated") → optional plate hero (typographic default). Body: tasteful first-paragraph drop cap (CSS, no extra markup), refined `h2`/`h3` scale and rhythm, new `pullquote` and inline `figure` blocks, and consistently restyled `callout`/`keyTakeaways`/`timeline`/`steps`/`table` to match the system. Related content becomes grouped editorial cards with section labels (driven by existing `getRelated`). `sources` and image credits render as one elegant references apparatus. Semantic HTML, heading order, accessibility, and SSR fully preserved.

## 10. History Experience

History feels distinct and special:
- A History **frontispiece** using the `sepia` era tint (History only).
- **Era/decade grouping** on the hub via existing `era` / `cluster`.
- An elevated vertical **timeline rail** (`components/content/Timeline.tsx`): era markers, sans period labels, hairline rail, generous rhythm.
- An **old→modern evolution band**: a sequence of plate panels (mechanical → dot-matrix → laser → wireless), typographic by default, each an image-ready slot — museum-style storytelling that strengthens as images populate.

## 11. System Polish, Performance & SEO

Consistent hover (`paper-raised` + rule emphasis, never shadow); strong `focus-visible`; mobile type clamps, card stacking, fixed image aspect ratios (zero CLS), graceful nav wrap. Fully static generation retained. `next/image` always with intrinsic `width`/`height` and appropriate `sizes`; lazy except a single hero `priority`. Metadata/JSON-LD (`Organization`, `WebSite`, `Article`, `BreadcrumbList`, `FAQPage`), sitemap, robots, RSS, and `llms.txt` preserved; `Article` gains `image` when a hero exists. Integrity gate extended per §5. No Client Components introduced → no hydration risk.

## 12. Implementation Phasing (single plan, reviewable phases, build green throughout)

1. **Foundations** — `@theme` tokens, display type tier, spacing/separator tokens, texture token + kill-switch.
2. **Shared chrome** — Header mark + nav polish; richer Footer.
3. **Image system** — `ArchiveImage` type/block/component, integrity-gate extension, `next.config.ts` formats, schema `image`, typographic frontispiece primitive.
4. **Homepage** — hero, diptych, category grid, featured bands, era rail, closing band.
5. **Category hubs** — frontispiece, editorial cards, per-type kickers, cluster grouping.
6. **Article page** — masthead, drop cap, `pullquote`/`figure`, restyled blocks, related cards, references apparatus.
7. **History experience** — sepia frontispiece, era grouping, elevated timeline, evolution band.
8. **QA & delivery** — full verification, responsive/a11y pass, report.

Each phase is a logical commit (or small set of commits) on `feat/foundation-architecture`.

## 13. Verification (QA gate)

Run and report all four; all must pass:
- `npm run typecheck`
- `npm run lint`
- `npm run test:content`
- `npm run build`

Plus manual: responsive layouts at mobile/tablet/desktop, typography readability, no image-induced layout shift, no hydration warnings, metadata/schema validity, no broken internal links, focus/contrast.

## 14. Out of Scope

Architecture rewrite; new runtime libraries; new fonts; Client Components/animations/carousels/sliders; bulk content generation; interactive tools; site search; i18n; CMS; analytics; AI-generated or unlicensed imagery; any change to publisher identity. Real image *content* is populated later via the approved public-domain workflow — not by this redesign.

## 15. Delivery & Git

Logical phased commits on `feat/foundation-architecture`; **never** `main`. Push the branch. If push/PR credentials are unavailable, stop and report exact remaining git/PR commands. Final report covers: visual changes made, components redesigned, image-system implementation, homepage improvements, UX improvements, performance-impact observations, and the four verification results.

## 16. Open Risks

- **Texture muddiness** → mitigated by ≤3% opacity, large-surface-only application, behind-content layering, global kill-switch, and never under body text (§4).
- **Display tier vs. zero-dep ethos** → mitigated by reusing Source Serif 4, no new font (decision (b)).
- **Image-absent emptiness** → mitigated structurally: typographic frontispiece is the default identity, not a fallback; no reserved image gaps (§5, key rule).
- **CLS from future images** → mitigated by required intrinsic dimensions + fixed aspect ratios enforced in `ArchiveImage` and the integrity gate (§5, §11).
- **Next.js 16 API drift** → consult `node_modules/next/dist/docs/` (per repo `AGENTS.md`) before using `next/image`/config APIs during implementation.
