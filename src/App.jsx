import React from 'react';
import CustomCursor from './components/CustomCursor';
import NoiseBackground from './components/NoiseBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import JourneySection from './components/JourneySection';
import AchievementsMarquee from './components/AchievementsMarquee';
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

      {/* Achievements Marquee Ticker */}
      <AchievementsMarquee />

      {/* About Section */}
      <AboutSection />

      {/* Selected Projects Showcase */}
      <ProjectsSection />

      {/* Technical Skills Matrix */}
      <SkillsSection />

      {/* Milestones & Journey */}
      <JourneySection />

      {/* Contact Form & Direct Links */}
      <ContactSection />

      {/* Main Footer */}
      <Footer />
    </div>
  );
}
