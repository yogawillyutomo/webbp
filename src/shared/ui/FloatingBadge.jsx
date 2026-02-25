export default function FloatingBadge({ title, subtitle, icon, className }) {
    return (
        <div
            className={`p-4 rounded-xl backdrop-blur-xl 
            bg-(--badge-bg) 
            border border-(--badge-border) 
            transition-all duration-300 
            hover:scale-105 hover:shadow-lg
            ${className}`}
                >
            <div className="flex items-center gap-3">

                {/* ICON BOX */}
                <div className="w-10 h-10 rounded-lg flex items-center justify-center
                        bg-linear-to-br from-blue-500 to-cyan-500
                        text-white">
                    {icon}
                </div>

                {/* TEXT */}
                <div>
                    <div className="text-sm font-semibold text-[var(--text)]">
                        {title}
                    </div>

                    <div className="text-xs text-(--muted-text)">
                        {subtitle}
                    </div>
                </div>

            </div>
        </div>
    );
}