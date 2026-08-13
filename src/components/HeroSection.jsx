import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Sparkles, Terminal } from 'lucide-react';

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
    const particleCount = 70;
    const centerX = width / 2;
    const centerY = height / 2;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        radius: Math.random() * 120 + 30,
        angle: Math.random() * Math.PI * 2,
        speed: (Math.random() * 0.008 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
        size: Math.random() * 2.5 + 1,
        color: Math.random() > 0.4 ? '#00ff66' : '#00f0ff',
        opacity: Math.random() * 0.8 + 0.2
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
      tick += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Center glowing ambient radial gradient
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 10, width / 2, height / 2, width * 0.4);
      gradient.addColorStop(0, 'rgba(0, 255, 102, 0.12)');
      gradient.addColorStop(0.5, 'rgba(0, 240, 255, 0.05)');
      gradient.addColorStop(1, 'rgba(7, 7, 9, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, width * 0.4, 0, Math.PI * 2);
      ctx.fill();

      // Outer dynamic ring
      ctx.strokeStyle = 'rgba(0, 255, 102, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 140 + Math.sin(tick) * 10, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(0, 240, 255, 0.1)';
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 90 + Math.cos(tick * 1.5) * 8, 0, Math.PI * 2);
      ctx.stroke();

      // Render connected particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.angle += p.speed;

        const x = width / 2 + Math.cos(p.angle) * p.radius + (mouseX - width / 2) * 0.05;
        const y = height / 2 + Math.sin(p.angle) * p.radius + (mouseY - height / 2) * 0.05;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with subtle lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const x2 = width / 2 + Math.cos(p2.angle) * p2.radius + (mouseX - width / 2) * 0.05;
          const y2 = height / 2 + Math.sin(p2.angle) * p2.radius + (mouseY - height / 2) * 0.05;
          const dist = Math.hypot(x2 - x, y2 - y);

          if (dist < 60) {
            ctx.strokeStyle = '#00ff66';
            ctx.globalAlpha = (1 - dist / 60) * 0.15;
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

  const handleScrollToWork = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 flex items-center justify-center overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00ff66]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Typography & Hero Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Subtitle tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00ff66] font-mono text-xs tracking-widest uppercase mb-6 w-fit"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>HELLO, I'M</span>
          </motion.div>

          {/* Main Giant Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-heading tracking-tight text-white leading-[0.95] mb-6"
          >
            SHREYASNH
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 mt-2">
              BUILDING
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] to-[#00f0ff]">
              DIGITAL EXPERIENCES.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed mb-10 font-normal"
          >
            B.Tech student and developer focused on building intelligent, practical and visually polished digital products.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              onClick={handleScrollToWork}
              data-cursor="VIEW WORK"
              className="px-7 py-4 bg-[#00ff66] text-black font-mono font-bold text-xs tracking-widest uppercase rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_35px_rgba(0,255,102,0.4)] hover:scale-105"
            >
              [ VIEW MY WORK ]
            </a>

            <a
              href="#contact"
              onClick={handleScrollToContact}
              data-cursor="CONTACT"
              className="px-7 py-4 glass-panel text-white font-mono font-bold text-xs tracking-widest uppercase rounded-full hover:border-[#00ff66] hover:text-[#00ff66] transition-all duration-300 hover:scale-105"
            >
              [ CONTACT ME ]
            </a>
          </motion.div>

          {/* Bottom Scroll Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex items-center gap-3 text-slate-500 font-mono text-xs tracking-widest"
          >
            <ArrowDown className="w-4 h-4 text-[#00ff66] animate-bounce" />
            <span>SCROLL TO EXPLORE ↓</span>
          </motion.div>
        </div>

        {/* Right Side Interactive Visualizer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative h-[380px] sm:h-[460px] w-full flex items-center justify-center"
        >
          {/* Glass Card Container holding Canvas */}
          <div className="relative w-full h-full glass-panel rounded-3xl p-4 overflow-hidden border border-white/10 flex flex-col justify-between shadow-2xl">
            
            {/* Top Terminal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 px-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 text-[11px] font-mono text-slate-400">shreyasnh-core.js</span>
              </div>
              <Terminal className="w-4 h-4 text-[#00ff66]" />
            </div>

            {/* Interactive Particle Canvas */}
            <div className="relative flex-1 w-full h-full">
              <canvas ref={canvasRef} className="w-full h-full cursor-crosshair" />

              {/* Overlay Floating Code Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 right-6 glass-panel px-3 py-2 rounded-xl text-[10px] font-mono text-[#00ff66] border border-[#00ff66]/30 shadow-lg"
              >
                <span className="text-slate-400">const</span> dev = "SHREYASNH";
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-6 left-6 glass-panel px-3.5 py-2 rounded-xl text-[10px] font-mono text-slate-300 border border-white/10 shadow-lg flex items-center gap-2"
              >
                <Code2 className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>CGPA: 9.1 | KLH CSE</span>
              </motion.div>
            </div>

            {/* Bottom Status Bar */}
            <div className="pt-3 border-t border-white/10 px-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
                SYSTEM ONLINE
              </span>
              <span className="text-slate-500">INTERACTIVE CANVAS</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
