import React from 'react';
import { Terminal, Cpu, Database, Award, ArrowUpRight, CheckCircle2, MapPin, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0A0A0A] border-t border-[#1F1F1F] relative">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E50914]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#E50914] tracking-widest uppercase">
            <span>01 // NARRATIVE</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight text-[#F5F5F5] uppercase">
              BEYOND THE <span className="text-[#E50914]">CODE.</span>
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#888888] max-w-md">
              Bridging deep learning algorithms with high-throughput backend architecture and pragmatic software design.
            </p>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT: Professional Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#A3A3A3] text-base leading-relaxed">
            <p className="text-lg text-[#F5F5F5] font-medium leading-relaxed">
              I am an engineering student at <strong className="text-white">SRM Institute of Science and Technology</strong> specializing in Artificial Intelligence and Machine Learning, with a relentless drive to build practical software systems that survive beyond local notebooks.
            </p>

            <p>
              Rather than viewing machine learning as an isolated exercise in curve-fitting, I approach AI from an <span className="text-[#F5F5F5] font-medium">end-to-end engineering mindset</span>: how inputs are ingested and validated, how model pipelines scale across asynchronous workers, how explainability helps human reviewers make sound decisions, and how backend services reliably serve predictions with low latency.
            </p>

            <p>
              My hands-on experience spans building full-stack applications with <span className="text-[#F5F5F5] font-medium">Java, Spring Boot, MySQL, and React</span> during my on-site internship at <strong className="text-[#F5F5F5]">Works Applications India</strong>, developing asynchronous microservices at <strong className="text-[#F5F5F5]">Hyphiin</strong>, conducting aerial computer vision detection for marine environmental monitoring, and publishing peer-reviewed deep learning research at the <span className="text-[#E50914] font-medium">IEEE SCEECS 2026</span> conference.
            </p>

            <p>
              Whether orchestrating multi-agent LLM systems with <strong className="text-[#F5F5F5]">LangGraph</strong>, architecting fault-tolerant task schedulers with <strong className="text-[#F5F5F5]">FastAPI & Redis</strong>, or fine-tuning vision and language models, I care deeply about type safety, transparent reasoning, and software maintainability.
            </p>

            {/* Core Values / Engineering Principles */}
            <div className="pt-6 border-t border-[#222222] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-sm bg-[#121212] border border-[#222222]">
                <div className="flex items-center gap-2 mb-1.5 text-xs font-mono uppercase text-[#F5F5F5]">
                  <Cpu className="w-4 h-4 text-[#E50914]" />
                  <span>Pragmatic AI Systems</span>
                </div>
                <p className="text-xs text-[#888888] leading-normal">
                  Prioritizing explainable, verifiable AI architectures over opaque black boxes.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-[#121212] border border-[#222222]">
                <div className="flex items-center gap-2 mb-1.5 text-xs font-mono uppercase text-[#F5F5F5]">
                  <Database className="w-4 h-4 text-[#E50914]" />
                  <span>Backend Architecture</span>
                </div>
                <p className="text-xs text-[#888888] leading-normal">
                  Clean schemas, idempotent endpoints, distributed queuing, and optimized query plans.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Compact Profile Panel */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="p-6 rounded-sm bg-[#111111] border border-[#242424] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E50914]/10 rounded-bl-full pointer-events-none" />

              {/* Header */}
              <div className="flex items-center gap-3 pb-4 mb-5 border-b border-[#202020]">
                <div className="w-12 h-12 rounded-sm overflow-hidden border border-[#333333] shrink-0 bg-[#141414]">
                  <img
                    src="/assets/avatar_badge.png"
                    alt="Sumanth R"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white tracking-wide leading-none">
                    SUMANTH R
                  </h3>
                  <span className="text-xs font-mono text-[#A3A3A3]">
                    B.Tech. CSE (AI & ML)
                  </span>
                </div>
              </div>

              {/* Key Attributes */}
              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="text-[#777777] uppercase block mb-1">Academic Institution</span>
                  <div className="flex items-center gap-1.5 text-[#E5E5E5] font-semibold text-sm">
                    <GraduationCap className="w-4 h-4 text-[#E50914]" />
                    <span>SRM Institute of Science and Technology</span>
                  </div>
                  <span className="text-[#888888] text-[11px] block mt-0.5">
                    Class of 2027 • Current CGPA: <strong className="text-emerald-400">8.98 / 10</strong>
                  </span>
                </div>

                <div>
                  <span className="text-[#777777] uppercase block mb-1">Target Roles</span>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {["Software Engineer Intern", "AI/ML Engineer Intern", "Backend Engineer", "Forward Deployed Engineer"].map((role, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-sm bg-[#1A1A1A] border border-[#2C2C2C] text-[#D4D4D4] text-[11px]"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[#777777] uppercase block mb-1">Primary Technical Interests</span>
                  <p className="text-[#CCCCCC] leading-relaxed text-[11px]">
                    Multimodal AI Systems, Explainable AI (XAI), Agentic Workflows (LangGraph), Scalable Backend Architecture (FastAPI/Spring Boot), Distributed Scheduling, Computer Vision.
                  </p>
                </div>

                <div>
                  <span className="text-[#777777] uppercase block mb-1">Location & Relocation</span>
                  <div className="flex items-center gap-1.5 text-[#E5E5E5]">
                    <MapPin className="w-3.5 h-3.5 text-[#E50914]" />
                    <span>Chennai, Tamil Nadu, India (Open to Remote & On-Site Roles)</span>
                  </div>
                </div>
              </div>

              {/* Action buttons in panel */}
              <div className="pt-6 mt-6 border-t border-[#202020] flex items-center justify-between">
                <a
                  href="#contact"
                  className="btn-crimson inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider"
                >
                  <span>Connect With Me</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#A3A3A3] hover:text-[#E50914] transition-colors flex items-center gap-1"
                >
                  <span>View GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
