"use client";

import HeroView from "./HeroView";
import useHeroEffects from "./hooks/useHeroEffects";

export default function HeroSection() {
  const heroProps = useHeroEffects();
  return <HeroView {...heroProps} />;
}