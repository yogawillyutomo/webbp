import ServiceCard from "@/shared/ui/ServiceCard";
import { servicesData } from "../services.data";
import RevealSection from "@/shared/ui/RevealSection";
import RevealStagger from "@/shared/ui/RevealStagger";

export default function ServicesGrid({ activeIndex, onToggle }) {
    return (
        <RevealStagger className="grid items-start gap-10 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, index) => (
                <RevealSection
                    key={service.title}
                    direction="up"
                    className="w-full"
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
