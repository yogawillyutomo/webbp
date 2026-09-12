import ServiceCard from "@/shared/ui/ServiceCard";
import RevealSection from "@/shared/ui/RevealSection";
import RevealStagger from "@/shared/ui/RevealStagger";
import { renderServiceIcon } from "../serviceIconRegistry";

export default function ServicesGrid({ services, activeIndex, onToggle }) {
  return (
    <RevealStagger className="grid items-start gap-10 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <RevealSection
          key={service.slug}
          direction="up"
          className="w-full"
        >
          <ServiceCard
            icon={renderServiceIcon(service.iconKey)}
            title={service.title}
            subtitle={service.subtitle}
            summary={service.summary}
            detail={service.detail}
            active={activeIndex === index}
            onClick={() => onToggle(index)}
          />
        </RevealSection>
      ))}
    </RevealStagger>
  );
}
