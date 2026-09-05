import React from "react";

export default function HeroScrollIndicator() {
  return (
    <div className="hero-scroll-indicator relative z-20 flex flex-col items-center select-none">
      {/* Static Mouse Shell + Animated Gliding Wheel */}
      <div className="w-[18px] h-7 rounded-full border border-slate-400/60 flex items-start justify-center p-1 mb-2 shadow-[0_0_10px_rgba(139,92,246,0.1)]">
        <div className="w-1 h-1.5 bg-slate-300 rounded-full animate-scroll-wheel" />
      </div>

      {/* Label */}
      <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.25em] text-slate-400 uppercase">
        SCROLL TO EXPLORE
      </span>

      {/* Subtle Star / Cross Accent below with soft breathing */}
      <span className="text-violet-400/80 text-[10px] mt-1 font-mono animate-star-breathe">✦</span>
    </div>
  );
}
