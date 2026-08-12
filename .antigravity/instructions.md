# MD SAHIL ALAM — PORTFOLIO ROADMAP & INSTRUCTIONS

## 1. Project Overview & Identity
- **Full Name**: Md Sahil Alam (Never use "MD" or "Rock" or "Enco" as personal name).
- **Design Concept**: Hybrid Terminal Cyberpunk + Sleek Modern Minimalist (Blue Accent `#3b82f6`, Green Accent `#22c55e`, Red Accent `#dc2626`).
- **Core Strategy**: Practical, real, hands-on cybersecurity tools & systems architecture.

---

## 2. Image Asset Architecture (Single Source of Truth)
All website images are located strictly in `/public/images/` without duplicates:
- `portrait-1.jpg` -> `alam potrait.jpg` (Used in Slide 3 / Section accents)
- `portrait-2.jpg` -> `alam potrait 2.jpg` (Used in About Section)
- `portrait-3.jpg` -> `alam potrait 3.jpg` (Used in Hero Slide 1 — face on right, text on left)
- `portrait-4.jpg` -> `alam potrait 4.jpg` (Used in Hero Slide 2 — 'Security. Networks. Solutions.')
- `portrait-5.jpg` -> `alam potrait 5.jpg` (Used in Contact Section — 'Let's Connect')

---

## 3. UI / UX Architecture & Layout Rules

### A. Hero Section (Dynamic Cinematic Slider - 100vh)
- **Zero Black Void**: Hero section is exactly `100vh` without excessive scroll gap.
- **Auto-Slide Carousel**:
  - **Slide 1**:
    - Image: `portrait-3.jpg` (Right-side face view, clear & unobstructed)
    - Content (Left-Aligned): Name **"Md Sahil Alam"**, Title *"Cybersecurity & Systems Researcher"*, Tagline, Availability badge, Resume download & Project buttons.
  - **Slide 2**:
    - Image: `portrait-4.jpg`
    - Content: *"Security. Networks. Solutions."* + Subtext.
  - **Slide 3**:
    - Image: `portrait-1.jpg`
    - Content: *"Always Learning. Always Building."* + Subtext.
- **Controls**:
  - Auto-play transition every 3.5 - 4 seconds with smooth crossfade/slide.
  - Interactive pagination indicators (dots) and subtle next/prev controls.
  - Touch/swipe support on mobile devices.

### B. Vertical Spacing & Screen Fit (100% Zoom Optimization)
- Reduce excessive vertical paddings across all sections (`py-14 sm:py-18` instead of `py-28`).
- Remove big top empty areas before section labels (`01 // Origin & Background`, etc.).
- Compact card padding and grid spacing so that standard 100% zoom screens display content completely without requiring zoom out to 75%.

### C. Contact & Footer
- **Contact Section**: Features `portrait-5.jpg` with 1-click email copy, GitHub, LinkedIn, and Resume links.
- **Footer**: Clean copyright line:
  `© 2026 Md Sahil Alam · Designed & Built for Security & Systems`

---

## 4. Maintenance & Updates
- All textual and portfolio content lives in `/lib/data.ts`.
- Updating `/lib/data.ts` will instantly reflect across the entire application.
