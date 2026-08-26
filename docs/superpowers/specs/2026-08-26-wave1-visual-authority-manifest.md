# Wave 1 — Historical Evolution Visual Authority Manifest

**Date:** 2026-08-26 · **Branch:** `feat/historical-evolution-wave-1` · **Status:** verified, integrated.

Governance follows the existing archival-image workflow (`2026-05-21-archival-image-candidate-manifest.md`):
allowed institutional sources only; PD / CC0 / CC BY / CC BY-SA licences only; no stock platforms,
aggregators, blogs, AI-generated historical imagery, or unverifiable provenance.

## Method

Every candidate was resolved through the **Wikimedia Commons API**
(`prop=imageinfo&iiprop=url|size|extmetadata`), which returns the machine-readable licence, author,
date and true pixel dimensions from the file record itself rather than from a search summary.
Licence templates were then read from each file's wikitext to confirm the *basis* of a public-domain
claim (`PD-USGov`, `PD-US-no-notice`, `PD-self`, `PD-Matson`) rather than accepting the label.

Binaries were fetched through the sanctioned API thumbnail endpoint (`iiurlwidth`), not by
constructing thumbnail URLs by hand.

**Every image was then opened and looked at before a caption was written.** That step caught three
defects that licence metadata alone would not have surfaced — see *Rejections*.

## Accepted — 12 images across 10 pages

| ID | Target page | File | Source / creator | Licence | Dimensions | Placement |
|---|---|---|---|---|---|---|
| W1-01 | `history/mobile-printing-before-airprint` | `mobile-printing-before-airprint--docomo-infrared-port.jpg` | Commons, FOMALHAUT, 2005-10-23 | Public domain (`PD-self`) | 1400×1050 | figure |
| W1-03 | `guides/pc-fax-modems-and-fax-boards` | `pc-fax-modems-and-fax-boards--pci-v92-fax-modem-card.jpg` | Commons, Jonathan Zander (Digon3), 2008-10-07 | CC BY-SA 3.0 | 1920×1445 | figure |
| W1-04 | `guides/pc-fax-modems-and-fax-boards` | `pc-fax-modems-and-fax-boards--rockwell-c5902-fax-controller.jpg` | Commons, Raimond Spekking, 2020-10-28 | CC BY-SA 4.0 | 1400×1400 | figure |
| W1-05 | `guides/pdf-stream-filters-and-file-size` | `pdf-stream-filters-and-file-size--jpeg-quality-vs-file-size.png` | Commons, Marek Ślusarczyk (Tupungato), 2009-09-01 | CC BY 3.0 | 1060×870 | figure |
| W1-06 | `history/paperless-office-prediction` | `paperless-office-prediction--xerox-9700-1977.jpg` | Commons, Xerox, 1977 | Public domain (`PD-US-no-notice`) | 1920×1375 | **hero** |
| W1-07 | `history/paperless-office-prediction` | `paperless-office-prediction--nara-cut-off-your-files-1990.jpg` | Commons, from NARA, 1990 | Public domain (`PD-USGov`) | 1280×1646 | figure |
| W1-08 | `history/zip-format-and-the-arc-lawsuit` | `zip-format-and-the-arc-lawsuit--pkzip-distribution-floppy.jpg` | Commons, Blake Patterson, 2016-03-08 | CC BY 2.0 | 1920×1920 | figure |
| W1-09 | `history/archive-formats-before-the-web` | `archive-formats-before-the-web--sony-3-5-inch-floppy-pack.jpg` | Commons, User:Iswoar, 2022-07-22 | CC BY 3.0 | 800×700 | figure |
| W1-10 | `guides/carbonless-paper` | `carbonless-paper--cb-cfb-cf-ply-cross-section.jpg` | Commons, Юкатан, 2012-12-13 | CC BY-SA 3.0 | 1920×1022 | figure |
| W1-11 | `workflows/edi-and-business-documents` | `edi-and-business-documents--teleprinter-1938-loc.jpg` | Library of Congress, Matson Collection, 1938 | Public domain (`PD-Matson`, `PD-US-no notice`) | 1920×1410 | figure |
| W1-12 | `history/from-sim-card-to-esim` | `from-sim-card-to-esim--sim-form-factors-2ff-to-mff2.png` | Commons, Jbond2018, 2022-09-02 | CC0 1.0 | 1920×1440 | figure |
| W1-13 | `guides/print-telemetry-privacy-and-retention` | `print-telemetry-privacy-and-retention--machine-identification-dots.jpg` | Commons, Parhamr, 2008-03-09 | Public domain (`PD-self`) | 1400×1346 | figure |

Source pages are recorded in each entry's `credit.url`. Attribution strings are the `credit.source`
field and name the creator wherever the licence requires it (all CC BY / CC BY-SA files).

## Derivative operations performed

Format and scale changes only; no cropping, recolouring or content alteration. Permitted under every
licence used, with attribution and licence preserved in the rendered figure caption.

- **W1-10** — the source is an SVG whose background is transparent and whose labels are black. The
  PNG rendering flattened to **black text on a black ground**; every label was invisible. Re-rendered
  to JPEG, which composites onto white and restores "Pen / The top sheet / Microcapsules of ink /
  The middle sheet / Reactive clay layer / The bottom sheet".
- **W1-13, W1-04, W1-01** — downscaled to ≤1400px and, for W1-13, re-encoded to JPEG (1757 KB → 556 KB).
  The source is a scan with paper grain, so PNG was paying for photographic noise.

## Rejections

| Candidate | Reason |
|---|---|
| `File:FaxServerDiagram.gif` | **Vendor marketing material.** Licence was clean (PD) but the diagram is a Visendo product architecture chart — it names "Viseno Fax Server", Microsoft Azure, SharePoint and Office Live, and was uploaded by the vendor. Publishing it would promote a third-party commercial product on a vendor-neutral archive page. Only caught by looking at it. |
| `File:Wordperfect-5.1-dos.png` | **Copyright uncertainty.** The Commons PD claim reads "No machine-readable author provided. Daniel Pritchard assumed (based on copyright claims)" — an assumed release for a screenshot of commercial software. Not a defensible basis. |
| `File:Letter from Leonardo da Vinci to Ludovico Sforza.jpg` | **Provenance and accuracy.** PD-Art is legally sound, but the Commons source field points at `lettersofnote.com`, a blog, and the file is 520×685. The target page's whole argument is that the 1482 dating is contested and the document is an undated draft; illustrating that argument with a blog-sourced, blog-dated scan would undercut it. |
| `File:Fax and Asterisk.jpg` | Decorative logo composite for a commercial PBX product; no explanatory value. |
| `File:PictBridge stack.jpg` | 453×369, user-made, filename carries a typo. Too weak to publish. |
| `File:Processus envoi fax par internet.JPG` | 628×222 and labelled in French; would need redrawing rather than reuse. |
| `File:Warnock-Geschke-Adobe-1982.jpg` | 437×278. Below usable resolution. |
| Smithsonian NMAH objects (`nmah_850537`, `nmah_850025`) | Could not verify: `americanhistory.si.edu` is behind Cloudflare and returned a challenge page. Recorded as unverified rather than assumed CC0. |
| USPTO patent figures (US 6,483,600; US 5,164,899; US 2,730,456) | Public domain and editorially ideal, but extracting a figure requires PDF rasterisation tooling (`pdftoppm`/`pdfimages`/ImageMagick) that is not available in this environment. Deferred, not rejected on merit. |

## Pages deliberately left without an image (6)

Per the phase brief: *do not force one image onto every page.*

- `fax/internet-fax-t37-and-t38` — the only free diagram is 628×222 and French-labelled.
- `guides/fax-servers-and-inbound-routing` — sole candidate was vendor marketing (rejected above).
- `history/portable-document-formats-before-pdf` — Envoy, Common Ground and Replica left almost no
  freely-licensed visual record; the one screenshot available has an assumed-PD claim.
- `history/rar-format-and-eugene-roshal` — the only free asset is a 640×300 Far Manager screenshot,
  tangential to an article about licence terms.
- `history/history-of-the-resume-document` — four Commons searches for typewritten application
  documents returned nothing usable.
- `tools/fax-over-ip-t38` — a Commons media search for T.38 returns T-38 Talon aircraft and T-38
  tanks. Confirmed empty; needs original artwork.

## Next visual batch (recommended)

1. **Patent figures**, once PDF rasterisation tooling is available: US 6,483,600 B1 (T.38 gateway) for
   `tools/fax-over-ip-t38` and `fax/internet-fax-t37-and-t38`; US 5,164,899 (Resumix) for
   `history/history-of-the-resume-document`; US 2,730,456 for `guides/carbonless-paper`.
2. **Original site-authored SVG diagrams** for the two fax-architecture pages — the store-and-forward
   vs real-time contrast, and the fax-server inbound-routing problem. These are exactly the cases
   where no free asset exists and a redrawn diagram is the correct answer.
3. **Backfill the pre-Wave-1 corpus**, which sits at roughly 5% image coverage across 369 pages.
