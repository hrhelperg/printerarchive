# Phase 15 Wave D — Enterprise Document Capture (completes Phase 15)

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-06 · **Status:** Wave 15D shipped (13 pages). **Phase 15 complete.**

Final wave of Phase 15: the enterprise document-capture and archival layer.
~25,900 words, 165 source references (avg ~13/page). All claims source-backed; no
legal/financial/medical advice; regulations named factually only.

## Pages (13)

**Capture concepts** (`guides`): enterprise-document-capture, capture-servers,
document-indexing, capture-metadata, records-management, digital-preservation,
microfilm-digitization.

**Capture workflows** (`workflows`): batch-scanning, capture-workflow,
legal-document-archives, medical-record-archives, government-records-archives,
records-compliance.

Cluster `enterprise-capture`. Sources: ISO (15489 records management, 14721 OAIS,
19005 PDF/A), NARA, Library of Congress, NIST, PREMIS/Dublin Core, AIIM, and
vendor corporate histories (Kofax→Tungsten Automation, Captiva→OpenText) named
factually.

## Graph & taxonomy

Cross-linked to the 15A–15C scanning/OCR/preprocessing pages, PDF/A, TIFF, and
history/enterprise-document-management. App integration: PDF Editor + ZIP & RAR on
enterprise-document-capture / capture-metadata / digital-preservation /
batch-scanning. Taxonomy live counts updated: document-workflows +6,
document-preservation +2, business-workflows +2, digital-archives +3 →
**livePages 215**. Site now **215 content pages**.

## Verification results (honesty review)

Independent per-page review with heavy scrutiny on the legal/medical/government/
compliance pages. Outcome across 13 pages: **11 clean, 2 minor, 0 substantive
issues; all sources authoritative; no legal/financial/medical advice and no
fabricated compliance guarantees** — every domain page names regulations factually
and carries an explicit advice-disclaimer callout. Verified: ISO 15489/14721/19005
numbers and dates, the NARA 88 FR 28410 (2023) metadata rule, PREMIS 3.0 (2015),
SEC Rule 17a-4 (2022 amendment), and the Kofax→Tungsten Automation / Captiva→
OpenText vendor histories.

One minor fix applied before commit: **government-records-archives** dated ISO
14721:2025 to "March 2025"; normalized to **January 2025** to match the rest of
the corpus and the majority source consensus (the exact ISO month was
bot-walled/uncertain, so the safer, consistent value was used).

## Phase 15 summary (Waves A–D)

| Wave | Topic | Pages |
|---|---|--:|
| 15A | Scanning hardware, drivers, scan-to workflows | 21 |
| 15B | OCR & recognition | 19 |
| 15C | Image preprocessing | 15 |
| 15D | Enterprise capture & archives | 13 |
| **Total** | **Document-capture encyclopedia** | **68** |

~128,000 words, ~800 source references across the four waves; site grew from 147
to 215 content pages. The three previously-proposed apps (CV Resume, Invoice
Maker, Pocket Manager) were graduated to live products during this phase.

## Image opportunities (verified only)

None added. Candidates: NARA/Library of Congress digitization-program imagery,
microfilm/microfiche equipment photos (Wikimedia/museum). No AI/stock.

## QA

typecheck ✓ · lint ✓ · test:content (215) ✓ · test:unit (57) ✓ · build ✓ ·
check:routes ✓. No `localhost`.

## Next wave

**Phase 16 — Color science & print quality.** Wave 16A (color science &
management: color-management, RGB/Lab/XYZ, color-spaces, rendering-intents,
gamut-mapping, calibration, profiling, soft/hard proofing, RGB→CMYK) — research
already launched in parallel. Then 16B (screening/imaging) and 16C (print-quality
defects). ICC/CMYK/halftoning/RIP already exist (Phase 13) and are cross-linked,
not duplicated.
