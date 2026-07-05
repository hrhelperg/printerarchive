# Phase 10 — First Content Wave (36 pages) from the Knowledge Graph

**Repo:** https://github.com/hrhelperg/printerarchive · **Branch:** `feat/foundation-architecture` · **Do not merge to main.**

**Status:** planning document only — pages are NOT implemented yet.

Phase 9 shipped the taxonomy ([`lib/knowledge-graph/taxonomy.ts`](../../../lib/knowledge-graph/taxonomy.ts), 47 clusters) and IndexNow. Phase 10 writes the **first 36 pages** — the highest-quality historical and document-infrastructure pages with the strongest internal-link fit. Build only the pages listed below; do not invent new slugs, do not batch-generate.

These 36 were selected from the committed `planned` pages by four filters: historical / document-infrastructure first, strong internal-link fit to the existing 77 pages, no thin/glossary-stub pages, and no proposed apps.

## Hard rules (from the Phase 9 honesty guardrails)

- **No fabricated facts.** No invented dates, prices, specs, market shares, "first-ever" superlatives, benchmarks, or fake reviews. Where a date/attribution is contested, describe the principle, not a pinned year. Cite durable sources (Computer History Museum, IEEE Annals, ISO/Adobe/PWG/IETF specs, primary archives) in each entry's `sources[]`.
- **No thin pages.** Every page is a substantive explainer/history article (multiple sections, ≥ ~700 words of real prose). No one-line glossary stubs in this wave.
- **No proposed apps.** Do not reference `cv-resume`, `invoice-maker`, or `pocket-manager`. `modernTools` may reference only `pdf-editor`, `smart-printer`, `fax-app`, `zip-rar`, and only where genuinely relevant — incidental, never a CTA.
- **Vendor-neutral, standards-first.** DTP/product-history pages (LaserWriter, PageMaker, etc.) stick to documented history only.

## Per-page mechanics (match existing convention exactly)

- One typed `ContentEntry` module at `content/<section>/<slug>.ts`, default-exported, registered in [`lib/content/registry.ts`](../../../lib/content/registry.ts).
- Fill all required fields (`title`, `description` ≤165 chars, `summary`, `body[]`, `published`/`updated` ISO, `author`, `editor`, `keywords`) plus section-specific fields (`era` for history, `purpose` for tools, `difficulty`+`estimatedTime` for guides).
- **Tag `cluster` with the taxonomy cluster id** and draw `keywords` from that cluster's `entities` in `taxonomy.ts` (this is what powers the internal graph).
- Add 3–5 `related[]` links, **at least two pointing to existing published pages** (listed per sub-wave), and `faqs[]` where natural. Use `deepReading[]` for cross-wave links.
- Verified imagery only, via the existing manifest→approval→integration workflow; otherwise no images.

## The 36 pages

**Sub-wave A — Foundations of printing history** (cluster `printing-history`, section `history`; link to existing `history/history-of-printers`, `history/evolution-of-color-printing`)

1. `history/gutenberg-and-the-printing-press`
2. `history/movable-type-before-gutenberg`
3. `history/woodblock-printing-history`
4. `history/letterpress-printing-history`
5. `history/lithography-history`
6. `history/offset-printing-history`
7. `history/halftone-printing-history`
8. `history/cmyk-and-color-separation-history`
9. `history/hot-metal-typesetting-history`
10. `history/phototypesetting-era`
11. `history/history-of-typewriters`
12. `history/xerography-and-the-photocopier`

**Sub-wave B — Office & document reproduction history** (clusters `printing-history` / `office-infrastructure`, section `history`; link to existing `history/office-print-rooms`, `history/enterprise-document-management`)

13. `history/mimeograph-and-stencil-duplicating`
14. `history/duplicating-before-the-photocopier`
15. `history/the-typing-pool-and-office-reproduction`
16. `history/rise-of-the-office-photocopier`
17. `history/carbon-paper-and-copies-history`
18. `history/continuous-stationery-and-fanfold-paper` (link to existing `history/dot-matrix-printers-explained`)

**Sub-wave C — Desktop publishing → the PostScript-to-PDF bridge** (clusters `desktop-publishing` / `print-languages`, section `history`; link to existing `history/history-of-desktop-publishing`, `guides/what-is-postscript-printing`)

19. `history/apple-laserwriter-and-the-birth-of-dtp`
20. `history/history-of-aldus-pagemaker`
21. `history/the-macintosh-and-desktop-publishing`
22. `history/history-of-outline-fonts-type1-and-truetype`
23. `history/origins-of-postscript-and-adobe`
24. `history/from-postscript-to-pdf` (bridges into Sub-wave D)

**Sub-wave D — PDF & document-format infrastructure** (cluster `pdf-ecosystem`, section `tools`; link to existing `tools/what-is-pdf`, `workflows/scan-to-searchable-pdf`, `glossary/ocr`)

25. `tools/iso-32000-pdf-standard`
26. `tools/pdf-a-for-archiving`
27. `tools/searchable-pdf-vs-image-pdf`
28. `tools/how-pdf-compression-works`
29. `tools/pdf-vs-postscript` (link to #24)
30. `tools/pdf-x-for-print-production`

**Sub-wave E — Print-server / spooling / network infrastructure** (clusters `print-servers` / `print-queues` / `network-printing`, sections `guides`+`history`; link to existing `guides/what-is-a-print-server`, `glossary/print-spooler`, `history/spoolers-and-print-queues`, `history/print-servers-in-large-offices`, `history/early-network-printing-systems`)

31. `guides/how-print-spooling-works`
32. `guides/how-print-servers-manage-print-queues`
33. `history/history-of-print-servers`
34. `history/history-of-spooling-in-computing`
35. `history/from-lpd-to-ipp`
36. `guides/internet-printing-protocol-explained`

## After writing

- Run the full gate: `npm run typecheck && npm run lint && npm run test:content && npm run test:unit && npm run build && npm run check:routes`.
- Confirm the sitemap grows by 36 URLs (77 → 113) and the route audit reports no broken internal links.
- Then `npm run indexnow -- --dry-run` should list the new URLs (preview only — no live submission).
- Commit to `feat/foundation-architecture`; **do not merge to main.**

## Explicitly excluded this wave (deferred, by the selection filters)

- All `models` pages (`printer-models`, `fax-models`) — fabrication risk; require the strict model-sourcing guardrail first.
- All one-word `glossary/*` stubs — thin; reserved for a later glossary-canonicalisation wave (Phase 9 Wave 1).
- All `eco-*` app-ecosystem pages — the three proposed apps (`cv-resume`, `invoice-maker`, `pocket-manager`) have no verified store metadata yet.
