import { ImageResponse } from "next/og";
import { SITE } from "@/config/site";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageAlt =
  "Bakaran Project — Sistem Digital untuk Operasional Nyata";

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
          BAKARAN PROJECT
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
            Sistem Digital untuk Operasional Nyata
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
            Digitalisasi sekolah, integrasi data, dan mobility systems yang dibangun bertahap dengan evidence engineering yang jelas.
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
          <span>{SITE.url.replace("https://", "")}</span>
          <span>Product Engineering • Education • Mobility</span>
        </div>
      </div>
    ),
    socialImageSize
  );
}
