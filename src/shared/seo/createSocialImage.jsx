import { ImageResponse } from "next/og";
import {
  getSiteSettings,
  getSocialImageContent,
} from "@/content/repository";

const site = getSiteSettings();
const socialImage = getSocialImageContent();

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageAlt = socialImage.alt;

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #050508 0%, #0f172a 58%, #082f49 100%)",
          color: "#ffffff",
          padding: "72px 84px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 5,
            color: "#67e8f9",
          }}
        >
          {socialImage.eyebrow}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 980,
              fontSize: 68,
              lineHeight: 1.08,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            {socialImage.title}
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: 940,
              fontSize: 28,
              lineHeight: 1.45,
              color: "#cbd5e1",
            }}
          >
            {socialImage.description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(103, 232, 249, 0.28)",
            paddingTop: 24,
            fontSize: 22,
            color: "#94a3b8",
          }}
        >
          <span>{site.siteUrl.replace("https://", "")}</span>
          <span>{socialImage.footerLabel}</span>
        </div>
      </div>
    ),
    socialImageSize
  );
}
