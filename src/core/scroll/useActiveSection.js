"use client";
import { useEffect, useState } from "react";

export default function useActiveSection(ids = []) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers = [];

    ids.forEach((id) => {
      const el = document.getElementById(id.replace("#", ""));
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}