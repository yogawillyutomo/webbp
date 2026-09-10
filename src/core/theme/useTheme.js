"use client";

import { useCallback, useSyncExternalStore } from "react";

const THEME_KEY = "theme";
const THEME_EVENT = "bp-theme-change";

const getStoredTheme = () => {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    return stored === "dark" || stored === "light" ? stored : null;
  } catch {
    return null;
  }
};

const getThemeSnapshot = () => {
  if (typeof document === "undefined") return "dark";

  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
};

const getServerThemeSnapshot = () => "dark";

const applyTheme = (theme, { persist = true } = {}) => {
  document.documentElement.setAttribute("data-theme", theme);

  if (persist) {
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Theme still applies for the current page when storage is unavailable.
    }
  }

  window.dispatchEvent(new Event(THEME_EVENT));
};

const subscribe = (callback) => {
  window.addEventListener(THEME_EVENT, callback);

  const media = window.matchMedia("(prefers-color-scheme: dark)");

  const handleSystemThemeChange = (event) => {
    if (getStoredTheme()) return;

    applyTheme(event.matches ? "dark" : "light", { persist: false });
  };

  media.addEventListener("change", handleSystemThemeChange);

  return () => {
    window.removeEventListener(THEME_EVENT, callback);
    media.removeEventListener("change", handleSystemThemeChange);
  };
};

export default function useTheme() {
  const theme = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  const toggleTheme = useCallback(() => {
    applyTheme(theme === "dark" ? "light" : "dark");
  }, [theme]);

  return { theme, toggleTheme };
}
