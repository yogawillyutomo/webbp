"use client";

import { useId, useRef } from "react";
import { motion } from "framer-motion";

export default function ServiceCard({
  icon,
  title,
  subtitle,
  shortDesc,
  fullDesc,
  active,
  onClick,
}) {
  const cardRef = useRef(null);
  const detailId = useId();

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleKeyDown = (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    onClick();
  };

  return (
    <motion.div
      ref={cardRef}
      role="button"
      tabIndex={0}
      aria-expanded={active}
      aria-controls={detailId}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02, y: -6 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={`
        relative isolate flex h-full min-h-[21rem] flex-col p-8 rounded-2xl cursor-pointer
        border overflow-hidden backdrop-blur-xl
        bg-[var(--card-bg)]
        group will-change-transform
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400
        focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
        ${active
          ? "border-transparent"
          : "border-[var(--card-border)]"}
      `}
    >

      {active && (
        <motion.div
          layoutId="activeBorder"
          className="absolute inset-0 rounded-2xl pointer-events-none"
        >
          <div className="
            absolute inset-0 rounded-2xl
            bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500
            opacity-20 dark:opacity-10 blur-[1px]
          " />
        </motion.div>
      )}

      {active && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          <div className="scan-line absolute -top-full left-0 w-full h-[200%]" />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
          className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-3xl"
          style={{
            left: "var(--mouse-x)",
            top: "var(--mouse-y)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      <div className="relative z-20 flex h-full flex-1 flex-col gap-6">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ duration: 0.24 }}
          className="
            w-16 h-16 shrink-0 rounded-xl
            bg-gradient-to-br from-blue-600 to-cyan-500
            flex items-center justify-center
            shadow-lg shadow-blue-500/20
          "
        >
          {icon}
        </motion.div>

        <div className="flex flex-1 flex-col">
          <h3
            className={`
              min-h-[3.25rem] font-orbitron text-xl mb-1
              text-blue-600 dark:text-blue-400
              transition-all duration-300
              group-hover:text-blue-500
              ${active ? "drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" : ""}
            `}
          >
            {title}
          </h3>

          <div
            aria-hidden="true"
            className={`
              min-h-6 text-sm mb-3 transition-colors duration-300
              ${active
                ? "text-cyan-600 dark:text-cyan-400 font-semibold"
                : "text-cyan-600 dark:text-[var(--brand-color)]"}
            `}
          >
            {subtitle}
          </div>

          <p className="min-h-[2.75rem] text-sm text-[var(--muted-text)]">
            {shortDesc}
          </p>

          <motion.div
            id={detailId}
            aria-hidden={!active}
            initial={false}
            animate={{
              height: active ? "auto" : 0,
              opacity: active ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted-text)]">
              {fullDesc}
            </p>
          </motion.div>

          <div
            className={`
              mt-auto pt-4 text-sm font-semibold tracking-[0.08em]
              transition-all duration-300
              ${active
                ? "text-cyan-300 drop-shadow-[0_0_6px_rgba(6,182,212,0.6)]"
                : "text-cyan-600 dark:text-[var(--brand-color)] group-hover:text-blue-500"}
            `}
          >
            {active ? "Tutup Detail ↑" : "Lihat Detail ↓"}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
