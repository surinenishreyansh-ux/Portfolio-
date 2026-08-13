import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Github, Linkedin, Send, Copy, Check, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "contact@shreyasnh.dev";
  const github = "https://github.com/shreyasnh";
  const linkedin = "https://linkedin.com/in/shreyasnh";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00ff66', '#00f0ff', '#ffffff']
      });
    } catch (err) {
      // Fallback
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 relative">
      
      {/* Radial background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00ff66]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-mono text-[#00ff66] tracking-widest uppercase mb-3">// START A CONVERSATION</p>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading tracking-tight text-white leading-none mb-6">
                LET'S <br />
                BUILD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] to-[#00f0ff]">
                  SOMETHING.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-md leading-relaxed font-light mb-10">
                Have an idea, project or opportunity? Let's turn it into something meaningful.
              </p>
            </div>

            {/* Direct Links */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${email}`}
                  data-cursor="EMAIL"
                  className="px-6 py-3.5 bg-[#00ff66] text-black font-mono font-bold text-xs tracking-wider uppercase rounded-full flex items-center gap-2 hover:bg-white transition-all shadow-[0_0_25px_rgba(0,255,102,0.3)]"
                >
                  <Mail className="w-4 h-4" />
                  <span>[ EMAIL ME ]</span>
                </a>

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="GITHUB"
                  className="px-6 py-3.5 glass-panel text-white font-mono font-bold text-xs tracking-wider uppercase rounded-full flex items-center gap-2 hover:border-[#00ff66] hover:text-[#00ff66] transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>[ GITHUB ]</span>
                </a>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="LINKEDIN"
                  className="px-6 py-3.5 glass-panel text-white font-mono font-bold text-xs tracking-wider uppercase rounded-full flex items-center gap-2 hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>[ LINKEDIN ]</span>
                </a>
              </div>

              {/* Quick Copy Email Banner */}
              <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center justify-between max-w-md">
                <div className="flex items-center gap-3 font-mono text-xs text-slate-300">
                  <Mail className="w-4 h-4 text-[#00ff66]" />
                  <span>{email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#00ff66]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00ff66]/20 border border-[#00ff66] flex items-center justify-center mx-auto text-[#00ff66]">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-extrabold font-heading text-white">
                    MESSAGE SENT!
                  </h3>
                  <p className="text-sm font-mono text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out, {formData.name}. I will get back to you shortly!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-mono text-xs rounded-full transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#00ff66] transition-colors placeholder:text-slate-600 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#00ff66] transition-colors placeholder:text-slate-600 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project, idea, or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#00ff66] transition-colors placeholder:text-slate-600 font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    data-cursor="SEND"
                    className="w-full py-4 bg-[#00ff66] text-black font-mono font-bold text-xs tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all shadow-[0_0_30px_rgba(0,255,102,0.3)] hover:scale-[1.02]"
                  >
                    <span>[ SEND MESSAGE ]</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
