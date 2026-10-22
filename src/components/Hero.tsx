import React from 'react';
import { ArrowDown, ArrowUpRight, FileDown, Mail, Sparkles, MapPin, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 md:py-32 flex flex-col justify-between overflow-hidden bg-[#080808]">
      {/* Background Ambient Glow & Scanline Texture */}
      <div className="absolute inset-0 pointer-events-none grain-overlay opacity-40 z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E50914]/15 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* GIANT EDITORIAL DISPLAY TYPOGRAPHY (Behind Subject - Inspired by Reference) */}
      <div className="absolute top-16 md:top-20 left-0 right-0 flex justify-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 className="font-display text-[21vw] md:text-[18vw] leading-none tracking-tighter text-[#E50914] font-black uppercase opacity-95 text-center whitespace-nowrap drop-shadow-[0_10px_35px_rgba(229,9,20,0.35)]">
          INTELLIGENCE
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Top status bar above portrait layout */}
        <div className="flex items-center justify-between pb-4 md:pb-6 border-b border-[#1A1A1A] mb-8 md:mb-12 text-xs font-mono text-[#A3A3A3]">
          <div className="flex items-center gap-2">
            <span className="text-[#E50914] font-bold">//</span>
            <span className="uppercase tracking-widest">{PERSONAL_INFO.eyebrow}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="tracking-widest uppercase text-emerald-400 font-semibold">{PERSONAL_INFO.availability}</span>
          </div>
        </div>

        {/* Hero Grid: Left Bio / Center Portrait / Right Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* LEFT COLUMN: Identity, Bio, Actions (Col 1 to 5) */}
          <div className="lg:col-span-5 flex flex-col z-20">
            {/* Script Accent */}
            <span className="font-script text-3xl sm:text-4xl text-[#E50914] font-semibold -mb-2 tracking-wide transform -rotate-1 origin-left">
              Hello, I'm
            </span>

            {/* Display Name */}
            <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-8xl tracking-tight text-white uppercase leading-[0.88] mb-4">
              {PERSONAL_INFO.name}
            </h2>

            {/* Sub-headline Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E50914]/15 border border-[#E50914]/40 text-[#E50914] text-xs font-mono font-semibold tracking-wider uppercase mb-5 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#E50914]" />
              <span>AI / ML Engineer & Backend Developer</span>
            </div>

            {/* Headline */}
            <p className="text-xl sm:text-2xl text-[#F5F5F5] font-semibold leading-snug mb-4">
              {PERSONAL_INFO.headline}
            </p>

            {/* Short Narrative Bio */}
            <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed mb-6">
              {PERSONAL_INFO.supportingText}
            </p>

            {/* Metadata Tags */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-[#888888] mb-8 pb-6 border-b border-[#1A1A1A]">
              <span className="flex items-center gap-1.5 text-[#CCCCCC]">
                <Award className="w-3.5 h-3.5 text-[#E50914]" />
                SRM IST '27 (AIML)
              </span>
              <span>•</span>
              <span className="text-[#CCCCCC]">CGPA: 8.98/10</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#CCCCCC]">
                <MapPin className="w-3 h-3 text-[#E50914]" />
                Chennai, India
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="btn-crimson inline-flex items-center gap-2 px-6 py-3.5 rounded-sm text-xs uppercase font-mono tracking-wider"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePdf}
                download="Sumanth_R_Resume.pdf"
                className="btn-outline inline-flex items-center gap-2 px-5 py-3 rounded-sm text-xs uppercase font-mono tracking-wider"
              >
                <FileDown className="w-4 h-4 text-[#E50914]" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="text-xs uppercase font-mono tracking-wider text-[#A3A3A3] hover:text-[#E50914] flex items-center gap-1.5 px-3 py-3 transition-colors"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* CENTER COLUMN: Real Portrait with Cinematic Dark Treatment (Col 6 to 9) */}
          <div className="lg:col-span-4 flex justify-center items-center relative order-first lg:order-none my-4 lg:my-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] group">
              {/* Subtle ambient backdrop circle */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent z-10 pointer-events-none" />
              
              {/* Portrait Image Frame */}
              <div className="relative overflow-hidden rounded-md border border-[#222222] bg-[#0E0E0E] shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
                <img
                  src="/assets/portrait.png"
                  alt="Sumanth R - AI Engineer & Software Developer"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  loading="eager"
                />
                
                {/* Floating Bottom Card */}
                <div className="absolute bottom-3 left-3 right-3 z-20 p-3 rounded bg-[#111111]/90 backdrop-blur-md border border-[#262626] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E50914] animate-ping" />
                    <span className="text-[11px] font-mono uppercase text-[#F5F5F5] font-semibold tracking-wider">
                      Verified Portfolio
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A3A3A3]">
                    IEEE SCEECS '26 Author
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Key Verified Metrics & Socials (Col 10 to 12) */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {/* Pill Quote Banner */}
            <div className="p-4 rounded-sm bg-[#111111] border border-[#222222] relative overflow-hidden group hover:border-[#380B0F] transition-all">
              <div className="flex items-start gap-2.5 mb-2">
                <Sparkles className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                <p className="text-xs text-[#E5E5E5] font-medium leading-relaxed">
                  "Turning AI research into reliable production software."
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#777777] uppercase tracking-wider block pl-6">
                Core Philosophy
              </span>
            </div>

            {/* Verified Metrics Stack */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {PERSONAL_INFO.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-sm bg-[#121212] border border-[#202020] hover:border-[#E50914]/40 transition-colors"
                >
                  <div className="font-display text-3xl sm:text-4xl text-[#E50914] font-bold leading-none mb-1">
                    {metric.value}
                  </div>
                  <div className="text-[11px] font-mono text-[#A3A3A3] uppercase tracking-wider leading-tight">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-2.5 rounded-sm bg-[#141414] border border-[#242424] hover:border-[#E50914] text-[#A3A3A3] hover:text-white flex items-center justify-center gap-2 text-xs font-mono transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-[#E50914]" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-2.5 rounded-sm bg-[#141414] border border-[#242424] hover:border-[#E50914] text-[#A3A3A3] hover:text-white flex items-center justify-center gap-2 text-xs font-mono transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#E50914]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-sm bg-[#141414] border border-[#242424] hover:border-[#E50914] text-[#A3A3A3] hover:text-white flex items-center justify-center transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4 text-[#E50914]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Editorial Scroll Prompt */}
        <div className="pt-12 sm:pt-16 flex items-center justify-between text-xs font-mono text-[#666666]">
          <div className="hidden sm:flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#333333]" />
            <span className="uppercase tracking-widest text-[#888888]">Scroll to discover work</span>
          </div>
          <a
            href="#about"
            className="flex items-center gap-2 text-[#A3A3A3] hover:text-[#E50914] transition-colors mx-auto sm:mx-0"
            aria-label="Scroll down to About section"
          >
            <span className="uppercase tracking-wider">Scroll Down</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#E50914]" />
          </a>
        </div>
      </div>
    </section>
  );
};
