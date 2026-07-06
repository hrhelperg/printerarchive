import type { WorkflowEntry } from "@/lib/content/types";

const entry: WorkflowEntry = {
  "section": "workflows",
  "slug": "capture-workflow",
  "title": "Document Capture Workflow",
  "description": "How document capture works end to end: ingestion, OCR/ICR/OMR, separation, classification, extraction, validation, and export to ECM and archives.",
  "summary": "Document capture is the set of processes that ingest paper, electronic files, email, and images into an organization's systems, convert them to machine-usable form, index them with metadata, and export them to a repository such as an ECM/DMS, records system, ERP, or CRM. A capture workflow is both a technical pipeline (ingest, pre-process, recognize, separate, classify, extract, validate, export) and a governance activity (assign metadata, apply retention, preserve evidential value). Recognition relies on OCR, ICR, OMR, and barcode reading, with confidence scores routing low-confidence items to human review. Capture connects to records-management standards (ISO 15489), long-term preservation (OAIS / ISO 14721), and regulated digitization rules (NARA 36 CFR Part 1236, Subpart E). Capture that adds automatic classification and extraction is often described as intelligent document processing (IDP).",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Document capture is the set of processes by which paper documents, electronic files (PDFs, office documents), emails, faxes, and images are ingested into an organization's information systems, converted into machine-usable form, indexed with metadata, and delivered to a downstream repository such as an enterprise content management (ECM) system, document management system (DMS), records system, ERP, or CRM. In contemporary practice, capture that adds automatic classification and data extraction on top of digitization is frequently described as intelligent document processing (IDP) — an umbrella term for automating the ingestion, understanding, and routing of documents using OCR, machine learning, and natural language processing."
    },
    {
      "kind": "paragraph",
      "text": "Capture is the front door to information governance. In records-management terms, the international standard ISO 15489-1:2016 (\"Information and documentation — Records management — Part 1: Concepts and principles\") treats creation, capture, and management as core to the discipline, where \"capture\" includes the act of receiving a record and the range of processes needed to bring it under control. The standard holds that records should have the characteristics of authenticity, reliability, integrity, and usability, supported by appropriate metadata to sustain those qualities and enable later retrieval."
    },
    {
      "kind": "paragraph",
      "text": "A capture workflow is therefore both a technical pipeline (scan, recognize, extract, validate, export) and a governance activity (assign metadata, apply retention, preserve evidential value). The subject spans two overlapping communities: business/operational capture in ECM/DMS/IDP settings, focused on getting transactional documents into line-of-business systems quickly and accurately; and archival/records capture, focused on authenticity, completeness, and long-term preservation, governed by standards such as ISO 15489 and, for long-term retention, the OAIS reference model (ISO 14721)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "At a high level, a capture system moves a document through progressive stages of understanding:"
    },
    {
      "kind": "list",
      "items": [
        "Input/ingestion brings the document in from a scanner, multifunction device, mobile camera, email inbox, network folder, or API.",
        "Image pre-processing / normalization cleans and standardizes the image so recognition can succeed.",
        "Recognition (OCR/ICR/OMR/barcode) converts pixels into machine-readable characters, marks, and codes.",
        "Document separation divides a continuous scan stream into logical documents.",
        "Classification identifies what each document is (for example, invoice vs. contract vs. claim form).",
        "Data extraction pulls the values that matter (dates, totals, names, IDs) from each document.",
        "Validation checks extracted data against confidence thresholds, formatting rules, and reference data, routing exceptions to people.",
        "Export/integration delivers the image, its text, and its metadata to the target repository or business system."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Confidence scoring is the connective tissue: recognition and extraction engines attach a confidence value to each result, and the workflow uses those scores to decide what can pass through automatically (\"straight-through processing\") and what must be reviewed by a human. Fields below a confidence threshold, or that fail a business rule, are routed to reviewers."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Step by step (conceptual, vendor-neutral)"
    },
    {
      "kind": "paragraph",
      "text": "1. Input / ingestion. Documents enter from multiple channels: production or desktop scanners, multifunction printers, mobile capture, monitored email or fax, watched folders, or programmatic upload. Batch scanning can turn large volumes of paper into image files in one pass."
    },
    {
      "kind": "paragraph",
      "text": "2. Image pre-processing / normalization. Common operations include converting pages to a consistent format, deskewing, despeckling/noise removal, cropping to page bounds, contrast/threshold adjustment, blank-page removal, and (where required) redaction of sensitive content. Better images yield better recognition accuracy; poor scans are a leading cause of OCR error."
    },
    {
      "kind": "paragraph",
      "text": "3. Document separation. A single scan run often contains many logical documents. Separation determines document boundaries so each is processed as a unit. Techniques include physical separator sheets, barcode/patch-code pages, page-count rules, and content-based (learned) separation. Automated document separation is a recognized method in the field (for example, US Patent 8,577,826)."
    },
    {
      "kind": "paragraph",
      "text": "4. Recognition (OCR / ICR / OMR / barcode)."
    },
    {
      "kind": "list",
      "items": [
        "OCR (optical character recognition) converts an image of text into machine-readable text; it excels on printed, structured text.",
        "ICR (intelligent character recognition) targets handwritten or cursive text, recognizing characters using machine-learning models.",
        "OMR (optical mark recognition) captures human-marked data from fixed positions — checkboxes and fill-in-the-bubble fields — detecting the presence or absence of a mark rather than interpreting character shapes.",
        "Barcode/patch-code recognition reads encoded identifiers, frequently used for both indexing and separation."
      ]
    },
    {
      "kind": "paragraph",
      "text": "5. Classification. The system identifies each document's type using full-text OCR plus AI/machine-learning models (and sometimes layout or keyword rules), sorting invoices, purchase orders, contracts, claim forms, and the like. Classification usually drives which extraction template or model is applied next."
    },
    {
      "kind": "paragraph",
      "text": "6. Data extraction. Extraction modules pull structured values from each classified document using OCR/ICR/OMR outputs plus positional templates, key-value/entity models, table detection, and NLP. Approaches range from fixed-zone templates (for consistent forms) to model-based extraction (for variable layouts)."
    },
    {
      "kind": "paragraph",
      "text": "7. Validation (including human-in-the-loop). Each extracted field carries a confidence score. The workflow applies business rules and cross-checks — format masks, arithmetic checks (such as line items summing to a total), and lookups against master/reference data. Fields below a confidence threshold or that fail a rule are routed to a validation interface where a person reviews and corrects them. In many machine-learning systems this human-in-the-loop step also generates corrected examples that feed continuous learning. Page-independent multi-field validation is a recognized method in the field (for example, US Patent 9,317,484)."
    },
    {
      "kind": "paragraph",
      "text": "8. Export / integration. The finished output — typically the page image(s), a text/OCR layer, and the index metadata — is delivered to the destination: an ECM/DMS, digital repository, records system, or business application (ERP/CRM). Export commonly includes generating a searchable PDF (or PDF/A) and writing structured index data (XML/CSV/JSON) or making direct API calls."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Inputs and outputs"
    },
    {
      "kind": "paragraph",
      "text": "Typical inputs:"
    },
    {
      "kind": "list",
      "items": [
        "Scanned paper (production/desktop scanners, MFPs) and mobile-camera captures",
        "Native electronic files: PDFs, office documents, images",
        "Email and attachments, fax",
        "Structured feeds via API or watched folders"
      ]
    },
    {
      "kind": "paragraph",
      "text": "Typical outputs:"
    },
    {
      "kind": "list",
      "items": [
        "Document image(s) — often rendered as PDF or PDF/A",
        "Recognized text — an OCR text layer or plain text",
        "Index metadata / extracted data — field values and classification, exported as structured data (XML/JSON/CSV) or written directly into the target system",
        "Audit / process metadata — batch, operator, timestamps, QC results, confidence values",
        "Exceptions queue — items requiring human review"
      ]
    },
    {
      "kind": "paragraph",
      "text": "In records and archival contexts, the output set expands to include administrative, descriptive, and technical metadata required to maintain intellectual and physical control of the digitized record, as reflected in NARA's metadata requirements at 36 CFR 1236.54."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to OCR and searchable PDF"
    },
    {
      "kind": "paragraph",
      "text": "OCR is a component of capture, not the whole of it: capture uses OCR (and ICR/OMR) as the recognition layer, then adds separation, classification, extraction, validation, and export around it."
    },
    {
      "kind": "paragraph",
      "text": "A very common capture output is the searchable PDF. Here OCR detects text in a scanned image and stores it as an (often invisible) text layer behind the page image, preserving the visual appearance while enabling full-text search, highlighting, and copying. For long-term retention, capture systems frequently target PDF/A, the ISO-standardized archival PDF subset. According to the PDF Association, PDF/A files are generally searchable unless created from a scanned image, in which case OCR is used to add searchable text; PDF/A also accommodates the invisible glyphs OCR software adds to make scanned text searchable."
    },
    {
      "kind": "paragraph",
      "text": "An important distinction: \"searchable PDF\" refers to embedding a recognized text layer for retrieval; it is not the same as data extraction, which pulls specific field values for downstream processing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to records management and compliance"
    },
    {
      "kind": "paragraph",
      "text": "Capture is the point at which a document becomes a managed record and inherits governance obligations."
    },
    {
      "kind": "list",
      "items": [
        "ISO 15489-1:2016 frames capture as part of creation, capture, and management, and calls for records to be authentic, reliable, of integrity, and usable, supported by appropriate metadata capture, classification, retention scheduling, and secure storage. Capture workflows implement this by attaching metadata and routing documents into retention-governed repositories.",
        "OAIS (ISO 14721) governs the long-term preservation end. Its Ingest function receives a Submission Information Package (SIP), verifies it, creates an Archival Information Package (AIP), and transfers it to Archival Storage; users later receive a Dissemination Information Package (DIP). The model defines six functional entities: Ingest, Archival Storage, Data Management, Administration, Preservation Planning, and Access. Capture output can be understood as feeding OAIS ingest.",
        "Regulatory digitization standards. In the U.S. federal context, NARA's 36 CFR Part 1236, Subpart E (published in the Federal Register on May 4, 2023 and effective June 5, 2023) sets standards for digitizing permanent federal records, including image quality/analysis requirements, mandatory quality control to catch equipment, software-setting, metadata, or human errors, required metadata (administrative, descriptive, technical) under § 1236.54, and project documentation retained with the records. These map onto the pre-processing, QC, and metadata steps of a capture workflow."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Note (governance, not legal advice): specific retention periods, admissibility, and signature/originals requirements are jurisdiction- and regulation-specific; the regulations above are named factually and are not a compliance guarantee."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Reduced manual data entry and faster processing of high volumes; batch scanning converts large paper stacks into usable data.",
        "Fewer keying errors by combining recognition with rule-based validation and reference-data checks.",
        "Faster downstream automation — validated, structured data flows into ERP/CRM/ECM without re-keying.",
        "Full-text retrievability through searchable PDF/OCR text layers.",
        "Governance and auditability — consistent metadata, classification, and QC support records-management and preservation requirements."
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
        "Recognition accuracy depends on input quality. OCR struggles with poor scans, low contrast, unusual fonts, and mixed formatting; handwriting generally requires ICR and remains harder than printed text.",
        "Variable and complex layouts (tables, multi-column, unstructured documents) challenge extraction; template-based approaches are brittle to layout change, and machine-learning systems must adapt as document formats change.",
        "Validation still needs people. Low-confidence or rule-failing items require human review, which is a throughput and cost factor.",
        "No recognition step is error-free. Confidence scores estimate, but do not guarantee, correctness — making thresholds and QC essential.",
        "Governance is not automatic. Correct metadata, classification, and retention must be designed in; capture can propagate errors at scale if misconfigured."
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
        "Image quality first. Invest in scanning standards, resolution, and pre-processing; downstream accuracy is bounded by capture quality.",
        "Choose the right recognition tool per field type: OCR for printed text, ICR for handwriting, OMR for checkboxes and marks, barcode/patch codes for IDs and separation.",
        "Design separation deliberately — decide between separator sheets, barcodes/patch codes, or content-based separation based on the document mix.",
        "Set confidence thresholds and business rules to balance straight-through processing against review load, and define what routes to humans.",
        "Plan the export contract — file format (PDF/A for archiving), text layer, metadata schema, and the target system's index/API requirements.",
        "Capture governance metadata at ingest — administrative, descriptive, and technical metadata are far cheaper to capture during ingest than to reconstruct later.",
        "Build QC into the process to detect equipment, configuration, metadata, or human errors and take corrective action."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Capture remains foundational to digital transformation: it is the bridge between analog or unstructured inputs and automated business processes. The current direction of travel is toward intelligent document processing, in which machine learning and NLP augment classic OCR to classify and extract from more varied and less-structured documents, with human-in-the-loop review feeding continuous learning so models improve over time."
    },
    {
      "kind": "paragraph",
      "text": "At the same time, the archival and preservation side continues to formalize — updated NARA digitization regulations (effective 2023) and the current OAIS edition (ISO 14721:2025) — keeping evidential integrity and long-term access in scope alongside operational speed."
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
          "period": "2003",
          "text": "ISO 14721:2003 published (first ISO edition of the OAIS reference model)."
        },
        {
          "period": "2012",
          "text": "ISO 14721:2012 published (revised OAIS reference model, identical to CCSDS 650.0-M-2)."
        },
        {
          "period": "2016",
          "text": "ISO 15489-1:2016 published (revised records-management concepts and principles)."
        },
        {
          "period": "2023",
          "text": "NARA's digitization standards for permanent federal records (36 CFR Part 1236, Subpart E) published May 4, 2023 and effective June 5, 2023."
        },
        {
          "period": "2025",
          "text": "ISO 14721:2025 published (current OAIS reference model edition; identical to CCSDS 650.0-M-3), cancelling and replacing the 2012 edition."
        }
      ]
    },
    {
      "kind": "paragraph",
      "text": "No origin dates are asserted for the invention of OCR, ICR, OMR, or PDF, as those were not verified against primary sources in this research."
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
      "slug": "enterprise-document-capture"
    },
    {
      "section": "workflows",
      "slug": "batch-scanning"
    },
    {
      "section": "guides",
      "slug": "optical-character-recognition"
    },
    {
      "section": "guides",
      "slug": "document-indexing"
    },
    {
      "section": "guides",
      "slug": "capture-metadata"
    },
    {
      "section": "guides",
      "slug": "records-management"
    }
  ],
  "faqs": [
    {
      "q": "Is document capture the same as OCR?",
      "a": "No. OCR (optical character recognition) is one component of capture — the recognition layer that turns images of text into machine-readable text. A capture workflow wraps additional steps around OCR: ingestion, image pre-processing, document separation, classification, data extraction, validation, and export to a target system."
    },
    {
      "q": "What is the difference between a searchable PDF and data extraction?",
      "a": "A searchable PDF embeds a recognized text layer (often invisible) behind the page image so the document can be full-text searched, highlighted, and copied. Data extraction is different: it pulls specific field values — dates, totals, names, IDs — for downstream processing. A document can be searchable without any structured data having been extracted."
    },
    {
      "q": "How does capture relate to records management and archiving standards?",
      "a": "Capture is where a document becomes a managed record. ISO 15489-1:2016 frames capture within creation, capture, and management and calls for records to be authentic, reliable, of integrity, and usable. For long-term preservation, the OAIS model (ISO 14721) defines Ingest, which receives a Submission Information Package and produces an Archival Information Package. In the U.S., NARA's 36 CFR Part 1236, Subpart E sets digitization standards for permanent federal records."
    },
    {
      "q": "What are OCR, ICR, and OMR used for in capture?",
      "a": "OCR reads printed, structured text. ICR (intelligent character recognition) targets handwritten or cursive text using machine-learning models. OMR (optical mark recognition) captures marks in fixed positions such as checkboxes and fill-in-the-bubble fields, detecting the presence or absence of a mark rather than interpreting character shapes. Barcode and patch-code reading is often used for indexing and document separation."
    },
    {
      "q": "Why do capture systems still need human review?",
      "a": "Recognition and extraction engines attach a confidence score to each result, but no recognition step is error-free. Fields that fall below a confidence threshold or fail a business rule are routed to a person for review and correction. This human-in-the-loop step is the accuracy backstop, and in many machine-learning systems the corrections also feed continuous learning so models improve over time."
    }
  ],
  "sources": [
    {
      "title": "ISO 15489-1:2016 — Records management — Part 1: Concepts and principles",
      "url": "https://www.iso.org/standard/62542.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "ISO 14721:2025 — Reference model for an open archival information system (OAIS)",
      "url": "https://www.iso.org/standard/87471.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "ISO 14721:2012 catalogue entry",
      "url": "https://www.iso.org/standard/57284.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "ISO 14721:2003 catalogue entry",
      "url": "https://www.iso.org/standard/24683.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "Open Archival Information System (OAIS)",
      "url": "https://en.wikipedia.org/wiki/Open_Archival_Information_System",
      "publisher": "Wikipedia"
    },
    {
      "title": "36 CFR Part 1236, Subpart E — Digitizing Permanent Federal Records",
      "url": "https://www.ecfr.gov/current/title-36/chapter-XII/subchapter-B/part-1236/subpart-E",
      "publisher": "U.S. National Archives / eCFR"
    },
    {
      "title": "Federal Records Management: Digitizing Permanent Records (final rule)",
      "url": "https://www.federalregister.gov/documents/2023/05/04/2023-09050/federal-records-management-digitizing-permanent-records-and-reviewing-records-schedules",
      "publisher": "Federal Register / NARA"
    },
    {
      "title": "Release of Regulations for Digitization Standards for Permanent Records",
      "url": "https://www.nagara.org/Web/Newsroom/Articles/2023/Release-of-Regulations-for-Digitization-Standards-for-Permanent-Records.aspx",
      "publisher": "NAGARA"
    },
    {
      "title": "Optical mark recognition",
      "url": "https://en.wikipedia.org/wiki/Optical_mark_recognition",
      "publisher": "Wikipedia"
    },
    {
      "title": "PDF/A FAQ",
      "url": "https://pdfa.org/pdfa-faq/",
      "publisher": "PDF Association"
    },
    {
      "title": "Automated Document Separation (US Patent 8,577,826)",
      "url": "https://patents.google.com/patent/US8577826B2/en",
      "publisher": "USPTO / Google Patents"
    },
    {
      "title": "Page-independent multi-field validation in document capture (US Patent 9,317,484)",
      "url": "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/9317484",
      "publisher": "USPTO"
    },
    {
      "title": "What is Intelligent Document Processing (IDP)?",
      "url": "https://aws.amazon.com/what-is/intelligent-document-processing/",
      "publisher": "Amazon Web Services"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "document capture",
    "capture workflow",
    "intelligent document processing",
    "idp",
    "ocr",
    "icr",
    "omr",
    "document classification",
    "data extraction",
    "searchable pdf",
    "records management",
    "iso 15489"
  ],
  "cluster": "enterprise-capture",
  "goal": "Document capture ingests, recognizes, indexes, and exports documents into content, records, and archival systems.",
  "toolsUsed": [
    "A scanner or multifunction device",
    "Capture software (classification and extraction)"
  ]
};

export default entry;
