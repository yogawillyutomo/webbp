import "./globals.css";
import { Orbitron, Rajdhani } from "next/font/google";
import MotionProvider from "@/shared/providers/MotionProvider";

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
  title: {
    default: "Bakaran Project - Solusi Teknologi Terdepan",
    template: "%s | Bakaran Project",
  },
  icons: {
    icon: "/ico.svg",
  },

  description: "Solusi Teknologi Terdepan dalam pengembangan software dan teknologi digital.",
  metadataBase: new URL("https://bakaranproject.com"),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
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