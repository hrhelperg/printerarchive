import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "digital-preservation",
  "title": "Digital Preservation",
  "description": "Digital preservation: OAIS (ISO 14721), fixity, preservation formats like PDF/A, and active format management that keep digital records usable long-term.",
  "summary": "Digital preservation is the set of managed activities, policies, and technical strategies required to keep digital information usable — locatable, renderable, and authentic — across long periods, despite the obsolescence of hardware, software, and file formats. It is distinct from backup, which guards against short-term data loss; preservation additionally addresses format obsolescence, media decay, loss of contextual metadata, and shifts in the knowledge of the community expected to use the material. The field's central reference framework is the Open Archival Information System (OAIS) reference model, standardized as ISO 14721. Practice couples that conceptual model with concrete measures: preservation-oriented file formats such as PDF/A and TIFF, fixity mechanisms (checksums and cryptographic hashes) to detect bit-level corruption, redundant managed storage, and active format management over time through migration, normalization, and, less commonly, emulation. Major institutional practitioners include national libraries and archives such as the Library of Congress and the U.S. National Archives and Records Administration, alongside non-governmental web archives such as the Internet Archive.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Digital preservation is the set of managed activities, policies, and technical strategies required to keep digital information usable — locatable, renderable, and authentic — across long periods, despite the obsolescence of the hardware, software, and file formats on which that information depends. It is distinct from ordinary backup: backup guards against short-term data loss, whereas digital preservation additionally addresses format obsolescence, media decay, loss of contextual metadata, and the changing knowledge of the community expected to use the material."
    },
    {
      "kind": "paragraph",
      "text": "The field's central reference framework is the Open Archival Information System (OAIS) reference model, standardized as ISO 14721. Preservation practice couples that conceptual model with concrete measures: preservation-oriented file formats (for documents, notably PDF/A and TIFF), fixity mechanisms (checksums and cryptographic hashes) to detect bit-level corruption, and active format management over time (migration, normalization, and, less commonly, emulation). Major institutional practitioners include national libraries and archives — for example, the Library of Congress and the U.S. National Archives and Records Administration (NARA) — and non-governmental web archives such as the Internet Archive."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History and origin"
    },
    {
      "kind": "paragraph",
      "text": "The concept of preserving records is ancient, but digital preservation emerged as a distinct discipline in the 1990s, when it became clear that digital storage media degrade, that file formats and the software to read them fall out of use, and that born-digital and digitized content could disappear without deliberate stewardship."
    },
    {
      "kind": "paragraph",
      "text": "A defining milestone was the development of the OAIS reference model by the Consultative Committee for Space Data Systems (CCSDS), an international body originally concerned with the long-term stewardship of space-mission data. The OAIS model was issued as a CCSDS Recommended Practice (Blue Book, CCSDS 650.0-B-1, approved in 2002) and then adopted as an international standard, ISO 14721:2003. It was revised as ISO 14721:2012 and again as ISO 14721:2025; the current CCSDS text (650.0-M-3, a Magenta Book) is identical to ISO 14721:2025. A companion audit-and-certification standard for trustworthy digital repositories, ISO 16363:2012 (\"Audit and certification of trustworthy digital repositories\"), expanded on the earlier TRAC criteria and defines how a repository's OAIS conformance can be assessed."
    },
    {
      "kind": "paragraph",
      "text": "In parallel, web archiving began in 1996 when Brewster Kahle founded the Internet Archive, which developed the ARC container format for storing web crawls; its successor, WARC, was later standardized as ISO 28500 (first edition ISO 28500:2009, second edition ISO 28500:2017). For document preservation specifically, the PDF/A archival format family was introduced beginning with ISO 19005-1:2005."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What it is"
    },
    {
      "kind": "paragraph",
      "text": "Digital preservation is the active, ongoing management of digital objects so that they remain:"
    },
    {
      "kind": "list",
      "items": [
        "Available — the bitstream survives on functioning storage and can be retrieved.",
        "Renderable / usable — software and format knowledge exist to open and interpret the object as intended.",
        "Authentic and reliable — the object is provably unchanged (or its changes are documented), and its provenance is recorded.",
        "Understandable — sufficient contextual and technical metadata accompany the object so a future user can make sense of it."
      ]
    },
    {
      "kind": "paragraph",
      "text": "OAIS frames this around a Designated Community: the identified group of consumers who should be able to understand the preserved information, given their assumed knowledge base. Preservation is judged relative to that community, not in the abstract."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "In practice, digital preservation combines several recurring activities:"
    },
    {
      "kind": "list",
      "items": [
        "Ingest and normalization. Content is received, validated, characterized (format identification and technical metadata extraction), and often normalized — converted on input to a small set of well-supported preservation formats. Preemptive migration on ingest is commonly termed normalization.",
        "Fixity generation and monitoring. A cryptographic checksum (hash) is computed at ingest and stored. Fixity is the assurance that a file has remained unchanged. Periodic re-computation and comparison detects corruption or bit rot; because even a one-bit change yields a completely different hash, checksums act as digital fingerprints. They confirm that a file changed but not where.",
        "Redundant, managed storage. Multiple copies, ideally geographically and technologically diverse, guard against media failure and disaster.",
        "Active format management. Formats are monitored for obsolescence risk; at-risk content is migrated to current formats, with new fixity values recorded after each transformation.",
        "Preservation metadata. Provenance, technical characteristics, rights, and every preservation action or event are recorded — commonly using the PREMIS data dictionary and descriptive standards such as Dublin Core, packaged in structures like METS and BagIt."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Common hash algorithms include MD5 (fast, adequate for detecting accidental corruption), SHA-1, and SHA-256 (stronger against deliberate tampering, relevant where legal or evidential weight matters). Verification cadences vary by medium, reflecting a trade-off between early detection and system load."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture and components"
    },
    {
      "kind": "paragraph",
      "text": "The OAIS reference model defines six functional entities:"
    },
    {
      "kind": "paragraph",
      "text": "1. Ingest — receives submissions, validates them, and generates Archival Information Packages. 2. Archival Storage — stores, maintains, and retrieves the preserved packages; handles media refresh and internal migration. 3. Data Management — maintains descriptive metadata and the databases and indexes supporting discovery and administration. 4. Administration — day-to-day operations, agreements, and policy. 5. Preservation Planning — monitors the environment (formats, technology, the Designated Community) and recommends preservation actions to keep content accessible. 6. Access — supports discovery and delivery to consumers."
    },
    {
      "kind": "paragraph",
      "text": "OAIS also defines three information package types:"
    },
    {
      "kind": "list",
      "items": [
        "SIP (Submission Information Package) — what a Producer delivers to the archive.",
        "AIP (Archival Information Package) — what the archive stores for the long term.",
        "DIP (Dissemination Information Package) — what is delivered to a Consumer."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Additionally, OAIS enumerates a set of mandatory responsibilities an organization must discharge to be an OAIS — including negotiating for and accepting appropriate information from Producers, obtaining sufficient control to preserve it, determining the Designated Community, ensuring the information is independently understandable to that community, following documented preservation policies, and making the preserved information available."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to scanning and OCR"
    },
    {
      "kind": "paragraph",
      "text": "Digitization (scanning) is frequently the source of preservation material: paper and analog records are captured as digital images. Preservation practice then governs what happens next — which formats the scans are stored in, what technical and descriptive metadata are captured, and how integrity is maintained thereafter. Scanning alone does not constitute preservation; an unmanaged folder of TIFFs or PDFs is not a preserved collection."
    },
    {
      "kind": "paragraph",
      "text": "Optical character recognition (OCR) adds a searchable and extractable text layer to scanned images. For preservation this matters in two ways. First, OCR output enables discovery and reuse and can support accessibility. Second, format choices interact with OCR — for example, PDF/A conformance level A requires tagging, defined reading order, and Unicode character mappings (supporting accessibility and reliable text extraction), while level U guarantees Unicode text mappings for searchability without full structural tagging, and level B guarantees only faithful visual reproduction. OCR text and its accuracy are themselves candidates for preservation metadata, since OCR is imperfect and may be re-run with better engines later."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and preservation formats"
    },
    {
      "kind": "paragraph",
      "text": "PDF is a widely used document format, but not every PDF is suitable for archiving: features such as external font references, embedded multimedia, JavaScript, and encryption can compromise future renderability. The PDF/A family (ISO 19005) constrains PDF to a self-contained, device-independent subset intended for long-term preservation — for example, requiring the embedding of all fonts and prohibiting features (such as encryption) that would impair reliable future rendering."
    },
    {
      "kind": "paragraph",
      "text": "The PDF/A parts are:"
    },
    {
      "kind": "list",
      "items": [
        "PDF/A-1 — ISO 19005-1:2005, based on PDF 1.4; conformance levels a and b.",
        "PDF/A-2 — ISO 19005-2:2011, based on PDF 1.7; conformance levels a, b, u.",
        "PDF/A-3 — ISO 19005-3:2012, based on PDF 1.7; levels a, b, u; differs from PDF/A-2 mainly in permitting arbitrary (non-PDF/A) file attachments.",
        "PDF/A-4 — ISO 19005-4:2020, based on PDF 2.0; the a/b/u level scheme is replaced, with variants such as PDF/A-4f for arbitrary embedded files and PDF/A-4e aimed at engineering and 3D use (superseding the earlier PDF/E)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "TIFF is another long-established, widely used raster preservation format; it stores high-fidelity raster images. Compared with TIFF, PDF/A can represent structured content (text and vector graphics) alongside images, embed metadata, and is generally more storage-efficient. Format choice depends on content type and institutional policy; neither is universally \"best.\" Format-suitability judgments are commonly made against the Library of Congress sustainability factors and against institutional risk frameworks such as NARA's."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to records management and compliance"
    },
    {
      "kind": "paragraph",
      "text": "Digital preservation overlaps with, but is broader than, records management. Records management (addressed by standards such as ISO 15489) governs the creation, classification, retention, and disposition of records for as long as they have business or legal value; digital preservation supplies the technical means to keep records — and other digital content — usable and authentic across the retention period and, for permanent records, indefinitely."
    },
    {
      "kind": "paragraph",
      "text": "The two intersect strongly where authenticity and evidential value matter. Fixity and provenance metadata (for example, PREMIS event records) support the demonstration that a record has not been altered — relevant where legal admissibility or auditability is required. National archives make this explicit: NARA requires that files transferred for permanent preservation have recorded fixities to support auditing, and publishes file-format transfer guidance identifying sustainable formats for permanent records, backed by its Digital Preservation Framework (a risk matrix plus preservation action plans) covering hundreds of file-format versions."
    },
    {
      "kind": "paragraph",
      "text": "This page names regulations and standards factually and does not provide legal advice; specific compliance obligations depend on jurisdiction and content type and should be assessed with qualified counsel."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Longevity against obsolescence. A managed program keeps content usable as formats, software, and media change — something passive storage cannot guarantee.",
        "Integrity assurance. Fixity checking detects silent corruption and supports authenticity claims.",
        "Interoperability and reuse. Standardized formats and metadata (OAIS packaging, PREMIS, Dublin Core) make content portable across systems and institutions.",
        "Accountability and auditability. Recorded provenance and preservation events support trust, certification (ISO 16363), and, where relevant, evidential or compliance needs.",
        "A shared conceptual vocabulary. OAIS gives practitioners common terms (SIP/AIP/DIP, Designated Community, the six functional entities) that improve system design and cross-institutional collaboration."
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
        "Ongoing cost and effort. Preservation is continuous, not a one-time act; storage, staffing, and repeated migration carry recurring costs.",
        "Fixity's limits. Checksums detect that a file changed but not where or why, and do not by themselves repair damage; recovery still depends on redundant copies.",
        "Migration risk. Each format migration can lose \"significant properties\" (layout, behavior, embedded functionality) of the original object.",
        "Emulation's burden. Emulation preserves the original look and feel but requires maintaining or recreating historical software and hardware environments and navigating their licensing and complexity; it is less widely adopted than migration.",
        "Metadata dependence. Preservation is only as good as the accompanying metadata; sparse or inaccurate metadata undermines future understandability.",
        "Format and community judgment calls. Assessing a format's sustainability, or defining a Designated Community, involves judgment and can date as technology and audiences change."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Digital preservation has grown from a specialist concern into infrastructure-scale practice. Web archiving at the Internet Archive and national libraries stores content at large scale using WARC (ISO 28500). Government archives have moved preservation into cloud-based systems — for example, NARA's ERA 2.0 entered production in 2018 — and maintain public, machine-readable format-risk frameworks. The Library of Congress maintains an openly accessible Sustainability of Digital Formats resource and a periodically updated Recommended Formats Statement."
    },
    {
      "kind": "paragraph",
      "text": "Continuing pressures — the volume and heterogeneity of born-digital content, complex and proprietary formats, and the fragility of online content — keep the discipline central to libraries, archives, research data management, and enterprise records governance alike."
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
          "text": "Internet Archive founded by Brewster Kahle; web archiving begins (ARC container format)."
        },
        {
          "period": "2002",
          "text": "OAIS issued as a CCSDS Recommended Practice (CCSDS 650.0-B-1, Blue Book)."
        },
        {
          "period": "2003",
          "text": "OAIS adopted as ISO 14721:2003."
        },
        {
          "period": "2005",
          "text": "PDF/A-1 published as ISO 19005-1:2005 (based on PDF 1.4)."
        },
        {
          "period": "2009",
          "text": "WARC standardized as ISO 28500 (first edition; revised 2017)."
        },
        {
          "period": "2011",
          "text": "PDF/A-2 published as ISO 19005-2:2011 (based on PDF 1.7)."
        },
        {
          "period": "2012",
          "text": "OAIS revised as ISO 14721:2012; ISO 16363:2012 (audit and certification of trustworthy digital repositories) published; PDF/A-3 published as ISO 19005-3:2012."
        },
        {
          "period": "2018",
          "text": "NARA's cloud-based ERA 2.0 preservation system enters production."
        },
        {
          "period": "2020",
          "text": "PDF/A-4 published as ISO 19005-4:2020 (based on PDF 2.0)."
        },
        {
          "period": "2025",
          "text": "OAIS revised as ISO 14721:2025 (identical to CCSDS 650.0-M-3)."
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
      "section": "tools",
      "slug": "pdf-a"
    },
    {
      "section": "guides",
      "slug": "microfilm-digitization"
    },
    {
      "section": "workflows",
      "slug": "ocr-for-archives"
    },
    {
      "section": "guides",
      "slug": "records-management"
    },
    {
      "section": "tools",
      "slug": "tiff"
    },
    {
      "section": "guides",
      "slug": "capture-metadata"
    }
  ],
  "faqs": [
    {
      "q": "How is digital preservation different from backup?",
      "a": "Backup guards against short-term data loss and hardware failure. Digital preservation goes further: it manages format obsolescence, media decay, loss of contextual metadata, and the changing knowledge of the community expected to use the material, so content stays renderable and authentic over the long term."
    },
    {
      "q": "What is the OAIS reference model?",
      "a": "The Open Archival Information System (OAIS) reference model, standardized as ISO 14721, is the field's central conceptual framework. It defines six functional entities (Ingest, Archival Storage, Data Management, Administration, Preservation Planning, Access), three information package types (SIP, AIP, DIP), the notion of a Designated Community, and a set of mandatory responsibilities."
    },
    {
      "q": "What is fixity, and why does it matter?",
      "a": "Fixity is the assurance that a file has remained unchanged. A cryptographic checksum (hash) is computed at ingest and periodically re-computed; because even a one-bit change yields a completely different hash, checksums act as digital fingerprints. They confirm that a file changed but not where, and they do not repair damage — recovery still depends on redundant copies."
    },
    {
      "q": "Is PDF/A required for digital preservation?",
      "a": "No. PDF/A (ISO 19005) is a self-contained, device-independent PDF subset well suited to document preservation, but format choice depends on content type and institutional policy. TIFF is another long-established raster preservation format, and format suitability is commonly assessed against frameworks such as the Library of Congress sustainability factors. Neither format is universally best."
    }
  ],
  "sources": [
    {
      "title": "OAIS Reference Model (ISO 14721:2025)",
      "url": "https://www.iso.org/standard/87471.html",
      "publisher": "ISO"
    },
    {
      "title": "Open archival information system (OAIS) — Reference model (ISO 14721:2012)",
      "url": "https://www.iso.org/standard/57284.html",
      "publisher": "ISO"
    },
    {
      "title": "Open archival information system — Reference model (ISO 14721:2003)",
      "url": "https://www.iso.org/standard/24683.html",
      "publisher": "ISO"
    },
    {
      "title": "Reference Model for an Open Archival Information System (OAIS), CCSDS 650.0-M-3",
      "url": "https://ccsds.org/Pubs/650x0m3.pdf",
      "publisher": "CCSDS"
    },
    {
      "title": "OAIS standards process (version and CCSDS/ISO mapping)",
      "url": "http://www.oais.info/standards-process/",
      "publisher": "oais.info"
    },
    {
      "title": "Audit and certification of trustworthy digital repositories (ISO 16363:2012)",
      "url": "https://www.iso.org/standard/56510.html",
      "publisher": "ISO"
    },
    {
      "title": "WARC file format (ISO 28500:2009)",
      "url": "https://www.iso.org/standard/44717.html",
      "publisher": "ISO"
    },
    {
      "title": "WARC file format, 2nd edition (ISO 28500:2017)",
      "url": "https://www.iso.org/standard/68004.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 19005-4 / PDF/A-4",
      "url": "https://pdfa.org/resource/iso-19005-4-pdf-a-4/",
      "publisher": "PDF Association"
    },
    {
      "title": "The PDF/A Standards",
      "url": "https://www.pdflib.com/pdf-knowledge-base/pdfa/the-pdfa-standards/",
      "publisher": "PDFlib"
    },
    {
      "title": "Sustainability of Digital Formats: Planning for Library of Congress Collections",
      "url": "https://www.loc.gov/preservation/digital/formats/",
      "publisher": "Library of Congress"
    },
    {
      "title": "Recommended Formats Statement 2025–2026",
      "url": "https://www.loc.gov/preservation/resources/rfs/RFS%202025-2026.pdf",
      "publisher": "Library of Congress"
    },
    {
      "title": "Fixity and checksums (Digital Preservation Handbook)",
      "url": "https://www.dpconline.org/handbook/technical-solutions-and-tools/fixity-and-checksums",
      "publisher": "Digital Preservation Coalition"
    },
    {
      "title": "Digital Preservation Framework for Risk Assessment and Preservation Planning",
      "url": "https://www.archives.gov/preservation/digital-preservation/risk",
      "publisher": "NARA"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "digital preservation",
    "oais",
    "iso 14721",
    "fixity",
    "checksum",
    "pdf/a",
    "preservation metadata",
    "premis",
    "archival information package",
    "format migration",
    "warc",
    "trustworthy digital repository"
  ],
  "cluster": "enterprise-capture",
  "modernTools": [
    "zip-rar"
  ],
  "difficulty": "advanced",
  "estimatedTime": "10 min read"
};

export default entry;
