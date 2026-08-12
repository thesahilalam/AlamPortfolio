'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Github, Linkedin, Instagram, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { PROFILE } from '@/lib/data';

const NAV_LINKS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Services & Skills', href: '#services', id: 'services' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { theme, toggle } = useTheme();

  // Scroll listener for navbar background & active section tracker
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection based on viewport center intersection
      const viewportTrigger = window.innerHeight * 0.35;
      let current = 'hero';

      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportTrigger) {
            current = link.id;
          }
        }
      }

      // Bottom of page check for contact section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        current = 'contact';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          paddingTop: scrolled ? '10px' : '18px',
          paddingBottom: scrolled ? '10px' : '18px',
          backgroundColor: scrolled ? 'var(--navbar-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-[95rem] mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold transition-all"
              style={{
                background: 'linear-gradient(135deg, var(--accent-blue), #1d4ed8)',
                boxShadow: '0 0 16px rgba(59,130,246,0.45)',
              }}
            >
              SA
            </div>
            <span
              className="font-semibold text-sm tracking-wide transition-colors"
              style={{
                color: scrolled
                  ? 'var(--text-primary)'
                  : theme === 'light'
                  ? 'var(--text-primary)'
                  : 'white',
              }}
            >
              Md Sahil Alam
            </span>
          </a>

          {/* Desktop Nav with Apple-style Animated Pill (Matching Resume CTA style in Light Mode) */}
          <nav
            className="hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-md transition-colors"
            style={{
              backgroundColor:
                theme === 'light'
                  ? 'rgba(255, 255, 255, 0.88)'
                  : scrolled
                  ? 'rgba(12,14,22,0.45)'
                  : 'rgba(6,6,8,0.55)',
              borderColor:
                theme === 'light' ? 'rgba(37, 99, 235, 0.20)' : 'var(--border)',
              boxShadow:
                theme === 'light'
                  ? '0 4px 20px rgba(37, 99, 235, 0.08)'
                  : 'none',
            }}
          >
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide transition-colors rounded-full"
                  style={{
                    color: isActive
                      ? '#ffffff'
                      : theme === 'light'
                      ? 'var(--text-primary)'
                      : 'var(--text-secondary)',
                  }}
                  onClick={() => setActiveSection(link.id)}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, var(--accent-blue), #1d4ed8)',
                        boxShadow: '0 0 16px rgba(59, 130, 246, 0.40)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right: Socials + Theme Toggle + Desktop Resume CTA */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 transition-colors rounded-lg"
              style={{
                color: theme === 'light' ? 'var(--text-secondary)' : 'var(--text-muted)',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-blue)')}
              onMouseLeave={e =>
                (e.currentTarget.style.color =
                  theme === 'light' ? 'var(--text-secondary)' : 'var(--text-muted)')
              }
            >
              <Github size={16} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 transition-colors rounded-lg"
              style={{
                color: theme === 'light' ? 'var(--text-secondary)' : 'var(--text-muted)',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-blue)')}
              onMouseLeave={e =>
                (e.currentTarget.style.color =
                  theme === 'light' ? 'var(--text-secondary)' : 'var(--text-muted)')
              }
            >
              <Linkedin size={16} />
            </a>
            <a
              href={PROFILE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 transition-colors rounded-lg"
              style={{
                color: theme === 'light' ? 'var(--text-secondary)' : 'var(--text-muted)',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-blue)')}
              onMouseLeave={e =>
                (e.currentTarget.style.color =
                  theme === 'light' ? 'var(--text-secondary)' : 'var(--text-muted)')
              }
            >
              <Instagram size={16} />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-full border transition-all"
              style={{
                color: theme === 'light' ? 'var(--accent-blue)' : 'var(--text-secondary)',
                borderColor:
                  theme === 'light' ? 'rgba(37, 99, 235, 0.30)' : 'var(--border)',
                backgroundColor:
                  theme === 'light' ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent-blue)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--accent-blue)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  theme === 'light' ? 'rgba(37, 99, 235, 0.30)' : 'var(--border)';
                (e.currentTarget as HTMLButtonElement).style.color =
                  theme === 'light' ? 'var(--accent-blue)' : 'var(--text-secondary)';
              }}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Desktop Resume CTA */}
            <a
              href={PROFILE.resume}
              download="Sahil_Alam_Resume.pdf"
              className="ml-1 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-white text-xs font-semibold transition-all"
              style={{
                background: 'linear-gradient(135deg, var(--accent-blue), #1d4ed8)',
                boxShadow: '0 0 16px rgba(59,130,246,0.35)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  '0 0 28px rgba(59,130,246,0.60)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  '0 0 16px rgba(59,130,246,0.35)';
              }}
            >
              <Download size={12} />
              Resume
            </a>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-2 rounded-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="p-1.5"
              style={{ color: 'var(--text-primary)' }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer (NO Resume Download Button on Mobile as requested) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7"
            style={{ backgroundColor: 'rgba(6,6,8,0.97)', backdropFilter: 'blur(20px)' }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold transition-colors"
                style={{
                  color: activeSection === link.id ? 'var(--accent-blue)' : 'var(--text-secondary)',
                }}
              >
                {link.label}
              </a>
            ))}

            {/* Social icons in mobile drawer */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 text-white/70 hover:text-white"
              >
                <Github size={20} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 text-white/70 hover:text-white"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={PROFILE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 text-white/70 hover:text-white"
              >
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
