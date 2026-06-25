import { ImageResponse } from "next/og";

// Rawsa favicon — serif "R" monogram on a fruit-gradient tile.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
          background:
            "linear-gradient(135deg, #f59e0b 0%, #f97316 52%, #ec4899 100%)",
          color: "#fffaf0",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: 24,
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
