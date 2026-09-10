"use client";

import { useEffect, useState } from "react";

export default function useHeroMotion(enabled = true) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;

    let frame = null;
    let nextPosition = { x: 0, y: 0 };

    const handleMove = (event) => {
      const { innerWidth, innerHeight } = window;

      nextPosition = {
        x: (event.clientX / innerWidth - 0.5) * 2,
        y: (event.clientY / innerHeight - 0.5) * 2,
      };

      if (frame !== null) return;

      frame = window.requestAnimationFrame(() => {
        setMouse(nextPosition);
        frame = null;
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);

      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [enabled]);

  return { mouse };
}
