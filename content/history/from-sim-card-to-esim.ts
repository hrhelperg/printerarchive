import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "from-sim-card-to-esim",
  title: "From SIM Card to eSIM: How Network Identity Stopped Being a Card",
  description:
    "What a SIM actually holds — an IMSI, a 128-bit key, a file system — and what GSMA remote provisioning changed: how the profile arrives and who authorises it.",
  summary:
    "A SIM was never really a card. It was a small file system with a secret inside it, and the plastic was packaging — a way of getting a microcontroller into a pocket and out again. When remote provisioning arrived, that file system did not go anywhere. It simply stopped travelling by hand. What changed was the delivery mechanism, and, far more consequentially, the question of who is permitted to authorise a change of identity.",
  era: "From the plastic key to the downloaded profile",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "GSM 11.11 defines the SIM as a file system of Master, Dedicated and Elementary Files. The identity that authenticates a subscriber to the network is the IMSI held in EF_IMSI, file ID \"6F 07\" — not the telephone number the public associates with a SIM.",
        "The subscriber authentication key Ki is 128 bits stored within the SIM. It never crosses the SIM–ME interface; the handset can only issue RUN GSM ALGORITHM and read what comes back.",
        "Remote provisioning arrived as three separate architectures with three separate dates: GSMA SGP.02 v1.0 on 19 December 2013 (machine-to-machine), SGP.22 v1.0 on 13 January 2016 (consumer), SGP.32 v1.0 on 26 May 2023 (IoT).",
        "\"eSIM\" is GSMA consumer branding. The standards term is Embedded UICC, and its defining property is remote provisioning, not being soldered down.",
        "A downloaded profile carries its own file system, network access applications and applets, so the GSM 11.11 lineage survives intact inside it.",
        "Authority was redistributed rather than handed to the user: profile policy rules, a device-side profile assistant supplied by the handset vendor, and a certificate authority all sit between a subscriber and their own identity.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "The card was a container for a file system",
    },
    {
      kind: "paragraph",
      text: "The document that describes what a SIM is, rather than what it looks like, is GSM 11.11 — the specification of the Subscriber Identity Module to Mobile Equipment (SIM–ME) interface, produced by ETSI's Technical Committee SMG. It is worth being precise about the provenance, because this is an easy thing to get visibly wrong: GSM 11.11 is an ETSI deliverable, not an ISO or ITU-T one. It normatively references the ISO 7816 series for the physical card it sits on, but the behaviour it specifies is committee output of the European telecommunications standards process.",
    },
    {
      kind: "paragraph",
      text: "It is also worth being precise about which GSM 11.11 anyone means. ETSI hosts a version series — v5.0.0 dated December 1995, v5.1.0 dated March 1996, v5.3.0 dated July 1996, and others besides. None of these is the founding Phase 1 document; the Phase 1 work predates them. The July 1996 PDF is the most convenient copy to read, not the origin of the idea, and describing it as \"the original SIM specification\" is a common and avoidable error.",
    },
    {
      kind: "paragraph",
      text: "What that document actually establishes is a filing system. Clause 3.1 defines three object types: a Master File at the root, Dedicated Files that act as directories beneath it, and Elementary Files that hold data. (The specification explicitly marks the older terms \"root directory\" and \"data field\" as obsolete — the tidying-up of vocabulary that happens once a design has settled.) Clause 10, \"Contents of the Elementary Files (EF)\", then enumerates what lives where. The card is not a key fob with a number printed inside it. It is a small, addressable, hierarchical store, and the handset navigates it by file identifier.",
    },
    {
      kind: "archivalTable",
      caption:
        "A sample of elementary file identifiers as listed in the GSM 11.11 annex table. The file identifier is the address the handset selects; the contents are what the network cares about.",
      headers: ["File ID", "Elementary file", "What it holds"],
      rows: [
        [
          "6F 07",
          "EF_IMSI",
          "The International Mobile Subscriber Identity — the identity actually presented to the network.",
        ],
        [
          "6F 20",
          "EF_Kc",
          "The ciphering key Kc, derived during authentication and used for over-the-air encryption.",
        ],
        [
          "2F E2",
          "ICC identification",
          "The card's own serial identifier, distinct from the subscriber identity it carries.",
        ],
        [
          "6F 38",
          "SIM service table",
          "Which optional services this particular card supports and has activated.",
        ],
      ],
      sources: [
        "GSM 11.11 v5.3.0, clause 10 and annex file-identifier table (ETSI TC-SMG, July 1996)",
      ],
    },
    {
      kind: "paragraph",
      text: "The most consequential entry in that table is the first one. EF_IMSI is what identifies a subscriber to the network. The number a person gives out — the one on a business card, the one that rings — is a different quantity entirely, held in a separate and optional elementary file that operators frequently leave unwritten because nothing depends on it. \"The SIM stores your phone number\" is the near-universal popular belief about these cards, and it is close to backwards. The SIM stores the credential the network uses to decide whether you exist; the number you recognise as yours is a routing convenience layered on top of that credential.",
    },
    {
      kind: "paragraph",
      text: "Underneath the IMSI sits the thing that makes the identity worth anything. Clause 7 of GSM 11.11 states that a subscriber authentication key Ki is used in the authentication procedure, that this key has a length of 128 bits, and that it is stored within the SIM. What the specification conspicuously does not do is provide a way to read it out. There is no SELECT-then-READ path to Ki. Instead clauses 8.16 and 9.2.16 define a command called RUN GSM ALGORITHM: the handset hands the card a challenge, the card computes internally, and the handset receives a response and a ciphering key. The secret is consumed inside the module and never crosses the interface to the phone.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "GSM 11.11 does not specify the authentication algorithm",
      text: "The specification's abbreviation list names A3 (authentication), A5 (cipher), A8 (cipher key generator) and A38, and it defines the command that invokes them. It does not define what they compute, and it does not mention COMP128 anywhere. The algorithm behind RUN GSM ALGORITHM was an operator choice; COMP128 was an example implementation circulated within the GSM industry association. The frequently repeated claim that \"GSM 11.11 standardised COMP128\" is false.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The awkward question of who made the first one",
    },
    {
      kind: "paragraph",
      text: "The ancestry of the chip card itself is genuinely contested and should be presented that way. The earliest filing usually put forward is German patent application DE1945777, \"Identifizierungsschalter\", naming Jürgen Dethloff and Helmut Gröttrup as inventors, with a priority date of 13 September 1968, a filing date of 10 September 1969 and publication on 2 July 1970. Against it stand Roland Moreno's French filings of 1974 and Kunitaka Arimura's Japanese work of 1970. The patent record supports \"earliest filed\" for Dethloff and Gröttrup. It does not settle \"who invented the smart card\", and no honest account of this period pretends that it does.",
    },
    {
      kind: "paragraph",
      text: "The SIM-specific claim is a different kind of claim and needs a different kind of caution. Giesecke+Devrient's own 2021 press release states that the company delivered the first commercial SIM card in 1991 to a Finnish GSM operator, describing it as being about the size of a credit card with a plug-in section that could be broken out. That is a manufacturer's account of its own manufacturing milestone, published by an interested party three decades after the fact. It is credible as a supply claim and it is not an invention claim: the specification work behind the SIM was ETSI committee output, and GSM 11.11's own title page credits ETSI TC-SMG as its source. \"The first commercial SIM cards were supplied by G+D\" is defensible. \"G+D invented the SIM\" is not the same sentence.",
    },
    {
      kind: "researchInset",
      title: "Frequently misstated in the secondary literature",
      items: [
        "The figure of \"300 SIM cards delivered to Radiolinja\" circulates widely through blog and vendor writing, but the G+D press release that is normally cited for it gives no quantity at all. Treat the number as unattributed unless a primary source turns up.",
        "The same release refers to the recipient as \"Elisa (formerly Radiolinja)\", which is a 2021 company naming applied to a 1991 event. Radiolinja did not become Elisa until 2000; write \"Radiolinja, later Elisa\".",
        "1FF, 2FF, 3FF and 4FF are industry labels applied retrospectively. GSM 11.11 clause 4.1 knows only two formats, \"ID-1 SIM\" and \"Plug-in SIM\". Putting \"2FF\" or \"mini-SIM\" into the standard's mouth misquotes it.",
        "\"GSM 11.11\" without a version is ambiguous — ETSI publishes a series, and the downloadable July 1996 revision is not the founding document.",
        "GSM 11.11 expands SIM as \"Subscriber Identity Module\". Contemporaneous industry and press material sometimes writes \"Subscriber Identification Module\". If you are quoting such a document, quote it as written rather than silently correcting it.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "1998: the secret was extractable, but not from a distance",
    },
    {
      kind: "paragraph",
      text: "The design decision to keep Ki inside the card was sound, and it was tested in public in April 1998. The Smartcard Developer Association, working with the ISAAC group at UC Berkeley, issued a press release marked \"for release not to precede 1998 April 13\" announcing that they had cloned a digital GSM phone. Their own description of the mechanism is careful: \"GSM phones have a small smartcard inside them which holds the identity of the cellphone... The breach allows the extraction of the secret inside the SIM, after which the secret may be inserted into a different SIM.\"",
    },
    {
      kind: "paragraph",
      text: "Read that carefully and the boundaries of the result are visible in the wording. It was a break of the authentication algorithm, not of the card's refusal to hand over its key. The companion technical page the same group published, headed \"GSM Cloning\", puts a price on the break: \"Mounting this attack requires physical access to the target SIM, an off-the-shelf smartcard reader, and a computer to direct the operation. The attack requires one to query the smartcard about 150,000 times; our smartcard reader can issue 6.25 queries per second, so the whole attack takes 8 hours.\" The 1998 press cycle compressed that into \"GSM phones can be cloned\", which was misleading in exactly the way that matters: the demonstrated attack took eight hours with the card in the attacker's hand, and nothing was extracted over the air. The same page now carries a note its authors added after publication, conceding that the original announcement understated the risk of over-the-air attacks — a qualification worth carrying with the quotation rather than dropping.",
    },
    {
      kind: "paragraph",
      text: "The architecture, in other words, behaved as designed: the interface held, and the weakness lay in an algorithm the interface specification had deliberately declined to standardise. The attacker still had to hold the object in their hand — which, in 1998, was what possessing an identity meant.",
    },
    {
      kind: "heading",
      level: 2,
      text: "From SIM to UICC: the module became an application",
    },
    {
      kind: "paragraph",
      text: "The vocabulary shifted before the delivery mechanism did, and anyone writing about post-2000 behaviour needs to follow it. ETSI TS 102 221 specifies a UICC–terminal interface: a generic smart-card platform with physical and logical characteristics of its own, no longer a SIM-specific document. On top of that platform, 3GPP TS 31.102 — published by ETSI as TS 131 102 — specifies the characteristics of the USIM application. The distinction is not pedantry. After this point the card is a UICC, and the SIM or USIM is an application running on it. Statements about modern behaviour that cite GSM 11.11 are citing a document that had already been superseded as the platform specification.",
    },
    {
      kind: "paragraph",
      text: "This matters for what comes next, because a platform that can host one telecom application can host several, and can in principle have applications added to it after issue. That capability did not originate with mobile networks. GlobalPlatform's Card Specification defines the security-domain model — an issuer security domain and subordinate domains — expressly to support dynamic post-issuance card management, the addition and modification of applications on a card already in the field. The building block that remote SIM provisioning would eventually need already existed in the general smart-card world.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Remote provisioning arrived three times, not once",
    },
    {
      kind: "paragraph",
      text: "The single most common error in writing about eSIM is to date it to 2016 and treat it as one system. The specifications' own document-history annexes say otherwise. There are three architectures, published nearly a decade apart, addressing three different classes of device, and they do not work the same way.",
    },
    {
      kind: "timeline",
      events: [
        {
          period: "19 December 2013",
          text: "GSMA SGP.02 v1.0, the remote provisioning architecture for embedded UICCs in machine-to-machine deployments. Profiles are pushed to the device under operator control; there is no user in the loop and no user-facing component on the device.",
        },
        {
          period: "13 January 2016",
          text: "GSMA SGP.22 v1.0, the consumer remote SIM provisioning specification. The device pulls a profile from a delivery server through a local profile assistant that runs on the device itself, with an optional discovery server to tell the device that a profile is waiting.",
        },
        {
          period: "26 May 2023",
          text: "GSMA SGP.32 v1.0, the eSIM IoT specification. It addresses devices that have neither a user interface for the consumer flow nor the network assumptions of the M2M flow, introducing an IoT remote manager (eIM) and a profile assistant (IPA) in device-resident and eUICC-resident variants.",
        },
      ],
    },
    {
      kind: "archivalTable",
      caption:
        "Version-1.0 dates as recorded in the specifications' own document-history annexes, rather than as reported downstream.",
      headers: ["Specification", "Version 1.0", "As the document history records it"],
      rows: [
        [
          "GSMA SGP.02 (M2M remote provisioning)",
          "19 December 2013",
          "\"1st Release of Document, submitted to PSMC#119 for approval\"; editor Ian Smith, GSMA. Read from Annex N.1 of v4.0, 25 February 2019.",
        ],
        [
          "GSMA SGP.22 (consumer RSP)",
          "13 January 2016",
          "\"New PRD Publication\", approved by PSMC; editor Duncan Macadam, GSMA. Read from Annex Q.1 of v3.1, 1 December 2023.",
        ],
        [
          "GSMA SGP.32 (eSIM IoT)",
          "26 May 2023",
          "Front matter of the v1.0 publication; v1.1.0 followed in 2024.",
        ],
      ],
      sources: [
        "GSMA SGP.02 v4.0, Annex N.1",
        "GSMA SGP.22 v3.1, Annex Q.1",
        "GSMA SGP.32 v1.0",
      ],
    },
    {
      kind: "table",
      caption:
        "The three architectures differ in who initiates the download, which is why conflating them produces wrong statements about how a phone gets a profile.",
      headers: ["Architecture", "Who initiates", "Server roles", "Device-side component"],
      rows: [
        [
          "SGP.02 — machine-to-machine",
          "The operator pushes",
          "A data-preparation server paired with a secure-routing server (SM-DP and SM-SR)",
          "None exposed to a user",
        ],
        [
          "SGP.22 — consumer",
          "The device pulls",
          "A profile-delivery server (SM-DP+), with an optional discovery server (SM-DS)",
          "A local profile assistant (LPA) on the device or on the eUICC",
        ],
        [
          "SGP.32 — IoT",
          "An IoT remote manager directs",
          "An eIM alongside the provisioning servers",
          "A profile assistant (IPA), device-resident or eUICC-resident",
        ],
      ],
    },
    {
      kind: "paragraph",
      text: "The practical consequence is that a sentence like \"the SM-SR downloads the profile to your iPhone\" is simply wrong. The secure-routing server belongs to the M2M architecture, which predates the consumer one by more than two years and was never intended for a handset with a screen. Consumer devices use the pull model: the local profile assistant, running as part of the device, contacts a delivery server and requests the profile, and the eUICC installs it.",
    },
    {
      kind: "callout",
      tone: "warning",
      title: "Never cite SGP.22 without a version",
      text: "SGP.22 has run through v1.0, v1.1 (14 April 2016), the v2.x line and the v3.x line, and GSMA maintains v2.x and v3.x in parallel — v2.6 was published in September 2024, well after v3.1 appeared in December 2023. Capabilities such as remote profile management, device change and multiple enabled profiles belong to the v3.x line, so \"SGP.22 supports X\" is undated, and often wrong for the devices actually in circulation.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What is actually inside a downloaded profile",
    },
    {
      kind: "paragraph",
      text: "Here is the point where the popular story and the specification part company. The popular story is that eSIM replaced the SIM file system with something modern. SGP.22 v3.1's §2.4 description of the eUICC architecture says the opposite. The eUICC hosts a set of security domains — a root domain that manages profile installation, a per-profile domain that each installed profile occupies, and a controlling domain that holds the eUICC's own credentials — together with a profile package interpreter, a telecom framework, and a rules enforcer. And each installed Profile contains, in the specification's own decomposition, its own File System, its own network access applications, and its own applets.",
    },
    {
      kind: "paragraph",
      text: "In other words, EF_IMSI is still in there. The Master File, the Dedicated Files, the Elementary Files, the file identifiers — the whole GSM 11.11 inheritance rides inside the downloaded profile, because that is what a telecom identity has to look like for a network to recognise it. Nothing about the radio side changed. What changed is that the file system arrives over an authenticated channel instead of arriving in an envelope, and that several of them can sit on one chip at once, each in its own security domain, only one normally enabled.",
    },
    {
      kind: "editorialAside",
      title: "GSMA assembled this; it did not invent it from nothing",
      text: "The security-domain machinery that makes multiple isolated profiles possible is GlobalPlatform's, defined for post-issuance application management on smart cards generally. The card platform beneath it is ETSI TS 102 221. The requirements for an embedded UICC are ETSI TS 103 383. GSMA's contribution was to specify the provisioning protocols, define the server roles, and — crucially — govern who is allowed to occupy them. That is a real and difficult contribution. It is not the invention of the underlying mechanism, and crediting it that way erases two decades of smart-card platform work.",
    },
    {
      kind: "figure",
      image: {
        src: "/images/history/from-sim-card-to-esim--sim-form-factors-2ff-to-mff2.png",
        alt: "Diagram comparing four SIM form factors by size \u2014 mini SIM 2FF, micro SIM 3FF, nano SIM 4FF \u2014 beside a much smaller MFF2 embedded SIM chip",
        width: 1920,
        height: 1440,
        caption: "Successive plug-in form factors \u2014 2FF, 3FF and 4FF \u2014 beside MFF2, the surface-mount package. Each step removed plastic around an unchanged contact field; MFF2 removes the card entirely. The original full-size 1FF card is not shown.",
        credit: {
          source: "Jbond2018, via Wikimedia Commons",
          url: "https://commons.wikimedia.org/wiki/File:SIM_card_sizes.png",
          license: "CC0 1.0",
        },
      },
    },
    {
      kind: "heading",
      level: 2,
      text: "Embedded does not mean soldered",
    },
    {
      kind: "paragraph",
      text: "\"eSIM\" is a marketing word, and it has quietly welded together two properties that are independent of each other. The standards term is Embedded UICC: ETSI TS 103 383 is titled \"Embedded UICC; Requirements Specification\", and what makes a UICC embedded in that sense is that it can be provisioned remotely. Physical mounting is a separate axis entirely. ETSI TS 102 671 specifies solder-down machine-to-machine UICC form factors, and a chip permanently mounted to a board under that specification is not thereby an eSIM. Conversely, eUICCs are manufactured and sold in ordinary removable 4FF card bodies — hardware that is remotely provisionable and physically removable at the same time.",
    },
    {
      kind: "paragraph",
      text: "So the two axes are: can this thing receive a profile over the network, and is it stuck to the board? \"eSIM\" answers the first question. It says nothing reliable about the second. A third term, iSIM, describes integrating the secure element into the system-on-chip itself and is a further, distinct step; it is not a synonym for eSIM, and folding the three words together is how a reader ends up believing that remote provisioning and permanent mounting are the same development.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Who gained the authority",
    },
    {
      kind: "paragraph",
      text: "The framing that usually accompanies eSIM is emancipation: the user, freed from the carrier's plastic, now controls their own identity and can switch operators at will. The specification is a more interesting document than that. SGP.22 v3.1's §2.9 profile policy management defines Profile Policy Rules that can be attached to a profile, and the first two of them are stated in the specification in terms that leave nothing to interpretation: PPR1, \"Disabling of this Profile is not allowed\", and PPR2, \"Deletion of this Profile is not allowed\". Whether such rules may be set is governed by a Rules Authorisation Table on the eUICC, and enforcement is performed by a profile rules enforcer inside the chip. The capability to lock a subscriber to a profile is not an oversight in the design; it is a specified feature with an enforcement component.",
    },
    {
      kind: "paragraph",
      text: "The second shift is quieter. In the consumer architecture, the local profile assistant is a device component — it sits outside the eUICC, on the handset, in the ordinary configuration. That means the software that discovers profiles, presents them, downloads them, enables them and deletes them is supplied by whoever supplies the operating system. A step that used to be performed by a fingernail and a paperclip is now performed by vendor software, through a vendor interface, on vendor terms. The handset maker did not previously sit between an operator and a subscriber's identity in any meaningful way. It does now.",
    },
    {
      kind: "paragraph",
      text: "The third shift is structural. Remote provisioning is a public-key system, and someone has to be the certificate issuer. The GSMA-governed certificate authority for this ecosystem determines which entities may operate a compliant delivery server at all. Running a profile-delivery service is therefore not a matter of standing up software against a published protocol; it is a matter of admission. Whatever else that is, it is not decentralisation.",
    },
    {
      kind: "callout",
      tone: "warning",
      title: "Vendor security framing cuts both ways",
      text: "Apple's own support material states that \"eSIM is more secure than a physical SIM because it can't be removed if your iPhone is lost or stolen\", and describes recent models as able to hold eight or more eSIMs with two usable at once. Both halves are worth attributing rather than repeating in a neutral voice: immovability is a defence against a thief and simultaneously an obstacle when a subscriber wants to move a working identity into a replacement handset in a hurry. Relatedly, the widely generalised claim that a particular iPhone generation \"ended the SIM tray\" describes one national market's device configuration, not a global change.",
    },
    {
      kind: "paragraph",
      text: "The honest summary, then, is redistribution rather than liberation. Before, the operator controlled the identity by controlling a physical object, and the user's power was the crude but real power of removing it. After, the operator can attach policy to the profile, the device vendor controls the software that performs every profile operation, and a certificate authority controls who may issue profiles in the first place. Users did gain something concrete — the ability to hold several profiles, and to acquire one without visiting a shop — but they gained it inside a structure with more gatekeepers in it than the one it replaced, not fewer.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What a profile buys, and what it does not",
    },
    {
      kind: "paragraph",
      text: "This archive is about documents and the machines that produce them, so it is worth being exact about what a provisioned cellular identity delivers to someone whose office is a phone. It delivers a routed path to the internet through an operator's core network. It does not deliver a link. The device shares no segment with anything; it has an address reachable through a carrier network, which is a categorically different relationship from the one a laptop has with a printer two metres away.",
    },
    {
      kind: "paragraph",
      text: "That distinction is why printer discovery, as the archive documents it in depth, stops at the edge of the local network. The announce-and-browse mechanisms that make a printer appear in a list — multicast DNS with DNS-based service discovery, and WS-Discovery alongside it — depend on multicast within a single link, and a phone on a cellular bearer shares no link with an office printer. No amount of connectivity fixes this, because it is not a bandwidth or reachability problem but a topology one, and it long predates eSIM. What does work across a routed path is the hosted-queue model: a service holds the job, and the printer or an on-premises connector makes an outbound connection and pulls it down. The mobile worker's print path and the mobile worker's network identity are answers to two different questions.",
    },
    {
      kind: "paragraph",
      text: "The consumer download flow described above is also the mechanism behind a now-ordinary travel experience. SGP.22 v3.1 §4.1 defines an activation code — the string a local profile assistant consumes to know which delivery server to contact — and in practice that string is handed to a user as a QR code. That is the entire reason a profile can be bought as an email rather than collected as an object: services such as Esimky sell a data profile and deliver an activation code, and what happens next on the traveller's handset is the SGP.22 pull described in this article, running unchanged. It is also the reason the caveats above are not academic. A profile acquired that way still arrives subject to whatever policy rules its issuer attached, still installs through software the handset vendor wrote, and still originates from a server someone had to be admitted to operate.",
    },
    {
      kind: "paragraph",
      text: "Which brings the arc back to where it started. For thirty years the unit of network identity was an object you could hold, lose, snap out of a credit-card-sized carrier, and hand to someone else. It is now a file system that arrives over a channel. The contents did not change; EF_IMSI is still at 6F 07 inside the profile that lands on the chip. What changed is that identity became something granted rather than something possessed — and that is a larger shift than the disappearance of a piece of plastic, even if it is the plastic that everyone noticed.",
    },
  ],
  faqs: [
    {
      q: "Does a SIM card store your phone number?",
      a: "Not as its primary function. The identity that authenticates a subscriber to the network is the IMSI, held in EF_IMSI at file identifier \"6F 07\" in the GSM 11.11 file system. The publicly dialled number lives in a separate, optional elementary file that operators often leave unwritten, because network authentication does not depend on it.",
    },
    {
      q: "Did eSIM begin in 2016?",
      a: "Only one branch of it did. GSMA SGP.02 v1.0, the machine-to-machine remote provisioning architecture, is dated 19 December 2013. SGP.22 v1.0, the consumer specification that phones use, is dated 13 January 2016. SGP.32 v1.0, for IoT devices, is dated 26 May 2023. They are three architectures with different server roles and different initiation models, not three versions of one thing.",
    },
    {
      q: "Does eSIM mean the SIM is soldered into the phone?",
      a: "No. The standards term is Embedded UICC, and what defines it is remote provisioning rather than mounting. eUICCs are sold in ordinary removable 4FF card bodies, and conversely the solder-down machine-to-machine form factors specified in ETSI TS 102 671 are not automatically remotely provisionable. Mounting and provisioning are independent properties that the word \"eSIM\" conflates.",
    },
    {
      q: "Did remote provisioning replace the SIM file system?",
      a: "No. SGP.22 v3.1's §2.4 decomposition of the eUICC shows each installed Profile containing its own File System, network access applications and applets. The GSM 11.11 lineage of elementary files survives intact inside the downloaded profile; what changed is how the profile arrives and who may authorise its installation, enabling and deletion.",
    },
    {
      q: "Can a downloaded profile be locked so a user cannot remove it?",
      a: "The specification provides for it. SGP.22 v3.1's §2.9 profile policy management defines PPR1, \"Disabling of this Profile is not allowed\", and PPR2, \"Deletion of this Profile is not allowed\", with a Rules Authorisation Table governing whether such rules may be set and a rules enforcer inside the eUICC applying them. Whether any particular profile carries them is a commercial and regulatory question rather than a technical one.",
    },
  ],
  related: [
    { section: "guides", slug: "printer-discovery" },
    { section: "guides", slug: "cloud-print-architectures" },
    { section: "workflows", slug: "mobile-office-printing" },
    { section: "history", slug: "history-of-wireless-printing" },
    { section: "history", slug: "office-printing-before-wifi" },
  ],
  published: "2026-08-26",
  updated: "2026-08-26",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "sim card history",
    "esim history",
    "gsm 11.11",
    "ef_imsi",
    "euicc",
    "sgp.22",
    "sgp.02",
    "remote sim provisioning",
    "profile policy rules",
    "uicc",
    "mobile network identity",
  ],
  modernTools: ["esimky"],
  sources: [
    {
      title:
        "GSM 11.11 v5.3.0 — Digital cellular telecommunications system (Phase 2+); Specification of the Subscriber Identity Module – Mobile Equipment (SIM–ME) interface",
      url: "https://www.etsi.org/deliver/etsi_gts/11/1111/05.03.00_60/gsmts_1111v050300p.pdf",
      publisher: "ETSI TC-SMG, July 1996",
    },
    {
      title:
        "ETSI TS 102 221 V18.2.0 (2024-06) — Smart Cards; UICC-Terminal interface; Physical and logical characteristics (Release 18)",
      url: "https://www.etsi.org/deliver/etsi_ts/102200_102299/102221/18.02.00_60/ts_102221v180200p.pdf",
      publisher: "ETSI TC SCP",
    },
    {
      title:
        "ETSI TS 131 102 V17.9.0 (2023-04) — Characteristics of the Universal Subscriber Identity Module (USIM) application (3GPP TS 31.102 version 17.9.0 Release 17)",
      url: "https://www.etsi.org/deliver/etsi_ts/131100_131199/131102/17.09.00_60/ts_131102v170900p.pdf",
      publisher: "ETSI / 3GPP",
    },
    {
      title:
        "ETSI TS 102 671 V9.2.0 (2015-06) — Smart Cards; Machine to Machine UICC; Physical and logical characteristics (Release 9)",
      url: "https://www.etsi.org/deliver/etsi_ts/102600_102699/102671/09.02.00_60/ts_102671v090200p.pdf",
      publisher: "ETSI TC SCP",
    },
    {
      title:
        "ETSI TS 103 383 V14.0.0 (2018-07) — Smart Cards; Embedded UICC; Requirements Specification (Release 14)",
      url: "https://www.etsi.org/deliver/etsi_ts/103300_103399/103383/14.00.00_60/ts_103383v140000p.pdf",
      publisher: "ETSI TC SCP",
    },
    {
      title:
        "SGP.02 — Remote Provisioning Architecture for Embedded UICC Technical Specification, Version 4.0, 25 February 2019",
      url: "https://www.gsma.com/newsroom/wp-content/uploads/SGP.02-v4.0.pdf",
      publisher: "GSMA",
    },
    {
      title:
        "SGP.22 — RSP Technical Specification, Version 3.1 Final, 1 December 2023",
      url: "https://www.gsma.com/solutions-and-impact/technologies/esim/wp-content/uploads/2023/12/SGP.22-v3.1.pdf",
      publisher: "GSMA",
    },
    {
      title:
        "SGP.22 — RSP Technical Specification, Version 2.6, 20 September 2024 (the parallel v2.x line)",
      url: "https://www.gsma.com/solutions-and-impact/technologies/esim/wp-content/uploads/2024/09/SGP.22-v2.6.pdf",
      publisher: "GSMA",
    },
    {
      title:
        "SGP.32 — eSIM IoT Technical Specification, Version 1.0, 26 May 2023",
      url: "https://www.gsma.com/solutions-and-impact/technologies/esim/wp-content/uploads/2023/05/SGP.32-1.0-5.pdf",
      publisher: "GSMA",
    },
    {
      title: "GlobalPlatform Card Specification (GPC_SPE_034)",
      url: "https://globalplatform.org/specs-library/card-specification-v2-3-1/",
      publisher: "GlobalPlatform",
    },
    {
      title:
        "Smartcard Developer Association Clones Digital GSM Cellphones (press release, \"for release not to precede 1998 April 13\")",
      url: "http://www.isaac.cs.berkeley.edu/isaac/gsm-press.html",
      publisher:
        "Smartcard Developer Association and the ISAAC group, UC Berkeley",
    },
    {
      title:
        "GSM Cloning — the companion technical account of the COMP128 chosen-challenge attack, released 13 April 1998",
      url: "http://www.isaac.cs.berkeley.edu/isaac/gsm-faq.html",
      publisher:
        "ISAAC research group, UC Berkeley, with the Smartcard Developers Association",
    },
    {
      title: "DE1945777A1 — Identifizierungsschalter (\"Identification switch\")",
      url: "https://patents.google.com/patent/DE1945777A1/en",
      publisher:
        "Deutsches Patent- und Markenamt, via Google Patents; inventors Jürgen Dethloff and Helmut Gröttrup",
    },
    {
      title: "The SIM celebrates 30 years (press release, 18 November 2021)",
      url: "https://www.gi-de.com/en/group/press/press-releases/the-sim-turns-30",
      publisher: "Giesecke+Devrient",
    },
    {
      title: "Use eSIM while traveling internationally with your iPhone",
      url: "https://support.apple.com/en-us/118227",
      publisher: "Apple",
    },
  ],
  cluster: "printing-evolution",
};

export default entry;
