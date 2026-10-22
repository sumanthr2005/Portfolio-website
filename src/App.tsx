import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { InteractiveDemo } from './components/InteractiveDemo';
import { Skills } from './components/Skills';
import { Research } from './components/Research';
import { Experience } from './components/Experience';
import { Process } from './components/Process';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F5] font-sans antialiased selection:bg-[#E50914] selection:text-white">
      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Section A: Hero - Cinematic Editorial Poster */}
        <Hero />

        {/* Section B: About Me - Beyond the Code */}
        <About />

        {/* Section C: Selected Projects with Asymmetric Grid & Case Studies */}
        <Projects />

        {/* Bonus Feature: Interactive MultiShield-AI Architecture Sandbox */}
        <InteractiveDemo />

        {/* Section D: Technical Skills - The Engineering Toolkit */}
        <Skills />

        {/* Section E: Research & Publications - IEEE SCEECS 2026 */}
        <Research />

        {/* Section F: Experience, Fellowships & Hackathon Honors */}
        <Experience />

        {/* Section H: How I Build - From Problem to Product */}
        <Process />

        {/* Section G: Education & Verified Certifications */}
        <Education />

        {/* Section I: Contact - Let's Build Something Meaningful */}
        <Contact />
      </main>

      {/* Section J: Footer */}
      <Footer />
    </div>
  );
}

export default App;
