# Phase 5.2 — Longform Editorial Component Library Implementation Plan

> Spec: [docs/superpowers/specs/2026-05-20-phase-5-2-longform-editorial-component-library.md](docs/superpowers/specs/2026-05-20-phase-5-2-longform-editorial-component-library.md)

**Branch:** `feat/foundation-architecture` only. Never merged to `main` in this sub-phase.

**Goal:** Ship the 10 longform editorial components + 8 new ContentBlock variants + 3 new BaseEntry fields + 4 new integrity-gate rules + 10 new unit tests, with the build green at every checkpoint.

Execution: 5 subagent dispatches × 2-stage review (spec compliance, code quality). Final QA + push by the controller. Same shape as Phase 5.1.

| Task | Concern | New files | Modified shared files | Model |
|---|---|---|---|---|
| 1 | Footnotes system end-to-end | FootnoteRef.tsx, ArchiveFootnotes.tsx | types.ts (footnoteRef + footnotes), integrity.ts (4 footnote rules), ArticleBody.tsx (footnoteRef case), ArticlePage.tsx (footnotes section) | sonnet |
| 2 | 4 inline editorial blocks | SourceCallout.tsx, EditorialAside.tsx, TimelineBreak.tsx, QuotePlate.tsx | types.ts (4 variants), ArticleBody.tsx (4 cases) | sonnet |
| 3 | 3 structured / visual blocks | FigurePair.tsx, ArchivalTable.tsx, ResearchInset.tsx | types.ts (3 variants), integrity.ts (figurePair + archivalTable rules), ArticleBody.tsx (3 cases) | sonnet |
| 4 | 2 standalone components | EssayLead.tsx, DeepReadingLinks.tsx | types.ts (essayLead + deepReading BaseEntry fields), integrity.ts (deepReading rule), ArticlePage.tsx (EssayLead conditional + DeepReadingLinks section) | sonnet |
| 5 | 10 unit tests + final QA + push | — | scripts/integrity.test.mjs (10 new tests) | haiku |

## Per-task verification

After every commit each implementer must run:

```
npm run typecheck
npm run lint
npm run test:content
```

All three must be clean. After Task 5 the controller also runs `npm run test:unit` (32/32 expected) and `npm run build` (96 routes).

## Review gates

Each task: spec-compliance reviewer first, then code-quality reviewer. Reviewers verify against the spec sections cited in each dispatch payload. Loops continue until both reviewers `APPROVED` / `SPEC COMPLIANT` before the controller moves to the next task.

## Plan self-review

1. **Spec coverage:** every §3–§9 file in the spec maps to a task. Task 1 = footnotes (§3.1 footnoteRef + §3.2 footnotes field + §5.1 + §5.2 + §6.3 + §7.1). Task 2 = §3.1 (sourceCallout/editorialAside/timelineBreak/quotePlate) + §5.3–§5.5 + §5.7 + §4. Task 3 = §3.1 (figurePair/archivalTable/researchInset) + §5.6 + §5.8 + §5.9 + §4 + §7.2 + §7.3. Task 4 = §3.2 (essayLead + deepReading fields) + §5.10 + §5.11 + §6.2 + §6.3 + §7.4. Task 5 = §8 + §10 (verification).
2. **Placeholder scan:** every dispatch quotes the spec's exact component code, exact integrity rule code, and exact ArticleBody/ArticlePage diff. No "TBD," no "appropriate," no "similar to X."
3. **Type consistency:** all new BaseEntry fields use existing ContentRef/ArchiveImage interfaces; all new ContentBlock variants slot into the existing discriminated union; all imports use the existing `@/` alias.

## Done criteria

Same as the spec's §13. Final report at the end summarising components, content-model changes, integrity rules, verification results, remaining risks.
