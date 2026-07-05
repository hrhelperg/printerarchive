# Phase 13 — Print Languages, Standards & Protocols Encyclopedia

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-05 · **Status:** 25 flagship pages shipped.

Phase 13 adds the standards / protocols / languages layer that connects printers,
operating systems, drivers, PDF, PostScript, office workflows, and network
printing. It builds on the Phase 11 manufacturer encyclopedia and the Phase 12
printing-technology encyclopedia. Every page is a complete historical + technical
reference (not a glossary entry), and every historical/technical claim is drawn
from authoritative/primary sources and was independently fact-checked — no
fabricated dates, invented inventors, unsupported "first" claims, fake
benchmarks, unsourced market share, or marketing language.

## 1. Method — how honesty was enforced

Same source-grounded pipeline as Phases 11–12, with sourcing weighted toward
primaries (Adobe specifications, ISO standards, PWG/IETF RFCs, Apple developer
docs, Microsoft docs, Linux/CUPS docs, HP/Epson/IBM technical references,
Computer History Museum, IEEE/ACM):

1. **Research** (web) → sourced dossier per standard.
2. **Adversarial fact-check** (web) → flags unsupported/mis-numbered claims,
   vendor bias, and unsupported "first" claims.
3. **Author from verified facts only** → excludes everything flagged; real
   `sources[]`.
4. **Deterministic scan** → prices, market share, superlatives.
5. **Independent honesty review** → re-reads each committed page and re-verifies
   key claims (esp. RFC/ISO/version numbers) against primary sources.

Each page carries a Reference-scope callout (documented figures/dates; no current
pricing/marketing/recommendations); citations render via `SourceTransparency`.

## 2. The 25 pages

Placed in the `tools` section (its purpose is "reference explanations of
printing-related tools, formats, and standards") as `ToolEntry` pages, grouped by
four content clusters. ~39,500 words, 236 source references (avg ~9/page).

**Page-description languages** (cluster `page-description-languages`): PostScript,
PCL, ESC/P, ESC/POS, HP-GL, PJL, XPS, AFP.

**Network / protocols** (cluster `printing-protocols`): IPP, LPD/LPR, JetDirect,
AirPrint, Mopria, CUPS, SMB printing, Bonjour/mDNS.

**Document standards** (cluster `document-standards`): PDF/A (ISO 19005), PDF/X
(ISO 15930), PDF/UA (ISO 14289), ISO 32000 (PDF), TIFF.

**Color & imaging** (cluster `color-and-imaging`): ICC profiles, CMYK,
halftoning, raster image processor (RIP).

Each page follows the brief's structure: History · What problem it solved · How
it works · Where it sits in the print/document pipeline · Relationship to
printers / operating systems / PDF · PostScript · drivers · Modern use ·
Advantages · Limitations · Related standards and protocols · Timeline · FAQ ·
Sources · internal links.

## 3. Internal graph

Each page connects across the graph exactly as the brief specifies:

- **PostScript ↔ DTP ↔ PDF:** postscript → history-of-desktop-publishing,
  laser-printing, iso-32000, pcl; iso-32000/pdf-x/pdf-ua/pdf-a interlink and →
  what-is-pdf.
- **PCL ↔ HP ↔ LaserJet:** pcl → brands/hewlett-packard, how-laser-printers-work,
  pjl; pjl/hp-gl → brands/hewlett-packard.
- **ESC/P ↔ Epson ↔ dot-matrix/inkjet:** esc-p → brands/epson,
  dot-matrix-printing, inkjet-printing.
- **ESC/POS ↔ receipt/thermal/POS:** esc-pos → direct-thermal-printing,
  thermal-transfer-printing, brands/epson, print-shipping-labels.
- **IPP ↔ CUPS ↔ AirPrint ↔ mobile:** ipp ↔ cups ↔ airprint ↔ mopria ↔
  bonjour-mdns; airprint → mobile-printing/what-is-airprint.
- **JetDirect ↔ HP ↔ print servers ↔ network:** jetdirect → brands/hewlett-packard,
  what-is-a-print-server, print-servers-in-large-offices, lpd-lpr.
- **AFP ↔ IBM ↔ line printing:** afp → brands/ibm, line-printing.
- **Color:** cmyk ↔ icc-profiles ↔ raster-image-processor ↔ halftoning →
  laser-printing, inkjet-printing, evolution-of-color-printing.

**Taxonomy:** the 25 pages are attributed in `lib/knowledge-graph/taxonomy.ts` to
the `print-languages` (+8), `pdf-ecosystem` (+5), and `printing-standards` (+12)
clusters; live count is now 122, and colliding planned slugs were promoted to
live (planned sample 969).

## 4. Verification results (honesty review)

An independent agent per page (with web tools) re-read each committed file and
re-verified its key claims — especially RFC/ISO/version numbers — against primary
sources. Outcome across 25 pages: **18 clean, 7 minor, 0 substantive issues; all
sources authoritative/primary and real; no fabricated facts.**

Corrections applied before commit:

- **IPP (2 date fixes).** The page dated the STD 92 designation to "June 2018";
  per the IETF/RFC-Editor, RFC 8010/8011 already carried STD 92 at their January
  2017 publication — corrected, with a note that some secondary sources cite 2018.
  The timeline grouped PWG 5100.12-2015 under "March 2015" (that month belongs to
  RFC 7472); reworded so the PWG standard is "later that year."
- **CMYK (date fix).** The 2013 timeline entry implied FOGRA51/52 were published
  in 2013; they were released in 2015 for the ISO 12647-2:2013 print conditions —
  corrected.
- **Unsupported specifics softened/removed.** Removed an unverified "ESC/P-K
  (Chinese)" variant name (ESC/P J84 Japanese retained); changed JetDirect's
  "c. Fall 1990" to "c. 1990"; removed an anachronistic "(with selected PDF 1.3
  additions)" parenthetical on the 1999 CGATS.12/PDF/X-1 origin.

Independently confirmed anchor facts included the Apple LaserWriter (announced Jan
23 1985) as the first PostScript printer, the CHM PostScript source release
(Dec 2022), LPD RFC 1179, IPP's RFC/STD numbering, the PDF/A (ISO 19005), PDF/X
(ISO 15930), PDF/UA (ISO 14289), and ISO 32000 numbers, the ESC/POS trademark
(USPTO reg. 1709195), and CUPS's macOS/Linux role.

## 5. Sources used

Primary and authoritative sources dominate: Adobe (PostScript/PDF specs, CHM
PostScript source release), ISO (19005 / 15930 / 14289 / 32000), IETF RFCs
(e.g. LPD RFC 1179, IPP RFCs, mDNS/DNS-SD RFCs 6762/6763), PWG (IPP Everywhere,
Mopria), Apple developer documentation (AirPrint, Bonjour, CUPS), Microsoft docs
(XPS, SMB), the OpenPrinting/CUPS project, HP/Epson/IBM technical references, the
Library of Congress format registry (TIFF), the ICC (color.org), and the
Computer History Museum / IEEE.

## 6. Image opportunities (verified only)

None added (none verified yet). Per the manifest → approval → integration
workflow, verified public-domain / properly-licensed candidates:

- **Historical manuals & reference cards** — PostScript/PCL/ESC-P command
  references and printer-language diagrams from out-of-copyright manuals.
- **Hardware interface photos** — HP JetDirect network cards, parallel/serial
  interface cards (Wikimedia Commons, where licensed).
- **LaserWriter / PostScript-era materials** — device photos from museum/Wikimedia
  collections.
- **Standards-body diagrams** — only where the licence permits reuse (e.g. some
  IETF/PWG figures); otherwise redraw as original diagrams later.

No AI-generated diagrams, no copyrighted screenshots, no stock images.

## 7. Remaining standards gaps (future waves)

- **More PDLs / datastreams:** IPDS as its own page (currently within AFP),
  PCL XL as its own page (within PCL), KPDL/Prescribe (Kyocera), ZPL/EPL (Zebra
  label languages), ZjStream / host-based languages.
- **More protocols:** WSD (Web Services for Devices), Google Cloud Print (historical),
  Wi-Fi Direct printing, IPP-over-USB, secure printing (IPPS/TLS).
- **More document/image formats in print:** JPEG and SVG in print workflows,
  JBIG/JBIG2 (fax/scan), PDF/VT (variable data), PCLm/PWG-Raster/URF (the raster
  formats behind driverless printing).
- **More color/imaging:** RGB-to-CMYK conversion in depth, rendering intents,
  spot color / Pantone, gamut mapping, spectral/densitometry, screening angles.
- **Fonts:** Type 1, TrueType, OpenType in the print pipeline.

Each future page follows the same research → adversarial fact-check → author →
review pipeline; no page ships with fabricated facts.

## 8. QA

typecheck ✓ · lint ✓ · test:content (122 entries) ✓ · test:unit (57) ✓ · build ✓
· check:routes (141 routes) ✓. Sitemap and llms.txt regenerate to include the new
tools pages.
