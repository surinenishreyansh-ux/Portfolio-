import React from 'react';
import CustomCursor from './components/CustomCursor';
import NoiseBackground from './components/NoiseBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AchievementsMarquee from './components/AchievementsMarquee';
import EditraFeaturedSection from './components/EditraFeaturedSection';
import BuilderPipeline from './components/BuilderPipeline';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative bg-[#070709] text-slate-100 min-h-screen selection:bg-[#00ff66] selection:text-black">
      {/* Film Grain Texture Layer */}
      <NoiseBackground />

      {/* Contextual Custom Cursor */}
      <CustomCursor />

      {/* Floating Glass Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* High-Signal Ticker */}
      <AchievementsMarquee />

      {/* Prominent Featured Project: EDITRA AI */}
      <EditraFeaturedSection />

      {/* Builder Methodology Pipeline */}
      <BuilderPipeline />

      {/* Shipped Live Projects Showcase */}
      <ProjectsSection />

      {/* Founder About Section */}
      <AboutSection />

      {/* Technical Foundations Matrix */}
      <SkillsSection />

      {/* Contact & Direct Outreach */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

