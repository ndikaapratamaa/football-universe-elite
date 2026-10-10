"use client";

import * as React from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function useAnimatedCounter(target: number, isInView: boolean) {
  const [display, setDisplay] = React.useState(0);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });

  React.useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, target, motionValue]);

  React.useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  return display;
}
