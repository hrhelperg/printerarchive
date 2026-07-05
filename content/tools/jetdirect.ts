import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "jetdirect",
  "title": "HP JetDirect",
  "description": "HP JetDirect is Hewlett-Packard's print-server hardware and the raw TCP/IP (port 9100) method for attaching a printer directly to a network.",
  "summary": "HP JetDirect is Hewlett-Packard's family of network print-server hardware — external boxes, internal MIO/EIO cards, and Embedded Jetdirect firmware — together with the raw TCP/IP printing method it popularized. In raw mode a client streams already-rendered page-description-language data (PCL, PostScript, or other PDL) directly to TCP port 9100, which the printer processes unaltered. JetDirect gave printers their own network identity across the mixed protocol environments of the 1990s, and its simple port-9100 \"socket\" printing became a de facto industry convention still supported by Windows, CUPS, and most network printers today, even as the industry shifts toward IPP for encryption and richer job handling.",
  "purpose": "HP's print-server hardware and raw TCP/IP method for attaching a printer directly to a network.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "HP JetDirect originated in the HP LaserJet IIISi generation, the model that introduced local-area-network connectivity through HP's MIO (Modular Input/Output) expansion slot. Sources disagree on the exact timing: HP's own history materials and the HP Computer Museum date the LaserJet IIISi printer to around Fall 1990, while secondary references commonly date the JetDirect MIO card itself to early 1991 (frequently cited as March 1991). The precise month rests largely on secondary sources rather than a primary HP press archive, so the safest framing is that the JetDirect card appeared in the IIISi generation — printer circa Fall 1990, card commonly dated to early 1991."
    },
    {
      "kind": "paragraph",
      "text": "JetDirect is sometimes described in HP-history and marketing-style writing as an early mass-market Ethernet network printer. That superlative traces mainly to secondary sources and should be treated cautiously; there is no primary confirmation of an unqualified \"first\" claim."
    },
    {
      "kind": "paragraph",
      "text": "In the early MIO era a printer generally needed a separate card per network protocol (for example TCP/IP, IPX/SPX, AppleTalk, and DLC/LLC). Multi-protocol MIO cards are reported to have followed around the mid-1990s, though specific dates are only loosely sourced. External JetDirect print-server boxes, connecting to a printer's parallel port, were introduced in the early-to-mid 1990s and extended network printing to devices without an MIO slot."
    },
    {
      "kind": "paragraph",
      "text": "Around 1997, HP introduced EIO (Enhanced Input/Output) — reported as a 32-bit, 33 MHz, 3.3 V PCI-signaling implementation debuting with the LaserJet 4000 series — as the successor slot standard to MIO. Later internal JetDirect cards (the 600n/610n/615n/620n/625n/630n/635n families and wireless variants) are EIO cards. Over time HP moved much of this capability into Embedded Jetdirect, integrating network functionality directly into the printer or multifunction device."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Before network print servers, a shared printer was typically cabled to a single PC, to a dedicated print-server computer, or connected through limited sharing schemes. That approach created bottlenecks, single points of failure, and cabling-distance limits."
    },
    {
      "kind": "paragraph",
      "text": "JetDirect let a printer become an independent node on the LAN with its own network address, reachable by many users and multiple operating systems at once, without tying up a host computer. Because 1990s offices ran several competing network protocols simultaneously, JetDirect also gave a single hardware line a way to speak those protocols from one device."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "A JetDirect device gives the printer a network identity and a network protocol stack. It obtains an IP address via BootP, DHCP, manual configuration, or link-local Auto IP, then listens for incoming print jobs and management traffic."
    },
    {
      "kind": "paragraph",
      "text": "For raw or \"socket\" printing, the device opens a listening TCP socket on port 9100. A client establishes a TCP connection and streams already-rendered print data — PCL, PostScript, or another page-description language — straight through, and the print server passes the bytes to the printer engine essentially unaltered. The connection is bidirectional, so the printer can return status back over the same channel."
    },
    {
      "kind": "paragraph",
      "text": "Historically, many JetDirect devices also exposed a Telnet configuration interface, supported alternative print protocols such as LPD/LPR and IPP, and offered management via SNMP and an embedded web server."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "JetDirect sits at the transport and delivery stage of printing. It operates after an application and printer driver on the client have rendered the document into a page-description language, and before the printer's interpreter rasterizes it."
    },
    {
      "kind": "paragraph",
      "text": "It is, in effect, the wire and the doorway: it carries the finished PDL stream across the network into the device. In raw mode it deliberately does the least possible work, adding no job framing of its own — which is the source of both its speed and its lack of built-in security."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "JetDirect is fundamentally printer-attached networking. Internal cards (MIO, later EIO) plug into HP printer expansion bays; external boxes connect via parallel (and later USB) ports to printers from HP and third parties; Embedded Jetdirect is built into the device's main board."
    },
    {
      "kind": "paragraph",
      "text": "Because port-9100 raw printing is so simple, it became a de facto industry convention. Many non-HP network printers implement a port-9100 listener and are described as \"JetDirect-compatible.\" That phrasing is descriptive of the convention, not an HP endorsement — JetDirect the product line is HP's."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "JetDirect was explicitly multi-protocol to serve mixed environments: TCP/IP (Unix and Windows), IPX/SPX (Novell NetWare), AppleTalk (Mac), and DLC/LLC (IBM and Microsoft LAN environments)."
    },
    {
      "kind": "paragraph",
      "text": "In modern practice, TCP/IP raw printing on port 9100 is the common denominator:"
    },
    {
      "kind": "list",
      "items": [
        "Windows implements it as the \"Standard TCP/IP Port\" in RAW mode (port 9100).",
        "CUPS (macOS, Linux, and Unix) provides an \"AppSocket / HP JetDirect\" backend using device URIs of the form socket://<ip-address>[:9100].",
        "Linux and Unix systems can also reach JetDirect devices via LPD/LPR or IPP when the device supports them."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "paragraph",
      "text": "JetDirect is PDL-agnostic transport — it does not render or interpret documents. The client-side driver produces the byte stream (PCL, PostScript, and on capable modern devices PDF or other PDLs), and JetDirect simply delivers it; the printer's own interpreter performs the rasterization."
    },
    {
      "kind": "paragraph",
      "text": "The IANA service names registered for port 9100 — hp-pdl-datastr (\"PDL Data Streaming Port\") and pdl-datastream (\"Printer PDL Data Stream\") — reflect exactly this: it is a page-description-language data stream, not a specific PDL. JetDirect is therefore orthogonal to the choice of PostScript versus PCL versus PDF; it carries whichever the driver and printer agree on."
    },
    {
      "kind": "paragraph",
      "text": "Note that raw port-9100 printing bypasses the richer job-attribute negotiation that a protocol such as IPP provides."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "Raw port-9100 printing remains very widely deployed because it is simple, fast, and reliable, and is supported out of the box by Windows, CUPS, and virtually all network printers."
    },
    {
      "kind": "paragraph",
      "text": "At the same time, the industry has been shifting toward IPP / IPP Everywhere / driverless printing, which adds encryption, richer job attributes, and status reporting. Security guidance — including the CUPS documentation — recommends IPP over raw AppSocket/JetDirect where possible, because port 9100 offers no authentication or encryption. The CUPS documentation states plainly that while the AppSocket protocol is simple and fast, \"it also offers no security and is often an attack vector with printers,\" and suggests considering IPP with encryption instead."
    },
    {
      "kind": "paragraph",
      "text": "Many discrete JetDirect card and box products have been discontinued as networking moved into Embedded Jetdirect and as EIO-slot printers aged out, though HP still offers Jetdirect LAN accessories for certain devices."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Very simple and low-overhead; among the fastest network print paths.",
        "The bidirectional TCP channel can return printer status and error feedback to the client.",
        "PDL-agnostic — carries any print data stream unchanged.",
        "Broad, near-universal support across operating systems and printer brands.",
        "Historically bridged several coexisting network protocols in one product line.",
        "Does not require spooling the entire job to disk before transmission (unlike classic LPD)."
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
        "No built-in security: raw port-9100 offers no authentication and no encryption, and is widely noted as a printer attack vector.",
        "No standardized job accounting, queuing semantics, or rich attribute negotiation in raw mode — functionality that IPP provides.",
        "Raw streaming assumes the client sends correctly formed PDL; there is minimal protocol-level error handling.",
        "Configuration and management interfaces of older devices (Telnet, SNMP, embedded web) have themselves been sources of vulnerabilities.",
        "Legacy protocol support (IPX/SPX, AppleTalk, DLC/LLC) and older MIO/EIO hardware are now largely obsolete."
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
        "Raw / AppSocket / port 9100 — the raw TCP printing method. CUPS refers to \"the AppSocket protocol (sometimes also called the JetDirect protocol).\" AppSocket is commonly attributed (in secondary sources) to Tektronix for its Phaser printers, a line later sold to Xerox; treat the attribution as reported rather than primary-verified.",
        "LPD/LPR (RFC 1179) — the older line-printer daemon protocol.",
        "IPP — Internet Printing Protocol (IETF/PWG; RFC 8010 covering encoding and transport and RFC 8011 covering model and semantics, plus IPP Everywhere) — the modern, secure, feature-rich successor.",
        "SNMP — used for printer management and monitoring.",
        "BootP / DHCP — IP address assignment methods used by JetDirect devices.",
        "MIO and EIO — HP's printer expansion-slot interfaces that host internal JetDirect cards."
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
          "period": "c. 1990",
          "text": "HP LaserJet IIISi ships; it is the generation that introduces LAN connectivity via the MIO expansion slot."
        },
        {
          "period": "Early 1991",
          "text": "The JetDirect MIO card is commonly dated to this period in secondary sources (frequently cited as March 1991); the exact month is not primary-confirmed."
        },
        {
          "period": "Early 1990s",
          "text": "Early MIO network cards typically require a separate card per protocol (TCP/IP, IPX/SPX, AppleTalk, DLC/LLC)."
        },
        {
          "period": "Early-to-mid 1990s",
          "text": "External JetDirect print-server boxes (parallel-port connection) are introduced; multi-protocol MIO cards are reported to follow around the mid-1990s."
        },
        {
          "period": "~1997",
          "text": "EIO is introduced as the successor slot standard to MIO, reported alongside the LaserJet 4000 series; later internal JetDirect cards are EIO cards."
        },
        {
          "period": "Late 1990s–2000s",
          "text": "EIO card families (600n through 635n and wireless variants) and Embedded Jetdirect broaden protocol and speed support."
        },
        {
          "period": "2000s–present",
          "text": "Industry shift toward IPP / IPP Everywhere / driverless printing; many standalone JetDirect card and box products are discontinued as functionality moves into Embedded Jetdirect."
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
      "section": "brands",
      "slug": "hewlett-packard"
    },
    {
      "section": "guides",
      "slug": "what-is-a-print-server"
    },
    {
      "section": "history",
      "slug": "print-servers-in-large-offices"
    },
    {
      "section": "tools",
      "slug": "lpd-lpr"
    },
    {
      "section": "history",
      "slug": "early-network-printing-systems"
    },
    {
      "section": "history",
      "slug": "office-printing-in-the-1990s"
    }
  ],
  "faqs": [
    {
      "q": "What is TCP port 9100 used for?",
      "a": "Port 9100 is the raw or \"socket\" printing port popularized by HP JetDirect. A client opens a TCP connection to the printer on port 9100 and streams already-rendered page-description-language data (PCL, PostScript, or other PDL) straight to the device, which processes it unaltered. IANA registers two service names for it: hp-pdl-datastr and pdl-datastream."
    },
    {
      "q": "Is JetDirect the same as raw or AppSocket printing?",
      "a": "They are closely related. JetDirect is HP's print-server product line, but its raw port-9100 method became a de facto convention. CUPS documents its backend as \"AppSocket / HP JetDirect,\" and AppSocket — commonly attributed in secondary sources to Tektronix for Phaser printers, later sold to Xerox — is a very similar implementation. Many non-HP printers implement a port-9100 listener and are called \"JetDirect-compatible.\""
    },
    {
      "q": "Is port-9100 JetDirect printing secure?",
      "a": "No. Raw port-9100 printing offers no authentication and no encryption, and is widely noted as a printer attack vector. The CUPS documentation recommends using the Internet Printing Protocol (IPP), which supports encryption and richer job handling, where possible. Older JetDirect management interfaces (Telnet, SNMP, embedded web) have also been sources of vulnerabilities."
    },
    {
      "q": "What are MIO and EIO in relation to JetDirect?",
      "a": "MIO (Modular Input/Output) and EIO (Enhanced Input/Output) are HP's printer expansion-slot standards that host internal JetDirect cards. MIO was introduced with the LaserJet IIISi generation; EIO followed around 1997 (reported with the LaserJet 4000 series) as its successor. Later JetDirect internal cards such as the 600n family are EIO cards."
    },
    {
      "q": "Does JetDirect work with PostScript, PCL, and PDF?",
      "a": "Yes — JetDirect is PDL-agnostic transport. It does not render or interpret documents; the client driver produces the byte stream (PCL, PostScript, and on capable modern devices PDF or other PDLs) and JetDirect delivers it unchanged, leaving rasterization to the printer's own interpreter."
    }
  ],
  "sources": [
    {
      "title": "IANA Service Name and Transport Protocol Port Number Registry (port 9100)",
      "url": "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml",
      "publisher": "IANA"
    },
    {
      "title": "CUPS Network Printing documentation (AppSocket / HP JetDirect backend, socket:// URI, security note)",
      "url": "https://www.cups.org/doc/network.html",
      "publisher": "OpenPrinting / CUPS"
    },
    {
      "title": "HP Jetdirect and Embedded Jetdirect Print Servers",
      "url": "https://support.hp.com/us-en/document/c00832492",
      "publisher": "HP, Inc."
    },
    {
      "title": "HP LaserJet — Printers that can use HP Jetdirect print servers",
      "url": "https://support.hp.com/us-en/document/c04763513",
      "publisher": "HP, Inc."
    },
    {
      "title": "HP Jetdirect LAN Accessory (product page)",
      "url": "https://www.hp.com/us-en/shop/pdp/hp-jetdirect-lan-accessory",
      "publisher": "HP, Inc."
    },
    {
      "title": "HP LaserJet — The Early History (Jim Hall, HP Memory Project)",
      "url": "https://www.hpmemoryproject.org/timeline/jim_hall/laserjet_page_00.htm",
      "publisher": "HP Memory Project"
    },
    {
      "title": "HP Computer Museum — LaserJet IIISi",
      "url": "https://www.hpmuseum.net/display_item.php?hw=350",
      "publisher": "HP Computer Museum"
    },
    {
      "title": "JetDirect",
      "url": "https://en.wikipedia.org/wiki/JetDirect",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "hp jetdirect",
    "jetdirect print server",
    "port 9100 printing",
    "raw tcp/ip printing",
    "appsocket protocol",
    "socket printing",
    "mio card",
    "eio card",
    "embedded jetdirect",
    "network printing",
    "pdl-datastream",
    "hp-pdl-datastr"
  ],
  "cluster": "printing-protocols"
};

export default entry;
