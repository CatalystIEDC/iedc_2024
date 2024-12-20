'use client'

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}



function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 100,
    stiffness: 200
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });
  const x = useTransform(baseX, (v) => `${wrap(20, -35, v)}%`);

  // const x = useTransform(baseX, (v) => v, {
  //   clamp: [-window.innerWidth, window.innerWidth]
  // });
  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="parallax w-screen text-xl md:text-[64px] text-[#010314] tracking-[-1rem] ">
      <motion.div className="scroller " style={{ x }}>
        <span >{children} </span>
        <span >{children} </span>
        <span >{children} </span>
        <span >{children} </span>
        <span >{children} </span>
        <span >{children} </span>
        <span >{children} </span>
        <span >{children} </span>
        <span >{children} </span>

        <span >{children} </span>
        <span >{children} </span>
        <span >{children} </span>

      </motion.div>
    </div>
  );
}

export default ParallaxText;