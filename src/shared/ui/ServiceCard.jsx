"use client";
import { useRef } from "react";

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
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className={`
    relative isolate p-8 rounded-2xl cursor-pointer
    transition-all duration-500
    border overflow-hidden
    backdrop-blur-xl
    bg-[var(--card-bg)]
    group will-change-transform
      ${active
          ? "border-transparent scale-[1.02]"
          : "border-[var(--card-border)] hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] hover:-translate-y-2 transition-[transform,box-shadow,border-color] duration-500"}
      `}
    >

      {/* Animated Border */}
      {active && (
        <div className="absolute inset-0 pointer-events-none rounded-2xl z-0">
          <div className="
          absolute inset-0 rounded-2xl
          bg-gradient-to-r 
        from-blue-500 
        via-cyan-400 
        to-blue-500 
          opacity-20 
          dark:opacity-10
          blur-[1px]
        " />
        </div>
      )}

      {/* Scan Light */}
      {active && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-0">
          <div className="scan-line absolute -top-full left-0 w-full h-[200%]" />
        </div>
      )}

      {/* Spotlight */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
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

        {/* ICON PARALLAX */}
        <div
          className="
            w-16 h-16 rounded-xl
            bg-gradient-to-br from-blue-600 to-cyan-500
            flex items-center justify-center
            shadow-lg shadow-blue-500/20
            transition-transform duration-300
            group-hover:scale-110
          "
        >
          {icon}
        </div>

        <div>
          <h3
            className={`
    font-orbitron text-xl mb-1 transition-all duration-300
    text-blue-600 dark:text-blue-400
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
                ? "text-cyan-600 dark:text-cyan-300 font-semibold"
                : "text-cyan-600 dark:text-[var(--brand-color)]"}
  `}
          >
            {subtitle}
          </div>

          <p
            className="
    text-sm transition-colors duration-300
    text-slate-600 dark:text-blue-300
  "
          >
            {shortDesc}
          </p>
          <div
            className={`overflow-hidden transition-all duration-500
${active ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
`}
          >
            <p
              className="
    text-sm leading-relaxed transition-colors duration-300
    text-slate-600 dark:text-blue-300
  "
            >
              {fullDesc}
            </p>
          </div>

          <div
            className={`
                mt-4 text-sm font-semibold tracking-[0.08em]
                transition-all duration-300
              ${active
                ? "text-cyan-300 drop-shadow-[0_0_6px_rgba(6,182,212,0.6)]"
                : "text-cyan-600 dark:text-[var(--brand-color)] group-hover:text-blue-500 dark:group-hover:text-blue-400"}
             `}
          >
            {active ? "Tutup Detail ↑" : "Lihat Detail ↓"}
          </div>
        </div>
      </div>
    </div>
  );
}