'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Copy, Check, Download, MapPin, ArrowRight } from 'lucide-react';
import { PROFILE } from '@/lib/data';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const portraitInView = useInView(portraitRef, { once: true, margin: '-40px' });

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const socials = [
    {
      Icon: Github,
      label: 'GitHub',
      value: 'github.com/thesahilalam',
      href: PROFILE.github,
    },
    {
      Icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/thesahilalam',
      href: PROFILE.linkedin,
    },
    {
      Icon: Instagram,
      label: 'Instagram',
      value: 'instagram.com/thesahilalam',
      href: PROFILE.instagram,
    },
    {
      Icon: Mail,
      label: 'Email',
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
    },
  ];

  return (
    <section
      id="contact"
      className="py-8 sm:py-10 px-5 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Subtle full-bleed background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'url(/images/portrait-5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      />

      <div className="max-w-[95rem] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Portrait 5 — Exactly alam potrait 5.jpg */}
          <motion.div
            ref={portraitRef}
            className="lg:col-span-5 relative order-last lg:order-first"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={portraitInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ border: '1px solid var(--border)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/portrait-5.jpg"
                alt="Md Sahil Alam - Contact"
                className="w-full h-[360px] sm:h-[420px] object-cover object-top"
                loading="lazy"
              />
            </div>
            {/* Accent glow */}
            <div
              className="absolute -top-4 -left-4 w-40 h-40 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)',
              }}
            />
          </motion.div>

          {/* Contact Content */}
          <div ref={ref} className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-2.5">
              <motion.p
                className="section-label text-xs sm:text-sm"
                initial={{ opacity: 0, x: -14 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4 }}
              >
                05 // Contact
              </motion.p>
              <motion.h2
                className="text-3xl sm:text-5xl font-extrabold leading-tight"
                style={{ color: 'var(--text-primary)' }}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 }}
              >
                Let&apos;s Connect
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.15 }}
              >
                Open to cybersecurity internships, IT infrastructure contracts, freelance projects,
                and technical collaborations. Feel free to reach out through any channel below.
              </motion.p>
            </div>

            {/* Primary CTA: Resume */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <a
                href={PROFILE.resume}
                download="Sahil_Alam_Resume.pdf"
                className="hidden md:inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all group"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-blue), #1d4ed8)',
                  boxShadow: '0 0 24px rgba(59,130,246,0.40)',
                }}
                onMouseEnter={e =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    '0 0 36px rgba(59,130,246,0.65)')
                }
                onMouseLeave={e =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    '0 0 24px rgba(59,130,246,0.40)')
                }
              >
                <Download size={15} />
                Download Resume
                <ArrowRight size={14} className="opacity-70 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="space-y-2.5"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {socials.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="glass-card flex items-center gap-3.5 p-3.5 rounded-xl group transition-all"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: 'rgba(59,130,246,0.08)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <Icon
                      size={16}
                      className="transition-colors"
                      style={{ color: 'var(--text-muted)' }}
                    />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>{label}</p>
                    <p className="text-xs sm:text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      {value}
                    </p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"
                    style={{ color: 'var(--accent-blue)' }}
                  />
                </a>
              ))}
            </motion.div>

            {/* 1-Click Email Copy */}
            <motion.div
              className="space-y-2 pt-1"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.35 }}
            >
              <p
                className="text-[11px] font-mono uppercase tracking-wider"
                style={{ color: 'var(--text-muted)' }}
              >
                Or copy email directly:
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <button
                  onClick={copyEmail}
                  className="group flex items-center gap-2.5 px-4 py-2 rounded-full border transition-all text-xs"
                  style={{
                    borderColor: 'var(--border)',
                    color: 'var(--text-secondary)',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-blue)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  }}
                >
                  <span className="font-mono">{PROFILE.email}</span>
                  {copied ? (
                    <Check size={13} style={{ color: 'var(--accent-green)' }} />
                  ) : (
                    <Copy size={12} style={{ color: 'var(--text-muted)' }} />
                  )}
                </button>

                {copied && (
                  <motion.span
                    className="text-xs font-mono"
                    style={{ color: 'var(--accent-green)' }}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    Copied to clipboard ✓
                  </motion.span>
                )}
              </div>
            </motion.div>

            {/* Location */}
            <div
              className="flex items-center gap-1.5 text-xs font-mono"
              style={{ color: 'var(--text-muted)' }}
            >
              <MapPin size={12} />
              <span>{PROFILE.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
