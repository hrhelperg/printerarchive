# Phase 4A — Historical Authority Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a curated, densely cross-linked set of 20 museum-grade historical/fax/technology pages + deepen 5 brand pages + 3 new brands, with a zero-orphan internal-linking graph and a Phase-4B image-needs manifest — no image binaries, no architecture change.

**Architecture:** New typed content modules under `content/<section>/`, each registered in `lib/content/registry.ts`. One pure-helper correction to `lib/content/kicker.ts` (TDD). Targeted additive `related`/`seeAlso` edits to a few existing entries for bidirectional links. Pages stay graceful-default (no `hero`/`figure`). The build-time content-integrity gate enforces structure and link resolution.

**Tech Stack:** Next.js 16 App Router, TypeScript strict, typed `ContentEntry` discriminated union, Node built-in `node:test`, zero new dependencies, all Server Components / static.

---

## Conventions & Constraints (read once, apply to every task)

- **Source of truth:** `docs/superpowers/specs/2026-05-19-phase-4a-historical-authority-design.md`. §2 = hard constraints, §3 = enforceable narrative-voice per-page gate, §4 = exact content set, §5 = linking graph.
- **Branch:** `feat/foundation-architecture`. Never `main`. One logical commit per task. Commit body ends with exactly:
  `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>` (if gpg signing blocks: `git -c commit.gpgsign=false commit ...`).
- **No invented facts (§2).** No fabricated dates, specs, statistics, market share, manufacturer claims, or sources. Where precise attribution is contested/unverifiable, write conceptually by era/principle and add a `callout` tone `"note"` titled e.g. "A note on dates" / "A note on figures" (the established pattern in `content/history/history-of-printers.ts`). Populate `sources` only with genuinely well-known references; otherwise omit the field entirely.
- **Narrative-voice gate (§3) — every new page must:** (1) open with a transition/context hook (the era's operational reality or workplace problem), NOT a definition or "X is a …"; (2) explain trade-offs/constraints and the cause-and-effect of what it superseded or was superseded by; (3) connect explicitly to adjacent eras/technologies and link ≥1 other archive page in-body. Register: museum interpretive text × technical history journal — precise, calm, analytical, never promotional. No listicles/affiliate/SEO-definition/AI-filler.
- **No architecture change.** Do NOT edit `lib/content/types.ts`, components, `next.config.ts`, or dependencies. The ONLY non-content code change permitted is the Task 1 `kicker.ts` reorder. No Client Components.
- **No image data.** Do NOT set `hero` or add `figure`/`pullquote`-with-image blocks. Pages render graceful-default. Image intentions are recorded in the Task 5 manifest doc only.
- **Verification gate (run after each task; all must pass):**
  `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run lint && npm run test:content && npm run test:unit && npm run build`
  Expected: typecheck clean; lint clean; `✓ Content integrity OK — N entries, no issues found.` (N grows each task); `test:unit` pass (12 → 13 after Task 1); `✓` build, all static routes, no dangling-ref errors, no Client Components.
- **Author/editor** for every new/edited entry: `author: "PrinterArchive Editorial"`, `editor: "PrinterArchive Editorial"`. `published`/`updated`: `"2026-05-19"`.
- **Link-resolution rule:** every `related`/`seeAlso` ref MUST resolve or `test:content`/`build` fails. Within a task, refs may point to existing pre-4A entries, earlier-task pages, or same-task pages (all registered by task end). Cross-task refs point only to earlier tasks or pre-existing entries. All back-edges from pre-existing entries into 4A pages are added in Task 5 (after all 4A pages exist).

### Canonical typed shapes (DRY — reference, do not re-paste per page)

Read `content/history/history-of-printers.ts` as the canonical depth/voice exemplar before authoring. Required module shape:

```ts
// content/history/<slug>.ts  (HistoryEntry; section "history" or "fax")
import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history", // or "fax" for the fax-history cluster
  slug: "<slug>",
  title: "<Title>",
  description: "<=165 chars, factual, no keyword stuffing",
  summary: "<lede: 2-3 sentences, transition/context hook, not a definition>",
  era: "<conceptual era label, e.g. 'The shared-office era'>",
  body: [
    { kind: "keyTakeaways", items: ["…", "…", "…"] },
    { kind: "heading", level: 2, text: "<transition-hook section>" },
    { kind: "paragraph", text: "…" },
    // 4–7 h2 sections total; paragraphs; optional one timeline/table/callout/pullquote where genuinely apt
    { kind: "callout", tone: "note", title: "A note on dates", text: "…" }, // where attribution is contested
  ],
  faqs: [ { q: "…", a: "…" }, { q: "…", a: "…" } ], // 2–3, contextual not definitional
  related: [ { section: "history", slug: "…" } /* ≥3, all resolving */ ],
  published: "2026-05-19",
  updated: "2026-05-19",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["…", "…", "…"], // descriptive, not keyword-first
  cluster: "<cluster id from spec §4>",
};

export default entry;
```

`BrandEntry` shape is identical to `BaseEntry` plus `section: "brands"`, `brand: string`, `focusAreas: string[]` (no `era`). `ContentBlock` kinds available: `heading`(level 2|3), `paragraph`, `list`(ordered?), `callout`(note|tip|warning), `table`, `keyTakeaways`, `timeline`, `steps`, `pullquote` (text only — NO image), and `figure` (FORBIDDEN in 4A — needs an image).

Registry registration (every new page): in `lib/content/registry.ts` add `import <camel> from "@/content/<section>/<slug>";` in the appropriate section block and append `<camel>,` to the `allEntries` array under the matching section comment.

**Existing slugs available as link targets** (verified — refs to these always resolve):
- history: `history-of-printers`, `history-of-fax-machines`, `early-computer-printing`, `dot-matrix-printers-explained`, `evolution-of-laser-printing`, `evolution-of-inkjet-printers`, `office-printing-in-the-1990s`, `thermal-printing-history`
- fax: `how-fax-machines-work`
- guides: `how-laser-printers-work`, `how-inkjet-printers-work`, `how-printer-drivers-work`, `how-wireless-printing-works`, `laser-vs-inkjet-printers`, `understanding-printer-resolution`, `what-is-a-print-server`, `what-is-duplex-printing`, `what-is-postscript-printing`
- glossary: `dpi`, `toner`, `duplex-printing`, `ocr`, `ppm`, `print-driver`, `print-queue`, `print-spooler`, `scanner-bed`, `thermal-printing`, `airprint`
- mobile-printing: `what-is-airprint`, `printing-from-a-chromebook`
- troubleshooting: `printer-offline-guide`, `printer-not-detected-on-mac`, `printer-not-detected-on-windows`, `printer-wont-connect-to-wifi`, `paper-jam-guide`, `printer-printing-blank-pages`, `scanner-not-detected`, `airprint-not-working`, `printer-offline-windows-11`
- brands: `hewlett-packard`, `canon`, `epson`, `brother`, `xerox`
- workflows: `scan-to-searchable-pdf`, `print-from-iphone`, `print-from-android`, `print-documents-from-ipad`, `print-shipping-labels`, `mobile-office-printing`
- tools: `what-is-pdf`

---

## File Structure

- **Create (20):** `content/history/{transition-from-impact-to-laser-printing, evolution-of-office-printing, evolution-of-color-printing, history-of-desktop-publishing, history-of-wireless-printing, printing-in-the-1980s, printing-in-the-1990s, office-printing-before-wifi, how-dot-matrix-printers-work, how-impact-printing-worked, how-early-laser-printers-worked, early-network-printing-systems}.ts`; `content/fax/{history-of-business-faxing, analog-fax-vs-digital-fax, fax-machines-before-email, decline-of-office-fax-machines, why-fax-is-still-used}.ts`; `content/brands/{ricoh, kyocera, lexmark}.ts`
- **Modify:** `lib/content/kicker.ts` (Task 1 reorder); `scripts/kicker.test.mjs` (Task 1 new case); `lib/content/registry.ts` (each content task); `content/brands/{hewlett-packard,canon,epson,brother,xerox}.ts` (Task 5 deepen); a small set of existing entries' `related`/`seeAlso` for back-edges (Task 5, additive only).
- **Create (doc):** `docs/superpowers/specs/2026-05-19-phase-4b-image-manifest.md` (Task 5).

Each content file has one responsibility (one archive page). Naming/structure follows the established `content/**` pattern exactly.

---

## Task 1 — `kicker.ts` correction: HistoryEntry era before section (TDD)

**Files:** Modify `lib/content/kicker.ts`; Modify `scripts/kicker.test.mjs`

Rationale/deviation note: spec §7 placed this at the start of the fax batch; doing it as Task 1 is strictly safer (independent, no content dependency, no window where a fax history page renders the wrong eyebrow). Behaviorally identical outcome.

- [ ] **Step 1: Read current `lib/content/kicker.ts`** and confirm the switch routes `case "fax"` through the `difficulty` branch (returns `"Guide"` when no `difficulty`).

- [ ] **Step 2: Write the failing test — append to `scripts/kicker.test.mjs`** (after the existing `entryKicker` tests, before any closing):

```js
test("fax HistoryEntry -> era (not Guide)", () => {
  assert.equal(
    entryKicker({ section: "fax", era: "The fax era" }),
    "The fax era",
  );
});

test("history HistoryEntry still -> era", () => {
  assert.equal(
    entryKicker({ section: "history", era: "Impact era" }),
    "Impact era",
  );
});
```

- [ ] **Step 3: Run test — verify RED**

Run: `cd /Users/petrohrys/printerarchive && npm run test:unit`
Expected: the existing 12 tests behave as before; the new `fax HistoryEntry -> era` test FAILS (`entryKicker` returns `"Guide"` for `{section:"fax",era:...}` because the fax case hits the difficulty branch). The `history … still -> era` test passes (regression guard). If the fax test unexpectedly passes, STOP and report.

- [ ] **Step 4: Implement — reorder `lib/content/kicker.ts`** so a `HistoryEntry` (anything carrying a truthy `era`) returns its `era` before the section switch. Replace the body of `entryKicker` so it begins, immediately after the function opening brace and before `switch (e.section)`, with:

```ts
  if ("era" in e && e.era) return String(e.era);
```

Then keep the existing `switch (e.section) { … }` exactly as-is EXCEPT remove the now-redundant `case "history":` `era` lookup body and let `case "history":` fall through to `return "History";` (i.e. `case "history": return "History";`). Do not change any other case, the `cap` helper, the signature, or the `default`. Net effect: `era` wins for any entry that has one (history or fax HistoryEntry); every other section label is unchanged.

- [ ] **Step 5: Run test — verify GREEN**

Run: `cd /Users/petrohrys/printerarchive && npm run test:unit && npm run typecheck && npm run lint && npm run test:content && npm run build`
Expected: ALL unit tests pass (now 14: 6 integrity + 6 original kicker + 2 new); the original 6 kicker assertions still green (history→era, guides→difficulty, troubleshooting→"Troubleshooting", brands→brand, glossary→"Definition", workflows→"Workflow"); typecheck/lint clean; `test:content` OK (53 entries unchanged); build green 71/71.

- [ ] **Step 6: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add lib/content/kicker.ts scripts/kicker.test.mjs
git commit -m "fix(content): entryKicker returns era for any HistoryEntry (incl fax)

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 2 — History · evolution cluster (5 pages) — `cluster: "printing-evolution"`

**Files:** Create the 5 modules below in `content/history/`; Modify `lib/content/registry.ts`.

Authoring contract for ALL pages in this task: `section: "history"`, `cluster: "printing-evolution"`, the canonical shape, the §2 no-fabrication rule, the §3 narrative gate (transition-hook open; trade-offs & supersession cause-and-effect; era-continuity in-body link). Each: `keyTakeaways` (3 items) + 5–7 `h2` sections + paragraphs; a `timeline` block only where it expresses progression honestly without invented dates; a `"A note on dates"` `callout` if any era boundary would otherwise imply a precise contested date; 2–3 contextual `faqs`; 4–6 `keywords`; `related` ≥3 (all resolve).

Per-page briefs — H2 section list is mandatory and chosen to force §3 framing (no "What is X" sections):

- [ ] **Step 1: `transition-from-impact-to-laser-printing.ts`**
  - title: "The Transition from Impact to Laser Printing"; era: "From the hammer to the page"; description ≤165 framing it as a workflow/operational shift.
  - H2s: "The office the impact printer built and limited" · "What impact printing cost in daily work" · "The pressures that made non-impact necessary" · "How laser changed what an office could produce" · "The trade-offs the transition introduced" · "What the shift left behind".
  - related: `[{history,dot-matrix-printers-explained},{history,evolution-of-laser-printing},{guides,how-laser-printers-work},{history,evolution-of-office-printing}]` (last is same-cluster, resolves at task end).
- [ ] **Step 2: `evolution-of-office-printing.ts`**
  - title: "The Evolution of Office Printing"; era: "The shared-office era".
  - H2s: "Printing as office infrastructure, not a device" · "The shared-resource era and its frictions" · "How document expectations escalated" · "Networked printing and the changing workday" · "The operational trade-offs at each step" · "Where office printing stabilized".
  - related: `[{history,office-printing-in-the-1990s},{history,transition-from-impact-to-laser-printing},{guides,what-is-a-print-server},{history,early-network-printing-systems}]` (last resolves in Task 3 — NOT yet present in Task 2). **Correction to honor the link-resolution rule:** replace the 4th ref with `{section:"history",slug:"history-of-printers"}` (pre-existing). Final related: `[{history,office-printing-in-the-1990s},{history,transition-from-impact-to-laser-printing},{guides,what-is-a-print-server},{history,history-of-printers}]`.
- [ ] **Step 3: `evolution-of-color-printing.ts`**
  - title: "The Evolution of Color Printing"; era: "Color becomes ordinary".
  - H2s: "Why early offices lived in monochrome" · "What color cost in workflow and money" · "The shift from specialist output to everyday color" · "How color reset document expectations" · "The constraints color printing still imposed" · "Color as a normalized default".
  - related: `[{guides,how-inkjet-printers-work},{history,evolution-of-inkjet-printers},{guides,laser-vs-inkjet-printers},{glossary,dpi}]`.
- [ ] **Step 4: `history-of-desktop-publishing.ts`**
  - title: "The History of Desktop Publishing"; era: "The page on the desk".
  - H2s: "Publishing before it reached the desk" · "The workflow bottleneck DTP removed" · "How the page-description model changed production" · "What moved in-house and what that displaced" · "The trade-offs of democratized publishing" · "DTP's lasting imprint on office work".
  - related: `[{guides,what-is-postscript-printing},{history,evolution-of-laser-printing},{history,transition-from-impact-to-laser-printing},{guides,understanding-printer-resolution}]`.
- [ ] **Step 5: `history-of-wireless-printing.ts`**
  - title: "The History of Wireless Printing"; era: "Printing without the cable".
  - H2s: "The cable as a workflow constraint" · "What tethered printing made hard" · "How driverless and networked standards changed expectations" · "Mobile work and the shifting role of the printer" · "The trade-offs of convenience" · "Wireless as the assumed default".
  - related: `[{guides,how-wireless-printing-works},{mobile-printing,what-is-airprint},{history,office-printing-in-the-1990s},{workflows,mobile-office-printing}]`.

- [ ] **Step 6: Register all 5** in `lib/content/registry.ts` — add 5 imports in the history block and 5 entries under the `// History` array section (camelCase identifiers, e.g. `histTransitionImpactLaser`, `histEvoOfficePrinting`, `histEvoColor`, `histDesktopPublishing`, `histWirelessHistory`).

- [ ] **Step 7: Verify**

Run the full verification gate. Expected: `test:content` `✓ … 58 entries, no issues found.` (53 + 5), all `related` resolve, typecheck/lint/test:unit/build green.

- [ ] **Step 8: §2/§3 self-check before commit:** re-read each page; confirm no fabricated dates/specs/sources; confirm each opens with a transition/context hook (not "X is …"), contains explicit trade-off + supersession cause-and-effect, and links ≥1 archive page in-body. Fix in place if not.

- [ ] **Step 9: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add content/history/ lib/content/registry.ts
git commit -m "content(history): printing-evolution cluster (5 editorial pages)

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 3 — History · era (3) + technology (4) clusters — `cluster: "office-printing-era"` / `"impact-and-early-digital"`

**Files:** Create 7 modules in `content/history/`; Modify `lib/content/registry.ts`.

Same authoring contract as Task 2 (§2/§3, canonical shape, keyTakeaways + 5–7 h2 + 2–3 faqs + keywords + ≥3 resolving related). Era pages use `cluster: "office-printing-era"`; technology pages use `cluster: "impact-and-early-digital"`.

Era cluster:
- [ ] **Step 1: `printing-in-the-1980s.ts`** — era: "The 1980s office". H2s: "The 1980s desk and its document reality" · "What impact-era output dictated about work" · "The arrival of new printing options and their friction" · "How the workday adapted around the printer" · "The constraints operators simply lived with" · "What the decade set up next". related: `[{history,dot-matrix-printers-explained},{history,office-printing-in-the-1990s},{history,transition-from-impact-to-laser-printing},{history,printing-in-the-1990s}]` (last same-task, resolves at task end).
- [ ] **Step 2: `printing-in-the-1990s.ts`** — era: "The 1990s office". H2s: "The 1990s office and its document expectations" · "The shared printer as contested resource" · "Networking changes who waits and why" · "Color, quality, and escalating expectations" · "The operational trade-offs of the era" · "What carried into the internet era". related: `[{history,office-printing-in-the-1990s},{history,printing-in-the-1980s},{history,evolution-of-office-printing},{guides,what-is-a-print-server}]`.
- [ ] **Step 3: `office-printing-before-wifi.ts`** — era: "Before the wireless office". H2s: "Printing as a wired, located activity" · "How cables and ports shaped desk layout and behavior" · "The print-server era and its queue culture" · "What mobility was impossible and why it mattered" · "The trade-offs of the tethered office" · "What wireless later dissolved". related: `[{guides,what-is-a-print-server},{history,history-of-wireless-printing},{history,printing-in-the-1990s},{glossary,print-queue}]`.

Technology cluster (transition-first even though slugs read definitional — §3):
- [ ] **Step 4: `how-dot-matrix-printers-work.ts`** — era: "The impact-printing era". H2s: "The office problem dot matrix was built to solve" · "What striking the page enabled day to day" · "The multipart-form workflow nothing else could do" · "The operational limits operators accepted" · "Why non-impact eventually displaced it" · "Where dot matrix still survives and why". related: `[{history,dot-matrix-printers-explained},{history,how-impact-printing-worked},{history,transition-from-impact-to-laser-printing},{glossary,thermal-printing}]` (2nd same-task).
- [ ] **Step 5: `how-impact-printing-worked.ts`** — era: "The impact-printing era". H2s: "Printing when the page had to be struck" · "The mechanics in service of the workflow" · "What impact made reliable and cheap" · "The noise, speed, and quality the office tolerated" · "The pressures that ended impact's dominance" · "Impact's residual niche". related: `[{history,how-dot-matrix-printers-work},{history,dot-matrix-printers-explained},{history,transition-from-impact-to-laser-printing},{history,history-of-printers}]`.
- [ ] **Step 6: `how-early-laser-printers-worked.ts`** — era: "The early laser era". H2s: "The output ceiling offices hit before laser" · "What electrophotography changed about a page" · "Why early laser was an institutional, not personal, tool" · "How it reorganized document production" · "The cost and access trade-offs" · "The path from shared laser to ubiquity". related: `[{guides,how-laser-printers-work},{history,evolution-of-laser-printing},{history,history-of-desktop-publishing},{glossary,toner}]`.
- [ ] **Step 7: `early-network-printing-systems.ts`** — era: "The first shared-printer networks". H2s: "When a printer stopped belonging to one desk" · "The queue as a new office reality" · "Spoolers, servers, and who controlled the line" · "How sharing changed behavior and etiquette" · "The reliability trade-offs of early networks" · "What early network printing made permanent". related: `[{guides,what-is-a-print-server},{glossary,print-spooler},{glossary,print-queue},{history,office-printing-before-wifi}]`.

- [ ] **Step 8: Register all 7** in `lib/content/registry.ts` (history block + `// History` array; e.g. `hist1980s, hist1990s, histBeforeWifi, histHowDotMatrix, histHowImpact, histEarlyLaser, histEarlyNetwork`).

- [ ] **Step 9: Verify** — full gate. Expected `✓ … 65 entries, no issues found.` (58 + 7); all related resolve; green.

- [ ] **Step 10: §2/§3 self-check** (as Task 2 Step 8), fix in place.

- [ ] **Step 11: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add content/history/ lib/content/registry.ts
git commit -m "content(history): office-era + impact/early-digital clusters (7 pages)

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 4 — Fax / document-history cluster (5 pages) — `cluster: "fax-history"`

**Files:** Create 5 modules in `content/fax/` typed as `HistoryEntry` with `section: "fax"` and an `era`; Modify `lib/content/registry.ts`.

Same §2/§3 contract + canonical shape. (Task 1 already fixed the eyebrow so these render "Fax · &lt;era&gt;".)

- [ ] **Step 1: `history-of-business-faxing.ts`** — era: "The fax era of business". H2s: "The document-delay problem before fax" · "How instant remote documents changed deal-making" · "Fax as critical business infrastructure" · "The workflow habits fax created" · "The trade-offs businesses accepted" · "What began to erode fax's necessity". related: `[{fax,how-fax-machines-work},{history,history-of-fax-machines},{fax,fax-machines-before-email},{workflows,scan-to-searchable-pdf}]` (3rd same-task).
- [ ] **Step 2: `analog-fax-vs-digital-fax.ts`** — era: "From phone line to packet". H2s: "Why the distinction mattered operationally" · "The analog reality and its constraints" · "What digital transmission changed for offices" · "Reliability, cost, and workflow trade-offs" · "How the transition altered fax's role" · "Where each model persists". related: `[{fax,how-fax-machines-work},{history,history-of-fax-machines},{fax,history-of-business-faxing},{fax,why-fax-is-still-used}]`.
- [ ] **Step 3: `fax-machines-before-email.ts`** — era: "Before the inbox". H2s: "How documents moved before email" · "The fax-centered office workflow" · "What fax could do that mail and courier could not" · "The daily frictions people accepted" · "How email reframed fax's purpose" · "What survived the shift". related: `[{fax,history-of-business-faxing},{history,history-of-fax-machines},{fax,decline-of-office-fax-machines},{workflows,scan-to-searchable-pdf}]`.
- [ ] **Step 4: `decline-of-office-fax-machines.ts`** — era: "The long decline". H2s: "The peak fax office and its assumptions" · "What digital workflows made redundant" · "Why decline was gradual, not sudden" · "The institutional inertia that slowed it" · "The trade-offs of letting fax go" · "What the decline left in place". related: `[{fax,fax-machines-before-email},{fax,why-fax-is-still-used},{history,history-of-fax-machines},{workflows,scan-to-searchable-pdf}]`.
- [ ] **Step 5: `why-fax-is-still-used.ts`** — era: "The persistent exception". H2s: "Why a 'dead' technology never died" · "The legal and procedural niches that hold on" · "Fax as a trust and record artifact" · "The workflow inertia argument" · "The trade-offs of continued use" · "What would actually have to change". related: `[{fax,decline-of-office-fax-machines},{fax,analog-fax-vs-digital-fax},{fax,how-fax-machines-work},{history,history-of-fax-machines}]`.

- [ ] **Step 6: Register all 5** in `lib/content/registry.ts`. NOTE: the registry currently imports the single fax page (`howFax from "@/content/fax/how-fax-machines-work"`). Add 5 imports and append 5 entries; place them under a clear `// Fax history` comment in `allEntries`.

- [ ] **Step 7: Verify** — full gate. Expected `✓ … 70 entries, no issues found.` (65 + 5); all related resolve; `test:unit` still green (14); build green. Spot-check: visiting `/fax` lists the 6 fax entries; a fax-history page's eyebrow reads `Fax · <era>` (not "Fax · Guide").

- [ ] **Step 8: §2/§3 self-check**, fix in place.

- [ ] **Step 9: Commit**

```bash
cd /Users/petrohrys/printerarchive
git add content/fax/ lib/content/registry.ts
git commit -m "content(fax): fax-history cluster (5 editorial pages)

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 5 — Brands (3 new + 5 deepened) + bidirectional linking graph + image manifest

**Files:** Create `content/brands/{ricoh,kyocera,lexmark}.ts`; Modify `content/brands/{hewlett-packard,canon,epson,brother,xerox}.ts`; Modify a small set of existing entries for back-edges; Modify `lib/content/registry.ts`; Create `docs/superpowers/specs/2026-05-19-phase-4b-image-manifest.md`.

### 5a — New brand pages (BrandEntry; `cluster: "brand-overview"`)
Contract: `BrandEntry` shape, `brand`, `focusAreas` (3–5 factual capability areas, no market share), §2 (NO invented founding dates/market share/financials — describe role, categories, typical deployment, technological relevance conceptually), §3 (open with the operational role the brand plays in offices, not "Ricoh is a company that…"). keyTakeaways + 4–6 h2 (e.g. "Where this brand sits in office printing" · "Printer categories and typical deployment" · "Enterprise vs. home realities" · "Technological relevance" · "How it relates to common workflows" · "Where it intersects troubleshooting") + 2–3 faqs + keywords + ≥3 resolving related (mix of guides/troubleshooting/workflows/history).

- [ ] **Step 1: `ricoh.ts`** — brand "Ricoh"; focusAreas e.g. ["Office multifunction systems","Managed print services","Production printing"]; related: `[{guides,what-is-a-print-server},{troubleshooting,printer-offline-guide},{history,evolution-of-office-printing},{workflows,scan-to-searchable-pdf}]`.
- [ ] **Step 2: `kyocera.ts`** — brand "Kyocera"; focusAreas e.g. ["Long-life component design","Office laser systems","Total-cost-of-ownership positioning"]; related: `[{guides,how-laser-printers-work},{glossary,toner},{troubleshooting,printer-printing-blank-pages},{history,evolution-of-laser-printing}]`.
- [ ] **Step 3: `lexmark.ts`** — brand "Lexmark"; focusAreas e.g. ["Workgroup laser printing","Enterprise device management","Document-workflow integration"]; related: `[{guides,what-is-a-print-server},{troubleshooting,printer-not-detected-on-windows},{history,early-network-printing-systems},{workflows,mobile-office-printing}]`.

### 5b — Deepen 5 existing brand pages
For each of `hewlett-packard, canon, epson, brother, xerox`: read the file; KEEP `brand`/`focusAreas`/`slug`/`section`/`published`; APPEND body `h2` sections (do not delete existing prose) for: historical context (conceptual, no invented dates), printer categories, enterprise-vs-home usage, technological relevance, explicit workflow + troubleshooting relationships; set/extend `cluster: "brand-overview"`; extend `related` with resolving refs into the new history/technology clusters and relevant guides/troubleshooting (e.g. xerox ↔ `{history,how-early-laser-printers-worked}`,`{history,evolution-of-laser-printing}`,`{history,history-of-desktop-publishing}`; hewlett-packard ↔ `{history,transition-from-impact-to-laser-printing}`,`{guides,how-laser-printers-work}`; canon/epson ↔ `{history,evolution-of-color-printing}`,`{guides,how-inkjet-printers-work}`; brother ↔ `{history,early-network-printing-systems}`,`{troubleshooting,printer-not-detected-on-windows}`); bump `updated: "2026-05-19"`. §2/§3 apply to appended prose.

### 5c — Bidirectional back-edges (additive, targeted — NOT a refactor)
Append (do not remove) `related` refs to these existing entries so the graph is bidirectional, and `seeAlso` to relevant glossary entries. Each appended ref MUST resolve (all 4A pages now exist):
- `content/history/evolution-of-laser-printing.ts` → add related `{history,how-early-laser-printers-worked}`, `{history,transition-from-impact-to-laser-printing}`.
- `content/history/dot-matrix-printers-explained.ts` → add `{history,how-dot-matrix-printers-work}`, `{history,how-impact-printing-worked}`.
- `content/history/office-printing-in-the-1990s.ts` → add `{history,printing-in-the-1990s}`, `{history,evolution-of-office-printing}`.
- `content/history/history-of-fax-machines.ts` → add `{fax,history-of-business-faxing}`, `{fax,why-fax-is-still-used}`.
- `content/glossary/print-spooler.ts` and `content/glossary/print-queue.ts` → append `seeAlso` `{history,early-network-printing-systems}` (verify field name `seeAlso` and `ContentRef` shape in each file first; append only).
- `content/glossary/toner.ts` → append `seeAlso` `{history,how-early-laser-printers-worked}`.
Keep edits minimal: only the `related`/`seeAlso` arrays and `updated` change; no prose rewrite.

### 5d — Registry
- [ ] Register `ricoh, kyocera, lexmark` in `lib/content/registry.ts` (brands block + `// Brands` array). Deepened/back-edged existing files need no registry change (already registered).

### 5e — Phase 4B image-needs manifest
- [ ] Create `docs/superpowers/specs/2026-05-19-phase-4b-image-manifest.md`: a table — columns `section/slug | intended hero subject | intended inline figure subject(s) | recommended public-domain source category (Wikimedia Commons / Library of Congress / public museum-archive) | notes`. One row per 4A page where imagery would add archival value (and key existing history/fax pages). It describes *needs and candidate source categories only* — assert no licenses/URLs as fact. End with a "Governance" note: vetted-manifest, user approves each before any binary is committed (per spec §6).

- [ ] **Step (verify):** full gate. Expected `✓ … 73 entries, no issues found.` (70 + 3 new brands); ALL `related`/`seeAlso` across the whole repo resolve (back-edges included); `test:unit` 14 green; typecheck/lint clean; build green, all static, no Client Components, no dangling refs. Manual: every 4A page reachable from its hub and has ≥1 resolving related; no orphan (spot-check `getRelated` yields results for a sample of new pages by confirming shared cluster/keywords).

- [ ] **Step (self-check):** §2 (no fabricated brand facts/market share), §3 (brand pages open with operational role, not "is a company"), and confirm 5c edits are purely additive. Fix in place.

- [ ] **Step (commit):**

```bash
cd /Users/petrohrys/printerarchive
git add content/brands/ content/history/ content/glossary/ content/fax/ lib/content/registry.ts docs/superpowers/specs/2026-05-19-phase-4b-image-manifest.md
git commit -m "content(brands): 3 new + 5 deepened; wire bidirectional graph; 4B image manifest

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 6 — Final QA & report

**Files:** none (verification + report).

- [ ] **Step 1:** Run the full gate fresh: `cd /Users/petrohrys/printerarchive && npm run typecheck && npm run lint && npm run test:content && npm run test:unit && npm run build`. Confirm: typecheck/lint clean; `✓ Content integrity OK — 73 entries, no issues found.`; `test:unit` 14 pass / 0 fail; build `✓`, all static routes (was 71; now +20 new content routes ≈ 91), zero dangling-ref errors, zero Client Components, no hydration warnings.
- [ ] **Step 2:** Manual editorial audit — sample ≥1 page per cluster (evolution/era/technology/fax/brand): verify §3 (transition-hook open, trade-offs + supersession cause-and-effect, era-continuity in-body link) and §2 (no fabricated dates/specs/market share/sources). Record findings.
- [ ] **Step 3:** Push: `cd /Users/petrohrys/printerarchive && git push origin feat/foundation-architecture`. (User durably authorized pushing this branch; never `main`. If `gh`/push unavailable, report exact remaining command.)
- [ ] **Step 4:** Final report: pages added (by cluster), brand-authority improvements, internal-linking improvements (clusters + back-edges, zero orphans), image-manifest summary, performance observations (zero deps, zero Client Components, static-only, +N routes), verification results, remaining gaps/recommendations (→ Phase 4B image program, Phase 4C homepage storytelling).

---

## Self-Review

**1. Spec coverage:**
- §2 no-invented-facts → enforced in every content task's authoring contract + §2/§3 self-check steps + manual audit (Task 6 Step 2). ✓
- §3 narrative voice (enforceable per-page gate) → encoded as mandatory H2 lists that forbid "What is X" framing + explicit self-check/audit steps. ✓
- §4 exact content set (20 new + 5 deepened + 3 brands; clusters; fax as HistoryEntry section "fax") → Tasks 2–5; fax typing + Task 1 eyebrow fix. ✓
- §5 zero-orphan bidirectional graph → per-page `related` (≥3 resolving) + Task 5c back-edges + integrity gate + Task 6 reachability check. ✓
- §6 no image binaries; 4B manifest → forbidden in conventions; manifest in Task 5e. ✓
- §7 batched delivery + gate after each → Tasks map to spec batches (kicker pulled to Task 1 with documented rationale); gate every task. ✓
- §2 kicker exception (TDD) → Task 1 red→green. ✓
- §8 out of scope, §9 risks → conventions + link-resolution rule + ordering (back-edges last). ✓

**2. Placeholder scan:** No "TBD/TODO/handle edge cases". Content prose is produced-to-brief (explicit identity/structure/linking/gates), not a placeholder — the contract is fully specified and reviewer-verifiable; this is the correct granularity for a content plan and is called out explicitly. Registry identifiers are exempli gratia and unambiguous.

**3. Type/consistency:** `HistoryEntry` used for history+fax (matches `lib/content/types.ts` `section: "history" | "fax"`); `BrandEntry` for brands; only `kicker.ts` code changes (Task 1, signature unchanged). Link-resolution rule + the Task 2 Step 2 self-correction remove the one forward-ref hazard; back-edges deferred to Task 5c after all targets exist. Entry-count math: 53 → +5 (T2)=58 → +7 (T3)=65 → +5 (T4)=70 → +3 (T5)=73, consistent across verify steps.

No issues requiring further change.

---

## Execution Handoff

Plan complete. Choose execution mode in the next message.
