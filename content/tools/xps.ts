import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "xps",
  "title": "XPS (XML Paper Specification)",
  "description": "Microsoft's XML/ZIP-based fixed-layout document format, print spool format, and page description language, standardized as OpenXPS (ECMA-388).",
  "summary": "XPS (XML Paper Specification) is a fixed-layout, XML-based electronic document format and page description language developed by Microsoft. Per Microsoft's documentation, it simultaneously serves three roles: an electronic document format, a print spool file format, and a page description language (PDL) for printers. An XPS file is a ZIP-based package conforming to the Open Packaging Conventions (OPC), holding XAML-derived markup that describes fixed page layout along with embedded fonts, images, and color profiles. The format exists as Microsoft's original XPS (.xps) and the standardized OpenXPS (.oxps), adopted by Ecma International as ECMA-388 in June 2009. Introduced with Windows Vista and the .NET Framework 3.0 / WPF, XPS aimed to provide one consistent representation across application, spooler, and printer to reduce lossy conversions and improve print fidelity. It remained largely Windows-centric and was displaced by PDF as the dominant cross-platform fixed-layout format; Microsoft removed the built-in XPS Viewer from default Windows installs starting with Windows 10 version 1803 and now positions the IPP class driver and Print Support Apps as its recommended modern print platform.",
  "purpose": "Microsoft's XML/ZIP fixed-layout format for documents, print spooling, and page description.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Microsoft introduced XPS as part of the Windows Vista, .NET Framework 3.0, and Windows Presentation Foundation (WPF) wave. Microsoft documentation describes XPS as the foundation for the new Windows print platform and as the spool file format for the XPS print path introduced in Windows Vista. In Windows Vista the XPS Document format and the associated Open Packaging Conventions (OPC) were initially available only to managed-code developers through the .NET Framework; native (unmanaged) Win32 APIs arrived later."
    },
    {
      "kind": "paragraph",
      "text": "The native XPS Document API (the XPS Object Model) was introduced in Windows 7 and back-ported to Windows Vista SP2 and Windows Server 2008 SP2 through the Platform Update. In parallel, an open-standardization effort proceeded through Ecma International: Technical Committee TC46 was established in June 2007 to develop a standard based on the Open XML Paper Specification, and in June 2009 Ecma approved OpenXPS as ECMA-388, 1st edition."
    },
    {
      "kind": "paragraph",
      "text": "With Windows 8 and Windows Server 2012, Microsoft added full support for the standardized OpenXPS (.oxps) format alongside continued support for the original Microsoft XPS format, delivered through the v4 print driver model. Microsoft later wound down the built-in viewer: per Microsoft's official removed-features documentation, starting with Windows 10 version 1803 the XPS Viewer is no longer included by default in clean installations and must be added through Apps & Features / Features on Demand."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Traditional Windows printing through the GDI/Win32 print path converted a document through several intermediate representations between application and printer — for example, application content to GDI/EMF to a printer-specific PDL — with opportunities for fidelity loss at each conversion."
    },
    {
      "kind": "paragraph",
      "text": "Microsoft's stated goal for XPS was to use one consistent representation as the document format, the spool format, and the PDL, so that when XPS is used end to end there is no need for format conversion between the application and the printer. Microsoft frames the benefit as improved print predictability, reliability, and fidelity (true WYSIWYG). As an electronic document format, XPS also provides a self-contained, portable, final-form file for viewing, distribution, and archiving — a role comparable to PDF."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "XPS combines a container model with declarative page markup."
    },
    {
      "kind": "list",
      "items": [
        "Container: An XPS/OpenXPS file is a ZIP-based package following the Open Packaging Conventions (OPC), the same ZIP + XML packaging model shared with Office Open XML (.docx and related formats). Inside the package, individual data items are \"parts,\" and their dependencies are expressed with relationships.",
        "Markup: Page content is described in XML markup that is a representation of XAML (Extensible Application Markup Language). Because the tags correspond to existing WPF rendering classes, XPS content can be rendered natively by WPF without conversion.",
        "Document model: Content is organized hierarchically — a fixed-document sequence contains one or more fixed documents, each an ordered sequence of fixed pages, with document-level and page-level resources.",
        "Resources: Fonts (including OpenType and font subsets), raster images, vector graphics, color profiles, and metadata are embedded in the package so the document is self-contained.",
        "Integrity: Because it is built on OPC, XPS supports X.509 digital signatures through the packaging APIs; signatures can cover selected parts or the entire package, allowing detection of post-signing tampering.",
        "Color and resolution: Microsoft describes XPS as a color-managed, vector-based, device- and resolution-independent format."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "XPS spans the whole pipeline rather than occupying a single stage. As a document format it is what an application authors or exports; as a spool file format it is what the Windows spooler stores and hands to the driver; as a PDL it is what can be sent to an XPS-capable printer."
    },
    {
      "kind": "paragraph",
      "text": "Microsoft's Windows Print Path Overview describes two primary print paths:"
    },
    {
      "kind": "list",
      "items": [
        "GDI print path (Win32 path) — originates in a Win32/GDI application.",
        "XPS print path — originates in a WPF application or via the XPS Print API."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Two conversion bridges connect them: GDI-to-XPS, via the Microsoft XPS Document Converter (MXDC), and XPS-to-GDI (XGC), so documents can move between the two worlds when needed."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "For printers, XPS is intended to be the spool format and the page description language, processed by an XPSDrv printer driver, which extends the earlier v3 GDI driver architecture. In an XPSDrv driver, a render module contains filters that consume the XPS spool file and produce output for the device."
    },
    {
      "kind": "paragraph",
      "text": "These filters run in a print filter pipeline managed by the Filter Pipeline Manager, with an Inter-Filter Communicator coordinating them; a pipeline configuration file defines the filter order. Fixed pages flow from the XPS spooler into the pipeline, each filter transforms the data, and the result is emitted for the printer. A printer that natively understands XPS can consume the spool file directly; otherwise a filter in the driver rasterizes or converts it to the device's native language. Microsoft notes that its current recommended modern print platform is the IPP inbox class driver with Print Support Apps, positioning XPSDrv as the earlier (v3/v4) model."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "XPS is a Windows-native technology."
    },
    {
      "kind": "list",
      "items": [
        "Introduced with Windows Vista and the .NET Framework 3.0 / WPF, where it is the spool file format for the XPS print path.",
        "The native XPS Document API (XPS Object Model) was added in Windows 7, and back-ported to Windows Vista SP2 / Windows Server 2008 SP2 via the Platform Update.",
        "OpenXPS (.oxps) support was added in Windows 8 / Windows Server 2012 via the v4 print driver, alongside continued Microsoft XPS support.",
        "Creation of XPS files without application support is provided by the Microsoft XPS Document Writer (MXDW), a print-to-file driver documented as a current optional feature in Windows.",
        "The standalone XPS Viewer app was removed from default installations starting in Windows 10 version 1803 and is now an optional add-on."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Support outside Windows is limited; XPS never achieved the broad cross-platform reader ecosystem that PDF has."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "list",
      "items": [
        "vs. PDF: XPS and PDF occupy the same conceptual niche — a self-contained, fixed-layout, final-form document with embedded fonts and graphics for viewing, printing, and archiving, and both can act as page description languages. The most consequential difference is adoption: PDF (later standardized as ISO 32000) became the dominant cross-platform fixed-layout format, while XPS remained largely Windows-centric.",
        "vs. PostScript: PostScript is a programmatic (Turing-complete) page description language; XPS is a declarative XML/XAML markup format packaged in ZIP/OPC rather than an interpreted program. Both can serve as the language a printer consumes, but their underlying models differ substantially.",
        "vs. drivers: In the XPS print path the spool format is XPS itself, and the XPSDrv driver's filters convert XPS to the target device language when the printer is not natively XPS-capable — in contrast to the legacy GDI path, where the driver renders from GDI/EMF."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "XPS and OpenXPS persist mainly as legacy and interoperability formats on Windows."
    },
    {
      "kind": "list",
      "items": [
        "The Microsoft XPS Document Writer (MXDW) remains available as an optional feature for producing .xps and .oxps files, and was updated to output either Microsoft XPS or OpenXPS.",
        "OpenXPS is supported in Windows 8 and later via the v4 driver and the XPS Document API; the OpenXPS MIME type is application/oxps.",
        "Microsoft ships XpsConverter.exe in the Windows Driver Kit to convert between Microsoft XPS (MSXPS) and OpenXPS.",
        "The XPS Viewer is now an optional install rather than a default component."
      ]
    },
    {
      "kind": "paragraph",
      "text": "In practice, PDF is the prevailing fixed-layout format, and Microsoft's current printing direction emphasizes the IPP class driver and Print Support Apps."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "End-to-end consistency: One representation can serve as document format, spool format, and PDL, reducing lossy conversions and improving print fidelity and predictability (per Microsoft).",
        "Self-contained and portable: Fonts, images, color profiles, and metadata are embedded in a single ZIP/OPC package.",
        "Open, standards-based building blocks: Uses XML, Unicode, ZIP, OPC, and markup-compatibility mechanisms; OpenXPS is an Ecma International standard (ECMA-388).",
        "Native WPF rendering: XAML-based markup renders directly in WPF without conversion.",
        "Integrity: X.509 digital signatures over selected parts or the whole package via OPC.",
        "Device and resolution independence with color management."
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
        "Windows-centric adoption: Broad, first-class support outside Windows is limited; the cross-platform reader and tooling ecosystem is far smaller than PDF's.",
        "Displaced by PDF: PDF became the de facto fixed-layout standard, limiting XPS's traction.",
        "Two variants: Microsoft XPS (.xps) and standardized OpenXPS (.oxps) are distinct, and conversion between them requires a tool (XpsConverter.exe). Secondary sources describe OpenXPS as enforcing stricter OPC conformance and dropping platform-specific extensions; this internal-difference characterization is not stated in a primary Microsoft or Ecma line. Native .oxps support is not present on Windows versions older than Windows 8.",
        "Reduced OS integration over time: The XPS Viewer was removed from default Windows installs starting with Windows 10 version 1803, and XPSDrv is now the older print model relative to the IPP class driver and Print Support Apps."
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
        "ECMA-388 — Open XML Paper Specification (OpenXPS), the standardized form of XPS.",
        "Open Packaging Conventions (OPC) — the ZIP-based packaging model XPS is built on; also standardized within Office Open XML (ECMA-376 / ISO/IEC 29500).",
        "XAML — the XML application markup language whose vocabulary XPS markup mirrors.",
        "WPF / .NET Framework — the rendering and API stack that natively consumes XPS.",
        "PDF (ISO 32000) — the competing and parallel fixed-layout document format and PDL.",
        "PostScript — an earlier page description language occupying an adjacent role.",
        "IPP / Print Support Apps — Microsoft's current recommended modern print platform, succeeding the XPSDrv-era approach."
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
          "period": "2006 era",
          "text": "Microsoft introduces XPS with Windows Vista and the .NET Framework 3.0 / WPF; XPS becomes the spool file format for the Windows XPS print path. (Exact XPS 1.0 specification publication date not asserted here.)"
        },
        {
          "period": "June 2007",
          "text": "Ecma International establishes Technical Committee TC46 to develop an open standard based on OpenXPS."
        },
        {
          "period": "2009 (Windows 7 era)",
          "text": "The native XPS Document API (XPS Object Model) and native OPC APIs become available in Windows 7, with a Vista SP2 / Server 2008 SP2 back-port via the Platform Update."
        },
        {
          "period": "June 2009",
          "text": "Ecma International approves OpenXPS as ECMA-388, 1st edition (TC46). A specific approval date of June 16, 2009 in Budapest is reported by secondary sources but not confirmed here from primary Ecma minutes."
        },
        {
          "period": "2012 (Windows 8 / Windows Server 2012)",
          "text": "Full OpenXPS (.oxps) support is added via the v4 print driver, alongside continued Microsoft XPS support."
        },
        {
          "period": "2018 (Windows 10 version 1803)",
          "text": "The XPS Viewer is removed from default installations and becomes an optional add-on (per Microsoft's official removed-features list)."
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
      "slug": "pdf-a"
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
      "section": "tools",
      "slug": "what-is-pdf"
    },
    {
      "section": "guides",
      "slug": "what-is-postscript-printing"
    },
    {
      "section": "glossary",
      "slug": "print-spooler"
    }
  ],
  "faqs": [
    {
      "q": "What is XPS (XML Paper Specification)?",
      "a": "XPS is a Microsoft fixed-layout, XML-based electronic document format that also serves as a Windows print spool file format and a page description language. An XPS file is a ZIP-based package (following the Open Packaging Conventions) containing XAML-derived markup with embedded fonts, images, and color profiles that describe the exact appearance of each page."
    },
    {
      "q": "What is the difference between XPS (.xps) and OpenXPS (.oxps)?",
      "a": "XPS (.xps) is Microsoft's original format, introduced with Windows Vista. OpenXPS (.oxps) is the standardized variant adopted by Ecma International as ECMA-388 in June 2009 and supported in Windows 8 and later via the v4 print driver. They are distinct formats; Microsoft ships XpsConverter.exe in the Windows Driver Kit to convert between them. Native .oxps support is not present on Windows versions older than Windows 8."
    },
    {
      "q": "Is XPS the same as PDF?",
      "a": "They occupy the same niche — a self-contained, fixed-layout, final-form document with embedded fonts and graphics — and both can act as page description languages. The key difference is adoption: PDF (later ISO 32000) became the dominant cross-platform format, while XPS remained largely Windows-centric. XPS uses ZIP/OPC packaging with XAML-based markup, whereas PostScript, by contrast, is a programmatic, interpreted language."
    },
    {
      "q": "Is XPS still supported in modern Windows?",
      "a": "Yes, but as a legacy and interoperability format. The Microsoft XPS Document Writer remains a documented optional feature for creating .xps and .oxps files, and OpenXPS is supported via the v4 driver. However, the standalone XPS Viewer was removed from default installations starting with Windows 10 version 1803 and is now an optional add-on, and Microsoft's recommended modern print platform is the IPP class driver with Print Support Apps."
    },
    {
      "q": "What is an XPSDrv driver?",
      "a": "XPSDrv is Microsoft's printer driver model that extends the earlier v3 GDI driver architecture and uses XPS as both the spool and document file format. It processes the XPS spool file through a print filter pipeline of filters; a printer that natively understands XPS can consume the file directly, while other devices rely on a filter to rasterize or convert it to the printer's native language."
    }
  ],
  "sources": [
    {
      "title": "ECMA-388 — Open XML Paper Specification (OpenXPS), 1st edition, June 2009",
      "url": "https://ecma-international.org/publications-and-standards/standards/ecma-388/",
      "publisher": "Ecma International"
    },
    {
      "title": "Ecma Technical Committee TC46 (established June 2007; scope)",
      "url": "https://ecma-international.org/technical-committees/tc46/",
      "publisher": "Ecma International"
    },
    {
      "title": "Features and functionality removed in Windows client (XPS Viewer, 1803)",
      "url": "https://learn.microsoft.com/windows/whats-new/removed-features",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "XPSDrv Printer Drivers",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/xpsdrv-printer-drivers",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Windows Print Path Overview (GDI/XPS paths; MXDC and XGC)",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/windows-print-path-overview",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Documents (XPS/OpenXPS; XPS Document API in Windows 7; XpsConverter.exe)",
      "url": "https://learn.microsoft.com/windows/win32/printdocs/documents",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "App Support for OpenXPS Printing (application/oxps; v4 driver)",
      "url": "https://learn.microsoft.com/windows/win32/printdocs/app-support-for-openxps-printing",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Driver Support for OpenXPS (Windows 8 v4 driver; MXDW dual output)",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/driver-support-for-openxps",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Microsoft XPS Document Writer (MXDW)",
      "url": "https://learn.microsoft.com/windows/win32/printdocs/microsoft-xps-document-writer",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Microsoft XPS Document Converter (MXDC)",
      "url": "https://learn.microsoft.com/windows/win32/printdocs/microsoft-xps-document-converter--mxdc-",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "XpsConverter command reference",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/devtest/xpsconverter",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Documents and Document Peripherals (XPS in Vista; native APIs in Windows 7; OPC; X.509 signatures)",
      "url": "https://learn.microsoft.com/windows/win32/win7devguide/documents-and-document-peripherals",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "XPSDrv Render Module",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/xpsdrv-render-module",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "XPS Support in Earlier Versions of Windows (IPP/Print Support Apps positioning)",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/xps-support-in-earlier-versions-of-windows",
      "publisher": "Microsoft Learn"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "xps",
    "xml paper specification",
    "openxps",
    "ecma-388",
    "oxps",
    "open packaging conventions",
    "xpsdrv",
    "microsoft xps document writer",
    "xps spool format",
    "page description language",
    "fixed-layout document format",
    "xaml"
  ],
  "cluster": "page-description-languages"
};

export default entry;
