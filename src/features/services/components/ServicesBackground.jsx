export default function ServicesBackground() {
    return (
        <>
            <div className="absolute inset-0 opacity-[0.018] pointer-events-none
        bg-[radial-gradient(circle_at_1px_1px,#3b82f6_1px,transparent_0)]
        [background-size:42px_42px]" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[900px] h-[900px] rounded-full
        bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent
        blur-3xl opacity-70 pointer-events-none" />

            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="w-full h-full
          bg-[linear-gradient(to_right,transparent_96%,rgba(59,130,246,0.12)_100%)]
          [background-size:33%_100%]" />
            </div>
        </>
    );
}