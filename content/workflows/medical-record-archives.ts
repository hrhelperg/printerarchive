import type { WorkflowEntry } from "@/lib/content/types";

const entry: WorkflowEntry = {
  "section": "workflows",
  "slug": "medical-record-archives",
  "title": "Medical Record Archives",
  "description": "How clinical records are digitized, indexed, and preserved — capture, OCR, records management (ISO 15489), OAIS preservation, and HIPAA safeguards.",
  "summary": "A medical record archive, in the enterprise document-capture sense, is the conversion of clinical and administrative health documents into managed digital objects that can be stored, indexed, retrieved, and preserved. The work sits at the intersection of document capture, records management (ISO 15489), and digital preservation (the OAIS reference model, ISO 14721). This reference explains the capture-to-preservation workflow, the role of OCR and searchable PDF/A, and the records-management and compliance context — including the U.S. HIPAA Security Rule for electronic protected health information. It names regulations factually and contains no legal, medical, or compliance advice or guarantees.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "A \"medical record archive,\" in the enterprise document-capture sense, is the disciplined conversion of clinical and administrative health documents — paper charts, films, forms, correspondence, dictation, and legacy microfilm — into managed digital objects that can be stored, indexed, retrieved, and preserved over time. The work sits at the intersection of three distinct disciplines: document capture (scanning and data extraction), records management (retention, classification, and lifecycle control, as framed by standards such as ISO 15489), and digital preservation (keeping files usable across decades, as framed by the OAIS reference model, ISO 14721)."
    },
    {
      "kind": "paragraph",
      "text": "Two motivations recur. First, the shift from paper to electronic health records (EHRs) accelerated sharply in the United States after the HITECH Act (2009): among non-federal acute care hospitals, \"Basic\" EHR adoption rose from fewer than 10% in 2008 to about 99% by 2018, with certified-EHR adoption reported at 99.4% by 2024 (ONC). That transition left large volumes of pre-existing paper that organizations chose to capture into or alongside their EHRs. Second, health information carries heightened protection obligations. In the U.S., the HIPAA Security Rule sets national standards for safeguarding electronic protected health information (ePHI); it is codified at 45 CFR Part 160 and Subparts A and C of Part 164 (HHS)."
    },
    {
      "kind": "paragraph",
      "text": "Scope note and caveat: HIPAA governs how protected health information must be safeguarded and how long HIPAA's own required documentation must be kept (six years — see below). HIPAA does not set a single, general retention period for medical records themselves; those periods are established by other authorities such as state law and program requirements (for example, CMS Conditions of Participation). This page names regulations factually and does not interpret them for any specific organization."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "At a conceptual level, a medical-record archiving system moves a physical or born-digital document through capture, transformation, indexing, quality control, storage, and lifecycle management:"
    },
    {
      "kind": "list",
      "items": [
        "Capture digitizes the source (flatbed or production scanner, film scanner, or ingest of already-electronic files such as faxed PDFs).",
        "Image processing cleans and normalizes the raster image (deskew, despeckle, crop, contrast).",
        "Recognition applies OCR to machine-printed text and, where attempted, ICR (intelligent character recognition) to hand-printed content, producing a searchable text layer and/or extracted field values.",
        "Indexing and classification attach metadata — patient identifiers, document type, encounter or date, source department — by manual keying, barcode/patient-label reading, or automated classification.",
        "Quality control verifies image legibility, completeness (no missing pages), correct patient association, and metadata accuracy.",
        "Storage and preservation commit the object and its metadata to a repository, often in an archival-oriented format (e.g., PDF/A, ISO 19005) and under a records-management schema that tracks retention and disposition."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The recognized-text and metadata layers are what make an archive useful rather than merely a pile of images: they enable search, routing into the correct patient chart, and downstream analytics."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Step by step (conceptual, vendor-neutral)"
    },
    {
      "kind": "paragraph",
      "text": "1. Inventory and appraisal. Identify document populations (charts, explanation-of-benefits statements, consents, lab reports, imaging films), volumes, condition, and the retention rules that apply to each. Records management standards frame this as understanding what records exist and why they are kept (ISO 15489-1:2016). 2. Define target quality and metadata. Set image resolution, color, and file-format targets, plus the metadata fields required for retrieval and preservation. Federal digitization practice illustrates the pattern: NARA's rule for permanent records specifies minimum resolutions (for example, on the order of 300–400 ppi for modern textual and fine-detail records), aligned to FADGI aim points, and enumerates required metadata (36 CFR 1236.50 and 1236.54). 3. Prepare documents. Remove staples, repair tears, separate batches, and insert separator sheets or barcodes so the system can split multi-document stacks and associate pages with the right record. 4. Scan or ingest. Digitize on appropriately calibrated equipment; born-digital inputs (faxes, portal uploads) are ingested directly. 5. Enhance and recognize. Apply image cleanup; run OCR (and ICR where handwriting is in scope) to build a text layer and extract indexing fields. 6. Index and classify. Assign document type and patient/encounter identifiers; validate against a master patient index or EHR. 7. Quality control. Sample and inspect for legibility, completeness, correct orientation, and correct patient linkage; correct errors before commit. NARA's rule requires QC using reference targets and documented conformance procedures (36 CFR 1236, Subpart E) — a useful conceptual model even outside the federal context. 8. Commit to repository. Store the object (commonly PDF/A for long-term readability), its text layer, and metadata; register it in the records system with a retention/disposition rule. 9. Manage lifecycle. Apply access controls, audit logging, retention timers, legal holds, and eventual disposition. Under HIPAA's Security Rule, safeguards over ePHI apply throughout this lifecycle. 10. Preserve. For long-lived holdings, apply preservation practices (integrity checks, format migration) consistent with the OAIS functional model — ingest, archival storage, data management, access, and dissemination (ISO 14721)."
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
        "Paper charts and forms (structured forms and free-text narrative notes).",
        "Photographic and film media (X-ray film, microfilm and microfiche).",
        "Born-digital documents (faxed PDFs, portal uploads, dictated and transcribed notes).",
        "Metadata sources: patient labels and barcodes, master patient index, EHR encounter data."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Outputs"
    },
    {
      "kind": "list",
      "items": [
        "Archival image files, commonly with an embedded searchable text layer (for example, PDF/A with an invisible OCR layer).",
        "Extracted field values (patient ID, date, document type) for indexing.",
        "Descriptive, technical, and preservation metadata (echoing the four ISO 15489 record characteristics: authenticity, reliability, integrity, and usability).",
        "Audit and QC records documenting the capture process."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to OCR and searchable PDF"
    },
    {
      "kind": "paragraph",
      "text": "OCR (optical character recognition) is the component that turns a scanned image into text. In an archive, the most common output pattern is a searchable PDF: the page image is retained for fidelity while an invisible OCR text layer is positioned beneath it, so the document looks identical to the original but can be full-text searched and copied. PDF/A (ISO 19005) is the archival-oriented profile of PDF; it constrains the format for long-term readability (for example, by requiring embedded fonts and excluding features such as external references and embedded JavaScript), and OCR text can be embedded to make scanned pages searchable. PDF/A exists in parts — PDF/A-1, -2, and -3 (ISO 19005-1, -2, and -3) — with PDF/A-3 additionally allowing arbitrary embedded file attachments."
    },
    {
      "kind": "paragraph",
      "text": "Medical content stresses OCR. Machine-printed text (typed reports, printed labs) is recognized at high accuracy, but handwriting is materially harder — clinical shorthand, abbreviations, and variable penmanship reduce accuracy, and structured form fields recognize better than free-flowing narrative notes. (Specific accuracy percentages that circulate online come from vendor material and are not cited here as authoritative.) This is why many programs OCR for search convenience but do not treat recognized text as a substitute for the retained page image."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to records management and compliance"
    },
    {
      "kind": "paragraph",
      "text": "Capture is only the front end; the archive must then be managed as records. ISO 15489-1:2016 frames authoritative records around four characteristics — authenticity, reliability, integrity, and usability — and integrates records management into business processes, including creation, capture, classification, retention, and disposition. For long-lived holdings, the OAIS reference model (ISO 14721) supplies the preservation vocabulary: ingest, archival storage, data management, access, dissemination, and the Archival Information Package (AIP) that bundles content with the metadata needed to keep it usable for its designated community."
    },
    {
      "kind": "paragraph",
      "text": "On the compliance side (named factually, not as advice or guarantee):"
    },
    {
      "kind": "list",
      "items": [
        "HIPAA Security Rule (45 CFR Part 160 and Subparts A and C of Part 164) requires covered entities and business associates to implement administrative, physical, and technical safeguards protecting the confidentiality, integrity, and availability of ePHI. Technical safeguards described by HHS include access controls, audit controls, and transmission security.",
        "HIPAA documentation retention (45 CFR 164.316(b)(2)) requires that the Security Rule's required documentation be retained for six years from the date of creation or the date it was last in effect, whichever is later. This governs HIPAA policies, procedures, and related documentation — not a general retention period for the medical records themselves, which is set by other authorities (for example, state law or CMS requirements).",
        "A 2025 HIPAA Security Rule Notice of Proposed Rulemaking to strengthen cybersecurity for ePHI was published in the Federal Register on January 6, 2025 (HHS). As of this writing it remains a proposal; its provisions are not described here as final requirements."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The federal-records regime (NARA, 36 CFR Part 1236) is not health-specific, but it is a well-documented, primary-source example of digitization-quality and metadata discipline that private health archives frequently mirror."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Retrieval speed and access. Indexed, full-text-searchable records replace physical retrieval from off-site storage.",
        "Space and media-risk reduction. Digitization removes dependence on deteriorating paper and film and on physical storage footprint.",
        "Concurrent, controlled access. Multiple authorized users can view a record simultaneously under access controls and audit logging, aligned with HIPAA Security Rule technical safeguards.",
        "Integration with EHRs. Captured documents can be filed into the correct patient chart, complementing structured EHR data — relevant given near-universal U.S. hospital EHR adoption (ONC).",
        "Preservation. Archival formats (PDF/A) and OAIS-aligned practices support long-term readability and integrity.",
        "Records discipline. Managing captured documents as records (ISO 15489) supports authenticity and integrity — the qualities that make a record trustworthy as evidence of care."
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
        "Handwriting recognition is unreliable. Free-text clinical handwriting resists accurate automated recognition; extracted text may require human verification and should not be assumed error-free.",
        "Recognition is not understanding. OCR and ICR produce characters, not validated clinical meaning; downstream use of extracted values needs quality controls.",
        "Patient-matching errors are high-stakes. Misindexing a page to the wrong patient is a serious failure mode; robust QC and validation are essential.",
        "Format and media obsolescence. Without active preservation, files and the software to read them can become inaccessible over time — the core problem OAIS addresses.",
        "Cost and disruption. High-volume, high-quality capture with strong QC is labor- and equipment-intensive.",
        "Legal status of digitized copies. Whether a digitized copy may replace and permit destruction of the paper original depends on applicable retention rules and organizational policy — a legal and records determination, not a technical one. Federal practice shows this is handled by explicit rulemaking (for example, NARA's standards permitting disposal of source records only when digitization requirements are met)."
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
        "Set quality targets before scanning. Resolution, color, and format decisions are hard to reverse; federal practice pegs minimums to documented aim points (FADGI/ISO) — a defensible model to emulate.",
        "Design the metadata schema deliberately. Retrieval and preservation both depend on capturing the right fields at ingest (cf. 36 CFR 1236.54; OAIS AIP metadata).",
        "Build QC in, not after. Sampling, reference targets, completeness checks, and patient-linkage validation belong at defined stages of the workflow.",
        "Choose archival formats. PDF/A (ISO 19005) is the common choice for long-term readability with an embedded searchable text layer.",
        "Apply security controls throughout. Access control, audit logging, and transmission security are named HIPAA Security Rule technical safeguards for ePHI; they apply during capture, storage, and access.",
        "Separate the two retention questions. (1) How long the medical records must be kept (state law and program requirements) and (2) how long HIPAA's required documentation must be kept (six years, 45 CFR 164.316(b)(2)). They are governed differently.",
        "Plan preservation, not just storage. Integrity checking and periodic format migration keep an archive usable over decades (OAIS).",
        "Document the process. Recorded procedures and QC results support the authenticity and integrity of the archive as a record set (ISO 15489)."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Paper has not disappeared from healthcare even as EHRs became near-universal (ONC reports certified-EHR adoption at 99.4% of non-federal acute care hospitals by 2024). Referrals, outside records, consents, and correspondence still arrive on paper or by fax, so ongoing capture — not just one-time back-file conversion — remains a live operational need. Recognition technology continues to improve, particularly for machine-printed text and structured forms, but automated handwriting interpretation of clinical narrative remains difficult in practice, keeping human QC in the loop. Meanwhile, the regulatory environment continues to evolve: the January 6, 2025 HIPAA Security Rule proposed rulemaking signals continued federal attention to safeguarding ePHI. The durable challenge is less about scanning and more about managing and preserving the resulting records with authenticity, integrity, and appropriate protection over their full retention life."
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
          "period": "2002",
          "text": "OAIS approved as a CCSDS recommendation (CCSDS 650.0-B-1)."
        },
        {
          "period": "2003",
          "text": "OAIS first published as an ISO standard (ISO 14721:2003)."
        },
        {
          "period": "2004",
          "text": "Office of the National Coordinator for Health IT (ONC) created by Executive Order 13335 (ONC/HealthIT)."
        },
        {
          "period": "2008",
          "text": "\"Basic\" EHR adoption among non-federal acute care hospitals reported at fewer than 10% (ONC data brief)."
        },
        {
          "period": "2009",
          "text": "HITECH Act enacted; established the EHR incentive (\"meaningful use\") program and made ONC permanent in law (ONC; CMS)."
        },
        {
          "period": "2012",
          "text": "Second edition of OAIS published (ISO 14721:2012)."
        },
        {
          "period": "2016",
          "text": "ISO 15489-1:2016 (records management — concepts and principles) published (ISO)."
        },
        {
          "period": "2018",
          "text": "\"Basic\" EHR adoption among non-federal acute care hospitals reported at about 99% (ONC data brief)."
        },
        {
          "period": "May 4, 2023",
          "text": "NARA final rule on \"Digitizing Permanent Records and Reviewing Records Schedules\" published in the Federal Register (adding 36 CFR Part 1236, Subpart E)."
        },
        {
          "period": "June 30, 2024",
          "text": "Date after which NARA states it will accept transfers of permanent and temporary records only in electronic format with appropriate metadata (NARA/OMB guidance)."
        },
        {
          "period": "2024",
          "text": "Certified-EHR adoption among non-federal acute care hospitals reported at 99.4% (ONC data brief)."
        },
        {
          "period": "January 6, 2025",
          "text": "HIPAA Security Rule Notice of Proposed Rulemaking to strengthen cybersecurity of ePHI published in the Federal Register (HHS)."
        },
        {
          "period": "2025",
          "text": "Current edition of OAIS published (ISO 14721:2025)."
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
      "slug": "ocr-for-healthcare"
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
      "slug": "legal-document-archives"
    },
    {
      "section": "workflows",
      "slug": "records-compliance"
    },
    {
      "section": "tools",
      "slug": "pdf-a"
    }
  ],
  "sources": [
    {
      "title": "The Security Rule",
      "url": "https://www.hhs.gov/hipaa/for-professionals/security/index.html",
      "publisher": "U.S. Department of Health & Human Services"
    },
    {
      "title": "HIPAA Security Rule NPRM to Strengthen Cybersecurity for ePHI (fact sheet)",
      "url": "https://www.hhs.gov/hipaa/for-professionals/security/hipaa-security-rule-nprm/factsheet/index.html",
      "publisher": "U.S. Department of Health & Human Services"
    },
    {
      "title": "HIPAA Security Rule To Strengthen the Cybersecurity of Electronic Protected Health Information (proposed rule)",
      "url": "https://www.federalregister.gov/documents/2025/01/06/2024-30983/hipaa-security-rule-to-strengthen-the-cybersecurity-of-electronic-protected-health-information",
      "publisher": "Federal Register / HHS"
    },
    {
      "title": "45 CFR 164.316 — Policies and procedures and documentation requirements",
      "url": "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-C/section-164.316",
      "publisher": "Electronic Code of Federal Regulations"
    },
    {
      "title": "36 CFR Part 1236 Subpart E — Digitizing Permanent Federal Records",
      "url": "https://www.ecfr.gov/current/title-36/chapter-XII/subchapter-B/part-1236/subpart-E",
      "publisher": "Electronic Code of Federal Regulations"
    },
    {
      "title": "Federal Records Management: Digitizing Permanent Records and Reviewing Records Schedules (final rule)",
      "url": "https://www.federalregister.gov/documents/2023/05/04/2023-09050/federal-records-management-digitizing-permanent-records-and-reviewing-records-schedules",
      "publisher": "Federal Register / NARA"
    },
    {
      "title": "Non-Federal Acute Care Hospital Electronic Health Record Adoption, 2008–2024",
      "url": "https://www.healthit.gov/data/data-briefs/non-federal-acute-care-hospital-electronic-health-record-adoption-2008-2024/",
      "publisher": "ONC / HealthIT.gov"
    },
    {
      "title": "CMS and ONC Final Regulations Define Meaningful Use",
      "url": "https://www.cms.gov/newsroom/fact-sheets/cms-and-onc-final-regulations-define-meaningful-use-and-set-standards-electronic-health-record",
      "publisher": "Centers for Medicare & Medicaid Services"
    },
    {
      "title": "ISO 15489-1:2016 — Records management — Concepts and principles",
      "url": "https://www.iso.org/standard/62542.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "ISO 14721:2012 — Open archival information system (OAIS) — Reference model",
      "url": "https://www.iso.org/standard/57284.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "ISO 14721:2025 — Reference model for an OAIS",
      "url": "https://www.iso.org/standard/87471.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "ISO 14721:2003 — Open archival information system (OAIS) — Reference model (first ISO edition)",
      "url": "https://www.iso.org/standard/24683.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "ISO 19005-3:2012 — Document management — PDF/A-3",
      "url": "https://www.iso.org/standard/57229.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "PDF/A family (format description)",
      "url": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000318.shtml",
      "publisher": "Library of Congress"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "medical record archives",
    "clinical document capture",
    "health records digitization",
    "hipaa security rule",
    "iso 15489",
    "oais iso 14721",
    "pdf/a",
    "ocr healthcare",
    "ehr paper conversion",
    "records retention"
  ],
  "cluster": "enterprise-capture",
  "goal": "The disciplined conversion of clinical records into managed, indexed, and preserved digital objects.",
  "toolsUsed": [
    "A document scanner",
    "An EHR or document management system"
  ]
};

export default entry;
