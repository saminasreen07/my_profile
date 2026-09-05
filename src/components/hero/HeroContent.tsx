import React from "react";

export default function HeroContent() {
  return (
    <div className="relative z-20 flex flex-col justify-center w-full min-w-0 max-w-2xl">
      {/* Salutation (Entrance Step 2) */}
      <div className="hero-salutation flex items-center gap-3 mb-3 md:mb-4">
        <span className="text-[14px] sm:text-[16px] md:text-[17px] font-semibold tracking-[0.22em] text-violet-300 uppercase">
          HELLO, I&apos;M
        </span>
      </div>

      {/* Main Name with 4-point glowing star accent (Entrance Step 3) */}
      <div className="hero-name relative mb-4 md:mb-5">
        <h1 className="text-[42px] sm:text-6xl md:text-7xl lg:text-[78px] xl:text-[84px] font-extrabold tracking-[-0.03em] leading-[1.05] text-slate-50">
          <span className="block">Nasreen</span>
          <span className="inline-flex items-center gap-2.5 sm:gap-3">
            <span>Sami</span>
            {/* 4-point accent sparkle with gentle continuous breathing */}
            <svg
              className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-violet-400 drop-shadow-[0_0_12px_rgba(167,139,250,0.8)] fill-current shrink-0 animate-star-breathe"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C12 7 7 12 0 12C7 12 12 17 12 24C12 17 17 12 24 12C17 12 12 7 12 0Z" />
            </svg>
          </span>
        </h1>
      </div>

      {/* Role Title: AI & SOFTWARE ENGINEER (Entrance Step 4) */}
      <div className="hero-title flex items-center gap-2.5 sm:gap-4 mb-5 md:mb-6">
        {/* Accent horizontal line */}
        <span className="shrink-0 w-6 sm:w-8 md:w-10 h-[2px] bg-gradient-to-r from-violet-500 to-indigo-400 rounded-full" />
        <h2 className="text-[19px] sm:text-2xl md:text-[30px] lg:text-[34px] font-bold tracking-tight text-violet-400 leading-tight">
          AI &amp; SOFTWARE ENGINEER
        </h2>
      </div>

      {/* Description (Entrance Step 5) */}
      <p className="hero-desc text-[15px] sm:text-lg md:text-[19px] lg:text-[20px] leading-relaxed text-slate-300 font-normal max-w-xl mb-7 sm:mb-8 md:mb-10">
        Passionate about AI, Data Science, and building intelligent solutions that create real impact.
      </p>

      {/* CTA Button: EXPLORE MY WORK → (Entrance Step 6 & Hover Physics) */}
      <div className="hero-cta">
        <a
          href="#projects"
          className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg border border-violet-500/40 bg-slate-950/40 text-slate-100 font-semibold text-xs sm:text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:border-violet-400 hover:text-white hover:bg-violet-950/30 hover:shadow-[0_0_22px_rgba(139,92,246,0.35)] active:scale-[0.98]"
        >
          <span>EXPLORE MY WORK</span>
          <span className="text-violet-400 text-base leading-none transition-transform duration-300 ease-out group-hover:translate-x-1.5">
            →
          </span>
        </a>
      </div>
    </div>
  );
}
