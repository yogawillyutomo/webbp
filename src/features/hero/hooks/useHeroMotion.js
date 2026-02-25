"use client";
import { useEffect, useRef } from "react";

export default function useHeroMotion() {
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const time = useRef(0);

  useEffect(() => {
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window;
      target.current.x = (e.clientX / innerWidth - 0.5) * 2;
      target.current.y = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMove);

    let frame;
    const animate = () => {
      // smooth lerp
      mouse.current.x += (target.current.x - mouse.current.x) * 0.05;
      mouse.current.y += (target.current.y - mouse.current.y) * 0.05;
      time.current += 0.003;

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return { mouse, time };
}