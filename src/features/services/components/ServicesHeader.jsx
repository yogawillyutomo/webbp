import RevealSection from "@/shared/ui/RevealSection";
import CyberBadge from "./CyberBadge";

export default function ServicesHeader() {
    return (
        <RevealSection direction="up" duration={0.9}>
            <div className="text-center mb-20 space-y-6">
                <h2
                    className="
                        font-orbitron
                        text-4xl lg:text-5xl
                        font-bold
                        leading-[1.2]
                        pb-2
                        bg-[linear-gradient(120deg,#3b82f6,#06b6d4,#3b82f6)]
                        bg-clip-text text-transparent animate-gradient
                    "
                >
                    Engineering untuk Sistem Operasional
                </h2>

                <p className="text-lg muted-text max-w-3xl mx-auto">
                    Kami fokus pada sistem yang punya ownership, boundary, dan evidence
                    yang jelas—bukan sekadar tampilan. Kapabilitas di bawah ini
                    tercermin pada produk yang sedang dibangun Bakaran Project.
                </p>

                <div className="flex flex-wrap justify-center gap-8 mt-12">
                    {[
                        "Source-of-Truth Driven",
                        "Security Boundaries",
                        "Evidence-Based Delivery",
                    ].map((item, index) => (
                        <RevealSection
                            key={item}
                            delay={index * 0.12}
                            duration={0.7}
                            direction="up"
                        >
                            <CyberBadge>{item}</CyberBadge>
                        </RevealSection>
                    ))}
                </div>
            </div>
        </RevealSection>
    );
}
