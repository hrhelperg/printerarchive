# Phase 9 — Knowledge Graph Architecture & IndexNow

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-05 · **Status:** taxonomy designed (no pages generated)

PrinterArchive is a long-term archival authority on printers, fax, document
workflows, and printing technology. Phase 9 is **not** mass page generation. It
(1) wires IndexNow so published URLs are recrawled quickly, and (2) designs the
**complete knowledge-graph taxonomy** the site can honestly grow into — the
clusters, canonical entities, capacity, and internal cross-link graph that
support a long-term target of ~1,000–1,500 high-quality pages.

The taxonomy is committed as **data** (`lib/knowledge-graph/`), not pages. It
creates no routes and produces no content by itself; it is the map future waves
build against, and the vocabulary that keeps the internal graph consistent.

---

## 1. IndexNow (Part 1)

Full operational detail is in [`docs/indexnow.md`](../../indexnow.md). Summary:

- **Verification key file:** `public/57070f029d1648d78750aeeb18ac1876.txt`
  (contents = the key). Served at the site root; this is the **only** place the
  key literal appears.
- **Submitter:** [`scripts/indexnow-submit.mjs`](../../../scripts/indexnow-submit.mjs)
  — zero-dependency Node. Reads the **live** sitemap after deploy, keeps only
  same-host URLs, batches at the 10,000-URL protocol limit, and POSTs to
  `api.indexnow.org`. Key comes from `INDEXNOW_KEY` (env), never hardcoded.
  `npm run indexnow` (add `-- --dry-run` to preview; `-- --url <u>` for a single page).
- **Automatic after deploy:** [`.github/workflows/indexnow.yml`](../../../.github/workflows/indexnow.yml)
  runs on a successful **production** `deployment_status` (the event Netlify/Vercel
  GitHub integrations emit once a deploy is live) + manual dispatch, guarded on
  the `INDEXNOW_KEY` secret. Netlify `onSuccess` and Vercel deploy-hook
  alternatives are documented for whichever host is active.
- **Env support:** [`.env.example`](../../../.env.example) documents `INDEXNOW_KEY`
  and optional `SITE_URL` / `SITEMAP_URL` / `INDEXNOW_ENDPOINT` overrides.
- **Tests:** [`scripts/indexnow-submit.test.mjs`](../../../scripts/indexnow-submit.test.mjs)
  covers key validation, sitemap parsing, host filtering, batching, and payload shape.

---

## 2. The knowledge-graph model (Parts 2 & 4)

Four layers, mapped onto the existing content architecture:

| Layer | What it is | Where it lives |
|---|---|---|
| **Section** | A routing namespace (`/history`, `/guides`, …). Fixed set of 9 live + `models` proposed. | `SectionId` in `lib/site.ts` |
| **Cluster** | A topical grouping inside/across sections (e.g. `print-languages`). 47 defined. | `cluster` field on entries; `TAXONOMY` in `lib/knowledge-graph/taxonomy.ts` |
| **Entity** | A canonical named thing (a technology, standard, brand, format, OS, org). 555 distinct entities, 924 cluster assignments (deliberate cross-cluster reuse). | `keywords` + `entities` per cluster |
| **Page** | One typed `ContentEntry` module → one SSR route. | `content/<section>/<slug>.ts` |

**Why this matters for the internal graph (Part 4):** `getRelated()` in
`lib/content/queries.ts` scores relatedness by **shared `cluster` (+3)** and
**shared `keywords`**. So a canonical cluster + entity vocabulary *is* the
internal-graph improvement — every future page tagged with a taxonomy cluster id
and taxonomy entities automatically joins a coherent, well-connected graph
instead of an ad-hoc one. The taxonomy also declares explicit `crossLinks`
between clusters (each cluster links to 3–6 siblings), giving the graph a
designed backbone rather than only emergent keyword overlap.

`lib/knowledge-graph/types.ts` defines the shape; `taxonomy.ts` holds the data
plus helpers (`getCluster`, `clustersInSection`, `taxonomyTotals`).
`scripts/taxonomy.test.mjs` enforces integrity (unique ids, valid sections,
resolving cross-links, and — critically — **no planned slug collides with an
already-published page**).

---

## 3. The 47 clusters (Parts 2 & 3)

77 pages exist today. The taxonomy organises all current and future territory
into **8 topical domains + 47 clusters**. "Live" = pages published today;
"Planned" = representative net-new pages designed as proof of depth (a subset,
not the full backlog); "Cap (c–a)" = honest conservative–ambitious ceiling.

### Domain rollup

| Domain | Clusters | Live | Planned sample | Capacity (cons–amb) |
|---|--:|--:|--:|--:|
| Printing history & institutions | 7 | 19 | 159 | 202–358 |
| Printer technologies & consumables | 10 | 15 | 228 | 264–436 |
| Connectivity & print software | 8 | 14 | 152 | 199–328 |
| Fax | 2 | 7 | 44 | 54–84 |
| Scanning, OCR & documents | 7 | 1 | 140 | 196–327 |
| Formats, standards & archives | 4 | 1 | 86 | 96–158 |
| Reference | 3 | 20 | 54 | 125–236 |
| Models (proposed section) | 2 | 0 | 42 | 46–76 |
| App ecosystems | 4 | 0 | 78 | 94–160 |
| **Total** | **47** | **77** | **983** | **1,276–2,163** |

### Full cluster table

| Cluster (id) | Section | Status | Live | Cap (c–a) | Planned | App anchor |
|---|---|---|--:|--:|--:|---|
| Printing History `printing-history` | history | expand | 4 | 30–58 | 24 | — |
| Office Printing Infrastructure `office-infrastructure` | history | expand | 5 | 24–40 | 20 | — |
| Enterprise & Managed Printing `enterprise-printing` | workflows | expand | 1 | 30–52 | 21 | — |
| Publishing & Print Production `publishing` | history | planned | 0 | 40–75 | 26 | — |
| Desktop Publishing `desktop-publishing` | history | expand | 1 | 22–34 | 22 | — |
| Historical Manufacturers `historical-manufacturers` | brands | expand | 8 | 28–55 | 22 | — |
| Copiers & Reprographics `copiers` | guides | planned | 0 | 28–44 | 24 | — |
| Printer Technologies `printer-technologies` | guides | expand | 13 | 26–44 | 22 | — |
| Multifunction Printers `multifunction-printers` | guides | planned | 0 | 26–42 | 20 | — |
| Thermal Printing `thermal-printing` | guides | expand | 1 | 26–42 | 23 | — |
| Receipt Printing `receipt-printing` | guides | planned | 0 | 26–40 | 23 | smart-printer |
| Label Printing `label-printing` | guides | expand | 1 | 28–46 | 23 | smart-printer |
| Barcode & Symbology Systems `barcode-systems` | guides | planned | 0 | 26–42 | 25 | — |
| Paper & Media `paper-technologies` | guides | planned | 0 | 32–58 | 26 | — |
| Ink Technologies `ink-technologies` | guides | planned | 0 | 24–38 | 21 | — |
| Toner Technologies `toner-technologies` | guides | planned | 0 | 24–40 | 22 | — |
| Printer Maintenance `printer-maintenance` | troubleshooting | planned | 0 | 26–44 | 23 | — |
| Mobile Printing `mobile-printing` | mobile-printing | expand | 7 | 22–34 | 20 | smart-printer |
| Cloud Printing `cloud-printing` | guides | planned | 0 | 24–40 | 21 | smart-printer |
| Network Printing `network-printing` | guides | expand | 1 | 26–40 | 20 | — |
| Print Servers `print-servers` | guides | expand | 2 | 24–40 | 21 | — |
| Print Queues & Spooling `print-queues` | guides | expand | 1 | 25–38 | 21 | — |
| Printer Drivers `printer-drivers` | guides | expand | 1 | 30–58 | 17 | — |
| Page Description Languages `print-languages` | guides | expand | 1 | 24–38 | 16 | — |
| Printing across Operating Systems `operating-systems-printing` | guides | expand | 1 | 24–40 | 16 | smart-printer |
| Fax Technology `fax-technologies` | fax | expand | 6 | 30–48 | 22 | fax-app |
| Digital Fax Workflows `eco-fax` | fax | expand | 1 | 24–36 | 22 | fax-app |
| Scanning `scanning` | guides | planned | 0 | 28–46 | 15 | — |
| OCR `ocr` | guides | planned | 0 | 26–42 | 24 | pdf-editor |
| Document Workflows `document-workflows` | workflows | expand | 1 | 42–75 | 24 | pdf-editor |
| Business Document Workflows `business-workflows` | workflows | planned | 0 | 24–40 | 16 | — |
| Document Preservation `document-preservation` | workflows | planned | 0 | 26–42 | 23 | — |
| Digital Archives `digital-archives` | workflows | planned | 0 | 26–42 | 19 | — |
| Government Document Systems `government-document-systems` | workflows | planned | 0 | 24–40 | 19 | — |
| PDF Ecosystem `pdf-ecosystem` | tools | expand | 1 | 24–40 | 20 | pdf-editor |
| Archives & Compression (ZIP/RAR) `archives-compression` | tools | planned | 0 | 26–44 | 24 | zip-rar |
| Printing & Document Standards `printing-standards` | tools | planned | 0 | 24–40 | 21 | — |
| Document & Image File Formats `file-formats` | tools | planned | 0 | 22–34 | 21 | pdf-editor |
| Glossary `glossary-terms` | glossary | expand | 11 | 55–110 | 22 | — |
| Troubleshooting `troubleshooting` | troubleshooting | expand | 9 | 28–46 | 18 | smart-printer |
| Educational Guides `educational-guides` | guides | planned | 0 | 42–80 | 14 | — |
| Printer Models (reference) `printer-models` | models | planned | 0 | 26–44 | 22 | — |
| Fax Machine Models (reference) `fax-models` | models | planned | 0 | 20–32 | 20 | — |
| Home & Office Printing Help `eco-smart-printer` | mobile-printing | planned | 0 | 26–44 | 16 | smart-printer |
| Resumes & CV Documents `eco-cv-resume` | workflows | planned | 0 | 22–34 | 22 | cv-resume |
| Invoices & Billing Documents `eco-invoicing` | workflows | planned | 0 | 22–40 | 22 | invoice-maker |
| Receipts & Financial Documents `eco-document-finance` | workflows | planned | 0 | 24–42 | 18 | pocket-manager |

---

## 4. Honest capacity: how far this actually reaches

The per-cluster capacity estimates sum to **1,276–2,163**. That raw figure is
**not** the honest deliverable count, and this section says so deliberately —
inflating a page target is exactly the failure mode this project avoids.

**What the committed data already de-duplicates.** The 47 cluster designers,
working independently, proposed **1,073** representative pages. Because many
proposed the same concept (IPP, CUPS, PDF/A, ESC/POS, direct-thermal-vs-transfer,
…), the generator collapses them to **one canonical page per slug, globally**: it
drops 8 malformed slugs and 82 duplicate-concept slugs (the same slug proposed by
another cluster, in the same or a different section), leaving **983 unique
planned pages** — and none reuses the slug of an already-published page.
`scripts/taxonomy.test.mjs` enforces this (uniqueness by slug, not section+slug),
so the `planned` sample is genuinely one-page-per-concept.

**What the capacity numbers still over-count.** The 1,276–2,163 *capacity*
figures are per-cluster ceilings set before that global de-duplication, so they
still double-count concepts that legitimately live in one canonical place but are
in-scope for several clusters, plus:

1. **Parallel clusters circling shared concepts.** The 8-cluster print-plumbing
   family and the 6-cluster document/archive family each orbit the same core ideas.
2. **Topic overlap with the existing 77 pages** even where slug strings differ.

**Honest assessment:** after canonicalising to hub-and-spoke (one page per
concept, everything else links), the unique high-quality capacity of the taxonomy
**as drawn is ~950–1,050 pages**. So:

- **~1,000 pages is honestly reachable** with the current 47 clusters, by
  de-duplicating and deepening — no padding, no fabricated stubs.
- **~1,500 pages is reachable only by adding net-new territory** (§7), never by
  applying the ambitious multipliers to existing clusters or farming thin
  glossary stubs.

This is the same honest-subset discipline used elsewhere in the ecosystem: the
architecture is sized to a real ceiling, and the ceiling is stated plainly.

---

## 5. App ecosystem integration (Part 3)

Ecosystem clusters are **educational**, not marketing. App references are
incidental (`modernTools`), never CTAs, reviews, or affiliate framing. Every
ecosystem page must stand alone as reference.

| App | Anchor | Clusters that reference it | Status |
|---|---|---|---|
| Smart Printer | `smart-printer` | mobile-printing, cloud-printing, operating-systems-printing, receipt-printing, label-printing, troubleshooting, eco-smart-printer | **live** product |
| Fax App | `fax-app` | fax-technologies, eco-fax | **live** product |
| PDF Editor & Convert | `pdf-editor` | pdf-ecosystem, ocr, document-workflows, file-formats | **live** product |
| ZIP & RAR | `zip-rar` | archives-compression | **live** product |
| CV Resume | `cv-resume` | eco-cv-resume | **proposed** — no store metadata yet |
| Invoice Maker | `invoice-maker` | eco-invoicing | **proposed** — no store metadata yet |
| Pocket Manager | `pocket-manager` | eco-document-finance | **proposed** — no store metadata yet |

**Product gap (must close before shipping those ecosystems):** CV Resume,
Invoice Maker, and Pocket Manager are **not** in `lib/products.ts` and have no
verified store URLs. They are intentionally left as `ProposedProductId` in
`lib/knowledge-graph/types.ts` rather than fabricating links. Before
`eco-cv-resume` / `eco-invoicing` / `eco-document-finance` pages ship, either
(a) add real `Product` entries (name, store URLs, accurate capability copy) and
their ids to `PRODUCTS` + `VALID_PRODUCT_IDS` in `lib/content/integrity.ts`, or
(b) ship those clusters app-reference-free.

**Consolidation note:** the audit recommends attaching the live `smart-printer`
anchor to the existing `mobile-printing`/`troubleshooting` pages rather than
building `eco-smart-printer` as a parallel cluster that re-slugs them. The
cluster is kept in the taxonomy as the design surface, but rollout should fold it
in rather than duplicate.

---

## 6. Visuals (Part 5) & SEO (Part 6)

**Visuals** continue via the existing manifest → approval → integration workflow,
public-domain / verified imagery only. Each cluster declares `imageNeeds` (kinds
of verified imagery useful, e.g. "public-domain photographs of Linotype and
Monotype machines"). No unverified imagery is added in this phase.

**SEO** foundations are unchanged and intact — verified by the build + route
audit (96 routes, exactly one `<h1>`, unique title/description, https canonical,
Article + Breadcrumb + FAQ JSON-LD, no broken internal links, no missing images).
The taxonomy strengthens three SEO dimensions structurally:

- **Topical authority** — 47 clusters give each section a coherent, exhaustive
  sub-topic map instead of scattered pages.
- **Entity consistency** — 555 distinct canonical entities (924 cluster
  assignments) become the shared keyword vocabulary, so the same concept is named
  identically everywhere.
- **Internal linking** — cluster tags + declared cross-links feed `getRelated()`,
  producing a denser, more meaningful link graph as pages are added.

---

## 7. Gaps — the road from 1,000 to 1,500 (net-new territory)

The audit identified durable-knowledge territories currently **absent** from the
47 clusters. These — not multipliers on existing clusters — are what honestly
lifts capacity toward 1,500:

1. **3D printing / additive manufacturing** (FDM, SLA/resin, SLS, filaments, STL, slicing, G-code)
2. **Wide-format / large-format printing** (plotters, signage, banners, CAD plotting)
3. **Prepress & print production** (imposition, trapping, RIP workflow, proofing, platemaking, screening)
4. **Bookbinding & post-press finishing** (perfect/saddle-stitch binding, lamination, die-cutting, foil)
5. **Security printing** (MICR, microprinting, watermarks, holograms, anti-counterfeit)
6. **Packaging & flexography** (corrugated, folding cartons, web/label converting)
7. **Textile & garment printing** (DTG, dye-sublimation, screen printing on fabric)
8. **Color management** (ICC profiles, color spaces, calibration, rendering intents) — as a dedicated cluster
9. **Printer connectivity & interfaces** (IEEE-1284/parallel, serial, USB, network print cards)
10. **Sustainability, e-waste & recycling** (Energy Star, Blue Angel, remanufactured cartridges)
11. **Accessibility** (PDF/UA in depth, tagged documents, large-print, braille embossing)
12. **Standards-body entity pages** (ISO, IEC, ITU-T, IEEE, PWG, IETF, GS1, ICC, Adobe specs) as first-class entities
13. **Units & metrics of printing** (DPI vs PPI vs LPI, points/picas, dot gain, densitometry)

Adopted per the "deepen existing first" rule, most start under `guides` +
`history` and are promoted to their own section only once depth warrants.

---

## 8. Honesty guardrails (non-negotiable for every future page)

- **Models section (`printer-models`, `fax-models`) — highest fabrication risk.**
  Cover only models with well-documented public history (Computer History Museum,
  IEEE Annals, primary manufacturer archives). Durable documented facts only —
  technology class, historical role, verifiable era. **No specs, prices,
  benchmarks, or "first ever" claims.** Skip any model that cannot be sourced.
- **Historical manufacturers** — encyclopedic historical framing only; documented
  company history; **no market share, financials, current pricing, or "best"
  language**; keep distinct from the 8 existing brand pages.
- **eco-invoicing** — cite real standards only (EN 16931, Peppol, UBL,
  Factur-X/ZUGFeRD, PDF/A-3); **no jurisdiction VAT rates/thresholds** unless
  quoting the naming authority; **no tax/legal advice**.
- **All eco-\* clusters** — app mentions incidental; anchor to proposed apps only
  after real store metadata exists.
- **Glossary** — every term a substantive, standards-referenced definition with
  cross-links; grow only to terms with genuine depth (never stub-farm to a count).
- **Barcode / label / receipt** — cite GS1 + ISO/IEC symbology specs
  (15417, 16022, 18004, 15420) and AIM; **never invent check digits, quiet zones,
  or error-correction rules**.
- **Anti-duplication** — one canonical page per concept; parallel clusters link,
  never re-slug. When generation begins, promote the duplicate-slug check to a
  hard build gate that blocks any cross-cluster dup or re-slug of an existing page.

---

## 9. Rollout waves (do NOT execute now — this phase ships the map only)

| Wave | Focus | Clusters |
|---|---|---|
| 1 | Foundation + canonicalisation: make glossary the single term home, reconcile remaining topic overlap with existing pages, promote the slug-dedup check to a hard build gate | printing-history, publishing, glossary-terms, printer-technologies, copiers, paper-technologies |
| 2 | The highest-overlap family as one hub-and-spoke (one canonical IPP/CUPS/PDL/PDF-A page each); dissolve educational-guides into a curated hub | printing-standards, print-languages, network-printing, print-servers, print-queues, printer-drivers, operating-systems-printing, file-formats, pdf-ecosystem |
| 3 | High-search hardware, consumables, troubleshooting; attach live smart-printer anchor to existing pages | ink/toner-technologies, printer-maintenance, scanning, multifunction-printers, thermal/label/receipt-printing, barcode-systems, troubleshooting |
| 4 | Document, fax & connectivity workflows; merge digital-archives → document-preservation; keep one PDF/A page; dissolve eco-smart-printer into mobile-printing/troubleshooting | document-workflows, document-preservation, business-workflows, government-document-systems, ocr, fax-technologies, eco-fax, cloud-printing, mobile-printing |
| 5 | History & brands depth; reconcile with existing history pages; manufacturer honesty guardrail | office-infrastructure, enterprise-printing, desktop-publishing, historical-manufacturers, archives-compression |
| 6 | Net-new territory (§7), the models section, and proposed-app ecosystems — last, with sourcing/marketing guardrails and only after product metadata exists | 12 new clusters + printer-models, fax-models, eco-cv-resume, eco-invoicing, eco-document-finance |

---

## 10. Proposed additions

- **`models` section** — assumed by `printer-models` / `fax-models`; formalise the
  route together with the strict model-sourcing guardrail so it launches honest.
- **`standards` (or `reference`) section** — spec and standards-body entity pages
  are currently forced under `tools`/`guides`; a dedicated section gives clean
  entity hubs (ISO 32000, IPP, PWG, ICC, GS1) and is the natural home for
  color-management and printing-units pages.
- **Products** — `cv-resume`, `invoice-maker`, `pocket-manager` need real store
  metadata before their ecosystem clusters reference them (§5).

---

## 11. Extending the taxonomy

The taxonomy is data-driven. To add or refine a cluster, edit `TAXONOMY` in
`lib/knowledge-graph/taxonomy.ts` (types in `types.ts`), then run
`npm run test:unit` — `scripts/taxonomy.test.mjs` verifies ids, sections,
products, capacity sanity, cross-link resolution, and no collision with published
pages. When a planned page is actually built, add its typed module under
`content/<section>/` and register it in `lib/content/registry.ts`; tag it with
the cluster id and taxonomy entities so it joins the internal graph.
