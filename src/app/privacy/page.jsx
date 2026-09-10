import Link from "next/link";
import { SITE } from "@/config/site";
import { SOCIAL_IMAGE } from "@/shared/seo/socialMetadata";

const title = "Privacy Policy";
const description = "Kebijakan privasi website Bakaran Project.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: `${title} | ${SITE.name}`,
    description,
    url: "/privacy",
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
    images: [SOCIAL_IMAGE.openGraph],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${SITE.name}`,
    description,
    images: [SOCIAL_IMAGE.twitter],
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-blue-400 hover:text-cyan-400 transition-colors"
        >
          ← Kembali ke beranda
        </Link>

        <h1 className="font-orbitron text-4xl font-bold mt-10 mb-4">
          Privacy Policy
        </h1>
        <p className="text-[var(--muted-text)] mb-10">
          Berlaku sejak 10 September 2026.
        </p>

        <div className="space-y-8 text-[var(--muted-text)] leading-relaxed">
          <section>
            <h2 className="font-orbitron text-xl text-[var(--text)] mb-3">
              Informasi yang kami terima
            </h2>
            <p>
              Website ini tidak menyediakan akun pengguna atau formulir
              penyimpanan data. Jika Anda menghubungi kami melalui email, kami
              menerima informasi yang Anda kirimkan secara sukarela untuk
              menanggapi pertanyaan atau kebutuhan kerja sama.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-xl text-[var(--text)] mb-3">
              Penggunaan informasi
            </h2>
            <p>
              Informasi yang diterima melalui komunikasi langsung digunakan
              untuk menanggapi permintaan, mendiskusikan layanan, dan mendukung
              hubungan kerja sama. Kami tidak menjual data pribadi kepada
              pengiklan.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-xl text-[var(--text)] mb-3">
              Infrastruktur dan tautan pihak ketiga
            </h2>
            <p>
              Penyedia hosting dan layanan teknis yang mendukung website dapat
              memproses data teknis yang lazim diperlukan untuk keamanan dan
              operasional layanan. Website juga dapat berisi tautan ke layanan
              pihak ketiga yang memiliki kebijakan privasinya sendiri.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-xl text-[var(--text)] mb-3">
              Perubahan kebijakan
            </h2>
            <p>
              Kebijakan ini dapat diperbarui mengikuti perkembangan website,
              layanan, atau kebutuhan operasional Bakaran Project. Versi terbaru
              akan dipublikasikan pada halaman ini.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-xl text-[var(--text)] mb-3">
              Kontak
            </h2>
            <p>
              Pertanyaan mengenai privasi dapat dikirim ke{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-blue-400 hover:text-cyan-400"
              >
                {SITE.email}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
