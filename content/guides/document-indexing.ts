import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "document-indexing",
  "title": "Document Indexing",
  "description": "How document indexing works in enterprise capture: index fields, metadata, full-text search, and its role in records management and preservation.",
  "summary": "Document indexing is the enterprise capture stage that associates scanned or born-digital documents with structured identifying information—index fields, metadata, or full text—so individual documents can be found and retrieved without reading the whole collection. Field-based indexing supports precise structured queries; full-text indexing, typically built on OCR output, supports keyword and phrase search. Indexing is bound up with scanning/OCR, document separation, and records management. Standards bodies treat indexing metadata as a core recordkeeping function: ISO 15489 links metadata to records at the point of capture, ISO 23081 supplies the metadata framework, the OAIS reference model (ISO 14721) frames capture-time description for long-term preservation, and NARA's 36 CFR 1236 Subpart E mandates capture-time metadata for digitized U.S. federal records.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Document indexing is the practice of associating captured documents with structured identifying information—index fields and metadata—so that individual documents can be found and retrieved later without reading through the collection. In an enterprise capture workflow, indexing is the stage that turns a stream of scanned page images (or born-digital files) into discrete, described, and retrievable records inside a repository, database, or document/records management system."
    },
    {
      "kind": "paragraph",
      "text": "Two broad approaches coexist and are frequently combined. In field-based (metadata) indexing, specific values such as an invoice number, customer ID, or date are placed into named fields. In full-text indexing, the entire recognized text of a document is made searchable, typically after OCR. Field-based indexing supports precise, structured lookups; full-text indexing supports ad-hoc keyword and phrase search across content."
    },
    {
      "kind": "paragraph",
      "text": "Indexing is bound up with three adjacent activities: scanning and OCR, which produce the images and machine-readable text that indexing draws on; document separation, which decides where one document ends and the next begins so that index values attach to the correct unit; and records management and preservation, which formalize metadata as evidence of context and manage records over their retention life. Standards bodies treat metadata and indexing as core recordkeeping functions rather than optional add-ons: ISO 15489 links indexing metadata to records at the point of capture, and ISO 23081 provides the metadata framework beneath it."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History and origin"
    },
    {
      "kind": "paragraph",
      "text": "Indexing as a retrieval discipline long predates computers—libraries and archives used catalog cards, registers, and classification schemes to locate physical items. The specific practice discussed here—indexing documents at the moment they are captured or scanned—emerged with production document imaging and micrographics, and was formalized as electronic document management and enterprise content management matured through the 1990s and 2000s."
    },
    {
      "kind": "paragraph",
      "text": "A concrete technical origin point in the capture pipeline is the patch code, a barcode symbology developed by Kodak for automated scanning. Six distinct patterns were defined (Patch 1, 2, 3, 4, 6, and T); scanners and capture software read them to signal events such as a document or section break, or a switch between simplex and duplex scanning. Patch codes and separator sheets became a traditional mechanism for automatic document separation, which in turn determines the unit to which index values are attached. No verified introduction year for the patch code appears in available sources."
    },
    {
      "kind": "paragraph",
      "text": "The recordkeeping-metadata framework was standardized in the same era. ISO 15489-1 was first published in September 2001 (Part 1: General, accompanied by the ISO/TR 15489-2:2001 guidelines) and later revised as ISO 15489-1:2016 (Concepts and principles). The dedicated records-metadata standard ISO 23081 followed, with Part 1 first published in 2006 and revised in 2017, and Part 2 published in 2021."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What it is"
    },
    {
      "kind": "paragraph",
      "text": "At its core, indexing assigns identifiers to a document. Those identifiers can take several forms:"
    },
    {
      "kind": "list",
      "items": [
        "Index fields / metadata—named, typed values (for example, \"Invoice Number,\" \"Vendor,\" \"Date,\" \"Account ID,\" \"Document Type\"). These are usually stored in a database and used for structured queries.",
        "Descriptive tags / classification terms—subject terms, categories, or controlled-vocabulary values.",
        "Full text—the complete recognized content of the document, tokenized into a searchable (typically inverted) index."
      ]
    },
    {
      "kind": "paragraph",
      "text": "In records-management terms, metadata is described as data describing the context, content, and structure of records and their management over time. Indexing metadata specifically—subjects, locations, personal names, and similar access points—may be used to make records more retrievable, and is ideally linked to records at the point of capture."
    },
    {
      "kind": "paragraph",
      "text": "Indexing should be distinguished from OCR. OCR converts page images into machine-readable characters; indexing is the act of assigning identifying values, which may be derived from OCR output, from barcodes, or entered manually. A document can be indexed by hand-keyed fields even if no OCR is performed, and OCR full text can be indexed without any structured fields."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "A typical capture-and-index sequence proceeds in stages:"
    },
    {
      "kind": "list",
      "items": [
        "Capture / scan—paper is digitized (or born-digital files are ingested), producing page images and, optionally, OCR text.",
        "Document separation—the batch is divided into discrete documents so index values attach to the right unit.",
        "Recognition / extraction—barcode and patch-code reading, OCR, zonal recognition, and machine-learning classification extract candidate values such as names, dates, amounts, and document type.",
        "Index-value assignment—extracted or operator-entered values are written to defined index fields; full text may be added to a full-text index.",
        "Validation / QA—values are checked (masks, minimum lengths, lookups against a database) to reduce errors.",
        "Storage and linkage—the document (image and/or searchable PDF) plus its metadata is written to a repository, DMS, or ECM, so that retrieval scans the index rather than every document."
      ]
    },
    {
      "kind": "paragraph",
      "text": "In manual indexing, operators key field values while viewing each document—accurate but labor-intensive. In automatic indexing, software derives values from barcodes, OCR and zonal capture, or classification models, reducing manual data entry and cost. Real workflows commonly blend the two: automatic extraction with human validation of low-confidence values."
    },
    {
      "kind": "paragraph",
      "text": "A frequently cited practical distinction from industry sources holds that field-based indexing stores discrete values and searches quickly against a database, while full-text indexing via OCR makes every word searchable but carries recognition-accuracy limits (industry characterizations often cite roughly 90–95%, varying by document quality) and additional storage and processing overhead. These figures are industry characterizations, not measurements of any specific system."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture and components"
    },
    {
      "kind": "paragraph",
      "text": "A capture-and-index system is typically composed of several cooperating components:"
    },
    {
      "kind": "list",
      "items": [
        "Capture front-end / scanner and driver—produces images and reads patch codes or barcodes on the fly.",
        "Separation engine—applies separation rules (patch code, barcode, blank page, fixed page count, or content/rules-based) to segment batches into documents.",
        "Recognition and extraction services—OCR, ICR (handwriting), barcode reading, zonal OCR, and classification or machine-learning models.",
        "Index/metadata schema—the defined set of fields, with types, validation rules, and controlled vocabularies, applied per document class.",
        "Full-text index—an inverted index built from OCR or text, with tokenization, stop-word removal, stemming, and relevance ranking as standard components.",
        "Repository and database—the DMS or ECM store where document objects live and where index fields are recorded and queried.",
        "Retrieval / search layer—queries the metadata database and/or full-text index to return documents."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to scanning and OCR"
    },
    {
      "kind": "paragraph",
      "text": "Scanning produces the images that indexing describes; OCR (and barcode/patch recognition) produces machine-readable data that can populate index fields or a full-text index. In digital-mailroom and production-capture settings, barcode recognition, OCR, and machine learning are applied during scanning to extract names, addresses, amounts, and other values that become index metadata, after which documents and metadata are stored in an ECM for retrieval."
    },
    {
      "kind": "paragraph",
      "text": "Two nuances are important. First, OCR is not indexing. OCR is a text-conversion step; indexing is the assignment of retrieval identifiers. A \"searchable PDF\" embeds an OCR text layer, but organizing and retrieving those PDFs still depends on index fields or a full-text index. Second, barcodes and patch codes can serve double duty: a barcode zone used to separate documents can, in the same pass, be captured as a document-level index value—for example, an account number on a cover sheet that both splits the batch and identifies the resulting document."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and preservation formats"
    },
    {
      "kind": "paragraph",
      "text": "Indexing is format-independent in principle, but PDF is a dominant delivery container for captured documents. Two distinct notions are often conflated: in-file (document) metadata—descriptive properties carried inside the file, such as a PDF's document information or XMP metadata, together with the OCR text layer that makes a PDF full-text searchable—and external index metadata, the field values stored in the DMS or repository database that drive structured retrieval."
    },
    {
      "kind": "paragraph",
      "text": "For long-term preservation, indexing connects to the OAIS reference model (ISO 14721), developed by the CCSDS and published as CCSDS 650.0. In OAIS, the Ingest function extracts Descriptive Information from Archival Information Packages for inclusion in the archive's Data Management database, and this descriptive information is what the Access function uses to find and retrieve holdings. Indexing at capture is, in effect, the generation of that Descriptive Information."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to records management and compliance"
    },
    {
      "kind": "paragraph",
      "text": "Records-management standards treat indexing and metadata as core, not cosmetic."
    },
    {
      "kind": "list",
      "items": [
        "ISO 15489-1:2016 frames the creation, capture, and management of records, treating metadata capture, classification, and controls as part of business processes; indexing metadata such as subjects, locations, and personal names is linked to records at the point of capture to make them retrievable by authorized agents.",
        "ISO 23081 (Parts 1–2) provides the metadata-for-records framework beneath ISO 15489, defining recordkeeping metadata (context, content, structure), the roles and types of metadata, and a conceptual model for defining metadata elements to enable interoperability and reuse over time.",
        "NARA's 36 CFR Part 1236, Subpart E (\"Digitizing Permanent Federal Records\"), including § 1236.54 (Metadata requirements), sets standards under which U.S. federal agencies may digitize permanent records and dispose of the analog source. The regulation requires capturing metadata at the file or item level, creating file names and record IDs that are unique to each image file, and capturing fixity information (a checksum) as technical metadata. The rule was published at 88 FR 28410 on May 4, 2023, with an effective date of June 5, 2023. As of June 30, 2024, NARA accepts transfers of permanent and temporary records only in electronic form with appropriate metadata, subject to narrow exceptions."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The recurring principle is that metadata and indexing captured at the time of capture is what makes a digitized document usable as a record—locatable, contextualized, and defensible for retention and compliance purposes. This is a description of standards and regulations, not legal advice."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Fast, targeted retrieval—search scans compact metadata or indexes rather than every document, so lookups are quick and precise.",
        "Structured accuracy—field-based indexing captures values into defined fields, enabling exact, unambiguous queries such as an invoice number or account ID.",
        "Comprehensive discovery—full-text indexing makes any word or phrase in the content findable, not just labeled fields.",
        "Automation savings—automatic extraction from barcodes, OCR, and machine-learning models reduces manual data-entry labor and time.",
        "Compliance and preservation readiness—metadata captured at the point of capture supports records-management classification, retention, access control, and archival Descriptive Information."
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
        "Recognition error—OCR and ICR accuracy vary with document quality, and full-text indexing inherits those errors (industry characterizations often cite roughly 90–95% OCR accuracy, quality-dependent).",
        "Manual-indexing cost and inconsistency—hand-keying is accurate but slow and expensive, and inconsistent field values degrade retrieval.",
        "Separation errors propagate—if document separation is wrong, index values attach to the wrong unit, so separator and patch-code handling must be configured carefully.",
        "Storage and processing overhead—full-text indexes require additional storage and compute, and per-page text artifacts add overhead.",
        "Schema design dependency—poorly chosen fields or missing controlled vocabularies limit retrievability and interoperability, a core reason ISO 23081 exists."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Indexing remains foundational to digital mailrooms, ECM and DMS deployments, and archival systems. Two shifts are visible in current practice. First, machine-learning and AI-assisted extraction and classification increasingly automate what was once manual field entry, with human validation reserved for low-confidence cases. Second, regulatory tightening—such as NARA's move to electronic-only transfers with mandated metadata as of mid-2024—makes capture-time metadata non-optional for compliant digitization. Standards work continues, with the OAIS reference model restandardized as ISO 14721:2025, keeping capture-time indexing aligned with long-term preservation."
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
          "period": "1990s",
          "text": "Kodak develops the patch code barcode for automated document scanning and separation, defining six patterns (1, 2, 3, 4, 6, T). No exact introduction year is established in available sources."
        },
        {
          "period": "September 2001",
          "text": "ISO 15489-1:2001 (Records management, Part 1: General) is first published; ISO/TR 15489-2:2001 guidelines are issued."
        },
        {
          "period": "2003",
          "text": "OAIS is standardized as the first ISO edition of ISO 14721 (developed by CCSDS as 650.0)."
        },
        {
          "period": "2006",
          "text": "ISO 23081-1 (Metadata for records, Part 1: Principles) is first published."
        },
        {
          "period": "April 2016",
          "text": "ISO 15489-1:2016 (Part 1: Concepts and principles) is published as a major revision."
        },
        {
          "period": "2017",
          "text": "ISO 23081-1:2017 revision is published."
        },
        {
          "period": "2021",
          "text": "ISO 23081-2:2021 (conceptual and implementation issues) is published."
        },
        {
          "period": "May 4, 2023",
          "text": "NARA's rule (88 FR 28410) adds 36 CFR 1236 Subpart E, including § 1236.54 (Metadata requirements), for digitizing permanent federal records; it takes effect June 5, 2023."
        },
        {
          "period": "June 30, 2024",
          "text": "NARA stops accepting analog transfers; permanent and temporary records are accepted only electronically with appropriate metadata."
        },
        {
          "period": "2025",
          "text": "The latest OAIS edition is standardized as ISO 14721:2025 (CCSDS 650.0-M-3)."
        }
      ]
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
      "slug": "capture-metadata"
    },
    {
      "section": "guides",
      "slug": "enterprise-document-capture"
    },
    {
      "section": "workflows",
      "slug": "batch-scanning"
    },
    {
      "section": "guides",
      "slug": "records-management"
    },
    {
      "section": "guides",
      "slug": "digital-preservation"
    },
    {
      "section": "workflows",
      "slug": "scan-to-searchable-pdf"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between document indexing and OCR?",
      "a": "OCR converts page images into machine-readable characters, while indexing assigns identifying values used to retrieve a document. Index values may be derived from OCR output, read from barcodes, or entered manually. A document can be indexed with hand-keyed fields even without OCR, and OCR full text can be indexed without any structured fields."
    },
    {
      "q": "What is the difference between field-based indexing and full-text indexing?",
      "a": "Field-based (metadata) indexing places specific values, such as an invoice number or date, into named database fields for precise structured queries. Full-text indexing makes the entire recognized text of a document searchable, typically after OCR, supporting ad-hoc keyword and phrase search. The two are often combined."
    },
    {
      "q": "Which standards govern indexing metadata for records?",
      "a": "ISO 15489-1:2016 frames records creation, capture, and management and links indexing metadata to records at the point of capture. ISO 23081 provides the underlying metadata-for-records framework. For long-term preservation, the OAIS reference model (ISO 14721) frames the Descriptive Information used to find and retrieve archived holdings."
    },
    {
      "q": "What does NARA require for metadata when digitizing federal records?",
      "a": "NARA's 36 CFR 1236 Subpart E, § 1236.54, requires capturing metadata at the file or item level, creating file names and record IDs unique to each image file, and capturing a checksum as technical metadata. The rule was published at 88 FR 28410 on May 4, 2023. As of June 30, 2024, NARA accepts permanent and temporary record transfers only in electronic form with appropriate metadata."
    }
  ],
  "sources": [
    {
      "title": "ISO 15489-1:2016 — Records management — Part 1: Concepts and principles",
      "url": "https://www.iso.org/standard/62542.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 15489-1:2001 — Records management — Part 1: General",
      "url": "https://www.iso.org/standard/31908.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 15489 project page (TC46/SC11)",
      "url": "https://committee.iso.org/sites/tc46sc11/home/projects/published/iso-15489-records-management.html",
      "publisher": "ISO TC46/SC11"
    },
    {
      "title": "ISO 23081-1:2017 — Metadata for records — Part 1: Principles",
      "url": "https://www.iso.org/standard/73172.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 23081-2:2021 — Metadata for managing records — Part 2",
      "url": "https://www.iso.org/standard/81600.html",
      "publisher": "ISO"
    },
    {
      "title": "OAIS / ISO 14721 — Metadata Standards Index",
      "url": "https://msi.dublincore.org/standards/oais/",
      "publisher": "Dublin Core Metadata Initiative"
    },
    {
      "title": "36 CFR 1236.54 — Metadata requirements (full text)",
      "url": "https://www.law.cornell.edu/cfr/text/36/1236.54",
      "publisher": "Legal Information Institute, Cornell Law School"
    },
    {
      "title": "Federal Register 2023-09050 — Digitizing Permanent Records (88 FR 28410)",
      "url": "https://www.federalregister.gov/documents/2023/05/04/2023-09050/federal-records-management-digitizing-permanent-records-and-reviewing-records-schedules",
      "publisher": "Federal Register / U.S. Government"
    },
    {
      "title": "Metadata Requirements for Permanent Electronic Records",
      "url": "https://www.archives.gov/records-mgmt/policy/metadata-compiled",
      "publisher": "NARA"
    },
    {
      "title": "AC 17.2024 — Analog transfer cutoff",
      "url": "https://www.archives.gov/records-mgmt/memos/ac-17-2024",
      "publisher": "NARA"
    },
    {
      "title": "Patch Code",
      "url": "https://en.wikipedia.org/wiki/Patch_Code",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "document indexing",
    "index fields",
    "metadata",
    "full-text indexing",
    "ocr",
    "document separation",
    "records management",
    "iso 15489",
    "iso 23081",
    "oais",
    "iso 14721",
    "enterprise content management"
  ],
  "cluster": "enterprise-capture",
  "difficulty": "intermediate",
  "estimatedTime": "10 min read"
};

export default entry;
