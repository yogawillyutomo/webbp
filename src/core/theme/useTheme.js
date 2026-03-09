"use client";
import { useEffect, useState } from "react";

export default function useTheme() {
  const getInitialTheme = () => {
    if (typeof window === "undefined") {
      return "dark"; // default saat SSR
    }

    return localStorage.getItem("theme") ?? "dark";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    // CSS system Anda
    root.setAttribute("data-theme", theme);

    // Tailwind system
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // simpan theme
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}