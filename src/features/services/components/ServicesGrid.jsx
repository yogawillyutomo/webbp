import ServiceCard from "@/shared/ui/ServiceCard";
import { servicesData } from "../services.data";
import RevealSection from "@/shared/ui/RevealSection";
import RevealStagger from "@/shared/ui/RevealStagger";

export default function ServicesGrid({ activeIndex, onToggle }) {
    return (
        <RevealStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">

            {servicesData.map((service, index) => (
                <RevealSection
                    key={index}
                    direction="up"
                >
                    <ServiceCard
                        {...service}
                        active={activeIndex === index}
                        onClick={() => onToggle(index)}
                    />
                </RevealSection>
            ))}

        </RevealStagger>
    );
}