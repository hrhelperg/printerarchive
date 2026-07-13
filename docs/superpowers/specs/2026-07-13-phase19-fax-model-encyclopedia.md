# Phase 19 — Fax Model Encyclopedia (Wave 1 + close)

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-13 · **Status:** Wave 1 shipped (16 pages). **Phase 19 closed at the honest fax-model set.**

## Design (taxonomy-first)

Individual fax-machine units are largely undocumented at an authoritative level,
so fabricating per-unit spec pages would violate the source policy. The honest,
documentable level for fax machines is **class / standard / manufacturer-series**,
which is exactly what the `fax-models` cluster's planned set already anticipated.
Phase 19 builds that set as `ModelEntry` pages (class pages carry no manufacturer;
class-level specs cite ITU-T standards; series pages stay at family level with no
invented per-model specs).

## Pages (16, section `models`, cluster `fax-models`)

**Classes / standards:** `group-3-fax-machines` (ITU-T T.4/T.30),
`group-4-fax-machines` (T.6/T.563), `super-g3-fax-machines` (ITU-T V.34),
`thermal-paper-fax-machines`, `plain-paper-fax-machines`, `laser-fax-machines`,
`inkjet-fax-machines`, `multifunction-fax-machines`,
`fax-copier-combination-machines`, `roll-feed-vs-cut-sheet-fax-machines`,
`desktop-vs-console-fax-machines`.
**Manufacturer series (family level):** `brother-fax-machine-series`,
`canon-faxphone-series`, `panasonic-kx-fax-series`, `sharp-ux-fax-series`,
`muratec-fax-machines`.

Taxonomy: `fax-models` activated (status planned→expand, livePages 0→16); the 16
shipped slugs removed from `planned` (20→4). Site now **356 content pages**.

## Recovery note

Wave 1 was interrupted by a monthly-spend-limit block **mid-review** (11/16 done;
the 5 manufacturer-series pages errored). The entire wave was **held uncommitted**
(atomic + fully-reviewed discipline) rather than partial-shipped. On resume the
review was completed (`resumeFromRunId` replayed the 11 cached, re-ran the 5), then
fixed and shipped.

## Verification (rigorous source + safety review)

Per-page review (16 reviewers): every ITU-T standard number/rate/date verified
against itu.int and authoritative technical sources; series pages checked for
fabricated per-model specs. **Outcome: 4 clean, 10 minor, 2 substantive, 0 safety
violations, 0 rejected (all 16 had supporting evidence; all 5 series pages held to
family level with no invented per-model specs) — all fixed before commit.**

Substantive corrections: the nonexistent "ITU-T V.34bis" label replaced with
**ITU-T V.34** (half-duplex, 33.6 kbit/s) on group-4 (and cleaned up on group-3);
and the `panasonic-kx` page's ITU-T T.4 date corrected from 1988 to **1980**.
Minor fixes: Group 3 horizontal resolution normalized to **204 dpi** (1728 pels /
215 mm) on super-g3/inkjet/multifunction; "forty seconds/page"→"under a minute";
an unsupported RTC clause dropped from a Wikipedia-attributed MMR sentence;
sole-tertiary spec rows re-cited to the primary ITU-T standard **already in the
page's sources** (T.4/T.6/T.30 — never an invented URL); split archivalTable
source strings rejoined.

## QA & checklist

typecheck ✓ · lint ✓ · test:content (356) ✓ · test:unit (57) ✓ · build ✓ ·
check:routes (376 routes) ✓ · indexnow --dry-run ✓. All fax model routes render;
no duplicate slugs; cross-links resolve; every page cites ≥1 source; no
localhost/noindex.

## Phase 19 close — honest-capacity report

The fax-model encyclopedia is honestly **complete at the class/standard/series
level**: 16 pages, 0 rejected, spanning the transmission standards (Group 3, Group
4, Super G3), the marking/media classes (thermal, plain-paper, laser, inkjet), the
device forms (MFP, fax-copier, roll-feed vs cut-sheet, desktop vs console), and
the five major manufacturer fax lines. The 4 remaining `fax-models` planned slugs
(`fax-machines-with-built-in-telephones`, `pc-fax-modems-and-boards`,
`how-to-identify-a-fax-machine-class`, and the history-section
`xerox-telecopier-early-fax-models`) are guide/component/history-shaped rather than
fax-machine classes, so they are **deferred** (better built as guides or left
unbuilt than forced into the models section). Per the honesty-first policy, Phase
19 is capped here rather than padded with undocumentable individual units.

## Next

**Phase 20 — official-source error codes, safe maintenance, and repair guidance**
(highest-safety phase): only manufacturer/official-source error meanings, no
invented codes or unsafe repair steps, clear user-safe vs technician vs
manufacturer-only separation. Then, per the standing strategy, **stop generic
encyclopedia pages** and begin the unique authority assets (compatibility database,
navigable knowledge graph, interactive timeline, standards/language explorers,
comparison engine, ecosystem maps).
