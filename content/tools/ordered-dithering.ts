import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "ordered-dithering",
  "title": "Ordered Dithering",
  "description": "Ordered dithering renders continuous tone on limited-color devices by comparing each pixel to a threshold from a small matrix tiled across the image.",
  "summary": "Ordered dithering is a digital halftoning technique that approximates a continuous-tone image on a device with only a small, fixed set of output levels by comparing each pixel against a position-dependent threshold read from a small matrix that is tiled across the image. Because every pixel is decided independently from a fixed map, the method is fast, deterministic, and easy to parallelize, at the cost of a visible repeating texture. Common threshold maps include recursive Bayer matrices, clustered-dot screens, and precomputed blue-noise (void-and-cluster) arrays. It is the point-process counterpart to error diffusion and the digital relative of conventional halftone screening.",
  "purpose": "Ordered dithering approximates continuous tone by comparing each pixel against a fixed threshold matrix, such as a Bayer or clustered-dot map.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Definition"
    },
    {
      "kind": "paragraph",
      "text": "Ordered dithering is a family of digital halftoning (dithering) algorithms that reproduce a continuous-tone image on a device able to output only a small, fixed set of levels — for example a bi-level printer, or a display restricted to an indexed color palette. It works by comparing each input pixel against a threshold that varies with the pixel's position, read from a small, pre-set threshold map (also called a dither matrix or threshold matrix) that is repeated, or tiled, across the whole image."
    },
    {
      "kind": "paragraph",
      "text": "The word \"ordered\" distinguishes the method from random dithering, in which the threshold at each pixel is chosen at random, and from error diffusion, in which the quantization error of each pixel is carried forward to its neighbors. In ordered dithering the thresholds form a fixed, structured (ordered) arrangement, so the output for a given input pixel depends only on that pixel's value and its coordinates, and not on any neighboring pixel. A single global threshold applied to every pixel is the degenerate one-cell case of this idea (covered on the image-thresholding page); ordered dithering generalizes it to a spatially varying threshold."
    },
    {
      "kind": "paragraph",
      "text": "The result is a purely patterned approximation. At normal viewing distance the eye spatially averages the fine on/off pattern into apparent intermediate tones — the same perceptual mechanism that underlies halftoning in general."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How ordered dithering works"
    },
    {
      "kind": "paragraph",
      "text": "The threshold map is a small array of numbers, commonly of size 2x2, 4x4, 8x8, or larger. For an n x n map its entries are a permutation of the integers from 0 to n squared minus 1, placed in a particular order. Dividing those entries by n squared turns them into n squared evenly spaced threshold levels that span the tonal range."
    },
    {
      "kind": "paragraph",
      "text": "To dither an image, the map is conceptually tiled edge to edge across the pixel grid. For a pixel at coordinates (x, y), the applicable threshold is the map entry at column (x mod n) and row (y mod n). The pixel's intensity is then compared with that threshold: if the intensity is greater than the threshold, the brighter output state is written; otherwise the darker one is written. Because the thresholds within a single tile take many different values, a region of uniform input intensity turns on a fraction of its pixels roughly proportional to that intensity, creating the perception of an intermediate tone."
    },
    {
      "kind": "paragraph",
      "text": "The same idea extends to more than two output levels and to color. Instead of a hard two-level decision, the map value (recentred around zero) is added as a small offset to the pixel before it is quantized to the nearest available palette entry or the nearest device level. Applied independently per channel, or against an indexed palette, this dithers color images; the size of the offset controls how strongly the pattern is expressed."
    },
    {
      "kind": "paragraph",
      "text": "A defining property is that each output pixel is computed independently, using only its own value and position. Ordered dithering is therefore stateless, deterministic, and trivially parallelizable: the same input always yields the same output, and pixels can be processed in any order or all at once. This is the main structural difference from error diffusion, which must propagate error sequentially. The trade-off is that the fixed map imposes its own repeating texture on the image."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Threshold maps: Bayer, clustered-dot, and blue-noise"
    },
    {
      "kind": "paragraph",
      "text": "The visual character of ordered dithering is determined almost entirely by how the numbers are arranged in the threshold map. Three families are widely described."
    },
    {
      "kind": "list",
      "items": [
        "Recursive (Bayer) dispersed-dot matrices. Named after Bryce E. Bayer, these are built recursively for power-of-two sizes: a 2x2 map (entries 0, 2, 3, 1 read across its two rows, each divided by 4) is expanded to 4x4, then 8x8, and so on, by a fixed doubling rule. The ordering is chosen to spread the turned-on pixels as far apart as possible at every tone, which minimizes clumping but leaves a characteristic regular cross-hatch texture. The 4x4 Bayer map, for example, holds the values 0, 8, 2, 10 / 12, 4, 14, 6 / 3, 11, 1, 9 / 15, 7, 13, 5 (each divided by 16).",
        "Clustered-dot ordered dither. Here the map is ordered so that the pixels switching on for a given tone form a compact, growing cluster rather than a dispersed field; as the tone darkens the cluster grows into a larger dot. This is the digital counterpart of conventional amplitude-modulated (AM) halftone screening, building variable-size dots on a regular grid. Compact clusters tend to survive ink spread and toner scatter better than isolated single pixels, so clustered-dot maps are common on physical marking engines. Such screens are typically placed at the conventional screen angles used in AM color work — a common practice rather than a strict rule — as discussed on the halftoning page.",
        "Blue-noise / void-and-cluster masks. These are larger, precomputed maps whose thresholds are arranged so that the turned-on pixels at every tone have a blue-noise (high-frequency, aperiodic-looking) spatial distribution. The void-and-cluster construction repeatedly locates the largest gap (void) and the tightest cluster in an evolving pattern and adjusts them to keep the distribution homogeneous. Blue-noise maps avoid the conspicuous periodic structure of small Bayer matrices while retaining the speed and statelessness of ordered dithering, at the cost of storing a larger array."
      ]
    },
    {
      "kind": "paragraph",
      "text": "In short, small dispersed-dot maps are fast and compact but show visible periodic patterning; clustered-dot maps trade some resolution for robustness on print devices; and blue-noise maps give the least conspicuous texture but need a larger precomputed array."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History and attribution"
    },
    {
      "kind": "paragraph",
      "text": "The recursive dispersed-dot threshold matrix is attributed to Bryce E. Bayer, who described it in the 1973 paper \"An optimum method for two-level rendition of continuous-tone pictures,\" presented at the IEEE International Conference on Communications. The maps produced by its recursive doubling construction are consequently known as Bayer matrices."
    },
    {
      "kind": "paragraph",
      "text": "The theory of dithering for display and print was consolidated by Robert Ulichney in the book Digital Halftoning (MIT Press, 1987), which analyzed the frequency content of dither patterns and developed the concept of blue noise as a desirable spectral target for halftoning. Ulichney later introduced the void-and-cluster method for generating blue-noise dither arrays in a 1993 paper, giving a practical way to construct the large ordered maps described above."
    },
    {
      "kind": "paragraph",
      "text": "Ordered dithering sits within the broader history of halftoning, whose photographic origins and contested early priority are covered on the halftoning page. The developments summarized here concern specifically the digital, matrix-based form of the technique."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Ordered dithering compared with error diffusion"
    },
    {
      "kind": "paragraph",
      "text": "Digital halftoning is dominated by two families of algorithms: ordered dithering and error diffusion. Error diffusion (the best-known example being the Floyd-Steinberg algorithm) quantizes pixels in sequence and distributes the rounding error of each pixel to its not-yet-processed neighbors, so that local averages track the original tone. Ordered dithering, by contrast, makes each decision independently against a fixed map and carries no error between pixels."
    },
    {
      "kind": "list",
      "items": [
        "Structure and appearance: error diffusion produces an irregular, largely aperiodic pattern that generally hides better in photographic images; ordered dithering (except with blue-noise maps) leaves a regular, repeating texture.",
        "Processing model: ordered dithering is stateless and parallelizable and can be evaluated per pixel on the fly, which suits real-time and GPU implementations; error diffusion is inherently sequential because each pixel depends on its predecessors.",
        "Temporal stability: because ordered dithering depends only on position, small changes between frames do not reshuffle the whole pattern, so it is less prone to the flicker or jitter that error diffusion can introduce in animation.",
        "Compressibility: the periodic, lower-entropy output of ordered dithering tends to compress more effectively than the noise-like output of error diffusion."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The halftoning page frames this distinction at a higher level as amplitude-modulated (grid-based) versus frequency-modulated (stochastic) screening. Clustered-dot ordered dither corresponds broadly to the grid-based (AM) case, while error diffusion is a stochastic (FM-type) method; dispersed-dot Bayer and blue-noise ordered maps fall between, being spatially dispersed yet computed from a fixed map."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Practical uses and trade-offs"
    },
    {
      "kind": "paragraph",
      "text": "Ordered dithering is used wherever tone or color must be approximated cheaply and deterministically on a device with few output levels."
    },
    {
      "kind": "list",
      "items": [
        "Indexed-color and limited-palette imagery, such as converting photographs to a fixed palette; historically prominent in limited-palette display modes (for example, 16-color graphics modes).",
        "Real-time and hardware rendering, where the per-pixel, parallel nature of the method fits GPU implementations and where a stable pattern across frames is valuable.",
        "Print marking engines, where clustered-dot ordered screens convert rasterized pages into the bi-level dot patterns a laser or inkjet engine can mark; this screening runs in the raster image processor or the printer firmware (see the raster image processor page)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The method's balance of strengths and weaknesses follows directly from its fixed-map design:"
    },
    {
      "kind": "list",
      "items": [
        "Advantages: very fast; deterministic and reproducible; stateless and parallelizable; temporally stable for animation; compresses well; simple to implement.",
        "Limitations: small maps impose a visible, repeating pattern that can look artificial in photographs; isolated dispersed pixels can be fragile on devices with significant dot gain, which favors clustered-dot maps for print; achieving low-visibility results generally requires larger blue-noise maps; and pictorial detail rendition is usually considered lower than that of good error diffusion."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to halftoning, thresholding, and the RIP"
    },
    {
      "kind": "paragraph",
      "text": "Ordered dithering is closely tied to several neighboring topics, each covered in more general terms on its own page."
    },
    {
      "kind": "list",
      "items": [
        "Halftoning: ordered dithering is the matrix-based, digital form of halftoning. The halftoning page gives the broader picture — photographic history, amplitude- versus frequency-modulated screening, screen ruling (LPI), screen angles, and dot gain — which this page does not repeat. Clustered-dot ordered dither is specifically the digital realization of conventional AM screening.",
        "Image thresholding: a single fixed threshold applied to every pixel reduces an image to two levels but discards all intermediate tone. Ordered dithering can be understood as thresholding with a threshold that varies by position, recovering the apparent tone that a global threshold loses (see the image-thresholding page).",
        "Raster image processor (RIP): in print workflows the choice and application of a screen or dither — ordered, clustered-dot, or error-diffused — happens in the RIP or the printer's firmware as the page is rasterized to the device grid (see the raster image processor page).",
        "Color output: for color, the technique is applied per channel or per process ink; the CMYK page describes the separation model that color dithering ultimately feeds. Error diffusion, discussed above, is the principal alternative digital-halftoning family."
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
      "slug": "error-diffusion"
    },
    {
      "section": "tools",
      "slug": "halftoning"
    },
    {
      "section": "tools",
      "slug": "amplitude-modulation-screening"
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
      "q": "What is ordered dithering?",
      "a": "Ordered dithering is a digital halftoning technique that approximates a continuous-tone image on a device with only a few output levels by comparing each pixel against a position-dependent threshold read from a small matrix tiled across the image. Where the pixel is brighter than the local threshold it takes the brighter output state, otherwise the darker one, so that a uniform region turns on a fraction of its pixels proportional to its tone."
    },
    {
      "q": "How does ordered dithering differ from error diffusion?",
      "a": "Ordered dithering decides each pixel independently against a fixed threshold map, so it is stateless, deterministic, and parallelizable, and it is stable from frame to frame. Error diffusion (such as the Floyd-Steinberg algorithm) instead processes pixels in sequence and pushes each pixel's rounding error onto its neighbors, which usually hides better in photographs but is inherently serial and can flicker in animation. Ordered dithering also tends to compress better because its pattern is more regular."
    },
    {
      "q": "What is a Bayer matrix?",
      "a": "A Bayer matrix is a recursive dispersed-dot threshold map, attributed to Bryce E. Bayer in a 1973 paper, built for power-of-two sizes by a fixed doubling rule (2x2, then 4x4, then 8x8, and so on). Its entries are ordered to spread the turned-on pixels as far apart as possible at every tone, which minimizes clumping but produces a characteristic regular cross-hatch pattern."
    },
    {
      "q": "Why does ordered dithering show a repeating pattern, and how is it reduced?",
      "a": "Because a small threshold map is tiled edge to edge across the image, its structure repeats and becomes visible, especially with small dispersed-dot (Bayer) maps. The pattern can be made much less conspicuous by using larger blue-noise threshold maps, such as those built with Ulichney's void-and-cluster method, which distribute the turned-on pixels aperiodically while keeping the speed of ordered dithering."
    },
    {
      "q": "Is ordered dithering the same as halftoning?",
      "a": "Ordered dithering is the matrix-based, digital form of halftoning rather than a separate idea. In particular, clustered-dot ordered dither is the digital counterpart of conventional amplitude-modulated (AM) halftone screening. The halftoning page covers the broader subject — photographic history, AM versus FM screening, screen ruling, screen angles, and dot gain — that this page does not repeat."
    }
  ],
  "sources": [
    {
      "title": "Ordered dithering",
      "url": "https://en.wikipedia.org/wiki/Ordered_dithering",
      "publisher": "Wikipedia"
    },
    {
      "title": "An optimum method for two-level rendition of continuous-tone pictures",
      "url": "https://cir.nii.ac.jp/crid/1571417125604937984",
      "publisher": "Bryce E. Bayer, IEEE International Conference on Communications (1973); record via CiNii Research"
    },
    {
      "title": "Void-and-cluster method for dither array generation",
      "url": "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/1913/0000/Void-and-cluster-method-for-dither-array-generation/10.1117/12.152707.short",
      "publisher": "Robert A. Ulichney, Proc. SPIE 1913 (1993), SPIE Digital Library"
    },
    {
      "title": "Digital Halftoning",
      "url": "https://mitpress.mit.edu/9780262526470/digital-halftoning/",
      "publisher": "Robert Ulichney, MIT Press (1987)"
    }
  ],
  "published": "2026-07-07",
  "updated": "2026-07-07",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "ordered dithering",
    "dither matrix",
    "threshold map",
    "bayer matrix",
    "clustered-dot dithering",
    "dispersed-dot dithering",
    "blue noise",
    "void-and-cluster",
    "error diffusion",
    "digital halftoning",
    "palette quantization",
    "threshold matrix"
  ],
  "cluster": "print-imaging"
};

export default entry;
