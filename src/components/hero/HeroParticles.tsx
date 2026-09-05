"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  baseAlpha: number;
  pulseSpeed: number;
  color: string;
}

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const isMobile = window.innerWidth < 768;
    // Controlled particle count: 12 on mobile, 26 on desktop for subtle ambient depth
    const particleCount = isMobile ? 12 : 26;
    const colors = [
      "rgba(167, 139, 250, ", // soft violet
      "rgba(129, 140, 248, ", // soft indigo
      "rgba(56, 189, 248, ",  // soft cyan
    ];

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.8, // 0.8px to 2.3px
      vx: (Math.random() - 0.5) * 0.2, // very slow drift
      vy: (Math.random() - 0.5) * 0.18,
      baseAlpha: Math.random() * 0.4 + 0.2,
      pulseSpeed: Math.random() * 0.015 + 0.005,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      tick++;

      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Wrap around edges gracefully
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        const alpha = p.baseAlpha + Math.sin(tick * p.pulseSpeed) * 0.15;
        const clampedAlpha = Math.max(0.05, Math.min(0.85, alpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${clampedAlpha})`;
        ctx.shadowColor = `${p.color}0.6)`;
        ctx.shadowBlur = 6;
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-15"
      aria-hidden="true"
    />
  );
}
