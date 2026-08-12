'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Globe, Terminal, Cpu, ArrowUpRight } from 'lucide-react';
import { SERVICES, PROFILE } from '@/lib/data';

const SERVICE_ICONS: Record<string, typeof Shield> = {
  security: Shield,
  network: Globe,
  web: Terminal,
  support: Cpu,
};

function ServiceCard({
  service, index,
}: {
  service: (typeof SERVICES)[0]; index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const Icon = SERVICE_ICONS[service.id] || Shield;

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col gap-5 group relative overflow-hidden"
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay: (index % 2) * 0.08 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      {/* Icon + Title */}
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{
            backgroundColor: `${service.color}15`,
            border: `1px solid ${service.color}35`,
          }}
        >
          <Icon size={22} style={{ color: service.color }} />
        </div>
        <div>
          <h3
            className="text-lg sm:text-xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {service.title}
          </h3>
          <div
            className="w-10 h-0.5 mt-2 rounded-full"
            style={{ backgroundColor: service.color }}
          />
        </div>
      </div>

      {/* Offerings list */}
      <ul className="space-y-3 flex-1 pt-1">
        {service.items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm sm:text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            <span
              className="w-2 h-2 rounded-full mt-2 shrink-0"
              style={{ backgroundColor: service.color }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Tooling / Skill Badges inside Card */}
      <div className="pt-3 border-t space-y-2" style={{ borderColor: 'var(--border)' }}>
        <p className="text-xs font-mono uppercase tracking-wider font-semibold" style={{ color: 'var(--text-muted)' }}>
          Tooling & Technical Stack:
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {service.skills?.map((skill, sIdx) => (
            <span
              key={sIdx}
              className="text-xs font-mono px-3 py-1 rounded-md transition-colors"
              style={{
                backgroundColor: 'rgba(59, 130, 246, 0.08)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </motion.div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section
      id="services"
      className="py-10 sm:py-14 px-5 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Subtle full-bleed background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'url(/images/portrait-3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      />

      <div className="max-w-[95rem] mx-auto space-y-10 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="space-y-3 max-w-4xl">
          <motion.p
            className="section-label text-xs sm:text-sm"
            initial={{ opacity: 0, x: -14 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            03 // Capabilities & Technical Services
          </motion.p>
          <motion.h2
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight whitespace-normal md:whitespace-nowrap"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            Technical Expertise & Services
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            A unified overview of hands-on technical capabilities, infrastructure services, and the security tooling I utilize.
          </motion.p>
        </div>

        {/* Services & Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-base sm:text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
              Have a specific security audit or infrastructure requirement in mind?
            </p>
            <p className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
              Let&apos;s talk scope, timelines, and how I can help solve it.
            </p>
          </div>
          <a
            href={`mailto:${PROFILE.email}`}
            className="shrink-0 px-6 py-3 rounded-full text-white text-xs sm:text-sm font-semibold transition-all"
            style={{
              background: 'linear-gradient(135deg, var(--accent-blue), #1d4ed8)',
              boxShadow: '0 0 20px rgba(59,130,246,0.35)',
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
