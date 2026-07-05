import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "afp",
  "title": "AFP (Advanced Function Presentation)",
  "description": "Advanced Function Presentation (AFP): IBM-originated, now open, architecture (MO:DCA + IPDS) for high-volume, integrity-critical variable-data printing.",
  "summary": "Advanced Function Presentation (AFP) is a document and information presentation architecture originally developed by IBM for high-volume, high-speed, variable-data printing. Rather than a single file format, it is a coordinated family of architectures whose two central pillars are MO:DCA (Mixed Object Document Content Architecture), the device-independent data stream describing a document's content and layout, and IPDS (Intelligent Printer Data Stream), the bidirectional host-to-printer protocol that drives the device and returns status to the host. AFP is object-driven, all-points-addressable, and resource-managed. Since the mid-2000s the architecture has been stewarded as an open standard by the AFP Consortium (AFPC) rather than by IBM alone.",
  "purpose": "Architecture for high-volume, variable-data document presentation, interchange, and printer control.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "AFP originated at IBM, with the first specifications and products dating to 1984. It was initially known as Advanced Function Printing; the wording later broadened to Advanced Function Presentation as the architecture grew beyond driving printers into general document interchange and archival. Both expansions appear in IBM and AFP Consortium materials, and the change is best understood as an evolution of a single architecture rather than two separate products."
    },
    {
      "kind": "paragraph",
      "text": "The Intelligent Printer Data Stream (IPDS) was likewise introduced by IBM around 1984 as part of the AFP architecture. AFP was subsequently positioned within IBM's Systems Application Architecture (SAA) strategy after SAA was introduced in 1987. The technology grew out of IBM's high-speed page-printing hardware lineage: the IBM 3800 laser printer line was foundational hardware that predated the formal AFP data-stream architecture, and the IBM 3820, announced February 12, 1985, is cited as IBM's first AFP cut-sheet printer. The core concepts — object-driven structures, print integrity, resource management, and support for high print speeds — have been preserved since inception."
    },
    {
      "kind": "paragraph",
      "text": "Beginning in the mid-2000s, IBM opened the architecture. In October 2004 IBM initiated the AFP Color Consortium (AFPCC); in May 2006 it announced opening the AFP architecture to a consortium, finalized in September 2006 as the AFP Consortium (AFPC). In June 2007 IBM's stewardship role passed to the InfoPrint Solutions Company, an IBM–Ricoh joint venture, and subsequently to Ricoh. In February 2009 the AFPC was incorporated as a formal standards body, reported at the time as having over 35 member companies."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Enterprises in the mainframe era needed to print enormous volumes of variable-data documents — bank statements, utility bills, insurance policies, invoices — reliably, at high speed, with mixed content precisely positioned on the page. Line-oriented printer data streams could not express arbitrary page composition, and they offered no guarantee that every page printed exactly once and correctly. AFP addressed three needs simultaneously:"
    },
    {
      "kind": "list",
      "items": [
        "All-points addressability — the ability to place any element (a pel, or picture element) at any coordinate on the page, mixing fonts, images, graphics, and electronic forms freely, instead of being confined to fixed print lines.",
        "Print/output integrity — closed-loop, page-level accounting between host and printer, so that in a run of millions of pages each page is accounted for and recoverable after a jam or failure, which is critical for legally and financially sensitive documents.",
        "Resource management and device independence — describing documents against reusable, downloadable resources (fonts, overlays, page segments) so the same document can target different devices without being re-authored."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "A MO:DCA document is a sequential, ordered hierarchy of independent, self-delimiting objects: documents, pages, data objects, and resource objects such as fonts and ICC color profiles. Each object is bracketed by begin/end structures, and objects to be rendered carry their presentation parameters and resource requirements in structures called environment groups."
    },
    {
      "kind": "paragraph",
      "text": "Content itself is carried in specialized object content architectures (OCAs):"
    },
    {
      "kind": "list",
      "items": [
        "PTOCA — Presentation Text Object Content Architecture (text)",
        "IOCA — Image Object Content Architecture (raster images)",
        "AFP GOCA — Graphics Object Content Architecture (vector graphics)",
        "BCOCA — Bar Code Object Content Architecture",
        "FOCA — Font Object Content Architecture (font resources)",
        "CMOCA — Color Management Object Content Architecture",
        "MOCA — Metadata Object Content Architecture"
      ]
    },
    {
      "kind": "paragraph",
      "text": "AFP can also carry externally-defined object types (for example TIFF, GIF, JPEG, EPS, and PDF) as embedded object-container data."
    },
    {
      "kind": "paragraph",
      "text": "To print, a print server — historically IBM's Print Services Facility (PSF) — consumes the MO:DCA document plus its resources and generates an IPDS command stream for the target device. IPDS is a bidirectional protocol rather than strictly a page description language: it streams page-level data and control commands to the printer (font, overlay, and page-segment download; duplexing; media-bin selection; finishing) and receives back acknowledgements, error conditions, and accounting information, enabling closed-loop output integrity."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "The flow runs from an application (a composition tool or program) to a MO:DCA-P data stream plus referenced resources, to a print server such as PSF or InfoPrint Manager, which produces an IPDS command stream sent to an IPDS-capable printer or presentation device. Status, accounting, and error signals flow back upstream over IPDS."
    },
    {
      "kind": "paragraph",
      "text": "In short, MO:DCA is the interchange and archival layer describing what the document is, while IPDS is the runtime device-control layer governing how it is presented and confirming that it was."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "IPDS is designed to control all-points-addressable (APA) page printers, from LAN-attached workstation printers to high-speed, high-volume production presses and mailroom systems. Because IPDS is bidirectional, the printer is an active participant: it reports resource state (such as available memory and resident fonts), acknowledges pages for accounting, and signals exceptions. Many production printers implement IPDS natively; printers without native IPDS support can be driven through transforms or software raster image processors."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "AFP is historically rooted in IBM host platforms. Print Services Facility (PSF) is the licensed program that links application programs to presentation devices, and IBM shipped platform variants including PSF/390 (PSF for z/OS), PSF/VSE, PSF/6000 (AIX), PSF/400 (AS/400 and IBM i), and PSF/2 (OS/2), later consolidated commercially under InfoPrint Manager."
    },
    {
      "kind": "paragraph",
      "text": "AFP is thus tightly associated with z/OS mainframes and IBM i. The architecture itself, however, is device- and application-independent, and it is implemented across Windows, Unix/Linux, and cross-vendor tooling today."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "paragraph",
      "text": "AFP occupies a role comparable to PostScript and PDF — a device-independent page and document description — but it was engineered for a different problem: industrial-scale, integrity-critical variable-data production rather than general desktop publishing. Key contrasts:"
    },
    {
      "kind": "list",
      "items": [
        "PostScript is a programmatic page description language interpreted at the device; PDF is a fixed, final-form document format; MO:DCA is an object-structured, resource-referencing data stream optimized for streaming and reuse across very large print runs.",
        "IPDS versus drivers: IPDS replaces the conventional print-driver abstraction with a standardized bidirectional device protocol that provides page-level acknowledgement — something PostScript and PDF workflows do not natively provide.",
        "Interoperability with PDF is formalized in ISO 22550 (Document management — AFP interchange for PDF), which specifies MO:DCA as a container able to include single- and multi-page PDF objects, targeting workflows where final production is managed in an IPDS environment. AFP toolchains also embed and transform PDF and PostScript objects and can transform to and from PDF."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "AFP remains a cornerstone of enterprise transactional and variable-data printing and of electronic document and content-management archives. It is heavily used in banking, insurance, telecommunications, and utilities for bills, statements, policies, and correspondence produced in the millions. It is a supported output in IBM z/OS and IBM i environments and in cross-vendor production print software."
    },
    {
      "kind": "paragraph",
      "text": "Beyond physical print, MO:DCA is widely used as an archival final-form format for regulated documents, including within content-management and document-archive product families."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "All-points addressability with rich mixed content — text, image, vector graphics, bar codes, and forms — precisely positioned.",
        "Output and print integrity: closed-loop, page-level accounting and recovery, essential for financial and legal documents at scale.",
        "Resource management: reusable, downloadable fonts, overlays, and page segments reduce data volume and enforce consistency across large runs.",
        "Device and application independence at the MO:DCA layer, so a document can target many devices.",
        "Optimized for very high-speed, high-volume production printing.",
        "Open, versioned standard maintained by a multi-vendor consortium, with defined PDF interchange via ISO 22550."
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
        "Complexity and specialized tooling: authoring, transforming, viewing, and driving AFP require dedicated software and expertise; it is not a general desktop format.",
        "Ecosystem concentration: strongest in IBM mainframe and midrange environments and among production-print vendors, and less ubiquitous than PDF for everyday exchange.",
        "Not human-editable or a simple exchange format: MO:DCA is a binary structured data stream, unlike PDF's broad end-user tooling.",
        "IPDS device dependence: the full closed-loop integrity benefits require IPDS-capable devices or transforms."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Related standards and protocols"
    },
    {
      "kind": "list",
      "items": [
        "MO:DCA — the AFP document content and interchange architecture (AFPC Reference).",
        "IPDS — the AFP host-to-printer bidirectional protocol (AFPC Reference).",
        "Component OCAs — PTOCA, IOCA, AFP GOCA, BCOCA, FOCA, CMOCA, and MOCA.",
        "PSF / InfoPrint Manager — IBM implementation software.",
        "ISO 22550 — Document management — AFP interchange for PDF (MO:DCA as a container for PDF objects in IPDS workflows).",
        "Adjacent and contrasting page technologies — PostScript, PDF (ISO 32000), PCL, and IPP (the last being a different, general-purpose network print protocol)."
      ]
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
          "period": "1984",
          "text": "IBM introduces the Advanced Function (Printing) architecture and the IPDS data stream; first AFP specifications and products."
        },
        {
          "period": "Feb 12, 1985",
          "text": "IBM announces the IBM 3820, cited as IBM's first AFP cut-sheet printer."
        },
        {
          "period": "1987",
          "text": "IBM introduces Systems Application Architecture (SAA), within which AFP is subsequently positioned."
        },
        {
          "period": "Oct 2004",
          "text": "IBM initiates the AFP Color Consortium (AFPCC)."
        },
        {
          "period": "2006",
          "text": "The CMOCA (Color Management OCA) specification is first published."
        },
        {
          "period": "May 2006",
          "text": "IBM announces opening the AFP architecture to a consortium."
        },
        {
          "period": "Sep 2006",
          "text": "The initiative is finalized as the AFP Consortium (AFPC)."
        },
        {
          "period": "Jun 2007",
          "text": "IBM's stewardship role transfers to the InfoPrint Solutions Company (IBM–Ricoh joint venture), later Ricoh."
        },
        {
          "period": "Feb 2009",
          "text": "The AFPC is incorporated as a formal standards body, reported with over 35 member companies."
        },
        {
          "period": "2019 / 2021",
          "text": "ISO 22550 is published (2019 edition; 2021 revision), defining AFP/MO:DCA interchange for PDF."
        },
        {
          "period": "Jun 28, 2023",
          "text": "The AFPC publishes simultaneous updates: the IPDS Reference 13th edition (AFPC-0001-12) and the MO:DCA Reference 11th edition (AFPC-0004-10)."
        }
      ]
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical and historical reference. Figures and dates are drawn from documented sources; it does not include current pricing, marketing claims, or product recommendations. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "brands",
      "slug": "ibm"
    },
    {
      "section": "guides",
      "slug": "line-printing"
    },
    {
      "section": "tools",
      "slug": "ipp"
    },
    {
      "section": "brands",
      "slug": "ricoh"
    },
    {
      "section": "guides",
      "slug": "what-is-postscript-printing"
    },
    {
      "section": "tools",
      "slug": "what-is-pdf"
    }
  ],
  "faqs": [
    {
      "q": "Does AFP stand for Advanced Function Printing or Advanced Function Presentation?",
      "a": "Both, at different times. IBM originally called the architecture Advanced Function Printing when it appeared in 1984. The wording was later broadened to Advanced Function Presentation as the architecture grew beyond driving printers into document interchange and archival. It is one evolving architecture, not two separate products."
    },
    {
      "q": "What is the difference between MO:DCA and IPDS?",
      "a": "MO:DCA (Mixed Object Document Content Architecture) is the device-independent data stream that describes a document's content and layout, and it also serves as an interchange and archival format. IPDS (Intelligent Printer Data Stream) is the bidirectional host-to-printer protocol that drives the device and returns status, error, and accounting information to the host."
    },
    {
      "q": "How is AFP different from PDF and PostScript?",
      "a": "PostScript is a programmatic page description language interpreted at the device, and PDF is a fixed final-form format. MO:DCA is an object-structured, resource-referencing data stream built for streaming and reuse across very large, integrity-critical variable-data print runs. Unlike PostScript or PDF workflows, IPDS adds standardized page-level acknowledgement between host and printer. ISO 22550 formally defines AFP interchange for PDF."
    },
    {
      "q": "Is AFP still used today?",
      "a": "Yes. AFP remains widely used for enterprise transactional and variable-data printing in banking, insurance, telecommunications, and utilities, and MO:DCA is used as an archival final-form format for regulated documents. It is supported in IBM z/OS and IBM i environments and in cross-vendor production print software."
    },
    {
      "q": "Who maintains the AFP standard now?",
      "a": "Since the mid-2000s the architecture has been an open standard stewarded by the AFP Consortium (AFPC) rather than by IBM alone. IBM opened the architecture through a series of steps from 2004 to 2006, the stewardship role passed to the InfoPrint Solutions Company (an IBM–Ricoh joint venture) and later Ricoh in 2007, and the AFPC was incorporated as a formal standards body in 2009."
    }
  ],
  "sources": [
    {
      "title": "Advanced Function Presentation",
      "url": "https://en.wikipedia.org/wiki/Advanced_Function_Presentation",
      "publisher": "Wikipedia"
    },
    {
      "title": "IBM Intelligent Printer Data Stream",
      "url": "https://en.wikipedia.org/wiki/IBM_Intelligent_Printer_Data_Stream",
      "publisher": "Wikipedia"
    },
    {
      "title": "IBM 3820",
      "url": "https://en.wikipedia.org/wiki/IBM_3820",
      "publisher": "Wikipedia"
    },
    {
      "title": "IBM Systems Application Architecture",
      "url": "https://en.wikipedia.org/wiki/IBM_Systems_Application_Architecture",
      "publisher": "Wikipedia"
    },
    {
      "title": "AFP Consortium publishes new versions of the IPDS and MO:DCA References",
      "url": "https://www.afpconsortium.org/afp-consortium-new-ipds-and-modca-references-press-release-230628.html",
      "publisher": "AFP Consortium"
    },
    {
      "title": "AFP Consortium — About Us",
      "url": "https://www.afpconsortium.org/about-us.html",
      "publisher": "AFP Consortium"
    },
    {
      "title": "Intelligent Printer Data Stream Reference",
      "url": "https://afpcinc.org/wp-content/uploads/2016/12/IPDS-Reference-11.pdf",
      "publisher": "AFP Consortium"
    },
    {
      "title": "Image Object Content Architecture (IOCA) Reference",
      "url": "https://afpcinc.org/wp-content/uploads/2016/08/IOCA-Reference-Image-Object-Content-Architecture-Reference.pdf",
      "publisher": "AFP Consortium"
    },
    {
      "title": "Understanding PSF for z/OS",
      "url": "https://www.ibm.com/docs/en/zos/2.4.0?topic=customization-understanding-psf-zos",
      "publisher": "IBM"
    },
    {
      "title": "Intelligent Printer Data Stream (IPDS)",
      "url": "https://www.ibm.com/docs/en/i/7.2?topic=streams-intelligent-printer-data-stream",
      "publisher": "IBM"
    },
    {
      "title": "IBM i Printing: Advanced Function Presentation (AFP)",
      "url": "https://www.ibm.com/docs/en/ssw_ibm_i_71/rzau6/rzau6.pdf",
      "publisher": "IBM"
    },
    {
      "title": "ISO 22550:2019 — Document management — AFP interchange for PDF",
      "url": "https://www.iso.org/standard/73419.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 22550:2021 — Document management — AFP interchange for PDF",
      "url": "https://www.iso.org/standard/83085.html",
      "publisher": "ISO"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "afp",
    "advanced function presentation",
    "advanced function printing",
    "mo:dca",
    "ipds",
    "intelligent printer data stream",
    "afp consortium",
    "print services facility",
    "psf",
    "infoprint",
    "variable-data printing",
    "all-points addressable"
  ],
  "cluster": "page-description-languages"
};

export default entry;
