import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "moire-patterns",
  "title": "Moiré Patterns in Printing",
  "description": "How moiré patterns arise in halftone printing from overlapping periodic screens, plus subject and scanning moiré, and the methods used to control them.",
  "summary": "A moiré pattern is a coarse, low-frequency interference pattern that appears when two or more regular periodic structures are overlaid, even though it exists in none of them individually. In printing it arises chiefly where halftone screens overlap one another, where a halftone screen interacts with fine repetitive detail in the subject, or where a scanner samples a previously printed halftone. Prepress work manages it by separating screen angles and choosing screen frequencies so that residual beating collapses into a fine rosette, by using frequency-modulated (stochastic) screening that has no fixed grid, and by descreening when digitizing printed originals.",
  "purpose": "A moiré pattern is a coarse, low-frequency interference pattern that appears when regular periodic structures, such as halftone screens, overlap.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What a moiré pattern is"
    },
    {
      "kind": "paragraph",
      "text": "A moiré pattern is a large-scale interference pattern that appears when two or more repetitive, periodic structures are superimposed. The visible pattern is present in none of the overlaid layers on its own; it emerges only from their combination, and it typically has a far coarser scale — a much lower spatial frequency — than the fine detail of the layers that produce it."
    },
    {
      "kind": "paragraph",
      "text": "In printing the interfering periodic structures are usually halftone screens: the regular grids of dots a device lays down to simulate continuous tone (see the companion Halftoning overview). Because amplitude-modulated (AM, conventional) screening builds an image from a fixed, regular lattice of dots, any two such lattices — or a lattice and some other regular pattern — can interfere and produce moiré. The effect matters in reproduction because the interference band is coarse enough to be seen at normal viewing distance even when the individual dots are not, so a screen combination that looks acceptable dot-by-dot can still carry an obtrusive pattern across the whole image."
    },
    {
      "kind": "paragraph",
      "text": "Not all moiré in print is a defect. The controlled, fine rosette texture of a well-set four-colour job is itself a moiré. The aim of prepress is therefore not to abolish interference but to push it to a scale and form the eye tolerates. This distinction — objectionable moiré versus the tolerable rosette — runs through the rest of this page."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The mechanism: superposition and spatial beats"
    },
    {
      "kind": "paragraph",
      "text": "Moiré is a superposition effect. When two patterned layers are laid over each other, their combination introduces frequency components that neither layer possessed on its own; in the simplest optical treatment the layers combine multiplicatively, and the product of two periodic functions contains new, lower-frequency terms. Formal treatments of the phenomenon describe exactly this: patterns that do not exist in any of the original images but appear in the superposition image as the result of a multiplicative superposition rule."
    },
    {
      "kind": "paragraph",
      "text": "The one-dimensional case makes the behaviour intuitive. Overlaying two line gratings of slightly different pitch produces a new set of much wider fringes, and the spatial frequency of those fringes is essentially the difference between the two grating frequencies. This is the spatial analogue of the acoustic beat heard when two notes of almost identical pitch sound together — the closer the two frequencies, the slower the beat and the coarser, more conspicuous the resulting moiré."
    },
    {
      "kind": "paragraph",
      "text": "Orientation matters as much as frequency. When two identical grids are overlaid at a small relative angle, they beat into a pattern whose spacing grows as the angle shrinks: a tiny misalignment yields a broad, highly visible moiré, while a larger angular separation drives the interference down to a fine scale that reads as texture rather than as banding. This is the physical reason overlapping print screens are deliberately given different angles rather than allowed to fall near the same orientation, and why the choice of both angle and frequency is the central lever for controlling screen moiré."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Origin of the term"
    },
    {
      "kind": "paragraph",
      "text": "The word comes from the French adjective moiré, which describes the rippled, \"watered\" sheen of moire — a textile, historically silk, whose surface is calendered or pressed so that its weave reflects light in shifting, wavy bands. The French term traces back to the English word mohair."
    },
    {
      "kind": "paragraph",
      "text": "The visual effect that named the phenomenon is itself a form of interference: the watered figure appears when the regular structure of the cloth is doubled or offset against itself, so that the fabric's own periodic weave beats into a larger, shimmering pattern. That everyday example of one periodic structure interfering with a near-copy of itself is precisely the effect that arises, at much finer scale, between halftone screens in print."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Screen-versus-screen moiré in colour printing"
    },
    {
      "kind": "paragraph",
      "text": "The most familiar printing moiré comes from overlapping the halftone screens of a multi-colour job. Process-colour printing reproduces an image by overprinting separate screens — most commonly cyan, magenta, yellow, and black (see CMYK) — and because each screen is its own regular lattice, the lattices interfere wherever they overlap. If two strong screens are set at the same or nearly the same angle, they beat into a coarse, often colour-tinged moiré that spoils the reproduction."
    },
    {
      "kind": "paragraph",
      "text": "The standard remedy is to separate the screens in angle. Correctly angled screens still interfere, but the interference is driven to a fine, roughly circular texture known as the rosette, which the eye accepts as smooth tone. By long-standing prepress convention, the industry has standardized on a set of known angles that make the dots form into small circles or rosettes, and much of the prepress art consists of selecting screen angles and halftone frequencies that minimize moiré."
    },
    {
      "kind": "list",
      "items": [
        "The visually strong screens are conventionally given a wide angular separation from one another — commonly described as roughly 30° apart — so that no two of their lattices sit close in orientation.",
        "Yellow, conventionally treated as the least visually prominent of the process inks, is placed close to another screen, since its own contribution to any residual pattern is weak.",
        "These specific angle assignments are a standardized convention within a given workflow, not a single universal physical law; the exact values vary between vendors, screening systems, and jobs. The detailed angle sets belong to the companion page on halftone screen angles."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because the rosette is itself a controlled moiré, it can still become visible if the screen ruling is too coarse. Choosing a finer halftone frequency shrinks the rosette and is the frequency-based counterpart to angle separation."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Screen-versus-subject moiré"
    },
    {
      "kind": "paragraph",
      "text": "A halftone screen can also beat against periodic detail that is already present in the image, rather than against another screen. When a photographed subject contains a fine, regular texture — a woven fabric such as a houndstooth jacket, a window screen or wire mesh, distant railings or louvres, courses of brick, or a striped or checked pattern — that texture is itself a periodic structure, and once it is screened for print it can interfere with the halftone lattice to produce moiré. The same class of effect is seen on displays, where a patterned garment beats against the pixel or scan grid of a camera or screen."
    },
    {
      "kind": "paragraph",
      "text": "Subject moiré is harder to design out than screen-versus-screen moiré, because the offending periodicity comes from the content rather than from a parameter the operator sets. Practical mitigations therefore act on either the image or the screen:"
    },
    {
      "kind": "list",
      "items": [
        "Slightly rescaling, rotating, or locally softening (blurring) the offending region so its periodicity no longer aligns with the screen.",
        "Choosing a different screen ruling so the two frequencies are no longer close.",
        "Using frequency-modulated (stochastic) screening, which presents no single dominant screen frequency for the subject detail to beat against."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Scanning and descreening moiré"
    },
    {
      "kind": "paragraph",
      "text": "A third, distinct moiré appears when an already-printed halftone is digitized. A scanner samples the page on its own regular grid, and that sampling grid interferes with the periodic grid of printed dots. If the material is sampled at less than about twice the halftone's dot frequency (the Nyquist rate), the result carries low-frequency fringes — described in the scanning literature as the moiré of the halftone dots with the sampling pattern — an instance of aliasing rather than of ink-on-ink overlap."
    },
    {
      "kind": "paragraph",
      "text": "Removing this pattern is called descreening. One well-documented approach attenuates the halftone frequencies before and during sampling: optically low-pass filtering the image, oversampling it at several times the required output bandwidth, and then applying a digital low-pass filter and resampling, so that the aliased energy is shifted above the output bandwidth and can be filtered away. In practice descreening always trades some sharpness for removal of the pattern, because a filter aggressive enough to suppress the screen also softens genuine fine detail and edges. This capture-side moiré is closely related to the sampling and rasterization performed by a raster image processor and to the quantization step discussed on the image-thresholding page."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Preventing and managing moiré"
    },
    {
      "kind": "paragraph",
      "text": "No single control eliminates every kind of moiré, because the three families above have different causes. Prepress and imaging practice combines several levers, matched to where the interfering periodicity originates:"
    },
    {
      "kind": "list",
      "items": [
        "Angle separation. Give overlapping AM screens well-separated angles so their combined interference collapses into a fine rosette rather than coarse banding.",
        "Screen frequency. Select halftone rulings so that interacting frequencies are not close, and so that any residual rosette is fine enough to disappear at viewing distance.",
        "Frequency-modulated (stochastic) screening. Because FM screening places micro-dots pseudo-randomly instead of on a fixed lattice, it has no regular screen angle or frequency and so does not generate the screen-versus-screen rosette moiré; its tradeoffs, such as greater dot gain and press sensitivity, are covered on the Halftoning page.",
        "Descreening and adequate sampling. When digitizing printed originals, low-pass filter and sample at a sufficient rate to keep the dot grid from aliasing.",
        "Editing the subject. For screen-versus-subject moiré, locally rescale, rotate, or soften the periodic detail that is beating against the screen."
      ]
    },
    {
      "kind": "paragraph",
      "text": "An important caveat is that these measures manage moiré below the threshold of visibility rather than guaranteeing its total absence; the rosette itself is the residue that remains by design."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to adjacent concepts"
    },
    {
      "kind": "paragraph",
      "text": "Moiré is best understood alongside several neighbouring ideas in reproduction:"
    },
    {
      "kind": "list",
      "items": [
        "Halftoning. Moiré is a direct consequence of the regular dot lattices that conventional (AM) halftoning uses; the Halftoning overview covers AM versus FM screening, screen ruling (LPI), and dot gain, which this page assumes rather than repeats.",
        "The rosette and screen angles. The rosette is the deliberately tuned, tolerable moiré of correctly angled screens, which is why screen angles exist as a controlled parameter; the companion halftone screen-angles page treats the specific angle conventions in detail.",
        "Aliasing. Scanning and rasterization moiré are the sampling-domain face of the same phenomenon — a periodic signal beating against a sampling grid — which links moiré to the work of the raster image processor and to quantization and thresholding.",
        "FM screening as a trade. Stochastic screening removes screen moiré by discarding the periodic grid, exchanging the rosette problem for finer, grain-like texture and greater sensitivity to dot gain."
      ]
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical reference. Figures and dates are drawn from documented sources; it does not include current pricing, marketing claims, or product recommendations. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "tools",
      "slug": "screen-angles"
    },
    {
      "section": "tools",
      "slug": "amplitude-modulation-screening"
    },
    {
      "section": "tools",
      "slug": "frequency-modulation-screening"
    },
    {
      "section": "tools",
      "slug": "halftoning"
    },
    {
      "section": "tools",
      "slug": "raster-image-processor"
    },
    {
      "section": "tools",
      "slug": "cmyk"
    }
  ],
  "faqs": [
    {
      "q": "Is a moiré pattern the same as a rosette?",
      "a": "They are the same kind of effect but not the same thing. A rosette is the fine, roughly circular interference texture produced when process-colour screens are correctly separated in angle; it is a controlled, tolerable moiré that reads as smooth tone. \"Moiré\" as a fault usually refers to the coarse, obtrusive banding that appears when screens are mis-angled, or when a screen beats against subject detail or a scanner grid."
    },
    {
      "q": "Why are printing screens set at different angles?",
      "a": "Overlapping halftone screens are regular lattices, and two lattices at the same or nearly the same orientation beat into a coarse, visible moiré. Separating the screens in angle drives that interference down to a fine rosette. The strong process screens are conventionally given a wide separation (commonly described as about 30°), with yellow placed close to another screen because it is the least visually prominent ink; the exact values are a workflow convention rather than a universal standard."
    },
    {
      "q": "Does stochastic (FM) screening remove moiré?",
      "a": "FM/stochastic screening places micro-dots pseudo-randomly rather than on a fixed grid, so it has no regular screen angle or frequency and does not create the screen-versus-screen rosette moiré. It trades that benefit for effects such as higher dot gain and greater press sensitivity, which is why it is one option among several rather than a universal fix. See the Halftoning page for the AM/FM comparison."
    },
    {
      "q": "Why does scanning a printed page produce moiré?",
      "a": "A scanner samples the page on its own regular grid, which interferes with the grid of already-printed halftone dots. If the dots are sampled at less than twice their frequency (the Nyquist rate), the mismatch aliases into low-frequency fringes. Descreening — low-pass filtering together with adequate or oversampling and resampling — suppresses the pattern, at some cost to sharpness."
    },
    {
      "q": "Where does the word \"moiré\" come from?",
      "a": "From the French moiré, describing the rippled, \"watered\" sheen of moire textile (historically silk), a term that traces back to the English word mohair. The shifting, wavy figure of the pressed fabric — itself an interference of the cloth's regular weave against itself — lent its name to the optical phenomenon."
    }
  ],
  "sources": [
    {
      "title": "Variational Approach to Moiré Pattern Synthesis, Journal of the Optical Society of America A",
      "url": "https://opg.optica.org/josaa/abstract.cfm?uri=josaa-18-6-1371",
      "publisher": "Optica Publishing Group"
    },
    {
      "title": "Moiré Pattern",
      "url": "https://en.wikipedia.org/wiki/Moir%C3%A9_pattern",
      "publisher": "Wikipedia"
    },
    {
      "title": "Halftone",
      "url": "https://en.wikipedia.org/wiki/Halftone",
      "publisher": "Wikipedia"
    },
    {
      "title": "Moire (Fabric)",
      "url": "https://en.wikipedia.org/wiki/Moire_(fabric)",
      "publisher": "Wikipedia"
    },
    {
      "title": "System for Scanning Halftoned Images (US Patent 4,987,496)",
      "url": "https://patents.google.com/patent/US4987496",
      "publisher": "United States Patent and Trademark Office"
    },
    {
      "title": "Stochastic Screening",
      "url": "https://en.wikipedia.org/wiki/Stochastic_screening",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-07",
  "updated": "2026-07-07",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "moiré pattern",
    "moire in printing",
    "halftone moiré",
    "screen angles",
    "rosette pattern",
    "screen-versus-screen moiré",
    "subject moiré",
    "descreening",
    "scanning moiré",
    "stochastic screening",
    "prepress moiré prevention"
  ],
  "cluster": "print-imaging"
};

export default entry;
