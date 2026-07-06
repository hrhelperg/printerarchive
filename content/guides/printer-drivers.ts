import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "printer-drivers",
  "title": "Printer drivers",
  "description": "How printer drivers turn application output into device-ready data: Windows GDI/Unidrv, PostScript, XPSDrv/v4, CUPS filters, and driverless IPP printing.",
  "summary": "A printer driver is the software layer that translates an application's device-independent drawing into a data stream a specific printer understands, while exposing the device's configurable features back to the user. Every driver model — Windows GDI/Unidrv, Windows PostScript (Pscript), Windows XPSDrv/v4, and the Unix/Linux CUPS filter chain — splits into a rendering component that produces printer-ready data and a configuration component that reports capabilities and gathers settings. The dominant trend is driverless printing built on the Internet Printing Protocol (IPP), in which a single OS-supplied inbox or class driver drives any conforming printer, and per-model vendor drivers are being actively phased out across Windows, macOS/iOS, and Linux.",
  "difficulty": "intermediate",
  "estimatedTime": "14 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "A printer driver is the software layer that lets a general-purpose computer produce output on a specific printing device. Applications describe what they want printed in device-independent terms — text runs, vector shapes, images, color, and page geometry — and the driver's core job is to translate that description into a data stream the target printer actually understands, then expose the printer's configurable features (paper trays, duplexing, resolution, color mode) back to the application and the user."
    },
    {
      "kind": "paragraph",
      "text": "Microsoft's documentation defines the two canonical halves of a driver precisely: a rendering component that converts the graphics commands from the application into a data format that the printer uses to render the image on the page, and a configuration component that provides the user interface for selectable options plus a programmatic interface that communicates the printer's configuration and features to an application. Every printer-driver model — Windows GDI/Unidrv, Windows PostScript (Pscript), Windows XPSDrv/v4, and the Unix/Linux CUPS filter chain — is a variation on that same rendering-plus-configuration split."
    },
    {
      "kind": "paragraph",
      "text": "The historical need for drivers arises because printers speak many different languages. High-end devices interpret a full page-description language such as PostScript or PCL, while inexpensive devices expect a ready-made raster bitmap and offload the heavy lifting to the host PC (host-based or GDI printers). The driver bridges the gap for whichever model the hardware uses."
    },
    {
      "kind": "paragraph",
      "text": "The dominant trend of the last decade is the retreat of the per-model driver in favor of driverless printing: the printer advertises its capabilities and accepts a small set of standardized document formats directly, so a single built-in (inbox or class) driver in the OS can drive any conforming printer. Microsoft, Apple, and the Unix printing stack have all converged on this model, built on the Internet Printing Protocol (IPP)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "list",
      "items": [
        "Early to mid 1980s — Adobe Systems' PostScript introduced a device-independent, programmable page-description language; the Apple LaserWriter (1985) was an early, influential PostScript laser printer. In the same era Hewlett-Packard's Printer Command Language (PCL) became the de facto standard for the mass market of HP and HP-compatible printers. These two families define the page-description driver model.",
        "Late 1980s to 1990s — To cut printer cost, host-based GDI printers shipped with little onboard intelligence; the driver on the PC rasterized the whole page and sent a bitmap. Windows' Universal Printer Driver (Unidrv) is the archetype of the OS-supplied engine for these devices.",
        "PPDs and the PostScript ecosystem — Adobe defined the PostScript Printer Description (PPD) file, a text description of a specific PostScript printer's options, so one PostScript driver could serve many models by swapping data files. Windows' Pscript driver and the Unix/CUPS stack both adopted PPDs.",
        "1990s to 2000s — The Windows GDI print path matured around GDI, EMF spooling, Unidrv, and Pscript.",
        "2006 to 2007 — Windows Vista introduced the XML Paper Specification and the XPSDrv filter-pipeline driver model; OpenXPS was later standardized as ECMA-388.",
        "CUPS era — The Common UNIX Printing System standardized IPP-based printing with PPDs plus filter chains; Apple adopted it as the macOS printing system and acquired the project in 2007.",
        "2010s — Apple AirPrint (2010), the PWG's IPP Everywhere, and the Mopria Alliance (founded 2013) defined how printers accept standard formats directly, eliminating per-model drivers.",
        "2020s — Microsoft ships the inbox Microsoft IPP Class Driver and announced (September 2023) an end-of-servicing plan for third-party v3/v4 drivers; the Unix stack deprecated PPD-based drivers in favor of IPP/driverless and self-contained Printer Applications."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "The classic driver is split into cooperating components. In Windows the split is explicit:"
    },
    {
      "kind": "list",
      "items": [
        "Rendering component — turns application drawing into printer-consumable data. For GDI drivers this is a printer graphics DLL exporting Drv-prefixed functions defined by the Microsoft graphics Device Driver Interface (DDI). It either lets the kernel-mode GDI graphics engine do the drawing on a GDI-managed surface, assists it, or takes over drawing on a device-managed surface.",
        "Configuration / UI component — reports capabilities and gathers settings (tray, duplex, copies, resolution, orientation), historically through the DEVMODEW structure and, in modern Windows, PrintTicket and PrintCapabilities XML documents."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Windows ships three inbox drivers that cover most devices:"
    },
    {
      "kind": "list",
      "items": [
        "Microsoft Universal Printer Driver (Unidrv) — supports non-PostScript printers, customized per model by Unidrv minidrivers expressed in GPD (Generic Printer Description) files. A single Unidrv renderer converts Win32 GDI calls into printer commands; it uses a GDI-managed surface and provides some DDI drawing functions.",
        "Microsoft PostScript Printer Driver (Pscript/Pscript5) — the standard driver for PostScript printers; its minidrivers are built from .ppd (PostScript Printer Description) and .ntf files, and it renders onto a device-managed surface.",
        "Microsoft Plotter Driver — for vector plotters."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Microsoft's guidance is that you only need to write a new driver for devices containing hardware drawing accelerators controlled by proprietary command sequences; most printers are supported by adding a printer data file (GPD or PPD) to a Microsoft-supplied driver. This is the minidriver architecture: a stable OS-supplied engine plus a per-model data file."
    },
    {
      "kind": "paragraph",
      "text": "Driver model generations on Windows:"
    },
    {
      "kind": "list",
      "items": [
        "v3 — the long-standing model; UI strongly coupled to configuration; supports config and rendering plug-ins.",
        "v4 — a refinement introduced with Windows 8 that decouples UI from configuration. A common module, PrintConfig.dll, provides the PrintTicket, PrintCapabilities, and constraint handling previously supplied by UnidrvUI and PS5UI; device behavior lives in GPD/PPD files plus optional JavaScript for advanced constraints; there are no configuration plug-ins, and UI customization moves to printer-extension apps or UWP device apps. v4 enables enhanced Point and Print so clients print to shared v4 queues without downloading the manufacturer driver.",
        "XPSDrv — the rendering architecture used by v4; a pipeline of filters rather than a GDI renderer."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Unix, Linux, and macOS (CUPS): the equivalent architecture is a scheduler that speaks IPP plus a PPD describing the queue and a filter chain that converts the incoming format step by step into the printer's final language (historically via components such as Ghostscript, Gutenprint, or foomatic-generated filters). Modern CUPS deprecates the PPD-plus-filter driver model in favor of driverless/IPP and self-contained Printer Applications."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Two rendering philosophies coexist."
    },
    {
      "kind": "paragraph",
      "text": "Page-description-language (PDL) drivers. The driver emits a compact, high-level description in the printer's own language — PostScript or PCL — and the printer's onboard interpreter, a raster image processor (RIP), converts it to dots. PostScript is a full stack-based programming language; PCL is a command language (PCL 5 incorporates HP-GL/2 vector graphics and scalable fonts; PCL 6, also called PCL XL, is a later, more compact object-oriented variant). These drivers move work to the device and produce device-independent, portable output. PPDs let one PostScript driver serve many models by describing each model's page sizes, trays, resolutions, and fonts."
    },
    {
      "kind": "paragraph",
      "text": "Host-based (raster) drivers. The driver rasterizes the entire page on the PC and sends a bitmap plus minimal control codes. The printer is inexpensive and does little. Windows' Unidrv path is the OS engine for these; the GDI graphics engine does most drawing and the graphics DLL emits the RAW command stream."
    },
    {
      "kind": "paragraph",
      "text": "On Windows GDI, rendering can happen at print time or be deferred. The GDI graphics engine either renders immediately or spools the job as an Enhanced Metafile (EMF) — device-independent recorded GDI calls — which the EMF print processor (localspl.dll) later plays back, re-issuing GDI calls that drive the graphics DLL to produce RAW data for the spooler. Rendering begins when an app calls CreateDC, after which GDI loads the graphics DLL and calls DrvEnableDriver and DrvEnablePDEV."
    },
    {
      "kind": "paragraph",
      "text": "On the XPSDrv path there is no GDI rendering step: the driver is a pipeline of filters. The Filter Pipeline Manager reads a filter-pipeline-configuration file, loads the filters, and the Inter-Filter Communicator streams data filter-to-filter; the first filter reads the XPS spool file and each stage transforms it until the last stage writes device-ready PDL to the output port. A driver can do direct consumption (send XPS straight to a printer that understands it, using a null filter pipeline) or scalable consumption (do some or all processing on the host)."
    },
    {
      "kind": "paragraph",
      "text": "In driverless operation there is effectively no per-model driver at all. The OS queries the printer over IPP (Get-Printer-Attributes), learns its supported formats and options, and sends one of a small set of standardized formats (PDF, JPEG, PWG Raster, or PCLm/Apple Raster) that every conforming printer must accept. The generic inbox or class driver formats the job and manages options; the printer does the rest."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "Windows GDI print path:"
    },
    {
      "kind": "list",
      "items": [
        "Application calls Win32 GDI drawing functions.",
        "The GDI graphics engine either renders a printable image immediately with the driver's help, or spools the job as EMF records.",
        "For EMF, the print processor plays back the EMF, re-calling GDI, which calls the driver's printer graphics DLL to render.",
        "The graphics DLL emits a RAW data stream (bitmap and/or printer command sequences) to the spooler via EngWritePrinter.",
        "The spooler can insert page-layout and job-control data, then routes the stream through print monitors and port monitors to the serial, parallel, USB, or network port for the target printer."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Windows XPS print path:"
    },
    {
      "kind": "list",
      "items": [
        "A WPF app produces an XPS spool file directly; a Win32/GDI app's output is converted to XPS by the Microsoft-supplied conversion render module.",
        "The spooler hands the XPS spool file to the XPSDrv filter pipeline.",
        "Filters (for example page layout / N-up, watermark, color, rasterization) transform the XPS.",
        "The final filter emits printer-ready PDL to the output port. Direct-consumption devices receive the XPS unchanged."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Driverless / IPP path:"
    },
    {
      "kind": "list",
      "items": [
        "The OS discovers the printer (mDNS/DNS-SD, that is Bonjour) and queries capabilities via IPP.",
        "The inbox or class driver renders the document to a standard format (PDF, PWG Raster, PCLm/Apple Raster, or JPEG) and sets job options as IPP attributes.",
        "The job is sent over IPP, including IPP-over-USB for local devices; the printer interprets it directly."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "list",
      "items": [
        "Windows. The print subsystem is the print spooler plus the driver set. Drivers are installed into the Driver Store; queues can be shared via Point and Print and enhanced Point and Print. Connectivity uses port and language monitors and bidirectional communication (Bidi) over WSD, SNMP, and, in v4, USB. Modern Windows favors the inbox Microsoft IPP Class Driver and moves per-vendor customization into Print Support Apps (PSA) and UWP device apps distributed via the Microsoft Store, under the umbrella branded Windows Ready Print. Universal Print is Microsoft's cloud print service that removes on-premises print servers.",
        "macOS and iOS. Built on CUPS (macOS) and, for zero-configuration mobile printing, AirPrint (IPP plus Bonjour, no drivers).",
        "Linux and Unix. CUPS is the standard printing system: an IPP-based scheduler with PPD-described queues and a filter chain. The modern direction (OpenPrinting) is driverless/IPP plus self-contained Printer Applications that bundle any needed conversion logic."
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
        "IPP (Internet Printing Protocol) — the transport and semantics layer underneath modern printing; an IETF standard. IPP/1.1 is defined by RFC 8010 (encoding and transport) and RFC 8011 (model and semantics), which obsolete the earlier RFC 2910/2911. CUPS, AirPrint, Mopria, IPP Everywhere, and Windows' IPP Class Driver all build on it.",
        "IPP Everywhere — a Printer Working Group (PWG) specification, PWG 5100.14, defining the driverless baseline: capability discovery plus a required set of document formats.",
        "PWG Raster Format — a PWG-standardized raster document format, PWG 5102.4, used as a driverless target. Apple Raster and PCLm are the closely related raster formats used by AirPrint-class devices; PDF and JPEG round out the driverless format set.",
        "PostScript and PCL — the two dominant page-description languages the driver may target.",
        "PPD — Adobe's PostScript Printer Description File Format Specification (version 4.3), reused far beyond Windows (notably by CUPS) as the capability-description format.",
        "XPS / OpenXPS — Microsoft XPS and the ECMA-388 (OpenXPS) standard. XPS can serve simultaneously as a document format, a spool format, and, for direct-consumption devices, the format sent to the printer.",
        "eSCL / WS-Scan and IPP Fax Out — companion standards for the scan and fax endpoints of multifunction devices in the driverless model."
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
        "PostScript — a device-independent, programmable page-description language from Adobe; drivers targeting it (for example Windows Pscript, CUPS PostScript queues) emit PostScript and rely on the printer's RIP, using PPDs to describe each model.",
        "PCL — HP's Printer Command Language; the mainstream alternative to PostScript. Windows' Unidrv plus GPD minidrivers commonly target PCL-family printers.",
        "GDI / graphics engine — the Windows drawing model that host-based drivers piggyback on; the graphics engine calls the driver's graphics DLL through the DDI.",
        "EMF — the device-independent spool format that decouples app-time from render-time on Windows.",
        "XPS — Microsoft's XML-based document, spool, and PDL technology; the basis of the v4/XPSDrv filter model, with support for advanced color, transparency, and gradients.",
        "PDF — increasingly the lingua franca of driverless printing, a required or near-universal driverless format.",
        "Ghostscript, Gutenprint, and foomatic — the classic Unix rendering technologies invoked inside CUPS filter chains to turn PostScript or PDF into device raster or PCL for non-PostScript printers."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "list",
      "items": [
        "Adobe — created PostScript and the PPD format; defined the high-end page-description model.",
        "Hewlett-Packard — created PCL (and HP-GL/2 within PCL 5), the volume-market page-description standard; a founding member of the Mopria Alliance.",
        "Apple — shipped the LaserWriter that popularized PostScript; later stewarded CUPS (acquired 2007) and created AirPrint driverless printing.",
        "Microsoft — defined the Windows GDI/Unidrv, Pscript, and XPSDrv/v4 driver models, the minidriver (GPD/PPD) approach, and the inbox IPP Class Driver plus Print Support Apps and Windows Ready Print, as well as the plan to deprecate third-party drivers.",
        "Mopria Alliance — a consortium founded in September 2013 by Canon, HP, Samsung, and Xerox that certifies printers for standards-based IPP printing and eSCL scanning. Microsoft's IPP Class Driver can communicate via IPP with any Mopria-certified printer, and Windows Ready Print is designed to work with Mopria-certified printers.",
        "Individual independent hardware vendors and OEMs historically supplied per-model v3/v4 drivers or CUPS PPDs plus filters; under driverless printing they supply firmware conforming to the standards, plus optional Print Support Apps or Printer Applications for extras."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Driverless printing is now the default direction across all three major platforms, and the per-model printer driver is being actively phased out."
    },
    {
      "kind": "paragraph",
      "text": "On Windows, Microsoft published an end-of-servicing plan for legacy v3/v4 third-party drivers, announced in September 2023. Its milestones are: January 15, 2026 — no new third-party printer drivers published to Windows Update for Windows 11+ and Windows Server 2025+ (approved case by case); July 1, 2026 — the driver ranking order is modified to always prefer the Windows IPP inbox class driver; and July 1, 2027 — third-party driver updates are no longer allowed except for security fixes."
    },
    {
      "kind": "paragraph",
      "text": "New Windows printer installations use IPP by default when supported (Windows Ready Print), with per-vendor customization via Store-delivered Print Support Apps rather than kernel or user drivers. The Unix/OpenPrinting stack has deprecated PPD-based drivers in favor of IPP/driverless and Printer Applications, and Apple's platforms rely on AirPrint."
    },
    {
      "kind": "paragraph",
      "text": "The rationale cited consistently is security (thousands of unvetted binary drivers become a large attack surface), reliability (no crashes, leaks, or update breakage from vendor drivers), architecture-independence (works on ARM64 where many legacy drivers do not), and simpler management (no hunting for the right driver per OS or architecture)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"A printer driver is just a settings or config file.\" No — the rendering component does real work: rasterizing pages and/or emitting a page-description language. Configuration is only half the driver.",
        "\"Every printer needs a manufacturer-specific driver.\" Increasingly false. A single OS inbox or class driver drives any IPP-conformant (Mopria, AirPrint, or IPP Everywhere) printer.",
        "\"Driverless means no software is involved.\" There is still a generic driver and print stack in the OS; what is eliminated is the per-model, vendor-supplied driver. The host still renders to a standard format and manages options.",
        "\"PostScript and PCL are the same kind of thing, or PostScript is just a file format.\" PostScript is a full programming language interpreted by the printer; PCL is a command language. They are different driver targets, not interchangeable formats.",
        "\"PPDs are a Windows thing.\" PPDs are an Adobe PostScript standard; Windows Pscript uses them, but so does CUPS on Unix and macOS.",
        "\"XPS is only a document format like PDF.\" In Windows it also serves as a spool format and, for direct-consumption devices, the PDL sent to the printer.",
        "\"Host-based (GDI) printers are driverless.\" The opposite — they depend heavily on the host driver to rasterize every page."
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
          "text": "Adobe PostScript introduced as a device-independent page-description language."
        },
        {
          "period": "1985",
          "text": "Apple LaserWriter popularizes PostScript laser printing; it was the first PostScript printer."
        },
        {
          "period": "~1990",
          "text": "PCL 5 (HP LaserJet III) adds HP-GL/2 vector graphics and scalable fonts; PCL dominates the mass market."
        },
        {
          "period": "1990s to 2000s",
          "text": "The Windows GDI print path matures around GDI, EMF spooling, Unidrv (GPD minidrivers), and Pscript (PPD minidrivers)."
        },
        {
          "period": "~2000",
          "text": "IPP standardized by the IETF (RFC 2910/2911), later updated by RFC 8010/8011 (2017)."
        },
        {
          "period": "2006 to 2007",
          "text": "Windows Vista introduces the XPS print path and the XPSDrv filter-pipeline driver model."
        },
        {
          "period": "2007",
          "text": "Apple acquires the CUPS project."
        },
        {
          "period": "2009",
          "text": "OpenXPS adopted as ECMA-388."
        },
        {
          "period": "2010",
          "text": "Apple AirPrint launches driverless mobile printing (with iOS 4.2)."
        },
        {
          "period": "~2012",
          "text": "Windows 8 introduces the v4 printer driver model and enhanced Point and Print."
        },
        {
          "period": "2013",
          "text": "Mopria Alliance founded (by Canon, HP, Samsung, and Xerox) to standardize IPP printing and eSCL scanning."
        },
        {
          "period": "~Windows 10 21H2",
          "text": "the inbox Microsoft IPP Class Driver adds Mopria print support over network and USB."
        },
        {
          "period": "September 2023",
          "text": "Microsoft announces the end-of-servicing plan for legacy v3/v4 third-party printer drivers."
        },
        {
          "period": "January 15, 2026",
          "text": "no new third-party printer drivers to Windows Update for Windows 11+ and Server 2025+ (case by case)."
        },
        {
          "period": "July 1, 2026",
          "text": "Windows driver ranking order modified to always prefer the IPP inbox class driver."
        },
        {
          "period": "July 1, 2027",
          "text": "third-party printer driver updates no longer allowed except security fixes."
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
      "slug": "how-printer-drivers-work"
    },
    {
      "section": "tools",
      "slug": "postscript"
    },
    {
      "section": "tools",
      "slug": "pcl"
    },
    {
      "section": "guides",
      "slug": "universal-print-drivers"
    },
    {
      "section": "guides",
      "slug": "driverless-printing"
    },
    {
      "section": "tools",
      "slug": "ipp"
    }
  ],
  "faqs": [
    {
      "q": "What is a printer driver?",
      "a": "A printer driver is the software layer that translates an application's device-independent description of a page (text, shapes, images, color, geometry) into a data stream a specific printer understands, and exposes the printer's configurable features such as trays, duplexing, and resolution. It has two halves: a rendering component that produces the printer-ready data and a configuration component that reports capabilities and gathers settings."
    },
    {
      "q": "What is the difference between a page-description-language driver and a host-based driver?",
      "a": "A page-description-language (PDL) driver emits a compact, high-level description in the printer's own language — PostScript or PCL — which the printer's onboard raster image processor converts to dots, moving the work to the device. A host-based (raster) driver rasterizes the entire page on the PC and sends a bitmap to a simpler, cheaper printer that does little processing itself. On Windows, the Unidrv path is the engine for host-based printers."
    },
    {
      "q": "What is driverless printing?",
      "a": "Driverless printing eliminates the per-model, vendor-supplied driver. The OS discovers the printer over mDNS/Bonjour, queries its capabilities via the Internet Printing Protocol (IPP), and sends one of a small set of standardized formats — PDF, JPEG, PWG Raster, or PCLm/Apple Raster — that every conforming printer must accept. A single OS inbox or class driver drives any IPP-conformant printer (Mopria, AirPrint, or IPP Everywhere). Software is still involved; only the per-model driver is removed."
    },
    {
      "q": "Are printer drivers being phased out on Windows?",
      "a": "Yes. Microsoft announced an end-of-servicing plan for legacy v3/v4 third-party drivers in September 2023. Key milestones: January 15, 2026 (no new third-party drivers to Windows Update for Windows 11+/Server 2025+, case by case), July 1, 2026 (driver ranking modified to always prefer the IPP inbox class driver), and July 1, 2027 (third-party driver updates limited to security fixes). New installs use IPP by default under Windows Ready Print, with vendor extras via Store-delivered Print Support Apps."
    },
    {
      "q": "Are PPDs only used on Windows?",
      "a": "No. The PostScript Printer Description (PPD) file is an Adobe PostScript standard, not a Windows-specific format. Windows' Pscript driver uses PPDs, but so does CUPS on Unix and macOS, where a PPD describes the queue and drives the filter chain. Adobe's PPD File Format Specification version 4.3 defines the format."
    }
  ],
  "sources": [
    {
      "title": "Introduction to printing",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/introduction-to-printing",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Printer driver architecture",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/printer-driver-architecture",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Render a print job",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/rendering-a-print-job",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Introduction to print processors",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/introduction-to-print-processors",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "V4 Printer Driver Configuration Architecture",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/v4-driver-configuration-architecture",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "V4 printer driver",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/v4-printer-driver",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "End of servicing plan for third-party printer drivers on Windows",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/end-of-servicing-plan-for-third-party-printer-drivers-on-windows",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "What is IPP? (Universal Print Connector with IPP)",
      "url": "https://learn.microsoft.com/universal-print/fundamentals/universal-print-connector-with-ipp",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Discover Windows Ready Print",
      "url": "https://learn.microsoft.com/windows/modern-print/windows-ready-print",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Printing documents overview (XPS print path)",
      "url": "https://learn.microsoft.com/dotnet/desktop/wpf/documents/printing-overview",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "RFC 8010 — IPP/1.1: Encoding and Transport",
      "url": "https://www.rfc-editor.org/rfc/rfc8010.html",
      "publisher": "IETF"
    },
    {
      "title": "RFC 8011 — IPP/1.1: Model and Semantics",
      "url": "https://www.rfc-editor.org/rfc/rfc8011",
      "publisher": "IETF"
    },
    {
      "title": "IPP Everywhere (PWG 5100.14)",
      "url": "https://ftp.pwg.org/pub/pwg/candidates/cs-ippeve11-20200515-5100.14.pdf",
      "publisher": "Printer Working Group"
    },
    {
      "title": "PWG Raster Format (PWG 5102.4)",
      "url": "https://ftp.pwg.org/pub/pwg/candidates/cs-ippraster10-20120420-5102.4.pdf",
      "publisher": "Printer Working Group"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "printer drivers",
    "printer driver architecture",
    "rendering component",
    "configuration component",
    "unidrv",
    "gpd minidriver",
    "postscript printer driver",
    "pscript",
    "ppd",
    "xpsdrv",
    "v4 printer driver",
    "printconfig.dll"
  ],
  "cluster": "printer-drivers-and-rendering"
};

export default entry;
