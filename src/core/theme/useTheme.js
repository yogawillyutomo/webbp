"use client";
import { useEffect, useState } from "react";

export default function useTheme() {
  const getInitialTheme = () => {
    if (typeof window === "undefined") {
      return "dark"; // server render default
    }

    return localStorage.getItem("theme") ?? "dark";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // sync ke DOM dan localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}