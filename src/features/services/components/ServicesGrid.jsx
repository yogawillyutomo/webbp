import ServiceCard from "@/shared/ui/ServiceCard";
import { servicesData } from "../services.data";
import RevealSection from "@/shared/ui/RevealSection";

export default function ServicesGrid({ activeIndex, onToggle }) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">

            {servicesData.map((service, index) => (
                <RevealSection
                    key={index}
                    delay={index * 80}
                    duration={800}
                    direction="up"
                >
                    <ServiceCard
                        {...service}
                        active={activeIndex === index}
                        onClick={() => onToggle(index)}
                    />
                </RevealSection>
            ))}

        </div>
    );
}