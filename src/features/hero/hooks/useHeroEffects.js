import useScrollProgress from "@/core/scroll/useScrollProgress";
import useDevice from "@/core/device/useDevice";
import useHeroMotion from "./useHeroMotion";

export default function useHeroEffects() {
  const { scrollY } = useScrollProgress();
  const { isMobile } = useDevice();
  const { mouse } = useHeroMotion(!isMobile);

  return {
    mouse,
    isMobile,
    hideScroll: scrollY > 50,
  };
}
