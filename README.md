# PrinterArchive

Authority platform about printers, fax technology, scanning, mobile printing,
document workflows, troubleshooting, and the history of printing — *the
internet archive of printing knowledge.*

A static-first, editorial knowledge site built with Next.js (App Router),
TypeScript, and Tailwind CSS. No database, authentication, or payment
systems: content is authored as typed TypeScript modules and rendered to
clean, semantic, statically generated HTML with a strong SEO foundation.

## Tech stack

- Next.js (App Router) + React, TypeScript (strict)
- Tailwind CSS, `next/font`
- Static generation (`generateStaticParams`), Server Components by default

## Development

```bash
npm install
npm run dev          # start the dev server (http://localhost:3000)
```

## Verification

```bash
npm run typecheck    # tsc --noEmit
npm run lint         # eslint
npm run test:content # content-integrity check (zero-dependency)
npm run build        # production build — source of truth
```

## Architecture

- `content/<section>/*.ts` — typed content modules (one file per page)
- `lib/content/` — content types, registry, queries, integrity
- `lib/seo/` — metadata + JSON-LD schema builders
- `components/` — layout, content renderer, and shared page components
- `app/<section>/` — thin route wrappers around shared `SectionHub` /
  `ArticlePage` components, plus `sitemap`, `robots`, `llms.txt`, and RSS

Adding a page is adding one typed module to a section folder and
registering it — the architecture scales without structural change.

The full content taxonomy — the clusters, entities, and page capacity the
architecture is designed to reach — is documented in
[`docs/superpowers/specs/2026-07-05-phase9-knowledge-graph.md`](docs/superpowers/specs/2026-07-05-phase9-knowledge-graph.md)
and encoded as data in [`lib/knowledge-graph/`](lib/knowledge-graph/).

## Search indexing (IndexNow)

Published URLs are submitted to [IndexNow](https://www.indexnow.org/) after each
deploy so search engines recrawl sooner. See [`docs/indexnow.md`](docs/indexnow.md)
for the key file, the `npm run indexnow` submitter, and the deploy trigger.

## Publisher

Published by HELPERG LLC. Editorial questions and corrections:
info@helperg.com.
