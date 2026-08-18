'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PROJECTS, ARCHIVED_PROJECTS } from '@/lib/data';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: '-60px' });

  const flagship = PROJECTS[0];
  const secondaryProjects = PROJECTS.slice(1);

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Subtle background portrait */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'url(/images/portrait-4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
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
            02 // Featured Work
          </motion.p>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            Completed Systems & Security Tools
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            Practical security utilities and desktop software—built, tested, and working.
          </motion.p>
        </div>

        {/* Projects Layout — Flagship Hero Card + 2-Column Grid on Desktop */}
        <div className="space-y-5">
          {/* Flagship Hero Card */}
          {flagship && <ProjectCard project={flagship} index={0} isCompact={false} />}

          {/* Secondary Projects — 2 Column Grid on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {secondaryProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + 1} isCompact={true} />
            ))}
          </div>
        </div>

        {/* Earlier Academic & Archived Work */}
        <div
          className="rounded-2xl p-5 border transition-colors space-y-2.5"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border)',
          }}
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold" style={{ color: 'var(--text-muted)' }}>
              📁 Earlier Academic & Exploratory Work
            </span>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Completed during Diploma and foundational studies:
          </p>
          <div className="flex flex-wrap gap-2">
            {ARCHIVED_PROJECTS.map(name => (
              <span
                key={name}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
