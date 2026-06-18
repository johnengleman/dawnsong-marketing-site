import { ImageResponse } from "next/og";

export const alt =
  "Daybreak — the only habit app as beautiful as your goals";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Branded Open Graph card (1200x630) rendered at build/edge. Uses the brand's
 * warm palette so links shared to social and agents render a rich preview.
 * Swap for a real painted-scene image when one is available.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "84px",
          background:
            "linear-gradient(135deg, #c2d8f4 0%, #eee5cf 52%, #f7efe1 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#9a7430",
            fontSize: "30px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Daybreak
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "28px",
            color: "#1f3a2c",
            fontSize: "76px",
            lineHeight: 1.05,
            fontWeight: 500,
            maxWidth: "900px",
          }}
        >
          <span>The only habit app as beautiful as&nbsp;</span>
          <span style={{ color: "#9a7430", fontStyle: "italic" }}>
            your goals.
          </span>
        </div>
        <div
          style={{
            marginTop: "36px",
            color: "#48634f",
            fontSize: "34px",
            lineHeight: 1.4,
            maxWidth: "860px",
          }}
        >
          No streaks to break. A missed day is a dip, not a reset to zero.
        </div>
      </div>
    ),
    { ...size },
  );
}
