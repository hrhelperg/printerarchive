# Phase 5.1 — Institutional Trust Foundation Implementation Plan

> **For agentic workers:** This plan is executed by the controller (Opus 4.7) via five subagent dispatches with two-stage review per task (spec compliance, then editorial/design quality). The subagent prompts in §5 below are the dispatch payloads; the spec at [docs/superpowers/specs/2026-05-20-phase-5-1-institutional-trust-foundation.md](docs/superpowers/specs/2026-05-20-phase-5-1-institutional-trust-foundation.md) is the authoritative source for all copy and component contracts.

**Spec:** [docs/superpowers/specs/2026-05-20-phase-5-1-institutional-trust-foundation.md](docs/superpowers/specs/2026-05-20-phase-5-1-institutional-trust-foundation.md)

**Branch:** `feat/foundation-architecture` only. Never merged to `main` in this sub-phase.

**Goal:** Establish 4 institutional trust pages, promote `SourcesList` to `SourceTransparency`, seed verified bibliographies on 5 history entries, wire Footer + llms.txt for discovery. No new dependencies, no client components, no scope creep into 5.2–5.4 territory.

---

## 1. Pre-flight (controller, once)

- [x] Spec committed at `8f422a7`.
- [ ] Verify branch is `feat/foundation-architecture` and tree is clean.

## 2. Execution shape

Five subagent dispatches (one per task), each followed by two-stage review (spec compliance + editorial/design quality). Then Task 6 (controller) does the final QA gate, push, and report.

| Task | Concern | Files (CREATE / MODIFY / DELETE) | Model |
|---|---|---|---|
| 1 | Changelog system | C `lib/changelog.ts`, C `app/changelog/page.tsx` | sonnet |
| 2 | SourceTransparency promotion | C `components/content/SourceTransparency.tsx`, M `components/pages/ArticlePage.tsx`, D `components/content/SourcesList.tsx` | sonnet |
| 3 | Source backfill on 5 history pages | M 5 entry files under `content/history/` | haiku |
| 4 | 3 institutional policy pages | C `app/editorial-policy/page.tsx`, C `app/source-policy/page.tsx`, C `app/archive-methodology/page.tsx` | haiku |
| 5 | About upgrade + Footer + llms.txt | M `app/about/page.tsx`, M `components/layout/Footer.tsx`, M `app/llms.txt/route.ts` | sonnet |
| 6 | Final QA + push | — (controller) | — |

## 3. Review pass criteria

After each task's implementer subagent reports DONE, the controller dispatches two reviewers in sequence:

**Stage 1 — Spec compliance reviewer:** confirms the implementer wrote exactly what the spec demands. Reviewer checks:
- All files in the task's CREATE/MODIFY/DELETE list are present.
- All copy strings match the spec verbatim (no paraphrase, no added editorial flair, no shortened sentences).
- All component contracts match (props, markup, ARIA, class names).
- All sources arrays match the spec's bibliographies verbatim.
- No invented additional files, additional copy, or scope creep.

**Stage 2 — Code quality reviewer:** confirms the implementation is well-built. Reviewer checks:
- TypeScript strict mode satisfied.
- No `"use client"`, no hooks, no client-only patterns.
- No new dependencies.
- Accessibility (semantic HTML, valid `<details>`, headings hierarchy).
- Tailwind classes match the project's existing register.
- No console statements, no commented-out code, no TODO markers.

If either reviewer flags issues, the implementer subagent fixes them and the same reviewer re-reviews. Only after both reviewers approve does the controller move to the next task.

## 4. Verification after every commit

The implementer must run, and report results from:

```
npm run typecheck
npm run lint
npm run test:content
npm run test:unit
```

These four must be clean before the implementer reports DONE. After Task 5, the controller adds `npm run build` (96 routes expected) in Task 6.

## 5. Subagent dispatch payloads

The full text of each subagent dispatch is in §6. Each dispatch includes:

- The full spec excerpt for the task (so the subagent doesn't need to open the spec).
- The exact files to create / modify / delete.
- The verification commands to run before reporting DONE.
- The DONE / NEEDS_CONTEXT / BLOCKED status-reporting contract.

## 6. Task dispatches

### Task 1 dispatch — Changelog system

**Concern:** create `lib/changelog.ts` typed data module + `app/changelog/page.tsx` rendering it.

**Files:**
- CREATE `lib/changelog.ts` — exact content from spec §6.4 "Data module"
- CREATE `app/changelog/page.tsx` — exact content from spec §6.4 "Page"

**Commits:** two (one per file, in order: data module first, then page).

**Verification:**
```
npm run typecheck
npm run lint
```

Both must be clean. Report DONE with the two commit SHAs.

### Task 2 dispatch — `SourceTransparency` promotion

**Concern:** create the richer `SourceTransparency` component, swap the single call site in `ArticlePage`, delete the old `SourcesList`.

**Files:**
- CREATE `components/content/SourceTransparency.tsx` — exact content matching spec §4 "Component specification: `SourceTransparency`":
  - Wrapper `<section aria-labelledby="source-transparency" className="mt-12 border-t border-rule pt-8">`.
  - Heading `<h2 id="source-transparency" className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-soft">Source transparency <span className="text-ink-faint">({sources.length} {sources.length === 1 ? "source" : "sources"})</span></h2>` (preserves the existing SourcesList uppercase-kicker style).
  - One always-visible policy line: `<p className="mt-3 text-sm text-ink-soft text-pretty">These references support claims made in this entry. The archive uses verified institutional and public-domain sources only; see <Link href="/source-policy">Source policy</Link>.</p>` — uses Next's `Link` import.
  - `<details className="mt-4">` containing `<summary className="font-sans text-sm cursor-pointer text-ink-soft hover:text-ink">Sources consulted ({sources.length})</summary>` and the existing `<ul>` rendering.
  - Empty-state: return `null` when `sources.length === 0`.
  - Top of file: a 4-line comment noting the "Verified archival source" badge is deferred to sub-phase 5.3 pending a source-type taxonomy.
- MODIFY `components/pages/ArticlePage.tsx` — replace the `SourcesList` import with `SourceTransparency`, and replace the `<SourcesList sources={e.sources} />` JSX with `<SourceTransparency sources={e.sources} />`.
- DELETE `components/content/SourcesList.tsx`.

**Critical:** after the swap, `git grep SourcesList` must return nothing.

**Commits:** three (component create; ArticlePage swap; SourcesList delete — in that order; each commit independently builds clean because the old component remains until the swap commit lands).

**Verification (after the third commit):**
```
npm run typecheck
npm run lint
npm run test:content
```

All three must be clean.

### Task 3 dispatch — Source backfill on 5 history pages

**Concern:** add the `sources?` array to each of 5 history entries, with bibliography data **copied verbatim** from spec §5.1–§5.5. Also bump `updated:` to `2026-05-20` on each.

**Files modified** (each gets one commit; controller-side: prefer a single commit for editorial cohesion since these are all the same concern — "seed source bibliographies on representative pages"):
- MODIFY `content/history/history-of-printers.ts` — add sources from spec §5.1, bump `updated:`.
- MODIFY `content/history/history-of-fax-machines.ts` — add sources from spec §5.2.
- MODIFY `content/history/transition-from-impact-to-laser-printing.ts` — add sources from spec §5.3.
- MODIFY `content/history/history-of-desktop-publishing.ts` — add sources from spec §5.4.
- MODIFY `content/history/evolution-of-laser-printing.ts` — add sources from spec §5.5.

**Placement:** insert the `sources:` field **between `keywords:` and `cluster:`** in each entry. Preserve all existing field order otherwise.

**Commits:** one commit covering all 5 entries — this is one editorial concern ("seed source bibliographies").

**Verification:**
```
npm run typecheck
npm run test:content
```

`test:content` MUST report `72 entries, no issues found` — the integrity gate validates source-array shape.

### Task 4 dispatch — 3 institutional policy pages

**Concern:** create three policy pages with copy taken **verbatim** from the spec.

**Files:**
- CREATE `app/editorial-policy/page.tsx` — copy verbatim from spec §6.1.
- CREATE `app/source-policy/page.tsx` — copy verbatim from spec §6.2.
- CREATE `app/archive-methodology/page.tsx` — copy verbatim from spec §6.3.

**Commits:** three (one per page).

**Verification:**
```
npm run typecheck
npm run lint
```

Both clean. The build inspection (route count → 95, then → 96 after Task 5's nothing-adds + the changelog page already shipped in Task 1) is deferred to Task 6.

### Task 5 dispatch — /about upgrade + Footer + llms.txt enrichment

**Concern:** wire all institutional surfaces together — upgrade `/about` with cross-links, add Footer links, enrich `llms.txt`.

**Files:**
- MODIFY `app/about/page.tsx` — replace contents verbatim from spec §6.5. Preserves the four existing sections; appends six new sections (Editorial standards, Source transparency, Image provenance, Correction policy, Methodology, Changes) and a "Last reviewed" footer line. Adds `import Link from "next/link";` to the top.
- MODIFY `components/layout/Footer.tsx` — insert four `<Link>`s between the existing About and Contact links in the bottom utility bar, per spec §7. Visible order: `About · Editorial policy · Source policy · Methodology · Changelog · Contact · RSS · llms.txt · Sitemap`.
- MODIFY `app/llms.txt/route.ts` — two additions per spec §8:
  1. After the `Publisher:` line, insert a `## About this archive` block listing the five institutional pages (Editorial policy, Source policy, Methodology, Changelog, About).
  2. In the existing entry loop, when `e.sources?.length` is present, append ` [N sources]` to the entry line.

**Commits:** three (one per file).

**Verification:**
```
npm run typecheck
npm run lint
npm run test:content
```

All three clean.

### Task 6 — Final QA + push (controller, no subagent)

**Verification gate (full):**
```
npm run typecheck
npm run lint
npm run test:content     # 72 entries, no issues
npm run test:unit        # 22/22
npm run build            # 96 prerendered routes
```

**Prerendered-HTML invariants** to check via Node:
- `/editorial-policy`, `/source-policy`, `/archive-methodology`, `/changelog`, `/about` each have exactly one `<h1>`, contain no `localhost`, contain no `noindex`.
- One of the 5 backfilled history pages (e.g., `/history/history-of-fax-machines`) contains `<section aria-labelledby="source-transparency">`, the policy line linking to `/source-policy`, the count "(3 sources)", and a `<details>` containing the three `<li>` source entries (verifying that `<details>` does not gate from crawlers).
- `llms.txt` body contains the new `## About this archive` block and at least one `[3 sources]` annotation.
- `git grep SourcesList` returns nothing.

**Push:**
```
git symbolic-ref --short HEAD     # must read feat/foundation-architecture
git push origin feat/foundation-architecture
```

**Final report** lists: files created/modified/deleted, source backfill verification (5 pages × 3 sources), QA gate results, route count, launch-readiness signal, remaining risks.

## 7. Self-review

1. **Spec coverage:** every numbered §3–§13 item of the spec maps to at least one task. Task 1 ↔ §6.4 + §3 `lib/changelog.ts`. Task 2 ↔ §3 SourceTransparency + §4 + §9 ArticlePage swap. Task 3 ↔ §5. Task 4 ↔ §6.1 + §6.2 + §6.3. Task 5 ↔ §6.5 + §7 + §8. Task 6 ↔ §10 + §13.
2. **Placeholder scan:** no TBDs. No "appropriate." No "fill in." Every dispatch tells the subagent exactly which files to touch and which spec section to copy from.
3. **Type consistency:** `SourceTransparency` takes the same `{ title: string; url?: string; publisher?: string }[]` shape as the existing `SourcesList` (already validated against `ContentEntry.sources?`). `ChangelogEntry` uses a literal-union `kind` matching the `KIND_LABEL` record.

## 8. Done criteria

Same as the spec's §13:
- All 4 new institutional pages render in `npm run build`.
- All 5 backfilled history pages render `SourceTransparency` with policy line + collapsed `<details>` containing source `<li>`s.
- `git grep SourcesList` returns nothing.
- All five QA commands pass.
- Branch is still `feat/foundation-architecture` only.
- Final report delivered.
