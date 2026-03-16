"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function RevealSection({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  direction = "up",
  zoom = false,
  fade = true,
  distance = 30,
  repeat = false,
  disableInitial = false
}) {

  const variants = useMemo(() => {

    let x = 0;
    let y = 0;

    if (direction === "up") y = distance;
    if (direction === "down") y = -distance;
    if (direction === "left") x = distance;
    if (direction === "right") x = -distance;

    return {
      hidden: {
        opacity: fade ? 0 : 1,
        x,
        y,
        scale: zoom ? 0.94 : 1
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      }
    };

  }, [direction, distance, zoom, fade]);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial={disableInitial ? false : "hidden"}
      whileInView="visible"
      viewport={{
        once: !repeat,
        margin: "-80px"
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.div>
  );
}