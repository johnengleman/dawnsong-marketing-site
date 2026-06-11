"use client";

import { useEffect, useRef } from "react";

type Mote = {
  x: number;
  y: number;
  radius: number;
  drift: number;
  rise: number;
  phase: number;
  twinkle: number;
  alpha: number;
};

/**
 * A slow drift of warm dust motes — the "golden light" of the brand,
 * rendered cheaply on a single canvas. Renders nothing when the user
 * prefers reduced motion.
 */
export default function Dust({ density = 1 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let motes: Mote[] = [];
    let frame = 0;
    let running = true;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const seed = () => {
      const count = Math.round(
        Math.min(90, (width * height) / 26000) * density,
      );
      motes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.6 + Math.random() * 1.9,
        drift: 0.06 + Math.random() * 0.22,
        rise: 0.05 + Math.random() * 0.18,
        phase: Math.random() * Math.PI * 2,
        twinkle: 0.4 + Math.random() * 1.4,
        alpha: 0.12 + Math.random() * 0.4,
      }));
    };

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect?.width ?? window.innerWidth;
      height = rect?.height ?? window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const tick = (now: number) => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      const t = now / 1000;

      for (const mote of motes) {
        mote.x += Math.sin(t * 0.5 + mote.phase) * mote.drift;
        mote.y -= mote.rise;
        if (mote.y < -6) {
          mote.y = height + 6;
          mote.x = Math.random() * width;
        }
        const glow =
          mote.alpha * (0.55 + 0.45 * Math.sin(t * mote.twinkle + mote.phase));
        ctx.beginPath();
        ctx.arc(mote.x, mote.y, mote.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 190, 122, ${Math.max(glow, 0.04)})`;
        ctx.fill();
      }

      frame = requestAnimationFrame(tick);
    };

    resize();
    frame = requestAnimationFrame(tick);

    const observer = new ResizeObserver(resize);
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [density]);

  return <canvas ref={canvasRef} className="dust-canvas" aria-hidden="true" />;
}
