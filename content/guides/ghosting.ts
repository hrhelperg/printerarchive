import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "ghosting",
  "title": "Ghosting and Repetitive Defects",
  "description": "A faint repeat of earlier image content, or evenly spaced marks, running down a print: ghosting's mechanisms, the repeat-pitch diagnostic law, and remedies.",
  "summary": "Ghosting and repetitive defects are print-quality faults in which a faint copy of previously printed content, or an isolated recurring mark, reappears at regular intervals down the page in the paper-feed direction. In electrophotographic printing they occur when a rotating member carries a trace of the prior cycle forward through incomplete erase or residual charge, a developer toner-density memory, or fuser offset, while thermal processes show an analogous residual-heat effect. Because a defect created once per revolution reprints after the paper advances by that component's circumference, the measured repeat spacing identifies the responsible part. Remedies range from flushing transient memory and matching media and consumables to the process, up to servicing worn or contaminated components.",
  "difficulty": "intermediate",
  "estimatedTime": "11 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Definition and terminology"
    },
    {
      "kind": "paragraph",
      "text": "Ghosting is a print-quality defect in which a faint, vestigial copy of image content already laid down earlier on the same page reappears farther down the page, offset from the original in the process (paper-feed) direction. Imaging-science literature defines it as \"a vestigial image repeated at regular intervals down the length of a page and appearing as light or dark areas (negative or positive ghosting, respectively) relative to the surrounding field\" (Society for Imaging Science and Technology)."
    },
    {
      "kind": "paragraph",
      "text": "Two closely related phenomena share this entry because they share one diagnostic law:"
    },
    {
      "kind": "list",
      "items": [
        "Ghosting proper (image \"memory\") — a recognizable faint repeat of actual printed content, such as a logo, a dark bar, or text, shifted downstream. It is produced when a subsystem carries a trace of the previous image into its next cycle.",
        "Repetitive defects (repetitive marks) — isolated dots, spots, or bands that are not a copy of image content but recur at a fixed, even spacing, produced by localized damage to, or contamination of, a rotating member."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Polarity is a diagnostic distinction: in mid-density areas a ghost that is darker than its surround is a positive ghost, while one that is lighter is a negative ghost. Which polarity appears is a clue to which subsystem is responsible. A vocabulary caution also applies: in offset lithography the word \"ghosting\" names an unrelated family of defects (see the disambiguation section below), so the same term describes different failures in different printing processes."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Appearance and symptoms"
    },
    {
      "kind": "paragraph",
      "text": "Ghosting and repetitive defects present as regular features aligned with paper travel:"
    },
    {
      "kind": "list",
      "items": [
        "A faint second image, or evenly spaced repeating marks, running from top to bottom of the sheet. The repeat lies in the process direction, along paper travel, rather than across the scan direction.",
        "The effect is most visible in mid-density, uniform halftone or gray-fill regions. The classic trigger is a strong dark object followed by a lighter or mid-tone field, with the object's ghost appearing in that field one component-revolution later.",
        "The ghost is lower in contrast than the primary image and typically fades with each successive repeat, because the charge, heat, or toner that carries the memory depletes on each revolution.",
        "Even, ruler-measurable spacing between repeats is the signature that separates a repetitive defect from random mottle or a one-off smear."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Ghosting should be distinguished from adjacent artifacts that have their own reference pages: banding, which is a periodic variation in density rather than a copy of content; dot gain, which is a tonal shift; and moiré, which is screen-frequency interference. These are described elsewhere and are contrasted at the end of this page rather than re-explained here."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The repetitive-defect spacing law"
    },
    {
      "kind": "paragraph",
      "text": "The central diagnostic idea, and the reason ghosting and repetitive marks belong together, is geometric: the distance from one repeat to the next equals the responsible component's per-revolution advance along the paper, which for members running at process speed equals their circumference. A mark or memory created once per revolution of a roller or drum prints again after the paper has advanced by that amount. Imaging-science work on electrophotographic artifacts describes ghosting as consisting of residual images of previously printed contents in the paper process direction (Eid, Cooper & Ahmed, IEEE ICIP 2007); mapping the measured repeat spacing to a specific rotating member is done in practice with the machine's repetitive-defect ruler."
    },
    {
      "kind": "paragraph",
      "text": "In practice this turns a ruler into a diagnostic tool:"
    },
    {
      "kind": "list",
      "items": [
        "Measure the repeat pitch on a printed test page.",
        "Compare it against the machine's rotating members. Because the pitch equals each member's per-revolution paper advance — its circumference for members running at process speed — the smallest members produce the most closely spaced repeats and larger members produce longer repeats, so the measured value points toward a specific component.",
        "Manufacturers publish a \"repetitive defect ruler\" — a printed scale — precisely to map a measured pitch to a likely component for a given engine."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Two honesty caveats belong with this method. First, the pitch-to-component mapping is engine-specific: exact circumferences vary by model and are read from the machine's own defect ruler or service documentation, not from any universal table. Second, polarity (positive versus negative) is an independent second clue that helps narrow which process step — charging and erase, development, or fusing — is implicated."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Electrophotographic mechanisms"
    },
    {
      "kind": "paragraph",
      "text": "In electrophotographic (laser and LED) printing the image is formed by a repeating cycle: the photoconductor is charged, exposed to write a latent image, developed with toner, and the toner is transferred to paper and fused; the drum is then cleaned of residual toner and electrically erased (discharged) to reset it for the next cycle (Medeiros, Graphic Design and Print Production Fundamentals). Ghosting arises when one of these steps carries a trace of the previous frame into the next revolution. The imaging-science consensus is broad: \"subsystems from charging, development, photoreceptor, to fusing can all produce ghosting\" (Society for Imaging Science and Technology)."
    },
    {
      "kind": "paragraph",
      "text": "Documented electrophotographic cause families include:"
    },
    {
      "kind": "list",
      "items": [
        "Residual charge and incomplete erase. If the erase or discharge step does not fully neutralize the photoconductor, a faint residual latent image survives and is re-developed one drum-circumference later. Trapped charge in the photoconductor layer can make complete erasure harder, particularly as the drum ages.",
        "Photoreceptor fatigue (\"memory\"). The photoconductor's local response can depend on its recent exposure history, so heavily exposed and unexposed regions recover at different rates and imprint the prior image onto the following cycle.",
        "Developer (\"dev\") ghosting. The developer roller can carry a toner-density memory: areas that gave up a large amount of toner to the previous image return to the development zone depleted or differently charged, so the next field develops slightly lighter or darker in the shape of the prior image. Here the repeat pitch corresponds to one turn of the developer roller — the value given for that roller on the machine's repetitive-defect ruler, which need not equal its bare geometric circumference because the developer roller often runs at a surface speed different from the paper."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Whether a positive or negative ghost appears reflects which of these mechanisms dominates, which is why noting the ghost's polarity helps localize the fault. The detailed charge physics is subsystem- and engine-dependent; this page states the polarity-as-clue principle without asserting specific voltages, which are not universal and are outside the scope of a descriptive reference."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Fuser offset ghosting"
    },
    {
      "kind": "paragraph",
      "text": "A distinct electrophotographic mechanism occurs at the fuser, where heat and pressure bond toner to the paper. If some toner fails to release cleanly from the fuser roll, it is carried around and redeposited onto the sheet on a later contact — a thermal-mechanical memory rather than an electrostatic one:"
    },
    {
      "kind": "list",
      "items": [
        "Hot offset. Toner over-melts and splits, part of it adhering to the hot fuser surface and then transferring back onto the paper as a faint shadow (U.S. Patent 6,219,519). When the un-released toner is carried a full turn of the fuser roll, the shadow can reappear at a pitch matching the fuser's circumference, following the same spacing law described above.",
        "Cold offset. When fusing energy is too low the toner is not fully fused, so it can smear, flake, or transfer where it should not."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Fuser-offset ghosts often have a glossy or greasy character together with a repeat pitch that matches the fuser, which distinguishes them from the fainter electrostatic ghosts. A fuser that no longer releases toner cleanly is generally worn and requires servicing; this page does not describe fuser temperatures, adjustments, or disassembly."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Thermal-process ghosting"
    },
    {
      "kind": "paragraph",
      "text": "In thermal printing processes — direct thermal, thermal transfer, and dye sublimation — the \"memory\" is residual heat rather than charge or toner, governed by the printhead's thermal history:"
    },
    {
      "kind": "list",
      "items": [
        "Heat accumulation. Heat from printing one region does not fully dissipate before the next lines are printed, so a heavily printed area stays hot and over-marks the lighter areas that follow. Control literature describes referring to previous printing history to suppress the influence of heat accumulated from earlier printing on a dot to be printed subsequently, and notes that when the subsequent cooling is insufficient the density becomes uneven (U.S. Patent 6,897,887). Printers counter this with thermal-history (heat-history) compensation implemented in firmware, so the standard mitigation is to rely on that compensation together with matched ribbon and media rather than any manual intervention.",
        "Dye-sublimation ghosting. A faint secondary image can arise from unwanted secondary transfer — for example, media or donor shifting or re-contacting while still hot — and from moisture-driven vapor during transfer. This mechanism is documented mainly in general vendor guidance and is described here at the level of principle only."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Offset lithography ghosting (disambiguation)"
    },
    {
      "kind": "paragraph",
      "text": "Because the term collides across processes, a reference page under this title should resolve the ambiguity. In offset lithography \"ghosting\" names different phenomena with their own mechanisms (PrintWiki):"
    },
    {
      "kind": "list",
      "items": [
        "Mechanical (ink-starvation) ghosting. Heavily inked plate areas are not fully re-inked by the form roller on each revolution, so a faint repeat of the layout appears in solids and halftones; an incorrect form-roller diameter can contribute. This is the lithographic analog of a once-per-revolution memory.",
        "Chemical, gloss, or fuming ghosting. Vapors from drying ink on one sheet alter the drying or gloss of ink on an adjacent sheet in the stack, leaving a phantom image."
      ]
    },
    {
      "kind": "paragraph",
      "text": "These lithographic phenomena are noted for disambiguation only. They are separate from the electrophotographic and thermal mechanisms that are the focus of this page, and the term also appears in screen printing and flexography."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Diagnosis and measurement"
    },
    {
      "kind": "paragraph",
      "text": "Diagnosis combines a provocative test target with the spacing law:"
    },
    {
      "kind": "list",
      "items": [
        "Print a uniform mid-density gray or halftone field, ideally preceded by a strong dark object, since ghosts show best in mid-tones and uniform fills also reveal repetitive marks cleanly.",
        "Measure the repeat pitch and note both the polarity (positive or negative) and the character (faint electrostatic versus glossy fuser-offset) to narrow the responsible subsystem, using the machine's repetitive-defect ruler for the pitch-to-component mapping."
      ]
    },
    {
      "kind": "paragraph",
      "text": "For objective, device-independent measurement, the relevant standard is ISO/IEC 24790:2017 (Measurement of image quality attributes for hardcopy output — monochrome text and graphic images), which specifies attributes and methods including graininess, mottle, banding, blurriness, raggedness, line width, and character darkness. It cancels and replaces the earlier ISO/IEC 13660:2001 and the interim ISO/IEC TS 24790:2012. Periodic (repetitive) density variation is characterized by density profiling and spectral analysis, and the ISO/IEC 13660 attribute framework and its calibration to physical units are discussed in the imaging literature (Briggs, Quality Engineering Associates). Research pipelines detect ghosting and periodic bands, independent of page skew, using wavelet filtering with two-dimensional spectral analysis and template matching against test patterns, correlating well with expert raters (Eid, Ahmed, Cooper & Rippetoe, IEEE Transactions on Image Processing, 2011)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "General remediation principles"
    },
    {
      "kind": "paragraph",
      "text": "The following are general, well-documented practices or manufacturer guidance, not procedures for any specific machine. Anything internal is framed as requiring servicing."
    },
    {
      "kind": "list",
      "items": [
        "Flush transient memory. A one-off memory ghost can often be cleared by running several blank or light pages, or by letting the machine complete its normal cleaning and erase cycles.",
        "Address end-of-life consumables. A worn photoconductor or drum, or a worn fuser that no longer erases or releases cleanly, is a common cause; the remedy is replacement or servicing per manufacturer guidance, not user disassembly.",
        "Match media to the process. Paper weight, finish, and especially moisture content affect fuser offset and thermal marking; use the media the manufacturer specifies, and store or condition it to avoid humidity extremes.",
        "Control ambient temperature and humidity. Residual-charge behavior and thermal recovery are environment-sensitive, so keeping the device within its recommended operating conditions reduces ghosting.",
        "Use manufacturer-recommended toner, ink, or ribbon. Off-specification consumables can aggravate developer ghosting and offset.",
        "On thermal devices, rely on the printer's thermal-history and darkness settings with matched ribbon and media, and allow the printhead its normal cooling; the firmware performs the compensation.",
        "Reduce provocative content where feasible. Very high, abrupt coverage transitions provoke ghosts, so lowering total coverage or adjusting layout is a general workaround.",
        "Escalate persistent, fixed-pitch defects to service. If a repeat persists at a pitch matching an internal rotating member, it indicates damaged or contaminated hardware and requires servicing. The appropriate step is to identify the component by its pitch and refer the machine for service, rather than attempt an internal repair."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How ghosting differs from related artifacts"
    },
    {
      "kind": "paragraph",
      "text": "Ghosting is a marking fault layered on top of the imaging pipeline and is independent of how tone is rendered, so it should not be confused with the screening and tonal topics covered on their own pages:"
    },
    {
      "kind": "list",
      "items": [
        "Dot gain is a tonal and ink-spread shift, not a repeated image.",
        "Moiré is screen-frequency interference, not a process-direction memory repeat.",
        "Halftoning, amplitude-modulation and frequency-modulation screening, error diffusion, ordered dithering, and screen angles describe how tone is rendered; ghosting can occur regardless of which screening method is chosen.",
        "Black generation concerns color separation and is an unrelated cause."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Banding is the closest relative: like repetitive defects it is periodic, and it is a named attribute under ISO/IEC 24790, but banding is a density modulation rather than a copy of image content. Quantization or screening banding that appears in smooth gradients is a rendering issue addressed by the screening and error-diffusion references, not a rotating-member memory effect."
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical reference describing print-defect phenomena and general remediation principles. It is not a service manual: it does not provide device-specific repair procedures, error-code meanings, or maintenance intervals, and anything requiring service should be handled per the manufacturer's guidance. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "guides",
      "slug": "streaking"
    },
    {
      "section": "guides",
      "slug": "print-banding"
    },
    {
      "section": "guides",
      "slug": "background-fogging"
    },
    {
      "section": "guides",
      "slug": "toner-adhesion"
    }
  ],
  "faqs": [
    {
      "q": "What causes ghosting on a laser print?",
      "a": "In electrophotographic printing a faint repeat appears when a rotating member carries a trace of the previous cycle into the next: incomplete erase or residual charge on the photoconductor, a developer-roller toner-density memory, or toner that fails to release at the fuser (offset). The ghost appears one component-revolution downstream and usually fades with each repeat."
    },
    {
      "q": "How do I tell which part is causing a repetitive defect?",
      "a": "Measure the even spacing between repeats. That pitch equals the responsible component's advance per revolution — its circumference for members running at paper speed — so comparing the measured spacing against the machine's repetitive-defect ruler or service documentation points to a specific rotating member. A defect that persists at a fixed internal pitch requires servicing rather than a user repair."
    },
    {
      "q": "What is the difference between positive and negative ghosting?",
      "a": "In mid-density areas a ghost that is darker than its surroundings is a positive ghost; one that is lighter is a negative ghost. The polarity is a diagnostic clue that helps indicate which process step — charging and erase, development, or fusing — is responsible."
    },
    {
      "q": "How is ghosting different from banding?",
      "a": "Ghosting is a faint repeat of earlier image content, or a recurring isolated mark, in the paper-feed direction, whereas banding is a periodic variation in density. Both are periodic, and banding is a measured attribute under ISO/IEC 24790, but banding is a density modulation, not a copy of image content."
    },
    {
      "q": "Can I fix ghosting myself?",
      "a": "General practice can clear or reduce it: running blank or light pages to flush a transient memory, using the manufacturer's specified media and consumables, and controlling humidity. However, a worn drum or fuser, or any defect that recurs at a fixed internal pitch, requires servicing; ghosting is a phenomenon to diagnose, not a device-specific repair to perform."
    },
    {
      "q": "Is ghosting in offset printing the same thing?",
      "a": "No. In offset lithography \"ghosting\" refers to different defects, chiefly mechanical ink-starvation ghosting and chemical or gloss (fuming) ghosting, with their own causes. The same word describes unrelated failures in different printing processes."
    }
  ],
  "sources": [
    {
      "title": "Analysis of Ghosting in Electrophotography",
      "url": "https://library.imaging.org/admin/apis/public/api/ist/website/downloadArticle/print4fab/16/1/art00105_1",
      "publisher": "Society for Imaging Science and Technology (IS&T)"
    },
    {
      "title": "Characterization of Ghosting Defects in Electrophotographic Printers (IEEE ICIP 2007)",
      "url": "https://ieeexplore.ieee.org/document/4379344/",
      "publisher": "IEEE"
    },
    {
      "title": "Characterization of Electrophotographic Print Artifacts: Banding, Jitter, and Ghosting (IEEE Transactions on Image Processing, 2011)",
      "url": "https://pubmed.ncbi.nlm.nih.gov/21078570/",
      "publisher": "IEEE"
    },
    {
      "title": "Graphic Design and Print Production Fundamentals — The Electrophotographic Process",
      "url": "https://opentextbc.ca/graphicdesign/chapter/6-4-electrophotographic-process/",
      "publisher": "BCcampus Open Publishing"
    },
    {
      "title": "ISO/IEC 24790:2017 — Measurement of image quality attributes for hardcopy output — Monochrome text and graphic images",
      "url": "https://www.iso.org/standard/69796.html",
      "publisher": "ISO/IEC"
    },
    {
      "title": "ISO/IEC 13660:2001 — Measurement of image quality attributes for hardcopy output — Binary monochrome text and graphic images",
      "url": "https://www.iso.org/standard/22145.html",
      "publisher": "ISO/IEC"
    },
    {
      "title": "Applications of ISO-13660, A New International Standard for Objective Print Quality Evaluation",
      "url": "https://www.qea.com/wp-content/uploads/2015/04/Paper_1999_ISJ-JH_Applications_of_ISO-13660-newaddr.pdf",
      "publisher": "Quality Engineering Associates (QEA)"
    },
    {
      "title": "Ghosting (print-industry glossary)",
      "url": "https://printwiki.org/Ghosting",
      "publisher": "PrintWiki"
    },
    {
      "title": "U.S. Patent 6,897,887 — Heat history control system, printer, and program",
      "url": "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/6897887",
      "publisher": "United States Patent and Trademark Office"
    },
    {
      "title": "U.S. Patent 6,219,519 — Reduced hot offset in color electrophotographic imaging",
      "url": "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/6219519",
      "publisher": "United States Patent and Trademark Office"
    },
    {
      "title": "Repetitive Defects Rulers",
      "url": "https://www.printertechs.com/printer-troubleshooting/repetitive-defects-rulers",
      "publisher": "PrinterTechs"
    },
    {
      "title": "How to prevent ghost effect during dye sublimation printing",
      "url": "https://eastyltd.com/how-to-prevent-ghost-effect-during-dye-sublimation-printing/",
      "publisher": "Easy Sublimation (vendor guidance)"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "ghosting",
    "repetitive defects",
    "repetitive defect ruler",
    "electrophotographic ghosting",
    "fuser offset",
    "hot offset",
    "thermal ghosting",
    "positive and negative ghosting",
    "ghost image",
    "repeat pitch",
    "laser printer print defect",
    "print quality measurement"
  ],
  "cluster": "print-quality"
};

export default entry;
