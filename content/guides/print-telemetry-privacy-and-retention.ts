import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  section: "guides",
  slug: "print-telemetry-privacy-and-retention",
  title: "Print Telemetry, Privacy, and Retention Limits",
  description:
    "What a print, scan, copy or fax job records about the person who sent it, which layer of the stack holds that record, and what actually limits how long it is kept.",
  summary:
    "Every completed print job leaves a small dossier behind: a user name the printer was required to obtain, the host the job came from, the title of the document, a timestamp, and often a billing code. None of that was assembled to watch anyone. It was assembled to answer a question about money — which department consumed this paper, and who should be charged for it. The identity data is a byproduct of the billing question, and it has comfortably outlived it. What makes print telemetry awkward to govern is not that the standards were careless about privacy; it is that they were deliberate about accounting first, and every privacy and retention control since has had to be retrofitted onto a substrate that was designed to remember.",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "The person-linked fields in a print job exist for accounting, not for surveillance. RFC 8011 makes \"job-originating-user-name\" a REQUIRED Job attribute.",
        "Three different layers hold three different kinds of record: device counters (Printer MIB), protocol job attributes (IPP), and host spooler logs (such as the CUPS page log). Only two of them are person-linked, and a retention control aimed at one does not reach the others.",
        "RFC 8011 partitions a job's afterlife into retention, history and removal phases — and leaves the duration of each implementation-defined. A standardised, client-settable limit only arrived with \"job-retain-until\" in PWG 5100.7-2023, which still accepts \"indefinite\" as a legal value.",
        "The discovery mechanism for privacy policy came later still: the PWG's IPP Privacy Attributes v1.0 registration (12 April 2018) exists because RFC 8011 defined privacy policies without any way for a client to find out what they were.",
        "The widely repeated retention rules — that HIPAA sets six years for audit logs, that the GDPR sets a fixed number of days, that CUPS logs every page by default — are not accurate as usually stated. Each is an attempt to borrow a decision the standards deliberately left to the operator.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "The record was built to answer a billing question",
    },
    {
      kind: "paragraph",
      text: "Charging for output is older than networked printing. Departmental copiers were metered with key counters, mainframe and Unix print spoolers kept per-user tallies, and cost recovery for shared equipment was ordinary office practice long before any of it was written down as a protocol; NARA's General Records Schedule 3.2 still names the resulting records separately, as \"cost-back files used to assess charges for system use\". It is worth resisting the common claim that print job accounting was invented for networked printers in the 1990s. What the 1990s produced was codification: an agreed vocabulary for practices that already existed, so that a printer from one vendor and an accounting package from another could describe the same job in the same terms.",
    },
    {
      kind: "paragraph",
      text: "The clearest early statement of that vocabulary is the Job Monitoring MIB, published as RFC 2707 in November 1999. It is worth stating its status precisely, because it is often overstated: RFC 2707 is Informational, published to make the work available rather than as an IETF endorsement of the MIB it describes. Its content, though, is unambiguous about purpose. It defines an object for the job's owner, an object for a submission identifier, and it names an \"Accountant\" role concerned with charging users or groups for resources consumed. It also introduced the idea that would matter most later: a job-retention period after a job completes, during which accounting programs can copy the accounting data out of the MIB.",
    },
    {
      kind: "paragraph",
      text: "That is the substrate. A retention window exists in the model not as a privacy limit but as a collection opportunity — a period during which the data must still be there, so that a billing system can harvest it. Everything the rest of this page describes is an attempt to impose a ceiling on a structure whose original function was to guarantee a floor.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Three layers, and only one of them is not about you",
    },
    {
      kind: "paragraph",
      text: "The most common analytical mistake in print privacy work is treating \"print logs\" as a single thing. They are not. A fleet holds three distinct bodies of telemetry — device counters, protocol job attributes and host spooler logs — produced by different mechanisms, held in different places, and reachable by different controls. On a multifunction device a fourth, the security audit trail, sits alongside them and is governed separately again.",
    },
    {
      kind: "table",
      caption:
        "Where print telemetry lives, and what a retention control at each layer can actually reach",
      headers: [
        "Layer",
        "Typical content",
        "Person-linked?",
        "What governs its lifetime",
      ],
      rows: [
        [
          "Device counters (Printer MIB v2, RFC 3805)",
          "Impression and sheet counts, marker and consumable state, media and input/output subunit status",
          "No — these are aggregate device statistics, not per-person records",
          "Device firmware and the management system that polls it; counters generally persist for the life of the device",
        ],
        [
          "Protocol job attributes (IPP, RFC 8011 and PWG extensions)",
          "job-originating-user-name, requesting-user-name, job-name, job-account-id, job-accounting-user-id, timestamps, job state",
          "Yes — the user name is a required attribute and the account id may carry a billing or customer identifier",
          "The job lifecycle phases of RFC 8011, plus job-retain-until and its interval/time companions where PWG 5100.7-2023 is implemented",
        ],
        [
          "Host spooler logs (for example the CUPS page log, or a Windows print service event log)",
          "Whatever the log format string names — commonly printer, user, job id, timestamp, page and copy counts, originating host and document title",
          "Yes, and often at page granularity rather than job granularity",
          "Local logging configuration and log rotation on the host; no printing standard reaches it at all",
        ],
        [
          "Device audit trail (a security function on many MFPs)",
          "Authentication attempts, job completion events with job type, administrative actions",
          "Yes — under the collaborative Protection Profile for Hardcopy Devices v1.0 (2022), audit records must be associable with a user identity; on uncertified devices this depends on the vendor",
          "The device's own audit storage policy and any configured export to an external collector",
        ],
      ],
    },
    {
      kind: "paragraph",
      text: "The practical consequence is that setting a retention limit in one layer tells you nothing about the others. A site that configures a short job-retention window on its printers, and believes it has therefore limited what it keeps about who printed what, may still be holding a year of page-level records in a host log file that no printing standard governs — and a security audit trail on the device that was configured by a completely different team for a completely different reason.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What the protocol requires the printer to know",
    },
    {
      kind: "paragraph",
      text: "The current model for internet printing is RFC 8011, published in January 2017, which obsoletes RFC 2911 along with RFC 3381 and RFC 3382, and now carries the designation STD 92. Anything that cites RFC 2911 as the live IPP model — still very common in secondary write-ups — is describing a superseded document.",
    },
    {
      kind: "paragraph",
      text: "In RFC 8011 the identity field is not optional. \"job-originating-user-name\" is a REQUIRED Job attribute, which the Printer sets to the most authenticated printable name it can obtain from the authentication service; where no authentication service supplies one, it falls back to the client-supplied \"requesting-user-name\". Read plainly, this is a specification instructing the device to record the best identification available to it, and to record something regardless. There is no conformant configuration in which a job simply has no originating user.",
    },
    {
      kind: "paragraph",
      text: "The accounting extensions add more. PWG 5100.7-2023, IPP Job Extensions v2.1 (JOBEXT), dated 10 February 2023, defines \"job-account-id\" as the account associated with the job — and its own text illustrates the range of what that field may contain: a customer name, a sequence of digits referencing an internal billing number, or even a credit card number. It is difficult to find a more direct demonstration that print telemetry is not confined to technical metadata. The same specification defines \"job-accounting-user-id\", separating the identity used for charging from the identity used for submission.",
    },
    {
      kind: "callout",
      tone: "warning",
      title: "Cite PWG specifications by title and year, never by number alone",
      text: "PWG document numbers are reused across generations. PWG 5100.7 today is IPP Job Extensions v2.1 (2023); PWG 5100.11 today is IPP Enterprise Printing Extensions v2.0 (2024); PWG 5100.13 was Job and Printer Extensions Set 3 in 2012 but the 2023 document under that number is IPP Driver Replacement Extensions v2.0. A bare \"PWG 5100.x\" citation can point at an entirely different specification depending on when it was written. When you need to confirm that an attribute exists and which document defines it, the IANA IPP Registrations file is the authoritative index — attribute names that do not appear there do not exist.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The spooler log is a separate decision, and usually an unexamined one",
    },
    {
      kind: "paragraph",
      text: "Host-side logging is where the richest per-person record often lives, and where the fewest deliberate choices tend to have been made. The CUPS page log is the canonical example, and it repays reading the documentation rather than the folklore.",
    },
    {
      kind: "paragraph",
      text: "The PageLogFormat directive in cupsd.conf accepts format sequences: %u inserts the user name, %j the job id, %p the printer, %T a timestamp, and %{name} the value of any named IPP attribute. The documented standard-items string combines printer, user, job id, timestamp, page and copy counts, the job-billing value, the originating host name, the job name, the media and the sides setting — that is, the user, the machine they sent from, and the title of their document, recorded per page.",
    },
    {
      kind: "paragraph",
      text: "But the same documentation states that the default is the empty string, which disables page logging. The widely quoted format line is an example, not a shipped default. This distinction matters more than it may appear: it separates \"what this software is capable of recording\" from \"what a stock installation actually records\", and those two claims call for entirely different remediation. Before writing a policy about print log retention, it is worth establishing empirically which of these layers on this site is actually populated, and with what.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Copy, scan and fax leave records of their own",
    },
    {
      kind: "paragraph",
      text: "A multifunction device is not only a printer, and its audit surface is broader than its print path. The collaborative Protection Profile for Hardcopy Devices v1.0, dated 31 October 2022, is a useful reference here precisely because it describes person-linked auditing as a certification requirement rather than a vendor extra. Its audit-generation requirements list job completion as an auditable event with the type of job recorded as additional information; for unsuccessful authentication it calls for the supplied user id or name and the origin of the attempt, such as an IP address. A separate requirement states that the device shall be able to associate each auditable event with the identity of the user that caused it. Further requirements restrict who may review the audit trail, protect the stored trail from modification, and cover export of audit data to an external IT entity.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Three hardcopy security documents, routinely conflated",
      text: "IEEE 2600-2008 (with its associated 2600.1 to 2600.4 protection profiles) is one thing; the Protection Profile for Hardcopy Devices v1.0 dated 10 September 2015 is another; and the collaborative Protection Profile for Hardcopy Devices v1.0 dated 31 October 2022 is a third. Their audit requirements are not identical. Any statement about what \"the hardcopy protection profile\" requires should name the document, its version and its date.",
    },
    {
      kind: "paragraph",
      text: "Fax deserves particular care, because three quite different mechanisms are frequently merged into a single claim. The human-readable identification line printed across a transmitted page is a jurisdictional labelling requirement in some countries and a function of the sending machine's configuration. The subscriber-identification signalling exchanged between machines during call setup is defined in ITU-T Recommendation T.30 — the in-force edition being T.30 (09/2005) with Amendment 1 (01/2007) — and is a protocol matter, not a printing one. The stored activity journal and confirmation reports a machine keeps or prints are a third thing again, and are the ones that constitute retained telemetry on the device. Statements about fax identification should say which of the three they mean, and any claim about specific T.30 signalling frames or about a particular regulator's labelling rule should be checked against the Recommendation text or the rule text rather than repeated from summaries.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Identification carried on the page itself",
    },
    {
      kind: "paragraph",
      text: "Not all print telemetry is in a log. Some colour laser printers add a faint pattern of yellow dots to output — a machine identification code — which researchers have shown can encode information tying a printed sheet to a device and a time. This is the part of the subject where the published record is thinnest and the confident retelling is thickest, so it is worth being explicit about what is and is not established.",
    },
    {
      kind: "paragraph",
      text: "The Electronic Frontier Foundation's work on printer dot patterns is the origin of most public knowledge here, including the decoding of a grid used by one specific printer family. Two limits follow directly from that work. First, behaviour varies by model: the EFF maintains its own list of printers that do and do not display tracking dots, which would be pointless if the practice were universal. Second, a decoding derived from one family does not generalise; monochrome laser printers, in particular, do not generally carry the yellow-dot pattern for the simple reason that they have no yellow toner.",
    },
    {
      kind: "editorialAside",
      title: "What the archive will not assert about yellow dots",
      text: "There is no established first printer, first date, or named inventor for machine identification codes in the published record. Claims that a particular 1980s or 1990s model was the first, that a secret arrangement with a national law-enforcement agency mandates the practice, or that a central-bank counterfeit-deterrence body requires dot marking, are widely repeated and unsupported by any primary document. No patent number can be attached to the practice on the strength of the public record as it stands. Separately, the 2017 prosecution that made this subject briefly famous is usually retold as a case of microdots catching a leaker; the charging affidavit filed in the case, rather than the dot decoding, is where the investigative narrative actually sits — the decoding was performed afterwards by outside researchers working from the published scan. The case is a fair illustration of the moment printer telemetry entered public awareness. It is not evidence about investigative method.",
    },
    {
      kind: "figure",
      image: {
        src: "/images/guides/print-telemetry-privacy-and-retention--machine-identification-dots.jpg",
        alt: "Enlarged view of a printed page showing a sparse grid of small yellow dots against paper, with a centimetre ruler along one edge for scale",
        width: 1400,
        height: 1346,
        caption: "Machine identification dots on a printed page, shown against a centimetre scale. The pattern is laid down by many colour laser printers and is readable without any cooperation from the print queue \u2014 identification carried on the sheet rather than in a log.",
        credit: {
          source: "Parhamr, via Wikimedia Commons",
          url: "https://commons.wikimedia.org/wiki/File:Printer_Steganography_Illustration.png",
          license: "Public domain",
        },
      },
    },
    {
      kind: "heading",
      level: 2,
      text: "Retention is the part the standards declined to decide",
    },
    {
      kind: "paragraph",
      text: "RFC 8011 does describe what happens to a job after it finishes. It partitions the life cycle into a phase in which the job is not yet completed, a job-retention phase, a job-history phase, and finally job removal. What it does not do is say how long any of those phases last. The durations are implementation-defined; the specification's one concrete figure is a recommendation that printers keep a job in the job-history phase for at least sixty seconds — a floor, not a ceiling, and a very short one.",
    },
    {
      kind: "paragraph",
      text: "Nor is the specification unaware that this data is sensitive. Its security considerations acknowledge that information stored in the job object can be considered personal or sensitive in nature, and can be filtered out as part of a configured privacy policy. The awareness is there; the number is not. That is a design choice, and arguably the right one for a protocol that has to serve a print shop, a hospital and a university library at once. But it means the decision was handed to the operator, and most sites have never consciously taken delivery of it.",
    },
    {
      kind: "paragraph",
      text: "A standardised limit did eventually arrive. PWG 5100.7-2023 defines \"job-retain-until\", with keyword values including end-of-day, end-of-week, end-of-month, indefinite and none, alongside \"job-retain-until-interval\" expressed in seconds and \"job-retain-until-time\" for an absolute moment. This is a genuine, client-settable ceiling on retained job data — and it is worth noticing that \"indefinite\" is among the legal values. The standard supplies the mechanism and declines, again, to supply the policy.",
    },
    {
      kind: "editorialAside",
      title: "The deprecated eraser",
      text: "There is a revealing detail in RFC 8011's operation set. Purge-Jobs, which removes jobs from a printer wholesale, is deprecated — and the stated reason is that it destroys printer accounting information. Operators who want to clear jobs without clearing the history are pointed instead at cancelling jobs individually. Read the deprecation as an artefact of priorities: at the moment the standard had to choose between the convenience of a bulk erase and the integrity of the accounting record, it chose the accounting record. That is the substrate this page describes, expressed in a single operation.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The constraint arrived afterwards, and had to be retrofitted",
    },
    {
      kind: "paragraph",
      text: "The privacy machinery in IPP is younger than the accounting machinery by a wide margin, and its own rationale says why it exists. The PWG's IPP Privacy Attributes v1.0 is an IPP Registration dated 12 April 2018 — not a PWG Candidate Standard, and not an IETF RFC, so citing it as \"PWG 5100.something\" or as an RFC would be a fabricated citation. Its IANA reference tag is IPPPRIVACY10.",
    },
    {
      kind: "paragraph",
      text: "The registration defines \"job-privacy-attributes\" and \"job-privacy-scope\", document- and subscription-level equivalents, and \"printer-privacy-policy-uri\". Its stated rationale is that RFC 8011 defines general access rights and privacy policies but does not define a way for clients to discover what those specific rights and policies are, and it notes that many countries require explicit or implied consent when personal and confidential data are processed. The scope keyword \"owner\" restricts private job attributes to the job's owner — which is to say, the mechanism by which a printer can decline to tell one user what another user printed had to be added as a registration two decades into the protocol's life.",
    },
    {
      kind: "paragraph",
      text: "Outside the printing standards, the frame is general log-management and records practice rather than anything printer-specific. NIST SP 800-92, Guide to Computer Security Log Management (2006), is the baseline federal guidance on deciding what to log, where to retain it and for how long, including archival when the originating system cannot hold data long enough; a revision, SP 800-92r1, has appeared in initial public draft. In the United States federal records context, NARA's General Records Schedule 3.2, Information Systems Security Records (Transmittal No. 33, January 2023), is unusually on point: its item 030 for system access records expressly covers audit trail files and extracts, system usage files, and cost-back files used to assess charges for system use — print accounting data by any other name — with a disposition of \"Temporary. Destroy when business use ceases.\" Item 031, for systems requiring special accountability, sets destruction six years after the password is altered or the user account is terminated, with longer retention authorised if required for business use.",
    },
    {
      kind: "paragraph",
      text: "In the European frame, workplace print logging is a monitoring question before it is a technical one. The Article 29 Data Protection Working Party's Opinion 2/2017 on data processing at work (WP249), adopted in 2017, is the regulator text on employer monitoring of workplace ICT, and its proportionality and necessity reasoning is the right frame for logging who printed what on a shared office device. The GDPR's own storage-limitation principle is, as its name indicates, a purpose-bound test rather than a fixed term, and the Regulation supplies no period for logs of any kind. Any specific figure attributed to it has come from somewhere else.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Borrowed decisions",
    },
    {
      kind: "researchInset",
      title: "Frequently misstated about print log retention",
      items: [
        "\"HIPAA requires six years of audit logs.\" 45 CFR 164.316(b)(2)(i) requires retaining the documentation required by 164.316(b)(1) — policies, procedures and required written records — for six years from creation or from the date it was last in effect, whichever is later. It does not set a retention period for system or print audit logs. 164.312(b) requires audit controls but names no duration. State law and payer contracts, not HIPAA, usually drive log retention.",
        "\"The GDPR says delete print logs after N days.\" No such number exists in the Regulation. Storage limitation is a purpose-bound test. Any specific figure attributed to the GDPR has been supplied by the person quoting it.",
        "\"CUPS logs every printed page by default.\" The cupsd.conf documentation states that PageLogFormat's default is the empty string, which disables page logging. The username-and-document-title format string everyone quotes is the documented example, not the shipped default.",
        "\"Print accounting arrived with networked printers in the 1990s.\" The Job Monitoring MIB (1999) and IPP codified existing practice — Unix and mainframe spooler accounting, copier key counters, departmental cost-back charging. NARA's GRS 3.2 still names cost-back files as their own record type. This is codification, not invention.",
        "\"IPP privacy attributes are part of the Job Extensions specification.\" They are not. They come from a separate PWG IPP Registration dated 12 April 2018, tagged IPPPRIVACY10 in the IANA registry.",
      ],
    },
    {
      kind: "paragraph",
      text: "What links these claims is not that people are careless. It is that each one is an attempt to import a decision from an authority that never made it. The standards refused to set a number; the regulations set a test rather than a number; so the number gets borrowed from whichever adjacent rule sounds most official. The result is a retention period nobody chose, defended by a citation that does not say what it is claimed to say.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Making the decision instead of inheriting it",
    },
    {
      kind: "steps",
      steps: [
        {
          title: "Inventory by layer, not by device",
          text: "Establish separately what device counters hold, what job attributes your printers retain and for how long, what your host spoolers are configured to log, and whether device audit trails are enabled and exported. A single \"print logs\" line in a data inventory almost always conceals at least two of these.",
        },
        {
          title: "Find out what is actually populated",
          text: "Read the live configuration rather than assuming a default. Check the page log format string on the print host, check whether job-account-id or job-accounting-user-id are being set by clients, and check what the MFP's audit function is recording. The gap between what a system can record and what it does record is often the whole finding.",
        },
        {
          title: "Name the purpose for each field, then test it",
          text: "Cost recovery justifies an account identifier and a page count. Security investigation justifies an audit trail with user identity. Neither obviously justifies retaining document titles at page granularity for a year. Fields whose purpose has lapsed — the departmental chargeback scheme that ended three budget cycles ago — are the clearest candidates for removal.",
        },
        {
          title: "Set a ceiling at each layer, and expect them to differ",
          text: "Where PWG 5100.7-2023 retention attributes are implemented, job-retain-until and its interval and time forms give a protocol-level ceiling, but leaving it unset is not the same as setting it short. Host log lifetimes are governed by log rotation and nothing else. Device audit storage is governed by the device.",
        },
        {
          title: "Use the privacy attributes where devices support them",
          text: "job-privacy-attributes with a scope of owner is the mechanism for keeping one user's job details out of another user's view, and printer-privacy-policy-uri is the mechanism for publishing what the policy is. Support varies, so verify on the actual fleet rather than assuming; and if a device does not implement them, that is itself a finding about what your users can see about each other.",
        },
        {
          title: "Write down the number and the reason together",
          text: "The value of an explicit retention period is not the period; it is the recorded reasoning attached to it, which is what allows the decision to be defended, reviewed and changed. A number without a purpose is exactly the inherited default this page is about.",
        },
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "Timeline",
    },
    {
      kind: "timeline",
      events: [
        {
          period: "November 1999",
          text: "RFC 2707, Job Monitoring MIB v1.0, published as Informational. Defines a job owner object, a submission identifier, an Accountant role concerned with charging for resources consumed, and a job-retention period during which accounting programs can copy accounting data out.",
        },
        {
          period: "June 2004",
          text: "RFC 3805, Printer MIB v2, published on the Standards Track, obsoleting RFC 1759. Establishes the device-level counter and status model that sits underneath fleet reporting — device telemetry, distinct from person-linked job telemetry.",
        },
        {
          period: "2006",
          text: "NIST SP 800-92, Guide to Computer Security Log Management, published — the general frame for deciding what to log, where to retain it and for how long. A revision, SP 800-92r1, later appears in initial public draft.",
        },
        {
          period: "2008",
          text: "IEEE 2600-2008 published, covering authentication, authorisation, privacy, integrity and device management for printers, copiers and multifunction devices; associated protection profiles 2600.1 to 2600.4 follow.",
        },
        {
          period: "January 2017",
          text: "RFC 8011 published, obsoleting RFC 2911, RFC 3381 and RFC 3382, and later designated STD 92. Makes job-originating-user-name a REQUIRED Job attribute, and partitions the job life cycle into implementation-defined retention, history and removal phases.",
        },
        {
          period: "2017",
          text: "Article 29 Data Protection Working Party adopts Opinion 2/2017 on data processing at work (WP249), the European regulator text framing employer monitoring of workplace ICT as a proportionality and necessity question.",
        },
        {
          period: "12 April 2018",
          text: "The PWG registers IPP Privacy Attributes v1.0, adding job-privacy-attributes, job-privacy-scope, document and subscription equivalents, and printer-privacy-policy-uri — because RFC 8011 defined privacy policies without a way for clients to discover them.",
        },
        {
          period: "31 October 2022",
          text: "collaborative Protection Profile for Hardcopy Devices v1.0 issued, treating person-linked audit records for job completion and authentication events as a certification requirement, with protections on review, storage and export of the trail.",
        },
        {
          period: "January 2023",
          text: "NARA General Records Schedule 3.2, Information Systems Security Records, Transmittal No. 33, covering audit trail files, system usage files and cost-back files used to assess charges for system use.",
        },
        {
          period: "10 February 2023",
          text: "PWG 5100.7-2023, IPP Job Extensions v2.1 (JOBEXT), standardises job-retain-until, job-retain-until-interval and job-retain-until-time — a client-settable retention limit on retained job data.",
        },
        {
          period: "2024",
          text: "PWG 5100.11-2024, IPP Enterprise Printing Extensions v2.0 (EPX), carries the held-job and release machinery associated with pull printing, including the job-release-action attribute registered against it in the IANA IPP registry.",
        },
      ],
    },
    {
      kind: "paragraph",
      text: "Laid out in order, the asymmetry is hard to miss. The accounting substrate was in place by the end of the 1990s. The mechanism for a client to discover a printer's privacy policy arrived in 2018. A standardised retention limit on retained job data arrived in 2023, roughly two and a half decades after the standardised retention period that exists to let accountants copy the data out. Retention is not a gap the standards forgot to close; it is a decision they consistently declined to make on the operator's behalf.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Reference scope",
      text: "This is a neutral technical and historical reference on print, scan, copy and fax telemetry. Where the published record is contested — machine identification codes in particular — the disagreement is described rather than resolved. It is not legal advice, and the regulatory material cited here is summarised for orientation only; retention obligations depend on jurisdiction, sector and contract, and should be checked against the current rule text. Sources consulted are listed below.",
    },
  ],
  related: [
    { section: "guides", slug: "print-job-accounting" },
    { section: "guides", slug: "secure-printing" },
    { section: "workflows", slug: "records-compliance" },
    { section: "workflows", slug: "shared-printer-workflows" },
    { section: "guides", slug: "snmp-printer-monitoring" },
  ],
  faqs: [
    {
      q: "Does a print job have to record who sent it?",
      a: "Under RFC 8011, yes. \"job-originating-user-name\" is a REQUIRED Job attribute, which the Printer sets to the most authenticated printable name it can obtain from the authentication service, falling back to the client-supplied \"requesting-user-name\" when no authentication service supplies one.",
    },
    {
      q: "Is there a standard maximum retention period for print job data?",
      a: "Not a mandated one. RFC 8011 leaves the durations of its job-retention, job-history and job-removal phases implementation-defined, offering only a recommendation that a job stay in the job-history phase for at least sixty seconds. PWG 5100.7-2023 later added job-retain-until, job-retain-until-interval and job-retain-until-time so a client can set a ceiling, but \"indefinite\" is one of the permitted values. The period is an operator decision.",
    },
    {
      q: "Does HIPAA require six years of print or audit logs?",
      a: "Not as usually stated. 45 CFR 164.316(b)(2)(i) sets six years for the documentation required by 164.316(b)(1) — policies, procedures and required written records — measured from creation or the date it was last in effect, whichever is later. 164.312(b) requires audit controls without naming a duration. Log retention periods in healthcare settings usually come from state law or payer contracts rather than from HIPAA itself.",
    },
    {
      q: "Does CUPS record every page I print?",
      a: "Only if it has been configured to. The cupsd.conf documentation states that the PageLogFormat default is the empty string, which disables page logging. The often-quoted format string containing user name, originating host and document title is the documented standard-items example, not the shipped default, so the honest answer for any given site is to read its actual configuration.",
    },
    {
      q: "Do all printers add tracking dots to their output?",
      a: "No. The pattern is associated with colour laser output, and behaviour varies by model — the Electronic Frontier Foundation maintains a list precisely because it is not universal. Monochrome laser printers generally do not carry a yellow-dot pattern. Published decoding work is specific to particular printer families and does not generalise, and there is no verifiable first device, date or inventor in the public record.",
    },
    {
      q: "Is Purge-Jobs the right way to clear a printer's job history?",
      a: "RFC 8011 deprecates Purge-Jobs and states that new implementations should not support it, because it destroys Printer accounting information. Operators wanting to clear jobs without destroying the history are directed to cancelling jobs individually instead.",
    },
  ],
  sources: [
    {
      title:
        "RFC 8011 — Internet Printing Protocol/1.1: Model and Semantics (STD 92)",
      url: "https://www.rfc-editor.org/rfc/rfc8011.txt",
      publisher: "IETF (Sweet & McDonald), January 2017",
    },
    {
      title: "IPP Privacy Attributes v1.0 (PRIVACY) — IPP Registration",
      url: "https://ftp.pwg.org/pub/pwg/ipp/registrations/reg-ippprivacy10-20180412.pdf",
      publisher: "The Printer Working Group, 12 April 2018",
    },
    {
      title: "PWG 5100.7-2023 — IPP Job Extensions v2.1 (JOBEXT)",
      url: "https://ftp.pwg.org/pub/pwg/candidates/cs-ippjobext21-20230210-5100.7.pdf",
      publisher: "The Printer Working Group, 10 February 2023",
    },
    {
      title:
        "PWG 5100.11-2024 — IPP Enterprise Printing Extensions v2.0 (EPX)",
      url: "https://ftp.pwg.org/pub/pwg/candidates/cs-ippepx20-20240315-5100.11.pdf",
      publisher: "The Printer Working Group, 2024",
    },
    {
      title: "Internet Printing Protocol (IPP) Registrations",
      url: "https://www.iana.org/assignments/ipp-registrations/ipp-registrations.txt",
      publisher: "IANA",
    },
    {
      title: "RFC 2707 — Job Monitoring MIB v1.0 (Informational)",
      url: "https://www.rfc-editor.org/rfc/rfc2707.txt",
      publisher:
        "IETF (Bergman, Hastings, Isaacson & Lewis), November 1999",
    },
    {
      title: "RFC 3805 — Printer MIB v2",
      url: "https://www.rfc-editor.org/rfc/rfc3805.txt",
      publisher:
        "IETF (Bergman, Lewis & McDonald), June 2004; obsoletes RFC 1759",
    },
    {
      title: "cupsd.conf(5) — PageLogFormat directive",
      url: "https://openprinting.github.io/cups/doc/man-cupsd.conf.html",
      publisher: "OpenPrinting / CUPS project documentation",
    },
    {
      title:
        "collaborative Protection Profile for Hardcopy Devices, v1.0",
      url: "https://commoncriteriaportal.org/files/ppfiles/cPP_HCD_V1.0.pdf",
      publisher:
        "Common Criteria / HCD international Technical Community, 31 October 2022",
    },
    {
      title:
        "IEEE 2600-2008 — Standard for Information Technology: Hardcopy Device and System Security",
      url: "https://standards.ieee.org/standard/2600-2008.html",
      publisher: "IEEE Standards Association",
    },
    {
      title:
        "General Records Schedule 3.2: Information Systems Security Records (Transmittal No. 33)",
      url: "https://www.archives.gov/files/records-mgmt/grs/grs03-2.pdf",
      publisher:
        "U.S. National Archives and Records Administration, January 2023",
    },
    {
      title:
        "45 CFR 164.316 — Policies and procedures and documentation requirements",
      url: "https://www.govinfo.gov/content/pkg/CFR-2024-title45-vol2/pdf/CFR-2024-title45-vol2-sec164-316.pdf",
      publisher: "U.S. Government Publishing Office, 2024 CFR edition",
    },
    {
      title: "NIST SP 800-92 — Guide to Computer Security Log Management",
      url: "https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-92.pdf",
      publisher: "NIST (Kent & Souppaya), 2006",
    },
    {
      title: "Opinion 2/2017 on data processing at work (WP249)",
      url: "https://ec.europa.eu/newsroom/article29/items/610169/en",
      publisher:
        "Article 29 Data Protection Working Party, European Commission, 2017",
    },
    {
      title: "Regulation (EU) 2016/679 (General Data Protection Regulation)",
      url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
      publisher: "Official Journal of the European Union / EUR-Lex",
    },
    {
      title:
        "ITU-T Recommendation T.30 — Procedures for document facsimile transmission in the general switched telephone network",
      url: "https://www.itu.int/rec/T-REC-T.30/en",
      publisher: "ITU-T; in-force edition T.30 (09/2005) with Amendment 1 (01/2007)",
    },
    {
      title: "Printers (tracking dots and machine identification code research)",
      url: "https://www.eff.org/issues/printers",
      publisher: "Electronic Frontier Foundation",
    },
  ],
  published: "2026-08-26",
  updated: "2026-08-26",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "print telemetry",
    "print job privacy",
    "print log retention",
    "job-originating-user-name",
    "job-retain-until",
    "ipp privacy attributes",
    "cups page log",
    "mfp audit trail",
    "print accounting data",
    "machine identification code",
    "hardcopy device protection profile",
    "printer mib",
  ],
  cluster: "enterprise-print-management",
  difficulty: "intermediate",
  estimatedTime: "11 min read",
};

export default entry;
