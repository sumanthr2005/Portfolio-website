import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, CheckCircle, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  const coursework = [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (Java/C++)",
    "Operating Systems & Concurrency",
    "Computer Networks & Protocols",
    "Machine Learning & Pattern Recognition",
    "Deep Learning & Neural Networks",
    "Cloud Computing & Distributed Systems"
  ];

  const credentials = [
    {
      title: "Google AI/ML Virtual Internship",
      issuer: "All India Council for Technical Education (AICTE)",
      date: "2024",
      highlight: "8+ ML models evaluated, 10+ hands-on labs on EDA, feature engineering & bias mitigation",
      badge: "Professional Training"
    },
    {
      title: "Software Engineering Fellow",
      issuer: "Headstarter AI",
      date: "2024–2025",
      highlight: "Collaborated on production web and AI projects with peer code reviews and agile methodologies",
      badge: "Selective Fellowship"
    },
    {
      title: "CodeMavens 2025 Hackathon Winner (3rd Place)",
      issuer: "ACM-W SRM Student Chapter",
      date: "2025",
      highlight: "Shipped functional end-to-end prototype under rigorous competition guidelines",
      badge: "Hackathon Podium"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#080808] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#E50914] tracking-widest uppercase">
            <span>07 // ACADEMICS</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight text-[#F5F5F5] uppercase">
              LEARNING. BUILDING. <span className="text-[#E50914]">IMPROVING.</span>
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#888888] max-w-md">
              Rigorous computer science curriculum paired with verified competitive achievements and industry fellowships.
            </p>
          </div>
        </div>

        {/* Grid: Education on Left + Verified Credentials on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 6 COLS: SRM IST Academic Degree */}
          <div className="lg:col-span-6 editorial-surface rounded-md p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#202020]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded bg-[#161616] border border-[#282828]">
                    <GraduationCap className="w-6 h-6 text-[#E50914]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#E50914] block">
                      UNDERGRADUATE DEGREE
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase">
                      B.Tech. in Computer Science & Engineering
                    </h3>
                  </div>
                </div>
              </div>

              {/* Specialization & Institution */}
              <div className="space-y-3 mb-6">
                <div>
                  <span className="text-xs font-mono text-[#888888] uppercase block">Specialization</span>
                  <div className="text-base text-[#F5F5F5] font-semibold">
                    Artificial Intelligence & Machine Learning (AIML)
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#888888] uppercase block">Institution</span>
                  <div className="text-base text-[#CCCCCC]">
                    SRM Institute of Science and Technology, Chennai
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3 rounded bg-[#141414] border border-[#222222]">
                    <span className="text-[10px] font-mono text-[#777777] uppercase block">Graduation</span>
                    <span className="font-display text-2xl text-white">2027</span>
                    <span className="text-[10px] font-mono text-[#888888] block">2023 – 2027</span>
                  </div>

                  <div className="p-3 rounded bg-[#141414] border border-[#222222]">
                    <span className="text-[10px] font-mono text-[#777777] uppercase block">Current CGPA</span>
                    <span className="font-display text-2xl text-emerald-400 font-bold">8.98 / 10</span>
                    <span className="text-[10px] font-mono text-[#888888] block">Verified Transcript</span>
                  </div>
                </div>
              </div>

              {/* Core Coursework */}
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#888888] block mb-3">
                  Foundational Coursework
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {coursework.map((course, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-sm bg-[#141414] border border-[#202020] text-xs font-mono text-[#CCCCCC]"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#E50914] shrink-0" />
                      <span className="truncate">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 6 COLS: Verified Credentials & Training */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#A3A3A3] uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#E50914]" />
              <span>Verified Industry Credentials & Fellowships</span>
            </div>

            {credentials.map((cred, idx) => (
              <div
                key={idx}
                className="p-6 rounded-md bg-[#111111] border border-[#222222] hover:border-[#380B0F] transition-all"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-[#888888] mb-2">
                  <span className="px-2 py-0.5 rounded bg-[#1A1A1A] border border-[#2C2C2C] text-[#E50914] uppercase">
                    {cred.badge}
                  </span>
                  <span>{cred.date}</span>
                </div>

                <h4 className="font-display text-2xl text-white tracking-wide uppercase mb-1">
                  {cred.title}
                </h4>

                <span className="text-xs font-mono text-[#CCCCCC] block mb-3">
                  Issued by: {cred.issuer}
                </span>

                <p className="text-xs text-[#A3A3A3] leading-relaxed">
                  {cred.highlight}
                </p>
              </div>
            ))}

            {/* Quick Info Banner */}
            <div className="p-4 rounded-md bg-[#131112] border border-[#2E181A] text-xs font-mono text-[#D4B2B5] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E50914] shrink-0" />
              <span>
                All academic credentials and training programs are verifiable through official SRM IST transcripts and AICTE certifications.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
