"use client";
import { useEffect, useState } from "react";

export default function useDevice() {
  const getInitial = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 1024px)").matches;
  };

  const [isMobile, setIsMobile] = useState(getInitial);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1024px)");

    const handler = (e) => setIsMobile(e.matches);

    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  return { isMobile };
}