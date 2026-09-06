import React from "react";

export default function HeroSectionIndicator() {
  const sections = ["01", "02", "03", "04", "05", "06"];

  return (
    <div
      className="hero-section-indicator hidden lg:flex flex-col items-center select-none z-20 py-2 shrink-0"
      aria-label="Section indicator"
    >
      {sections.map((num, index) => {
        return (
          <div key={num} className="flex flex-col items-center">
            {/* Number Item */}
            <div className="relative flex items-center justify-center py-2">
              {index === 0 && (
                <div className="flex items-center gap-2">
                  <span className="indicator-label-01 text-[11px] font-semibold tracking-wider text-slate-100 will-change-opacity">
                    {num}
                  </span>
                  <span className="indicator-dot-01 relative flex h-2 w-2 will-change-transform will-change-opacity">
                    <span className="hero-active-ring absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75 shadow-[0_0_8px_rgba(139,92,246,0.8)] animate-ping duration-1000" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                </div>
              )}

              {index === 1 && (
                <div className="flex items-center gap-2">
                  <span className="indicator-label-02 text-[11px] font-medium tracking-wider text-slate-400 opacity-45 will-change-opacity">
                    {num}
                  </span>
                  <span className="indicator-dot-02 relative flex h-2 w-2 opacity-0 will-change-transform will-change-opacity">
                    <span className="hero-active-ring-02 absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                </div>
              )}

              {index === 2 && (
                <div className="flex items-center gap-2">
                  <span className="indicator-label-03 text-[11px] font-medium tracking-wider text-slate-400 opacity-45 will-change-opacity">
                    {num}
                  </span>
                  <span className="indicator-dot-03 relative flex h-2 w-2 opacity-0 will-change-transform will-change-opacity">
                    <span className="hero-active-ring-03 absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                </div>
              )}

              {index > 2 && (
                <span className="text-[11px] font-medium tracking-wider text-slate-600 transition-colors">
                  {num}
                </span>
              )}
            </div>

            {/* Connecting vertical line between numbers */}
            {index < sections.length - 1 && (
              <div
                className={`w-[1px] h-7 ${
                  index === 0
                    ? "indicator-line-01 hero-progress-line bg-gradient-to-b from-violet-400/80 to-slate-800"
                    : index === 1
                    ? "indicator-line-02 hero-progress-line bg-gradient-to-b from-violet-400/80 to-slate-800"
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
