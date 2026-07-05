# Phase 12 — Printing Technology Encyclopedia

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-05 · **Status:** 18 flagship technology pages shipped.

Phase 12 builds the core of a printing-technology encyclopedia: complete
historical + technical reference pages for the fundamental printing *mechanisms*.
These are not glossary definitions — each is a full reference with history, an
account of how the technology works, its evolution, qualitative advantages and
disadvantages, modern use, and its relationships to other technologies and to
manufacturers. Every historical and technical claim is drawn from authoritative
public sources and was independently fact-checked; no dates, inventors, or
performance comparisons were invented.

## 1. Method — how honesty was enforced

Same source-grounded pipeline as the Phase 11 manufacturer encyclopedia:

1. **Research** — a web-research agent per technology gathered documented facts
   from authoritative sources (Computer History Museum, IEEE, museum
   collections, historic manuals, standards bodies, company heritage pages,
   Wikipedia's cited primary sources) into a sourced dossier.
2. **Adversarial fact-check** — an independent agent re-verified each claim on
   the web, flagged unsupported/too-precise claims and any invented
   date/inventor, and called out fabricated performance/benchmark comparisons.
3. **Author from verified facts only** — the page was written excluding
   everything flagged, with qualitative (not invented-number) advantages and
   disadvantages and a real `sources[]` bibliography.
4. **Deterministic scan** — the committed pages were grepped for prices,
   revenue/market-size figures, and superlative/comparison language.
5. **Independent honesty review** — a final adversarial agent per page re-read
   the committed file and spot-verified its key claims.

Each page carries a **Reference scope** callout: figures and dates are drawn from
documented sources; no current pricing, marketing claims, or product
recommendations. Citations render via the existing `SourceTransparency` block.

## 2. The 18 technology pages

Placed in the `guides` section (its purpose is "how printing technologies work")
as `GuideEntry` pages tagged with the `printing-technology` cluster, so they
group in the internal graph. ~26,000 words, 139 source references (avg ~8/page).

| Technology | Page | ~Words | Sources | Related | FAQs |
|---|---|--:|--:|--:|--:|
| Laser printing | /guides/laser-printing | ~1600 | 10 | 6 | 5 |
| Inkjet printing | /guides/inkjet-printing | ~1600 | 9 | 6 | 5 |
| Electrophotography | /guides/electrophotography | ~1500 | 10 | 6 | 4 |
| Xerography | /guides/xerography | ~1500 | 11 | 6 | 5 |
| Dot matrix printing | /guides/dot-matrix-printing | ~1170 | 5 | 6 | 5 |
| Daisy wheel printing | /guides/daisy-wheel-printing | ~1400 | 5 | 6 | 5 |
| Line printing | /guides/line-printing | ~1390 | 6 | 6 | 4 |
| Impact printing | /guides/impact-printing | ~1200 | 7 | 6 | 5 |
| Thermal transfer printing | /guides/thermal-transfer-printing | ~1130 | 5 | 6 | 5 |
| Direct thermal printing | /guides/direct-thermal-printing | ~1480 | 7 | 6 | 5 |
| LED printing | /guides/led-printing | ~1820 | 4 | 6 | 4 |
| Solid ink printing | /guides/solid-ink-printing | ~1350 | 8 | 6 | 4 |
| Dye-sublimation printing | /guides/dye-sublimation-printing | ~1440 | 7 | 6 | 5 |
| Thermal inkjet (Bubble Jet) | /guides/thermal-inkjet-printing | ~1240 | 5 | 6 | 5 |
| Piezoelectric inkjet | /guides/piezoelectric-inkjet-printing | ~1580 | 10 | 6 | 4 |
| Continuous inkjet | /guides/continuous-inkjet-printing | ~1640 | 7 | 6 | 4 |
| Page-wide array printing | /guides/page-wide-printing | ~1490 | 11 | 6 | 5 |
| Electrostatic printing | /guides/electrostatic-printing | ~1520 | 12 | 6 | 6 |

Each page follows the brief's section structure: History · How it works ·
Evolution · Advantages · Disadvantages · Modern use · Relationship to other
technologies · Relationship to manufacturers · Related printer families ·
Timeline, plus FAQ, Sources, and internal links.

## 3. Internal graph

Each technology page connects outward across the knowledge graph:

- **Manufacturers (Phase 11 pages):** xerography → Xerox; laser → HP, Canon,
  Xerox; thermal-inkjet → Canon, HP; piezoelectric → Epson; line printing →
  IBM; page-wide → HP; solid ink → Xerox. These are `related[]` links to the
  cited manufacturer encyclopedia pages, forming the technology↔manufacturer
  spine the brief requires.
- **History pages:** evolution-of-laser-printing, evolution-of-inkjet-printers,
  dot-matrix-printers-explained, how-impact-printing-worked, thermal-printing-history,
  early-computer-printing, etc.
- **Sibling technologies:** the pages interlink densely (electrophotography ↔
  xerography ↔ laser ↔ LED ↔ electrostatic; inkjet ↔ thermal-inkjet ↔
  piezoelectric ↔ continuous ↔ page-wide; impact ↔ dot-matrix ↔ daisy-wheel ↔
  line; thermal-transfer ↔ direct-thermal).
- **Glossary / workflows:** toner, thermal-printing, dpi; print-shipping-labels,
  scan-to-searchable-pdf.
- **Taxonomy:** the 18 pages are attributed to the `printer-technologies` and
  `thermal-printing` clusters in `lib/knowledge-graph/taxonomy.ts` (live counts
  updated; colliding planned slugs promoted to live).

## 4. Verification results (honesty review)

An independent agent per page (with web tools) re-read each committed file and
spot-verified its claims. Outcome across 18 pages: **6 clean, 12 minor, 0
substantive issues; all sources authoritative and real; no fabricated dates,
inventors, or benchmark comparisons.**

Corrections applied before commit:

- **Two factual errors fixed.** Inkjet: the IBM 6640 was described as "the first
  commercial continuous-inkjet printer" — corrected to "among the first office
  continuous-inkjet printers," noting the earlier A. B. Dick Videojet (1969).
  Continuous inkjet: thermal DOD was dated "HP and Canon in 1984" — corrected to
  HP 1984, Canon 1985.
- **Scope consistency.** The Reference-scope callout was reworded (documented
  figures/dates are allowed; no current pricing/marketing/recommendations), and
  the few documented price/deal figures ($495 ThinkJet, $10k PhaserJet, ~$950M
  and ~$164M acquisitions, a "$120 billion industry" line) and price-comparison
  phrasings were removed to match the archive's no-pricing convention.
- **Superlatives softened / unsupported date removed** (e.g. "world's leading"→
  "a leading" for Versatec; dropped an unconfirmed "OKI researched LEDs from the
  mid-1960s"). Documented, attributed superlatives that reviewers judged
  acceptable (e.g. the MX-80 as the best-selling dot-matrix printer of its era,
  >1M units) were retained.

Independently confirmed anchor facts included Carlson's xerography (1938 first
image, 1942 patent), the IBM 3800 (announced Apr 1975, shipped Jul 1976) and its
competing-first claims, HP LaserJet (1984, Canon CX engine), Endo/Vaught's shared
1995 Land Medal for thermal inkjet, and the Epson Stylus 800 / MJ-500 Micro Piezo
debut (1993).

## 5. Image opportunities (verified only)

No images were added (none verified yet). Per the manifest → approval →
integration workflow, verified public-domain / properly-licensed candidates:

- **Wikimedia Commons** — labelled device and mechanism photos (daisy wheels,
  dot-matrix print heads, laser drum assemblies, thermal print heads, Versatec
  plotters).
- **Computer History Museum** — laser-printing origins (SLOT), line printers
  (IBM 1403), early inkjet and copier hardware.
- **Historic manuals and patent drawings** — process diagrams (electrophotography
  steps, CIJ droplet deflection, thermal-bubble ejection, piezo actuation) from
  out-of-copyright manuals and patents.
- **Company heritage archives** — where licensing permits (Canon, Epson, HP, OKI,
  Xerox heritage pages).

Every image must pass manifest approval with a verifiable source and licence.
Never AI-generated.

## 6. Future clusters

The brief's list spans ~65 items; this phase built the core print *mechanisms*.
The remainder maps to existing taxonomy clusters or clearly-scoped future waves:

- **Standards & page-description languages** (PostScript, PCL, ESC/P, ESC/POS,
  PDF, PDF/A, PDF/X, IPP, LPD): the Phase 9 `print-languages`, `printing-standards`,
  and `pdf-ecosystem` clusters + the Phase 10 content plan (some already live).
- **Print infrastructure** (drivers, print queues, print servers, spooling): Phase 9
  `printer-drivers`, `print-queues`, `print-servers` clusters (Phase 10 wave).
- **Connectivity** (cloud printing, wireless printing): Phase 9 `cloud-printing`,
  `mobile-printing`.
- **Color & imaging** (color management, CMYK, RGB, ICC profiles, rasterization,
  DPI/resolution, duplex): a color-management cluster (a Phase 9 identified gap) +
  existing glossary/guides.
- **Application printing** (security, barcode, label, receipt, wide/large-format,
  photo, industrial, POS, portable): Phase 9 `barcode-systems`, `label-printing`,
  `receipt-printing` + net-new `security-printing` and `wide-format` (Phase 9 gaps).
- **Consumables & components** (toner, ink, developer, drum units, fuser units,
  transfer belt/roller, maintenance kits): Phase 9 `ink-technologies`,
  `toner-technologies` + a new components/consumables cluster.

Each future page follows the same research → adversarial fact-check → author →
review pipeline; no page ships with fabricated facts.

## 7. QA

typecheck ✓ · lint ✓ · test:content (97 entries) ✓ · test:unit (57) ✓ · build ✓
· check:routes (116 routes) ✓.
