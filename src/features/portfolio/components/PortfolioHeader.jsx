export default function PortfolioHeader({ content }) {
  return (
    <div className="mb-20 text-center">
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-500">
        {content.eyebrow}
      </div>

      <h2
        className="
          font-orbitron
          text-4xl
          font-bold
          lg:text-5xl
          bg-[linear-gradient(120deg,#3b82f6,#06b6d4,#3b82f6)]
          bg-clip-text
          text-transparent
          animate-gradient
        "
      >
        {content.title}
      </h2>

      <p
        className="
          mx-auto
          mt-6
          max-w-3xl
          text-lg
          leading-relaxed
          text-[var(--muted-text)]
        "
      >
        {content.description}
      </p>
    </div>
  );
}
