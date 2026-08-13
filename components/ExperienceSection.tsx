'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE } from '@/lib/data';

function ExperienceCard({
  item, index,
}: {
  item: (typeof EXPERIENCE)[0]; index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between space-y-3.5 sm:space-y-4"
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="space-y-3">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between gap-2">
            <h3
              className="text-base sm:text-lg font-bold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              {item.role}
            </h3>
          </div>
          <p
            className="text-xs sm:text-sm font-semibold"
            style={{ color: 'var(--accent-blue)' }}
          >
            {item.company}
          </p>
          <div className="flex items-center gap-2 text-xs font-mono pt-0.5" style={{ color: 'var(--text-muted)' }}>
            <Calendar size={12} className="shrink-0" />
            <span>{item.period}</span>
            <span>·</span>
            <span
              className="px-2 py-0.5 rounded text-[10px]"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
              }}
            >
              {item.mode}
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {item.description}
        </p>

        {item.note && (
          <p
            className="text-xs italic px-3 py-1.5 rounded-lg border"
            style={{
              backgroundColor: 'rgba(59,130,246,0.06)',
              borderColor: 'rgba(59,130,246,0.20)',
              color: 'var(--text-muted)',
            }}
          >
            ℹ️ {item.note}
          </p>
        )}
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
        {item.skills.map(s => (
          <span
            key={s}
            className="text-[10px] font-mono px-2 py-0.5 rounded"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-muted)',
              border: '1px solid var(--border)',
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      {/* Subtle full-bleed background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'url(/images/portrait-2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="max-w-[95rem] mx-auto space-y-8 sm:space-y-10 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="space-y-2.5 sm:space-y-3 max-w-4xl">
          <motion.p
            className="section-label text-xs sm:text-sm"
            initial={{ opacity: 0, x: -14 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            04 // Experience & Operations
          </motion.p>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            Work & Practical Experience
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            Hands-on internships, IT technical operations, and enterprise simulations.
          </motion.p>
        </div>

        {/* Experience Grid — 3 Column on Desktop for Maximum Compactness */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {EXPERIENCE.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
