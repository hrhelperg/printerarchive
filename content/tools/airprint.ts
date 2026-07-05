import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "airprint",
  "title": "AirPrint",
  "description": "AirPrint is Apple's driverless printing feature that submits print jobs over a local network using IPP and Bonjour, without printer-specific drivers.",
  "summary": "AirPrint is Apple's driverless printing feature built into iOS, iPadOS, and macOS. It lets applications submit print jobs to a compatible printer over a local network without installing a printer-specific driver. Technically it is an application of the IETF/PWG Internet Printing Protocol (IPP) combined with Bonjour, Apple's zero-configuration mDNS and DNS-SD service-discovery stack, for automatic printer discovery. Apple announced AirPrint on September 15, 2010 and shipped it to users on November 22, 2010 in the free iOS 4.2 update, with HP as the launch hardware partner. It was later extended to the Mac with OS X Lion in 2011. AirPrint replaces the traditional per-model driver with a self-describing protocol: a device discovers printers over Bonjour, queries their capabilities via IPP, and sends a supported format such as PDF, JPEG, or Apple Raster (URF). It is closely aligned architecturally with the Printer Working Group's IPP Everywhere.",
  "purpose": "Apple's driverless printing feature for sending print jobs to network printers without device-specific drivers.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Apple announced AirPrint on September 15, 2010, releasing a beta to developers and describing it as \"Apple's powerful new printing architecture that matches the simplicity of iOS.\" Apple's press release characterized the approach as having \"no set up, no configuration, no printer drivers and no software to download\" (attributed to Philip Schiller in the Apple press release)."
    },
    {
      "kind": "paragraph",
      "text": "AirPrint shipped to users on November 22, 2010 as part of the free iOS 4.2 update, covering iPad, iPhone 4, iPhone 3GS, and third-generation-and-later iPod touch. The November 22 availability date is confirmed by Apple's own newsroom post announcing that iOS 4.2 was available that day. Hewlett-Packard (HP) was the initial hardware partner; the announcement cited HP ePrint printers across the Photosmart, Officejet, Officejet Pro, and LaserJet Pro lines. A small set of HP models was compatible at launch."
    },
    {
      "kind": "paragraph",
      "text": "AirPrint was later extended to the Mac, arriving on the macOS side with OS X Lion, which was released in 2011. Apple and Hewlett-Packard are named as the developers, and the approach is described in US patent application publication US 2011/0194123 A1, \"Printer that supports driverless printing\" (as referenced by Wikipedia; this is a patent application publication, not a granted patent)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Before AirPrint, mobile devices, notably the iPad, which shipped in 2010, had no native way to print, and traditional desktop printing depended on installing vendor-specific drivers for each printer model. Mobile operating systems could not practically ship or manage a driver for every printer on the market."
    },
    {
      "kind": "paragraph",
      "text": "AirPrint solved this by standardizing on a self-describing protocol (IPP) so a phone or tablet can query a printer's capabilities at print time and send a format the printer understands. This eliminated driver installation, manual configuration, and per-model software."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Conceptually, AirPrint proceeds in a few steps:"
    },
    {
      "kind": "list",
      "items": [
        "Discovery: The device browses the local network using Bonjour (mDNS and DNS-SD) to find printers advertising the IPP print service (_ipp._tcp / _ipps._tcp).",
        "Capability query: Using IPP, the device asks the printer for its attributes, including supported media sizes, color modes, duplex, finishing options, and supported document and raster formats.",
        "Format selection and rendering: The device renders the job into a format the printer advertises support for and submits it as an IPP print job.",
        "Job handling: The printer processes the job; IPP also carries job and printer status back to the device. No driver is exchanged at any point; the protocol and the printer's advertised capabilities carry all the information needed."
      ]
    },
    {
      "kind": "paragraph",
      "text": "According to OpenPrinting, AirPrint uses IPP 2.0 for polling capability information and sending option settings as IPP attributes. This version detail is attributed to OpenPrinting rather than asserted from an Apple primary source."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "AirPrint occupies the transport-and-negotiation layer between the operating system's rendering and print subsystem and the printer's firmware. The application draws content via OS print APIs; the OS rasterizes or packages it into an accepted page-description or raster format; AirPrint (IPP over TCP/IP, discovered via Bonjour) negotiates capabilities and transmits the job; and the printer's onboard interpreter converts the received data to marks on paper."
    },
    {
      "kind": "paragraph",
      "text": "In effect, AirPrint replaces the classic \"driver\" layer with a network protocol plus in-printer interpreters."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "A printer supports AirPrint by implementing IPP, advertising itself over Bonjour, and being able to interpret the required job formats, in particular Apple Raster (URF). URF is AirPrint's mandatory raster fallback; a printer must advertise support for it to work with AirPrint. Support is built into printer firmware rather than added on the client, which is why, per Apple, \"AirPrint is built into most popular printer models.\""
    },
    {
      "kind": "paragraph",
      "text": "At launch a small set of HP models was compatible. By July 2020, roughly 6,000 models from about two dozen manufacturers were reported as AirPrint-compatible (Wikipedia). Printers lacking native AirPrint can be shared through an intermediary computer (Windows, Linux, or macOS) that exposes them via the AirPrint protocol."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "AirPrint is native to Apple's platforms: iOS, iPadOS, and macOS. On iOS and iPadOS it is exposed through UIKit print classes such as UIPrintInteractionController, UIPrintInfo, UIPrintPageRenderer, and UIPrintFormatter. On macOS it is exposed through AppKit classes such as NSPrinter, NSPrintInfo, NSPrintOperation, and NSPrintPanel (Apple Developer)."
    },
    {
      "kind": "paragraph",
      "text": "Because AirPrint is IPP-based, non-Apple systems interoperate with the same class of printers. Linux/CUPS and other stacks can print to AirPrint/IPP printers, and CUPS can also expose shared printers to AirPrint clients. This interoperability is a protocol-level consequence of the shared standards rather than a vendor claim."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "paragraph",
      "text": "AirPrint's defining trait is that it is driverless: no PostScript PPD or vendor binary driver is installed on the client. For content, AirPrint uses a small set of formats rather than PostScript: PDF, JPEG, and Apple's raster format Apple Raster (URF)."
    },
    {
      "kind": "paragraph",
      "text": "Per OpenPrinting, the acronym URF \"appears to have originally stood for Universal Raster Format\" but the format \"is now known as Apple Raster,\" so the expansion should be treated as reported and historical rather than certain. OpenPrinting also notes that Apple Raster \"is similar to CUPS and PWG Raster but with much simpler page headers.\" PDF serves as a common vector and document format and JPEG for images, while URF provides a guaranteed raster fallback that any AirPrint printer must support. PostScript is not part of the AirPrint requirement set."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "AirPrint is the standard mobile and desktop printing path across Apple's ecosystem and is widely implemented in consumer and enterprise printers. It is closely aligned architecturally with the Printer Working Group's IPP Everywhere, an open, cross-platform driverless-printing standard."
    },
    {
      "kind": "paragraph",
      "text": "Per OpenPrinting, aside from the raster page-description-language choice (Apple Raster for AirPrint versus PWG Raster for IPP Everywhere), \"the rest of AirPrint and IPP Everywhere is practically identical: Bonjour to advertise printers on the network, IPP 2.0 for polling capability info and send option settings as IPP attributes, and PDF and JPEG as further allowed PDLs.\""
    },
    {
      "kind": "paragraph",
      "text": "In managed environments, Apple provides an AirPrint MDM payload so administrators can pre-declare printers to devices (Apple Support)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "No driver installation or manual configuration; printers are discovered automatically.",
        "Built on open, self-describing protocols (IPP and Bonjour), enabling capability negotiation at print time.",
        "Broad hardware support across many vendors and models.",
        "Supports, per Apple, \"full-quality output, automatic media selection, and enterprise-class finishing options\" where the printer exposes them.",
        "Interoperable in practice with non-Apple stacks such as CUPS and Linux, because the underlying protocol is standardized."
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
        "Requires a printer that natively advertises AirPrint/URF support, or an intermediary computer to bridge a non-AirPrint printer.",
        "Generally operates over a local network (commonly Wi-Fi; Ethernet-connected Macs are also supported since the 2011 macOS introduction), so it is not inherently an internet or remote-printing protocol.",
        "The available feature set is bounded by what the printer advertises via IPP; capabilities the printer does not expose cannot be used.",
        "Apple Raster (URF) is an Apple-defined format; while similar to PWG Raster, it is distinct from the fully public PWG standard."
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
        "Internet Printing Protocol (IPP) — the underlying print protocol AirPrint applies.",
        "Bonjour — Apple's zero-configuration networking (mDNS and DNS-SD) used for printer discovery.",
        "IPP Everywhere (PWG) — open, cross-platform driverless-printing standard; near-identical architecture to AirPrint aside from the raster PDL.",
        "PWG Raster — the PWG's public raster format used by IPP Everywhere (analogous to Apple Raster/URF).",
        "CUPS — the printing system used on macOS and Linux that both consumes and can expose IPP/AirPrint printers.",
        "PDF and JPEG — allowed document and image formats in the AirPrint and IPP Everywhere format set."
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
          "period": "2010 (September 15)",
          "text": "Apple announces AirPrint and releases a beta to developers; HP named as launch printer partner."
        },
        {
          "period": "2010 (November 22)",
          "text": "AirPrint ships to users in the free iOS 4.2 update for iPad, iPhone 4, iPhone 3GS, and iPod touch (3rd generation and later)."
        },
        {
          "period": "2011",
          "text": "AirPrint introduced on the Mac with OS X Lion."
        },
        {
          "period": "July 2020",
          "text": "About 6,000 AirPrint-compatible printer models from roughly two dozen manufacturers reported."
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
      "slug": "bonjour-mdns-printing"
    },
    {
      "section": "mobile-printing",
      "slug": "what-is-airprint"
    },
    {
      "section": "guides",
      "slug": "how-wireless-printing-works"
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
      "q": "What is AirPrint?",
      "a": "AirPrint is Apple's driverless printing feature built into iOS, iPadOS, and macOS. It lets apps submit print jobs to a compatible printer over a local network without installing a printer-specific driver. Technically it is an application of the Internet Printing Protocol (IPP) combined with Bonjour for automatic printer discovery."
    },
    {
      "q": "When was AirPrint released?",
      "a": "Apple announced AirPrint on September 15, 2010 and shipped it to users on November 22, 2010 as part of the free iOS 4.2 update. It was later extended to the Mac with OS X Lion in 2011."
    },
    {
      "q": "How does AirPrint work without drivers?",
      "a": "A device discovers printers over Bonjour (mDNS and DNS-SD), queries their capabilities via IPP, then renders the job into a format the printer advertises support for, such as PDF, JPEG, or Apple Raster (URF), and submits it as an IPP job. No driver is ever exchanged."
    },
    {
      "q": "What is the difference between AirPrint and IPP Everywhere?",
      "a": "According to OpenPrinting, the main difference is the raster page-description language: AirPrint uses Apple Raster (URF) while IPP Everywhere uses PWG Raster. Otherwise the two are practically identical, both using Bonjour for discovery, IPP for capability negotiation, and PDF and JPEG as allowed formats."
    },
    {
      "q": "Can AirPrint printers work with non-Apple systems?",
      "a": "Yes. Because AirPrint is IPP-based, non-Apple systems interoperate with the same class of printers. Linux and CUPS stacks can print to AirPrint/IPP printers, and CUPS can also expose shared printers to AirPrint clients."
    }
  ],
  "sources": [
    {
      "title": "AirPrint",
      "url": "https://developer.apple.com/airprint/",
      "publisher": "Apple Developer"
    },
    {
      "title": "Apple's AirPrint Wireless Printing for iPad, iPhone & iPod touch Coming to Users in November",
      "url": "https://www.apple.com/newsroom/2010/09/15Apples-AirPrint-Wireless-Printing-for-iPad-iPhone-iPod-touch-Coming-to-Users-in-November/",
      "publisher": "Apple Newsroom"
    },
    {
      "title": "Apple's iOS 4.2 Available Today for iPad, iPhone & iPod touch",
      "url": "https://www.apple.com/newsroom/2010/11/22Apples-iOS-4-2-Available-Today-for-iPad-iPhone-iPod-touch/",
      "publisher": "Apple Newsroom"
    },
    {
      "title": "AirPrint device management payload settings for Apple devices",
      "url": "https://support.apple.com/guide/deployment/airprint-payload-settings-dep3b4cf515/web",
      "publisher": "Apple Support"
    },
    {
      "title": "IPP Everywhere",
      "url": "https://www.pwg.org/ipp/everywhere.html",
      "publisher": "Printer Working Group"
    },
    {
      "title": "Driverless Printing Standards and their PDLs",
      "url": "https://openprinting.github.io/driverless/",
      "publisher": "OpenPrinting"
    },
    {
      "title": "AirPrint",
      "url": "https://en.wikipedia.org/wiki/AirPrint",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "airprint",
    "apple airprint",
    "driverless printing",
    "ipp",
    "internet printing protocol",
    "bonjour",
    "ipp everywhere",
    "apple raster",
    "urf",
    "mobile printing",
    "ios printing",
    "macos printing"
  ],
  "cluster": "printing-protocols"
};

export default entry;
