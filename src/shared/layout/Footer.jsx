"use client";
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  WhatsAppIcon,
  WhatsAppIconWhite,
  XIcon
} from "@/shared/icons/TechIcons";


import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-[var(--card-border)] relative overflow-hidden">

      {/* TOP GRADIENT LINE */}
      <div className="absolute left-0 right-0 top-0 h-px 
        bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* BRAND SECTION */}
          <div className="md:col-span-2">

            <div className="flex items-center gap-3 mb-6">

              {/* LOGO */}
              <Image
                src="/ico.svg"
                alt="logo"
                width={26}
                height={26}
                priority
              />

              <span className="font-orbitron text-xl font-bold text-[var(--text-primary)]">
                Bakaran Project
              </span>
            </div>

            <p className="text-[var(--muted-text)] mb-6 max-w-md leading-relaxed">
              Transforming ideas into powerful digital experiences.
              Building the future of technology, one innovation at a time.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4">
              <SocialLink href="https://github.com">
                <GitHubIcon className="w-5 h-5 text-blue-500 dark:text-white group-hover:text-blue-400 transition-colors" />
              </SocialLink>
              <SocialLink href="https://twitter.com">
                <XIcon className="w-5 h-5 text-blue-500 dark:text-white group-hover:text-blue-400 transition-colors" />
              </SocialLink>

              <SocialLink href="https://linkedin.com">
                <LinkedInIcon className="w-5 h-5 text-blue-500 dark:text-white group-hover:text-blue-400 transition-colors" />
              </SocialLink>

              <SocialLink href="https://instagram.com">
                <InstagramIcon className="w-5 h-5 text-blue-500 dark:text-white group-hover:text-blue-400 transition-colors" />
              </SocialLink>

              <SocialLink href="https://wa.me/6281234567890">
                <WhatsAppIcon className="w-5 h-5 text-blue-500 dark:text-white group-hover:text-green-400 transition-colors" />
              </SocialLink>
            </div>

          </div>

          {/* QUICK LINKS */}
          <FooterColumn
            title="Quick Links"
            links={[
              { label: "Home", href: "#home" },
              { label: "Services", href: "#services" },
              { label: "Portfolio", href: "#portfolio" },
              { label: "Contact", href: "#contact" },
            ]}
          />

          {/* SERVICES */}
          <FooterColumn
            title="Services"
            links={[
              { label: "Web Development", href: "#" },
              { label: "Mobile Apps", href: "#" },
              { label: "AI Integration", href: "#" },
              { label: "Cloud Solutions", href: "#" },
              { label: "UI/UX Design", href: "#" },
            ]}
          />

        </div>

        {/* BOTTOM */}
        {/* DIVIDER */}
        <div className="relative my-12">

          <div className="h-px w-full bg-gradient-to-r 
    from-transparent 
    via-blue-500/25 
    to-transparent"
          />

          <div className="absolute left-1/2 -translate-x-1/2
    w-32 h-6
    bg-blue-500/10
    blur-2xl
    rounded-full"
          />

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[var(--muted-text)] text-sm">
            © {new Date().getFullYear()} Bakaran Project. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="text-[var(--muted-text)] hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[var(--muted-text)] hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}


function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-orbitron font-bold mb-6 text-[var(--text-primary)]">
        {title}
      </h4>

      <ul className="space-y-3">
        {links.map((link, i) => (
          <li key={i}>
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

function SocialLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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