import "./globals.css";
import { Orbitron, Rajdhani } from "next/font/google";

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
                  const theme = savedTheme ? savedTheme : "dark";
                  document.documentElement.setAttribute("data-theme", theme);
                } catch(e) {}
              })();
            `,
          }}
        />

        <div className="hex-pattern min-h-screen overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}