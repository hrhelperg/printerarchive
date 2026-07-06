import type { WorkflowEntry } from "@/lib/content/types";

const entry: WorkflowEntry = {
  "section": "workflows",
  "slug": "scan-to-cloud",
  "title": "Scan-to-Cloud Workflow",
  "description": "How documents are scanned and delivered to network or cloud destinations, covering eSCL, WSD, IPP Scan, PDF/A, OCR, and document management.",
  "summary": "A scan-to-cloud workflow digitizes a physical document on a scanner or multifunction device and delivers it to a network- or internet-hosted destination rather than saving it only to a locally tethered computer. The term covers both a destination (cloud storage, a file-sync service, email, or a document-management system) and a transport model (the scan initiated or brokered over the network). Vendor-neutral building blocks include eSCL (Apple AirScan), Microsoft's WSD/WS-Scan, the PWG IPP Scan Service, and the archival PDF/A format, while integrations with named commercial services are largely proprietary firmware or companion-app connectors rather than cross-vendor standards. The output side typically produces a searchable PDF via OCR and, for preservation, a PDF/A file conforming to ISO 19005.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "A scan-to-cloud workflow is the end-to-end process by which a physical document is digitized on a scanner or multifunction device (MFD) and delivered directly to a network- or internet-hosted storage or document service, rather than saved only to a locally attached computer. In practice the term covers two distinct but related things:"
    },
    {
      "kind": "list",
      "items": [
        "A destination — the scanned output lands in a cloud storage service, a file-sync service, an email inbox, or a document-management system.",
        "A transport model — the scan is initiated, controlled, or brokered over the network, sometimes through cloud-based infrastructure that mediates between the device and the client."
      ]
    },
    {
      "kind": "paragraph",
      "text": "It is important to separate open, vendor-neutral standards from proprietary vendor connectors. Standards such as eSCL (Apple AirScan), WSD/WS-Scan, the PWG IPP Scan Service, and PDF/A are documented by standards bodies or platform vendors and are broadly interoperable. The specific connectors to named commercial cloud services are largely implemented in each manufacturer's firmware or companion apps and are not themselves cross-vendor standards. This page describes the mechanisms; it does not endorse or certify any particular service integration."
    },
    {
      "kind": "paragraph",
      "text": "Several documented, vendor-neutral building blocks underpin these workflows:"
    },
    {
      "kind": "list",
      "items": [
        "eSCL (Apple AirScan / AirPrint scanning). Published by the Mopria Alliance, the eSCL specification \"defines the interfaces, data types and overall behavioral model for driving a scanner engine from various classes of clients: Software, Cloud Services, Mobile Device, Embedded Web Server (EWS).\" It is an HTTP- and XML-based protocol, and the specification explicitly names Cloud Services as one class of client that can drive the scanner engine.",
        "WSD / WS-Scan (Web Services for Devices). Microsoft's web-services scanning protocol, the common alternative to eSCL on the network. The open-source sane-airscan backend implements both protocols and selects between them automatically.",
        "PWG IPP Scan Service (PWG 5100.17-2014). A protocol binding of the PWG Semantic Model Scan service over the Internet Printing Protocol — a vendor-neutral way to describe scan jobs, their attributes, and destinations on networked devices.",
        "PWG IPP Shared Infrastructure Extensions (INFRA, PWG 5100.18-2025). An IPP binding of the Cloud Imaging Model that \"allows IPP Printers to interface with shared services\" based in network infrastructure and cloud-based solutions to remotely obtain and process jobs and documents. This binding is historically framed around print jobs; the standards-body path specifically for cloud-mediated scanning is the PWG Semantic Model Scan / IPP Scan Service.",
        "PDF/A (ISO 19005). The output-format and archival side of the workflow."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "At a high level, three things must be decided in any scan-to-cloud workflow: who controls the scan, where the bits go, and what format they arrive in."
    },
    {
      "kind": "list",
      "items": [
        "Control plane. The scan can be driven locally — a PC or phone on the same network commanding the device via eSCL, WSD, or IPP Scan — or brokered through a network/cloud service that the device connects to. Cloud-mediated models let a device reach out to a shared service, which can allow a device behind a firewall to participate without accepting inbound connections.",
        "Data plane / destination. The digitized image is routed to a destination: an email address, a network folder (SMB/FTP), an embedded-web-server session, or a cloud storage / document-management endpoint. On many MFDs the destination is selected from the front-panel touchscreen; on standards-based paths it is expressed as a scan-job attribute.",
        "Format and processing. Before or after transfer, the image is typically compressed (JPEG for photos and color, or bitonal compression for text), packaged (multi-page PDF or TIFF), and often passed through OCR to add a searchable text layer and/or to produce an archival PDF/A file."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Step by step (conceptual, vendor-neutral)"
    },
    {
      "kind": "paragraph",
      "text": "1. Capture. The scanner illuminates the page and its sensor produces a raster image. For OCR and archival work, a scan resolution of around 300 dpi is a widely cited best-practice baseline for reliable text recognition (guidance, not a normative standard requirement). 2. Image pre-processing. The device or software may deskew skewed pages, remove noise and speckle, adjust contrast, and crop to page bounds — steps that materially improve later OCR accuracy. 3. Format and compression. Pages are encoded (for example, JPEG for color/grayscale; bitonal for text) and assembled into a container — most commonly a multi-page PDF, or TIFF. The sane-airscan implementation, for example, handles BMP, JPEG, PNG, and TIFF as image transfer formats. 4. OCR (optional but common). An OCR engine segments the page, recognizes each glyph, and produces a text layer placed invisibly behind the page image — the \"sandwich\" or image-over-text PDF. 5. Destination selection. The user or an administrator-defined profile chooses where the file goes: email, network folder, an embedded-web-server download, or a cloud storage / document-management endpoint. Standards-based paths (IPP Scan) express this as a job destination attribute. 6. Authentication and transfer. The device authenticates to the destination (account credentials, OAuth token, API key, or an on-device signed-in session) and uploads over HTTP(S) or the relevant protocol. In cloud-brokered models the device may instead hand the job to a shared service that stores or forwards it. 7. Post-processing and indexing. The receiving service may apply OCR, extract metadata, convert to PDF/A for archiving, and index the document so it is searchable within a document-management system."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Formats and output"
    },
    {
      "kind": "list",
      "items": [
        "PDF — the dominant container for multi-page scanned documents; supports the image-over-text \"searchable PDF\" pattern.",
        "PDF/A — the archival subset of PDF, used when long-term preservation is the goal.",
        "JPEG — lossy encoding for color and grayscale pages and photos; efficient but not ideal for crisp text.",
        "TIFF — a long-established container for scanned images, including multi-page bitonal fax-style compression; still common in imaging and archival pipelines.",
        "PNG / BMP — lossless raster formats supported by some scan backends (for example, sane-airscan) as intermediate transfer formats."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The choice is a trade-off: JPEG minimizes size, while lossless or bitonal formats and PDF/A maximize fidelity and preservation guarantees. Note that the exact DocumentFormat values eSCL delivers are defined in its specification; the format list above is drawn from the sane-airscan implementation rather than asserted as spec-defined."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and OCR"
    },
    {
      "kind": "paragraph",
      "text": "The searchable PDF is central to most scan-to-cloud pipelines. OCR analyses an image-based document, recognizes text, and then places a duplicate, invisible text layer on top of the image, which makes the source text selectable and searchable in the same manner as ordinary text. The result is often called a sandwich PDF: the original scan image remains the visible layer, with an invisible recognized-text layer beneath it. The human eye sees only the page image, while the computer can read the underlying text data."
    },
    {
      "kind": "paragraph",
      "text": "This design is what makes an archived scan findable: the visual appearance is preserved exactly, while full-text search, copy, and selection operate against the hidden text layer. Open-source tooling such as OCRmyPDF — built on the Tesseract OCR engine — implements exactly this, adding an OCR text layer to scanned PDF files so they can be searched, and can emit PDF/A output for archival (for example via its --output-type pdfa option)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to document management"
    },
    {
      "kind": "paragraph",
      "text": "Scan-to-cloud is frequently the capture stage of a document-management (DMS/ECM) system. Once a searchable PDF or PDF/A lands in the cloud repository, the DMS can index its text, apply metadata and classification, enforce retention and access policies, and make it retrievable. The vendor-neutral PWG work — the IPP Scan Service and the shared-infrastructure / cloud imaging bindings — is aimed at letting networked devices feed such shared or cloud services in a standardized way, rather than through one-off proprietary drivers."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "No dependence on a single tethered PC — output goes straight to network or cloud destinations.",
        "Immediate searchability when OCR is applied, turning image scans into findable, indexable documents.",
        "Preservation when PDF/A is used: text, images, fonts, and color are embedded so the file renders consistently over time, independent of the tools and systems used to create, store, or render it.",
        "Interoperability where open protocols (eSCL, WSD, IPP Scan) are used — driverless scanning has been demonstrated broadly across macOS, Windows, and Linux and across devices from multiple manufacturers.",
        "Remote or mobile initiation and firewall-friendly cloud brokering, where devices reach out to shared services rather than accepting inbound connections."
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
        "Connector fragmentation. Integrations with specific commercial cloud, storage, or DMS services are largely proprietary and vendor-specific; they are not covered by a single cross-vendor scanning standard.",
        "OCR is imperfect. Recognition accuracy depends on scan quality, language, fonts, and layout; low-resolution or noisy scans degrade the text layer. The visible image is faithful, but the searchable text may contain errors.",
        "Security and privacy exposure. Sending documents to cloud endpoints introduces credential management (OAuth tokens, API keys), transport security, and data-residency considerations.",
        "Browser constraints. Direct in-browser use of eSCL is limited; according to one vendor observation it cannot be used directly from JavaScript because of CORS restrictions, so web-app scanning typically needs a helper or SDK.",
        "Format trade-offs. JPEG compression can blur text; achieving both small size and archival fidelity requires deliberate choices, such as bitonal text combined with PDF/A."
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
        "Scan at ~300 dpi for documents destined for OCR; use higher resolutions for fine print or preservation masters.",
        "Pre-process (deskew, despeckle, adjust contrast) before OCR to raise accuracy.",
        "Choose the format for the goal: JPEG or a compact PDF for convenience; PDF/A with an embedded OCR text layer for archives.",
        "Prefer conformance level U or A of PDF/A when searchable or extractable text matters. Level U requires reliable Unicode semantics, which guarantees that text can be reliably searched and copied.",
        "Validate PDF/A conformance against ISO 19005 if the file must meet a preservation mandate.",
        "Plan authentication and retention at the destination: tokens versus stored credentials, who can read the repository, and how long files are kept."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Scan-to-cloud is now a default expectation on office MFDs and even consumer devices, driven by driverless network scanning (eSCL/AirScan and WSD) available across macOS, Windows, and Linux, and by the maturation of cloud and document-management platforms. Standards work continues: the PWG's IPP Shared Infrastructure Extensions were revised as recently as PWG 5100.18-2025, indicating active, ongoing standardization of cloud-mediated imaging. On the preservation side, the Library of Congress lists PDF/A among its preferred formats for text and scanned text in its Recommended Formats Statement, reinforcing PDF/A plus OCR as the durable archival endpoint of these workflows."
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
          "period": "2005",
          "text": "PDF/A-1 published as ISO 19005-1, based on PDF 1.4, with conformance levels A and B."
        },
        {
          "period": "2011",
          "text": "PDF/A-2 published as ISO 19005-2, based on PDF 1.7; introduces conformance level U (reliable Unicode)."
        },
        {
          "period": "2012",
          "text": "PDF/A-3 published as ISO 19005-3 (conformance levels A, B, and U)."
        },
        {
          "period": "2014",
          "text": "PWG IPP Scan Service published as PWG 5100.17-2014 (September 18, 2014), an IPP binding of the PWG Semantic Model Scan service."
        },
        {
          "period": "2015 onward",
          "text": "The Library of Congress lists PDF/A among preferred formats for text and scanned text in its Recommended Formats Statement (revised annually)."
        },
        {
          "period": "2025",
          "text": "PWG 5100.18-2025, IPP Shared Infrastructure Extensions v1.1 (INFRA), published May 2, 2025 — an IPP binding of the Cloud Imaging Model."
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
      "section": "workflows",
      "slug": "scan-to-folder"
    },
    {
      "section": "workflows",
      "slug": "scan-to-searchable-pdf"
    },
    {
      "section": "tools",
      "slug": "pdf-a"
    },
    {
      "section": "guides",
      "slug": "portable-scanners"
    },
    {
      "section": "workflows",
      "slug": "scan-to-email"
    },
    {
      "section": "tools",
      "slug": "escl"
    }
  ],
  "faqs": [
    {
      "q": "What is a scan-to-cloud workflow?",
      "a": "It is the end-to-end process of digitizing a physical document on a scanner or multifunction device and delivering it directly to a network- or internet-hosted destination — such as cloud storage, a file-sync service, email, or a document-management system — rather than saving it only to a locally attached computer."
    },
    {
      "q": "Is scan-to-cloud based on open standards?",
      "a": "Partly. Vendor-neutral building blocks such as eSCL (AirScan), WSD/WS-Scan, the PWG IPP Scan Service, and PDF/A are documented and broadly interoperable. However, connectors to specific commercial cloud, storage, or DMS services are largely proprietary firmware or companion-app implementations, not cross-vendor standards."
    },
    {
      "q": "Why is OCR important in scan-to-cloud?",
      "a": "OCR adds an invisible text layer behind the scanned page image, producing a searchable PDF (a \"sandwich\" or image-over-text PDF). The visible page is preserved exactly, while full-text search, copy, and selection operate against the hidden recognized text, making archived scans findable."
    },
    {
      "q": "What format should I use for long-term archiving?",
      "a": "PDF/A (ISO 19005) is the archival subset of PDF, embedding text, images, fonts, and color so the file renders consistently over time. When searchable text matters, conformance level U or A is preferred, since level U requires reliable Unicode semantics so text can be reliably searched and copied."
    },
    {
      "q": "What scan resolution is recommended for OCR?",
      "a": "Around 300 dpi is a widely cited best-practice baseline for reliable text recognition, with higher resolutions used for fine print or preservation masters. This is guidance from OCR best-practice sources, not a normative standard requirement."
    }
  ],
  "sources": [
    {
      "title": "Mopria eSCL Specification",
      "url": "https://mopria.org/mopria-escl-specification",
      "publisher": "Mopria Alliance"
    },
    {
      "title": "PWG Published Standards (5100.17-2014, 5100.18-2025)",
      "url": "https://www.pwg.org/standards.html",
      "publisher": "Printer Working Group"
    },
    {
      "title": "Internet Printing Protocol Workgroup",
      "url": "https://www.pwg.org/ipp/",
      "publisher": "Printer Working Group"
    },
    {
      "title": "ISO 19005 (PDF/A) overview",
      "url": "https://pdfa.org/resource/iso-19005-pdfa/",
      "publisher": "PDF Association"
    },
    {
      "title": "The PDF/A Standards",
      "url": "https://www.pdflib.com/pdf-knowledge-base/pdfa/the-pdfa-standards/",
      "publisher": "PDFlib"
    },
    {
      "title": "sane-airscan (eSCL + WSD universal backend)",
      "url": "https://github.com/alexpevzner/sane-airscan",
      "publisher": "Alexander Pevzner (open source)"
    },
    {
      "title": "OCRmyPDF (Tesseract-based OCR text layer; PDF/A output)",
      "url": "https://github.com/ocrmypdf/OCRmyPDF",
      "publisher": "OCRmyPDF project"
    },
    {
      "title": "eSCL",
      "url": "https://wiki.debian.org/eSCL",
      "publisher": "Debian Wiki"
    },
    {
      "title": "PDF/A Family, PDF for Long-term Preservation",
      "url": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000318.shtml",
      "publisher": "Library of Congress"
    },
    {
      "title": "Recommended Formats Statement",
      "url": "https://www.loc.gov/preservation/resources/rfs/",
      "publisher": "Library of Congress"
    },
    {
      "title": "Overview of Scanning over a Shared Network",
      "url": "https://www.dynamsoft.com/codepool/overview-of-scanning-over-shared-network.html",
      "publisher": "Dynamsoft"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "scan to cloud",
    "escl",
    "airscan",
    "wsd scan",
    "ipp scan service",
    "pwg",
    "pdf/a",
    "searchable pdf",
    "ocr",
    "driverless scanning",
    "document management",
    "sane-airscan"
  ],
  "cluster": "scanning-workflows",
  "modernTools": [
    "pdf-editor",
    "zip-rar"
  ],
  "goal": "The end-to-end process of digitizing a document and delivering it to a network or cloud destination.",
  "toolsUsed": [
    "A scanner or multifunction device",
    "A cloud storage service"
  ]
};

export default entry;
