import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { Code2, Atom, Layers, Terminal, Sparkles, CheckCircle } from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'languages': return <Code2 className="w-5 h-5 text-[#00ff66]" />;
      case 'web': return <Atom className="w-5 h-5 text-[#00f0ff]" />;
      case 'cs': return <Layers className="w-5 h-5 text-purple-400" />;
      case 'tools': return <Terminal className="w-5 h-5 text-yellow-400" />;
      default: return <Sparkles className="w-5 h-5 text-[#00ff66]" />;
    }
  };

  return (
    <section id="skills" className="py-28 relative">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#00ff66]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="text-xs font-mono text-[#00ff66] tracking-widest uppercase mb-3">// TECHNICAL STACK</p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading tracking-tight text-white leading-none">
              WHAT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] to-[#00f0ff]">
                I WORK WITH.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 text-sm font-mono text-slate-400"
          >
            Categorized technical capabilities spanning language syntax, framework orchestration, core computer science concepts, and modern devops platforms.
          </motion.p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-white/10 pb-6">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-[#00ff66] text-black shadow-[0_0_25px_rgba(0,255,102,0.3)] scale-105'
                    : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Skill Category Cards Display */}
        {skillCategories.map((cat) => {
          if (cat.id !== activeCategory) return null;

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getCategoryIcon(cat.id)}
                  <h3 className="text-xl font-bold font-heading text-white">{cat.title}</h3>
                </div>
                <p className="text-xs font-mono text-slate-400 hidden sm:block">{cat.description}</p>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#00ff66]/40 transition-all duration-300 group glow-card flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00ff66] group-hover:scale-110 group-hover:bg-[#00ff66] group-hover:text-black transition-all">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full bg-white/5 text-[#00f0ff] border border-white/10 uppercase">
                        {skill.level}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold font-heading text-white group-hover:text-[#00ff66] transition-colors mb-1">
                        {skill.name}
                      </h4>
                      <p className="text-xs font-mono text-slate-400">
                        Production Ready Proficiency
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Global Tech Skill Tag Cloud */}
        <div className="mt-16 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-6">
            // INTERACTIVE TECH SPECTRUM
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Java", "Python", "JavaScript", "C", "HTML5", "CSS3", "React", "Vite", 
              "Tailwind CSS", "REST APIs", "Data Structures", "Algorithms", "OOP", 
              "Problem Solving", "Git", "GitHub", "VS Code", "Vercel", "Cloudflare", "Framer Motion"
            ].map((tech) => (
              <span
                key={tech}
                data-cursor="TECH"
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-slate-300 hover:border-[#00ff66] hover:text-[#00ff66] hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
