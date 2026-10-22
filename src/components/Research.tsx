import React from 'react';
import { BookOpen, ExternalLink, Award, FileText, CheckCircle2, BarChart2, Layers } from 'lucide-react';
import { RESEARCH_PUBLICATION } from '../data/portfolioData';

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-24 md:py-32 bg-[#0A0A0A] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#E50914] tracking-widest uppercase">
            <span>04 // SCHOLARLY CONTRIBUTIONS</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight text-[#F5F5F5] uppercase">
              RESEARCH & <span className="text-[#E50914]">PUBLICATIONS.</span>
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#888888] max-w-md">
              Peer-reviewed deep learning research published at IEEE international conferences on diagnostic medical imaging.
            </p>
          </div>
        </div>

        {/* Featured Publication Hero Card */}
        <div className="editorial-surface rounded-md p-6 sm:p-10 relative overflow-hidden">
          {/* Top subtle highlight banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-[#222222]">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-sm bg-[#E50914]/15 border border-[#E50914]/40 text-[#E50914] text-xs font-mono font-semibold uppercase tracking-wider">
                {RESEARCH_PUBLICATION.status}
              </span>
              <span className="text-xs font-mono text-[#CCCCCC]">
                {RESEARCH_PUBLICATION.conference}
              </span>
            </div>
            <span className="text-xs font-mono text-[#888888]">
              Year: {RESEARCH_PUBLICATION.year}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 cols: Title, Abstract, Contributions */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-wide uppercase leading-tight mb-3">
                  {RESEARCH_PUBLICATION.title}
                </h3>
                <p className="text-xs font-mono text-[#E50914] uppercase tracking-wider">
                  Author: Sumanth R (Primary Researcher & Co-author)
                </p>
              </div>

              {/* Abstract */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#888888] mb-2 flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-[#E50914]" />
                  <span>Technical Abstract</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                  {RESEARCH_PUBLICATION.abstract}
                </p>
              </div>

              {/* Key Methodological Contributions */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#888888] mb-3">
                  Research Contributions & Pipeline
                </h4>
                <div className="space-y-2">
                  {RESEARCH_PUBLICATION.contributions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#CCCCCC]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Quantitative Benchmarks & Dataset Card */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Dataset Scope Card */}
              <div className="p-5 rounded-sm bg-[#141414] border border-[#242424]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E50914] mb-1">
                  <Layers className="w-4 h-4" />
                  <span>Dataset Scope</span>
                </div>
                <div className="font-display text-2xl text-white">
                  16,000+ MRI SCANS
                </div>
                <p className="text-[11px] font-mono text-[#888888] mt-1">
                  Aggregated from Kaggle, BRISC, and FigShare repositories with stratified 10-fold cross-validation.
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                {RESEARCH_PUBLICATION.keyMetrics.map((metric, idx) => (
                  <div key={idx} className="p-4 rounded-sm bg-[#131313] border border-[#222222]">
                    <div className="font-display text-3xl text-[#E50914] font-bold leading-none mb-1">
                      {metric.value}
                    </div>
                    <div className="text-[10px] font-mono uppercase text-[#A3A3A3] tracking-wider leading-snug">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA link */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="btn-outline w-full py-3 rounded-sm flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider"
                >
                  <BookOpen className="w-4 h-4 text-[#E50914]" />
                  <span>Inquire Regarding Paper Preprint</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
