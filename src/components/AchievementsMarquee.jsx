import React from 'react';
import { allTechMarquee } from '../data/skills';
import { Sparkles, Trophy, Star, Code, Cpu, Award } from 'lucide-react';

export default function AchievementsMarquee() {
  const highlights = [
    { label: "9.1 FIRST SEM CGPA", icon: <Trophy className="w-5 h-5 text-[#00ff66]" /> },
    { label: "SIH HACKATHON FINALIST", icon: <Star className="w-5 h-5 text-yellow-400" /> },
    { label: "MULTIPLE FULL STACK PROJECTS", icon: <Code className="w-5 h-5 text-[#00f0ff]" /> },
    { label: "FULL STACK LEARNING", icon: <Cpu className="w-5 h-5 text-purple-400" /> },
    { label: "93% SENIOR SECONDARY", icon: <Award className="w-5 h-5 text-[#00ff66]" /> }
  ];

  return (
    <div className="py-16 bg-black/40 border-y border-white/10 overflow-hidden relative">
      
      {/* Top Banner Key Highlights */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.slice(0, 4).map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center gap-3"
            >
              {item.icon}
              <span className="font-mono text-xs font-bold tracking-wider text-slate-200">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Horizontal Smooth Marquee */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-8 text-2xl sm:text-4xl md:text-5xl font-black font-heading tracking-widest text-slate-700 uppercase">
          {allTechMarquee.concat(allTechMarquee).map((item, index) => (
            <div key={index} className="flex items-center gap-8 hover:text-[#00ff66] transition-colors duration-300">
              <span>{item}</span>
              <Sparkles className="w-6 h-6 text-[#00ff66]/40 inline-block" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
