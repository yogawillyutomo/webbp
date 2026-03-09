export default function CyberBadge({ children }) {
    return (
        <div className="
      cyber-badge
      relative px-6 py-3
      rounded-full
      text-sm font-semibold tracking-[0.08em]
      transition-all duration-300
      cursor-default
      overflow-hidden
    ">
            <div className="scan-layer absolute inset-0 opacity-0 transition-opacity duration-500" />

            <div className="neon-line absolute top-0 left-0 w-full h-[1px]" />

            <span className="relative z-10">
                {children}
            </span>
        </div>
    );
}