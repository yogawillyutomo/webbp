import Link from "next/link";

export const metadata = {
  title: "Halaman Tidak Ditemukan",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex min-h-screen items-center justify-center px-6 py-20"
    >
      <section className="w-full max-w-2xl text-center">
        <p className="font-orbitron text-sm font-semibold tracking-[0.28em] text-cyan-500">
          404 · Halaman tidak ditemukan
        </p>

        <h1 className="mt-5 font-orbitron text-4xl font-bold md:text-5xl">
          Apakah Anda tersesat?
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
          Sepertinya halaman yang Anda cari tidak ada, sudah berpindah, atau
          alamatnya kurang tepat. Anda bisa kembali ke beranda atau langsung
          melihat produk Bakaran Project.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-w-48 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/70 hover:bg-cyan-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:text-cyan-300"
          >
            Kembali ke beranda
          </Link>

          <Link
            href="/#portfolio"
            className="inline-flex min-w-48 items-center justify-center rounded-full border border-blue-500/30 px-6 py-3 font-semibold text-[var(--text)] transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/60 hover:bg-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Lihat produk
          </Link>
        </div>
      </section>
    </main>
  );
}
