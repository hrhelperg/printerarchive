import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "bonjour-mdns-printing",
  "title": "Bonjour / mDNS Printer Discovery",
  "description": "How Bonjour, Multicast DNS (RFC 6762) and DNS-Based Service Discovery (RFC 6763) let devices find network printers automatically on the local link.",
  "summary": "Bonjour is Apple's implementation of zero-configuration networking, built on the IETF standards Multicast DNS (RFC 6762) and DNS-Based Service Discovery (RFC 6763). For printing, it is the discovery layer: printers advertise DNS-SD service records over mDNS on the local network, and clients browse for those records to build a list of available printers and learn what each one supports. It handles only discovery and addressing; a separate print protocol such as IPP carries the actual job. Both RFCs were published in February 2013, authored by Stuart Cheshire and Marc Krochmal of Apple, and the same discovery layer underpins AirPrint and the Printer Working Group's IPP Everywhere.",
  "purpose": "Zero-configuration discovery of network printers and their capabilities on the local link.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Bonjour is Apple's implementation of \"zero-configuration networking\" (Zeroconf), a set of techniques that let devices and services on the same local IP network find one another without manual setup, a managed DNS server, or a directory service. For printing specifically, Bonjour is the mechanism by which a computer or mobile device automatically discovers printers and the print services they offer on the local link."
    },
    {
      "kind": "paragraph",
      "text": "Bonjour is built on two IETF-standardized protocols, both published in February 2013:"
    },
    {
      "kind": "list",
      "items": [
        "Multicast DNS (mDNS) — RFC 6762 — DNS-style name resolution on the local link using multicast, with no unicast DNS server present.",
        "DNS-Based Service Discovery (DNS-SD) — RFC 6763 — a convention for using ordinary DNS record types (PTR, SRV, TXT) to enumerate and describe named service instances."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Printer discovery is one of the canonical use cases for this pairing: a printer advertises DNS-SD service records over mDNS on the local link, and clients browse for the relevant service types to build a list of available printers. Apple's AirPrint stack relies on Bonjour for this discovery step."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Apple introduced the technology in 2002 with Mac OS X 10.2 (\"Jaguar\") under the name Rendezvous. In August 2003, TIBCO Software — which had shipped a product called TIBCO Rendezvous since the mid-1990s — sued Apple for trademark infringement. After an out-of-court settlement, Apple announced the rename to Bonjour on April 12, 2005."
    },
    {
      "kind": "paragraph",
      "text": "The core daemon, mDNSResponder, was released by Apple as open source under the Apache License as a Darwin project, with builds targeting macOS, Windows, Linux, the BSDs, Solaris, VxWorks, and other platforms. (Historically, Apple first released it under the Apple Public Source License before relicensing components under Apache 2.0.) Bonjour for Windows was distributed to end users bundled with iTunes and as a standalone \"Bonjour Print Services for Windows\" installer."
    },
    {
      "kind": "paragraph",
      "text": "mDNS and DNS-SD were formalized as IETF Proposed Standards in February 2013 (RFC 6762 and RFC 6763), both authored by Stuart Cheshire and Marc Krochmal of Apple. The underlying ideas circulated as IETF Internet-Drafts for several years before the 2013 RFCs, so those dates reflect standardization rather than the invention of the concepts."
    },
    {
      "kind": "paragraph",
      "text": "Apple introduced AirPrint in fall 2010 (with iOS 4.2), an IPP-based mobile print stack that uses Bonjour for discovery."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Before Zeroconf-style discovery, connecting to a network printer typically meant knowing and typing an IP address or hostname, installing a vendor driver, and configuring a queue by hand — or relying on heavier infrastructure such as a DNS server, a directory service, or vendor-specific broadcast protocols. On a home or small-office network with no dedicated servers, this was error-prone and required user expertise."
    },
    {
      "kind": "paragraph",
      "text": "Bonjour's goal, stated in RFC 6762, is name resolution and service discovery \"with little or no administration or configuration.\" For printing, that means a user can open a print dialog and see nearby printers appear automatically, without knowing addresses or pre-installing per-model software."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Two layers cooperate."
    },
    {
      "kind": "paragraph",
      "text": "1. Multicast DNS (RFC 6762). Instead of sending DNS queries to a unicast server, a host sends DNS-format UDP messages to a link-local multicast group — 224.0.0.251 (IPv4) or FF02::FB (IPv6) — on UDP port 5353. Any device on the link that \"owns\" a matching name answers by multicast. Hosts claim link-local names in the reserved .local. domain (for example printer.local.). mDNS also defines conflict detection so two devices do not keep the same name."
    },
    {
      "kind": "paragraph",
      "text": "2. DNS-Based Service Discovery (RFC 6763). DNS-SD is a naming convention layered on ordinary DNS records, so it works over both unicast DNS and mDNS. A service instance is named <Instance>.<Service>.<Domain>:"
    },
    {
      "kind": "list",
      "items": [
        "Service type takes the form _servicename._proto, where _proto is _tcp or _udp (the application-protocol label is limited to 15 characters).",
        "PTR records enumerate instances of a service type (browsing).",
        "SRV records give the target hostname and port for a chosen instance.",
        "TXT records carry key/value metadata describing the instance's capabilities.",
        "A/AAAA records resolve the target hostname to an IP address."
      ]
    },
    {
      "kind": "paragraph",
      "text": "For printing, a client browses the printer-related service types, picks an instance, resolves its SRV, TXT, and address records, and then has everything needed to open a print connection."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "Bonjour/mDNS/DNS-SD is strictly the discovery and addressing stage. It answers \"what printers exist on this network, what do they support, and how do I reach them?\" It does not carry print data, describe page content, or render documents."
    },
    {
      "kind": "paragraph",
      "text": "Once a printer instance is resolved to a host, port, and capability set, an actual print protocol — most commonly IPP over HTTP/HTTPS — takes over to submit the job. Conceptually the flow is: discovery (Bonjour) → capability negotiation and job submission (IPP) → the printer's own rendering of the page-description data."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "Per Apple's Bonjour Printing Specification (version 1.2.1), a network printer advertises itself using DNS-SD service types including:"
    },
    {
      "kind": "list",
      "items": [
        "_ipp._tcp — Internet Printing Protocol.",
        "_printer._tcp — the LPR/LPD line-printer service.",
        "_pdl-datastream._tcp — a raw page-description-language data stream (conventionally the JetDirect/AppSocket-style raw port 9100; that port is a convention, not an IANA assignment tied to this service label)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The printer publishes SRV records (host and port), A/AAAA records (address), and TXT records carrying capability keys. Documented Bonjour printing TXT keys include, among others:"
    },
    {
      "kind": "list",
      "items": [
        "txtvers — TXT record format version",
        "qtotal — number of queues advertised",
        "rp — resource/queue path",
        "ty — human-readable make/model",
        "product — product identifier (in parentheses)",
        "pdl — comma-separated list of supported page-description languages / MIME types",
        "adminurl — administration web page",
        "note — human-readable location",
        "priority",
        "usb_MFG / usb_MDL — USB manufacturer/model strings, useful for driver matching",
        "URF — Apple raster capability key"
      ]
    },
    {
      "kind": "paragraph",
      "text": "The Printer Working Group's IPP Everywhere standard builds on the same discovery layer: IPP Everywhere printers advertise _ipp._tcp and use the subtype _print._sub._ipp._tcp so clients can specifically find driverless-capable printers."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "list",
      "items": [
        "macOS / iOS / iPadOS: Bonjour is built in; printer discovery in the system print dialog and AirPrint both use it.",
        "Windows: Apple's Bonjour service (mDNSResponder) can be installed — historically bundled with iTunes and offered as \"Bonjour Print Services for Windows\" — enabling Windows to discover Bonjour/AirPrint-style printers.",
        "Linux / Unix: The Avahi project provides an independent, compatible mDNS/DNS-SD stack; CUPS (the Common Unix Printing System) uses DNS-SD/Bonjour to discover printers. Apple's own mDNSResponder is also portable to Linux and the BSDs.",
        "Android: Provides Network Service Discovery (NSD) APIs built on mDNS/DNS-SD; third-party ports of Apple's mDNSResponder also exist."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because DNS-SD is protocol-standardized (RFC 6763) and mDNS interoperates by wire format (RFC 6762), these independent implementations can discover each other's printers."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "paragraph",
      "text": "Bonjour is orthogonal to page-description languages — it neither defines nor transports PDF, PostScript, PCL, or raster formats. What it does is advertise which formats a printer accepts, via the TXT pdl key (and, in the IPP world, via IPP attributes queried after discovery)."
    },
    {
      "kind": "paragraph",
      "text": "This advertising is central to driverless printing: instead of installing a vendor driver, the client discovers the printer (Bonjour/DNS-SD), queries its capabilities (IPP), and sends a document in a format the printer declares it supports. In Apple's AirPrint and the PWG's IPP Everywhere model, printers commit to accepting well-defined formats — notably PDF and PWG Raster / Apple Raster — so a generic client can print without any model-specific driver. Bonjour is the \"find it\" half of that story; IPP plus the agreed page formats are the \"send it\" half."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "list",
      "items": [
        "AirPrint (Apple's IPP-based print stack) uses Bonjour for discovery. It launched in 2010, initially with HP printers, and is now widespread across printer vendors.",
        "IPP Everywhere (PWG) uses the same DNS-SD discovery to deliver cross-platform, vendor-neutral driverless printing; CUPS-based systems use it for \"driverless\" queues.",
        "Most consumer and office network printers ship with mDNS/DNS-SD advertising enabled by default, so the \"printer just shows up\" experience on phones, tablets, Macs, Windows, and Linux all traces back to this discovery layer."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Zero configuration: printers appear automatically; no manual IP entry or driver hunt for the discovery step.",
        "No infrastructure required: works on a bare local link with no DNS server, DHCP option, or directory service.",
        "Standardized and interoperable: built on open IETF RFCs (6762/6763) and reuses ordinary DNS record semantics, enabling independent implementations (Apple mDNSResponder, Avahi, Android NSD) to interoperate.",
        "Capability-aware: TXT records let clients learn model, supported formats, and admin URLs before connecting — a foundation for driverless printing.",
        "Open-source core: mDNSResponder is available under the Apache License, aiding cross-platform adoption."
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
        "Link-local scope: mDNS is confined to the local network segment/multicast domain. It does not cross routed subnets or VLANs without help (mDNS reflectors/relays, DNS-SD via unicast DNS, or gateway features). This is a common cause of \"printer not found\" on segmented enterprise or guest networks.",
        "Multicast dependence: it relies on IP multicast working on the link; Wi-Fi client isolation, some switches, and firewalls that block UDP 5353 will break discovery.",
        "Security considerations: mDNS/DNS-SD is unauthenticated by default and trusts the local link, which has been the subject of security analyses (spoofing/poisoning of advertised services, and use of exposed mDNS as a reflection/amplification vector when reachable off-link).",
        "Naming constraints: DNS-SD service labels are limited to 15 characters, and TXT record metadata is meant to stay compact (per RFC 6763 guidance).",
        "Discovery only: Bonjour does nothing about actual print rendering or job security; those depend on the print protocol (IPP/HTTPS) layered above it."
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
        "RFC 6762 — Multicast DNS (mDNS).",
        "RFC 6763 — DNS-Based Service Discovery (DNS-SD).",
        "Zeroconf — the broader set of techniques, including link-local addressing plus mDNS and DNS-SD.",
        "IPP — Internet Printing Protocol (IETF; RFC 8010 for encoding and transport, RFC 8011 for the model and semantics, RFC 7472 for the IPP-over-HTTPS transport binding). The print protocol that typically follows Bonjour discovery.",
        "IPP Everywhere (PWG 5100.14) — vendor-neutral driverless printing that advertises via DNS-SD (_ipp._tcp, subtype _print._sub._ipp._tcp).",
        "AirPrint — Apple's IPP-based print stack using Bonjour for discovery.",
        "LPR/LPD (_printer._tcp) and raw/PDL datastream (_pdl-datastream._tcp) — legacy transports also advertised via Bonjour printing.",
        "Avahi — the independent Linux/Unix mDNS/DNS-SD implementation.",
        "SSDP/UPnP and WS-Discovery — alternative discovery mechanisms used elsewhere (for example, WSD printing on Windows); different protocols solving a related problem."
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
          "period": "2002",
          "text": "Apple ships the technology as Rendezvous in Mac OS X 10.2."
        },
        {
          "period": "2003 (August)",
          "text": "TIBCO files a trademark suit over the \"Rendezvous\" name."
        },
        {
          "period": "2005 (April 12)",
          "text": "Apple announces the rename to Bonjour."
        },
        {
          "period": "2010 (fall)",
          "text": "Apple introduces AirPrint (with iOS 4.2), using Bonjour for printer discovery; initial compatible models were from HP."
        },
        {
          "period": "2013 (February)",
          "text": "IETF publishes RFC 6762 (mDNS) and RFC 6763 (DNS-SD) as Proposed Standards, authored by S. Cheshire and M. Krochmal (Apple)."
        },
        {
          "period": "Ongoing",
          "text": "PWG IPP Everywhere and CUPS \"driverless\" printing standardize on DNS-SD discovery plus IPP; mDNS/DNS-SD becomes the default discovery layer across macOS, iOS, Windows (via Apple's installer), Linux (Avahi/CUPS), and Android (NSD)."
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
      "slug": "airprint"
    },
    {
      "section": "tools",
      "slug": "ipp"
    },
    {
      "section": "tools",
      "slug": "mopria"
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
    }
  ],
  "faqs": [
    {
      "q": "Is Bonjour the same as mDNS and DNS-SD?",
      "a": "Not exactly. Bonjour is Apple's implementation of zero-configuration networking. It is built on two open IETF standards: Multicast DNS (mDNS, RFC 6762) for local name resolution and DNS-Based Service Discovery (DNS-SD, RFC 6763) for enumerating and describing services such as printers. Other implementations, like Avahi on Linux and Android's Network Service Discovery, use the same underlying protocols."
    },
    {
      "q": "Does Bonjour actually send the print job to the printer?",
      "a": "No. Bonjour handles only discovery and addressing — finding which printers exist on the local network, what they support, and how to reach them. A separate print protocol, most commonly the Internet Printing Protocol (IPP) over HTTP/HTTPS, submits the actual job once a printer has been discovered."
    },
    {
      "q": "Why does a printer show up on one network but not another?",
      "a": "mDNS is link-local: it is confined to the local network segment and does not cross routed subnets or VLANs on its own. Segmented enterprise or guest networks, Wi-Fi client isolation, switches that suppress multicast, or firewalls blocking UDP port 5353 can all prevent discovery unless an mDNS reflector, relay, or unicast DNS-SD is configured."
    },
    {
      "q": "How does Bonjour enable driverless printing?",
      "a": "During discovery, a printer advertises the document formats it accepts through DNS-SD TXT records (the pdl key), and clients can query further capabilities via IPP. In the AirPrint and IPP Everywhere models, printers commit to accepting well-defined formats such as PDF and PWG/Apple Raster, so a generic client can print without installing any model-specific driver."
    }
  ],
  "sources": [
    {
      "title": "RFC 6762: Multicast DNS",
      "url": "https://www.rfc-editor.org/info/rfc6762",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "RFC 6762: Multicast DNS (full text)",
      "url": "https://datatracker.ietf.org/doc/html/rfc6762",
      "publisher": "IETF Datatracker"
    },
    {
      "title": "RFC 6763: DNS-Based Service Discovery",
      "url": "https://www.rfc-editor.org/info/rfc6763",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "RFC 8010: Internet Printing Protocol/1.1: Encoding and Transport",
      "url": "https://www.rfc-editor.org/rfc/rfc8010.html",
      "publisher": "IETF"
    },
    {
      "title": "RFC 8011: Internet Printing Protocol/1.1: Model and Semantics",
      "url": "https://www.rfc-editor.org/info/rfc8011/",
      "publisher": "IETF"
    },
    {
      "title": "RFC 7472: Internet Printing Protocol (IPP) over HTTPS Transport Binding",
      "url": "https://datatracker.ietf.org/doc/html/rfc7472",
      "publisher": "IETF"
    },
    {
      "title": "Bonjour Printing Specification, Version 1.2.1",
      "url": "https://developer.apple.com/bonjour/printing-specification/bonjourprinting-1.2.1.pdf",
      "publisher": "Apple Inc."
    },
    {
      "title": "IPP Everywhere",
      "url": "https://www.pwg.org/ipp/everywhere.html",
      "publisher": "Printer Working Group"
    },
    {
      "title": "Bonjour (software)",
      "url": "https://en.wikipedia.org/wiki/Bonjour_(software)",
      "publisher": "Wikipedia (secondary, history/dates)"
    },
    {
      "title": "AirPrint",
      "url": "https://en.wikipedia.org/wiki/AirPrint",
      "publisher": "Wikipedia (secondary, launch context)"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "bonjour",
    "mdns",
    "multicast dns",
    "dns-sd",
    "dns-based service discovery",
    "rfc 6762",
    "rfc 6763",
    "printer discovery",
    "zeroconf",
    "airprint",
    "ipp everywhere",
    "driverless printing"
  ],
  "cluster": "printing-protocols"
};

export default entry;
