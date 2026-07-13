# Phase 20 — Error Codes, Maintenance & Safety (highest-safety) + Program Close

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-13 · **Status:** Phase 20 shipped (13 pages). **Phase 15→20 master content program complete.**

## Design (honesty + safety first)

Fabricating brand/model-specific error-code meanings or repair/disassembly
procedures is forbidden and unsafe, so Phase 20 is a deliberately **focused set of
concept / category / safety pages**, not an invented error-code database. Error
codes are explained at the SYSTEM level (what they are, why they are brand-specific,
how to look up the official meaning); every page keeps a firm user-safe vs
technician vs manufacturer-only boundary and defers all internal service to
qualified personnel. Quality over count.

## Pages (13, `guides`, cluster `printer-maintenance`)

understanding-printer-error-codes, printer-error-code-categories,
printer-safety-hazards, toner-safety-and-handling, when-to-call-a-printer-technician,
printer-preventive-maintenance, printer-service-documentation, safe-paper-jam-clearing,
printer-maintenance-messages, laser-printer-safety, inkjet-printhead-maintenance,
printer-self-test-and-diagnostics, printer-emissions-and-ozone-safety.

Sources: OSHA (ozone PEL 0.1 ppm; carbon-black copier interpretation), NIOSH
(hierarchy of controls), IEC 62368-1 / 60825-1, FDA 21 CFR 1040.10, manufacturer
SDS and support pages (Xerox, HP). Taxonomy: `printer-maintenance` livePages
15 → 28. Site now **369 content pages**.

## Verification (adversarial SAFETY + source review)

Per-page dual safety-audit + fact review (13 reviewers). **Outcome: 2 clean, 9
minor, 2 substantive (both safety-context) — all fixed before commit.** No
fabricated error codes, no repair/disassembly procedures, no unsafe steps
survived. Substantive safety fixes:
- `printer-service-documentation` (and the toner-spill guidance across several
  pages): the conservative method is now the default — wipe with a damp cloth /
  sweep gently to avoid a dust cloud; vacuuming is restricted to a vacuum
  specifically rated for toner / combustible dust (non-sparking,
  dust-explosion-proof, HEPA), and ordinary household vacuums are explicitly
  excluded (fire/ignition risk), with a WebFetch-verified Xerox spill-cleanup
  citation.
- `safe-paper-jam-clearing`: an ultrafine-particle emissions claim mistakenly
  cited to a NIOSH study of **3-D (FDM) printers** was corrected — replaced with a
  genuine laser-printer emission study / removed (0 references remain).

Minor fixes: IEC 62368-1 predecessors corrected (replaced IEC 60950-1 **and**
60065); OSHA carbon-black precision; ACGIH PNOR figures; EPA ozone-symptom
wording; source-URL corrections; HEPA tied to toner-rated units. Sources were
added only when WebFetch-verified; nothing invented. A prompt-injection embedded
in one page's text was correctly resisted by the reviewer (no file tampering).

## QA

typecheck ✓ · lint ✓ · test:content (369) ✓ · test:unit (57) ✓ · build ✓ ·
check:routes (389 routes) ✓ · indexnow --dry-run ✓. No `localhost`/`noindex`; no
fabricated codes; no unsafe procedures.

## Phase 15 → 20 master program — final summary

| Phase | Topic | Pages |
|---|---|--:|
| 15 A–D | Document capture (scanning/OCR/preprocessing/enterprise) | 68 |
| 16 A–C | Colour science / screening / print-quality defects | 37 |
| 17 A–C | Components / consumables / media | 48 |
| 18 (0–2) | Printer models (`/models` section) | 40 |
| 19 | Fax model encyclopedia | 16 |
| 20 | Error codes / maintenance / safety | 13 |

Site grew from ~147 to **369 content pages** across the program. Every wave passed
independent adversarial honesty/safety review before commit; **zero fabrications
and zero safety/scope violations survived to commit** across the entire program.
Two model phases (18, 19) were explicitly **capped at their honest ceilings** (0
pages padded to a quota; 0 candidates rejected for want of evidence in the final
model waves). A new source-policed `/models` section, its `ModelEntry` schema, and
the reusable research→fact-check→author→adversarial-review→fix machinery were built
and proven, including full recovery from four monthly-spend-limit interruptions.
Never merged to main; all on `feat/foundation-architecture`.

## Next — strategic pivot (per standing direction)

Generic encyclopedia-page creation now **pauses**. The program shifts to building
**unique authority assets** (durable interactive references, not articles):
Printer Compatibility Database, a navigable Printer Knowledge Graph (from the
existing `lib/knowledge-graph` taxonomy), Interactive Printer Timeline, Manufacturer
relationship graph, Printing standards explorer, Technology comparison engine,
Printer-language explorer, Ecosystem maps, Consumable-compatibility datasets,
Enterprise-architecture pages, and historical visual timelines — alongside ongoing
verified historical imagery and ever-denser internal linking.
