"use client";

import { useEffect, useRef } from "react";

export interface ParallaxLayers {
  farRef?: React.RefObject<HTMLDivElement | null>;
  workspaceRef?: React.RefObject<HTMLDivElement | null>;
  laptopRef?: React.RefObject<HTMLDivElement | null>;
  digitalRef?: React.RefObject<HTMLDivElement | null>;
  particlesRef?: React.RefObject<HTMLDivElement | null>;
}

export function useMouseParallax({
  farRef,
  workspaceRef,
  laptopRef,
  digitalRef,
  particlesRef,
}: ParallaxLayers) {
  const mouse = useRef({ targetX: 0, targetY: 0, currentX: 0, currentY: 0 });

  useEffect(() => {
    // Disable if reduced motion or touch device
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const isSmallScreen = window.innerWidth < 768;

    if (prefersReducedMotion || isTouchDevice || isSmallScreen) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize from -1 to 1 centered on viewport
      mouse.current.targetX = (e.clientX / innerWidth - 0.5) * 2;
      mouse.current.targetY = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animationFrameId: number;

    const update = () => {
      // Smooth lerp damping for organic, premium feel
      const damping = 0.045;
      mouse.current.currentX += (mouse.current.targetX - mouse.current.currentX) * damping;
      mouse.current.currentY += (mouse.current.targetY - mouse.current.currentY) * damping;

      const x = mouse.current.currentX;
      const y = mouse.current.currentY;

      // Layered Depth Transforms:
      // 1. Far Layer: City/window atmosphere & distant lights (barely moves: ±2.5px)
      if (farRef?.current) {
        farRef.current.style.transform = `translate3d(${-x * 2.5}px, ${-y * 2}px, 0)`;
      }

      // 2. Middle Layer: Workspace, desk, books, plant, lamp (moves slightly: ±6px)
      if (workspaceRef?.current) {
        workspaceRef.current.style.transform = `translate3d(${-x * 6}px, ${-y * 4.5}px, 0)`;
      }

      // 3. Foreground: Laptop glow & anchor (moves slightly more: ±10px)
      if (laptopRef?.current) {
        laptopRef.current.style.transform = `translate3d(${-x * 10}px, ${-y * 7.5}px, 0)`;
      }

      // 4. Foreground: Digital technology elements (slightly more responsive: ±15px)
      if (digitalRef?.current) {
        digitalRef.current.style.transform = `translate3d(${-x * 15}px, ${-y * 11}px, 0)`;
      }

      // 5. Particles: Subtle independent movement (±22px)
      if (particlesRef?.current) {
        particlesRef.current.style.transform = `translate3d(${-x * 22}px, ${-y * 15}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [farRef, workspaceRef, laptopRef, digitalRef, particlesRef]);
}

