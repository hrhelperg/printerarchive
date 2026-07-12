import type { WorkflowEntry } from "@/lib/content/types";

const entry: WorkflowEntry = {
  "section": "workflows",
  "slug": "legal-document-archives",
  "title": "Legal Document Archives",
  "description": "How legal document archives capture, OCR, index, and retain records with legal or evidentiary significance, framed by ISO 15489, OAIS, and PDF/A.",
  "summary": "A legal document archive is a governed repository for capturing, indexing, and retaining records of legal, evidentiary, or regulatory significance and keeping them retrievable and trustworthy over time. It sits at the intersection of records management (ISO 15489-1:2016), digital preservation (the OAIS reference model, ISO 14721), and e-discovery. This reference describes the vendor-neutral capture-and-archive discipline, its reliance on OCR and searchable PDF/A output, and how it relates to records controls and named compliance regimes. It names regulations and standards factually and does not provide legal advice: whether to retain, hold, or destroy any specific record is a legal and organizational determination.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "A legal document archive is a managed repository in which an organization captures, stores, indexes, and retains records that have legal, evidentiary, or regulatory significance — contracts, court filings, correspondence, corporate governance records, case files, and supporting exhibits. In the enterprise document-capture context, \"legal document archiving\" refers to the disciplined pipeline that converts paper and native-digital legal material into stable, searchable, retention-governed digital records and keeps them retrievable and trustworthy over their required lifespan."
    },
    {
      "kind": "paragraph",
      "text": "Two distinct but overlapping bodies of practice shape this work. Records management, formalized in ISO 15489-1:2016, governs how records are created, captured, classified, retained, and dispositioned. Digital preservation, framed by the Open Archival Information System (OAIS) reference model in ISO 14721, governs how digital objects remain renderable and intelligible over long periods. Legal archiving sits at the intersection, with an added dimension: records may become evidence, so they must also be defensible in e-discovery, the process of producing electronically stored information (ESI) in litigation."
    },
    {
      "kind": "paragraph",
      "text": "This page describes the capture-and-archive discipline and its relationship to OCR, searchable PDF/A output, records management, and litigation context. It does not advise on whether or how to retain, hold, or destroy any specific record — those are legal and organizational decisions."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "At a conceptual level, a legal document archive performs the same core functions ISO 15489-1:2016 assigns to any records system: creating and capturing records, classifying and indexing them, controlling access, applying retention, and eventually dispositioning them. The distinguishing characteristics for legal material are:"
    },
    {
      "kind": "list",
      "items": [
        "Fidelity of capture — a legal archive must reproduce the source faithfully enough that the digital surrogate can stand in for the original. Public-sector digitization regimes make this explicit: NARA's rules at 36 CFR Part 1236 provide that only when digitization meets defined image-quality and documentation standards may source records be handled under an approved schedule.",
        "Searchability — legal review depends on finding responsive material quickly, so captured images are paired with a text layer (via OCR) and structured metadata (indexing).",
        "Trustworthiness and integrity — because records may be produced as evidence, the archive is expected to maintain integrity and demonstrable provenance over time (an OAIS preservation responsibility; ISO 15489 frames authoritative records as authentic, reliable, possessing integrity, and usable).",
        "Retention and legal hold — records are kept for defined periods and can be suspended from disposition when litigation is reasonably anticipated (the duty to preserve underlying U.S. Federal Rule of Civil Procedure 37(e))."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Step by step (conceptual, vendor-neutral)"
    },
    {
      "kind": "paragraph",
      "text": "1. Assess and plan. Identify the record types, their business and legal context, and their retention requirements (an ISO 15489 appraisal / identification-of-records-requirements activity). Decide capture specifications appropriate to the material. 2. Prepare source material. For paper: remove staples, repair, sort, and batch. Assess characteristics such as legibility and special features (NARA's 36 CFR 1236.50 directs evaluating source-record characteristics before choosing imaging specifications). 3. Digitize / capture. Scan paper (or ingest native-digital files) at image-quality settings sufficient to capture all information. Public-sector image-quality requirements reference FADGI and ISO specifications as a floor. 4. Apply OCR. Run optical character recognition to generate a text layer positioned beneath the page image, producing a searchable image while preserving visual appearance. 5. Index and enrich metadata. Assign descriptive, administrative, and structural metadata — parties, dates, matter or case identifiers, document type, classification, and retention category — enabling retrieval and lifecycle control. 6. Produce archival output. Save to a stable, self-contained format (commonly PDF/A per ISO 19005) with embedded fonts and the OCR text layer intact. 7. Ingest into the repository. In OAIS terms, the producer's submission (SIP) is validated and transformed into a stored, metadata-complete package (AIP). 8. Apply retention and access controls. Bind each record to a retention rule and access permissions; suspend disposition where a legal hold applies. 9. Preserve and audit. Monitor integrity, manage format obsolescence, and maintain audit trails over the retention period. 10. Retrieve / disseminate. Serve copies on request (an OAIS DIP), including for review and production in e-discovery. 11. Disposition. When retention lapses and no hold is in effect, execute the authorized disposition (transfer or destruction) with a documented record of the action."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Inputs and outputs"
    },
    {
      "kind": "paragraph",
      "text": "Inputs"
    },
    {
      "kind": "list",
      "items": [
        "Physical documents (loose paper, bound files, photographic prints).",
        "Native-digital files (word-processing documents, emails, PDFs, images, spreadsheets).",
        "Existing metadata, case or matter identifiers, and retention schedules.",
        "Capture specifications (resolution, color, quality targets)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Outputs"
    },
    {
      "kind": "list",
      "items": [
        "Faithful digital images of source pages.",
        "A searchable text layer produced by OCR.",
        "Descriptive, administrative, and structural metadata and index entries.",
        "Archival-format files (e.g., PDF/A) that are self-contained.",
        "Ingest packages and audit/provenance records (in OAIS terms, AIPs with preservation metadata).",
        "On demand: dissemination copies and litigation production sets."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to OCR and searchable PDF"
    },
    {
      "kind": "paragraph",
      "text": "Scanning alone yields a picture of a page — pixels, not text. OCR converts those pixels into machine-readable characters. In archival practice the recognized text is stored as an invisible text layer positioned beneath the page image, so the document looks identical to the scan but can be searched, and text can be selected and copied. This \"searchable image\" model preserves visual fidelity (important for legal exhibits) while adding retrievability."
    },
    {
      "kind": "paragraph",
      "text": "PDF/A (ISO 19005) is the format most associated with archival, searchable output. It is a constrained subset of PDF for long-term preservation: files must be self-contained, with all information needed to reproduce appearance (text, fonts, images, color information) embedded, and features that undermine long-term reproduction are restricted. When a scanned document is saved as PDF/A with an OCR text layer, the result is both preservation-oriented and searchable. Two facts are worth keeping straight:"
    },
    {
      "kind": "list",
      "items": [
        "OCR is not lossless recognition — accuracy depends on source quality, fonts, and handwriting; the image remains the authoritative visual record while the text layer is a search aid.",
        "PDF/A conformance is about format constraints and self-containment; it does not, by itself, guarantee OCR accuracy or completeness."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to records management and compliance"
    },
    {
      "kind": "paragraph",
      "text": "Legal archiving is an application of records management. ISO 15489-1:2016 (\"Information and documentation — Records management — Part 1: Concepts and principles\") provides the governing concepts: it applies to records in any format and addresses records controls, metadata, and the processes for creating, capturing, and managing records, along with policies, assigned responsibilities, monitoring, and training. It frames authoritative records as authentic, reliable, possessing integrity, and usable — the same properties a legal archive must sustain."
    },
    {
      "kind": "paragraph",
      "text": "For long-lived digital holdings, the OAIS reference model (ISO 14721) supplies the preservation vocabulary: an archive is an organization of people and systems that accepts responsibility to preserve information and make it available to a designated community, moving information through submission (SIP), archival storage (AIP), and dissemination (DIP) packages."
    },
    {
      "kind": "paragraph",
      "text": "Compliance obligations that intersect with legal archives are named factually here, not interpreted: sector- and jurisdiction-specific retention laws; public-records regimes such as the U.S. Federal Records Act (44 U.S.C. 3302, amended by Public Law 113-187 in 2014, which directed NARA to issue standards for digitally reproducing records \"with a view to the disposal of the original records\"); NARA's digitization rules at 36 CFR Part 1236 (Subpart D for temporary records, Subpart E for permanent records); and litigation rules such as the U.S. Federal Rules of Civil Procedure governing ESI. Whether any given obligation applies to a particular organization or record is a legal determination outside the scope of this reference."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Retrievability at scale — indexing plus OCR text turns large paper backfiles into quickly searchable collections.",
        "Space and handling reduction — where law and an approved schedule permit, digitized surrogates can replace physical originals (as NARA's rules contemplate for records meeting the standards).",
        "Preservation stability — archival formats such as PDF/A with embedded fonts reduce the risk that files become unrenderable as software changes.",
        "Defensibility support — consistent capture, metadata, retention rules, and audit trails support demonstrating that records are authentic and were managed under a repeatable process.",
        "Faster e-discovery — a well-indexed, searchable archive shortens identification, collection, and review when material becomes responsive in litigation."
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
        "OCR is imperfect. Poor scans, unusual fonts, degraded originals, and handwriting reduce recognition accuracy; searches can miss text that OCR failed to capture.",
        "Digitization does not by itself authorize destruction. Destroying source records depends on legal authority and, in the U.S. federal context, an approved records schedule — format alone confers no such right.",
        "Format conformance is not preservation. PDF/A ensures a self-contained file but does not manage retention, access, integrity monitoring, or organizational responsibility over time — those are records-management and OAIS functions.",
        "Metadata quality is a ceiling on retrieval. Weak or inconsistent indexing limits how well an archive supports search and legal hold.",
        "Legal and evidentiary weight varies by jurisdiction. The admissibility and authentication of digital surrogates are legal questions, not properties conferred by any capture technology.",
        "Standards evolve and have parts. PDF/A and OAIS have multiple editions and parts; conformance claims must specify which."
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
        "Specify capture quality to the material, not a one-size setting — legibility, color, and special characteristics drive appropriate resolution and color depth (the approach NARA codifies in 36 CFR 1236.50).",
        "Treat OCR output as a search aid layered on an authoritative image, and consider quality-control sampling for critical collections.",
        "Design metadata schemas around retrieval and lifecycle (matter IDs, document types, dates, parties, retention categories) rather than only capturing the image.",
        "Bind records to retention rules at ingest, and ensure the system can suspend disposition when a legal hold is in place.",
        "Keep provenance and audit trails — who captured, when, from what source, and what transformations were applied.",
        "Plan for format management over time, not just initial conversion (an OAIS ongoing responsibility).",
        "Distinguish records-management, preservation, and e-discovery roles — one system may span them, but the obligations differ."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Legal material is now overwhelmingly born-digital, and the volume and variety of ESI is exactly what drove the recognition — under U.S. Federal Rule of Civil Procedure 34 — that the concept of \"documents\" encompasses electronically stored information. That shift makes disciplined capture and archiving more central, not less: organizations must ingest native-digital records alongside scanned paper, keep both searchable and integrity-assured, and be able to identify, preserve, and produce responsive ESI. Public-sector practice has moved in the same direction, with NARA's regulations for digitizing permanent federal records taking effect at 36 CFR Part 1236, Subpart E, on June 5, 2023. The core building blocks in this reference — faithful capture, OCR-backed searchable output, PDF/A archival format, ISO 15489 records controls, and OAIS preservation — remain the vendor-neutral foundation."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Timeline (source-backed only)"
    },
    {
      "kind": "timeline",
      "events": [
        {
          "period": "2005",
          "text": "ISO 19005-1 (PDF/A-1) published, based on PDF 1.4, establishing the first archival PDF subset."
        },
        {
          "period": "2011",
          "text": "ISO 19005-2 (PDF/A-2) published."
        },
        {
          "period": "2012",
          "text": "ISO 19005-3 (PDF/A-3) published; ISO 14721:2012, the OAIS reference model, published (aligned with CCSDS 650.0)."
        },
        {
          "period": "2014",
          "text": "Public Law 113-187 amended the U.S. Federal Records Act (44 U.S.C. 3302) to direct NARA to issue standards for digitally reproducing records \"with a view to the disposal of the original records.\""
        },
        {
          "period": "2016",
          "text": "ISO 15489-1:2016 published (\"Records management — Part 1: Concepts and principles\")."
        },
        {
          "period": "2020",
          "text": "ISO 19005-4 (PDF/A-4) published."
        },
        {
          "period": "2023",
          "text": "NARA's regulations for digitizing permanent federal records took effect (36 CFR Part 1236, Subpart E; effective June 5, 2023)."
        },
        {
          "period": "2025",
          "text": "ISO 14721:2025 published as the third edition of the OAIS reference model, cancelling and replacing the 2012 edition."
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
      "section": "workflows",
      "slug": "ocr-for-legal-documents"
    },
    {
      "section": "guides",
      "slug": "records-management"
    },
    {
      "section": "workflows",
      "slug": "records-compliance"
    },
    {
      "section": "tools",
      "slug": "pdf-a"
    },
    {
      "section": "workflows",
      "slug": "government-records-archives"
    },
    {
      "section": "workflows",
      "slug": "scan-to-searchable-pdf"
    }
  ],
  "faqs": [
    {
      "q": "What is a legal document archive?",
      "a": "A managed repository in which an organization captures, stores, indexes, and retains records of legal, evidentiary, or regulatory significance — such as contracts, court filings, and case files — and keeps them searchable, integrity-assured, and retrievable over their required lifespan."
    },
    {
      "q": "How does a legal archive relate to records management and digital preservation?",
      "a": "It applies records-management concepts (formalized in ISO 15489-1:2016) for creating, classifying, retaining, and dispositioning records, and digital-preservation concepts (the OAIS reference model, ISO 14721) for keeping digital objects renderable over time. Legal archiving also adds an e-discovery dimension because records may become evidence."
    },
    {
      "q": "Why is PDF/A used for archived legal documents?",
      "a": "PDF/A (ISO 19005) is a constrained subset of PDF for long-term preservation. Files must be self-contained, embedding the text, fonts, images, and color information needed to reproduce appearance. Combined with an OCR text layer beneath the page image, the result is both preservation-oriented and searchable. PDF/A conformance does not, by itself, guarantee OCR accuracy."
    },
    {
      "q": "Does digitizing a paper record allow the original to be destroyed?",
      "a": "Not by itself. Destroying source records depends on legal authority and, in the U.S. federal context, an approved records schedule. NARA's rules at 36 CFR Part 1236 permit handling source records only when digitization meets defined image-quality and documentation standards. Format alone confers no right to destroy, and admissibility of a surrogate is a jurisdiction-specific legal question."
    },
    {
      "q": "What role does OCR play, and how reliable is it?",
      "a": "OCR converts the pixels of a scanned page into machine-readable characters, stored as an invisible text layer beneath the image so the document looks identical but is searchable. OCR is not lossless: accuracy depends on source quality, fonts, and handwriting, so the image remains the authoritative visual record while the text layer serves as a search aid."
    }
  ],
  "sources": [
    {
      "title": "ISO 15489-1:2016 — Records management — Part 1: Concepts and principles",
      "url": "https://www.iso.org/standard/62542.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 19005-1:2005 — Document management — Electronic document file format for long-term preservation — Part 1 (PDF/A-1)",
      "url": "https://www.iso.org/standard/38920.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 19005-2:2011 (PDF/A-2)",
      "url": "https://www.iso.org/standard/50655.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 19005-3:2012 (PDF/A-3)",
      "url": "https://www.iso.org/standard/57229.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 19005-4:2020 (PDF/A-4)",
      "url": "https://www.iso.org/standard/71832.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 14721:2012 — Open archival information system (OAIS) — Reference model",
      "url": "https://www.iso.org/standard/57284.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 14721:2025 — Reference model for an open archival information system (OAIS), 3rd edition",
      "url": "https://www.iso.org/standard/87471.html",
      "publisher": "ISO"
    },
    {
      "title": "Public Law 113-187 — Presidential and Federal Records Act Amendments of 2014 (full text)",
      "url": "https://www.congress.gov/113/plaws/publ187/PLAW-113publ187.pdf",
      "publisher": "U.S. Congress"
    },
    {
      "title": "Federal Records Management: Digitizing Permanent Records and Reviewing Records Schedules (final rule)",
      "url": "https://www.federalregister.gov/documents/2023/05/04/2023-09050/federal-records-management-digitizing-permanent-records-and-reviewing-records-schedules",
      "publisher": "U.S. Federal Register"
    },
    {
      "title": "36 CFR Part 1236, Subpart E — Digitizing Permanent Federal Records",
      "url": "https://www.ecfr.gov/current/title-36/chapter-XII/subchapter-B/part-1236/subpart-E",
      "publisher": "U.S. eCFR"
    },
    {
      "title": "Rule 37 — Failure to Make Disclosures or to Cooperate in Discovery; Sanctions",
      "url": "https://www.law.cornell.edu/rules/frcp/rule_37",
      "publisher": "Cornell Legal Information Institute"
    },
    {
      "title": "Rule 34 — Producing Documents, Electronically Stored Information, and Tangible Things",
      "url": "https://www.law.cornell.edu/rules/frcp/rule_34",
      "publisher": "Cornell Legal Information Institute"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "legal document archives",
    "records management",
    "iso 15489",
    "oais",
    "iso 14721",
    "pdf/a",
    "iso 19005",
    "ocr",
    "searchable pdf",
    "e-discovery",
    "electronically stored information",
    "legal hold"
  ],
  "cluster": "enterprise-capture",
  "goal": "A managed repository that captures, indexes, and retains records of legal or evidentiary significance.",
  "toolsUsed": [
    "A document scanner",
    "A document / records management system"
  ]
};

export default entry;
