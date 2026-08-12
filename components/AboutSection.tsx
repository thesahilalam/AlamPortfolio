'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { PROFILE, EDUCATION } from '@/lib/data';

const HIGHLIGHTS = [
  'Hands-on pentesting with Nmap, Metasploit, Burp Suite & Wireshark in Kali Linux lab environments',
  'Wireless security research: WPA/WPS testing, monitor mode, handshake capture & .cap file analysis',
  'Built EncoGuard — a complete Python/Nmap security auditing tool with CVE/NVD intelligence',
  'Hands-on networking: router config, LAN setup, CCTV/DVR/NVR/IP camera installation',
  'AI-assisted development workflow: design → build → test → deploy working applications',
  'Currently exploring: Android network utilities and wireless security automation',
];

function SectionEntry({
  children, index,
}: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -14 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section
      id="about"
      className="py-8 sm:py-10 px-5 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      {/* Subtle full-bleed background texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'url(/images/portrait-4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      />

      <div className="max-w-[95rem] mx-auto space-y-10 sm:space-y-12 relative z-10">

        {/* Header & Bio Grid */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Area */}
          <div className="lg:col-span-7 space-y-5">
            <motion.p
              className="section-label text-xs sm:text-sm"
              initial={{ opacity: 0, x: -14 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4 }}
            >
              01 // Origin & Background
            </motion.p>
            <motion.h2
              className="text-3xl sm:text-5xl font-extrabold leading-tight"
              style={{ color: 'var(--text-primary)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              Who I Am & What I Do
            </motion.h2>
            <div className="space-y-4">
              {PROFILE.bio.map((para, i) => (
                <motion.p
                  key={i}
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Portrait 2 — Crisp display */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ border: '1px solid var(--border)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/portrait-4.jpg"
                alt="Md Sahil Alam"
                loading="lazy"
                className="w-full h-[350px] sm:h-[420px] object-cover object-top"
              />
            </div>
            {/* Ambient Blue Glow Accent */}
            <div
              className="absolute -bottom-4 -right-4 w-36 h-36 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 70%)',
              }}
            />
          </motion.div>
        </div>

        {/* Education + Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

          {/* Education Card */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2.5" style={{ color: 'var(--text-secondary)' }}>
              <GraduationCap size={20} style={{ color: 'var(--accent-blue)' }} />
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono">Education</h3>
            </div>
            <div className="space-y-6">
              {EDUCATION.map((edu, i) => (
                <SectionEntry key={i} index={i}>
                  <div
                    className="pl-4 space-y-2 transition-colors"
                    style={{ borderLeft: '2px solid var(--border)' }}
                  >
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${edu.statusColor}15`,
                          color: edu.statusColor,
                          border: `1px solid ${edu.statusColor}30`,
                        }}
                      >
                        {edu.status}
                      </span>
                      {edu.note && (
                        <span
                          className="text-xs font-mono"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {edu.note}
                        </span>
                      )}
                    </div>
                    <p
                      className="text-base font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {edu.degree}
                    </p>
                    <p
                      className="text-xs sm:text-sm font-medium"
                      style={{ color: 'var(--accent-blue)' }}
                    >
                      {edu.institution}, {edu.location} · {edu.period}
                    </p>
                    <p
                      className="hidden md:block text-xs sm:text-sm leading-relaxed"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {edu.description}
                    </p>
                  </div>
                </SectionEntry>
              ))}
            </div>
          </div>

          {/* Key Highlights Card */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2.5" style={{ color: 'var(--text-secondary)' }}>
              <CheckCircle2 size={20} style={{ color: 'var(--accent-green)' }} />
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono">Key Highlights</h3>
            </div>
            <ul className="space-y-4">
              {HIGHLIGHTS.map((item, i) => (
                <SectionEntry key={i} index={i}>
                  <li className="flex items-start gap-3 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    <span
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: 'var(--accent-blue)' }}
                    />
                    <span>{item}</span>
                  </li>
                </SectionEntry>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
