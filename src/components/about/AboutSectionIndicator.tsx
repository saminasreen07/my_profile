import React from "react";

export default function AboutSectionIndicator() {
  const sections = ["01", "02", "03", "04", "05", "06"];

  return (
    <div
      className="hidden lg:flex flex-col items-center select-none z-20 py-2 shrink-0"
      aria-label="Section indicator - About"
    >
      {sections.map((num, index) => {
        const isActive = index === 1; // 02 is active
        const isPast = index < 1;

        return (
          <div key={num} className="flex flex-col items-center">
            {/* Number Item */}
            <div className="relative flex items-center justify-center py-2">
              {isActive ? (
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold tracking-wider text-slate-100">
                    {num}
                  </span>
                  {/* Active indicator dot */}
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                </div>
              ) : (
                <span
                  className={`text-[11px] font-medium tracking-wider ${
                    isPast ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {num}
                </span>
              )}
            </div>

            {/* Connecting vertical line between numbers */}
            {index < sections.length - 1 && (
              <div
                className={`w-[1px] h-7 ${
                  isActive || isPast
                    ? "bg-gradient-to-b from-violet-400/80 to-slate-800"
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
