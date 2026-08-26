import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  section: "tools",
  slug: "fax-over-ip-t38",
  title: "T.38 Fax Relay (Fax over IP)",
  description:
    "Reference entry on ITU-T T.38: how a gateway demodulates a T.30 call, relays it as IFP packets over UDPTL, and re-modulates it at the far end.",
  summary:
    "ITU-T Recommendation T.38 defines procedures for real-time Group 3 facsimile communication over IP networks. It does not turn a fax into a network document format and it does not send the call as audio. Instead it takes the call apart: a gateway on the sending side demodulates the V.21 control channel and the V.27ter, V.29 or V.17 image carrier to recover the underlying T.30 bit stream, packetises that stream as Internet Facsimile Protocol (IFP) packets, and a gateway on the receiving side re-modulates it into a fresh analogue conversation with the terminal at its end. The two fax machines never speak to each other. Each speaks to a gateway that is impersonating the telephone line it still believes it is connected to — and every characteristic failure mode of fax over IP is a seam in that impersonation.",
  purpose:
    "A standard for carrying a live Group 3 fax call across a packet network by relaying the decoded T.30 session between gateways rather than transporting the modem audio.",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "T.38 is an ITU-T Recommendation, not an IETF standard. There is no 'T.38 RFC'; the IETF's contribution is media-type registration and SIP plumbing.",
        "A T.38 gateway demodulates the fax carriers to recover the T.30 bit stream and re-modulates it at the far end. It does not decode and re-encode the page image, and it does not carry modem tones.",
        "The dominant transport is UDPTL — T.38's own UDP layer, carrying a primary IFP frame plus redundant copies — with TCP and, from a later edition, RTP as alternatives.",
        "Gateways must generate artificial T.30 timing so that endpoint protocol timers do not expire while packets are in flight. That spoofing is what makes relay work and what makes it fragile.",
        "Relay narrows the failure surface; it does not close it. The ITU-T maintains its own Implementors' Guide cataloguing defects and ambiguities found in real T.38 implementations.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "What T.38 is",
    },
    {
      kind: "paragraph",
      text: "T.38 is the ITU-T Recommendation titled \"Procedures for real-time Group 3 facsimile communication over IP networks.\" Its base edition is dated 06/98, and the ITU-T's own edition listing then runs 03/02, 04/04, 09/05, 04/07 and 09/10, with the 11/15 edition in force. Successive editions and amendments added protocol versions, RTP as a transport option, V.34 half-duplex support and call-establishment procedures for SIP and SDP. Because those additions arrived over seventeen years, any statement about what \"T.38 does\" should name the edition it describes; trade coverage that dates the standard to 1996, or treats it as a single 2002 document, is describing something the ITU-T's own record does not contain.",
    },
    {
      kind: "paragraph",
      text: "Two boundaries define the entry. First, T.38 is not an IETF standard. Sources that cite a \"T.38 RFC\" are conflating the Recommendation with the small set of IETF documents that make it usable inside SIP: RFC 3362 registers the image/t38 media type so an SDP offer can name a T.38 session, RFC 4612 registers audio/t38 for IFP packets carried inside RTP, and RFC 6913 defines the sip.fax media feature tag. RFC 4612 is classified Historic, which is a fact worth stating whenever it is cited.",
    },
    {
      kind: "paragraph",
      text: "Second, T.38 is not VoIP and is not \"fax over SIP.\" Call control and media are separate layers. SIP, H.323, MGCP or a vendor call-control protocol negotiates the switch into a fax session; T.38 governs what crosses the network once that switch has happened. Confusing the two produces the common but wrong claim that a T.38 call is a voice call with a different codec.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Why the audio cannot simply be carried",
    },
    {
      kind: "paragraph",
      text: "A Group 3 fax machine is a modem attached to a scanner and a printer. On a voice-grade telephone circuit it worked because the circuit was indifferent to what it carried: it reproduced a waveform, and a modulated carrier is a waveform like any other. A packet voice channel makes no such promise. It is engineered for speech, and the three things it does to make speech cheap and tolerable — lossy low-bit-rate coding, a jitter buffer that reorders and discards, and an acceptance that a small percentage of packets will simply not arrive — are each individually destructive to a modem signal. A vocoder models the human vocal tract; it has nothing to model when handed a V.29 carrier, and what emerges is not a degraded fax tone but a different signal altogether.",
    },
    {
      kind: "paragraph",
      text: "The alternative to relay is therefore not \"no standard.\" ITU-T V.152 standardises voice-band data: the transport of modem, fax and text-telephony signals across a packet voice channel using a codec appropriate to such signals, typically G.711, with negotiation at call setup. Its 09/10 edition explicitly contemplates hybrid deployments in which fax may travel either as voice-band data or as T.38 relay. Pass-through is a specified mode, not a workaround; the honest framing is a choice between two standardised approaches with different costs, not a standard versus a hack.",
    },
    {
      kind: "table",
      caption: "Two standardised ways to move a fax call across a packet network",
      headers: [
        "Property",
        "T.38 relay",
        "Voice-band data pass-through (V.152)",
      ],
      rows: [
        [
          "What crosses the network",
          "Decoded T.30 messages and image data as IFP packets",
          "Encoded audio of the modem carriers themselves",
        ],
        [
          "Codec dependence",
          "None — the modulation is terminated at the gateway",
          "Requires a codec that preserves the waveform, in practice G.711",
        ],
        [
          "Sensitivity to loss",
          "Managed by IFP redundancy and, over RTP, by FEC",
          "Directly destructive; a lost packet is lost carrier",
        ],
        [
          "Bandwidth",
          "Low — only the recovered bit stream is sent",
          "Full uncompressed voice channel for the duration of the call",
        ],
        [
          "Where the T.30 state machine lives",
          "Partly at each gateway, which holds a local state machine",
          "Only at the two terminals; the network is transparent",
        ],
      ],
    },
    {
      kind: "paragraph",
      text: "The bandwidth difference is not marginal. A patent filed in February 1999 for real-time facsimile over data networks describes packetising the recovered signal at roughly one-twentieth the bandwidth of carrying the same call as VoIP audio — a figure from a period filing rather than a measured benchmark, but one that explains why relay was pursued at all. It was cheaper as well as more robust.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The gateway mechanism",
    },
    {
      kind: "paragraph",
      text: "Vendor documentation for fax relay states the mechanism in four stages, and they are the clearest available description of what an implementation actually does.",
    },
    {
      kind: "steps",
      steps: [
        {
          title: "Demodulate",
          text: "The transmitting gateway receives the incoming T.30 fax signals from the attached terminal and demodulates them — the V.21 low-speed control channel that carries the T.30 messages, and the V.27ter, V.29 or V.17 carrier that carries page data — recovering the underlying bit stream.",
        },
        {
          title: "Translate",
          text: "The recovered T.30 signals are translated into T.38 IFP packets, the Internet Facsimile Protocol packet format defined by the Recommendation.",
        },
        {
          title: "Exchange",
          text: "IFP packets are exchanged between the two gateways across the IP network, under whichever transport was negotiated.",
        },
        {
          title: "Re-modulate",
          text: "The receiving gateway translates the IFP packets back into T.30 signals and modulates them onto the analogue line for the terminal at its end, which hears an ordinary fax call.",
        },
      ],
    },
    {
      kind: "callout",
      tone: "warning",
      title: "The gateway does not re-encode the page",
      text: "A persistent error in secondary writing is that a fax gateway decodes the image and re-encodes it. It does not. What is demodulated is the modulation; the T.4 or T.6 compressed image data inside the T.30 session passes through as bits, untouched. Note also that full demodulation is not the only approach ever built — at least one period patent describes detecting the modulation rate and packetising with partial rather than full demodulation.",
    },
    {
      kind: "heading",
      level: 2,
      text: "IFP packets, UDPTL and redundancy",
    },
    {
      kind: "paragraph",
      text: "The unit T.38 defines is the IFP packet, which carries either a T.30 message recovered from the control channel or a run of image data. How IFP packets reach the far gateway is a separate question, and it is the one most often reported backwards. T.38's own UDP transport layer, UDPTL, is the dominant transport: a UDPTL datagram carries a primary IFP frame together with a number of redundant copies of previously sent frames, with the redundancy count carried in the UDPTL header's control field. TCP is defined as an alternative, and RTP was added as a further option by a later edition rather than being present from the start.",
    },
    {
      kind: "paragraph",
      text: "The distinction matters because the error-recovery machinery differs by transport. Under UDPTL, resilience comes from that in-band redundancy — a lost datagram is recoverable if a later one still carries a copy of the frame it contained — whereas the IETF's redundant-payload and generic-FEC mechanisms apply only where IFP packets are carried inside RTP.",
    },
    {
      kind: "paragraph",
      text: "Redundancy also has a hard ceiling. It protects against loss up to the depth configured; beyond that, frames are simply gone, and what the terminal experiences is a corrupted page or a failed session. Error Correction Mode, defined in T.30 itself, retransmits damaged frames within the fax protocol and is enabled by default in at least one major vendor's implementation — which also recommends disabling it on links with two percent or greater packet loss, because ECM retransmission across a lossy relay can turn a degraded page into a failed call.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Spoofing the T.30 clock",
    },
    {
      kind: "paragraph",
      text: "T.30 is a timer-bound protocol. It was written for a circuit where the far terminal's answer arrived after a propagation delay measured in milliseconds, and its response windows encode that assumption. Once the two terminals are talking to gateways instead of to each other, the network delay between the gateways sits inside those windows, and the terminals will time out on silence that is not really silence.",
    },
    {
      kind: "paragraph",
      text: "The resolution is spoofing — a term that in this literature has nothing to do with security. Each gateway generates artificial T.30 signalling toward its attached terminal, stretching or synthesising the parts of the handshake that keep the terminal inside its own timers while packets are in transit. Vendor documentation describes this for its own products, along with the related constraint that low-bit-rate vocoders cannot carry T.30 modem signals at all. Specific timeout figures quoted in such guides are observations about particular implementations, and should not be presented as ITU-T requirements.",
    },
    {
      kind: "editorialAside",
      title: "The impersonation is the design",
      text: "It is tempting to read fax over IP as a translation of fax into a network protocol. It is closer to the opposite. Nothing about the fax machine changed: it still dials, still listens for an answer tone, still runs the same timers. What changed is that the thing answering is no longer another fax machine but a gateway convincingly pretending to be a telephone line. The capability was carried forward by being faked well, and each of the failure modes below is a place where the fake shows through.",
    },
    {
      kind: "heading",
      level: 2,
      text: "TCF and rate management",
    },
    {
      kind: "paragraph",
      text: "Before page data flows, a T.30 call includes a training check field — a burst at the proposed speed that lets the receiver confirm the line will sustain it. Relay creates a genuine branch point here, because there is no longer a single line to test. T.38 defines two rate-management models. Under localTCF, the gateway generates the training check toward its own terminal and evaluates the one it receives, so the sequence never crosses the network. Under transferredTCF, the training check is carried across. The choice is not an implementation detail: T38FaxRateManagement is a required SDP parameter in the audio/t38 registration, so the two ends must agree on a model before the session can carry a training check at all. Writing that \"the gateway forwards the training sequence\" describes only one of the two models.",
    },
    {
      kind: "heading",
      level: 2,
      text: "How a call becomes a T.38 call",
    },
    {
      kind: "paragraph",
      text: "SIP handles fax voice-first, and the IETF has said so in its own words: a fax call is indistinguishable from a voice call at the time the initial INVITE is sent, so the intent to use T.38 is unknown at call setup. That is why fax over IP is normally a mid-call renegotiation rather than an initial offer — the call is established as voice, the fax is detected, and the session is re-negotiated to a T.38 media stream. RFC 6913 defines the sip.fax media feature tag, using the caller-preferences framework, precisely so that this capability can be indicated rather than discovered by accident.",
    },
    {
      kind: "paragraph",
      text: "Detection itself relies on the tones the fax protocol already emits. RFC 4734 defines events for modem, fax and text-telephony signals, including the 1100 Hz CNG calling tone sent by a terminal operating in automatic mode, the 2100 Hz CED answer tone from an answering terminal, the phase-reversed variant used to disable echo cancellers, and the V.21 preamble flag that marks the start of T.30 messages. Signalling these events over IP lets a gateway recognise what it is carrying and switch payload types at the right moment. Note that CNG is not universal — a manually originated fax commonly sends none — which is one reason detection-based switchover is not perfectly reliable.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Why fax over IP still fails",
    },
    {
      kind: "list",
      items: [
        "Packet loss beyond the configured redundancy depth is unrecoverable at the UDPTL layer, and ECM retransmission on a lossy link can convert a degraded page into a failed session.",
        "Interoperability between independent implementations is genuinely hard. The ITU-T maintains an Implementors' Guide for T.38 recording ambiguities and defects found in the field — the standard's own maintainers documenting that deployments diverge.",
        "Rate management is a required SDP parameter, so localTCF and transferredTCF ends must agree; no source located for this entry quantifies how often they do not.",
        "V.34 fax at 33.6 kbit/s was not an original feature. The ITU-T's edition notes list V.34 half-duplex support as an amendment addition, so claims that T.38 has always carried Super G3 are anachronistic. Conversely, forcing fax down to V.17 at 14.4 kbit/s over IP is a widespread deployment convention, not something the Recommendation mandates.",
        "Spoofing is bounded. A gateway can hold a terminal inside its timers for a while; it cannot do so indefinitely, and a long enough network stall still surfaces as a timeout at the terminal.",
        "The switch into T.38 can be missed entirely if the far end does not indicate fax capability, if detection fails, or if an intermediary rewrites the media negotiation.",
      ],
    },
    {
      kind: "researchInset",
      title: "Frequently misstated about T.38",
      items: [
        "Dates: the base edition is 06/98 and the in-force text is 11/15, with editions at 03/02, 04/04, 09/05, 04/07 and 09/10 between. Datings of 1996, or references to 'the 2002 standard' as if it were the original, do not match the ITU-T's listing.",
        "Pass-through is standardised. ITU-T V.152 covers voice-band data over packet voice channels, and V.150.1 covers modem relay — the demodulate-and-re-modulate pattern is a general ITU-T strategy for voice-band data, not a fax-only invention.",
        "There is no inventor of fax over IP. Late-1990s work at several vendors converged with the ITU-T process, and a patent priority date does not establish authorship of a standard.",
        "Claims that T.38 is required for regulatory or healthcare compliance circulate widely on fax-service marketing pages and are supported by no standards body or regulator source located for this entry.",
      ],
    },
    {
      kind: "callout",
      tone: "note",
      title: "Reference scope",
      text: "This is a neutral technical reference to the T.38 Recommendation and the mechanism it defines. Edition dates are given as published by the ITU-T, in the ITU-T's MM/YY form, and RFC dates as published by the RFC Editor. Behaviour described from manufacturer documentation is attributed as such and should not be read as normative. This page carries no pricing, product recommendations or compliance advice.",
    },
  ],
  faqs: [
    {
      q: "Does T.38 send the fax as audio over the internet?",
      a: "No. A T.38 gateway demodulates the V.21 control channel and the V.27ter, V.29 or V.17 image carrier, recovers the T.30 bit stream, and sends it as IFP packets. Nothing on the wire between the gateways is a modem tone. Carrying the tones themselves inside a voice stream is voice-band data pass-through, a separate arrangement standardised by ITU-T V.152.",
    },
    {
      q: "Does T.38 run over RTP?",
      a: "It can, but that is not the mainstream case. The dominant transport is UDPTL, T.38's own UDP transport layer, which carries a primary IFP frame plus redundant copies of earlier frames with the redundancy count in its header. TCP is also defined, and RTP was added by a later edition. The IETF redundancy and FEC mechanisms apply only to the RTP-carried case; the RTP registration, RFC 4612, is classified Historic.",
    },
    {
      q: "Is T.38 an RFC?",
      a: "No. T.38 is an ITU-T Recommendation. The IETF documents around it register media types and define SIP signalling — RFC 3362 for image/t38, RFC 4612 for audio/t38, RFC 6913 for the sip.fax feature tag — but the fax relay protocol itself is not an IETF specification.",
    },
    {
      q: "Why does the gateway have to spoof T.30 timing?",
      a: "Because T.30's response windows assume a circuit, not a packet network. With gateways in the middle, network delay sits inside those windows and the attached terminals would time out. Each gateway therefore generates artificial T.30 signalling toward its own terminal to keep it inside its timers while packets cross the network. This is documented by vendors for their own implementations; specific timeout values quoted in such guides are implementation observations, not ITU-T requirements.",
    },
    {
      q: "Does T.38 make fax over IP reliable?",
      a: "It narrows the failure surface rather than closing it. Packet loss beyond the configured redundancy, rate-management mismatches between localTCF and transferredTCF, ECM behaviour on lossy links, and implementation divergence all still break sessions. The ITU-T's own Implementors' Guide for T.38 exists because implementations were found to interpret the Recommendation differently.",
    },
  ],
  related: [
    { section: "fax", slug: "internet-fax-t37-and-t38" },
    { section: "models", slug: "group-3-fax-machines" },
    { section: "models", slug: "super-g3-fax-machines" },
    { section: "fax", slug: "analog-fax-vs-digital-fax" },
    { section: "fax", slug: "how-fax-machines-work" },
    { section: "models", slug: "group-4-fax-machines" },
    { section: "fax", slug: "why-fax-is-still-used" },
  ],
  published: "2026-08-26",
  updated: "2026-08-26",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "t.38",
    "fax over ip",
    "foip",
    "fax relay",
    "udptl",
    "ifp packets",
    "t.30 spoofing",
    "g.711 fax pass-through",
    "v.152 voice-band data",
    "localtcf transferredtcf",
    "ecm error correction mode",
    "sip fax negotiation",
  ],
  sources: [
    {
      title:
        "ITU-T Recommendation T.38 — Procedures for real-time Group 3 facsimile communication over IP networks",
      url: "https://www.itu.int/rec/T-REC-T.38/en",
      publisher: "ITU-T",
    },
    {
      title: "T.Imp38 — Implementors' Guide for ITU-T T.38 (02/2015)",
      url: "https://www.itu.int/rec/T-REC-T.Imp38-201502-S",
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
        "ITU-T Recommendation V.152 (09/2010) — Procedures for supporting voice-band data over IP networks",
      url: "https://www.itu.int/rec/T-REC-V.152-201009-I",
      publisher: "ITU-T",
    },
    {
      title:
        "ITU-T Recommendation V.150.1 (01/2003) — Modem-over-IP networks",
      url: "https://www.itu.int/rec/dologin_pub.asp?lang=e&id=T-REC-V.150.1-200301-I!!PDF-E&type=items",
      publisher: "ITU-T",
    },
    {
      title:
        "RFC 3362 — Real-time Facsimile (T.38) - image/t38 MIME Sub-type Registration",
      url: "https://www.rfc-editor.org/info/rfc3362/",
      publisher: "IETF / RFC Editor",
    },
    {
      title:
        "RFC 4612 — Real-Time Facsimile (T.38) - audio/t38 MIME Sub-type Registration",
      url: "https://www.rfc-editor.org/rfc/rfc4612.html",
      publisher: "IETF / RFC Editor",
    },
    {
      title:
        "RFC 4734 — Definition of Events for Modem, Fax, and Text Telephony Signals",
      url: "https://www.rfc-editor.org/rfc/rfc4734.html",
      publisher: "IETF / RFC Editor",
    },
    {
      title:
        "RFC 6913 — Indicating Fax over IP Capability in the Session Initiation Protocol (SIP)",
      url: "https://www.rfc-editor.org/rfc/rfc6913.html",
      publisher: "IETF / RFC Editor",
    },
    {
      title:
        "Configuring T.38 Fax Relay (Fax, Modem, and Text Support over IP Configuration Guide)",
      url: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/voice/fax/configuration/15-mt/vf-15-mt-book/Configuring_T_38_Fax_Relay.html",
      publisher: "Cisco Systems",
    },
    {
      title: "Troubleshoot Fax Relay (document 20227)",
      url: "https://www.cisco.com/c/en/us/support/docs/voice/fax-modem-over-ip/20227-faxrelay-tsguide.html",
      publisher: "Cisco Systems",
    },
    {
      title:
        "US 6,483,600 B1 — System and method for communicating real-time facsimiles over data networks",
      url: "https://patents.google.com/patent/US6483600B1/en",
      publisher: "USPTO / Google Patents",
    },
  ],
  cluster: "printing-protocols",
};

export default entry;
