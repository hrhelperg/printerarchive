import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "windows-printer-drivers",
  "title": "Windows Printer Drivers",
  "description": "How Windows printer drivers work: the v3 and v4 driver models, the user-mode spooler, GDI and XPS print paths, and the modern IPP class driver.",
  "summary": "On Windows, a printer driver is not a single file but a set of cooperating user-mode modules — a rendering component that converts application graphics into a printer-ready format and a configuration component that exposes options and reports capabilities — loaded as plug-ins by the print spooler. Windows has shipped two successive third-party driver architectures, the version 3 (type 3) model and the version 4 (type 4) model, alongside a modern driver-light platform built on the Internet Printing Protocol (IPP), the inbox Microsoft IPP Class Driver, and Print Support Apps. This page explains the whole subsystem: its history, the spooler and driver components, the GDI and XPS print paths, operating-system integration such as driver isolation and Windows protected print mode, its relationship to standards and manufacturers, and Microsoft's published plan to steer the ecosystem away from installable third-party drivers.",
  "difficulty": "intermediate",
  "estimatedTime": "12 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "On Windows, a \"printer driver\" is not a single monolithic component but a set of cooperating user-mode modules that sit between an application's drawing calls and a physical or network printer. Microsoft's documentation describes a printer driver as having two functional halves: a rendering component, which converts an application's graphics commands into a data format the printer can turn into marks on a page, and a configuration component, which exposes a user interface for selectable options and a programmatic interface that reports the printer's capabilities to applications."
    },
    {
      "kind": "paragraph",
      "text": "Drivers do not talk to hardware directly. They operate as plug-ins to the print spooler — the service that queues jobs, selects the output path, converts spooled data to a device-ready format, and sends it to a port. Windows has shipped two successive third-party driver architectures, the version 3 (type 3) model and the version 4 (type 4) model, plus a modern, driver-light platform built on the Internet Printing Protocol (IPP), the inbox Microsoft IPP Class Driver, and Print Support Apps (PSA). As of the mid-2020s, Microsoft is actively steering the ecosystem away from installable third-party drivers toward this IPP-based platform and has published a multi-year end-of-servicing plan for both v3 and v4 drivers."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "The architecture traces to the Windows 2000 / Windows NT print subsystem, where all spooler components run in user mode and a printer driver consists of a graphics DLL plus an interface DLL. Microsoft supplied two universal \"core\" drivers so most printers needed only a small data file rather than a full custom driver: Unidrv, the Universal Printer Driver for non-PostScript devices, driven by text GPD minidrivers; and Pscript5, the Microsoft PostScript Printer Driver, driven by PPD files."
    },
    {
      "kind": "paragraph",
      "text": "Windows Vista introduced XPSDrv, extending the GDI-based v3 architecture to consume the XML Paper Specification (XPS) as both spool format and page-description language, processed through a filter pipeline. Vista also added client-side rendering, and Windows 7 / Server 2008 R2 added printer driver isolation (running drivers outside the spooler process)."
    },
    {
      "kind": "paragraph",
      "text": "Windows 8 introduced the v4 driver model, a refinement of v3 aligned with the then-new Universal Windows Platform (UWP) app environment, easier printer sharing, and simpler development. Windows 10 version 21H2 shipped inbox support for Mopria-compliant printers via the Microsoft IPP Class Driver, and Microsoft began recommending the IPP-plus-PSA platform over custom drivers. In September 2023, Microsoft announced the end-of-servicing plan for legacy v3 and v4 printer drivers. Windows 11 version 24H2 (build 26100) added Windows protected print mode, which disables third-party driver loading entirely."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "Where drivers sit. Printer drivers are user-mode plug-ins loaded by the print spooler. Between an application and the driver sits the Graphics Device Interface (GDI): a user-mode DLL (gdi32.dll) exposing the Win32 GDI API, and a kernel-mode graphics engine that graphics device drivers hook into. GDI, in conjunction with the printer driver, produces the data the spooler queues."
    },
    {
      "kind": "paragraph",
      "text": "Spooler components (all user-mode):"
    },
    {
      "kind": "list",
      "items": [
        "Winspool.drv — the client-side interface into the spooler; exports the spooler's Win32 API and provides RPC stubs to reach the server. GDI is its primary client.",
        "Spoolsv.exe — the spooler's API server, implemented as a service started at boot and exposing an RPC interface; its clients are Winspool.drv locally and Win32spl.dll remotely.",
        "Router (Spoolss.dll) — decides which print provider to call based on the printer name or handle and forwards the call.",
        "Print provider — the local provider (for local queues) or a remote provider (for network queues).",
        "Print processor — a plug-in that processes spooled job data and decides when to play a job back for rendering.",
        "Print monitors — language monitors (bidirectional control and status framing) and port monitors (transport to a physical or network port)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "v3 (type 3) components. A GDI printer driver comprises a printer graphics DLL (assists GDI in rendering and hands the rendered stream to the spooler), a printer interface DLL (configuration UI plus a spooler-callable notification interface), and printer data files. Microsoft's core drivers implement these:"
    },
    {
      "kind": "list",
      "items": [
        "Unidrv: unidrv.dll (renderer) and unidrvui.dll (common UI), driven by GPD minidrivers; produces .bud binary cache files.",
        "Pscript5: pscript5.dll (renderer, which handles text output and renders images) and ps5ui.dll (UI), driven by PPD minidrivers; produces .bpd binary cache files.",
        "compstui.dll: the Common Property Sheet UI (CPSUI) shared by both.",
        "Plug-ins: optional printer-specific rendering and UI plug-ins. A single UI-replacement plug-in can serve both core drivers via the IPrintCoreHelper interface, with IPrintCoreHelperUni (GPD access via the GDL parser, new for Windows Vista) and IPrintCoreHelperPS (PPD data) for driver-specific extensions."
      ]
    },
    {
      "kind": "paragraph",
      "text": "XPSDrv replaces the rendering path with an XPS filter pipeline while retaining a v3-style configuration module. A Microsoft-supplied conversion module turns incoming GDI/DDI calls into an XPS spool file, and independent-hardware-vendor (IHV) filters in the pipeline then emit the device PDL."
    },
    {
      "kind": "paragraph",
      "text": "v4 (type 4) components. v4 reuses the XPSDrv rendering architecture but overhauls configuration and setup:"
    },
    {
      "kind": "list",
      "items": [
        "Configuration is consolidated into PrintConfig.dll, which encapsulates the functionality previously provided by UnidrvUI and PS5UI; it focuses on PrintTicket, PrintCapabilities, and constraint handling. There are no configuration plug-ins — device configuration lives in GPD/PPD files plus an optional JavaScript constraint file.",
        "v4 drivers run directly from the Driver Store and must be self-contained, avoiding the shared-file Needs/Include mechanisms of v3.",
        "Setup uses an INF file plus a manifest file whose name ends in -manifest.ini; v4 INFs specify ClassVer=4.0.",
        "Print class drivers are v4 drivers that provide generic per-PDL rendering; a model-specific v4 driver can depend on one via the RequiredClass manifest directive, merging GPD/PPD files.",
        "Customized preferences and notification UI are delivered through UWP device apps, not in-process UI DLLs. Data flows from custom UI to rendering through property bags.",
        "Connectivity is simplified: non-Microsoft port monitors and language monitors are not supported; Bidi runs over WSD (WSDMon), SNMP, and — new in v4 — USB (USBMon)."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "When a Win32 application prints, it issues GDI calls. GDI, together with the printer driver, either renders a device-ready image or spools an intermediate enhanced metafile (EMF) for later playback. The spooler queues the job, and the print processor eventually plays the EMF back through GDI and the driver's graphics DLL to produce the printer's page-description language (for example, PCL). A language monitor can inject job-control and status framing, and the port monitor writes the byte stream to the target I/O port."
    },
    {
      "kind": "paragraph",
      "text": "For XPS-aware output, the pipeline consumes an XPS spool file and runs it through the print filter pipeline, where Microsoft and IHV filters transform XPS into the device PDL."
    },
    {
      "kind": "paragraph",
      "text": "In the modern IPP model there is effectively no third-party rendering driver: the inbox Microsoft IPP Class Driver communicates over IPP with a Mopria-certified printer, and a Print Support App — a Store-distributed UWP app associated with the queue by Hardware ID or Compatible ID and reached through a PSA broker process — supplies any custom preferences UI or job-time behavior without a kernel or in-spooler driver."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "Windows documents two primary print paths and two conversion paths:"
    },
    {
      "kind": "paragraph",
      "text": "1. GDI (Win32) print path. App → GDI (gdi32.dll plus the kernel graphics engine) → EMF spool file or direct render with the driver → spooler → print processor plays EMF back through GDI and the driver graphics DLL → PDL (RAW) → language monitor → port monitor → port/printer. 2. XPS print path. WPF app or the XPS Print API → XPS spool file → print filter pipeline → filters convert XPS to PDL → port. 3. GDI-to-XPS conversion. The Microsoft XPS Document Converter (MXDC) turns GDI/DDI output into an XPS spool file so a GDI application can target an XPSDrv or v4 driver. 4. XPS-to-GDI conversion. When an XPS job targets a legacy GDI driver, the XPS-to-GDI conversion (XGC) turns XPS back into EMF."
    },
    {
      "kind": "paragraph",
      "text": "Client-side rendering (default since Vista) moves rendering to the client: the client renders to the device PDL and sends RAW to the server, eliminating server/client driver-mismatch problems and enabling offline spooling. In the IPP path, the client's inbox IPP driver emits a supported PDL and transmits it over IPP to the printer, with optional transport encryption and IPP compression."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "paragraph",
      "text": "The entire spooler runs in user mode as the Spoolsv.exe service; only the GDI graphics engine has a kernel component."
    },
    {
      "kind": "paragraph",
      "text": "Printer driver isolation (Windows 7 / Server 2008 R2 onward) lets an administrator run a driver in the spooler process (None), in a shared isolated process (Shared), or in its own process (Isolated), controlled by the INF DriverIsolation keyword (value 2 = supported) and overridable via Group Policy. A fault in an isolated driver no longer takes down the print service."
    },
    {
      "kind": "paragraph",
      "text": "Point and Print integrates driver and queue setup with client-server connections. Under IPP it no longer installs a driver: client and server connect, both use their inbox IPP driver, and a PSA is installed if available."
    },
    {
      "kind": "paragraph",
      "text": "Windows protected print mode (Windows 11 version 24H2) defers spooler operation to a hardened spooler process that blocks non-Microsoft module loading (allowing only Microsoft-signed IPP binaries), restricts legacy configuration APIs — closing port-monitor-DLL and symbolic-link attack surfaces — runs XPS rendering per user instead of as SYSTEM, and lowers privileges for common spooler tasks. Group Policy governs driver isolation, Package Point and Print, and driver-search behavior."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to standards"
    },
    {
      "kind": "list",
      "items": [
        "PostScript / PPD (Adobe): Pscript5 and PostScript-based v4 drivers describe devices with PPD files.",
        "PCL and other page-description languages: emitted by Unidrv-class and print-class drivers.",
        "XPS / OpenXPS: XPS serves as document format, spool format, and PDL in XPSDrv and v4. OpenXPS, the ECMA-standardized variant (ECMA-388), is supported side-by-side with Microsoft XPS from Windows 8, with MXDC and XGC handling conversion between the two flavors.",
        "IPP (Internet Printing Protocol): the basis of the modern inbox class driver and of Universal Print; supports transport encryption and a limited, well-defined PDL set.",
        "Mopria: the certification program the inbox IPP driver targets.",
        "IEEE 1284 device ID (used for queue naming and model matching), SNMP, WSD (Web Services on Devices), and the PWG Port Monitor MIB (PWG 5107.1-2005) for TCP/IP auto-detection all feed Windows's Bidi and setup logic. The Print Schema (PrintTicket/PrintCapabilities XML) is Microsoft's device-capability description used across XPSDrv and v4; Windows 8.1 added protected (PIN) printing through Print Schema v1.1 keywords."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to technologies"
    },
    {
      "kind": "paragraph",
      "text": "The subsystem is tightly coupled to GDI (the historical rendering API) and to XPS/WPF (the XML-based path). EMF is the classic spool format, while RAW/PDL is the device format. Bidi (bidirectional communication) carries status and configuration."
    },
    {
      "kind": "paragraph",
      "text": "The v4 model leans on UWP — device apps, and later Print Support Apps — for customization, and on JavaScript for constraint logic and USB Bidi. The modern platform builds on IPP over USB and network IPP, and underpins Universal Print, Microsoft's cloud print service, which also communicates over IPP."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "In the v3/v4 era, printer OEMs and independent hardware vendors (IHVs) shipped GPD/PPD data files, optional rendering and UI plug-ins (v3), XPS filter-pipeline filters, and JavaScript constraint files (v4), building atop Microsoft's Unidrv, Pscript5, and PrintConfig cores. PostScript support derives from Adobe's PPD language; PCL originates with Hewlett-Packard."
    },
    {
      "kind": "paragraph",
      "text": "In the modern platform, vendors no longer ship kernel or in-spooler drivers for Mopria-certified devices; instead they publish Print Support Apps through the Microsoft Store to differentiate their devices, associated to queues by Hardware ID or Compatible ID. Microsoft's Windows Hardware Compatibility Program still signs driver submissions, but from January 15, 2026, new driver signing for Windows 11 and later and Windows Server 2025 and later is handled case-by-case, with exceptions such as printers that cannot be Mopria-certified, packages targeting Windows 10 or lower, and native ARM64 drivers."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Microsoft now positions the IPP class driver plus Print Support Apps as the preferred way to communicate with printers, citing security (no third-party driver code, encrypted transport, fewer PDLs to parse), reliability, and freedom from per-SKU and per-architecture driver management."
    },
    {
      "kind": "paragraph",
      "text": "The published end-of-servicing roadmap:"
    },
    {
      "kind": "list",
      "items": [
        "September 2023 — end-of-servicing plan announced.",
        "January 15, 2026 — no new third-party printer drivers published to Windows Update for Windows 11 and later and Windows Server 2025 and later; updates to existing drivers case-by-case.",
        "July 1, 2026 — driver ranking modified to always prefer the Windows IPP inbox class driver.",
        "July 1, 2027 — third-party driver updates disallowed except for security fixes."
      ]
    },
    {
      "kind": "paragraph",
      "text": "v3 and v4 drivers still install and run — vendors can distribute standalone installation packages — and there are no plans to remove print features specific to the legacy platform. Security fixes continue while the operating system is in support."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"A printer driver is one file.\" It is a set of cooperating modules (rendering plus configuration), along with data files and optional plug-ins or filters, loaded by the spooler.",
        "\"Windows printer drivers run in the kernel.\" The spooler and printer drivers run in user mode; only the GDI graphics engine has a kernel component.",
        "\"v4 replaced v3 the way a driver replaces a driver.\" v4 is a refinement that still supports XPSDrv, GPD, PPD, autoconfiguration, and Bidi; it changes packaging (Driver Store, manifest), consolidates configuration into PrintConfig.dll, and removes configuration plug-ins and non-Microsoft port and language monitors.",
        "\"Unidrv is a full driver by itself.\" Unidrv and Pscript5 are Microsoft-supplied core drivers; a specific printer is described by a GPD or PPD minidriver, plus optional plug-ins.",
        "\"IPP class-driver printing still needs a vendor driver.\" For Mopria-certified printers the inbox IPP driver handles communication; vendor customization comes via Store-delivered Print Support Apps, not installable drivers.",
        "\"Protected print mode is just a policy tweak.\" It routes work through a separate hardened spooler process, blocks non-Microsoft module loading, and runs XPS rendering per user rather than as SYSTEM."
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
          "period": "2000 era",
          "text": "Windows 2000 / NT print subsystem: all-user-mode spooler; drivers = graphics DLL plus interface DLL; Unidrv (GPD) and Pscript5 (PPD) core drivers."
        },
        {
          "period": "Windows XP era",
          "text": "spooler functions (SplPromptUIInUsersSession, SplIsSessionZero) added so drivers can display UI in the user's session rather than session 0."
        },
        {
          "period": "Windows Vista",
          "text": "XPSDrv introduced (XPS as spool format and PDL, filter pipeline); client-side rendering added and enabled by default; GDL-based GPD parsing added."
        },
        {
          "period": "Windows 7 / Server 2008 R2",
          "text": "printer driver isolation introduced."
        },
        {
          "period": "Windows 8",
          "text": "v4 (type 4) driver model introduced; UWP-oriented customization; full OpenXPS support side-by-side with Microsoft XPS."
        },
        {
          "period": "Windows 8.1",
          "text": "protected (PIN) printing support added to v4 via Print Schema v1.1 keywords."
        },
        {
          "period": "Windows 10 version 21H2",
          "text": "inbox Mopria support via the Microsoft IPP Class Driver over network and USB."
        },
        {
          "period": "September 2023",
          "text": "end-of-servicing plan for legacy v3/v4 drivers announced."
        },
        {
          "period": "Windows 11 version 24H2 (build 26100)",
          "text": "Windows protected print mode introduced."
        },
        {
          "period": "January 15, 2026",
          "text": "new third-party drivers no longer published to Windows Update for Windows 11 and later and Windows Server 2025 and later."
        },
        {
          "period": "July 1, 2026",
          "text": "driver ranking changed to prefer the IPP inbox class driver."
        },
        {
          "period": "July 1, 2027",
          "text": "third-party driver updates limited to security fixes."
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
      "section": "guides",
      "slug": "windows-printing"
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
      "slug": "how-printer-drivers-work"
    },
    {
      "section": "glossary",
      "slug": "print-driver"
    }
  ],
  "faqs": [
    {
      "q": "Is a Windows printer driver a single file?",
      "a": "No. A Windows printer driver is a set of cooperating user-mode modules — a rendering component that converts application graphics into a printer-ready format and a configuration component that exposes options and reports capabilities — plus data files and optional plug-ins or filters, all loaded as plug-ins by the print spooler."
    },
    {
      "q": "What is the difference between v3 and v4 printer drivers?",
      "a": "The v4 (type 4) model is a refinement of v3 that still supports the XPSDrv rendering pipeline, GPD, PPD, autoconfiguration, and Bidi. It changes packaging (drivers run directly from the Driver Store with an INF plus a -manifest.ini file and ClassVer=4.0), consolidates configuration into PrintConfig.dll, removes configuration plug-ins, and drops support for non-Microsoft port and language monitors."
    },
    {
      "q": "Do Windows printer drivers run in the kernel?",
      "a": "No. The print spooler and printer drivers run in user mode. Only the GDI graphics engine has a kernel-mode component; the user-mode gdi32.dll exposes the GDI API to applications."
    },
    {
      "q": "Is Microsoft ending third-party printer drivers?",
      "a": "Microsoft has published an end-of-servicing plan. From January 15, 2026, no new third-party drivers are published to Windows Update for Windows 11 and later and Windows Server 2025 and later; from July 1, 2026, driver ranking prefers the inbox IPP class driver; and from July 1, 2027, third-party driver updates are limited to security fixes. Existing v3 and v4 drivers still install and run."
    },
    {
      "q": "How does modern IPP-based printing avoid vendor drivers?",
      "a": "For Mopria-certified printers, the inbox Microsoft IPP Class Driver communicates with the printer over IPP, so no third-party rendering driver is installed. Vendors provide customization through Print Support Apps distributed via the Microsoft Store and associated to a queue by Hardware ID or Compatible ID, reached through a PSA broker process."
    }
  ],
  "sources": [
    {
      "title": "Introduction to spooler components",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/introduction-to-spooler-components",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Print Spooler Architecture",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/print-spooler-architecture",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Introduction to printing",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/introduction-to-printing",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "GDI Printer Drivers",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/gdi-printer-drivers",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Unidrv Components",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/unidrv-components",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Pscript Components",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/pscript-components",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Printer Driver and Plug-in Helper Interfaces",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/printer-driver-and-plug-in-helper-interfaces",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "XPSDrv Printer Drivers",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/xpsdrv-printer-drivers",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "V4 Printer Driver",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/v4-printer-driver",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "V4 Printer Driver Configuration Architecture",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/v4-driver-configuration-architecture",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "V4 Driver INF",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/v4-driver-inf",
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
      "title": "Printer Driver Isolation",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/printer-driver-isolation",
      "publisher": "Microsoft Learn"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "windows printer drivers",
    "v3 printer driver",
    "v4 printer driver",
    "print spooler",
    "unidrv",
    "pscript5",
    "xpsdrv",
    "microsoft ipp class driver",
    "print support app",
    "printer driver isolation",
    "windows protected print mode",
    "gdi print path"
  ],
  "cluster": "windows-printing"
};

export default entry;
