import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "escl",
  "title": "eSCL / Driverless Scanning (AirScan, Mopria Scan)",
  "description": "eSCL is an XML-over-HTTP driverless scanning protocol, discovered via mDNS/DNS-SD, used by Apple AirScan, Mopria Scan, and Linux SANE.",
  "summary": "eSCL is a driverless network scanning protocol that lets a client operate a scanner or the scan unit of a multifunction device over a network without installing a device-specific driver. Requests and responses travel over ordinary HTTP(S), scan parameters and device capabilities are expressed in XML, and devices are found automatically through DNS-SD over multicast DNS. The protocol originated at Hewlett-Packard and is published publicly by the Mopria Alliance; Apple surfaces it as AirScan and Mopria brands its ecosystem as Mopria Scan, but all refer to the same wire protocol. eSCL should not be confused with the separate PWG IPP Scan Service (PWG 5100.17) or Microsoft's WSD/WS-Scan.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "eSCL originated at Hewlett-Packard. HP's own support documentation describes the required scanning protocol for AirPrint scanners as \"eSCL, an XML over HTTP originally created by HP.\" This authorship is corroborated by the XML namespace observed on real devices, http://schemas.hp.com/imaging/escl/2011/05/03 — an HP-controlled schema URI dated 2011."
    },
    {
      "kind": "paragraph",
      "text": "Apple uses eSCL as the driverless scanning counterpart to AirPrint, surfaced under the name AirScan (attested through macOS process and framework names such as AirScanScanner). HP documents eSCL-based scanning as working on macOS 10.12 (Sierra) and newer (per HP's support page)."
    },
    {
      "kind": "paragraph",
      "text": "The Mopria Alliance publishes the eSCL specification publicly under a license click-through (titled \"Mopria Alliance eSCL Scan Technical Specification\"), positioning it as a vendor-neutral, cross-platform scanning protocol that any vendor can implement and certify against. On Linux and other open-source systems, two independent SANE backends implement the protocol: escl, added to SANE-backends in release 1.0.29, and sane-airscan, a fuller implementation that also supports Microsoft's WSD."
    },
    {
      "kind": "paragraph",
      "text": "Exact Mopria specification version numbers and revision dates could not be verified from open sources, because the specification sits behind Mopria's license gate; this page therefore does not assert a specific spec version or a precise chronology of the HP, Apple, and Mopria milestones beyond the 2011 namespace date."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Before driverless scanning, using a network scanner required a vendor- and OS-specific driver or backend — a TWAIN, WIA, ICA, or SANE driver installed per model and per platform. This created well-known friction: no drivers for mobile operating systems, drivers that broke after OS upgrades, no standard way to enumerate a scanner's capabilities, and no interoperability across manufacturers."
    },
    {
      "kind": "paragraph",
      "text": "Driverless printing (via IPP Everywhere and AirPrint) had already removed this friction for printing. eSCL brought the same \"it just works over the network\" model to scanning, letting any conforming client operate any conforming scanner using only HTTP, XML, and mDNS — components that every modern operating system already ships."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "eSCL is a compact RESTful HTTP + XML protocol. On real devices the resources hang off a base path — most commonly /eSCL, though the sane-airscan documentation notes the path is advertised in discovery and can differ per device."
    },
    {
      "kind": "paragraph",
      "text": "A typical flow, as observed through reverse engineering and open-source implementations (the authoritative definitions live in the Mopria specification):"
    },
    {
      "kind": "list",
      "items": [
        "Discovery. The client browses mDNS/DNS-SD for the scanner service and learns the host, port, and eSCL base path, which is advertised in the DNS-SD TXT record (for example rs=eSCL).",
        "GET /eSCL/ScannerCapabilities returns an XML document describing supported resolutions, color modes, source (flatbed, ADF, duplex), media sizes, and output formats.",
        "GET /eSCL/ScannerStatus returns the current device and job state.",
        "POST /eSCL/ScanJobs submits a scan-settings XML document; on success the device creates a new job resource whose location is returned to the client (the job document URI is device-dependent, e.g. a Scans/<unique-id> form).",
        "The client then retrieves the scanned image data from the job resource and can poll status until the job completes; it may delete the job resource when done."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The XML reuses HP's eSCL namespace (http://schemas.hp.com/imaging/escl/2011/05/03) together with the PWG Semantic Model namespace (http://www.pwg.org/schemas/2010/12/sm), meaning eSCL borrows PWG semantic-model vocabulary for scan concepts."
    },
    {
      "kind": "paragraph",
      "text": "For discovery, eSCL scanners advertise via DNS-SD using two service types:"
    },
    {
      "kind": "list",
      "items": [
        "_uscan._tcp — eSCL over HTTP",
        "_uscans._tcp — eSCL over HTTPS (TLS)"
      ]
    },
    {
      "kind": "paragraph",
      "text": "These sit alongside the printing service types _ipp._tcp and _ipps._tcp and rely on the same zero-configuration mechanisms as driverless printing: multicast DNS (RFC 6762) and DNS-SD (RFC 6763)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the capture pipeline"
    },
    {
      "kind": "paragraph",
      "text": "eSCL is the acquisition and transport layer between a client and the scan hardware. It sits above the scanner firmware and imaging engine and below the application that consumes the image."
    },
    {
      "kind": "paragraph",
      "text": "On the client side it typically feeds a platform imaging framework — Apple's Image Capture / ICA, a SANE backend on Linux, or an Android scan intent — which then hands the raw scanned image (JPEG, PDF, or raw raster) to downstream steps such as document assembly, deskew and crop, OCR, or PDF generation. eSCL negotiates what is scanned (resolution, color mode, source, area, output format) and delivers the bytes; it does not itself perform OCR or document post-processing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "list",
      "items": [
        "macOS, iOS, and iPadOS: eSCL is Apple's driverless scanning path, surfaced as AirScan. An AirPrint-capable multifunction device with a scanner is expected to implement eSCL, and scanning works through Image Capture and the system panes without a vendor driver. HP documents this as working since macOS 10.12.",
        "Android: the Mopria ecosystem (Mopria Scan) uses the eSCL specification for driverless scanning.",
        "Linux and BSD: the SANE backends escl and sane-airscan implement eSCL; sane-airscan additionally implements WSD.",
        "ChromeOS and cloud clients: the protocol's plain HTTP/XML nature makes it usable from thin clients and services, a topic covered in OpenPrinting/PWG driverless-scanning materials.",
        "Windows: Windows has historically favored WSD/WS-Scan for driverless scanning rather than eSCL."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to scanners"
    },
    {
      "kind": "paragraph",
      "text": "eSCL is implemented in device firmware and the embedded web server of network scanners and multifunction devices — the same box that answers _ipp._tcp for printing answers _uscan._tcp for scanning."
    },
    {
      "kind": "paragraph",
      "text": "Because the specification is public, it is broadly implemented. The sane-airscan project reports interoperability testing across devices from Brother, Canon, Dell, Epson, HP, Kyocera, Lexmark, OKI, Panasonic, Pantum, Ricoh, Samsung, and Xerox — evidence of wide, multi-vendor adoption, though this is self-reported testing coverage rather than a conformance guarantee, and support and completeness vary by model. Mopria certification provides a formal conformance path for multifunction devices and scanners."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and OCR"
    },
    {
      "kind": "paragraph",
      "text": "eSCL negotiates the output image format as part of the capabilities and scan-settings exchange; devices commonly offer raster formats such as JPEG and frequently PDF directly from the device. The exact format and resolution lists are device-specific and defined per each scanner's capabilities document."
    },
    {
      "kind": "paragraph",
      "text": "eSCL itself does not define OCR. Searchable-PDF creation and text recognition happen client-side or downstream, after eSCL delivers the image: the platform or application runs OCR and wraps the recognized text into a PDF. In short, eSCL is the pipe that moves pixels off the scanner; PDF packaging and OCR are separate stages layered on top."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Driverless scanning via eSCL is now the mainstream way modern network multifunction devices are scanned from Apple platforms and Android, and it is a fully supported path on Linux. It removes per-model driver maintenance, works on mobile operating systems that never had scanner drivers, and — because it rides on HTTP, XML, and mDNS — it survives OS upgrades that historically broke binary drivers."
    },
    {
      "kind": "paragraph",
      "text": "eSCL coexists with, rather than replaces, legacy local interfaces such as TWAIN, WIA, and SANE drivers, and with WSD on Windows networks."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "No vendor driver required on the client; it uses ubiquitous HTTP, XML, and mDNS.",
        "Cross-platform and cross-vendor by design, spanning macOS, iOS, Android, and Linux and many manufacturers.",
        "Publicly available specification from Mopria, which lowers the barrier to implementation and enables independent open-source backends.",
        "Automatic discovery via DNS-SD, requiring no manual configuration on a shared LAN segment.",
        "Optional TLS through the _uscans._tcp / HTTPS variant for encrypted transport.",
        "Built-in capability negotiation, so clients adapt to each device's supported modes."
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
        "Not a formal standards-body output. eSCL is an industry-alliance specification (Mopria) that originated at a single vendor (HP); it is not an ISO, IETF, or W3C standard, and the specification sits behind a license click-through. Much public technical knowledge derives from reverse engineering.",
        "Implementation variance. Base paths, supported formats, and completeness differ across devices and firmware; some models are only partially compliant.",
        "Discovery depends on mDNS reachability. DNS-SD works within a local segment; across subnets or VLANs it needs an mDNS reflector or relay, and networks that block multicast can defeat discovery.",
        "Fragmented ecosystem. Windows leans on WSD and the PWG defined its own IPP Scan Service, so driverless scanning is not a single universal standard the way driverless printing has become more unified.",
        "No OCR or document logic in the protocol; those must be provided by the client."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Related standards"
    },
    {
      "kind": "list",
      "items": [
        "PWG IPP Scan Service — PWG 5100.17, a candidate standard dated 2014-09-18, is a separate driverless-scanning standard from the Printer Working Group that binds the PWG Semantic Model Scan service onto IPP (defining IPP-based scan operations). It is distinct from eSCL, though both draw on the PWG Semantic Model vocabulary.",
        "WSD / WS-Scan (Web Services for Devices) is Microsoft's SOAP/HTTP web-services scanning protocol and the historical Windows path; it is implemented alongside eSCL by sane-airscan.",
        "IPP, IPP Everywhere, and AirPrint are the driverless printing lineage that eSCL parallels for scanning, sharing the same discovery model and often the same devices.",
        "DNS-SD (RFC 6763) and mDNS (RFC 6762) provide the zero-configuration discovery layer eSCL relies on.",
        "PWG Semantic Model supplies the abstract scan and print vocabulary reused in eSCL XML."
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
          "period": "2011",
          "text": "the eSCL XML schema namespace is dated (schemas.hp.com/imaging/escl/2011/05/03), consistent with HP's authorship of the protocol."
        },
        {
          "period": "2014-09-18",
          "text": "the Printer Working Group publishes the IPP Scan Service candidate standard (PWG 5100.17), a separate driverless-scanning standard."
        },
        {
          "period": "macOS 10.12 (Sierra) era",
          "text": "eSCL-based scanning is documented as working on macOS for AirPrint scanners (per HP)."
        },
        {
          "period": "2019–2020",
          "text": "open-source driverless scanning matures: the escl backend is added in SANE-backends 1.0.29, and sane-airscan (eSCL plus WSD) is developed and covered by OpenPrinting."
        },
        {
          "period": "Ongoing",
          "text": "the Mopria Alliance publishes the eSCL specification publicly and certifies devices."
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
      "slug": "airprint"
    },
    {
      "section": "tools",
      "slug": "bonjour-mdns-printing"
    },
    {
      "section": "guides",
      "slug": "driverless-printing"
    },
    {
      "section": "guides",
      "slug": "network-scanners"
    },
    {
      "section": "tools",
      "slug": "ipp"
    },
    {
      "section": "tools",
      "slug": "sane"
    }
  ],
  "faqs": [
    {
      "q": "Is eSCL the same as AirScan and Mopria Scan?",
      "a": "Yes. eSCL is the underlying wire protocol. AirScan is Apple's name for eSCL support on macOS and iOS, and Mopria Scan is the Mopria Alliance's branding for its eSCL-based ecosystem, notably on Android. All three refer to the same HTTP-and-XML protocol."
    },
    {
      "q": "Who created eSCL?",
      "a": "The protocol originated at Hewlett-Packard, per HP's own support documentation, and this is corroborated by the HP-owned XML namespace (schemas.hp.com/imaging/escl/2011/05/03) seen on real devices. The Mopria Alliance now publishes the specification publicly under a license click-through."
    },
    {
      "q": "How does a client find an eSCL scanner?",
      "a": "Through DNS-SD over multicast DNS. Scanners advertise the service types _uscan._tcp (over HTTP) and _uscans._tcp (over HTTPS/TLS), and the TXT record carries details such as the eSCL base path (for example rs=eSCL)."
    },
    {
      "q": "Does eSCL do OCR or make searchable PDFs?",
      "a": "No. eSCL negotiates the scan settings and delivers the image bytes, and devices often output PDF directly, but OCR and searchable-PDF creation happen client-side or downstream after eSCL delivers the image."
    },
    {
      "q": "How is eSCL different from WSD and the PWG IPP Scan Service?",
      "a": "They are three distinct driverless-scanning approaches. eSCL is the Mopria/HP HTTP-and-XML protocol used by Apple and Android; WSD/WS-Scan is Microsoft's SOAP-based Windows path; and PWG 5100.17 (IPP Scan Service, dated 2014-09-18) binds the PWG Semantic Model Scan service onto IPP. eSCL and IPP Scan both reference the PWG Semantic Model but are not the same standard."
    }
  ],
  "sources": [
    {
      "title": "Mopria Alliance eSCL Scan Technical Specification (public download)",
      "url": "https://mopria.org/spec-download",
      "publisher": "Mopria Alliance"
    },
    {
      "title": "Scan in macOS — eSCL, \"XML over HTTP originally created by HP\"",
      "url": "https://support.hp.com/us-en/document/c04945509",
      "publisher": "HP"
    },
    {
      "title": "sane-airscan — universal eSCL (AirScan) and WSD driver",
      "url": "https://github.com/alexpevzner/sane-airscan",
      "publisher": "Alexander Pevzner / GitHub"
    },
    {
      "title": "sane-airscan(5) man page",
      "url": "https://github.com/alexpevzner/sane-airscan/blob/master/sane-airscan.5.md",
      "publisher": "Alexander Pevzner / GitHub"
    },
    {
      "title": "sane-escl(5) man page",
      "url": "https://manpages.ubuntu.com/manpages/focal/man5/sane-escl.5.html",
      "publisher": "Ubuntu manpages"
    },
    {
      "title": "SANE Backends 1.0.29 release notes (escl backend added)",
      "url": "https://gitlab.com/sane-project/backends/-/releases/1.0.29",
      "publisher": "SANE Project / GitLab"
    },
    {
      "title": "eSCL — Debian Wiki",
      "url": "https://wiki.debian.org/eSCL",
      "publisher": "Debian Project"
    },
    {
      "title": "PWG 5100.17: IPP Scan Service (2014-09-18)",
      "url": "https://ftp.pwg.org/pub/pwg/candidates/cs-ippscan10-20140918-5100.17.pdf",
      "publisher": "Printer Working Group"
    },
    {
      "title": "PWG standards index",
      "url": "https://www.pwg.org/standards.html",
      "publisher": "Printer Working Group"
    },
    {
      "title": "Reverse Engineering eSCL / Apple AirScan (namespaces, endpoints, _uscan._tcp)",
      "url": "https://gist.github.com/markosjal/79d03cc4f1fd287016906e7ff6f07136",
      "publisher": "markosjal / GitHub Gist"
    },
    {
      "title": "DNS-SD service types",
      "url": "https://www.dns-sd.org/servicetypes.html",
      "publisher": "dns-sd.org"
    },
    {
      "title": "RFC 6763: DNS-Based Service Discovery",
      "url": "https://datatracker.ietf.org/doc/html/rfc6763",
      "publisher": "IETF"
    },
    {
      "title": "OpenPrinting News, January 2020",
      "url": "https://openprinting.github.io/OpenPrinting-News-January-2020/",
      "publisher": "OpenPrinting"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "escl",
    "driverless scanning",
    "airscan",
    "mopria scan",
    "network scanning protocol",
    "dns-sd scanning",
    "mdns scanner discovery",
    "sane-airscan",
    "scannercapabilities",
    "_uscan._tcp",
    "xml over http scanning",
    "mopria escl specification"
  ],
  "cluster": "scanning-standards",
  "modernTools": [
    "smart-printer"
  ],
  "purpose": "A driverless network scanning protocol that drives scanners over HTTP and XML without a device-specific driver."
};

export default entry;
