import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "secure-printing",
  "title": "Secure Printing",
  "description": "How secure printing works: held/secure-release jobs, PIN and badge release, IPP TLS (ipps) transit encryption, and MFP data-at-rest protection.",
  "summary": "Secure printing is a family of composable print-subsystem behaviors that keep a document from emerging at a device until an authenticated, present user releases it, and that protect the job in transit and at rest. It combines held/secure-release jobs, release authentication at the device (PIN, badge, mobile app, or QR code), TLS transit encryption standardized for IPP as the ipps scheme, and encryption plus secure erasure of a multifunction printer's internal storage. These are largely independent standards and features that vendors bundle into a single \"secure print\" product.",
  "difficulty": "intermediate",
  "estimatedTime": "10 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Secure printing (also called secure release, pull printing, or \"follow-me\" printing) is a family of print-subsystem behaviors whose shared purpose is to keep a document from emerging at a device tray until an authenticated, physically present user authorizes it, and to protect the job's contents while it moves across the network and while it rests on the printer or multifunction printer (MFP)."
    },
    {
      "kind": "paragraph",
      "text": "The term covers several distinct, composable mechanisms:"
    },
    {
      "kind": "list",
      "items": [
        "Held / secure-release jobs — a job is queued in a held state rather than printed immediately.",
        "Release authentication at the device — the user unlocks the held job with a PIN, a proximity or badge card, a mobile app, or a QR-code scan.",
        "Encryption in transit — the submission channel is protected with TLS, standardized for the Internet Printing Protocol (IPP) as the ipps URI scheme and IPP-over-HTTPS binding.",
        "Data-at-rest protection — encryption of, and secure erasure from, the MFP's internal storage."
      ]
    },
    {
      "kind": "paragraph",
      "text": "These are largely independent standards and features that vendors combine into a single \"secure print\" product. The core problem being solved is the \"abandoned printout\": in shared-device environments, an immediately printed confidential document sits in the output tray for anyone to read or take. Secure release closes that window; transit encryption and at-rest protection close the network-sniffing and device-storage windows."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "The building blocks were standardized incrementally rather than as a single \"secure printing\" specification."
    },
    {
      "kind": "paragraph",
      "text": "The Internet Printing Protocol model (RFC 2911, September 2000) already defined OPTIONAL Hold-Job, Release-Job, and Restart-Job operations along with a job-hold-until job-template attribute — the primitive that lets a job wait in a held state until it is explicitly released. RFC 3998 (March 2005) added administrative operations at the printer level, including Hold-New-Jobs and Release-Held-New-Jobs."
    },
    {
      "kind": "paragraph",
      "text": "Transit security for IPP was originally attempted through the HTTP Upgrade mechanism. Because that approach proved unreliable in practice, the IETF and PWG defined a dedicated ipps scheme and IPP-over-HTTPS binding in RFC 7472 (March 2015)."
    },
    {
      "kind": "paragraph",
      "text": "In parallel, printer and MFP vendors built proprietary \"secure print\" and \"job storage\" features — PIN-protected stored jobs, disk overwrite, disk encryption — into device firmware, and third-party pull-printing servers grew up around them. Cloud print services later moved job holding and release orchestration into the cloud."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "A secure-printing deployment is layered across four planes:"
    },
    {
      "kind": "list",
      "items": [
        "Submission client — the operating-system print path (a driver or driverless IPP) that emits the job, optionally tagging it as held and attaching a release credential such as a user-chosen PIN.",
        "Spool / hold point — where the held job waits. This can be the submitting workstation, an on-premises print or release server, the target device's own storage (job storage), or a cloud service.",
        "Release authentication at the device — a control-panel PIN pad, an embedded or external card reader (proximity or smartcard), a mobile app, or a QR code, tied back to an identity provider.",
        "Device storage subsystem — the MFP's non-volatile media (HDD, SSD, or eMMC) plus its encryption and secure-erase firmware, which govern data-at-rest exposure."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The transport that connects the submission client to the hold point (and the hold point to the device) is where TLS via ipps applies. Authentication may be enforced at the transport layer (for example HTTP Basic or Digest over TLS, or OAuth) and at the device release step, independently."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "In the most common held-print flow, the user prints normally but the job is marked to be held. Depending on the product, the held job is retained on the workstation, a release server, the device itself, or the cloud. Nothing prints yet."
    },
    {
      "kind": "paragraph",
      "text": "The user walks to an enrolled device and authenticates — entering a PIN on the panel, tapping a badge on a reader, or scanning a QR code with a phone app — and the system then releases the matching job or jobs to that device for printing. Pull or \"follow-me\" printing generalizes this so that a single held job can be released at whichever device the user chooses."
    },
    {
      "kind": "paragraph",
      "text": "Vendor \"secure PIN\" printing is a device-local variant: the driver stores the job in the device's job-storage area behind a numeric PIN, and the job prints only when the PIN is entered at the panel."
    },
    {
      "kind": "paragraph",
      "text": "In IPP terms, the held state corresponds to a pending-held job that a Release-Job operation (or a device or UI equivalent) moves to pending or processing. Transit confidentiality is provided by TLS; RFC 7472 requires TLS 1.2 or higher for ipps connections. At-rest protection is handled by the device: encrypting the storage volume and overwriting job data after completion."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "The path a job takes through a secure-printing subsystem generally follows six steps:"
    },
    {
      "kind": "paragraph",
      "text": "1. Rendering and tagging — the client renders the job (as a page-description language or driverless IPP) and sets hold and release attributes and any PIN. 2. Encrypted submission — the job travels to the hold point. Over IPP this uses the ipps scheme (IPP over HTTPS/TLS, on port 631 by default per RFC 7472, which inherits the IPP port from RFC 2910), so the payload and IPP operation attributes are protected in transit. 3. Held storage — the job rests in the pending-held state at the chosen hold point (workstation, release server, device job-storage area, or cloud). If stored on an MFP disk, at-rest encryption applies here. 4. User authentication at the device — PIN entry, badge or card tap, mobile app, or QR scan validates identity against the release system or identity provider. 5. Release and imaging — the matching job is released (via Release-Job or a vendor equivalent), transferred to the device over a secured channel if not already present, rasterized, and printed. 6. Post-print cleanup — temporary job files are deleted; secure-erase firmware overwrites the storage regions so residual data cannot be recovered; and unreleased or expired jobs are purged."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "paragraph",
      "text": "Windows and Microsoft Universal Print. Universal Print is a cloud print service built on IPP and Mopria (driverless), authenticated with Microsoft Entra ID, that holds jobs in the cloud and supports secure release. An administrator enables holding jobs until secure release per printer share, and users release via a QR code scanned with the Microsoft 365 mobile app, integrated badge release, or a device secure PIN. Windows also supports Print Support Apps for vendor-specific features. Windows' local print path historically used the spooler and v3/v4 drivers, with driverless IPP the modern direction."
    },
    {
      "kind": "paragraph",
      "text": "macOS and Linux (CUPS). CUPS — the print system used by macOS and most Linux distributions — speaks IPP natively, supports the ipps secure transport, and supports IPP authentication; it can express held jobs via the IPP hold/release model. Driverless printing on these platforms is based on IPP Everywhere."
    },
    {
      "kind": "paragraph",
      "text": "Device firmware. The release-authentication interface, job-storage and PIN features, disk encryption, and secure-erase controls live in the printer or MFP firmware and its embedded web server, independent of the client operating system."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to standards"
    },
    {
      "kind": "list",
      "items": [
        "RFC 2911 (IPP/1.1 Model and Semantics, September 2000) — defines the OPTIONAL Hold-Job (§3.3.5), Release-Job (§3.3.6), and Restart-Job (§3.3.7) operations and the job-hold-until attribute (§4.2.2): the standardized primitive for held jobs. All are OPTIONAL, so a given printer may not implement them.",
        "RFC 3998 (IPP Job and Printer Administrative Operations, March 2005) — adds printer-level Hold-New-Jobs and Release-Held-New-Jobs and related administrative operations.",
        "RFC 7472 (IPP over HTTPS Transport Binding and the ipps URI Scheme, March 2015) — defines the ipps scheme and IPP-over-HTTPS binding, mandates TLS 1.2 or higher, and uses default port 631.",
        "PWG 5199.10-2019 (IPP Authentication Methods, IPPAUTH) — best-practice guidance that a printer should only challenge a client for authentication over a secure (TLS) connection; it references HTTP Basic (RFC 7617) and Digest (RFC 7616) and OAuth 2.0 bearer tokens.",
        "PWG 5100.14 (IPP Everywhere v1.1, 2020) — the driverless-printing baseline underpinning modern secure driverless submission.",
        "Newer PWG work — IPP System Service (PWG 5100.22, v1.1, 2025), IPP OAuth Extensions (PWG 5100.23, v1.0, 2025), and IPP Privacy Attributes (2018) extend the secure-printing surface. A prototype draft, \"IPP Encrypted Jobs and Documents\" (TRUSTNOONE), explores end-to-end job encryption but is a prototype draft, not a ratified standard."
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
        "TLS — the transport-security foundation for ipps and for authenticating release and administrative sessions.",
        "PKI and certificates — device and certificate-authority certificates enable certificate-based authentication and establish trust for ipps.",
        "Identity and access — cloud secure release ties the release step to an identity provider (for example Microsoft Entra ID), and OAuth is being standardized into IPP. Card release relies on proximity or smartcard technologies and directory lookups that map cards to users.",
        "Storage security — disk or volume encryption (AES) and secure-erase or overwrite algorithms protect at-rest data; self-encrypting drives push encryption into the media itself.",
        "Mobile — QR-code release and companion apps bring the release step to the user's phone."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "Vendor implementations layer proprietary features on the standards above; exact feature names and options vary by product and current documentation."
    },
    {
      "kind": "list",
      "items": [
        "HP — \"HP Secure Print\" holds a client-side, PIN-protected job for release. Device data-at-rest protection is provided by the HP Secure Hard Disk accessory, documented as hardware full-disk AES encryption (AES-128 by default, configurable to AES-256), together with secure-erase and overwrite features described in HP LaserJet Managed MFP hard-disk security documentation.",
        "Xerox — image and disk overwrite features and encryption of customer data at rest on device storage, per Xerox product-security documentation, plus PIN/secure-print and follow-you release in Xerox print-management products.",
        "Microsoft — Universal Print provides cloud-held jobs with QR, badge, and PIN release; it is a service and OS-level integrator rather than a hardware maker.",
        "Third-party pull-print platforms — release-station software that integrates across many device brands using the IPP held-job model and card-reader ecosystems."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Marketing terms such as \"secure print,\" \"private print,\" and \"follow-me\" map onto the same underlying held-job, device-authentication, and storage-protection primitives, but the names are not interchangeable across vendors."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Secure printing remains standard practice in healthcare, legal, financial, and government environments, where uncollected printouts are a confidentiality and compliance exposure."
    },
    {
      "kind": "paragraph",
      "text": "Several trends sustain its relevance. The shift to shared or floating desks and \"print-anywhere\" workforces favors pull printing, which follows the user to any device. The move to driverless IPP and cloud print relocates held jobs to cloud services and folds release into cloud identity. And heightened attention to MFP storage as a data repository — especially at device decommissioning — keeps encryption and secure erase in focus."
    },
    {
      "kind": "paragraph",
      "text": "Newer PWG efforts, including OAuth-based authentication and encrypted-jobs prototypes, indicate that the standards community is extending confidentiality from transit-only protection toward stronger end-to-end and identity-based models."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"Secure print encrypts my document.\" Held or secure-release printing primarily controls when and by whom a job is released. Confidentiality in transit is a separate concern handled by TLS (ipps), and at-rest protection is a separate device feature. A held job is not automatically encrypted end-to-end.",
        "\"IPP is inherently secure.\" Plain IPP (the ipp scheme, typically port 631) is not encrypted by default; security comes from the ipps/IPP-over-HTTPS binding (RFC 7472) and from authenticating over TLS.",
        "\"A PIN is strong authentication.\" Device PINs are convenience credentials — often short and reusable — and are weaker than badge, smartcard, or federated-identity release.",
        "\"Deleting a job clears it from the MFP.\" Without secure-erase or overwrite, job data can persist on the device's disk; at-rest encryption and secure erase are what actually mitigate storage recovery.",
        "\"Hold-Job and Release-Job are mandatory IPP features.\" They are OPTIONAL operations in RFC 2911; a given printer may not implement them.",
        "\"Pull printing is a single standard.\" It is a product pattern built from standard primitives plus proprietary release servers and readers; there is no single \"pull printing\" protocol."
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
          "period": "2000",
          "text": "RFC 2911 (IPP/1.1) defines the OPTIONAL Hold-Job, Release-Job, and Restart-Job operations and the job-hold-until attribute."
        },
        {
          "period": "2005",
          "text": "RFC 3998 adds IPP administrative operations, including Hold-New-Jobs and Release-Held-New-Jobs."
        },
        {
          "period": "2015",
          "text": "RFC 7472 defines the ipps URI scheme and IPP-over-HTTPS binding, mandating TLS 1.2 or higher."
        },
        {
          "period": "2018",
          "text": "PWG publishes the IPP Privacy Attributes registration."
        },
        {
          "period": "2019",
          "text": "PWG 5199.10 IPP Authentication Methods (IPPAUTH) best practice is published."
        },
        {
          "period": "2020",
          "text": "PWG 5100.14 IPP Everywhere v1.1 establishes the driverless baseline."
        },
        {
          "period": "2023",
          "text": "Microsoft documents Universal Print secure release with a QR code."
        },
        {
          "period": "2025",
          "text": "PWG publishes IPP OAuth Extensions (PWG 5100.23) and IPP System Service v1.1 (PWG 5100.22); the IPP Encrypted Jobs and Documents (TRUSTNOONE) work exists as a prototype draft."
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
      "slug": "pull-printing"
    },
    {
      "section": "guides",
      "slug": "print-management"
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
    },
    {
      "section": "guides",
      "slug": "what-is-a-print-server"
    }
  ],
  "faqs": [
    {
      "q": "Does secure printing encrypt my document?",
      "a": "Not by itself. Held or secure-release printing controls when and by whom a job is released. Confidentiality in transit is a separate matter handled by TLS using the IPP `ipps` scheme (RFC 7472), and protection of data stored on the printer is a separate device feature. A held job is not automatically encrypted end-to-end."
    },
    {
      "q": "What is the difference between secure release and pull printing?",
      "a": "Secure release means a job is held and only prints after the user authenticates at the device. Pull or \"follow-me\" printing generalizes this so a single held job can be released at whichever enrolled device the user chooses. Both are built from the same held-job and device-authentication primitives; there is no single \"pull printing\" protocol."
    },
    {
      "q": "Is standard IPP printing secure?",
      "a": "Plain IPP (the `ipp` scheme, typically on port 631) is not encrypted by default. Security comes from the `ipps`/IPP-over-HTTPS binding defined in RFC 7472, which mandates TLS 1.2 or higher, and from authenticating over that TLS connection."
    },
    {
      "q": "Are the IPP hold and release operations always available?",
      "a": "No. Hold-Job, Release-Job, Restart-Job, and the `job-hold-until` attribute are defined as OPTIONAL in RFC 2911, so a given printer may not implement them. RFC 3998 later added printer-level Hold-New-Jobs and Release-Held-New-Jobs operations, also optional."
    },
    {
      "q": "Does deleting a print job remove it from the printer's storage?",
      "a": "Not necessarily. Without secure-erase or overwrite, job data can persist on an MFP's internal disk. At-rest encryption and secure-erase or overwrite features are what actually mitigate recovery of residual job data, which matters especially when a device is decommissioned."
    }
  ],
  "sources": [
    {
      "title": "RFC 7472 — IPP over HTTPS Transport Binding and the 'ipps' URI Scheme",
      "url": "https://www.rfc-editor.org/rfc/rfc7472.html",
      "publisher": "IETF"
    },
    {
      "title": "RFC 2911 — Internet Printing Protocol/1.1: Model and Semantics",
      "url": "https://datatracker.ietf.org/doc/html/rfc2911",
      "publisher": "IETF"
    },
    {
      "title": "RFC 3998 — IPP: Job and Printer Administrative Operations",
      "url": "https://datatracker.ietf.org/doc/html/rfc3998",
      "publisher": "IETF"
    },
    {
      "title": "IPP Authentication Methods (IPPAUTH), PWG 5199.10-2019",
      "url": "https://ftp.pwg.org/pub/pwg/informational/bp-ippauth10-20190816-5199.10.pdf",
      "publisher": "Printer Working Group"
    },
    {
      "title": "Internet Printing Protocol Workgroup (specification index)",
      "url": "https://www.pwg.org/ipp/",
      "publisher": "Printer Working Group"
    },
    {
      "title": "Secure Release with QR Code — Universal Print",
      "url": "https://learn.microsoft.com/en-us/universal-print/fundamentals/universal-print-qrcode",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Manage the HP Secure Hard Disk",
      "url": "https://support.hp.com/us-en/document/c01566924",
      "publisher": "HP"
    },
    {
      "title": "HP LaserJet Managed MFP hard disk security (white paper)",
      "url": "https://h10032.www1.hp.com/ctg/Manual/c05475902.pdf",
      "publisher": "HP"
    },
    {
      "title": "Xerox Product Security Frequently Asked Questions",
      "url": "https://www.xerox.com/en-us/information-security/frequently-asked-questions",
      "publisher": "Xerox"
    },
    {
      "title": "CUPS Implementation of IPP",
      "url": "https://www.cups.org/doc/spec-ipp.html",
      "publisher": "OpenPrinting/CUPS"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "secure printing",
    "secure release printing",
    "pull printing",
    "held print job",
    "ipps",
    "ipp over https",
    "secure pin print",
    "mfp data at rest",
    "universal print secure release",
    "follow-me printing"
  ],
  "cluster": "enterprise-print-management"
};

export default entry;
