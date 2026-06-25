import { ImageResponse } from "next/og";

// Rawsa apple-touch-icon — larger serif "R" monogram, no rounding (iOS masks it).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #f59e0b 0%, #f97316 52%, #ec4899 100%)",
          color: "#fffaf0",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: 132,
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        R
      </div>
    ),
    { ...size }
  );
}
