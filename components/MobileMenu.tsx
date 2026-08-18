'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { PROFILE } from '@/lib/data';

export interface NavLink {
  label: string;
  href: string;
  id: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  navLinks: readonly NavLink[] | NavLink[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  activeSection,
  navLinks,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7"
          style={{ backgroundColor: 'rgba(6,6,8,0.97)', backdropFilter: 'blur(20px)' }}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.2 }}
        >
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
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
  );
}
