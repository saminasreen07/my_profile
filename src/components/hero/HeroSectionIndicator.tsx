import React from "react";

export default function HeroSectionIndicator() {
  const sections = ["01", "02", "03", "04", "05", "06"];

  return (
    <div
      className="hero-section-indicator hidden lg:flex flex-col items-center select-none z-20 py-2"
      aria-label="Section indicator"
    >
      {sections.map((num, index) => {
        const isActive = index === 0;
        return (
          <div key={num} className="flex flex-col items-center">
            {/* Number Item */}
            <div className="relative flex items-center justify-center py-2 group">
              {isActive ? (
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold tracking-wider text-slate-100">
                    {num}
                  </span>
                  {/* Active circle indicator with gentle pulse */}
                  <span className="relative flex h-2 w-2">
                    <span className="hero-active-ring absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75 shadow-[0_0_8px_rgba(139,92,246,0.8)] animate-ping duration-1000"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                </div>
              ) : (
                <span className="text-[11px] font-medium tracking-wider text-slate-600 transition-colors">
                  {num}
                </span>
              )}
            </div>

            {/* Connecting vertical line between numbers */}
            {index < sections.length - 1 && (
              <div
                className={`w-[1px] h-7 ${
                  isActive
                    ? "hero-progress-line bg-gradient-to-b from-violet-400/80 to-slate-800"
                    : "bg-slate-800/80"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
