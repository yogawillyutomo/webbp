import "@fontsource-variable/orbitron";
import "@fontsource/rajdhani/300.css";
import "@fontsource/rajdhani/400.css";
import "@fontsource/rajdhani/500.css";
import "@fontsource/rajdhani/600.css";
import "@fontsource/rajdhani/700.css";
import "./globals.css";
import MotionProvider from "@/shared/providers/MotionProvider";
import { SITE } from "@/config/site";

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
    icon: "/ico.png",
    shortcut: "/ico.png",
    apple: "/ico.png",
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
        className="font-rajdhani"
        style={{
          "--font-orbitron": "'Orbitron Variable', 'Orbitron', sans-serif",
          "--font-rajdhani": "'Rajdhani', sans-serif",
        }}
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
