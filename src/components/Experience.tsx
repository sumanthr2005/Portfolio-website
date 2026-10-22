import React from 'react';
import { Briefcase, Award, Calendar, MapPin, CheckCircle2, Trophy, Star } from 'lucide-react';
import { EXPERIENCES, ACHIEVEMENTS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#080808] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#E50914] tracking-widest uppercase">
            <span>05 // TRAJECTORY</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight text-[#F5F5F5] uppercase">
              EXPERIENCE & <span className="text-[#E50914]">ACHIEVEMENTS.</span>
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#888888] max-w-md">
              Verified software engineering internships, technical fellowships, and competitive hackathon honors.
            </p>
          </div>
        </div>

        {/* Experience Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: Work History Timeline (Col 1 to 8) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#A3A3A3] uppercase tracking-wider">
              <Briefcase className="w-4 h-4 text-[#E50914]" />
              <span>Professional Internships & Fellowships</span>
            </div>

            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="editorial-surface rounded-md p-6 sm:p-7 relative transition-all group"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-[#202020]">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#E50914] block">
                      {exp.type}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#CCCCCC]">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs font-mono text-[#888888]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#E50914]" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#666666]">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                      <span className="text-[#E50914] font-mono font-bold mt-0.5">↳</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1C1C1C]">
                  {exp.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-sm bg-[#161616] border border-[#242424] text-[10px] font-mono text-[#CCCCCC]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Hackathon Honors & Competitive Milestones (Col 9 to 12) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#A3A3A3] uppercase tracking-wider">
              <Trophy className="w-4 h-4 text-[#E50914]" />
              <span>Honors & Key Milestones</span>
            </div>

            {/* Hackathon Podium Feature Card */}
            <div className="p-6 rounded-md bg-[#131011] border border-[#3E1316] relative overflow-hidden group hover:border-[#E50914] transition-colors">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#E50914]/10 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-2 text-[#E50914] font-display text-4xl font-bold mb-1">
                <Trophy className="w-7 h-7" />
                <span>3RD PLACE</span>
              </div>
              <h4 className="font-display text-2xl text-white tracking-wide uppercase mb-1">
                CODEMAVENS 2025 HACKATHON
              </h4>
              <span className="text-xs font-mono text-[#A3A3A3] block mb-3">
                Organized by ACM-W SRM Student Chapter
              </span>
              <p className="text-xs text-[#CCCCCC] leading-relaxed mb-4">
                Designed, architected, and delivered a functional software prototype under intense time limits, evaluated on technical architecture, code quality, and practical viability.
              </p>
              <div className="px-2.5 py-1 rounded bg-[#1C1415] border border-[#3A181B] text-[11px] font-mono text-[#E50914] inline-block">
                Podium Finish • Competitive Hackathon
              </div>
            </div>

            {/* Additional Achievements */}
            <div className="space-y-4">
              {ACHIEVEMENTS.slice(1).map((ach, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-md bg-[#111111] border border-[#222222] hover:border-[#333333] transition-colors"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#888888] mb-1.5">
                    <span className="text-[#E50914] uppercase">{ach.category}</span>
                    <span>{ach.date}</span>
                  </div>
                  <h4 className="font-display text-xl text-white tracking-wide uppercase mb-1">
                    {ach.title}
                  </h4>
                  <span className="text-xs font-mono text-[#888888] block mb-2">
                    {ach.organization}
                  </span>
                  <p className="text-xs text-[#A3A3A3] leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Resume Link Box */}
            <div className="p-5 rounded-md bg-[#121212] border border-[#202020] text-center">
              <span className="text-xs font-mono text-[#A3A3A3] block mb-2">
                Need full employment history?
              </span>
              <a
                href="/Sumanth_R_Resume.pdf"
                download="Sumanth_R_Resume.pdf"
                className="btn-crimson w-full py-2.5 rounded-sm inline-block text-xs font-mono uppercase tracking-wider"
              >
                Download Complete Resume
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
