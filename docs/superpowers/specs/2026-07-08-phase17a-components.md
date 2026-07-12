# Phase 17 Wave A — Printer Components

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-08 · **Status:** Wave 17A shipped (18 pages).

First wave of Phase 17 (Components & consumables): the physical-hardware layer.
~35,700 words. Net-new territory — existing pages covered printing *processes*
and *defects*, not the parts themselves. Authored as `guides/` component
references (cluster `printer-components`) describing what each part is, where it
sits, how it works in principle, its variants, and its role in print quality —
deliberately NOT a service manual.

## Pages (18)

**Electrophotographic:** photoconductor-drum, charge-roller, laser-scanner-unit,
developer-unit, transfer-unit, fuser-unit, drum-cleaning-and-waste-toner.
**Inkjet:** inkjet-printhead, ink-delivery-system, printhead-service-station,
carriage-and-encoder.
**Thermal/impact:** thermal-printhead, platen-roller.
**Paper path & general:** paper-feed-rollers, registration-assembly,
duplexing-unit, output-and-finishing, printer-control-electronics.

Sources: manufacturer service/technical documentation (HP, Epson, Xerox),
standards bodies, USPTO patents (named factually), and engineering references
(Pai & Springett *Physics of electrophotography*, Schein *Electrophotography and
Development Physics*, Kipphan *Handbook of Print Media*).

## Recovery note

17A was interrupted by a monthly-spend-limit block after research completed. On
resume: the 17 already-authored pages were recovered from the workflow journal
(`wf_79378a9f-135`); the one page whose author never succeeded
(`ink-delivery-system`) was freshly re-researched and authored; and all 18 were
then put through the mandatory review with no special trust given to the
recovered drafts.

## Graph & taxonomy

Cross-linked among components and into the process pages (laser-printing, the
inkjet variants) and the Phase-16 defect pages (print-banding, nozzle-clogging,
toner-adhesion, streaking, background-fogging, paper-curl, print-registration).
Taxonomy reconciled: two planned glossary stubs (`developer-unit`, `fuser-unit`)
were removed because these slugs are now published pages, and the
`printer-technologies` cluster's live count was raised 37 → 55 (capacity 55–70).
Site now **270 content pages, 47 clusters**.

## Verification results (honesty + safety review)

Independent adversarial per-page review (18 reviewers, two-pass: scope/safety
audit for invented specs/lifespans/part-numbers/repair-steps + factual pass).
**Outcome: 0 safety/scope violations, 0 substantive factual errors, 2 clean
(`charge-roller`, `thermal-printhead`), 16 minor — all fixed before commit.**

The scope/safety discipline held completely: across all 18 pages there are no
invented dimensions, temperatures, voltages, speeds, resolutions, lifespans,
page-yields, part numbers, model-specific compatibility claims, prices, or
disassembly/repair procedures; work beyond general cleaning is routed to a
qualified technician, with high-voltage/heat/laser hazards noted generally.

Minor fixes applied (one agent per page): unverifiable verbatim quotes from HP
service manuals and patents were **paraphrased** (facts web-confirmed first, no
source invented); over-generalizations softened (e.g. developer-unit's
"opposite charges attract" recast as the bias-field mechanism; laser-scanner-unit
scoped to discharged-area vs charged-area development; ink-delivery-system's
"intrinsic to all inkjet" narrowed to aqueous/solvent inks; inkjet-printhead
"single largest determinant" de-superlativized); and terminology corrected
(OPC as the dominant-coating nickname not a universal synonym; "development zone"
vs contact "nip"; "scorotron" dropped from the transfer-corona parenthetical).

## QA

typecheck ✓ · lint ✓ · test:content (270) ✓ · test:unit (57, incl. 9 taxonomy) ✓ ·
build ✓ · check:routes ✓ · indexnow --dry-run ✓ (valid submission mechanics).
No `localhost`.

## Next wave

**Phase 17B — Consumables & ink/toner types (~18):** toner cartridge / imaging
unit, ink cartridge / tank (CISS), thermal-transfer & dot-matrix ribbons,
maintenance/waste kits; and colorant types — pigment vs dye inks, solvent/latex/
UV-curable/sublimation inks, conventional vs chemical/polymerized toner, MICR
toner. Activates the `ink-technologies` and `toner-technologies` clusters. Then
17C media/paper. Same honesty guard: types and function only, no invented yields,
part numbers, or compatibility.
