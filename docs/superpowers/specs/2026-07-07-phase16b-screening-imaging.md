# Phase 16 Wave B — Screening & Print Imaging

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-07 · **Status:** Wave 16B shipped (8 pages).

Second wave of Phase 16: the screening / halftone-imaging layer that sits between
color separation and marking. ~15,500 words, ~40 source references. Authored as
`tools/` pages (matching the existing `halftoning` / `raster-image-processor` /
`image-thresholding` references) and deliberately scoped to go DEEPER than the
`halftoning` overview on each sub-topic, cross-linking it rather than duplicating.

## Pages (8, all `tools`, cluster `print-imaging`)

`amplitude-modulation-screening`, `frequency-modulation-screening`,
`error-diffusion`, `ordered-dithering`, `screen-angles`, `moire-patterns`,
`dot-gain`, `black-generation` (GCR/UCR/UCA).

Sources: ISO 12647-2:2013 (rulings, tone-value-increase, screen angles), ISO
32000-2 / PDF Association (PostScript/PDF halftone types), classic dithering
literature named factually (Floyd–Steinberg 1976, Jarvis–Judice–Ninke, Bayer,
Ulichney blue-noise), and PrintWiki/Wikipedia as trade/tertiary references.

## Graph & taxonomy

Cross-linked internally (AM↔FM↔screen-angles↔moire; error-diffusion↔ordered-
dithering) and into `halftoning`, `image-thresholding`, `cmyk`, and the Phase-16A
color pages (`rgb-to-cmyk-conversion`, `printer-profiling`, `gamut-mapping`).
Knowledge-graph taxonomy regenerated; the 8 slugs were not previously planned, so
livePages were attributed to the `printer-technologies` cluster (29 → 37) as the
marking/imaging-technology home. Taxonomy now **livePages 237, 47 clusters**.
Site now **237 content pages**.

## Verification results (honesty review)

Independent adversarial per-page fact-check (8 reviewers, one per page; extra
scrutiny on the drafting-flagged `frequency-modulation-screening`, `screen-angles`,
`moire-patterns`, `black-generation` and the thin-source `dot-gain`,
`ordered-dithering`). Outcome: **1 clean (`ordered-dithering`), 7 minor, 0
substantive, 0 fabrications.** Every dithering kernel (Floyd–Steinberg 7/3/5/1÷16,
JJN, Stucki, Sierra, Burkes), the conventional CMYK screen angles (presented as
convention, not universal law), the ISO 12647-2 ruling ranges / 150 tone steps /
2.54 factor, and the GCR/UCR/UCA distinctions were verified correct.

**Two structural (synth) bugs fixed before commit:**
- `error-diffusion`: the Floyd–Steinberg kernel had been shredded by the markdown→
  block converter (a code fence split into a lone-backtick paragraph + stray list);
  replaced with the correct prose statement of the kernel.
- All tool `purpose` fields were truncated mid-sentence by the generator's
  first-sentence helper; rewritten as complete statements on all 8 pages.

**Citation/precision minors applied:** ISO 12647-2 source citation corrected from
the 2004 (ed-2) URL to the 2013 (ed-3) edition the figures come from
(`amplitude-modulation-screening`, `screen-angles`); "inkjet" removed from AM's
use-list (consumer inkjet is predominantly FM/error-diffusion); mechanical-vs-
optical dot-gain distinction sharpened (`frequency-modulation-screening`); SID
paper title spelling normalized to "An Adaptive Algorithm for Spatial Gray Scale"
(`error-diffusion`); the explicit "to minimize moiré" rationale re-attributed to
ISO's screen-frequency note rather than the angle clause, and an uncited "research
on halftone reflectance" claim removed (`screen-angles`); aliasing reworded to the
Nyquist rate and a vague "prepress references" attribution softened
(`moire-patterns`); an unsourced "G7" specific softened to gray-balance
process-control generally (`dot-gain`); reference-scope boilerplate corrected on a
figure/date-free page (`black-generation`).

## QA

typecheck ✓ · lint ✓ · test:content (237) ✓ · test:unit (57, incl. 9 taxonomy) ✓ ·
build (256 static pages) ✓ · check:routes (256 routes) ✓. No `localhost`.

## Next wave

**Phase 16C — Print-quality & defects (15 pages, research script staged):**
`print-banding`, `ghosting`, `print-registration`, `ink-bleeding`, `print-mottle`,
`streaking`, `toner-adhesion`, `nozzle-clogging`, `paper-curl`, `show-through`,
`gloss-differential`, `color-cast`, `background-fogging`, `print-quality-assessment`,
`smearing-and-set-off`. Concept-level defect phenomena (mechanism → causes →
diagnosis → general remediation principles), distinct from the consumer how-to
troubleshooting pages, with strong safety guards (no invented error codes, part
numbers, temperatures, voltages, or repair procedures — those remain Phase 20).
