import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "universal-print-drivers",
  "title": "Universal Print Drivers",
  "description": "How universal and class print drivers work: vendor drivers like HP UPD, OS driverless drivers, IPP, Mopria, and the shift away from per-model drivers.",
  "summary": "A universal print driver is a single driver package that drives many printer models rather than one model each. Two distinct designs share the name: vendor universal drivers (such as HP's Universal Print Driver), which ship a shared page-description-language engine plus per-model configuration, and operating-system class or driverless drivers (such as Microsoft's IPP Class Driver, Apple AirPrint, and CUPS driverless printing), which carry no vendor code and rely on standard protocols — chiefly IPP with PWG Raster, PDF, and JPEG — to discover capabilities and print. Both approaches eliminate the one-driver-per-model explosion, and the industry has converged on the driverless model, with Microsoft, Apple, and OpenPrinting all deprecating classic per-vendor drivers.",
  "difficulty": "intermediate",
  "estimatedTime": "11 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "A universal (or generic) print driver is a single driver package designed to drive many printer models rather than one driver bound to one model. Two distinct things are commonly called \"universal\" and should not be conflated."
    },
    {
      "kind": "list",
      "items": [
        "Vendor universal drivers — one installable driver that covers most or all of a manufacturer's current printers by carrying a shared page-description-language (PDL) engine plus per-model configuration data. Hewlett-Packard's Universal Print Driver (UPD) is the archetype.",
        "Operating-system class / inbox drivers — a driver built into the operating system that drives any conformant device over a standard protocol, with no vendor code at all. Microsoft's IPP Class Driver, Apple's AirPrint path, and the CUPS \"everywhere\"/driverless model are the leading examples."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Both reduce the one-driver-per-model explosion, but they solve it differently. Vendor universal drivers still ship vendor rendering code; OS class drivers push rendering and capability negotiation onto open standards (chiefly IPP and PWG Raster/PDF) so the OS needs no per-model or per-vendor software. Microsoft describes its inbox IPP Class Driver as a universal, inbox driver that can communicate via IPP with any Mopria-certified printer."
    },
    {
      "kind": "paragraph",
      "text": "Historically, Microsoft also used the phrase \"universal printer driver\" for something narrower — Unidrv, the shared rendering core for non-PostScript printers that is fed per-model description files. That is an older meaning of \"universal\" (shared engine plus minidrivers), described under Architecture."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "The universal-driver idea evolved through three overlapping generations."
    },
    {
      "kind": "list",
      "items": [
        "Shared-engine plus minidriver (1990s–2000s). Rather than a fully custom driver per model, an OS supplies one rendering engine plus small model-description files. On Windows this is Unidrv (the \"universal print driver,\" also called the v3 driver) for non-PostScript devices, and Pscript5 for PostScript devices; each is paired with per-model description files (GPD and PPD respectively). The Unix world used the analogous PPD-based model in CUPS.",
        "Vendor universal drivers (2000s onward). Manufacturers packaged a shared PDL engine (typically PCL 6, PCL 5, or PostScript) with runtime capability discovery so one package covers a whole fleet. HP's UPD is the best-known example.",
        "OS class / driverless (2010s onward). Standardized protocols made per-vendor code unnecessary. Apple's AirPrint (2010), the Mopria Alliance and the PWG's IPP Everywhere, and CUPS driverless printing let any conformant printer be driven with no installed driver. Microsoft added inbox support for Mopria-certified printers over network and USB via the Microsoft IPP Class Driver starting with Windows 10, version 21H2, and is now retiring third-party drivers entirely."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "Windows shared-engine model (v3). Two OS-supplied core drivers cover most devices."
    },
    {
      "kind": "list",
      "items": [
        "Unidrv (universal print driver): supports non-PostScript printers using printer-specific Unidrv minidrivers described by Generic Printer Description (GPD) files. It provides a single Unidrv renderer that, with the GDI graphics engine, converts Win32 GDI calls into printer commands for the spooler, plus a consistent but customizable user interface.",
        "Pscript5 (Microsoft PostScript printer driver): the standard driver for PostScript printers, driven by PostScript Printer Description (PPD) minidrivers. Its documented components include pscript5.dll (renderer), ps5ui.dll (UI), compstui.dll (common UI), and gdi32.dll."
      ]
    },
    {
      "kind": "paragraph",
      "text": "These consume model-description data files: GPD (Unidrv), PPD (Pscript5), and PCD (plotter)."
    },
    {
      "kind": "paragraph",
      "text": "Windows v4 model and print class drivers. The v4 driver model simplified configuration: a common module, PrintConfig.dll, replaces the older configuration code, and v4 drivers focus on PrintTicket, PrintCapabilities, and constraints. A print class driver is a v4 driver generalized to a device class; a model-specific v4 driver can reuse a class driver's rendering through the RequiredClass manifest directive, which links the two."
    },
    {
      "kind": "paragraph",
      "text": "Microsoft IPP Class Driver (the modern universal driver). An inbox driver that talks IPP directly to any Mopria-certified printer, with no vendor rendering code. Device-specific UI and customization are added out-of-band by Print Support Apps (PSA) delivered through the Microsoft Store, moving customization off the Win32 driver surface."
    },
    {
      "kind": "paragraph",
      "text": "Vendor universal driver (HP UPD). A single package carrying a shared PDL engine that discovers each device's capabilities at connect or print time. It ships in separate PDL flavors (PCL 6, PCL 5, and PostScript emulation) and can operate in a Traditional mode (behaving like a fixed per-printer driver) or a Dynamic mode (discover-and-print to any reachable device, using mDNS/Bonjour discovery)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "list",
      "items": [
        "Shared-engine plus per-model data (Unidrv/Pscript5, and classic CUPS/PPD). The driver engine is generic; a small text description file (GPD or PPD) tells it the device's page sizes, resolutions, duplex, trays, color support, and command syntax. One engine therefore drives thousands of models — the model-specific part is data, not code. Capabilities and job settings flow through the DEVMODE structure and, in v4, through PrintTicket and PrintCapabilities.",
        "Vendor universal driver. The package contains the PDL renderer and a discovery mechanism; on connecting to a device it queries the model and enables the matching option set, so the same binary produces correct output across the fleet.",
        "OS class / driverless. There is no description file and no vendor code. The client queries the printer over IPP using Get-Printer-Attributes; the printer advertises its supported document formats (commonly PWG Raster, PDF, and JPEG) and its capabilities; the client renders to one of those formats and submits the job. This is the mechanism behind IPP Everywhere, AirPrint, Mopria printing, and CUPS driverless queues. Microsoft's IPP Class Driver is the Windows implementation of this pattern."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "Windows, classic driver path."
    },
    {
      "kind": "paragraph",
      "text": "1. An application draws via GDI (gdi32.dll); the kernel-mode graphics engine issues device-driver-interface (DDI) calls. 2. The core driver (the Unidrv renderer for non-PostScript, pscript5.dll for PostScript) converts those calls into device commands (PCL or PostScript), guided by the model's GPD/PPD and the DEVMODE or PrintTicket settings. 3. The print spooler queues the data and hands it to the port or language monitor for the connection; in the modern v4/XPS path, jobs pass through the XPS filter pipeline. 4. The port monitor transmits the job to the device."
    },
    {
      "kind": "paragraph",
      "text": "Windows, IPP Class Driver (driverless) path."
    },
    {
      "kind": "paragraph",
      "text": "1. The application prints; the job is rendered to an IPP-supported document format. 2. The IPP Class Driver submits it over IPP to the Mopria-certified printer, which performs the final rasterization internally."
    },
    {
      "kind": "paragraph",
      "text": "In Windows protected print mode, XPS rendering (via PrintFilterPipelineSVC) runs as the user rather than SYSTEM, and only Microsoft-signed IPP binaries load in the spooler."
    },
    {
      "kind": "paragraph",
      "text": "Multifunction endpoints over IPP split by function. On the network: print via IPP, fax via IPP Fax Out, and scan via WS-Scan or eSCL. Over USB (in IPP-over-USB mode): print via IPP, fax via IPP Fax Out, and scan via eSCL."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "list",
      "items": [
        "Windows. The IPP Class Driver is inbox. \"Windows Ready Print\" is described by Microsoft as Windows' preferred means of communicating with printers — IPP printing, eSCL scanning, and Universal Print, with no third-party driver install, designed for Mopria-certified devices. Windows protected print mode hardens this by disabling third-party driver loading and supporting only Mopria-certified (IPP) printers. Enhanced Point and Print lets v4 clients print to shared v4 queues without downloading the manufacturer driver — only signed configuration data (GPD/PPD, property bag, JavaScript constraints, and an executable-free resource DLL) is fetched via GetPrinterDataEx and validated against the server's catalog file. Note that non-Microsoft port monitors and language monitors are not supported in the v4 model or with print class drivers.",
        "macOS / iOS. Apple's AirPrint is a driverless, IPP-based path built into the OS, introduced in 2010 to eliminate printer drivers on iOS.",
        "Linux / Unix. CUPS historically used PPD-based drivers and now emphasizes driverless printing (the IPP everywhere model), with cups-browsed auto-creating temporary queues for discovered IPP/DNS-SD printers. OpenPrinting's \"New Architecture\" (CUPS 3.x) is all-IPP: it drops classic PPD drivers and replaces them with self-contained Printer Applications that emulate an IPP Everywhere printer. OpenPrinting forked Apple's CUPS in September 2020.",
        "Cloud. Microsoft Universal Print extends the driverless model to a cloud service: Entra-registered, driverless printing with no on-premises print servers. Universal-Print-ready printers connect directly, and legacy printers connect through the Universal Print connector."
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
        "IPP (Internet Printing Protocol). The foundation of all modern OS class and driverless printing — the transport and capability-negotiation protocol the Microsoft IPP Class Driver uses and the protocol under Universal Print. IPP is standardized by the IETF; the current base specifications are RFC 8010 (encoding and transport) and RFC 8011 (model and semantics), published in 2017 and obsoleting the earlier RFC 2910 and RFC 2911. IPP was elevated to Internet Standard STD 92 in 2018 and is extended by the PWG.",
        "PWG IPP Everywhere (PWG 5100.14). The PWG's driverless-printing standard, which mandates capability discovery over IPP and a common set of document formats. Version 1.0 was published in 2013; version 1.1 (5100.14-2020) followed in 2020. Conformance uses PWG self-certification.",
        "PWG Raster Format (PWG 5102.4). The raster interchange format a driverless client can render to (MIME type image/pwg-raster), alongside PDF and JPEG.",
        "eSCL and WS-Scan. The corresponding driverless scanning standards for multifunction devices.",
        "WSD / WS-Print. An earlier Web Services device protocol on Windows (WS-Print v1.1 added in Windows 8), largely superseded by IPP.",
        "PDLs (PCL, PostScript). Vendor universal drivers rely on shared PDLs; OS class drivers largely bypass PDL choice by rendering to PWG Raster or PDF and letting the device rasterize."
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
        "Mopria Alliance. Microsoft describes Mopria as an alliance of printer manufacturers and software vendors that defines the standards for IPP printing and eSCL scanning. Mopria-certified devices are the compatibility target for the Windows IPP Class Driver and for Windows protected print mode.",
        "Print Support Apps (PSA). The modern replacement for driver-embedded customization: Store-delivered apps that add original-equipment-manufacturer UI and features on top of the universal IPP path without a Win32 driver.",
        "CUPS driverless and Printer Applications. The Linux analog: universal driverless queues plus, where a device needs help, a self-contained Printer Application that emulates an IPP Everywhere printer.",
        "Cloud print (Universal Print). Driverless printing extended over the internet with Entra ID identity and TLS."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "Hewlett-Packard authored the best-known vendor universal driver (UPD), covering much of its printer fleet from one package in PCL 6, PCL 5, and PostScript-emulation flavors. Other vendors ship comparable universal or global drivers."
    },
    {
      "kind": "paragraph",
      "text": "Under the OS-class model, manufacturers no longer supply the driver at all — they make devices Mopria-certified (IPP plus eSCL) and, if they want extra UI or features, publish a Print Support App. Microsoft states that this removes the need for print device manufacturers to provide their own installers, drivers, and utilities. Vendors can still submit legacy drivers, but from January 15, 2026, WHQL and Attestation submissions for Windows 11 and later and Windows Server 2025 and later are blocked by default and require case-by-case justification; documented exceptions include printers that cannot be Mopria-certified, submissions ceilinged at Windows 10 or lower, and native ARM64 drivers."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Universal and class drivers are now the mainstream default rather than a convenience option. Microsoft cites four benefits for the IPP Class Driver: security (no third-party driver code), reliability (avoiding driver crashes, memory leaks, and DEVMODE-to-IPP translation failures), print-management simplification (no hunting for the right driver per Windows edition or architecture), and future-proofing (third-party drivers are being deprecated, and new features may arrive only on the IPP path)."
    },
    {
      "kind": "paragraph",
      "text": "The Windows deprecation is staged: announced in September 2023; no new drivers to Windows Update for Windows 11 and later and Server 2025 and later from January 15, 2026; driver ranking set to always prefer the Windows IPP inbox class driver from July 1, 2026; and, except for security fixes, no third-party driver updates from July 1, 2027. Linux (OpenPrinting) and Apple moved to driverless earlier, so the industry direction is convergent."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"Universal driver\" is one thing. No — a vendor universal driver (HP UPD) still ships vendor rendering code, while an OS class driver (Microsoft IPP Class Driver) ships none and relies on IPP plus Mopria.",
        "Universal or driverless means fewer features. The universal path handles standard capabilities; OEM-specific features are re-added via Print Support Apps, not lost — though features exposed only by an OEM driver or PSA may be missing if that PSA is not installed.",
        "Deprecation removes existing drivers. Microsoft states that existing signed drivers can still be installed after end-of-servicing, and there are no plans to disable v3 or v4 print features; what changes is new submissions, ranking, and updates.",
        "Unidrv is the modern universal driver. Unidrv is the legacy v3 shared engine for non-PostScript printers; the modern universal driver is the inbox IPP Class Driver.",
        "Class drivers let any port monitor plug in. Non-Microsoft port and language monitors are not supported in v4 or with print class drivers."
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
          "period": "1990s–2000s",
          "text": "Windows ships shared-engine drivers: Unidrv (the \"universal print driver,\" v3) with GPD files, and Pscript5 with PPD files."
        },
        {
          "period": "2010",
          "text": "Apple introduces AirPrint driverless printing with iOS 4.2 (announced September 2010, shipped November 22, 2010)."
        },
        {
          "period": "2012–2013",
          "text": "Windows 8 introduces the v4 driver model and WS-Print v1.1."
        },
        {
          "period": "2013",
          "text": "The Mopria Alliance is founded (September 2013) by Canon, HP, Samsung, and Xerox to standardize mobile and IPP printing and eSCL scanning."
        },
        {
          "period": "2013",
          "text": "The PWG publishes IPP Everywhere v1.0 (PWG 5100.14)."
        },
        {
          "period": "2017",
          "text": "The IETF publishes RFC 8010 and RFC 8011, the current IPP base specifications, obsoleting RFC 2910 and RFC 2911."
        },
        {
          "period": "2020",
          "text": "OpenPrinting forks Apple's CUPS (September 2020); IPP Everywhere v1.1 (PWG 5100.14-2020) is published."
        },
        {
          "period": "2021",
          "text": "Windows 10, version 21H2 adds the inbox Microsoft IPP Class Driver for Mopria-certified printers over network and USB."
        },
        {
          "period": "September 2023",
          "text": "Microsoft announces the end-of-servicing plan for legacy v3/v4 third-party printer drivers."
        },
        {
          "period": "January 15, 2026",
          "text": "New third-party printer driver submissions (WHQL and Attestation) for Windows 11 and later and Server 2025 and later are blocked by default, with manual review required."
        },
        {
          "period": "July 1, 2026",
          "text": "Windows driver ranking is modified to always prefer the Windows IPP inbox class driver."
        },
        {
          "period": "July 1, 2027",
          "text": "Except for security fixes, third-party printer driver updates are no longer allowed."
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
      "slug": "printer-drivers"
    },
    {
      "section": "tools",
      "slug": "pcl"
    },
    {
      "section": "tools",
      "slug": "postscript"
    },
    {
      "section": "guides",
      "slug": "driverless-printing"
    },
    {
      "section": "tools",
      "slug": "ipp"
    },
    {
      "section": "mobile-printing",
      "slug": "what-is-airprint"
    }
  ],
  "faqs": [
    {
      "q": "What is a universal print driver?",
      "a": "A single driver package designed to drive many printer models rather than one driver per model. There are two kinds: vendor universal drivers, such as HP's Universal Print Driver, which carry a shared page-description-language engine plus per-model configuration data; and operating-system class or driverless drivers, such as Microsoft's IPP Class Driver, Apple AirPrint, and CUPS driverless printing, which carry no vendor code and rely on standard protocols like IPP."
    },
    {
      "q": "How is a vendor universal driver different from an OS class driver?",
      "a": "A vendor universal driver still ships the manufacturer's rendering code (a shared PCL or PostScript engine) and discovers each device's capabilities to enable the right options. An OS class driver ships no vendor code at all; it uses IPP to query the printer's capabilities and supported formats (commonly PWG Raster, PDF, and JPEG), renders to one of those, and lets the printer do the final rasterization."
    },
    {
      "q": "Is Unidrv the modern universal driver on Windows?",
      "a": "No. Unidrv is the legacy v3 shared rendering engine for non-PostScript printers, fed per-model GPD description files. The modern universal driver on Windows is the inbox Microsoft IPP Class Driver, which talks IPP directly to Mopria-certified printers with no vendor rendering code."
    },
    {
      "q": "What standards make driverless printing work?",
      "a": "The Internet Printing Protocol (IPP), standardized by the IETF in RFC 8010 and RFC 8011, provides transport and capability negotiation. The PWG's IPP Everywhere (PWG 5100.14) mandates capability discovery and a common set of document formats, including PWG Raster (PWG 5102.4), PDF, and JPEG. Mopria certification is the compatibility target for Windows' IPP Class Driver."
    },
    {
      "q": "Is Microsoft removing third-party printer drivers?",
      "a": "Microsoft is deprecating them in stages, not deleting installed ones. New third-party driver submissions for Windows 11 and later are blocked by default from January 15, 2026; driver ranking prefers the inbox IPP class driver from July 1, 2026; and third-party updates stop (except security fixes) from July 1, 2027. Existing signed drivers can still be installed, and there are no plans to disable v3 or v4 print features."
    }
  ],
  "sources": [
    {
      "title": "What is IPP? / IPP printers with the Universal Print Connector",
      "url": "https://learn.microsoft.com/universal-print/fundamentals/universal-print-connector-with-ipp",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Microsoft universal printer driver (Unidrv)",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/microsoft-universal-printer-driver",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Unidrv Capabilities",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/unidrv-capabilities",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Microsoft PostScript printer driver",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/microsoft-postscript-printer-driver",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Pscript Components",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/pscript-components",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Printer Data Files (GPD/PPD/PCD)",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/printer-data-files",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "V4 Printer Driver Configuration Architecture",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/v4-driver-configuration-architecture",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "V4 Print Class Driver Rendering",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/print-class-driver-rendering",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "V4 Driver Connectivity Architecture",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/v4-driver-connectivity-architecture",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Work with enhanced Point and Print",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/working-well-with-enhanced-point-and-print",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "End of servicing plan for third-party printer drivers on Windows",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/end-of-servicing-plan-for-third-party-printer-drivers-on-windows",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Legacy Printer Driver Submission Process",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/legacy-printer-driver-submission-process",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Discover Windows Ready Print",
      "url": "https://learn.microsoft.com/windows/modern-print/windows-ready-print",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "More information on Windows protected print mode",
      "url": "https://learn.microsoft.com/windows/modern-print/windows-protected-print-mode/more-information-on-windows-protected-print-mode-for-enterprises-and-developers",
      "publisher": "Microsoft Learn"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "universal print driver",
    "generic print driver",
    "hp universal print driver",
    "upd",
    "ipp class driver",
    "driverless printing",
    "print class driver",
    "unidrv",
    "pscript5",
    "mopria",
    "ipp everywhere",
    "pwg raster"
  ],
  "cluster": "printer-drivers-and-rendering"
};

export default entry;
