# PrinterArchive.net — Phase 4B.2 Batch B: Context & Workflow Imagery Manifest

- **Date:** 2026-05-20
- **Status:** Candidates proposed; pending per-image approval. No binaries committed.
- **Repo:** `/Users/petrohrys/printerarchive` → `github.com/hrhelperg/printerarchive`
- **Branch:** `feat/foundation-architecture` (never push to `main`)
- **Companion document:** `docs/superpowers/specs/2026-05-20-phase-4b2-candidate-image-manifest.md` (Batch A — device-led imagery). Batch B extends Batch A with **context, workflow, and "lived office infrastructure"** imagery: operators at work, machine rooms with people, computer-in-office-environment scenes, and the document-processing surrounds that defined how printing technologies were actually used.
- **Phase:** Phase 4B.2 second batch (research/documentation only). 4B.3 Batch A's 6 device-led images already integrated (`fa79471`); this manifest stages a Batch B approval set for a future 4B.3 commit pass.

---

## 1. Purpose & Governance

Batch A made the homepage and key authority pages **device-legible** (printers, fax machines, mechanisms). The platform's remaining visual gap is **operational context** — the missing "printing as lived office infrastructure" layer that the editorial register specifically asks for. This manifest proposes verified, license-clean candidates for that layer.

**Every candidate in this manifest was verified in-session.** Each file's Wikimedia Commons (or institutional) page was fetched and the license, author, dimensions, source institution, and original-size file URL were read directly off the page — not inferred or recalled. URLs and licenses are quoted from those pages.

**Workflow per approval:** identical to Batch A — you accept candidates slot-by-slot; Phase 4B.3 then downloads from the cited URLs, downscales to web sizes, commits binaries under `public/images/<section>/`, wires `ArchiveImage` data with verified `credit.source`/`credit.url`/`credit.license`, and the build-time integrity gate verifies on commit. Nothing happens to the repo from this document alone.

**Allowed source set used:** Wikimedia Commons (12 of 12 verified candidates here), with content originating from National Archives and Records Administration (NARA), U.S. Bureau of the Census, U.S. Air Force, NASA, Orange County Archives (USA), London School of Economics Library (Flickr Commons), Toronto Telegram fonds at York University Libraries, Living Computers: Museum + Labs, Computer History Museum, ACONIT (Grenoble), ZMD (Frankfurt), and Hughes Aircraft Company historical publications. **Source domains explicitly avoided per the Phase-4B brief:** Pinterest, content aggregators, stock-photo platforms (Alamy, Getty, Adobe Stock, iStock, Dreamstime, Shutterstock), AI-generated imagery, modern corporate-stock office photography. The Library of Congress "Free to Use and Reuse" set was identified as a major likely source but its deep-link URLs returned **HTTP 403** to programmatic fetch in this session — documented as a sourcing gap for follow-up below.

---

## 2. Candidate Schema (every row carries these fields)

- **Candidate ID** — B-NN in this batch's numbering (continues from Batch A's C-NN).
- **Target page / slot** — which page / band; one or more candidate slots per image.
- **Source file page URL** — Wikimedia Commons descriptor page (canonical attribution target).
- **Original-size file URL** — direct `upload.wikimedia.org` binary URL.
- **Source institution / platform** — verified from the file page.
- **License** — exact license string as it appears on the source page.
- **Attribution line** — the credit string the `ArchiveImage.credit` fields should record.
- **Dimensions** — verified intrinsic pixel dimensions (width × height).
- **Date** — photo date and (separately, where relevant) subject date.
- **Fit rationale** — why the image suits the slot and the "lived infrastructure" register.
- **Risk notes** — license / attribution / dimensional / authenticity caveats. Spelled out where ambiguity exists.
- **Priority** — high / medium / low.

---

## 3. Candidates

### 3.1 Mainframe-era machine rooms & operators

#### B-01 · NASA mission control with IBM 7090 (Mercury era, 1962)
- **Target slot:** `history/early-computer-printing` inline figure for the "When the page came off a mainframe" frame; or `<StorytellingBand>` Then-side image for any future "mainframe era" homepage band.
- **Source file page:** https://commons.wikimedia.org/wiki/File:NASAComputerRoom7090.NARA.jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/b/b9/NASAComputerRoom7090.NARA.jpg
- **Source institution:** NASA, via National Archives and Records Administration (NARA), Southwest Region, Fort Worth, TX (NAID 278195).
- **License:** Public domain (NASA work).
- **Attribution:** "NASA (via NARA NAID 278195) — Public domain"
- **Dimensions:** 600 × 484
- **Date:** Circa 1962 (Mercury Atlas 6 mission timeframe).
- **Fit rationale:** The canonical 1960s mission-control mainframe scene — dual IBM 7090s with associated IBM 729 tape drives. Period-authentic, institutional, public domain. The IBM 7090 was a contemporary of the IBM 1403 line printer that would have output the mission's mainframe printouts; this image situates the print-era ecosystem in its workplace.
- **Risk notes:** **Small resolution (600 × 484).** Suitable only for inline figure use, not hero. The image is widely reproduced; provenance via NARA NAID is the cleanest legal posture available.
- **Priority:** Medium

#### B-02 · NORAD Computer Center, Cheyenne Mountain (1984)
- **Target slot:** `history/early-network-printing-systems` inline figure for "Spoolers, servers, and who controlled the line"; or `history/office-printing-in-the-1990s` Then-side. Also strong as homepage `<StorytellingBand>` "operational infrastructure" image.
- **Source file page:** https://commons.wikimedia.org/wiki/File:NORADComputerCenter1.jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/0/07/NORADComputerCenter1.jpg
- **Source institution:** U.S. Air Force (photo by SSGT Bob Simons), via U.S. National Archives (catalog.archives.gov).
- **License:** Public domain (U.S. Federal Government work, 17 USC §105).
- **Attribution:** "U.S. Air Force / SSGT Bob Simons (via National Archives) — Public domain"
- **Dimensions:** 2850 × 1860
- **Date:** 1 April 1984.
- **Fit rationale:** Operators at workstations in a Cold-War command-center context. Reads documentary-institutional without being stagey. Federal public domain — the cleanest legal posture for a Batch B candidate at this scale.
- **Risk notes:** None material. Subject is a defense-IT operations room; tonally appropriate to the "infrastructure" register.
- **Priority:** High

#### B-03 · RCA Spectra 70 in Orange County government offices (1967)
- **Target slot:** `<StorytellingBand>` image for a future "Mainframe in the office" homepage band; or `history/office-printing-before-wifi` inline figure for "Printing as a wired, located activity."
- **Source file page:** https://commons.wikimedia.org/wiki/File:Computer_in_County_of_Orange_offices,_1967.jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/6/6b/Computer_in_County_of_Orange_offices%2C_1967.jpg
- **Source institution:** Orange County Archives (Orange County, California).
- **License:** Creative Commons Attribution 2.0 Generic (CC BY 2.0).
- **Attribution:** "Photo courtesy Orange County Archives (via Wikimedia Commons) — CC BY 2.0" — *the source page specifically requests the wording "Photo courtesy Orange County Archives"; record this in `credit.source` exactly.*
- **Dimensions:** 1743 × 1323
- **Date:** 1967.
- **Fit rationale:** An RCA Spectra 70 mainframe installed inside a 1960s county-government office — exactly the "computer in real workplace, not in a vendor brochure" image the brief calls for. Period-authentic county-archive provenance.
- **Risk notes:** **Attribution wording specified by source** ("Photo courtesy Orange County Archives") — must be recorded verbatim in `credit.source`. Medium resolution, fine for band/inline.
- **Priority:** High

#### B-04 · Students in computer room, LSE c.1974
- **Target slot:** Homepage `<StorytellingBand>` image (e.g., "academic computing" / "computers among people"); or `history/early-computer-printing` inline figure.
- **Source file page:** https://commons.wikimedia.org/wiki/File:Students_in_computer_room,_c1970s.jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/9/9e/Students_in_computer_room%2C_c1970s.jpg
- **Source institution:** Library of the London School of Economics and Political Science (via Flickr Commons).
- **License:** No known copyright restrictions (Flickr Commons rights statement).
- **Attribution:** "Library of the London School of Economics and Political Science (Flickr Commons) — No known copyright restrictions"
- **Dimensions:** 5635 × 4413
- **Date:** c.1974 (digitized 2009).
- **Fit rationale:** Students at academic computer terminals — humans in the same frame as the equipment. Strong "computing as part of the workplace" reading. Very high resolution allows hero-scale use.
- **Risk notes:** "No known copyright restrictions" is the Flickr Commons rights statement — institutionally vetted by the LSE library; widely accepted as a public-domain-equivalent posture but not a formal CC license. Attribution to the LSE library is the safest practice.
- **Priority:** High

#### B-05 · Hughes Aircraft employees in front of a mainframe (c.1979–1980)
- **Target slot:** `history/office-printing-in-the-1990s` Then-side figure (the late-1970s/early-1980s corporate computing scene that fed into the 1990s shared-printer era); or `history/printing-in-the-1980s` inline figure.
- **Source file page:** https://commons.wikimedia.org/wiki/File:Employees_having_conversation_in_front_of_mainframe_Hughes_Aircraft_Company.jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/2/2f/Employees_having_conversation_in_front_of_mainframe_Hughes_Aircraft_Company.jpg
- **Source institution:** Hughes Aircraft Company (corporate publication; uploaded to Wikimedia Commons).
- **License:** Public domain (US — published 1978–February 1989 without copyright notice; not registered within five years per 17 USC §405(a)(1)).
- **Attribution:** "Hughes Aircraft Company (via Wikimedia Commons) — Public domain"
- **Dimensions:** 1328 × 1866 (portrait)
- **Date:** Circa 1979–1980 (corporate employee recruitment brochure).
- **Fit rationale:** Operators conversing in front of corporate-installed mainframe equipment — strong "humans alongside computing infrastructure" reading. Portrait aspect ratio works well for storytelling-band image cells (which are also approximately portrait-bounded at `max-w-md`).
- **Risk notes:** PD-US derives from absence of copyright notice on a US-published brochure; that's a settled provenance. Image was originally a recruitment brochure — slight risk of staged composition (workers posed mid-conversation), but the equipment, dress, and setting are period-authentic.
- **Priority:** High

#### B-06 · IBM System/360 Model 65 operator console
- **Target slot:** `history/early-computer-printing` inline figure for "The operator's seat"; or `history/early-network-printing-systems` figure where a mainframe console grounds the spooler/queue narrative.
- **Source file page:** https://commons.wikimedia.org/wiki/File:Console_of_IBM_System_360_Model_65.jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/7/74/Console_of_IBM_System_360_Model_65.jpg
- **Source institution:** Living Computers: Museum + Labs (Seattle).
- **License:** Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0).
- **Attribution:** "Living Computers: Museum + Labs (via Wikimedia Commons) — CC BY-SA 4.0"
- **Dimensions:** 3217 × 4893 (very large, portrait)
- **Date:** Photo 31 May 2019 — but the subject is the period-authentic IBM System/360 Model 65 console (introduced 1965), in a museum collection.
- **Fit rationale:** Lights-and-switches operator console — the canonical 1960s mainframe interface, captured at very high resolution in a museum setting. Reads documentary (museum object photography), not staged. Connects naturally to spooler/queue/operator narrative on the early-network-printing page.
- **Risk notes:** Photo date (2019) and subject era (1965) are distinct; museum-archive provenance makes the photo a documentary record of the period artifact, not a re-creation. Attribution required.
- **Priority:** Medium

### 3.2 Document-processing & data-entry workforce

#### B-07 · 1940 Census keypunch operator (Hollerith pantograph)
- **Target slot:** `history/early-computer-printing` inline figure for "Before electronic printers" / "When 'computing' meant punched cards"; or `glossary/print-driver` for the "data-entry origins of the document pipeline."
- **Source file page:** https://commons.wikimedia.org/wiki/File:Card_puncher_-_NARA_-_513295.jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/8/8f/Card_puncher_-_NARA_-_513295.jpg
- **Source institution:** U.S. Department of Commerce, Bureau of the Census, Public Information Office; held by NARA.
- **License:** Public domain (U.S. Federal Government work).
- **Attribution:** "U.S. Bureau of the Census (via NARA) — Public domain"
- **Dimensions:** 2960 × 2332
- **Date:** Circa 1940 (1940 US Census).
- **Fit rationale:** Period-authentic federal-government document-processing image at high resolution. Connects the pre-electronic-printer document workflow to the electronic-printer story that follows. Public domain is the cleanest possible posture.
- **Risk notes:** None material. Subject (Hollerith pantograph) is mechanical, not electronic — flag in caption that this is the data-input ancestor of the document pipeline, not a printer per se.
- **Priority:** High

#### B-08 · IBM 026 keypunch machines in use (1960s)
- **Target slot:** Alternative for B-07; or paired with B-07 as an `<ImageGroup>` collage showing "The data-entry workforce that fed the printer."
- **Source file page:** https://commons.wikimedia.org/wiki/File:IBM_Keypunch_Machines_in_use.jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/b/b7/IBM_Keypunch_Machines_in_use.jpg
- **Source institution:** Original photograph by Flickr user "born1945"; uploaded to Wikimedia Commons by ArnoldReinhold (24 October 2011).
- **License:** Creative Commons Attribution-ShareAlike 2.0 Generic (CC BY-SA 2.0).
- **Attribution:** "born1945 (via Wikimedia Commons / Flickr) — CC BY-SA 2.0"
- **Dimensions:** 2836 × 2260
- **Date:** Flickr upload 12 July 2008; subject described as "data entry workers from the 1960s" — i.e., the photograph itself is a scan/digitization of a vintage 1960s image, not a staged recreation.
- **Fit rationale:** Six women operating IBM 026 keypunch machines — strong "office workforce among machines" composition. Higher resolution than B-07 and shows multiple operators / scale.
- **Risk notes:** **Provenance ambiguity worth flagging.** The Flickr upload is from 2008 but the photograph itself is described as a 1960s image; the source page doesn't make the scan/recreation distinction explicit. Treat as vintage-scan in caption (do not assert a specific 1960s date in the caption); the CC BY-SA 2.0 license applies regardless. If you want maximum confidence on documentary authenticity, prefer B-07 (federal PD, period-confirmed).
- **Priority:** Medium

### 3.3 Office workflow context (pre-electronic-printer baseline)

#### B-09 · Tax filing counter scene, Toronto 1946
- **Target slot:** `history/history-of-printers` or `history/early-computer-printing` inline figure for "Office document work before automation" — i.e., the manual baseline against which all subsequent printing-as-infrastructure history is read.
- **Source file page:** https://commons.wikimedia.org/wiki/File:Clerks_helping_customers_file_income_taxes,_1946.tif
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/e/e6/Clerks_helping_customers_file_income_taxes%2C_1946.tif (TIFF original; usable web variants up to 2560 × 1618 via the Commons rendering pipeline).
- **Source institution:** Toronto Telegram staff photographer; held at Clara Thomas Archives & Special Collections, York University Libraries (Toronto Telegram fonds, F0433, ASC007801). Originally distributed via York University digital library.
- **License:** Public domain (US: published outside US before 1989 without copyright notice; Canada: Crown copyright expired — published 50+ years ago).
- **Attribution:** "Toronto Telegram / Clara Thomas Archives, York University Libraries — Public domain"
- **Dimensions:** 4827 × 3050 (original TIFF); Commons-rendered JPG variants smaller.
- **Date:** 1 April 1946.
- **Fit rationale:** Pre-computer document-processing counter scene — clerks, customers, forms. Establishes the "before" against which the rest of the archive's printing history is read. Excellent documentary register.
- **Risk notes:** Original is a **TIFF** — Phase 4B.3 will need to convert to a JPG via Commons's standard rendering URL or local conversion before committing. Document is not strictly about printing (no printer visible); it's foundational office-context only. Use sparingly so it doesn't displace device-led imagery on history pages where the printer itself should be the figure.
- **Priority:** Medium (foundational baseline, not a homepage hero)

### 3.4 Operational ecosystems (printer + peripherals together)

#### B-10 · IBM 1401 restoration lab (Computer History Museum)
- **Target slot:** `history/early-network-printing-systems` Then-side figure for "Spoolers, servers, and who controlled the line"; OR `history/history-of-printers` inline figure for "The mainframe-era ecosystem." Strong candidate because it shows the **full ecosystem** — line printer (IBM 1403) alongside the keypunches and tape drives that fed it.
- **Source file page:** https://commons.wikimedia.org/wiki/File:IBM_1401_lab.jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/9/93/IBM_1401_lab.jpg
- **Source institution:** Computer History Museum (Mountain View, CA); photo by Marcin Wichary via Flickr.
- **License:** Creative Commons Attribution 2.0 Generic (CC BY 2.0).
- **Attribution:** "Marcin Wichary, Computer History Museum (via Wikimedia Commons / Flickr) — CC BY 2.0"
- **Dimensions:** 4476 × 2982 (very large)
- **Date:** 30 May 2009 (museum restoration lab; the equipment shown is period-authentic 1960s).
- **Fit rationale:** Single frame containing IBM 026 keypunches + IBM 1403 line printer + IBM 729 tape drives — the entire pre-PC document-processing ecosystem in one image. Higher resolution than nearly any other contextual candidate in this batch.
- **Risk notes:** Museum/restoration setting — period-authentic equipment but no operators visible. Caption must note this is a museum installation (e.g., "the mainframe-era document-processing ecosystem, preserved at the Computer History Museum"), not a working office.
- **Priority:** High

#### B-11 · ZMD data center, Frankfurt, 1970
- **Target slot:** `history/early-computer-printing` hero candidate (period-authentic 1970 photo at usable resolution); or `<StorytellingBand>` image for "European institutional computing 1970."
- **Source file page:** https://commons.wikimedia.org/wiki/File:The_IT_Data_Center_of_the_ZMD_in_1970.png
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/f/fe/The_IT_Data_Center_of_the_ZMD_in_1970.png
- **Source institution:** Zentralstelle für maschinelle Dokumentation (ZMD), Frankfurt am Main–Niederrad; uploaded to Commons by Wikimedia user Buonasera.
- **License:** Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0).
- **Attribution:** "ZMD / Buonasera (via Wikimedia Commons) — CC BY-SA 3.0"
- **Dimensions:** 1353 × 1977 (portrait)
- **Date:** 1970 (period-authentic photograph).
- **Fit rationale:** Period-authentic 1970 institutional data center with IBM 1460 + IBM 729 tape units — the European parallel to the NASA / NORAD scenes. Genuinely contemporaneous (not a museum re-installation), which gives it documentary weight B-06 and B-10 cannot match.
- **Risk notes:** Format is PNG (4MB original) — Phase 4B.3 should re-encode as JPG/AVIF/WebP. Attribution required.
- **Priority:** High

#### B-12 · ACONIT mainframe hall (DEC PDP9 + Telefunken TR4)
- **Target slot:** Optional inline figure for `history/early-computer-printing` if a vintage-hardware "machine hall" image is needed beyond B-10/B-11.
- **Source file page:** https://commons.wikimedia.org/wiki/File:ACONIT_hall_grandes_machines.jpg
- **Original-size file:** https://upload.wikimedia.org/wikipedia/commons/0/0d/ACONIT_hall_grandes_machines.jpg
- **Source institution:** ACONIT (Association pour un Conservatoire de l'Informatique et de la Télématique), Grenoble, France; photo by Philippe Denoyelle.
- **License:** Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0).
- **Attribution:** "Philippe Denoyelle, ACONIT (via Wikimedia Commons) — CC BY-SA 4.0"
- **Dimensions:** 1000 × 412 (very wide aspect, small)
- **Date:** 30 December 2008 (museum photograph; equipment is period-authentic 1960s/70s).
- **Fit rationale:** Vintage hardware (DEC PDP9 in foreground, Telefunken TR4 background) in a French computing-history museum.
- **Risk notes:** **Small dimensions** (1000 × 412) and unusual wide aspect ratio — only useful as an inline figure with a wide layout, not hero. Lower priority than B-10/B-11.
- **Priority:** Low

---

## 4. Suggested approval set for Phase 4B.3 Batch B

For a tight, high-impact second integration pass, I recommend these **5 candidates** as Approval Batch B (analogous to Batch A's 6-image first push):

| # | Candidate | Slot | License | Notes |
|---|---|---|---|---|
| 1 | **B-02** NORAD Computer Center (1984) | `<StorytellingBand>` image for a future "Infrastructure at scale" homepage band — or `history/early-network-printing-systems` figure | Public domain (US Federal) | Cleanest legal posture; operators visible; documentary register. |
| 2 | **B-03** Orange County mainframe in office (1967) | `<StorytellingBand>` image for "Mainframe in the office" homepage band — or `history/office-printing-before-wifi` figure | CC BY 2.0 (specific attribution wording required) | Period-authentic 1967 county-government scene. |
| 3 | **B-05** Hughes Aircraft mainframe scene (c.1979–1980) | `history/printing-in-the-1980s` inline figure — or `history/office-printing-in-the-1990s` Then-side | Public domain (US) | Humans alongside equipment, corporate-archive provenance. |
| 4 | **B-07** 1940 Census keypunch operator | `history/early-computer-printing` inline figure (the data-entry origin of the document pipeline) | Public domain (US Federal) | Federal PD; high resolution; documentary foundation. |
| 5 | **B-10** IBM 1401 restoration lab (CHM) | `history/early-network-printing-systems` figure for the full mainframe-era ecosystem — or `<ImageGroup>` figure on `history/early-computer-printing` | CC BY 2.0 | Single frame shows printer + keypunch + tape — entire ecosystem. |

If you prefer a smaller pass, the **3 highest-confidence candidates** (all US Federal Public Domain or equivalent) are **B-02, B-05, B-07** — clean licenses, large dimensions, and tight thematic fit. Any candidate not approved in this batch stays in the manifest for a future pass.

---

## 5. Gaps in this batch (honest, flagged for follow-up)

Several priority themes from the brief did not yield verifiable candidates in this research pass. These are real gaps, not soft ones — none has a confidently-licensed image yet:

- **Fax in business use (a worker actually using a fax machine).** Wikimedia Commons "Category:Fax machines" yields equipment photography (covered in Batch A), but a clean, license-clear photograph of a human at a fax machine in a real office did not surface. Follow-up: search the National Archives Catalog (catalog.archives.gov) for federal-agency 1980s/1990s office photographs; try "Office of the Vice President" / "Department of State" press-photo series.
- **Print rooms / print operators at a large institutional printer.** "Category:Photocopiers" and the Xerox-related categories did not yield a clean print-room-with-operator image. Follow-up: look for Xerox Corporation historical-marketing images that have aged into PD; investigate university IT department archives.
- **Desktop publishing workflow (Macintosh + LaserWriter + operator).** The DTP-era inflection is well-documented on Wikipedia as text but contextual photographs of someone at a Mac with a LaserWriter alongside are scarce on Commons with clean licenses. Follow-up: Computer History Museum's image collections (their Flickr stream may have period images), Apple corporate-archive material that has aged into PD.
- **Accounting departments with continuous-form paper.** Continuous-form paper as an *artifact* is covered (Batch A C-03, C-13, C-14), but a *workplace scene* with continuous-form paper feeding a printer next to people did not surface. Follow-up: search the IBM 1403 category individual files (the Commons category has 32 items; only the most-cataloged were surfaced in this pass); search Computer History Museum's photo collection by tag.
- **Library of Congress "Free to Use and Reuse" direct integration.** Multiple promising LoC items were identified by metadata-only search (e.g., Tom Rankin's "Wang Laboratories Assembly Plant" 1988 photo in the "Work in America" set), but `www.loc.gov` URL deep-links returned **HTTP 403 Forbidden** to programmatic fetch in this session. The LoC's Prints & Photographs Online Catalog (PPOC) is a major likely source for "office worker with computer/printer" imagery in the FSA-OWI, Theodor Horydczak, John Vachon, and Marion Post Wolcott collections, plus the Tom Rankin "Lowell Folklife Project" series. Follow-up: a manual / authenticated browse of `loc.gov/pictures/` to identify specific items.
- **Smithsonian Open Access (NMAH).** The National Museum of American History's "American Enterprise / The Office" exhibition (americanhistory.si.edu/explore/exhibitions/american-enterprise/online/consumer-era/office) is the major likely Smithsonian source. Individual object pages exist but were not deep-linked into verifiable Commons-equivalent file pages with extracted metadata in this pass. Follow-up: NMAH object IDs like nmah_690512 (UCLA Computer Club Punch Card), nmah_334371 (Apple Macintosh Microcomputer) — the Smithsonian's Open Access program (CC0 declaration) covers digitized assets but the object-record pages are the canonical attribution targets.

The graceful Motif fallbacks from Phase 4B.1 hold for every page slot where Batch B candidates haven't yet been approved or where the gap themes remain open. No page layout breaks if these gaps stay open.

---

## 6. Source domains used

- **commons.wikimedia.org** — sole source of verified candidates in this batch (12 of 12).
- **`upload.wikimedia.org`** — corresponding direct binary URLs.
- **Originating institutions surfaced via Wikimedia Commons descriptor pages:** NASA / National Archives and Records Administration (NARA); U.S. Air Force; U.S. Bureau of the Census; Orange County Archives (USA); Library of the London School of Economics (Flickr Commons); Toronto Telegram fonds at York University Libraries; Living Computers: Museum + Labs; Computer History Museum (Mountain View); ZMD (Frankfurt am Main); ACONIT (Grenoble); Hughes Aircraft Company (historical corporate brochure).
- **Identified-but-not-yet-mined for follow-up batches:** `www.loc.gov` (Library of Congress Prints & Photographs Online Catalog; "Work in America" set; FSA-OWI, Tom Rankin Lowell Folklife collections); `americanhistory.si.edu` (Smithsonian National Museum of American History — "American Enterprise / The Office" exhibition and tabulating-equipment object groups); `catalog.archives.gov` (US National Archives Catalog — federal-agency 1980s/1990s office photography); Computer History Museum's own Flickr / image collections.

## 7. Source categories explicitly avoided

Per the Phase-4B brief, candidates from these source types were excluded and would be rejected outright if proposed in a future batch:

- Pinterest, content aggregators, fan blogs.
- Stock-photo platforms: Alamy, Getty Images, Adobe Stock, iStock, Shutterstock, Dreamstime.
- AI-generated image repositories (no candidates considered).
- Modern generic office stock photography.
- Sources with unclear or absent license metadata on the source page.
- "Fake nostalgic" recreations (deliberately styled to *look* vintage without being so).

Several search queries during this batch (especially for "1990s office computer room" / "fax machine office worker using") returned exactly these disallowed source types — they were skipped and the corresponding gap was logged in §5 rather than substituted with disallowed material.

---

## 8. Research appendix — legally-safe video/audio sources (research only)

Per the brief's §5 instruction, this section documents potential institutional sources for future archival video / audio research. **No video or audio is downloaded, embedded, or committed by this manifest** — this section is reference material only, to support a future decision on whether to add motion media at all and from where.

The runtime cost of adding video to the site (autoplay weight, motion-policy implications, accessibility, Vimeo/YouTube embed = effectively a Client Component) is substantial; the project's hard constraints (zero new deps, zero Client Components, calm editorial register) would be tested by any video integration. Recommended posture for any future video integration: **download a clip, re-encode to a small `<video>`-tag-usable file, commit the binary, render via a Server Component `<video poster controls preload="none">`**, gated by `prefers-reduced-motion` for any autoplay considerations. Pre-decide that no third-party embed (YouTube/Vimeo `<iframe>`) will be used — too many compromises.

### 8.1 Likely public-domain or PD-equivalent video sources

| Source | Coverage | Licensing | Notes |
|---|---|---|---|
| **NASA Image and Video Library** (images.nasa.gov) | Mission-control footage 1960s–present; office-of-space-program-era documentation. | NASA-produced footage is public domain unless explicitly noted. | Searchable; clean per-asset rights statements. Best for "computing infrastructure in an institutional setting" tone, not for office printers specifically. |
| **National Archives Catalog** (catalog.archives.gov) | Federal agency films and videos — USAF, U.S. Information Agency, Bureau of the Census, Department of Defense. | Federal works are PD (17 USC §105). | Excellent for 1950s–1980s office/data-processing documentary content. NARA's "Motion Pictures" series includes USAF and USIA productions. |
| **Library of Congress AFI Collection & Moving Image Section** | Theatrical and TV motion picture holdings; American Television and Radio Archive. | Mixed; many holdings are PD by virtue of age + lack of renewal; some still copyright-encumbered. Per-item assessment required via PPOC-style record. | Useful for ephemeral office-equipment commercials of the 1960s/70s that have aged into PD. |

### 8.2 Likely CC-licensed video sources

| Source | Coverage | Licensing | Notes |
|---|---|---|---|
| **Internet Archive — Prelinger Archives** (archive.org/details/prelinger) | Ephemeral films: industrial, educational, advertising. Vast holdings of 1940s–1970s office-equipment and computing promo films. | Many CC-licensed or PD; some still copyrighted. Per-asset rights statement at archive.org. | The strongest single source for "office worker using printer / typewriter / computer" period footage. The Computer History Museum has cataloged many Prelinger items. |
| **Internet Archive — Computer Chronicles (1983–2002)** | Stewart Cheifet's PBS-syndicated TV program covering personal computing through the 1980s and 1990s; many episodes feature laser printers, fax machines, networking. | Variable; some episodes are explicitly CC-released by Cheifet himself. Per-episode rights statement at archive.org. | Strong "office computing in the 1980s/90s" register. Verify rights per episode before use. |
| **Wikimedia Commons** (commons.wikimedia.org) | User-contributed video and audio files: dot matrix sounds, fax-tone audio, printer-mechanism demonstrations. | Per-file CC/PD declarations. | Useful for short technical demonstrations (dot matrix printing sound, fax connect handshake audio). Quality and length highly variable. |

### 8.3 Likely institutional / proprietary sources (not directly usable without permission)

| Source | Coverage | Notes |
|---|---|---|
| **Computer History Museum YouTube channel + Oral Histories** | Lectures, oral histories with industry figures, archival demonstrations. | Many oral histories are CC-licensed; archival demonstrations are not always. Per-asset rights check required. |
| **Bell Labs / AT&T Archives** | Historical telecommunications documentation including early fax transmission demonstrations. | Largely proprietary; permission required. Probably not feasible for the archive's editorial scope. |
| **Xerox PARC Archive** | Early laser-printing and networked-printing demonstrations. | Variable; some materials have been released CC-equivalent through historical compilations. Permission required for direct use. |
| **YouTube hobbyist channels (e.g., "ComputerArchive", "Vintage Computer Festival" recordings)** | Restoration demonstrations, vintage equipment in operation. | License posture is per-channel — most do not declare an explicit license. Avoid as a primary source; treat as research-leads only. |

### 8.4 Recommended search strategy for a future video research pass

If a future phase decides to integrate motion media:

1. Start with **Prelinger Archives** (archive.org/details/prelinger) — single strongest source.
2. Search NARA's Motion Pictures series for USAF / USIA productions of office computing (1960s–1980s).
3. Cross-reference Computer History Museum's catalog for specific equipment demonstrations.
4. Per-asset rights verification before download.
5. Re-encode any committed video to a single ~5 MB H.264 / WebM file; serve via `<video controls preload="none">`; no third-party embeds.

Out of scope for this manifest: any actual video download, transcoding, or embedding decision.

---

## 9. Operational notes for Phase 4B.3 Batch B integration (when binaries land)

Same workflow as Batch A:

1. For each approved candidate, `curl -L -A "<UA>"` the original-size file from the cited `upload.wikimedia.org/...` URL into `public/images/<section>/<slug>.<ext>`.
2. Re-encode where appropriate (downscale to width ≤ 1600 for hero/band slots; preserve original where already ≤ 1600). For B-09 (TIFF), convert to JPG before commit.
3. Update the relevant typed content module's `hero` (or add a `figure` block) with `{ src, alt, width: <intrinsic-after-resize>, height: <intrinsic-after-resize>, caption, credit: { source, url, license } }` — using the exact attribution string given in this manifest's "Attribution" line for each candidate, and the Wikimedia Commons **file page URL** (not the upload URL) as `credit.url`.
4. For homepage `<StorytellingBand>` integrations, the existing `ARCHIVAL_HIGHLIGHTS_IMAGE` / `THEN_IMAGE` / `NOW_IMAGE` patterns in `app/page.tsx` and `components/home/ThenNow.tsx` are the templates; declare a similar module-level const per new band image.
5. Build-time integrity gate (`lib/content/integrity.ts`) verifies alt + source + license + dimensions; `next build` fails on missing fields.
6. `<ArchivePlate>` / `<Figure>` / `<StorytellingBand>` render the images at the same bounded footprints as the existing Motif fallbacks — CLS remains zero throughout.

No content-type, integrity-gate, component, or homepage-architecture changes are required to integrate any Batch B candidate; image arrival is a pure content edit per the design.
