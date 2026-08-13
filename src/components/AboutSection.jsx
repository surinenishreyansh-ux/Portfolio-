import React from 'react';
import { motion } from 'framer-motion';
import { keyStats } from '../data/journey';
import { GraduationCap, Award, Compass, Code } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 relative">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00ff66]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-mono text-[#00ff66] tracking-widest uppercase mb-3">// PERSPECTIVE</p>
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
            className="lg:col-span-7 flex flex-col justify-between h-full"
          >
            <p className="text-xl sm:text-2xl text-slate-200 leading-relaxed font-light mb-8">
              "I'm a B.Tech student passionate about software development, AI, web technologies and building products that solve real problems."
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">KLH UNIVERSITY</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">COMPUTER SCIENCE</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">FULL STACK</span>
            </div>
          </motion.div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyStats.map((stat, idx) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden group glow-card"
            >
              <div 
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: stat.accent }}
              />
              <span className="text-4xl sm:text-5xl font-extrabold font-heading text-white block mb-2 group-hover:text-[#00ff66] transition-colors">
                {stat.number}
              </span>
              <h3 className="text-sm font-bold font-mono text-slate-200 uppercase tracking-wider mb-1">
                {stat.label}
              </h3>
              <p className="text-xs font-mono text-slate-400">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden bg-gradient-to-r from-white/[0.03] to-white/[0.01]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <p className="text-xs font-mono text-[#00ff66] tracking-widest uppercase mb-4">// DEVELOPER PHILOSOPHY</p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-white leading-tight">
                BUILD WITH PURPOSE. <br />
                <span className="text-slate-400">DESIGN WITH INTENT.</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] to-[#00f0ff]">
                  LEARN WITHOUT LIMITS.
                </span>
              </h3>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <Code className="w-5 h-5 text-[#00ff66]" />
                <span>Clean, maintainable code architectures</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <Compass className="w-5 h-5 text-[#00f0ff]" />
                <span>User-centric design & editorial polish</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <Award className="w-5 h-5 text-purple-400" />
                <span>Relentless problem-solving mindset</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
