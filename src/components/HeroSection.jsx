import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Sparkles, Terminal, Github, Linkedin, Cpu, Layers, ExternalLink } from 'lucide-react';

export default function HeroSection() {
  const canvasRef = useRef(null);

  // Canvas Interactive Glowing Orb Particle Visualizer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    const particleCount = 65;
    const centerX = width / 2;
    const centerY = height / 2;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        radius: Math.random() * 120 + 30,
        angle: Math.random() * Math.PI * 2,
        speed: (Math.random() * 0.007 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
        size: Math.random() * 2.2 + 1,
        color: Math.random() > 0.35 ? '#00ff66' : '#00f0ff',
        opacity: Math.random() * 0.7 + 0.3
      });
    }

    let mouseX = centerX;
    let mouseY = centerY;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    let tick = 0;
    const render = () => {
      tick += 0.012;
      ctx.clearRect(0, 0, width, height);

      // Center glowing ambient radial gradient
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 10, width / 2, height / 2, width * 0.45);
      gradient.addColorStop(0, 'rgba(0, 255, 102, 0.12)');
      gradient.addColorStop(0.5, 'rgba(0, 240, 255, 0.05)');
      gradient.addColorStop(1, 'rgba(7, 7, 9, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, width * 0.45, 0, Math.PI * 2);
      ctx.fill();

      // Outer dynamic rings
      ctx.strokeStyle = 'rgba(0, 255, 102, 0.18)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 130 + Math.sin(tick) * 8, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(0, 240, 255, 0.12)';
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 85 + Math.cos(tick * 1.4) * 6, 0, Math.PI * 2);
      ctx.stroke();

      // Render connected particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.angle += p.speed;

        const x = width / 2 + Math.cos(p.angle) * p.radius + (mouseX - width / 2) * 0.04;
        const y = height / 2 + Math.sin(p.angle) * p.radius + (mouseY - height / 2) * 0.04;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const x2 = width / 2 + Math.cos(p2.angle) * p2.radius + (mouseX - width / 2) * 0.04;
          const y2 = height / 2 + Math.sin(p2.angle) * p2.radius + (mouseY - height / 2) * 0.04;
          const dist = Math.hypot(x2 - x, y2 - y);

          if (dist < 55) {
            ctx.strokeStyle = '#00ff66';
            ctx.globalAlpha = (1 - dist / 55) * 0.12;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const githubUrl = "https://github.com/surinenishreyansh-ux";
  const linkedinUrl = "https://www.linkedin.com/in/shreyansh-sureneni-3886a3391/";

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-5 w-96 h-96 bg-[#00ff66]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-5 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Typography & Hero Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Main Positioning Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00ff66] font-mono text-xs tracking-widest uppercase mb-6 w-fit"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-bold">BUILDER. ENGINEER. FOUNDER.</span>
          </motion.div>

          {/* Main Giant Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold font-heading tracking-tight text-white leading-[0.98] mb-6"
          >
            SHREYANSH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
              SURENENI
            </span>
          </motion.h1>

          {/* Core Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 mb-10 max-w-xl"
          >
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              2nd Year ECE Student at KLH, building products at the intersection of software and AI.
            </p>
            <p className="text-sm sm:text-base font-mono text-[#00ff66] font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-ping inline-block" />
              "I build products from ideas and ship them."
            </p>
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3.5"
          >
            {/* VIEW PROJECTS */}
            <a
              href="#projects"
              onClick={(e) => handleScrollToSection(e, 'projects')}
              data-cursor="PROJECTS"
              className="px-6 py-3.5 bg-[#00ff66] text-black font-mono font-bold text-xs tracking-wider uppercase rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(0,255,102,0.35)] hover:scale-105"
            >
              [ VIEW PROJECTS ]
            </a>

            {/* EDITRA AI */}
            <a
              href="#editra-ai"
              onClick={(e) => handleScrollToSection(e, 'editra-ai')}
              data-cursor="EDITRA AI"
              className="px-6 py-3.5 bg-[#00f0ff]/15 text-[#00f0ff] border border-[#00f0ff]/40 font-mono font-bold text-xs tracking-wider uppercase rounded-full hover:bg-[#00f0ff] hover:text-black transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,240,255,0.2)] flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>[ EDITRA AI ]</span>
            </a>

            {/* GITHUB */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GITHUB"
              className="px-5 py-3.5 glass-panel text-white font-mono font-bold text-xs tracking-wider uppercase rounded-full hover:border-[#00ff66] hover:text-[#00ff66] transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB</span>
            </a>

            {/* LINKEDIN */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="LINKEDIN"
              className="px-5 py-3.5 glass-panel text-white font-mono font-bold text-xs tracking-wider uppercase rounded-full hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>LINKEDIN</span>
            </a>
          </motion.div>

          {/* Bottom Scroll Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 flex items-center gap-3 text-slate-500 font-mono text-xs tracking-widest"
          >
            <ArrowDown className="w-4 h-4 text-[#00ff66] animate-bounce" />
            <span>EXPLORE PRODUCTS & ARCHITECTURE ↓</span>
          </motion.div>
        </div>

        {/* Right Side Interactive Visualizer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative h-[390px] sm:h-[440px] w-full flex items-center justify-center"
        >
          {/* Glass Card Container holding Canvas */}
          <div className="relative w-full h-full glass-panel rounded-3xl p-4 overflow-hidden border border-white/10 flex flex-col justify-between shadow-2xl">
            
            {/* Top Terminal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 px-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 text-[11px] font-mono text-slate-400">builder-runtime.ts</span>
              </div>
              <Terminal className="w-4 h-4 text-[#00ff66]" />
            </div>

            {/* Interactive Particle Canvas */}
            <div className="relative flex-1 w-full h-full">
              <canvas ref={canvasRef} className="w-full h-full cursor-crosshair" />

              {/* Overlay Floating Code Cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 right-4 glass-panel px-3 py-2 rounded-xl text-[10px] font-mono text-[#00ff66] border border-[#00ff66]/30 shadow-lg"
              >
                <span className="text-slate-400">role:</span> "BUILDER / FOUNDER"
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-4 left-4 glass-panel px-3 py-2 rounded-xl text-[10px] font-mono text-slate-300 border border-white/10 shadow-lg flex items-center gap-2"
              >
                <Cpu className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>KLH ECE • 2nd Year</span>
              </motion.div>
            </div>

            {/* Bottom Status Bar */}
            <div className="pt-3 border-t border-white/10 px-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
                STATUS: SHIPPING PRODUCTS
              </span>
              <span className="text-slate-500">INTERACTIVE CANVAS</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
