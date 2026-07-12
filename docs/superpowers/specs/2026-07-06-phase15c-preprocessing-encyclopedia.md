# Phase 15 Wave C — Image Preprocessing

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-06 · **Status:** Wave 15C shipped (15 pages).

Third wave of the master expansion: the document image-preprocessing encyclopedia
that sits between scanning (15A) and OCR (15B). ~25,500 words, 169 source
references (avg ~11/page), heavily grounded in the original method papers.

## Pages (15, all `guides`, cluster `image-preprocessing`)

image-deskew, image-despeckle, image-binarization, image-thresholding,
image-noise-reduction, contrast-enhancement, morphological-operations,
document-cleanup, compression-before-ocr, orientation-detection,
color-normalization, border-removal, blank-page-detection, barcode-recognition,
qr-code-recognition.

Each: History/origin of the method · what it solves · how it works · algorithms
and variants · pipeline position · advantages · limitations · relationships to
OCR/scanning/PDF · modern relevance · Timeline · FAQ · Sources.

Sources are primary/authoritative: original method papers (Postl 1986, Otsu 1979,
Sauvola/Niblack, Baird 1987, Hashizume/Yeh/Rosenfeld 1986), IEEE/ACM,
OpenCV/Leptonica documentation, ISO/IEC standards (18004 QR, 16022 Data Matrix,
14492 JBIG2), and ITU-T (CCITT Group 4).

## Graph & taxonomy

Dense cross-linking among preprocessing pages and to the 15B OCR pages
(ocr-preprocessing, ocr-accuracy, ocr-layout-analysis), scanning pages, and
TIFF/PDF-A. Attributed to the `ocr` taxonomy cluster → **livePages 202**. App
integration: PDF Editor + ZIP & RAR on compression-before-ocr. Site now
**202 content pages**.

## Verification results (honesty review)

Independent per-page review focused on method attributions, dates, and standard
numbers. Outcome across 15 pages: **11 clean, 4 minor, 0 substantive issues; all
sources authoritative; no fabricated benchmarks and no method misattributions.**
Verified: Postl patent 4,723,297, Otsu 1979, Sauvola & Pietikäinen 2000, Niblack
1986, JBIG2 = ITU-T T.88 / ISO 14492, QR = ISO/IEC 18004, Tesseract 5.0.0 (Nov
2021), and the documented Xerox JBIG2 substitution defect.

Four minor citation fixes applied before commit:

- **image-deskew:** corrected the Srihari & Govindaraju DOI (BF01212455).
- **compression-before-ocr:** CCITT Group 4 / ITU-T T.6 was first standardized in
  **1984** (1988 is a later edition), not "November 1988".
- **orientation-detection:** cited PDF `/Rotate` to clause 7.7.3 (page objects)
  rather than the narrower 7.7.3.4.
- **color-normalization:** corrected the ISO 12641-1:2016 title (Part 1 is
  "Colour targets…"; only Part 2 is "Advanced colour targets…").

## Image opportunities (verified only)

None added. Candidates: before/after preprocessing figures from open method
papers/textbooks where the licence permits, and public-domain scanned-document
examples. No AI/stock.

## QA

typecheck ✓ · lint ✓ · test:content (202) ✓ · test:unit (57) ✓ · build ✓ ·
check:routes ✓. No `localhost`.

## Next wave

**Wave 15D — Enterprise capture** (enterprise-document-capture, capture-servers,
document-indexing, capture-metadata, records-management, digital-preservation,
microfilm-digitization, batch-scanning, capture-workflow, legal/medical/government
archives, records-compliance) — research already launched in parallel. This
completes Phase 15; then Phase 16 (color science).
