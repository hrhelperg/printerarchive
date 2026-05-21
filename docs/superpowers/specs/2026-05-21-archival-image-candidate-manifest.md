# Archival Image Candidate Manifest — Cross-Section Expansion

**Date:** 2026-05-21
**Branch:** `feat/foundation-architecture`
**Status:** Candidate manifest for approval. **No binaries downloaded or committed.**
**Predecessor manifests:** 2026-05-20 Batch A (device-led) and Batch B (context) — this manifest extends imagery into the still-image-light sections.

## 1. Governance (unchanged)

- **Allowed sources only:** Wikimedia Commons, NARA, Library of Congress, Smithsonian Open Access, Computer History Museum, and equivalent institutional collections.
- **Licenses:** public domain (PD), CC0, CC BY, CC BY-SA only.
- **Forbidden:** stock-photo platforms, Pinterest, content aggregators, AI-generated historical imagery, fake retro recreations, unverifiable blogs.
- Every candidate below lists: target page/slot, source (Commons file page), license, attribution, dimensions, fit rationale, risk notes, **verification tier**, priority.
- Per prior workflow, the download phase (Batch-style) re-confirms each file's license + dimensions before any binary is committed.

## 2. Verification tiers

- **T1 — Verified:** I fetched the Commons file page and confirmed license + dimensions + author. Ready to download on approval.
- **T2 — Dimensions confirmed, license to confirm:** the file appears in a verified Commons category with confirmed pixel dimensions; the per-file license must be confirmed on the file page at download (Commons category pages do not surface per-file licenses).
- **T3 — Subject + category identified:** a real, confirmed Commons category exists for the subject; the specific file is to be selected and fully verified at download. No fabricated per-file metadata.

## 3. Prioritisation (image-light pages)

Audit of current image coverage (entries with a `hero`/`figure`/`figurePair` block):

- **/history:** 5 of 20 have images. 15 image-light.
- **/fax:** 1 of 6 (only history-of-business-faxing). 5 image-light.
- **/brands:** 0 of 8. All image-light.
- **/guides:** 0 of 9. All image-light.
- **/troubleshooting:** 0 of 9. All image-light (but see §6 — caution).
- **/workflows:** 0 of 6. All image-light.
- **/mobile-printing:** 0 of 2 (see §6 — low archival yield).
- **/tools:** 0 of 1 (see §6).

Priority order for this batch: **fax history, guides (mechanism), brands (iconic devices), image-light history pages**, then workflows. Mobile-printing/tools/troubleshooting are low-yield for *archival* imagery and are addressed conservatively in §6.

---

## 4. Candidates — Tier 1 (verified: license + dimensions + author confirmed)

### C-01 · Caselli's Pantelegraph (1860s) — the first fax
- **Target:** `history/history-of-fax-machines` inline figure; alt slot `fax/fax-machines-before-email`.
- **Source:** https://commons.wikimedia.org/wiki/File:Pantelegraph.png
- **License:** Public domain (CC-PD-Mark; work published 1873, author d. 1891).
- **Attribution:** "Giovanni Caselli, from *Die gesammten Naturwissenschaften* (1873), via Wikimedia Commons — Public domain"
- **Dimensions:** 1000 × 1473 (portrait).
- **Fit:** The pantelegraph is the literal forerunner of the fax machine; a period engraving anchors the fax-history narrative in its 19th-century origin. Documentary register, cleanest possible licence.
- **Risk:** None material. Portrait engraving — suits an inline figure, not a wide hero.
- **Tier:** T1 · **Priority: High**

### C-02 · Apple LaserWriter laser-generation mechanism (labeled)
- **Target:** `guides/how-laser-printers-work` inline figure.
- **Source:** https://commons.wikimedia.org/wiki/File:LaserimprimanteLegendee.jpg
- **License:** Public domain (released by author).
- **Attribution:** "Megodenas, via Wikimedia Commons — Public domain"
- **Dimensions:** 1600 × 1200.
- **Fit:** A labeled/annotated photo of the laser-generation assembly from a dismantled Apple LaserWriter — exactly the "how it works" mechanism visual the guide needs.
- **Risk:** Labels are in the image; confirm legibility/language at integration. Otherwise clean.
- **Tier:** T1 · **Priority: High**

### C-03 · Laser toner cartridge (clean studio)
- **Target:** `guides/how-laser-printers-work` second figure; alt `glossary/toner`.
- **Source:** https://commons.wikimedia.org/wiki/File:Samsung_laser_toner_cartridge_front_view.jpg
- **License:** CC BY-SA 4.0.
- **Attribution:** "W.carter, via Wikimedia Commons — CC BY-SA 4.0"
- **Dimensions:** 4767 × 2449 (downscale to 1600w at download).
- **Fit:** The consumable at the centre of laser printing; clean studio shot on neutral ground, matches the archive's object-photography register.
- **Risk:** None material. Brand visible (Samsung) — acceptable as a representative object.
- **Tier:** T1 · **Priority: High**

### C-04 · Apple LaserWriter 810 (PostScript printer)
- **Target:** `guides/what-is-postscript-printing` inline figure; alt `history/history-of-desktop-publishing`.
- **Source:** https://commons.wikimedia.org/wiki/File:Laserwriter810_large.jpg
- **License:** CC BY-SA 3.0.
- **Attribution:** "Cfazzio, via Wikimedia Commons — CC BY-SA 3.0"
- **Dimensions:** 1200 × 900.
- **Fit:** The LaserWriter is the printer that paired PostScript + the Mac to launch desktop publishing — the single most on-point device for both pages.
- **Risk:** "810" is a later LaserWriter model, not the 1985 original; caption should say "an Apple LaserWriter" rather than imply the first model. Otherwise clean.
- **Tier:** T1 · **Priority: High**

---

## 5. Candidates — Tier 2 (dimensions confirmed; per-file license to confirm at download)

All drawn from verified Commons categories (`Category:Fax machines`, `Category:Dot matrix printers`, `Category:Inkjet printers`, `Category:Halftone`, `Category:Toner cartridges`).

### C-05 · Standalone office fax machine ("Telefax")
- **Target:** `fax/how-fax-machines-work` or `fax/decline-of-office-fax-machines` inline figure.
- **Source:** https://commons.wikimedia.org/wiki/File:Telefax.JPG
- **Dimensions:** 3072 × 2048. **License:** confirm on file page (Commons `Category:Fax machines`).
- **Fit:** Generic standalone office fax — the everyday device the fax pages describe.
- **Risk:** License unconfirmed at file level; confirm before commit. **Tier:** T2 · **Priority: Medium**

### C-06 · Sharp UX-D63CL office fax
- **Target:** `fax/why-fax-is-still-used` or `fax/analog-fax-vs-digital-fax`.
- **Source:** https://commons.wikimedia.org/wiki/File:SHARP_Fax_UX-D63CL.jpg
- **Dimensions:** 3840 × 2160. **License:** confirm at download.
- **Fit:** A later consumer/office fax — fits the "fax persists" and analog/digital framing.
- **Risk:** License unconfirmed; brand visible (acceptable). **Tier:** T2 · **Priority: Medium**

### C-07 · Epson LX-800 dot-matrix printer
- **Target:** `brands/epson` figure; alt `history/how-dot-matrix-printers-work`.
- **Source:** https://commons.wikimedia.org/wiki/File:Epson-lx800.png
- **Dimensions:** confirm at download (file in `Category:Dot matrix printers`). **License:** confirm.
- **Fit:** Epson's dot-matrix line is the brand's defining contribution; an iconic period unit.
- **Risk:** Dimensions + license both to confirm. **Tier:** T2/T3 · **Priority: High** (brands is 0% covered)

### C-08 · Fujitsu DL3300 dot-matrix printer
- **Target:** `history/how-dot-matrix-printers-work` or `history/how-impact-printing-worked`.
- **Source:** https://commons.wikimedia.org/wiki/File:Fujitsu_DL3300_dot_matrix_printer.JPG
- **Dimensions:** 3648 × 2736. **License:** confirm at download.
- **Fit:** A second impact-printer example so the dot-matrix pages do not all reuse the Facit E560 already in the archive.
- **Risk:** License unconfirmed. **Tier:** T2 · **Priority: Medium**

### C-09 · Panasonic KX-P1124 dot-matrix printer
- **Target:** alt for C-08; `history/how-impact-printing-worked`.
- **Source:** https://commons.wikimedia.org/wiki/File:Panasonic_KX-P1124_printer_(1).jpg
- **Dimensions:** 3543 × 2362. **License:** confirm at download.
- **Risk:** License unconfirmed. **Tier:** T2 · **Priority: Low** (variety/backup)

### C-10 · Inkjet print head + ink tray + control panel
- **Target:** `guides/how-inkjet-printers-work` inline figure.
- **Source:** https://commons.wikimedia.org/wiki/File:Printer_head,_ink_tray,_and_control_panel.JPG
- **Dimensions:** 1224 × 1632. **License:** confirm at download.
- **Fit:** Shows the inkjet mechanism (head + ink) the guide explains.
- **Risk:** License unconfirmed. **Tier:** T2 · **Priority: High**

### C-11 · Inkjet printer with covers removed
- **Target:** alt for C-10; `history/evolution-of-inkjet-printers`.
- **Source:** https://commons.wikimedia.org/wiki/File:Inkjet_printer_with_covers_removed.JPG
- **Dimensions:** 1632 × 1224. **License:** confirm at download.
- **Risk:** License unconfirmed. **Tier:** T2 · **Priority: Medium**

### C-12 · Epson ink-tank labyrinth (cartridge internals)
- **Target:** `history/evolution-of-inkjet-printers` detail figure.
- **Source:** https://commons.wikimedia.org/wiki/File:Labyrinth_Air_Channels_on_Epson_Ink_Tank.JPG
- **Dimensions:** 3648 × 2736. **License:** confirm at download.
- **Risk:** Very detailed/abstract — may be too niche; license unconfirmed. **Tier:** T2 · **Priority: Low**

### C-13 · CMYK halftone (AM) screen
- **Target:** `guides/understanding-printer-resolution`; alt `history/evolution-of-color-printing`.
- **Source:** https://commons.wikimedia.org/wiki/File:Cmyk_AM_screen.png
- **Dimensions:** 640 × 897 (small — inline only, not hero). **License:** confirm at download.
- **Fit:** Demonstrates halftone screening / resolution — the resolution guide's core concept.
- **Risk:** Small dimensions; license unconfirmed. **Tier:** T2 · **Priority: Medium**

### C-14 · Toner cartridge (alt, square studio)
- **Target:** backup for C-03; `glossary/toner`.
- **Source:** https://commons.wikimedia.org/wiki/File:Tonerkartusche.jpg
- **Dimensions:** 3000 × 3000 (square). **License:** confirm at download.
- **Risk:** License unconfirmed; square crop. **Tier:** T2 · **Priority: Low**

---

## 6. Candidates — Tier 3 (subject + confirmed Commons category; select + verify file at download)

Each names a **real, confirmed** Commons category; the specific file is chosen and fully verified before any download. No per-file metadata is asserted here.

| # | Target page | Subject | Confirmed Commons source | Priority |
|---|---|---|---|---|
| C-15 | `history/history-of-desktop-publishing` | Apple LaserWriter II studio photo (`File:Apple_Laserwriter_II.jpg`, 800×600) | `Category:Apple Inc. laser printers` | High |
| C-16 | `history/evolution-of-office-printing` / `history/history-of-printers` | Vintage photocopier / Photostat room (NARA `File:111-SC-10323…NARA-55180979.jpg`, US federal PD) | `Category:Photocopiers` | Medium |
| C-17 | `brands/canon` | A Canon printer/copier device | `Category:Canon printers` / `Category:Canon photocopiers` | Medium |
| C-18 | `brands/xerox` | A Xerox machine (copier/printer) | `Category:Xerox hardware` / `Category:Photocopiers` | Medium |
| C-19 | `brands/brother` · `brands/ricoh` · `brands/kyocera` · `brands/lexmark` | One representative device per brand | Respective `Category:<Brand> …` on Commons | Medium |
| C-20 | `workflows/scan-to-searchable-pdf` · `troubleshooting/scanner-not-detected` | A flatbed document scanner | `Category:Scanners` (note: `Category:Image scanners`/`Flatbed scanners` redirected/empty — use parent `Category:Scanners`) | High |
| C-21 | `history/history-of-printers` · `history/early-computer-printing` | A line printer / continuous-form printer | `Category:Line printers` | Medium |
| C-22 | `history/thermal-printing-history` · `workflows/print-shipping-labels` | A thermal / receipt / label printer | `Category:Thermal printers` | Medium |
| C-23 | `history/how-impact-printing-worked` | A daisy-wheel printer or typebar mechanism | `Category:Daisy wheel printers` | Medium |
| C-24 | `guides/what-is-a-print-server` · `guides/how-wireless-printing-works` | A network/print-server appliance or networked printer | `Category:Print servers` / `Category:Computer networking hardware` | Low |
| C-25 | `history/history-of-wireless-printing` | An early Wi-Fi / IrDA-era printer | `Category:Wireless printers` (verify exists) | Low |

---

## 7. Sections deliberately treated with caution

- **/troubleshooting (9 pages):** archival/device imagery sits awkwardly with diagnostic procedure pages, and the section already has a strong specialized diagnostic layout. Recommend **at most** one mechanism photo where it genuinely aids (e.g. a paper-path / paper-jam photo on `paper-jam-guide`, or the C-20 scanner on `scanner-not-detected`). Do **not** blanket-image the section.
- **/mobile-printing (2 pages):** **low archival yield** — the subject is modern wireless printing; period imagery would be anachronistic. Recommend leaving image-free (as the hub already is) unless a clean, honestly-captioned contemporary CC photo of phone→printer is approved. No archival candidate proposed.
- **/tools/what-is-pdf (1 page):** PDF is a format, not a device — no honest archival photo. The PostScript lineage (C-04 LaserWriter) is the closest tie and belongs on the PostScript guide, not here. Recommend leaving image-free or, later, a purpose-made diagram (out of scope for an *archival image* manifest).

## 8. Summary

- **25 candidates** (C-01…C-25) across the priority image-light sections.
- **4 fully verified (T1)** — Pantelegraph, LaserWriter mechanism, toner cartridge, LaserWriter 810 — ready to download on approval.
- **10 dimensions-confirmed (T2)** — license to confirm at download.
- **11 subject+category identified (T3)** — file selected + fully verified at download.
- All sources are Wikimedia Commons / NARA. No stock, no Pinterest, no AI imagery, no fabricated metadata.

## 9. Approval

Reply with the candidate IDs to approve (e.g. "approve C-01, C-02, C-03, C-04, C-07, C-10, C-13, C-15, C-20"). On approval I will, per the established workflow: download only the approved files, re-confirm each license + dimensions, downscale to ≤1600px wide, commit the binaries, wire `ArchiveImage` metadata (src/alt/width/height/caption/credit) into the relevant content modules, run the full QA gate, and push to `feat/foundation-architecture`. **No binaries are committed before your approval.**
