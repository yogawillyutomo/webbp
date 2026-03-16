"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

import { NAV_LINKS } from "@/constants/navigation";
import useScrollProgress from "@/core/scroll/useScrollProgress";
import useTheme from "@/core/theme/useTheme";
import useActiveSection from "@/core/scroll/useActiveSection";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { progress, logoScale, padding, blur, shadowOpacity } =
    useScrollProgress();

  // ids untuk scroll spy
  const sectionIds = useMemo(() => {
    return NAV_LINKS.map((link) => link.href);
  }, []);

  const active = useActiveSection(sectionIds) || "#home";

  // lock body scroll when mobile menu open
  useEffect(() => {
    if (!open) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <>
      <nav
        className="fixed left-0 right-0 z-50 border-b border-blue-500/20 transition-transform duration-500"
        style={{
          backdropFilter: `blur(${Math.min(blur, 20)}px)`,
          padding: `${padding}px 0`,
          boxShadow: `0 8px 30px rgba(0,0,0,${shadowOpacity})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* LOGO */}
          <h1
            className="flex items-center gap-2 font-orbitron text-xl font-bold"
            style={{
              transform: `scale(${logoScale})`,
              transformOrigin: "left center",
            }}
          >
            <Image
              src="/ico.svg"
              alt="logo"
              width={26}
              height={26}
              priority
              style={{ transform: `rotate(${progress * -2}deg)` }}
            />

            <span className="tracking-wide bg-[linear-gradient(120deg,#3b82f6,#06b6d4,#3b82f6)] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
              Bakaran Project
            </span>
          </h1>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6">

            {/* DESKTOP NAV */}
            <div className="hidden md:flex gap-8 items-center">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.href;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`nav-link transition ${
                      isActive ? "text-blue-400" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* THEME TOGGLE */}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            {/* HAMBURGER */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setOpen((prev) => !prev)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;

            return (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link transition ${
                  isActive ? "text-blue-400" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}