import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const runtime = "nodejs";
export const alt = "Tatham Tech blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? "Tatham Tech Blog";
  const topic = post?.topic ?? "Tatham Tech";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#2F3530",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "32px",
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
              height: "32px",
              background: "#B8A078",
            }}
          />
          <div
            style={{
              fontSize: "20px",
              color: "#B8A078",
              fontWeight: 500,
            }}
          >
            Tatham Tech
          </div>
          <div
            style={{
              marginLeft: "auto",
              fontSize: "18px",
              color: "#C4866A",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            {topic}
          </div>
        </div>

        <div
          style={{
            fontSize: title.length > 60 ? "52px" : "64px",
            fontWeight: 700,
            color: "#F5F3EF",
            lineHeight: 1.1,
            display: "flex",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              color: "#F5F3EF",
              opacity: 0.6,
            }}
          >
            tathamtech.com/blog
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#F5F3EF",
              opacity: 0.6,
            }}
          >
            By Jessica Tatham
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
