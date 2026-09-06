"use client";

import React, { useRef } from "react";
import HeroNavigation from "./HeroNavigation";
import HeroSectionIndicator from "./HeroSectionIndicator";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import HeroSocials from "./HeroSocials";
import HeroScrollIndicator from "./HeroScrollIndicator";
import HeroQuote from "./HeroQuote";
import About from "@/components/about/About";
import { SkillsContent } from "@/components/skills/Skills";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

export default function Hero() {
  const containerRef = useRef<HTMLElement | null>(null);

  // Mouse Parallax Layer Refs (translated via lerp translate3d)
  const farParallaxRef = useRef<HTMLDivElement | null>(null);
  const workspaceParallaxRef = useRef<HTMLDivElement | null>(null);
  const laptopParallaxRef = useRef<HTMLDivElement | null>(null);
  const digitalParallaxRef = useRef<HTMLDivElement | null>(null);
  const particlesParallaxRef = useRef<HTMLDivElement | null>(null);

  // GSAP ScrollTrigger Refs (scaled, faded, scrubbed)
  const farScrollRef = useRef<HTMLDivElement | null>(null);
  const workspaceScrollRef = useRef<HTMLDivElement | null>(null);
  const laptopScrollRef = useRef<HTMLDivElement | null>(null);
  const digitalScrollRef = useRef<HTMLDivElement | null>(null);
  const particlesScrollRef = useRef<HTMLDivElement | null>(null);
  const darkOverlayRef = useRef<HTMLDivElement | null>(null);
  const warmGlowRef = useRef<HTMLDivElement | null>(null);
  const digitalAtmosphereRef = useRef<HTMLDivElement | null>(null);
  const skillsWorkspaceRef = useRef<HTMLDivElement | null>(null);

  // Hook 1: 60fps layered mouse parallax (isolated on outer wrappers)
  useMouseParallax({
    farRef: farParallaxRef,
    workspaceRef: workspaceParallaxRef,
    laptopRef: laptopParallaxRef,
    digitalRef: digitalParallaxRef,
    particlesRef: particlesParallaxRef,
  });

  // Hook 2: Page load entrance sequence + 6-phase reversible scroll storytelling
  useHeroAnimation({
    containerRef,
    farScrollRef,
    workspaceScrollRef,
    laptopScrollRef,
    digitalScrollRef,
    particlesScrollRef,
    darkOverlayRef,
    warmGlowRef,
    digitalAtmosphereRef,
    skillsWorkspaceRef,
  });

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#030508] text-slate-100 max-w-[100vw]"
    >
      {/* Background Visual Layer: Cinematic Workspace + Live Digital Streams + Particles + Section 3 Workspace */}
      <HeroVisual
        farParallaxRef={farParallaxRef}
        workspaceParallaxRef={workspaceParallaxRef}
        laptopParallaxRef={laptopParallaxRef}
        digitalParallaxRef={digitalParallaxRef}
        particlesParallaxRef={particlesParallaxRef}
        farScrollRef={farScrollRef}
        workspaceScrollRef={workspaceScrollRef}
        laptopScrollRef={laptopScrollRef}
        digitalScrollRef={digitalScrollRef}
        particlesScrollRef={particlesScrollRef}
        darkOverlayRef={darkOverlayRef}
        warmGlowRef={warmGlowRef}
        digitalAtmosphereRef={digitalAtmosphereRef}
        skillsWorkspaceRef={skillsWorkspaceRef}
      />

      {/* Top Navigation */}
      <HeroNavigation />

      {/* Main Container Stage */}
      <div className="relative z-20 flex-1 flex items-center px-6 sm:px-10 lg:px-16 py-6 sm:py-8 lg:py-4 w-full">
        {/* Persistent Section Indicator (01 -> 02 -> 03 transitions on scroll across all sections) */}
        <div className="hidden lg:flex items-center z-30 shrink-0 select-none">
          <HeroSectionIndicator />
        </div>

        {/* Content Stages Wrapper: Sits to the right of the persistent indicator */}
        <div className="relative flex-1 w-full h-full flex items-center min-w-0 lg:pl-10 xl:pl-14">
          {/* Main Stage for Hero (01) and About (02) */}
          <div className="hero-about-stage w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12 will-change-opacity">
            <div className="lg:col-span-8 xl:col-span-7 relative w-full min-w-0 max-w-4xl">
              {/* Layer 1: Hero Content */}
              <div className="hero-content-stage w-full">
                <HeroContent />
              </div>

              {/* Layer 2: About Content (Enters naturally as Hero recedes) */}
              <div className="about-stage absolute inset-0 flex flex-col justify-center opacity-0 pointer-events-none will-change-transform will-change-opacity">
                <About />
              </div>
            </div>

            {/* Right Side: Open space for cinematic workspace + ambient lower quote on desktop */}
            <div className="hidden lg:flex lg:col-span-4 xl:col-span-5 flex-col justify-end items-end h-full pb-6 pr-4">
              <HeroQuote />
            </div>
          </div>

          {/* Main Stage for Section 3: Final Approved Full-Viewport Editorial Skills UI */}
          <div className="skills-stage absolute inset-0 z-20 flex flex-col justify-center opacity-0 pointer-events-none will-change-transform will-change-opacity">
            <SkillsContent />
          </div>
        </div>
      </div>

      {/* Bottom Bar: Socials (Left), Scroll Indicator (Center), Mobile Quote (Right/Stacked) */}
      <footer className="hero-footer relative z-20 w-full px-6 sm:px-10 lg:px-16 pb-6 md:pb-8 pt-2">
        {/* On mobile/tablet, show quote above or within footer */}
        <div className="block lg:hidden mb-6">
          <HeroQuote />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-6 sm:gap-4">
          {/* Bottom Left: Socials */}
          <div className="flex justify-center sm:justify-start">
            <HeroSocials />
          </div>

          {/* Bottom Center: Scroll to explore */}
          <div className="flex justify-center">
            <HeroScrollIndicator />
          </div>

          {/* Bottom Right: Empty placeholder for desktop grid balance since quote is in right column */}
          <div className="hidden sm:flex justify-end">
            <span className="text-[11px] font-mono tracking-widest text-slate-600/70 uppercase select-none">
              EST. 2026 // PORTFOLIO
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}
