"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface HeroAnimationRefs {
  containerRef: React.RefObject<HTMLElement | null>;
  workspaceScrollRef?: React.RefObject<HTMLDivElement | null>;
  digitalScrollRef?: React.RefObject<HTMLDivElement | null>;
  particlesScrollRef?: React.RefObject<HTMLDivElement | null>;
  darkOverlayRef?: React.RefObject<HTMLDivElement | null>;
  warmGlowRef?: React.RefObject<HTMLDivElement | null>;
  digitalAtmosphereRef?: React.RefObject<HTMLDivElement | null>;
}

export function useHeroAnimation({
  containerRef,
  workspaceScrollRef,
  digitalScrollRef,
  particlesScrollRef,
  darkOverlayRef,
  warmGlowRef,
  digitalAtmosphereRef,
}: HeroAnimationRefs) {
  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // If user prefers reduced motion, present the complete static Hero without motion
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
          ],
          { opacity: 1, y: 0, x: 0 }
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
      // 2. FULLY REVERSIBLE SCROLL STORYTELLING TIMELINE (Scrubbed)
      // ========================================================
      // 4-Phase Progression (0% -> 25% -> 50% -> 75% -> 100%):
      // Phase 1: Text Departs (staggered float & fade)
      // Phase 2: Environment Takes Over (workspace prominent, tech activates)
      // Phase 3: Digital Transformation (darkening, data streams shift to center)
      // Phase 4: Minimal End State (black + subtle digital atmosphere)
      //
      // Starting all tweens at timestamp 0 with explicit keyframes ensures
      // that scrolling back to the top (time 0) returns every element
      // seamlessly to 100% opacity and exact baseline positions.
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=130%",
          pin: true,
          scrub: 0.75,
          anticipatePin: 1,
        },
      });

      // ----------------------------------------------------
      // PHASE 1: STAGGERED TEXT DEPARTURES
      // ----------------------------------------------------

      // 1. HELLO, I'M: floats upward & fades (starts at 0.05, done by 0.33)
      scrollTl.fromTo(
        ".hero-salutation",
        { y: 0, opacity: 1 },
        {
          keyframes: [
            { y: 0, opacity: 1, duration: 0.05 },
            { y: -26, opacity: 0, duration: 0.28, ease: "power1.inOut" },
          ],
          immediateRender: false,
        },
        0
      );

      // 2. Nasreen Sami: floats upward & fades (starts at 0.09, done by 0.41)
      scrollTl.fromTo(
        ".hero-name",
        { y: 0, opacity: 1 },
        {
          keyframes: [
            { y: 0, opacity: 1, duration: 0.09 },
            { y: -42, opacity: 0, duration: 0.32, ease: "power1.inOut" },
          ],
          immediateRender: false,
        },
        0
      );

      // 3. AI & SOFTWARE ENGINEER: follows slightly later (starts at 0.14, done by 0.46)
      scrollTl.fromTo(
        ".hero-title",
        { y: 0, opacity: 1 },
        {
          keyframes: [
            { y: 0, opacity: 1, duration: 0.14 },
            { y: -32, opacity: 0, duration: 0.32, ease: "power1.inOut" },
          ],
          immediateRender: false,
        },
        0
      );

      // 4. Description: gently moves upward & fades (starts at 0.18, done by 0.50)
      scrollTl.fromTo(
        ".hero-desc",
        { y: 0, opacity: 1 },
        {
          keyframes: [
            { y: 0, opacity: 1, duration: 0.18 },
            { y: -26, opacity: 0, duration: 0.32, ease: "power1.inOut" },
          ],
          immediateRender: false,
        },
        0
      );

      // 5. Explore My Work button: fades out (starts at 0.20, done by 0.48)
      scrollTl.fromTo(
        ".hero-cta",
        { opacity: 1, y: 0 },
        {
          keyframes: [
            { opacity: 1, y: 0, duration: 0.20 },
            { opacity: 0, y: -12, duration: 0.28, ease: "power1.inOut" },
          ],
          immediateRender: false,
        },
        0
      );

      // 6. Social links & Scroll Indicator: fade early in Phase 1 (done by 0.27)
      scrollTl.fromTo(
        [".hero-socials", ".hero-scroll-indicator"],
        { opacity: 1 },
        {
          keyframes: [
            { opacity: 1, duration: 0.05 },
            { opacity: 0, duration: 0.22, ease: "power1.inOut" },
          ],
          immediateRender: false,
        },
        0
      );

      // 7. Section indicator (01): fades out smoothly (done by 0.35)
      scrollTl.fromTo(
        ".hero-section-indicator",
        { opacity: 1 },
        {
          keyframes: [
            { opacity: 1, duration: 0.10 },
            { opacity: 0, duration: 0.25, ease: "power1.inOut" },
          ],
          immediateRender: false,
        },
        0
      );

      // 8. Quote: drifts downward/right and fades gently (starts at 0.16, done by 0.50)
      scrollTl.fromTo(
        ".hero-quote",
        { x: 0, y: 0, opacity: 1 },
        {
          keyframes: [
            { x: 0, y: 0, opacity: 1, duration: 0.16 },
            { x: 18, y: 32, opacity: 0, duration: 0.34, ease: "power1.inOut" },
          ],
          immediateRender: false,
        },
        0
      );

      // 9. Section progress vertical line expands slightly during scroll
      scrollTl.fromTo(
        ".hero-progress-line",
        { scaleY: 1 },
        {
          keyframes: [
            { scaleY: 1, duration: 0.1 },
            { scaleY: 1.5, duration: 0.4, ease: "none" },
          ],
          transformOrigin: "top center",
          immediateRender: false,
        },
        0
      );

      // ----------------------------------------------------
      // PHASE 2 & 3: ENVIRONMENT TAKES OVER & DIGITAL TRANSFORMATION
      // ----------------------------------------------------

      // Workspace Inner Container: shifts subtly and scales as environment takes prominence
      if (workspaceScrollRef?.current) {
        scrollTl.fromTo(
          workspaceScrollRef.current,
          { y: 0, scale: 1 },
          {
            keyframes: [
              { y: 0, scale: 1, duration: 0.25 },
              { y: -12, scale: 1.025, duration: 0.35, ease: "sine.inOut" },
              { y: -24, scale: 1.045, duration: 0.40, ease: "none" },
            ],
            immediateRender: false,
          },
          0
        );
      }

      // Warm Desk Lamp Ambient Glow: softens in Phase 2, dims in Phase 3, fades in Phase 4
      if (warmGlowRef?.current) {
        scrollTl.fromTo(
          warmGlowRef.current,
          { opacity: 1 },
          {
            keyframes: [
              { opacity: 1, duration: 0.30 },
              { opacity: 0.35, duration: 0.40, ease: "power1.inOut" },
              { opacity: 0, duration: 0.30, ease: "power1.out" },
            ],
            immediateRender: false,
          },
          0
        );
      }

      // Dark Overlay: gradually brings the workspace into deep shadow (Phase 3 & 4)
      if (darkOverlayRef?.current) {
        scrollTl.fromTo(
          darkOverlayRef.current,
          { opacity: 0 },
          {
            keyframes: [
              { opacity: 0, duration: 0.25 },
              { opacity: 0.35, duration: 0.30, ease: "power1.inOut" },
              { opacity: 0.85, duration: 0.30, ease: "power1.inOut" },
              { opacity: 0.98, duration: 0.15, ease: "power1.out" },
            ],
            immediateRender: false,
          },
          0
        );
      }

      // Digital Technology Layer: becomes more prominent, shifts toward center, leaves minimal traces at end
      if (digitalScrollRef?.current) {
        scrollTl.fromTo(
          digitalScrollRef.current,
          { opacity: 0.75, x: 0, scale: 1 },
          {
            keyframes: [
              { opacity: 0.75, x: 0, scale: 1, duration: 0.22 },
              { opacity: 0.95, x: -15, scale: 1.025, duration: 0.33, ease: "power1.inOut" },
              { opacity: 1.0, x: -35, scale: 1.045, duration: 0.25, ease: "power1.inOut" },
              { opacity: 0.25, x: -45, scale: 1.05, duration: 0.20, ease: "power1.out" },
            ],
            immediateRender: false,
          },
          0
        );
      }

      // Central Digital Atmosphere Bloom: rises during digital transformation, settles into subtle minimal state
      if (digitalAtmosphereRef?.current) {
        scrollTl.fromTo(
          digitalAtmosphereRef.current,
          { opacity: 0 },
          {
            keyframes: [
              { opacity: 0, duration: 0.35 },
              { opacity: 0.65, duration: 0.40, ease: "power1.inOut" },
              { opacity: 0.35, duration: 0.25, ease: "power1.out" },
            ],
            immediateRender: false,
          },
          0
        );
      }

      // Particles Scroll: dims subtly in later phases to preserve minimal end atmosphere
      if (particlesScrollRef?.current) {
        scrollTl.fromTo(
          particlesScrollRef.current,
          { opacity: 1 },
          {
            keyframes: [
              { opacity: 1, duration: 0.45 },
              { opacity: 0.70, duration: 0.35, ease: "power1.inOut" },
              { opacity: 0.30, duration: 0.20, ease: "power1.out" },
            ],
            immediateRender: false,
          },
          0
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [
    containerRef,
    workspaceScrollRef,
    digitalScrollRef,
    particlesScrollRef,
    darkOverlayRef,
    warmGlowRef,
    digitalAtmosphereRef,
  ]);
}
