import { ImageResponse } from "next/og";

export const alt = "WR Studio: apps, brands and video at fixed prices";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#050505",
          color: "#f4f1ea",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>
          WR<span style={{ color: "#d6ff43" }}>Studio</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>
            Apps, brands &amp; video.
          </div>
          <div style={{ fontSize: 96, fontStyle: "italic", color: "#d6ff43", letterSpacing: -3, lineHeight: 1.1 }}>
            Fixed prices.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#9fa5af" }}>
          Web &amp; mobile apps · Landing pages · Logos · Social creatives · Video editing
        </div>
      </div>
    ),
    size,
  );
}
