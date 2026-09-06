"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import HeroParticles from "./HeroParticles";

export interface HeroVisualProps {
  // Mouse Parallax Outer Refs (translated via lerp translate3d)
  farParallaxRef?: React.RefObject<HTMLDivElement | null>;
  workspaceParallaxRef?: React.RefObject<HTMLDivElement | null>;
  laptopParallaxRef?: React.RefObject<HTMLDivElement | null>;
  digitalParallaxRef?: React.RefObject<HTMLDivElement | null>;
  particlesParallaxRef?: React.RefObject<HTMLDivElement | null>;

  // GSAP ScrollTrigger Inner Refs (scaled, faded, transformed via scrub)
  farScrollRef?: React.RefObject<HTMLDivElement | null>;
  workspaceScrollRef?: React.RefObject<HTMLDivElement | null>;
  laptopScrollRef?: React.RefObject<HTMLDivElement | null>;
  digitalScrollRef?: React.RefObject<HTMLDivElement | null>;
  particlesScrollRef?: React.RefObject<HTMLDivElement | null>;
  darkOverlayRef?: React.RefObject<HTMLDivElement | null>;
  warmGlowRef?: React.RefObject<HTMLDivElement | null>;
  digitalAtmosphereRef?: React.RefObject<HTMLDivElement | null>;
  skillsWorkspaceRef?: React.RefObject<HTMLDivElement | null>;
}

export default forwardRef<HTMLDivElement, HeroVisualProps>(function HeroVisual(
  {
    farParallaxRef,
    workspaceParallaxRef,
    laptopParallaxRef,
    digitalParallaxRef,
    particlesParallaxRef,
    farScrollRef,
    workspaceScrollRef,
    laptopScrollRef,
    digitalScrollRef,
    particlesScrollRef,
    darkOverlayRef,
    warmGlowRef,
    digitalAtmosphereRef,
    skillsWorkspaceRef,
  },
  ref
) {
  return (
    <div
      ref={ref}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none max-w-full"
    >
      {/* ========================================================
          LAYER 0: FAR — Window Atmosphere & Distant City Lights
          Barely moves on mouse interaction (±2.5px) + slow scroll drift
          ======================================================== */}
      <div
        ref={farParallaxRef}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <div
          ref={farScrollRef}
          className="absolute inset-0 pointer-events-none will-change-transform"
        >
          {/* Distant window atmosphere soft glow with slow living drift */}
          <div className="absolute top-10 right-10 w-[32rem] h-[24rem] bg-cyan-950/15 rounded-full blur-[100px] pointer-events-none animate-city-drift" />

          {/* Distant city window beacons (subtle asynchronous shimmer) */}
          <div
            className="absolute top-[17%] right-[14%] w-1 h-1 rounded-full bg-amber-200/60 blur-[0.5px] animate-city-shimmer pointer-events-none"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-[21%] right-[21%] w-[1.5px] h-[1.5px] rounded-full bg-cyan-200/70 blur-[0.5px] animate-city-shimmer pointer-events-none"
            style={{ animationDelay: "1.6s" }}
          />
          <div
            className="absolute top-[14%] right-[26%] w-1 h-1 rounded-full bg-indigo-200/50 blur-[0.5px] animate-city-shimmer pointer-events-none"
            style={{ animationDelay: "3.1s" }}
          />
          <div
            className="absolute top-[26%] right-[10%] w-[1.5px] h-[1.5px] rounded-full bg-amber-100/50 blur-[0.5px] animate-city-shimmer pointer-events-none"
            style={{ animationDelay: "2.3s" }}
          />
          <div
            className="absolute top-[19%] right-[18%] w-[1.5px] h-[1.5px] rounded-full bg-amber-200/40 blur-[0.5px] animate-city-shimmer pointer-events-none"
            style={{ animationDelay: "4.2s" }}
          />
          <div
            className="absolute top-[23%] right-[28%] w-1 h-1 rounded-full bg-cyan-100/50 blur-[0.5px] animate-city-shimmer pointer-events-none"
            style={{ animationDelay: "5.6s" }}
          />
        </div>
      </div>

      {/* ========================================================
          LAYER 1: MIDDLE — Workspace, Desk, Books, Plant, Lamp
          Parallax wrapper (±6px) + GSAP Scroll wrapper (y & scale)
          ======================================================== */}
      <div
        ref={workspaceParallaxRef}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <div
          ref={workspaceScrollRef}
          className="absolute top-0 right-0 w-full lg:w-[68%] xl:w-[62%] h-full will-change-transform"
        >
          {/* Base Workspace Photographic Asset */}
          <Image
            src="/images/hero-workspace.jpg"
            alt="Cinematic developer workspace with laptop, code, warm lamp, and nighttime skyline"
            fill
            priority
            quality={95}
            className="object-cover object-center sm:object-[75%_center] lg:object-right opacity-90 lg:opacity-100"
          />

          {/* Left Gradient Mask: Seamlessly blends workspace into deep black negative space */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030508] via-[#030508]/80 to-transparent w-full lg:w-[50%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030508] via-transparent to-transparent opacity-95" />

          {/* Top & bottom atmospheric framing vignettes */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#030508] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030508] via-[#030508]/70 to-transparent" />

          {/* Warm Desk Lamp Ambient Breathing Glow */}
          <div
            ref={warmGlowRef}
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-amber-500/14 rounded-full blur-3xl pointer-events-none animate-warm-breathe will-change-transform"
          />

          {/* Scroll Darkening Overlay: Gradually brings workspace into cinematic deep shadow during scroll */}
          <div
            ref={darkOverlayRef}
            className="hero-dark-overlay absolute inset-0 bg-[#030508] opacity-0 pointer-events-none will-change-opacity"
          />
        </div>
      </div>

      {/* ========================================================
          LAYER 2: FOREGROUND — Laptop Screen Ambient Pulse & Surface Reflection
          Parallax wrapper (±10px) + GSAP Scroll wrapper
          ======================================================== */}
      <div
        ref={laptopParallaxRef}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <div
          ref={laptopScrollRef}
          className="absolute inset-0 pointer-events-none will-change-transform will-change-opacity"
        >
          <div className="hidden lg:block absolute top-[44%] right-[20%] w-72 h-72 -translate-y-1/2 translate-x-1/2 pointer-events-none">
            {/* Laptop Screen Soft Radiance Pulse */}
            <div className="w-full h-full rounded-full bg-cyan-400/14 blur-2xl animate-laptop-breathe" />
            <div className="absolute inset-6 rounded-full bg-indigo-500/12 blur-xl animate-laptop-breathe" />

            {/* Subtle Keyboard & Desk Surface Reflection */}
            <div className="absolute top-[68%] left-[10%] w-[80%] h-18 bg-gradient-to-b from-cyan-400/14 via-indigo-500/10 to-transparent rounded-[100%] blur-xl animate-laptop-reflect pointer-events-none" />
          </div>
        </div>
      </div>

      {/* ========================================================
          LAYER 3: FOREGROUND — Digital System, Data Streams & AI
          Parallax wrapper (±15px) + GSAP Scroll wrapper (shift & scale)
          Visual flow: LAPTOP → DATA → DIGITAL SYSTEM → AI → IMPACT
          ======================================================== */}
      <div
        ref={digitalParallaxRef}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <div
          ref={digitalScrollRef}
          className="hero-digital-layer absolute inset-0 z-10 opacity-80 lg:opacity-85 will-change-transform will-change-opacity"
        >
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              {/* Primary Data Stream Gradient (Cyan to Indigo to Soft Violet) */}
              <linearGradient id="stream-gradient-primary" x1="100%" y1="65%" x2="35%" y2="25%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.75" />
                <stop offset="45%" stopColor="#818cf8" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
              </linearGradient>

              {/* Secondary AI Stream Gradient */}
              <linearGradient id="stream-gradient-ai" x1="95%" y1="55%" x2="30%" y2="15%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.65" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>

              {/* Node Glow Radial Gradients */}
              <radialGradient id="node-glow-primary" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#818cf8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
              </radialGradient>

              <radialGradient id="node-glow-ai" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="40%" stopColor="#c084fc" stopOpacity="0.85" />
                <stop offset="80%" stopColor="#6366f1" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* FLOW 1: LAPTOP → DATA STREAM (Primary flowing cyber curve) */}
            <path
              d="M 870 510 C 770 470, 700 400, 620 310"
              fill="none"
              stroke="url(#stream-gradient-primary)"
              strokeWidth="1.8"
              className="animate-cyber-flow"
            />

            {/* TRAVELING DATA PACKET: Flow 1 (Subtle pulses traveling along path) */}
            <path
              d="M 870 510 C 770 470, 700 400, 620 310"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.2"
              className="animate-data-packet pointer-events-none"
              opacity="0.9"
            />

            {/* FLOW 2: LAPTOP → AI / SYSTEM ARCHITECTURE (Upper branch) */}
            <path
              d="M 910 470 C 830 380, 740 300, 640 220"
              fill="none"
              stroke="url(#stream-gradient-ai)"
              strokeWidth="1.5"
              className="animate-cyber-flow-slow"
            />

            {/* TRAVELING DATA PACKET: Flow 2 (Secondary intelligence pulse) */}
            <path
              d="M 910 470 C 830 380, 740 300, 640 220"
              fill="none"
              stroke="#c084fc"
              strokeWidth="2"
              className="animate-data-packet-slow pointer-events-none"
              opacity="0.85"
            />

            {/* FLOW 3: Tertiary ambient connection curve toward About */}
            <path
              d="M 850 540 C 750 490, 660 450, 540 420"
              fill="none"
              stroke="rgba(139, 92, 246, 0.22)"
              strokeWidth="0.8"
              strokeDasharray="4 8"
            />

            {/* SYSTEM NODES (Pulsing data hubs along the stream) */}
            {/* Node 0: Laptop origin connection point */}
            <g className="animate-node-pulse" style={{ transformOrigin: "870px 510px", animationDelay: "0.6s" }}>
              <circle cx="870" cy="510" r="5" fill="rgba(56, 189, 248, 0.35)" />
              <circle cx="870" cy="510" r="1.8" fill="#38bdf8" />
            </g>

            {/* Node 1: Main data junction */}
            <g className="animate-node-pulse" style={{ transformOrigin: "620px 310px" }}>
              <circle cx="620" cy="310" r="10" fill="url(#node-glow-primary)" />
              <circle cx="620" cy="310" r="2.5" fill="#ffffff" />
            </g>

            {/* Node 2: Intermediate telemetry node */}
            <g className="animate-node-pulse" style={{ transformOrigin: "720px 385px", animationDelay: "1.2s" }}>
              <circle cx="720" cy="385" r="6" fill="rgba(56, 189, 248, 0.35)" />
              <circle cx="720" cy="385" r="1.8" fill="#38bdf8" />
            </g>

            {/* Node 3: AI Apex node */}
            <g className="animate-node-pulse" style={{ transformOrigin: "640px 220px", animationDelay: "2.4s" }}>
              <circle cx="640" cy="220" r="7" fill="url(#node-glow-ai)" />
              <circle cx="640" cy="220" r="2" fill="#ffffff" />
            </g>

            {/* Node 4: Near laptop origin */}
            <g className="animate-node-pulse" style={{ transformOrigin: "800px 440px", animationDelay: "1.8s" }}>
              <circle cx="800" cy="440" r="4.5" fill="rgba(192, 132, 252, 0.3)" />
              <circle cx="800" cy="440" r="1.4" fill="#c084fc" />
            </g>

            {/* SUBTLE GEOMETRIC TECH MARKS & LABELS (Classy, 18-25% opacity, technical engineering feel) */}
            <g opacity="0.22" className="hidden sm:inline">
              {/* Coordinate crosshairs */}
              <line x1="610" y1="310" x2="630" y2="310" stroke="#38bdf8" strokeWidth="0.75" />
              <line x1="620" y1="300" x2="620" y2="320" stroke="#38bdf8" strokeWidth="0.75" />

              <line x1="630" y1="220" x2="650" y2="220" stroke="#c084fc" strokeWidth="0.75" />
              <line x1="640" y1="210" x2="640" y2="230" stroke="#c084fc" strokeWidth="0.75" />

              {/* Data trail micro text tags */}
              <text x="860" y="530" fill="#38bdf8" fontSize="7.5" fontFamily="monospace" letterSpacing="1">
                PORT // 01
              </text>
              <text x="632" y="306" fill="#818cf8" fontSize="8" fontFamily="monospace" letterSpacing="1">
                DATA // FLUX
              </text>
              <text x="652" y="216" fill="#c084fc" fontSize="8" fontFamily="monospace" letterSpacing="1">
                AI.CORE
              </text>

              {/* Precision tech brackets */}
              <path d="M 580 290 L 570 290 L 570 330 L 580 330" fill="none" stroke="#818cf8" strokeWidth="0.8" />
              <path d="M 660 290 L 670 290 L 670 330 L 660 330" fill="none" stroke="#818cf8" strokeWidth="0.8" />
            </g>
          </svg>
        </div>
      </div>

      {/* ========================================================
          LAYER 4: MINIMAL TRANSFORMATION — Digital Atmosphere Bloom
          Rises during Phase 3 & 4 scroll to create atmospheric depth
          ======================================================== */}
      <div
        ref={digitalAtmosphereRef}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-gradient-to-tr from-indigo-950/0 via-violet-600/12 to-cyan-500/10 rounded-full blur-[120px] opacity-0 pointer-events-none will-change-opacity"
      />

      {/* ========================================================
          LAYER 5: PARTICLES — Floating Ambient Micro Particles
          Parallax wrapper (±22px) + GSAP Scroll wrapper (fade)
          ======================================================== */}
      <div
        ref={particlesParallaxRef}
        className="absolute inset-0 z-15 pointer-events-none will-change-transform"
      >
        <div
          ref={particlesScrollRef}
          className="w-full h-full pointer-events-none will-change-opacity"
        >
          <HeroParticles />
        </div>
      </div>

      {/* ========================================================
          LAYER 7: SECTION 3 WORKSPACE (Exact approved skills-workspace.jpg)
          Crossfades in as the notebook zoom peaks, revealing Section 3
          ======================================================== */}
      <div
        ref={skillsWorkspaceRef}
        className="skills-workspace-layer absolute inset-0 pointer-events-none opacity-0 will-change-transform will-change-opacity z-10"
      >
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

        {/* Category-linked subtle environmental responses (5-12% opacity overlays, extremely subtle) */}
        <div className="skills-ambient-programming absolute inset-0 bg-[radial-gradient(ellipse_at_32%_45%,rgba(245,158,11,0.08),transparent_65%)] opacity-0 pointer-events-none will-change-opacity" />
        <div className="skills-ambient-aiml absolute inset-0 bg-[radial-gradient(ellipse_at_35%_65%,rgba(168,85,247,0.11),transparent_65%)] opacity-0 pointer-events-none will-change-opacity" />
        <div className="skills-ambient-web absolute inset-0 bg-[radial-gradient(ellipse_at_65%_35%,rgba(34,211,238,0.09),transparent_65%)] opacity-0 pointer-events-none will-change-opacity" />
        <div className="skills-ambient-data absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,rgba(192,132,252,0.10),transparent_65%)] opacity-0 pointer-events-none will-change-opacity" />
        <div className="skills-ambient-iot absolute inset-0 bg-[radial-gradient(circle_at_32%_75%,rgba(34,211,238,0.10),transparent_60%)] opacity-0 pointer-events-none will-change-opacity" />
        <div className="skills-ambient-cloud absolute inset-0 bg-[radial-gradient(ellipse_at_50%_75%,rgba(56,189,248,0.10),transparent_60%)] opacity-0 pointer-events-none will-change-opacity" />
        <div className="skills-ambient-mobile absolute inset-0 bg-[radial-gradient(ellipse_at_75%_75%,rgba(168,85,247,0.10),transparent_60%)] opacity-0 pointer-events-none will-change-opacity" />

        {/* Top and bottom framing vignettes */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#030508] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#030508] to-transparent" />
      </div>
    </div>
  );
});
