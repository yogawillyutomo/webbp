"use client";

import HeroView from "./HeroView";
import useHeroEffects from "./hooks/useHeroEffects";

export default function HeroSection({ content }) {
  const heroProps = useHeroEffects();
  return <HeroView {...heroProps} content={content} />;
}
