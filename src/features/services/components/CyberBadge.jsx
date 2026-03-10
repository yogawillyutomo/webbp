"use client";

import { motion } from "framer-motion";

export default function CyberBadge({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
                scale: 1.07,
                y: -2
            }}
            transition={{
                duration: 0.25,
                ease: "easeOut"
            }}
            className="
        cyber-badge
        relative px-6 py-3
        rounded-full
        text-sm font-semibold tracking-[0.08em]
        cursor-default
        overflow-hidden
        backdrop-blur-md
      "
        >
            {/* Glow Pulse */}
            <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                animate={{
                    opacity: [0.2, 0.45, 0.2]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    background:
                        "radial-gradient(circle at center, rgba(59,130,246,0.25), transparent 70%)"
                }}
            />

            {/* Scan Layer */}
            <motion.div
                className="scan-layer absolute inset-0 pointer-events-none"
                animate={{
                    opacity: [0, 0.4, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Neon Line */}
            <div className="neon-line absolute top-0 left-0 w-full h-[1px]" />

            {/* Text */}
            <span className="relative z-10">
                {children}
            </span>

        </motion.div>
    );
}