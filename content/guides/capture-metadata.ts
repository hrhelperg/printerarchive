import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "capture-metadata",
  "title": "Metadata for Captured Documents",
  "description": "How descriptive, administrative, technical, and preservation metadata make scanned and captured documents findable, manageable, and preservable.",
  "summary": "Metadata for captured documents is structured, machine-processable information about a scanned or born-digital object that makes it findable, interpretable, manageable, and preservable. In enterprise capture it is conventionally grouped by function: descriptive (title, creator, subject, date), administrative (management, provenance, rights), technical (resolution, format, color space, device), preservation (fixity, format identification, provenance of preservation actions), and structural (page order and component relationships). The 2017 NISO primer Understanding Metadata describes the widely used top-level split of descriptive, structural, and administrative metadata, with technical, preservation, and rights metadata treated as subsets of administrative metadata. Practice draws on community standards rather than a single mandatory schema: Dublin Core (ISO 15836) for descriptive elements, PREMIS (maintained by the U.S. Library of Congress) for preservation metadata, and XMP (ISO 16684) for embedding metadata inside files. In archival PDF workflows, the PDF/A family (ISO 19005) requires metadata to be embedded as an XMP stream, binding description to the document itself. Metadata is created at capture time (technical values recorded automatically), during indexing and classification (descriptive values added manually or via barcode, OCR, and classification), and at output, where it is either embedded in the file or held externally in a records system or information package.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "When a paper document is scanned or a born-digital file is captured into an enterprise system, the resulting image or file is only part of what must be retained. Metadata — structured information about the captured object — is what makes that object findable, interpretable, manageable, and preservable over time."
    },
    {
      "kind": "paragraph",
      "text": "In enterprise document capture, metadata is typically organized into functional categories: descriptive (who, what, subject, title), administrative (rights and management), technical (how the file was produced — resolution, format, device), preservation (what is needed to keep the object usable long term), and structural (how components relate). These categories are drawn from widely used community standards rather than a single mandatory schema."
    },
    {
      "kind": "paragraph",
      "text": "Three standards recur across capture, archiving, and preservation practice: Dublin Core (a small, general descriptive element set, standardized as ISO 15836), PREMIS (a preservation-metadata data dictionary maintained by the U.S. Library of Congress), and XMP (Adobe's Extensible Metadata Platform, standardized as ISO 16684, used to embed metadata directly inside files such as PDF). In archival PDF workflows, the PDF/A family (ISO 19005) requires that metadata be embedded as an XMP stream, giving capture programs a concrete, standards-conformant way to bind metadata to the document itself."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History and origin"
    },
    {
      "kind": "paragraph",
      "text": "Metadata as a discipline predates digital capture — libraries have described holdings with structured catalog records for well over a century. The cross-domain vocabulary that document-capture programs now draw on emerged in the 1990s and 2000s."
    },
    {
      "kind": "list",
      "items": [
        "Dublin Core originated at the first OCLC/NCSA Metadata Workshop, held in March 1995 in Dublin, Ohio — the source of the name. Its aim was a simple, general set of descriptive elements for networked resources. The fifteen-element core was later published as IETF RFC 2413 (1998), obsoleted by RFC 5013 (2007), and standardized as ISO 15836.",
        "XMP was introduced by Adobe in 2001 as a way to embed RDF-based metadata inside files. Adobe submitted the core to ISO, and it became ISO 16684-1 in 2012 (revised 2019).",
        "PREMIS grew out of an OCLC/RLG working group; its Data Dictionary for Preservation Metadata version 1.0 was released in 2005. Maintenance subsequently moved to the Library of Congress, and version 3.0 (June 2015) is the current release.",
        "PDF/A — the archival profile of PDF that mandates embedded XMP metadata — was first published as ISO 19005-1 in 2005."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What it is"
    },
    {
      "kind": "paragraph",
      "text": "Metadata for captured documents is structured, machine-processable data that describes an ingested object and supports finding, using, managing, and preserving it. The 2017 NISO primer Understanding Metadata (Jenn Riley) describes the widely used top-level split of descriptive, structural, and administrative metadata, with technical, preservation, and rights metadata treated as subsets of administrative metadata. Applied to a captured document:"
    },
    {
      "kind": "list",
      "items": [
        "Descriptive metadata identifies and describes content for discovery — title, author/creator, subject, date, document type, keywords. Dublin Core's fifteen elements (Contributor, Coverage, Creator, Date, Description, Format, Identifier, Language, Publisher, Relation, Rights, Source, Subject, Title, Type) are a common baseline.",
        "Administrative metadata supports management of the object, including provenance and control information.",
        "Technical metadata records how the digital object was produced and how it behaves: file format and version, scan resolution (e.g., DPI), bit depth, color space, compression, capture device, and page or image dimensions.",
        "Preservation metadata records what a repository needs to keep the object renderable and authentic over time — fixity (checksums), format identification, provenance of preservation actions, and rights affecting preservation. The Library of Congress describes PREMIS as the de facto standard here.",
        "Structural metadata expresses how components relate — page order, multi-page structure, and relationships between a document and its attachments."
      ]
    },
    {
      "kind": "paragraph",
      "text": "These categories overlap in practice: a checksum is both technical and preservation metadata; a rights statement is both descriptive (Dublin Core Rights) and administrative."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "In a capture workflow, metadata is created and applied at several points."
    },
    {
      "kind": "paragraph",
      "text": "1. At capture / scan time, the scanning device and software record technical metadata automatically (resolution, color mode, device, capture timestamp) and may attach descriptive values from batch settings or separator sheets. 2. During indexing / classification, descriptive metadata is added — manually by operators, or automatically via barcode reading, zonal recognition, full-text OCR, or classification models — and validated against controlled vocabularies or business rules. 3. On output / storage, metadata is serialized and bound to the object. Two binding strategies coexist: embedded metadata (written inside the file, e.g., an XMP packet in a PDF or TIFF) and external / associated metadata (held in a database, records system, or a sidecar or manifest such as METS or an OAIS information package)."
    },
    {
      "kind": "paragraph",
      "text": "XMP is among the most widely used embedding mechanisms. It stores metadata as an RDF/XML packet inside the file, organized into namespaced schemas — for example Dublin Core (dc), XMP Basic (xmp), Adobe PDF (pdf), and rights (xmpRights). Because XMP is namespace-based and RDF-modeled, existing schemas can be embedded and new ones added without redesigning the container format. External metadata, by contrast, is favored where it must be queried at scale, updated independently of the file, or governed by a records system."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture and components"
    },
    {
      "kind": "paragraph",
      "text": "A metadata architecture for captured documents typically comprises:"
    },
    {
      "kind": "list",
      "items": [
        "A metadata model / schema — the agreed set of elements and their semantics. Common building blocks: Dublin Core / DCMI Metadata Terms for descriptive elements (each term identified by a URI in the http://purl.org/dc/terms namespace); PREMIS for preservation entities; and format- or domain-specific technical schemas.",
        "Controlled vocabularies and identifiers — persistent identifiers, authority lists, and value constraints that keep metadata consistent and linkable.",
        "A serialization / encoding format — how metadata is written: XMP (RDF/XML) for embedding; XML wrappers such as METS or PREMIS-in-METS; or relational or graph storage in the capture or records system.",
        "Binding to the object — embedded (XMP in PDF, TIFF, JPEG) and/or associated (packaged with the object, as in an OAIS Archival Information Package)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Two reference models underpin preservation-oriented architectures. The PREMIS data model defines five entities — Intellectual Entities, Objects, Events, Agents, and Rights — that record what the object is, what actions (Events) were performed on it, by which Agents, under which Rights. The OAIS information model (ISO 14721) frames an object's Content Information together with Representation Information (what is needed to interpret the bits) and Preservation Description Information (PDI), whose components are Reference, Provenance, Context, and Fixity information, with Access Rights Information added in the 2012 edition."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to scanning and OCR"
    },
    {
      "kind": "paragraph",
      "text": "Scanning produces an image; without metadata it is an opaque picture of a page. Capture metadata is what turns that image into a managed record."
    },
    {
      "kind": "list",
      "items": [
        "The scanner and capture software are the first, authoritative source of technical metadata (resolution, bit depth, color space, compression, device model, capture date).",
        "OCR (optical character recognition) is both a metadata source and a metadata product. It generates searchable text and can extract candidate descriptive values (dates, names, invoice numbers, document type) used to populate index fields. The OCR process itself — engine, version, confidence — is provenance information appropriately recorded as preservation or technical metadata (in PREMIS terms, an Event performed by an Agent).",
        "Practically, OCR quality depends on capture quality, so technical metadata (e.g., DPI, whether images are bitonal or grayscale) is diagnostic when downstream text extraction or classification underperforms."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and preservation formats"
    },
    {
      "kind": "paragraph",
      "text": "PDF is a common container for captured documents, and its archival profile makes metadata handling explicit. PDF/A (ISO 19005) requires that document metadata be present as an embedded XMP metadata stream. Key source-backed requirements:"
    },
    {
      "kind": "list",
      "items": [
        "The XMP stream must be embedded in clear text (not encrypted, and stored so non-PDF-aware tools can extract it) and uses UTF-8 encoding.",
        "Conformance is declared in XMP via the pdfaid namespace: pdfaid:part (the ISO 19005 part number) and pdfaid:conformance (the conformance level).",
        "PDF/A defines a set of predefined schemas (including Dublin Core, XMP Basic, and Adobe PDF).",
        "For any metadata beyond the predefined schemas, PDF/A-1, -2, and -3 (ISO 19005-1/-2/-3) require an XMP extension schema — a formal, embedded description of the custom properties, their types, and their namespaces (using the pdfaExtension, pdfaSchema, pdfaProperty, pdfaField, and pdfaType constructs).",
        "PDF/A-4 (ISO 19005-4), based on PDF 2.0, changes this: it no longer defines XMP extension schemas and instead recommends including a schema as an Associated File with an AFRelationship value of Schema, in RELAX NG format."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Historically, PDF also carried metadata in a Document Information dictionary (author, title, keywords). Modern practice, and PDF/A conformance, treats XMP as the authoritative metadata store; where both exist, the Document Information dictionary and XMP are expected to be consistent. Beyond PDF, XMP can also be embedded in TIFF and JPEG — common raster outputs of scanning — allowing the same descriptive and rights metadata to travel with image masters."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to records management and compliance"
    },
    {
      "kind": "paragraph",
      "text": "Captured documents frequently become records, and records management standards govern the metadata they must carry."
    },
    {
      "kind": "list",
      "items": [
        "ISO 15489 (Records management) sets principles for creating, capturing, and managing records so they remain authentic, reliable, usable, and retain their integrity, in any format.",
        "ISO 23081 (Metadata for records) provides the metadata framework supporting ISO 15489. Part 1 (principles) links metadata requirements to ISO 15489-1. Notably, ISO 23081 does not mandate a single fixed element set — required elements vary by jurisdiction and organizational need.",
        "For long-term retention, the OAIS reference model (ISO 14721) frames the metadata (Representation Information and PDI) needed to preserve and later access ingested objects, and PREMIS supplies the concrete preservation-metadata vocabulary."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Regulatory regimes (for example, sector-specific retention and recordkeeping rules) commonly rely on this metadata — retention triggers, provenance, access rights, and fixity — to demonstrate that records are complete, unaltered, and appropriately retained. These standards are named factually; specific legal or compliance obligations depend on jurisdiction and are outside the scope of this reference."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Findability: descriptive and full-text (OCR-derived) metadata make large captured collections searchable rather than opaque image piles.",
        "Interoperability: using standardized vocabularies (Dublin Core, PREMIS) and encodings (XMP, METS) lets metadata move between systems and repositories.",
        "Portability and self-description: embedding metadata as XMP inside PDF/A binds description to the object, so it survives export, transfer, and system migration.",
        "Preservation and authenticity: fixity, format identification, and provenance (PREMIS Events and Agents) support long-term usability and demonstrable integrity.",
        "Governance: records metadata (ISO 23081) supports retention, disposition, access control, and auditability."
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
        "No single mandatory schema: standards deliberately leave element sets flexible (ISO 23081 explicitly does not mandate one), so organizations must design their own profiles — which can create inconsistency across systems.",
        "Cost and quality of creation: rich descriptive metadata is expensive to produce; automated extraction (OCR, classification) introduces errors and uncertainty that must themselves be recorded.",
        "Embedded vs. external drift: metadata embedded in files can diverge from external system-of-record values unless synchronization is enforced (PDF's Document Information dictionary vs. XMP is a classic example).",
        "Complexity: PREMIS, OAIS, and XMP extension schemas have a real learning curve and demand tooling; misapplied extension schemas can break PDF/A conformance.",
        "Semantic loss on transformation: format migration and re-export can strip or alter metadata if not deliberately preserved."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Metadata remains foundational to enterprise capture because the volume of captured content, the length of required retention, and the number of systems content passes through have all grown. Standards continue to be maintained and revised — ISO 15836 (Dublin Core) parts updated in 2017 and 2019; XMP (ISO 16684-1) revised in 2019; PREMIS at version 3.0; PDF/A extended to PDF 2.0 with ISO 19005-4 (2020); ISO 14721 (OAIS) revised in 2025 — reflecting ongoing use rather than legacy status."
    },
    {
      "kind": "paragraph",
      "text": "Automated metadata generation (OCR-driven extraction and machine classification) increasingly populates index fields, which raises, rather than lowers, the importance of recording provenance and confidence so downstream users can judge reliability. The core principle is unchanged: a captured document is only as useful, trustworthy, and preservable as the metadata that accompanies it."
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
          "period": "1995",
          "text": "First OCLC/NCSA Metadata Workshop held in Dublin, Ohio; origin of Dublin Core."
        },
        {
          "period": "1998",
          "text": "Dublin Core fifteen-element set published as IETF RFC 2413."
        },
        {
          "period": "2001",
          "text": "Adobe introduces XMP."
        },
        {
          "period": "2003",
          "text": "First edition of the OAIS reference model published as ISO 14721:2003."
        },
        {
          "period": "2005",
          "text": "PREMIS Data Dictionary for Preservation Metadata v1.0 released (OCLC/RLG working group); PDF/A-1 published as ISO 19005-1:2005 (based on PDF 1.4)."
        },
        {
          "period": "2007",
          "text": "Dublin Core fifteen-element set republished as IETF RFC 5013 (obsoletes RFC 2413)."
        },
        {
          "period": "2011",
          "text": "PDF/A-2 published as ISO 19005-2:2011 (based on PDF 1.7 / ISO 32000-1)."
        },
        {
          "period": "2012",
          "text": "XMP becomes ISO 16684-1:2012; OAIS revised as ISO 14721:2012; PDF/A-3 published as ISO 19005-3:2012."
        },
        {
          "period": "2014",
          "text": "ISO 16684-2:2014 (XMP schema description using RELAX NG)."
        },
        {
          "period": "2015",
          "text": "PREMIS Data Dictionary v3.0 released (June 2015)."
        },
        {
          "period": "2017",
          "text": "ISO 15836-1:2017 (Dublin Core core elements); ISO 23081-1:2017 (records metadata, principles); NISO primer Understanding Metadata (Riley)."
        },
        {
          "period": "2019",
          "text": "ISO 15836-2:2019 (DCMI properties and classes); XMP revised as ISO 16684-1:2019."
        },
        {
          "period": "2020",
          "text": "PDF/A-4 published as ISO 19005-4:2020 (based on PDF 2.0 / ISO 32000-2)."
        },
        {
          "period": "2025",
          "text": "OAIS reference model revised as ISO 14721:2025 (aligned with CCSDS 650.0-M-3)."
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
      "slug": "document-indexing"
    },
    {
      "section": "tools",
      "slug": "pdf-a"
    },
    {
      "section": "guides",
      "slug": "digital-preservation"
    },
    {
      "section": "guides",
      "slug": "records-management"
    },
    {
      "section": "guides",
      "slug": "enterprise-document-capture"
    },
    {
      "section": "tools",
      "slug": "tiff"
    }
  ],
  "faqs": [
    {
      "q": "What are the main types of metadata for captured documents?",
      "a": "They are conventionally grouped as descriptive (title, creator, subject, date), administrative (management and rights), technical (resolution, format, color space, device), preservation (fixity, format identification, provenance), and structural (page order and component relationships). The 2017 NISO primer treats technical, preservation, and rights metadata as subsets of administrative metadata."
    },
    {
      "q": "Which standards govern metadata for captured documents?",
      "a": "Common standards include Dublin Core (ISO 15836) for descriptive elements, XMP (ISO 16684) for embedding metadata in files, PREMIS (maintained by the Library of Congress) for preservation metadata, OAIS (ISO 14721) for long-term archiving, and ISO 15489 / ISO 23081 for records management and records metadata."
    },
    {
      "q": "How does PDF/A handle document metadata?",
      "a": "PDF/A (ISO 19005) requires metadata to be present as an embedded XMP metadata stream in clear text using UTF-8. Conformance is declared via the pdfaid namespace. PDF/A-1, -2, and -3 require an XMP extension schema for custom properties, while PDF/A-4 instead recommends providing a schema as an Associated File in RELAX NG."
    },
    {
      "q": "What is the difference between embedded and external metadata?",
      "a": "Embedded metadata is written inside the file (for example, an XMP packet in a PDF or TIFF), so it travels with the object. External or associated metadata is held in a database, records system, or a manifest such as METS, which is favored when metadata must be queried at scale, updated independently of the file, or governed by a records system."
    },
    {
      "q": "Is there one required metadata schema for captured documents?",
      "a": "No. Standards deliberately leave element sets flexible; ISO 23081 explicitly does not mandate a single fixed element set because required elements vary by jurisdiction and organizational need. Organizations design their own metadata profiles from standard building blocks such as Dublin Core and PREMIS."
    }
  ],
  "sources": [
    {
      "title": "DCMI History",
      "url": "https://www.dublincore.org/about/history/",
      "publisher": "Dublin Core Metadata Initiative"
    },
    {
      "title": "ISO 15836-1:2017 — The Dublin Core metadata element set, Part 1: Core elements",
      "url": "https://www.iso.org/standard/71339.html",
      "publisher": "ISO"
    },
    {
      "title": "RFC 5013: The Dublin Core Metadata Element Set",
      "url": "https://www.rfc-editor.org/info/rfc5013/",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "ISO 16684-1:2019 — Extensible metadata platform (XMP), Part 1",
      "url": "https://www.iso.org/standard/75163.html",
      "publisher": "ISO"
    },
    {
      "title": "PREMIS Data Dictionary for Preservation Metadata, Version 3.0",
      "url": "https://www.loc.gov/standards/premis/v3/",
      "publisher": "Library of Congress"
    },
    {
      "title": "ISO 19005-2:2011 — Electronic document file format for long-term preservation (PDF/A-2)",
      "url": "https://www.iso.org/standard/50655.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 19005-3:2012 — Electronic document file format for long-term preservation (PDF/A-3)",
      "url": "https://www.iso.org/standard/57229.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 19005-4:2020 — Electronic document file format for long-term preservation (PDF/A-4)",
      "url": "https://www.iso.org/standard/71832.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 19005-4 (PDF/A-4)",
      "url": "https://pdfa.org/resource/iso-19005-4-pdf-a-4/",
      "publisher": "PDF Association"
    },
    {
      "title": "ISO 14721:2025 — Open archival information system (OAIS) — Reference model",
      "url": "https://www.iso.org/standard/87471.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 23081-1:2017 — Metadata for records, Part 1: Principles",
      "url": "https://www.iso.org/standard/73172.html",
      "publisher": "ISO"
    },
    {
      "title": "Understanding Metadata (Jenn Riley, 2017)",
      "url": "https://www.niso.org/publications/understanding-metadata-2017",
      "publisher": "NISO"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "capture metadata",
    "document metadata",
    "dublin core",
    "premis",
    "xmp",
    "pdf/a metadata",
    "descriptive metadata",
    "preservation metadata",
    "technical metadata",
    "iso 15836",
    "iso 16684",
    "iso 19005"
  ],
  "cluster": "enterprise-capture",
  "modernTools": [
    "pdf-editor"
  ],
  "difficulty": "intermediate",
  "estimatedTime": "10 min read"
};

export default entry;
