"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface ImpactCounterProps {
  value: string;
  label: string;
}

export function ImpactCounter({ value, label }: ImpactCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: 2, // Adjust duration if needed, though spring usually ignores duration if stiffness/damping are set
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Parse the number and suffix
  // Handles "500+", "50+", "7", etc.
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isInView && !isNaN(numericValue)) {
      motionValue.set(numericValue);
    }
  }, [motionValue, isInView, numericValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        // Format with commas if needed, though usually these small numbers don't need it. 
        // Intl.NumberFormat is good practice.
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
      }
    });
  }, [springValue]);

  // If parsing failed (e.g. no numbers), just show the original value
  if (isNaN(numericValue)) {
     return (
      <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors shadow-lg group">
        <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-yellow-300 mb-4 group-hover:scale-110 transition-transform duration-300 inline-block drop-shadow-sm">
          {value}
        </div>
        <div className="text-sm font-bold uppercase tracking-wider text-indigo-200">{label}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors shadow-lg group">
      <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-yellow-300 mb-4 group-hover:scale-110 transition-transform duration-300 inline-block drop-shadow-sm flex items-center justify-center gap-1">
        <span ref={ref}>0</span>
        <span>{suffix}</span>
      </div>
      <div className="text-sm font-bold uppercase tracking-wider text-indigo-200">{label}</div>
    </div>
  );
}
