import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "print-job-accounting",
  "title": "Print Job Accounting and Auditing",
  "description": "How OS print subsystems record who printed what, when, and how much — CUPS page logs, IPP counters, Printer MIB, and Windows audit events.",
  "summary": "Print job accounting and auditing is the print subsystem that records who printed what, when, how much, and at what cost, and retains a durable history of print activity. It combines accounting — attributing measurable consumption such as pages, sheets, and impressions to users, groups, or billing codes to enforce quotas or charge back costs — with auditing, the retention of a print-event record for security, compliance, and forensic review. Data is captured at three overlapping layers: the host spooler or print server (CUPS page_log, the Windows spooler job object, the PrintService audit log), the IPP protocol layer (accounting identifiers on submission and completion counters returned by the printer), and the device itself (cumulative hardware counters read over SNMP through the Printer MIB). No single layer is authoritative for every situation, which is the subsystem's central engineering tension.",
  "difficulty": "intermediate",
  "estimatedTime": "11 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Print job accounting and auditing is the print subsystem responsible for recording who printed what, when, how much, and at what cost, and for producing a durable record of print activity. It spans two overlapping goals: accounting — attributing measurable resource consumption (pages, sheets, impressions, bytes) to users, groups, or billing codes, often to enforce quotas or charge back costs — and auditing — retaining a history of print events for security, compliance, and forensic review."
    },
    {
      "kind": "paragraph",
      "text": "Accounting data is captured at one or more of three layers:"
    },
    {
      "kind": "list",
      "items": [
        "The spooler / print server (host-side): the OS print service records job metadata and a page count as the job is rendered and dispatched. Examples: the CUPS page_log, the Windows print spooler's JOB_INFO_2 structure, and the Windows PrintService/Operational event log.",
        "The protocol layer (IPP): the printing protocol carries job-accounting identifiers on submission and reports completion counters back, such as job-impressions-completed and job-media-sheets-completed.",
        "The device (embedded): the printer's own hardware page counters, read over SNMP via the Printer MIB (for example prtMarkerLifeCount), or via embedded accounting firmware."
      ]
    },
    {
      "kind": "paragraph",
      "text": "No single layer is authoritative for every situation, which is the central engineering tension of the subsystem: host-side counts can be estimates, protocol counts depend on device reporting, and device counters are cumulative lifetime totals not tied to individual users."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Print accounting predates networked printing. Multi-user UNIX systems supported per-job accounting so shared line printers could be charged back to users; the concept carried into the modern era through CUPS (the Common UNIX Printing System), which became the standard printing system on most Linux distributions and on macOS and added structured page logging and per-printer quotas."
    },
    {
      "kind": "paragraph",
      "text": "On the standards side, the IETF Printer MIB (RFC 1759, March 1995) first standardized reading device counters over SNMP; it was superseded by Printer MIB v2 (RFC 3805, June 2004). The Internet Printing Protocol carried job-accounting and job-progress semantics: the completion counters were defined in the IPP/1.1 model of RFC 2911 and are now consolidated in RFC 8011 (January 2017), which obsoletes RFC 2911, RFC 3381, and RFC 3382. RFC 3381 (September 2002, IPP Job Progress Attributes) extended job-progress reporting with additional attributes. The Printer Working Group (PWG) later added explicit accounting identifiers through IPP Job Extensions (PWG 5100.7) and published a dedicated best-practice document, Job Accounting with IPP (designation PWG 5199.11, approved 2021)."
    },
    {
      "kind": "paragraph",
      "text": "On Windows, print accounting evolved from the spooler's job-tracking APIs into structured, per-event logging through the Microsoft-Windows-PrintService event channel introduced with the modern Windows event-log architecture."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "The subsystem is best understood as a set of measurement points arranged along the print pipeline, plus a collection, storage, and reporting tier layered on top."
    },
    {
      "kind": "list",
      "items": [
        "Client / submitter surface: where accounting identifiers originate — a billing code, an account ID, or an authenticated user identity attached to the job at submission.",
        "Spooler / server surface: the host print service that owns the job object. It knows the owner, source machine, document name, byte size, and — after rendering — a page or sheet count.",
        "Interpreter / renderer surface: the component that actually rasterizes or interprets the job (a PostScript interpreter, a CUPS raster filter, or the Windows GDI/print-processor path). Accurate page counts generally require this layer to have parsed the job.",
        "Device surface: the printer's firmware counters and, optionally, embedded job-accounting or secure-release modules.",
        "Collection and reporting tier: log files, event channels, SNMP pollers, or a third-party print-management server that aggregates the above into reports and enforces quotas."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Third-party print-management systems (a vendor-neutral category) typically insert themselves as a queue in front of the real device so they can capture the job, hold it, count pages by interpreting it, apply policy or quota, then release it — combining spooler-level and interpreter-level accounting."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "CUPS (spooler-level). CUPS logs each printed page to /var/log/cups/page_log when the PageLogFormat directive is configured in cupsd.conf; the directive defaults to an empty string, which disables page logging. A configured log line can record the printer, user, job ID, date-time, total page number, number of sheets, billing information, originating host, job name, and media. The PageLogFormat directive supports format specifiers including %p (printer name), %u (username), %j (job ID), %P (current page number), %C (number of copies for the page), %T (date-time in common log format), %{name} (value of a named IPP attribute), and %% (a literal percent). Crucially, page accounting is only available for drivers that provide page accounting information — typically PostScript and CUPS raster devices. Raw queues and third-party setups such as Foomatic generally do not produce useful counts, because CUPS never interprets the page-description language and therefore cannot count pages."
    },
    {
      "kind": "paragraph",
      "text": "CUPS quotas are per-printer and enforced with three lpadmin -o options: job-quota-period (the window, in seconds — 86,400 for a day, 604,800 for a week, 2,592,000 for a 30-day month), job-page-limit (maximum pages in the window), and job-k-limit (maximum kilobytes). Enforcement requires the period plus at least one non-zero limit. A documented limitation is that quotas apply uniformly to all users of a printer; the mechanism cannot exempt individual users."
    },
    {
      "kind": "paragraph",
      "text": "IPP (protocol-level). On submission, a client can attach accounting identifiers defined in IPP Job Extensions (PWG 5100.7): job-account-id (a billing or charge code) and job-accounting-user-id (the user to attribute). As the job runs, the Printer reports completion counters defined in the IPP model — job-impressions-completed (impressions are marked sides or images), job-media-sheets-completed (physical sheets), and job-k-octets-processed. Per RFC 8011, \"completed\" for impressions and sheets means stacked (approximated at end-of-processing when the device cannot detect stacking), and these counters initialize to 0 at job creation. A related attribute, job-pages-completed, is defined in a PWG IPP extension rather than in the RFC 8011 model."
    },
    {
      "kind": "paragraph",
      "text": "SNMP / Printer MIB (device-level). A poller reads cumulative hardware counters from the Printer MIB (RFC 3805). The key objects are in the marker group: prtMarkerLifeCount (OID 1.3.6.1.2.1.43.10.2.1.4), \"the count of the number of units of measure counted during the life of printer\"; prtMarkerPowerOnCount, the same count since the equipment was most recently powered on; and prtMarkerCounterUnit, which declares the unit (such as impressions or sheets) the counters use. Because these are lifetime or session totals for the whole device, per-user accounting via SNMP works by differencing the counter before and after a job, or by polling at intervals; it cannot by itself attribute pages to a specific user."
    },
    {
      "kind": "paragraph",
      "text": "Windows (spooler-level and audit log). The print spooler maintains a job object queryable with GetJob/EnumJobs returning JOB_INFO_2, whose members include pUserName, pMachineName, pDocument, Size (bytes), TotalPages (pages required for the job), and PagesPrinted (pages printed so far). Microsoft documents that both page fields \"may be zero if the print job does not contain page delimiting information.\" Inside a print processor, page counts can be obtained via GdiGetPageCount or by counting GdiGetPageHandle calls during PrintDocumentOnPrintProcessor. For auditing, Windows exposes the Applications and Services Logs → Microsoft → Windows → PrintService → Operational channel; Event ID 307 signifies that a document was printed and records the document name (subject to the \"Allow job name in event logs\" policy), owner, source machine, printer name, port, byte size, and page count. This log is disabled by default and must be enabled. The BranchOfficeJobDataPrinted structure (Status, pDocumentName, pUserName, pMachineName, pPrinterName, pPortName, Size, TotalPages) carries the same job-completion data and is used to create Event ID 307 for completed jobs in branch-office direct printing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "1. Submission. An application creates a job. The client, driver, or spooler attaches identity and, optionally, accounting identifiers (job-account-id, job-accounting-user-id, or CUPS billing information). Windows records owner, machine, document, and size in the job object; CUPS records job metadata. 2. Spooling and rendering. The job is stored and passed to the interpreter or print processor. This is where a reliable page count first becomes possible — PostScript or PCL interpretation, CUPS raster generation, or Windows GDI/EMF playback yields a page or sheet count. Raw or pass-through jobs bypass this step and lose accurate counting. 3. Emission of counts. The spooler writes the count: CUPS appends to page_log; Windows updates JOB_INFO_2.PagesPrinted and, if auditing is enabled, emits Event 307 at completion. 4. Device execution. The printer marks the media and increments its internal prtMarkerLifeCount and prtMarkerPowerOnCount. Over IPP, it returns job-impressions-completed and job-media-sheets-completed. 5. Collection. A quota engine (CUPS quotas), an event-log forwarder, an SNMP poller, or a third-party print-management server harvests the counts. 6. Aggregation and enforcement. Data is summed per user, code, or period; quotas block further jobs when limits are reached; audit records are retained for reporting."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "list",
      "items": [
        "UNIX / Linux / macOS (CUPS): native page_log, the PageLogFormat directive, and per-printer quotas via lpadmin. macOS uses CUPS as its printing system.",
        "Windows: integration is through the Print Spooler service, the Print Spooler API (JOB_INFO_2, GetJob, EnumJobs, and job notifications), print-processor page APIs (GdiGetPageCount, GdiGetPageHandle), and the Microsoft-Windows-PrintService event channels (the Operational log and Event 307). Group Policy controls whether document names appear in the log.",
        "Cross-platform: IPP and SNMP accounting are OS-independent, which is why network print-management products lean on them to normalize accounting across mixed fleets."
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
        "IETF IPP — RFC 8011 (the IPP/1.1 model, obsoleting RFC 2911, RFC 3381, and RFC 3382) defines the job-completion counters job-impressions-completed, job-media-sheets-completed, and job-k-octets-processed; these counters originate in the earlier RFC 2911. RFC 3381 (September 2002) extended job-progress reporting with additional attributes.",
        "IETF Printer MIB — RFC 3805 (Printer MIB v2, obsoleting RFC 1759) defines the SNMP marker counters used for device-level page counts, under the OID tree 1.3.6.1.2.1.43.",
        "PWG — PWG 5100.7 (IPP Job Extensions) defines accounting identifiers such as job-account-id and job-accounting-user-id; the best-practice document Job Accounting with IPP (designation PWG 5199.11, approved 2021) describes the end-to-end accounting pattern. IPP attribute names are registered in the IANA/PWG IPP registry.",
        "SNMP — the transport for reading the Printer MIB; the MIB objects are SNMP-managed objects with OIDs under 1.3.6.1.2.1.43."
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
        "Page-description languages (PostScript, PCL, PDF, PWG raster): accurate page counting depends on interpreting the PDL; pass-through \"raw\" jobs defeat host-side counting.",
        "Spooling systems (CUPS, the Windows spooler): own the job object and the primary accounting record.",
        "Pull-printing and secure-release systems: hold jobs and count at release, tightly coupling authentication to accounting.",
        "Event-log and SIEM pipelines: Windows Event 307 (and equivalents) feed security auditing, since the print log doubles as a data-exfiltration signal."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "The subsystem is deliberately vendor-neutral at the standards layer, but device behavior varies. Printer vendors expose lifetime counters through the standard Printer MIB, and many also expose proprietary or extended MIBs and embedded job-accounting or quota firmware, such as departmental codes entered at the control panel. A documented interoperability concern, discussed in the Printer Working Group community, is that vendors do not always interpret the Printer MIB identically — notably, whether blank sides or duplex pages count as impressions versus sheets can differ — which makes cross-vendor SNMP page totals hard to compare without per-model calibration."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Print accounting remains widely deployed in enterprises, universities, libraries, and managed-print-services contracts, where it underpins cost recovery, quota enforcement, sustainability reporting (paper and toner reduction), and, increasingly, security auditing. The auditing side has grown in importance: because a print log records document names, owners, and timing, it is a recognized data-loss-prevention and insider-threat signal, which is why the Windows PrintService/Operational log and Event 307 feature in security detection guidance. IPP-based accounting (the RFC 8011 counters together with PWG identifiers) is the direction of travel for driverless and IPP-based fleets, reducing dependence on vendor-specific drivers for counts."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"The SNMP page counter tells you who printed.\" It does not. prtMarkerLifeCount and prtMarkerPowerOnCount are device-wide cumulative totals; user attribution requires differencing across a job or correlating with spooler records.",
        "\"CUPS always logs accurate page counts.\" Only for drivers that supply accounting data (PostScript, CUPS raster). Raw queues and Foomatic setups often log a placeholder value; the count is only as good as the interpreter.",
        "\"Windows automatically logs every print job.\" The PrintService/Operational log (Event 307) is disabled by default and must be enabled; document names also depend on policy.",
        "\"Impressions, sheets, and pages are the same number.\" They differ: a duplex sheet is two impressions; N-up puts multiple document pages on one side; copies multiply sheets. IPP separates job-impressions-completed, job-media-sheets-completed, and job-pages-completed precisely because they diverge.",
        "\"Vendor page counts are directly comparable.\" Printer MIB interpretation varies by vendor, especially around blank sides and duplex.",
        "\"job-media-sheets-completed is guaranteed accurate mid-job.\" IPP defines \"completed\" as stacked, and devices that cannot sense stacking approximate it at end-of-processing."
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
          "period": "1995",
          "text": "IETF publishes RFC 1759 (Printer MIB), the first standard for reading printer device counters over SNMP."
        },
        {
          "period": "2002",
          "text": "RFC 3381 (IPP Job Progress Attributes) extends IPP job-progress reporting."
        },
        {
          "period": "2004",
          "text": "RFC 3805 (Printer MIB v2) is published, obsoleting RFC 1759 and standardizing prtMarkerLifeCount, prtMarkerPowerOnCount, and prtMarkerCounterUnit."
        },
        {
          "period": "2017",
          "text": "RFC 8011 (IPP/1.1 Model and Semantics) is published, obsoleting RFC 2911, RFC 3381, and RFC 3382 and consolidating the job-completion counters."
        },
        {
          "period": "2021",
          "text": "PWG approves Job Accounting with IPP (designation PWG 5199.11)."
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
      "slug": "print-management"
    },
    {
      "section": "guides",
      "slug": "enterprise-print-servers"
    },
    {
      "section": "guides",
      "slug": "pull-printing"
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
      "section": "tools",
      "slug": "lpd-lpr"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between print accounting and print auditing?",
      "a": "Accounting attributes measurable resource consumption — pages, sheets, impressions, or bytes — to users, groups, or billing codes, typically to enforce quotas or charge back costs. Auditing retains a history of print events (document name, owner, machine, timing) for security, compliance, and forensic review. The same underlying data often serves both, but their purposes differ."
    },
    {
      "q": "Can an SNMP printer page counter tell you which user printed a document?",
      "a": "No. Printer MIB counters such as prtMarkerLifeCount and prtMarkerPowerOnCount are device-wide cumulative totals. Attributing pages to a specific user requires differencing the counter before and after a job or correlating it with spooler records; the device counter alone carries no user identity."
    },
    {
      "q": "Why do impressions, sheets, and pages produce different counts?",
      "a": "They measure different things. A duplex sheet is two impressions; N-up layout places several document pages on one side; and copies multiply the number of sheets. IPP deliberately separates job-impressions-completed, job-media-sheets-completed, and job-pages-completed because these values diverge."
    },
    {
      "q": "Does Windows log every print job by default?",
      "a": "No. The Microsoft-Windows-PrintService Operational log, where Event ID 307 records printed documents, is disabled by default and must be enabled. Whether the document name appears is further controlled by the Allow job name in event logs Group Policy setting."
    },
    {
      "q": "Why does CUPS sometimes fail to record accurate page counts?",
      "a": "CUPS can only count pages for drivers that provide page accounting information, typically PostScript and CUPS raster devices. Raw queues and third-party setups such as Foomatic pass the job through without interpreting the page-description language, so CUPS cannot count pages and often logs a placeholder value."
    }
  ],
  "sources": [
    {
      "title": "Printer Accounting Basics",
      "url": "https://www.cups.org/doc/accounting.html",
      "publisher": "OpenPrinting / CUPS"
    },
    {
      "title": "cupsd.conf man page (PageLogFormat directive)",
      "url": "https://openprinting.github.io/cups/doc/man-cupsd.conf.html",
      "publisher": "OpenPrinting / CUPS"
    },
    {
      "title": "RFC 3805 — Printer MIB v2",
      "url": "https://www.rfc-editor.org/rfc/rfc3805.html",
      "publisher": "IETF"
    },
    {
      "title": "RFC 1759 — Printer MIB",
      "url": "https://datatracker.ietf.org/doc/html/rfc1759",
      "publisher": "IETF"
    },
    {
      "title": "RFC 8011 — Internet Printing Protocol/1.1: Model and Semantics",
      "url": "https://www.rfc-editor.org/rfc/rfc8011.html",
      "publisher": "IETF"
    },
    {
      "title": "RFC 3381 — IPP Job Progress Attributes",
      "url": "https://www.rfc-editor.org/rfc/rfc3381.html",
      "publisher": "IETF"
    },
    {
      "title": "prtMarkerLifeCount OID 1.3.6.1.2.1.43.10.2.1.4",
      "url": "http://oid-info.com/get/1.3.6.1.2.1.43.10.2.1.4",
      "publisher": "OID Repository"
    },
    {
      "title": "PWG 5199.11 — Job Accounting with IPP",
      "url": "https://ftp.pwg.org/pub/pwg/informational/bp-ippaccounting10-20210205-5199.11.pdf",
      "publisher": "Printer Working Group"
    },
    {
      "title": "PWG 5100.7 — IPP Job Extensions",
      "url": "https://ftp.pwg.org/pub/pwg/candidates/cs-ippjobext20-20190816-5100.7.pdf",
      "publisher": "Printer Working Group"
    },
    {
      "title": "JOB_INFO_2 structure",
      "url": "https://learn.microsoft.com/windows/win32/printdocs/job-info-2",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "GdiGetPageCount function",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/ddi/winppi/nf-winppi-gdigetpagecount",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "BranchOfficeJobDataPrinted (MS-RPRN)",
      "url": "https://learn.microsoft.com/openspecs/windows_protocols/ms-rprn/b4a22048-7837-460e-b1bd-8d34f4270f29",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Event ID 307 does not show the printed document name",
      "url": "https://support.microsoft.com/en-us/topic/event-id-307-does-not-show-the-printed-document-name-in-windows-8ef93ff2-b501-c630-507b-849743e49286",
      "publisher": "Microsoft Support"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "print job accounting",
    "print auditing",
    "cups page_log",
    "pagelogformat",
    "ipp job accounting",
    "job-impressions-completed",
    "job-media-sheets-completed",
    "printer mib",
    "prtmarkerlifecount",
    "snmp page counter",
    "windows event 307",
    "printservice operational log"
  ],
  "cluster": "enterprise-print-management"
};

export default entry;
