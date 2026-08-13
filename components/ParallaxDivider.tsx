'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export interface ParallaxDividerProps {
  image: string;
  badge: {
    icon: LucideIcon;
    text: string;
    color: string;
  };
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
}

export default function ParallaxDivider({
  image,
  badge,
  title,
  subtitle,
  description,
  tags,
}: ParallaxDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  // Track the scroll progress of this specific section for Desktop Parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax translation: image moves slower than the section on desktop
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  // Fading in text as it reaches center on desktop
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40]);

  return (
    <section 
      ref={ref}
      className="relative w-full py-12 sm:py-16 md:py-0 md:h-[100dvh] md:min-h-[640px] flex items-center overflow-hidden select-none transition-colors duration-300 border-y md:border-y-0"
      style={{ 
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border)',
      }}
    >
      {/* Parallax Background Image — Desktop Only (>= 768px) */}
      <motion.div 
        className="hidden md:block absolute inset-0 w-full h-[140%] -top-[20%]"
        style={{ y }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-right-top filter brightness-[0.95] contrast-[1.05]"
          style={{ willChange: 'transform' }}
        />
        
        {/* Cinematic Gradient Scrim Desktop */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-300"
          style={{
            background:
              theme === 'light'
                ? 'linear-gradient(to left, var(--bg-primary) 0%, rgba(248,249,252,0.88) 40%, rgba(248,249,252,0.20) 75%, rgba(248,249,252,0.05) 100%)'
                : 'linear-gradient(to left, rgba(6,6,8,0.98) 0%, rgba(6,6,8,0.88) 40%, rgba(6,6,8,0.20) 75%, rgba(6,6,8,0.05) 100%)',
          }}
        />
        {/* Top and Bottom soft fades to blend perfectly with content sections */}
        <div 
          className="absolute inset-x-0 top-0 h-40 pointer-events-none" 
          style={{ background: 'linear-gradient(to bottom, var(--bg-primary) 0%, transparent 100%)' }} 
        />
        <div 
          className="absolute inset-x-0 bottom-0 h-40 pointer-events-none" 
          style={{ background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)' }} 
        />
      </motion.div>

      {/* Mobile Subtle Background Ambient Gradient & Radial Glow Accent */}
      <div
        className="md:hidden absolute inset-0 pointer-events-none transition-colors duration-300"
        style={{
          background:
            theme === 'light'
              ? 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary), var(--bg-secondary))'
              : 'linear-gradient(to bottom, #0a0c12, #060608, #0a0c12)',
        }}
      />
      <div
        className="md:hidden absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(circle, ${badge.color}25 0%, transparent 70%)`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 max-w-[95rem] mx-auto px-5 sm:px-8 lg:px-12 w-full flex md:justify-end">
        {/* Desktop motion container with scroll opacity/y */}
        <motion.div 
          className="w-full max-w-xl lg:max-w-lg xl:max-w-xl space-y-3.5 sm:space-y-4 md:space-y-5"
          style={{
            opacity: typeof window !== 'undefined' && window.innerWidth >= 768 ? opacity : 1,
            y: typeof window !== 'undefined' && window.innerWidth >= 768 ? textY : 0,
          }}
        >
          {/* Badge Row */}
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-medium backdrop-blur-md"
              style={{
                backgroundColor: `${badge.color}15`,
                border: `1px solid ${badge.color}35`,
                color: badge.color,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: badge.color }} />
              {badge.text}
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] drop-shadow-sm"
            style={{ color: 'var(--text-primary)' }}
          >
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl font-semibold tracking-wide" style={{ color: 'var(--accent-blue)' }}>
            {subtitle}
          </p>

          {/* Description */}
          <p
            className="text-xs sm:text-sm md:text-base leading-relaxed max-w-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            {description}
          </p>

          {/* Slide Tags */}
          {tags && (
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap pt-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-md backdrop-blur-sm border transition-all"
                  style={{
                    backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.06)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
