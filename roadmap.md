# Portfolio Architecture & Development Roadmap
**Portfolio of Md Sahil Alam**

---

### Key Milestone Checklist

- [x] **Milestone 1: Identity & Content Setup**
  - Name established as **Md Sahil Alam**.
  - All projects, education, skills, services, experience consolidated in `/lib/data.ts`.

- [ ] **Milestone 2: Image Standardization & Deduplication**
  - Consolidate all portraits into `/public/images/` as `portrait-1.jpg` to `portrait-5.jpg`.
  - Delete redundant copies and leftover temporary screenshot folders.

- [ ] **Milestone 3: Dynamic Cinematic Hero Carousel (100vh)**
  - Slide 1: `portrait-3.jpg` with left-aligned Name, Title, and Action Buttons (face on right 100% visible).
  - Slide 2: `portrait-4.jpg` with "Security. Networks. Solutions."
  - Slide 3: `portrait-1.jpg` with "Always Learning. Always Building."
  - Auto-play every 3.5s with smooth animated transitions + manual dot/arrow indicators.
  - Zero black scroll void — clean 100vh height.

- [ ] **Milestone 4: Spacing & Viewport Optimization**
  - Reduce top & bottom paddings across all sections (`py-14 sm:py-18`).
  - Fit content cleanly on standard 100% zoom screens (About Education/Highlights, Projects Grid).

- [ ] **Milestone 5: Contact & Footer Polish**
  - Place `portrait-5.jpg` in Contact Section.
  - Custom footer text: `© 2026 Md Sahil Alam · Designed & Built for Security & Systems`.

- [ ] **Milestone 6: Validation & Verification**
  - Test responsiveness on mobile, tablet, and desktop.
  - Verify smooth theme switching and build verification (`npx tsc --noEmit`).
