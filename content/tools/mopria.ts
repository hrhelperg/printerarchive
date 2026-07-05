import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "mopria",
  "title": "Mopria",
  "description": "Mopria is a vendor-neutral standard and certification program for driverless mobile and desktop printing and scanning, built on IPP.",
  "summary": "Mopria is a cross-platform, vendor-neutral standard and certification program for mobile and desktop printing and scanning, maintained by the non-profit Mopria Alliance. Rather than a new wire protocol, it is a profile and conformance-testing layer built on the Internet Printing Protocol (IPP) developed by the IEEE-ISTO Printer Working Group (PWG), sharing the same driverless model as PWG's IPP Everywhere and Apple's AirPrint. Its aim is to let any conforming application, device, or operating system print to and scan from any certified printer, multifunction printer, or scanner of any brand without installing vendor-specific drivers. Founded in September 2013 by Canon, HP, Samsung, and Xerox, the Alliance publishes the Mopria Print Service and Mopria Scan apps for Android and runs the certification program behind the Mopria logo carried by thousands of printer models.",
  "purpose": "A vendor-neutral standard and certification program for driverless mobile and desktop printing and scanning.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "The Mopria Alliance was formed in September 2013 by four founding companies: Canon, Hewlett-Packard (now HP Inc.), Samsung, and Xerox. Canon's own founding announcement, dated September 24, 2013, described the goal as driving simple mobile printing across vendors. The Alliance is organized as a non-profit membership corporation."
    },
    {
      "kind": "paragraph",
      "text": "By February 2014, membership had expanded to roughly 16 companies, adding print vendors such as Brother, Epson, Konica Minolta, Lexmark, Pantum, and Ricoh, along with ecosystem members including Adobe and Monotype; the Alliance stated these members represented a large majority of the worldwide printer business."
    },
    {
      "kind": "paragraph",
      "text": "The Mopria Print Service app for Android was released to the Google Play Store in October 2014. Through a collaboration with Google, Mopria's technology was contributed to the Android ecosystem and became the basis of Android's built-in Default Print Service starting with Android 8.0 \"Oreo\" (2017)."
    },
    {
      "kind": "paragraph",
      "text": "Mopria Scan launched in December 2018, extending the universal-standard approach from printing to scanning. The Alliance and the PWG maintain a formal liaison relationship; a public statement accompanying the June 2020 renewal noted the two organizations had been working together since 2017 to advance IPP-based standards for simplified, driverless printing, including cloud and infrastructure scenarios."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Before standardized mobile printing, printing from a phone, tablet, or even a PC typically required a device- and OS-specific driver or a vendor's dedicated app. Early Android had no built-in printing at all until Android 4.4 \"KitKat\" (2013) introduced the Android print framework, and even then each manufacturer shipped its own print-service plug-in. This produced a fragmented experience: users had to know their printer brand, find the right plug-in or driver, and hope it supported their device and OS version."
    },
    {
      "kind": "paragraph",
      "text": "Mopria's goal was to remove that friction by defining one interoperable baseline, grounded in IPP, so that a single client implementation could discover and print to, or scan from, certified hardware of any brand on the same network, with no per-vendor drivers."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Mopria layers three concerns on top of standard network printing:"
    },
    {
      "kind": "list",
      "items": [
        "Discovery — A client finds printers automatically on the local network using mDNS / DNS-SD (multicast DNS service discovery) over Wi-Fi (IEEE 802.11) or Ethernet, rather than requiring manual IP configuration.",
        "Capability negotiation — Using IPP operations, the client queries the printer for its attributes (supported media sizes, color, duplex, resolution, supported document formats, and so on) so the interface can present valid options.",
        "Job submission — The client sends the print job over IPP in a document format the printer is guaranteed to understand, and can monitor job status through IPP."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because both sides implement the same IPP-based profile, no downloaded driver is needed. Mopria certification is the conformance testing that verifies a device actually implements this baseline correctly and interoperably. Scanning follows an analogous model using standardized network-scan operations."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "Mopria sits at the client-to-device transport and negotiation layer. Above it is the application generating content and the operating system's print dialog and print subsystem; below it is the printer firmware and the raster or marking engine."
    },
    {
      "kind": "paragraph",
      "text": "Mopria does not define the page-layout or rendering step performed by applications. It standardizes how the rendered, print-ready job and its options travel from the client to the output device, and how the device is discovered and queried. In practice it is the interoperable \"last mile\" between the OS print stack and networked hardware."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "Certified printers, multifunction printers (MFPs), and scanners implement the IPP-based Mopria profile in firmware and carry the Mopria certification logo. The Alliance runs the certification and testing program."
    },
    {
      "kind": "paragraph",
      "text": "The Alliance reports large certified and installed-base figures: it states that certified models number in the thousands across roughly two dozen brands (a April 2026 Alliance announcement reported surpassing 10,000 certified product models), corresponding to a large installed base it cites in the tens of millions of units. These are Mopria Alliance self-reported figures and should be read as such rather than as independently verified counts."
    },
    {
      "kind": "paragraph",
      "text": "Because Mopria, AirPrint, and IPP Everywhere all rest on IPP, a single modern printer that implements the IPP baseline can typically satisfy multiple of these certification programs at once."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "list",
      "items": [
        "Android — Android gained a native print framework in 4.4 \"KitKat\" (2013), which used pluggable print services. Mopria shipped the Mopria Print Service plug-in for that framework, and through collaboration with Google its technology became the basis of the built-in Default Print Service starting with Android 8.0 \"Oreo.\"",
        "Windows — Microsoft integrated Mopria/IPP driverless support into Windows beginning with Windows 10 version 1809, and broadened it in later releases (Windows 10 21H2 and Windows 11) to network and USB certified printers. Windows 11 version 24H2 introduced Windows Protected Print Mode, which relies on the built-in Microsoft IPP class driver instead of third-party printer drivers.",
        "iOS/macOS — Apple platforms use AirPrint, a parallel IPP-based program rather than Mopria itself, but the shared IPP foundation means the same certified printers generally work across both.",
        "Linux/Unix/ChromeOS — Systems using CUPS support IPP-based driverless printing; robust driverless (IPP Everywhere) support is generally associated with modern CUPS (the 2.x series), interoperating with the same class of hardware."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "paragraph",
      "text": "Mopria's central premise is driverless operation: it removes the need for a traditional per-model printer driver on the client. Instead, the client sends jobs in standardized, widely supported document and page formats that conforming printers must accept."
    },
    {
      "kind": "paragraph",
      "text": "In the driverless printing ecosystem these formats are commonly PDF, PCLm, and PWG Raster (JPEG also appears in some IPP and Windows-side contexts). The printer's firmware is responsible for interpreting these formats. This contrasts with the older PostScript/PCL driver model, in which a host driver produced a device-specific page-description-language stream."
    },
    {
      "kind": "paragraph",
      "text": "Mopria does not replace PostScript or PDF as page-description formats; it standardizes which formats a printer must accept and how the job is delivered, so a generic client can print reliably without a vendor driver."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "Mopria is now a largely invisible part of everyday printing on Android and Windows. On Android it underpins the built-in print pathway through the Default Print Service; on Windows it is part of the modern driverless printing stack Microsoft has been steering toward, including Windows Protected Print Mode."
    },
    {
      "kind": "paragraph",
      "text": "Its certification logo is a common signal on consumer and office printers that they will work with mobile and modern desktop clients without extra software. The Alliance and the PWG continue joint work on extending the IPP baseline toward cloud and infrastructure (enterprise or server-mediated) printing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "No vendor drivers required — one interoperable baseline across brands.",
        "Automatic discovery via mDNS/DNS-SD, with minimal user setup.",
        "Broad cross-vendor and cross-OS reach — Android, Windows, and, via the shared IPP base, interoperability with the wider driverless ecosystem.",
        "Both print and scan covered by standardized behavior.",
        "Standards-aligned — built on open PWG IPP work rather than a proprietary protocol.",
        "Conformance-tested — certification aims to reduce compatibility guesswork for users and IT."
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
        "Network dependency — the core model targets Wi-Fi and Ethernet-connected devices; it is not a solution for purely local or legacy interfaces on its own. USB support has been added on some platforms, but the standard is network-centric.",
        "Certification, not ubiquity — benefits depend on the printer being Mopria-certified, or at least IPP-conformant; very old or non-conforming hardware is excluded.",
        "Feature ceiling — driverless baselines expose a common, well-supported feature set; some vendor-specific advanced finishing or proprietary features may still require the manufacturer's own app or driver.",
        "Overlap and confusion — Mopria, AirPrint, and IPP Everywhere coexist as separate logos over the same IPP core, which can be confusing even though they interoperate.",
        "Not an application rendering standard — it does not govern how documents are laid out or rendered before submission."
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
        "Internet Printing Protocol (IPP) — the underlying protocol maintained by the PWG; the foundation Mopria builds on.",
        "IPP Everywhere — the PWG's driverless printing specification and self-certification program (published as PWG Candidate Standard in 2013, with the self-certification manual and tools following in 2016); the standards-body counterpart to Mopria's approach.",
        "AirPrint — Apple's IPP-based driverless printing program, a parallel to Mopria.",
        "PWG Raster — the raster page format used in the driverless printing ecosystem.",
        "mDNS / DNS-SD — the network service-discovery mechanism used to find printers.",
        "CUPS — the printing system on macOS, Linux, and Unix that implements IPP-based driverless printing."
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
          "period": "September 2013",
          "text": "Mopria Alliance founded by Canon, HP, Samsung, and Xerox."
        },
        {
          "period": "2013",
          "text": "Android 4.4 \"KitKat\" introduces the Android print framework with pluggable print services; the PWG publishes IPP Everywhere as a Candidate Standard."
        },
        {
          "period": "February 2014",
          "text": "Alliance membership expands to roughly 16 companies."
        },
        {
          "period": "October 2014",
          "text": "Mopria Print Service app released to Google Play."
        },
        {
          "period": "2016",
          "text": "PWG publishes the IPP Everywhere self-certification manual and tool suite (PWG 5100.20-2016)."
        },
        {
          "period": "August 2017",
          "text": "Mopria technology integrated into Android 8.0 \"Oreo\" as the basis of the built-in Default Print Service, via collaboration with Google."
        },
        {
          "period": "2018",
          "text": "Windows 10 (from version 1809) begins integrating Mopria/IPP driverless support."
        },
        {
          "period": "December 2018",
          "text": "Mopria Scan launched, extending the standards to scanning."
        },
        {
          "period": "June 2020",
          "text": "PWG and Mopria Alliance renew their liaison agreement to advance driverless printing standards, including cloud and infrastructure printing; the statement notes collaboration since 2017."
        },
        {
          "period": "2021–2022",
          "text": "Windows 10 21H2 and Windows 11 broaden Mopria support to network and USB certified printers."
        },
        {
          "period": "2024",
          "text": "Windows 11 version 24H2 introduces Windows Protected Print Mode, based on the built-in Microsoft IPP class driver."
        },
        {
          "period": "2026",
          "text": "Alliance reports surpassing 10,000 certified product models (self-reported)."
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
      "section": "guides",
      "slug": "how-wireless-printing-works"
    },
    {
      "section": "mobile-printing",
      "slug": "what-is-airprint"
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
      "q": "What is Mopria?",
      "a": "Mopria is a cross-platform, vendor-neutral standard and certification program for mobile and desktop printing and scanning, maintained by the non-profit Mopria Alliance. It lets conforming apps and devices print to and scan from any certified printer or scanner of any brand without installing vendor-specific drivers."
    },
    {
      "q": "Is Mopria the same as AirPrint or IPP Everywhere?",
      "a": "No, but they are closely related. Mopria, Apple's AirPrint, and the PWG's IPP Everywhere are separate programs that all build on the same Internet Printing Protocol (IPP) and share the driverless model, so a single IPP-conformant printer can often work with more than one of them."
    },
    {
      "q": "Does Mopria require a printer driver?",
      "a": "No. Mopria is designed to be driverless. The client discovers a printer over the network (using mDNS/DNS-SD), negotiates capabilities via IPP, and sends jobs in standardized formats such as PDF, PCLm, and PWG Raster that the printer's firmware interprets."
    },
    {
      "q": "Which operating systems support Mopria?",
      "a": "Android integrates Mopria technology as the basis of its built-in Default Print Service since Android 8.0 Oreo, and Windows has integrated Mopria/IPP driverless support since Windows 10 version 1809. Apple platforms use the parallel AirPrint program, and CUPS-based systems (Linux, Unix, macOS) support the same IPP-based driverless printing."
    },
    {
      "q": "Who founded the Mopria Alliance?",
      "a": "The Mopria Alliance was founded in September 2013 by Canon, Hewlett-Packard (now HP Inc.), Samsung, and Xerox, and later grew to include many other print, OS, and silicon vendors."
    }
  ],
  "sources": [
    {
      "title": "Canon, HP, Samsung and Xerox Launch Alliance to Drive Simple Mobile Printing (founding press release)",
      "url": "https://global.canon/en/news/2013/sep24e.html",
      "publisher": "Canon"
    },
    {
      "title": "Mopria Alliance",
      "url": "https://mopria.org/",
      "publisher": "Mopria Alliance"
    },
    {
      "title": "Mopria Alliance & Standards FAQ",
      "url": "https://mopria.org/alliance-faqs",
      "publisher": "Mopria Alliance"
    },
    {
      "title": "Mopria Android 8 Oreo FAQ",
      "url": "https://mopria.org/android-8-oreo-faq",
      "publisher": "Mopria Alliance"
    },
    {
      "title": "Mopria Scan launch announcement",
      "url": "https://www.businesswire.com/news/home/20181204005012/en/",
      "publisher": "Business Wire / Mopria Alliance"
    },
    {
      "title": "IEEE-ISTO PWG and Mopria Alliance Renew Liaison Agreement",
      "url": "https://www.businesswire.com/news/home/20200624005051/en/",
      "publisher": "Business Wire / IEEE-ISTO Printer Working Group"
    },
    {
      "title": "IPP Everywhere program page",
      "url": "https://www.pwg.org/ipp/everywhere.html",
      "publisher": "IEEE-ISTO Printer Working Group"
    },
    {
      "title": "PWG Candidate Standard 5100.20-2016: IPP Everywhere Self-Certification Manual",
      "url": "https://ftp.pwg.org/pub/pwg/candidates/cs-ippeveselfcert10-20160219-5100.20.pdf",
      "publisher": "IEEE-ISTO Printer Working Group"
    },
    {
      "title": "Driverless Printing Standards and their PDLs (PDF, PCLm, PWG Raster)",
      "url": "https://openprinting.github.io/driverless/01-standards-and-their-pdls/",
      "publisher": "OpenPrinting"
    },
    {
      "title": "What's new in printing in Windows 10, version 1809",
      "url": "https://techcommunity.microsoft.com/t5/windows-it-pro-blog/what-s-new-in-printing-in-windows-10-version-1809/ba-p/267182",
      "publisher": "Microsoft"
    },
    {
      "title": "End of Servicing Plan for Third-Party Printer Drivers on Windows (Protected Print / IPP class driver)",
      "url": "https://learn.microsoft.com/en-us/windows-hardware/drivers/print/end-of-servicing-plan-for-third-party-printer-drivers-on-windows",
      "publisher": "Microsoft"
    },
    {
      "title": "Android 4.4 KitKat (print framework)",
      "url": "https://developer.android.com/about/versions/kitkat",
      "publisher": "Google / Android"
    },
    {
      "title": "Internet Printing Protocol",
      "url": "https://en.wikipedia.org/wiki/Internet_Printing_Protocol",
      "publisher": "Wikipedia"
    },
    {
      "title": "Mopria Alliance",
      "url": "https://en.wikipedia.org/wiki/Mopria_Alliance",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "mopria",
    "mopria alliance",
    "mopria print service",
    "mopria scan",
    "driverless printing",
    "ipp",
    "internet printing protocol",
    "ipp everywhere",
    "mobile printing",
    "mdns dns-sd",
    "pwg raster",
    "pclm"
  ],
  "cluster": "printing-protocols"
};

export default entry;
