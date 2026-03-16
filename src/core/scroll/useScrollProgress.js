"use client";
import { useEffect, useState } from "react";

export default function useScrollProgress(maxScroll = 80) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    let lastY = 0;

    const handleScroll = () => {
      const currentY = window.scrollY;

      // skip jika perubahan sangat kecil
      if (Math.abs(currentY - lastY) < 1) return;

      lastY = currentY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(currentY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const progress = Math.min(scrollY / maxScroll, 1);

  const logoScale = 1 - progress * 0.08;
  const padding = 18 - progress * 6;
  const blur = 18 + progress * 10;
  const shadowOpacity = 0.05 + progress * 0.15;

  return {
    scrollY,
    progress,
    logoScale,
    padding,
    blur,
    shadowOpacity,
  };
}