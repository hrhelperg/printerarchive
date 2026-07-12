# Phase 18 Wave 0 — Printer-Model Infrastructure

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-08 · **Status:** Wave 0 shipped (infrastructure + 1 pilot).

Per the program brief, Phase 18 (printer models) begins with **infrastructure, a
schema, validation, and a source policy — committed and reviewed before any model
waves**, not with model pages. This wave delivers that foundation plus one
source-verified pilot to prove the route end-to-end.

## What shipped

**New live section `/models`** (activated the previously-proposed section):
- `lib/content/types.ts` — new `ModelEntry` type. Every spec-like field
  (`manufacturer`, `category`, `era`, `introduced`, `discontinued`,
  `alsoKnownAs`, `specs`) is **optional** so pages omit anything unverified;
  `sources` is the only field made **mandatory** beyond the base entry. `specs`
  is a self-citing `{ label, value, source }[]` list. Added to the `ContentEntry`
  union.
- `lib/site.ts` — `models` added to `SectionId`, `SECTIONS`, and the footer nav.
- `components/pages/SectionHub.tsx` — `models` entry in the exhaustive
  `HUB_PROFILE` (build-critical).
- `lib/content/kicker.ts` — model list items use the manufacturer as their eyebrow.
- `app/models/page.tsx` + `app/models/[slug]/page.tsx` — hub + detail routes,
  cloned from the guides routes; render via the existing block renderer and
  metadata pipeline with zero renderer changes.

**Validation** (`lib/content/integrity.ts`): every `models` entry must cite ≥1
source, and each `specs` entry must have a non-empty `label`, `value`, and
`source` — enforced by `test:content` and the build's sitemap gate.

**Taxonomy** (`lib/knowledge-graph/taxonomy.ts`): `models` moved from
`PROPOSED_SECTIONS` to `LIVE_SECTIONS` (PROPOSED now `[]`); `printer-models`
cluster activated (status→expand, livePages 0→1); the pilot's planned slug
removed to avoid a self-collision.

**Source policy** (`docs/phase18-models-source-policy.md`): authoritative/official
sources only (manufacturer spec sheets/manuals/press, museum & archive records,
standards bodies); no fabricated DPI, PPM, memory, interfaces, dates,
availability, prices, or market claims; omit unknown fields; cite every claim;
cross-link rather than duplicate; never link an unbuilt model slug (dynamicParams
is false).

## Pilot page (1)

`content/models/hp-laserjet-original.ts` — the original 1984 HP LaserJet (model
2686A). Nine specs, each cited to HP Computer Museum / HP Memory Project /
Wikipedia / HP's official museum (Canon CX engine, 300 dpi, 8 ppm, 128 KB RAM,
RS-232-C-only, PCL 3, all-in-one cartridge, US$3,495 launch price, model 2686A),
rendered as a sourced `archivalTable`. The "first desktop laser printer" claim is
attributed throughout, not asserted. Cross-links only to live `guides`/`tools`
pages.

## Verification (honesty + source + safety review)

Independent adversarial review of the pilot with web verification of every spec
and prose claim against all four cited sources. **Outcome: minor, 0 safety/scope
violations, 0 fabrications, all 9 specs confirmed sourced.** During research the
fact-checker caught and corrected a mis-attributed "250,000 units in the first
year" figure (reframed to lifetime shipments, per HP Memory Project); the review
found only two framing minors, both fixed: the HP-35 comparison ("a decade" →
"about twelve years", matching HP's wording) and attributing "first desktop laser
printer" in the meta description.

## QA

typecheck ✓ · lint ✓ · test:content (301) ✓ · test:unit (57, incl. taxonomy
section-reference + planned-collision) ✓ · build ✓ (`/models` and
`/models/hp-laserjet-original` render) · check:routes (321 routes) ✓ ·
indexnow --dry-run ✓. No `localhost`/`noindex`.

## Next

**Phase 18 controlled model waves.** With the route, schema, validation, and
source policy proven, subsequent waves author 50–100 fully-sourced model pages
each (research → fact-check → author → adversarial source+safety review → fix →
ship), removing each shipped slug from the `printer-models` cluster's `planned[]`
and bumping livePages. The `fax-models` cluster follows in Phase 19 under the same
infrastructure.
