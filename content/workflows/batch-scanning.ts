import type { WorkflowEntry } from "@/lib/content/types";

const entry: WorkflowEntry = {
  "section": "workflows",
  "slug": "batch-scanning",
  "title": "Batch Scanning",
  "description": "How enterprise batch (production) scanning digitizes paper in grouped runs: prep, separation, capture, cleanup, indexing, QA, and repository release.",
  "summary": "Batch scanning, also called high-volume or production scanning, is the practice of digitizing large quantities of paper in grouped runs through an automated capture pipeline rather than one document at a time. Paper is prepared, fed through production scanners with automatic document feeders, separated into logical documents using barcodes or patch codes, cleaned up as images, indexed with metadata, quality-checked, and released to a repository or digital archive. It is a workflow rather than a single product: its techniques are documented by scanner and capture-software vendors, while quality, metadata, and preservation requirements are governed by published standards and government guidance, including NARA digitization regulations, FADGI guidelines, ISO 15489 (records management), ISO 14721 (the OAIS reference model), and ISO 19005 (PDF/A).",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Batch scanning (also called high-volume or production scanning) is the practice of digitizing large quantities of paper documents in grouped runs (\"batches\") through an automated capture pipeline, rather than scanning documents one at a time on an ad-hoc basis. It is the core throughput mechanism of enterprise document capture: paper is prepared, fed through production scanners (typically with automatic document feeders), automatically separated into logical documents, cleaned up as images, indexed with metadata, quality-checked, and released to a downstream repository, content management system, or digital archive."
    },
    {
      "kind": "paragraph",
      "text": "Batch scanning is a workflow, not a single product. Its constituent techniques — automatic document feeding, barcode and patch-code separation, image processing, OCR, and indexing — are widely documented by scanner and capture-software vendors, while the surrounding quality, metadata, and preservation requirements are governed by published standards and government guidance rather than by any single proprietary method. Authoritative frameworks that bear on batch scanning include the U.S. National Archives (NARA) digitization regulations and guidance, the Federal Agencies Digital Guidelines Initiative (FADGI), ISO 15489 (records management), ISO 14721 (the OAIS reference model for digital archives), and ISO 19005 (PDF/A for archival PDFs)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "At a high level, a batch-scanning system moves a physical stack of paper through a sequence of stages: each page is converted to a digital image, images belonging to one logical document are grouped together, each document is described with index metadata, and the result is validated and handed off to a repository."
    },
    {
      "kind": "paragraph",
      "text": "The defining characteristic is automation at scale. A production scanner with an automatic document feeder (ADF) can capture large stacks in a single unattended pass, and software then divides that continuous stream of page images back into discrete documents using separation cues. This is what distinguishes batch scanning from desktop scanning — the operator does not stop between documents; separation, cleanup, and indexing are handled programmatically and then verified."
    },
    {
      "kind": "paragraph",
      "text": "Two families of automation make this practical:"
    },
    {
      "kind": "list",
      "items": [
        "Automatic document separation — deciding where one document ends and the next begins, using barcodes, patch codes, blank-page detection, fixed page counts, or content rules.",
        "Automatic index capture — extracting the metadata used to name, file, and retrieve each document, typically from barcodes or from OCR of the page content."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Step by step (conceptual, vendor-neutral)"
    },
    {
      "kind": "paragraph",
      "text": "1. Document preparation (\"prep\"). Physical preparation of the paper before it reaches a scanner: removing staples, paper clips, and bindings; repairing torn pages; unfolding; taping small items to carrier sheets; sorting and batching into manageable units; and inserting separator sheets where automatic separation is needed. Prep is labor-intensive and is commonly the most time-consuming manual stage of a batch operation."
    },
    {
      "kind": "paragraph",
      "text": "2. Batch separation setup. Defining how the continuous page stream will be split into logical documents. Common mechanisms:"
    },
    {
      "kind": "list",
      "items": [
        "Separator / patch-code sheets: physical sheets carrying a patch code — a pattern developed by Kodak, consisting of a small set of distinct patterns (commonly designated 1, 2, 3, 4, 6, and T). Patch codes carry no encoded data; each pattern signals an action. Patch 2 is commonly used for document separation and Patch 3 for batch separation, while \"Patch T\" (transfer patch) is commonly used as a document or section separator. When the scanner detects the patch, the software starts a new document.",
        "Barcodes: a barcode affixed to or printed on a document can act as an intelligent separator — it both signals a document boundary and carries index data (such as a document type or account number), so separation and indexing happen at once.",
        "Blank-page detection: blank sheets inserted between documents and detected automatically, with logic to avoid mistaking faintly-marked pages for true separators.",
        "Fixed page count or content/OCR rules for uniform document sets."
      ]
    },
    {
      "kind": "paragraph",
      "text": "3. Scanning (capture). The prepared stack is fed through the scanner's ADF and each side of each sheet is captured as a page image (simplex or duplex). Capture settings — resolution (dpi), bit depth (bitonal, grayscale, or color), and file format — are chosen to meet the records' needs and any applicable quality target. NARA regulation and FADGI guidelines both frame these technical attributes as parameters that must be set appropriately for the material."
    },
    {
      "kind": "paragraph",
      "text": "4. Image cleanup (image processing). Automated per-image corrections applied during or after capture, commonly including deskew (straightening crooked pages), despeckle / noise removal, auto-crop and border removal, auto-orientation, and blank-page removal. These operations improve legibility and downstream OCR accuracy and can reduce file size."
    },
    {
      "kind": "paragraph",
      "text": "5. Indexing. Attaching descriptive and administrative metadata to each document so it can be identified and retrieved — for example title, date, document type, and unique identifiers. Index values may be captured automatically (from a barcode, or via OCR reading fields such as an invoice or account number), keyed manually, or a mix of auto-capture with operator verification. NARA emphasizes that accurate, comprehensive metadata — record titles, dates, descriptions, and unique identifiers — is essential to managing and retrieving digitized records."
    },
    {
      "kind": "paragraph",
      "text": "6. Quality assurance (QA). Verifying that the batch is complete and usable before release: completeness (no missing or duplicate pages, correct separation), image quality, metadata accuracy, and file integrity. NARA's Digitization Quality Management Guide describes reviewing a random sample of a minimum of ten image files or 10% of each batch, whichever is larger, and applying quality-assessment ratings either to individual images or as a batch rating when images share production conditions, while recording which method was used."
    },
    {
      "kind": "paragraph",
      "text": "7. Release to the repository. Exporting the finished documents and index metadata to the destination system — a document or content management system, records repository, or preservation archive — with automated file naming and routing derived from the captured index values. In an archival context modeled on OAIS (ISO 14721), this hand-off corresponds to a Producer submitting a Submission Information Package (SIP) to the archive's Ingest function, which verifies it and builds an Archival Information Package (AIP) for storage."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Inputs and outputs"
    },
    {
      "kind": "paragraph",
      "text": "Inputs:"
    },
    {
      "kind": "list",
      "items": [
        "Physical documents (loose paper, forms, mixed sizes), prepared and batched",
        "Separator or patch-code sheets, or pre-applied barcodes",
        "Capture configuration (resolution, bit depth, format, separation rules, index schema)"
      ]
    },
    {
      "kind": "paragraph",
      "text": "Outputs:"
    },
    {
      "kind": "list",
      "items": [
        "Digital page images or per-document files (commonly TIFF, or PDF / searchable PDF / PDF-A)",
        "Structured index metadata for each document, plus technical metadata such as capture date, resolution, and device",
        "A validated batch delivered to a repository or archive (for example, a SIP for an OAIS-modeled ingest)"
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to OCR and searchable PDF"
    },
    {
      "kind": "paragraph",
      "text": "Batch scanning produces images of pages; those images are not text-searchable by themselves. Optical Character Recognition (OCR) is the step that converts the pixels of characters into machine-readable text. In a batch pipeline OCR serves two related purposes:"
    },
    {
      "kind": "list",
      "items": [
        "Index and data capture: reading specific fields (invoice number, date, name) to populate index metadata automatically. Vendors note that barcode reading is faster and more reliable than OCR for capturing a known identifier or for separation, whereas OCR is used to extract variable text content.",
        "Full-text searchability: producing a searchable PDF, in which an often invisible OCR text layer is placed behind the page image. This preserves the visual appearance of the scan while allowing full-text search and hit-highlighting."
      ]
    },
    {
      "kind": "paragraph",
      "text": "For long-term retention, searchable output is frequently produced as PDF/A (ISO 19005), the archival subset of PDF, which supports an embedded searchable text layer and is designed for long-term preservation. Relevant parts include PDF/A-1 (ISO 19005-1:2005, based on PDF 1.4), PDF/A-2 (ISO 19005-2:2011), and PDF/A-3 (ISO 19005-3:2012)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to records management and compliance"
    },
    {
      "kind": "paragraph",
      "text": "Batch scanning is the on-ramp for paper into an electronic records program, so its outputs are governed by records-management and preservation frameworks:"
    },
    {
      "kind": "list",
      "items": [
        "ISO 15489-1:2016 (Information and documentation — Records management — Part 1: Concepts and principles) sets out concepts and principles for creating, capturing, and managing records in any format, and stresses records metadata and records systems. Digitized batch output must be captured and described so that it functions as a trustworthy record, not merely a picture.",
        "NARA digitization regulations and guidance apply to U.S. federal agencies. NARA's technical guidelines and its Digitization Quality Management Guide address image quality, metadata, and quality control, and 36 CFR Part 1236, Subpart E governs digitizing permanent federal records (Subpart D addresses temporary records). A 2023 final rule, published in the Federal Register on May 4, 2023, established requirements for digitizing permanent records and reviewing records schedules.",
        "FADGI provides shared, vendor-neutral U.S. federal guidelines for digitization quality, including a four-star rating system and conformance testing (for example, the DICE tool with targets). The FADGI Technical Guidelines for Digitizing Cultural Heritage Materials, 3rd edition, was published May 10, 2023.",
        "OAIS (ISO 14721) provides the reference model for a trustworthy digital archive — the SIP/AIP/DIP information packages and the Ingest function — into which batch-scanned material is released for preservation."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Named regulations that commonly drive scanning-then-destruction or retention decisions should be cited factually per jurisdiction. This reference does not provide legal advice, and digitization does not by itself confer legal admissibility or authorize destruction of source records — those determinations follow the applicable retention schedule and law."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Throughput and cost efficiency: unattended high-volume capture of large stacks in a single pass, far faster than one-at-a-time scanning.",
        "Consistency: uniform capture settings and automated image cleanup applied across a batch.",
        "Automated separation and indexing: barcodes, patch codes, and OCR reduce manual sorting and keying, and enable automatic naming, filing, and routing.",
        "Searchability and reuse: OCR and searchable-PDF output make previously inert paper full-text searchable.",
        "Space and access: replaces physical storage and enables simultaneous, remote access, subject to retention and legal rules.",
        "Standards alignment: output can be produced to documented quality (FADGI), preservation (PDF/A, OAIS), and records-management (ISO 15489) frameworks."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Limitations"
    },
    {
      "kind": "list",
      "items": [
        "Preparation is manual and slow: de-stapling, repair, sorting, and inserting separators are labor-intensive and often the throughput bottleneck.",
        "OCR is imperfect: accuracy depends on image quality, fonts, handwriting, and layout; extracted index and text data generally need validation, and barcodes are more reliable than OCR for known identifiers.",
        "Separation errors: misread patch codes or barcodes, or misdetected blank pages, cause mis-split or merged documents, requiring QA and rework.",
        "Quality and fidelity trade-offs: resolution, bit depth, and compression settings affect fidelity, OCR accuracy, and file size; inappropriate settings can fail quality targets or lose information such as faint annotations or color.",
        "Sampling risk in QA: sample-based inspection can miss defects not present in the sampled set.",
        "Physical originals and legal status: a scan's suitability as a substitute for the original depends on applicable retention and legal requirements, not on the scan alone."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Practical considerations"
    },
    {
      "kind": "list",
      "items": [
        "Match settings to the record and the target: choose resolution, color/bit depth, and format for the material and any quality standard (such as a FADGI star level) before running the batch.",
        "Design separation first: decide barcode vs. patch code vs. blank-page vs. rule-based separation during prep, since it dictates how sheets are assembled.",
        "Prefer machine-readable indexing where possible: barcodes give faster, more accurate index and separation than OCR; reserve OCR and data extraction for variable content and add verification.",
        "Build QA into the workflow: define the sampling rate, the specific checks (completeness, image quality, metadata accuracy, integrity), and clear accept/reject/rework criteria, and record whether quality ratings were applied individually or per batch.",
        "Capture technical metadata automatically (capture date, device, resolution) alongside descriptive index fields.",
        "Plan the repository hand-off: define file naming, folder and routing rules, export format (such as PDF/A), and, for preservation, the SIP structure expected by the ingest system."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Batch scanning remains the standard method for converting large paper backfiles and daily inbound paper — invoices, forms, correspondence, HR, medical, and legal files — into managed electronic records. Its mechanics have been extended rather than replaced: separation and indexing increasingly use software recognition (barcode, OCR, and data extraction) with operator verification, output is routinely produced as searchable PDF or PDF/A, and finished batches feed content-management platforms and OAIS-aligned digital archives. Contemporary vendor tooling increasingly automates the capture → separation → cleanup → extraction → review → upload sequence end-to-end, but the underlying workflow stages, and the quality, metadata, and preservation standards that govern them, are unchanged in principle."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Timeline"
    },
    {
      "kind": "timeline",
      "events": [
        {
          "period": "1998",
          "text": "NARA publishes Guidelines for Digitizing Archival Materials for Electronic Access (associated with its Electronic Access Project)."
        },
        {
          "period": "2003",
          "text": "OAIS is first published as an ISO standard, ISO 14721:2003 (based on the 2002 CCSDS reference model)."
        },
        {
          "period": "2005",
          "text": "PDF/A-1 published (ISO 19005-1:2005)."
        },
        {
          "period": "2011",
          "text": "PDF/A-2 published (ISO 19005-2:2011)."
        },
        {
          "period": "2012",
          "text": "Second edition of the OAIS reference model (ISO 14721:2012) published; PDF/A-3 published (ISO 19005-3:2012)."
        },
        {
          "period": "2016",
          "text": "ISO 15489-1 (records management, Part 1: Concepts and principles) published as the 2016 edition."
        },
        {
          "period": "2023 (May 4)",
          "text": "NARA final rule on digitizing permanent federal records and reviewing records schedules published in the Federal Register."
        },
        {
          "period": "2023 (May 10)",
          "text": "FADGI Technical Guidelines for Digitizing Cultural Heritage Materials, 3rd edition, published."
        },
        {
          "period": "2025 (March 10)",
          "text": "Third edition of the OAIS reference model, ISO 14721:2025, published, cancelling and replacing ISO 14721:2012."
        }
      ]
    },
    {
      "kind": "paragraph",
      "text": "Patch codes are attributed to Kodak by multiple sources, but no reliably-dated primary origin date was verified, so none is assigned here."
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical and historical reference. Figures and dates are drawn from documented sources; it does not include current pricing, marketing claims, or product recommendations, and is not legal, financial, or medical advice. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "guides",
      "slug": "document-scanners"
    },
    {
      "section": "workflows",
      "slug": "capture-workflow"
    },
    {
      "section": "guides",
      "slug": "document-indexing"
    },
    {
      "section": "guides",
      "slug": "barcode-recognition"
    },
    {
      "section": "guides",
      "slug": "enterprise-document-capture"
    },
    {
      "section": "guides",
      "slug": "capture-metadata"
    }
  ],
  "faqs": [
    {
      "q": "What is batch scanning?",
      "a": "Batch scanning, also called high-volume or production scanning, is the practice of digitizing large quantities of paper documents in grouped runs (\"batches\") through an automated capture pipeline, rather than scanning documents one at a time. The workflow typically covers preparation, feeding through a production scanner, automatic separation into logical documents, image cleanup, indexing with metadata, quality assurance, and release to a repository or archive."
    },
    {
      "q": "How does batch scanning separate one document from the next?",
      "a": "Software divides the continuous stream of page images from the scanner back into discrete documents using separation cues. Common methods include patch-code separator sheets (a Kodak-developed pattern that signals an action such as starting a new document), barcodes that act as intelligent separators carrying index data, automatic blank-page detection, and fixed page-count or content/OCR rules."
    },
    {
      "q": "How is batch scanning related to OCR and searchable PDF?",
      "a": "Batch scanning produces images of pages, which are not text-searchable by themselves. OCR converts the character pixels into machine-readable text — used both to capture index fields automatically and to produce a searchable PDF, in which an often invisible OCR text layer sits behind the page image. For long-term retention this is frequently produced as PDF/A (ISO 19005)."
    },
    {
      "q": "What standards and regulations govern batch-scanned records?",
      "a": "Relevant frameworks include ISO 15489 (records management), ISO 14721 (the OAIS reference model for digital archives), ISO 19005 (PDF/A), NARA digitization regulations and guidance including 36 CFR Part 1236 Subpart E, and FADGI's vendor-neutral digitization-quality guidelines. Digitization by itself does not confer legal admissibility or authorize destroying source records; those decisions follow the applicable retention schedule and law."
    },
    {
      "q": "How much of a batch does NARA guidance recommend inspecting for quality?",
      "a": "NARA's Digitization Quality Management Guide describes reviewing a random sample of a minimum of ten image files or 10% of each batch, whichever is larger, and applying quality-assessment ratings either to individual images or as a batch rating when images share production conditions, while recording which method was used."
    }
  ],
  "sources": [
    {
      "title": "Technical Guidelines for Digitizing Archival Materials for Electronic Access",
      "url": "https://www.archives.gov/files/preservation/technical/guidelines.pdf",
      "publisher": "National Archives and Records Administration (NARA)"
    },
    {
      "title": "Guidelines for Digitizing Archival Materials for Electronic Access (1998)",
      "url": "https://www.archives.gov/files/preservation/technical/guidelines-1998.pdf",
      "publisher": "National Archives and Records Administration (NARA)"
    },
    {
      "title": "Digitization Quality Management Guide",
      "url": "https://www.archives.gov/files/records-mgmt/policy/digitization-quality-mgmt-guide.pdf",
      "publisher": "National Archives and Records Administration (NARA)"
    },
    {
      "title": "36 CFR Part 1236, Subpart E — Digitizing Permanent Federal Records",
      "url": "https://www.ecfr.gov/current/title-36/chapter-XII/subchapter-B/part-1236/subpart-E",
      "publisher": "Electronic Code of Federal Regulations (eCFR)"
    },
    {
      "title": "Federal Records Management: Digitizing Permanent Records and Reviewing Records Schedules (final rule, 2023-05-04)",
      "url": "https://www.federalregister.gov/documents/2023/05/04/2023-09050/federal-records-management-digitizing-permanent-records-and-reviewing-records-schedules",
      "publisher": "Federal Register / NARA"
    },
    {
      "title": "Federal Agencies Digital Guidelines Initiative (FADGI)",
      "url": "https://www.digitizationguidelines.gov/",
      "publisher": "FADGI"
    },
    {
      "title": "Technical Guidelines for Digitizing Cultural Heritage Materials",
      "url": "https://www.digitizationguidelines.gov/guidelines/digitize-technical.html",
      "publisher": "FADGI"
    },
    {
      "title": "3rd Edition of FADGI Still Image Digitization Guidelines Finalized",
      "url": "https://blogs.loc.gov/thesignal/2023/05/fadgi-third-edition-still-image/",
      "publisher": "Library of Congress (The Signal)"
    },
    {
      "title": "ISO 15489-1:2016 Information and documentation — Records management — Part 1: Concepts and principles",
      "url": "https://www.iso.org/standard/62542.html",
      "publisher": "International Organization for Standardization (ISO)"
    },
    {
      "title": "ISO 14721:2012 Space data and information transfer systems — OAIS (2nd edition)",
      "url": "https://www.iso.org/standard/57284.html",
      "publisher": "International Organization for Standardization (ISO)"
    },
    {
      "title": "ISO 14721:2025 Space data system practices — Reference model for an OAIS (3rd edition)",
      "url": "https://www.iso.org/standard/87471.html",
      "publisher": "International Organization for Standardization (ISO)"
    },
    {
      "title": "ISO 19005-1:2005 (PDF/A-1)",
      "url": "https://www.iso.org/standard/38920.html",
      "publisher": "International Organization for Standardization (ISO)"
    },
    {
      "title": "PDF/A Family (Sustainability of Digital Formats)",
      "url": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000318.shtml",
      "publisher": "Library of Congress"
    },
    {
      "title": "ISO 19005-3 (PDF/A-3)",
      "url": "https://pdfa.org/resource/iso-19005-3-pdf-a-3/",
      "publisher": "PDF Association"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "batch scanning",
    "production scanning",
    "high-volume scanning",
    "document capture",
    "automatic document feeder",
    "patch code",
    "barcode separation",
    "document indexing",
    "ocr",
    "searchable pdf",
    "pdf/a",
    "quality assurance"
  ],
  "cluster": "enterprise-capture",
  "modernTools": [
    "pdf-editor",
    "zip-rar"
  ],
  "goal": "Batch scanning digitizes large quantities of paper in grouped, automated runs through a document-capture pipeline.",
  "toolsUsed": [
    "A production document scanner",
    "Capture / indexing software"
  ]
};

export default entry;
