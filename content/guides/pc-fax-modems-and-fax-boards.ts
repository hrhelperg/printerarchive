import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  section: "guides",
  slug: "pc-fax-modems-and-fax-boards",
  title: "PC Fax Modems and Fax Boards: Splitting T.30 Between Card and Host",
  description:
    "Class 1, Class 2 and Class 2.0 were never versions of one another. They were a contract about which side of the serial port ran the T.30 fax procedure.",
  summary:
    "A PC fax modem was not a small fax machine on a card. It was one half of a fax machine, and the useful question about any given card is which half it was.\n\nThe half in question is T.30 — the procedure by which two Group 3 fax terminals establish a call, negotiate capabilities, agree a modulation, send a page and confirm it arrived. Somebody has to run that state machine. In a fax machine it runs on the machine's own controller. In a PC it could run on the card, or it could run in software on the host, and the AT service classes are the vocabulary the industry built to say which arrangement a particular modem offered.\n\nRead as a version ladder — Class 1, then Class 2, then Class 2.0 — the numbering is nonsense. Read as a division of labour, it explains where the structural advantage of the messier arrangement lay, and why the desktop rather than the card became the thing at the end of the phone line.",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "Class 1 and Class 2 are not successive versions of one command set. They split the T.30/T.4 fax procedure differently between the host computer and the modem.",
        "Under Class 1 (EIA/TIA-578, ITU-T T.31) the host software runs the whole fax protocol and the card only moves modulated bits. Under Class 2/2.0/2.1 (TIA-592, ITU-T T.32) the modem runs it.",
        "What vendors labelled “Class 2” was never an approved standard: it followed a TIA/EIA draft, SP-2388-A of 30 August 1991, which is why Class 2 modems from different vendors disagreed with each other.",
        "Class 1 kept a structural advantage for an unglamorous reason — host software could be patched in the field, and modem firmware could not.",
        "“Fax modem” and “fax board” are not synonyms, and late-1990s controllerless softmodems introduced a third division of labour that the class vocabulary does not describe at all.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "One machine, cut in half",
    },
    {
      kind: "paragraph",
      text: "A Group 3 fax machine bundles four things into one box: something that turns paper into a scanned image, a modem that puts that image on a telephone line, an implementation of the T.30 call procedure that decides what is sent when, and a printer that turns the far end's transmission back into paper. A personal computer already had the first and the last of these, in better form — the document was born as a file, and the received page could be looked at rather than printed. What the PC lacked was the middle two: an analogue line interface with fax-rate modulation, and T.30.",
    },
    {
      kind: "paragraph",
      text: "A fax card supplied the line interface unambiguously. Who supplied T.30 was a design decision, and it was negotiated across a serial interface between the host (the DTE) and the modem (the DCE). The command framework was the AT convention inherited from the Hayes Smartmodem, eventually standardised by the ITU as Recommendation V.250; the fax extensions live in that framework as the +F commands. TIA's Class 1 standard is written for exactly this arrangement, assuming a serial asynchronous connection over EIA/TIA-232-E (ITU-T V.24).",
    },
    {
      kind: "figure",
      image: {
        src: "/images/guides/pc-fax-modems-and-fax-boards--pci-v92-fax-modem-card.jpg",
        alt: "Internal PCI fax/data modem expansion card photographed on a plain background, showing its edge connector, RJ-11 sockets and surface-mounted components",
        width: 1920,
        height: 1445,
        caption: "A PCI V.92 fax/data modem card \u2014 the internal form of the hardware whose split with the host is what the service classes define.",
        credit: {
          source: "Jonathan Zander (Digon3), via Wikimedia Commons",
          url: "https://commons.wikimedia.org/wiki/File:PCI_V.92_Fax_Modem_Card_Digon3.jpg",
          license: "CC BY-SA 3.0",
        },
      },
    },
    {
      kind: "heading",
      level: 2,
      text: "What the service classes actually divide",
    },
    {
      kind: "paragraph",
      text: "The service classes describe the DCE's side of the bargain: how much of the fax procedure the modem is willing to perform, and therefore how much the host must perform. Their standards anchors sit in two places at once — a TIA standard in the United States and an ITU-T Recommendation internationally — which is why the same class is routinely cited under two different document numbers.",
    },
    {
      kind: "archivalTable",
      caption:
        "Fax DCE service classes, as defined by their standards documents and by the HylaFAX project's modem documentation",
      headers: ["Designation", "Standards anchor", "Who runs T.30/T.4"],
      rows: [
        [
          "Class 1 / Class 1.0",
          "EIA/TIA-578 (TIA-578-B, Rev. B, November 2000, reaffirmed 2014); ITU-T T.31 (08/95) with Amendment 1 (07/96) covering V.34 support",
          "The host. Software on the PC implements the full T.30/T.4 procedure; the modem transmits and receives frames and image data on command.",
        ],
        [
          "Class 2 (as shipped)",
          "TIA/EIA draft SP-2388-A of 30 August 1991 — a draft that was never approved as a standard",
          "The modem. But because vendors implemented a draft, the behaviour of a given “Class 2” modem is a vendor question rather than a standards question.",
        ],
        [
          "Class 2.0",
          "TIA-592 (Rev. A, April 1998); ITU-T T.32 (08/95) with Amendment 1 (07/96)",
          "The modem, under an approved specification — the arrangement Class 2 was meant to be.",
        ],
        [
          "Class 2.1",
          "Described by the HylaFAX glossary as the Class 2.0 extension adding V.34 high-speed fax working",
          "The modem, including the higher-speed modulation marketed as Super G3.",
        ],
      ],
      sources: [
        "ITU-T T.31 and T.32",
        "TIA-578-B and TIA-592 catalogue records",
        "HylaFAX supported-modems documentation and glossary",
      ],
    },
    {
      kind: "callout",
      tone: "warning",
      title: "Class 2 is not a standard",
      text: "The most durable error in this subject is treating Class 2 as the standardised predecessor of Class 2.0. HylaFAX's own modem documentation is explicit about what a Class 2 modem supports: TIA/EIA draft SP-2388-A of 30 August 1991. The approved standard is TIA-592 — Class 2.0 — with ITU-T T.32 as its international counterpart. Mutual incompatibility between Class 2 modems was not sloppiness by vendors; it was the predictable result of everyone implementing an unapproved draft independently.",
    },
    {
      kind: "paragraph",
      text: "The numbering invites the wrong reading. Class 2 looks like an improvement on Class 1, and Class 2.0 like a point release of Class 2. Neither is true. The classes are alternative contracts, and the plainest statement of what they contract over comes from a modem manufacturer's own developer documentation.",
    },
    {
      kind: "sourceCallout",
      text: "When using Class 1/1.0, the host must implement all of the T.30/T.4 protocol procedures. This is in contrast to Service Classes 2/2.0/2.1, where the modem implements all of T.30/T.4 protocol procedures.",
      attribution:
        "Multi-Tech Systems, Fax Service Class 1 and Fax Service Class 1.0 Developer's Guide (S000262C)",
      source: {
        title: "Fax Service Class 1 and Class 1.0 Developer's Guide",
        url: "https://multitech.com/wp-content/uploads/s000262c.pdf",
      },
    },
    {
      kind: "heading",
      level: 2,
      text: "Why the untidier arrangement kept its advantage",
    },
    {
      kind: "paragraph",
      text: "On paper, Class 2 is the better engineering. The timing-sensitive parts of T.30 — response windows, retrains, page confirmations — sit on a dedicated controller instead of on a general-purpose operating system that may be busy repainting a window. The host sends a page and receives a result. That is a clean interface, and it is the one a systems designer would draw first.",
    },
    {
      kind: "paragraph",
      text: "What defeated it was the field. The population of machines on the other end of the line was enormous, long-lived and irregular: terminals that negotiated capabilities they did not have, that answered too early, that failed a particular retrain in a particular way. Coping with that is a long accumulation of small accommodations, and where those accommodations live determines how quickly they can be made. Multi-Tech's guide states the trade-off directly: the extra burden on the host is what allows the host software to accommodate new fax features when its author wants them, and to fix fax incompatibilities without waiting on the modem vendor. A Class 1 fix ships as a software update. A Class 2 fix ships as a new modem.",
    },
    {
      kind: "paragraph",
      text: "This is legible in how fax software was written. Packages such as HylaFAX carry their own T.30 implementation and their own body of per-modem knowledge, and class is the attribute their documentation records for every modem: the project's supported-modems page lists each model against a Class 1, Class 2 and Class 2.0 column, and notes that a modem supporting several classes can be configured to use any single one of them but not more than one. Class had to be settled before anything else about a modem mattered, because it determined which program was responsible when a fax failed.",
    },
    {
      kind: "figure",
      image: {
        src: "/images/guides/pc-fax-modems-and-fax-boards--rockwell-c5902-fax-controller.jpg",
        alt: "Macro photograph of a square surface-mounted controller chip on a green circuit board, marked C5902-14, ROCKWELL 92, 9602, A93972-2, MEXICO",
        width: 1400,
        height: 1400,
        caption: "The controller on a Psion Dacom Gold Card V32bis + Fax, marked \u201cC5902-14 / \u00a9ROCKWELL 92\u201d with a 9602 date code. Silicon like this is the part of the card that could run the timing-critical half of a fax session \u2014 which is precisely what a softmodem later moved onto the host processor.",
        credit: {
          source: "Raimond Spekking, via Wikimedia Commons",
          url: "https://commons.wikimedia.org/wiki/File:Psion_Dacom_Gold_Card_V32bis_%2B_Fax_-_controller_-_Rockwell_C5902-14-4540.jpg",
          license: "CC BY-SA 4.0",
        },
      },
    },
    {
      kind: "heading",
      level: 2,
      text: "Fax modem, fax board, softmodem",
    },
    {
      kind: "paragraph",
      text: "The service-class story describes one specific device: a single-line fax modem presenting an AT-command interface to a host. It is easy to over-extend it to everything with the word “fax” on the box, and two other classes of hardware do not fit.",
    },
    {
      kind: "list",
      items: [
        "Single-line fax modem — internal card or external unit, one loop-start line, an AT-command DTE/DCE interface, and a declared service class. This is the device the standards describe, and the one the class debate is about.",
        "Multi-channel fax board — GammaLink's GammaFax MLCP-4 and Brooktrout's TR114 and TR1034 families are the recognisable examples. These carry their own DSPs and several loop-start or T1 interfaces, and typically expose no AT-command interface at all; the host drives them through a vendor API. Channel densities are specific to a board and DSP generation and should be taken from a named datasheet rather than assumed.",
        "Controllerless softmodem — by the late 1990s many internal “fax modems” were HSP or HCF designs in which the host CPU ran the modem itself, below the level the service classes describe. This is a third arrangement, not a variant of the first two: it puts the timing-sensitive modulation itself on a multitasking desktop rather than on dedicated silicon, and the class vocabulary has no term for it.",
      ],
    },
    {
      kind: "callout",
      tone: "note",
      title: "Not every card was a DSP card",
      text: "Describing all internal fax modems as DSP boards flattens the most interesting part of the hardware story. Between a Class 2 modem that runs the whole protocol in firmware and a controllerless softmodem that runs even the modulation on the host CPU lies the entire range of the argument this page is about.",
    },
    {
      kind: "heading",
      level: 2,
      text: "1985 or 1986? Say which you mean",
    },
    {
      kind: "paragraph",
      text: "The origin story of the PC fax board is usually told as a single dated fact, and it does not survive contact with the record. The month-by-month sequence below is the one the secondary literature repeats, and it descends from a participant's own later account rather than from contemporaneous trade reporting, which this page has not read; only the museum entry in the middle rests on an independent catalogue record. Even so, the sequence is enough to show “first” landing in a different year depending on which milestone is meant.",
    },
    {
      kind: "timeline",
      events: [
        {
          period: "April 1984",
          text: "GammaLink announces a 9600 bps Rockwell-chipset plug-in card for the IBM PC — a data modem, not a fax card.",
        },
        {
          period: "August 1985",
          text: "Working Group 3 fax software is delivered, making a functioning PC fax system.",
        },
        {
          period: "December 1985",
          text: "A two-board PC fax solution is announced.",
        },
        {
          period: "Catalogued as 1985",
          text: "The Smithsonian's GammaFax card, serial #1004, is recorded as number 4 of the first batch of ten hand-assembled units, and described as being used to let a personal computer print directly to a facsimile machine.",
        },
        {
          period: "June 1986",
          text: "The redesigned single-board GammaFax product ships. Other entrants — JT Fax, FIT Fax, Panasonic — follow by the end of 1986.",
        },
      ],
    },
    {
      kind: "paragraph",
      text: "Both 1985 and 1986 are defensible: the first is the first working system, the second the first shipping single-board product. The archive's practice is to state the milestone rather than the superlative. The Computer History Museum's folder of GammaLink publicity photographs covers both a single-line GammaFax PC board and the multi-line MLCP-4 — the two device categories above, promoted by one company.",
    },
    {
      kind: "editorialAside",
      title: "Why we do not name a first",
      text: "Vendor corporate histories in this field have been rewritten through repeated acquisitions — GammaLink and Brooktrout both ended up inside Dialogic by way of intermediate owners — and founding dates and priority claims tend to be smoothed in the retelling. Museum catalogue records and contemporaneous trade press are the safer anchors, and both of those describe artefacts and announcements rather than winners.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The endpoint moves to the desk",
    },
    {
      kind: "paragraph",
      text: "The Smithsonian's description of its GammaFax card contains the whole shift in one phrase: the card let a personal computer print directly to a facsimile machine. On the sending side the document never became paper. It went from an application to a modulated signal, and the thing at the end of the phone line was no longer a machine that scanned but a computer that composed.",
    },
    {
      kind: "paragraph",
      text: "The software half caught up in due course. Microsoft's documented Fax Service is a TAPI-compliant service that lets users send and receive using either a local fax device or a shared network fax device, with inbound routing, device and server configuration, and archiving of sent faxes, extended through a Fax Service Provider API, a Fax Routing Extension API and a Fax Extension Configuration API. Named consumer applications such as WinFax occupied the same position from the other direction. By that point the fax hardware — Class 1 card, Class 2 modem or multi-line board — had become a peripheral of a document system rather than the document system itself.",
    },
    {
      kind: "paragraph",
      text: "One asymmetry remained, and it is the reason this story does not end tidily. Outbound faxing from a desktop is clean, because the sender knows what it is sending and to whom. Inbound faxing is not, because Group 3 carries no recipient field: a received fax arrives addressed to a telephone line, not to a person. Solving that required inference — a number per user, digits delivered by the PBX, identifiers matched against a table — and it is where the fax server, rather than the fax modem, becomes the subject. The card had already done its part: it moved the endpoint from the machine in the corridor to the desk.",
    },
    {
      kind: "researchInset",
      title: "Where this page stops short",
      items: [
        "The full texts of TIA-578-B and TIA-592 are paywalled. Their existence, revision dates and scope are cited from standards-catalogue records; no clause text is quoted, and the technical substance here is taken from ITU-T T.31 and T.32 and from manufacturer documentation.",
        "The common statement that V.250 was formerly numbered V.25ter is not confirmed by the ITU's own page for the Recommendation, and is therefore not asserted here.",
        "“Super G3” is vendor marketing rather than an ITU term. The underlying substance is V.34 half-duplex working with the corresponding T.30 provisions, surfaced in the command sets as Class 2.1 and in the 07/96 amendments to T.31 and T.32.",
        "Dates for desktop fax applications are loose in the secondary literature and are deliberately omitted rather than repeated; museum catalogue records for boxed software are the better anchor.",
        "The rights statement for the Smithsonian GammaFax object was not verified, so no image of it is reproduced.",
        "No source consulted quantifies how the Class 1 and Class 2 installed bases compared, and the argument here is about the structural advantage of each division of labour rather than about measured market share. HylaFAX's own modem page in fact advised readers choosing a modem to prefer a recommended Class 2 or Class 2.0 device over a Class 1 one.",
        "The month-level GammaLink chronology in circulation traces to a participant's recollection rather than to trade press read for this page. The trade coverage of late 1985 and 1986 that would settle it independently was not consulted, so the sequence is given as the account it is.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is a Class 2 fax modem newer or better than a Class 1 fax modem?",
      a: "Neither. The classes are not versions but a division of labour: under Class 1 and 1.0 the host software implements the whole T.30/T.4 procedure, while under Class 2, 2.0 and 2.1 the modem implements it. Class 1 had a durable practical advantage: keeping the protocol in host software meant a field problem could be fixed with a software update rather than with a new modem.",
    },
    {
      q: "Why did Class 2 modems from different manufacturers behave differently?",
      a: "Because the specification they implemented was never approved. HylaFAX's modem documentation identifies Class 2 support as support for TIA/EIA draft SP-2388-A of 30 August 1991. The approved standard is TIA-592, designated Class 2.0, with ITU-T T.32 as the international counterpart.",
    },
    {
      q: "Did Hayes create the fax AT commands?",
      a: "Hayes originated the Smartmodem AT command set that the fax commands sit inside, but the +F fax command sets came out of EIA/TIA committee work and were published internationally by the ITU as Recommendations T.31 and T.32. The AT framework itself was later standardised as ITU-T V.250.",
    },
    {
      q: "Does the service-class vocabulary apply to multi-channel fax boards?",
      a: "Generally not. Boards such as the GammaFax MLCP-4 or Brooktrout's TR114 and TR1034 carry their own DSPs and multiple line interfaces and typically present no AT-command DTE/DCE interface at all; the host drives them through a vendor API. The Class 1 and Class 2 contract describes single-line fax modems.",
    },
  ],
  sources: [
    {
      title:
        "ITU-T Recommendation T.31 — Asynchronous facsimile DCE control, Service Class 1",
      url: "https://www.itu.int/rec/T-REC-T.31/en",
      publisher: "ITU-T",
    },
    {
      title:
        "ITU-T Recommendation T.32 — Asynchronous facsimile DCE control, Service Class 2",
      url: "https://www.itu.int/rec/T-REC-T.32/en",
      publisher: "ITU-T",
    },
    {
      title:
        "ITU-T Recommendation T.30 — Procedures for document facsimile transmission in the general switched telephone network",
      url: "https://www.itu.int/rec/T-REC-T.30/en",
      publisher: "ITU-T",
    },
    {
      title:
        "ITU-T Recommendation V.250 — Serial asynchronous automatic dialling and control",
      url: "https://www.itu.int/rec/T-REC-V.250/en",
      publisher: "ITU-T",
    },
    {
      title:
        "Fax Service Class 1 and Fax Service Class 1.0 Developer's Guide (S000262C)",
      url: "https://multitech.com/wp-content/uploads/s000262c.pdf",
      publisher: "Multi-Tech Systems, Inc.",
    },
    {
      title:
        "TIA-578-B, Asynchronous Facsimile DCE Control Standard, Service Class 1 (Rev. B, November 2000)",
      url: "https://global.ihs.com/doc_detail.cfm?document_name=TIA-578&item_s_key=00119587",
      publisher: "Telecommunications Industry Association (catalogue record)",
    },
    {
      title:
        "TIA-592, Asynchronous Facsimile DCE Control Standard — Service Class 2.0 (Rev. A, April 1998)",
      url: "https://standards.globalspec.com/std/9859454/TIA-592",
      publisher: "Telecommunications Industry Association (catalogue record)",
    },
    {
      title: "Which modems can be used with HylaFAX",
      url: "https://legacy.hylafax.org/site1/modems.html",
      publisher: "HylaFAX project",
    },
    {
      title: "HylaFAX glossary",
      url: "https://www.hylafax.org/glossary/",
      publisher: "HylaFAX project",
    },
    {
      title: "Gammafax PC fax card (object record, serial #1004)",
      url: "https://americanhistory.si.edu/collections/object/nmah_1346900",
      publisher: "Smithsonian National Museum of American History",
    },
    {
      title:
        "GammaLink publicity photographs (PC Week Art Department collection, X6387.2012), catalogue no. 102774717",
      url: "https://www.computerhistory.org/collections/catalog/102774717",
      publisher: "Computer History Museum",
    },
    {
      title: "Fax Service (Windows Fax Service documentation)",
      url: "https://learn.microsoft.com/en-us/previous-versions/windows/desktop/fax/-mfax-fax-service-start-page",
      publisher: "Microsoft Learn",
    },
  ],
  published: "2026-08-26",
  updated: "2026-08-26",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "pc fax modem",
    "fax board",
    "fax service class 1",
    "fax service class 2",
    "class 2.0 fax modem",
    "eia/tia-578",
    "tia-592",
    "itu-t t.31",
    "itu-t t.32",
    "t.30 protocol",
    "at+f commands",
    "gammafax",
    "softmodem",
  ],
  cluster: "fax-history",
  related: [
    { section: "models", slug: "group-3-fax-machines" },
    { section: "models", slug: "super-g3-fax-machines" },
    { section: "fax", slug: "how-fax-machines-work" },
    { section: "fax", slug: "analog-fax-vs-digital-fax" },
    { section: "models", slug: "laser-fax-machines" },
    { section: "guides", slug: "fax-servers-and-inbound-routing" },
  ],
  difficulty: "intermediate",
  estimatedTime: "9 min read",
};

export default entry;
