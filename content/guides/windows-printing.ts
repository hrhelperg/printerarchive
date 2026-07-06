import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "windows-printing",
  "title": "Windows Printing Architecture",
  "description": "How the Windows print subsystem moves a document from an application through the spooler and drivers to a device, from GDI/EMF to the modern IPP platform.",
  "summary": "The Windows printing architecture is the operating-system subsystem that moves a document from an application to a physical or virtual output device. Microsoft describes it as two cooperating parts — a print spooler and a set of printer drivers — designed around device independence and replaceable, layered components. Over time it accumulated three application-facing print paths (the classic GDI/EMF path, the XPS path introduced with Windows Vista, and the modern IPP-based platform) plus successive driver models (v3, v4). All spooler components run in user mode; only the GDI graphics engine has a kernel-mode component. Microsoft's current direction is driverless IPP printing — surfaced as Windows Ready Print — with a published end-of-servicing plan for legacy third-party drivers and a hardened Windows protected print mode shipped in Windows 11, version 24H2.",
  "difficulty": "intermediate",
  "estimatedTime": "11 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Microsoft describes Windows printing as an operating-system subsystem consisting of two cooperating parts: a print spooler and a set of printer drivers. Applications call device-independent functions, and the subsystem creates print jobs and routes them to many device classes, including laser printers, vector plotters, raster printers, and fax machines. Two ideas define the design. First, device independence: an application draws using a graphics API and does not need to know the target device's command language. Second, replaceable, layered components: the spooler and driver components are modular, so hardware vendors can add support for new devices, and in many cases supporting a new printer requires only new data files for a Microsoft-supplied driver."
    },
    {
      "kind": "paragraph",
      "text": "The subsystem evolved in identifiable layers, each still partly present in modern Windows:"
    },
    {
      "kind": "list",
      "items": [
        "GDI print path (the classic Win32 path). Applications call Graphics Device Interface (GDI) functions; the graphics engine either spools drawing instructions as an Enhanced Metafile (EMF) for later playback, or renders a printable image with the driver. Microsoft characterizes this path as similar to the Windows Server 2003 print path.",
        "XPS print path. Introduced with Windows Vista and built on the XML Paper Specification (XPS). Windows Presentation Foundation (WPF) applications and the XPS Print API spool jobs as XPS spool files, and XPSDrv drivers consume XPS directly. XPS-based technologies were also back-ported to Windows XP and Windows Server 2003 through the Microsoft WinFX Runtime Component 3.0.",
        "v4 driver model. A refinement of the v3 model, optimized for Windows 8 scenarios, simplified printer sharing (no per-architecture drivers), and easier development.",
        "Modern print platform / IPP. Windows 10, version 21H2, added inbox support for Mopria-compliant printers over network and USB via the Microsoft IPP Class Driver. Windows protected print mode shipped in Windows 11, version 24H2."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "The subsystem is a pipeline of replaceable components. All spooler components execute in user mode; the GDI graphics engine additionally has a kernel-mode part. Microsoft documents the following components and roles."
    },
    {
      "kind": "paragraph",
      "text": "Client / graphics layer"
    },
    {
      "kind": "list",
      "items": [
        "Application — creates a print job by calling GDI (Win32), the XPS Print API, or WPF print functions.",
        "GDI — has a user-mode part (Win32 GDI) and a kernel-mode part, the graphics engine, which exports services that graphics device drivers use.",
        "Winspool.drv — the client-side interface into the spooler; it exports the spooler's Win32 API and provides RPC stubs to reach the server. GDI is its primary client, but applications also call some functions."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Spooler service layer"
    },
    {
      "kind": "list",
      "items": [
        "Spoolsv.exe — the spooler's API server, implemented as a service started at OS boot; it exposes the RPC interface to the server side of the spooler API.",
        "Router (Spoolss.dll) — decides which print provider to call based on the printer name or handle and forwards the call.",
        "Print providers — modules that support the specified print device (local versus remote); Win32spl.dll is the client module used for the remote case.",
        "Print processor — takes the spooled job and, for EMF jobs, plays back the records; it can add page-layout and job-control information to the data stream."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Monitor / port layer"
    },
    {
      "kind": "list",
      "items": [
        "Language monitors — optionally modify the data stream (for example, Pjlmon.dll adds PJL commands) before handing off to the port monitor.",
        "Port monitors — direct the data stream to the correct port driver; Microsoft-supplied examples include the TCP/IP port monitor (TCPMON) and the WSD port monitor (WSDMON).",
        "Port driver / device — the serial, parallel, USB, or network port associated with the target printer's I/O port."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Driver components (v3 model)"
    },
    {
      "kind": "list",
      "items": [
        "Printer graphics DLL — assists GDI in rendering and sends the rendered stream to the spooler.",
        "Printer interface DLL — provides the configuration UI and an interface the spooler calls for print-related events.",
        "Printer data files — used by Microsoft-supplied universal drivers.",
        "Microsoft universal drivers: Unidrv (the v3 print driver, driven by GPD minidriver files) and the PostScript driver Pscript5 (driven by PPD files)."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "When a Win32 GDI application prints, it calls GDI functions, which pass information to the graphics engine. The engine either spools drawing instructions as an EMF file for later playback by the EMF print processor, or works with the printer driver to render a printable image immediately. Spooler components can interpret EMF files and insert page-layout and job-control instructions. The spooler then sends the data stream toward the port driver for the target's I/O port."
    },
    {
      "kind": "paragraph",
      "text": "Rendering location depends on driver type:"
    },
    {
      "kind": "list",
      "items": [
        "A GDI-based (v3) driver renders during EMF playback under the control of the GDI rendering engine, which calls the driver for printer-specific drawing the engine cannot do itself.",
        "An XPSDrv driver processes the XPS spool file through a series of filter-pipeline stages and does not need GDI to render page images."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Print Ticket and Print Capabilities technologies communicate printer settings in a more application- and printer-compatible way. For v3 GDI drivers, the subsystem converts PrintTicket objects to equivalent DEVMODEW structures, so those drivers need not add PrintTicket support themselves; the conversion methods are ConvertPrintTicketToDevMode and ConvertDevModeToPrintTicket."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "Microsoft defines two primary print paths and two conversion paths so that any application type can print to any driver type."
    },
    {
      "kind": "paragraph",
      "text": "Primary paths:"
    },
    {
      "kind": "paragraph",
      "text": "1. GDI print path (the Win32 path) — originates in a Win32 application using the GDI graphics API. 2. XPS print path — originates in a WPF application or via the XPS Print API."
    },
    {
      "kind": "paragraph",
      "text": "Conversion paths:"
    },
    {
      "kind": "list",
      "items": [
        "GDI-to-XPS conversion (MXDC) — the Microsoft XPS Document Converter converts GDI output into XPS when printing to an XPS device.",
        "XPS-to-GDI conversion (XGC) — converts XPS content into the GDI print path when printing to a GDI (v3) driver."
      ]
    },
    {
      "kind": "paragraph",
      "text": "A representative end-to-end flow (GDI path, GDI driver, local printer) is: Application → GDI (Win32 plus graphics engine) → Winspool.drv → Spoolsv.exe → Router (Spoolss.dll) → print provider → print processor (EMF playback or rendering via the driver) → optional language monitor (for example, Pjlmon.dll) → port monitor (for example, TCPMON or WSDMON) → port driver → device."
    },
    {
      "kind": "paragraph",
      "text": "Variations:"
    },
    {
      "kind": "list",
      "items": [
        "XPS application to XPSDrv printer: the spooler passes the XPS spool file straight to the driver's filter pipeline for rendering and output.",
        "XPS application to GDI printer: the XPS spool file is converted through the XPS-to-GDI module (XGC), then follows the GDI path.",
        "GDI application to XPS printer: GDI commands are converted through the GDI-to-XPS module (MXDC) and sent down the XPS path.",
        "If a language monitor is installed, it receives the stream from the print processor, modifies it, and calls the port monitor; if not, the spooler calls the port monitor directly."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "paragraph",
      "text": "The spooler runs as the Print Spooler service (Spoolsv.exe), started at OS startup. All spooler components run in user mode, while the GDI graphics engine has a kernel-mode component."
    },
    {
      "kind": "paragraph",
      "text": "Point and Print integrates client and server printing. Since Windows Vista, driver-package installation using the driver store is the preferred method, adding integrity and signing checks on the client. v4 drivers run directly from the driver store, eliminating file collisions and improving install performance; setup uses INF files plus a v4 manifest (a *-manifest.ini file)."
    },
    {
      "kind": "paragraph",
      "text": "Group Policy and MDM integration is available through Policy CSP. For example, the ConfigureWindowsProtectedPrint policy uses the registry key Software\\Policies\\Microsoft\\Windows NT\\Printers\\WPP and applies to Windows 11, version 24H2 (build 10.0.26100) and later. Printer-extension behavior is also policy-controllable. On the modern platform, multifunction devices expose print and fax over IPP and IPP Fax Out, and scan over WS-Scan or eSCL."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to standards"
    },
    {
      "kind": "list",
      "items": [
        "IPP (Internet Printing Protocol) — the modern standardized client-to-printer communication; Windows implements it via the inbox Microsoft IPP Class Driver, and it is the protocol underlying Universal Print.",
        "XPS (XML Paper Specification) — the document and spool format for the XPS print path and XPSDrv drivers.",
        "PPD (PostScript Printer Description) and GPD (Generic Printer Description) — configuration file formats consumed by Pscript5 and Unidrv respectively; both remain valid in the v4 model (with added required directives).",
        "PostScript and PCL — page-description languages referenced by the driver models; the v4 model references XPS-to-PCL6 rendering filters and hardware/software copy handling.",
        "eSCL / WS-Scan — scanning standards used alongside IPP on multifunction devices.",
        "PWG standards — for example, the Port Monitor MIB (PWG 5107.1-2005) for TCP/IP auto-detection in v4 setup.",
        "IEEE 1284 — device ID string used as a fallback for naming and identifying Plug-and-Play printers.",
        "SNMP / WSD / USB Bidi — bidirectional communication transports (Bidi Schema) supported by the v4 connectivity stack."
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
        "GDI and the graphics engine — the classic rendering technology and the origin of the EMF spool format.",
        "WPF and the XPS Print API — modern application entry points that produce XPS spool files.",
        "Filter pipeline (PrintFilterPipelineSvc) — hosts the XPSDrv and v4 rendering filters; it is configured by a *-pipelineconfig.xml file.",
        "Print Ticket / Print Capabilities / DEVMODEW — the job- and device-settings model, with automatic conversion for legacy drivers.",
        "PrintConfig.dll — the v4 common configuration module that consolidates functionality formerly in the UnidrvUI and PS5UI core drivers; v4 decouples UI from driver configuration and can use JavaScript for advanced constraints, PrintTicket, and PrintCapabilities.",
        "mxdwdrv.dll — the default v4 render module; class drivers may alternatively specify unidrv.dll or pscript5.dll.",
        "Print Support Apps (PSA) and UWP device apps / printer extensions — customize preferences and notifications. Starting with the Windows 11 SDK (build 22000.1), PSA is the recommended method of developing UWP apps for printers, moving customization from the Win32 framework to the UWP framework.",
        "Universal Print — Microsoft's cloud print service that removes print servers and runs over IPP."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "Vendors historically shipped v3 and v4 drivers built on Microsoft's universal drivers by supplying GPD or PPD data files and, optionally, plug-ins (implementing interfaces such as IPrintOemPrintTicketProvider) and language or port monitors."
    },
    {
      "kind": "paragraph",
      "text": "The v4 model narrows this: non-Microsoft port monitors and language monitors are not supported, and v4 leans on data files and JavaScript for extensibility while simplifying sharing by removing per-architecture driver management."
    },
    {
      "kind": "paragraph",
      "text": "On the modern platform, manufacturers ship Mopria-certified printers that speak IPP, and device-experience customization moves to Print Support Apps delivered via the Store, so vendors no longer must rebuild per Windows SKU or architecture. The Mopria Alliance is the industry body that defines the IPP and eSCL conformance used here."
    },
    {
      "kind": "paragraph",
      "text": "For signing, vendors submit drivers through Partner Center for validation and signing. Under the end-of-servicing plan, after January 15, 2026, new drivers for Windows 11 and later and Windows Server 2025 and later are signed only case-by-case, with documented exceptions: printers that cannot be Mopria-certified, submissions capped at Windows 10 or lower, and native ARM64 drivers."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Microsoft's stated direction is to make driverless IPP printing the default. Windows Ready Print — defined by Microsoft as IPP printing plus eSCL scanning plus Universal Print — works without third-party drivers, across CPU architectures including ARM, and independent of driver-update breakage. Print Support Apps are a separate customization layer that works in combination with this platform rather than being part of its definition."
    },
    {
      "kind": "paragraph",
      "text": "Windows protected print mode (WPP), introduced in Windows 11, version 24H2, hardens the path for security. It permits printing only to printers supported by the inbox Windows drivers (Mopria/IPP), disables loading of third-party drivers, defers spooler operations to a new spooler process, blocks module loading so that only Microsoft-signed IPP binaries load, and runs XPS rendering (PrintFilterPipelineSvc) as the user rather than as SYSTEM to limit the impact of memory-corruption bugs. Microsoft cites port-monitor-DLL abuse as an attack this design closes. Enabling WPP uninstalls third-party-driver printers and unsupported software printers (such as the legacy XPS Document Writer, Fax, and the OneNote desktop printer), which have documented reinstall or replacement paths."
    },
    {
      "kind": "paragraph",
      "text": "The end-of-servicing timeline phases out legacy v3 and v4 driver servicing while keeping existing drivers installable and preserving security fixes during the OS support lifecycle."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"The spooler runs in the kernel.\" The GDI graphics engine has a kernel-mode component, but all spooler components run in user mode.",
        "\"Every job is fully rendered before spooling.\" GDI can spool device-independent EMF records and defer rendering to the print processor's playback; rendering can also be immediate. Both are supported.",
        "\"v4 replaced v3 with a completely new rendering stack.\" v4 is described as a refinement of v3 that reuses XPSDrv rendering, GPD/PPD, autoconfiguration, and Bidi, adding new extensibility points.",
        "\"XPS is Windows-only or obsolete legacy.\" XPS is a specified document format used as a spool and document format for XPSDrv, and it was supported on Windows XP and Windows Server 2003 via the WinFX runtime. It is de-emphasized under the modern IPP platform but is a real format, not merely a legacy spool artifact.",
        "\"Driverless printing means no software at all.\" Customization still exists via Print Support Apps and, on the legacy platform, printer extensions and UWP device apps — the model moved from Win32 drivers to Store-delivered apps.",
        "\"The IPP class driver and WPP work with any printer.\" They target Mopria-certified printers with IPP enabled; non-conforming devices may still need legacy driver-based printing."
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
          "period": "1990s–2000s era",
          "text": "GDI-based print path with EMF spooling and the v3 driver model (Unidrv/GPD, Pscript5/PPD); characterized by Microsoft as similar to the Windows Server 2003 print path."
        },
        {
          "period": "Windows Vista era",
          "text": "XPS print path and XPSDrv drivers introduced; XPS back-ported to Windows XP and Windows Server 2003 via the Microsoft WinFX Runtime Component 3.0; driver-store-based Point and Print packages introduced."
        },
        {
          "period": "Windows 8 era",
          "text": "v4 printer driver model introduced, optimized for UWP apps and simplified printer sharing."
        },
        {
          "period": "Windows 10, version 21H2",
          "text": "inbox support for Mopria printers over network and USB via the Microsoft IPP Class Driver."
        },
        {
          "period": "Windows 11 SDK (build 22000.1)",
          "text": "Print Support Apps (PSA) become the recommended method for developing printer apps."
        },
        {
          "period": "September 2023",
          "text": "Microsoft announces the legacy third-party printer driver end-of-servicing plan."
        },
        {
          "period": "Windows 11, version 24H2 (build 10.0.26100)",
          "text": "Windows protected print mode (WPP) ships."
        },
        {
          "period": "January 15, 2026",
          "text": "for Windows 11 and later and Windows Server 2025 and later, no new printer drivers are published to Windows Update (existing ones updated case-by-case)."
        },
        {
          "period": "July 1, 2026",
          "text": "driver ranking order modified to always prefer the Windows IPP inbox class driver."
        },
        {
          "period": "July 1, 2027",
          "text": "except for security fixes, third-party printer driver updates are no longer allowed."
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
      "slug": "windows-print-spooler"
    },
    {
      "section": "guides",
      "slug": "windows-printer-drivers"
    },
    {
      "section": "guides",
      "slug": "windows-gdi-printing"
    },
    {
      "section": "tools",
      "slug": "xps"
    },
    {
      "section": "guides",
      "slug": "how-printer-drivers-work"
    },
    {
      "section": "tools",
      "slug": "ipp"
    }
  ],
  "faqs": [
    {
      "q": "Does the Windows print spooler run in the kernel?",
      "a": "No. Microsoft documents that all spooler components run in user mode. Only the GDI graphics engine, which assists with rendering, has a kernel-mode component. The spooler itself runs as the Print Spooler service (Spoolsv.exe) in user mode."
    },
    {
      "q": "What is the difference between the GDI print path and the XPS print path?",
      "a": "The GDI path originates in a Win32 application calling the GDI graphics API and can spool device-independent EMF records for later playback; it is the classic path Microsoft compares to the Windows Server 2003 print path. The XPS path, introduced with Windows Vista, originates in a WPF application or the XPS Print API and spools XPS files that XPSDrv drivers consume directly through a filter pipeline. Conversion modules (MXDC and XGC) let either application type reach either driver type."
    },
    {
      "q": "What is Windows Ready Print?",
      "a": "Microsoft defines Windows Ready Print as IPP printing plus eSCL scanning plus Universal Print. It enables driverless printing to Mopria-certified printers without third-party drivers, works across CPU architectures including ARM, and is independent of driver-update breakage. Print Support Apps are a separate customization layer that works alongside it."
    },
    {
      "q": "What does Windows protected print mode change?",
      "a": "Introduced in Windows 11, version 24H2, it permits printing only to printers supported by the inbox Windows (Mopria/IPP) drivers, disables loading of third-party drivers, defers spooler operations to a new spooler process, allows only Microsoft-signed IPP binaries to load, and runs XPS rendering (PrintFilterPipelineSvc) as the user rather than SYSTEM. Enabling it uninstalls third-party-driver and unsupported software printers, which have documented replacement paths."
    },
    {
      "q": "Is Microsoft removing third-party printer drivers?",
      "a": "Microsoft published an end-of-servicing plan rather than an immediate removal. Existing drivers remain installable and continue to receive security fixes during the OS support lifecycle. Key dates: no new drivers to Windows Update for Windows 11 and later and Windows Server 2025 and later after January 15, 2026 (case-by-case signing thereafter); ranking prefers the IPP inbox class driver from July 1, 2026; and, apart from security fixes, third-party driver updates end July 1, 2027."
    }
  ],
  "sources": [
    {
      "title": "Introduction to printing",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/introduction-to-printing",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Introduction to spooler components",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/introduction-to-spooler-components",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Printer driver architecture",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/printer-driver-architecture",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Windows Print Path Overview",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/windows-print-path-overview",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "GDI Printer Drivers",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/gdi-printer-drivers",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "XPSDrv Printer Drivers",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/xpsdrv-printer-drivers",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "XPS Support in Earlier Versions of Windows",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/xps-support-in-earlier-versions-of-windows",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "V4 printer driver",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/v4-printer-driver",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "V4 driver setup concepts",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/v4-driver-setup-concepts",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "V4 driver manifest",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/v4-driver-manifest",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "V4 Printer Driver Configuration Architecture",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/v4-driver-configuration-architecture",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Add print ticket support to print drivers",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/adding-print-ticket-support-to-print-drivers",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Print Support App v1 and v2 design guide",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/devapps/print-support-app-design-guide",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "End of servicing plan for third-party printer drivers on Windows",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/end-of-servicing-plan-for-third-party-printer-drivers-on-windows",
      "publisher": "Microsoft Learn"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "windows printing architecture",
    "print spooler",
    "spoolsv.exe",
    "spoolss.dll router",
    "gdi print path",
    "emf spooling",
    "xps print path",
    "xpsdrv",
    "v3 printer driver",
    "v4 printer driver",
    "unidrv",
    "pscript5"
  ],
  "cluster": "windows-printing"
};

export default entry;
