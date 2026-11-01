import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** next/og cannot reach next/font, so the display face is loaded from disk. */
const serif = fs.readFileSync(
  path.join(process.cwd(), "assets", "fonts", "InstrumentSerif-Regular.ttf"),
);

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e0e14",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 999,
              background: "#a5b4fc",
            }}
          />
          <div
            style={{
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#a5b4fc",
            }}
          >
            Product Management · AI Products
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Instrument Serif",
              fontSize: 132,
              lineHeight: 1.0,
              letterSpacing: -3,
              color: "#e8e8f0",
            }}
          >
            Nihith Konakalla
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#6b6b7c",
          }}
        >
          <div style={{ display: "flex" }}>nihithkonakalla.vercel.app</div>
          <div style={{ display: "flex" }}>Case studies · Sakhi AI</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: serif,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
