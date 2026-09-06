import React from "react";
import Image from "next/image";

interface SkillCategory {
  id: string;
  name: string;
  accentColor: "fuchsia" | "cyan" | "purple";
  icon: (colorClass: string) => React.ReactNode;
  lines: string[][]; // lines of technologies
}

const CATEGORIES: SkillCategory[] = [
  // ROW 1
  {
    id: "programming",
    name: "PROGRAMMING",
    accentColor: "fuchsia",
    icon: (colorClass) => (
      <svg
        className={`w-4 h-4 sm:w-[17px] sm:h-[17px] ${colorClass} shrink-0`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    lines: [["Python", "Java", "C", "C++"]],
  },
  {
    id: "web-tech",
    name: "WEB TECHNOLOGIES",
    accentColor: "cyan",
    icon: (colorClass) => (
      <svg
        className={`w-4 h-4 sm:w-[17px] sm:h-[17px] ${colorClass} shrink-0`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.0"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
        <line x1="2" y1="9" x2="22" y2="9" />
        <circle cx="6" cy="6" r="0.75" fill="currentColor" />
        <circle cx="9" cy="6" r="0.75" fill="currentColor" />
      </svg>
    ),
    lines: [["HTML5", "CSS3", "JavaScript"]],
  },
  {
    id: "frameworks",
    name: "FRAMEWORKS & LIBRARIES",
    accentColor: "cyan",
    icon: (colorClass) => (
      <svg
        className={`w-4 h-4 sm:w-[17px] sm:h-[17px] ${colorClass} shrink-0`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.0"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    lines: [["Django", "Flask", "Chart.js"]],
  },

  // ROW 2
  {
    id: "ai-ml",
    name: "AI / ML & NLP",
    accentColor: "purple",
    icon: (colorClass) => (
      <svg
        className={`w-4 h-4 sm:w-[17px] sm:h-[17px] ${colorClass} shrink-0`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.0"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
      </svg>
    ),
    lines: [
      ["Machine Learning", "NLP"],
      ["Google Gemini", "Groq / Llama 3.3"],
    ],
  },
  {
    id: "databases",
    name: "DATABASES",
    accentColor: "purple",
    icon: (colorClass) => (
      <svg
        className={`w-4 h-4 sm:w-[17px] sm:h-[17px] ${colorClass} shrink-0`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.0"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    lines: [
      ["MySQL", "Supabase"],
      ["Firebase", "MongoDB"],
    ],
  },
  {
    id: "data-viz",
    name: "DATA & VISUALIZATION",
    accentColor: "purple",
    icon: (colorClass) => (
      <svg
        className={`w-4 h-4 sm:w-[17px] sm:h-[17px] ${colorClass} shrink-0`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    lines: [
      ["Data Analysis", "Tableau"],
      ["Power BI", "DAX"],
    ],
  },

  // ROW 3
  {
    id: "iot",
    name: "IOT & EMBEDDED SYSTEMS",
    accentColor: "cyan",
    icon: (colorClass) => (
      <svg
        className={`w-4 h-4 sm:w-[17px] sm:h-[17px] ${colorClass} shrink-0`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.0"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="15" x2="23" y2="15" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="15" x2="4" y2="15" />
      </svg>
    ),
    lines: [
      ["ESP32", "Embedded C"],
      ["Sensor Integration", "ACS712", "LM35"],
    ],
  },
  {
    id: "cloud",
    name: "CLOUD & DEVOPS",
    accentColor: "cyan",
    icon: (colorClass) => (
      <svg
        className={`w-4 h-4 sm:w-[17px] sm:h-[17px] ${colorClass} shrink-0`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.0"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
    lines: [["AWS", "Git", "Jira"]],
  },
  {
    id: "mobile",
    name: "MOBILE & INTEGRATION",
    accentColor: "purple",
    icon: (colorClass) => (
      <svg
        className={`w-4 h-4 sm:w-[17px] sm:h-[17px] ${colorClass} shrink-0`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.0"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.6" />
      </svg>
    ),
    lines: [["Flutter", "Razorpay", "WebSockets"]],
  },
];

const ACCENT_MAP = {
  fuchsia: {
    icon: "text-[#d946ef] drop-shadow-[0_0_10px_rgba(217,70,239,0.9)]",
    line: "bg-gradient-to-r from-[#d946ef] via-[#c084fc] to-transparent",
    pipe: "text-[#d946ef]/50",
  },
  cyan: {
    icon: "text-[#22d3ee] drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]",
    line: "bg-gradient-to-r from-[#22d3ee] via-[#38bdf8] to-transparent",
    pipe: "text-[#22d3ee]/50",
  },
  purple: {
    icon: "text-[#c084fc] drop-shadow-[0_0_10px_rgba(192,132,252,0.9)]",
    line: "bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-transparent",
    pipe: "text-[#c084fc]/50",
  },
};

export function SkillsContent() {
  return (
    <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-center min-h-[78vh] py-3 sm:py-5">
      {/* Section Header (Anchored stable title) */}
      <div className="skills-header mb-5 sm:mb-7">
        {/* Label: 03 / SKILLS + horizontal divider */}
        <div className="skills-label flex items-center gap-3 mb-2 sm:mb-2.5">
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-violet-400 uppercase font-medium">
            03 / SKILLS
          </span>
          <span className="w-8 h-[1px] bg-violet-400/40" />
        </div>

        {/* Headline: WHAT I BUILD WITH. (Anchored & stable) */}
        <h2 className="skills-heading text-2xl sm:text-3xl lg:text-[34px] xl:text-[40px] font-bold tracking-tight text-slate-100 leading-[1.15] mb-2 sm:mb-2.5">
          WHAT I BUILD{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-indigo-300 to-cyan-300">
            WITH.
          </span>
        </h2>

        {/* Subhead: TOOLS • TECHNOLOGIES • IDEAS • IMPACT */}
        <p className="skills-subhead text-[11px] sm:text-xs font-sans tracking-[0.14em] text-slate-400 uppercase font-medium flex items-center gap-2 sm:gap-2.5">
          <span>TOOLS</span>
          <span className="text-cyan-400/75">•</span>
          <span>TECHNOLOGIES</span>
          <span className="text-cyan-400/75">•</span>
          <span>IDEAS</span>
          <span className="text-cyan-400/75">•</span>
          <span>IMPACT</span>
        </p>
      </div>

      {/* 3x3 Balanced Editorial Typography Grid (Preserved structure, scroll-driven focus system) */}
      <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 sm:gap-x-9 xl:gap-x-12 gap-y-5 sm:gap-y-6">
        {CATEGORIES.map((cat, catIdx) => {
          const accent = ACCENT_MAP[cat.accentColor];
          const colIndex = catIdx % 3;
          const originClass =
            colIndex === 0
              ? "origin-left"
              : colIndex === 1
              ? "origin-center"
              : "origin-right";

          return (
            <div
              key={cat.id}
              id={`skill-card-${cat.id}`}
              data-category={cat.id}
              className={`skill-card skill-card-${cat.id} ${originClass} flex flex-col group min-w-0 transition-opacity duration-200 will-change-transform will-change-opacity`}
            >
              {/* Category Header: Glowing Neon Icon + Title */}
              <div className="flex items-center gap-2 mb-1">
                {cat.icon(accent.icon)}
                <h3 className="skill-cat-title text-[13px] sm:text-[13.5px] lg:text-[14px] xl:text-[14.5px] font-sans font-semibold tracking-[0.06em] text-slate-100 uppercase transition-colors duration-200">
                  {cat.name}
                </h3>
              </div>

              {/* Glowing Accent Underline */}
              <div className={`skill-cat-line h-[1.5px] w-full max-w-[140px] ${accent.line} mb-2 transition-all duration-300`} />

              {/* Technologies List: Elegant Portfolio Typography */}
              <div className="skill-cat-techs flex flex-col gap-y-1 transition-colors duration-200">
                {cat.lines.map((line, idx) => (
                  <div
                    key={idx}
                    className="flex flex-wrap items-center gap-x-1.5 text-[14px] sm:text-[14.5px] lg:text-[15px] xl:text-[15.5px] font-sans font-normal sm:font-medium text-slate-200 tracking-normal leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]"
                  >
                    {line.map((tech, techIdx) => (
                      <React.Fragment key={tech}>
                        <span className="hover:text-cyan-300 transition-colors duration-150 cursor-default whitespace-nowrap">
                          {tech}
                        </span>
                        {techIdx < line.length - 1 && (
                          <span
                            className={`${accent.pipe} font-light select-none px-1 text-[12px] sm:text-[13px]`}
                          >
                            |
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-[#030508] text-slate-100 py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-14 xl:px-16"
      aria-label="Skills and Technologies"
    >
      {/* Background Photographic Workspace (Clearly visible, warm, atmospheric) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <Image
          src="/images/skills-workspace.jpg"
          alt="Cinematic workspace with open notebook, sketches, pen, laptop, and warm ambient lamp"
          fill
          priority
          quality={95}
          className="object-cover object-center lg:object-[68%_center] opacity-90"
        />

        {/* Atmospheric darkening overlay to ensure crisp typography contrast without obscuring desk details */}
        <div className="absolute inset-0 bg-[#030508]/35" />

        {/* Subtle radial center vignette for cinematic depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(3,5,8,0.55)_100%)]" />

        {/* Top and bottom framing vignettes */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#030508] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#030508] to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full">
        <SkillsContent />
      </div>
    </section>
  );
}
