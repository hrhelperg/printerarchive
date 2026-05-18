# PrinterArchive.net — Foundation Architecture Design

- **Date:** 2026-05-18
- **Status:** Approved (design); pending spec review before implementation plan
- **Repo:** standalone project at `/Users/petrohrys/printerarchive` → `github.com/hrhelperg/printerarchive`
- **Branch:** `feat/foundation-architecture` (never push to `main`)
- **Phase:** Foundation only — infrastructure, systems, and a small set of real sample pages. NOT bulk content generation.

---

## 1. Purpose & Positioning

PrinterArchive.net is a long-term, static-first **authority knowledge platform** about printing technology: printer/fax/scanner history, laser/inkjet/thermal/mobile printing, troubleshooting, workflows, standards, and printing ecosystems. Positioning: *"The internet archive of printing knowledge."*

The product must feel authoritative, educational, calm, timeless, technical, highly readable, structured, trustworthy, and archival/editorial. It must avoid SaaS/crypto/AI-hype aesthetics, dark/edgy design, affiliate-blog patterns, SEO-spam patterns, "AI slop", excessive gradients/glows/animation, and clickbait UI.

This document is the source of truth for the implementation plan. It supersedes any conflicting assumptions.

## 2. Hard Constraints

- Next.js 15+ App Router, TypeScript (strict), Tailwind CSS, static-first, Server Components by default, clean SSR HTML, strong SEO architecture.
- **No database, no authentication, no payments, no analytics SDKs, no unnecessary dependencies.**
- Fonts via `next/font` only (built-in, zero added runtime dependency).
- Content authored as **typed TypeScript content modules** (decided): no MDX, no CMS.
- **No invented facts.** Do not fabricate historical dates, technical claims, manufacturer facts, statistics, or source citations. All sample content must be factual, conservative, and source-ready. Where a precise figure/date would be needed but cannot be stated with confidence, write around it conceptually rather than inventing it. The `sources` field is for genuine, well-known references only; omit rather than fabricate.
- Publisher identity (decided): **HELPERG LLC**, contact **info@helperg.com** — used consistently in footer, `/about`, `/contact`, and Organization/WebSite JSON-LD. No invented postal address, phone number, founders, or social profiles.
- `metadataBase`: `https://printerarchive.net`.
- No mock/demo garbage, no lorem ipsum, no unfinished sections, no fake testimonials/reviews/statistics.

## 3. Build & Verification Rules

- **`next build` is the final source of truth** for "production-ready". It must complete cleanly with no errors.
- `tsc --noEmit` must pass (strict).
- Run `next lint` if available in the scaffold. **If `next lint` is unavailable** in the Next.js 15 scaffold (it is deprecated in Next 15 and may be absent), **report this clearly and do NOT add extra lint dependencies just for this phase.**
- No hydration warnings; no broken internal links; responsive and accessible (WCAG AA contrast, focus-visible, semantic landmarks, correct heading hierarchy).

## 4. Project & Stack

- Standalone Next.js 15 App Router + TypeScript (strict) at `/Users/petrohrys/printerarchive`, own git history → `hrhelperg/printerarchive`.
- Tailwind CSS (v4 via `@tailwindcss/postcss` as scaffolded by current `create-next-app`; if scaffold differs, follow the scaffold rather than adding deps).
- `next/font/google` for typography (no runtime dependency added).
- All routes statically generated: section/article pages use `generateStaticParams`; metadata is static per route. No runtime data fetching, no DB.

## 5. Directory Architecture

```
app/
  layout.tsx                 root: fonts, skip-link, Header, Footer,
                              Organization + WebSite JSON-LD, metadataBase
  page.tsx                   homepage
  about/page.tsx             mission / archival positioning
  contact/page.tsx           trust-oriented contact (HELPERG LLC, info@helperg.com)
  history/        page.tsx + [slug]/page.tsx
  guides/         page.tsx + [slug]/page.tsx
  troubleshooting/page.tsx + [slug]/page.tsx
  brands/         page.tsx + [slug]/page.tsx
  workflows/      page.tsx + [slug]/page.tsx
  tools/          page.tsx + [slug]/page.tsx
  glossary/       page.tsx + [slug]/page.tsx
  mobile-printing/page.tsx + [slug]/page.tsx
  fax/            page.tsx + [slug]/page.tsx
  sitemap.ts                 all static + content routes from registry
  robots.ts                  allow + sitemap reference
  llms.txt/route.ts          plain-text site description + section index
  feed.xml/route.ts          RSS of latest entries
  not-found.tsx              editorial 404
components/
  layout/   Header.tsx, Footer.tsx, Breadcrumbs.tsx, Container.tsx
  content/  ArticleBody.tsx, SectionList.tsx, RelatedLinks.tsx,
            SourcesList.tsx, Callout.tsx, FaqList.tsx, Prose.tsx,
            KeyTakeaways.tsx, StepList.tsx, Timeline.tsx, MetaBar.tsx
  seo/      JsonLd.tsx
content/
  history/ guides/ troubleshooting/ brands/ workflows/
  tools/ glossary/ mobile-printing/ fax/        (typed .ts modules)
lib/
  content/  types.ts, registry.ts, queries.ts
  seo/      metadata.ts, schema.ts
  site.ts   site constants (name, url, description, publisher, contact,
            nav, sections, social=none)
```

Architecture must scale to thousands of pages without structural change: adding a page = adding one typed module to a section folder and registering it.

## 6. Typed Content Model (`lib/content/types.ts`)

A discriminated union `ContentEntry` keyed by `section`. Shared base fields:

- `slug`, `section`, `title`, `description` (SEO meta), `summary` (lede), `body: ContentBlock[]`
- `published` (ISO date), `updated` (ISO date — powers "Last updated"), `author`, `editor`
- `keywords: string[]`, `cluster?: string` (topic-cluster id), `related?: { section; slug }[]`
- `faqs?: { q: string; a: string }[]`, `sources?: { title: string; url?: string; publisher?: string }[]`

`ContentBlock` is a typed discriminated union — no raw HTML strings:
`heading` | `paragraph` | `list (ordered|unordered)` | `callout (note|warning|tip)` | `table` | `keyTakeaways` | `timeline` | `steps`. Rendered by `ArticleBody` into semantic HTML (`<article>`, `<section>`, correct `<h2>`/`<h3>` hierarchy beneath the page `<h1>`).

Per-type extensions:
- `Guide`: `difficulty`, `estimatedTime`
- `Troubleshooting`: `symptom`, `appliesTo: string[]`, fixes as ordered `steps`
- `History`: `era`, `timeline`
- `GlossaryEntry`: `term`, `shortDefinition`, `seeAlso: slug[]`
- `BrandPage`: `brand`, `overview`, `focusAreas`, `relatedGuides`, `relatedTroubleshooting`
- `Workflow`: `goal`, `steps`, `toolsUsed`
- `Tool`: `purpose`, informational how-to only — **no interactive widgets in foundation phase**

`registry.ts`: aggregates entries per section into typed arrays + a flat index.
`queries.ts`: `getEntry(section, slug)`, `getSection(section)`, `getRelated(entry)` (cluster match + keyword overlap, capped), `getBreadcrumbs(section, slug)`, `getCluster(id)`, `getAllRoutes()` (for sitemap).

## 7. Editorial Design System

- **Typography:** serif for headings and body for an archival/editorial register (e.g. *Source Serif 4*); a humanist sans (e.g. *Inter*) for nav, labels, metadata, breadcrumbs; a monospace for codes/commands. All via `next/font/google`. Final family names chosen at implementation if a listed family is unavailable in `next/font`; the role split is fixed.
- **Palette:** warm paper/ink neutrals. Ink ≈ `#1a1a1a`, paper ≈ `#fbfaf7`, secondary ink for metadata, one restrained accent (deep slate/teal) used **only** for links/active states. No gradients, glows, or decorative color.
- **Layout & rhythm:** body measure ≈ 66–72ch, generous vertical rhythm, hairline `1px` rules, restrained cards (border only, no shadow), clear focus-visible rings, AA contrast throughout.
- Tailwind theme tokens for color/spacing/type scale; a `Prose` component encapsulates article typography. Minimal, calm navigation. No carousels, no parallax, no entrance animations.

## 8. SEO Foundation

- `lib/seo/metadata.ts` → `buildMetadata()` producing title, description, canonical, OpenGraph, Twitter card, robots, per route; `metadataBase` set in root layout.
- `lib/seo/schema.ts` → typed JSON-LD builders: `Organization`, `WebSite`, `Article`, `BreadcrumbList`, `FAQPage`. Emitted via `<JsonLd>` (script type `application/ld+json`).
  - Root layout: Organization + WebSite.
  - Article pages: Article + BreadcrumbList; FAQPage when `faqs` present.
- `app/sitemap.ts`: every static page + every content route from `getAllRoutes()`, with `lastModified` from `updated`.
- `app/robots.ts`: allow all, reference sitemap.
- `app/llms.txt/route.ts`: plain-text site summary + section/topic index (RSS-prep + LLM discovery).
- `app/feed.xml/route.ts`: RSS 2.0 of latest entries by `updated`.
- Semantic HTML, single `<h1>` per page, ordered headings, descriptive link text, breadcrumb UI mirrors BreadcrumbList schema.

## 9. Internal Linking Foundation

- `Breadcrumbs` on every content page (UI + schema).
- `RelatedLinks` from `getRelated` (shared `cluster` + keyword overlap).
- Section hubs list and link all entries in that section/cluster.
- Brand pages cross-link to relevant guides and troubleshooting.
- Glossary entries render "See also" from `seeAlso`.
- Topic clusters declared per entry via `cluster` to support future topical-authority growth without refactor.

## 10. Pages & Sample Content (all real, factual, source-ready)

Core pages: Homepage (editorial hero, category architecture, featured guides/troubleshooting, history, mobile printing, brands sections), About (educational/archival mission), Contact (professional, trust-oriented; HELPERG LLC + info@helperg.com only — no invented address/phone).

10 section hubs (one per top-level section).

Sample content — enough to exercise every content type and all linking, **not hundreds of pages**:
- `history/history-of-printers`
- `history/history-of-fax-machines`
- `guides/how-laser-printers-work`
- `guides/how-inkjet-printers-work`
- `troubleshooting/printer-offline-guide`
- `mobile-printing/what-is-airprint`
- `fax/how-fax-machines-work`
- 1 brand page, 1 workflow, 1 tool (informational), ~6 glossary entries

All sample content: educational, conservative, well-structured, source-ready, no fabricated dates/specs/statistics/citations. Cross-linked into clusters so the internal-linking system is demonstrably exercised.

## 11. Trust & Authority Infrastructure

Editorial footer (publisher HELPERG LLC, info@helperg.com, section nav, copyright), clear primary navigation, `SourcesList` component, `MetaBar` (author/editor + "Last updated"), clean per-page metadata. No fabricated trust signals.

## 12. Delivery

- Logical, reviewable commits on `feat/foundation-architecture`.
- Verify: `tsc --noEmit` clean, `next lint` (if present) clean, **`next build` clean** (source of truth).
- Add `origin` → `https://github.com/hrhelperg/printerarchive.git`, push the branch, open a PR against `main`.
- If the remote repo does not exist, or push/PR credentials are unavailable in this environment: **stop, report the exact remaining git/PR commands** for the user to run. Never push to `main`.

## 13. Out of Scope (Foundation Phase)

Bulk/hundreds of pages, interactive tools/calculators, site search, i18n/localization, CMS, comments, newsletter, ads/affiliate, analytics. The architecture must not preclude these later, but none are built now.

## 14. Open Risks

- `next lint` deprecated/absent in Next 15 → handled per §3 (report, do not add deps).
- Remote repo/credentials may be unavailable → handled per §12 (report exact commands).
- Tailwind v4 vs v3 scaffold variance → follow whatever `create-next-app` produces; do not fight the scaffold or add deps.
