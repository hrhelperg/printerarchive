import type { WorkflowEntry } from "@/lib/content/types";

const entry: WorkflowEntry = {
  "section": "workflows",
  "slug": "government-records-archives",
  "title": "Government Records Archives",
  "description": "How government records archives capture, preserve, and provide access to permanent public records under NARA rules, OAIS, FADGI, and ISO standards.",
  "summary": "Government records archives are the institutions, standards, and workflows that capture, preserve, and provide access to the permanent records of government bodies. In the United States this work is anchored by the National Archives and Records Administration (NARA), which appraises and preserves permanently valuable federal records, and the Library of Congress, which maintains national collections and publishes digital-preservation guidance. Archiving is a regulated activity: federal record disposition, including whether records may be destroyed after digitization, is governed by the Federal Records Act (Title 44, U.S. Code) and NARA regulations in Title 36 of the Code of Federal Regulations. Enterprise document capture in this context means digitizing paper and photographic records to archival-quality specifications, with the metadata, quality management, and validation needed to preserve them as legal and historical records. International frameworks — ISO 15489 for records management and ISO 14721 (the OAIS reference model) for digital preservation — provide the shared vocabulary national programs build on. This page describes the archiving lifecycle, the role of OCR, the compliance framework, and the measurable technical requirements the 2023 U.S. permanent-records rule introduced.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "\"Government records archives\" refers to the systems, standards, and public institutions responsible for capturing, preserving, and providing access to the permanent records of government bodies. In the United States this function is anchored by two federal institutions with distinct mandates: the National Archives and Records Administration (NARA), which appraises, schedules, preserves, and provides access to the permanently valuable records of the U.S. federal government, and the Library of Congress, which maintains national collections and publishes widely used technical guidance on digital preservation and sustainable file formats."
    },
    {
      "kind": "paragraph",
      "text": "Government archiving is a regulated activity, not merely a technical one. For U.S. federal agencies, the disposition of records — including whether they may be destroyed after digitization — is governed by statute (the Federal Records Act, codified in Title 44 of the U.S. Code) and by NARA regulations in Title 36 of the Code of Federal Regulations (36 CFR)."
    },
    {
      "kind": "paragraph",
      "text": "Enterprise document capture in this context is the digitization of paper and photographic records to create archival-quality digital surrogates, coupled with the metadata, quality management, and validation needed to preserve those surrogates as legal and historical records over the long term. It sits at the intersection of records management (governing what is kept, for how long, and by what authority) and digital preservation (governing how digital objects survive technological change). International frameworks — notably ISO 15489 for records management and ISO 14721 (the OAIS reference model) for digital preservation — provide vocabulary and structure that national programs build on."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Government records archiving operates as a lifecycle rather than a one-time scanning event:"
    },
    {
      "kind": "list",
      "items": [
        "Appraisal and scheduling. Records are evaluated to determine whether they are permanent (of enduring historical value, to be transferred to the archives) or temporary (to be destroyed after a defined retention period). In the U.S. federal system this appraisal is performed against a NARA-approved records schedule; NARA holds final authority over disposition decisions.",
        "Capture / digitization. Physical records are scanned to defined technical specifications (resolution, bit depth, color, file format) sufficient to serve as archival surrogates.",
        "Metadata creation. Administrative, descriptive, and technical metadata are captured to maintain intellectual and physical control and to document provenance.",
        "Quality management and validation. Images and metadata are inspected against documented criteria before the records are accepted as compliant.",
        "Preservation and transfer. Digital objects are packaged and either preserved in the agency's recordkeeping system or transferred to the archive for long-term preservation.",
        "Access. Permanent records become available to the public, subject to access law such as the Freedom of Information Act (FOIA) and any statutory restrictions."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The OAIS reference model (ISO 14721) describes this as a flow among a Producer, an OAIS archive, and a Consumer, mediated by three information packages — the Submission Information Package (SIP), Archival Information Package (AIP), and Dissemination Information Package (DIP) — and six functional entities: Ingest, Archival Storage, Data Management, Administration, Preservation Planning, and Access."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Step by step (conceptual, vendor-neutral)"
    },
    {
      "kind": "list",
      "items": [
        "Confirm disposition authority. Verify that the records are covered by an approved records schedule (an agency schedule or a General Records Schedule). Under U.S. law, records may not be destroyed without approved disposition authority (44 U.S.C. § 3314).",
        "Plan and document the project. Establish the technical targets, workflow, and documentation the regulation or institutional policy requires (36 CFR 1236.44 requires documenting digitization projects for permanent records).",
        "Prepare the physical materials. Sort, unbind where appropriate, and organize source records; identify mixed-media files (records spanning more than one medium) so components stay associated.",
        "Digitize to specification. Scan at the defined resolution, bit depth, and color mode; do not upsample or transcode in ways that degrade fidelity.",
        "Capture metadata. Record the required administrative, descriptive, and technical fields — including distinct dates for when the source became a record versus when the digital image was created.",
        "Run quality management. Apply documented inspection and sampling procedures; measure image performance against objective aim points where required.",
        "Validate and certify compliance. Confirm images and metadata meet the standard before accepting the digital record as the record copy.",
        "Preserve or transfer. Store or transfer the digital records in an approved format; where a schedule authorizes it, dispose of the source records only after validation.",
        "Provide access. Make records available consistent with access and privacy law."
      ]
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
        "Physical source records: paper (textual), photographic prints and negatives, maps, oversized documents, and mixed-media files.",
        "A NARA-approved (or institutionally approved) records schedule defining disposition.",
        "Technical specifications and quality criteria.",
        "Existing descriptive information (file titles, dates, series/context)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Outputs"
    },
    {
      "kind": "list",
      "items": [
        "Archival-quality digital image files in approved formats (e.g., TIFF, JPEG 2000, PNG, PDF/A).",
        "Administrative, descriptive, and technical metadata, captured in a recordkeeping system and/or embedded in files.",
        "Documentation of the digitization project and quality management results.",
        "For OAIS-based systems: SIPs, AIPs, and DIPs.",
        "Optionally, the authority to destroy source records once digital surrogates are validated and a schedule permits."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to OCR and searchable PDF"
    },
    {
      "kind": "paragraph",
      "text": "Optical character recognition (OCR) is a distinct step from archival image capture. The primary archival objective is a faithful, high-fidelity image surrogate that can serve as the record; OCR adds a searchable text layer derived from that image. In archival workflows, OCR-generated text is typically treated as an access and discovery aid rather than as the authoritative record, because OCR is imperfect and can introduce errors."
    },
    {
      "kind": "paragraph",
      "text": "Searchable PDF (and archival PDF/A, permitted as a file format under 36 CFR 1236.48) combines the preserved image with a text layer, supporting both preservation and retrieval. Because OCR accuracy depends on image quality, the resolution and clarity targets used for capture directly affect downstream text extraction — but the governing standards evaluate the image, not the OCR output."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to records management and compliance"
    },
    {
      "kind": "paragraph",
      "text": "Government archiving is inseparable from records management. A records schedule identifies records as permanent or temporary and provides mandatory disposition instructions — a designation, a cutoff instruction, and a retention or transfer period. For U.S. federal agencies:"
    },
    {
      "kind": "list",
      "items": [
        "Statutory basis: The Federal Records Act requires that records be scheduled and prohibits unauthorized destruction (44 U.S.C. §§ 3303, 3303a, 3314).",
        "Regulatory basis: 36 CFR Part 1225 governs scheduling; 36 CFR 1225.10 requires all federal records to have NARA-approved disposition authority.",
        "General Records Schedules (GRS): NARA-issued authorities covering records common across government; GRS 4.5 addresses digitizing records and the disposition of source records.",
        "Digitization standards: 36 CFR Part 1236 sets electronic records requirements, with Subpart D addressing temporary records, Subpart E addressing permanent records, and Subpart F addressing transfer of electronic records."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Internationally, ISO 15489 (Information and documentation — Records management, Part 1: Concepts and principles, 2016) provides the framework for creating, capturing, and managing records in any format. These frameworks name obligations factually; they are not, and this page does not provide, legal advice. Compliance determinations for any specific record are governed by the applicable statute, regulation, and the agency's approved schedule."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Preservation of at-risk originals. Digitization reduces handling of fragile physical records and can protect against loss from disaster or deterioration.",
        "Broader access. Digital surrogates enable remote and simultaneous access, supporting public-access mandates such as FOIA reading-room provisions.",
        "Space and handling efficiency. Where a schedule authorizes it, agencies may destroy validated source records after digitization, reducing physical storage burdens.",
        "Discoverability. Metadata and (where applied) OCR make records searchable.",
        "Standardization. Shared standards (FADGI, OAIS, PREMIS) enable interoperability and consistent quality across institutions."
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
        "Digitization does not by itself authorize destruction. Source records may be destroyed only when a records schedule permits and validation requirements are met.",
        "Standards are demanding and measurable. For permanent U.S. federal records the technical bar is objective; non-compliant digitized records may not qualify for source-record disposal, and NARA has issued specific guidance on non-compliant digitized records.",
        "Long-term preservation is ongoing. File formats and media age; sustained preservation requires format monitoring, migration, and fixity checks — not one-time capture.",
        "OCR is imperfect. Text layers can contain errors and are generally not authoritative.",
        "Scope boundaries. The U.S. permanent-records digitization regulation addresses paper and photographic print records (including such items within mixed-media files); it does not convert every possible medium, and born-digital components are handled through separate recordkeeping requirements.",
        "Cost and expertise. Meeting objective imaging aim points requires calibrated equipment, target-based measurement, and trained staff."
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
        "Verify disposition authority first. Confirm the schedule (agency or GRS) before planning capture, and confirm whether it authorizes source-record destruction after digitization.",
        "Match specifications to record type. Modern textual paper and photographic prints have different resolution and color requirements; capture to the correct table of requirements.",
        "Do not upsample or transcode destructively. The permanent-records rule prohibits interpolation (upsampling) and transcoding that would compromise fidelity for photographic records.",
        "Plan metadata capture early. Distinguish the record-creation date from the image-creation date; decide whether metadata will live in the recordkeeping system, be embedded in files, or both.",
        "Use objective quality measurement. FADGI provides measurable aim points (tone response, color accuracy in ΔE 2000, sharpening) and testing tools; institutional programs increasingly require a minimum star level.",
        "Preserve provenance and relationships. For mixed-media files, keep components associated using relation metadata.",
        "Plan for the full lifecycle. Budget for storage, fixity/integrity checking, format monitoring, and eventual migration — consistent with OAIS preservation planning.",
        "Address access and restriction. Provide access consistent with FOIA and any statutory restrictions or exemptions; archiving and access are separate obligations."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Selected technical specifics (U.S. permanent-records rule, 36 CFR Part 1236, Subpart E)"
    },
    {
      "kind": "paragraph",
      "text": "Subpart E is organized into sections: § 1236.40 (scope), § 1236.41 (definitions), § 1236.42 (records management requirements), § 1236.44 (documenting projects), § 1236.46 (quality management), § 1236.48 (file formats), § 1236.50 (requirements for paper and photographic print records), § 1236.52 (mixed-media records), § 1236.54 (metadata), and § 1236.56 (validating digitized records and disposition authorities)."
    },
    {
      "kind": "list",
      "items": [
        "Modern textual paper records (§ 1236.50): resolution ≥ 294 ppi (300 ppi − 2%); bit depth 8 or 16; color or grayscale; conforming to FADGI three-star aim points for \"Documents (Unbound): Modern Textual Records\" (e.g., tone response ± 5 ΔL*, average color accuracy ≤ 3.5 ΔE 2000).",
        "Photographic prints / fine-detail records (§ 1236.50): resolution ≥ 392 ppi (400 ppi − 2%); bit depth 8 or 16; conforming to the FADGI three-star \"Prints and Photographs\" category; no transcoding or upsampling in the workflow.",
        "File formats (§ 1236.48): TIFF 6.0 (uncompressed or Deflate/ZIP); JPEG 2000 Part 1 (ISO/IEC 15444-1:2019, lossless or visually lossless with testing); PNG 1.2 (Deflate/ZIP); PDF/A (with Deflate/ZIP or JPEG 2000).",
        "Metadata (§ 1236.54): required administrative, descriptive, and technical elements, including distinct \"Creation Date\" (when the source became a Federal record) and \"Date Time Created\" (when the image was made) fields; may be captured in a recordkeeping system, embedded in files, or both."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because the exact aim-point tables are detailed, the current eCFR should be consulted before quoting any figure operationally."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Government archiving has moved decisively toward digital and hybrid operation. U.S. federal policy now sets explicit standards for digitizing both temporary and permanent records, and — through the 2023 permanent-records rule — allows agencies to digitize permanent paper and photographic print records to a defined standard and, where a schedule authorizes, dispose of the source records."
    },
    {
      "kind": "paragraph",
      "text": "The FADGI Technical Guidelines for Digitizing Cultural Heritage Materials reached a Third Edition in May 2023 and are used by cultural-heritage institutions internationally. The OAIS reference model was updated to a third version (published by CCSDS in December 2024; ISO 14721:2025 published January 2025). The Library of Congress continues to update its Recommended Formats Statement (2025–2026 edition) and maintains the Sustainability of Digital Formats resource and the PREMIS preservation-metadata standard (Data Dictionary version 3.0)."
    },
    {
      "kind": "paragraph",
      "text": "Together these reflect an ongoing shift from digitization-as-imaging toward digitization-as-preservation, with measurable quality, structured metadata, and lifecycle management at the center."
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
          "period": "1966",
          "text": "The Freedom of Information Act (5 U.S.C. § 552) establishes a statutory right to request records from federal executive-branch agencies (subject to exemptions)."
        },
        {
          "period": "1996",
          "text": "The Electronic Freedom of Information Act (EFOIA) Amendments (Public Law 104-231) add electronic-access and electronic reading-room provisions to FOIA."
        },
        {
          "period": "2001",
          "text": "ISO 15489 (records management) first published as an international standard."
        },
        {
          "period": "2003",
          "text": "ISO 14721 (OAIS reference model) first published as an ISO standard."
        },
        {
          "period": "2005",
          "text": "The PREMIS Data Dictionary for preservation metadata is first released."
        },
        {
          "period": "2007",
          "text": "The Federal Agencies Digital Guidelines Initiative (FADGI) is formed as a collaborative federal group."
        },
        {
          "period": "2012",
          "text": "ISO 14721:2012 (updated OAIS) published."
        },
        {
          "period": "2016",
          "text": "ISO 15489-1:2016 (Concepts and principles) published."
        },
        {
          "period": "2023",
          "text": "NARA publishes the final rule establishing digitization standards for permanent records (36 CFR Part 1236, Subpart E), effective June 5, 2023; FADGI finalizes the Third Edition of its Technical Guidelines for Digitizing Cultural Heritage Materials (May 2023)."
        },
        {
          "period": "2024",
          "text": "OAIS version 3 published by CCSDS (December 2024)."
        },
        {
          "period": "2025",
          "text": "ISO 14721:2025 (OAIS version 3) published (January 2025); Library of Congress issues the 2025–2026 Recommended Formats Statement."
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
      "section": "guides",
      "slug": "records-management"
    },
    {
      "section": "workflows",
      "slug": "records-compliance"
    },
    {
      "section": "history",
      "slug": "enterprise-document-management"
    },
    {
      "section": "guides",
      "slug": "capture-metadata"
    },
    {
      "section": "guides",
      "slug": "microfilm-digitization"
    }
  ],
  "faqs": [
    {
      "q": "Does digitizing a government record allow the original paper to be destroyed?",
      "a": "Not by itself. Under U.S. federal rules, source records may be destroyed only when an approved records schedule (such as GRS 4.5) permits it and the digitized records have passed the required validation. Digitization alone does not create disposition authority."
    },
    {
      "q": "What is the difference between NARA and the Library of Congress in government archiving?",
      "a": "NARA appraises, schedules, preserves, and provides access to the permanently valuable records of the U.S. federal government and holds final authority over disposition. The Library of Congress maintains national collections and publishes digital-preservation guidance such as the Recommended Formats Statement and the PREMIS metadata standard."
    },
    {
      "q": "What file formats are approved for permanent U.S. federal records?",
      "a": "Under 36 CFR § 1236.48, approved formats include TIFF 6.0 (uncompressed or Deflate/ZIP), JPEG 2000 Part 1 (ISO/IEC 15444-1:2019), PNG 1.2, and PDF/A (with Deflate/ZIP or JPEG 2000)."
    },
    {
      "q": "Is OCR text treated as the official government record?",
      "a": "Generally no. The archival record is the faithful image surrogate; OCR adds a searchable text layer for discovery. Because OCR is imperfect and can introduce errors, the text is usually treated as an access aid rather than the authoritative record, and the governing standards evaluate the image, not the OCR output."
    },
    {
      "q": "What is the OAIS reference model?",
      "a": "OAIS (ISO 14721) is the reference model for digital preservation. It describes a flow among a Producer, an OAIS archive, and a Consumer using three information packages (SIP, AIP, DIP) and six functional entities: Ingest, Archival Storage, Data Management, Administration, Preservation Planning, and Access. CCSDS published version 3 in December 2024 and ISO 14721:2025 followed in January 2025."
    }
  ],
  "sources": [
    {
      "title": "Digitizing Permanent Federal Records — 36 CFR Part 1236, Subpart E (eCFR)",
      "url": "https://www.ecfr.gov/current/title-36/chapter-XII/subchapter-B/part-1236/subpart-E",
      "publisher": "National Archives and Records Administration"
    },
    {
      "title": "36 CFR § 1236.50 (LII mirror of eCFR)",
      "url": "https://www.law.cornell.edu/cfr/text/36/1236.50",
      "publisher": "Cornell Legal Information Institute"
    },
    {
      "title": "36 CFR § 1236.48 (LII mirror of eCFR)",
      "url": "https://www.law.cornell.edu/cfr/text/36/1236.48",
      "publisher": "Cornell Legal Information Institute"
    },
    {
      "title": "Final Rule: Digitizing Permanent Records and Reviewing Records Schedules (2023)",
      "url": "https://www.federalregister.gov/documents/2023/05/04/2023-09050/federal-records-management-digitizing-permanent-records-and-reviewing-records-schedules",
      "publisher": "Federal Register / NARA"
    },
    {
      "title": "Digitization of Federal Records",
      "url": "https://www.archives.gov/records-mgmt/policy/digitization",
      "publisher": "National Archives and Records Administration"
    },
    {
      "title": "36 CFR Part 1225 — Scheduling Records (eCFR)",
      "url": "https://www.ecfr.gov/current/title-36/chapter-XII/subchapter-B/part-1225",
      "publisher": "National Archives and Records Administration"
    },
    {
      "title": "FAQ about GRS 4.5, Digitizing Records",
      "url": "https://www.archives.gov/records-mgmt/grs/faqs-for-grs-4-5",
      "publisher": "National Archives and Records Administration"
    },
    {
      "title": "GRS 4.5 schedule (Transmittal 34)",
      "url": "https://www.archives.gov/files/records-mgmt/grs/grs04-5.pdf",
      "publisher": "National Archives and Records Administration"
    },
    {
      "title": "FAQ about Non-Compliant Permanent Digitized Records",
      "url": "https://www.archives.gov/records-mgmt/policy/non-compliant-digitized",
      "publisher": "National Archives and Records Administration"
    },
    {
      "title": "Federal Agencies Digital Guidelines Initiative (FADGI)",
      "url": "https://www.digitizationguidelines.gov/",
      "publisher": "FADGI / Library of Congress"
    },
    {
      "title": "3rd Edition of FADGI Still Image Digitization Guidelines Finalized",
      "url": "https://blogs.loc.gov/thesignal/2023/05/fadgi-third-edition-still-image/",
      "publisher": "Library of Congress, The Signal"
    },
    {
      "title": "The Freedom of Information Act, 5 U.S.C. § 552",
      "url": "https://www.justice.gov/oip/freedom-information-act-5-usc-552",
      "publisher": "U.S. Department of Justice, Office of Information Policy"
    },
    {
      "title": "FOIA Reference Guide",
      "url": "https://www.archives.gov/foia/foia-guide",
      "publisher": "National Archives and Records Administration"
    },
    {
      "title": "ISO 15489-1:2016 — Records management — Concepts and principles",
      "url": "https://www.iso.org/standard/62542.html",
      "publisher": "International Organization for Standardization"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "government records archives",
    "nara",
    "records management",
    "digital preservation",
    "oais",
    "iso 14721",
    "iso 15489",
    "fadgi",
    "36 cfr 1236",
    "permanent records digitization",
    "federal records act",
    "pdf/a"
  ],
  "cluster": "enterprise-capture",
  "goal": "The standards and institutions that capture, preserve, and provide access to government records.",
  "toolsUsed": [
    "A document scanner",
    "A records management / archival system"
  ]
};

export default entry;
