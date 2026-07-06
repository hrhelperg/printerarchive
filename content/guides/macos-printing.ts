import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "macos-printing",
  "title": "macOS Printing",
  "description": "How macOS printing works: the CUPS-based print subsystem, Quartz/PDF imaging, IPP, AirPrint driverless printing, filters, backends, and standards.",
  "summary": "macOS printing is built on CUPS, a modular IPP-centric print system Apple adopted with Mac OS X 10.2 and later acquired. Above CUPS, macOS layers a PDF-based imaging model (Quartz 2D / Core Graphics), Cocoa and legacy Carbon print dialogs, and AirPrint driverless printing built on IPP and Bonjour. This page explains the whole subsystem: how jobs flow from the drawing layer through the cupsd scheduler, MIME-driven filters, and device backends; how driverless and legacy PPD paths differ; and how the stack relates to IPP, IPP Everywhere, PPD, LPD, and printer manufacturers.",
  "difficulty": "intermediate",
  "estimatedTime": "9 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "macOS's printing subsystem is built on CUPS, a modular, IPP-centric printing system that acts as a local print server — spooler, scheduler, filter chain, and device backends — on every Mac. Apple adopted CUPS with Mac OS X 10.2 and later acquired the source code outright."
    },
    {
      "kind": "paragraph",
      "text": "Above CUPS, macOS layers its own PDF-based imaging model (Quartz 2D / Core Graphics), its Cocoa and legacy Carbon print dialogs, and Apple's driverless printing technology, AirPrint, which is an application of the Internet Printing Protocol (IPP). The long-run architectural direction — shared with the wider OpenPrinting community — is \"driverless\": discovering printers over Bonjour (DNS-SD) and sending well-known document formats such as PDF, JPEG, and raster formats directly over IPP, rather than shipping a per-model printer driver for every device."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "CUPS was created by Michael Sweet of Easy Software Products, who began development in 1997; the first public betas appeared in 1999. An early design used the Line Printer Daemon (LPD) protocol, but because of LPD's limitations and vendor incompatibilities, IPP was chosen as the foundation instead."
    },
    {
      "kind": "paragraph",
      "text": "In March 2002 Apple adopted CUPS as the printing system for Mac OS X 10.2 (Jaguar); 10.2 itself shipped later that year. In February 2007 Apple hired Michael Sweet and purchased the CUPS source code."
    },
    {
      "kind": "paragraph",
      "text": "Sweet left Apple on December 20, 2019, and in 2020 the OpenPrinting organization forked the project (Sweet continuing work on it). Since then there are two lineages: Apple CUPS, shipped in macOS, iOS, and iPadOS, and OpenPrinting CUPS, developed for Linux and other Unix-like systems. The last standalone Apple CUPS release was 2.3.6 (May 25, 2022); OpenPrinting CUPS reached 2.4.19 (April 27, 2026). There is no released stable CUPS 3.0; the 3.x line is described as a future, driverless-focused direction rather than a shipped release."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "The macOS print stack is layered:"
    },
    {
      "kind": "list",
      "items": [
        "Application drawing layer — apps draw pages using Quartz 2D (part of the Core Graphics framework), macOS's 2D imaging model, whose native graphics model is PDF. The print dialog is provided by Cocoa (NSPrintPanel / NSPrintOperation) or, historically, the Carbon Core Printing APIs (PMPrintSession, PMPrintSettings, PMPageFormat), which are now legacy/deprecated in favor of the Cocoa classes.",
        "CUPS scheduler (cupsd) — the central daemon. It implements IPP over HTTP/1.1, provides a web administration/status interface, and supports printer classes (groups of printers that share a queue). It is composed of internal modules covering areas such as authorization, client handling, IPP, jobs, configuration, logging, the main loop, and MIME handling. (The exact internal-module breakdown is drawn from secondary summaries of the CUPS software-design documentation.)",
        "Filter system — a chain of conversion filters selected via two MIME databases, mime.types (recognized input formats) and mime.convs (which program converts each type), transforming a job into the printer's final language/format, using the intermediate CUPS raster format (application/vnd.cups-raster) where needed.",
        "Backends — the final-stage components that transmit data to a device or network connection.",
        "Legacy driver description — traditional drivers are described by PPD (PostScript Printer Description) files, an Adobe format; modern setups replace these with driverless IPP.",
        "LPD compatibility — a helper, cups-lpd, converts LPD requests into IPP; System V (lp) and Berkeley (lpr) command-line interfaces are provided."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "When a user prints, the application renders the document through Quartz into a device-independent representation (PDF). The job is submitted to the local cupsd scheduler via IPP. The scheduler authenticates and authorizes the request, queues it, and hands it to the filter system."
    },
    {
      "kind": "paragraph",
      "text": "The filters identify the input MIME type and select a conversion path. For a driverless AirPrint or IPP Everywhere printer, macOS sends a format the printer advertises support for — such as PDF, JPEG, or a raster format — with minimal conversion. For a legacy PPD-described printer, the chain rasterizes and converts the data into the printer's page-description language."
    },
    {
      "kind": "paragraph",
      "text": "The chosen backend then delivers the bytes to the printer over the appropriate transport. Printers are discovered automatically over Bonjour (DNS-SD), so in the AirPrint case no driver download or installation is required."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "The path data takes through the subsystem:"
    },
    {
      "kind": "list",
      "items": [
        "App → Quartz/Core Graphics: the app draws pages; output is captured as PDF, macOS's native imaging model.",
        "Print dialog → CUPS: the Cocoa or Carbon print panel submits the job to cupsd as an IPP request, with options such as copies, page ranges, media, and finishing.",
        "Scheduler queues the job: authorization, URI validation, and job management accept and spool it.",
        "MIME detection: the filter system determines the input type via mime.types / mime.convs.",
        "Filtering / conversion: on the driverless path the job is kept in a printer-advertised format (PDF, JPEG, or a raster format) with minimal conversion; on the legacy PPD path it is converted to the CUPS raster intermediate and then a final filter emits the printer's language (for example PCL, ESC/P, or ZPL).",
        "Backend transmission: the backend sends the data over USB, or over the network via IPP, socket/AppSocket (JetDirect), LPD, or SMB.",
        "Printer: the device receives a format it understands and prints; status flows back through the backend and filters to the scheduler."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "paragraph",
      "text": "CUPS is a system component of macOS (and iOS/iPadOS), started and supervised by the OS service manager, launchd. The scheduler listens on the standard IPP port 631."
    },
    {
      "kind": "paragraph",
      "text": "User-facing configuration lives in System Settings → Printers & Scanners (historically the Print & Fax / Print & Scan preference pane, with per-printer proxy apps and, in earlier releases, a Printer Setup Utility). The imaging layer (Quartz 2D / Core Graphics) and the print dialogs are the OS-level entry points applications use; AirPrint discovery is handled through the OS's Bonjour (mDNS/DNS-SD) stack."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to standards"
    },
    {
      "kind": "paragraph",
      "text": "The subsystem is standards-first:"
    },
    {
      "kind": "list",
      "items": [
        "IPP (Internet Printing Protocol) — the Printer Working Group (PWG) standard that CUPS uses as its native protocol; CUPS is widely regarded as a reference implementation. IPP was proposed in the mid-1990s; IPP/1.0 shipped as experimental RFCs in 1999; IPP/1.1 as RFC 2910/2911; updated by RFC 8010/8011 (January 2017) and adopted as Internet Standard STD 92 (June 2018). IPP runs over HTTP on port 631. IPP/2.0 (with 2.1 and 2.2) was published by the PWG as PWG 5100.12, first edition dated 2011.",
        "IPP Everywhere — published by the PWG in 2013 as the common baseline for driverless printing, with a self-certification manual and tool suite added in 2016 (PWG 5100.20-2016).",
        "PDF and JPEG, together with raster formats used for driverless printing, are the document formats exchanged with driverless printers.",
        "PPD — Adobe's PostScript Printer Description format, used for legacy driver metadata.",
        "LPD (RFC 1179) and the System V and Berkeley command interfaces provide backward compatibility."
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
        "Quartz 2D / Core Graphics / PDF: PDF is macOS's native imaging model, which is why the print pipeline is fundamentally PDF-based; the same technology underlies on-screen rendering and Preview.",
        "Bonjour (DNS-SD / mDNS): used for printer discovery. A DNS-SD/mDNS discovery backend was introduced around CUPS 1.4, with Avahi-based discovery added around CUPS 1.6 on Linux. (These version boundaries are secondary-sourced.)",
        "AirPrint: Apple's driverless technology built on IPP and Bonjour; introduced with iOS 4.2 on November 22, 2010, and later extended to the Mac in the OS X Lion era.",
        "HTTP: IPP is layered on HTTP/1.1, which is why cupsd embeds an HTTP server.",
        "PostScript / Ghostscript: on Linux, Ghostscript is commonly used to rasterize PostScript into CUPS raster; macOS uses Apple-supplied filters rather than Ghostscript."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "CUPS historically let printer vendors supply PPD files and CUPS filters or backends — for example HP's HPLIP, the cross-vendor Gutenprint drivers, ESC/P for Epson devices, ZPL for Zebra label printers, and PCL for HP-compatible devices. These are described here as examples of the driver model, not endorsements."
    },
    {
      "kind": "paragraph",
      "text": "The industry shift is away from per-vendor drivers toward driverless operation: a printer advertises the formats and capabilities it supports over IPP and Bonjour, and the OS prints without a model-specific driver. AirPrint compatibility is implemented by the manufacturers in firmware, and Apple maintains the compatibility list from manufacturer-supplied data (numbering roughly several thousand models across around two dozen brands as of about 2020 — an approximate, time-bound figure). Apple's About AirPrint page names Adobe Systems, Conexant Systems, and Qualcomm Technologies as AirPrint technology providers."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Driverless printing is now the mainstream path on macOS. Apple's About AirPrint page states that AirPrint delivers \"full-quality printed output ... without the need to download or install drivers,\" with features it describes as \"easy discovery, automatic media selection and enterprise-class finishing\" (these are direct Apple quotations, not the encyclopedia's own characterization)."
    },
    {
      "kind": "paragraph",
      "text": "IPP now underpins several logo and certification programs, including AirPrint, IPP Everywhere, and Mopria, and is supported by the large majority of printers sold. The OpenPrinting direction — the CUPS 3.x line, libcups3, and Printer Applications — is to make driverless/IPP the default and to phase out legacy PPD-based drivers. On Linux, the \"everywhere\" model (lpadmin -m everywhere) is the standard way to add IPP Everywhere/AirPrint queues."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"AirPrint is a file format or a replacement for IPP.\" AirPrint is Apple's driverless printing feature built on top of IPP plus Bonjour discovery; it is not a separate protocol stack.",
        "\"CUPS is only a Linux thing.\" CUPS is the printing system in macOS, iOS, and iPadOS; Apple owns the Apple-CUPS lineage. OpenPrinting CUPS is the separate community fork for other systems.",
        "\"macOS still needs a downloaded driver for every printer.\" For AirPrint/IPP Everywhere devices no driver is required; drivers are a legacy fallback for older printers.",
        "\"CUPS uses Ghostscript on the Mac.\" Ghostscript is a common Linux rasterizer; macOS uses Apple's own filters and its PDF-based pipeline.",
        "\"CUPS still stands for 'Common UNIX Printing System.'\" The name was shortened to just \"CUPS\" from version 1.4 over UNIX trademark concerns.",
        "\"AirPrint requires Wi-Fi.\" It requires the device and printer to be on the same local network; Ethernet-connected Macs can use AirPrint, and USB-only printers can print driverlessly over USB from a Mac."
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
          "period": "1996–1999",
          "text": "IPP standardized at the PWG/IETF; IPP/1.0 published as experimental RFCs in 1999."
        },
        {
          "period": "1997",
          "text": "Michael Sweet (Easy Software Products) begins developing CUPS."
        },
        {
          "period": "1999",
          "text": "First public CUPS betas."
        },
        {
          "period": "March 2002",
          "text": "Apple adopts CUPS as the printing system for Mac OS X 10.2 (Jaguar)."
        },
        {
          "period": "February 2007",
          "text": "Apple hires Michael Sweet and purchases the CUPS source code."
        },
        {
          "period": "~2008 (CUPS 1.4)",
          "text": "Name shortened to \"CUPS\"; DNS-SD/mDNS (Bonjour) discovery backend added."
        },
        {
          "period": "2011",
          "text": "IPP/2.0 published by the PWG as PWG 5100.12."
        },
        {
          "period": "November 22, 2010",
          "text": "AirPrint launches with iOS 4.2."
        },
        {
          "period": "~2011–2012",
          "text": "AirPrint extended to macOS (OS X Lion era)."
        },
        {
          "period": "2013",
          "text": "IPP Everywhere published; self-certification suite added 2016."
        },
        {
          "period": "January 2017 / June 2018",
          "text": "IPP updated (RFC 8010/8011) and adopted as Internet Standard STD 92."
        },
        {
          "period": "December 20, 2019",
          "text": "Michael Sweet leaves Apple."
        },
        {
          "period": "2020",
          "text": "OpenPrinting forks CUPS; Apple CUPS and OpenPrinting CUPS diverge."
        },
        {
          "period": "May 25, 2022",
          "text": "Last standalone Apple CUPS release (2.3.6)."
        },
        {
          "period": "April 27, 2026",
          "text": "OpenPrinting CUPS 2.4.19."
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
      "section": "guides",
      "slug": "cups-architecture"
    },
    {
      "section": "tools",
      "slug": "airprint"
    },
    {
      "section": "tools",
      "slug": "cups"
    },
    {
      "section": "tools",
      "slug": "ipp"
    },
    {
      "section": "tools",
      "slug": "bonjour-mdns-printing"
    },
    {
      "section": "mobile-printing",
      "slug": "what-is-airprint"
    }
  ],
  "faqs": [
    {
      "q": "Does macOS use CUPS for printing?",
      "a": "Yes. CUPS is the core print subsystem in macOS (and in iOS and iPadOS). Apple adopted CUPS with Mac OS X 10.2 in 2002 and purchased the source code in 2007. It runs as a local print server managed by launchd and listens on IPP port 631."
    },
    {
      "q": "Do I need a printer driver on a Mac?",
      "a": "For AirPrint or IPP Everywhere printers you do not need to install a driver: the printer advertises the formats and capabilities it supports over IPP and Bonjour, and macOS prints driverlessly. Traditional PPD-based drivers remain a fallback for older printers."
    },
    {
      "q": "Is AirPrint the same as IPP?",
      "a": "No. AirPrint is Apple's driverless printing feature built on top of IPP plus Bonjour (DNS-SD) discovery. It is not a separate protocol stack or a file format; it is an application of the Internet Printing Protocol."
    },
    {
      "q": "What is the difference between Apple CUPS and OpenPrinting CUPS?",
      "a": "After CUPS creator Michael Sweet left Apple in 2019, OpenPrinting forked the project in 2020. Apple CUPS ships in macOS, iOS, and iPadOS; OpenPrinting CUPS is the community version developed for Linux and other Unix-like systems."
    },
    {
      "q": "Why is macOS printing described as PDF-based?",
      "a": "macOS's imaging model, Quartz 2D (part of Core Graphics), has PDF as its native graphics model. Applications render pages through Quartz, so print jobs are captured in a PDF-based, device-independent form before CUPS filters convert them for the target printer."
    }
  ],
  "sources": [
    {
      "title": "CUPS (OpenPrinting / CUPS project)",
      "url": "https://openprinting.github.io/cups/",
      "publisher": "OpenPrinting"
    },
    {
      "title": "OpenPrinting CUPS releases",
      "url": "https://github.com/OpenPrinting/cups/releases",
      "publisher": "OpenPrinting / GitHub"
    },
    {
      "title": "Apple CUPS release v2.3.6",
      "url": "https://github.com/apple/cups/releases/tag/v2.3.6",
      "publisher": "Apple Inc. / GitHub"
    },
    {
      "title": "About AirPrint",
      "url": "https://support.apple.com/en-us/102895",
      "publisher": "Apple Inc."
    },
    {
      "title": "Internet Printing Protocol/1.1: Model and Semantics (RFC 8011, STD 92)",
      "url": "https://www.rfc-editor.org/rfc/rfc8011",
      "publisher": "IETF"
    },
    {
      "title": "Internet Printing Protocol/1.1: Encoding and Transport (RFC 8010)",
      "url": "https://www.rfc-editor.org/rfc/rfc8010",
      "publisher": "IETF"
    },
    {
      "title": "Information on STD 92",
      "url": "https://www.rfc-editor.org/info/std92",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "IPP Everywhere Printer Self-Certification (PWG 5100.20-2016)",
      "url": "https://ftp.pwg.org/pub/pwg/candidates/cs-ippeveselfcert10-20160219-5100.20.pdf",
      "publisher": "Printer Working Group"
    },
    {
      "title": "PWG Standards",
      "url": "https://www.pwg.org/standards.html",
      "publisher": "Printer Working Group"
    },
    {
      "title": "Quartz 2D Programming Guide",
      "url": "https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/",
      "publisher": "Apple Inc."
    },
    {
      "title": "Has Apple abandoned CUPS?",
      "url": "https://www.theregister.com/2020/10/15/apple_cups_develoment/",
      "publisher": "The Register"
    },
    {
      "title": "CUPS (encyclopedic overview)",
      "url": "https://en.wikipedia.org/wiki/CUPS",
      "publisher": "Wikipedia"
    },
    {
      "title": "Internet Printing Protocol (encyclopedic overview)",
      "url": "https://en.wikipedia.org/wiki/Internet_Printing_Protocol",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "macos printing",
    "cups",
    "airprint",
    "ipp",
    "quartz 2d",
    "core graphics",
    "cupsd",
    "driverless printing",
    "ppd",
    "ipp everywhere",
    "bonjour printing",
    "print backend"
  ],
  "cluster": "unix-printing"
};

export default entry;
