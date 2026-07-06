# Phase 15 Wave A — Scanning, Drivers & Scan-to Workflows

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-06 · **Status:** Wave 15A shipped (21 pages). First wave of the Phase 15–20 master expansion.

Wave 15A lays the scanning foundation of the document-capture encyclopedia:
scanner hardware, scanner software standards, and scan-to-destination workflows.
It executes the master plan **wave-by-wave** (this wave = 21 deep pages, within
the 25–50 cap). Every claim is source-backed; no invented dates, specs, or
unsupported "first" claims.

## 1. Method (per the master plan's per-wave process)

1. **Research/design** + taxonomy: topics grouped into scanner hardware (guides),
   scanner standards (tools), scan-to workflows (workflows).
2. **Implementation batch:** research → adversarial web fact-check → author from
   verified facts only (the Phase 11–14 pipeline), primary-source weighted.
3. **Adversarial honesty review** (§5).
4. **QA** (§7). 5. **commit + push.**

## 2. The 21 pages

~39,600 words, 257 source references (avg ~12/page).

**Scanner hardware** (`guides`, cluster `scanning-hardware`): history-of-scanning,
flatbed-scanners, sheet-fed-scanners, adf-scanners, book-scanners, drum-scanners,
film-scanners, portable-scanners, network-scanners, document-scanners,
multifunction-scanning. Plus scanner-driver-architecture (cluster `scanning-software`).

**Scanner software standards** (`tools`, cluster `scanning-standards`): TWAIN, WIA,
SANE, ICA (macOS Image Capture / ImageCaptureCore), eSCL (driverless / AirScan /
Mopria Scan), ISIS.

**Scan-to workflows** (`workflows`, cluster `scanning-workflows`): scan-to-email,
scan-to-folder, scan-to-cloud.

Each page follows the per-page structure from the brief (History · How it works ·
Architecture · pipeline · advantages · limitations · relationships to PDF /
printers / workflows / standards / operating systems · modern relevance · FAQ ·
Sources · internal links).

## 3. Clusters expanded & sources

- New content clusters: `scanning-hardware`, `scanning-software`,
  `scanning-standards`, `scanning-workflows`. All 21 pages attributed to the
  Phase 9 `scanning` taxonomy cluster (livePages now reflects them).
- Sources are primary/authoritative: the TWAIN Working Group (twain.org),
  Microsoft Learn (WIA), the SANE project, Apple developer docs (ImageCaptureCore),
  PWG/Mopria (eSCL), OpenText (ISIS), NIST (the 1957 Kirsch first-digital-image),
  the Computer History Museum, and manufacturer support pages.

## 4. App-ecosystem integration

Contextual `modernTools` only (no CTAs, no fake ratings/counts), using the four
live product IDs:

- **PDF Editor & Convert** → document-scanners, scan-to-email, scan-to-cloud,
  portable-scanners (scan → searchable PDF).
- **ZIP & RAR** → scan-to-folder, scan-to-cloud (archiving scanned documents).
- **Smart Printer** → multifunction-scanning, eSCL (MFP / driverless scanning).

Deferred: CV Resume, Invoice Maker, and Pocket Manager now have real store URLs
(provided in the master brief) but are not contextually useful for scanning
*hardware*; they will be wired into `lib/products.ts` in the OCR / document-workflow
and finance-document waves where they belong (resume PDFs, invoice OCR, receipt
scanning). The PDF Editor product also has new mobile store URLs to fold in then.

## 5. Verification results (honesty review)

An independent agent per page (with web tools) re-read each committed file and
verified load-bearing claims against authoritative sources. Outcome across 21
pages: **10 clean, 11 minor, 0 substantive issues; all sources authoritative and
real; no fabricated dates or specs.** The 1957 Kirsch/NBS first-digital-image,
TWAIN (1992 / TWAIN Direct 2019), WIA/STI, and Mopria's eSCL publication were all
confirmed against primary sources.

Four fixes applied before commit:

- **flatbed-scanners:** corrected "Mopria defines both IPP printing standards and
  eSCL" — IPP is a **PWG/IETF** standard that Mopria *builds on*; Mopria defines
  and publishes eSCL.
- **adf-scanners:** the WIA `FEEDER`/`FLATBED` source flags are **legacy (WIA 1.0 /
  XP), obsolete on Vista+**; modern WIA 2.0 selects the source via the item tree
  (duplex still via the `DUPLEX` flag). Also corrected the duplex item-category
  constants to `WIA_CATEGORY_FEEDER_FRONT`/`FEEDER_BACK`.
- **multifunction-scanning:** clarified eSCL **originated with HP/Apple** and is
  published/maintained by Mopria (not created by it).
- **sane:** the `escl` backend was authored in 2019 but **first shipped in
  sane-backends 1.0.29 (February 2020)**, not 2019.

Remaining "minor" flags were well-hedged unsupported specifics (e.g. the
Autokon 8400 date, a historical Gartner market-share figure, an ImageCaptureCore
version badge) that reviewers judged acceptable as attributed/hedged.

## 6. Image opportunities (verified only)

None added (none verified). Per the manifest workflow, verified candidates:
public-domain historical scanner photos and the 1957 NIST/Kirsch first-scanned-image
(NIST), Computer History Museum scanner artifacts, Wikimedia Commons device photos
(flatbed/ADF/drum/film scanners), and patent diagrams for scanner mechanisms. No
AI-generated images, no stock, no Pinterest.

## 7. QA

typecheck ✓ · lint ✓ · test:content (168 entries) ✓ · test:unit (57) ✓ · build ✓
· check:routes ✓. No `localhost` literals (proactively checked). Taxonomy
reconciled: `scanning` cluster credited 21 live pages (livePages 168); colliding
planned slugs promoted to live (planned sample 967). Site now **168 content pages**.

## 8. Remaining gaps & next recommended wave

The rest of Phase 15 remains:

- **Wave 15B — OCR & recognition:** history-of-ocr, optical-character-recognition,
  ICR, OMR, handwriting-recognition, OCR-engines, OCR-accuracy-factors, and the
  OCR-for-forms/archives/invoices/receipts application pages (~11). This is where
  **PDF Editor** (OCR/searchable PDF), **Invoice Maker** (invoice OCR), and
  **Pocket Manager** (receipt OCR) get wired in — so Wave 15B should also add those
  products to `lib/products.ts`.
- **Wave 15C — Image preprocessing** (deskew, despeckle, binarization,
  thresholding, page-segmentation, layout-analysis, noise-reduction) + the
  **PDF/document pipeline** (searchable-pdf-pipeline, image-vs-searchable PDF,
  PDF/A-for-scanned-documents, metadata-for-scanned-documents) (~15).
- **Wave 15D — Archival & enterprise capture** (archival-scanning, microfilm
  digitization, batch-scanning, enterprise-document-capture, document-indexing,
  classification, barcode/QR separators) (~10).

**Next recommended wave: 15B (OCR & recognition).**
