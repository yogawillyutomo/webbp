import { useReducedMotion } from "framer-motion";

import useScrollProgress from "@/core/scroll/useScrollProgress";
import useDevice from "@/core/device/useDevice";
import useHeroMotion from "./useHeroMotion";

export default function useHeroEffects() {
  const { scrollY } = useScrollProgress();
  const { isMobile } = useDevice();
  const shouldReduceMotion = useReducedMotion();
  const { mouse } = useHeroMotion(!isMobile && !shouldReduceMotion);

  return {
    mouse,
    isMobile,
    hideScroll: scrollY > 50,
  };
}
