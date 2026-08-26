# Patent-Drawing Pass + Core Corpus Image Backfill — Manifest

**Date:** 2026-08-26 · **Branch:** `feat/historical-evolution-wave-1` · **Status:** verified, integrated.

Continues the governance of `2026-08-26-wave1-visual-authority-manifest.md`: approved institutional
sources only; PD / CC0 / CC BY / CC BY-SA only; no stock, aggregators, blogs, AI-generated historical
imagery, vendor marketing, or unclear rights. **24 images added across 24 pages.**

---

## Phase A — Patent drawings (4 figures)

### Tooling

The previous manifest recorded PDF rasterisation as the blocker. Resolved without adding anything to
the repository:

| Checked | Result |
|---|---|
| `pdftoppm` / `pdfimages` / `pdftocairo` (Poppler) | **not installed** |
| Homebrew / MacPorts | **not installed** — cannot install Poppler |
| `magick` / `convert` / `gs` / `mutool` / `qpdf` | not installed |
| PyObjC (`Quartz`) in system Python | **not available** |
| `sips` (macOS built-in) | rasterises PDF, but **first page only** — no page selection |
| Google Patents `patentimages` | serves `itemprop="thumbnail"` at **82×120** only, plus the whole PDF |

Resolution: **PyMuPDF (MuPDF) installed into a throwaway venv outside the repository.** It is a
single self-contained wheel with no system dependencies, `package.json` is untouched, and the repo's
zero-dependency discipline is preserved. Source PDFs come from `image-ppubs.uspto.gov`, not from a
mirror. Operations are **crop and scale only** — no pixel editing, no retouching.

### Figures

| Page | Figure | Patent | Verified |
|---|---|---|---|
| `tools/fax-over-ip-t38` | FIG. 1B, transmitting/receiving gateway pair | **US 6,483,600 B1** | Schuster, McCallister, Fendt · filed 1999-02-26 · granted 2002-11-19 |
| `guides/fax-servers-and-inbound-routing` | FIG. 1, server with per-user mailboxes | **US 6,396,597 B1** | Catherine R. Marshall · filed 1993-02-10 · granted 2002-05-28 |
| `history/history-of-the-resume-document` | FIG. 5, the sample résumé | **US 5,164,899** | Sobotka, Leung, Inn, Tokuda · assignee **Resumix Inc** · filed 1989-05-01 · granted 1992-11-17 |
| `guides/carbonless-paper` | Capsule-coated sheet | **US 2,730,456** | Green & Schleicher · filed 1953-06-30 · granted 1956-01-10 |

Public-domain basis: US patent drawings are not subject to copyright and the USPTO asserts none. Each
document was checked for an applicant copyright notice; **none of the four carries one.**

### Editorial safeguards

- **Overclaiming avoided.** US 6,483,600 is captioned as "a contemporaneous commercial implementation
  of the same architecture T.38 describes… one vendor's system, not the standard." US 2,730,456 is
  captioned as claiming "this record material, not microencapsulation in general."
- **Subject verified before use.** US 5,164,899 is titled only "minimally formatted text documents".
  Its specification was read to confirm it concerns résumés: the abstract names them first, the text
  states *"Resumes provide a classic example of documents which are very easily understood by humans
  through the use of spatial and textual analysis,"* and it defines a "resume grammar" with education
  and work-history headers. FIG. 5 is explicitly "the sample resume".
- **Personal data removed.** FIG. 5 carries a real residential address and two telephone numbers.
  The image is cropped to begin below that block; the section structure that the page actually argues
  survives intact. The PDF page is a scan with no text layer, so nothing is recoverable from the file.
- **Rotation.** US 6,483,600 sheet 2 is printed landscape; rotated 90° and the sheet-header strip
  cropped away. The figure number "FIG. 1B" is retained in-image; full provenance is in the caption.

---

## Phase B — Core corpus backfill (20 images)

Corpus audit before this phase — image-light sections in the brief's priority order:

| Section | Pages | Before | After |
|---|---|---|---|
| brands | 10 | **0%** | **60%** |
| history | 32 | 47% | **62%** |
| tools | 41 | 2% | **10%** |
| guides | 191 | 5% | 8% |
| models | 56 | 0% | 0% (deferred — see below) |

### Integrated

| Page | Subject | Source | Licence |
|---|---|---|---|
| `history/office-print-rooms` | Duplicating room, Helsinki City Transport, 1969 | Unto Laitila / Helsinki City Museum | CC BY 4.0 |
| `history/print-servers-in-large-offices` | Bank of line printers, Gdańsk Shipyard computer centre | Stanisław Kosiedowski | CC BY-SA 4.0 |
| `history/spoolers-and-print-queues` | HASP job log, NYU 370 centre, 13 April 1979 | Jonathan Schilling | CC BY-SA 4.0 |
| `history/enterprise-document-management` | Social Security Board Records Office, 1938 | Library of Congress | Public domain |
| `history/how-impact-printing-worked` | Daisy-wheel print head, Xerox/Diablo D-25 | Chiffre01 | CC BY-SA 4.0 |
| `brands/hewlett-packard` | HP ThinkJet (HP 2225), 1984 | Shelby Jueden | CC BY 4.0 |
| `brands/xerox` | Xerox Model D flat-plate copier, Battelle | HAER, Library of Congress | Public domain |
| `brands/canon` | Canon BJ-10v Lite, 1993 | Namazu-tron | CC BY-SA 3.0 |
| `brands/ibm` | IBM Selectric electric typewriter (model 72) | Nils Salander | CC BY 4.0 |
| `brands/brother` | Brother EP-44, 1984 | Wolfgang Stief | CC0 |
| `brands/epson` | Epson LX-800 (**recovered orphan**, see below) | Oguenther | CC BY-SA 3.0 |
| `tools/halftoning` | CMYK halftone screen, magnified, 1 mm scale bar | Nico Hähnlein | Copyrighted free use |
| `tools/error-diffusion` | Photograph dithered to 1-bit by Floyd–Steinberg | Conansc | CC BY-SA 4.0 |
| `tools/dot-gain` | Tone-value transfer curve, standardised offset on coated paper | Inkman | CC BY-SA 3.0 |
| `guides/book-scanners` | Manual book scanner, National Library of the Czech Republic | Skot | CC BY-SA 4.0 |
| `guides/microfilm-digitization` | e-ImageData ScanPro 2200 reader-scanner | Acarajé No 1 | CC BY-SA 4.0 |
| `guides/adf-scanners` | ADF assembly removed from a machine | Raimond Spekking | CC BY-SA 4.0 |
| `guides/history-of-ocr` | The optophone demonstrated, c. 1921 | Wellcome Collection | CC BY 4.0 |
| `guides/ink-cartridge` | Cartridge underside: contacts and nozzle area | Mediatrotter | CC BY-SA 4.0 |
| `guides/micr-toner` | Early cheque with the MICR code line labelled field by field | SRI International | CC BY-SA 3.0 |

**Recovered orphan.** `public/images/brands/epson--epson-lx800.png` was committed in Phase 6, wired
into `brands/epson.ts`, then silently dropped when Phase 11 rewrote the brand pages — leaving a
verified asset in the repository referenced by nothing. Its metadata was recovered from
`git show bf6d45e`, re-verified against the Commons API (Oguenther, CC BY-SA 3.0, 615×376 — exact
match), and restored.

### Rejections, and what caught them

All 43 candidate file titles returned by discovery were checked against the Commons API: **zero were
missing or misspelled.** Rejections were therefore editorial, not clerical — and three required
actually looking at the image.

| Candidate | Reason |
|---|---|
| `File:IBM 3800 Direct Mail.jpg` | **The filename is wrong.** The visible cabinet label reads **IBM 3803** — a tape control unit. The room is tape drives, not a laser printer, and the Commons description says only "printers". Captioning it as an IBM 3800 would have been a factual error. Replaced with the IBM Selectric. |
| `File:CMYK screen angles.svg` | 512×384. Below usable resolution. `tools/screen-angles` ships without an image. |
| `File:Halftoning introduction.svg` | 260×310. Far below usable resolution. |
| `File:MICR.svg` | 550×50 strip. Too small to carry a figure. |
| `File:Kyocera FS-C5200DN – Toner cartridges TK-550…` | Vendor product shot; no explanatory value for `guides/charge-roller`. |
| `File:Far Manager.png` | 960×500 screenshot of a file manager, tangential to an article about RAR licence terms. |
| `File:Fax 'Impronta'.tif` | A 1994 consumer fax terminal, proposed for a page about 1990s document formats. Off-thesis. |
| Both `guides/developer-unit` candidates | 1024×497 and 957×718 — under the ~900px-on-the-long-edge bar once cropped. Page ships without an image. |
| `guides/charge-roller` | Discovery returned **none-found** for a free photograph; the only option was a patent figure, deferred to a later batch. |

### Caption corrections made during verification

- **`guides/micr-toner`** — the Commons description states the cheque's font is *"similar to E-13B,
  but with a different transit glyph (presumably E-13A, which was superseded by E-13B due to its 8
  and transit glyphs being confusable)"*. The caption says exactly that rather than asserting E-13B.
- **`brands/ibm`** — the file is titled "Selectric I" but described as *"Electric typewriter model
  72"*. Captioned as "an IBM Selectric electric typewriter (model 72)".
- **`brands/canon`** — the file is the **BJ-10v Lite (1993)**, the lighter follow-on to the 1990
  BJ-10v, not the BJ-10v itself.

---

## Quality

- **Zero CLS** — every declared width/height checked against the file on disk: **54 references
  site-wide, 0 mismatches.**
- **SSR** — **24/24** new figures verified present in the prerendered HTML with alt text, a
  `<figcaption>`, creator attribution, licence, and a `rel="noopener noreferrer nofollow"` credit link.
- **No duplicates** — no image appears twice on a page, and no image is reused across pages.
- **Product CTAs untouched** — zero `modernTools` lines in the diff.
- **Gate** — typecheck · lint · test:content (385) · test:unit (84/84) · build · check:routes
  (454 routes, 1,935 image refs, no breakage) · indexnow `--dry-run`.

## Remaining visual gaps

- **`models` — 0 of 56 pages.** The largest remaining surface. Deliberately untouched here: the brief
  warns against repetitive device shots, and 56 printer/fax model pages is precisely where that risk
  concentrates. It needs its own pass with a per-model sourcing rule, not a sweep.
- **`workflows` (4%), `troubleshooting` (0%), `glossary` (9%)** — process and definition pages, where
  original diagrams are usually the right answer rather than photographs.
- **Three Wave-1 pages still have no image**: `fax/internet-fax-t37-and-t38` (the second T.38
  topology figure was withheld to avoid repeating the one on `tools/fax-over-ip-t38`),
  `history/portable-document-formats-before-pdf` and `history/rar-format-and-eugene-roshal` — both
  returned **none-found**, which is the honest result for early-1990s commercial software.
- **`guides/charge-roller`, `guides/developer-unit`, `tools/screen-angles`** — identified, no
  adequate free asset yet.

### Recommended next batch

1. **Original site-authored SVG diagrams** for the cases where no free asset exists and redrawing is
   the correct answer: T.37 store-and-forward vs T.38 relay; screen angles; the charge/develop/transfer
   cycle. These are the highest-value remaining items and depend on nothing external.
2. **A dedicated `models` pass** with a one-image-per-machine rule and an explicit anti-repetition
   check across the 56 pages.
3. **More USPTO patent figures**, now that rasterisation is solved — charge roller, developer unit,
   and thermal printhead all have strong public-domain drawings.
