import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "BEST Tree";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const read = (...parts: string[]) =>
  readFile(path.join(process.cwd(), ...parts));

export default async function OpengraphImage() {
  const [lion, regular, extraBold] = await Promise.all([
    read("public/images/lion.svg"),
    read("src/app/fonts/Nunito-Regular.ttf"),
    read("src/app/fonts/Nunito-ExtraBold.ttf"),
  ]);
  const lionSrc = `data:image/svg+xml;base64,${lion.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 100px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Nunito",
          background:
            "radial-gradient(circle at 15% 0%, rgba(0,157,245,0.35) 0%, rgba(0,157,245,0) 45%), radial-gradient(circle at 95% 5%, rgba(125,214,28,0.35) 0%, rgba(125,214,28,0) 40%), radial-gradient(circle at 90% 100%, rgba(255,152,0,0.38) 0%, rgba(255,152,0,0) 45%), #eef2f7",
          color: "#111827",
        }}
      >
        <img src={lionSrc} width={300} height={333} alt="" />

        <div
          style={{ display: "flex", flexDirection: "column", marginLeft: 70 }}
        >
          <div
            style={{
              fontSize: 128,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            BEST Tree
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 38,
              color: "#374151",
              maxWidth: 640,
            }}
          >
            It&apos;s more like trees, but whatever
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            fontSize: 24,
            color: "#6b7280",
          }}
        >
          Made by Vouchik
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Nunito", data: regular, weight: 400, style: "normal" },
        { name: "Nunito", data: extraBold, weight: 800, style: "normal" },
      ],
    },
  );
}
