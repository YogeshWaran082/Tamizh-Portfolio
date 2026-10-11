import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import AnalyticsDashboard from './components/analytics/AnalyticsDashboard';
import CodeShowcase from './components/code-showcase/CodeShowcase';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  useEffect(() => {
    // Smooth title scroll / focus awareness
    const originalTitle = document.title;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = 'Tamizhvanan A | HR & Operations Specialist';
      } else {
        document.title = originalTitle;
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div className="app-root">
      {/* Film Grain Subtle Overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Fixed Editorial Navigation */}
      <Navbar />

      {/* Main Single Page Editorial Content */}
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        {/* Feature 01: Interactive Data Dashboard */}
        <AnalyticsDashboard />
        {/* Feature 03: SQL / Python Code Showcase */}
        <CodeShowcase />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
