# Phase 8 — Office-Infrastructure Cluster (record + image manifest)

**Branch:** `feat/foundation-architecture` · **Date:** 2026-05-21

## Scope decision

Phase 8 ("Historical SEO Authority Expansion") proposed ~25 pages across five
cluster groups. To protect the no-thin-content / no-AI-spam constraint, the
agreed approach was **one cluster built to full archival depth, then iterate**.

- **Cadence:** one cluster deeply, then iterate.
- **First cluster:** Office infrastructure.
- **Discovery:** cluster field + dense related-links + one homepage pathway
  rail. No new top-level nav section (clusters map onto existing sections).

## Pages added (cluster `office-infrastructure`, 5)

Each has a deliberately distinct thesis to avoid overlap with existing pages
(`early-network-printing-systems`, `what-is-a-print-server`, the spooler/queue
glossary stubs):

| Slug | Section | Thesis |
|------|---------|--------|
| `office-print-rooms` | history | Centralisation as an **organisational form** — the print room as a department/cost-centre/chokepoint, and the centralise↔decentralise pendulum. |
| `print-servers-in-large-offices` | history | At scale the server becomes an **instrument of governance** — metering, quotas, chargeback, driver standardisation, policy. |
| `spoolers-and-print-queues` | history | The **buffering/utilisation** principle — decoupling request from output to keep an expensive slow device fed; indirection that outlived printing. |
| `shared-printer-workflows` | workflows | Present-tense **operational process** — naming, defaults, secure release, ownership, queue-clearing. |
| `enterprise-document-management` | history | Documents as **managed records** across a lifecycle — capture, index, store, retrieve, retain, dispose; retrieval as the real problem. |

Voice matches the house principle-first, date-cautious register; every history
page carries a "note on dates" guard. No fabricated dates, specs, vendors, or
companies.

## Internal graph

- New pages cross-link each other and established neighbours.
- Reverse links added so the graph is bidirectional (no one-way orphans):
  `what-is-a-print-server`, `evolution-of-office-printing`,
  `scan-to-searchable-pdf`, `early-network-printing-systems` (related), and the
  `print-spooler` / `print-queue` glossary `seeAlso` arrays.

## Discovery

- New homepage rail `components/home/OfficeInfraRail.tsx` ("How the office
  organised its printing") — a curated 6-stop pathway into the cluster, placed
  after the featured bands. Mirrors `EraRail` on the paper surface.

## Imagery — candidate manifest (AWAITING APPROVAL, not integrated)

Per governance, no binaries are downloaded/committed until approved. Licenses
are verified on the Commons/source file page at integration time (as with the
06fd7cb Tier-2 batch). Allowed sources only: Wikimedia Commons, NARA,
Smithsonian, Library of Congress, Computer History Museum, verified CC/PD.

| ID | Target page | Subject | Candidate source direction |
|----|-------------|---------|----------------------------|
| IO-01 | office-print-rooms | Line printer producing fanfold output | Commons line-printer photos (e.g. IBM 1403-class) |
| IO-02 | print-servers-in-large-offices | Equipment racks / server room | Commons CC-licensed server-room photos |
| IO-03 | spoolers-and-print-queues | Continuous-form printout in operation | Commons green-bar / line-printer (must differ from home hero) |
| IO-04 | enterprise-document-management | Records storage / archive shelving | Commons / NARA records-storage photos |
| IO-05 | enterprise-document-management (alt) | Microfilm / microfiche reader | Commons microfilm-reader photos |

Constraint reminders: avoid reusing `early-network-printing-systems`' NORAD
image and the homepage's bound-printout hero. One figure per page (so
`groupAdjacentFigures` does not collapse). Full metadata required:
src/alt/width/height/caption/credit{source,url,license}.

## QA (text cluster)

typecheck ✓ · lint ✓ · test:content ✓ (77 entries) · test:unit ✓ (34) ·
build ✓ · check:routes ✓ (96 routes, 431 image refs, no broken links / missing
images / metadata gaps).

## Remaining Phase 8 topical gaps (future cluster passes)

- Operating-system printing history (Win95/XP, classic Mac, Unix/CUPS, print
  drivers) — **note:** OS UI screenshots are not freely licensed; these would
  ship largely text-only.
- Document systems (evolution-of-scanning, searchable-pdf-history, OCR-in-
  office-workflows, document-archiving, office-document-storage).
- Hardware lineage (thermal/receipt/label printers, early all-in-ones,
  multifunction-printer history).
- Internet era (printing web pages in the 1990s, internet cafés, early wireless,
  home photo printing).
