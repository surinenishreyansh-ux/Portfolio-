import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const email = "surineni.shreyansh@klh.edu.in";
  const github = "https://github.com/surinenishreyansh-ux";
  const linkedin = "https://www.linkedin.com/in/shreyansh-sureneni-3886a3391/";

  return (
    <footer className="pt-20 pb-12 border-t border-white/10 bg-[#050507] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Motto */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-wider text-white">
              SHREYANSH SURENENI
            </h2>
            <p className="text-lg sm:text-xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] via-[#00f0ff] to-white tracking-wide">
              BUILDER • ENGINEER • FOUNDER
            </p>
            <p className="text-xs font-mono text-slate-400 max-w-sm leading-relaxed">
              2nd Year ECE Student at KLH, building products at the intersection of software and AI. Creator of Editra AI.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono text-[#00ff66] uppercase tracking-widest">// NAVIGATION</p>
            <ul className="space-y-2 font-mono text-xs text-slate-300">
              <li><a href="#home" className="hover:text-[#00ff66] transition-colors">HOME</a></li>
              <li><a href="#projects" className="hover:text-[#00ff66] transition-colors">PROJECTS</a></li>
              <li>
                <a href="#editra-ai" className="text-[#00f0ff] hover:underline flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>EDITRA AI</span>
                </a>
              </li>
              <li><a href="#about" className="hover:text-[#00ff66] transition-colors">ABOUT</a></li>
              <li><a href="#contact" className="hover:text-[#00ff66] transition-colors">CONTACT</a></li>
            </ul>
          </div>

          {/* Social Connections */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono text-[#00ff66] uppercase tracking-widest">// CONNECT</p>
            <div className="flex flex-col gap-3 font-mono text-xs text-slate-300">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00ff66] transition-colors"
              >
                <Github className="w-4 h-4 text-[#00ff66]" />
                <span>GitHub</span>
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00f0ff] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#00f0ff]" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${email}`}
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
          <p>© 2026 SHREYANSH SURENENI. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel hover:border-[#00ff66] hover:text-[#00ff66] transition-all cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

