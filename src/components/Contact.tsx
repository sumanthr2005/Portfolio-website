import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill in your name, email, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#E50914', '#ffffff', '#8B0000']
      });

      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.open(mailtoUrl, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#080808] border-t border-[#1C1C1C] relative">
      {/* Background Red Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-[#E50914]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#E50914] tracking-widest uppercase">
            <span>08 // INITIATE CONTACT</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight text-[#F5F5F5] uppercase">
              LET'S BUILD SOMETHING <span className="text-[#E50914]">MEANINGFUL.</span>
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#888888] max-w-md">
              Have an engineering opportunity, a research collaboration, or an ambitious system worth building? Let's talk.
            </p>
          </div>
        </div>

        {/* Contact Grid: Direct Info on Left + Interactive Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT 5 COLS: Direct Contact Cards (Reference Inspired) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-md bg-[#111111] border border-[#242424] space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#E50914] block mb-1">
                  DIRECT CHANNELS
                </span>
                <h3 className="font-display text-2xl text-white tracking-wide uppercase">
                  REACH OUT DIRECTLY
                </h3>
                <p className="text-xs text-[#888888] font-mono mt-1">
                  Responses typically sent within 24 hours.
                </p>
              </div>

              {/* Email Pill */}
              <div className="p-4 rounded-sm bg-[#161616] border border-[#262626] flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#1F1F1F] text-[#E50914]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#777777] uppercase block">Email Address</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-[#E50914] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded bg-[#222222] text-[#888888] hover:text-white transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Pill */}
              <div className="p-4 rounded-sm bg-[#161616] border border-[#262626] flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#1F1F1F] text-[#E50914]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#777777] uppercase block">Phone / WhatsApp</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-[#E50914] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded bg-[#222222] text-[#888888] hover:text-white transition-colors"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Pill */}
              <div className="p-4 rounded-sm bg-[#161616] border border-[#262626] flex items-center gap-3">
                <div className="p-2 rounded bg-[#1F1F1F] text-[#E50914]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#777777] uppercase block">Location</span>
                  <span className="text-xs sm:text-sm font-mono text-[#CCCCCC]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-sm bg-[#181818] border border-[#262626] hover:border-[#E50914] text-xs font-mono text-[#A3A3A3] hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-[#E50914]" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-sm bg-[#181818] border border-[#262626] hover:border-[#E50914] text-xs font-mono text-[#A3A3A3] hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#E50914]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Availability Box */}
            <div className="p-5 rounded-md bg-[#111111] border border-[#202020] text-xs font-mono">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="uppercase">2026 / 2027 OPPORTUNITY AVAILABILITY</span>
              </div>
              <p className="text-[#888888] leading-relaxed">
                Currently open to Software Engineer Intern, AI/ML Intern, Backend Engineer, and Forward Deployed Engineer roles.
              </p>
            </div>
          </div>

          {/* RIGHT 7 COLS: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="editorial-surface rounded-md p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#202020]">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase">
                    SEND A MESSAGE
                  </h3>
                  <span className="text-xs font-mono text-[#888888]">
                    Direct dispatch to {PERSONAL_INFO.email}
                  </span>
                </div>
                <Sparkles className="w-5 h-5 text-[#E50914]" />
              </div>

              {submitSuccess ? (
                <div className="p-8 text-center space-y-4 rounded bg-[#131112] border border-[#3E1316] animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#E50914]/20 border border-[#E50914] text-[#E50914] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-3xl text-white uppercase">
                    MESSAGE PREPARED!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#CCCCCC] font-mono max-w-md mx-auto leading-relaxed">
                    Your email client has been opened with your inquiry. You can also contact me directly anytime at <strong className="text-white">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="btn-crimson px-5 py-2 rounded-sm text-xs font-mono uppercase tracking-wider inline-block mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3 rounded bg-red-950/60 border border-red-800 text-xs font-mono text-red-200">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#888888] mb-1.5">
                        Your Name <span className="text-[#E50914]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Vance"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-[#161616] border border-[#282828] text-white text-xs font-mono focus:border-[#E50914] focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#888888] mb-1.5">
                        Your Email <span className="text-[#E50914]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-[#161616] border border-[#282828] text-white text-xs font-mono focus:border-[#E50914] focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#888888] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Software Engineer Internship / Project Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#161616] border border-[#282828] text-white text-xs font-mono focus:border-[#E50914] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#888888] mb-1.5">
                      Your Message <span className="text-[#E50914]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Sumanth, we are reviewing your profile and would like to speak regarding an AI/SDE internship role..."
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#161616] border border-[#282828] text-white text-xs font-mono focus:border-[#E50914] focus:outline-none transition-colors resize-none"
                      required
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#666666]">
                      🔒 Secure client-side mailto dispatch. Zero spam.
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-crimson inline-flex items-center gap-2 px-6 py-3 rounded-sm text-xs font-mono uppercase tracking-wider disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Preparing...</span>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
