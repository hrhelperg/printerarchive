# PrinterArchive.net — Phase 4A: Historical Authority Expansion (Content & Linking)

- **Date:** 2026-05-19
- **Status:** Approved (design); pending spec review before implementation plan
- **Repo:** `/Users/petrohrys/printerarchive` → `github.com/hrhelperg/printerarchive`
- **Branch:** `feat/foundation-architecture` (never push to `main`)
- **Builds on:** `2026-05-18-printerarchive-foundation-design.md`, `2026-05-19-printerarchive-editorial-redesign-design.md`. Where silent, those govern.
- **Phase:** Phase 4 is decomposed. **This spec covers Phase 4A only:** curated historical/fax/brand content clusters + internal-linking graph + an image-needs manifest. **Out of 4A:** image binaries (Phase 4B), homepage storytelling (Phase 4C).

---

## 1. Purpose & Positioning

Deepen genuine historical and technical authority so PrinterArchive.net reads like a museum archive / documentary-style technical reference — not an SEO content farm. 4A adds a curated, densely cross-linked set of substantial editorial pages and strengthens the entity graph. It deliberately does **not** create the full ~30-slug list from the brief; curation and depth are the point ("no mass-generation, no shallow pages").

## 2. Hard Constraints (non-negotiable)

- **No invented facts.** No fabricated dates, specifications, statistics, market share, manufacturer claims, or sources. Where precise attribution is contested or unverifiable, write conceptually by era/principle and include a "note on dates/figures" `callout` (the existing history pages' established pattern). `sources` only for genuinely well-known references; otherwise omit the field.
- **No architecture/type/component/dependency change.** Only new typed content modules under `content/<section>/` plus their registration in `lib/content/registry.ts`, plus narrowly-targeted edits to existing entries' `related`/`seeAlso` for bidirectional linking. No edits to `lib/content/types.ts`, components, `next.config.ts`, or dependencies. No Client Components. **One permitted exception:** a minimal, test-covered correction to the pure helper `lib/content/kicker.ts` so a `HistoryEntry` returns its `era` regardless of `section` (see §4 fax note). This is a lib-helper fix with a new `scripts/kicker.test.mjs` case (TDD), not a type/component/architecture change.
- **No image data in 4A.** Do not set `hero` or add `figure` blocks (a stub image fails the integrity gate). Pages remain graceful-default. Image intentions are recorded in a manifest doc for Phase 4B.
- **Content integrity gate must pass.** Every entry: required text fields present, `description` ≤ 165 chars, ISO `published`/`updated`, non-empty typed `body`, and **every `related`/`seeAlso` ref resolves** (no dangling). `npm run test:content` and `npm run build` fail otherwise.
- Voice/identity unchanged: `author`/`editor` = `"PrinterArchive Editorial"`; calm archival register; publisher strings untouched.
- Branch `feat/foundation-architecture`; logical commits; push; never merge `main`.

## 3. Narrative Voice & Framing (editorial direction — enforceable)

Every 4A page is **documentary, museum-grade technical editorial** that communicates printing as **infrastructure of the information age**: technological evolution, office-culture transformation, workflow history, and historical systems analysis. Pages must not read like encyclopedia stubs or definitional explainers.

**Prioritize:** technological transitions; workflow evolution; concrete operational limitations of each era; office-culture and workplace-behavior change; historical trade-offs and technological constraints; *why* each technology replaced the previous generation; how printing reshaped human workflows.

**Prefer:** contextual storytelling; era continuity; technological relationships; workflow cause-and-effect; cross-era comparison; practical historical realities; historically-grounded technical explanation.

**Avoid (anti-patterns — a page exhibiting these fails review):** repetitive educational intros; SEO-definition phrasing; generic "X is a technology that…" / "What is X" openings; keyword-first writing; promotional tone; listicles; affiliate framing; AI-filler; shallow standalone pages disconnected from the broader evolution.

**Per-page structural rule (reviewable):** every page must (1) open with a transition/context hook — the operational reality or workplace problem of the era — *not* a definition; (2) explain the trade-offs and constraints that made the technology necessary and the cause-and-effect of what it superseded or was superseded by; (3) connect explicitly to adjacent eras/technologies and to ≥1 other archive page in-body (era continuity, not an island). Pages whose slug reads definitional (e.g. `how-dot-matrix-printers-work`) are still written transition-first: lead with what it *enabled and constrained* and how it changed office work; the mechanism serves the narrative, never the reverse.

Register: a technology museum's interpretive text crossed with a technical history journal — precise, calm, contextual, analytical, never promotional. This standard is a per-page acceptance gate in the implementation plan, reviewed per batch alongside the no-invented-facts rule.

## 4. Content Set (exact)

All `section`/`slug`/type/`cluster` fixed here. Each page: typed `ContentBlock` body with `keyTakeaways`, 4–7 `h2` sections, paragraphs, and `timeline`/`table`/`callout`/`pullquote` where genuinely apt; a `summary` lede; 2–3 `faqs`; `keywords`; `cluster`; `related` (≥3 resolving refs). Depth ≥ existing history pages.

**History · evolution** — `section: "history"`, `cluster: "printing-evolution"`, `era` set per page:
- `transition-from-impact-to-laser-printing`
- `evolution-of-office-printing`
- `evolution-of-color-printing`
- `history-of-desktop-publishing`
- `history-of-wireless-printing`

**History · era** — `section: "history"`, `cluster: "office-printing-era"`:
- `printing-in-the-1980s`
- `printing-in-the-1990s`
- `office-printing-before-wifi`

**History · technology** — `section: "history"`, `cluster: "impact-and-early-digital"`:
- `how-dot-matrix-printers-work`
- `how-impact-printing-worked`
- `how-early-laser-printers-worked`
- `early-network-printing-systems`

**Fax / document history** — `section: "fax"` as `HistoryEntry` (the type permits `section: "history" | "fax"` for `HistoryEntry`; use `HistoryEntry` with `section: "fax"` and an `era`), `cluster: "fax-history"`:
- `history-of-business-faxing`
- `analog-fax-vs-digital-fax`
- `fax-machines-before-email`
- `decline-of-office-fax-machines`
- `why-fax-is-still-used`

**Fax eyebrow note:** `entryKicker` currently routes `section: "fax"` through the guide/`difficulty` branch, so a fax `HistoryEntry` (no `difficulty`) would render the wrong eyebrow "Fax · Guide". 4A applies the permitted §2 exception: reorder `kicker.ts` so a `HistoryEntry` (`"era" in e && e.era`) returns its `era` *before* the section switch, yielding the correct "Fax · &lt;era&gt;" for these pages and leaving all existing kicker behavior unchanged. A new `scripts/kicker.test.mjs` case asserts `entryKicker({ section: "fax", era: "..." }) === "..."` and the existing 6 kicker assertions stay green (TDD: add the failing case, reorder, green).

**Brands** — `section: "brands"`, `cluster: "brand-overview"`:
- Deepen existing: `hewlett-packard`, `canon`, `epson`, `brother`, `xerox` — add body sections for historical context, printer categories, enterprise-vs-home usage, technological relevance, and explicit workflow + troubleshooting relationships (expressed via prose + `related` refs; **no fabricated market share**). Keep existing `brand`/`focusAreas`; only `body`/`related`/`cluster`/`keywords`/`updated` change.
- New: `ricoh`, `kyocera`, `lexmark` — full `BrandEntry` at the deepened bar.

Total: **20 new pages** (5 evolution + 3 era + 4 technology + 5 fax + 3 brands) + **5 deepened** existing brand pages = **25 entries touched**. Every new page registered in `lib/content/registry.ts` and reachable from its section hub.

## 5. Internal-Linking Graph (zero orphans)

- Each new page declares `cluster` (per §4) and ≥3 `related` `ContentRef`s that resolve, plus contextual in-body references where natural.
- Cross-section edges, bidirectional:
  - **History ↔ Brands:** laser/desktop-publishing/office-evolution pages ↔ `xerox`/`hewlett-packard`/`canon`; brand pages ↔ their relevant history/technology pages.
  - **History/Technology ↔ Glossary:** relevant new tech/history pages ↔ glossary via the glossary entries' `seeAlso` and the pages' `related` (e.g. `dot-matrix`-adjacent ↔ `dpi`, `toner`, `print-spooler`, `thermal-printing`). Targeted `seeAlso` additions to existing glossary entries are in scope (additive only).
  - **Technology ↔ Troubleshooting:** `how-*-work` / `early-network-printing-systems` ↔ relevant existing troubleshooting entries.
  - **Workflows ↔ Mobile / Fax ↔ Workflows:** `history-of-wireless-printing` ↔ mobile-printing & workflow entries; fax-history cluster ↔ document workflow entries.
- Light, targeted back-links: a small number of existing entries (e.g. `evolution-of-laser-printing`, `office-printing-in-the-1990s`, `history-of-fax-machines`, relevant glossary terms, relevant brand pages) get additive `related`/`seeAlso` entries pointing into the new clusters so the graph is bidirectional. This is targeted linking only — **not** a broad refactor of existing content bodies.
- Result: no orphan pages; every new page reachable from a hub and from ≥1 related/in-body link; `getRelated` (cluster +3 / keyword overlap) produces meaningful results for every new page.

## 6. Image-Readiness (no binaries in 4A)

4A introduces **zero** `hero`/`figure` data. Pages render with the graceful typographic Frontispiece (already supported). 4A delivers `docs/superpowers/specs/2026-05-19-phase-4b-image-manifest.md`: a per-page table of intended hero/figure subject + recommended public-domain source type (Wikimedia Commons / Library of Congress / public museum-archive) for Phase 4B's vetted-manifest approval workflow. No URLs are committed as fact unless verifiable; the manifest describes *needs and candidate source categories*, not asserted licenses.

## 7. Delivery & QA

Logical commit batches, build green after each:
1. History · evolution cluster (5)
2. History · era + technology clusters (3 + 4)
3. Fax / document-history cluster (5) — **first step:** the §2/§4 `kicker.ts` TDD correction (failing `scripts/kicker.test.mjs` case → reorder → green), then the 5 fax `HistoryEntry` pages
4. Brands: 3 new + 5 deepened + full linking-graph wiring + image manifest

Gate after every batch and at end: `npm run typecheck` · `npm run lint` · `npm run test:content` · `npm run test:unit` · `npm run build` (all must pass; 71→higher static routes, no dangling refs, no Client Components, no hydration warnings).

Final report: pages added, clusters, brand-authority improvements, linking improvements, image manifest summary, performance observations, remaining gaps/recommendations.

## 8. Out of Scope (4A)

Image binaries and the curation/approval/commit of real images (Phase 4B). Homepage authority/storytelling enhancement (Phase 4C). Any change to `lib/content/types.ts`, components, `next.config.ts`, dependencies. New sections. SEO mass-generation. The full literal ~30-slug brief list (curated subset only, by approved Approach A).

## 9. Risks

- **Fabrication pressure** across many history/era pages with scarce verifiable facts → mitigated by §2/§3 (era/principle framing, "note on dates" callouts, sources omitted unless genuine) and explicit manual factual review per batch.
- **Dangling refs** as the graph grows → mitigated by the integrity gate (build fails on unresolved `related`/`seeAlso`); batches ordered so referenced targets exist before referrers, or refs added in the same batch.
- **Scope creep toward 4B/4C** → image binaries and homepage work are explicitly deferred; 4A success does not depend on any image existing.
