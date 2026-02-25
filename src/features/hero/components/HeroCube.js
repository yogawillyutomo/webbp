"use client";
export default function HeroCube({ cubeStyle, mouse, className, onClick }) {

    const x = mouse?.x || 0;
    const y = mouse?.y || 0;

    return (
        <div
            onClick={onClick}
            className={`relative w-80 h-80 animate-float cursor-pointer active:scale-95 transition-transform duration-150  ${className}`}
        >


            <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                style={{
                    ...cubeStyle,
                    transformStyle: "preserve-3d"
                }}
            >
                <defs>
                    <linearGradient id="cubeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.35" />
                        {/* <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#0891b2" stopOpacity="0.35" /> */}
                    </linearGradient>

                    <linearGradient id="cubeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#0e7490" stopOpacity="0.5" />
                        {/* <stop offset="0%" stopColor="#0f172a" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0.5" /> */}
                    </linearGradient>

                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Back face */}
                <polygon
                    points="100,20 170,60 170,140 100,180 30,140 30,60"
                    fill="url(#cubeGrad2)"
                    filter="url(#glow)"
                />

                {/* Right face */}
                <polygon
                    points="100,100 170,60 170,140 100,180"
                    fill="url(#cubeGrad1)"
                    opacity="0.8"
                />

                {/* Left face */}
                <polygon
                    points="100,100 30,60 30,140 100,180"
                    fill="#1e40af"
                    opacity="0.6"
                />

                {/* Top face */}
                <polygon
                    points="100,20 170,60 100,100 30,60"
                    fill="url(#cubeGrad1)"
                />

                {/* Center */}
                {/* <circle
                    cx="100"
                    cy="100"
                    r="24"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="2"
                    opacity="0.6"
                /> */}
                <image
                    href="/ico.png"
                    x="64"
                    y="64"
                    width="78"
                    height="78"
                    opacity="0.98"
                    style={{
                        transform: `rotate(${-x * 2}deg) translateZ(8px)`,
                        transformOrigin: "100px 100px"
                    }}
                    className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                />
            </svg>
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(
                    circle at ${50 + (mouse?.x || 0) * 20}% ${50 + (mouse?.y || 0) * 20}%,
                    rgba(255,255,255,0.1),
                    transparent 60%
                    )`
                }}
            />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="shine-line"></div>
            </div>
        </div>
    );
}