"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import useMeasure from "react-use-measure";

interface InfiniteSliderProps {
  children: React.ReactNode;
  duration?: number;
  durationOnHover?: number;
  reverse?: boolean;
}

export const InfiniteSlider = ({
  children,
  duration = 25,
  durationOnHover = 100,
  reverse = true,
}: InfiniteSliderProps) => {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (width === 0) return;

    const finalPosition = -width / 2 - 8;

    // Start the animation
    controls.start({
      x: [0, finalPosition],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: isHovered ? durationOnHover : duration,
          ease: "linear",
        },
      },
    });

    return () => {
      controls.stop();
    };
  }, [controls, width, isHovered, duration, durationOnHover]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex gap-4"
        animate={controls}
        ref={ref}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};