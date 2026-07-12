# Phase 17 Wave C — Media & Paper (completes Phase 17)

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-08 · **Status:** Wave 17C shipped (12 pages). **Phase 17 complete.**

Final wave of Phase 17: the print-media/paper layer. ~22,000 words. Authored as
`guides/` references on paper as a substrate — properties, types, and the
standards that measure them — not a buying guide (no brand product lines, prices,
or per-grade numeric guarantees).

## Pages (12, cluster `paper-technologies`)

paper-weight-and-caliper, paper-grain, coated-vs-uncoated-paper, paper-finish,
paper-brightness-and-whiteness, paper-opacity, inkjet-photo-paper,
cardstock-and-cover-stock, label-and-tag-media, synthetic-and-specialty-media,
paper-sizes, paper-grades-and-standards.

Sources: ISO (216 sizes, 536 grammage, 534 caliper, 2470 brightness, 2471
opacity, 8254 gloss, 11475/11476 whiteness, 18937 light stability), TAPPI methods,
and paper-industry technical references.

## Graph & taxonomy

Cross-linked to the Phase-16 defect pages (paper-curl, show-through, dot-gain),
Phase-17A/B components & consumables (paper-feed-rollers, thermal-transfer-ribbon,
pigment/dye inks), and process pages. Taxonomy: activated the `paper-technologies`
cluster (status planned→expand, livePages 0→12) and removed two planned-slug
collisions (coated-vs-uncoated-paper, paper-brightness-and-whiteness) now that
they are published. Site now **300 content pages, 47 clusters**.

## Verification results (honesty + safety review)

Adversarial per-page review (12 reviewers, two-pass scope + fact).
**Outcome: 0 scope/safety violations, 3 substantive, 8 minor, 1 clean
(`label-and-tag-media`) — all fixed before commit.**

The three substantive corrections:
- `paper-finish`: ISO 216 defines the A and B series; the C (envelope) series was
  historically ISO 269 (withdrawn 2009) and is now aligned with the ISO 216
  family — reworded so ISO 216 is no longer said to define the C series.
- `paper-opacity`: separated print-through (an ink-penetration / strike-through
  effect) from show-through (the opacity / light-transmission effect) — the page
  had attributed print-through to insufficient opacity.
- `cardstock-and-cover-stock`: corrected the Tag basic size to 24 × 36 in (it had
  been given Bristol's 22.5 × 28.5 in), and separated Index / Bristol / Tag.

Minor fixes: M weight vs the 500-sheet ream; grain-direction notation rewritten to
survive plain text (no reliance on absent bold/underline); ISO 2470-1 vs -2 part
precision; brightness-vs-whiteness citation scoping; reference-scope callouts
reworded to match pages that assign no per-grade numbers. Unverifiable ISO/TAPPI
catalog sources were skipped (iso.org bot-walled, TAPPI gated) — never invented;
the standards remain correctly named in-body.

## QA

typecheck ✓ · lint ✓ · test:content (300) ✓ · test:unit (57) ✓ · build ✓ ·
check:routes ✓ · indexnow --dry-run ✓. No `localhost`.

## Phase 17 summary (Waves A–C)

| Wave | Topic | Pages |
|---|---|--:|
| 17A | Printer components | 18 |
| 17B | Consumables & ink/toner types | 18 |
| 17C | Media & paper | 12 |
| **Total** | **Components & consumables encyclopedia** | **48** |

~91,000 words; site grew from 252 to **300 content pages**. Activated four
previously-planned clusters (printer-components content under
printer-technologies, ink-technologies, toner-technologies, paper-technologies).
Every wave shipped with **zero safety/scope violations** and zero substantive
factual errors surviving review. 17A additionally recovered cleanly from a
mid-phase spend-limit interruption.

## Next phase

**Phase 18 — Printer models.** Per the brief, this starts NOT with model pages but
with the model **taxonomy + registry + a validation script + a source policy**
(authoritative/official sources only; no invented specs, dates, or availability),
committed and reviewed first. Only then do controlled model waves (50–100 pages
each) proceed.
