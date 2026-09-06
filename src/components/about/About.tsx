import React from "react";

interface AboutProps {
  className?: string;
}

export default function About({ className = "" }: AboutProps) {
  return (
    <div
      id="about"
      className={`about-section w-full flex flex-col justify-center text-slate-100 max-w-2xl ${className}`}
    >
      {/* Section Label: 02 / ABOUT */}
      <div className="about-label flex items-center gap-3 mb-4 sm:mb-5">
        <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-violet-400 uppercase font-medium">
          02 / ABOUT
        </span>
        <span className="w-8 h-[1px] bg-violet-400/30" />
      </div>

      {/* Main Statement */}
      <h2 className="about-headline text-3xl sm:text-4xl lg:text-[44px] xl:text-5xl font-bold tracking-tight text-slate-100 leading-[1.15] mb-5 sm:mb-7">
        <span className="block">I BUILD WITH CURIOSITY.</span>
        <span className="block text-slate-100">
          I SOLVE WITH{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-indigo-300 to-cyan-300">
            CODE.
          </span>
        </span>
      </h2>

      {/* Body Text */}
      <p className="about-body text-base sm:text-lg lg:text-[19px] leading-relaxed text-slate-300/90 font-normal max-w-xl mb-7 sm:mb-9 lg:mb-10">
        I&apos;m Nasreen Sami, an AI &amp; Software Engineer interested in AI, Data Science, and software development. I enjoy turning ideas into intelligent solutions that solve real problems and create meaningful impact.
      </p>

      {/* Supporting Statement */}
      <div className="about-supporting pt-5 sm:pt-6 border-t border-slate-800/80 max-w-md">
        <p className="text-xs sm:text-sm font-mono tracking-[0.2em] uppercase leading-relaxed">
          <span className="block text-slate-300 font-medium">CURIOUS BY NATURE.</span>
          <span className="block text-violet-400/90 mt-1">BUILT TO CREATE.</span>
        </p>
      </div>
    </div>
  );
}
