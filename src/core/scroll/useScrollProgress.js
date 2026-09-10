"use client";

import { useSyncExternalStore } from "react";

let scrollY = 0;
let frame = null;
let listening = false;
const listeners = new Set();

const emit = () => {
  listeners.forEach((listener) => listener());
};

const handleScroll = () => {
  if (frame !== null) return;

  frame = window.requestAnimationFrame(() => {
    frame = null;

    const nextScrollY = window.scrollY;

    if (nextScrollY === scrollY) return;

    scrollY = nextScrollY;
    emit();
  });
};

const startListening = () => {
  if (listening) return;

  listening = true;
  scrollY = window.scrollY;
  window.addEventListener("scroll", handleScroll, { passive: true });
};

const stopListening = () => {
  if (!listening) return;

  listening = false;
  window.removeEventListener("scroll", handleScroll);

  if (frame !== null) {
    window.cancelAnimationFrame(frame);
    frame = null;
  }
};

const subscribe = (listener) => {
  listeners.add(listener);
  startListening();

  return () => {
    listeners.delete(listener);

    if (listeners.size === 0) {
      stopListening();
    }
  };
};

const getSnapshot = () => scrollY;
const getServerSnapshot = () => 0;

export default function useScrollProgress(maxScroll = 80) {
  const currentScrollY = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const progress = Math.min(currentScrollY / maxScroll, 1);

  return {
    scrollY: currentScrollY,
    progress,
    logoScale: 1 - progress * 0.08,
    padding: 18 - progress * 6,
    blur: 18 + progress * 10,
    shadowOpacity: 0.05 + progress * 0.15,
  };
}
