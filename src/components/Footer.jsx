import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-20 pb-12 border-t border-white/10 bg-[#050507] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Motto */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-black font-heading tracking-wider text-white">
              SHREYASNH
            </h2>
            <p className="text-xl sm:text-2xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] via-[#00f0ff] to-white tracking-wide">
              BUILD. BREAK. LEARN. REPEAT.
            </p>
            <p className="text-xs font-mono text-slate-400 max-w-sm leading-relaxed">
              B.Tech Computer Science student crafting intelligent digital products with editorial aesthetic and high-performance code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-mono text-[#00ff66] uppercase tracking-widest">// NAVIGATION</p>
            <ul className="space-y-2 font-mono text-xs text-slate-300">
              <li><a href="#home" className="hover:text-[#00ff66] transition-colors">HOME</a></li>
              <li><a href="#about" className="hover:text-[#00ff66] transition-colors">ABOUT</a></li>
              <li><a href="#projects" className="hover:text-[#00ff66] transition-colors">PROJECTS</a></li>
              <li><a href="#skills" className="hover:text-[#00ff66] transition-colors">SKILLS</a></li>
              <li><a href="#experience" className="hover:text-[#00ff66] transition-colors">EXPERIENCE</a></li>
              <li><a href="#contact" className="hover:text-[#00ff66] transition-colors">CONTACT</a></li>
            </ul>
          </div>

          {/* Social Connections */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-mono text-[#00ff66] uppercase tracking-widest">// CONNECT</p>
            <div className="flex flex-col gap-3 font-mono text-xs text-slate-300">
              <a
                href="https://github.com/shreyasnh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00ff66] transition-colors"
              >
                <Github className="w-4 h-4 text-[#00ff66]" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/shreyasnh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00f0ff] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#00f0ff]" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:contact@shreyasnh.dev"
                className="flex items-center gap-2 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Email</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <p>© 2026 SHREYASNH. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel hover:border-[#00ff66] hover:text-[#00ff66] transition-all"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
