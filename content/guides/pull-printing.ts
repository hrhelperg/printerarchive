import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "pull-printing",
  "title": "Pull Printing and Follow-Me Printing",
  "description": "How pull printing (follow-me printing) holds print jobs in a shared queue and releases them at any device after the user authenticates.",
  "summary": "Pull printing, also marketed as follow-me printing, is a print-workflow architecture in which a job is submitted to a single shared virtual queue and held in a secure spool rather than sent to one physical printer. The document prints only after the user walks to any enrolled device and authenticates, at which point the held job is released. The hold-and-release mechanism is standardized in the Internet Printing Protocol, extended for cloud and infrastructure spooling by the PWG, and implemented natively in CUPS, on Windows print servers, and in Microsoft's Universal Print anywhere.",
  "difficulty": "intermediate",
  "estimatedTime": "9 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "The core mechanism behind pull printing — holding a job in a queue and releasing it later — predates the modern cloud framing and is standardized within the Internet Printing Protocol (IPP) itself. The Hold-Job and Release-Job operations and the job-hold-until attribute (including the indefinite value) were defined in RFC 2911 (IPP/1.1) in September 2000. Printer-wide holding, via the Hold-New-Jobs and Release-Held-New-Jobs operations, was added in RFC 3998 in March 2005."
    },
    {
      "kind": "paragraph",
      "text": "The productized \"release at any device\" pattern is commonly associated with Ringdale's FollowMe product; Ringdale dates its print-roaming technology to 1997, though this is a vendor claim rather than an independent standards record, and \"FollowMe\" is a registered trademark of Ringdale UK Ltd and Ringdale, Inc. Through the 2000s and 2010s, third-party print-management software built pull printing on top of Windows print servers and CUPS. The model later shifted toward cloud spooling, reflected in standards for infrastructure/cloud-held jobs (the PWG's IPP Shared Infrastructure Extensions) and in Microsoft's cloud-native implementation, Universal Print anywhere."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "A pull-printing system defines several logical roles, regardless of vendor:"
    },
    {
      "kind": "list",
      "items": [
        "Client / print driver — produces the job in a page description language (PDL) and submits it to a shared logical queue rather than to a device.",
        "Spooling / hold service — stores the held job and its metadata (owner identity, timestamps, options). In the PWG model this is the Infrastructure Printer; on Windows it is the print server or the Universal Print cloud service; on Linux and macOS it is the CUPS scheduler holding the job.",
        "Identity / authentication layer — maps a credential presented at a device (badge, PIN, biometric, or mobile login) to a directory identity.",
        "Release mechanism at the device — embedded terminal software on the multifunction printer (MFP), a separate release station, or a web/mobile release interface.",
        "Output device / proxy — the physical printer; where the printer is not natively cloud-aware, a proxy pulls jobs from the spooler on its behalf."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The PWG's IPP Shared Infrastructure Extensions (PWG 5100.18, \"INFRA\") define this explicitly as a three-party model. An IPP Client submits to an Infrastructure Printer described as \"a Spooling Service that manages Jobs and Documents on behalf of the Proxy,\" which can also \"augment the capabilities of the Output Device\" by providing document conversion, imposition, and other services. An IPP Proxy running near or on the Output Device fetches the queued work; the reference ippproxy(8) implementation in the PWG ippsample project states that it \"conforms to PWG Candidate Standard 5100.18: IPP Shared Infrastructure Extensions (INFRA).\""
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "1. Submit. The user prints to one shared pull-print queue. The job is accepted and marked held rather than dispatched. 2. Hold. The spooler retains the job with the owner's identity attached. In IPP terms the job may carry job-hold-until = indefinite; RFC 2911 defines that value as \"the job is held indefinitely, until a client performs a Release-Job.\" In Universal Print, the printer share has an \"Enable holding jobs until secure release\" toggle so jobs are held securely in the cloud. 3. Authenticate. At any enrolled device, the user presents a credential. Universal Print expresses supported methods through the IPP attribute job-release-action-supported, with values including owner-authorized-badge, owner-authorized-biometrics, and owner-authorized-username-password; QR-code release via the Microsoft 365 mobile app is always available. 4. Enumerate and release. The device or proxy queries the spooler for that user's fetchable jobs and releases the selected job(s). In base IPP this corresponds to Release-Job; in the infrastructure/cloud flow it is a fetch-and-acknowledge sequence. 5. Print and report. The device images the document and the final state is reported back so users and administrators can see the outcome."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "In the cloud/infrastructure-held model documented by Microsoft for Universal Print anywhere, the data takes the following path:"
    },
    {
      "kind": "paragraph",
      "text": "1. The client submits to a pull-print printer; the job is held for secure release in the spooler. No device is notified and nothing is downloaded yet. 2. The user badges or scans at a device, and the identity layer maps the credential to the user's identity, expressed as requesting-user-uri: mailto:{userUPN}. 3. The device or proxy calls Get-Jobs with which-jobs=fetchable, my-jobs=true, and requesting-user-uri to list that user's held jobs. 4. Fetch-Job returns the selected job's attributes and Fetch-Document downloads the print-ready payload. 5. Acknowledge-Job releases the job to the device. 6. The proxy forwards the payload to the printer, and Update-Job-Status reports the final job state (completed, aborted, or canceled)."
    },
    {
      "kind": "paragraph",
      "text": "Traditional server-held variants differ mainly in where the spool lives and when it moves. A central-store configuration keeps the job on the central spooler until release, while a local-download configuration pre-stages the job to a release station before the user asks for it. Held spool files may be encrypted at rest; PaperCut, for example, documents encryption of held spool files as a product feature."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "list",
      "items": [
        "Windows (on-premises): Pull printing is built on the Windows print spooler and print server. Release and authentication are typically supplied by third-party print-management software layered on shared queues; the operating system provides the spooler, queue, and driver plumbing.",
        "Windows / Microsoft 365 (cloud): Universal Print is Microsoft's cloud print service, and Universal Print anywhere is its native pull-print layer. It is server-less for the customer (no on-premises print server is needed for Universal-Print-ready printers) and is configured in the Universal Print portal via Pull-print printers and Member Printers, with holding controlled at the printer-share level.",
        "Linux / Unix (CUPS): The CUPS scheduler natively supports holding via job-hold-until (indefinite), the Hold-New-Jobs IPP operation, and the CLI equivalents cupsdisable --hold (holds remaining jobs) and cupsenable --release (releases pending jobs). Held jobs can be moved with CUPS-Move-Job. Full walk-up authentication and cross-device roaming are generally added by print-management software on top of these primitives.",
        "macOS: Uses CUPS as its printing subsystem, so the same CUPS hold and release primitives apply beneath vendor solutions."
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
        "IETF RFC 2911 (IPP/1.1) defines Hold-Job, Release-Job, and the job-hold-until attribute with the indefinite value — the primitive that makes a queue hold until released.",
        "IETF RFC 3998 adds the printer-scope Hold-New-Jobs and Release-Held-New-Jobs operations, routing new jobs to a held state.",
        "PWG 5100.18 (INFRA, IPP Shared Infrastructure Extensions) was first published as a Candidate Standard on 2015-06-19 and defines the Infrastructure Printer, IPP Proxy, and Output Device roles plus the fetch and acknowledge operations that let a device pull queued jobs. Version 1.1, designated PWG 5100.18-2025 and dated 2025-05-02, was subsequently approved.",
        "Mopria Cloud Specification. Microsoft's Universal Print OEM badge-release integration states it is built on the Secure Release framework specified in Mopria Cloud Specification v1.2, and its cloud-to-cloud partner integration references v1.1 (§5.1.2, Cloud Topography) and v1.2 (§5.1.6, Secure Release). The specification is published by the Mopria Alliance.",
        "Vendor IPP extensions. Universal Print adds attributes such as smi311-universal-print-anywhere-enabled, set via the Update-Output-Device-Attributes operation, to let a printer declare pull-print participation."
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
        "Authentication and credential technologies: proximity badges and smart cards, PIN pads, biometric (fingerprint) readers, and mobile authentication via QR-code scan or app login. Microsoft notes that Universal Print badge release may work with an organization's existing badge system.",
        "Directory and identity: enterprise directory identity ties the physical credential to the job owner; Universal Print uses Microsoft Entra ID identities expressed as a user principal name (UPN).",
        "Page description and transfer formats: generic pull printing carries ordinary print jobs in PDLs and raster formats such as PostScript, PCL, PDF, PWG Raster (image/pwg-raster), and Apple Raster (image/urf). Where the standards model applies, the Infrastructure Printer can transcode between formats; the exact format set supported by any given cloud service is defined by that service.",
        "Encryption: held spool files can be encrypted at rest, and Universal Print holds jobs securely in the cloud pending release."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "Microsoft provides the cloud spooling and release platform (Universal Print anywhere) and publishes the IPP infrastructure extensions that OEMs implement."
    },
    {
      "kind": "paragraph",
      "text": "Printer OEMs implement walk-up authentication and release in device firmware or terminal software. Microsoft documents published badge-release integrations from HP (HP Authentication Suite), Konica Minolta (listed as \"coming soon\"), and Datasec, and notes that support can extend to biometrics and NFC where the printer supports them. Badge release requires OEM enablement, is surfaced through a \"Pull-print Supported\" marker, and is not supported for printers managed by the Universal Print connector."
    },
    {
      "kind": "paragraph",
      "text": "Independent print-management vendors — including PaperCut, YSoft SAFEQ, Ringdale FollowMe, PrinterOn/eprintit, Equitrac, and uniFLOW — provide cross-vendor pull printing over mixed fleets, either on-premises or by integrating with a cloud platform as a partner. A partner cloud can act as an IPP Proxy on behalf of the printers it manages."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Pull printing remains a core enterprise print-security and cost-control mechanism and is a primary justification for cloud print platforms. It reduces abandoned or forgotten printouts left in output trays, enforces authenticated release of sensitive documents, and lets users retrieve a single job at whichever device is nearest."
    },
    {
      "kind": "paragraph",
      "text": "Cloud-native pull printing addresses a specific scaling problem: routing an entire tenant to one shared virtual queue can hit per-queue throughput and concurrency limits, so purpose-built pull-print infrastructure is used to absorb high, concentrated job volume without throttling. The model is also central to hybrid-work and zero-trust print strategies, where removing on-premises print servers while preserving secure release is an explicit goal."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"Pull printing means the printer stores the job.\" Usually the job is held on a server or in the cloud, not on the device; the device only fetches it at release. Some local-download configurations pre-stage a job to a release station, but that is a deployment choice, not the definition.",
        "\"Follow-me printing is a single proprietary product.\" \"FollowMe\" is a Ringdale trademark, \"Find-Me\" is PaperCut's term, and \"Secure Release Anywhere\" is PrinterOn/eprintit's term, but the underlying pull-printing pattern is generic and standardized through IPP hold/release and the PWG infrastructure extensions.",
        "\"Holding a job is the same as pausing or disabling the queue.\" Holding is per-job (job-hold-until = indefinite) or via Hold-New-Jobs, and is distinct from disabling a queue — though CUPS conveniently exposes hold through cupsdisable --hold.",
        "\"Authentication and release are the same step.\" Authentication maps a credential to an identity; release (Release-Job or Acknowledge-Job) is the separate action that actually schedules the job.",
        "\"Pull printing eliminates the print driver or PDL.\" The client still produces a normal job in a PDL; only the dispatch timing and destination change.",
        "\"Badge and QR-code release are interchangeable everywhere.\" In Universal Print, QR-code release is always available, but badge and biometric release are hardware-dependent and must be OEM-enabled."
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
          "text": "Ringdale dates its FollowMe print-roaming technology to this year (vendor claim)."
        },
        {
          "period": "September 2000",
          "text": "RFC 2911 (IPP/1.1) defines Hold-Job, Release-Job, and the job-hold-until attribute with the indefinite value."
        },
        {
          "period": "March 2005",
          "text": "RFC 3998 adds Hold-New-Jobs and Release-Held-New-Jobs."
        },
        {
          "period": "2015-06-19",
          "text": "PWG Candidate Standard 5100.18 (IPP Shared Infrastructure Extensions, INFRA) is published, defining the Infrastructure Printer, IPP Proxy, and Output Device roles."
        },
        {
          "period": "2025",
          "text": "PWG 5100.18-2025 (INFRA v1.1), dated 2025-05-02, is approved."
        },
        {
          "period": "2025–2026",
          "text": "Microsoft makes pull print (Universal Print anywhere) available, with secure release via QR code and OEM badge/biometric release built on the Mopria Cloud Specification."
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
      "slug": "secure-printing"
    },
    {
      "section": "guides",
      "slug": "print-management"
    },
    {
      "section": "history",
      "slug": "office-printing-in-the-1990s"
    },
    {
      "section": "guides",
      "slug": "enterprise-print-servers"
    },
    {
      "section": "tools",
      "slug": "ipp"
    },
    {
      "section": "tools",
      "slug": "cups"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between pull printing and direct printing?",
      "a": "In direct printing the client sends a job to one named queue bound to one device, and the printer starts imaging as soon as it receives the data, so the output appears whether or not the user is present. In pull printing the job is submitted to a shared virtual queue and held in a secure spool; it prints only after the user authenticates at an enrolled device and the held job is released."
    },
    {
      "q": "Is follow-me printing a proprietary product?",
      "a": "No. \"FollowMe\" is a registered trademark of Ringdale, \"Find-Me\" is PaperCut's term, and \"Secure Release Anywhere\" is PrinterOn/eprintit's term, but the underlying pull-printing pattern is generic and standardized. IPP defines Hold-Job, Release-Job, and job-hold-until, and the PWG's 5100.18 (INFRA) standard defines the infrastructure roles used for cloud-held pull printing."
    },
    {
      "q": "Where is a held job actually stored in pull printing?",
      "a": "Usually on a server or in the cloud spooler, not on the printer itself; the device only fetches the job at release time. Some deployments use a local-download configuration that pre-stages the job to a release station near the printer, but that is a deployment choice rather than part of the definition."
    },
    {
      "q": "How does pull printing work in Microsoft Universal Print?",
      "a": "Universal Print anywhere is Microsoft's cloud-native pull-print layer. Jobs are submitted to a pull-print printer and held securely in the cloud when \"Enable holding jobs until secure release\" is set on the printer share. At a device the user authenticates, and the device or proxy runs Get-Jobs, Fetch-Job, Fetch-Document, and Acknowledge-Job to release the job, with Update-Job-Status reporting the outcome. QR-code release is always available; badge and biometric release require OEM enablement."
    },
    {
      "q": "Can Linux and macOS do pull printing?",
      "a": "CUPS, which underlies both Linux and macOS printing, natively supports holding via job-hold-until (indefinite), the Hold-New-Jobs operation, and the cupsdisable --hold and cupsenable --release commands, plus CUPS-Move-Job. These are the hold/release primitives; full walk-up authentication and cross-device roaming are typically added by print-management software layered on top."
    }
  ],
  "sources": [
    {
      "title": "RFC 2911 — Internet Printing Protocol/1.1: Model and Semantics",
      "url": "https://www.rfc-editor.org/rfc/rfc2911.txt",
      "publisher": "IETF"
    },
    {
      "title": "RFC 3998 — IPP: Job and Printer Administrative Operations",
      "url": "https://www.rfc-editor.org/rfc/rfc3998.html",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "IPP Shared Infrastructure Extensions (INFRA), PWG 5100.18 (2015 Candidate Standard)",
      "url": "https://ftp.pwg.org/pub/pwg/candidates/cs-ippinfra10-20150619-5100.18.pdf",
      "publisher": "Printer Working Group"
    },
    {
      "title": "IPP Shared Infrastructure Extensions v1.1 (INFRA), PWG 5100.18-2025",
      "url": "https://ftp.pwg.org/pub/pwg/candidates/cs-ippinfra11-20250502-5100.18.pdf",
      "publisher": "Printer Working Group"
    },
    {
      "title": "PWG-Announce: PWG 5100.18-2025 approved",
      "url": "https://www.pwg.org/pipermail/pwg-announce/2025/004072.html",
      "publisher": "Printer Working Group"
    },
    {
      "title": "ippproxy(8) man page (ippsample)",
      "url": "https://istopwg.github.io/ippsample/ippproxy.html",
      "publisher": "IEEE-ISTO Printer Working Group"
    },
    {
      "title": "Universal Print anywhere overview",
      "url": "https://learn.microsoft.com/universal-print/fundamentals/universal-print-anywhere-overview",
      "publisher": "Microsoft"
    },
    {
      "title": "Job Release Settings for Universal Print anywhere and Secure Release",
      "url": "https://learn.microsoft.com/universal-print/fundamentals/universal-print-configure-job-release-settings",
      "publisher": "Microsoft"
    },
    {
      "title": "Using Badge Release for Universal Print Anywhere",
      "url": "https://learn.microsoft.com/universal-print/fundamentals/universal-print-badge-release-integration",
      "publisher": "Microsoft"
    },
    {
      "title": "Universal Print Anywhere OEM Badge Release Integration",
      "url": "https://learn.microsoft.com/universal-print/hardware/universal-print-oem-badge-release",
      "publisher": "Microsoft"
    },
    {
      "title": "Integrating Partner Cloud Pull Print Solutions with Universal Print Anywhere",
      "url": "https://learn.microsoft.com/universal-print/hardware/universal-print-anywhere-partner-cloud-integration-guide",
      "publisher": "Microsoft"
    },
    {
      "title": "cupsenable(8) / cupsdisable(8) man page",
      "url": "https://www.cups.org/doc/man-cupsenable.html",
      "publisher": "OpenPrinting / CUPS"
    },
    {
      "title": "FollowMe Printing",
      "url": "https://followme.ringdale.com/applications/followme_printing/",
      "publisher": "Ringdale"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "pull printing",
    "follow-me printing",
    "secure print release",
    "job-hold-until",
    "release-job",
    "ipp hold and release",
    "pwg 5100.18 infra",
    "universal print anywhere",
    "badge release",
    "cups hold job",
    "infrastructure printer",
    "ipp proxy"
  ],
  "cluster": "enterprise-print-management"
};

export default entry;
