# Phase 18 Wave 2 — Additional Printer Models + Phase 18 Close

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-08 · **Status:** Wave 2 shipped (18 pages). **Phase 18 closed at the honest printer-model ceiling.**

## Wave 2 pages (18, section `models`, cluster `printer-models`)

`hp-laserjet-iii`, `hp-laserjet-5`, `apple-laserwriter-ii`, `hp-deskjet-500`,
`epson-stylus-color`, `canon-bjc-4000`, `hp-designjet-original`, `ibm-proprinter`,
`epson-lq-1500`, `nec-spinwriter`, `ibm-1443`, `hp-7550a-plotter`, `lexmark-optra`,
`oki-okipage`, `star-gemini-10x`, `panasonic-kx-p1124`, `hp-color-laserjet-original`,
`hp-laserjet-1100`.

Taxonomy: `printer-models` livePages 22 → 40 (capacity 40/44). Site now **340
content pages**.

## Verification (rigorous adversarial source + spec + safety review)

Per-page review (18 reviewers) under the enhanced criteria (per-field
verification, strict source hierarchy, no family/retailer inference,
fact-classification, a `hasModelSpecificEvidence` reject flag, and explicit
compatibility-error detection).

**Outcome: 3 clean, 12 minor, 3 substantive, 0 safety violations, 0 rejected
(all 18 had genuine model-specific authoritative evidence) — all fixed before
commit.** Substantive catches:
- `canon-bjc-4000`: black/color cartridge character-per-second speeds were
  swapped — corrected.
- `oki-okipage`: two spec numbers contradicted OKI's own brochure, and Adobe
  PostScript was attributed to the 14ex (which lacked it) — corrected/removed
  (compatibility error).
- `hp-color-laserjet-original`: page-description-language claim contradicted the
  HP Memory Project spec box the page cites, and "introduced PCL 5c" was wrong
  (PCL 5c predates the 1994 model) — corrected.

Minor/attribution fixes: sole-tertiary sensitive specs corroborated with
WebFetch-verified HP Computer Museum item pages (with source discrepancies
disclosed, not silently altered); LaserJet 5 networking scoped to the 5M the
manual documents (5N reframed as the product-line's factory-networked variant);
unattributed superlatives dropped. Where an authoritative page was bot-walled or
JS-rendered, the fix was recorded as source-skipped rather than citing an
unverified URL — no source invented.

## QA & checklist

typecheck ✓ · lint ✓ · test:content (340) ✓ · test:unit (57) ✓ · build ✓ ·
check:routes (360 routes) ✓ · indexnow --dry-run ✓. All 40 model routes render;
no duplicate slugs; family/manufacturer cross-links resolve; every model cites
≥1 source; no app integrations on model pages; no localhost/noindex.

## Phase 18 — honest-capacity report

Phase 18 built the `/models` section and populated it with **40 printer-model
pages** (1 pilot + 21 Wave 1 + 18 Wave 2), each built strictly under the model
source policy and passed through the rigorous per-field source/safety review.

- **Candidates researched: 40. Shipped: 40. Rejected for lack of model-specific
  authoritative evidence: 0.** Every candidate on the curated flagship/well-
  documented list cleared the evidence bar (the review's `hasModelSpecificEvidence`
  flag was true for all Wave-2 pages; Wave-1 pages were likewise all supportable
  after correction).
- The candidates were deliberately curated to the models with strong public
  documentation (manufacturer manuals/support, HP Computer Museum, Computer
  History Museum, IEEE/ACM history, standards bodies). Even so, the review found
  and removed real defects on famous models — swapped/contradicted specs,
  compatibility errors, family-as-model inferences, ad-as-review — confirming that
  model spec pages are the program's most fabrication-prone content and that the
  strict review is essential.
- **The `printer-models` cluster's honest ceiling is ~44** (taxonomy capacity).
  At 40 live pages it is **substantially complete**. Pushing to a nominal
  "50–100 per wave" quota would require padding with thinly-documented models
  whose sensitive specs cannot be sourced to authoritative primary/institutional
  records — i.e. it would manufacture fabrication risk to hit a number. Per the
  honesty rules, **printer models are capped at the honest set** rather than
  padded. A small number of further well-documented models (a few of the ~44
  ceiling) may be added opportunistically, but the flagship corpus is done.

Phase 18 is therefore **closed** at the honest ceiling. The model
infrastructure (schema, validation, source policy, review machinery) now carries
forward to Phase 19.

## Next

**Phase 19 — Fax Model Encyclopedia** (the `fax-models` cluster, same `/models`
infrastructure and source policy; honest-subset discipline again). Then **Phase 20
— official-source error codes, safe maintenance, and repair guidance**
(highest-safety phase).
