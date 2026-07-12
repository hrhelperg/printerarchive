import type { WorkflowEntry } from "@/lib/content/types";

const entry: WorkflowEntry = {
  "section": "workflows",
  "slug": "records-compliance",
  "title": "Records Compliance",
  "description": "How organizations retain, protect, retrieve, and dispose of captured records under standards like ISO 15489 and regulations like SEC Rule 17a-4.",
  "summary": "Records compliance is the layer of legal, regulatory, and policy requirements that governs how records created or captured by an organization — increasingly through enterprise document-capture and archiving systems — must be retained, protected, retrieved, and disposed of. It sits on top of the technical act of scanning, indexing, and storing documents, governing how long a record is kept, how its integrity and authenticity are preserved, who may access or alter it, and when it may be destroyed. The international baseline is ISO 15489-1:2016, which defines authoritative records by four characteristics — authenticity, reliability, integrity, and usability — while sector regulation such as SEC Rule 17a-4 and frameworks like NARA disposition authority and FRCP 37(e) make specific practices enforceable. This page is descriptive and vendor-neutral; it names regulations and standards factually and is not legal advice.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "\"Records compliance\" refers to the practices, controls, and governance by which an organization ensures that the records it creates or captures — increasingly through enterprise document-capture and archiving systems — are retained, protected, retrievable, and disposed of in accordance with the laws, regulations, and internal policies that apply to it. In the document-capture context, compliance is the layer of requirements that sits on top of the technical act of scanning, indexing, and storing documents: it governs how long a captured record must be kept, how its integrity and authenticity must be preserved, who may access or alter it, and when and how it may be destroyed."
    },
    {
      "kind": "paragraph",
      "text": "The concepts are defined largely by records-management standards and by sector-specific regulation, not by any single capture technology. The international baseline standard is ISO 15489-1:2016, Information and documentation — Records management — Part 1: Concepts and principles, which defines a record as \"information created, received and maintained as evidence and as an asset by an organization or person, in pursuit of legal obligations or in the transaction of business,\" and states that authoritative records must possess four characteristics: authenticity, reliability, integrity, and usability (ISO 15489-1:2016). Regulatory regimes such as the U.S. Securities and Exchange Commission's Rule 17a-4 add binding, sector-specific requirements on top of these general principles."
    },
    {
      "kind": "paragraph",
      "text": "This page is descriptive and vendor-neutral. It names regulations and standards factually; it is not legal advice and does not assert that any product or practice guarantees compliance."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Records compliance operates as a set of interlocking controls applied to captured content across its lifecycle:"
    },
    {
      "kind": "list",
      "items": [
        "Retention schedules define, by record type (\"series\"), how long a record must be kept before it may be destroyed or transferred to permanent archive. In the U.S. federal context, NARA describes these as \"disposition instructions\" that state whether a records series is \"permanent\" or \"temporary\" and how long it must be retained; the approved periods are mandatory (National Archives).",
        "Legal holds (litigation holds) suspend normal disposition when litigation is pending or reasonably anticipated, because a duty to preserve relevant information attaches. Failure to take reasonable steps to preserve electronically stored information (ESI) can lead to sanctions under Federal Rule of Civil Procedure 37(e) (Legal Information Institute).",
        "Audit trails record who accessed a system and what operations were performed, providing a chronological reconstruction of activity. NIST defines an audit trail as \"a record showing who has accessed an Information Technology (IT) system and what operations the user has performed during a given period\" (NIST CSRC Glossary).",
        "Chain of custody documents the handling of a record or item of evidence over time — each custodian, transfer, date/time, and purpose — so its integrity can be demonstrated. NIST describes it as \"a process that tracks the movement of evidence through its collection, safeguarding, and analysis lifecycle\" (NIST CSRC Glossary)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Together these controls let an organization demonstrate that a captured document is what it claims to be, has not been improperly altered, has been kept for the required period, and can be produced when required."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Step by step (conceptual, vendor-neutral)"
    },
    {
      "kind": "paragraph",
      "text": "1. Classify the captured document against a records classification scheme or file plan, identifying the record series and applicable retention rule. 2. Assign metadata at capture — creation/receipt date, author or source, record type, and the retention/disposition rule — because retention and integrity controls depend on accurate metadata. 3. Fix the content so the authoritative version is protected against undocumented change (for example, via non-rewriteable storage or via a system that logs and can reconstruct every modification and deletion). 4. Apply the retention schedule, calculating a disposition date or event trigger for each record. 5. Maintain audit trails and chain of custody for access, modification, transfer, and disposition events throughout the retention period. 6. Apply legal holds when a preservation duty arises, overriding scheduled destruction for affected records until the hold is lifted. 7. Execute disposition at end of retention — secure destruction of temporary records or transfer of permanent records to an archive — and document that the disposition occurred."
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
        "Source documents: paper scanned to image, born-digital files (email, office documents, PDFs), and system-generated records.",
        "A records classification scheme / file plan and an approved retention (disposition) schedule.",
        "Applicable legal, regulatory, and policy requirements.",
        "Metadata captured at ingest (dates, source, record type)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Outputs"
    },
    {
      "kind": "list",
      "items": [
        "Stored, classified records with associated retention and disposition metadata.",
        "Audit-trail logs of access and change.",
        "Chain-of-custody documentation for transfers.",
        "Disposition records (evidence of destruction or transfer).",
        "On demand, records reproduced in a usable, human-readable form for regulators, auditors, or litigation."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to OCR and searchable PDF"
    },
    {
      "kind": "paragraph",
      "text": "Optical character recognition (OCR) converts document images into machine-encoded text, and \"searchable PDF\" typically denotes a PDF that stores the page image together with a hidden OCR text layer. These are enabling technologies for records compliance rather than compliance controls in themselves: they make captured content retrievable and reviewable, which supports the usability characteristic in ISO 15489-1:2016 (a record must be locatable, retrievable, and interpretable) and supports the practical ability to search for and produce responsive records during discovery or audit."
    },
    {
      "kind": "paragraph",
      "text": "However, OCR does not by itself satisfy retention, integrity, audit-trail, or disposition requirements, and OCR accuracy is imperfect — recognition errors can affect whether a specific record is found in a search. From a compliance standpoint, the authoritative record and its integrity controls (not the OCR text layer) are what must be preserved; the searchable layer is an aid to access. Where a record's evidential integrity matters, the fixity of the stored object and its audit trail govern, independent of whether a text layer exists."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to records management and compliance"
    },
    {
      "kind": "paragraph",
      "text": "Records compliance is the intersection of records management (the discipline) and the external obligations that make certain records-management practices mandatory. ISO 15489-1:2016 supplies the general framework — records controls, retention rules in the form of disposition authorities, and the four characteristics of authoritative records. Sector regulation makes specific practices enforceable:"
    },
    {
      "kind": "list",
      "items": [
        "SEC Rule 17a-4 (Securities Exchange Act of 1934) sets recordkeeping and retention requirements for broker-dealers. Historically it required electronic records to be preserved exclusively in a non-rewriteable, non-erasable (\"write once, read many,\" or WORM) format. Amendments adopted in Release No. 34-96034 (2022) retained WORM as an option and added an audit-trail alternative: an electronic recordkeeping system may instead maintain a complete, time-stamped audit trail that records all modifications and deletions, the date and time of actions that create/modify/delete a record, and (where applicable) the identity of the person taking the action, permitting recreation of an original record if it is modified or deleted. Rule 17a-4 also requires records to be preserved for required periods, with the two most recent years readily accessible, and to be reproducible in a human-readable and reasonably usable form (U.S. SEC; Federal Register 2022-22670). The compliance date for the amendments was May 3, 2023 (U.S. SEC, Release 34-96034).",
        "NARA disposition authority governs U.S. federal agency records: retention periods are mandatory and agencies must dispose of records after the approved period, per schedules issued under 36 CFR Part 1225 (National Archives; eCFR).",
        "FRCP 37(e) links records practices to litigation risk by addressing loss of ESI that should have been preserved (Legal Information Institute)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "For long-term digital preservation, the OAIS reference model (ISO 14721) provides a functional model — ingest, archival storage, data management, access, and dissemination — for archives that accept responsibility to preserve information and make it available to a designated community (ISO 14721:2025)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Demonstrable evidential value. Audit trails and chain-of-custody documentation let an organization show a record's authenticity and integrity, aligning with ISO 15489-1:2016's characteristics.",
        "Defensible disposition. A documented, consistently applied retention schedule supports destroying records that are no longer required, reducing storage and risk, while retaining what must be kept (NARA disposition model).",
        "Regulatory readiness. Systems built to named requirements (e.g., SEC 17a-4's WORM or audit-trail options) can produce records in the required form and timeframe.",
        "Litigation preparedness. Reliable retention plus a working legal-hold capability supports the duty to preserve and reduces spoliation exposure under FRCP 37(e).",
        "Retrievability. Metadata, OCR, and search make required records locatable for audits and discovery."
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
        "Standards are not self-executing. ISO 15489 and OAIS describe principles and functions; they do not, by themselves, make an organization compliant with any specific law.",
        "No technology guarantees compliance. WORM storage, audit trails, and capture software support requirements but do not substitute for correct policy, classification, and execution. This page makes no compliance guarantee.",
        "Retention rules are jurisdiction- and sector-specific. Periods and formats vary by regulator and record type; there is no universal retention period.",
        "OCR and metadata errors can impair retrievability, meaning a required record may not surface in a search.",
        "Legal holds can conflict with scheduled destruction, and a hold that fails to reach all relevant systems leaves preservation gaps.",
        "Format obsolescence threatens long-term usability; preservation may require migration, a concern OAIS explicitly addresses."
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
        "Map record types to retention rules before configuring capture, so disposition metadata is assigned at ingest rather than retrofitted.",
        "Decide the integrity model deliberately — for regulated financial records, this may mean choosing between WORM and an audit-trail-based approach as permitted under the amended SEC Rule 17a-4.",
        "Ensure legal hold overrides disposition reliably across every repository that may hold responsive ESI.",
        "Preserve audit trails and chain-of-custody data for at least as long as the records they describe, and protect them from alteration.",
        "Plan for reproduction: confirm records can be produced in a human-readable, reasonably usable form within any regulator-specified timeframe.",
        "Plan for the long term: for records with extended or permanent retention, consider preservation strategies (format migration, fixity checks) consistent with the OAIS functional model.",
        "Consult qualified counsel or compliance professionals for the specific obligations that apply — this is a general reference, not legal advice."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Enterprise content is now overwhelmingly born-digital and captured at high volume, which makes automated retention, audit logging, and legal-hold enforcement central rather than optional. Regulatory frameworks have adapted: the SEC's 2022 amendments to Rule 17a-4 explicitly recognized an audit-trail alternative to WORM, reflecting a shift from media-based immutability toward system-level, log-based reconstructability (Federal Register 2022-22670). The 2015 amendment to FRCP 37(e) reframed sanctions for lost ESI around \"reasonable steps\" to preserve and intent, raising the practical importance of demonstrable, well-run retention and hold processes (Legal Information Institute). For long-lived digital records, the OAIS model — updated to a third edition published by ISO in January 2025 — remains the reference framework for durable preservation (ISO 14721:2025)."
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
          "period": "2003",
          "text": "ISO 14721 (OAIS reference model) first published as an ISO standard, derived from CCSDS 650.0 (approved as CCSDS 650.0-B-1 in January 2002)."
        },
        {
          "period": "2012",
          "text": "ISO 14721 second edition published."
        },
        {
          "period": "2015 (December 1)",
          "text": "Amended Federal Rule of Civil Procedure 37(e) took effect, addressing failure to preserve ESI (Legal Information Institute)."
        },
        {
          "period": "2016",
          "text": "ISO 15489-1:2016 (Concepts and principles) published, revising the earlier edition."
        },
        {
          "period": "2022 (November 3)",
          "text": "SEC amendments to electronic recordkeeping requirements (Release No. 34-96034), adding the audit-trail alternative to WORM, published in the Federal Register (Federal Register 2022-22670)."
        },
        {
          "period": "2023 (May 3)",
          "text": "Compliance date for the Rule 17a-4 amendments for broker-dealers (U.S. SEC, Release 34-96034)."
        },
        {
          "period": "2024 (December) / 2025 (January)",
          "text": "OAIS version 3 published by CCSDS (December 2024) and by ISO as ISO 14721:2025 (January 2025)."
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
      "slug": "records-management"
    },
    {
      "section": "workflows",
      "slug": "legal-document-archives"
    },
    {
      "section": "guides",
      "slug": "digital-preservation"
    },
    {
      "section": "guides",
      "slug": "enterprise-document-capture"
    },
    {
      "section": "guides",
      "slug": "capture-metadata"
    },
    {
      "section": "workflows",
      "slug": "government-records-archives"
    }
  ],
  "faqs": [
    {
      "q": "What is records compliance?",
      "a": "Records compliance is the set of practices, controls, and governance ensuring that records an organization creates or captures are retained, protected, retrievable, and disposed of in accordance with the laws, regulations, and internal policies that apply to it. In document-capture systems it governs how long a captured record is kept, how its integrity and authenticity are preserved, who may access or alter it, and when and how it may be destroyed."
    },
    {
      "q": "Which standard defines the characteristics of an authoritative record?",
      "a": "ISO 15489-1:2016, Information and documentation — Records management — Part 1: Concepts and principles, states that authoritative records must possess four characteristics: authenticity, reliability, integrity, and usability."
    },
    {
      "q": "Does SEC Rule 17a-4 still require WORM storage?",
      "a": "Amendments adopted in Release No. 34-96034 (2022) retained WORM as an option but added an audit-trail alternative: a recordkeeping system may instead maintain a complete, time-stamped audit trail recording all modifications and deletions, permitting recreation of an original record. The compliance date was May 3, 2023."
    },
    {
      "q": "Does OCR or a searchable PDF make records compliant?",
      "a": "No. OCR and searchable PDFs are enabling technologies that support the usability characteristic and make records easier to find and produce, but they do not by themselves satisfy retention, integrity, audit-trail, or disposition requirements. The authoritative record and its integrity controls are what must be preserved."
    },
    {
      "q": "What happens if records subject to litigation are destroyed?",
      "a": "When litigation is pending or reasonably anticipated, a legal hold should suspend normal disposition because a duty to preserve relevant information attaches. Failure to take reasonable steps to preserve electronically stored information can lead to sanctions under Federal Rule of Civil Procedure 37(e)."
    }
  ],
  "sources": [
    {
      "title": "ISO 15489-1:2016 — Records management — Part 1: Concepts and principles",
      "url": "https://www.iso.org/standard/62542.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "Amendments to Electronic Recordkeeping Requirements for Broker-Dealers",
      "url": "https://www.sec.gov/investment/amendments-electronic-recordkeeping-requirements-broker-dealers",
      "publisher": "U.S. Securities and Exchange Commission"
    },
    {
      "title": "Final Rule: Electronic Recordkeeping Requirements for Broker-Dealers (Release No. 34-96034)",
      "url": "https://www.sec.gov/files/rules/final/2022/34-96034.pdf",
      "publisher": "U.S. Securities and Exchange Commission"
    },
    {
      "title": "Electronic Recordkeeping Requirements for Broker-Dealers (Federal Register doc 2022-22670)",
      "url": "https://www.federalregister.gov/documents/2022/11/03/2022-22670/electronic-recordkeeping-requirements-for-broker-dealers-security-based-swap-dealers-and-major",
      "publisher": "U.S. Federal Register"
    },
    {
      "title": "SEA Rule 17a-4 and Related Interpretations",
      "url": "https://www.finra.org/rules-guidance/guidance/interpretations-financial-operational-rules/sea-rule-17a-4-and-related-interpretations",
      "publisher": "FINRA"
    },
    {
      "title": "Rule 37. Failure to Make Disclosures or to Cooperate in Discovery; Sanctions (FRCP 37, incl. 37(e))",
      "url": "https://www.law.cornell.edu/rules/frcp/rule_37",
      "publisher": "Legal Information Institute, Cornell Law School"
    },
    {
      "title": "36 CFR Part 1225 — Scheduling Records",
      "url": "https://www.ecfr.gov/current/title-36/chapter-XII/subchapter-B/part-1225",
      "publisher": "Electronic Code of Federal Regulations"
    },
    {
      "title": "ISO 14721:2025 — Reference model for an open archival information system (OAIS)",
      "url": "https://www.iso.org/standard/87471.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "OAIS Standards Process and Version History",
      "url": "http://www.oais.info/standards-process/",
      "publisher": "oais.info"
    },
    {
      "title": "Audit trail — Glossary",
      "url": "https://csrc.nist.gov/glossary/term/audit_trail",
      "publisher": "NIST Computer Security Resource Center"
    },
    {
      "title": "Chain of custody — Glossary",
      "url": "https://csrc.nist.gov/glossary/term/chain_of_custody",
      "publisher": "NIST Computer Security Resource Center"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "records compliance",
    "records management",
    "retention schedule",
    "legal hold",
    "litigation hold",
    "audit trail",
    "chain of custody",
    "iso 15489",
    "sec rule 17a-4",
    "worm storage",
    "disposition",
    "frcp 37(e)"
  ],
  "cluster": "enterprise-capture",
  "goal": "Governance and controls ensuring captured records are retained, protected, retrievable, and properly disposed of.",
  "toolsUsed": [
    "A records management system",
    "A documented retention policy"
  ]
};

export default entry;
