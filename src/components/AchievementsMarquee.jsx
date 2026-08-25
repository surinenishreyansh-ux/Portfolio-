import React from 'react';
import { allTechMarquee } from '../data/skills';
import { Sparkles, Rocket, Globe, Code, Cpu, Terminal } from 'lucide-react';

export default function AchievementsMarquee() {
  const highlights = [
    { label: "BUILDER & ASPIRING FOUNDER", icon: <Rocket className="w-4 h-4 text-[#00ff66]" /> },
    { label: "5+ LIVE DEPLOYED PRODUCTS", icon: <Globe className="w-4 h-4 text-[#00f0ff]" /> },
    { label: "CREATOR OF EDITRA AI", icon: <Sparkles className="w-4 h-4 text-purple-400" /> },
    { label: "KLH 2ND YEAR ECE", icon: <Cpu className="w-4 h-4 text-yellow-400" /> }
  ];

  return (
    <div className="py-14 bg-black/40 border-y border-white/10 overflow-hidden relative">
      
      {/* Top Banner Key Highlights */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-white/10 flex items-center gap-3"
            >
              {item.icon}
              <span className="font-mono text-[11px] sm:text-xs font-bold tracking-wider text-slate-200">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Horizontal Smooth Marquee */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-8 text-xl sm:text-3xl md:text-4xl font-extrabold font-heading tracking-widest text-slate-700 uppercase">
          {allTechMarquee.concat(allTechMarquee).map((item, index) => (
            <div key={index} className="flex items-center gap-8 hover:text-[#00ff66] transition-colors duration-300">
              <span>{item}</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#00ff66]/40 inline-block" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

