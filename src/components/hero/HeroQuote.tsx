import React from "react";

export default function HeroQuote() {
  return (
    <div className="relative z-20 max-w-sm lg:max-w-md select-none translate-y-8 lg:translate-y-44">
      <blockquote className="hero-quote group pl-4 border-l border-amber-500/30 hover:border-amber-400/60 text-[13px] sm:text-[14px] leading-relaxed text-slate-300/85 hover:text-slate-100 font-normal tracking-wide transition-colors duration-300">
        <p className="italic">
          “I believe in the power of code to solve problems and the power of curiosity to create the future.”
        </p>
      </blockquote>
    </div>
  );
}
