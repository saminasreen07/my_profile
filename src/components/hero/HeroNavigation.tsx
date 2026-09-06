import React from "react";

export default function HeroNavigation() {
  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "ACHIEVEMENTS", href: "#achievements" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#about") {
      e.preventDefault();
      const heroEl = document.getElementById("hero");
      if (heroEl) {
        const pinSpacer = heroEl.parentElement;
        const scrollTarget =
          pinSpacer && pinSpacer.classList.contains("pin-spacer")
            ? pinSpacer.offsetTop + (pinSpacer.offsetHeight - window.innerHeight) * 0.85
            : window.innerHeight * 0.9;
        window.scrollTo({ top: scrollTarget, behavior: "smooth" });
      }
    }
  };

  return (
    <header
      id="hero-nav"
      className="hero-nav relative z-30 w-full pt-6 md:pt-8 px-6 sm:px-10 lg:px-16 flex items-center justify-between"
    >
      {/* Brand Logo: NS + star accent */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="group inline-flex items-center gap-1 text-xl sm:text-2xl font-bold tracking-tight text-white/95 transition-opacity hover:opacity-80 shrink-0"
        aria-label="Nasreen Sami Home"
      >
        <span>NS</span>
        {/* Subtle four-point star accent with soft breathing glow */}
        <span className="text-violet-400 text-xs sm:text-sm font-light -mt-2 animate-star-breathe">✦</span>
      </a>

      {/* Navigation Links + Circular Menu */}
      <div className="flex items-center gap-6 sm:gap-8 lg:gap-10 shrink-0">
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[12px] lg:text-[13px] tracking-[0.18em] font-medium text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="group relative py-1 transition-colors duration-200 hover:text-white"
            >
              <span>{item.label}</span>
              {/* Subtle underline accent */}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-violet-400 to-indigo-400 transition-all duration-300 ease-out group-hover:w-full opacity-80" />
            </a>
          ))}
        </nav>

        {/* Circular Menu Button */}
        <button
          type="button"
          aria-label="Open menu"
          className="relative flex items-center justify-center w-10 h-10 rounded-full border border-violet-500/30 bg-slate-950/60 backdrop-blur-md shadow-[0_0_18px_rgba(139,92,246,0.25)] hover:border-violet-400/60 hover:shadow-[0_0_24px_rgba(139,92,246,0.45)] active:scale-95 transition-all duration-300 cursor-pointer shrink-0 group"
        >
          <span className="flex flex-col items-center justify-center gap-1.5 w-4">
            <span className="w-full h-[1.5px] bg-slate-200 rounded-full transition-transform duration-200 group-hover:scale-x-90"></span>
            <span className="w-full h-[1.5px] bg-slate-200 rounded-full transition-transform duration-200 group-hover:scale-x-110"></span>
          </span>
        </button>
      </div>
    </header>
  );
}
