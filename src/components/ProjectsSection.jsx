import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'Web Application', 'Algorithms & Systems', 'Media & Discovery', 'Productivity & Knowledge'];

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-28 relative">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-mono text-[#00ff66] tracking-widest uppercase mb-3">// SHIPPED ECOSYSTEM</p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading tracking-tight text-white leading-none">
              THINGS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] to-[#00f0ff]">
                I'VE BUILT.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm font-mono text-slate-400 max-w-md"
          >
            "From ideas to deployed products." A collection of production web applications, systems, and algorithms built and shipped live.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all whitespace-nowrap ${
                filter === cat
                  ? 'bg-[#00ff66] text-black font-bold shadow-[0_0_20px_rgba(0,255,102,0.3)]'
                  : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedProject(project)}
              data-cursor="INSPECT"
              className="group glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-[#00ff66]/50 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative w-full h-56 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-black/30 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest bg-black/70 backdrop-blur-md text-[#00ff66] border border-white/10 uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Inspect Arrow Trigger */}
                <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-[#00ff66] group-hover:text-black group-hover:scale-110 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white group-hover:text-[#00ff66] transition-colors duration-300 mb-2 group-hover:translate-x-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs font-mono text-[#00f0ff] mb-3 line-clamp-1">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Tags & Direct Live / Repo CTAs */}
                <div className="pt-4 border-t border-white/10 space-y-4">
                  
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/5 font-mono text-[10px] text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 rounded-md bg-white/5 font-mono text-[10px] text-slate-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Direct Action Links */}
                  <div 
                    className="flex items-center justify-between gap-2 pt-1" 
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-xl bg-[#00ff66] text-black font-mono font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-white transition-colors"
                      >
                        <span>LIVE DEMO</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl glass-panel text-slate-300 hover:text-[#00ff66] hover:border-[#00ff66] transition-colors"
                        title="GitHub Profile & Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
