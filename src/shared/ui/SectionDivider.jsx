export default function SectionDivider() {
  return (
    <>
      <div className="absolute bottom-0 left-0 w-full h-px
        bg-gradient-to-r
        from-transparent
        via-blue-500/40
        to-transparent
        opacity-80"
      />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2
        w-40 h-10 bg-blue-500/20 blur-2xl pointer-events-none"
      />
    </>
  );
}