import RevealSection from "@/shared/ui/RevealSection";
import CyberBadge from "./CyberBadge";

export default function ServicesHeader() {
    return (
        <RevealSection direction="up" duration={900}>

            <div className="text-center mb-20 space-y-6">

                <h2 className="
        font-orbitron
        text-4xl lg:text-5xl
        font-bold
        leading-[1.2]
        pb-2
        bg-[linear-gradient(120deg,#3b82f6,#06b6d4,#3b82f6)]
        bg-clip-text text-transparent animate-gradient
        ">
                    Building Intelligent Digital Ecosystems
                </h2>

                <p className="text-lg muted-text max-w-3xl mx-auto">
                    Kami menggabungkan engineering excellence dengan desain modern
                    untuk menciptakan sistem digital yang scalable, secure,
                    dan siap menghadapi masa depan.
                </p>

                <div className="flex flex-wrap justify-center gap-8 mt-12">
                    {[
                        "Agile Development Process",
                        "Enterprise-Grade Security",
                        "Performance & Scalability First",
                    ].map((item, index) => (
                        <RevealSection
                            key={index}
                            delay={index * 120}
                            duration={700}
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