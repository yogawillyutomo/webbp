"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

import { getNavigation, getSiteSettings } from "@/content/repository";
import useScrollProgress from "@/core/scroll/useScrollProgress";
import useTheme from "@/core/theme/useTheme";
import useActiveSection from "@/core/scroll/useActiveSection";

import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = getNavigation();
const site = getSiteSettings();

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const { theme, toggleTheme } = useTheme();
  const { progress, logoScale, padding, blur, shadowOpacity } =
    useScrollProgress();

  const sectionIds = useMemo(() => {
    return NAV_LINKS.map((link) => link.href);
  }, []);

  const active = useActiveSection(sectionIds) || "#home";

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const getFocusableItems = () => {
      if (!mobileMenuRef.current) return [];

      return Array.from(
        mobileMenuRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
    };

    const focusFrame = window.requestAnimationFrame(() => {
      getFocusableItems()[0]?.focus();
    });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);

        window.requestAnimationFrame(() => {
          menuButtonRef.current?.focus();
        });

        return;
      }

      if (event.key !== "Tab") return;

      const focusableItems = getFocusableItems();
      if (focusableItems.length === 0) return;

      const first = focusableItems[0];
      const last = focusableItems[focusableItems.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  const closeMobileMenu = () => {
    setOpen(false);

    window.requestAnimationFrame(() => {
      menuButtonRef.current?.focus();
    });
  };

  return (
    <>
      <nav
        aria-label="Navigasi utama"
        className="fixed left-0 right-0 z-50 border-b border-blue-500/20 transition-transform duration-500"
        style={{
          backdropFilter: `blur(${Math.min(blur, 20)}px)`,
          padding: `${padding}px 0`,
          boxShadow: `0 8px 30px rgba(0,0,0,${shadowOpacity})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a
            href="#home"
            aria-label={`${site.siteName} — kembali ke beranda`}
            className="flex items-center gap-2 font-orbitron text-xl font-bold rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            style={{
              transform: `scale(${logoScale})`,
              transformOrigin: "left center",
            }}
          >
            <Image
              src={site.brandAssets.logo}
              alt=""
              width={26}
              height={26}
              priority
              style={{ transform: `rotate(${progress * -2}deg)` }}
            />

            <span className="tracking-wide bg-[linear-gradient(120deg,#3b82f6,#06b6d4,#3b82f6)] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
              {site.siteName}
            </span>
          </a>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 items-center">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.href;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`nav-link rounded-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      isActive ? "text-blue-400" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <button
              ref={menuButtonRef}
              type="button"
              className="md:hidden text-2xl rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              <span aria-hidden="true">{open ? "×" : "☰"}</span>
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div
          ref={mobileMenuRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
          className="fixed inset-0 z-40 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`nav-link rounded-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isActive ? "text-blue-400" : ""
                  }`}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              );
            })}

            <button
              type="button"
              onClick={closeMobileMenu}
              className="mt-4 rounded-lg border border-blue-500/40 px-5 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Tutup menu
            </button>
          </div>
        </div>
      )}
    </>
  );
}
