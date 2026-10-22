import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-[#101010] border border-[#2A2A2A] rounded-md shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222222] bg-[#141414]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-[#E50914]/15 border border-[#E50914]/40 text-[#E50914]">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#888888] hidden sm:inline">
              CASE STUDY // {project.id.toUpperCase()}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-sm bg-[#1C1C1C] text-[#A3A3A3] hover:text-white hover:bg-[#252525] transition-colors focus:outline-none"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Title & Tagline */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E50914] block mb-1">
              {project.badge}
            </span>
            <h3 className="font-display text-4xl sm:text-5xl text-white tracking-wide uppercase mb-2">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-[#CCCCCC] font-medium leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-sm bg-[#161616] border border-[#242424]">
                <div className="text-xl sm:text-2xl font-display text-[#E50914] font-bold">
                  {m.value}
                </div>
                <div className="text-[10px] font-mono text-[#888888] uppercase tracking-wider">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-sm bg-[#141414] border border-[#222222]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E50914] font-semibold mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-sm bg-[#141414] border border-[#222222]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 font-semibold mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* System Architecture Flow */}
          <div className="p-6 rounded-sm bg-[#0C0C0C] border border-[#222222]">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-white font-semibold mb-4">
              <Layers className="w-4 h-4 text-[#E50914]" />
              <span>System Architecture & Pipeline Flow</span>
            </div>
            <div className="space-y-2.5">
              {project.caseStudy.systemArchitecture.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-sm bg-[#141414] border border-[#1E1E1E] text-xs font-mono text-[#CCCCCC]"
                >
                  <span className="w-5 h-5 rounded-full bg-[#E50914]/20 text-[#E50914] flex items-center justify-center shrink-0 font-bold text-[10px]">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Decisions & Core Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#E50914] mb-3">
                Core Challenges Overcome
              </h4>
              <ul className="space-y-2">
                {project.caseStudy.coreChallenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#A3A3A3] leading-relaxed">
                    <span className="text-[#E50914] shrink-0 font-mono">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
                Architectural Trade-offs & Decisions
              </h4>
              <ul className="space-y-2">
                {project.caseStudy.technicalDecisions.map((decision, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#A3A3A3] leading-relaxed">
                    <span className="text-emerald-400 shrink-0 font-mono">•</span>
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#888888] mb-3">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-sm bg-[#161616] border border-[#282828] text-xs font-mono text-[#D4D4D4]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Takeaway */}
          <div className="p-4 rounded-sm bg-[#1A1112] border border-[#3E1316] text-xs sm:text-sm text-[#F5C2C4]">
            <strong className="text-white block font-mono text-xs uppercase mb-1">
              Engineering Takeaway
            </strong>
            {project.caseStudy.keyTakeaway}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[#222222] bg-[#141414] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-crimson inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="btn-outline px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
