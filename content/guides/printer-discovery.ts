import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "printer-discovery",
  "title": "Printer Discovery",
  "description": "How computers locate network printers: mDNS/DNS-SD (Bonjour), WS-Discovery, SNMP, SLP, and directory-based discovery explained in depth.",
  "summary": "Printer discovery is the set of network mechanisms by which a computer, phone, or print server locates reachable printers and learns their address, port, protocol, name, and capabilities without a user typing an IP address. Once an administrator-driven task, it is now dominated by zero-configuration approaches in which printers advertise themselves and clients passively browse. Several families coexist: mDNS/DNS-SD (Bonjour), the dominant zero-configuration layer under AirPrint, IPP Everywhere, and Mopria; WS-Discovery, standardized by OASIS and implemented in Windows as Web Services on Devices; SNMP with the Printer MIB for administrative polling; the older Service Location Protocol; and directory-based publishing into systems such as Active Directory. Since the mid-2000s the trajectory has been toward mDNS/DNS-SD paired with driverless IPP, letting any conforming client discover and print to any conforming printer with no vendor software.",
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
      "text": "Printer discovery is the set of network mechanisms by which a computer, phone, or print server locates printers reachable on a network and learns enough about each one — its address, port, protocol, name, and capabilities — to send a job without a human typing in an IP address. Historically this was a manual, administrator-driven task: a user needed the printer's IP address or share path and usually a matching driver. Modern discovery is dominated by zero-configuration approaches in which printers advertise themselves and clients passively browse for them."
    },
    {
      "kind": "paragraph",
      "text": "Several discovery families coexist, each tied to a different era and ecosystem:"
    },
    {
      "kind": "list",
      "items": [
        "mDNS/DNS-SD (Bonjour) — the dominant zero-configuration mechanism, defined in IETF RFC 6762 (Multicast DNS) and RFC 6763 (DNS-Based Service Discovery), and the discovery layer under AirPrint, PWG IPP Everywhere, and Mopria.",
        "WS-Discovery (WSD) — a SOAP/XML multicast protocol standardized by OASIS and implemented in Windows as Web Services on Devices (WSDAPI).",
        "SNMP + Printer MIB — an active-polling management protocol (RFC 3805 Printer MIB v2, with the Host Resources MIB) used by administrative tools to sweep IP ranges and identify and monitor printers.",
        "SLP (Service Location Protocol) — an earlier IETF service-discovery protocol (RFC 2608).",
        "Directory-based discovery — publishing printer objects into a network directory such as Active Directory so users can search by location or attribute."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The clear trajectory since the mid-2000s is toward mDNS/DNS-SD discovery paired with the driverless IPP stack."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Service discovery on IP networks grew out of the limitations of manual configuration and the decline of self-configuring legacy protocols. Apple's AppleTalk had included the Name Binding Protocol (NBP), which let devices such as printers be found by name without configuration; migrating from AppleTalk to TCP/IP lost that convenience. Stuart Cheshire proposed adapting NBP-style service discovery to IP, later joined Apple, and authored the IETF drafts that became Multicast DNS and DNS-Based Service Discovery. Apple shipped an implementation in Mac OS X 10.2 in 2002 under the name Rendezvous, renamed Bonjour from Mac OS X 10.4 (2005) after a trademark dispute (these Apple release details are drawn from secondary sources). The specifications were eventually published as standards-track RFCs 6762 and 6763 in February 2013."
    },
    {
      "kind": "paragraph",
      "text": "In parallel, the web-services world produced WS-Discovery, co-developed by Microsoft, Canon, Intel and others (the widely cited draft dates to April 2005, per secondary sources) and later standardized by OASIS as WS-Discovery 1.1 (approved July 1, 2009). Microsoft built this into Windows as the basis of Web Services on Devices (WSDAPI), giving Windows a Plug-and-Play-style network device discovery model."
    },
    {
      "kind": "paragraph",
      "text": "Before both, the IETF had defined the Service Location Protocol (SLP v1, RFC 2165, 1997; SLP v2, RFC 2608, 1999) as a general service-discovery framework. SNMP-based discovery via the Printer MIB (RFC 3805, Printer MIB v2, June 2004, obsoleting RFC 1759) served the management and monitoring use case rather than end-user setup."
    },
    {
      "kind": "paragraph",
      "text": "The zero-configuration model then converged with driverless printing: Apple introduced AirPrint (2010, per secondary sources), the Mopria Alliance formed to promote cross-vendor mobile printing, and the PWG published IPP Everywhere (PWG 5100.14, v1.1 dated May 15, 2020), all of which use DNS-SD/Bonjour as their discovery layer."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "Discovery mechanisms fall into two architectural patterns."
    },
    {
      "kind": "paragraph",
      "text": "Announce-and-browse (passive/push). The printer actively advertises its presence and metadata onto the network; clients listen. mDNS/DNS-SD and WS-Discovery both follow this model."
    },
    {
      "kind": "list",
      "items": [
        "In DNS-SD, the printer publishes a small set of DNS resource records — a PTR record enumerating instances of a service type, an SRV record giving the host and port, a TXT record carrying capability key/value pairs, and A/AAAA host records. Over a local link these records are served by Multicast DNS rather than a central server; over a managed network the identical record structure can live in ordinary unicast DNS (wide-area DNS-SD).",
        "In WS-Discovery, the printer is a Target Service with a stable logical identity (a UUID URI, independent of its IP address). It announces itself with Hello and Bye SOAP-over-UDP multicast messages and answers Probe (find by type/scope) and Resolve (find current transport address for a known identity) requests."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Query-and-poll (active/pull). The client or management server initiates. SNMP discovery sweeps IP addresses and polls each candidate for MIB objects; SLP clients (User Agents) send requests that Service Agents answer; directory-based discovery has the client query a central database (Active Directory) that administrators or print servers populate."
    },
    {
      "kind": "paragraph",
      "text": "Both DNS-SD and WS-Discovery include an optional scaling tier — a caching/aggregation intermediary that removes the need for constant multicast. DNS-SD achieves this with unicast DNS servers and a Discovery Proxy (RFC 8766, \"Discovery Proxy for Multicast DNS-Based Service Discovery\"); WS-Discovery defines a Discovery Proxy and a corresponding managed mode. SLP has the analogous Directory Agent that caches service registrations."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "mDNS/DNS-SD. A Bonjour-capable printer joins the multicast group and answers queries for service types under the .local domain. A service is named <Instance>.<Service>.<Domain>, e.g. Front Office Printer._ipp._tcp.local. Registered printing service types include:"
    },
    {
      "kind": "list",
      "items": [
        "_ipp._tcp — Internet Printing Protocol (default port 631)",
        "_ipps._tcp — IPP over TLS (IPPS)",
        "_printer._tcp — LPR/LPD (port 515; this is the IANA-registered service name for the LPD spooler)",
        "_pdl-datastream._tcp — raw/socket printing (port 9100)"
      ]
    },
    {
      "kind": "paragraph",
      "text": "A client browses by issuing a PTR query for, say, _ipp._tcp.local; each printer answers with its instance name; the client then fetches the SRV record (host + port) and the TXT record (capabilities). DNS-SD also supports subtypes via the _sub convention. AirPrint relies on the _universal subtype (_ipp._tcp,_universal) and requires a non-empty URF TXT key (Apple Universal Raster Format support) before listing a printer (this AirPrint requirement is documented in secondary sources). TXT keys such as rp (resource path), pdl (document formats), URF, adminurl, and note (location) let the client learn capabilities before opening a job connection."
    },
    {
      "kind": "paragraph",
      "text": "WS-Discovery / WSDAPI. On Windows, the WSD Function Discovery provider issues a multicast Probe for devices matching a service type. Matching devices reply with ProbeMatch. The client then performs metadata exchange to retrieve the device's hosted services and controls the printer by invoking service operations — for example, CreatePrintJob on a device exposing the printer service type. Devices announce arrival and departure with Hello/Bye. WS-Discovery uses SOAP-over-UDP, multicast 239.255.255.250 (or ff02::c for IPv6), UDP port 3702."
    },
    {
      "kind": "paragraph",
      "text": "SNMP. A discovery tool sweeps an address range and, on each responsive host, queries the Host Resources MIB object hrDeviceType; the value 1.3.6.1.2.1.25.3.1.5 (hrDevicePrinter) identifies a printer. It then reads the Printer MIB (RFC 3805) for model, status, supplies, and configuration. SNMP is polling-based, used chiefly for monitoring and fleet management rather than user-facing setup."
    },
    {
      "kind": "paragraph",
      "text": "SLP. User Agents multicast service requests (or unicast to a Directory Agent if one is present) on port 427; Service Agents respond with matching service URLs. When a Directory Agent exists, agents register with and query it instead of using multicast, reducing broadcast traffic."
    },
    {
      "kind": "paragraph",
      "text": "Directory-based (Active Directory). A Windows print server publishes a printQueue object into AD; clients search by name, location, or capability. A domain-controller pruning service periodically contacts publishing computers and removes stale entries when a printer no longer responds, keeping the directory current."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "Using mDNS/DNS-SD as the canonical example:"
    },
    {
      "kind": "paragraph",
      "text": "1. Advertisement. On power-up or network join, the printer claims a .local hostname (probing to avoid conflicts) and registers its service records (PTR/SRV/TXT/A/AAAA) with the local multicast group (IPv4 224.0.0.251 / IPv6 FF02::FB, UDP 5353). 2. Browse. The client multicasts a PTR query for the desired service type (e.g. _ipp._tcp.local). Printers already known from cached announcements may be answered immediately; new ones respond via multicast. 3. Enumerate. For each returned instance name, the client resolves the SRV record to obtain target hostname and TCP port, and reads the TXT record for capabilities. 4. Resolve address. The client resolves the target hostname's A/AAAA record to an IP address. 5. Filter/select. The client (or user) filters instances — for example, AirPrint keeps only _universal/URF-capable printers — and presents a friendly name. 6. Connect and hand off. Discovery ends here. The client opens the actual print protocol connection (IPP to 631, IPPS with TLS, LPD to 515, or raw to 9100) and submits the job. Capability negotiation for a driverless job then continues inside IPP (Get-Printer-Attributes), not in the discovery layer."
    },
    {
      "kind": "paragraph",
      "text": "For WS-Discovery the flow is analogous but SOAP-based: Probe → ProbeMatch → metadata exchange → invoke print operations. For SNMP it is a client-initiated poll → MIB responses → identification. In all cases discovery yields how to reach and describe the printer; job submission is a separate protocol."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "list",
      "items": [
        "macOS / iOS / iPadOS. Discovery is provided by Bonjour (mDNSResponder), integrated system-wide. The print stack is built on CUPS, whose dnssd backend discovers DNS-SD-advertised printers and can auto-configure driverless queues. AirPrint browses _ipp._tcp,_universal.",
        "Windows. WSDAPI implements DPWS/WS-Discovery, and the WSD Function Discovery provider surfaces network printers in the shell. Windows also supports mDNS-class discovery and IPP, and integrates directory-based discovery through Active Directory publishing, Group Policy control, and domain-controller pruning.",
        "Linux / Unix / ChromeOS / Android. Zero-configuration discovery is provided by Avahi (an open implementation of mDNS/DNS-SD) together with CUPS and OpenPrinting components. cups-browsed browses DNS-SD for network printers, IPP-over-USB devices, Printer Applications, and remote CUPS queues, and can auto-create local queues (a dnssd:// URI marks a queue discovered via avahi-daemon). Android and ChromeOS use DNS-SD-based discovery for their native and Mopria print paths."
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
        "IETF RFC 6762 (Multicast DNS) and RFC 6763 (DNS-Based Service Discovery) — the normative basis of Bonjour/Avahi discovery. RFC 6763 uses printing as its worked example. RFC 8766 later defined a Discovery Proxy for wide-area use.",
        "IETF RFC 2608 (SLP v2) / RFC 2165 (SLP v1) — the Service Location Protocol.",
        "IETF RFC 3805 (Printer MIB v2) with RFC 2790 (Host Resources MIB) — the SNMP object model used for printer identification and monitoring.",
        "OASIS WS-Discovery 1.1 and the Devices Profile for Web Services (DPWS) — the standards behind Windows WSD.",
        "PWG 5100.14 (IPP Everywhere v1.1, a Candidate Standard) — mandates IPP/2.0, DNS-SD, PWG Raster Format, and JPEG, and specifies how conforming printers advertise via DNS-SD (service subtypes, instance names, TXT records). It is the standards anchor that makes DNS-SD discovery interoperable across vendors.",
        "IPP itself is the print protocol that discovery hands off to; discovery and IPP are complementary layers."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to technologies"
    },
    {
      "kind": "paragraph",
      "text": "Printer discovery is the front end of the broader driverless printing stack. DNS-SD/Bonjour discovery, the IPP protocol, and a common raster format (PWG Raster / Apple URF) together let a client find a printer and print to it with no vendor driver. AirPrint (Apple), IPP Everywhere (PWG), and Mopria (cross-vendor alliance) are three brandings of essentially the same technology combination, all using DNS-SD as the discovery layer; a single printer advertisement often satisfies all three. CUPS and cups-browsed turn discovered DNS-SD services into local queues."
    },
    {
      "kind": "paragraph",
      "text": "Discovery is distinct from — but frequently confused with — name resolution (mDNS resolving printer.local to an address) and capability negotiation (IPP Get-Printer-Attributes), which happen before and after discovery respectively."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "Discovery is deliberately vendor-neutral, which is its main value. Printer manufacturers implement multiple discovery mechanisms in the same device so it can be found by any client: DNS-SD/Bonjour (for macOS/iOS/AirPrint, Linux/Avahi, Android/Mopria, IPP Everywhere), WS-Discovery (for Windows WSD), SNMP/Printer MIB (for enterprise management tools), and often legacy SLP."
    },
    {
      "kind": "paragraph",
      "text": "The Mopria Alliance was formed to standardize mobile printing on this DNS-SD + IPP foundation (secondary sources report it was founded in September 2013 by Canon, HP, Samsung, and Xerox), and Apple's AirPrint program applies the same underlying discovery to certified printers. Because the discovery records and the IPP/raster stack are standardized, a printer's discoverability does not depend on the client having installed that manufacturer's software — the historical driver-download step is eliminated for conforming devices."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Zero-configuration discovery is now the default expectation: a user plugs in a network printer and it simply appears on phones and laptops. mDNS/DNS-SD has become the de-facto cross-platform discovery layer, cemented by AirPrint, IPP Everywhere, and Mopria all building on it, and by the industry-wide move away from per-model drivers toward the IPP driverless model. WS-Discovery remains important where Windows WSD is deployed, but momentum favors IPP/DNS-SD even on Windows."
    },
    {
      "kind": "paragraph",
      "text": "SNMP/Printer MIB remains essential for fleet management, supplies monitoring, and administrative discovery sweeps. SLP and directory-based publishing persist mainly in established enterprise and legacy environments. Security has become a live concern: multicast discovery protocols (WS-Discovery on UDP 3702, mDNS on 5353, SLP on 427) have been abused as DDoS reflection/amplification vectors and can leak device inventory, which is one reason managed environments favor unicast/proxy modes and segment or disable multicast discovery."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"Bonjour, mDNS, and DNS-SD are the same thing.\" They are layered: mDNS (RFC 6762) is link-local name resolution; DNS-SD (RFC 6763) is the service-record convention that can run over mDNS or unicast DNS; Bonjour is Apple's implementation of both. DNS-SD does not require multicast.",
        "\"Discovery installs the driver / sets up printing.\" Discovery only locates the printer and returns its address, port, and capability hints. Job submission and capability negotiation happen afterward over a separate protocol (IPP, LPD, or raw 9100).",
        "\"AirPrint, Mopria, and IPP Everywhere are different discovery protocols.\" They share the same DNS-SD discovery layer and IPP stack; they are certification programs/brandings, not distinct discovery wire protocols. (AirPrint does add the _universal subtype and a URF TXT-key requirement.)",
        "\"WSD and IPP printing are the same.\" WSD (WS-Discovery/DPWS, SOAP-over-UDP) and IPP (HTTP-based) are different protocol families; a printer may support one, the other, or both.",
        "\"SNMP discovers printers for users.\" SNMP is a management/polling protocol used chiefly for monitoring and administrative discovery, not the mechanism that populates a consumer's printer list.",
        "\"mDNS crosses subnets by itself.\" Multicast DNS is link-local by design; discovering printers across subnets requires wide-area DNS-SD (unicast DNS records) or a Discovery Proxy."
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
          "period": "1997",
          "text": "Stuart Cheshire proposes adapting AppleTalk-style (NBP) service discovery to IP networks (secondary source)."
        },
        {
          "period": "1997",
          "text": "IETF publishes SLP v1 (RFC 2165)."
        },
        {
          "period": "1999",
          "text": "IETF publishes SLP v2 (RFC 2608)."
        },
        {
          "period": "2002",
          "text": "Apple ships zero-configuration discovery as Rendezvous in Mac OS X 10.2 (secondary source)."
        },
        {
          "period": "2004",
          "text": "IETF publishes Printer MIB v2 (RFC 3805) for SNMP-based printer management and identification."
        },
        {
          "period": "2005 (April)",
          "text": "WS-Discovery specification co-developed by Microsoft, Canon, Intel, and others (secondary source)."
        },
        {
          "period": "2005",
          "text": "Rendezvous renamed Bonjour from Mac OS X 10.4 (secondary source)."
        },
        {
          "period": "2009 (July 1)",
          "text": "OASIS WS-Discovery 1.1 approved as an OASIS Standard."
        },
        {
          "period": "2010",
          "text": "Apple introduces AirPrint (DNS-SD/Bonjour discovery of URF-capable IPP printers) (secondary source)."
        },
        {
          "period": "2013 (February)",
          "text": "IETF publishes RFC 6762 (mDNS) and RFC 6763 (DNS-SD) as standards-track RFCs."
        },
        {
          "period": "2020 (June)",
          "text": "IETF publishes RFC 8766, a Discovery Proxy for Multicast DNS-Based Service Discovery."
        },
        {
          "period": "2020 (May 15)",
          "text": "PWG publishes IPP Everywhere v1.1 (PWG 5100.14-2020, a Candidate Standard), formalizing DNS-SD discovery requirements for driverless printing."
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
      "slug": "bonjour-mdns-printing"
    },
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
      "slug": "snmp-printer-monitoring"
    },
    {
      "section": "tools",
      "slug": "mopria"
    },
    {
      "section": "tools",
      "slug": "cups"
    }
  ],
  "faqs": [
    {
      "q": "What is printer discovery?",
      "a": "Printer discovery is the set of network mechanisms by which a computer, phone, or print server locates printers reachable on a network and learns their address, port, protocol, name, and capabilities — so a user can print without typing an IP address. Modern discovery is dominated by zero-configuration approaches in which printers advertise themselves and clients passively browse for them."
    },
    {
      "q": "What is the difference between mDNS, DNS-SD, and Bonjour?",
      "a": "They are layered. Multicast DNS (mDNS, RFC 6762) is link-local name resolution. DNS-Based Service Discovery (DNS-SD, RFC 6763) is the service-record convention that can run over mDNS or over ordinary unicast DNS. Bonjour is Apple's implementation of both. DNS-SD does not inherently require multicast."
    },
    {
      "q": "Does printer discovery install the driver?",
      "a": "No. Discovery only locates the printer and returns its address, port, and capability hints (via TXT records or metadata exchange). Job submission and detailed capability negotiation happen afterward over a separate protocol such as IPP, LPD, or raw port 9100. In the driverless model, no vendor driver is installed at all."
    },
    {
      "q": "Are AirPrint, Mopria, and IPP Everywhere different discovery protocols?",
      "a": "No. They share the same DNS-SD discovery layer and the IPP print stack; they are certification programs and brandings rather than distinct discovery wire protocols. A single printer advertisement often satisfies all three. AirPrint does add its own filter — the _universal subtype and a non-empty URF TXT key."
    },
    {
      "q": "How does Windows discover printers differently from macOS and Linux?",
      "a": "Windows uses Web Services on Devices (WSDAPI), an implementation of WS-Discovery/DPWS that exchanges SOAP-over-UDP messages (Hello, Bye, Probe, ProbeMatch) on UDP 3702, and also supports Active Directory publishing and IPP. macOS uses Bonjour (mDNS/DNS-SD) with CUPS, while Linux uses Avahi with CUPS and cups-browsed. Windows also supports mDNS-class discovery and IPP."
    },
    {
      "q": "Why can't my computer find a printer on another subnet?",
      "a": "Multicast DNS is link-local by design, so it does not cross subnet boundaries on its own. Discovering printers across subnets requires wide-area DNS-SD using unicast DNS records or a Discovery Proxy (RFC 8766). Managed networks often deploy these to avoid relying on multicast."
    }
  ],
  "sources": [
    {
      "title": "RFC 6763: DNS-Based Service Discovery",
      "url": "https://www.rfc-editor.org/rfc/rfc6763",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "RFC 6762: Multicast DNS",
      "url": "https://www.rfc-editor.org/rfc/rfc6762",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "RFC 2608: Service Location Protocol, Version 2",
      "url": "https://www.rfc-editor.org/rfc/rfc2608",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "RFC 2165: Service Location Protocol (v1)",
      "url": "https://www.ietf.org/rfc/rfc2165.html",
      "publisher": "IETF"
    },
    {
      "title": "RFC 3805: Printer MIB v2",
      "url": "https://www.rfc-editor.org/rfc/rfc3805.html",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "RFC 2790: Host Resources MIB",
      "url": "https://www.rfc-editor.org/rfc/rfc2790.html",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "RFC 8766: Discovery Proxy for Multicast DNS-Based Service Discovery",
      "url": "https://www.rfc-editor.org/rfc/rfc8766",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "OASIS WS-Discovery Version 1.1",
      "url": "https://docs.oasis-open.org/ws-dd/discovery/1.1/os/wsdd-discovery-1.1-spec-os.html",
      "publisher": "OASIS"
    },
    {
      "title": "About Web Services on Devices (WSDAPI / DPWS)",
      "url": "https://learn.microsoft.com/en-us/windows/win32/wsdapi/about-web-services-for-devices",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "WSD Provider (Function Discovery)",
      "url": "https://learn.microsoft.com/en-us/previous-versions/windows/desktop/fundisc/wsd-provider",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Use Group Policy settings to control printers (AD publishing/pruning)",
      "url": "https://learn.microsoft.com/en-us/troubleshoot/windows-server/printing/use-group-policy-to-control-ad-printer",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "IPP Everywhere v1.1 (PWG 5100.14-2020, Candidate Standard)",
      "url": "https://ftp.pwg.org/pub/pwg/candidates/cs-ippeve11-20200515-5100.14.pdf",
      "publisher": "Printer Working Group"
    },
    {
      "title": "IPP Everywhere",
      "url": "https://www.pwg.org/ipp/everywhere.html",
      "publisher": "Printer Working Group"
    },
    {
      "title": "Using Network Printers (CUPS, DNS-SD backend)",
      "url": "https://www.cups.org/doc/network.html",
      "publisher": "OpenPrinting / CUPS"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "printer discovery",
    "mdns",
    "dns-sd",
    "bonjour",
    "ws-discovery",
    "wsd",
    "zero-configuration networking",
    "ipp everywhere",
    "airprint",
    "mopria",
    "snmp printer mib",
    "service location protocol"
  ],
  "cluster": "printer-discovery"
};

export default entry;
