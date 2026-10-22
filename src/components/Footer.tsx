import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#181818] py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#1A1A1A]">
          {/* Identity & Mission */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#111111] border border-[#222222] flex items-center justify-center font-display text-lg text-[#E50914] font-bold">
                SR
              </div>
              <span className="font-display text-2xl text-white tracking-wide uppercase">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-[#888888] font-mono leading-relaxed max-w-sm">
              {PERSONAL_INFO.headline} Dedicated to building practical AI systems, high-throughput backends, and maintainable software.
            </p>
            <div className="text-[11px] font-mono text-[#666666]">
              SRM Institute of Science and Technology • Class of 2027
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E50914] block mb-3">
              DIRECTORY
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#888888]">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-white transition-colors">Selected Projects</a>
              <a href="#skills" className="hover:text-white transition-colors">Engineering Toolkit</a>
              <a href="#research" className="hover:text-white transition-colors">Research & Papers</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#process" className="hover:text-white transition-colors">Work Process</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              <a href={PERSONAL_INFO.resumePdf} download="Sumanth_R_Resume.pdf" className="text-[#E50914] hover:underline">Download Resume</a>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#888888] block mb-3 md:text-right">
                CHANNELS
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-sm bg-[#121212] border border-[#222222] text-[#888888] hover:text-[#E50914] hover:border-[#E50914] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-sm bg-[#121212] border border-[#222222] text-[#888888] hover:text-[#E50914] hover:border-[#E50914] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-sm bg-[#121212] border border-[#222222] text-[#888888] hover:text-[#E50914] hover:border-[#E50914] transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 flex items-center gap-2 text-xs font-mono uppercase text-[#A3A3A3] hover:text-[#E50914] transition-colors group"
            >
              <span>Back to Top</span>
              <div className="p-1.5 rounded-full bg-[#141414] border border-[#242424] group-hover:border-[#E50914] transition-colors">
                <ArrowUp className="w-3.5 h-3.5 text-[#E50914]" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#555555]">
          <div>
            © {currentYear} {PERSONAL_INFO.name}. All verified rights reserved.
          </div>
          <div className="text-[11px] text-[#444444]">
            Crafted with React, TypeScript & Tailwind CSS • Designed with editorial rigor
          </div>
        </div>

      </div>
    </footer>
  );
};
