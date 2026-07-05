import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "cups",
  "title": "CUPS (Common UNIX Printing System)",
  "description": "CUPS is the standards-based, open-source printing system for Linux, macOS, and UNIX-like operating systems, built on the Internet Printing Protocol (IPP).",
  "summary": "CUPS (originally the Common UNIX Printing System, now styled simply CUPS) is a standards-based, open-source printing system for Linux, macOS, and other UNIX-like operating systems. It provides a complete printing stack: a scheduler that speaks the Internet Printing Protocol (IPP), a filter subsystem that converts submitted documents into a format a given printer can render, and a backend subsystem that transmits the data to the device. CUPS exposes System V and Berkeley (BSD) command-line interfaces, a web-based administration interface, and a C programming API. Created by Michael R. Sweet in 1997, adopted by Apple for Mac OS X in 2002, and now developed by the OpenPrinting organization under the Apache License 2.0, CUPS is the default printing system on macOS and the large majority of Linux distributions.",
  "purpose": "A standards-based printing system that spools, converts, and routes print jobs to printers over IPP.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "CUPS was created by Michael R. Sweet through his company Easy Software Products. Development began in 1997, and the first public beta was released on May 14, 1999; version 1.0 followed later in 1999. The original design targeted the older Line Printer Daemon (LPD) protocol, but because of LPD's limitations and inconsistent vendor implementations, the project adopted the then-emerging Internet Printing Protocol (IPP) as its foundation instead."
    },
    {
      "kind": "paragraph",
      "text": "Apple adopted CUPS as the printing system for Mac OS X beginning with version 10.2 (\"Jaguar\") in 2002. In February 2007, Apple hired Michael Sweet and purchased the CUPS source code, becoming the project's steward for over a decade. The name was shortened from \"Common UNIX Printing System\" to just \"CUPS\" beginning with the 1.4 release, due to legal concerns tied to the UNIX trademark."
    },
    {
      "kind": "paragraph",
      "text": "Michael Sweet announced he had left Apple on December 20, 2019. In September 2020, OpenPrinting developers, together with Sweet, forked Apple's codebase; that OpenPrinting fork is now the primary, actively developed branch of CUPS, while Apple's own repository became largely dormant (its last release, 2.3.6, dates to 2022)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Before CUPS, UNIX printing was fragmented across two historic systems — BSD lpr/lpd and System V lp — plus a patchwork of vendor extensions. These systems predated modern networking conventions, offered weak support for describing printer capabilities, handled only a narrow set of file formats natively, and did not interoperate cleanly across vendors."
    },
    {
      "kind": "paragraph",
      "text": "CUPS unified UNIX printing under a single, network-native architecture built on an open IETF standard (IPP). It added automatic file-format detection and conversion, standardized machine-readable descriptions of printer capabilities, and provided a common management interface — while still offering compatibility command-line tools for both the BSD and System V heritages."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "When an application submits a document, the CUPS scheduler (cupsd) receives it as an IPP request. The scheduler uses a MIME-type database to auto-detect the document's format, then consults conversion rules to assemble a chain of one or more filters that transform the document step by step into a format the target printer accepts. The final stage hands the data to a backend, which transmits it to the device over the appropriate transport (USB, network socket, IPP, LPD, and so on)."
    },
    {
      "kind": "paragraph",
      "text": "Throughout, the scheduler tracks job state, queues, printer classes, and status messages, and can notify subscribers of events."
    },
    {
      "kind": "paragraph",
      "text": "Printer capabilities have historically been described by PPD (PostScript Printer Description) files, which tell CUPS what options a printer supports and which filters to invoke. Modern CUPS increasingly relies on IPP attributes queried directly from the printer instead of static PPDs."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "CUPS is the middle layer between applications and printer hardware. Above it, applications (or the operating system's print dialog) generate a document — commonly PDF on modern systems, historically PostScript — and submit it via IPP or a compatibility command. Below it, backends drive the physical connection."
    },
    {
      "kind": "paragraph",
      "text": "CUPS itself owns spooling, scheduling, format conversion (rasterization and rendering), option handling, and job and queue management in between."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "CUPS discovers and communicates with printers through its backends and discovery mechanisms (DNS-SD/Bonjour and SNMP). It ships backends for network sockets (AppSocket/JetDirect), IPP, LPD, and USB, among others."
    },
    {
      "kind": "paragraph",
      "text": "For each printer it maintains a queue and a capability model (via PPD or queried IPP attributes) so it can present valid options — paper size, duplex, color, resolution — and produce correctly formatted output. For modern IPP-based printers, including AirPrint and IPP Everywhere devices, CUPS can print \"driverless,\" without any vendor-specific software."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "CUPS is the standard printing subsystem on macOS (since Mac OS X 10.2, 2002) and is the default on the vast majority of Linux distributions. It also runs on other UNIX-like systems."
    },
    {
      "kind": "paragraph",
      "text": "It integrates with each operating system's print dialogs and administration tools while providing its own web interface (served on the local machine at port 631) and cross-platform command-line tools. Its use of IPP as the native protocol makes it interoperable across these platforms and with network print servers."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "paragraph",
      "text": "Early CUPS was built around a PostScript-centric workflow and bundled a Ghostscript interpreter to rasterize PostScript into CUPS Raster for non-PostScript printers; PPD files (a format originating with Adobe for PostScript printers) described printer options."
    },
    {
      "kind": "paragraph",
      "text": "Over time the pipeline shifted toward PDF as the standard print-job format on modern systems, with filters converting PDF and other inputs to whatever the printer needs. Traditional printer drivers and static PPDs are being phased out: PPD usage was deprecated with the 1.4 release, raw queues were deprecated with CUPS 2.2 (2018), and printer drivers were deprecated with CUPS 2.3 (2019)."
    },
    {
      "kind": "paragraph",
      "text": "To keep older, driver-dependent printers working, OpenPrinting introduced Printer Applications — self-contained programs that present a legacy printer to CUPS as if it were an IPP/driverless printer, mapping IPP attributes onto the old driver or PPD options internally."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "Today CUPS remains the default printing system on macOS and Linux. Modern deployments emphasize driverless printing via the IPP Everywhere and AirPrint standards, so many printers work with no downloaded drivers at all. Legacy and specialty printers are supported through Printer Applications rather than in-tree drivers."
    },
    {
      "kind": "paragraph",
      "text": "The OpenPrinting fork is the actively maintained line; its stable 2.4.x series is the current release branch."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Built on an open IETF standard (IPP) rather than a proprietary protocol.",
        "Automatic file-type detection and a flexible, chainable filter pipeline.",
        "Unified interface across UNIX-like operating systems, with both BSD and System V compatibility commands plus a web UI and a C API.",
        "Network-native: discovery, remote queues, and print-server operation are first-class.",
        "Driverless printing support (IPP Everywhere, AirPrint) reduces dependence on vendor drivers.",
        "Open-source under a permissive license (Apache 2.0, with an exception to allow linking against GNU GPL2-only software)."
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
        "The classic PPD/driver model is deprecated, creating a transition period in which some older printers depend on Printer Applications rather than long-standing driver packages.",
        "Driverless printing depends on the printer correctly implementing IPP standards; devices with incomplete IPP support can behave inconsistently.",
        "The scheduler is a traditional process that spawns external filter and backend processes, an architecture that reflects its late-1990s origins.",
        "After Apple stepped back, active development consolidated under the OpenPrinting fork; Apple's own repository is effectively dormant, which matters for systems still tracking that codebase."
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
        "IPP (Internet Printing Protocol) — the IETF standard CUPS is built on for managing jobs and queues.",
        "IPP Everywhere and AirPrint — driverless printing profiles and standards.",
        "LPD/LPR (RFC 1179) — the older line-printer protocol CUPS supersedes and can still speak via a backend.",
        "PPD (PostScript Printer Description) — Adobe-originated printer capability files, historically central to CUPS, now deprecated.",
        "PostScript and PDF — page-description and document formats central to the print-job pipeline.",
        "DNS-SD / Bonjour and SNMP — used for network printer discovery.",
        "AppSocket / JetDirect — a common raw-TCP network printing method supported via a backend."
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
          "period": "1997",
          "text": "Michael R. Sweet (Easy Software Products) begins developing CUPS."
        },
        {
          "period": "May 14, 1999",
          "text": "First public beta released."
        },
        {
          "period": "1999",
          "text": "CUPS 1.0 released."
        },
        {
          "period": "2002",
          "text": "Apple adopts CUPS as the printing system in Mac OS X 10.2."
        },
        {
          "period": "February 2007",
          "text": "Apple hires Michael Sweet and purchases the CUPS source code."
        },
        {
          "period": "2009 (1.4 release)",
          "text": "Name shortened to \"CUPS\" over UNIX trademark concerns; PPD files deprecated."
        },
        {
          "period": "2018 (CUPS 2.2)",
          "text": "Raw print queues deprecated."
        },
        {
          "period": "2019 (CUPS 2.3)",
          "text": "Printer drivers deprecated in favor of driverless printing and Printer Applications."
        },
        {
          "period": "December 20, 2019",
          "text": "Michael Sweet announces he has left Apple."
        },
        {
          "period": "September 2020",
          "text": "OpenPrinting, with Sweet, forks Apple's CUPS; OpenPrinting CUPS becomes the actively developed line."
        },
        {
          "period": "2022 (2.3.6)",
          "text": "Last release from Apple's repository; Apple's branch effectively dormant thereafter."
        },
        {
          "period": "Current",
          "text": "OpenPrinting CUPS 2.4.x is the maintained stable branch."
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
      "slug": "lpd-lpr"
    },
    {
      "section": "guides",
      "slug": "what-is-a-print-server"
    },
    {
      "section": "guides",
      "slug": "how-printer-drivers-work"
    },
    {
      "section": "guides",
      "slug": "what-is-postscript-printing"
    },
    {
      "section": "guides",
      "slug": "how-wireless-printing-works"
    }
  ],
  "faqs": [
    {
      "q": "What does CUPS stand for?",
      "a": "CUPS originally stood for the Common UNIX Printing System. The project is now styled simply as CUPS; the longer name was shortened beginning with the 1.4 release due to legal concerns tied to the UNIX trademark."
    },
    {
      "q": "Who created CUPS and who maintains it now?",
      "a": "CUPS was created by Michael R. Sweet through his company Easy Software Products, with development starting in 1997. Apple purchased the source code and hired Sweet in 2007. Since a September 2020 fork, the OpenPrinting organization maintains the actively developed line under the Apache License 2.0."
    },
    {
      "q": "What protocol is CUPS based on?",
      "a": "CUPS is built on the Internet Printing Protocol (IPP), an open IETF standard. Although its original design targeted the older LPD protocol, it adopted IPP because of LPD's limitations and inconsistent vendor implementations. It can still speak LPD/LPR via a backend."
    },
    {
      "q": "What is driverless printing in CUPS?",
      "a": "Driverless printing lets CUPS print to IPP-based printers — including AirPrint and IPP Everywhere devices — using capabilities queried directly from the printer via IPP attributes, with no vendor-specific driver installed. Legacy printers are supported through Printer Applications instead of in-tree drivers."
    },
    {
      "q": "Which operating systems use CUPS?",
      "a": "CUPS is the standard printing subsystem on macOS (since Mac OS X 10.2 in 2002) and the default on the vast majority of Linux distributions. It also runs on other UNIX-like systems and provides a web interface on the local machine at port 631."
    }
  ],
  "sources": [
    {
      "title": "OpenPrinting CUPS (project home)",
      "url": "https://openprinting.github.io/cups/",
      "publisher": "OpenPrinting"
    },
    {
      "title": "CUPS",
      "url": "https://en.wikipedia.org/wiki/CUPS",
      "publisher": "Wikipedia"
    },
    {
      "title": "CUPS 1.4.0 release announcement",
      "url": "https://www.cups.org/blog/2009-08-28-cups-1.4.0.html",
      "publisher": "CUPS / OpenPrinting"
    },
    {
      "title": "Printer Applications and Printer Drivers",
      "url": "https://openprinting.github.io/cups/drivers.html",
      "publisher": "OpenPrinting"
    },
    {
      "title": "Demystifying CUPS Development",
      "url": "https://www.cups.org/blog/2018-06-06-demystifying-cups-development.html",
      "publisher": "CUPS / OpenPrinting"
    },
    {
      "title": "OpenPrinting/cups Releases",
      "url": "https://github.com/openprinting/cups/releases",
      "publisher": "OpenPrinting (via GitHub)"
    },
    {
      "title": "apple/cups Releases",
      "url": "https://github.com/apple/cups/releases",
      "publisher": "Apple (via GitHub)"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "cups",
    "common unix printing system",
    "internet printing protocol",
    "ipp",
    "cups scheduler",
    "cupsd",
    "ppd file",
    "driverless printing",
    "ipp everywhere",
    "airprint",
    "openprinting",
    "michael sweet"
  ],
  "cluster": "printing-protocols"
};

export default entry;
