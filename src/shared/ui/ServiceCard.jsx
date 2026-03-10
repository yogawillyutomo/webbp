"use client";

import { useRef } from "react";
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

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 28;
    const rotateY = (centerX - x) / 28;

    const shadowX = (x - centerX) / 15;
    const shadowY = (y - centerY) / 15;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);

    cardRef.current.style.transform =
      `perspective(1200px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateZ(6px)`;

    cardRef.current.style.boxShadow =
      `${shadowX}px ${shadowY}px 50px rgba(59,130,246,0.25)`;
  };

  const resetTilt = () => {
    cardRef.current.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    cardRef.current.style.boxShadow =
      active
        ? "0 0 60px rgba(59,130,246,0.25)"
        : "none";
  };

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`
        relative isolate p-8 rounded-2xl cursor-pointer
        border overflow-hidden backdrop-blur-xl
        bg-[var(--card-bg)]
        group will-change-transform
        ${active
          ? "border-transparent"
          : "border-[var(--card-border)]"}
      `}
    >

      {/* Animated Border */}
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

      {/* Scan Light */}
      {active && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          <div className="scan-line absolute -top-full left-0 w-full h-[200%]" />
        </div>
      )}

      {/* Spotlight */}
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

      <div className="relative z-20 space-y-6">

        {/* ICON */}
        <motion.div
          whileHover={{ scale: 1.15, rotate: 3 }}
          transition={{ duration: 0.3 }}
          className="
            w-16 h-16 rounded-xl
            bg-gradient-to-br from-blue-600 to-cyan-500
            flex items-center justify-center
            shadow-lg shadow-blue-500/20
          "
        >
          {icon}
        </motion.div>

        <div>
          <h3
            className={`
              font-orbitron text-xl mb-1
              text-blue-600 dark:text-blue-400
              transition-all duration-300
              group-hover:text-blue-500
              ${active ? "drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" : ""}
            `}
          >
            {title}
          </h3>

          <div
            className={`
              text-sm mb-3 transition-colors duration-300
              ${active
                ? "text-cyan-600 dark:text-cyan-400 font-semibold"
                : "text-cyan-600 dark:text-[var(--brand-color)]"}
            `}
          >
            {subtitle}
          </div>

          <p className="text-sm text-muted">
            {shortDesc}
          </p>

          <motion.div
            initial={false}
            animate={{
              height: active ? "auto" : 0,
              opacity: active ? 1 : 0
            }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-sm lleading-relaxed text-muted">
              {fullDesc}
            </p>
          </motion.div>

          <div
            className={`
              mt-4 text-sm font-semibold tracking-[0.08em]
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