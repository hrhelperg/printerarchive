import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "ipp",
  "title": "IPP (Internet Printing Protocol)",
  "description": "Encyclopedic reference on the Internet Printing Protocol (IPP): its RFCs, HTTP-based model, IPP Everywhere, driverless printing, and STD 92.",
  "summary": "The Internet Printing Protocol (IPP) is an application-level, client–server protocol for network printing and print-job management. It represents a print service as a Printer object and each submission as a Job object, which clients manipulate through a fixed set of operations to discover capabilities, submit documents, and query, hold, release, or cancel jobs. IPP is layered on HTTP: every request is an HTTP POST carrying an application/ipp binary message body, inheriting HTTP's transport, proxying, and TLS security, and it uses IANA-assigned TCP port 631. Standardized first by the IETF (IPP/1.1 as RFC 2910 and RFC 2911 in 2000, reissued as RFC 8010 and RFC 8011 in 2017, which carry Internet Standard status as STD 92) and extended by the Printer Working Group (IPP/2.x and IPP Everywhere), IPP is the technical foundation for driverless printing programs including Apple AirPrint, IPP Everywhere, and Mopria.",
  "purpose": "A vendor-neutral, HTTP-based protocol for submitting, controlling, and monitoring network print jobs.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "IPP originated from proposals in the mid-1990s. According to published histories, Novell proposed an Internet printing protocol project in 1996, with related precursor work including a Xerox/Novell \"Lightweight Document Printing Application\" (LDPA) and an IBM \"HyperText Printing Protocol\" (HTPP). These efforts, with contributions routed through the Printer Working Group (PWG), led to an IETF Birds-of-a-Feather session in December 1996 and a chartered IETF IPP working group that later concluded in 2005. (These pre-standardization details come from secondary published histories rather than a primary IETF or PWG charter document, and are reported here as such.)"
    },
    {
      "kind": "paragraph",
      "text": "IPP/1.0 was published in 1999 as a set of Experimental RFCs (RFC 2565 and companion documents 2566–2569 and 2639). IPP/1.1 followed in September 2000 as two Standards-Track documents: RFC 2910 (Encoding and Transport) and RFC 2911 (Model and Semantics), together with companion documents added later — RFC 3196 (Implementor's Guide, November 2001), RFC 3510 (IPP URL Scheme, April 2003), and RFC 7472 (HTTPS transport binding and the ipps URI scheme, March 2015)."
    },
    {
      "kind": "paragraph",
      "text": "In January 2017, IPP/1.1 was reissued as RFC 8010 and RFC 8011, which obsolete RFC 2910 and RFC 2911 respectively and carry full Internet Standard status as STD 92. (Some secondary sources instead date the STD 92 designation to 2018.)"
    },
    {
      "kind": "paragraph",
      "text": "Under PWG stewardship, IPP/2.x was first issued as a Candidate Standard in 2009 (PWG 5100.10-2009), revised (PWG 5100.12-2011), approved as a full PWG standard in 2015 (PWG 5100.12-2015), and updated in a later edition (PWG 5100.12-2024, dated November 8, 2024). The IPP Everywhere driverless-printing profile (PWG 5100.14) was first published in January 2013, with a self-certification manual and tool suite released in 2016; version 1.1 is dated May 15, 2020."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Before IPP, network printing relied on a fragmented mix of protocols and mechanisms — LPR/LPD (documented in RFC 1179), raw port 9100 socket printing, SMB/CIFS printer shares, AppSocket, and various proprietary schemes. Most of these offered little or no standard way to negotiate capabilities, report rich job and printer status, authenticate users, or work cleanly across the public Internet and through firewalls and proxies."
    },
    {
      "kind": "paragraph",
      "text": "IPP set out to provide a single, vendor-neutral, Internet-friendly protocol that could:"
    },
    {
      "kind": "list",
      "items": [
        "Let a client learn what a printer can actually do (media, formats, duplex, color, and so on) before submitting a job.",
        "Submit jobs and receive detailed, standardized status and error feedback.",
        "Manage the job lifecycle (hold, release, cancel, restart).",
        "Inherit mature Internet security and transport by riding on HTTP rather than inventing a new wire protocol."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "IPP defines an abstract object model with two core object types (RFC 2911 / RFC 8011):"
    },
    {
      "kind": "list",
      "items": [
        "A Printer object represents the print service or device. It exposes printer-description attributes (identity, state, location, supported formats) and job-template attributes (supported and default processing options).",
        "A Job object represents a submitted print job of one or more documents, with job-template attributes (the client's requested processing) and job-description attributes (state, size, identity)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Clients act on these objects through synchronous request/response operations. Printer operations include Print-Job, Print-URI, Validate-Job, Create-Job, Get-Printer-Attributes, Get-Jobs, Pause-Printer, Resume-Printer, and Purge-Jobs. Job operations include Send-Document, Send-URI, Cancel-Job, Get-Job-Attributes, Hold-Job, Release-Job, and Restart-Job."
    },
    {
      "kind": "paragraph",
      "text": "On the wire (RFC 2910 / RFC 8010), each IPP message uses a compact, big-endian binary encoding. A message opens with a two-byte version number (0x01 0x01 for IPP/1.1), a two-byte operation-id (in requests) or status-code (in responses), and a four-byte request-id, followed by tagged attribute groups. Each attribute is encoded as a value-tag, a name (with length prefix), and a value (with length prefix); multi-valued attributes repeat values with a zero-length name. This binary body is sent inside an HTTP POST with Content-Type: application/ipp, and the response is likewise an application/ipp body. IPP defines its own ipp: URI scheme (default port 631), which clients map onto http:/https: for the actual HTTP exchange."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "IPP is the job-submission and job-management transport and control layer between the client's print subsystem and the printer or print server. It sits above TCP and HTTP and below the page-description or document layer: IPP carries the document data and the processing instructions, but it does not itself define how a page is rendered."
    },
    {
      "kind": "paragraph",
      "text": "The actual content is a document format or page-description language — for example PDF, PostScript, PWG Raster, or JPEG — transported inside the IPP job. The flow is roughly: application → operating-system print subsystem → (rasterization or format conversion as needed) → IPP job over HTTP → printer or print server → interpreter and marking engine."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "IPP can be implemented directly in a printer's firmware, making the device an IPP Printer object reachable on port 631, or it can be fronted by a print server or spooler that presents an IPP interface on the printer's behalf."
    },
    {
      "kind": "paragraph",
      "text": "Modern network printers commonly implement IPP natively, advertise themselves via DNS-SD (Bonjour) and/or WS-Discovery, and expose their capabilities through Get-Printer-Attributes so that clients can configure jobs without a vendor driver. IPP is also usable over USB through the IPP-USB binding, allowing the same protocol to serve directly attached devices."
    },
    {
      "kind": "paragraph",
      "text": "The PWG states that IPP is supported by the large majority of printers currently sold; its IPP Everywhere page reports that \"98% of all printers sold today support IPP/2.0 and DNS-SD.\" This figure is presented here as a PWG claim rather than an independently verified benchmark."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "list",
      "items": [
        "Linux and Unix: CUPS (the Common UNIX Printing System) uses IPP as its native protocol and serves as a de facto reference implementation across many IPP versions; the OpenPrinting project maintains driverless and IPP tooling.",
        "Apple: macOS and iOS/iPadOS printing is built on CUPS and IPP. AirPrint is Apple's driverless-printing program layered on IPP plus Bonjour discovery.",
        "Microsoft Windows: Windows has long supported IPP as a printing transport. Microsoft's Windows Protected Print Mode (introduced with Windows 11 version 24H2 and Windows Server 2025) uses the inbox IPP class driver exclusively and blocks third-party drivers. Per Microsoft's published timeline, no new third-party drivers are accepted to Windows Update from January 15, 2026, and new printer installations default to the IPP inbox driver from July 1, 2026.",
        "Mobile and Android: Mopria and the Android print framework use IPP for driverless printing."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "paragraph",
      "text": "IPP is format-agnostic transport and control, not a page-description language — it complements PDF and PostScript rather than replacing them. A printer advertises which document formats it accepts via its supported-document-format attributes, and the client sends the matching format inside the IPP job."
    },
    {
      "kind": "paragraph",
      "text": "The historically important shift enabled by IPP is driverless printing. Instead of a vendor-specific driver generating a proprietary data stream, the client sends a well-known format — notably PWG Raster, PDF, or JPEG — that a compliant printer must understand. This is what IPP Everywhere, AirPrint, and Mopria formalize, which is why IPP is central to the industry's move away from per-model printer drivers."
    },
    {
      "kind": "paragraph",
      "text": "PostScript and vendor page-description languages can still be sent over IPP where a printer supports them, but they are payloads carried by IPP, not part of IPP itself."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "Today IPP — via RFC 8010, RFC 8011, and STD 92 together with the PWG IPP/2.x specifications — is the mainstream network-printing protocol and the substrate for driverless printing."
    },
    {
      "kind": "paragraph",
      "text": "IPP Everywhere (PWG 5100.14) defines a self-certifiable baseline so that any conforming client can print to any conforming printer without vendor software. Per the PWG specification, its required elements include IPP/2.0, DNS-SD network discovery, PWG Raster, and JPEG/JFIF (with JPEG required only for color devices), while PDF and IPP-USB are recommended."
    },
    {
      "kind": "paragraph",
      "text": "The same IPP foundation underlies Apple AirPrint and Mopria, giving desktop and mobile users out-of-the-box printing. Security in modern deployments uses TLS via the ipps: scheme and HTTPS transport binding defined in RFC 7472."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Vendor-neutral and standardized (IETF STD 92 plus PWG standards), enabling cross-vendor interoperability.",
        "Capability negotiation: clients can query exactly what a printer supports before submitting a job.",
        "Rich, standardized status and job management, including state, errors, and hold/release/cancel/restart.",
        "Rides on HTTP, inheriting mature transport, streaming, proxy traversal, authentication, and TLS security.",
        "Enables driverless printing through well-known formats (PWG Raster, PDF, JPEG), removing the need for per-model drivers.",
        "Integrates with discovery via DNS-SD/Bonjour and WS-Discovery, and works over both network and USB (IPP-USB).",
        "Has broad ecosystem adoption (CUPS, AirPrint, IPP Everywhere, Mopria)."
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
        "IPP standardizes submission, control, and capability discovery, but actual output depends on the printer's supported document formats; interoperability still requires a shared format.",
        "Security is only as strong as its deployment: plain IPP over HTTP is unencrypted, and confidentiality and integrity require TLS (ipps/HTTPS) and proper authentication, which are optional to configure.",
        "Firewall and port considerations: IPP relies on TCP 631 (and HTTP/HTTPS), which may need explicit network allowances.",
        "The full attribute model is large; older or minimal devices may implement only subsets, and legacy protocols (LPD, port 9100) persist in mixed environments.",
        "Advanced and finishing features vary by device; not every job-template attribute is universally supported."
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
        "LPR/LPD (RFC 1179) — an earlier Unix line-printer protocol. RFC 1179 is Informational and documents existing BSD practice; it is not an IETF-ratified standard.",
        "Raw port 9100 / AppSocket — simple socket printing with no capability negotiation.",
        "SMB/CIFS printer sharing — Windows-centric print sharing.",
        "PWG Raster, PDF, PostScript, JPEG/JFIF, and PCL — document and page formats carried by IPP.",
        "DNS-SD / mDNS (Bonjour) and WS-Discovery — printer discovery mechanisms used with IPP.",
        "HTTP, HTTPS, and TLS (RFC 7472 for the ipps scheme) — transport and security.",
        "AirPrint, IPP Everywhere, and Mopria — certification programs built on IPP.",
        "IPP-USB — a binding of IPP over USB."
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
          "period": "1996",
          "text": "According to published histories, Novell proposes an Internet printing protocol project; precursor work includes Xerox/Novell LDPA and IBM HTPP; an IETF Birds-of-a-Feather session is held in December 1996."
        },
        {
          "period": "1999",
          "text": "IPP/1.0 published as Experimental RFCs (RFC 2565 and companion documents)."
        },
        {
          "period": "September 2000",
          "text": "IPP/1.1 published: RFC 2910 (Encoding and Transport) and RFC 2911 (Model and Semantics)."
        },
        {
          "period": "November 2001",
          "text": "RFC 3196, IPP/1.1 Implementor's Guide."
        },
        {
          "period": "April 2003",
          "text": "RFC 3510, IPP URL Scheme."
        },
        {
          "period": "2005",
          "text": "IETF IPP working group concludes."
        },
        {
          "period": "2009",
          "text": "IPP/2.x published as a PWG Candidate Standard (PWG 5100.10-2009)."
        },
        {
          "period": "2011",
          "text": "IPP/2.x revised (PWG 5100.12-2011)."
        },
        {
          "period": "January 2013",
          "text": "IPP Everywhere first published (PWG 5100.14 v1.0)."
        },
        {
          "period": "March 2015",
          "text": "RFC 7472 (ipps/HTTPS transport binding) published; IPP/2.x was approved as a full PWG standard (PWG 5100.12-2015) later that year."
        },
        {
          "period": "2016",
          "text": "IPP Everywhere self-certification manual and tool suite released."
        },
        {
          "period": "January 2017",
          "text": "RFC 8010 and RFC 8011 published (obsoleting RFC 2910 and RFC 2911) and assigned Internet Standard status as STD 92. (Some secondary sources instead date the STD 92 designation to 2018.)"
        },
        {
          "period": "May 2020",
          "text": "IPP Everywhere v1.1 (PWG 5100.14) dated May 15, 2020."
        },
        {
          "period": "November 2024",
          "text": "IPP/2.x Fourth Edition (PWG 5100.12-2024)."
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
      "section": "tools",
      "slug": "cups"
    },
    {
      "section": "tools",
      "slug": "airprint"
    },
    {
      "section": "guides",
      "slug": "how-wireless-printing-works"
    },
    {
      "section": "brands",
      "slug": "hewlett-packard"
    },
    {
      "section": "mobile-printing",
      "slug": "what-is-airprint"
    },
    {
      "section": "guides",
      "slug": "how-printer-drivers-work"
    }
  ],
  "faqs": [
    {
      "q": "What port does IPP use?",
      "a": "IPP uses IANA-assigned TCP port 631. IPP messages travel as HTTP POST bodies with the Content-Type application/ipp, and the ipp: URI scheme defaults to port 631, mapped by clients onto http: or https: for the actual exchange."
    },
    {
      "q": "Is IPP an official standard?",
      "a": "Yes. IPP/1.1 was published by the IETF as RFC 2910 and RFC 2911 in September 2000 and reissued as RFC 8010 and RFC 8011 in January 2017, which carry full Internet Standard status as STD 92 (some sources cite 2018). The Printer Working Group maintains the IPP/2.x specifications."
    },
    {
      "q": "How does IPP enable driverless printing?",
      "a": "IPP lets a client query a printer's supported document formats and then send a well-known format the printer must understand — notably PWG Raster, PDF, or JPEG — instead of a vendor-specific driver stream. Programs such as IPP Everywhere, Apple AirPrint, and Mopria formalize this."
    },
    {
      "q": "What is the difference between IPP and IPP Everywhere?",
      "a": "IPP is the underlying protocol for network print submission and management. IPP Everywhere (PWG 5100.14) is a self-certifiable profile built on IPP that mandates specific baseline capabilities — including IPP/2.0, DNS-SD discovery, PWG Raster, and JPEG — so any conforming client can print to any conforming printer without vendor software."
    },
    {
      "q": "Does IPP replace PDF and PostScript?",
      "a": "No. IPP is format-agnostic transport and control, not a page-description language. It carries document formats such as PDF, PostScript, PWG Raster, and JPEG as payloads inside a print job; these formats remain responsible for how a page is rendered."
    }
  ],
  "sources": [
    {
      "title": "RFC 8011 — Internet Printing Protocol/1.1: Model and Semantics (STD 92)",
      "url": "https://datatracker.ietf.org/doc/rfc8011/",
      "publisher": "IETF"
    },
    {
      "title": "RFC 8010 — Internet Printing Protocol/1.1: Encoding and Transport (STD 92)",
      "url": "https://datatracker.ietf.org/doc/rfc8010/",
      "publisher": "IETF"
    },
    {
      "title": "STD 92 — Internet Printing Protocol/1.1",
      "url": "https://www.rfc-editor.org/info/std92",
      "publisher": "RFC Editor"
    },
    {
      "title": "RFC 2911 — Internet Printing Protocol/1.1: Model and Semantics",
      "url": "https://datatracker.ietf.org/doc/rfc2911/",
      "publisher": "IETF"
    },
    {
      "title": "RFC 2910 — Internet Printing Protocol/1.1: Encoding and Transport",
      "url": "https://datatracker.ietf.org/doc/rfc2910/",
      "publisher": "IETF"
    },
    {
      "title": "RFC 2565 — Internet Printing Protocol/1.0: Encoding and Transport (Experimental)",
      "url": "https://datatracker.ietf.org/doc/rfc2565/",
      "publisher": "IETF"
    },
    {
      "title": "RFC 3196 — Internet Printing Protocol/1.1 Implementor's Guide",
      "url": "https://datatracker.ietf.org/doc/rfc3196/",
      "publisher": "IETF"
    },
    {
      "title": "RFC 3510 — Internet Printing Protocol/1.1: IPP URL Scheme",
      "url": "https://datatracker.ietf.org/doc/rfc3510/",
      "publisher": "IETF"
    },
    {
      "title": "RFC 7472 — IPP over HTTPS Transport Binding and the 'ipps' URI Scheme",
      "url": "https://datatracker.ietf.org/doc/rfc7472/",
      "publisher": "IETF"
    },
    {
      "title": "RFC 1179 — Line Printer Daemon Protocol",
      "url": "https://datatracker.ietf.org/doc/rfc1179/",
      "publisher": "IETF"
    },
    {
      "title": "IPP Everywhere",
      "url": "https://www.pwg.org/ipp/everywhere.html",
      "publisher": "Printer Working Group"
    },
    {
      "title": "PWG 5100.14 v1.1 — IPP Everywhere (2020)",
      "url": "https://ftp.pwg.org/pub/pwg/candidates/cs-ippeve11-20200515-5100.14.pdf",
      "publisher": "Printer Working Group"
    },
    {
      "title": "PWG 5100.12-2015 — Internet Printing Protocol/2.0, 2.1, 2.2",
      "url": "https://ftp.pwg.org/pub/pwg/standards/std-ipp20-20151030-5100.12.pdf",
      "publisher": "Printer Working Group"
    },
    {
      "title": "PWG 5100.12-2024 — Internet Printing Protocol/2.0 Fourth Edition",
      "url": "https://ftp.pwg.org/pub/pwg/standards/std-ippbase23-20241108-5100.12.pdf",
      "publisher": "Printer Working Group"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "internet printing protocol",
    "ipp",
    "rfc 2911",
    "rfc 8011",
    "std 92",
    "ipp everywhere",
    "driverless printing",
    "pwg raster",
    "airprint",
    "mopria",
    "cups",
    "port 631"
  ],
  "cluster": "printing-protocols"
};

export default entry;
