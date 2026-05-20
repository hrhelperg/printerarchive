# Visual Surface Pass — Implementation Plan

> Visible-output-only pass per user feedback ("stop adding more invisible infrastructure"). Single combined plan, no separate spec. 3 subagent dispatches × 2-stage review (spec compliance + code quality).

**Branch:** `feat/foundation-architecture` only. Never merged to `main`.

**Goal:** Every section hub (`/history`, `/guides`, `/troubleshooting`, `/brands`, `/workflows`, `/tools`, `/glossary`, `/mobile-printing`, `/fax`) is visibly richer with archival imagery (where one fits), per-section editorial framing, and refreshed card density. Zero new dependencies, zero Client Components, zero new image binaries, zero new content entries.

## Surface area

All 9 hubs route through one shared component:

- `components/pages/SectionHub.tsx` — currently calls `Frontispiece` with no image and no per-section variation, then renders a `SectionList`. The single bottleneck for all 9 hubs.
- `components/content/Frontispiece.tsx` — already accepts `image?: ArchiveImage`; nothing to change there.
- `components/content/SectionList.tsx` — currently a flat text-only list. Receives the cards refresh.

## Per-hub configuration (HUB_PROFILE table)

Inside `SectionHub.tsx`, add a small constant `HUB_PROFILE: Record<SectionId, HubProfile>` table that drives the per-section variation. Visible output only — no hidden infrastructure beyond this colocated table.

### `HubProfile` shape

```ts
interface HubProfile {
  framing: string;                   // 1-2 sentence editorial paragraph below the hero
  image?: ArchiveImage;              // when present, Frontispiece renders it
  tone?: "default" | "sepia";        // surface treatment
  preload?: boolean;                 // mark the image as the LCP for that route
}
```

### Editorial framing copy (verbatim — subagents copy these strings exactly)

| Section | Framing |
|---|---|
| `history` | `"How printing reached paper — from impact-era mechanical systems to the laser-driven desk and the shared-printer office. Entries are organised around the operational character of each era rather than around specific dates."` |
| `guides` | `"Clear explanations of how printing, scanning, and document technologies actually work. Each entry leads with the mechanism and the trade-off; jargon is defined inline rather than assumed."` |
| `troubleshooting` | `"Structured diagnostic procedures. Each entry isolates a symptom, walks the likely causes in order of probability, and gives a sequence of verifiable checks rather than a fix-list."` |
| `brands` | `"Reference overviews of the manufacturers that shaped office printing. What each company built, what it changed about the desk, and where in the archive its lineage is documented."` |
| `workflows` | `"Repeatable document processes — scan, print, archive, fax. Described as procedures with re-runnable steps, not as one-off task lists."` |
| `tools` | `"Reference pages on document-system formats, queues, and protocols. The infrastructure layer that the printer connects to and the document moves through."` |
| `glossary` | `"An alphabetic index of printing and document terminology. Definitions are short; each links onward to the entry where the concept does the real work."` |
| `mobile-printing` | `"Wireless printing standards and the device-to-printer workflows they support. How a phone or tablet reaches a printer without a driver in the conventional sense."` |
| `fax` | `"Document transmission technology — how a signed page moved across distance in minutes, and why that mattered for commercial tempo. Treated as both a historical and a technical subject."` |

### Frontispiece images per hub (verbatim ArchiveImage data — copy exactly)

```ts
// /history
{
  src: "/images/home/archival-highlights-bound-printout.jpg",
  alt: "Bound stack of green-and-white-banded continuous-form computer printout",
  width: 1232,
  height: 1810,
  caption: "Bound continuous-form printout — the green-bar paper that defined two decades of office and data-center output.",
  credit: {
    source: "ArnoldReinhold, Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Bound_computer_printout.agr.jpg",
    license: "CC BY-SA 3.0",
  },
}

// /guides
{
  src: "/images/history/early-computer-printing--ibm-1401-restoration-lab.jpg",
  alt: "Restored IBM 1401 installation showing a line printer in the foreground with keypunch machines along one side and tape drives behind",
  width: 1600,
  height: 1066,
  caption: "IBM 1401 mainframe lab — the period-authentic 'how things work' setting for the archive's technology explainers.",
  credit: {
    source: "Marcin Wichary, Computer History Museum (via Wikimedia Commons / Flickr)",
    url: "https://commons.wikimedia.org/wiki/File:IBM_1401_lab.jpg",
    license: "CC BY 2.0",
  },
}

// /troubleshooting
{
  src: "/images/history/dot-matrix-printers-explained.jpg",
  alt: "Facit E560 dot matrix printer — full studio shot of the complete unit",
  width: 1600,
  height: 1067,
  caption: "Facit E560 dot-matrix printer — a representative impact-era office device with its mechanism visible to the operator.",
  credit: {
    source: "Corvair, Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Facit_E560_dot_matrix_printer.jpg",
    license: "CC BY-SA 4.0",
  },
}

// /brands
{
  src: "/images/home/now-hp-laserjet-i.jpg",
  alt: "Original HP LaserJet laser printer photographed against a neutral background",
  width: 1600,
  height: 1066,
  caption: "HP LaserJet (1984) — the inflection point at which a brand became synonymous with the desk printer.",
  credit: {
    source: "Atomic Taco, Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:HP_LaserJet_I_(12935740974).jpg",
    license: "CC BY-SA 2.0",
  },
}

// /workflows
{
  src: "/images/history/early-computer-printing--1940-census-keypunch.jpg",
  alt: "Black-and-white photograph of a 1940 US Census keypunch operator seated at a Hollerith pantograph machine with hands at the keys",
  width: 1600,
  height: 1260,
  caption: "1940 US Census keypunch operator — the document-processing workflow predates the electronic printer it would later feed.",
  credit: {
    source: "U.S. Bureau of the Census (via NARA, Wikimedia Commons)",
    url: "https://commons.wikimedia.org/wiki/File:Card_puncher_-_NARA_-_513295.jpg",
    license: "Public domain (U.S. Federal Government work)",
  },
}

// /tools
{
  src: "/images/home/then-tractor-feed.jpg",
  alt: "Folded sheet of continuous-form computer paper with perforated sprocket strips along both edges",
  width: 1600,
  height: 899,
  caption: "Continuous-form tractor-feed paper — the material standard that shaped the document-format and queue infrastructure this section documents.",
  credit: {
    source: "ProjectManhattan, Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Paper_for_dot_matrix_printers.jpg",
    license: "CC BY-SA 3.0",
  },
}

// /fax
{
  src: "/images/fax/history-of-business-faxing--panasonic-kx-f90.jpg",
  alt: "Panasonic KX-F90 office fax machine with corded handset and paper output tray",
  width: 1282,
  height: 841,
  caption: "Panasonic KX-F90 — a typical 1980s/early-1990s compact office fax with integrated handset and thermal-roll output.",
  credit: {
    source: "Pittigrilli, cropped by Georgfotoart, Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Panasonic_KX-F90_(cropped).jpg",
    license: "CC BY-SA 4.0",
  },
}
```

`/glossary` and `/mobile-printing` deliberately have **no image** — there is no committed image whose semantic register matches "alphabetic terminology index" or "modern wireless printing". Both fall back to the existing typographic Frontispiece with the Motif panel.

### Tone per hub

- `history` → `"sepia"` (already does)
- `fax` → `"sepia"` (documentary register, matches history pairing)
- all others → `"default"`

### Preload

- The first hub the user is likely to reach via internal nav is `/history`. Set `preload: true` on its image only. Other hubs are reached secondarily; no preload. (Minor LCP optimisation.)

## SectionList card refresh

`SectionList.tsx` currently emits:
1. A full-width text-only lead card.
2. A `<ul>` of compact entries, each with a top/bottom border-y stripe.

Changes (all visible):

1. **Cluster pill** — when an entry has a `cluster` field, render it as a small uppercase pill ABOVE the kicker on each card. Pill = subtle `font-sans text-[10px] tracking-wider uppercase text-ink-faint`, prefixed with a hairline `·` separator. Cluster name is `slug`-formatted; humanize via `.replace(/-/g, " ")` (same pattern SectionHub already uses).
2. **Density tighten** — secondary cards drop from `py-6` to `py-5`; mobile retains current breathing room.
3. **Subtle hover** — each `<Link>` gets `hover:bg-paper-raised` so the surface lifts on focus/hover. Currently only the text colour shifts; adding a surface shift makes the affordance more discoverable on tablet/desktop.
4. **Lead card thumbnail (conditional)** — when `lead.hero` exists, the lead card renders as a 2-column grid (1.6fr text / 1fr thumbnail at `md:`). Uses `next/image` with the existing approved hero metadata. When `lead.hero` is absent, the lead card stays full-width text-only (current behaviour, zero regression).

Card structure becomes:

```
[cluster-pill (if cluster)]    [kicker]
[Title h2/h3]                  [optional thumbnail]
[summary]
Updated [date]
```

No new components. All changes are inline modifications to `SectionList.tsx`.

## Implementation tasks

| Task | Concern | Files | Model |
|---|---|---|---|
| 1 | `SectionHub` HUB_PROFILE + image + framing + tone wiring | `components/pages/SectionHub.tsx` | sonnet |
| 2 | `SectionList` card refresh (cluster pill + hover + density + lead thumbnail) | `components/content/SectionList.tsx` | sonnet |
| 3 | QA gate + 9-hub HTML inspection + push + final report | — (controller) | — |

Two-stage review on Tasks 1 and 2 (spec compliance, then code quality).

## Verification per commit

Each implementer runs:

```
npm run typecheck
npm run lint
npm run test:content
npm run test:unit
```

All four clean. Task 3 (controller) adds `npm run build` (96 routes expected; same as before — no new routes), 9-hub HTML inspection (single H1 each, no localhost, no noindex, no missing image alt), and the push.

## HTML invariants to verify (Task 3)

For each of the 9 hubs:
- Exactly one `<h1>`
- No `localhost` in HTML
- No `noindex` directive
- The editorial-framing paragraph string from the table above renders verbatim
- For the 7 image-bearing hubs: the image's `src` and `alt` strings render
- For the 2 typographic hubs (`glossary`, `mobile-printing`): the Motif panel renders, no broken image reference

## Done criteria

- All 9 hubs render with their per-section frontispiece + editorial framing + refreshed cards.
- `git grep` shows no new `"use client"`, no new dependencies in package.json, no new image binaries in public/images/, no new content entries.
- All 5 QA commands pass.
- Branch is still `feat/foundation-architecture` only; no merge to `main`.
- Final report delivered.
