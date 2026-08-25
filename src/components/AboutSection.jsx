import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Rocket, Code, Sparkles, Layers } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 relative">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00ff66]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-mono text-[#00ff66] tracking-widest uppercase mb-3">// FOUNDER PERSPECTIVE</p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading tracking-tight text-white leading-none">
              ABOUT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] to-[#00f0ff]">
                ME.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            {/* Core exact user statement */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/15 bg-white/[0.02]">
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal mb-6">
                "I'm Shreyansh Surineni, a second-year Electronics and Communication Engineering student at KLH. I enjoy turning ideas into working products and learning whatever technology is necessary to build them. I've built projects across web applications, APIs, databases, algorithms and AI-assisted development, and I'm currently building Editra AI."
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#00ff66]">
                  KLH UNIVERSITY
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#00f0ff]">
                  2ND YEAR ECE
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white">
                  PRODUCT BUILDER
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Builder Mindset Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-[#00ff66]/40 transition-all group glow-card"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#00ff66]/10 border border-[#00ff66]/20 text-[#00ff66] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#00ff66] group-hover:text-black transition-all">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white mb-2">
              Hardware & Systems Rooted
            </h3>
            <p className="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
              Studying Electronics & Communication gives me an intuition for system constraints, computational limits, and how software executes on bare metal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-[#00f0ff]/40 transition-all group glow-card"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#00f0ff] group-hover:text-black transition-all">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white mb-2">
              Shipping Mindset
            </h3>
            <p className="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
              Ideas gain value only when deployed into production. I prioritize rapid iteration cycles, clean interfaces, and immediate real-world usability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-purple-400/40 transition-all group glow-card"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-black transition-all">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white mb-2">
              AI-Native Interfaces
            </h3>
            <p className="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
              Building next-generation workflows like Editra AI where autonomous agents augment human creativity without sacrificing control.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

