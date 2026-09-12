# Visual Authority Redesign — audit and plan

**Branch:** `feat/visual-authority-redesign` · **Date:** 2026-09-12 · **Base:** `origin/main` @ 7a963d9

Goal: make the archive's existing scale and rigour *visible*. Light, spacious,
technical, editorial. No IA changes, no URL changes, no content regeneration,
no SEO regression.

## Method

Screenshots were captured from a production build served locally, at a true
1440px layout viewport. Layout was measured through a same-origin iframe
harness (`public/_measure.html`, removed before merge) that reports
`scrollWidth` vs `clientWidth`, out-of-bounds elements, and the rects of
probed selectors.

Two measurement traps were hit and corrected, both worth recording:

1. **Headless Chrome clamps its window to a 500px minimum.** A
   `--window-size=390,844` screenshot renders at 500px and crops to 390,
   which fabricates convincing "mobile text is cut off" defects. Mobile must
   be captured/measured through an iframe sized to 390px inside a ≥500px
   window.
2. **Measuring on `iframe.onload` measures pre-webfont layout.** Fallback
   metrics gave a *false negative* on the header defect below. The harness
   now waits for `document.fonts.ready` plus a frame.

Do not trust a screenshot or a probe that disagrees with the other; get a
third signal.

## Confirmed defects

### P1 — Primary nav paints on top of the wordmark at desktop widths

At 1440px the nav `<ul>` box is `x=467..1027`, but its first link renders at
`x=244..314` — 223px outside its own container, over the wordmark — and
`li:nth-child(3)` ("Brands") lands at `389..457`, exactly under the "Models"
pill at `383..451`.

Cause: the nav list is `overflow-x-auto ... lg:overflow-visible` inside a
`lg:flex-1 lg:min-w-0` wrapper. Above `lg` the list may shrink below its
content width, and because overflow is `visible` and content is
`justify-end`, the excess spills leftward instead of scrolling. Natural
content width is ~783px against a ~560px box.

This is on every page, at common desktop widths. `scrollWidth` is unaffected,
so no overflow check catches it.

### P2 — One hub template for ten hubs

Every hub renders the same Frontispiece (kicker / serif H1 / lede / count
pill / image right). `/models` announces "56 entries" and shows none of them
above the fold. History, Guides, Tools, Brands, Models, Fax, Glossary,
Troubleshooting, Workflows and Blog are visually interchangeable.

### P3 — Sparse pages are mostly empty space

`/blog` spends the entire first viewport on an H1, a lede and a "1 story"
pill, with the Frontispiece's no-image branch rendering a small motif tile
adrift in a large empty column. The featured story is below the fold.

### P4 — Model pages are indistinguishable from essays

`/models/hp-laserjet-original` is a serif essay with a TOC. No identity
block, no manufacturer/era/technology framing, no specification table near
the top — despite the data existing in the entry.

### P5 — Homepage does not communicate scale

Thirteen stacked sections, four of them the same `FeaturedBand` component.
No statistics, no models surface, no manufacturers surface, and **no Blog
section at all**. The strongest proof of authority — 385 sourced entries, 56
models, 10 manufacturers — is never stated.

### P6 — Repetition and card monotony

`premium-card` / `premium-card-sm` rounded rectangles carry nearly every
surface. Images are almost always the same 3:2 card. The same HP LaserJet
photograph is the hero of `/brands`, `/models` and `/mobile-printing`.

### P7 — Header is 205px tall on mobile

Three stacked rows (wordmark, nav, search) before any content.

## Non-defects (verified, do not "fix")

- No horizontal page overflow at 390px or 1440px. `scrollWidth == clientWidth`
  on both. The only out-of-bounds elements are inside the ecosystem banner's
  intentional `overflow-x` scroller.
- The header search is a real scoped Google site-search form, not a fake box.
  It should be made more visible, not replaced (§16).

## Plan

A. Design tokens + type scale
B. Header / navigation / footer  (fixes P1, P7)
C. Homepage                      (fixes P5)
D. Blog hub                      (fixes P3)
E. Blog article
F. Shared article template
G. Hub identities                (fixes P2)
H. Model + brand pages           (fixes P4)
I. Mobile polish
J. QA, screenshots, SEO parity
