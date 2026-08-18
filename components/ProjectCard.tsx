'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS, type ProjectStatus } from '@/lib/data';

export const STATUS_CONFIG: Record<ProjectStatus, { label: string; color: string; bg: string }> = {
  Completed: { label: 'Completed', color: '#22c55e', bg: 'rgba(34,197,94,0.10)' },
  'In Development': { label: 'In Development', color: '#3b82f6', bg: 'rgba(59,130,246,0.10)' },
  Planned: { label: 'Planned', color: '#fbbf24', bg: 'rgba(251,191,36,0.10)' },
  Archived: { label: 'Archived', color: '#6b7280', bg: 'rgba(107,114,128,0.10)' },
};

export interface ProjectCardProps {
  project: (typeof PROJECTS)[0];
  index: number;
  isCompact?: boolean;
}

export default function ProjectCard({ project, index, isCompact }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className={`glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between group relative overflow-hidden ${
        isCompact ? 'space-y-4' : 'lg:flex-row gap-5 lg:gap-8 items-start'
      }`}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay: (index % 2) * 0.08 }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
    >
      {!isCompact ? (
        <>
          {/* Left Column (Meta) */}
          <div className="flex flex-col lg:w-1/5 shrink-0 space-y-2.5">
            <div className="flex items-center justify-between lg:justify-start lg:gap-3 w-full">
              <span className="text-xs font-mono font-semibold" style={{ color: 'var(--accent-blue)' }}>
                PROJECT {project.number}
              </span>
            </div>
            <span
              className="inline-block text-[11px] font-mono px-2.5 py-1 rounded-md w-fit"
              style={{
                backgroundColor: `${project.tagColor}12`,
                color: project.tagColor,
                border: `1px solid ${project.tagColor}25`,
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Middle Column (Title & Desc) */}
          <div className="flex-1 space-y-2.5">
            <div className="space-y-1">
              <h3
                className="text-xl sm:text-2xl font-bold tracking-tight transition-colors flex items-center gap-2 flex-wrap"
                style={{ color: 'var(--text-primary)' }}
              >
                {project.title}
                {project.flagship && (
                  <span
                    className="text-[10px] font-mono font-normal px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: 'rgba(59,130,246,0.12)',
                      color: 'var(--accent-blue)',
                      border: '1px solid rgba(59,130,246,0.30)',
                    }}
                  >
                    Flagship
                  </span>
                )}
              </h3>
            </div>

            <p className="text-sm leading-relaxed max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
              {project.description}
            </p>

            {/* Feature Bullets */}
            {project.bullets.length > 0 && (
              <ul className="space-y-1 pt-1">
                {project.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: project.tagColor }}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Column (Tags & Link) */}
          <div
            className="flex flex-col lg:w-[22%] shrink-0 space-y-3 lg:items-end lg:text-right mt-2 lg:mt-0 pt-3 border-t lg:border-t-0 lg:border-l lg:pl-6 w-full"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="flex flex-wrap lg:justify-end gap-1.5">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium link-hover transition-colors pt-1"
                style={{ color: 'var(--accent-blue)' }}
              >
                <Github size={13} />
                View on GitHub
                <ArrowUpRight size={12} />
              </a>
            )}
          </div>
        </>
      ) : (
        /* Compact Card Layout for Secondary Projects */
        <div className="space-y-3 flex flex-col justify-between h-full">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono font-semibold" style={{ color: 'var(--accent-blue)' }}>
                PROJECT {project.number}
              </span>
              <span
                className="text-[10px] font-mono px-2 py-0.5 rounded-md"
                style={{
                  backgroundColor: `${project.tagColor}12`,
                  color: project.tagColor,
                  border: `1px solid ${project.tagColor}25`,
                }}
              >
                {project.category}
              </span>
            </div>

            <h3
              className="text-lg font-bold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {project.description}
            </p>
          </div>

          <div className="pt-2 border-t space-y-3" style={{ borderColor: 'var(--border)' }}>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium link-hover transition-colors"
                style={{ color: 'var(--accent-blue)' }}
              >
                <Github size={13} />
                View on GitHub
                <ArrowUpRight size={12} />
              </a>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
