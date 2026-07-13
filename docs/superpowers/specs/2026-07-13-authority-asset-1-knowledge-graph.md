# Authority Asset #1 — Navigable Printer Knowledge Graph

**Branch:** `feat/foundation-architecture` · **Date:** 2026-07-13 · **Status:** shipped. First deliverable of the post-Phase-20 strategic pivot to unique authority assets.

## What it is

A new `/knowledge-graph` feature that turns the previously data-only
`lib/knowledge-graph/taxonomy.ts` (47 clusters, canonical entities, cross-links,
live/planned coverage, capacity) into a navigable on-site reference. **Zero new
facts** — it renders only what the taxonomy already contains.

- `/knowledge-graph` — overview: all 47 clusters grouped by domain (primarySection),
  with a stat row (clusters, entities, published pages, long-term capacity) from
  `taxonomyTotals()`; each cluster links to its detail page.
- `/knowledge-graph/[clusterId]` — per-cluster: description, entities grouped by
  type, **connected clusters** (cross-link edges, navigable), **section hubs** and
  **live pages** in the cluster (edges into the encyclopedia), and planned coverage
  (display-only, never linked). `dynamicParams=false`, `generateStaticParams` from
  `TAXONOMY`.

## Key design decision (honest joins, real routes only)

`entry.cluster` cannot reliably resolve a cluster's live pages (only 69/369
entries set it, using an older vocabulary), so the cluster→pages join is by
**section** (`primarySection` + `secondarySections`, all live), plus an
entity/label token-overlap score — every surfaced link is a real, prerendered
route. Cross-links resolve against real cluster ids (0 dangling of 169 edges).
Planned pages are shown as text only (they are not routes). Nothing fabricated;
every href resolves.

## Files

**Created:** `lib/knowledge-graph/graph.ts` (runtime helpers — kept separate from
`taxonomy.ts` so the type-only taxonomy test keeps loading under
`--experimental-strip-types`), `app/knowledge-graph/page.tsx`,
`app/knowledge-graph/[clusterId]/page.tsx`.
**Edited:** `app/sitemap.ts` (+/knowledge-graph and per-cluster URLs),
`components/layout/Header.tsx` and `Footer.tsx` (a top-level "Knowledge Graph"
nav link — NOT added to `SectionId`, so the content machinery is untouched).

Reuses the existing `Container` / `Breadcrumbs` / `JsonLd` / `buildMetadata` /
`breadcrumbSchema` building blocks so it matches the site and carries breadcrumb
JSON-LD.

## Impact

Routes 389 → **437** (overview + 47 cluster pages). Internal nav links
**~15,700 → ~19,700** — the asset materially densifies the internal-link graph
(each cluster page links to connected clusters, section hubs, and live pages),
directly serving the "denser knowledge graph every wave" goal. No content entries
added (site remains 369 content pages).

## QA

typecheck ✓ · lint ✓ · test:content (369) ✓ · test:unit (57 — taxonomy test still
green; graph.ts is not imported by taxonomy.ts) ✓ · build ✓ (`/knowledge-graph` +
47 cluster routes prerendered) · check:routes (437 routes, no broken links) ✓ ·
indexnow --dry-run ✓. No `localhost`/`noindex`.

## Next authority assets

Interactive Printer Timeline; Printing standards explorer; Printer-language
explorer (PCL/PostScript/PDF/IPP/ESC-P); Printer technology comparison engine;
Manufacturer relationship graph; Consumable-compatibility datasets; Printer
Compatibility Database; ecosystem maps — each a durable interactive reference,
with verified historical imagery and ever-denser internal linking.
