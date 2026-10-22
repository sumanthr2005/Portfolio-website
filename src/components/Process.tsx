import React from 'react';
import { Search, PenTool, Terminal, CheckCircle2, RefreshCw, Quote, ArrowUpRight } from 'lucide-react';
import { WORK_PROCESS } from '../data/portfolioData';

export const Process: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Search className="w-5 h-5 text-[#E50914]" />;
      case 1: return <PenTool className="w-5 h-5 text-[#E50914]" />;
      case 2: return <Terminal className="w-5 h-5 text-[#E50914]" />;
      case 3: return <CheckCircle2 className="w-5 h-5 text-[#E50914]" />;
      default: return <RefreshCw className="w-5 h-5 text-[#E50914]" />;
    }
  };

  return (
    <section id="process" className="py-24 md:py-32 bg-[#0A0A0A] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#E50914] tracking-widest uppercase">
            <span>06 // METHODOLOGY</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight text-[#F5F5F5] uppercase">
              FROM PROBLEM <span className="text-[#E50914]">TO PRODUCT.</span>
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#888888] max-w-md">
              A disciplined five-stage engineering process designed to turn complex specifications into resilient, measurable systems.
            </p>
          </div>
        </div>

        {/* Grid: 5-Step Process on Left + Editorial Quote Card on Right (Direct Reference Match) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT 7 COLS: 5 Sequential Work Process Steps */}
          <div className="lg:col-span-7 space-y-4">
            {WORK_PROCESS.map((step, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-md bg-[#111111] border border-[#222222] hover:border-[#380B0F] transition-all flex items-start gap-4 sm:gap-6 group"
              >
                {/* Step Number Badge */}
                <div className="w-12 h-12 rounded-full bg-[#181818] border border-[#2B2B2B] group-hover:border-[#E50914] flex items-center justify-center shrink-0 transition-colors shadow-inner">
                  <span className="font-display text-2xl text-[#E50914] font-bold">
                    {step.step}
                  </span>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-display text-2xl text-white tracking-wide uppercase group-hover:text-[#E50914] transition-colors">
                      {step.title}
                    </h3>
                    <div className="p-1.5 rounded bg-[#181818] border border-[#262626] hidden sm:block">
                      {getStepIcon(idx)}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#E50914] uppercase tracking-wider block mb-2">
                    {step.subtitle}
                  </span>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT 5 COLS: Editorial Red Quote Panel (Inspired by the Reference Image Right Panel) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-md bg-gradient-to-br from-[#1C080A] via-[#14080A] to-[#0D0506] border border-[#3E1316] relative overflow-hidden shadow-2xl">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E50914]/15 blur-[90px] pointer-events-none" />

            <div>
              {/* Huge Crimson Quotation Mark */}
              <div className="font-serif text-7xl sm:text-8xl text-[#E50914] leading-none select-none -mb-6 opacity-90">
                “
              </div>

              {/* Quote Body */}
              <blockquote className="font-sans text-xl sm:text-2xl text-[#F5F5F5] font-semibold leading-snug mb-8 relative z-10">
                Good software engineering is not merely how complex a neural model or backend query is, but how reliably, safely, and transparently it serves the end user.
              </blockquote>

              {/* Signature Block */}
              <div className="space-y-1 mb-8">
                <div className="font-script text-3xl sm:text-4xl text-[#E50914]">
                  Sumanth R.
                </div>
                <div className="text-xs font-mono text-[#CCCCCC] uppercase tracking-wider">
                  AI / Machine Learning & Software Engineer
                </div>
                <div className="text-[11px] font-mono text-[#888888]">
                  SRM Institute of Science and Technology
                </div>
              </div>
            </div>

            {/* Bottom Callout Banner */}
            <div className="pt-6 border-t border-[#381518] relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#E50914] block">
                    LET'S CREATE
                  </span>
                  <span className="font-display text-2xl text-white tracking-wide uppercase">
                    SOMETHING GREAT TOGETHER
                  </span>
                </div>
                <a
                  href="#contact"
                  className="w-10 h-10 rounded-full bg-[#E50914] text-white flex items-center justify-center hover:bg-[#ff1f2a] transition-all hover:scale-105 shrink-0 shadow-lg shadow-[#E50914]/40"
                  aria-label="Contact Sumanth"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
