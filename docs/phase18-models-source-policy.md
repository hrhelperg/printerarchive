# PrinterArchive — Model Page Source Policy (Phase 18)

This policy governs every page in the `models` section (`content/models/*.ts`,
routed at `/models/<slug>`). It is binding on all printer-model (Phase 18) and
fax-model (Phase 19) waves.

## Principles

- **Authoritative sources only.** Every model page is built exclusively from:
  manufacturer spec sheets, product manuals, and dated press/announcement
  materials; museum, library, and archive records (e.g. the Computer History
  Museum); government and standards-body records (ITU-T, ISO, IEEE) where a model
  implements a named standard. Reseller listings, marketplace pages, SEO content
  farms, forums, and AI-generated pages are not acceptable sources for facts.

- **No fabrication, ever.** Do not invent or estimate resolution (DPI), print
  speed (PPM), memory, interfaces/ports, introduction or discontinuation dates,
  availability, prices, print volumes, duty cycles, or market/sales claims. If a
  figure cannot be traced to an authoritative source, it is **omitted, not
  guessed**.

- **Omit unknown fields.** Every spec-like field on `ModelEntry`
  (`manufacturer`, `category`, `era`, `introduced`, `discontinued`,
  `alsoKnownAs`, `specs`) is optional. Leave out any field you cannot source.
  Prefer the flexible `specs: { label, value, source }[]` list — each pair names
  its own source — over fixed spec columns, so gaps are honest absences rather
  than blanks to be filled.

- **Cite every claim.** The entry-level `sources[]` array is **mandatory**
  (at least one source, enforced at build time by `lib/content/integrity.ts`).
  Each `specs` entry carries its own `source`. Prose factual claims should be
  backed by a source or footnote.

- **Facts must be durable.** Record what is stable and verifiable (print method,
  print engine, standard implemented, documented milestones), not speculation or
  editorialising. Superlatives ("first", "fastest") are permitted only when an
  authoritative source states them, and are attributed.

- **Cross-link, don't duplicate.** Model pages link out to the existing `brands`
  and `history` (and relevant `guides`) sections for manufacturer and era
  context rather than restating it. Because `/models` uses
  `dynamicParams = false`, never link to a model slug that is not yet a published
  page — it would 404 and fail the route audit.

## Data model

`ModelEntry` (see `lib/content/types.ts`) extends the base content entry.
Only `sources` is required beyond the base fields; all spec fields are optional.
The shared block renderer and metadata pipeline render a model page identically
to a guide, so no per-model layout work is needed.

## Build-time enforcement

- `lib/content/integrity.ts` requires every `models` entry to cite ≥1 source and
  validates that any `specs` entry has a non-empty `label`, `value`, and
  `source`. This runs via `npm run test:content` and the build's sitemap gate.
- `scripts/taxonomy.test.mjs` forbids any planned taxonomy slug from colliding
  with a published page: when a model page ships, its entry must be removed from
  the corresponding cluster's `planned[]` in `lib/knowledge-graph/taxonomy.ts`.
