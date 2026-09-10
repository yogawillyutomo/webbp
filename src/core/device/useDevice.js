"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(max-width: 1024px)";

const subscribe = (callback) => {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", callback);

  return () => media.removeEventListener("change", callback);
};

const getSnapshot = () => window.matchMedia(QUERY).matches;
const getServerSnapshot = () => false;

export default function useDevice() {
  const isMobile = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return { isMobile };
}
