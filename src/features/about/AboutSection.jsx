import SectionDivider from "@/shared/ui/SectionDivider";

const principles = [
  {
    title: "Product-led",
    description:
      "Bakaran Project membangun produk yang dapat berkembang bertahap, bukan sekadar menyelesaikan satu halaman atau satu deployment.",
  },
  {
    title: "Domain ownership",
    description:
      "Setiap sistem mempertahankan ownership domain, authorization, dan source of truth yang jelas agar integrasi tidak mengaburkan tanggung jawab data.",
  },
  {
    title: "Evidence before claims",
    description:
      "Status produk, performa, dan kesiapan operasional ditulis berdasarkan evidence engineering yang tersedia—bukan klaim pemasaran yang belum terbukti.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_50%_10%,rgba(59,130,246,0.12),transparent_45%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-start">
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-500">
              About Bakaran Project
            </div>

            <h2 className="font-orbitron text-4xl lg:text-5xl font-bold leading-[1.2] bg-[linear-gradient(120deg,#3b82f6,#06b6d4,#3b82f6)] bg-clip-text text-transparent animate-gradient">
              Product Engineering yang Berangkat dari Masalah Operasional
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[var(--muted-text)]">
              Bakaran Project adalah tim product engineering yang mengembangkan
              sistem digital dari kebutuhan operasional nyata. Fokus saat ini
              mencakup ekosistem pendidikan, platform dan integrasi data, serta
              smart mobility dan edge systems.
            </p>

            <p className="mt-4 leading-relaxed text-[var(--muted-text)]">
              Website ini hanya menampilkan produk dan kapabilitas yang memiliki
              evidence engineering yang dapat ditelusuri. Kematangan setiap produk
              dapat berbeda, sehingga status development, pre-production, maupun
              prototype ditampilkan secara eksplisit.
            </p>
          </div>

          <div className="grid gap-5">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 backdrop-blur-xl"
              >
                <div className="flex items-start gap-5">
                  <div className="font-orbitron text-sm text-cyan-400 pt-1">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="font-orbitron text-xl font-bold text-[var(--text)]">
                      {principle.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-[var(--muted-text)]">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <SectionDivider />
    </section>
  );
}
