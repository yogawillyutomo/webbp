export default function PortfolioHeader() {

    return (
        <div className="text-center mb-20">

            <h2
                className="
        font-orbitron
        text-4xl
        lg:text-5xl
        font-bold

        bg-[linear-gradient(120deg,#3b82f6,#06b6d4,#3b82f6)]
        bg-clip-text
        text-transparent

        animate-gradient
        "
            >
                Featured Projects
            </h2>

            <p
                className="
        text-lg
        text-[var(--muted-text)]
        mt-6
        max-w-2xl
        mx-auto
        "
            >
                Discover our latest work and see how we bring ideas to life.
            </p>

        </div>
    );

}