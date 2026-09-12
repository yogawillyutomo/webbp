import Image from "next/image";
import { GitHubIcon } from "@/shared/icons/TechIcons";

export default function Footer({
  content,
  navigation,
  services,
  site,
  rootHref = "",
}) {
  const github = site.socialLinks.find((item) => item.key === "github") ?? null;
  const resolveHref = (href) => (rootHref ? `${rootHref}${href}` : href);

  return (
    <footer className="py-20 border-t border-[var(--card-border)] relative overflow-hidden">
      <div
        className="absolute left-0 right-0 top-0 h-px
        bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src={site.brandAssets.vectorLogo}
                alt=""
                width={26}
                height={26}
              />

              <span className="font-orbitron text-xl font-bold text-[var(--text-primary)]">
                {site.siteName}
              </span>
            </div>

            <p className="text-[var(--muted-text)] mb-6 max-w-md leading-relaxed">
              {content.description}
            </p>

            <div className="flex gap-4">
              {github && (
                <SocialLink href={github.href} label={github.label}>
                  <GitHubIcon className="w-5 h-5 text-blue-500 dark:text-white group-hover:text-blue-400 transition-colors" />
                </SocialLink>
              )}
            </div>
          </div>

          <FooterColumn
            title={content.navigationTitle}
            links={navigation.map(({ label, href }) => ({
              label,
              href: resolveHref(href),
            }))}
          />

          <FooterColumn
            title={content.solutionsTitle}
            links={services.map(({ title }) => ({
              label: title,
              href: resolveHref("#solutions"),
            }))}
          />
        </div>

        <div className="relative my-12">
          <div
            className="h-px w-full bg-gradient-to-r
            from-transparent via-blue-500/25 to-transparent"
          />

          <div
            className="absolute left-1/2 -translate-x-1/2
            w-32 h-6 bg-blue-500/10 blur-2xl rounded-full"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--muted-text)] text-sm">
            © {new Date().getFullYear()} {site.siteName}. {content.copyrightSuffix}
          </p>

          <div className="flex gap-6 text-sm">
            {content.legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--muted-text)] hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h2 className="font-orbitron font-bold mb-6 text-[var(--text-primary)]">
        {title}
      </h2>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={`${link.label}-${link.href}`}>
            <a
              href={link.href}
              className="text-[var(--muted-text)] hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        group
        w-10 h-10
        bg-[var(--card-bg)]
        hover:bg-blue-500/10
        rounded-lg
        flex items-center justify-center
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      {children}
    </a>
  );
}
