import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "rgb-color-model",
  "title": "RGB Color Model",
  "description": "The additive RGB color model explained: definition, history, standard encodings (sRGB, Adobe RGB), device dependence, and its role feeding print.",
  "summary": "RGB (Red, Green, Blue) is an additive color model that builds color by combining red, green, and blue light. It is the native model of displays, projectors, scanners, and cameras, and it is device-dependent: a given RGB triple only names a fixed color when paired with a defined encoding (such as sRGB or Adobe RGB) or an ICC profile. In print, RGB is the authoring and capture space, converted to CMYK downstream. This page covers the model's definition, documented history, mechanics, standard encodings with their verified primaries and transfer functions, and where RGB sits in the color-managed print pipeline.",
  "difficulty": "intermediate",
  "estimatedTime": "7 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "RGB (Red, Green, Blue) is an additive color model: color is created by combining red, green, and blue primary light sources at varying intensities, starting from black (no light) and adding light to reach white. It is the native model of light-emitting and light-capturing devices — displays, projectors, scanners, and cameras — and stands in direct contrast to the subtractive CMYK model used in printing, where colorants absorb (subtract) light from a white substrate."
    },
    {
      "kind": "paragraph",
      "text": "In a print workflow, RGB is almost always the input and authoring color space. Conversion to CMYK, mediated by ICC profiles, happens downstream before the image reaches the press or the raster image processor (RIP). The pipeline is, for most print production, fundamentally an RGB-in, CMYK-out flow."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What it is / definition"
    },
    {
      "kind": "paragraph",
      "text": "The RGB color model is an additive color model in which the red, green, and blue primary colors of light are added together in various ways to reproduce a broad array of colors. Each color is specified as three intensity values, one per primary channel. Combining two primaries at full intensity yields the additive secondaries:"
    },
    {
      "kind": "list",
      "items": [
        "red + green = yellow",
        "green + blue = cyan",
        "red + blue = magenta"
      ]
    },
    {
      "kind": "paragraph",
      "text": "All three primaries together yield white."
    },
    {
      "kind": "paragraph",
      "text": "Critically, RGB is a device-dependent model. A given triple of RGB values does not define one fixed, absolute color across devices: different displays and capture devices reproduce or detect the same numeric RGB value as visibly different colors. Turning device-dependent RGB numbers into unambiguous, device-independent color requires either an explicit encoding (a defined RGB color space such as sRGB or Adobe RGB) or color management through ICC profiles that map the device to a reference color space. This is the pivotal fact that connects RGB to color management."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History (documented)"
    },
    {
      "kind": "list",
      "items": [
        "1861 — James Clerk Maxwell demonstrated the three-color (RGB) additive principle in color photography, combining three color-filtered separate exposures.",
        "late 1920s — W. David Wright (ten observers) and John Guild (seven observers) independently conducted the color-matching experiments that underpin modern colorimetry.",
        "1928 / 1938 — John Logie Baird demonstrated early RGB color transmission (1928) and a color broadcast (1938).",
        "1931 — The CIE published its color-matching functions and the 2° Standard Observer, built on Wright–Guild data. The CIE RGB system used three monochromatic primaries at 700 nm (red), 546.1 nm (green), and 435.8 nm (blue), the green and blue being reproducible mercury-vapor emission lines. Because three real primaries cannot span the entire spectral locus, matching some wavelengths required negative amounts of a primary. This limitation motivated the derived, all-positive CIE XYZ space.",
        "1938 — Werner Flechsig patented shadow-mask color-CRT technology in Germany.",
        "1987 — The Video Graphics Array (VGA) brought analog RGB output and higher color depth to personal computing, building on earlier RGB display adapters such as CGA (1981) and EGA (1984).",
        "1996 / 1999 — sRGB was proposed (Stokes, Anderson, Chandrasekar, Motta) and later standardized by the IEC.",
        "1998 — Adobe RGB (1998) was introduced."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The historical dates for Maxwell, Baird, Flechsig, and VGA are documented from secondary reference sources rather than primary-verified."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Human color vision is trichromatic: the retina has three cone types with peak sensitivities in the long- (red), medium- (green), and short-wavelength (blue) regions. The RGB primaries are chosen to stimulate these three channels roughly independently, so most perceivable colors can be evoked by three controlled light intensities."
    },
    {
      "kind": "paragraph",
      "text": "In practice each channel is quantized, most commonly 8 bits per channel (0–255), and also 10-, 12-, or 16-bit in wider workflows. The numbers are not linear light: display encodings apply a transfer function (loosely called \"gamma\") so that code values are perceptually spaced and match display behavior. sRGB, for example, specifies a piecewise transfer function that closely approximates a gamma of 2.2, with a small linear segment near black. Adobe RGB (1998) assumes a gamma of approximately 2.2 (precisely 563/256 = 2.19921875)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the color/print pipeline"
    },
    {
      "kind": "paragraph",
      "text": "1. Capture / authoring — scanners and digital cameras record in RGB; designers author in an RGB working space (sRGB, Adobe RGB, or wider). 2. Editing / soft-proofing — the image is viewed on an RGB display, and color management (ICC) simulates the eventual print. 3. Conversion to CMYK — before printing, RGB is converted to the press's CMYK space using ICC profiles and a rendering intent. 4. RIP / halftoning — the CMYK data is rasterized and screened for the marking engine."
    },
    {
      "kind": "paragraph",
      "text": "RGB dominates stages 1–2. The conversion and rasterization stages are covered on the dedicated CMYK, ICC profiles, RIP, and halftoning pages."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to ICC profiles and CMYK"
    },
    {
      "kind": "paragraph",
      "text": "Because RGB is device-dependent, an RGB image is only unambiguous when paired with a color-space definition. Two mechanisms provide this:"
    },
    {
      "kind": "list",
      "items": [
        "Standard RGB encodings — self-describing spaces with fixed primaries, white point, and transfer function (sRGB, Adobe RGB). These act as known reference RGB spaces.",
        "ICC profiles — the ICC color-management architecture (standardized as ISO 15076-1, based on the ICC.1 specification) attaches a profile describing a device's color behavior, enabling accurate conversion between an RGB source and a CMYK destination through a device-independent profile connection space (CIE XYZ or CIELAB)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The RGB-to-CMYK conversion is where gamut mismatch becomes visible: RGB (light) can represent saturated, luminous colors that CMYK inks (subtractive colorants) cannot reproduce. Adobe RGB (1998) was designed to encompass most colors achievable on CMYK printers while still using RGB primaries on a display, which is why it is a common print-oriented working space. See the CMYK and ICC profiles pages for detail."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printer technologies"
    },
    {
      "kind": "paragraph",
      "text": "At the marking-engine level, color printers are not RGB devices. They are subtractive devices typically using CMYK, or CMYK plus spot or extended-gamut inks. RGB reaches a printer only as an input format: many desktop and photo printers accept RGB data and perform the RGB-to-CMYK (or RGB-to-ink) conversion internally via their driver or RIP."
    },
    {
      "kind": "paragraph",
      "text": "Displays, projectors, and LED video walls, by contrast, are genuinely additive RGB output devices (CRT, LCD, plasma, OLED, quantum-dot, multicolor LED). This division — additive RGB for emissive devices, subtractive CMYK for marking on media — is the core reason color management exists in print."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common problems"
    },
    {
      "kind": "list",
      "items": [
        "Device dependence / no color management — the same RGB values look different on different monitors; without an embedded profile or assumed space, color is unpredictable.",
        "Out-of-gamut colors on conversion to CMYK — saturated RGB blues, greens, and oranges clip when printed, and the rendering-intent choice affects how they are remapped.",
        "Missing or wrong profile assumptions — treating an Adobe RGB file as sRGB, or vice versa, desaturates or over-saturates the result.",
        "Transfer-function / gamma mismatches — misapplied gamma produces washed-out or muddy tones.",
        "Bit-depth banding — 8-bit-per-channel quantization can show visible banding in smooth gradients, especially in wide-gamut spaces."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Matches human trichromatic vision and the physics of emissive and capture devices, making it the natural model for screens, cameras, and scanners.",
        "Compact three-channel representation, widely supported across file formats, hardware, and software.",
        "Standardized encodings (sRGB, Adobe RGB) give predictable, interoperable color when honored.",
        "Large potential gamut in wide-gamut RGB spaces, useful as a rich authoring space feeding print."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Limitations"
    },
    {
      "kind": "list",
      "items": [
        "Device-dependent by nature; requires an encoding or ICC management to mean a specific color.",
        "Cannot be marked directly by subtractive printers; it must be converted to CMYK or ink.",
        "No set of three real primaries can reproduce all visible colors — the same limit that forced negative CIE RGB values and the move to XYZ.",
        "Gamut mismatch with CMYK causes unavoidable clipping or compression for some colors."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "RGB remains the foundation of virtually all digital imaging and display. sRGB is still the default assumed space for the web and consumer content, while wider spaces (Adobe RGB and display-oriented wide-gamut spaces) serve photography, prepress, and high-end displays."
    },
    {
      "kind": "paragraph",
      "text": "In print specifically, RGB is the standard authoring and capture space, with a color-managed RGB-to-CMYK conversion — governed by ICC profiles and, for process standardization, ISO 12647 print conditions — sitting between the creative stage and the press."
    },
    {
      "kind": "paragraph",
      "text": "Reference data (verified). sRGB (IEC 61966-2-1): Red x=0.6400, y=0.3300; Green x=0.3000, y=0.6000; Blue x=0.1500, y=0.0600; white point D65 x=0.3127, y=0.3290; transfer function approximating gamma 2.2; shares Rec. 709 primaries and white point. Adobe RGB (1998): Red x=0.64, y=0.33; Green x=0.21, y=0.71; Blue x=0.15, y=0.06; white point D65 x=0.3127, y=0.3290; gamma 563/256 ≈ 2.19921875; wider gamut than sRGB, notably in cyan-green."
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
          "period": "1861",
          "text": "Maxwell demonstrates three-color additive photography."
        },
        {
          "period": "late 1920s",
          "text": "Wright and Guild color-matching experiments."
        },
        {
          "period": "1928",
          "text": "Baird demonstrates RGB color transmission."
        },
        {
          "period": "1931",
          "text": "CIE publishes color-matching functions, the 2° Standard Observer, and CIE RGB (700 / 546.1 / 435.8 nm primaries)."
        },
        {
          "period": "1938",
          "text": "Baird color broadcast; Flechsig shadow-mask CRT patent (Germany)."
        },
        {
          "period": "1987",
          "text": "VGA adds analog RGB output and higher color depth, building on earlier RGB adapters CGA (1981) and EGA (1984)."
        },
        {
          "period": "1996",
          "text": "sRGB proposed (Stokes, Anderson, Chandrasekar, Motta)."
        },
        {
          "period": "1998",
          "text": "Adobe RGB (1998) introduced."
        },
        {
          "period": "1999",
          "text": "sRGB standardized as IEC 61966-2-1:1999."
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
      "section": "tools",
      "slug": "cmyk"
    },
    {
      "section": "guides",
      "slug": "color-spaces"
    },
    {
      "section": "guides",
      "slug": "rgb-to-cmyk-conversion"
    },
    {
      "section": "guides",
      "slug": "lab-color"
    },
    {
      "section": "tools",
      "slug": "icc-profiles"
    },
    {
      "section": "guides",
      "slug": "color-management"
    }
  ],
  "faqs": [
    {
      "q": "What is the RGB color model?",
      "a": "RGB is an additive color model that reproduces colors by combining red, green, and blue light at varying intensities, starting from black and adding light to reach white. It is the native model of displays, projectors, scanners, and cameras."
    },
    {
      "q": "Why is RGB called device-dependent?",
      "a": "A given RGB triple does not name one fixed color across devices; different monitors and capture devices render or detect the same numbers as visibly different colors. It becomes unambiguous only with a defined encoding (like sRGB) or an ICC profile."
    },
    {
      "q": "How does RGB differ from CMYK?",
      "a": "RGB is additive (light added to black), used by emissive and capture devices. CMYK is subtractive (colorants absorbing light from a white substrate), used by printers. RGB is the authoring space; CMYK is the print output space."
    },
    {
      "q": "What is the difference between sRGB and Adobe RGB?",
      "a": "Both are standardized RGB encodings sharing the D65 white point, but Adobe RGB (1998) has a wider gamut, notably in cyan-green, and uses a gamma of 563/256 (about 2.2). sRGB approximates gamma 2.2 with a piecewise transfer function and is the default for the web."
    },
    {
      "q": "Can a printer print RGB directly?",
      "a": "No. Color printers are subtractive CMYK (or CMYK-plus-ink) devices at the marking engine. Printers that accept RGB input convert it to CMYK internally via their driver or RIP before marking."
    }
  ],
  "sources": [
    {
      "title": "A Standard Default Color Space for the Internet — sRGB",
      "url": "https://www.w3.org/Graphics/Color/sRGB.html",
      "publisher": "W3C (Stokes, Anderson, Chandrasekar & Motta)"
    },
    {
      "title": "Specification of sRGB (srgb.pdf)",
      "url": "https://www.color.org/srgb.pdf",
      "publisher": "International Color Consortium"
    },
    {
      "title": "IEC 61966-2-1:1999",
      "url": "https://webstore.iec.ch/en/publication/6169",
      "publisher": "International Electrotechnical Commission"
    },
    {
      "title": "ISO 15076-1:2005 — Image technology colour management",
      "url": "https://www.iso.org/standard/40317.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "ISO 12647-2:2013 — Graphic technology, process control",
      "url": "https://www.iso.org/standard/57833.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "ICC.1:2022 Specification",
      "url": "https://www.color.org/specification/ICC.1-2022-05.pdf",
      "publisher": "International Color Consortium"
    },
    {
      "title": "Adobe RGB (1998) Color Image Encoding",
      "url": "https://www.adobe.com/digitalimag/pdfs/AdobeRGB1998.pdf",
      "publisher": "Adobe Systems"
    },
    {
      "title": "RGB color model",
      "url": "https://en.wikipedia.org/wiki/RGB_color_model",
      "publisher": "Wikipedia"
    },
    {
      "title": "CIE 1931 color space",
      "url": "https://en.wikipedia.org/wiki/CIE_1931_color_space",
      "publisher": "Wikipedia"
    },
    {
      "title": "Adobe RGB color space",
      "url": "https://en.wikipedia.org/wiki/Adobe_RGB_color_space",
      "publisher": "Wikipedia"
    },
    {
      "title": "sRGB",
      "url": "https://en.wikipedia.org/wiki/SRGB",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "rgb color model",
    "additive color",
    "srgb",
    "adobe rgb",
    "device-dependent color",
    "cie 1931",
    "rgb to cmyk",
    "color management",
    "color primaries",
    "transfer function gamma",
    "iec 61966-2-1",
    "trichromatic vision"
  ],
  "cluster": "color-management"
};

export default entry;
