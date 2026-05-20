# PrinterArchive.net — Phase 4B.2: Concrete Candidate Image Manifest (Batch 1)

- **Date:** 2026-05-20
- **Status:** Candidates proposed; pending per-image approval. No binaries committed.
- **Repo:** `/Users/petrohrys/printerarchive` → `github.com/hrhelperg/printerarchive`
- **Branch:** `feat/foundation-architecture` (never push to `main`)
- **Supersedes:** the categorical needs document at `docs/superpowers/specs/2026-05-19-phase-4b-image-manifest.md` (enriches it with verified candidate URLs + license metadata).
- **Phase:** Phase 4B is decomposed into 4B.1 (visual system — shipped at `bffb82f`), **4B.2 (this — concrete candidate proposals)**, and 4B.3 (approved-image commit batches, separate from this document).

---

## 1. Purpose & Governance

This document proposes **specific, license-verified candidate images** for the slots the Phase-4A page set and Phase-4B.1 visual system left open. **Nothing is committed in this phase.** Each candidate is a proposal for your slot-by-slot approval; only after you approve a candidate does Phase 4B.3 commit the binary under `public/images/<section>/`, fully credited, alt-tagged, and dimension-recorded, satisfying the build-time integrity gate.

**Every candidate in this manifest was verified in-session:** each file's Wikimedia Commons (or other source) page was fetched and the license, author, dimensions, source institution, and original-size file URL were read directly off the page. URLs, licenses, and dimensions are quoted from those pages — not inferred or recalled. Where a license is anything other than CC0 / Public Domain, the attribution line below is the one your `ArchiveImage` `credit.source` + `credit.url` + `credit.license` fields should record verbatim.

**Allowed source set used:** Wikimedia Commons (the dominant source — well-indexed metadata, clear licenses), Library of Congress (sample collection identified for follow-up), public-museum / institutional uploads where they appear on Commons. **Source domains explicitly avoided** per the Phase-4B brief: Pinterest, generic blogs, stock-photo platforms (Alamy, Getty, Adobe Stock, iStock, Dreamstime, Shutterstock), AI-generated repositories, and any source with unclear or absent license metadata.

**Workflow per approval:** you accept or reject each candidate below. For accepted candidates, Phase 4B.3 will: (1) download the original-size file from the cited URL, (2) re-encode to AVIF + WebP under `public/images/<section>/<slug>.<ext>`, (3) construct the `ArchiveImage` data on the target entry with the exact `credit.source` / `credit.url` / `credit.license` strings recorded here, (4) record exact intrinsic `width` × `height` for CLS-safety, (5) verify the build-time integrity gate passes. No image is committed without your explicit slot-by-slot acceptance.

---

## 2. Candidate Schema (every row carries these fields)

- **Target page / slot** — which page and which slot (`hero`, inline `figure`, `StorytellingBand` image side, etc.)
- **Source file page URL** — the Wikimedia Commons (or other) descriptor page
- **Original-size file URL** — the direct binary URL on `upload.wikimedia.org`
- **Source institution / platform** — verified from the file page
- **License** — exact license string as it appears on the source page
- **Attribution line** — the credit string you would record in `ArchiveImage.credit`
- **Dimensions** — verified intrinsic pixel dimensions (width × height)
- **Fit rationale** — why this image suits the target slot
- **Risk notes** — license/attribution/dimensional/historical-accuracy caveats
- **Priority** — high / medium / low

---

## 3. Candidates

### 3.1 Dot matrix printers cluster

#### C-01 · Epson LX-800 (studio shot)
- **Target slot:** `history/how-dot-matrix-printers-work` — article hero (`ArchivePlate`); also re-usable as inline figure on `history/dot-matrix-printers-explained`.
- **Source file page:** https://commons.wikimedia.org/wiki/File:Epson-lx800.png
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/4/41/Epson-lx800.png
- **Source institution:** Wikimedia Commons (uploader contribution)
- **License:** Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)
- **Attribution:** "Photo: Oguenther / Wikimedia Commons — CC BY-SA 3.0"
- **Dimensions:** 615 × 376
- **Fit rationale:** Recognizable 1980s consumer/office dot matrix form factor; clean front-facing studio shot reads as documentary equipment photography.
- **Risk notes:** Low — common, well-known printer; license is attribution + share-alike (the figcaption + credit URL satisfies attribution). Modest resolution (615×376) suits a single inline figure but is not large enough for full-bleed hero usage; for hero, prefer C-04 (Facit) or C-02 (print-head).
- **Priority:** Medium

#### C-02 · 9-needle dot matrix print head close-up (Star NL10)
- **Target slot:** `history/how-dot-matrix-printers-work` — inline `figure` block (the "What striking the page enabled" section); also strong candidate for `history/how-impact-printing-worked` mechanism figure.
- **Source file page:** https://commons.wikimedia.org/wiki/File:9_nadel_druckkopf-star_nl10--hinnerk_ruemenapf_vs01-p50.jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/3/32/9_nadel_druckkopf-star_nl10--hinnerk_ruemenapf_vs01-p50.jpg
- **Source institution:** Wikimedia Commons (private photographer)
- **License:** Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
- **Attribution:** "Photo: Hinnerk Rümenapf / Wikimedia Commons — CC BY-SA 4.0"
- **Dimensions:** 1293 × 1978
- **Fit rationale:** Macro close-up of the actual 9-needle print head — the singular mechanism that defined dot-matrix printing. The original photo dates from August 1989 (period-authentic), digitized 2014. Carries documentary weight a modern macro of the same component would lack.
- **Risk notes:** Attribution required (CC BY-SA 4.0). Photo composition is on a neutral background — reads as archival rather than amateur.
- **Priority:** High

#### C-03 · Tractor-feed (continuous-form) paper
- **Target slot:** `history/office-printing-before-wifi` — inline figure (the "How cables and ports shaped desk layout" section, where tractor paper is part of the material reality); also reusable on `history/printing-in-the-1980s`, `history/how-impact-printing-worked`, or as a homepage `<StorytellingBand>` "Then" image.
- **Source file page:** https://commons.wikimedia.org/wiki/File:Paper_for_dot_matrix_printers.jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/4/47/Paper_for_dot_matrix_printers.jpg
- **Source institution:** Wikimedia Commons (uploader contribution)
- **License:** Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)
- **Attribution:** "Photo: ProjectManhattan / Wikimedia Commons — CC BY-SA 3.0"
- **Dimensions:** 3920 × 2204
- **Fit rationale:** The iconic tractor-feed paper with sprocket-strip edges. Instantly legible as "office printing of the 1980s." Very high resolution allows hero or large-figure use. Communicates "archive of office printing" at a glance — strong candidate for any `<StorytellingBand>` "Then" panel.
- **Risk notes:** Attribution required. Photo is modern (2014) of a historical material — semantically appropriate; the artifact, not a re-creation.
- **Priority:** High

#### C-04 · Facit E560 dot matrix printer (full studio shot)
- **Target slot:** `history/dot-matrix-printers-explained` — article hero; also as alternative inline figure on `history/how-dot-matrix-printers-work`.
- **Source file page:** https://commons.wikimedia.org/wiki/File:Facit_E560_dot_matrix_printer.jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/9/91/Facit_E560_dot_matrix_printer.jpg
- **Source institution:** Wikimedia Commons (private photographer)
- **License:** Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
- **Attribution:** "Photo: Corvair / Wikimedia Commons — CC BY-SA 4.0"
- **Dimensions:** 3776 × 2520
- **Fit rationale:** Crisp full-machine studio photo against neutral background — exactly the documentary register the brief calls for. Large enough for hero use.
- **Risk notes:** Attribution required. Facit is a less mainstream brand than Epson/IBM — flagged as a feature, not a bug, for the History section's archival breadth.
- **Priority:** High

### 3.2 Laser printers / early laser cluster

#### C-05 · IBM 3800 (institutional early laser printer)
- **Target slot:** `history/how-early-laser-printers-worked` — article hero (`ArchivePlate`); strongest single image for "Why early laser was an institutional, not personal, tool."
- **Source file page:** https://commons.wikimedia.org/wiki/File:IBM_3800.jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/7/74/IBM_3800.jpg
- **Source institution:** International Business Machines (General Products Division); published 1982; on Wikimedia Commons.
- **License:** **Public domain** in the United States (published 1978–February 1989 without copyright notice — verified on file page).
- **Attribution:** "Photo: International Business Machines, General Products Division — Public domain (US)"
- **Dimensions:** 5024 × 2479
- **Fit rationale:** The exact subject the article describes — an institution-scale 1982 laser printer that filled a room. Public-domain status is the cleanest legal posture available. Very large dimensions support full-bleed hero use.
- **Risk notes:** Public-domain status applies to US distribution only; the spec's footprint is global but PD-US is the highest legal-safety tier available on Commons for institutional historical imagery. Aspect ratio (~2:1) is wide — best for a hero plate, not a tall figure.
- **Priority:** High

#### C-06 · HP LaserJet I (original, 1984 launch)
- **Target slot:** Homepage `<StorytellingBand>` "Now" panel (or pair against C-03 tractor-feed paper as "Then"); also `brands/hewlett-packard` hero figure.
- **Source file page:** https://commons.wikimedia.org/wiki/File:HP_LaserJet_I_(12935740974).jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/5/59/HP_LaserJet_I_%2812935740974%29.jpg
- **Source institution:** Wikimedia Commons (private collector photo)
- **License:** Creative Commons Attribution-ShareAlike 2.0 Generic (CC BY-SA 2.0)
- **Attribution:** "Photo: Atomic Taco / Wikimedia Commons — CC BY-SA 2.0"
- **Dimensions:** 5184 × 3456
- **Fit rationale:** The iconic mark on which all subsequent personal/office laser printing was built. Very high resolution. Clean composition.
- **Risk notes:** Attribution required. The image is a 2013 collector photo of the original machine — the device is period-authentic; the photo is modern (appropriate for documentary use).
- **Priority:** High

#### C-07 · HP LaserJet 4P
- **Target slot:** `history/printing-in-the-1990s` — inline figure (the 1990s shared workgroup printer); alternative for `brands/hewlett-packard`.
- **Source file page:** https://commons.wikimedia.org/wiki/File:HP_LaserJet_4P_001.jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/6/60/HP_LaserJet_4P_001.jpg
- **Source institution:** Wikimedia Commons
- **License:** **Public domain** (explicit release by author)
- **Attribution:** "Photo: Markxps / Wikimedia Commons — Public domain (CC0 / author release)"
- **Dimensions:** 640 × 480
- **Fit rationale:** Mid-1990s shared workgroup laser printer — useful for the 1990s era page. Public-domain status is the cleanest.
- **Risk notes:** **Small resolution** (640 × 480) — limits use to small inline figures; not suitable for hero. Flagged as low priority unless a small inline figure is genuinely needed; otherwise prefer C-06 for HP-brand representation.
- **Priority:** Low

#### C-08 · Apple LaserWriter II (desktop publishing era)
- **Target slot:** `history/history-of-desktop-publishing` — inline figure for "How the page-description model changed production."
- **Source file page:** https://commons.wikimedia.org/wiki/File:Apple_Laserwriter_II.jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/0/08/Apple_Laserwriter_II.jpg
- **Source institution:** "All About Apple" museum (via Wikimedia Commons uploader Hellisp)
- **License:** **Triple-licensed** — Creative Commons Attribution-ShareAlike 2.5 Italy AND Creative Commons Attribution-ShareAlike 3.0 Unported AND GNU Free Documentation License 1.2+. (Use CC BY-SA 3.0 as the recorded license — broadest and most familiar.)
- **Attribution:** "Photo: All About Apple museum, via Hellisp / Wikimedia Commons — CC BY-SA 3.0"
- **Dimensions:** 800 × 600
- **Fit rationale:** The Apple LaserWriter II is the specific printer the desktop publishing revolution coalesced around — exactly what the DTP page describes.
- **Risk notes:** **Small resolution** (800 × 600). Suitable for an inline figure but not hero. Source is a third-party museum; attribution chain (museum → uploader → Commons) is documented but more involved than a direct individual photographer. If you want a larger original, this slot may be better filled by a different LaserWriter image in a follow-up batch.
- **Priority:** Medium

#### C-09 · Laser printer cutaway diagram
- **Target slot:** `guides/how-laser-printers-work` — inline figure illustrating electrophotography mechanism. (Not historical — this is a technical diagram, used in a guide rather than a history page.)
- **Source file page:** https://commons.wikimedia.org/wiki/File:Laser_printer_(cutaway_diagram).jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/3/3a/Laser_printer_%28cutaway_diagram%29.jpg
- **Source institution:** Wikimedia Commons (contributor diagram)
- **License:** **Public domain** (released by author)
- **Attribution:** "Diagram: Welleman / Wikimedia Commons — Public domain"
- **Dimensions:** 400 × 379
- **Fit rationale:** Conceptual cutaway showing drum / toner / fuser path. Public-domain status is clean.
- **Risk notes:** **Very small resolution** (400 × 379). Acceptable for a small inline diagram only — not hero usable. The diagram is hand-drawn schematic style (acceptable for an editorial archive; clearly not photographic).
- **Priority:** Low (only worth committing if the guide page benefits from the schematic; otherwise leave the guide image-less)

### 3.3 Fax / document history cluster

#### C-10 · Panasonic KX-F90 (1980s/1990s office fax)
- **Target slot:** `fax/history-of-business-faxing` — inline figure for "Fax as critical business infrastructure"; also `fax/fax-machines-before-email` figure.
- **Source file page:** https://commons.wikimedia.org/wiki/File:Panasonic_KX-F90_(cropped).jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/e/ec/Panasonic_KX-F90_%28cropped%29.jpg
- **Source institution:** Wikimedia Commons (cropped derivative of original by Pittigrilli)
- **License:** Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
- **Attribution:** "Photo: Pittigrilli, cropped by Georgfotoart / Wikimedia Commons — CC BY-SA 4.0"
- **Dimensions:** 1282 × 841
- **Fit rationale:** Classic compact office fax machine with integrated handset — the visible artifact of the workflow the fax-history pages describe.
- **Risk notes:** Attribution required. Cropped derivative — chain of authorship is on the file page; the attribution string above credits both photographer and cropper.
- **Priority:** High

#### C-11 · Muirhead fax machine (Museum für Kommunikation Bern)
- **Target slot:** `fax/analog-fax-vs-digital-fax` — inline figure illustrating the analog era; alternative for `fax/history-of-business-faxing` hero.
- **Source file page:** https://commons.wikimedia.org/wiki/File:Muirhead_fax_machine_-_MfK_Bern.jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/7/72/Muirhead_fax_machine_-_MfK_Bern.jpg
- **Source institution:** Photo by Wikimedia user Sandstein, taken at the Museum für Kommunikation Bern.
- **License:** Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)
- **Attribution:** "Photo: Sandstein / Wikimedia Commons (at Museum für Kommunikation Bern) — CC BY-SA 3.0"
- **Dimensions:** 3030 × 2304
- **Fit rationale:** Earlier-generation analog Muirhead fax apparatus photographed in a museum setting — the "museum-archive" provenance carries documentary weight. High resolution.
- **Risk notes:** Attribution required. Museum-context photography is acceptable per the brief; the file page documents the museum location.
- **Priority:** High

### 3.4 Early-computer-printing / archival identity cluster

#### C-12 · IBM 1403 line printer (mainframe era)
- **Target slot:** `history/early-computer-printing` — inline figure for early mainframe-era printing; also strong as `<StorytellingBand>` "Then" image on homepage if institutional-mainframe register is preferred.
- **Source file page:** https://commons.wikimedia.org/wiki/File:IBM_line_printer_1403.JPG
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/0/01/IBM_line_printer_1403.JPG
- **Source institution:** Wikimedia Commons (private photographer)
- **License:** **Triple-licensed** — GFDL 1.2+, CC BY-SA 3.0 Unported, CC BY 2.5 Generic. (Use CC BY-SA 3.0 as the recorded license.)
- **Attribution:** "Photo: Waelder / Wikimedia Commons — CC BY-SA 3.0"
- **Dimensions:** 1509 × 1584
- **Fit rationale:** The IBM 1403 was a defining 1960s/1970s mainframe line printer — appropriate for the early-computer-printing history page. Medium-large resolution.
- **Risk notes:** Attribution required.
- **Priority:** Medium

#### C-13 · Bound computer printout (continuous-form, archival artifact)
- **Target slot:** Homepage `<StorytellingBand>` "Archival highlights" image, OR `history/history-of-printers` hero, OR `history/early-computer-printing` inline figure. Strong candidate for **archive identity** — the bound stack of green-bar continuous-form output is instantly legible as "computing era" and "archive" simultaneously.
- **Source file page:** https://commons.wikimedia.org/wiki/File:Bound_computer_printout.agr.jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/e/e8/Bound_computer_printout.agr.jpg
- **Source institution:** Wikimedia Commons (private photographer)
- **License:** **Dual-licensed** — CC BY-SA 3.0 Unported AND GFDL 1.2+. (Use CC BY-SA 3.0.)
- **Attribution:** "Photo: ArnoldReinhold / Wikimedia Commons — CC BY-SA 3.0"
- **Dimensions:** 1232 × 1810
- **Fit rationale:** The bound stack of continuous-form printout is a documentary artifact of the computing era. Reads as both "history of printing" and "archive" — perfect for the homepage's archival-highlights identity slot.
- **Risk notes:** Attribution required. Medium resolution — fine for a `<StorytellingBand>` 480px image cell; would benefit from upscale review at full-bleed hero.
- **Priority:** High

#### C-14 · Green Bar Computer Paper (sample sheet)
- **Target slot:** `glossary/print-driver` or any glossary entry where the green-bar paper is the canonical artifact; alternative homepage Archival highlights image; or inline figure on `history/early-computer-printing` / `history/office-printing-before-wifi`.
- **Source file page:** https://commons.wikimedia.org/wiki/File:Green_Bar_Computer_Paper_(6507071701).png
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/7/7e/Green_Bar_Computer_Paper_%286507071701%29.png
- **Source institution:** Wikimedia Commons (Flickr import)
- **License:** Creative Commons Attribution 2.0 Generic (CC BY 2.0) — note: attribution only, NO share-alike.
- **Attribution:** "Photo: David Swart / Wikimedia Commons — CC BY 2.0"
- **Dimensions:** 915 × 707
- **Fit rationale:** The iconic green-and-white-bar continuous-form paper sheet — the material signature of computer printing for two decades. Recognizable instantly to anyone who used a computer between 1965 and 1995.
- **Risk notes:** Attribution required (CC BY 2.0 — note this is *not* share-alike, slightly more permissive than the BY-SA family elsewhere in this manifest). Small-medium resolution.
- **Priority:** Medium

---

## 4. Suggested Homepage Hero / Then-Now Diptych

For the homepage hero and the existing `<StorytellingBand>` "Then" / "Now" pairs, the strongest combinations from this batch:

- **Archival identity hero** (the homepage's `Archival highlights` band image): **C-13 (Bound computer printout)** — instantly legible as both "history of computing" and "archive."
- **"Then" panel (`ThenNow`, image-left band)**: **C-03 (Tractor-feed paper)** — the iconic material reality of impact-era office output. Alternative: **C-12 (IBM 1403)** if you want an institutional-mainframe register.
- **"Now" panel (`ThenNow`, image-right band)**: **C-06 (HP LaserJet I)** — the inflection point where office printing became personal. Alternative: **C-05 (IBM 3800)** if you want institutional/scale continuity across both panels.

Both `<StorytellingBand>` instances already have graceful Motif fallbacks at the same `max-w-md aspect-[4/3]` footprint; CLS will be zero when these images replace the fallbacks.

---

## 5. Gaps in This Batch (explicit; flagged for next research push)

Two of the eight priority themes from the brief did not yield verified candidates in this research pass and need a follow-up sourcing effort:

- **Network printing / shared office printers / print servers.** The "Print servers" category on Wikimedia Commons does not exist (HTTP 404). The closest available imagery is generic workgroup printer photos that don't clearly signal "shared network resource." For 4B.3 follow-up: search the Computer History Museum's open-access collection, Smithsonian Open Access, and the Wikimedia Commons "Computer networks" / "Ethernet" / specific JetDirect category for shared-office network-printing artifacts; or accept this slot as image-less (the graceful Motif default holds).
- **1980s / 1990s office environment photographs (printer-in-context).** Searches on Wikimedia Commons for "office computer room 1990s historical photo" returned mostly stock-photo sites (explicitly disallowed). The Library of Congress IBM antique typewriter collection (`/item/99471997/`) was the most promising free-to-use lead but returned HTTP 403 on direct fetch — needs an authenticated browsing session through `loc.gov/pictures` to identify specific items. For 4B.3 follow-up: a manual browse of LoC's "America at Work" / FSA-OWI office photographs, Smithsonian Open Access "office equipment" search, and Computer History Museum installation photos.

Both gaps are honest — neither has a confidently-licensed candidate yet — and both can be revisited in a 4B.2 batch-2 manifest update once additional sources are vetted. Until then, the corresponding pages render with the existing graceful Motif default. No layout depends on these slots being filled.

---

## 6. Source Domains Used

- **commons.wikimedia.org** (sole source of candidates in this batch — 14 of 14)
  - `upload.wikimedia.org` for direct binary URLs
- **Identified-but-not-yet-mined:** `www.loc.gov`, `library.si.edu` (Smithsonian Open Access), `computerhistory.org` — all for the next batch (and for the two gap themes above).

## 7. Sources Explicitly Avoided

Per the Phase-4B brief, candidates from these source types were not considered and would be rejected outright if proposed in future batches:

- Pinterest, generic blogs, content aggregators with unclear original source
- Stock-photo platforms: Alamy, Getty Images, Adobe Stock, iStock, Shutterstock, Dreamstime
- AI-generated image repositories
- Modern generic office stock photography
- Low-resolution "weak visual" sources where artifact integrity isn't supported by metadata

Several search queries during this batch returned exactly those sources for "1990s office computer room" type imagery — they were skipped and the gap was logged in §5 rather than substituted with disallowed material.

---

## 8. Operational Notes for Phase 4B.3 (when binaries land)

When you approve a candidate, Phase 4B.3 will:

1. Download the original-size file from the cited `upload.wikimedia.org/...` URL.
2. Re-encode as AVIF + WebP (`next/image` will negotiate via the existing `images.formats` config from Phase 1).
3. Commit the binary at `public/images/<section>/<slug>.<ext>` using a stable filename matching the entry slug.
4. Update the relevant typed content module's `hero` (or add a `figure` block) with `{ src, alt, width: <intrinsic>, height: <intrinsic>, caption?, credit: { source, url, license } }` where `source` is the photographer/institution string, `url` is the Wikimedia Commons file page URL (not the upload URL — the descriptor page is the canonical attribution target), and `license` is the exact license string from this manifest.
5. The build-time integrity gate at `lib/content/integrity.ts` verifies alt + source + license + dimensions and fails `next build` on any image missing them.
6. `ArchivePlate` / `<Figure>` render the image at the same `max-w-md aspect-[4/3]` footprint as the existing Motif fallback — CLS is zero.

No content module, type, integrity gate, or component changes; image arrival is a pure content edit per the design.
