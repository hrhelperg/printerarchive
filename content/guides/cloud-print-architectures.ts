import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "cloud-print-architectures",
  "title": "Cloud Print Architectures",
  "description": "How cloud print systems queue jobs in a hosted service and deliver them via outbound-pull connectors: Google Cloud Print, Universal Print, and IPP INFRA.",
  "summary": "Cloud print architectures submit a print job to a network- or Internet-hosted service rather than sending it directly to a locally attached or LAN printer. The hosted service authenticates the user, holds a per-printer job queue, and delivers each job to the target device — either a printer that connects to the cloud from its own firmware or an on-premises software agent that bridges legacy printers. The architectural trait shared across serious cloud-print systems is the pull / outbound-connection model: the printer or connector initiates an outbound connection and fetches waiting jobs, so no inbound firewall port has to be opened at the printer's site. This page describes the pattern through three reference points — the retired Google Cloud Print, Microsoft Universal Print, and the vendor-neutral IETF/PWG standards (IPP, IPP Everywhere, and the IPP Shared Infrastructure Extensions \"INFRA\").",
  "difficulty": "intermediate",
  "estimatedTime": "10 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Cloud printing grew out of the need to print from thin and mobile clients — Chromebooks, phones, and web applications — that have no local print stack and no driver for the target device."
    },
    {
      "kind": "paragraph",
      "text": "Google Cloud Print was announced in April 2010 as a printing solution for the then-forthcoming Chrome OS, with a design document and preliminary source published. It entered public beta on January 25, 2011, and never formally left beta. Google announced its retirement in November 2019 and shut it down on December 31, 2020, citing improvements in native Chrome OS printing and a marketplace of alternative print providers."
    },
    {
      "kind": "paragraph",
      "text": "In parallel, the Printer Working Group (PWG) — the ISTO body that standardizes the Internet Printing Protocol — published IPP Everywhere (PWG 5100.14) on 2013-01-28 for driverless direct printing, and the IPP Shared Infrastructure Extensions, \"INFRA\" (PWG 5100.18), on 2015-06-19 to standardize the cloud/infrastructure proxy model. A v1.1 revision (PWG 5100.18-2025) carries the document date 2025-05-02 and was approved in May 2025."
    },
    {
      "kind": "paragraph",
      "text": "Microsoft Universal Print launched as the cloud-print approach for the Microsoft ecosystem, built on IPP (including the IPP INFRA extensions) plus a Microsoft Graph API. It is the migration target most frequently cited after Google Cloud Print's shutdown."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "Cloud-print architectures decompose into four roles, present under different names in each system:"
    },
    {
      "kind": "list",
      "items": [
        "Client / submitter — the operating-system print stack, application, or web dialog that produces the job. It talks only to the cloud service, never directly to the printer.",
        "Cloud service (spooler / queue) — the hosted component that authenticates users, exposes printer objects, queues jobs, and tracks status. In Google Cloud Print this was Google's Cloud Print service; in Universal Print it is the Microsoft 365 print service in Azure; in the PWG model it is the Infrastructure Printer, an IPP Printer that also acts as a spooling service.",
        "Connector / proxy — an on-premises agent that adapts non-cloud (\"classic\" or \"legacy\") printers to the service. Google Cloud Print called it the Cloud Print Connector; Universal Print calls it the Universal Print connector, which acts as an IPP Proxy; the PWG calls it the Proxy. Cloud-native printers embed this role in firmware and need no external connector.",
        "Output device — the physical printer."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The connector or proxy always establishes an outbound session to the cloud and then pulls jobs, which is what removes the need for inbound firewall rules or VPNs at the printer's location."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Google Cloud Print supported two printer classes. Cloud Ready printers connected to the service directly from firmware. Classic printers were shared through the Cloud Print Connector, originally built into Google Chrome (a Cloud Print Connector was included in Chrome 9) and later available as a standalone daemon (google/cloud-print-connector, written in Go, under a BSD-3-Clause license). The connector ran on Windows, Linux, FreeBSD, and macOS and used the operating system's print backends — CUPS on Unix-like systems and Winspool on Windows — to reach installed printers."
    },
    {
      "kind": "paragraph",
      "text": "Authentication used Google accounts via OAuth 2.0. Real-time job delivery to registered printers and connectors used XMPP push notifications, with polling as a fallback for some setups. A later revision added the Privet protocol for local discovery and direct printing over the LAN, using mDNS/DNS-SD (service type _privet._tcp, printer subtype _printer._sub._privet._tcp) and an HTTP/JSON local API under /privet/. Capabilities and job tickets used Google's Cloud Device Description (CDD) and Cloud Job Ticket (CJT) formats, and printers were expected to support image/pwg-raster as an offline-capable fallback format."
    },
    {
      "kind": "paragraph",
      "text": "Microsoft Universal Print replaces on-premises Windows print servers with a Microsoft 365 cloud service. It uses two registration paths. Universal Print ready printers register directly with the cloud from firmware, with no connector. For existing printers, the Universal Print connector — a Windows application — registers many printers to the cloud and acts as an IPP Proxy, polling the cloud print queues and executing jobs when they appear. A modern connector path installs printers on the connector host via IPP Directed Discovery, using the inbox Microsoft IPP Class Driver against Mopria-certified printers; this specific IPP-Class-Driver install path documents Windows Server 2025 and Windows 11 24H2 as prerequisites."
    },
    {
      "kind": "paragraph",
      "text": "Identity and access in Universal Print are governed by Microsoft Entra ID — users, security groups, and Universal Print admin roles. Because both connectors and IPP printers connect outbound to the cloud, no inbound firewall port is required."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "Universal Print via Microsoft Graph (client → cloud → printer):"
    },
    {
      "kind": "list",
      "items": [
        "The client authenticates with Entra ID and calls Create printJob on a printerShare, receiving a document identifier.",
        "The client calls createUploadSession on the printDocument.",
        "The client uploads the document bytes to that upload session.",
        "The client calls printJob: start.",
        "The target printer, or the Universal Print connector acting as IPP Proxy, polls the cloud queue, fetches the job over IPP, and prints it. Status flows back through the service."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Pull (\"badge release\") printing in Universal Print: an application registers a printTaskDefinition and attaches a printTaskTrigger to a printer (often a virtual one). A submitted job is paused, producing a printTask in the processing state. When the user authenticates at a physical device, the application fetches that user's jobs and calls printJob: redirect to the physical printer."
    },
    {
      "kind": "paragraph",
      "text": "Google Cloud Print (historical): the client or application submitted the job through the web print dialog or the API to the service, which queued it and pushed an XMPP notification to the registered printer or connector. A Cloud Ready printer pulled the job directly, or the Cloud Print Connector pulled it and handed it to CUPS or Winspool for the physical printer. Documents were held only while the job was active. In Privet local mode, a client could create a job (/privet/printer/createjob with a CJT), submit the document (/privet/printer/submitdoc), and poll /privet/printer/jobstate directly over the LAN."
    },
    {
      "kind": "paragraph",
      "text": "PWG INFRA model: the Proxy opens an outbound connection to the Infrastructure Printer (the spooling service), synchronizes the state of its Output Devices, Jobs, and Documents, then fetches any fetchable jobs and prints them. Clients meanwhile use the ordinary IPP client interface against the Infrastructure Printer."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "paragraph",
      "text": "Google Cloud Print integrated at the browser and operating-system level through the Chrome-embedded connector and, on Unix-like systems, through CUPS; on Windows it reached printers through Winspool. Chrome OS, Android, and desktop Chrome exposed it as a print destination. After the shutdown, Chrome OS moved to native CUPS/IPP printing."
    },
    {
      "kind": "paragraph",
      "text": "Universal Print integrates into the Windows print stack; jobs to a Universal Print printer travel over IPP to the cloud. Microsoft ties it to the inbox Microsoft IPP Class Driver and to its broader move toward Windows Protected Print mode and the deprecation of third-party (v3) print drivers. Universal Print is also reachable from web and mobile applications directly through the Graph API."
    },
    {
      "kind": "paragraph",
      "text": "IPP itself is the native macOS and iOS printing transport (AirPrint is built on IPP) and the modern CUPS transport on Linux, so IPP-based cloud services interoperate with those stacks without proprietary drivers."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to standards"
    },
    {
      "kind": "list",
      "items": [
        "IPP (Internet Printing Protocol) is the base client/printer protocol on which both Universal Print and the PWG cloud model run. IPP over HTTPS and the ipps:// URI scheme are defined in RFC 7472. Under RFC 7472 the default port for ipps is 631; the ipps://host:443/ipp/print form seen in some deployments (including Universal Print and Mopria examples) is a practical HTTPS-port convention rather than the protocol default.",
        "IPP Everywhere (PWG 5100.14, 2013) is the driverless direct-printing baseline. It requires common document formats, notably PWG Raster (image/pwg-raster) and JPEG, alongside IPP/2.0 and DNS-SD.",
        "IPP Shared Infrastructure Extensions, \"INFRA\" (PWG 5100.18, 2015; v1.1 2025), standardize the cloud/infrastructure proxy model — Infrastructure Printer, Proxy, and Output Devices — described as an IPP binding of the PWG Cloud Imaging Model. The PWG reference ippproxy tool, part of the ippsample project, implements the Proxy role. Microsoft states that Universal Print \"supports the IPP INFRA protocol\"; technically INFRA is a set of IPP extensions rather than a separate protocol.",
        "mDNS/DNS-SD (zeroconf) underpinned Google Cloud Print's Privet local-discovery layer.",
        "OAuth 2.0 (Google Cloud Print) and OAuth / OpenID Connect via Entra ID (Universal Print) provide authentication."
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
        "XMPP was Google Cloud Print's push-notification channel for waking printers and connectors. The archived connector source tree also contains a Firebase Cloud Messaging (fcm) module; XMPP is the mechanism documented for the service's push notifications, and no migration between the two was confirmed.",
        "CUPS and Winspool were the local print backends the Google Cloud Print connector drove.",
        "HTTP/HTTPS with JSON/REST carried Google Cloud Print's submission API and Privet local API; Microsoft Graph REST carries Universal Print operations.",
        "PWG Raster is the vendor-neutral raster format used as the interoperable or offline document format across IPP Everywhere and Google Cloud Print's Privet mode.",
        "Mopria certification is the interoperability program Universal Print's IPP connector path relies on for driverless IPP printing."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "Cloud-print architectures are vendor-neutral at the protocol layer: IPP, IPP Everywhere, and IPP INFRA are PWG standards implemented across manufacturers, and Mopria certification — a multi-vendor program — is what lets Universal Print's Microsoft IPP Class Driver communicate with a Mopria-certified printer without an OEM driver."
    },
    {
      "kind": "paragraph",
      "text": "Historically, \"Cloud Ready\" (Google Cloud Print) and \"Universal Print ready\" (Microsoft) are firmware-level manufacturer implementations of the direct-to-cloud role; printers lacking them are bridged by the connector or proxy. Third-party independent software vendors extend these systems — for example, building Universal Print connectors or partner pull-print / secure-release solutions via the Graph printTask triggers — rather than the cloud service being tied to any single hardware vendor."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "With Google Cloud Print gone as of December 31, 2020, the live cloud-print landscape consists of several coexisting approaches:"
    },
    {
      "kind": "list",
      "items": [
        "Microsoft Universal Print for Microsoft 365 environments.",
        "Standards-based IPP INFRA proxy printing — the PWG model, with the open ippsample / ippproxy reference implementation — used by cloud, enterprise, and managed-print services.",
        "Vendor cloud-print services from printer manufacturers and third-party managed-print vendors, which typically layer their own portals and pull-print features onto IPP or private APIs.",
        "Native OS driverless printing (IPP Everywhere, AirPrint, Mopria) for the direct, non-cloud case."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The consistent architectural direction is driverless IPP, outbound-pull connectors, and cloud identity, reinforced by the deprecation of legacy per-model print drivers (for example, Windows Protected Print mode)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"Universal Print is just rebranded Google Cloud Print.\" They are unrelated implementations from different vendors. Universal Print is built on IPP / IPP INFRA and Microsoft Graph with Entra ID, whereas Google Cloud Print used a Google-proprietary service, OAuth 2.0, XMPP, and the Privet local protocol.",
        "\"The cloud pushes the job into the printer through the firewall.\" In practice the printer or connector makes an outbound connection and pulls the job; no inbound port is opened.",
        "\"Cloud printing needs a per-model driver.\" The modern designs are driverless — IPP Everywhere, Mopria, and the Microsoft IPP Class Driver negotiate capabilities over IPP and use PWG Raster.",
        "\"Google Cloud Print was a finished, generally available product.\" It launched in beta in 2011 and remained in beta until shutdown.",
        "\"A connector is always required.\" Cloud Ready and Universal Print ready printers register directly from firmware; the connector or proxy exists only to bridge printers that lack native support.",
        "\"Pull / secure-release printing is a Universal Print invention.\" It is a general cloud-print pattern; in Universal Print it is expressed via printTaskDefinition, printTaskTrigger, and printTask, and the PWG INFRA fetch model supports comparable release scenarios."
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
          "period": "April 2010",
          "text": "Google announces Cloud Print, with a design document and preliminary source, for Chrome OS."
        },
        {
          "period": "2011-01-25",
          "text": "Google Cloud Print enters public beta."
        },
        {
          "period": "2013-01-28",
          "text": "PWG publishes IPP Everywhere (PWG 5100.14), the driverless direct-print baseline."
        },
        {
          "period": "2015-06-19",
          "text": "PWG publishes IPP Shared Infrastructure Extensions \"INFRA\" (PWG 5100.18), standardizing the cloud proxy model."
        },
        {
          "period": "November 2019",
          "text": "Google announces Cloud Print end-of-life."
        },
        {
          "period": "December 31, 2020",
          "text": "Google Cloud Print is shut down."
        },
        {
          "period": "June 17, 2022",
          "text": "the google/cloud-print-connector GitHub repository is archived."
        },
        {
          "period": "May 2025",
          "text": "PWG approves INFRA v1.1 (PWG 5100.18-2025; document dated 2025-05-02)."
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
      "q": "Why do cloud print systems not require opening a firewall port?",
      "a": "Because the printer or connector initiates an outbound connection to the cloud service and then pulls (fetches) waiting jobs. No inbound port has to be opened at the site holding the printer. This outbound-pull model is shared by Google Cloud Print, Microsoft Universal Print, and the PWG IPP INFRA proxy model."
    },
    {
      "q": "What replaced Google Cloud Print after its shutdown?",
      "a": "Google Cloud Print shut down on December 31, 2020. The current landscape includes Microsoft Universal Print for Microsoft 365 environments, standards-based IPP INFRA proxy printing (the PWG model with the open ippsample/ippproxy reference implementation), vendor cloud-print services, and native OS driverless printing via IPP Everywhere, AirPrint, and Mopria. Chrome OS itself moved to native CUPS/IPP printing."
    },
    {
      "q": "Is a connector always required for cloud printing?",
      "a": "No. Cloud Ready (Google Cloud Print) and Universal Print ready (Microsoft) printers register directly with the cloud from their firmware. The connector or proxy exists only to bridge existing printers that lack native cloud support, adapting them to the service using local backends such as CUPS or Winspool."
    },
    {
      "q": "What is the difference between IPP, IPP Everywhere, and IPP INFRA?",
      "a": "IPP is the base client/printer protocol. IPP Everywhere (PWG 5100.14, 2013) is the driverless direct-printing baseline that mandates common formats such as PWG Raster. IPP INFRA (PWG 5100.18, 2015; v1.1 2025) adds the cloud/infrastructure proxy model — an Infrastructure Printer, Proxy, and Output Devices — as an IPP binding of the PWG Cloud Imaging Model."
    },
    {
      "q": "Does cloud printing require a per-model printer driver?",
      "a": "The modern designs are driverless. IPP Everywhere, Mopria, and the Microsoft IPP Class Driver negotiate device capabilities over IPP and use the vendor-neutral PWG Raster format, so no OEM per-model driver is needed for a compliant printer."
    }
  ],
  "sources": [
    {
      "title": "Google Cloud Print",
      "url": "https://en.wikipedia.org/wiki/Google_Cloud_Print",
      "publisher": "Wikipedia"
    },
    {
      "title": "Privet — Cloud Print (Deprecated)",
      "url": "https://developers.google.com/cloud-print/docs/privet",
      "publisher": "Google for Developers"
    },
    {
      "title": "google/cloud-print-connector (repository)",
      "url": "https://github.com/google/cloud-print-connector",
      "publisher": "Google / GitHub"
    },
    {
      "title": "Plan your architecture (Universal Print)",
      "url": "https://learn.microsoft.com/en-us/universal-print/plan-your-architecture",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Universal Print cloud printing API overview (Microsoft Graph)",
      "url": "https://learn.microsoft.com/en-us/graph/universal-print-concept-overview",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Using Microsoft IPP Class Driver with the Universal Print connector",
      "url": "https://learn.microsoft.com/en-us/universal-print/fundamentals/universal-print-connector-with-ipp",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Building a Universal Print connector (ISV)",
      "url": "https://learn.microsoft.com/en-us/universal-print/hardware/universal-print-isv-connector",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "IPP Everywhere (PWG 5100.14)",
      "url": "https://istopwg.github.io/ipp/everywhere.html",
      "publisher": "Printer Working Group / ISTO"
    },
    {
      "title": "IPP Shared Infrastructure Extensions (INFRA), PWG 5100.18-2015",
      "url": "https://ftp.pwg.org/pub/pwg/candidates/cs-ippinfra10-20150619-5100.18.pdf",
      "publisher": "Printer Working Group"
    },
    {
      "title": "PWG Approved: PWG 5100.18-2025 INFRA v1.1",
      "url": "https://www.pwg.org/pipermail/pwg-announce/2025/004072.html",
      "publisher": "Printer Working Group"
    },
    {
      "title": "ippproxy(8) (ippsample reference proxy)",
      "url": "https://istopwg.github.io/ippsample/ippproxy.html",
      "publisher": "Printer Working Group / ISTO"
    },
    {
      "title": "RFC 7472 — IPP over HTTPS Transport Binding and the 'ipps' URI Scheme",
      "url": "https://datatracker.ietf.org/doc/html/rfc7472",
      "publisher": "IETF"
    },
    {
      "title": "Internet Printing Protocol",
      "url": "https://en.wikipedia.org/wiki/Internet_Printing_Protocol",
      "publisher": "Wikipedia"
    },
    {
      "title": "PWG Standards index",
      "url": "https://www.pwg.org/standards.html",
      "publisher": "Printer Working Group"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "cloud print architectures",
    "google cloud print",
    "microsoft universal print",
    "ipp infra",
    "ipp everywhere",
    "print connector",
    "ipp proxy",
    "outbound pull printing",
    "pwg 5100.18",
    "infrastructure printer",
    "microsoft graph print api",
    "privet protocol"
  ],
  "cluster": "enterprise-print-management"
};

export default entry;
