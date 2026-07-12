# Phase 17 Wave B — Consumables & Ink/Toner Types

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-08 · **Status:** Wave 17B shipped (18 pages).

Second wave of Phase 17: the consumables and colorant-materials layer. ~33,000
words. Authored as `guides/` references describing what each consumable/material
is, its composition/types, function, and role in print quality — not a buying
guide (no specific yields, capacities, part numbers, prices, compatibility, or
refill/repair steps; yield is described only via the standardized ISO/IEC test
methods).

## Pages (18)

**Consumables:** toner-cartridge, imaging-unit, ink-cartridge, ink-tank-system
(CISS), thermal-transfer-ribbon, dot-matrix-ribbon, maintenance-kit,
waste-toner-container.
**Ink types:** dye-based-ink, pigment-based-ink, solvent-ink, latex-ink,
uv-curable-ink, sublimation-ink.
**Toner types:** toner-composition, polymerized-toner, micr-toner, liquid-toner.

Sources: manufacturer SDS and technical docs (Xerox toner SDS, Epson, HP Indigo),
ISO/IEC yield standards (19752 mono toner, 19798 colour toner, 24711 colour
inkjet, 24712 colour test-page suite) and ISO 1004 (MICR), ISO 18937 (light
stability), plus engineering/encyclopedic references.

## Graph & taxonomy

Cross-linked to the Phase-17A components (developer-unit, ink-delivery-system,
inkjet-printhead, fuser-unit, photoconductor-drum, drum-cleaning) and the process
pages (inkjet/laser/dye-sublimation printing). Taxonomy reconciled by hand-edit:
activated `ink-technologies` (status planned→expand, livePages 0→10) and
`toner-technologies` (planned→expand, 0→7); `printer-technologies` 55→56
(maintenance-kit). No planned-slug collisions. Site now **288 content pages**.

## Verification results (honesty + safety review)

Adversarial per-page review (18 reviewers, two-pass scope/safety + fact).
**Outcome: 0 safety/scope violations, 3 substantive, 13 minor, 2 clean
(`waste-toner-container`, `uv-curable-ink`) — all fixed before commit.**

Scope discipline held: no specific page yields, capacities, maintenance
intervals, part numbers, prices, model-specific compatibility, or refill/repair
procedures anywhere; yield is presented only as the standardized ISO/IEC test
methods, with figures explicitly "not reproduced here."

The three substantive issues were a single recurring class — mis-scoping
**ISO/IEC 24712** (it is the *colour* test-page suite shared by ISO/IEC 24711
colour-inkjet and 19798 colour-toner; it is NOT inkjet-specific and is NOT used by
the monochrome 19752 method) and defining single-component toner as always
magnetic (non-magnetic monocomponent toner also exists). Because the ISO error
recurred, the fix pass audited the yield-standard scoping on **all 18** pages with
the canonical facts, correcting it uniformly (including on pages the review had
graded clean or minor). Minor fixes: publisher normalized to "ISO/IEC"; pinned
superseded edition years relaxed; unverifiable second-SDS attribution restricted
to the cited sheet; over-generalizations softened (binder-as-largest-ingredient
qualified for magnetic toner; UV-only fading broadened to photodegradation;
disperse-dye "solution" corrected to fine suspended particles). ISO catalog URLs
were left as verified-resolving pages or the generic host — never repointed to
unverified pages (iso.org is bot-walled, returning 403), and no URL was invented.

## QA

typecheck ✓ · lint ✓ · test:content (288) ✓ · test:unit (57) ✓ · build ✓ ·
check:routes ✓ · indexnow --dry-run ✓. No `localhost`.

## Next wave

**Phase 17C — Media & paper (~12), completing Phase 17:** paper weight/caliper,
paper grain, coated vs uncoated, paper finish/brightness/whiteness, specialty &
synthetic media, label/photo/cardstock media, transparency/film, envelope
handling, paper grades & standards (ISO 216 sizes, basis weight). Activates the
`paper-technologies` cluster. Same honesty guard: types and properties only, no
invented specs or brand claims.
