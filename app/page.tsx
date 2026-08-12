'use client';

import Navbar from '@/components/Navbar';
import HeroSection, { SLIDES } from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ParallaxDivider from '@/components/ParallaxDivider';

export default function Home() {
  return (
    <main className="relative w-full flex flex-col overflow-hidden">
      <Navbar />
      <HeroSection />
      
      <div className="relative z-10 w-full">
        <AboutSection />
        
        <ParallaxDivider {...SLIDES[1]} />
        
        <ProjectsSection />
        
        <ParallaxDivider {...SLIDES[2]} />
        
        <ServicesSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
