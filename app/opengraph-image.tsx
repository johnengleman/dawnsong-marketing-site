import { ImageResponse } from "next/og";

export const alt = "Sona";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Language-neutral branded Open Graph card. The page metadata carries
 * localized titles/descriptions; the shared image avoids English-only text.
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
            justifyContent: "center",
            borderRadius: "48px",
            border: "2px solid rgba(154, 116, 48, 0.25)",
            background: "rgba(255, 250, 240, 0.65)",
            color: "#1f3a2c",
            fontSize: "104px",
            lineHeight: 1,
            fontWeight: 600,
            width: "100%",
            height: "100%",
            boxShadow: "0 32px 80px rgba(96, 66, 28, 0.16)",
          }}
        >
          Sona
        </div>
      </div>
    ),
    { ...size },
  );
}
