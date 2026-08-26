import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "fax",
  slug: "internet-fax-t37-and-t38",
  title: "Internet Fax Standards: T.37 Store-and-Forward and T.38 Real-Time",
  description:
    "Why T.37 store-and-forward and T.38 real-time relay are complements rather than generations, and what email had to rebuild once the live fax session was gone.",
  summary:
    "A fax call is not a file transfer. Under ITU-T Recommendation T.30, two terminals hold a live conversation with response windows built into it: capabilities are declared, a page is sent, the receiver answers, and the sender waits. When the page had to cross a data network instead of a telephone circuit, that conversation could be abandoned or it could be preserved, but it could not be half-kept. The ITU-T published both answers, and the base editions of T.37 and T.38 both carry the same date — 06/98. They are two settlements of one architectural question, not two stages of one technology.",
  era: "Two roads onto the packet network",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "T.30 is a timer-bound live session, not a document handoff. Every design for fax over a data network is a response to that single fact.",
        "T.37 abandons the session and moves the page into Internet mail as a TIFF-FX attachment, which forced confirmation and capability negotiation to be rebuilt from scratch in later RFCs.",
        "T.38 keeps the session and has a gateway demodulate the fax carriers and relay decoded T.30 messages. It does not send the call as audio.",
        "Both Recommendations carry a 06/98 base edition and both remain in force. The widely repeated 'T.38 replaced T.37' sequencing is not how the ITU-T frames them.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "The thing that had to be preserved or abandoned",
    },
    {
      kind: "paragraph",
      text: "Group 3 facsimile splits its work across two layers that behave very differently. Image coding and terminal characteristics belong to T.4; the call itself — the part that makes fax a session rather than a transfer — belongs to T.30. A T.30 call opens with low-speed V.21 signalling in which the called terminal announces what it can do and the caller selects from that set. Page data then moves at higher speed over the V-series modem carriers, and after each page the receiver returns a message confirming what it did or did not get. The sender is not free to proceed until that answer arrives.",
    },
    {
      kind: "paragraph",
      text: "That last property is the whole difficulty. The confirmation is not an application-level receipt bolted on afterwards; it is part of the call, and the call has response windows. The in-force edition of T.30 is dated 09/05, and its Amendment 1 (01/07) concerns the extension of a silence period during fallback from V.34 — a detail worth noticing, because it shows that timing tolerances in T.30 are themselves normative text, still being adjusted a decade after the internet-fax Recommendations appeared. A design that introduces arbitrary delay between the two terminals is not slowing a fax down. It is breaking the protocol's own contract about when an answer is expected.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Where the timing claim comes from",
      text: "The argument that a live T.30 session cannot simply be store-and-forwarded rests on T.30's own response behaviour, and on the IETF's framing of the problem — the Internet Fax working group set itself the goal of achieving full equivalence of T.30 service over Internet mail. A body does not set out to achieve equivalence with something it already has.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Two answers, one approval season",
    },
    {
      kind: "paragraph",
      text: "The popular telling gives T.37 first and T.38 as its successor, usually with a gap of several years implied between them. The ITU-T's own edition listings do not support that. T.37, covering the transfer of facsimile data by store-and-forward on the internet, carries a 06/98 base text; T.38, covering real-time Group 3 facsimile over IP networks, carries a 06/98 base text as well. What genuinely differs is what happened afterwards.",
    },
    {
      kind: "archivalTable",
      caption:
        "Published editions and amendments, as listed by the ITU-T (dates in the ITU-T's MM/YY form)",
      headers: ["Recommendation", "Editions and amendments listed"],
      rows: [
        [
          "T.37 (store-and-forward)",
          "Base text 06/98; Amendment 1 (09/99, Full Mode); Amendment 2 (03/01, RFC reference update); Amendment 3 (11/02, support of the image/tiff and image/tiff-fx MIME content types)",
        ],
        [
          "T.38 (real-time)",
          "Editions 06/98, 03/02, 04/04, 09/05, 04/07, 09/10, with 11/15 the in-force edition; accompanied by T.38 Implementors' Guides (T.Imp38) dated 02/00, 03/11 and 05/2012",
        ],
        [
          "T.30 (the session being relayed or replaced)",
          "In-force edition 09/05, with Amendment 1 (01/07) extending a silence period during fallback from V.34",
        ],
      ],
      sources: [
        "ITU-T Recommendation T.37 edition list",
        "ITU-T Recommendation T.38 edition list",
        "ITU-T Recommendation T.30 edition list",
      ],
    },
    {
      kind: "paragraph",
      text: "Read as maintenance history rather than as succession, the picture is straightforward. The edition lists record the divergence without explaining it. What they do show is that T.37's substance lives largely in IETF documents that continued on their own schedule, while T.38 needed repeated Implementors' Guides — a pattern consistent with relay being the harder thing for two independent vendors to implement identically. Neither pattern makes one Recommendation obsolete. Both remain in force.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What the store-and-forward side actually specifies",
    },
    {
      kind: "paragraph",
      text: "T.37's answer is to stop pretending there is a session at all. The page becomes an attachment to an ordinary Internet mail message, submitted and relayed by SMTP like any other mail, and delivered either to a mailbox or to a gateway that dials out. The IETF's simple mode was published as RFC 2305 in March 1998 and superseded by RFC 3965 in December 2004; it describes precisely the topologies the architecture implies — an onramp gateway that answers a telephone call from a Group 3 machine and emits mail, and an offramp gateway that receives mail and places the telephone call at the far end.",
    },
    {
      kind: "paragraph",
      text: "The payload is where vendor literature most reliably goes wrong. Simple mode requires the minimum TIFF profile — profile S — defined in RFC 2301 (March 1998) and revised as RFC 3949 (February 2005), which specifies the profile set S, F, J, C, L and M with profile S mandatory. That family is TIFF-FX. It is not TIFF-F, which is a different thing: RFC 2306, also published in March 1998, states in its own words that TIFF-F had been folklore with no standard reference definition before that document, and credits an informal specification by a group led by Joe Campbell. Writing that T.37 uses TIFF-F conflates a retrospectively documented convention with the profile the specification actually names. T.37's Amendment 3 (11/02) later added support for the image/tiff and image/tiff-fx MIME content types outright.",
    },
    {
      kind: "paragraph",
      text: "The remaining piece is addressing. A telephone number is not an email address, so RFC 3192 (October 2001) defined a minimal form for expressing a public-network fax destination inside one — the FAX=+number construction, optionally carrying a T.33 subaddress — which is what lets an offramp gateway be told where to dial. Manufacturer documentation for configuring onramp and offramp fax on router platforms describes the same two halves in implementation terms.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Rebuilding what the session used to provide free",
    },
    {
      kind: "paragraph",
      text: "Once the session is gone, two things go with it, and the sequence of RFCs after 1998 is essentially the work of putting them back. The first is confirmation. In a T.30 call, the receiver's per-page message tells the sender that a specific page arrived, inside the call, while the caller is still on the line. Mail has no equivalent: successful submission says nothing about delivery, and delivery says nothing about rendering. RFC 2532 (March 1999) responded by making delivery and disposition notifications a required part of extended-mode internet fax rather than an optional courtesy.",
    },
    {
      kind: "paragraph",
      text: "The second is negotiation. T.30 asks the far end what it can receive before anything is sent, so a sender never transmits a resolution or coding the receiver cannot handle. A store-and-forward sender has no one to ask. RFC 4142 (November 2005), the full-mode fax profile for internet mail, states its purpose in those terms: adding reliability and capability negotiation to email so that it matches what classical T.30 already did. Seven years separate the simple-mode publication from that statement, which is a fair measure of how much of a fax call is not the image.",
    },
    {
      kind: "editorialAside",
      title: "Why this is not merely 'slower fax'",
      text: "Store-and-forward is often described as fax with latency added. That undersells the change. What actually shifts is the reliability contract: in a live call, failure is discovered by the sender during the call; in mail, failure is discovered by a notification that may or may not come back, from a chain of relays none of which understood that they were carrying a page. The reason full mode exists is that a queued attachment and a completed handshake are not the same promise.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The other half of the choice: keeping the session alive",
    },
    {
      kind: "paragraph",
      text: "T.38 takes the opposite branch. The T.30 conversation is preserved end to end, and a gateway at each edge makes the packet network carry it — demodulating the V.21 signalling and the page carrier, forwarding the recovered T.30 messages and image data as packets, and remodulating them for the terminal on the far side. What crosses between the two gateways is therefore decoded protocol rather than sound. This is the correction the popular sources most need: T.38 is not the fax call sent as audio over the internet. Carrying the modem tones themselves in a voice stream is fax pass-through, a different arrangement, and one that a lossy voice codec handles badly for reasons that belong to the modem, not to fax.",
    },
    {
      kind: "paragraph",
      text: "The transport detail also gets reported backwards. The mainstream negotiation is image/t38 over UDPTL, registered in RFC 3362; the RTP-carried alternative registered as audio/t38 in RFC 4612 (August 2006) is classified Historic. The relay mechanism itself — packet structure, redundancy, error correction, and the gateway's job of holding a local state machine inside its timers while packets are in flight — is the subject of this archive's separate reference entry on T.38 in its tools section, and is deliberately not repeated here. What matters for the comparison is only that the session survives, and that surviving it is the entire cost.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Complements, not generations",
    },
    {
      kind: "paragraph",
      text: "Set side by side, the two Recommendations answer different questions, which is why the ITU-T never treated them as alternatives.",
    },
    {
      kind: "table",
      caption: "The architectural split, as the specifications define it",
      headers: [
        "Question",
        "T.37 store-and-forward",
        "T.38 real-time relay",
      ],
      rows: [
        [
          "Is the T.30 session preserved?",
          "No — it terminates at the onramp and is re-established at the offramp",
          "Yes — it is relayed end to end between terminals",
        ],
        [
          "What crosses the data network?",
          "An Internet mail message carrying a TIFF-FX attachment (RFC 2301, revised as RFC 3949)",
          "Decoded T.30 messages and image data as packets, negotiated as image/t38 over UDPTL",
        ],
        [
          "How does the sender learn the page arrived?",
          "By delivery and disposition notification, made required by RFC 2532",
          "By the far terminal's own T.30 confirmation, relayed back",
        ],
        [
          "How are capabilities agreed?",
          "Not natively; added later by the full-mode profile, RFC 4142",
          "By the terminals' own T.30 exchange, which the gateways pass through",
        ],
        [
          "What does latency do to it?",
          "Nothing structural — delay is expected and tolerated",
          "It is the central engineering problem the design exists to manage",
        ],
      ],
    },
    {
      kind: "researchInset",
      title: "Frequently misstated in the secondary literature",
      items: [
        "Sequencing: both Recommendations carry a 06/98 base edition. The multi-year gap implied by much vendor writing is not in the ITU-T's edition lists.",
        "Status: neither has been withdrawn in favour of the other. T.37's last listed amendment is 11/02; T.38's in-force edition is 11/15. Different maintenance histories, not succession.",
        "Payload: T.37's specified profile set is TIFF-FX (RFC 2301, revised as RFC 3949), not TIFF-F, which RFC 2306 describes as previously undocumented folklore.",
        "Transport: image/t38 over UDPTL (RFC 3362) is mainstream; audio/t38 over RTP (RFC 4612) is classified Historic. Sources that present RTP as the standard have it inverted.",
        "Attribution: no individual should be credited with inventing fax over IP. 3Com's US 6,483,600 B1, for instance, was filed on 26 February 1999 and granted on 19 November 2002 — after the June 1998 base editions — and a patent priority date does not establish authorship of a standard.",
        "Endpoints: T.38 is overwhelmingly a gateway function. Native internet-aware fax terminals exist, but writing as though fax machines generally speak T.38 misdescribes deployment.",
        "Vocabulary: 'internet fax' is used loosely for T.37, for T.38, and for consumer email-to-fax products. Marketing use of the phrase is evidence about nothing in particular.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "Where the 1998 choice still lives",
    },
    {
      kind: "paragraph",
      text: "Both branches converge on the same object at the edge: a gateway that holds a genuine T.30 conversation with a Group 3 machine over the telephone network while, on its other side, speaking something entirely different. The onramp and offramp gateways of the store-and-forward design and the relay gateways of the real-time design are variations on that one component. It is the piece that never became obsolete, because the machines it dials never all went away.",
    },
    {
      kind: "paragraph",
      text: "That is also the honest description of what a fax app on a phone is. Nothing about the device speaks T.30; the document is submitted over a data network to a service, and the service runs the offramp — placing the telephone call, negotiating capabilities with whatever answers, and returning a result. The interface is new and the architecture is the one settled in 1998. Understanding which half of that settlement a given service implements is the difference between expecting a delivery notification and expecting a handshake, and those are not the same promise.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Reference scope",
      text: "This page describes the architectural distinction between the two Recommendations and the documents that define them. Dates are given as published by the ITU-T and the RFC Editor. It carries no pricing, product recommendations, or performance claims, and is not legal advice about fax retention or transmission requirements.",
    },
  ],
  faqs: [
    {
      q: "Did T.38 replace T.37?",
      a: "No. Both were published with 06/98 base editions and both remain in force. They answer different questions: T.37 defines transfer by store-and-forward over Internet mail, T.38 defines real-time relay of a live T.30 session over IP. Their maintenance histories diverge — T.37's last listed amendment is 11/02, while T.38's in-force edition is 11/15 — but divergent maintenance is not succession.",
    },
    {
      q: "What image format does T.37 carry?",
      a: "The TIFF-FX profile set defined in RFC 2301 and revised as RFC 3949, which specifies profiles S, F, J, C, L and M with profile S mandatory. This is not TIFF-F; RFC 2306 states that TIFF-F had been folklore with no standard reference definition before March 1998. T.37 Amendment 3 (11/02) added support for the image/tiff and image/tiff-fx MIME content types.",
    },
    {
      q: "Why did internet fax need extra RFCs after 1998?",
      a: "Because store-and-forward discards the live session, and the session was providing two things for free: per-page confirmation and pre-transmission capability negotiation. RFC 2532 (March 1999) made delivery and disposition notifications required, and RFC 4142 (November 2005) added reliability and capability negotiation with the stated goal of matching classical T.30.",
    },
    {
      q: "How is a telephone number expressed for an offramp gateway?",
      a: "RFC 3192 (October 2001) defines a minimal fax address format inside Internet mail — the FAX=+number construction, optionally carrying a T.33 subaddress — which tells a gateway what to dial.",
    },
  ],
  related: [
    { section: "models", slug: "group-3-fax-machines" },
    { section: "fax", slug: "analog-fax-vs-digital-fax" },
    { section: "tools", slug: "tiff" },
    { section: "models", slug: "super-g3-fax-machines" },
    { section: "models", slug: "laser-fax-machines" },
  ],
  published: "2026-08-26",
  updated: "2026-08-26",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "t.37 store and forward fax",
    "t.38 fax over ip",
    "internet fax standards",
    "tiff-fx rfc 3949",
    "rfc 2305 simple mode fax",
    "t.30 session timing",
    "offramp gateway",
    "fax over ip history",
  ],
  modernTools: ["fax-app"],
  sources: [
    {
      title:
        "ITU-T Recommendation T.37 — Procedures for the transfer of facsimile data via store-and-forward on the Internet",
      url: "https://www.itu.int/rec/T-REC-T.37/en",
      publisher: "ITU-T",
    },
    {
      title:
        "ITU-T Recommendation T.38 — Procedures for real-time Group 3 facsimile communication over IP networks",
      url: "https://www.itu.int/rec/T-REC-T.38/en",
      publisher: "ITU-T",
    },
    {
      title:
        "ITU-T Recommendation T.30 — Procedures for document facsimile transmission in the general switched telephone network",
      url: "https://www.itu.int/rec/T-REC-T.30/en",
      publisher: "ITU-T",
    },
    {
      title: "ITU-T T.38 Implementors' Guide (T.Imp38)",
      url: "https://www.itu.int/rec/T-REC-T.Imp38-201502-S",
      publisher: "ITU-T",
    },
    {
      title: "RFC 2305 — A Simple Mode of Facsimile Using Internet Mail",
      url: "https://www.rfc-editor.org/rfc/rfc2305.html",
      publisher: "IETF / RFC Editor",
    },
    {
      title: "RFC 3965 — A Simple Mode of Facsimile Using Internet Mail",
      url: "https://www.rfc-editor.org/rfc/rfc3965.html",
      publisher: "IETF / RFC Editor",
    },
    {
      title: "RFC 2301 — File Format for Internet Fax",
      url: "https://www.rfc-editor.org/rfc/rfc2301.html",
      publisher: "IETF / RFC Editor",
    },
    {
      title: "RFC 3949 — File Format for Internet Fax",
      url: "https://www.rfc-editor.org/rfc/rfc3949.html",
      publisher: "IETF / RFC Editor",
    },
    {
      title:
        "RFC 2306 — Tag Image File Format (TIFF) - F Profile for Facsimile",
      url: "https://www.rfc-editor.org/rfc/rfc2306.html",
      publisher: "IETF / RFC Editor",
    },
    {
      title: "RFC 2532 — Extended Facsimile Using Internet Mail",
      url: "https://www.rfc-editor.org/rfc/rfc2532.html",
      publisher: "IETF / RFC Editor",
    },
    {
      title: "RFC 4142 — Full-mode Fax Profile for Internet Mail (FFPIM)",
      url: "https://www.rfc-editor.org/rfc/rfc4142.html",
      publisher: "IETF / RFC Editor",
    },
    {
      title: "RFC 3192 — Minimal FAX address format in Internet Mail",
      url: "https://www.rfc-editor.org/rfc/rfc3192.html",
      publisher: "IETF / RFC Editor",
    },
    {
      title:
        "RFC 3362 — Real-time Facsimile (T.38) - image/t38 MIME Sub-type Registration",
      url: "https://www.rfc-editor.org/rfc/rfc3362.html",
      publisher: "IETF / RFC Editor",
    },
    {
      title:
        "RFC 4612 — Real-Time Facsimile (T.38) - audio/t38 MIME Sub-type Registration",
      url: "https://www.rfc-editor.org/rfc/rfc4612.html",
      publisher: "IETF / RFC Editor",
    },
    {
      title: "IETF Internet Fax (fax) Working Group charter",
      url: "https://datatracker.ietf.org/wg/fax/about/",
      publisher: "IETF Datatracker",
    },
    {
      title:
        "US 6,483,600 B1 — System and method for communicating real-time facsimiles over data networks",
      url: "https://patents.google.com/patent/US6483600B1/en",
      publisher: "USPTO / Google Patents",
    },
    {
      title:
        "Configuring T.37 Store-and-Forward Fax (Fax, Modem, and Text Support over IP Configuration Guide, Cisco IOS 15M&T)",
      url: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/voice/fax/configuration/15-mt/vf-15-mt-book/Configuring_T_37_Store_and_Forward_Fax.html",
      publisher: "Cisco Systems",
    },
  ],
  cluster: "fax-history",
};

export default entry;
