import { ImageResponse } from "next/og";

// Static Open Graph image, generated at build time via next/og (a subpath
// of the `next` package — no new dependency). Paper/ink palette and the
// catalog-plate Logomark reconstructed with positioned divs, so the card
// carries no photographic/historical imagery — only the brand mark and
// typography. 1200×630 PNG.

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "PrinterArchive — The archive of printing knowledge";

// Palette mirrors app/globals.css.
const PAPER = "#f4f1e9";
const INK = "#1a1a1a";
const INK_DISPLAY = "#121211";
const INK_SOFT = "#4a4a46";
const INK_FAINT = "#5c5c54";
const RULE_STRONG = "#d8d4c8";
const ACCENT = "#1f5d5a";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: PAPER,
          padding: "92px",
          position: "relative",
        }}
      >
        {/* Catalog-plate inner frame */}
        <div
          style={{
            position: "absolute",
            top: "30px",
            left: "30px",
            right: "30px",
            bottom: "30px",
            border: `1px solid ${RULE_STRONG}`,
          }}
        />

        {/* Logomark — 17×17 frame, mid rule, lower-right press block */}
        <div style={{ position: "relative", width: "96px", height: "96px", display: "flex" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: `5px solid ${INK}`,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "46px",
              height: "5px",
              backgroundColor: INK,
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: "30px",
              height: "30px",
              backgroundColor: INK,
            }}
          />
        </div>

        {/* Wordmark */}
        <div
          style={{
            marginTop: "44px",
            fontSize: "104px",
            fontWeight: 700,
            letterSpacing: "-3px",
            color: INK_DISPLAY,
            display: "flex",
          }}
        >
          PrinterArchive
        </div>

        {/* Accent hairline */}
        <div
          style={{
            marginTop: "28px",
            width: "220px",
            height: "3px",
            backgroundColor: ACCENT,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            marginTop: "28px",
            fontSize: "44px",
            color: INK_SOFT,
            display: "flex",
          }}
        >
          The archive of printing knowledge
        </div>

        {/* Domain, lower-right */}
        <div
          style={{
            position: "absolute",
            right: "92px",
            bottom: "78px",
            fontSize: "26px",
            letterSpacing: "1px",
            color: INK_FAINT,
            display: "flex",
          }}
        >
          printerarchive.net
        </div>
      </div>
    ),
    { ...size },
  );
}
