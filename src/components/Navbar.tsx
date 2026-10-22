import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileDown, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Toolkit', href: '#skills' },
    { name: 'Research', href: '#research' },
    { name: 'Experience', href: '#experience' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[#222222] py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 text-decoration-none focus:outline-none"
            aria-label="Sumanth R - Home"
          >
            <div className="w-10 h-10 rounded-sm bg-[#141414] border border-[#262626] group-hover:border-[#E50914] flex items-center justify-center transition-colors shadow-sm">
              <span className="font-display text-xl tracking-wider text-[#E50914] font-bold">SR</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl tracking-wide text-[#F5F5F5] group-hover:text-white transition-colors">
                SUMANTH R
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#A3A3A3] -mt-1 uppercase">
                AI / SDE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase font-mono tracking-widest text-[#A3A3A3] hover:text-[#E50914] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E50914] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Status Pill & Resume CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141414] border border-[#222222] text-[11px] font-mono text-[#A3A3A3]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>OPEN TO INTERNSHIPS</span>
            </div>

            <a
              href={PERSONAL_INFO.resumePdf}
              download="Sumanth_R_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium tracking-wider uppercase bg-[#141414] text-[#F5F5F5] border border-[#333333] hover:border-[#E50914] hover:text-white hover:bg-[#E50914]/10 rounded-sm transition-all"
            >
              <FileDown className="w-3.5 h-3.5 text-[#E50914]" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={PERSONAL_INFO.resumePdf}
              download="Sumanth_R_Resume.pdf"
              className="p-2 rounded-sm bg-[#141414] border border-[#262626] text-[#E50914]"
              aria-label="Download Resume"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm bg-[#141414] border border-[#262626] text-[#F5F5F5] hover:text-[#E50914] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#222222] px-6 py-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-3 mb-2 border-b border-[#1A1A1A] text-xs font-mono text-[#A3A3A3]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>OPEN FOR INTERNSHIPS & SDE ROLES</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base uppercase font-mono tracking-wider text-[#A3A3A3] hover:text-[#E50914] py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-[#1A1A1A] flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.resumePdf}
                download="Sumanth_R_Resume.pdf"
                className="btn-crimson flex items-center justify-center gap-2 py-3 rounded-sm text-xs uppercase font-mono"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-outline flex items-center justify-center gap-2 py-2.5 rounded-sm text-xs uppercase font-mono"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-[#E50914]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
