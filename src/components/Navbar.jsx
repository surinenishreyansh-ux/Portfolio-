import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home', number: '01' },
    { name: 'ABOUT', href: '#about', number: '02' },
    { name: 'PROJECTS', href: '#projects', number: '03' },
    { name: 'SKILLS', href: '#skills', number: '04' },
    { name: 'EXPERIENCE', href: '#experience', number: '05' },
    { name: 'CONTACT', href: '#contact', number: '06' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section calculation
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-nav' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2 text-xl md:text-2xl font-black font-heading tracking-wider text-white"
          >
            <span className="text-[#00ff66] transition-transform duration-300 group-hover:rotate-45">/</span>
            SHREYASNH
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-xs font-mono tracking-widest transition-colors duration-300 ${
                    isActive ? 'text-[#00ff66] font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#00ff66] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              data-cursor="LET'S TALK"
              className="group flex items-center gap-2 bg-[#00ff66] text-black px-5 py-2.5 rounded-full font-mono text-xs font-bold tracking-wider hover:bg-white transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,255,102,0.3)]"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 focus:outline-none z-50 glass-panel rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#00ff66]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#070709] flex flex-col justify-between p-8 md:p-12 overflow-y-auto"
          >
            <div className="pt-20">
              <p className="text-xs font-mono text-[#00ff66] tracking-widest mb-8">NAVIGATION</p>
              <div className="flex flex-col gap-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.3 }}
                    className="group flex items-baseline gap-4 text-3xl md:text-5xl font-black font-heading tracking-wider text-slate-300 hover:text-[#00ff66] transition-colors"
                  >
                    <span className="text-xs font-mono text-slate-600 group-hover:text-[#00ff66] transition-colors">
                      {link.number}
                    </span>
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-xs font-mono text-slate-400">
              <div>
                <p className="text-white font-bold mb-1">SHREYASNH</p>
                <p>B.Tech CSE Student & Developer</p>
              </div>
              <a
                href="mailto:contact@shreyasnh.dev"
                className="text-[#00ff66] hover:underline"
              >
                contact@shreyasnh.dev
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
