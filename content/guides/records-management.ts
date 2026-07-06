import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "records-management",
  "title": "Records management",
  "description": "Records management is the systematic control of records from creation to disposition, governed by standards such as ISO 15489 and NARA schedules.",
  "summary": "Records management is the discipline that governs an organization's records throughout their existence — from creation or receipt, through active use and maintenance, to disposition by destruction or transfer to an archive. Within enterprise document capture it is the governance layer that determines which captured documents become controlled records, how they are classified, how long they are retained, and how they are lawfully destroyed or preserved. The field is anchored by the international standard ISO 15489-1 (first published 2001, revised 2016) and, in U.S. federal practice, by the Federal Records Act framework and NARA oversight.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Records management is the discipline concerned with the systematic control of an organization's records throughout their existence — from creation or receipt, through active use and maintenance, to eventual disposition (destruction or permanent preservation). In U.S. federal practice it covers \"the managerial activities involved with respect to records creation, records maintenance and use, and records disposition\" in order to achieve adequate documentation of an organization's policies and transactions and the effective, economical management of its operations (NARA glossary; Federal Records Act tradition)."
    },
    {
      "kind": "paragraph",
      "text": "A record is distinguished from ordinary information or documents by its evidential role. Under U.S. law, records are \"all recorded information, regardless of form or characteristics, made or received by a Federal agency ... in connection with the transaction of public business and preserved or appropriate for preservation ... as evidence of the organization, functions, policies, decisions, procedures, operations, or other activities\" of the agency, or because of the informational value of the data (44 U.S.C. § 3301). The international standard ISO 15489-1 frames records as authoritative evidence of business events or transactions."
    },
    {
      "kind": "paragraph",
      "text": "Within an enterprise document-capture context, records management is the governance layer that determines which captured documents become controlled records, how they are classified, how long they are kept, and when and how they are lawfully destroyed or transferred to an archive. It sits downstream of capture and scanning and upstream of long-term archival preservation."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History and origin"
    },
    {
      "kind": "paragraph",
      "text": "Records management grew out of twentieth-century government and corporate needs to control the volume of paper records and to identify which held enduring value. In the United States, the field is anchored in the Federal Records Act framework (44 U.S.C. Chapters 29, 31, 33) and the oversight role of the National Archives and Records Administration (NARA)."
    },
    {
      "kind": "paragraph",
      "text": "Two conceptual models shaped the discipline:"
    },
    {
      "kind": "list",
      "items": [
        "The records life-cycle model, which treats records as passing through discrete sequential stages (creation → maintenance and use → disposition). This model underpins NARA's approach.",
        "The records continuum model, developed in the 1990s at Monash University in Australia, principally associated with Frank Upward and with contributions from Sue McKemmish, Barbara Reed and others. Upward's \"Structuring the Records Continuum\" (Part One, 1996, Archives and Manuscripts) reframed recordkeeping as a set of overlapping, non-linear dimensions rather than sequential stages. Continuum thinking influenced the Australian Standard AS 4390, which in turn fed into the first international standard."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The first international standard devoted specifically to records management, ISO 15489-1, was published in 2001 (drawing on AS 4390). Part 1 was revised and reissued as ISO 15489-1:2016. The standard is maintained by ISO technical committee ISO/TC 46/SC 11 (Archives/records management)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What it is"
    },
    {
      "kind": "paragraph",
      "text": "Records management is a governance and operational function comprising:"
    },
    {
      "kind": "list",
      "items": [
        "Policy and responsibility — documented rules and assigned accountabilities for how records are created, captured and managed.",
        "Classification — organizing records according to the business functions and activities that generate them (a classification scheme or \"file plan\").",
        "Retention scheduling — deciding, in advance, how long each category of record is kept and what happens at the end of that period.",
        "Disposition — the controlled destruction of records no longer needed, or their transfer to an archive for permanent preservation.",
        "Metadata and controls — capturing the contextual data that keeps records findable, understandable and trustworthy over time."
      ]
    },
    {
      "kind": "paragraph",
      "text": "ISO 15489-1:2016 identifies four characteristics that authoritative records should possess:"
    },
    {
      "kind": "list",
      "items": [
        "Authenticity — the record is what it purports to be, created or sent by the purported agent, at the purported time.",
        "Reliability — the record's content can be trusted as a full and accurate representation of the transactions it documents.",
        "Integrity — the record is complete and unaltered, protected against unauthorized change.",
        "Usability — the record can be located, retrieved, presented and interpreted."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "The classic records life cycle (NARA) proceeds in three stages:"
    },
    {
      "kind": "paragraph",
      "text": "1. Creation / receipt — a record comes into existence or is received. In digital environments this is where document capture (scanning, ingestion, generation) occurs. 2. Maintenance and use — the record is classified, stored, secured, retrieved and used to conduct business; access controls and metadata are applied. 3. Disposition — when the record is no longer needed for current business, it is either destroyed or transferred to an archive, according to an approved retention schedule."
    },
    {
      "kind": "paragraph",
      "text": "Retention schedules operationalize disposition. In NARA's federal model, an approved records schedule is a legally binding instrument that identifies records and gives disposition instructions with three components:"
    },
    {
      "kind": "list",
      "items": [
        "Disposition type — whether records are permanent (transferred to the National Archives for preservation) or temporary (destroyed after a set period).",
        "Cutoff instruction — the point at which the retention or transfer clock starts. Cutoffs may be age-based (from creation or receipt date) or event-based (for example, case closure).",
        "Retention or transfer period — how long temporary records are kept before destruction, or how long an agency holds permanent records before transferring them to the archive."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Classification assigns records to categories, typically by business function or activity, so that consistent retention rules, access permissions and metadata can be applied to whole classes rather than individual items."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture and components"
    },
    {
      "kind": "paragraph",
      "text": "A records management program or system typically comprises:"
    },
    {
      "kind": "list",
      "items": [
        "Classification scheme / file plan — the functional taxonomy under which records are filed.",
        "Retention and disposition authority — the rules governing how long records are kept and their end-of-life action.",
        "Metadata schema — structured contextual data (identity, provenance, dates, business context, access rights, disposition status) that supports authenticity, findability and integrity.",
        "Access and permission rules — who may see, use or alter records.",
        "Audit trail / recordkeeping metadata — logs of actions performed on records to support integrity and accountability.",
        "Records system — the software or manual system that applies these controls. ISO 15489-1:2016 notes that systems for managing records, regardless of degree of automation, enable the application of records controls and the execution of records processes."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The three core records processes in ISO 15489-1:2016 are creating, capturing, and managing records (the last encompassing classification, access control, storage and disposition)."
    },
    {
      "kind": "paragraph",
      "text": "Related standards provide finer-grained architecture:"
    },
    {
      "kind": "list",
      "items": [
        "ISO 30300 / 30301 / 30302 — the management-system standards for records. ISO 30300:2020 is the vocabulary anchor (\"Records management — Core concepts and vocabulary\"), while ISO 30301:2019 (Requirements) and ISO 30302:2022 (Guidelines for implementation) carry the \"Management systems for records\" framework, structured analogously to other ISO management-system standards.",
        "ISO 16175 — \"Processes and functional requirements for software for managing records\" (2nd edition, 2020), bridging high-level principles to system implementation."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to scanning and OCR"
    },
    {
      "kind": "paragraph",
      "text": "Scanning (imaging) and OCR are capture technologies that feed the records management life cycle at its first stage. Scanning converts a physical document into a digital image; OCR (optical character recognition) extracts machine-readable text from that image, enabling indexing, full-text search and metadata extraction."
    },
    {
      "kind": "paragraph",
      "text": "Records management determines what happens after capture: whether a scanned image is declared a record, how it is classified, what metadata must accompany it, and how long it is retained. A scanned image without governing metadata and a retention rule is a digitized document but not yet a managed record. Where organizations wish to destroy paper originals after scanning (\"scan-and-toss\"), the resulting digital record's authenticity and integrity — two of the ISO 15489 characteristics — become the governing concern, and jurisdiction-specific rules on the legal admissibility of digitized records apply. Such rules are named here factually; this page gives no legal advice."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and preservation formats"
    },
    {
      "kind": "paragraph",
      "text": "Records management is generally format-neutral at the principle level — ISO 15489 applies to records in any format or medium — but format choice materially affects the usability and integrity characteristics over long retention periods."
    },
    {
      "kind": "paragraph",
      "text": "PDF, and in particular the ISO-standardized archival subset PDF/A (ISO 19005), is widely adopted for records with long or permanent retention because it constrains the format toward self-containment and reproducibility (embedded fonts, restrictions on features that impede long-term rendering). Records with permanent disposition — destined for archival transfer — raise preservation-format questions most acutely, because the record must remain readable and authentic long after the originating software is gone. Preservation practice therefore intersects records management at the disposition stage, where format normalization and preservation metadata are applied."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to records management and compliance"
    },
    {
      "kind": "paragraph",
      "text": "Records management is itself the compliance discipline for recordkeeping. It provides the demonstrable, rule-based control that lets an organization meet statutory and regulatory recordkeeping obligations and produce trustworthy evidence."
    },
    {
      "kind": "paragraph",
      "text": "Key relationships:"
    },
    {
      "kind": "list",
      "items": [
        "Legal and regulatory obligations — statutes and regulations impose recordkeeping and retention duties. In the U.S. federal sphere these include the Federal Records Act (44 U.S.C.) and NARA regulations at 36 CFR Chapter XII, Subchapter B. These are named factually; organizations should consult counsel for their specific obligations.",
        "Evidence and accountability — the four ISO 15489 characteristics (authenticity, reliability, integrity, usability) are precisely what make records defensible as evidence.",
        "Disposition as compliance, not just cleanup — authorized, documented destruction under an approved schedule is a compliance act; both over-retention and ad hoc destruction carry risk.",
        "Standards ecosystem — ISO 15489 (principles), the ISO 30300 series (management system), and ISO 16175 (system requirements) collectively support auditable, consistent programs."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to archives and long-term preservation"
    },
    {
      "kind": "paragraph",
      "text": "Records management and archives sit on a continuum. In the life-cycle view, records with enduring (permanent) value are transferred to an archive at the end of their active retention, while temporary records are destroyed. In the continuum view (Upward), there is no sharp boundary — active recordkeeping and archival management are dimensions of one process."
    },
    {
      "kind": "paragraph",
      "text": "Digital archival preservation is governed by the Open Archival Information System (OAIS) reference model, ISO 14721, which defines archival functions (ingest, archival storage, data management, access, preservation planning, administration) and information packages (Submission, Archival and Dissemination Information Packages). Preservation metadata standards — notably PREMIS, maintained by the Library of Congress — and descriptive standards such as Dublin Core support the long-term integrity and usability that records management identifies as essential. The disposition action \"transfer to archive\" is thus the handoff from the records management domain to the OAIS and preservation domain."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Legal and regulatory defensibility — records kept and destroyed under documented schedules provide auditable compliance and trustworthy evidence.",
        "Risk reduction — controlled, authorized disposition reduces the liability and cost of retaining records past their useful or required life, and consistent controls reduce the risk of loss or tampering.",
        "Efficiency and cost control — classification and scheduling reduce storage volume and improve retrieval.",
        "Trustworthy evidence — the authenticity, reliability, integrity and usability framework yields records that stand as reliable evidence of business activity.",
        "Institutional memory and accountability — permanent records preserve the documented history of decisions and functions."
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
        "Program overhead — classification schemes, schedules and metadata require sustained effort and expertise to build and maintain.",
        "Model tension — the linear life-cycle model can fit awkwardly with distributed, constantly updated digital records, which motivated the continuum model; neither model is universally adopted.",
        "Format and technology obsolescence — long retention periods expose records to the risk that formats or systems become unreadable, requiring ongoing preservation action.",
        "Compliance is jurisdiction-specific — retention requirements and rules on destroying paper after scanning vary by jurisdiction and subject matter; a single schedule rarely fits all obligations.",
        "Human dependence — accurate classification and timely disposition often depend on user behavior; auto-classification helps but is imperfect."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Records management remains central as organizations manage large volumes of born-digital and digitized content across email, collaboration platforms, line-of-business systems and cloud storage. The 2016 revision of ISO 15489-1 was modernized for digital environments, emphasizing records controls — metadata, classification, access, disposition — that can be applied in highly automated or distributed systems. The ISO 30300 series adds a management-system framework aligned with other ISO management standards, and ISO 16175 addresses requirements for the software that creates and manages digital records. Retention scheduling, defensible disposition, and the four authoritative-record characteristics continue to govern how enterprises turn captured documents into trustworthy, compliant records — and how they hand permanent records to OAIS-conformant archives for long-term preservation."
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
          "period": "1996",
          "text": "Frank Upward publishes \"Structuring the Records Continuum, Part One\" (Archives and Manuscripts), articulating the records continuum model at Monash University, Australia."
        },
        {
          "period": "2001",
          "text": "ISO 15489 first published: ISO 15489-1:2001 (Part 1, General) and ISO/TR 15489-2:2001 (Part 2, Guidelines, a Technical Report, since withdrawn)."
        },
        {
          "period": "2011",
          "text": "ISO 30300 (Management systems for records — Fundamentals and vocabulary) first published."
        },
        {
          "period": "2012",
          "text": "ISO 14721:2012 (OAIS Reference Model, 2nd edition) published."
        },
        {
          "period": "2016",
          "text": "ISO 15489-1:2016 published, revising and replacing the 2001 Part 1 (Concepts and principles)."
        },
        {
          "period": "2019",
          "text": "ISO 30301:2019 (Management systems for records — Requirements, 2nd edition)."
        },
        {
          "period": "2020",
          "text": "ISO 30300:2020 (Records management — Core concepts and vocabulary, 2nd edition) and ISO 16175-1:2020 (Processes and functional requirements for software for managing records)."
        },
        {
          "period": "2022",
          "text": "ISO 30302:2022 (Guidelines for implementation)."
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
      "slug": "digital-preservation"
    },
    {
      "section": "workflows",
      "slug": "records-compliance"
    },
    {
      "section": "guides",
      "slug": "document-indexing"
    },
    {
      "section": "workflows",
      "slug": "legal-document-archives"
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
      "q": "What is the difference between a document and a record?",
      "a": "A record is distinguished by its evidential role. Under U.S. law (44 U.S.C. § 3301), records are recorded information made or received in the transaction of business and preserved as evidence of an organization's functions, decisions and activities. ISO 15489-1 frames records as authoritative evidence of business events or transactions. A captured document without governing metadata and a retention rule is a digitized document but not yet a managed record."
    },
    {
      "q": "Which standards govern records management?",
      "a": "The principal international standard is ISO 15489-1 (first published 2001, revised as ISO 15489-1:2016), maintained by ISO/TC 46/SC 11. It is complemented by the ISO 30300 series of management-system standards (ISO 30300:2020, 30301:2019, 30302:2022) and by ISO 16175 for software managing digital records. In U.S. federal practice, the Federal Records Act (44 U.S.C.) and NARA regulations (36 CFR Chapter XII) apply."
    },
    {
      "q": "What are the four characteristics of an authoritative record?",
      "a": "ISO 15489-1:2016 identifies authenticity (the record is what it purports to be), reliability (its content is a full and accurate representation of the transaction), integrity (it is complete and unaltered), and usability (it can be located, retrieved, presented and interpreted)."
    },
    {
      "q": "What is a retention schedule?",
      "a": "A retention schedule sets, in advance, how long each category of record is kept and what happens at the end of that period. In NARA's federal model, an approved records schedule is a legally binding instrument giving disposition instructions with three components: disposition type (permanent or temporary), a cutoff instruction (age-based or event-based), and a retention or transfer period."
    }
  ],
  "sources": [
    {
      "title": "ISO 15489-1:2016 — Records management — Part 1: Concepts and principles",
      "url": "https://www.iso.org/standard/62542.html",
      "publisher": "ISO"
    },
    {
      "title": "Records management in the digital age (2016 news)",
      "url": "https://www.iso.org/news/2016/04/Ref2072.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO/TC 46/SC 11 — Archives/records management committee",
      "url": "https://committee.iso.org/home/tc46sc11",
      "publisher": "ISO"
    },
    {
      "title": "ISO/TR 15489-2:2001 (withdrawn)",
      "url": "https://www.iso.org/standard/35845.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 30300:2020 — Records management — Core concepts and vocabulary",
      "url": "https://www.iso.org/standard/74291.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 16175-1:2020 — Processes and functional requirements for software for managing records",
      "url": "https://www.iso.org/standard/74294.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 14721:2012 — Open Archival Information System (OAIS) reference model",
      "url": "https://www.iso.org/standard/57284.html",
      "publisher": "ISO"
    },
    {
      "title": "Scheduling Records",
      "url": "https://www.archives.gov/records-mgmt/scheduling/sch-records",
      "publisher": "U.S. National Archives (NARA)"
    },
    {
      "title": "NARA Records Schedule",
      "url": "https://www.archives.gov/about/records-schedule",
      "publisher": "U.S. National Archives (NARA)"
    },
    {
      "title": "Records Management Key Terms and Acronyms (glossary)",
      "url": "https://www.archives.gov/files/records-mgmt/rm-glossary-of-terms.pdf",
      "publisher": "U.S. National Archives (NARA)"
    },
    {
      "title": "44 U.S. Code § 3301 — Definition of records",
      "url": "https://www.law.cornell.edu/uscode/text/44/3301",
      "publisher": "Legal Information Institute, Cornell Law School"
    },
    {
      "title": "36 CFR Part 1225 — Scheduling Records",
      "url": "https://www.ecfr.gov/current/title-36/chapter-XII/subchapter-B/part-1225",
      "publisher": "eCFR, U.S. Government"
    },
    {
      "title": "Structuring the records continuum, part one (Upward, 1996)",
      "url": "https://bridges.monash.edu/articles/journal_contribution/4037445",
      "publisher": "Monash University / Archives and Manuscripts"
    },
    {
      "title": "Records continuum",
      "url": "https://dictionary.archivists.org/entry/records-continuum.html",
      "publisher": "Society of American Archivists"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "records management",
    "iso 15489",
    "records life cycle",
    "records continuum",
    "retention schedule",
    "disposition",
    "nara",
    "records classification",
    "recordkeeping metadata",
    "authenticity reliability integrity usability",
    "iso 30300",
    "records compliance"
  ],
  "cluster": "enterprise-capture",
  "difficulty": "intermediate",
  "estimatedTime": "10 min read"
};

export default entry;
