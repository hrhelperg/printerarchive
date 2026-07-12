# Phase 16 Wave A — Color Science & Color Management

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-07 · **Status:** Wave 16A shipped (14 pages).

First wave of Phase 16 (color science & print quality): the device-independent
color foundation and the ICC color-management chain. ~23,500 words, ~155 source
references (avg ~11/page). All claims source-backed; no invented specs/dates/
formulae; conventional-but-not-universal values (screen angles, defaults) are
labelled as such.

## Pages (14, all `guides`, cluster `color-management`)

**Color models & reference spaces:** `rgb-color-model`, `lab-color`, `xyz-color`,
`color-spaces`, `device-independent-color`.

**Color-management chain:** `color-management`, `rendering-intents`, `gamut-mapping`,
`color-calibration`, `printer-profiling`, `soft-proofing`, `hard-proofing`,
`monitor-to-printer-matching`, `rgb-to-cmyk-conversion`.

Sources: ICC (color.org, ICC.1:2022 spec), ISO (15076-1, 11664-4, 12647-2,
13655, 3664, 12640-3, 14861), IEC 61966-2-1, CIE (1931/1964 observers, CIE 116,
S 014), W3C sRGB, and named manufacturer/standards references. Existing Phase-13
tool pages (ICC profiles, CMYK, halftoning, RIP, image-thresholding) are
cross-linked, not duplicated.

## Graph & taxonomy

Cross-linked internally (RGB↔color-spaces↔XYZ↔Lab↔device-independent-color) and
into the ICC/CMYK/halftoning tool pages. `entry.cluster` = `color-management`
(free-form descriptive metadata; no runtime coupling). Knowledge-graph taxonomy
regenerated: the 14 published slugs auto-dropped from `planned`; livePages
attributed to the `printing-standards` cluster (12 → 26) as the nearest existing
home for color/ICC standards. A dedicated color cluster is deferred to a taxonomy
review once 16A+16B+16C reveal the full color/quality domain size. Taxonomy now
**livePages 229, 47 clusters**. Site now **229 content pages**.

## Verification results (honesty review)

Independent adversarial per-page fact-check (14 reviewers, one per page, each
prompted to *refute*; extra scrutiny on `color-spaces`, self-flagged high-risk by
its drafting fact-checker). Outcome: **2 clean, 10 minor, 2 substantive; 0
fabricated claims.** Every hard fact verified against authoritative sources —
including ICC founded 1993 by eight vendors, the ICC.1 spec lineage (3.0 1994 →
v4.4.0.0 / ICC.1:2022), ISO 15076-1 (2005 first ed., 2010 revision), PCS = CIEXYZ/
CIELAB on the CIE 1931 observer at D50 per ISO 13655, the four rendering intents,
sRGB = IEC 61966-2-1:1999 (Rec.709 primaries, D65), and the sRGB/Adobe RGB
primaries and chromaticities.

**Two substantive fixes applied before commit:**
- `color-spaces`: DCI-P3 was dated **2010 → corrected to 2005** (Digital Cinema
  Initiatives, LLC, Digital Cinema System Specification v1.0), in prose + timeline.
- `xyz-color`: removed an unsupported "**ISO 3664 condition P2**" label on the ICC
  PCS *measurement* condition (P2 is the 500-lux practical-appraisal *viewing*
  condition, not the measurement geometry); kept the correct D50 + 1931 2° observer
  per ISO 13655, viewing under ISO 3664 graphic-arts conditions.

**Minor fixes applied (citation/notation/superlative precision):** ICC rationale
quote → paraphrase (`color-management`); "mid-1920s" → "late 1920s" Wright/Guild +
VGA "mainstream" softened to analog-RGB/color-depth building on CGA 1981/EGA 1984
(`rgb-color-model`); CIE94 noted as published CIE 116-1995, `CIE S 014-4/E:2007`
(`lab-color`); rendering-intent fallback marked implementation-dependent
(`rendering-intents`); dropped unverified "(Annex B)" on ISO 12640-3
(`gamut-mapping`); XYZ primaries corrected to imaginary/non-physical with
non-negativity attributed to real colors' tristimulus values
(`device-independent-color`); ISO 3664/12647-2 official titles normalized
(`color-calibration`); Photoshop dual-gamut-warning corrected, "most precise"
softened, P2 comparison attribution dropped (`soft-proofing`); "most common cause"
softened + ISO 15076-1:2005 de-attributed from the About-ICC page
(`monitor-to-printer-matching`). `L*a*b*` notation normalized across `color-spaces`
and `xyz-color`. `printer-profiling` and `hard-proofing` clean, no changes.

## Image opportunities (verified only)

None added. Candidates for later (public-domain/CC only): the CIE 1931
chromaticity diagram and spectral locus, gamut-comparison plots, and the ICC
color-management pipeline diagram. No AI/stock.

## QA

typecheck ✓ · lint ✓ · test:content (229) ✓ · test:unit (57, incl. 9 taxonomy) ✓ ·
build (256 static pages) ✓ · check:routes (248 routes, 9470 nav links, 1061 image
refs) ✓. No `localhost`.

## Next wave

**Phase 16B — Screening & print imaging (8 pages):** `amplitude-modulation-screening`,
`frequency-modulation-screening`, `error-diffusion`, `ordered-dithering`,
`screen-angles`, `moire-patterns`, `dot-gain`, `black-generation`. Research +
fact-check completed (24/24 agents); scoped to go deeper than the existing
`halftoning`/`raster-image-processor`/`image-thresholding` pages, not duplicate
them. Then 16C (print-quality defects).
