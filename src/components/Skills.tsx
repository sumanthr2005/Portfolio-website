import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Terminal, Cpu, Database, Server, Cloud, BookOpen, Layers } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Terminal className="w-5 h-5 text-[#E50914]" />;
      case 1: return <Cpu className="w-5 h-5 text-[#E50914]" />;
      case 2: return <Server className="w-5 h-5 text-[#E50914]" />;
      case 3: return <Database className="w-5 h-5 text-[#E50914]" />;
      case 4: return <Cloud className="w-5 h-5 text-[#E50914]" />;
      default: return <BookOpen className="w-5 h-5 text-[#E50914]" />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#080808] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#E50914] tracking-widest uppercase">
            <span>03 // COMPETENCIES</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight text-[#F5F5F5] uppercase">
              THE ENGINEERING <span className="text-[#E50914]">TOOLKIT.</span>
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#888888] max-w-md">
              A curated inventory of programming languages, frameworks, cloud tooling, and systems theory grounded in production work.
            </p>
          </div>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="editorial-surface rounded-md p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#202020]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#161616] border border-[#262626]">
                      {getCategoryIcon(idx)}
                    </div>
                    <h3 className="font-display text-2xl text-white tracking-wide uppercase">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#666666]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-xs text-[#888888] leading-relaxed mb-6 font-mono">
                  {category.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`px-3 py-1.5 rounded-sm text-xs font-mono transition-all flex items-center gap-1.5 ${
                        skill.highlight
                          ? 'bg-[#181213] text-[#F5F5F5] border border-[#E50914]/40 hover:border-[#E50914]'
                          : 'bg-[#141414] text-[#A3A3A3] border border-[#242424] hover:text-white hover:border-[#383838]'
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Marker */}
              <div className="pt-6 mt-6 border-t border-[#1C1C1C] flex items-center justify-between text-[10px] font-mono text-[#555555]">
                <span>VERIFIED EXPERIENCE</span>
                <span className="text-[#888888]">{category.skills.length} TECHNOLOGIES</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Competency Measurement */}
        <div className="mt-12 p-4 rounded-sm bg-[#101010] border border-[#202020] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#777777]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E50914]" />
            <span>Highlighted items indicate core production competencies applied in internships and open-source systems.</span>
          </div>
          <span className="text-[#999999]">Zero arbitrary percentage bars. Verifiable code only.</span>
        </div>

      </div>
    </section>
  );
};
