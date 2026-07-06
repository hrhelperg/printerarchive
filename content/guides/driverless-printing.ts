import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "driverless-printing",
  "title": "Driverless Printing",
  "description": "How driverless printing works: the IPP, DNS-SD, and standard-raster foundation behind IPP Everywhere, AirPrint, and Mopria across every major OS.",
  "summary": "Driverless printing lets a client print without installing any printer-model-specific driver or static capability file. Instead, it relies on three standardized building blocks that every conforming printer implements: mDNS/DNS-SD (Bonjour) discovery, the Internet Printing Protocol (IPP) for transport and live capability queries, and a small set of self-describing document and raster formats (PWG Raster, Apple Raster/URF, PCLm, PDF, JPEG) the printer is guaranteed to accept. Because capabilities are fetched from the printer at print time rather than read from a locally stored driver, the same client can print to any conforming device. Three ecosystems implement this model on the shared IPP + DNS-SD + standard-raster foundation: the vendor-neutral IPP Everywhere standard from the Printer Working Group, Apple's AirPrint, and the Mopria Alliance's cross-vendor certification used natively by Android and Windows. It is now the mainstream print path on iOS, macOS, Android, Windows, Chrome OS, and Linux.",
  "difficulty": "advanced",
  "estimatedTime": "11 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Driverless printing is a model in which a client device (computer, phone, or tablet) prints to a printer without installing any printer-model-specific driver or static capability file. Instead of shipping vendor code that converts documents into a proprietary page description language (PDL), the client relies on three standardized building blocks that every conforming printer implements: a discovery protocol (mDNS/DNS-SD, commonly called Bonjour) to find the printer and learn its identity; the Internet Printing Protocol (IPP) as the transport and capability-query protocol; and a small set of standard, self-describing document and raster formats the printer is guaranteed to accept — chiefly PWG Raster, Apple Raster (URF), PCLm, PDF, and JPEG."
    },
    {
      "kind": "paragraph",
      "text": "Because capabilities are queried live from the printer over IPP rather than read from a locally stored driver, the same client can print to any conforming printer it encounters. The OpenPrinting/Debian characterization is precise: driverless printing refers to \"the ability of the client device … to print without having to install any static capability files or drivers (manufacturer-specific or otherwise) on the client.\""
    },
    {
      "kind": "paragraph",
      "text": "Three real-world ecosystems implement this model: IPP Everywhere (the vendor-neutral standard from the Printer Working Group, PWG), AirPrint (Apple's implementation), and Mopria (the Mopria Alliance's cross-vendor certification, used natively by Android and Windows). All three sit on the same IPP + DNS-SD + standard-raster foundation, which is why a single printer is typically certified for more than one of them at once."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "The model emerged from a decades-long problem: historically every printer model required its own driver — a PostScript PPD plus filters, a Windows minidriver, or a proprietary binary — which was unworkable for mobile devices with limited storage and for fleets spanning many printer brands."
    },
    {
      "kind": "paragraph",
      "text": "The pivotal moves came between 2010 and 2013. The PWG presented \"IPP Everywhere\" concept slides in May 2010. Apple announced AirPrint on September 15, 2010 (co-developed with Hewlett-Packard) and shipped it in iOS 4.2 on November 22, 2010, demonstrating that phones could print to network printers with zero driver installation using IPP, Bonjour, and a small raster/PDF format set. The PWG then generalized the idea into a vendor-neutral standard, publishing IPP Everywhere v1.0 (PWG 5100.14) on January 28, 2013, backed by the PWG Raster Format (PWG 5102.4) standardized in 2012."
    },
    {
      "kind": "paragraph",
      "text": "The Mopria Alliance was founded in September 2013 by Canon, HP, Samsung, and Xerox to certify cross-platform driverless printing, and its stack was adopted natively by Android. IPP Everywhere was later revised to v1.1 (PWG 5100.14-2020) on May 15, 2020 (authored by Ira McDonald and Michael Sweet, the original CUPS author), with a v2.0 update in progress."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "The architecture replaces \"a driver on the client\" with \"capabilities on the printer, queried at print time.\" Its components are:"
    },
    {
      "kind": "list",
      "items": [
        "Discovery layer — mDNS/DNS-SD (Bonjour). The printer multicasts its presence and a TXT record of key attributes on service types such as _ipp._tcp (and _ipps._tcp for TLS). Clients browse these records to list and identify printers.",
        "Transport and capability layer — IPP. IPP Everywhere requires IPP/2.0. The client issues Get-Printer-Attributes to retrieve the printer's supported media, resolutions, color modes, duplex, finishing, and — critically — its supported document formats. Jobs are submitted with operations such as Print-Job and Send-Document.",
        "Document/PDL layer — standardized formats. The printer must accept at least one standard format the client can produce without vendor code.",
        "Client-side dynamic capability construction. Rather than a preinstalled PPD, the client synthesizes capabilities on the fly from the IPP attributes. On CUPS this is materialized as an auto-generated PPD using the everywhere model (a temporary or on-demand queue), so legacy PPD-based applications keep working while no vendor driver is present."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "1. The user opens a document and the print dialog. The OS print subsystem enumerates printers discovered via DNS-SD (and, for USB, via IPP-over-USB, which makes a USB printer appear as a network printer). 2. When a printer is selected, the client sends IPP Get-Printer-Attributes and reads back the printer's capabilities and its list of supported document formats — for example a document-format-supported attribute containing image/pwg-raster, image/urf, application/pdf, image/jpeg, or application/PCLm. 3. The client chooses the best mutually supported format. Priority typically favors PDF when the printer supports it (the PDF is sent largely as-is); otherwise the client rasterizes the document to PWG Raster, Apple Raster, or PCLm at a resolution and color mode the printer advertised. 4. The client streams the job to the printer over IPP with the chosen document-format and the selected job attributes (media, sides, copies, finishings). Raster is streamed rather than spooled as one whole file, so large jobs do not overrun printer memory and printing starts promptly. 5. The printer, which contains the interpreter for that standard format, renders and prints. No vendor-specific filter runs on the client, which is what enables a driverless — and non-proprietary — print path."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "Using the CUPS/OpenPrinting pipeline as a concrete, documented example, several paths exist depending on the source document and the printer's supported formats:"
    },
    {
      "kind": "list",
      "items": [
        "PDF path (preferred when supported): PDF → pdftopdf (page management only) → printer, sent over IPP with format application/pdf and no rasterization.",
        "Text or other path to a raster printer: text → texttopdf → pdftopdf → PDF → gstoraster → rastertopwg → PWG Raster or Apple Raster (image/pwg-raster or image/urf) → printer. The rastertopwg filter can emit both PWG Raster and Apple Raster; the file is sent directly to the printer over IPP, so no vendor-specific filters are involved.",
        "PCLm path (for example, Wi-Fi Direct printing): text → texttopdf → pdftopdf → PDF → gstoraster → rastertopclm → PCLm → printer. The rastertopclm filter (in cups-filters since version 1.17.0) produces application/PCLm."
      ]
    },
    {
      "kind": "paragraph",
      "text": "In all paths the capability lookup is a separate control flow: an IPP query to the printer produces the attribute set, which the CUPS PPD generator (or the cups-filters generator via the driverless utility) turns into the everywhere/ippeve.ppd (or drvless.ppd) description that drives the filter chain and the print dialog."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "list",
      "items": [
        "macOS / iOS / iPadOS (AirPrint). AirPrint is built into the OS, so users do not need to install additional drivers or software. It uses IPP plus Bonjour and requires the device and printer to be reachable on the same network. AirPrint was introduced on iOS in 2010 and on the Mac in Mac OS X Lion (2011); later releases added Ethernet-connected support and driverless printing/scanning for USB-only AirPrint printers.",
        "Linux / Chrome OS (CUPS + OpenPrinting). CUPS supports driverless printing natively. Apple Raster support was added in CUPS 2.2.2 and mirrored in cups-filters 1.13.0, and CUPS 2.2.4 added direct browsing of DNS-SD printer broadcasts, enabling on-demand temporary queues without cups-browsed. Utilities include driverless and ippfind (locating printers), lpadmin -m everywhere or -m driverless:<uri> (creating queues), cups-browsed (auto-creating permanent queues), and ipp-usb (bridging USB printers to the IPP path). The forthcoming CUPS 3.x \"New Architecture\" is built around driverless printing. Chrome OS is listed by the PWG as a native IPP Everywhere client.",
        "Windows (Microsoft IPP Class Driver / modern print platform). Windows ships an inbox Microsoft IPP Class Driver — a universal driver that can communicate via IPP with any Mopria-certified printer — which underpins the modern print platform and Universal Print. Inbox support for Mopria-certified network printers arrived in Windows 10 (version 1809), with the full IPP Class Driver inbox for both network and USB attributed to Windows 10 version 21H2. Microsoft is deprecating third-party print drivers and steering vendors to Print Support Apps (PSAs) for value-add; Windows Protected Print (WPP) mode requires a Mopria-certified printer.",
        "Android (Mopria). Mopria print technology is built into the Android Default Print Service (and the Mopria Print Service app), providing driverless printing across Android devices."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to standards"
    },
    {
      "kind": "list",
      "items": [
        "IPP (Internet Printing Protocol). The core transport. IPP Everywhere mandates IPP/2.0; the IPP/2.x edition is PWG 5100.12 (Fourth Edition, 2024). IPP is an IETF-originated protocol layered on HTTP.",
        "IPP Everywhere. PWG 5100.14 — v1.0 (2013-01-28), v1.1 (2020-05-15), v2.0 in progress. It is the umbrella standard tying together IPP/2.0, DNS-SD, and the required document formats, plus a Printer Self-Certification program (manual: PWG 5100.20). It requires IPP/2.0, DNS-SD, PWG Raster, and JPEG/JFIF (JPEG for color printers), and recommends PDF.",
        "PWG Raster Format. PWG 5102.4-2012 (MIME image/pwg-raster). A simple, well-documented, streamable raster format derived from CUPS Raster, chosen over PostScript because embedded PostScript interpreters are heavy and fit poorly with the IPP/PWG model.",
        "DNS-SD / mDNS (Bonjour). IETF RFC 6762 (mDNS) and RFC 6763 (DNS-SD) provide zero-configuration discovery via _ipp._tcp and _ipps._tcp service records.",
        "Related PWG extensions. IPP Driver Replacement Extensions (\"NODRIVER\", PWG 5100.13) formalize replacing drivers with IPP queries; IPP Shared Infrastructure Extensions (\"INFRA\", PWG 5100.18) support cloud/enterprise proxy printing; PWG Media Standardized Names (PWG 5101.1) standardize the media names used in attributes.",
        "IPP-over-USB. A specification exposing IPP over a USB printer-class interface (USB class 7, subclass 1, protocol 4), so USB printers reach functional parity with network printers."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to technologies"
    },
    {
      "kind": "list",
      "items": [
        "PWG Raster (image/pwg-raster) and Apple Raster / URF (image/urf) are the two purpose-built driverless raster formats, and they are technically very similar. URF (\"Universal Raster Format\") is Apple's format used by AirPrint and is not officially publicly documented, though its close kinship with PWG Raster is well understood; CUPS's rastertopwg can emit both.",
        "PCLm is a separate, PDF-based streaming raster format handled by rastertopclm. Despite the \"PCL\" in the name it is unrelated to classic PCL 5c/e or PCL-XL, and it is mandated by the Wi-Fi Direct Print Services profile.",
        "PDF and JPEG (JFIF) are the standard high-level formats. PDF is generally preferred at print time because it can pass through with minimal processing.",
        "Wi-Fi Direct enables direct device-to-printer connections (the printer acts as an access point) with no router, and pairs with the driverless model — this is where PCLm is commonly required.",
        "IPP-over-USB (ipp-usb) brings the same driverless path to USB, while companion technologies (eSCL / sane-airscan) extend the \"driverless\" idea to scanning on multifunction devices."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "The model is explicitly vendor-neutral: printers implement generic standards rather than exposing proprietary PDLs to the client. The PWG states that 98% of printers sold today support IPP/2.0 and DNS-SD."
    },
    {
      "kind": "paragraph",
      "text": "Apple and Hewlett-Packard co-developed AirPrint; Apple lists Adobe, Conexant, and Qualcomm among AirPrint technology providers. The Mopria Alliance was founded by Canon, HP, Samsung, and Xerox in September 2013, with members including Google, Microsoft, and Qualcomm, and brands such as Brother, Epson, Konica Minolta, and Kyocera certifying products; Mopria reports more than 9,000 certified printer models across 24 brands. (These printer-count and market-share figures are the consortiums' own published statistics rather than independently verified data.)"
    },
    {
      "kind": "paragraph",
      "text": "Microsoft's direction reinforces the trend: an inbox IPP class driver that talks to any Mopria-certified printer, the deprecation of third-party drivers, and Print Support Apps as the sanctioned extensibility path. The manufacturer role shifts from \"write a driver for every OS and architecture\" to \"implement the standards correctly and add value via optional apps.\" In practice, printer IPP implementations still contain bugs, which is why CUPS and cups-filters maintain quirk handling and a more forgiving PPD generator."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Driverless printing is now the mainstream path on every major platform: iOS and macOS (AirPrint), Android (built into the default print service via Mopria), Windows (inbox IPP class driver, Universal Print, Protected Print mode), Chrome OS, and Linux (CUPS). The trajectory is toward driverless-only: CUPS 3.x is architected around it, and Microsoft's staged plan winds down third-party printer software distribution through Windows Update — no new third-party drivers are published to Windows Update from January 15, 2026, and from July 1, 2027 third-party driver updates are limited to security fixes only — pushing vendors toward IPP plus Print Support Apps."
    },
    {
      "kind": "paragraph",
      "text": "Security is a major driver. Eliminating third-party driver code — a historic source of crashes, memory leaks, and privilege-escalation vulnerabilities — is a stated benefit and underlies Windows Protected Print mode. The same standards-first approach is expanding to scanning (eSCL / sane-airscan) and to cloud and enterprise printing (IPP Shared Infrastructure / Universal Print)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"Driverless means no software is involved.\" The client still rasterizes or formats jobs and queries capabilities; what is removed is the model-specific vendor driver. The intelligence moves into the printer (which interprets the standard format) and into generic, standards-based client code.",
        "\"AirPrint, Mopria, and IPP Everywhere are competing, incompatible systems.\" They share the same IPP + DNS-SD + standard-raster foundation, and one printer is commonly certified for several. They differ mainly in certification programs, platform integration, and format emphasis (for example AirPrint's URF versus IPP Everywhere's PWG Raster).",
        "\"PCLm is a kind of PCL.\" No — PCLm is a PDF-based streaming raster format unrelated to PCL 5c/e or PCL-XL despite the name.",
        "\"A driverless printer has no capabilities file.\" It does — the capabilities live on the printer as IPP attributes and are fetched live; the client synthesizes a transient description (such as CUPS's everywhere PPD) instead of installing a static one.",
        "\"It only works over network Wi-Fi.\" IPP-over-USB (ipp-usb) and Wi-Fi Direct extend the same driverless model to USB and to router-less direct connections.",
        "\"URF / Apple Raster is a published open spec.\" It is Apple's format used by AirPrint and is not officially publicly documented; PWG Raster is the openly documented counterpart."
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
          "period": "2010 (May)",
          "text": "PWG presents IPP Everywhere concept slides."
        },
        {
          "period": "2010 (Sep 15)",
          "text": "Apple announces AirPrint, co-developed with Hewlett-Packard."
        },
        {
          "period": "2010 (Nov 22)",
          "text": "AirPrint ships in iOS 4.2, giving iPhone and iPad driverless printing for the first time."
        },
        {
          "period": "2011",
          "text": "AirPrint added to the Mac in Mac OS X Lion."
        },
        {
          "period": "2012",
          "text": "PWG Raster Format standardized (PWG 5102.4-2012)."
        },
        {
          "period": "2013 (Jan 28)",
          "text": "IPP Everywhere v1.0 published (PWG 5100.14)."
        },
        {
          "period": "2013 (Sep)",
          "text": "Mopria Alliance founded by Canon, HP, Samsung, and Xerox."
        },
        {
          "period": "~2017",
          "text": "CUPS 2.2.2 adds Apple Raster output (mirrored in cups-filters 1.13.0); CUPS 2.2.4 adds direct DNS-SD browsing and on-demand queues."
        },
        {
          "period": "2018",
          "text": "Microsoft adds Mopria-certified network printer support in Windows 10 version 1809."
        },
        {
          "period": "2020 (May 15)",
          "text": "IPP Everywhere v1.1 published (PWG 5100.14-2020; authors Ira McDonald and Michael Sweet)."
        },
        {
          "period": "2024",
          "text": "IPP/2.x Fourth Edition published (PWG 5100.12-2024)."
        },
        {
          "period": "2026 (Jan 15, planned)",
          "text": "Microsoft stops publishing new third-party printer drivers to Windows Update."
        },
        {
          "period": "2027 (Jul 1, planned)",
          "text": "Microsoft limits third-party printer driver updates to security fixes only."
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
      "slug": "ipp"
    },
    {
      "section": "tools",
      "slug": "airprint"
    },
    {
      "section": "tools",
      "slug": "mopria"
    },
    {
      "section": "tools",
      "slug": "bonjour-mdns-printing"
    },
    {
      "section": "guides",
      "slug": "printer-drivers"
    },
    {
      "section": "mobile-printing",
      "slug": "what-is-airprint"
    }
  ],
  "faqs": [
    {
      "q": "What is driverless printing?",
      "a": "Driverless printing is a model in which a computer, phone, or tablet prints to a printer without installing any printer-model-specific driver or static capability file. The client instead uses three standardized building blocks every conforming printer implements: mDNS/DNS-SD (Bonjour) discovery, the Internet Printing Protocol (IPP) for transport and live capability queries, and a small set of self-describing formats such as PWG Raster, Apple Raster, PCLm, PDF, and JPEG."
    },
    {
      "q": "How are AirPrint, Mopria, and IPP Everywhere related?",
      "a": "They are three ecosystems built on the same IPP + DNS-SD + standard-raster foundation. IPP Everywhere is the vendor-neutral PWG standard, AirPrint is Apple's implementation, and Mopria is the Mopria Alliance's cross-vendor certification used natively by Android and Windows. Because they share the same base, one printer is commonly certified for several at once; they differ mainly in certification programs, platform integration, and format emphasis."
    },
    {
      "q": "Does driverless printing mean no software runs on the client?",
      "a": "No. What is removed is the model-specific vendor driver. The client still queries the printer's capabilities over IPP and rasterizes or formats the job into a standard format the printer accepts. The interpreter for that standard format lives on the printer, and generic standards-based code on the client replaces the proprietary driver."
    },
    {
      "q": "Does driverless printing only work over Wi-Fi?",
      "a": "No. IPP-over-USB (via tools like ipp-usb) makes a USB printer appear as a network printer and brings the same driverless path to USB, while Wi-Fi Direct enables router-less direct device-to-printer connections. On Wi-Fi Direct, the PCLm format is commonly required."
    }
  ],
  "sources": [
    {
      "title": "IPP Everywhere",
      "url": "https://www.pwg.org/ipp/everywhere.html",
      "publisher": "Printer Working Group"
    },
    {
      "title": "IPP Everywhere v1.0 (PWG 5100.14, 2013-01-28)",
      "url": "https://ftp.pwg.org/pub/pwg/candidates/cs-ippeve10-20130128-5100.14.pdf",
      "publisher": "Printer Working Group"
    },
    {
      "title": "PWG Raster Format (PWG 5102.4-2012)",
      "url": "https://ftp.pwg.org/pub/pwg/candidates/cs-ippraster10-20120420-5102.4.pdf",
      "publisher": "Printer Working Group"
    },
    {
      "title": "IPP/2.x Fourth Edition (PWG 5100.12-2024)",
      "url": "https://ftp.pwg.org/pub/pwg/standards/std-ippbase23-20241108-5100.12.pdf",
      "publisher": "Printer Working Group"
    },
    {
      "title": "CUPS Driverless Printing",
      "url": "https://wiki.debian.org/CUPSDriverlessPrinting",
      "publisher": "Debian / OpenPrinting"
    },
    {
      "title": "About AirPrint",
      "url": "https://support.apple.com/en-us/HT201311",
      "publisher": "Apple"
    },
    {
      "title": "Apple's AirPrint Wireless Printing Coming to Users in November",
      "url": "https://www.apple.com/newsroom/2010/09/15Apples-AirPrint-Wireless-Printing-for-iPad-iPhone-iPod-touch-Coming-to-Users-in-November/",
      "publisher": "Apple"
    },
    {
      "title": "End of servicing plan for third-party printer drivers on Windows",
      "url": "https://learn.microsoft.com/en-us/windows-hardware/drivers/print/end-of-servicing-plan-for-third-party-printer-drivers-on-windows",
      "publisher": "Microsoft"
    },
    {
      "title": "Windows Protected Print Mode",
      "url": "https://learn.microsoft.com/en-us/windows/modern-print/windows-protected-print-mode/windows-protected-print-mode",
      "publisher": "Microsoft"
    },
    {
      "title": "Universal Print Connector with IPP",
      "url": "https://learn.microsoft.com/universal-print/fundamentals/universal-print-connector-with-ipp",
      "publisher": "Microsoft"
    },
    {
      "title": "What is Mopria",
      "url": "https://mopria.org/what-is-mopria",
      "publisher": "Mopria Alliance"
    },
    {
      "title": "Mopria Alliance Established to Simplify Printing (2013-09-24)",
      "url": "https://global.canon/en/news/2013/sep24e.html",
      "publisher": "Canon"
    },
    {
      "title": "RFC 6762: Multicast DNS",
      "url": "https://datatracker.ietf.org/doc/html/rfc6762",
      "publisher": "IETF"
    },
    {
      "title": "RFC 6763: DNS-Based Service Discovery",
      "url": "https://datatracker.ietf.org/doc/html/rfc6763",
      "publisher": "IETF"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "driverless printing",
    "ipp everywhere",
    "airprint",
    "mopria",
    "internet printing protocol",
    "pwg raster",
    "dns-sd",
    "apple raster",
    "pclm",
    "ipp-over-usb",
    "cups driverless",
    "microsoft ipp class driver"
  ],
  "cluster": "printer-drivers-and-rendering"
};

export default entry;
