# Phase 4C — Homepage Storytelling & Launch Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the homepage and top-level discovery experience so the site reads as a guided premium archive of printing technology — using only already-committed imagery, only existing content modules, only Server Components, and no new dependencies.

**Architecture:** Augment `HomeHero` with an optional `ArchiveImage`; add a new `FeaturedStories` component that surfaces 7 hand-picked archival narratives (one lead card with the Facit-E560 thumbnail, six text-only cards); add optional `kicker`/`title` props to `CategoryGrid`; reorder + curate `app/page.tsx`; retire 3 FeaturedBands and the bottom Archival highlights StorytellingBand. Branch is `feat/foundation-architecture` only; no merges to `main`.

**Tech Stack:** Next.js 16.2.6 (Turbopack), React 19, TypeScript strict, Tailwind v4. `next/image`, `next/link`. Existing primitives only: `Container`, `ArchivePlate`, `ArchiveImage`, `ArchivalCard`, `Motif`, `FeaturedBand`, `EraRail`, `ThenNow`, `ClosingBand`, `StorytellingBand`.

**Spec:** [docs/superpowers/specs/2026-05-20-phase-4c-homepage-storytelling-design.md](docs/superpowers/specs/2026-05-20-phase-4c-homepage-storytelling-design.md)

---

## Pre-flight (controller does this once)

- [ ] Verify branch is `feat/foundation-architecture` (`git symbolic-ref --short HEAD`).
- [ ] Confirm clean working tree (`git status --short` returns nothing).

---

## Task 1: Augment `HomeHero` with an optional ArchiveImage prop

**Files:**
- Modify: [components/home/HomeHero.tsx](components/home/HomeHero.tsx)

**Spec reference:** §4.1

- [ ] **Step 1: Replace `HomeHero.tsx` to accept `image?: ArchiveImage`, render `ArchivePlate` when provided with `Motif` fallback, add CTA "Enter the archive →".**

```tsx
import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "@/components/layout/Container";
import { Motif } from "@/components/content/Motif";
import { ArchivePlate } from "@/components/content/ArchivePlate";
import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";

interface HomeHeroProps {
  image?: ArchiveImageData;
  ctaHref?: string;
  ctaLabel?: string;
}

export function HomeHero({
  image,
  ctaHref = "/history",
  ctaLabel = "Enter the archive →",
}: HomeHeroProps) {
  return (
    <section className="surface-grain border-b border-rule bg-paper-raised">
      <Container
        width="wide"
        className="grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:py-20"
      >
        <div>
          <p className="kicker">{site.tagline}</p>
          <h1 className="mt-4 max-w-3xl text-display text-balance">
            The internet archive of printing technology.
          </h1>
          <p className="mt-5 max-w-2xl font-serif text-lg text-ink-soft text-pretty">
            {site.description}
          </p>
          <p className="mt-7 font-sans text-sm">
            <Link href={ctaHref} className="no-underline hover:underline">
              {ctaLabel}
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center">
          {image ? (
            <ArchivePlate
              image={image}
              sizes="(max-width: 1024px) 100vw, 520px"
              noMargin
              className="w-full max-w-lg"
            />
          ) : (
            <div aria-hidden className="hidden items-center justify-center lg:flex">
              <Motif className="h-28 w-28 text-rule-strong" />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Run typecheck to verify the prop addition compiles.**

Run: `npm run typecheck`
Expected: clean exit (no output).

- [ ] **Step 3: Run lint.**

Run: `npm run lint`
Expected: clean exit (no output).

- [ ] **Step 4: Commit.**

```bash
git add components/home/HomeHero.tsx
git -c commit.gpgsign=false commit -m "feat(home): HomeHero accepts optional ArchiveImage + 'Enter the archive' CTA

Adds an optional \`image: ArchiveImage\` prop. When provided the right
column renders an ArchivePlate sized for the hero (max-w-lg); when
omitted it gracefully falls back to the previous Motif ornament so any
existing call site keeps working unchanged. The hero also gains a
single textual CTA ('Enter the archive →') with overridable href/label
props — defaults to /history per the Phase-4C design (discovery into
the history cluster). Mobile-first: image stacks below the text;
desktop: 1.4fr/1fr text+image split. No client code, no new deps.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 2: Add optional `kicker` and `title` props to `CategoryGrid`

**Files:**
- Modify: [components/home/CategoryGrid.tsx](components/home/CategoryGrid.tsx)

**Spec reference:** §4.4

- [ ] **Step 1: Replace `CategoryGrid.tsx` to accept optional `kicker` and `title` props with current copy as defaults.**

```tsx
import Link from "next/link";
import { SECTIONS } from "@/lib/site";
import { getSection } from "@/lib/content/queries";
import { Container } from "@/components/layout/Container";

interface CategoryGridProps {
  kicker?: string;
  title?: string;
}

export function CategoryGrid({
  kicker = "Browse the archive",
  title = `${SECTIONS.length} ways into printing technology`,
}: CategoryGridProps) {
  return (
    <Container width="wide" className="py-14">
      <hr className="rule-sep" />
      <p className="kicker mt-10">{kicker}</p>
      <h2 className="mt-2 text-display-sm text-balance">{title}</h2>
      <ul className="mt-8 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {SECTIONS.map((s, i) => {
          const count = getSection(s.id).length;
          return (
            <li key={s.id} className="bg-paper">
              <Link
                href={`/${s.id}`}
                className="group flex h-full flex-col p-6 no-underline transition-colors hover:bg-paper-raised"
              >
                <span className="font-serif text-2xl leading-none text-rule-strong">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-4 font-serif text-xl tracking-tight text-ink group-hover:text-accent">
                  {s.title}
                </span>
                <span className="mt-1.5 flex-1 text-sm text-ink-soft text-pretty">
                  {s.description}
                </span>
                <span className="mt-4 font-sans text-xs uppercase tracking-wide text-ink-faint">
                  {count} {count === 1 ? "entry" : "entries"}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
```

- [ ] **Step 2: Run typecheck.**

Run: `npm run typecheck`
Expected: clean exit.

- [ ] **Step 3: Commit.**

```bash
git add components/home/CategoryGrid.tsx
git -c commit.gpgsign=false commit -m "feat(home): CategoryGrid accepts optional kicker + title props

Defaults preserve the previous copy verbatim ('Browse the archive' /
'N ways into printing technology'), so any other call site remains
unchanged. The Phase-4C homepage will override these to read 'Continue
browsing' / 'The whole archive in nine sections', re-framing the grid
as the comprehensive discovery layer beneath the curated editorial
FeaturedStories block.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 3: Create the `FeaturedStories` component

**Files:**
- Create: `components/home/FeaturedStories.tsx`

**Spec reference:** §4.2

- [ ] **Step 1: Create `FeaturedStories.tsx`.**

The component hand-picks 7 curated entries by `{section, slug}`, resolves each via `getEntry`, and renders a lead `ArchivalCard` (with a small Facit-E560 thumbnail next to the title block) followed by 6 text-only secondary cards. Only one image is used; all entries are existing content modules.

```tsx
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ArchivalCard } from "@/components/content/ArchivalCard";
import { getEntry } from "@/lib/content/queries";
import { entryKicker } from "@/lib/content/kicker";
import type { ContentEntry } from "@/lib/content/types";
import type { SectionId } from "@/lib/site";

interface StoryRef {
  section: SectionId;
  slug: string;
}

const LEAD_THUMB = {
  src: "/images/history/dot-matrix-printers-explained.jpg",
  alt: "Facit E560 dot matrix printer — full studio shot of the complete unit",
  width: 1600,
  height: 1067,
};

const LEAD_STORY: StoryRef = {
  section: "history",
  slug: "dot-matrix-printers-explained",
};

const SECONDARY_STORIES: StoryRef[] = [
  { section: "history", slug: "transition-from-impact-to-laser-printing" },
  { section: "history", slug: "history-of-desktop-publishing" },
  { section: "history", slug: "early-network-printing-systems" },
  { section: "history", slug: "office-printing-before-wifi" },
  { section: "history", slug: "early-computer-printing" },
  { section: "fax", slug: "history-of-business-faxing" },
];

function resolve(ref: StoryRef): ContentEntry | null {
  return getEntry(ref.section, ref.slug);
}

export function FeaturedStories() {
  const lead = resolve(LEAD_STORY);
  const rest = SECONDARY_STORIES.map(resolve).filter(
    (e): e is ContentEntry => e !== null,
  );
  if (!lead) return null;

  return (
    <section className="border-t border-rule">
      <Container width="wide" className="py-16">
        <p className="kicker">Featured archival stories</p>
        <h2 className="mt-2 text-display-sm text-balance">
          Hand-picked stories from the archive
        </h2>
        <p className="mt-3 max-w-2xl font-serif text-lg text-ink-soft text-pretty">
          Specific narratives from the printing-as-infrastructure record —
          impact-to-laser, desktop publishing, the queue and the spooler,
          fax in deal-making.
        </p>

        {/* Lead card with thumbnail */}
        <div className="mt-10">
          <ArchivalCard
            variant="lead"
            href={`/${lead.section}/${lead.slug}`}
            className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center"
          >
            <div>
              <span className="kicker">{entryKicker(lead)}</span>
              <h3 className="mt-2 font-serif text-2xl tracking-tight text-ink group-hover:text-accent md:text-3xl">
                {lead.title}
              </h3>
              <p className="mt-3 max-w-xl text-ink-soft text-pretty">
                {lead.description}
              </p>
              <p className="mt-5 font-sans text-sm text-ink-soft">
                Read the story →
              </p>
            </div>
            <div className="relative aspect-[3/2] w-full overflow-hidden border border-rule bg-paper-raised">
              <Image
                src={LEAD_THUMB.src}
                alt={LEAD_THUMB.alt}
                width={LEAD_THUMB.width}
                height={LEAD_THUMB.height}
                sizes="(max-width: 768px) 100vw, 360px"
                className="h-full w-full object-cover"
              />
            </div>
          </ArchivalCard>
        </div>

        {/* Secondary cards (text-only) */}
        <ul className="mt-6 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((e) => (
            <li key={`${e.section}/${e.slug}`} className="bg-paper">
              <Link
                href={`/${e.section}/${e.slug}`}
                className="group flex h-full flex-col p-6 no-underline transition-colors hover:bg-paper-raised"
              >
                <span className="kicker">{entryKicker(e)}</span>
                <span className="mt-2 font-serif text-lg tracking-tight text-ink group-hover:text-accent">
                  {e.title}
                </span>
                <span className="mt-1.5 text-sm text-ink-soft text-pretty">
                  {e.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Run typecheck.**

Run: `npm run typecheck`
Expected: clean exit.

- [ ] **Step 3: Run lint.**

Run: `npm run lint`
Expected: clean exit.

- [ ] **Step 4: Commit.**

```bash
git add components/home/FeaturedStories.tsx
git -c commit.gpgsign=false commit -m "feat(home): add FeaturedStories curated archival-narratives block

Hand-picks 7 existing content modules across history + fax (no new
pages, no new content) and surfaces them as an editorial block: one
lead ArchivalCard with the already-committed Facit E560 thumbnail
(dot-matrix-printers-explained), followed by 6 text-only secondary
cards in a 3-up grid. Lead heading is h3 so the section's own h2
('Hand-picked stories from the archive') remains the sole h2 in this
band — single-h1 invariant preserved at the page level. Server
Component; resolves entries via the existing getEntry/entryKicker
helpers; one next/image load for the lead thumb (explicit
width/height, no CLS).

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 4: Rewire `app/page.tsx` to the new composition

**Files:**
- Modify: [app/page.tsx](app/page.tsx)

**Spec reference:** §3, §4.3

- [ ] **Step 1: Replace `app/page.tsx` with the new composition.**

```tsx
import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";
import { HomeHero } from "@/components/home/HomeHero";
import { ThenNow } from "@/components/home/ThenNow";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { EraRail } from "@/components/home/EraRail";
import { FeaturedBand } from "@/components/home/FeaturedBand";
import { FeaturedStories } from "@/components/home/FeaturedStories";
import { ClosingBand } from "@/components/home/ClosingBand";

const HERO_IMAGE: ArchiveImageData = {
  src: "/images/home/archival-highlights-bound-printout.jpg",
  alt: "Bound stack of green-and-white-banded continuous-form computer printout",
  width: 1232,
  height: 1810,
  caption:
    "Bound continuous-form printout — the green-bar paper that defined two decades of office and data-center output.",
  credit: {
    source: "ArnoldReinhold, Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Bound_computer_printout.agr.jpg",
    license: "CC BY-SA 3.0",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero image={HERO_IMAGE} />
      <ThenNow />
      <EraRail />
      <FeaturedStories />
      <FeaturedBand section="history" />
      <FeaturedBand section="fax" />
      <FeaturedBand section="brands" />
      <CategoryGrid
        kicker="Continue browsing"
        title="The whole archive in nine sections"
      />
      <ClosingBand />
    </>
  );
}
```

- [ ] **Step 2: Run typecheck.**

Run: `npm run typecheck`
Expected: clean exit.

- [ ] **Step 3: Run lint.**

Run: `npm run lint`
Expected: clean exit.

- [ ] **Step 4: Run content integrity gate.**

Run: `npm run test:content`
Expected: `✓ Content integrity OK — 72 entries, no issues found.`

- [ ] **Step 5: Run unit tests.**

Run: `npm run test:unit`
Expected: 22/22 pass.

- [ ] **Step 6: Run production build.**

Run: `npm run build`
Expected: build succeeds, 92 prerendered routes, no warnings, `/` still listed as `○` (Static).

- [ ] **Step 7: Inspect the built homepage HTML for invariants.**

```bash
node -e "const fs=require('fs');const f='.next/server/app/page.html';if(!fs.existsSync(f)){const alt='.next/server/app/index.html';if(fs.existsSync(alt)){console.log('USING',alt);process.stdout.write(fs.readFileSync(alt,'utf8'));}else{console.log('homepage HTML not found at',f);}}else{process.stdout.write(fs.readFileSync(f,'utf8'));}" | grep -c "<h1"
```
Expected: `1` (exactly one h1).

```bash
node -e "const fs=require('fs');const f='.next/server/app/page.html';const a='.next/server/app/index.html';const t=fs.readFileSync(fs.existsSync(f)?f:a,'utf8');console.log('localhost?',/localhost/i.test(t));console.log('noindex?',/noindex/i.test(t));"
```
Expected: both `false`.

- [ ] **Step 8: Commit.**

```bash
git add app/page.tsx
git -c commit.gpgsign=false commit -m "feat(home): rewire homepage to Phase-4C composition

New top-to-bottom order: HomeHero (now image-led with the bound-
printout hero image) -> ThenNow -> EraRail (moved up so the historical-
evolution flow lands right after the Then/Now anchor) -> new
FeaturedStories editorial block -> FeaturedBand(history) ->
FeaturedBand(fax) [NEW on homepage] -> FeaturedBand(brands) ->
CategoryGrid (re-headed 'Continue browsing / The whole archive in nine
sections') -> ClosingBand.

Removed from homepage:
- FeaturedBand(guides), FeaturedBand(troubleshooting),
  FeaturedBand(mobile-printing) — reachable via header nav + the
  re-headed CategoryGrid + cross-links within content pages.
- The bottom StorytellingBand 'Archival highlights' — its bound-
  printout image is now promoted to the hero, and the FeaturedStories
  block already serves the curated-narratives role.

No new content, no new image binaries, no new deps, no client
boundaries. Single h1 preserved at the hero. 92 static routes still
build clean.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Task 5: Final launch QA sweep

**Files:** none modified — runs gates against the built artefact.

**Spec reference:** §9

- [ ] **Step 1: Full QA gate.**

Run sequentially:
```
npm run typecheck
npm run lint
npm run test:content
npm run test:unit
npm run build
```
Expected: all five clean.

- [ ] **Step 2: Inspect generated sitemap.**

```bash
node -e "const fs=require('fs');const sm='.next/server/app/sitemap.xml.body';if(fs.existsSync(sm)){console.log(fs.readFileSync(sm,'utf8').slice(0,600));}else{console.log('checking app/sitemap.ts output via runtime route only');}"
```
Or, since sitemap is dynamic in dev: skip the file lookup and just confirm `sitemap` was emitted in the build route table (search the build stdout for `/sitemap.xml`).

- [ ] **Step 3: Re-confirm h1 count, no localhost leaks, no noindex on `/`.**

Search the prerendered homepage HTML:
```bash
node -e "const fs=require('fs');const cand=['.next/server/app/page.html','.next/server/app/index.html'].find(p=>fs.existsSync(p));if(!cand){console.log('homepage HTML not located — check build target output');return;}const t=fs.readFileSync(cand,'utf8');const h1=(t.match(/<h1[\\s>]/g)||[]).length;console.log('h1 count:',h1);console.log('contains localhost:',/localhost/i.test(t));console.log('contains noindex:',/noindex/i.test(t));"
```
Expected: `h1 count: 1`, `contains localhost: false`, `contains noindex: false`.

- [ ] **Step 4: Push to remote.**

```bash
git symbolic-ref --short HEAD   # must read feat/foundation-architecture
git push origin feat/foundation-architecture
```

- [ ] **Step 5: (Controller only) deliver final report.**

Report must list: files changed, image usage (single new on-page use of the existing bound-printout), QA gate results (all five), homepage HTML invariants (h1=1, no localhost, no noindex), launch-readiness assessment, and remaining risks before merge/deploy.

---

## Self-review summary (controller, after writing)

1. **Spec coverage:** every numbered §3–§9 item of the spec maps to at least one task above. §10 (risks) and §11 (done criteria) are met by Task 5.
2. **Placeholder scan:** no TBDs, no "add appropriate error handling," no "similar to," no missing code blocks. Every step that modifies code shows the code in full.
3. **Type consistency:** `image?: ArchiveImage` (alias of `ArchiveImageData`) appears identically across HomeHero and `app/page.tsx`; `getEntry` is called with `(section: SectionId, slug: string)` in FeaturedStories, matching the existing helper's signature; `getSection`/`getEntry`/`entryKicker` are pre-existing exports.

## Execution

Use **superpowers:subagent-driven-development** — dispatch one fresh implementer per task, with the two-stage review (spec compliance, then code quality) between tasks. Continuous execution; no stops between tasks. After Task 5, dispatch a final overall reviewer and then run **superpowers:finishing-a-development-branch**.
