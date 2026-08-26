import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "mobile-printing-before-airprint",
  title:
    "Mobile Printing Before AirPrint: PictBridge, Infrared, Bluetooth, and Email-to-Print",
  description:
    "How cameras, PDAs and phones printed before 2010 — DPOF, PictBridge, IrLPT, Bluetooth object push, email-to-print — and why each workaround stalled.",
  summary:
    "For roughly a decade, printing from something you could carry meant choosing between a print-order file that moved no image, a cable-bound camera session, an infrared beam you had to aim, a Bluetooth push that manufacturers themselves warned might not work, or a job routed through a company's servers. The usual explanation is that the technology was not ready. The documentary record says something less comfortable: a driverless, standards-track network printing protocol had already been published, and portable devices simply did not use it.",
  era: "From beam and dongle to network participant",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "A driverless network print protocol predates the mobile era by a decade: the Printer Working Group's IPP project dates to November 1996, IPP/1.0 appeared as experimental RFCs in April 1999, and IPP/1.1 became an IETF Proposed Standard as RFC 2911 in September 2000.",
        "There was never one mobile printing story. Cameras, PDAs, feature phones, BlackBerry handhelds and early Wi-Fi smartphones each had a different mechanism and a different documented reason for failing.",
        "PictBridge was a camera standard carried over USB using Picture Transfer Protocol. It was never a phone path, and picture transfer over IP is a separate, later CIPA standard (DC-005-2005), not a wireless PictBridge.",
        "Bluetooth printing in practice did not use the purpose-built Basic Printing Profile; manufacturers documented generic object-push profiles, a file-size ceiling, excluded content types and an extra-cost adapter.",
        "The constraint the Printer Working Group names in its own retrospective is not radio or bandwidth but drivers: mobile hardware's form factor \"does not allow for the inclusion of device-specific drivers.\"",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "The protocol was not the missing piece",
    },
    {
      kind: "paragraph",
      text: "The natural way to tell this story is as a waiting period — a decade in which the necessary technology did not exist, ending when it finally arrived. The standards record does not support that shape. The Printer Working Group dates its Internet Printing Protocol project to November 1996; IPP/1.0 was published as experimental RFCs in April 1999; and IPP/1.1 was issued as an IETF Proposed Standard in September 2000 as RFC 2911, obsoleting RFC 2566 and later obsoleted itself by RFC 8011. By the autumn of 2000 there was a published way to submit a print job across a network without installing anything specific to the printer at the far end. Almost nothing portable used it for the next ten years.",
    },
    {
      kind: "paragraph",
      text: "The Printer Working Group's own retrospective supplies the structural reason, and it is about software distribution rather than networking: mobile devices' \"small, lower-cost form factor, including memory size, does not allow for the inclusion of device-specific drivers.\" A desktop operating system had solved printing by accumulating drivers; a handheld could not, and nothing obliged printers to be usable without one. Mobile printing therefore grew as \"vendor-specific apps and with little standardization.\" The interesting question is not whether an adequate protocol existed, but why an available one sat idle while five separate families of workaround grew up around it.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Cameras: an order file, then proprietary sessions, then a standard",
    },
    {
      kind: "paragraph",
      text: "The earliest of these mechanisms transmitted nothing at all. The Digital Print Order Format, developed by Canon, Eastman Kodak, Fuji Photo Film and Matsushita, writes a print-order file onto the camera's memory card: a record of which images to print, at what sizes and quantities. The card then goes to a photo lab or into a card slot on a printer that can read it. DPOF is generally dated to 1998, and trade press of the time reported a joint announcement of version 1.10 on 17 July 2000. Its mechanism is the part worth holding onto — an instruction sheet travelling with the media, a solution to selection rather than to transfer.",
    },
    {
      kind: "paragraph",
      text: "Live camera-to-printer sessions arrived next, and arrived fragmented. Canon's own patent record documents a protocol it called NCDP, for New Camera Direct Print, layered on Picture Transfer Protocol over USB (US7719706B2, priority 4 June 2002). Canon shipped other direct modes under other names, and other manufacturers shipped their own. Trade coverage of the era mixes these names freely.",
    },
    {
      kind: "paragraph",
      text: "The fragmentation was admitted by the standard that ended it. The Camera & Imaging Products Association's announcement of 3 February 2003 states that the specification had been \"Originally proposed last December as 'DPS'\" — December 2002 — by Canon, Fuji Photo Film, HP, Olympus, Seiko Epson and Sony, and adopted by CIPA as DC-001-2003 under the name PictBridge. The release is blunt about the motivation: \"Until now, each company had its own proprietary solution for direct printing between digital still cameras and printers,\" an arrangement that had \"proven to be limiting ease of use when using different product combinations and brands.\"",
    },
    {
      kind: "paragraph",
      text: "PictBridge is also the most consistently misdescribed item in this history. DC-001 specifies USB as the physical transport and Picture Transfer Protocol for the data exchange, with the camera driving the printer's interface rather than the reverse. It is not wireless: the picture-transfer-over-IP path is a separate and later CIPA standard, DC-005-2005, published in November 2005. And it is a camera standard, so a phone listing PictBridge support was borrowing a camera mechanism rather than joining a mobile printing ecosystem — there was none to join.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "PTP expands to Picture Transfer Protocol",
      text: "Picture Transfer Protocol was standardised as ISO 15740, published in 2005 and revised in 2008 and 2013, having originated in earlier PIMA work. Expansions such as \"Photo Transfer Protocol\" and \"Physical Transfer Protocol\" circulate widely, and both are wrong.",
    },
    {
      kind: "archivalTable",
      caption:
        "Five device populations, five mechanisms, five documented failure modes (1998–2010)",
      headers: [
        "Device population",
        "Mechanism",
        "Transport",
        "Documented limitation",
      ],
      rows: [
        [
          "Digital cameras (early)",
          "DPOF print-order file",
          "Memory card, carried by hand",
          "Transmits no image; requires a lab or a card-reading printer",
        ],
        [
          "Digital cameras (later)",
          "Vendor direct-print protocols, then DPS / PictBridge (CIPA DC-001-2003)",
          "USB with Picture Transfer Protocol",
          "Cable-bound and camera-only; PTP over IP is a separate standard, not a wireless PictBridge",
        ],
        [
          "PDAs and laptops",
          "IrLPT via an infrared print monitor",
          "IrDA infrared",
          "Line-of-sight physical layer; short range and a narrow cone",
        ],
        [
          "Feature phones",
          "Object push and image push profiles",
          "Bluetooth, often via an optional printer adapter",
          "Interoperability disclaimed by the manufacturer; file-size ceiling; content types excluded",
        ],
        [
          "BlackBerry and early smartphones",
          "Server-brokered submission and per-vendor apps",
          "Cellular or Wi-Fi to a third-party service",
          "Requires infrastructure the printer itself cannot join",
        ],
      ],
      sources: [
        "CIPA DC-001-2003 press release",
        "Canon U.S.A. product documentation",
        "Microsoft Windows 2000 Server documentation",
        "Bluetooth SIG profile specifications",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "Infrared: a real printing path with a geometry problem",
    },
    {
      kind: "paragraph",
      text: "Infrared printing is often written off as something that never really worked, which understates it. The Infrared Data Association is conventionally dated to 1993, with its first specifications — SIR, IrLAP and IrLMP — published in June 1994; the two are frequently swapped for one another, and no specification page is cited here for either. And there was a genuine printing protocol in the stack, documented in a mainstream operating system's own manuals rather than in a vendor pamphlet.",
    },
    {
      kind: "paragraph",
      text: "Microsoft's Windows 2000 Server documentation names the pieces individually. IrLPT is \"the protocol support that is used by IrDA Print Monitor\" and \"enables printing directly from IrDA devices to IrDA printers.\" IrCOMM provides serial and parallel port emulation for applications that expect a port. IrTran-P handles bidirectional image transfer and was receive-only in that release, described there as \"used for cameras with infrared capability.\" Later accounts routinely merge the three; only IrLPT is the one that means printing.",
    },
    {
      kind: "paragraph",
      text: "What defeated infrared was its physical layer, not its protocol design. The link needed an unobstructed sightline between two ports held close together and roughly aimed at each other, and survived only as long as that geometry held — which made printing a posture, a handheld held still at the right height and angle for the duration of the transfer. Published figures for range, beam angle and data rate vary between sources and between specification versions, and none is quoted here. The technology is best described now as dormant and superseded; a formal dissolution of the association is not something this page can verify, and it claims none.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Bluetooth: the profile that existed and the profiles that got used",
    },
    {
      kind: "paragraph",
      text: "Bluetooth looks, at first, like the answer infrared could not be: no sightline, no aiming, a few metres of tolerance. The Bluetooth SIG even adopted a profile built for the job — the Basic Printing Profile, defining Printer and Sender roles, operating over the core specification from version 1.0B onward, with a mandatory errata correction for compliance. On paper, phones printing over Bluetooth used BPP.",
    },
    {
      kind: "paragraph",
      text: "Manufacturer documentation points the other way. Canon's online manual for printing from a mobile phone over Bluetooth specifies the Object Push Profile or the Basic Imaging Profile — generic mechanisms for pushing an object or an image at a device, not printing protocols. A companion page of the same manual extends the identical constraint to PDAs and digital cameras. The everyday experience of Bluetooth printing was therefore not a print job at all but a file handed over in the hope that whatever received it would interpret it as one.",
    },
    {
      kind: "paragraph",
      text: "The manual is unusually candid about the consequences, and the sentence deserves quoting rather than paraphrase: \"Depending on your mobile phone, you may not perform printing even if your mobile phone supports the profiles above.\" Around that disclaimer sit the specifics. Photographs were capped in practice — \"If the photo file is over 1.8 MB in size, it may not be possible to send the file.\" Video and downloaded content protected by digital rights management were excluded outright. The printer needed an optional Bluetooth unit bought separately and fitted to its direct print port. Pairing defaulted to a passkey of 0000. Bluetooth printing did not fail for vague reasons; it failed on limits the vendor closest to the problem published on its own support pages.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Server-brokered printing: someone else's infrastructure",
    },
    {
      kind: "paragraph",
      text: "The fifth family gave up on the local link and sent the job somewhere else first. This is usually remembered as a 2010 development, which is off by most of a decade. EFI's PrintMe Networks was introduced around late 2001 — one release-derived trade report places the debut on 22 October 2001, while a second EFI announcement of the service going live carries a different date — offering driverless remote printing to a network of public printers, explicitly marketed for PCs, PDAs, two-way pagers and cell phones, with rollouts at print shops and hotels. PrinterOn likewise dates its service from around the same period.",
    },
    {
      kind: "paragraph",
      text: "By 2010 the model had a mass-market face and a naming problem. Computerworld reported on 21 April 2010 that HP had unveiled a BlackBerry application backed by HP middleware, routing jobs onto PrinterOn's public-printer network at hotels with further venues planned, where the recipient released the job by entering a security code at the machine; commercial launch was set for that June, and the service explicitly covered printers that were not HP's. That product shares the ePrint name with a consumer feature giving a web-connected home printer its own email address, with later applications, and with the \"ePrint enabled\" printers repurposed as launch hardware for driverless printing from Apple devices. Any date attached to the name is meaningless without saying which is meant.",
    },
    {
      kind: "paragraph",
      text: "Google's entry belongs to the same family and gives away the era's real constraint through its architecture. A Chromium Blog post of 7 June 2010 carried an update on Google Cloud Print. Its design routed jobs through a connector program running on an internet-connected computer attached to the printer. That indirection existed precisely because the printers could not participate in the exchange themselves. Server brokering worked, which is why it lasted — but it made every document a round trip through a third party, contingent on an account, a network path and a company's continued interest in running the service. The archive's account of cloud print architectures follows how that pattern was later absorbed and discarded.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The vendor app, and the habits it produced",
    },
    {
      kind: "paragraph",
      text: "The last stage before the era closed was the per-brand application. The Printer Working Group's retrospective describes it without much affection: \"printer makers got smart and created apps that supported their brand devices. An Epson app let users print to their Epson printer and the like.\" The same account records what people did when no app fit — users \"emailed themselves links, bookmarked pages and did all sorts of strange things to remind themselves to print\" later, from a computer. Its verdict is that the industry was \"asking them to install all kinds of apps, which might or might not work well, and to keep updating them, signing in and in general presenting a number of hurdles.\" These posts are a standards body's blog rather than a specification and their tone is promotional, but as testimony about the state of practice they remain the sharpest description available. HP's photo printing application for early iPhones belongs to that stage; this page attaches no date and no first to it.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The boundary: 15 September 2010",
    },
    {
      kind: "paragraph",
      text: "Apple's press release of 15 September 2010 announced wireless printing for its handheld devices, quoting Phil Schiller on the intended experience: \"no set up, no configuration, no printer drivers and no software to download.\" It named HP's ePrint-enabled Photosmart, Officejet, Officejet Pro and LaserJet Pro lines as the launch printers, and promised something further — printing to printers shared through a Mac or PC.",
    },
    {
      kind: "paragraph",
      text: "Two corrections attach to that document, and both matter more than the announcement. The first is that nothing new was invented at the protocol layer. Apple's own Bonjour printing specification describes multicast DNS service discovery feeding job submission over IPP, and the Printer Working Group's guide to IPP notes that printers in Apple's programme use an Apple raster format where IPP printers generally accept PDF, PWG Raster and JPEG. What shipped was IPP submission, Bonjour discovery and a mandatory raster fallback: a compulsory profile over a ten-year-old standard, backed by operating-system ubiquity. That is what had been missing, and it is not the same thing as a new protocol.",
    },
    {
      kind: "paragraph",
      text: "The second is that the September release does not describe what arrived. Macworld and other trade press reported in November 2010 that the shared-printer path had been removed from desktop operating system seeds and from developer documentation ahead of release, with no public explanation, and that third-party utilities appeared to fill the gap. No primary statement exists to cite on the reversal, which is itself part of the record: announcement and shipped behaviour differ, and quoting the former as a description of the latter is an error the sourcing will not support.",
    },
    {
      kind: "researchInset",
      title: "Claims this page declines to make",
      items: [
        "That any of these mechanisms was the first of its kind — every candidate first in this space traces back to a vendor announcement rather than an independent record.",
        "That the Infrared Data Association was formally dissolved on any date; the defensible description is dormant and superseded.",
        "A launch date for HP's early iPhone photo printing application, which rests on a marketing claim with no primary confirmation.",
        "A single launch date for EFI's PrintMe Networks; two EFI-derived reports carry different dates, and this page reports the period instead.",
        "Specific range, cone-angle and data-rate figures for infrared links, which vary between sources and between specification versions.",
        "That the technology was not ready — the better-supported reading is that an adequate protocol existed from 1999 to 2000 onward and went unused from portable devices.",
      ],
    },
    {
      kind: "timeline",
      events: [
        {
          period: "November 1996",
          text: "The Printer Working Group's Internet Printing Protocol project begins.",
        },
        {
          period: "April 1999",
          text: "IPP/1.0 is published as experimental RFCs.",
        },
        {
          period: "September 2000",
          text: "IPP/1.1 is issued as an IETF Proposed Standard in RFC 2911.",
        },
        {
          period: "Around late 2001",
          text: "EFI introduces PrintMe Networks for remote printing to public printers; reported launch dates differ between releases.",
        },
        {
          period: "June 2002",
          text: "Canon files the patent documenting NCDP, its proprietary camera direct-print protocol over PTP and USB.",
        },
        {
          period: "December 2002",
          text: "The specification later known as PictBridge is proposed as DPS.",
        },
        {
          period: "3 February 2003",
          text: "CIPA announces adoption of the specification as DC-001-2003, PictBridge.",
        },
        {
          period: "November 2005",
          text: "CIPA publishes DC-005-2005, the separate picture-transfer-over-IP standard.",
        },
        {
          period: "April–June 2010",
          text: "HP's BlackBerry printing service and a Google Cloud Print update arrive; both route jobs through third-party infrastructure.",
        },
        {
          period: "15 September 2010",
          text: "Apple announces driverless wireless printing for its handhelds; this article's window closes here.",
        },
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "What actually changed",
    },
    {
      kind: "paragraph",
      text: "Set the five mechanisms side by side and they share one shape. In every case the printer was a passive endpoint. It could be reached through a cable, through a beam aimed at its front panel, through a separately purchased radio adapter, or through a company's servers — but not by a portable device speaking a standard protocol on a shared network, because nothing obliged it to listen for one. The workarounds were not substitutes for a missing protocol. They were substitutes for a missing capability in the machine at the other end.",
    },
    {
      kind: "paragraph",
      text: "That is why the decade ended as it did, rather than with a better radio or a faster link. The phones of 2010 were not dramatically better at printing than the phones of 2006; the printers were. The change was that a printer began advertising itself on the network it was already attached to and accepting a standard job with no driver installed anywhere — behaviour specified since 2000 and simply never required of anyone. Anything sold today as a smart printer is the descendant of exactly that capability, and reading the category that way — as the thing five generations of workaround were improvising around — explains both why those workarounds looked so awkward and why they vanished so completely once the printer itself changed roles. The archive's history of wireless printing follows the network side of that arc, and its reference on the Internet Printing Protocol covers the specification itself.",
    },
  ],
  faqs: [
    {
      q: "Could you print from a phone using PictBridge?",
      a: "Not meaningfully. CIPA DC-001-2003 is a camera standard that specifies USB as the physical transport with Picture Transfer Protocol for the data exchange, and the camera drives the printer's interface. The picture-transfer-over-IP path sometimes described as wireless PictBridge is a separate, later CIPA standard published in November 2005.",
    },
    {
      q: "Did AirPrint invent driverless printing?",
      a: "No. IPP/1.1 was issued as an IETF Proposed Standard in September 2000 as RFC 2911, and the Printer Working Group's IPP project dates to November 1996. What arrived in 2010 was IPP submission over Bonjour discovery with a mandatory raster fallback — a compulsory profile and operating-system ubiquity on top of an existing standard.",
    },
    {
      q: "Which Bluetooth profile did phones use to print?",
      a: "Manufacturer documentation points to generic profiles rather than the printing-specific one. Canon's manual for printing from a mobile phone specifies the Object Push Profile or the Basic Imaging Profile, even though the Bluetooth SIG had adopted a Basic Printing Profile with defined Printer and Sender roles.",
    },
    {
      q: "Was HP ePrint the first email-to-print service?",
      a: "No. EFI's PrintMe Networks was introduced around late 2001 for remote printing to public printers from PCs, PDAs, pagers and phones, and PrinterOn dates its service from about the same period. The ePrint name also covers at least three distinct 2010 products, so it needs disambiguating before any date is attached.",
    },
  ],
  related: [
    { section: "tools", slug: "airprint" },
    { section: "tools", slug: "mopria" },
    { section: "tools", slug: "ipp" },
    { section: "guides", slug: "driverless-printing" },
    { section: "history", slug: "history-of-wireless-printing" },
    { section: "guides", slug: "cloud-print-architectures" },
    { section: "mobile-printing", slug: "what-is-airprint" },
  ],
  published: "2026-08-26",
  updated: "2026-08-26",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "mobile printing before AirPrint",
    "PictBridge history",
    "IrDA printing IrLPT",
    "Bluetooth printing profiles",
    "email to print history",
    "DPOF",
  ],
  modernTools: ["smart-printer"],
  sources: [
    {
      title:
        "CIPA announces \"PictBridge\" industry standard for direct printing from digital still cameras (press release, 3 February 2003)",
      url: "https://www.cipa.jp/documents/e/PictBridgereleaseE.pdf",
      publisher: "Camera & Imaging Products Association (CIPA)",
    },
    {
      title: "CIPA Standards Update History (list of CIPA DC standards)",
      url: "https://www.cipa.jp/e/std/history_sec.html",
      publisher: "Camera & Imaging Products Association (CIPA)",
    },
    {
      title:
        "ISO 15740 — Photography — Electronic still picture imaging — Picture transfer protocol (PTP) for digital still photography devices",
      url: "https://www.iso.org/standard/45344.html",
      publisher: "ISO",
    },
    {
      title: "Digital Print Order Format (DPOF) — knowledge base article",
      url: "https://support.usa.canon.com/kb/s/article/ART137160",
      publisher: "Canon U.S.A.",
    },
    {
      title: "Four companies finalise DPOF v1.1",
      url: "https://www.dpreview.com/articles/5117951126/dpof11",
      publisher: "Digital Photography Review",
    },
    {
      title: "US7719706B2 — Direct printing authorization in a digital camera",
      url: "https://patents.google.com/patent/US7719706",
      publisher: "Canon Inc. / USPTO (via Google Patents)",
    },
    {
      title: "RFC 2911 — Internet Printing Protocol/1.1: Model and Semantics",
      url: "https://datatracker.ietf.org/doc/rfc2911/",
      publisher: "IETF",
    },
    {
      title: "How to Use the Internet Printing Protocol (v2019.0117)",
      url: "https://www.pwg.org/ipp/ippguide.html",
      publisher: "Printer Working Group (PWG)",
    },
    {
      title:
        "IPP Frequently Asked Questions (IPP workgroup; dates the IPP project to November 1996 and IPP/1.0 to April 1999)",
      url: "https://www.pwg.org/ipp/faq.html",
      publisher: "Printer Working Group (PWG)",
    },
    {
      title: "Printing from Mobile Devices (Part 1)",
      url: "https://www.pwg.org/blog/printing-from-mobile-devices.html",
      publisher: "Printer Working Group (PWG)",
    },
    {
      title: "Printing from Mobile Devices, Part 2",
      url: "https://www.pwg.org/blog/printing-from-mobile-devices-2.html",
      publisher: "Printer Working Group (PWG)",
    },
    {
      title: "IrDA (Windows 2000 Server documentation, archived)",
      url: "https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-2000-server/cc961385(v=technet.10)",
      publisher: "Microsoft",
    },
    {
      title: "Basic Printing Profile 1.2 (specification page)",
      url: "https://www.bluetooth.com/specifications/specs/basic-printing-profile-1-2/",
      publisher: "Bluetooth SIG",
    },
    {
      title:
        "PIXMA MX530 series Online Manual — Printing from Mobile Phone via Bluetooth Communication",
      url: "https://ij.manual.canon/ij/webmanual/Manual/M/MX530%20series/EN/UG/ug_wireless0400.html",
      publisher: "Canon",
    },
    {
      title:
        "PIXMA MX530 series Online Manual — Printing with Bluetooth Compliant Devices other than a Computer",
      url: "https://ij.manual.canon/ij/webmanual/Manual/M/MX530%20series/EN/BTG/btg_print0200.html",
      publisher: "Canon",
    },
    {
      title: "Bonjour Printing Specification",
      url: "https://developer.apple.com/bonjour/printing-specification/",
      publisher: "Apple",
    },
    {
      title:
        "Apple's AirPrint Wireless Printing for iPad, iPhone & iPod touch Coming to Users in November",
      url: "https://www.apple.com/newsroom/2010/09/15Apples-AirPrint-Wireless-Printing-for-iPad-iPhone-iPod-touch-Coming-to-Users-in-November/",
      publisher: "Apple Newsroom",
    },
    {
      title:
        "Report: Mac-to-iOS print sharing is missing in action (November 2010)",
      url: "https://www.macworld.com/article/208923/airprint_report.html",
      publisher: "Macworld",
    },
    {
      title:
        "EFI to Debut PrintMe Networks, a New Standard in Internet Printing",
      url: "https://whattheythink.com/news/13642-efi-debut-printme-networks-new-standard-internet/",
      publisher: "WhatTheyThink (reproducing an EFI release)",
    },
    {
      title:
        "HP unveils remote printing service for BlackBerry devices (21 April 2010)",
      url: "https://www.computerworld.com/article/1548833/hp-unveils-remote-printing-service-for-blackberry-devices.html",
      publisher: "Computerworld (Agam Shah)",
    },
    {
      title: "An update on Google Cloud Print (7 June 2010)",
      url: "https://blog.chromium.org/2010/06/update-on-google-cloud-print.html",
      publisher: "Chromium Blog (Google)",
    },
  ],
  cluster: "printing-evolution",
};

export default entry;
