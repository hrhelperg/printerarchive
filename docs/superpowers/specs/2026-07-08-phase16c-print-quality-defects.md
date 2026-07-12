# Phase 16 Wave C — Print-Quality & Defects (completes Phase 16)

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-08 · **Status:** Wave 16C shipped (15 pages). **Phase 16 complete.**

Final wave of Phase 16: the print-quality / defect layer. ~33,000 words, ~130
source references. Concept-level defect phenomena (mechanism → causes → diagnosis
→ general remediation principles), deliberately distinct from the consumer
step-by-step troubleshooting how-tos, and written under strong safety guards.

## Pages (15, all `guides`, cluster `print-quality`)

`print-banding`, `ghosting`, `print-registration`, `ink-bleeding`, `print-mottle`,
`streaking`, `toner-adhesion`, `nozzle-clogging`, `paper-curl`, `show-through`,
`gloss-differential`, `color-cast`, `background-fogging`, `print-quality-assessment`,
`smearing-and-set-off`.

Sources: the ISO/IEC image-quality-attribute standards (13660:2001, 24790:2017
+Amd 1:2022), the ISO 12647 process-control series, peer-reviewed imaging-science
literature (IEEE Trans. Image Processing on EP print artifacts; SPIE; J. Imaging
Sci. Technol.; KTH optical-homogeneity work; Langmuir on inkjet air-clogging),
paper-science references, and manufacturer/industry technical guidance named
factually.

## Graph & taxonomy

Cross-linked among the defect pages and into the Phase-16A/16B color and screening
pages (`dot-gain`, `amplitude-modulation-screening`, `screen-angles`,
`color-management`, `printer-profiling`, `color-calibration`) plus the existing
`laser-printing` / `inkjet-printing` process pages. Knowledge-graph taxonomy
regenerated; the 15 slugs activated the previously-planned `printer-maintenance`
cluster (0 → 15 livePages) as the defect/quality home, keeping `troubleshooting`
as pure consumer how-to. Taxonomy now **livePages 252, 47 clusters**. Site now
**252 content pages**.

## Verification results (honesty review + safety audit)

Independent adversarial per-page review (15 reviewers, one per page) with a
mandatory two-pass structure: a **safety/scope audit** (flag any invented error
code, part number, component temperature/voltage, maintenance interval, or
step-by-step repair/disassembly instruction) plus a **factual pass**. Extra
scrutiny on the drafting-flagged `nozzle-clogging` (high) and the medium-risk
`ghosting`, `streaking`, `paper-curl`, `background-fogging`, `print-registration`.

**Outcome: 0 safety/scope violations across all 15 pages** — the guards held
completely; every hardware fault is deferred to qualified servicing and
remediation stays at general-practice level, reinforced by an explicit
"Reference scope" (not-a-service-manual) callout on every page.

Factual outcome: 8 substantive + 7 minor issues, **0 fabrications of the
prohibited kind** — all were correctable factual/precision errors. **All fixed
before commit.** The substantive corrections:

- `print-banding`: reclassified mottle as a **macro**-uniformity (aperiodic)
  attribute alongside banding (only graininess is micro/high-frequency), per the
  cited ISO/IEC 24790 + INCITS W1.1 tradition; removed an unverifiable
  "0.25–5 cycles/inch" figure and corrected the contrast-sensitivity claim to
  band-pass.
- `print-registration`: corrected the reversed **choke** direction (a choke
  overlaps the lighter background inward onto the darker object); stopped
  attributing register tolerances to ISO 12647 (register is set by the
  production agreement; ISO 12647 governs colorimetry/TVI/image-size).
- `print-mottle`: corrected the mottle structure-size threshold to match the
  0.4 cycles/mm boundary (~1.3 mm, not 250 µm).
- `nozzle-clogging`: the piezo air-clogging study used polystyrene model
  particles, not pigment — corrected the attribution.
- `paper-curl`: corrected four-corner "dish" curl as combination MD+CD curl, not
  diagonal/twist curl.
- `show-through`: corrected the backing physics — a **dark** backing absorbs
  transmitted light and masks show-through; a light backing accentuates it.
- `gloss-differential`: corrected a misattributed paper's authorship
  (Hébert, Mallet et al., not "Ferrero, Elías").
- `color-cast`: corrected the impure-ink mechanism — cyan (weakest/most impure)
  and magenta carry the significant unwanted absorption, not "magenta and
  yellow"; equal CMY prints warm/brownish, so neutral needs more cyan.

Minor fixes: ISO/IEC title precision, standard citations added where a standard
was named in prose, terminology corrections (COT definition, hygroexpansion,
UCR/GCR, "bricking" labelled informal), and the pitch=circumference law softened
for speed-ratioed rollers.

## QA

typecheck ✓ · lint ✓ · test:content (252) ✓ · test:unit (57, incl. 9 taxonomy) ✓ ·
build (271 routes) ✓ · check:routes ✓. No `localhost`.

## Phase 16 summary (Waves A–C)

| Wave | Topic | Pages |
|---|---|--:|
| 16A | Color science & management | 14 |
| 16B | Screening & print imaging | 8 |
| 16C | Print-quality & defects | 15 |
| **Total** | **Color & print-quality encyclopedia** | **37** |

~64,000 words across the three waves; site grew from 215 to **252 content
pages**. Every wave passed adversarial honesty review with **zero fabrications and
zero safety/scope violations** surviving to commit.

## Next phase

**Phase 17 — Components & consumables.** Largely net-new (existing pages cover
printing *processes*, not parts). Planned as sub-waves: 17A electrophotographic /
inkjet / thermal / paper-path **components** (~18), 17B **consumables** + ink/toner
types (~18), 17C **media / paper** (~12). Activates the planned `ink-technologies`,
`toner-technologies`, and `paper-technologies` clusters. Honesty guard: describe
function and general types only — no invented yields, part numbers, compatibility
lists, or specifications.
