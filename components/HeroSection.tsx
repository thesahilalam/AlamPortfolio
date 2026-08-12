'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight, ChevronDown, MapPin, Shield, Terminal, Cpu, LucideIcon } from 'lucide-react';
import { PROFILE } from '@/lib/data';
import { useTheme } from './ThemeProvider';

export interface Slide {
  id: number;
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
  isHeroPrimary?: boolean;
}

export const SLIDES: Slide[] = [
  {
    id: 1,
    image: '/images/portrait-3.jpg', 
    badge: {
      icon: Shield,
      text: PROFILE.availability,
      color: '#22c55e',
    },
    title: PROFILE.name,
    subtitle: PROFILE.title,
    description: PROFILE.tagline,
    isHeroPrimary: true,
  },
  {
    id: 2,
    image: '/images/portrait-2.jpg',
    badge: {
      icon: Terminal,
      text: 'Security & Systems Engineering',
      color: '#3b82f6',
    },
    title: 'Security. Networks. Solutions.',
    subtitle: 'Practical Architecture · Lab Tested',
    description: 'Building practical tools and infrastructure that work — not just theory. From automated reconnaissance to vulnerability mapping.',
    tags: ['Network Auditing', 'Packet Inspection', 'Linux Security', 'Vulnerability Intel'],
    isHeroPrimary: false,
  },
  {
    id: 3,
    image: '/images/portrait-1.jpg',
    badge: {
      icon: Cpu,
      text: 'Hands-on Innovation',
      color: '#a855f7',
    },
    title: 'Always Learning. Always Building.',
    subtitle: 'From Wireless Labs to Desktop Apps',
    description: 'From wireless security labs to cross-platform desktop apps — hands-on, practical, real. Engineering software utilities that solve real-world problems.',
    tags: ['EncoGuard CLI', 'EncoPDF Parallel Engine', 'EncoXaudio Tauri/Rust'],
    isHeroPrimary: false,
  },
];

export default function HeroSection() {
  const slide = SLIDES[0];
  const { theme } = useTheme();

  const textVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: custom * 0.07, ease: 'easeOut' },
    }),
  };

  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] flex items-center overflow-hidden select-none transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background Image — Desktop Only */}
      <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.image}
            alt={`${PROFILE.name} - Hero Image`}
            loading="eager"
            // @ts-expect-error fetchpriority attribute
            fetchpriority="high"
            className="w-full h-full object-cover object-right-top filter brightness-[0.95] contrast-[1.05]"
          />

          {/* Cinematic Gradient Scrim */}
          <div
            className="absolute inset-0 pointer-events-none transition-all duration-300"
            style={{
              background:
                theme === 'light'
                  ? 'linear-gradient(to right, var(--bg-primary) 0%, rgba(248,249,252,0.85) 42%, rgba(248,249,252,0.25) 75%, rgba(248,249,252,0.40) 100%)'
                  : 'linear-gradient(to right, rgba(6,6,8,0.95) 0%, rgba(6,6,8,0.80) 42%, rgba(6,6,8,0.30) 75%, rgba(6,6,8,0.40) 100%)',
            }}
          />

          {/* Top and Bottom soft fades */}
          <div
            className="absolute inset-x-0 top-0 h-28 pointer-events-none"
            style={{
              background:
                theme === 'light'
                  ? 'linear-gradient(to bottom, var(--bg-primary), transparent)'
                  : 'linear-gradient(to bottom, rgba(6,6,8,0.75), transparent)',
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
            style={{
              background:
                theme === 'light'
                  ? 'linear-gradient(to top, var(--bg-primary), transparent)'
                  : 'linear-gradient(to top, rgba(6,6,8,0.85), transparent)',
            }}
          />
        </motion.div>
      </div>

      {/* Mobile Subtle Background Ambient Gradient */}
      <div
        className="md:hidden absolute inset-0 pointer-events-none transition-colors duration-300"
        style={{
          background:
            theme === 'light'
              ? 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary), var(--bg-primary))'
              : 'linear-gradient(to bottom, #060608, #0a0c12, #060608)',
        }}
      />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-[95rem] mx-auto px-5 sm:px-8 lg:px-12 w-full pt-20 sm:pt-0">
        <div className="max-w-xl lg:max-w-lg xl:max-w-xl pr-4">
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-4 sm:space-y-5"
          >
            {/* Main Heading */}
            <motion.h1
              custom={2}
              variants={textVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] drop-shadow-sm"
              style={{ color: 'var(--text-primary)' }}
            >
              {slide.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={3}
              variants={textVariants}
              className="text-lg sm:text-2xl font-semibold tracking-wide"
              style={{ color: 'var(--accent-blue)' }}
            >
              {slide.subtitle}
            </motion.p>

            {/* Mobile-Only Framed Portrait Card (Clean 100% Face Display) */}
            <motion.div 
              custom={3.5} 
              variants={textVariants} 
              className="md:hidden rounded-2xl overflow-hidden shadow-2xl my-3 h-[270px] relative border transition-all"
              style={{ borderColor: 'var(--border)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.image}
                alt={PROFILE.name}
                loading="eager"
                className="w-full h-full object-cover object-top filter brightness-[0.98]"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              custom={4}
              variants={textVariants}
              className="text-base sm:text-lg leading-relaxed max-w-xl"
              style={{ color: 'var(--text-secondary)' }}
            >
              {slide.description}
            </motion.p>

            {/* Primary CTAs: ONLY on Slide 1 and ONLY on Desktop (hidden on mobile) */}
            {slide.isHeroPrimary && (
              <motion.div
                custom={5}
                variants={textVariants}
                className="pt-2 sm:pt-3 hidden md:flex items-center gap-3.5 flex-wrap"
              >
                <a
                  href={PROFILE.resume}
                  download="Sahil_Alam_Resume.pdf"
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all group"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-blue), #1d4ed8)',
                    boxShadow: '0 0 24px rgba(59,130,246,0.45)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 36px rgba(59,130,246,0.65)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(59,130,246,0.45)';
                  }}
                >
                  <Download size={15} />
                  Download Resume
                </a>

                <a
                  href="#projects"
                  className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border transition-all backdrop-blur-md group"
                  style={{
                    backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.05)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                >
                  View Projects
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                    style={{ color: 'var(--accent-blue)' }}
                  />
                </a>
              </motion.div>
            )}

            {/* Badge Row */}
            <motion.div custom={6} variants={textVariants} className="flex items-center gap-2.5 flex-wrap pt-3 sm:pt-4">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium backdrop-blur-md"
                style={{
                  backgroundColor: `${slide.badge.color}18`,
                  border: `1px solid ${slide.badge.color}40`,
                  color: slide.badge.color,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: slide.badge.color }}
                />
                {slide.badge.text}
              </span>

              {slide.isHeroPrimary && (
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono backdrop-blur-md"
                  style={{
                    backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.06)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <MapPin size={12} />
                  {PROFILE.location}
                </span>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-7 right-5 sm:right-8 lg:right-12 z-30 flex items-center gap-2 text-xs font-mono transition-colors"
        style={{ color: 'var(--text-muted)' }}
      >
        <span className="hidden sm:inline">EXPLORE</span>
        <ChevronDown size={15} className="animate-bounce" />
      </a>
    </section>
  );
}
