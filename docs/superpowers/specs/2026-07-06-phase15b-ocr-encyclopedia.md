# Phase 15 Wave B — OCR & Recognition

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-06 · **Status:** Wave 15B shipped (19 pages).

Second wave of the Phase 15–20 master expansion: the OCR & recognition ecosystem,
bridging scanning (15A) to PDF, searchable documents, and the finance/document apps.
~36,700 words, 209 source references (avg ~11/page). All claims source-backed; no
fabricated accuracy statistics, no unsupported "first" claims, no legal/financial/
medical advice.

## Pages (19)

**OCR concepts** (`guides`, cluster `ocr`): history-of-ocr, optical-character-recognition,
icr, omr, handwriting-recognition, ocr-engines, ocr-accuracy, ocr-preprocessing,
ocr-layout-analysis, ocr-limitations.

**OCR applications** (`workflows`, cluster `ocr-workflows`): ocr-for-forms,
ocr-for-invoices, ocr-for-receipts, ocr-for-books, ocr-for-newspapers,
ocr-for-legal-documents, ocr-for-healthcare, ocr-for-archives, ocr-workflow.

Sources are primary/authoritative: academic/IEEE, the Tesseract project, the
Library of Congress (Chronicling America), Internet Archive / Google Books,
NIST, and standards bodies. Historical dates (Kurzweil 1976, IBM 1287, OCR-A/-B,
LeCun ~1989, Tesseract open-sourced 2005) verified; disputed "firsts" hedged.

## App-ecosystem integration (now 7 live products)

The three formerly-proposed apps are wired in this wave (contextual `modernTools`,
no CTAs): **Invoice Maker** → ocr-for-invoices; **Pocket Manager** → ocr-for-receipts;
**PDF Editor** → optical-character-recognition, ocr-workflow, ocr-for-books/forms
(scan → searchable PDF); **ZIP & RAR** → ocr-for-archives. App integration on 7 pages.

## Graph & taxonomy

Dense cross-linking among OCR pages and to 15A scanning pages, PDF/PDF-A, TIFF,
searchable-PDF workflow, and glossary/ocr. Taxonomy `ocr` cluster credited 19 live
pages → **livePages 187**. Site now **187 content pages**.

## Verification results (honesty review)

Independent per-page review with extra scrutiny on the healthcare/legal/finance
pages for compliance overreach. Outcome across 19 pages: **13 clean, 6 minor, 0
substantive issues; all sources authoritative; no fabricated accuracy stats and
no legal/financial/medical advice** (each domain page carries an explicit
advice-disclaimer callout). Anchor dates (Kurzweil 1976, IBM 1287, OCR-A/-B,
LeCun 1989, Tesseract open-sourced 2005 / v5 Nov 2021, USPS Detroit 1965)
verified against primary sources.

Three minor fixes applied before commit:

- **omr:** softened the 1962 Kern City ballot trial (per Jones, possibly
  *electrical* not optical mark-sensing, poorly documented), dropped an
  over-attributed Jones citation for the 1964 Norden-Coleman claim, and removed a
  single-source "first" superlative on the Votronic.
- **handwriting-recognition:** corrected MNIST composition to **NIST SD-1 and
  SD-3** (not SD-7), and clarified the Xerox/Palm Unistrokes $22.5M settlement was
  finalized in **2006** (the 2004 event was the patent-invalid ruling).
- **ocr-for-healthcare:** de-conflated a Critical Care 2025 study — the
  98.5%/96.9% figures belong to the independent validation (8 untrained personnel,
  1,018 data points), not the 103-photo evaluation phase.

## Image opportunities (verified only)

None added. Candidates: OCR-A/OCR-B specimen glyphs (public standards), the
Kurzweil Reading Machine and IBM 1287 (Computer History Museum), Chronicling
America newspaper scans (Library of Congress, public domain). No AI/stock.

## QA

typecheck ✓ · lint ✓ · test:content (187) ✓ · test:unit (57) ✓ · build ✓ ·
check:routes ✓. No `localhost`.

## Next wave

**Wave 15C — Image preprocessing** (deskew, despeckle, binarization, thresholding,
noise reduction, contrast enhancement, morphology, document cleanup,
compression-before-OCR, orientation detection, color normalization, border removal,
blank-page detection, barcode/QR recognition) — research already launched in
parallel. Then Wave 15D (enterprise capture), then Phase 16 (color science).
