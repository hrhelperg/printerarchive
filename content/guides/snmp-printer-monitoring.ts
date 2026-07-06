import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "snmp-printer-monitoring",
  "title": "SNMP Printer Monitoring",
  "description": "How SNMP, the Printer MIB (RFC 3805), and the Host Resources MIB let managers remotely read printer status, supply levels, and page counts.",
  "summary": "SNMP printer monitoring uses the Simple Network Management Protocol to remotely query networked printers and multifunction devices. A monitoring application (the SNMP manager) reads standardized objects from an agent in the printer's firmware, organized by the Printer MIB (RFC 3805, which obsoletes RFC 1759) and the Host Resources MIB (RFC 2790). Through these vendor-neutral Management Information Bases a manager can read overall and per-subunit status, detailed error conditions, consumable levels, tray and bin levels, life page counts, installed interpreters, and console text. This makes SNMP the long-standing backbone of printer fleet management: supply tracking and reordering, page-count collection for billing, proactive fault alerting, and device discovery. It remains widely deployed across mixed-vendor estates, though IPP and driverless printing increasingly carry status data in-band and SNMPv1/v2c's cleartext community strings push modern deployments toward SNMPv3.",
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
      "text": "Network printers became common in the early 1990s, and administrators needed a standard way to monitor them alongside the network gear already managed by the Simple Network Management Protocol (SNMP). The Printer Working Group (PWG) and the IETF developed the Printer MIB to fill this gap."
    },
    {
      "kind": "paragraph",
      "text": "RFC 1759, \"Printer MIB,\" was published in March 1995, with authors from Texas Instruments, Lexmark, Xerox, Adobe, and Hewlett-Packard. It defined a standard model of a printer as a set of subunits — inputs, outputs, markers, marker supplies, media paths, interpreters, console, and channels — along with the objects that describe each."
    },
    {
      "kind": "paragraph",
      "text": "The Host Resources MIB — first RFC 1514, then RFC 2790 (March 2000) — provided the generic host and device framing (device table, printer table, storage) that the Printer MIB references for overall device and printer status."
    },
    {
      "kind": "paragraph",
      "text": "The Printer MIB was substantially revised as RFC 3805, \"Printer MIB v2,\" published June 2004 by authors from Hitachi Printing Solutions, IBM, and High North. RFC 3805 obsoletes RFC 1759. It modernized the definitions to SMIv2, clarified value ranges, expanded the model, and refined how printer status maps onto the Host Resources MIB. A companion IANA-maintained module (the IANA Printer MIB, under mib-2 109) holds the extensible enumerations so new supply types, alert codes, and media names can be registered without revising the RFC."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "SNMP printer monitoring applies the standard SNMP manager/agent architecture to the printer domain:"
    },
    {
      "kind": "list",
      "items": [
        "SNMP manager — the monitoring software (fleet-management server, operating-system port monitor, or network-management platform) that issues requests and receives notifications.",
        "SNMP agent — software in the printer's network firmware, or in an external print server or network interface card, that answers requests by reading device state and exposing it as MIB objects.",
        "MIB — the schema. Objects are identified by Object Identifiers (OIDs) arranged in a tree. The Printer MIB root is printmib = { mib-2 43 } = 1.3.6.1.2.1.43. The Host Resources MIB is under { mib-2 25 }."
      ]
    },
    {
      "kind": "paragraph",
      "text": "RFC 3805 models the printer as a General Printer plus subunits, each represented by a MIB table indexed so that multiple instances (several input trays or supplies, for example) can coexist. Printer subunit tables are tied to the Host Resources MIB device model through the host device index. Major RFC 3805 groups include:"
    },
    {
      "kind": "list",
      "items": [
        "General group (prtGeneral, printmib 5) — device-wide configuration and counters.",
        "Cover and Localization tables.",
        "Input group (trays and feeders) and Output group (bins and stackers).",
        "Marker group (prtMarker, printmib 10) — the marking engine, including life and power-on page counters.",
        "Marker Supplies group (prtMarkerSupplies, printmib 11) — toner, ink, and waste containers and receptacles.",
        "Marker Colorant (printmib 12), Media Path (printmib 13), Channel (printmib 14), Interpreter (printmib 15) for PDL interpreters such as PostScript and PCL, and Console Display Buffer (printmib 16) groups.",
        "Alert group (prtAlert, printmib 18) — a table of current alert (fault or warning) conditions, plus a notification type for traps.",
        "Conformance (prtMIBConformance, printmib 2)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Overall device state is not a single Printer MIB scalar. It is read from the Host Resources MIB objects hrDeviceStatus, hrPrinterStatus, and hrPrinterDetectedErrorState, with fine-grained detail in the Printer MIB's per-subunit status fields and alert table."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "A manager monitors a printer by issuing SNMP operations against the agent:"
    },
    {
      "kind": "list",
      "items": [
        "GET, GET-NEXT, and GET-BULK to read specific OIDs or walk a subtree — for example, walking the whole marker-supplies table to enumerate every toner cartridge and its level.",
        "SET to write the few read-write objects. RFC 3805 marks a handful of objects writable so that a management application or remote panel can supply values (for instance, capacity for devices that cannot self-sense it).",
        "Traps and notifications. The agent can asynchronously send printerV2Alert (an SNMPv2 notification type) when a critical event is added to the alert table, carrying the alert index, severity level, group, group index, location, and code."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Key monitored data and their objects (all under 1.3.6.1.2.1.43):"
    },
    {
      "kind": "list",
      "items": [
        "Supply levels. For each supply, prtMarkerSuppliesLevel gives the current level and prtMarkerSuppliesMaxCapacity gives the maximum, both expressed in the supply's unit. A percentage is computed by the manager as level divided by max capacity — the printer reports the two raw values, not a percentage. RFC 3805 defines sentinel values for level: -1 (other), -2 (unknown), and -3 (some supply remaining but the amount is indeterminate). Treating these sentinels as numeric quantities is a classic monitoring bug.",
        "Page counts. prtMarkerLifeCount is the lifetime count of units printed, in the unit given by prtMarkerCounterUnit (which may be sheets, impressions, characters, or other). A separate power-on count exists. Life-count values should persist across power cycles.",
        "Input and output. Current level and maximum capacity for trays, and remaining and maximum capacity for output bins, follow the same sentinel semantics.",
        "Status and errors. hrPrinterStatus (other, unknown, idle, printing, warmup), hrDeviceStatus (unknown, running, warning, testing, down), and hrPrinterDetectedErrorState — a bit-field whose bits flag lowPaper, noPaper, lowToner, noToner, doorOpen, jammed, offline, serviceRequested, inputTrayMissing, outputTrayMissing, markerSupplyMissing, outputNearFull, outputFull, inputTrayEmpty, and overduePreventMaint. The Printer MIB alert table carries richer enumerated alert entries with severity and location.",
        "Console text. prtConsoleDisplayBufferText (1.3.6.1.2.1.43.16.5.1.2) returns the text shown on the operator panel."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "1. Discovery. A manager finds printers either by directed polling of known IP addresses or by broadcast SNMP queries; responders that answer basic SNMP OIDs (often with the default \"public\" community) are candidate printers."
    },
    {
      "kind": "paragraph",
      "text": "2. Identification. The manager reads system and Host Resources MIB objects plus Printer MIB general and interpreter objects to determine make, model, and capabilities. Both Windows and CUPS do this to auto-configure a print queue."
    },
    {
      "kind": "paragraph",
      "text": "3. Request. The manager sends a GET, GET-NEXT, or GET-BULK request over UDP to port 161 on the printer, naming the OIDs of interest and supplying credentials (a community string for v1/v2c, or a USM user for v3)."
    },
    {
      "kind": "paragraph",
      "text": "4. Agent resolution. The printer's SNMP agent maps each OID to the corresponding internal value — reading a physical sensor (toner level, tray sensor), a firmware counter (life page count), or a computed status — and assembles a response."
    },
    {
      "kind": "paragraph",
      "text": "5. Response. The agent returns the values, a sentinel such as -2 or -3, or an error like noSuchObject."
    },
    {
      "kind": "paragraph",
      "text": "6. Interpretation. The manager converts raw values into human-facing metrics: percentage of supply remaining, tray fill state, page-count deltas for billing, and error classification from the detected-error bit-field and alert table."
    },
    {
      "kind": "paragraph",
      "text": "7. Asynchronous events. On a critical condition the agent may push a trap to the manager on UDP port 162, letting it react without waiting for the next poll."
    },
    {
      "kind": "paragraph",
      "text": "8. Persistence and aggregation. Fleet software stores time-series readings for trending, threshold alerts, automated supply reordering, and reporting."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "paragraph",
      "text": "Microsoft Windows. The Standard TCP/IP Port Monitor, introduced in Windows 2000 and updated in Windows Server 2003 for better performance and more detailed device status, uses SNMP to read a device's configuration and detailed status. This enables accurate error reporting such as \"paper out\" that legacy LPR could not provide. During port setup it queries the device and can auto-configure the queue from the SNMP responses. Ports carry SNMP settings (enabled flag, community string such as \"public,\" and a device index), exposed through the Win32_TCPIPPrinterPort WMI class and the prnport command. Microsoft's Hardware Lab Kit includes a Printer Port Monitor MIB Verification Test that confirms a device supports the minimum Host Resources MIB and Printer MIB objects the port monitor relies on."
    },
    {
      "kind": "paragraph",
      "text": "Linux and Unix (CUPS / OpenPrinting). CUPS ships an snmp backend that provides discovery and identification of network printers. Per its manual page it uses SNMPv1 and, for discovery, lists printers that answer a broadcast SNMPv1 query with the \"public\" community, then sends follow-up queries to determine the device URI and make/model. It draws on the Host, Printer, and Port Monitor MIBs plus some vendor-private MIBs. It reads /etc/cups/snmp.conf for the broadcast address, community, and logging; no broadcast addresses are configured by default. The CUPS SNMP backend is documented as deprecated and slated for removal in a future CUPS version."
    },
    {
      "kind": "paragraph",
      "text": "macOS historically used the same CUPS SNMP mechanisms for network-printer discovery and identification."
    },
    {
      "kind": "paragraph",
      "text": "Cross-platform tooling. General SNMP utilities (such as net-snmp's snmpget and snmpwalk), network-management platforms, and vendor fleet consoles query the same standard OIDs on any operating system."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to standards"
    },
    {
      "kind": "paragraph",
      "text": "SNMP framework. Printer monitoring rides on the Internet-Standard Management Framework: SNMP itself (SNMPv1 in RFC 1157, plus SNMPv2c and the SNMPv3 architecture) and the Structure of Management Information. RFC 3805 is written to SMIv2 (STD 58)."
    },
    {
      "kind": "paragraph",
      "text": "Printer MIB. RFC 1759 (1995) was superseded by RFC 3805, Printer MIB v2 (2004), the current standard, together with the IANA Printer MIB for extensible enumerations."
    },
    {
      "kind": "paragraph",
      "text": "Host Resources MIB. RFC 1514 was superseded by RFC 2790 (2000), which supplies hrDeviceStatus, hrPrinterStatus, hrPrinterDetectedErrorState, and the device indexing that the Printer MIB reuses."
    },
    {
      "kind": "paragraph",
      "text": "Related printer MIBs. RFC 3806, the Printer Finishing MIB (June 2004, same authors as RFC 3805), and the PWG's Printer Port Monitor MIB (referenced by Microsoft and CUPS) extend the model."
    },
    {
      "kind": "paragraph",
      "text": "PWG lineage. The Printer Working Group drove the Printer MIB work and continues related imaging and printer-management standards, later including the Internet Printing Protocol and the PWG Semantic Model."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to technologies"
    },
    {
      "kind": "paragraph",
      "text": "IPP (Internet Printing Protocol). A newer, HTTP-based path that carries both printing and rich printer/status attributes in-band. For status and supply data, IPP attributes overlap with what SNMP historically provided, and IPP Everywhere and driverless printing increasingly supersede SNMP for per-queue status. Many IPP status semantics mirror the Printer MIB model."
    },
    {
      "kind": "paragraph",
      "text": "Embedded web servers. Most printers also expose a built-in web page for human-readable status; SNMP is the machine-readable, pollable counterpart used by fleet software."
    },
    {
      "kind": "paragraph",
      "text": "PJL and raw printing. Printer Job Language and raw (port 9100) printing move jobs and can query some status out of band, but SNMP remains the standardized structured-monitoring channel."
    },
    {
      "kind": "paragraph",
      "text": "Modern telemetry. Enterprises increasingly complement or replace SNMP polling with cloud fleet-management agents and push telemetry, but SNMP persists for heterogeneous, multi-vendor estates."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "The Printer MIB was authored with heavy vendor participation — RFC 1759 with authors from Lexmark, Xerox, Hewlett-Packard, Adobe, and Texas Instruments, and RFC 3805 with authors from Hitachi and IBM. Effectively all major printer vendors implement the standard Printer MIB and Host Resources MIB in their network firmware and print servers (for example, HP's network interface cards historically branded JetDirect), which is what lets vendor-neutral fleet tools and operating-system port monitors read supply levels, page counts, and status uniformly across brands."
    },
    {
      "kind": "paragraph",
      "text": "Vendors additionally publish private enterprise MIBs (under the enterprises subtree, 1.3.6.1.4.1.<vendor>) for device-specific data not covered by the standard, such as extended diagnostics, granular part-life data, and model-specific settings. Managers commonly combine standard OIDs (portable across brands) with vendor OIDs (deeper but brand-specific). The IANA Printer MIB's registration mechanism lets new supply types and alert codes be added without every vendor forking the schema."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "SNMP remains widely deployed for printer fleet management because it is standardized, vendor-neutral, and works across mixed estates. Automated toner and ink level tracking and reordering, meter and page-count collection for managed-print-services billing and cost recovery, proactive jam and error alerting, and printer discovery and auto-provisioning by operating-system port monitors all still rely on it."
    },
    {
      "kind": "paragraph",
      "text": "At the same time its footprint is shrinking at the edges:"
    },
    {
      "kind": "list",
      "items": [
        "IPP, IPP Everywhere, and driverless printing increasingly carry status and supply data in-band, reducing the need for separate SNMP polling per queue.",
        "The CUPS SNMP backend is officially deprecated.",
        "Security posture matters. SNMPv1 and v2c community strings (such as \"public\" and \"private\") are unauthenticated and sent in cleartext, so modern deployments favor SNMPv3, which provides authentication and encryption, or disable SNMP where it is unused. RFC 3805's security section explicitly warns that some objects are writable and that SNMP versions before v3 lack adequate security."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"The printer reports a supply percentage.\" It reports raw level and maximum-capacity values; the manager computes the percentage. Levels can also be sentinels (-1 other, -2 unknown, -3 some remaining), which must not be treated as numeric quantities.",
        "\"There is a single printer-status OID.\" Overall status is spread across hrPrinterStatus, hrDeviceStatus, and hrPrinterDetectedErrorState in the Host Resources MIB, plus per-subunit status and the Printer MIB alert table. RFC 3805 notes these named states are a subset and cannot always distinguish, for example, simultaneous critical and non-critical alerts.",
        "\"SNMP is secure by default.\" SNMPv1 and v2c use cleartext community strings; only SNMPv3 provides authentication and privacy.",
        "\"Page counts are always in sheets.\" The unit is whatever prtMarkerCounterUnit reports (sheets, impressions, characters, or other), and separate life and power-on counters exist.",
        "\"RFC 1759 is the current standard.\" RFC 1759 is obsoleted by RFC 3805, Printer MIB v2. Older tooling and some documentation still reference 1759.",
        "\"Toner low is a critical or down condition.\" Per RFC 3805's status mapping, lowToner and lowPaper are non-critical (warning) conditions, whereas noToner, noPaper, jam, and cover-open are critical (down)."
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
          "period": "1990",
          "text": "SNMPv1 defined (RFC 1157), establishing the manager/agent/MIB framework printers would later use."
        },
        {
          "period": "1993",
          "text": "Host Resources MIB first published as RFC 1514, providing the device and host model."
        },
        {
          "period": "March 1995",
          "text": "RFC 1759, \"Printer MIB,\" published by the IETF and PWG, the first standard printer-monitoring MIB."
        },
        {
          "period": "~2000",
          "text": "Microsoft's Standard TCP/IP Port Monitor introduced in Windows 2000, using SNMP for printer status."
        },
        {
          "period": "March 2000",
          "text": "RFC 2790, \"Host Resources MIB,\" published, obsoleting RFC 1514."
        },
        {
          "period": "~2003",
          "text": "Standard TCP/IP Port Monitor updated in Windows Server 2003 for better performance and more detailed SNMP device status."
        },
        {
          "period": "June 2004",
          "text": "RFC 3805, \"Printer MIB v2,\" published, obsoleting RFC 1759 (SMIv2, expanded model)."
        },
        {
          "period": "June 2004",
          "text": "RFC 3806, \"Printer Finishing MIB,\" published as a companion for finishing subunits."
        },
        {
          "period": "2010s",
          "text": "IPP Everywhere and driverless printing rise, carrying status and supply attributes in-band."
        },
        {
          "period": "2019",
          "text": "The CUPS SNMP backend manual page documents it as deprecated."
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
      "slug": "enterprise-print-servers"
    },
    {
      "section": "guides",
      "slug": "printer-discovery"
    },
    {
      "section": "guides",
      "slug": "print-management"
    },
    {
      "section": "tools",
      "slug": "ipp"
    },
    {
      "section": "tools",
      "slug": "jetdirect"
    },
    {
      "section": "tools",
      "slug": "cups"
    }
  ],
  "faqs": [
    {
      "q": "What MIBs does SNMP printer monitoring use?",
      "a": "The two central MIBs are the Printer MIB (RFC 3805, \"Printer MIB v2,\" which obsoletes RFC 1759) and the Host Resources MIB (RFC 2790). The Printer MIB models the device as subunits under OID 1.3.6.1.2.1.43, while the Host Resources MIB supplies overall device and printer status objects (hrDeviceStatus, hrPrinterStatus, hrPrinterDetectedErrorState) that the Printer MIB builds on."
    },
    {
      "q": "Does a printer report its toner level as a percentage over SNMP?",
      "a": "No. The printer reports two raw values — prtMarkerSuppliesLevel (current level) and prtMarkerSuppliesMaxCapacity (maximum), both in the supply's unit — and the manager computes the percentage. Levels can also be sentinel values (-1 other, -2 unknown, -3 some remaining but indeterminate), which must not be treated as numeric quantities."
    },
    {
      "q": "Is SNMP printer monitoring secure?",
      "a": "Not by default. SNMPv1 and v2c use unauthenticated community strings (such as \"public\") sent in cleartext. Only SNMPv3 provides authentication and encryption. RFC 3805 explicitly warns that some objects are writable and that SNMP versions before v3 lack adequate security, so modern deployments favor SNMPv3 or disable SNMP where unused."
    },
    {
      "q": "How do Windows and CUPS use SNMP for printers?",
      "a": "On Windows, the Standard TCP/IP Port Monitor (introduced in Windows 2000, enhanced in Windows Server 2003) uses SNMP to read configuration and detailed status and to report errors like \"paper out.\" On Linux/Unix, the CUPS snmp backend uses SNMPv1 broadcast queries with the \"public\" community for discovery and identification, drawing on the Host, Printer, and Port Monitor MIBs; that backend is documented as deprecated."
    },
    {
      "q": "Is RFC 1759 still the current Printer MIB standard?",
      "a": "No. RFC 1759 (March 1995) was the first standard printer-monitoring MIB, but it is obsoleted by RFC 3805, \"Printer MIB v2\" (June 2004), which modernized the definitions to SMIv2 and expanded the model. Some older tooling and documentation still reference RFC 1759."
    }
  ],
  "sources": [
    {
      "title": "RFC 3805 — Printer MIB v2",
      "url": "https://www.rfc-editor.org/rfc/rfc3805.txt",
      "publisher": "IETF"
    },
    {
      "title": "RFC 1759 — Printer MIB",
      "url": "https://www.rfc-editor.org/rfc/rfc1759.txt",
      "publisher": "IETF"
    },
    {
      "title": "RFC 2790 — Host Resources MIB",
      "url": "https://www.rfc-editor.org/rfc/rfc2790.txt",
      "publisher": "IETF"
    },
    {
      "title": "RFC 3806 — Printer Finishing MIB",
      "url": "https://www.rfc-editor.org/rfc/rfc3806.txt",
      "publisher": "IETF"
    },
    {
      "title": "OID reference: printmib tree (1.3.6.1.2.1.43)",
      "url": "https://oidref.com/1.3.6.1.2.1.43",
      "publisher": "OID Repository"
    },
    {
      "title": "The standard port monitor for TCP/IP (KB 814586)",
      "url": "https://learn.microsoft.com/troubleshoot/windows-server/printing/standard-port-monitor-for-tcpip",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "CUPS cups-snmp.8 (snmp backend) manual page",
      "url": "https://github.com/apple/cups/blob/master/man/cups-snmp.8",
      "publisher": "Apple / OpenPrinting CUPS"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "snmp printer monitoring",
    "printer mib",
    "rfc 3805",
    "host resources mib",
    "rfc 2790",
    "prtmarkersupplieslevel",
    "hrprinterdetectederrorstate",
    "printer fleet management",
    "toner level snmp",
    "page count monitoring",
    "snmp agent printer",
    "printmib 1.3.6.1.2.1.43"
  ],
  "cluster": "printer-discovery"
};

export default entry;
