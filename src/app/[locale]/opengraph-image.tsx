import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jessica Tatham - Senior Contract Developer, AI-Accelerated";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2F3530",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#F5F3EF",
              letterSpacing: "0.05em",
            }}
          >
            TT
          </div>
          <div
            style={{
              width: "2px",
              height: "40px",
              background: "#B8A078",
            }}
          />
          <div
            style={{
              fontSize: "24px",
              color: "#B8A078",
              fontWeight: 500,
            }}
          >
            Tatham Tech
          </div>
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#F5F3EF",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Jessica Tatham
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#C4866A",
            fontWeight: 500,
          }}
        >
          Senior Contract Developer · AI-Accelerated
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "#F5F3EF",
            opacity: 0.6,
            marginTop: "40px",
          }}
        >
          Bell Canada · Wells Fargo · Sofar Sounds · SAP
        </div>
      </div>
    ),
    { ...size }
  );
}
