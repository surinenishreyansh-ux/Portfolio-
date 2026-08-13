import React from 'react';
import { motion } from 'framer-motion';
import { journeyTimeline } from '../data/journey';
import { Award, GraduationCap, Trophy, Code } from 'lucide-react';

export default function JourneySection() {
  const getTimelineIcon = (badge) => {
    if (badge.includes('Academic')) return <GraduationCap className="w-5 h-5 text-[#00ff66]" />;
    if (badge.includes('Hackathon')) return <Trophy className="w-5 h-5 text-yellow-400" />;
    if (badge.includes('Build')) return <Code className="w-5 h-5 text-[#00f0ff]" />;
    return <Award className="w-5 h-5 text-purple-400" />;
  };

  return (
    <section id="experience" className="py-28 relative">
      
      {/* Background radial glow */}
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#00ff66]/5 rounded-full blur-[140px] pointer-events-none" />

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
            <p className="text-xs font-mono text-[#00ff66] tracking-widest uppercase mb-3">// MILESTONES & GROWTH</p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading tracking-tight text-white leading-none">
              THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] to-[#00f0ff]">
                JOURNEY.
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
            An editorial timeline of academic performance, national hackathons, and continuous software craft development.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12">
          {journeyTimeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-6 h-6 rounded-full bg-[#070709] border-2 border-[#00ff66] flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                <span className="w-2 h-2 rounded-full bg-[#00ff66]" />
              </div>

              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 group-hover:border-[#00ff66]/40 transition-all duration-300">
                
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono text-[#00ff66] tracking-widest px-3 py-1 bg-[#00ff66]/10 rounded-full border border-[#00ff66]/20">
                    {item.year}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    {getTimelineIcon(item.badge)}
                    <span className="text-xs font-mono text-slate-300 font-bold">
                      {item.score}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-1 group-hover:text-[#00ff66] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs font-mono text-[#00f0ff] mb-4">
                  {item.institution}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white/5 font-mono text-xs text-slate-300 border border-white/5"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
