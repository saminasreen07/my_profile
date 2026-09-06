"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface HeroAnimationRefs {
  containerRef: React.RefObject<HTMLElement | null>;
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

export function useHeroAnimation({
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
}: HeroAnimationRefs) {
  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // If user prefers reduced motion, present complete static Hero without motion
      if (prefersReducedMotion) {
        gsap.set(
          [
            ".hero-nav",
            ".hero-salutation",
            ".hero-name",
            ".hero-title",
            ".hero-desc",
            ".hero-cta",
            ".hero-quote",
            ".hero-socials",
            ".hero-section-indicator",
            ".hero-scroll-indicator",
            ".about-stage",
            ".skills-stage",
            ".skills-header",
            ".skill-card",
          ],
          { opacity: 1, y: 0, x: 0, scale: 1 }
        );
        return;
      }

      // ==============================================
      // 1. PAGE LOAD SEQUENTIAL ENTRANCE TIMELINE
      // ==============================================
      const entranceTl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => {
          entranceTl.kill();
        },
      });

      entranceTl
        // 1. Navigation
        .from(".hero-nav", {
          opacity: 0,
          y: -14,
          duration: 0.65,
        })
        // 2. HELLO, I'M
        .from(
          ".hero-salutation",
          {
            opacity: 0,
            y: 12,
            duration: 0.55,
          },
          "-=0.4"
        )
        // 3. Nasreen Sami
        .from(
          ".hero-name",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.38"
        )
        // 4. AI & SOFTWARE ENGINEER
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
          },
          "-=0.4"
        )
        // 5. Description
        .from(
          ".hero-desc",
          {
            opacity: 0,
            y: 14,
            duration: 0.6,
          },
          "-=0.4"
        )
        // 6. Explore My Work button
        .from(
          ".hero-cta",
          {
            opacity: 0,
            y: 12,
            duration: 0.55,
          },
          "-=0.35"
        )
        // 7. Quote
        .from(
          ".hero-quote",
          {
            opacity: 0,
            y: 14,
            duration: 0.65,
          },
          "-=0.35"
        )
        // 8. Social links + Section indicator
        .from(
          [".hero-socials", ".hero-section-indicator"],
          {
            opacity: 0,
            duration: 0.55,
          },
          "-=0.35"
        )
        // 9. Scroll indicator
        .from(
          ".hero-scroll-indicator",
          {
            opacity: 0,
            y: 8,
            duration: 0.55,
          },
          "-=0.3"
        );

      // ========================================================
      // 2. MASTER REVERSIBLE CINEMATIC SCROLL TIMELINE (Scrubbed)
      // ========================================================
      // 8-Phase Seamless Journey:
      // - Phase 1 (0.00 - 0.09): Hero (01) recedes upward
      // - Phase 2 (0.05 - 0.12): Indicator transitions 01 -> 02
      // - Phase 3 (0.04 - 0.13): Living environment & multi-plane camera drift into About
      // - Phase 4 (0.08 - 0.28): About (02) enters and stays in full reading focus
      // - Phase 5 (0.28 - 0.40): About recedes; camera zooms into open notebook on desk (scale 4.2x)
      // - Phase 6 (0.36 - 0.46): Transition through book into Section 3 workspace; Indicator 02 -> 03
      // - Phase 7 (0.42 - 0.48): Section 3 enters: INITIAL STATE with PROGRAMMING active focus
      // - Phase 8 (0.48 - 1.00): The 7-Category Scroll-Driven Storytelling Journey:
      //     Focus 01: PROGRAMMING (0.48 - 0.525)
      //     Focus 02: AI / ML & NLP (0.555 - 0.60)
      //     Focus 03: WEB & SOFTWARE (0.63 - 0.675)
      //     Focus 04: DATA & DATABASES (0.705 - 0.75)
      //     Focus 05: IOT & EMBEDDED (0.78 - 0.825)
      //     Focus 06: CLOUD & DEVOPS (0.855 - 0.90)
      //     Focus 07: MOBILE & INTEGRATION (0.93 - 0.975) -> subtle settle to Section 4
      // Fully scrubbed, bidirectional, and reversible on scroll up!
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=520%",
          pin: true,
          scrub: 0.75,
          anticipatePin: 1,
        },
      });

      // ----------------------------------------------------
      // PHASE 1: STAGGERED HERO CONTENT RECEDING
      // ----------------------------------------------------

      // 1. HELLO, I'M
      scrollTl.fromTo(
        ".hero-salutation",
        { y: 0, opacity: 1 },
        {
          keyframes: [
            { y: 0, opacity: 1, duration: 0.02 },
            { y: -20, opacity: 0, duration: 0.07, ease: "power1.inOut" },
            { y: -20, opacity: 0, duration: 0.91 },
          ],
          immediateRender: false,
        },
        0
      );

      // 2. Nasreen Sami
      scrollTl.fromTo(
        ".hero-name",
        { y: 0, opacity: 1 },
        {
          keyframes: [
            { y: 0, opacity: 1, duration: 0.025 },
            { y: -30, opacity: 0, duration: 0.075, ease: "power1.inOut" },
            { y: -30, opacity: 0, duration: 0.90 },
          ],
          immediateRender: false,
        },
        0
      );

      // 3. AI & SOFTWARE ENGINEER
      scrollTl.fromTo(
        ".hero-title",
        { y: 0, opacity: 1 },
        {
          keyframes: [
            { y: 0, opacity: 1, duration: 0.035 },
            { y: -24, opacity: 0, duration: 0.075, ease: "power1.inOut" },
            { y: -24, opacity: 0, duration: 0.89 },
          ],
          immediateRender: false,
        },
        0
      );

      // 4. Description
      scrollTl.fromTo(
        ".hero-desc",
        { y: 0, opacity: 1 },
        {
          keyframes: [
            { y: 0, opacity: 1, duration: 0.04 },
            { y: -20, opacity: 0, duration: 0.075, ease: "power1.inOut" },
            { y: -20, opacity: 0, duration: 0.885 },
          ],
          immediateRender: false,
        },
        0
      );

      // 5. Explore My Work button
      scrollTl.fromTo(
        ".hero-cta",
        { opacity: 1, y: 0 },
        {
          keyframes: [
            { opacity: 1, y: 0, duration: 0.045 },
            { opacity: 0, y: -10, duration: 0.07, ease: "power1.inOut" },
            { opacity: 0, y: -10, duration: 0.885 },
          ],
          immediateRender: false,
        },
        0
      );

      // 6. Social links, Scroll Indicator & Hero Footer
      scrollTl.fromTo(
        [".hero-socials", ".hero-scroll-indicator", ".hero-footer"],
        { opacity: 1 },
        {
          keyframes: [
            { opacity: 1, duration: 0.015 },
            { opacity: 0, duration: 0.065, ease: "power1.inOut" },
            { opacity: 0, duration: 0.92 },
          ],
          immediateRender: false,
        },
        0
      );

      // 7. Hero Quote: drifts into notebook area and fades
      scrollTl.fromTo(
        ".hero-quote",
        { x: 0, y: 0, opacity: 1 },
        {
          keyframes: [
            { x: 0, y: 0, opacity: 1, duration: 0.03 },
            { x: 16, y: 26, opacity: 0, duration: 0.08, ease: "power1.inOut" },
            { x: 16, y: 26, opacity: 0, duration: 0.89 },
          ],
          immediateRender: false,
        },
        0
      );

      // 8. Hero Content Stage pointer events
      scrollTl.fromTo(
        ".hero-content-stage",
        { pointerEvents: "auto" },
        {
          keyframes: [
            { pointerEvents: "auto", duration: 0.09 },
            { pointerEvents: "none", duration: 0.91 },
          ],
          immediateRender: false,
        },
        0
      );

      // ----------------------------------------------------
      // PHASE 2 & 6: SECTION INDICATOR TRANSITIONS (01 -> 02 -> 03)
      // ----------------------------------------------------

      // Dot 01: scales down and fades out
      scrollTl.fromTo(
        ".indicator-dot-01",
        { opacity: 1, scale: 1 },
        {
          keyframes: [
            { opacity: 1, scale: 1, duration: 0.05 },
            { opacity: 0, scale: 0.5, duration: 0.06, ease: "power1.inOut" },
            { opacity: 0, scale: 0.5, duration: 0.89 },
          ],
          immediateRender: false,
        },
        0
      );

      // Label 01: de-emphasizes to muted
      scrollTl.fromTo(
        ".indicator-label-01",
        { opacity: 1 },
        {
          keyframes: [
            { opacity: 1, duration: 0.05 },
            { opacity: 0.45, duration: 0.06, ease: "power1.inOut" },
            { opacity: 0.45, duration: 0.89 },
          ],
          immediateRender: false,
        },
        0
      );

      // Line 01: fills downwards between 01 and 02
      scrollTl.fromTo(
        ".indicator-line-01",
        { scaleY: 1 },
        {
          keyframes: [
            { scaleY: 1, duration: 0.04 },
            { scaleY: 1.35, duration: 0.08, ease: "none" },
            { scaleY: 1.35, duration: 0.88 },
          ],
          transformOrigin: "top center",
          immediateRender: false,
        },
        0
      );

      // Label 02: brightens from muted to active, then de-emphasizes as 03 activates
      scrollTl.fromTo(
        ".indicator-label-02",
        { opacity: 0.45 },
        {
          keyframes: [
            { opacity: 0.45, duration: 0.06 },
            { opacity: 1, duration: 0.07, ease: "power1.out" },
            { opacity: 1, duration: 0.17 },
            { opacity: 0.45, duration: 0.06, ease: "power1.inOut" },
            { opacity: 0.45, duration: 0.64 },
          ],
          immediateRender: false,
        },
        0
      );

      // Dot 02: emerges with active halo, then fades/scales down as 03 activates
      scrollTl.fromTo(
        ".indicator-dot-02",
        { opacity: 0, scale: 0.5 },
        {
          keyframes: [
            { opacity: 0, scale: 0.5, duration: 0.07 },
            { opacity: 1, scale: 1, duration: 0.07, ease: "power1.out" },
            { opacity: 1, scale: 1, duration: 0.16 },
            { opacity: 0, scale: 0.5, duration: 0.06, ease: "power1.inOut" },
            { opacity: 0, scale: 0.5, duration: 0.64 },
          ],
          immediateRender: false,
        },
        0
      );

      // Line 02: fills downwards between 02 and 03
      scrollTl.fromTo(
        ".indicator-line-02",
        { scaleY: 0 },
        {
          keyframes: [
            { scaleY: 0, duration: 0.28 },
            { scaleY: 1.35, duration: 0.07, ease: "none" },
            { scaleY: 1.35, duration: 0.65 },
          ],
          transformOrigin: "top center",
          immediateRender: false,
        },
        0
      );

      // Label 03: muted during Hero/About, brightens to active throughout Section 3
      scrollTl.fromTo(
        ".indicator-label-03",
        { opacity: 0.45 },
        {
          keyframes: [
            { opacity: 0.45, duration: 0.38 },
            { opacity: 1, duration: 0.08, ease: "power1.out" },
            { opacity: 1, duration: 0.54 }, // Remains steadily active through all of Section 3!
          ],
          immediateRender: false,
        },
        0
      );

      // Dot 03: emerges with active cyan halo and stays steadily active throughout Section 3
      scrollTl.fromTo(
        ".indicator-dot-03",
        { opacity: 0, scale: 0.5 },
        {
          keyframes: [
            { opacity: 0, scale: 0.5, duration: 0.38 },
            { opacity: 1, scale: 1, duration: 0.08, ease: "power1.out" },
            { opacity: 1, scale: 1, duration: 0.54 }, // Remains steadily active through all of Section 3!
          ],
          immediateRender: false,
        },
        0
      );

      // ----------------------------------------------------
      // PHASE 3 & 5: CAMERA DEPTH, DRIFT & THE BOOK ZOOM
      // ----------------------------------------------------

      // Layer 0: Distant City Atmosphere
      if (farScrollRef?.current) {
        scrollTl.fromTo(
          farScrollRef.current,
          { y: 0, scale: 1, opacity: 1 },
          {
            keyframes: [
              { y: 0, scale: 1, opacity: 1, duration: 0.05 },
              { y: -10, scale: 1.018, opacity: 1, duration: 0.13, ease: "sine.inOut" },
              { y: -10, scale: 1.018, opacity: 1, duration: 0.06 },
              { y: -16, scale: 1.06, opacity: 0, duration: 0.08, ease: "power1.inOut" },
              { y: -16, scale: 1.06, opacity: 0, duration: 0.68 },
            ],
            immediateRender: false,
          },
          0
        );
      }

      // Layer 1: Workspace Photographic Base (drifts, then zooms into notebook at 70% 86%)
      if (workspaceScrollRef?.current) {
        scrollTl.fromTo(
          workspaceScrollRef.current,
          { y: 0, scale: 1, opacity: 1, filter: "blur(0px)" },
          {
            keyframes: [
              { y: 0, scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.04 },
              { y: -22, scale: 1.038, opacity: 1, filter: "blur(0px)", duration: 0.11, ease: "sine.inOut" },
              { y: -22, scale: 1.038, opacity: 1, filter: "blur(0px)", duration: 0.08 }, // Steady during About
              // BOOK ZOOM: Camera approaches notebook (scale surges to 4.2x)
              { y: -10, scale: 4.20, opacity: 1, filter: "blur(2.5px)", duration: 0.09, ease: "power2.inOut" },
              // Transition through notebook: fades out as skills workspace appears
              { y: -10, scale: 4.50, opacity: 0, filter: "blur(4px)", duration: 0.04, ease: "power1.inOut" },
              { y: -10, scale: 4.50, opacity: 0, filter: "blur(4px)", duration: 0.64 },
            ],
            transformOrigin: "70% 86%",
            immediateRender: false,
          },
          0
        );
      }

      // Layer 2: Laptop Screen Radiance & Surface Reflection
      if (laptopScrollRef?.current) {
        scrollTl.fromTo(
          laptopScrollRef.current,
          { y: 0, scale: 1, opacity: 1 },
          {
            keyframes: [
              { y: 0, scale: 1, opacity: 1, duration: 0.04 },
              { y: -14, scale: 1.025, opacity: 1.20, duration: 0.07, ease: "sine.inOut" },
              { y: -28, scale: 1.048, opacity: 0.65, duration: 0.07, ease: "power1.inOut" },
              { y: -28, scale: 1.048, opacity: 0.65, duration: 0.06 },
              { y: -34, scale: 1.15, opacity: 0, duration: 0.07, ease: "power1.inOut" },
              { y: -34, scale: 1.15, opacity: 0, duration: 0.69 },
            ],
            immediateRender: false,
          },
          0
        );
      }

      // Layer 3: Digital Technology & Flowing Data Streams
      if (digitalScrollRef?.current) {
        scrollTl.fromTo(
          digitalScrollRef.current,
          { opacity: 0.80, x: 0, y: 0, scale: 1 },
          {
            keyframes: [
              { opacity: 0.80, x: 0, y: 0, scale: 1, duration: 0.04 },
              { opacity: 0.95, x: -12, y: -14, scale: 1.026, duration: 0.07, ease: "sine.inOut" },
              { opacity: 0.52, x: -26, y: -34, scale: 1.055, duration: 0.07, ease: "power1.inOut" },
              { opacity: 0.52, x: -26, y: -34, scale: 1.055, duration: 0.06 },
              { opacity: 0, x: -36, y: -45, scale: 1.14, duration: 0.07, ease: "power1.inOut" },
              { opacity: 0, x: -36, y: -45, scale: 1.14, duration: 0.69 },
            ],
            immediateRender: false,
          },
          0
        );
      }

      // Layer 6: Warm Desk Lamp Ambient Glow
      if (warmGlowRef?.current) {
        scrollTl.fromTo(
          warmGlowRef.current,
          { opacity: 1 },
          {
            keyframes: [
              { opacity: 1, duration: 0.04 },
              { opacity: 0.55, duration: 0.10, ease: "power1.inOut" },
              { opacity: 0.55, duration: 0.10 },
              { opacity: 0, duration: 0.08, ease: "power1.inOut" },
              { opacity: 0, duration: 0.68 },
            ],
            immediateRender: false,
          },
          0
        );
      }

      // Dark overlay
      if (darkOverlayRef?.current) {
        scrollTl.fromTo(
          darkOverlayRef.current,
          { opacity: 0 },
          {
            keyframes: [
              { opacity: 0, duration: 0.04 },
              { opacity: 0.40, duration: 0.11, ease: "power1.inOut" },
              { opacity: 0.40, duration: 0.09 },
              { opacity: 0, duration: 0.07, ease: "power1.inOut" },
              { opacity: 0, duration: 0.69 },
            ],
            immediateRender: false,
          },
          0
        );
      }

      // Central Digital Atmosphere Bloom
      if (digitalAtmosphereRef?.current) {
        scrollTl.fromTo(
          digitalAtmosphereRef.current,
          { opacity: 0 },
          {
            keyframes: [
              { opacity: 0, duration: 0.05 },
              { opacity: 0.35, duration: 0.10, ease: "power1.inOut" },
              { opacity: 0.35, duration: 0.09 },
              { opacity: 0, duration: 0.07, ease: "power1.inOut" },
              { opacity: 0, duration: 0.69 },
            ],
            immediateRender: false,
          },
          0
        );
      }

      // Layer 5: Ambient Micro-Particles
      if (particlesScrollRef?.current) {
        scrollTl.fromTo(
          particlesScrollRef.current,
          { opacity: 1, y: 0 },
          {
            keyframes: [
              { opacity: 1, y: 0, duration: 0.04 },
              { opacity: 1.10, y: -16, duration: 0.07, ease: "sine.inOut" },
              { opacity: 0.68, y: -38, duration: 0.07, ease: "power1.inOut" },
              { opacity: 0.68, y: -38, duration: 0.06 },
              { opacity: 0, y: -50, duration: 0.07, ease: "power1.inOut" },
              { opacity: 0, y: -50, duration: 0.69 },
            ],
            immediateRender: false,
          },
          0
        );
      }

      // ----------------------------------------------------
      // PHASE 4: ABOUT CONTENT ENTRANCE & DEPARTURE
      // ----------------------------------------------------

      // About Stage Wrapper: enters into full focus, then recedes as camera zooms into notebook
      scrollTl.fromTo(
        ".about-stage",
        { opacity: 0, y: 22, pointerEvents: "none" },
        {
          keyframes: [
            { opacity: 0, y: 22, pointerEvents: "none", duration: 0.06 },
            { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.09, ease: "power1.out" },
            { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.08 }, // Steady reading focus in About
            { opacity: 0, y: -24, pointerEvents: "none", duration: 0.07, ease: "power1.inOut" }, // Recedes into zoom
            { opacity: 0, y: -24, pointerEvents: "none", duration: 0.70 },
          ],
          immediateRender: false,
        },
        0
      );

      // Section Label: 02 / ABOUT
      scrollTl.fromTo(
        ".about-label",
        { opacity: 0, y: 10 },
        {
          keyframes: [
            { opacity: 0, y: 10, duration: 0.07 },
            { opacity: 1, y: 0, duration: 0.07, ease: "power1.out" },
            { opacity: 1, y: 0, duration: 0.86 },
          ],
          immediateRender: false,
        },
        0
      );

      // Main Headline: I BUILD WITH CURIOSITY. I SOLVE WITH CODE.
      scrollTl.fromTo(
        ".about-headline",
        { opacity: 0, y: 18 },
        {
          keyframes: [
            { opacity: 0, y: 18, duration: 0.075 },
            { opacity: 1, y: 0, duration: 0.08, ease: "power1.out" },
            { opacity: 1, y: 0, duration: 0.845 },
          ],
          immediateRender: false,
        },
        0
      );

      // Body Text: I'm Nasreen Sami...
      scrollTl.fromTo(
        ".about-body",
        { opacity: 0, y: 16 },
        {
          keyframes: [
            { opacity: 0, y: 16, duration: 0.085 },
            { opacity: 1, y: 0, duration: 0.08, ease: "power1.out" },
            { opacity: 1, y: 0, duration: 0.835 },
          ],
          immediateRender: false,
        },
        0
      );

      // Supporting Statement: CURIOUS BY NATURE. BUILT TO CREATE.
      scrollTl.fromTo(
        ".about-supporting",
        { opacity: 0, y: 12 },
        {
          keyframes: [
            { opacity: 0, y: 12, duration: 0.10 },
            { opacity: 1, y: 0, duration: 0.08, ease: "power1.out" },
            { opacity: 1, y: 0, duration: 0.82 },
          ],
          immediateRender: false,
        },
        0
      );

      // Hero & About Stage Wrapper: fades out cleanly as camera zooms into notebook
      scrollTl.fromTo(
        ".hero-about-stage",
        { opacity: 1, pointerEvents: "auto" },
        {
          keyframes: [
            { opacity: 1, pointerEvents: "auto", duration: 0.23 },
            { opacity: 0, pointerEvents: "none", duration: 0.07, ease: "power1.inOut" },
            { opacity: 0, pointerEvents: "none", duration: 0.70 },
          ],
          immediateRender: false,
        },
        0
      );

      // ----------------------------------------------------
      // PHASE 6 & 8: SECTION 3 WORKSPACE BACKGROUND & CAMERA MOTION
      // ----------------------------------------------------

      // Section 3 Workspace Background (skills-workspace.jpg):
      // Crossfades in as notebook zoom peaks; then executes a very slow, continuous,
      // scroll-linked camera depth movement and gentle drift through the technical workspace.
      if (skillsWorkspaceRef?.current) {
        scrollTl.fromTo(
          skillsWorkspaceRef.current,
          { opacity: 0, scale: 1.08, x: 0, y: 0 },
          {
            keyframes: [
              { opacity: 0, scale: 1.08, x: 0, y: 0, duration: 0.38 },
              // Crossfade in at Section 3 entry
              { opacity: 1, scale: 1.00, x: 0, y: 0, duration: 0.08, ease: "power2.out" },
              // Focus 01 (Programming): centered laptop/desk base
              { opacity: 1, scale: 1.005, x: 0, y: 0, duration: 0.065 },
              // Focus 02 (AI / ML & NLP): subtle camera drift
              { opacity: 1, scale: 1.010, x: -3.5, y: -2.5, duration: 0.075, ease: "sine.inOut" },
              // Focus 03 (Web & Software): subtle shift toward code workspace
              { opacity: 1, scale: 1.015, x: 3.0, y: -1.8, duration: 0.075, ease: "sine.inOut" },
              // Focus 04 (Data & Databases): subtle camera focus toward notebook/charts
              { opacity: 1, scale: 1.020, x: -3.5, y: 2.8, duration: 0.075, ease: "sine.inOut" },
              // Focus 05 (IoT & Embedded): subtle pulse / center alignment
              { opacity: 1, scale: 1.025, x: 0, y: 1.8, duration: 0.075, ease: "sine.inOut" },
              // Focus 06 (Cloud & DevOps): subtle drift toward upper window atmosphere
              { opacity: 1, scale: 1.030, x: 2.8, y: -2.8, duration: 0.075, ease: "sine.inOut" },
              // Focus 07 (Mobile & Integration) + outro settle
              { opacity: 1, scale: 1.035, x: 0, y: 0, duration: 0.100, ease: "sine.inOut" },
            ],
            immediateRender: false,
          },
          0
        );
      }

      // ----------------------------------------------------
      // PHASE 7: SECTION 3 STAGE ENTRANCE (Anchored & Stable)
      // ----------------------------------------------------

      // Section 3 Main Stage UI: enters smoothly and stays interactive
      scrollTl.fromTo(
        ".skills-stage",
        { opacity: 0, y: 18, pointerEvents: "none" },
        {
          keyframes: [
            { opacity: 0, y: 18, pointerEvents: "none", duration: 0.42 },
            { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.06, ease: "power2.out" },
            { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.52 }, // Fully active & stable!
          ],
          immediateRender: false,
        },
        0
      );

      // Section 3 Header (03 / SKILLS + WHAT I BUILD WITH + Subhead):
      // Stays completely stable and readable as an anchor throughout the 7 category focus shifts.
      scrollTl.fromTo(
        ".skills-header",
        { opacity: 0, y: 10 },
        {
          keyframes: [
            { opacity: 0, y: 10, duration: 0.43 },
            { opacity: 1, y: 0, duration: 0.05, ease: "power2.out" },
            { opacity: 1, y: 0, duration: 0.52 }, // Anchored throughout!
          ],
          immediateRender: false,
        },
        0
      );

      // ----------------------------------------------------
      // PHASE 8: THE 7-CATEGORY SCROLL-DRIVEN FOCUS SYSTEM
      // All categories remain visible in the composition.
      // Active category becomes 100% bright, scale 1.03, sharp, prominent.
      // Inactive categories remain readable at 0.45 opacity in existing positions.
      // ----------------------------------------------------

      // CATEGORY 1: PROGRAMMING (Initial Active Focus at Section 3 entry!)
      scrollTl.fromTo(
        ".skill-card-programming",
        { opacity: 0, scale: 1.00 },
        {
          keyframes: [
            { opacity: 0, scale: 1.00, duration: 0.44 },
            // Initial Active Focus when Section 3 appears:
            { opacity: 1.00, scale: 1.03, duration: 0.04, ease: "power2.out" },
            // Focus 01 plateau:
            { opacity: 1.00, scale: 1.03, duration: 0.045 },
            // Transitions to secondary as AI/ML activates:
            { opacity: 0.45, scale: 1.00, duration: 0.030, ease: "power1.inOut" },
            // Remains visible as part of the composition:
            { opacity: 0.45, scale: 1.00, duration: 0.445 },
          ],
          transformOrigin: "left center",
          immediateRender: false,
        },
        0
      );

      // CATEGORY 2: AI / ML & NLP (Focus 02)
      scrollTl.fromTo(
        ".skill-card-ai-ml",
        { opacity: 0, scale: 1.00 },
        {
          keyframes: [
            { opacity: 0, scale: 1.00, duration: 0.44 },
            // Visible secondary at Section 3 entry:
            { opacity: 0.45, scale: 1.00, duration: 0.04, ease: "power2.out" },
            { opacity: 0.45, scale: 1.00, duration: 0.045 },
            // Rises into Focus 02 active:
            { opacity: 1.00, scale: 1.03, duration: 0.030, ease: "power1.inOut" },
            // Focus 02 plateau:
            { opacity: 1.00, scale: 1.03, duration: 0.045 },
            // Recedes to secondary as Web activates:
            { opacity: 0.45, scale: 1.00, duration: 0.030, ease: "power1.inOut" },
            // Remains visible:
            { opacity: 0.45, scale: 1.00, duration: 0.370 },
          ],
          transformOrigin: "left center",
          immediateRender: false,
        },
        0
      );

      // CATEGORIES 3 & 4: WEB & SOFTWARE (Web Tech + Frameworks) (Focus 03)
      scrollTl.fromTo(
        [".skill-card-web-tech", ".skill-card-frameworks"],
        { opacity: 0, scale: 1.00 },
        {
          keyframes: [
            { opacity: 0, scale: 1.00, duration: 0.44 },
            // Visible secondary at Section 3 entry:
            { opacity: 0.45, scale: 1.00, duration: 0.04, ease: "power2.out" },
            { opacity: 0.45, scale: 1.00, duration: 0.120 },
            // Rises into Focus 03 active:
            { opacity: 1.00, scale: 1.03, duration: 0.030, ease: "power1.inOut" },
            // Focus 03 plateau:
            { opacity: 1.00, scale: 1.03, duration: 0.045 },
            // Recedes to secondary as Data activates:
            { opacity: 0.45, scale: 1.00, duration: 0.030, ease: "power1.inOut" },
            // Remains visible:
            { opacity: 0.45, scale: 1.00, duration: 0.295 },
          ],
          transformOrigin: "center center",
          immediateRender: false,
        },
        0
      );

      // CATEGORIES 5 & 6: DATA & DATABASES (Databases + Data Viz) (Focus 04)
      scrollTl.fromTo(
        [".skill-card-databases", ".skill-card-data-viz"],
        { opacity: 0, scale: 1.00 },
        {
          keyframes: [
            { opacity: 0, scale: 1.00, duration: 0.44 },
            // Visible secondary at Section 3 entry:
            { opacity: 0.45, scale: 1.00, duration: 0.04, ease: "power2.out" },
            { opacity: 0.45, scale: 1.00, duration: 0.195 },
            // Rises into Focus 04 active:
            { opacity: 1.00, scale: 1.03, duration: 0.030, ease: "power1.inOut" },
            // Focus 04 plateau:
            { opacity: 1.00, scale: 1.03, duration: 0.045 },
            // Recedes to secondary as IoT activates:
            { opacity: 0.45, scale: 1.00, duration: 0.030, ease: "power1.inOut" },
            // Remains visible:
            { opacity: 0.45, scale: 1.00, duration: 0.220 },
          ],
          transformOrigin: "center center",
          immediateRender: false,
        },
        0
      );

      // CATEGORY 7: IOT & EMBEDDED SYSTEMS (Focus 05)
      scrollTl.fromTo(
        ".skill-card-iot",
        { opacity: 0, scale: 1.00 },
        {
          keyframes: [
            { opacity: 0, scale: 1.00, duration: 0.44 },
            // Visible secondary at Section 3 entry:
            { opacity: 0.45, scale: 1.00, duration: 0.04, ease: "power2.out" },
            { opacity: 0.45, scale: 1.00, duration: 0.270 },
            // Rises into Focus 05 active:
            { opacity: 1.00, scale: 1.03, duration: 0.030, ease: "power1.inOut" },
            // Focus 05 plateau:
            { opacity: 1.00, scale: 1.03, duration: 0.045 },
            // Recedes to secondary as Cloud activates:
            { opacity: 0.45, scale: 1.00, duration: 0.030, ease: "power1.inOut" },
            // Remains visible:
            { opacity: 0.45, scale: 1.00, duration: 0.145 },
          ],
          transformOrigin: "left center",
          immediateRender: false,
        },
        0
      );

      // CATEGORY 8: CLOUD & DEVOPS (Focus 06)
      scrollTl.fromTo(
        ".skill-card-cloud",
        { opacity: 0, scale: 1.00 },
        {
          keyframes: [
            { opacity: 0, scale: 1.00, duration: 0.44 },
            // Visible secondary at Section 3 entry:
            { opacity: 0.45, scale: 1.00, duration: 0.04, ease: "power2.out" },
            { opacity: 0.45, scale: 1.00, duration: 0.345 },
            // Rises into Focus 06 active:
            { opacity: 1.00, scale: 1.03, duration: 0.030, ease: "power1.inOut" },
            // Focus 06 plateau:
            { opacity: 1.00, scale: 1.03, duration: 0.045 },
            // Recedes to secondary as Mobile activates:
            { opacity: 0.45, scale: 1.00, duration: 0.030, ease: "power1.inOut" },
            // Remains visible:
            { opacity: 0.45, scale: 1.00, duration: 0.070 },
          ],
          transformOrigin: "center center",
          immediateRender: false,
        },
        0
      );

      // CATEGORY 9: MOBILE & INTEGRATION (Focus 07)
      scrollTl.fromTo(
        ".skill-card-mobile",
        { opacity: 0, scale: 1.00 },
        {
          keyframes: [
            { opacity: 0, scale: 1.00, duration: 0.44 },
            // Visible secondary at Section 3 entry:
            { opacity: 0.45, scale: 1.00, duration: 0.04, ease: "power2.out" },
            { opacity: 0.45, scale: 1.00, duration: 0.420 },
            // Rises into Focus 07 active:
            { opacity: 1.00, scale: 1.03, duration: 0.030, ease: "power1.inOut" },
            // Focus 07 plateau:
            { opacity: 1.00, scale: 1.03, duration: 0.045 },
            // Gently softens toward Section 4 transition outro:
            { opacity: 0.85, scale: 1.01, duration: 0.025, ease: "power1.inOut" },
          ],
          transformOrigin: "right center",
          immediateRender: false,
        },
        0
      );

      // ----------------------------------------------------
      // CATEGORY-LINKED SUBTLE ENVIRONMENTAL ATMOSPHERE OVERLAYS
      // Very subtle ambient tints (5-12% opacity) that respond to each focus state.
      // ----------------------------------------------------

      // 1. Programming: subtle warm laptop code aura
      scrollTl.fromTo(
        ".skills-ambient-programming",
        { opacity: 0 },
        {
          keyframes: [
            { opacity: 0, duration: 0.44 },
            { opacity: 1, duration: 0.04 },
            { opacity: 1, duration: 0.045 },
            { opacity: 0, duration: 0.030 },
            { opacity: 0, duration: 0.445 },
          ],
          immediateRender: false,
        },
        0
      );

      // 2. AI / ML: subtle blue/violet digital atmosphere
      scrollTl.fromTo(
        ".skills-ambient-aiml",
        { opacity: 0 },
        {
          keyframes: [
            { opacity: 0, duration: 0.525 },
            { opacity: 1, duration: 0.030 },
            { opacity: 1, duration: 0.045 },
            { opacity: 0, duration: 0.030 },
            { opacity: 0, duration: 0.370 },
          ],
          immediateRender: false,
        },
        0
      );

      // 3. Web & Software: subtle workspace laptop presence
      scrollTl.fromTo(
        ".skills-ambient-web",
        { opacity: 0 },
        {
          keyframes: [
            { opacity: 0, duration: 0.600 },
            { opacity: 1, duration: 0.030 },
            { opacity: 1, duration: 0.045 },
            { opacity: 0, duration: 0.030 },
            { opacity: 0, duration: 0.295 },
          ],
          immediateRender: false,
        },
        0
      );

      // 4. Data & Databases: subtle notebook/data workspace warmth
      scrollTl.fromTo(
        ".skills-ambient-data",
        { opacity: 0 },
        {
          keyframes: [
            { opacity: 0, duration: 0.675 },
            { opacity: 1, duration: 0.030 },
            { opacity: 1, duration: 0.045 },
            { opacity: 0, duration: 0.030 },
            { opacity: 0, duration: 0.220 },
          ],
          immediateRender: false,
        },
        0
      );

      // 5. IoT & Embedded: subtle digital pulse
      scrollTl.fromTo(
        ".skills-ambient-iot",
        { opacity: 0 },
        {
          keyframes: [
            { opacity: 0, duration: 0.750 },
            { opacity: 1, duration: 0.030 },
            { opacity: 1, duration: 0.045 },
            { opacity: 0, duration: 0.030 },
            { opacity: 0, duration: 0.145 },
          ],
          immediateRender: false,
        },
        0
      );

      // 6. Cloud & DevOps: subtle distant digital atmosphere
      scrollTl.fromTo(
        ".skills-ambient-cloud",
        { opacity: 0 },
        {
          keyframes: [
            { opacity: 0, duration: 0.825 },
            { opacity: 1, duration: 0.030 },
            { opacity: 1, duration: 0.045 },
            { opacity: 0, duration: 0.030 },
            { opacity: 0, duration: 0.070 },
          ],
          immediateRender: false,
        },
        0
      );

      // 7. Mobile & Integration: subtle blue/indigo accent
      scrollTl.fromTo(
        ".skills-ambient-mobile",
        { opacity: 0 },
        {
          keyframes: [
            { opacity: 0, duration: 0.900 },
            { opacity: 1, duration: 0.030 },
            { opacity: 1, duration: 0.045 },
            { opacity: 0.50, duration: 0.025 },
          ],
          immediateRender: false,
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, [
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
  ]);
}

