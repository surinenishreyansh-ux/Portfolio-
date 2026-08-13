import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#0c0c10] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#00ff66] uppercase px-3 py-1 bg-[#00ff66]/10 rounded-full border border-[#00ff66]/30">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400 font-medium">
                PROJECT SPECIFICATION
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8">
            
            {/* Project Image Banner */}
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                    {project.title}
                  </h2>
                  <p className="text-sm font-mono text-[#00ff66]">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Description & Detail */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              <div className="md:col-span-8 space-y-6">
                <div>
                  <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                    OVERVIEW & PURPOSE
                  </h3>
                  <p className="text-base text-slate-300 leading-relaxed font-normal">
                    {project.fullDescription || project.description}
                  </p>
                </div>

                {/* Key Features */}
                {project.features && (
                  <div>
                    <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                      KEY ARCHITECTURAL FEATURES
                    </h3>
                    <ul className="space-y-2.5">
                      {project.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#00ff66] mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar Info */}
              <div className="md:col-span-4 space-y-6">
                
                {/* Tech Stack */}
                <div>
                  <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#00ff66]" />
                    TECHNOLOGIES
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links / CTA */}
                <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-5 bg-[#00ff66] text-black font-mono font-bold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors"
                    >
                      <span>VIEW LIVE SITE</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-5 glass-panel text-white font-mono font-bold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 hover:border-[#00ff66] hover:text-[#00ff66] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GITHUB REPOSITORY</span>
                    </a>
                  )}
                </div>

              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
