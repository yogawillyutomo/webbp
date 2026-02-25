"use client";
import { useEffect, useRef, useState } from "react";

export default function RevealSection({
  children,
  className = "",
  repeat = false,
  delay = 0,
  duration = 800,
  threshold = 0.2,
  direction = "up", // up | none
  subtle = true,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (repeat) {
          setVisible(entry.isIntersecting);
        } else {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [repeat, threshold]);

  const translate =
    direction === "up" ? "translate-y-8" : "translate-y-0";

  const subtleScale = subtle ? "scale-[0.98]" : "";

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transition-[opacity,transform] ease-[cubic-bezier(.16,1,.3,1)]
        will-change-[opacity,transform]
        ${visible
          ? "opacity-100 translate-y-0 scale-100"
          : `opacity-0 ${translate} ${subtleScale}`}
        ${className}
      `}
    >
      {children}
    </div>
  );
}