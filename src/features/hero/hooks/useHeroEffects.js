import useScrollProgress from "@/core/scroll/useScrollProgress";
import useDevice from "@/core/device/useDevice";
import useHeroMotion from "./useHeroMotion";

export default function useHeroEffects() {
  const {scrollY} = useScrollProgress();
  const { isMobile } = useDevice();
  const { mouse, time } = useHeroMotion();

  const hideScroll = scrollY > 50;

  return {
    scrollY,
    mouse,
    time,
    isMobile,
    hideScroll
  };
}