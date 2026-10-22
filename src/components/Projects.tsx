import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS, type Project } from '../data/portfolioData';
import { CaseStudyModal } from './CaseStudyModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  const categories = ['All', 'AI / ML', 'Full Stack', 'Systems / Backend'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#080808] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#E50914] tracking-widest uppercase">
              <span>02 // SELECTED WORK</span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight text-[#F5F5F5] uppercase">
              SELECTED <span className="text-[#E50914]">PROJECTS.</span>
            </h2>
            <p className="text-sm font-mono text-[#888888] mt-2 max-w-xl">
              Experiments, distributed systems, and end-to-end applications built to solve meaningful problems with real constraints.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#121212] p-1.5 rounded-sm border border-[#222222]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#E50914] text-white shadow-sm font-semibold'
                    : 'text-[#888888] hover:text-white hover:bg-[#1A1A1A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Project Grid (Inspired by Reference Design) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            const projectNumber = String(index + 1).padStart(2, '0');
            const isLarge = index === 0 || index === 1;

            return (
              <div
                key={project.id}
                className={`group editorial-surface rounded-md p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                  isLarge ? 'lg:col-span-6' : 'lg:col-span-6'
                }`}
              >
                {/* Subtle top red glow bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#E50914] transition-colors" />

                <div>
                  {/* Top Bar: Number + Category Badge + Action Icons */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-4xl sm:text-5xl text-[#E50914] font-black leading-none">
                        {projectNumber}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#E50914]">
                          {project.badge}
                        </span>
                        <span className="text-[11px] font-mono text-[#888888]">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-sm bg-[#1A1A1A] text-[#888888] hover:text-white hover:bg-[#252525] transition-colors"
                          aria-label={`${project.title} GitHub repository`}
                          title="View GitHub Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      <button
                        onClick={() => setActiveCaseStudy(project)}
                        className="p-2 rounded-sm bg-[#1A1A1A] text-[#888888] group-hover:text-[#E50914] hover:bg-[#252525] transition-colors"
                        aria-label={`Open ${project.title} case study`}
                        title="View Architecture & Case Study"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Visual Blueprint / Terminal Abstract Frame */}
                  <div className="relative mb-6 p-4 rounded-sm bg-[#0B0B0B] border border-[#1F1F1F] group-hover:border-[#380B0F] transition-colors">
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#1A1A1A] text-[10px] font-mono text-[#666666]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#E50914]" />
                        <span>MODULE: {project.id}.py</span>
                      </div>
                      <span className="text-[#888888]">PROD READY</span>
                    </div>

                    {/* Architecture Abstract Visual */}
                    <div className="space-y-1.5 font-mono text-[11px]">
                      <div className="text-[#A3A3A3] truncate">
                        <span className="text-[#E50914] font-bold">&gt;</span> target: <strong className="text-white">{project.tagline}</strong>
                      </div>
                      <div className="text-[#666666] text-[10px] flex items-center gap-2 flex-wrap pt-1">
                        {project.metrics.map((m, mIdx) => (
                          <span key={mIdx} className="px-2 py-0.5 rounded bg-[#161616] text-[#D4D4D4] border border-[#262626]">
                            {m.label}: <strong className="text-[#E50914]">{m.value}</strong>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide uppercase mb-2 group-hover:text-[#E50914] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Features Bullet Snippet */}
                  <div className="space-y-1.5 mb-6 text-xs text-[#888888]">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <span className="text-[#E50914] font-mono font-bold">↳</span>
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack Tags + Case Study CTA */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-[#1C1C1C]">
                    {project.techStack.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-sm bg-[#161616] border border-[#242424] text-[10px] font-mono text-[#CCCCCC]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#666666]">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveCaseStudy(project)}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F5F5F5] group-hover:text-[#E50914] transition-colors"
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-[#777777] hover:text-white transition-colors"
                      >
                        Source Code →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Case Study Modal */}
        <CaseStudyModal
          project={activeCaseStudy}
          onClose={() => setActiveCaseStudy(null)}
        />
      </div>
    </section>
  );
};
