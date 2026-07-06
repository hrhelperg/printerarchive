import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "enterprise-document-capture",
  "title": "Enterprise document capture",
  "description": "How enterprise document capture converts scanned paper, faxes, emails, and files into classified, indexed content for ECM and archival systems.",
  "summary": "Enterprise document capture is the software and process category that converts inbound documents — scanned paper, faxes, emails, and electronic files — into classified, indexed content released to downstream repositories such as ECM, DMS, BPM, and archival systems. It works as a pipeline of scanning/import, image enhancement, classification, recognition and extraction, validation, and release. The category grew out of document imaging and micrographics, with long-lived commercial lineages including Kofax (Ascent Capture, now Tungsten Automation), Captiva (InputAccel, now OpenText Intelligent Capture), and ABBYY FlexiCapture. Capture connects to standardized disciplines: OCR/ICR recognition, records management (ISO 15489), the OAIS reference model (ISO 14721), and archival PDF (PDF/A, ISO 19005). Machine learning has reframed its recognition and classification layers as intelligent document processing (IDP), but the underlying job — reliable, validated conversion of documents into indexed content — is unchanged.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Enterprise document capture is the category of software and process technology that converts inbound documents — whether scanned paper, faxes, emails, electronic files, or images — into classified, indexed, machine-usable content that can be released into a downstream repository such as an enterprise content management (ECM) system, document management system (DMS), business process management (BPM) platform, or line-of-business application. Rather than treating a scanned page as an opaque image, a capture platform recognizes what a document is (classification), pulls the values that matter out of it (extraction), confirms those values are correct (validation), and hands the result — image plus structured metadata — to the system that will store or act on it (release/export)."
    },
    {
      "kind": "paragraph",
      "text": "The term is used across the information-management industry to describe both the discrete \"front door\" of an ECM deployment and a standalone product category. Documented commercial platforms in this space include Kofax Capture (now branded under Tungsten Automation), OpenText Captiva / Intelligent Capture (descended from EMC's Captiva InputAccel), and ABBYY FlexiCapture. This page describes the category vendor-neutrally and names these products only factually."
    },
    {
      "kind": "paragraph",
      "text": "Capture sits at the intersection of several standardized disciplines: image and character recognition (OCR/ICR), records management (ISO 15489), long-term preservation (the OAIS reference model, ISO 14721; and PDF/A, ISO 19005), and metadata practice. Understanding capture therefore requires understanding where it hands off to each of those."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History and origin"
    },
    {
      "kind": "paragraph",
      "text": "Document capture grew out of document imaging and micrographics. As organizations moved from microfilm and paper filing to electronic imaging in the late 1980s and 1990s, high-volume production scanning created a new problem: converting large batches of images into content that could be retrieved and processed, not just stored. Data-capture software emerged to add indexing, recognition, and routing on top of raw scanning."
    },
    {
      "kind": "paragraph",
      "text": "The commercial lineage of the category is traceable through several long-lived products:"
    },
    {
      "kind": "list",
      "items": [
        "Kofax built one of the most widely deployed capture products. The application was marketed as Ascent Capture prior to version 6.1, after which it was renamed Kofax Capture. In January 2024, Kofax rebranded corporately as Tungsten Automation; the vendor's own materials describe the company's evolution from a pioneer in document capture toward AI-powered workflow automation.",
        "Captiva developed the InputAccel capture platform. The Captiva product line was acquired by EMC (becoming part of EMC's Documentum/enterprise content division), and InputAccel was later marketed as Intelligent Capture. On January 23, 2017, Dell EMC's Enterprise Content Division — including Captiva — became part of OpenText, where it is offered as OpenText Captiva / OpenText Intelligent Capture.",
        "ABBYY, an OCR technology company, developed FlexiCapture as a document-automation platform combining classification, recognition, verification, and export."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Alongside the products, the surrounding standards matured: ISO 15489 for records management (first edition 2001, revised 2016), the OAIS reference model for archival systems (issued by CCSDS and adopted as ISO 14721, first ISO edition 2003, revised 2012 and 2025), and PDF/A for preservation (ISO 19005-1 in 2005)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What it is"
    },
    {
      "kind": "paragraph",
      "text": "Enterprise document capture is the automated intake layer that transforms unstructured or semi-structured inbound documents into structured, indexed, retrievable content. It is defined by purpose rather than by any single technology: whatever combination of scanning, imaging, recognition, and business rules is required to turn a stack of documents into classified records with reliable metadata in the right system."
    },
    {
      "kind": "paragraph",
      "text": "Industry bodies distinguish two related senses of \"capture.\" AIIM (the Association for Information and Image Management) describes document capture as the conversion of a paper document into an electronic image, and data capture as the extraction of data from a business form. Enterprise capture platforms combine both: they produce a faithful digital image and the structured data drawn from it."
    },
    {
      "kind": "paragraph",
      "text": "Where simple scanning stops at producing an image file, capture continues: it identifies document type, reads fields, applies validation logic, and delivers to a repository — often described in vendor materials as making information available in content repositories and business applications."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Capture is conventionally described as a pipeline of stages. The exact naming varies by vendor and by author, but the canonical sequence is:"
    },
    {
      "kind": "list",
      "items": [
        "Scan / import (ingestion). Documents enter from many channels: production scanners, multifunction devices, fax, email and attachments, mobile capture, monitored folders/hot folders, cloud storage, and system-generated files. Batches are created and, typically, image cleanup is applied.",
        "Image enhancement / preparation. Deskew, despeckle, cropping, binarization, and other operations improve legibility and recognition accuracy before text is read. Kofax historically marketed this through its VirtualReScan / VRS image-processing technology.",
        "Classification (separation and identification). The system determines what each document is — for example invoice, bank statement, contract, tax form, or ID — and separates multi-document batches into individual documents. Modern platforms use pattern/layout matching and neural-network classifiers; ABBYY documents automatic document classification based on neural networks.",
        "Recognition and extraction. OCR (machine print), ICR (hand print), OMR (checkbox/mark detection), and barcode reading convert image regions into text and data. Extraction pulls the relevant values — key–value pairs, line items/tables, and full text — using zonal (fixed-position), field-level, or full-text methods, and increasingly layout-aware and NLP-based models for unstructured documents.",
        "Validation (verification). Extracted data is checked against business rules, lookups, and databases; low-confidence results are routed to human reviewers for correction. This is the quality gate that determines the reliability of the metadata delivered downstream.",
        "Release / export. The validated image plus its metadata are delivered to the target system — ECM/DMS, BPM, ERP, or archive — often in a standardized image/document format. Vendor documentation cites delivery into repositories such as EMC/OpenText Documentum, OpenText ApplicationXtender, and Microsoft SharePoint."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture and components"
    },
    {
      "kind": "paragraph",
      "text": "Enterprise capture platforms are typically distributed, multi-stage systems designed for volume and reliability. Common architectural components include:"
    },
    {
      "kind": "list",
      "items": [
        "Capture/ingestion clients and connectors for scanners and digital sources, spanning scanners, multifunction devices, fax, email, and mobile. Vendors describe support for hundreds of scanners, multifunction devices, fax, email, and other digital sources.",
        "A processing engine / server tier that orchestrates the batch through stages, often as a pipeline of processing modules or steps that can be distributed across machines for throughput. Captiva's architecture, for example, is documented as processing batches through configurable steps; some legacy design tools (such as the Captiva Process Developer) have been deprecated over time.",
        "Recognition modules (OCR/ICR/OMR/barcode) and classification/extraction engines.",
        "Validation / verification stations — the human-in-the-loop interfaces for reviewing exceptions and low-confidence data.",
        "Administration and design tooling for defining document classes, extraction templates, rules, and routing.",
        "Release/export connectors to ECM, BPM, ERP, RPA, and archival targets.",
        "APIs and SDKs for embedding capture in custom applications and for programmatic import; ABBYY, for instance, exposes a FlexiCapture SDK and web-service API, with deployment options spanning on-premises and cloud, standalone and distributed."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Platforms in this category are engineered for scale; Captiva documentation, for example, describes scaling to handle a few thousand documents or several million documents per day."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to scanning and OCR"
    },
    {
      "kind": "paragraph",
      "text": "Scanning and OCR are inputs to capture, not the whole of it. Scanning produces the electronic image; OCR (and its relatives) turn regions of that image into text. Per AIIM's usage, converting paper to an electronic image is document capture in the narrow sense, while extracting data from that image is data capture — and enterprise capture platforms perform both, plus the classification, validation, and routing that scanning and OCR alone do not."
    },
    {
      "kind": "paragraph",
      "text": "The recognition family used within capture includes:"
    },
    {
      "kind": "list",
      "items": [
        "OCR for machine-printed text, including zonal OCR, which reads specified regions of a page;",
        "ICR for hand-printed characters, described as an advanced form of OCR using AI to recognize varied handwriting;",
        "OMR for marks/checkboxes; and",
        "barcode recognition."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Recognition accuracy is precisely why the validation stage exists: OCR/ICR output carries confidence scores, and capture systems route uncertain results for human confirmation before release."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and preservation formats"
    },
    {
      "kind": "paragraph",
      "text": "Capture output is frequently stored as PDF, and for long-term retention often as PDF/A, the archival subset of PDF defined by ISO 19005. PDF/A constrains PDF so that a document's static visual appearance can be reliably reproduced over long periods independent of the software used to create it. To achieve this, PDF/A files must be self-contained — for example, all visibly used fonts must be embedded, and features that could compromise future rendering (external font links, certain multimedia, JavaScript, encryption) are restricted. The Library of Congress maintains a Sustainability of Digital Formats description of the PDF/A family as a preservation format."
    },
    {
      "kind": "paragraph",
      "text": "The ISO 19005 family has multiple parts: 19005-1:2005 (based on PDF 1.4, \"PDF/A-1\"), 19005-2:2011 (based on ISO 32000-1, \"PDF/A-2\"), and 19005-3:2012 (based on ISO 32000-1 with support for embedded files, \"PDF/A-3\"). A common capture pattern is to produce a searchable PDF/A — the page image plus an OCR text layer — so the document is both visually faithful and full-text searchable."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to records management and compliance"
    },
    {
      "kind": "paragraph",
      "text": "Capture is the point at which a document becomes a managed record, which ties it directly to records-management standards. ISO 15489-1:2016 (\"Information and documentation — Records management — Part 1: Concepts and principles\") defines the concepts and principles for the creation, capture and management of records in any format. In its terms, \"creation, capture and management\" summarizes records management as a whole and is inclusive of the act of receipt of a record — placing capture squarely within the records-management lifecycle. The standard emphasizes records metadata and records systems as core concerns, which maps onto capture's role of attaching reliable, consistent metadata at intake. The first edition, ISO 15489-1:2001, has its genesis in the Australian Standard AS 4390."
    },
    {
      "kind": "paragraph",
      "text": "For archival and preservation contexts, the OAIS reference model (ISO 14721) provides the complementary framework. OAIS defines an Ingest functional entity that receives information from producers and packages it for storage — it accepts a SIP, verifies it, creates an AIP, and transfers the newly created AIP to archival storage — alongside Archival Storage, Data Management, Administration, Preservation Planning, and Access. Its information-package concepts — SIP (Submission Information Package), AIP (Archival Information Package), and DIP (Dissemination Information Package) — describe the same verify, package, and hand-off logic that enterprise capture performs at the operational level. Enterprise capture is, in effect, the ingest tier for many content and archival systems."
    },
    {
      "kind": "paragraph",
      "text": "Compliance note (factual only): Organizations use capture to help meet retention, auditability, and evidentiary requirements imposed by various regulations and standards. The specific obligations depend on jurisdiction and sector and are outside the scope of this reference; regulations should be named factually and interpreted with qualified advice."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Reduces manual data entry by automatically extracting and validating field data, which vendor and industry sources cite as a driver of accuracy and speed.",
        "Consistent classification and indexing at the point of intake, so documents arrive in the repository already typed and tagged.",
        "Multi-channel intake consolidates paper, email, fax, mobile, and electronic sources into one processing path.",
        "Scalability for high-volume operations, with production platforms documenting capacities up to millions of documents per day.",
        "Cleaner downstream systems: ECM, BPM, ERP, and archival systems receive structured, validated content rather than raw images.",
        "Supports preservation and records goals by producing standardized, self-contained formats such as PDF/A and metadata aligned with records-management practice."
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
        "Recognition is imperfect. OCR/ICR output varies with image quality, handwriting, and document variability, which is why human validation stations remain a standard component and a cost center.",
        "Template and rule maintenance. Traditional zonal/template-based extraction requires configuration per document type and can be brittle when layouts change; unstructured documents historically needed heavy manual setup, a gap newer NLP/ML approaches aim to close.",
        "Image-preparation dependency. Poor scans, skew, and noise degrade downstream accuracy, making enhancement a prerequisite rather than an option.",
        "Integration complexity. Distributed, multi-stage architectures with many connectors require expertise to deploy and maintain; product lines evolve and specific components get deprecated over time (for example, the deprecation of Captiva's Process Developer design tool).",
        "Vendor/product churn. The category has seen significant renaming and consolidation (Ascent Capture to Kofax Capture to Tungsten Automation; Captiva InputAccel to Intelligent Capture under EMC and then OpenText), which complicates long-term tooling decisions."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Capture remains foundational to content and process automation, and its recognition and classification layers are the part of the category most transformed by machine learning. Contemporary \"intelligent document processing\" (IDP) reframes classic capture stages — capture, classification, extraction, enrichment, validation, consumption — with machine-learning classifiers, layout-aware extraction models, and natural-language processing for unstructured documents such as contracts and email."
    },
    {
      "kind": "paragraph",
      "text": "Vendors have extended their platforms accordingly: ABBYY, for example, documents NLP-based extension of FlexiCapture to unstructured documents, and Kofax's rebrand to Tungsten Automation is explicitly framed around a shift from document capture toward AI-powered workflow automation. Cloud deployment, API-first integration, and delivery into RPA/BPM pipelines are now standard expectations rather than differentiators. The underlying job — reliable, validated conversion of inbound documents into classified, indexed content — is unchanged; the recognition and classification techniques have advanced."
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
          "period": "2001",
          "text": "ISO 15489-1, first edition of the records-management standard, published (later revised)."
        },
        {
          "period": "2003",
          "text": "The OAIS reference model, developed by CCSDS, adopted as the first ISO edition, ISO 14721:2003."
        },
        {
          "period": "2005",
          "text": "ISO 19005-1 (PDF/A-1) published, the first archival PDF standard."
        },
        {
          "period": "2011",
          "text": "ISO 19005-2 (PDF/A-2) published."
        },
        {
          "period": "2012",
          "text": "ISO 19005-3 (PDF/A-3) published; ISO 14721 second edition published."
        },
        {
          "period": "2016",
          "text": "ISO 15489-1:2016 (revised records-management standard) published."
        },
        {
          "period": "2017 (January 23)",
          "text": "Dell EMC's Enterprise Content Division, including Captiva, becomes part of OpenText."
        },
        {
          "period": "2022 (June)",
          "text": "Kofax acquires Tungsten Network (B2B e-invoicing), the basis for the later corporate name."
        },
        {
          "period": "2024 (January)",
          "text": "Kofax rebrands corporately as Tungsten Automation."
        },
        {
          "period": "2025",
          "text": "ISO 14721:2025 (latest OAIS edition, corresponding to CCSDS 650.0-M-3) published."
        }
      ]
    },
    {
      "kind": "paragraph",
      "text": "Product-line renamings — Ascent Capture to Kofax Capture, and Captiva InputAccel to Intelligent Capture — are documented as having occurred but are not tied to a single verified date in these sources, and are therefore left undated here."
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
      "slug": "capture-servers"
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
      "slug": "optical-character-recognition"
    },
    {
      "section": "workflows",
      "slug": "batch-scanning"
    },
    {
      "section": "guides",
      "slug": "capture-metadata"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between document capture and data capture?",
      "a": "Per AIIM's usage, document capture is the conversion of a paper document into an electronic image, while data capture is the extraction of data from a business form. Enterprise capture platforms perform both — producing a faithful image and the structured data drawn from it — plus the classification, validation, and routing that scanning and OCR alone do not."
    },
    {
      "q": "How does enterprise document capture relate to OCR?",
      "a": "OCR is an input to capture, not the whole of it. Scanning produces the image and OCR (with ICR, OMR, and barcode recognition) turns image regions into text. Capture adds classification, extraction, validation of low-confidence results, and release to a downstream repository."
    },
    {
      "q": "What standards are relevant to document capture?",
      "a": "Capture connects to records management (ISO 15489, which covers the creation, capture and management of records), the OAIS reference model for archival ingest (ISO 14721), and archival PDF (PDF/A, ISO 19005), whose parts include 19005-1:2005, 19005-2:2011, and 19005-3:2012."
    },
    {
      "q": "What are the main stages of a document capture pipeline?",
      "a": "The canonical sequence is scan/import (ingestion), image enhancement, classification, recognition and extraction (OCR/ICR/OMR/barcode), validation against business rules with human review of low-confidence data, and release/export to systems such as ECM, DMS, BPM, ERP, or an archive."
    },
    {
      "q": "Which commercial platforms are associated with document capture?",
      "a": "Documented product lineages include Kofax Capture (formerly Ascent Capture; the company rebranded as Tungsten Automation in January 2024), OpenText Captiva / Intelligent Capture (descended from EMC's Captiva InputAccel, which joined OpenText on January 23, 2017), and ABBYY FlexiCapture. This reference names them factually and vendor-neutrally."
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
      "title": "ISO 14721:2025 — Reference model for an open archival information system (OAIS)",
      "url": "https://www.iso.org/standard/87471.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 14721:2012 — Open archival information system (OAIS) — Reference model",
      "url": "https://www.iso.org/standard/57284.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 14721:2003 — Open archival information system — Reference model",
      "url": "https://www.iso.org/standard/24683.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 19005-1:2005 — Electronic document file format for long-term preservation (PDF/A-1)",
      "url": "https://www.iso.org/standard/38920.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 19005 (PDF/A) overview",
      "url": "https://pdfa.org/resource/iso-19005-pdfa/",
      "publisher": "PDF Association"
    },
    {
      "title": "PDF/A Family, PDF for Long-term Preservation",
      "url": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000318.shtml",
      "publisher": "Library of Congress"
    },
    {
      "title": "What is ECM?",
      "url": "https://info.aiim.org/what-is-ecm",
      "publisher": "AIIM"
    },
    {
      "title": "Kofax Capture Administrator's Guide, Version 11.1.0",
      "url": "https://docshield.tungstenautomation.com/KC/en_US/11.1.0-40hy9nfk91/print/KofaxCaptureAdministratorsGuide_EN.pdf",
      "publisher": "Tungsten Automation / Kofax"
    },
    {
      "title": "A New Chapter Begins: Kofax is now Tungsten Automation",
      "url": "https://www.tungstenautomation.com/about/press-releases/2024/kofax-is-now-tungsten-automation",
      "publisher": "Tungsten Automation"
    },
    {
      "title": "OpenText completes acquisition of Dell EMC's Enterprise Content Division",
      "url": "https://blogs.opentext.com/opentext-completes-acquisition-dell-emc-enterprise-content-division-including-documentum/",
      "publisher": "OpenText"
    },
    {
      "title": "OpenText Captiva Capture 16.6 System Overview",
      "url": "https://static1.squarespace.com/static/555510e6e4b0ecb85ccf4059/t/5e7cbc63b117a66840cac6f0/1585232996217/Opentext-Captiva-Capture-16.6-System-Overview.pdf",
      "publisher": "OpenText"
    },
    {
      "title": "OpenText Intelligent Capture: Process Developer is being deprecated",
      "url": "https://www.revolutiondatasystems.com/blog/opentext-intelligent-capture-process-developer-deprecated",
      "publisher": "Revolution Data Systems"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "enterprise document capture",
    "document capture",
    "data capture",
    "intelligent document processing",
    "idp",
    "ocr",
    "icr",
    "document classification",
    "iso 15489",
    "oais",
    "iso 14721",
    "pdf/a"
  ],
  "cluster": "enterprise-capture",
  "modernTools": [
    "pdf-editor"
  ],
  "difficulty": "advanced",
  "estimatedTime": "11 min read"
};

export default entry;
