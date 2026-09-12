import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/shared/layout/Navbar";
import Footer from "@/shared/layout/Footer";
import OrganizationJsonLd from "@/shared/seo/OrganizationJsonLd";
import { SOCIAL_IMAGE } from "@/shared/seo/socialMetadata";
import {
  getFooterContent,
  getNavigation,
  getProductBySlug,
  getProducts,
  getSiteSettings,
  getSolutionDomains,
} from "@/content/repository";

const site = getSiteSettings();

const STATUS_STYLES = {
  "Pre-production": "border-amber-400/30 bg-amber-400/10 text-amber-300",
  Prototype: "border-violet-400/30 bg-violet-400/10 text-violet-300",
  "In Development": "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
};

export function generateStaticParams() {
  return getProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return {};

  const canonical = `/products/${product.slug}`;
  const title = `${product.title} — ${product.status}`;

  return {
    title,
    description: product.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | ${site.siteName}`,
      description: product.description,
      url: canonical,
      siteName: site.siteName,
      locale: site.locale,
      type: "website",
      images: [SOCIAL_IMAGE.openGraph],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.siteName}`,
      description: product.description,
      images: [SOCIAL_IMAGE.twitter],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const navigation = getNavigation();
  const services = getSolutionDomains();
  const footer = getFooterContent();
  const relatedSolutions = services.filter((solution) =>
    product.relatedSolutionSlugs.includes(solution.slug)
  );
  const statusStyle =
    STATUS_STYLES[product.status] ??
    "border-slate-400/30 bg-slate-400/10 text-slate-300";

  return (
    <>
      <OrganizationJsonLd />
      <Navbar site={site} navigation={navigation} rootHref="/" />

      <main id="main-content" tabIndex={-1} className="pt-32">
        <section className="relative overflow-hidden pb-24 pt-10">
          <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_70%_0%,rgba(6,182,212,0.16),transparent_45%)]" />

          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <nav aria-label="Breadcrumb" className="mb-10 text-sm text-[var(--muted-text)]">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-cyan-400">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/#portfolio" className="hover:text-cyan-400">
                    Products
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-[var(--text-primary)]">
                  {product.title}
                </li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-500">
                {product.code}
              </span>
              <span
                className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${statusStyle}`}
              >
                {product.status}
              </span>
            </div>

            <h1 className="mt-5 font-orbitron text-4xl font-bold leading-tight md:text-6xl">
              {product.title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--muted-text)]">
              {product.statusDetail}
            </p>

            <div className="mt-10 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-7 md:p-9">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-500">
                {product.primaryCategory}
              </div>
              <p className="mt-4 text-lg leading-relaxed text-[var(--muted-text)]">
                {product.description}
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
              <section
                aria-labelledby="product-evidence-title"
                className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-7 md:p-9"
              >
                <h2
                  id="product-evidence-title"
                  className="font-orbitron text-2xl font-bold"
                >
                  Evidence yang dapat diklaim
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">
                  Ringkasan berikut dibatasi pada evidence engineering yang sudah menjadi bagian dari sumber konten publik WEBBP.
                </p>

                <ul className="mt-7 space-y-5">
                  {product.proof.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 leading-relaxed text-[var(--muted-text)]"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <aside className="space-y-8">
                <section className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-7">
                  <h2 className="font-orbitron text-lg font-bold">Technology</h2>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.technology.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1.5 text-xs text-cyan-700 dark:text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {relatedSolutions.length > 0 && (
                  <section className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-7">
                    <h2 className="font-orbitron text-lg font-bold">
                      Related Solutions
                    </h2>
                    <ul className="mt-5 space-y-3">
                      {relatedSolutions.map((solution) => (
                        <li key={solution.slug}>
                          <Link
                            href="/#solutions"
                            className="text-[var(--muted-text)] transition-colors hover:text-cyan-400"
                          >
                            {solution.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </aside>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/#portfolio"
                className="btn-cyber rounded-lg bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white"
              >
                Kembali ke semua produk
              </Link>
              <Link
                href="/#contact"
                className="btn-cyber rounded-lg border border-blue-500/50 px-6 py-3 font-semibold hover:bg-blue-500/10"
              >
                Diskusikan kebutuhan
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer
        content={footer}
        navigation={navigation}
        services={services}
        site={site}
        rootHref="/"
      />
    </>
  );
}
