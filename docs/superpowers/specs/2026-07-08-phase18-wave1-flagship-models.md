# Phase 18 Wave 1 — Flagship Printer Models

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-08 · **Status:** Wave 1 shipped (21 model pages).

First controlled model wave on the `/models` infrastructure: 21 historically
significant, well-documented printer/print-engine models, each built strictly
under the model source policy (omit-don't-invent, cite every spec, official
sources first).

## Pages (21, section `models`, cluster `printer-models`)

Laser/EP: `apple-laserwriter`, `canon-lbp-cx-print-engine`, `ibm-3800`,
`xerox-9700`, `xerox-docutech`, `ibm-1403`, `hp-laserjet-4`.
Impact/dot-matrix: `diablo-630`, `teletype-model-33`, `centronics-101`,
`epson-mx-80`, `epson-fx-80`, `okidata-microline`, `star-micronics-nl-10`,
`apple-imagewriter`.
Inkjet/solid-ink/plotter: `hp-thinkjet`, `hp-deskjet-original`,
`canon-bubble-jet-bj`, `tektronix-phaser-solid-ink`, `hp-officejet-original`,
`hp-7475a-plotter`.

Each page renders its source-cited specs as an `archivalTable` and carries a
not-a-buying-guide reference-scope callout. Taxonomy: all 21 planned slugs were
drained from the `printer-models` cluster (`planned[]` → [], livePages → 22).
Site now **322 content pages**.

## Recovery note

This wave was researched, synthesized, and locally green before a monthly
spend-limit block halted it at the review gate; it was **not** committed. On
resume the preserved working tree was reviewed as-is (no regeneration), reviewed,
corrected, and only then shipped.

## Verification (rigorous adversarial source + spec + safety review)

Independent per-page review (21 reviewers) verifying every model-specific claim
across release period, print technology, speed, resolution, memory, interfaces,
print languages, OS/driver support, paper sizes, duplex, consumables,
dimensions/weight, and current status — under a strict source hierarchy (official
manuals/support/archived docs/FCC/museums first; reseller & spec-aggregators
secondary only, never sole source for a sensitive spec) and a no-inference rule
(no deriving a spec from a related model, family name, or retailer listing). Each
flagged claim was classified verified-model-fact / family-level-context /
unsupported-remove / misattributed / imprecise.

**Outcome: 1 clean, 14 minor, 6 substantive, 1 safety violation, 25 unsourced-spec
notes — all corrected before commit.** Notable corrections:
- **Misattributions** removed/re-cited: IBM 3800 "first shipped 1976" and IBM 1403
  column/hammer-count were credited to pages that don't state them (re-cited to
  Wikipedia / IBM Journal of R&D, WebFetch-verified, or dropped); Museums Victoria
  was dropped from the Apple LaserWriter engine and price specs it never states.
- **Family-as-model** reframed: the Canon CX was scoped to the original LBP-8/CX
  (later LBP-8 II/III used the LBP-SX engine); DocuTech network-receipt reframed as
  a later-model capability.
- **Unsupported claim** removed: "the first HP LaserJet emulated the Diablo 630."
- **Safety**: the Star Micronics NL-10 page cited a Star **advertisement** as a
  "contemporary review" — the review/praise framing and the ad source were removed.
- Sole-tertiary sensitive specs were re-cited to verified primary sources where a
  URL could be confirmed; where the authoritative page was JS-rendered/unreachable
  (e.g. Apple's spec page) the fix was recorded as source-skipped rather than
  citing an unverified URL — no source was ever invented.

## QA & checklist

typecheck ✓ · lint ✓ · test:content (322) ✓ · test:unit (57) ✓ · build ✓ ·
check:routes (342 routes) ✓ · indexnow --dry-run ✓. All 22 model routes render (21
+ pilot); no duplicate slugs; family/manufacturer cross-links resolve; every model
cites ≥1 source; no app integrations on model pages; no localhost/noindex.

## Next

Further Phase 18 model waves (additional honestly-documented models), then Phase
19 (fax models, `fax-models` cluster, same infrastructure), then Phase 20
(official-source error codes + safe maintenance/repair).
