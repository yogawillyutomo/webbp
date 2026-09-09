import Link from "next/link";
import { SITE } from "@/config/site";

export const metadata = {
  title: "Terms of Service",
  description: "Ketentuan penggunaan website Bakaran Project.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-[var(--muted-text)] mb-10">
          Berlaku sejak 10 September 2026.
        </p>

        <div className="space-y-8 text-[var(--muted-text)] leading-relaxed">
          <section>
            <h2 className="font-orbitron text-xl text-[var(--text)] mb-3">
              Ruang lingkup
            </h2>
            <p>
              Halaman ini mengatur penggunaan website publik {SITE.name}.
              Informasi di website ditujukan untuk memperkenalkan layanan,
              kapabilitas, dan karya Bakaran Project.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-xl text-[var(--text)] mb-3">
              Kerja sama dan layanan
            </h2>
            <p>
              Informasi pada website bukan penawaran kontraktual yang mengikat.
              Ruang lingkup pekerjaan, biaya, jadwal, tanggung jawab, dan
              ketentuan proyek ditetapkan melalui proposal, perjanjian, atau
              dokumen kerja sama yang disepakati para pihak.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-xl text-[var(--text)] mb-3">
              Konten dan kekayaan intelektual
            </h2>
            <p>
              Identitas merek, desain, teks, dan materi yang dimiliki Bakaran
              Project tidak boleh digunakan dengan cara yang menyesatkan atau
              menimbulkan kesan adanya afiliasi tanpa izin.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-xl text-[var(--text)] mb-3">
              Tautan eksternal
            </h2>
            <p>
              Website dapat mengarahkan pengguna ke layanan pihak ketiga.
              Bakaran Project tidak mengendalikan isi, ketersediaan, atau
              kebijakan layanan pihak ketiga tersebut.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-xl text-[var(--text)] mb-3">
              Perubahan
            </h2>
            <p>
              Konten website dan ketentuan ini dapat diperbarui agar tetap
              sesuai dengan perkembangan layanan dan operasional.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-xl text-[var(--text)] mb-3">
              Kontak
            </h2>
            <p>
              Pertanyaan mengenai website atau layanan dapat dikirim ke{" "}
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
