import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { builderStages } from '../data/builder';
import { Lightbulb, Hammer, Rocket, Search, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

export default function BuilderPipeline() {
  const [selectedStage, setSelectedStage] = useState(0);

  const getStageIcon = (id) => {
    switch (id) {
      case 'idea': return <Lightbulb className="w-5 h-5" />;
      case 'build': return <Hammer className="w-5 h-5" />;
      case 'deploy': return <Rocket className="w-5 h-5" />;
      case 'learn': return <Search className="w-5 h-5" />;
      case 'iterate': return <RefreshCw className="w-5 h-5" />;
      default: return <Hammer className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-28 relative">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#00ff66]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="text-xs font-mono text-[#00ff66] tracking-widest uppercase mb-3">// BUILDER CADENCE & EXECUTION</p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading tracking-tight text-white leading-none">
              THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] via-[#00f0ff] to-white">
                BUILDER PIPELINE.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <p className="text-sm sm:text-base font-mono text-slate-300 mb-2">
              "I don't just write code — I ship products from scratch, test them live, and iterate fast."
            </p>
            <p className="text-xs font-mono text-slate-500">
              A disciplined 5-stage loop powering every product in my ecosystem.
            </p>
          </motion.div>
        </div>

        {/* 5-Step Visual Progression Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-10">
          {builderStages.map((stage, idx) => {
            const isSelected = selectedStage === idx;
            return (
              <motion.button
                key={stage.id}
                onClick={() => setSelectedStage(idx)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                data-cursor={stage.title}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                  isSelected
                    ? 'bg-white/10 border-[#00ff66] shadow-[0_0_25px_rgba(0,255,102,0.25)] scale-[1.03]'
                    : 'glass-panel border-white/10 hover:border-white/25'
                }`}
              >
                {/* Active Indicator Top Line */}
                {isSelected && (
                  <div 
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: stage.color }}
                  />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-slate-500 font-bold">{stage.step}</span>
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${stage.color}15`, color: stage.color }}
                  >
                    {getStageIcon(stage.id)}
                  </div>
                </div>

                <h3 className="text-lg font-bold font-heading text-white group-hover:text-[#00ff66] transition-colors mb-1">
                  {stage.title}
                </h3>
                <p className="text-[11px] font-mono text-slate-400 line-clamp-1">
                  {stage.tagline}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <motion.div
          key={selectedStage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/15 relative overflow-hidden bg-gradient-to-r from-white/[0.03] to-transparent"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-[#00ff66] font-bold border border-white/10 uppercase">
                  STAGE {builderStages[selectedStage].step} OF 05
                </span>
                <span className="text-xs font-mono text-slate-400">
                  // {builderStages[selectedStage].tagline}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                {builderStages[selectedStage].title} — <span style={{ color: builderStages[selectedStage].color }}>{builderStages[selectedStage].tagline}</span>
              </h3>

              <p className="text-base text-slate-300 leading-relaxed font-normal">
                {builderStages[selectedStage].description}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3 font-mono text-xs text-slate-300">
              {builderStages[selectedStage].details.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#00ff66]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
