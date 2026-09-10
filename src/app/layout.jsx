import "./globals.css";
import { Orbitron, Rajdhani } from "next/font/google";
import MotionProvider from "@/shared/providers/MotionProvider";
import { SITE } from "@/config/site";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  creator: SITE.name,
  publisher: SITE.name,
  icons: {
    icon: "/ico.svg",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang={SITE.language}
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`${orbitron.variable} ${rajdhani.variable} font-rajdhani`}
      >
        {/* Inline script untuk mencegah theme flicker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem("theme");
                  const validSavedTheme =
                    savedTheme === "dark" || savedTheme === "light"
                      ? savedTheme
                      : null;
                  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light";
                  document.documentElement.setAttribute(
                    "data-theme",
                    validSavedTheme || systemTheme
                  );
                } catch(e) {}
              })();
            `,
          }}
        />

        <a
          href="#main-content"
          className="skip-link"
        >
          Lewati ke konten utama
        </a>

        <MotionProvider>
          <div className="hex-pattern min-h-screen overflow-x-hidden">
            {children}
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
