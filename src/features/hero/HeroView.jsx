import HeroBackground from "./components/HeroBackground";
import HeroContent from "./components/HeroContent";
import HeroVisual from "./components/HeroVisual";
import ScrollIndicator from "./components/ScrollIndicator";
import SectionDivider from "@/shared/ui/SectionDivider";

export default function HeroView(props) {
    const { mouse, time, isMobile, hideScroll } = props;
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col xl:flex-row items-center relative"
        >

            <HeroBackground mouse={mouse} isMobile={isMobile} />

            <div className="max-w-7xl mx-auto px-6 py-6 pt-12 xl:py-10 xl:pt-16 relative z-10">

                <div className="grid xl:grid-cols-2 gap-12 items-center">

                    <HeroContent />

                    <div className="hidden md:flex justify-center">
                        <HeroVisual
                            mouse={mouse}
                            time={time}
                            isMobile={isMobile}
                        />
                    </div>

                </div>

            </div>

            <ScrollIndicator hideScroll={hideScroll} />

            <SectionDivider />

        </section>
    );
}