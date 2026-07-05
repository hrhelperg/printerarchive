# Phase 11 — Brand & Model Encyclopedia (Authority Expansion)

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-05 · **Status:** 10 flagship pages shipped; full roster + model taxonomy as data.

Phase 11 begins the manufacturer encyclopedia: a long-term system of printer and
fax manufacturer pages built for **historical and technical authority**, not
shopping, reviews, or affiliate content. Per the brief's hard rule, nothing about
market share, sales, revenue, or founding legends is invented — every factual
claim on a manufacturer page is drawn from authoritative public sources and was
independently fact-checked.

This phase ships:
1. A **manufacturer registry + model-family taxonomy** (35 manufacturers) as data.
2. **10 flagship manufacturer pages**, web-researched, fact-checked, and cited.

## 1. Method — how honesty was enforced

Manufacturer pages are the highest fabrication-risk content on the site, so they
were produced through a multi-stage, source-grounded pipeline rather than
one-shot generation:

1. **Research** — a web-research agent per manufacturer gathered documented facts
   from authoritative public sources (Computer History Museum, IEEE Annals,
   company heritage archives, museum collections, Wikipedia's cited primary
   sources), producing a sourced dossier.
2. **Adversarial fact-check** — an independent agent re-verified each claim on the
   web, flagged unsupported/too-precise claims, and listed any forbidden content
   (market share, sales, revenue, invented legends, unsourced superlatives).
3. **Author from verified facts only** — the page was written excluding everything
   the fact-checker flagged, with a real `sources[]` bibliography.
4. **Deterministic pattern scan** — the committed pages were grepped for
   market-share / sales / revenue / superlative language (only the disclaiming
   "Reference scope" callouts matched).
5. **Independent honesty review** — a final adversarial agent per page re-read the
   committed file and spot-verified key claims against authoritative sources.

Every page carries a **Reference scope** callout stating it reports no market
share, sales, revenue, or pricing, and links to `/source-policy`; citations
render through the existing `SourceTransparency` component.

## 2. Flagship pages (10)

Eight existing thin brand overviews were upgraded to rich, cited encyclopedia
pages; IBM and Konica Minolta were added new. ~12,000 words, 99 source
references (avg ~10/page).

| Manufacturer | Page | New? | Blocks | ~Words | Sources | Related |
|---|---|---|--:|--:|--:|--:|
| Xerox | /brands/xerox | upgraded | 28 | ~1190 | 12 | 6 |
| IBM | /brands/ibm | new | 27 | ~1077 | 11 | 6 |
| Hewlett-Packard | /brands/hewlett-packard | upgraded | 25 | ~1188 | 14 | 6 |
| Canon | /brands/canon | upgraded | 29 | ~1170 | 9 | 6 |
| Epson | /brands/epson | upgraded | 30 | ~1218 | 10 | 6 |
| Brother | /brands/brother | upgraded | 35 | ~1351 | 7 | 6 |
| Lexmark | /brands/lexmark | upgraded | 31 | ~1305 | 10 | 6 |
| Ricoh | /brands/ricoh | upgraded | 31 | ~1224 | 9 | 6 |
| Kyocera | /brands/kyocera | upgraded | 28 | ~1012 | 8 | 6 |
| Konica Minolta | /brands/konica-minolta | new | 32 | ~1254 | 9 | 6 |

Each page follows the same section structure: **History · Timeline · Printing
technologies · Major printer families · Product areas · Major innovations ·
Influence on printing history · Relationships with other manufacturers · Legacy
technologies · Current status**, with pivotal facts attributed inline.

### Verification results

Every page passed an independent honesty review (§6): **6 clean, 3 minor, 0 with
substantive issues**; all `sources[]` judged authoritative and real.

## 3. Manufacturer registry + model-family taxonomy (data)

`lib/knowledge-graph/manufacturers.ts` catalogues **35 manufacturers** with
documented structure only — identity, HQ country, active/historical/absorbed
status, technology categories, **107 documented model families** (the
design-only model taxonomy), corporate relationships, and links into the topic
knowledge graph. It contains no market-share/sales/revenue/founding-legend data.

`scripts/manufacturers.test.mjs` enforces integrity: unique ids, valid status +
sourcing, relationships resolving to real manufacturers, `relatedClusters`
resolving to real topic clusters, and the flagship invariant (exactly 10
flagships, each `flagship-verified`).

Roster (10 flagship + 25 documented-structure): Xerox, IBM, HP, Canon, Epson,
Brother, Lexmark, Ricoh, Kyocera, Konica Minolta · Sharp, OKI, Dell, Samsung,
Kodak, Apple, Panasonic, NEC, Citizen, Zebra, Toshiba TEC, Fujitsu, Star
Micronics, Seiko, Casio, SATO, Printronix, Tally, Genicom, Datamax, Olivetti,
Facit, DEC, Commodore, Sinclair.

### Model taxonomy (design only — NO model pages generated)

107 documented product-line families are recorded as `modelFamilies` per
manufacturer (e.g. HP: LaserJet, DeskJet, OfficeJet, DesignJet, PageWide,
Neverstop; Canon: PIXMA, MAXIFY, imageCLASS, imageRUNNER, imagePRESS; Brother:
HL, MFC, DCP, ADS, P-touch). Each family carries a category and current/historical
era tag. These are line **names** (documented), not claims about the models.

## 4. Internal graph & authority improvements

- **Manufacturer relationship graph** — corporate edges (Lexmark ← IBM,
  IBM printing → Ricoh, Samsung printing → HP, Canon supplies-engines-to HP,
  Tally + Genicom → Printronix, DEC absorbed, etc.) are encoded and test-validated.
- **Brand cross-links** — flagship pages link to each other where a real
  relationship exists (Xerox↔IBM, HP↔Canon, IBM↔Lexmark↔Ricoh), plus to the
  history/guides pages that explain their technologies. 6 related links per page.
- **Cluster anchoring** — every manufacturer references `historical-manufacturers`
  plus its technology clusters (printer-technologies, copiers, fax-technologies,
  thermal-printing, label-printing, barcode-systems, desktop-publishing,
  print-languages, …), feeding the taxonomy's entity/cluster graph.
- **Entity consistency** — manufacturer, model-family, and technology names now
  have a single canonical home, reinforcing the knowledge graph built in Phase 9.
- **SEO** — SSR, Article + Breadcrumb + FAQ schema, canonical URLs, and unique
  metadata are unchanged and verified by the route audit (98 routes).

## 5. Estimated future model capacity

35 manufacturers × 107 documented model families is the seed for the model layer.
At a **documented-models-only** rate (no invented SKUs/specs), the taxonomy can
honestly sustain on the order of **1,000–3,000 model pages** over time — the
brief's "thousands of model pages" — provided each model page, like the
manufacturer pages, cites authoritative sources. Model pages are **not** built in
this phase.

Manufacturer-page capacity: the roster of 35 is itself expandable toward the
brief's 200–400 target as additional manufacturers are researched to the same
sourcing standard (§7).

## 6. Verification results (honesty review)

A final independent agent per page (with web tools) re-read each committed file
and spot-verified its key claims against authoritative sources. Outcome across
all 10 pages: **6 clean, 3 minor, 0 substantive issues; all sources authoritative
and real.** No fabricated facts, no market-share/sales/revenue statements.

The three minor findings were corrected before commit:

- **HP** — the PageWide/Edgeline (HP CM8060) milestone was dated 2006; corrected
  to 2007.
- **Lexmark** — the Kofax acquisition timeline entry conflated announcement and
  completion; corrected to note announced March 2015, completed May 2015.
- **Canon** — removed a "cumulative production reaches 10 million units" figure
  (a units count that its own scope callout disclaims) and softened a "world's
  first" superlative to a plain attributed statement.

"Unsupported" notes raised by reviewers were, in each case, already appropriately
hedged or attributed on the page (e.g. Ricoh's exact "July" 1996 Aficio month,
the Lexmark name-origin gloss) and required no change. Independently confirmed
anchor facts included the Xerox 914 (Sept 1959), the IBM 3800 (announced Apr 1975,
shipped Jul 1976), Lexmark's 1991 formation, and the HP LaserJet (May 1984, Canon
CX engine).

## 7. Image opportunities (verified only)

No images were added this phase (none verified yet). Per the manifest → approval
→ integration workflow, verified public-domain / properly-licensed imagery for
manufacturer pages can come from:

- **Wikimedia Commons** — device photographs (e.g. Xerox 914, IBM 1403, Apple
  LaserWriter, Epson MX-80) under CC/PD licences.
- **Computer History Museum** — collection images of historically significant
  printers and copiers.
- **Company heritage / archive pages** — where licensing permits.
- **Public-domain historical advertisements and catalogs** — period marketing
  material out of copyright.
- **Library and museum archives** — Smithsonian, national libraries.

Every image must pass the existing manifest approval with a verifiable source and
licence before integration. Never AI-generated.

## 8. Roster expansion plan (next waves)

The 25 documented-structure manufacturers become the next research waves, each
built to the same pipeline (research → adversarial fact-check → author-verified →
review):

- **Wave 2 (office/enterprise majors):** Sharp, OKI, Konica-predecessors depth,
  Panasonic, NEC, Toshiba TEC.
- **Wave 3 (labels/POS/industrial):** Zebra, SATO, Citizen, Star Micronics,
  Printronix, Datamax, Toshiba TEC (barcode).
- **Wave 4 (historical/absorbed):** IBM-adjacent (Lexmark depth), DEC, Olivetti,
  Facit, Tally, Genicom, Commodore, Sinclair, Apple (depth).
- **Wave 5 (consumer/absorbed):** Samsung (now HP), Dell, Kodak, Fujitsu, Seiko,
  Casio.

Model pages follow only after manufacturers are covered, one documented family at
a time. Honesty guardrails (no market share/sales/revenue/founding legends;
every claim sourced) apply to every wave.
