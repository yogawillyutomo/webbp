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
        <p className="font-orbitron text-sm font-semibold tracking-[0.35em] text-cyan-500">
          404
        </p>

        <h1 className="mt-5 font-orbitron text-4xl font-bold md:text-5xl">
          Halaman tidak ditemukan
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
          Alamat yang Anda buka tidak tersedia atau sudah berubah. Kembali ke
          beranda untuk melihat solusi, produk, dan informasi Bakaran Project.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/70 hover:bg-cyan-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:text-cyan-300"
        >
          Kembali ke beranda
        </Link>
      </section>
    </main>
  );
}
