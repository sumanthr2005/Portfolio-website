import React, { useState } from 'react';
import { Shield, Sparkles, Terminal, ArrowRight, Play, RefreshCw, CheckCircle2, AlertOctagon, HelpCircle, Layers } from 'lucide-react';

interface Scenario {
  title: string;
  category: string;
  input: string;
  label: 'HATE SPEECH' | 'SAFE / CONSTRUCTIVE' | 'TOXIC HARASSMENT';
  riskScore: number;
  tokens: { word: string; attribution: number }[];
  action: 'Auto-Remove' | 'Allow' | 'Flag for Moderator';
  reasoning: string;
}

const PRESET_SCENARIOS: Scenario[] = [
  {
    title: "Scenario A: Xenophobic Hate Speech",
    category: "Severe Violation",
    input: "They should all be eliminated immediately, subhuman parasites invading our country.",
    label: "HATE SPEECH",
    riskScore: 0.96,
    tokens: [
      { word: "They", attribution: 0.02 },
      { word: "should", attribution: 0.05 },
      { word: "all", attribution: 0.04 },
      { word: "be", attribution: 0.02 },
      { word: "eliminated", attribution: 0.91 },
      { word: "immediately,", attribution: 0.15 },
      { word: "subhuman", attribution: 0.98 },
      { word: "parasites", attribution: 0.95 },
      { word: "invading", attribution: 0.74 },
      { word: "our", attribution: 0.03 },
      { word: "country.", attribution: 0.05 },
    ],
    action: "Auto-Remove",
    reasoning: "Fusion agent identified compound dehumanizing slurs and violent rhetoric. Tokens 'subhuman' and 'parasites' dominate SHAP attribution weight."
  },
  {
    title: "Scenario B: Heated Technical Debate",
    category: "Safe Discourse",
    input: "I strongly disagree with your architectural proposal, PostgreSQL is clearly superior for transactional ACID guarantees.",
    label: "SAFE / CONSTRUCTIVE",
    riskScore: 0.07,
    tokens: [
      { word: "I", attribution: 0.01 },
      { word: "strongly", attribution: 0.12 },
      { word: "disagree", attribution: 0.22 },
      { word: "with", attribution: 0.01 },
      { word: "your", attribution: 0.01 },
      { word: "architectural", attribution: 0.02 },
      { word: "proposal,", attribution: 0.01 },
      { word: "PostgreSQL", attribution: 0.01 },
      { word: "is", attribution: 0.01 },
      { word: "clearly", attribution: 0.03 },
      { word: "superior", attribution: 0.08 },
      { word: "for", attribution: 0.01 },
      { word: "transactional", attribution: 0.01 },
      { word: "ACID", attribution: 0.01 },
      { word: "guarantees.", attribution: 0.01 }
    ],
    action: "Allow",
    reasoning: "Text Agent confirmed disagreement vocabulary without abusive target vectors. SHAP values remain well beneath the 0.40 review threshold."
  },
  {
    title: "Scenario C: Ambiguous Gaming Toxicity",
    category: "Borderline Toxicity",
    input: "You are totally useless at this game, uninstall right now you garbage feeder.",
    label: "TOXIC HARASSMENT",
    riskScore: 0.76,
    tokens: [
      { word: "You", attribution: 0.05 },
      { word: "are", attribution: 0.02 },
      { word: "totally", attribution: 0.18 },
      { word: "useless", attribution: 0.72 },
      { word: "at", attribution: 0.01 },
      { word: "this", attribution: 0.01 },
      { word: "game,", attribution: 0.02 },
      { word: "uninstall", attribution: 0.65 },
      { word: "right", attribution: 0.04 },
      { word: "now", attribution: 0.05 },
      { word: "you", attribution: 0.08 },
      { word: "garbage", attribution: 0.84 },
      { word: "feeder.", attribution: 0.68 },
    ],
    action: "Flag for Moderator",
    reasoning: "Direct second-person hostility detected with harassment intent. Borderline gaming abuse routed to human moderation queue with highlight overlay."
  }
];

export const InteractiveDemo: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(4); // Default to completed state

  const scenario = PRESET_SCENARIOS[selectedIdx];

  const runSimulation = (idx: number) => {
    setSelectedIdx(idx);
    setIsAnalyzing(true);
    setActiveStep(1);

    setTimeout(() => setActiveStep(2), 300);
    setTimeout(() => setActiveStep(3), 600);
    setTimeout(() => {
      setActiveStep(4);
      setIsAnalyzing(false);
    }, 900);
  };

  return (
    <section className="py-20 bg-[#0B0B0B] border-t border-[#1C1C1C] relative overflow-hidden">
      {/* Background Red Ambient */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[#E50914]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#262626] text-xs font-mono text-[#E50914] uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5 text-[#E50914]" />
            <span>Interactive Architecture Sandbox</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-3">
            MULTISHIELD-AI <span className="text-[#E50914]">PIPELINE IN ACTION</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#888888]">
            Simulate the multi-agent routing, token attribution, and SHAP explainability layer implemented in Sumanth's flagship research project.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {PRESET_SCENARIOS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => runSimulation(idx)}
              className={`px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 border ${
                selectedIdx === idx
                  ? 'bg-[#E50914] text-white border-[#E50914] font-semibold shadow-lg shadow-[#E50914]/20'
                  : 'bg-[#141414] text-[#888888] border-[#222222] hover:text-white hover:border-[#380B0F]'
              }`}
            >
              <Play className={`w-3 h-3 ${selectedIdx === idx ? 'fill-white' : ''}`} />
              <span>{item.title.split(':')[0]}</span>
            </button>
          ))}
        </div>

        {/* Sandbox Console Frame */}
        <div className="rounded-md border border-[#262626] bg-[#0E0E0E] shadow-2xl overflow-hidden max-w-5xl mx-auto">
          {/* Console Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#202020] bg-[#141414] text-xs font-mono text-[#888888]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E50914]" />
              <span className="text-[#E5E5E5] font-semibold">MULTISHIELD_ORCHESTRATOR // AGENT_GRAPH_V2</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-[#666666]">Inference: LangGraph + PyTorch</span>
              <button
                onClick={() => runSimulation(selectedIdx)}
                className="hover:text-white flex items-center gap-1 transition-colors"
                title="Rerun Pipeline"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isAnalyzing ? 'animate-spin text-[#E50914]' : ''}`} />
                <span className="text-[11px] uppercase">Rerun</span>
              </button>
            </div>
          </div>

          {/* Workflow Steps Indicator */}
          <div className="grid grid-cols-4 border-b border-[#202020] bg-[#111111] text-[11px] font-mono">
            {[
              { num: '01', label: 'Router Agent' },
              { num: '02', label: 'Text Modality' },
              { num: '03', label: 'Fusion Calibrator' },
              { num: '04', label: 'XAI Attribution' }
            ].map((step, sIdx) => {
              const active = activeStep >= sIdx + 1;
              return (
                <div
                  key={sIdx}
                  className={`py-2 px-3 flex items-center justify-center gap-1.5 transition-colors border-r last:border-r-0 border-[#202020] ${
                    active ? 'text-[#E50914] bg-[#E50914]/5' : 'text-[#555555]'
                  }`}
                >
                  <span className="font-bold">{step.num}</span>
                  <span className="hidden sm:inline">{step.label}</span>
                </div>
              );
            })}
          </div>

          {/* Console Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Input Inspection Area */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#888888] mb-2">
                <span>INPUT PAYLOAD // MODALITY: TEXT + EMBEDDING</span>
                <span className="text-[#E50914] font-semibold">{scenario.category}</span>
              </div>
              <div className="p-4 rounded-sm bg-[#141414] border border-[#242424] font-mono text-sm sm:text-base text-[#F5F5F5] leading-relaxed">
                "{scenario.input}"
              </div>
            </div>

            {/* Explainable AI Token Attribution Layer */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#888888] mb-2.5">
                <span className="flex items-center gap-1.5 text-white">
                  <Sparkles className="w-3.5 h-3.5 text-[#E50914]" />
                  EXPLAINABILITY AGENT: SHAP TOKEN WEIGHT ATTRIBUTIONS
                </span>
                <span className="text-[11px] text-[#777777]">Higher redness = Higher toxicity contribution</span>
              </div>

              {/* Tokens with gradient highlight */}
              <div className="p-4 rounded-sm bg-[#111111] border border-[#222222] flex flex-wrap gap-2 items-center">
                {scenario.tokens.map((t, idx) => {
                  const isHigh = t.attribution > 0.6;
                  const isMed = t.attribution > 0.2 && t.attribution <= 0.6;
                  return (
                    <span
                      key={idx}
                      className={`px-2 py-1 rounded text-xs sm:text-sm font-mono transition-all ${
                        isHigh
                          ? 'bg-[#E50914] text-white font-bold shadow-md shadow-[#E50914]/30'
                          : isMed
                          ? 'bg-[#E50914]/30 text-[#FF858B] border border-[#E50914]/50'
                          : 'bg-[#181818] text-[#999999]'
                      }`}
                      title={`SHAP attribution: ${t.attribution}`}
                    >
                      {t.word}
                      <span className="text-[9px] opacity-70 ml-1 font-sans">
                        {t.attribution >= 0.5 ? `+${t.attribution}` : ''}
                      </span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Verdict & Orchestrator Decision */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {/* Classification */}
              <div className="p-4 rounded-sm bg-[#141414] border border-[#222222]">
                <span className="text-[10px] font-mono uppercase text-[#777777] block mb-1">
                  Classifier Label
                </span>
                <div className={`font-display text-2xl tracking-wide uppercase ${
                  scenario.label === 'SAFE / CONSTRUCTIVE' ? 'text-emerald-400' : 'text-[#E50914]'
                }`}>
                  {scenario.label}
                </div>
              </div>

              {/* Calibrated Confidence */}
              <div className="p-4 rounded-sm bg-[#141414] border border-[#222222]">
                <span className="text-[10px] font-mono uppercase text-[#777777] block mb-1">
                  Fusion Confidence
                </span>
                <div className="font-display text-2xl text-white tracking-wide">
                  {(scenario.riskScore * 100).toFixed(0)}% Risk
                </div>
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-[#222222] rounded-full overflow-hidden mt-1.5">
                  <div
                    className={`h-full transition-all duration-700 ${
                      scenario.riskScore > 0.5 ? 'bg-[#E50914]' : 'bg-emerald-500'
                    }`}
                    style={{ width: `${scenario.riskScore * 100}%` }}
                  />
                </div>
              </div>

              {/* Recommended Action */}
              <div className="p-4 rounded-sm bg-[#141414] border border-[#222222]">
                <span className="text-[10px] font-mono uppercase text-[#777777] block mb-1">
                  Automated Decision
                </span>
                <div className="font-display text-2xl text-white tracking-wide flex items-center gap-2">
                  {scenario.action === 'Allow' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <AlertOctagon className="w-5 h-5 text-[#E50914]" />
                  )}
                  <span>{scenario.action}</span>
                </div>
              </div>
            </div>

            {/* Agent Reasoning Output */}
            <div className="p-4 rounded-sm bg-[#120F10] border border-[#301618] text-xs font-mono text-[#D6C2C4] leading-relaxed">
              <span className="text-[#E50914] font-bold block mb-1 uppercase tracking-wider">
                // SYSTEM LOGIC TRACE:
              </span>
              {scenario.reasoning}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
