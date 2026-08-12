'use client';

import { Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';
import { PROFILE } from '@/lib/data';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="border-t py-8 px-5 sm:px-8 lg:px-12"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="max-w-[95rem] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{
              background: 'linear-gradient(135deg, var(--accent-blue), #1d4ed8)',
              boxShadow: '0 0 14px rgba(59,130,246,0.4)',
            }}
          >
            SA
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
              {PROFILE.name}
            </p>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Cybersecurity · Networking · Systems
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs font-mono order-last sm:order-none" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Md Sahil Alam · Designed & Built for Security & Systems
        </p>

        {/* Socials + Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-1.5 transition-colors"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <Github size={15} />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-1.5 transition-colors"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <Linkedin size={15} />
          </a>
          <a
            href={PROFILE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-1.5 transition-colors"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <Instagram size={15} />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="p-1.5 transition-colors"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <Mail size={15} />
          </a>
          <div className="w-px h-4 mx-1" style={{ backgroundColor: 'var(--border)' }} />
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="p-2 rounded-full border transition-all"
            style={{
              color: 'var(--text-muted)',
              borderColor: 'var(--border)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--accent-blue)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent-blue)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)';
            }}
          >
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
