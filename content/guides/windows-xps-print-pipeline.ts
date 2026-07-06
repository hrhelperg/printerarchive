import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "windows-xps-print-pipeline",
  "title": "Windows XPS Print Pipeline",
  "description": "How the Windows XPS print path carries XPS from application to driver or device: XPSDrv filter pipelines, FPM/IFC, conversions, and OpenXPS.",
  "summary": "The XPS print path is a Windows print subsystem, introduced in Windows Vista, that carries a document in the XML Paper Specification (XPS) format from the application to the printer driver or device without an intermediate spool conversion. In this path XPS acts at once as a document format, the spool file format, and a page description language. The driver model, XPSDrv, structures a driver as a configuration module plus a modular filter pipeline managed by a Filter Pipeline Manager and Inter-Filter Communicators. The spooler supports both the XPS and legacy GDI paths and bridges them with the Microsoft XPS Document Converter (GDI to XPS) and the XPS-to-GDI Conversion module. Windows 8 added OpenXPS (ECMA-388) support through the v4 driver model, whose rendering architecture matches XPSDrv. On Windows 10/11 Microsoft designates the modern print platform (IPP inbox class driver plus Print Support Apps) as preferred and treats the XPS Print API and XPSDrv as legacy, though the XPS/OpenXPS formats, the Microsoft XPS Document Writer, and XPSDrv/v4 rendering still ship.",
  "difficulty": "advanced",
  "estimatedTime": "11 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Versions of Windows before Vista required a printer driver to supply a printer-interface DLL for configuration and a printer-graphics DLL for rendering document content, operating on the EMF-based GDI print path. The XML Paper Specification (XPS) and the XPSDrv driver model were introduced as the foundation for document and printing improvements in Windows Vista."
    },
    {
      "kind": "paragraph",
      "text": "XPS-based printing was also made available on Windows XP and Windows Server 2003 through the Microsoft WinFX Runtime Component 3.0, which provided a consistent filter-pipeline model and an XPS-based print processor on those older systems, with some reduced capabilities such as page-boundary-only notifications for scalable consumers."
    },
    {
      "kind": "paragraph",
      "text": "Later milestones followed. The native XPS Document API, an XPS object-model API for C++, arrived in Windows 7 and was also made available on Windows Vista SP2 and Windows Server 2008 SP2 through the Platform Update. Windows 8 and Windows Server 2012 added full support for OpenXPS, the Ecma-standardized variant, side-by-side with Microsoft's original XPS format, delivered through the v4 printer driver model, whose rendering architecture is the same as XPSDrv. Over the Windows 10 lifecycle the XPS Print API functions and structures were marked deprecated in favor of the Print Document Package API, and the XPS Viewer became an optional component rather than a default install."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "An XPSDrv printer driver has two principal parts."
    },
    {
      "kind": "list",
      "items": [
        "Configuration module — communicates printer features and settings to applications. It is built on the Version 3 print driver modules and uses the PrintTicket and PrintCapabilities technologies, which are backed by the Print Schema. It can be Unidrv-based, PScript5-based, or a custom (monolithic) module; the three options are mutually exclusive. It can receive document events through the DrvDocumentEvent function.",
        "Render module (XPS filter pipeline) — the chain of filters that process and render the XPS spool file and emit device-consumable data."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Microsoft supplies the filter-pipeline infrastructure:"
    },
    {
      "kind": "list",
      "items": [
        "Filter Pipeline Manager (FPM) — loads and initializes filters, manages data flow between them, and unloads them when the job finishes. It reads the filter pipeline configuration (FPC) file.",
        "Inter-Filter Communicator (IFC) — manages the transfer of data between adjacent filters and buffers intermediate results until the next filter is ready. The FPM manages the IFCs.",
        "Property bag — carries configuration and data to filters."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Every XPS filter must implement the IPrintPipelineFilter interface. During IPrintPipelineFilter::InitializeFilter, a filter caches the IPrintPipelineManagerControl pointer, reads the IPrintPipelinePropertyBag, and calls IInterFilterCommunicator::RequestReader and RequestWriter to set up its input and output. Unidrv- or PScript5-based XPSDrv filters can reach the core driver's configuration through IPrintCoreHelper, and filters can read PrintTicket data through the Win32 PrintTicket and PrintCapabilities APIs."
    },
    {
      "kind": "paragraph",
      "text": "The filter pipeline configuration file is an XML file. The recommended naming is vv<PDL>-pipelineconfig.xml, and every such file must end with -pipelineconfig.xml. It declares which filters load and in what order. It can specify an interleaving order for the serialized XPS output — ResourcesFirst, best for drivers and direct-consumption printers, or MarkupFirst, best for archiving and online viewing — and, in Windows 8 and later, can request archive-optimized XPS output with an Archive element."
    },
    {
      "kind": "paragraph",
      "text": "Two consumption models are defined. Under direct consumption the device consumes the XPS spool file itself and the host driver is only a configuration module plus a null pipeline. Under scalable consumption some or all processing happens on the host, with the host/device split chosen by the vendor."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "An application produces XPS content, the spooler stores it as an XPS spool file that is identical to the XPS Document format, and, when the target queue uses an XPSDrv driver, the spooler hands that spool file to the driver's filter pipeline. The FPM instantiates the filters named in the FPC file, wires them together through IFCs, and streams the XPS data through them. The first filter reads XPS through the pipeline's stream interfaces and processes it, each filter passes its output to the next through the IFC, and the final filter writes to the driver's defined output port. Rendering occurs inside a rendering filter, operating on the visuals represented in the XPS spool format. This is fundamentally different from GDI drivers, which render by calling back into GDI."
    },
    {
      "kind": "paragraph",
      "text": "Because the spool file is already the final document representation, XPSDrv filters operate directly on the data and avoid the data and color-space conversions that GDI/EMF drivers require. Spool files are typically smaller because of font subsetting, shared-resource identification (for example, a logo used on every page is stored once), native support for transparency and gradient primitives that avoids rasterization, and the ZIP compression built into the format. Files that are heavily vector-based or that rely on device fonts can be larger."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "Windows defines two primary print paths and two conversion paths."
    },
    {
      "kind": "list",
      "items": [
        "GDI (Win32) print path — a Win32 GDI application calls GDI, which spools drawing instructions (typically EMF) and, together with the printer driver, renders a printable image for the spooler.",
        "XPS print path — originates in a Windows Presentation Foundation (WPF) application or through the XPS Print API, producing an XPS spool file."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Routing at the spooler covers four combinations:"
    },
    {
      "kind": "list",
      "items": [
        "XPS application to XPSDrv printer — the spooler passes the XPS spool file straight through to the XPSDrv filter pipeline for rendering and output, with no conversion.",
        "XPS application to GDI (v3) printer — the XPS spool file is converted to EMF by the XPS-to-GDI Conversion (XGC) module, then sent through the normal GDI driver.",
        "Win32 GDI application to XPSDrv printer — the GDI job is converted to an XPS spool file by the Microsoft XPS Document Converter (MXDC), the GDI-to-XPS conversion path, then fed to the filter pipeline.",
        "Win32 GDI application to GDI printer — the unchanged legacy GDI path."
      ]
    },
    {
      "kind": "paragraph",
      "text": "This matrix lets both Win32 and WPF applications print to both GDI-based and XPS-based drivers. When an XPSDrv driver is the target, the XPS Print API also delivers document events to the driver as the spooler processes the job."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "paragraph",
      "text": "The Windows print spooler natively supports both the XPS and GDI print paths. For XPS it spools the XPS Document format directly, removing the need to generate an intermediate EMF file. On Windows XP and Windows Server 2003, an XPS-based print processor hosts XPSDrv and bridges to the existing spooler."
    },
    {
      "kind": "paragraph",
      "text": "Several application and runtime surfaces target the path. WPF writes XPS to queues natively through System.Windows.Xps.XpsDocumentWriter and System.Printing.PrintQueue. Win32 applications use the XPS Print API (xpsprint.dll, with StartXpsPrintJob and StartXpsPrintJob1) or the newer Print Document Package API (IPrintDocumentPackageTarget, declared in DocumentTarget.h). The native XPS Document API (IXpsOMObjectFactory, IXpsOMPackageWriter), introduced in Windows 7, builds and reads the XPS object model."
    },
    {
      "kind": "paragraph",
      "text": "For print-to-file, the Microsoft XPS Document Writer (MXDW) is an in-box driver that lets any application save output as an XPS file, or, since Windows 8, an OpenXPS file. On modern Windows it is an optional feature, enabled through Settings, System, Optional Features, More Windows features. Its default output format is controlled by the MXDWUseLegacyOutputFormatMSXPS group policy; on current Windows releases the default output is OpenXPS (.oxps), and the policy switches the default to the legacy .xps format."
    },
    {
      "kind": "paragraph",
      "text": "The Print Schema, PrintTicket, and PrintCapabilities carry job and device settings across applications, the spooler, and the driver. For new printer development on Windows 10 and 11, Microsoft now recommends the modern print platform: the IPP inbox class driver plus Print Support Apps (PSA)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to standards"
    },
    {
      "kind": "paragraph",
      "text": "The XML Paper Specification (XPS) is an XML-based fixed-document format that describes page layout and per-page visual appearance along with rendering rules. Microsoft's original format is referred to as MSXPS, or Microsoft XML Paper Specification 1.0."
    },
    {
      "kind": "paragraph",
      "text": "OpenXPS is the standardized Open XML Paper Specification, published by Ecma International as ECMA-388 (1st edition, June 2009). Windows 8 added full OpenXPS support alongside MSXPS. The XPS Print API and the print filter pipeline convert between MSXPS and OpenXPS as needed. v4 drivers default to MSXPS unless the driver manifest's XpsFormat directive opts into OpenXPS, or both, with the order expressing preference."
    },
    {
      "kind": "paragraph",
      "text": "An XPS or OpenXPS file is an Open Packaging Conventions (OPC) package, which is ZIP-based. The isXPS.exe conformance tool validates a file against the XPS and OPC specifications."
    },
    {
      "kind": "paragraph",
      "text": "The markup describing XPS content is compatible with WPF's XAML — the XAML tags are representations of existing WPF rendering classes — so XPS content can render in WPF without conversion. File extensions are .xps for MSXPS and .oxps for OpenXPS. Microsoft documents both MIME types as directive values on the v4 driver manifest: application/vnd.ms-xpsdocument for MSXPS and application/oxps for OpenXPS."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to technologies"
    },
    {
      "kind": "paragraph",
      "text": "XPS coexists with the legacy GDI path. EMF records GDI calls that must be re-interpreted by GDI, whereas XPS records the actual visual output and needs no re-interpretation on XPSDrv drivers. The conversion modules MXDC and XGC bridge the two directions."
    },
    {
      "kind": "paragraph",
      "text": "WPF applications natively target the XPS print path; XpsDocumentWriter adds XPS documents, with print tickets, to a PrintQueue. Before .NET 4.5, .NET serialized its own MSXPS and submitted it directly to the spooler, predating the XPS Print API, a behavior the pipeline still accommodates for compatibility."
    },
    {
      "kind": "paragraph",
      "text": "Microsoft describes the XPS print path as able to replace document-presentation formats such as RTF and PDF, spool formats such as WMF and EMF, and page description languages such as PCL and PostScript within the print flow. The point is end-to-end format consistency within Windows printing, not that XPS is a general-purpose interchange competitor."
    },
    {
      "kind": "paragraph",
      "text": "The v4 print driver model reuses the same filter-pipeline design and shares XPSDrv's rendering architecture, adding capabilities such as OpenXPS format selection. Two WDK tools are relevant: XpsConverter.exe converts between MSXPS and OpenXPS, and isXPS.exe checks conformance."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "XPSDrv was designed for vendor extensibility. Independent hardware vendors implement device-specific behavior as modular pipeline filters and express device capabilities through the Print Schema and the configuration module."
    },
    {
      "kind": "paragraph",
      "text": "Microsoft's guidance is to keep filters self-contained and reusable — for example, using separate modular GPD or PPD files per filter referenced by a parent GPD or PPD for Unidrv or PScript5 configuration modules — and to map driver settings to public Print Schema keywords so that applications can adopt features uniformly. Vendors choose the host/device processing split through the direct-consumption and scalable-consumption models, and a device can advertise support for MSXPS, OpenXPS, or both through its driver manifest. Microsoft documents the format and architecture neutrally and does not tie them to any single manufacturer."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "XPS remains present in current Windows. The XPS and OpenXPS formats, the XPS Document API, the Microsoft XPS Document Writer (as an optional feature), and XPSDrv and v4 rendering all continue to ship. Microsoft has, however, repositioned the ecosystem."
    },
    {
      "kind": "list",
      "items": [
        "The modern print platform (IPP inbox class driver plus Print Support Apps) is now the recommended path for new printer development, and the associated driver documentation carries a banner to that effect.",
        "The XPS Print API functions StartXpsPrintJob and StartXpsPrintJob1 and structures such as XPS_JOB_STATUS are marked deprecated, with the Print Document Package API (IPrintDocumentPackageTarget) as the replacement.",
        "The XPS Viewer moved from a default in-box app to an optional component (a Feature on Demand) starting with Windows 10 version 1803."
      ]
    },
    {
      "kind": "paragraph",
      "text": "XPS and OpenXPS still matter for archival fixed-document output, print-to-file workflows, and existing XPSDrv and v4 driver deployments, but they did not displace PDF as the dominant fixed-document interchange format."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "XPS replaced GDI printing. It did not. The spooler supports both paths, and Microsoft provides bidirectional conversion — MXDC for GDI to XPS and XGC for XPS to GDI — so both Win32 and WPF applications can reach both GDI and XPS drivers.",
        "XPS and OpenXPS are the same file. They are closely related but distinct. MSXPS (.xps) is Microsoft's original format; OpenXPS (.oxps) is the Ecma standard ECMA-388. Windows converts between them, and sending an OpenXPS file directly to the spooler is unsupported because it is treated as MSXPS.",
        "XPS is just Microsoft's PDF. XPS is a fixed-document format and OPC/ZIP package with XAML-compatible markup, and within Windows it also serves as the print spool format and a page description language — a different role than PDF's interchange focus.",
        "The device always renders XPS. Only under direct consumption. Under scalable consumption the host filter pipeline does some or all rendering, and against a v3 GDI driver the XPS is converted to EMF first.",
        "XPS is dead or removed. It is legacy and deprecated in parts (the XPS Print API and the default XPS Viewer install), but the formats, MXDW, and XPSDrv/v4 rendering still ship in current Windows.",
        "An XPSDrv driver is a single rendering DLL like the old model. It is a configuration module plus a modular filter pipeline managed by the FPM and IFCs, not a monolithic graphics DLL."
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
          "period": "circa 2006",
          "text": "Microsoft introduces the XML Paper Specification (XPS 1.0) and the XPS print path and XPSDrv model as the printing foundation for Windows Vista (Vista released to manufacturing November 2006, general availability January 2007). The exact XPS 1.0 specification publication date is not firmly pinned in the sources reviewed."
        },
        {
          "period": "2006–2007 era",
          "text": "XPS printing is made available on Windows XP and Windows Server 2003 through the Microsoft WinFX Runtime Component 3.0, providing a consistent filter-pipeline model and an XPS-based print processor."
        },
        {
          "period": "2009",
          "text": "The native XPS Document API is introduced with Windows 7, and is also available on Windows Vista SP2 and Windows Server 2008 SP2 through the Platform Update."
        },
        {
          "period": "June 2009",
          "text": "OpenXPS is standardized by Ecma International as ECMA-388, 1st edition."
        },
        {
          "period": "2012",
          "text": "Windows 8 and Windows Server 2012 add full OpenXPS support side-by-side with MSXPS through the v4 printer driver model; MXDW is updated to output MSXPS or OpenXPS; archive-optimized XPS output is added."
        },
        {
          "period": "2018",
          "text": "The XPS Viewer becomes an optional component (a Feature on Demand) starting with Windows 10 version 1803, rather than a default install."
        },
        {
          "period": "Windows 10/11 era",
          "text": "The XPS Print API functions and structures are deprecated in favor of the Print Document Package API, and the modern print platform (IPP class driver plus Print Support Apps) is designated the preferred model."
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
      "slug": "xps"
    },
    {
      "section": "guides",
      "slug": "windows-printing"
    },
    {
      "section": "guides",
      "slug": "windows-gdi-printing"
    },
    {
      "section": "guides",
      "slug": "print-rendering-pipeline"
    },
    {
      "section": "tools",
      "slug": "pdf-a"
    },
    {
      "section": "tools",
      "slug": "iso-32000"
    }
  ],
  "faqs": [
    {
      "q": "What is the Windows XPS print pipeline?",
      "a": "It is a Windows print subsystem, introduced in Windows Vista, that carries a document in the XML Paper Specification (XPS) format from the application to the printer driver or device without an intermediate spool conversion. In this path XPS functions at once as a document format, the spool file format, and a page description language."
    },
    {
      "q": "How does an XPSDrv driver differ from the old Windows driver model?",
      "a": "Pre-Vista drivers supplied a printer-interface DLL and a monolithic printer-graphics DLL on the EMF-based GDI path. An XPSDrv driver instead has a configuration module plus a modular filter pipeline, managed by the Filter Pipeline Manager and Inter-Filter Communicators, with each filter implementing IPrintPipelineFilter."
    },
    {
      "q": "Did XPS replace GDI printing in Windows?",
      "a": "No. The Windows print spooler supports both the XPS and GDI print paths and bridges them with conversion modules: MXDC converts GDI jobs to XPS, and the XPS-to-GDI Conversion (XGC) module converts XPS to EMF. Both Win32 and WPF applications can reach both GDI and XPS drivers."
    },
    {
      "q": "What is the difference between XPS and OpenXPS?",
      "a": "MSXPS (.xps) is Microsoft's original XML Paper Specification format. OpenXPS (.oxps) is the Ecma-standardized Open XML Paper Specification, ECMA-388 (1st edition, June 2009), which Windows 8 added alongside MSXPS. Both are OPC (ZIP-based) packages, and Windows converts between them."
    },
    {
      "q": "Is the XPS print pipeline still supported?",
      "a": "The XPS and OpenXPS formats, the Microsoft XPS Document Writer, and XPSDrv/v4 rendering still ship in current Windows. However, Microsoft treats it as legacy: the XPS Print API is deprecated in favor of the Print Document Package API, the XPS Viewer became optional in Windows 10 version 1803, and the modern print platform (IPP class driver plus Print Support Apps) is the recommended model for new drivers."
    }
  ],
  "sources": [
    {
      "title": "XPSDrv Printer Drivers",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/xpsdrv-printer-drivers",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "XPSDrv Render Module",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/xpsdrv-render-module",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Implementing XPS Filters",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/implementing-xps-filters",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Extensible Architecture",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/extensible-architecture",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "XPSDrv Configuration Module",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/xpsdrv-configuration-module",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Windows Print Path Overview",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/windows-print-path-overview",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Filter Pipeline Configuration File",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/filter-pipeline-configuration-file",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "V4 Printer Driver Rendering Architecture",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/v4-driver-rendering-architecture",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "V4 Printer Driver Manifest",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/v4-driver-manifest",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Improvements in XPSDrv",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/improvements-in-xpsdrv",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Driver Support for OpenXPS",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/driver-support-for-openxps",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "App Support for OpenXPS Printing",
      "url": "https://learn.microsoft.com/windows/win32/printdocs/app-support-for-openxps-printing",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "XPS Support in Earlier Versions of Windows",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/xps-support-in-earlier-versions-of-windows",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "XPS Print API Functions",
      "url": "https://learn.microsoft.com/windows/win32/printdocs/xpsprint-functions",
      "publisher": "Microsoft Learn"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "windows xps print pipeline",
    "xps print path",
    "xpsdrv",
    "xml paper specification",
    "openxps",
    "ecma-388",
    "filter pipeline manager",
    "inter-filter communicator",
    "iprintpipelinefilter",
    "mxdc",
    "xps-to-gdi conversion",
    "microsoft xps document writer"
  ],
  "cluster": "windows-printing"
};

export default entry;
