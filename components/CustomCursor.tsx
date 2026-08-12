'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);
  const posRef = useRef({ x: -200, y: -200 });
  const trailRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number>();

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(
        !!target.closest('a, button, [role="button"], input, textarea, select, label')
      );
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    // Smooth animation loop
    const animate = () => {
      const pos = posRef.current;
      const trail = trailRef.current;

      trailRef.current = {
        x: trail.x + (pos.x - trail.x) * 0.14,
        y: trail.y + (pos.y - trail.y) * 0.14,
      };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${trailRef.current.x}px, ${trailRef.current.y}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [visible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full will-change-transform"
        style={{
          width: isPointer ? 8 : 6,
          height: isPointer ? 8 : 6,
          backgroundColor: isPointer ? 'var(--accent-blue)' : 'var(--text-primary)',
          boxShadow: isPointer
            ? '0 0 12px var(--accent-blue)'
            : '0 0 6px rgba(255,255,255,0.4)',
          opacity: visible ? 1 : 0,
          transition: 'width 0.2s, height 0.2s, background-color 0.2s, opacity 0.3s',
        }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full will-change-transform"
        style={{
          width: isPointer ? 42 : 30,
          height: isPointer ? 42 : 30,
          border: `1px solid ${isPointer ? 'var(--accent-blue)' : 'rgba(255,255,255,0.18)'}`,
          backgroundColor: isPointer
            ? 'rgba(59,130,246,0.05)'
            : 'transparent',
          opacity: visible ? 1 : 0,
          transition: 'width 0.25s, height 0.25s, border-color 0.2s, opacity 0.3s',
        }}
      />
    </>
  );
}
