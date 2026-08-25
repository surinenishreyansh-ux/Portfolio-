import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Play, Pause, Scissors, Layers, Sliders, Volume2, 
  Eye, Bot, CheckCircle2, ChevronRight, FileVideo, Wand2, 
  FastForward, Rewind, Maximize2, Split, Terminal, Cpu, ArrowUpRight, X, FileText
} from 'lucide-react';
import { editraProject } from '../data/projects';

export default function EditraFeaturedSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('agent'); // 'agent' | 'inspector' | 'media'
  const [agentStepIndex, setAgentStepIndex] = useState(2);
  const [showPitchModal, setShowPitchModal] = useState(false);
  const [commandInput, setCommandInput] = useState(editraProject.commandExample);
  const [agentStatus, setAgentStatus] = useState('EXECUTION READY');

  // Simulated AI agent sequence
  useEffect(() => {
    const interval = setInterval(() => {
      setAgentStepIndex((prev) => (prev + 1) % editraProject.agentSteps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleExecutePrompt = (e) => {
    e.preventDefault();
    setAgentStatus('PROCESSING INTENT...');
    setTimeout(() => {
      setAgentStatus('ACTIONS SYNCHRONIZED');
      setTimeout(() => setAgentStatus('EXECUTION READY'), 2000);
    }, 1200);
  };

  return (
    <section id="editra-ai" className="py-28 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#00f0ff]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#00ff66]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Tag + Status Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CURRENTLY BUILDING</span>
              </span>

              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>{editraProject.status}</span>
              </span>
            </div>

            {/* Giant Title */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading tracking-tight text-white leading-none mb-4">
              EDITRA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#00ff66] to-white">AI</span>
            </h2>

            <p className="text-xl sm:text-2xl font-heading font-semibold text-slate-200 tracking-wide mb-3">
              "{editraProject.tagline}"
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
              {editraProject.description}
            </p>
          </motion.div>

          {/* Action CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => setShowPitchModal(true)}
              data-cursor="PITCH DECK"
              className="px-7 py-4 bg-[#00f0ff] text-black font-mono font-bold text-xs tracking-widest uppercase rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_35px_rgba(0,240,255,0.35)] hover:scale-105 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>[ VIEW PITCH DECK ]</span>
            </button>

            <a
              href="#contact"
              data-cursor="FOUNDER"
              className="px-6 py-4 glass-panel text-white font-mono font-bold text-xs tracking-widest uppercase rounded-full hover:border-[#00ff66] hover:text-[#00ff66] transition-all duration-300 hover:scale-105"
            >
              [ TALK TO FOUNDER ]
            </a>
          </motion.div>

        </div>

        {/* =======================================================
            PROFESSIONAL VIDEO EDITOR PRODUCT MOCKUP
            Antigravity / Cursor interaction + DaVinci style IDE
           ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl border border-white/15 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.8)] bg-[#090a0f] flex flex-col"
        >
          {/* Top Window Bar / Navigation */}
          <div className="bg-[#0e1017] px-4 sm:px-6 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <div className="h-4 w-[1px] bg-white/10 mx-1 hidden sm:block" />
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Bot className="w-4 h-4 text-[#00f0ff]" />
                <span className="font-bold text-white">Editra Studio</span>
                <span className="text-slate-500 hidden sm:inline">— Cyberpunk_Interview_4K.editra</span>
              </div>
            </div>

            <div className="flex items-center gap-3 font-mono text-[11px]">
              <span className="px-2.5 py-1 rounded bg-[#00ff66]/10 text-[#00ff66] border border-[#00ff66]/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-pulse" />
                AGENT: ONLINE
              </span>
              <span className="text-slate-400 hidden sm:inline">4K UHD • 60 FPS • Rec.709</span>
            </div>
          </div>

          {/* AI Command Intent Bar */}
          <div className="bg-[#0b0d14] px-4 sm:px-6 py-3 border-b border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] shrink-0">
              <Wand2 className="w-4 h-4 animate-spin-slow" />
              <span className="font-bold">AGENT INTENT:</span>
            </div>

            <form onSubmit={handleExecutePrompt} className="flex-1 flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  placeholder="Describe your edit (e.g. 'Cut dead silence, color grade cinematic, and sync beat')..."
                  className="w-full bg-white/5 border border-white/15 focus:border-[#00f0ff] rounded-xl px-4 py-2.5 text-xs font-mono text-white focus:outline-none transition-colors"
                />
                <span className="absolute right-3 top-2.5 text-[10px] font-mono text-slate-500 hidden md:inline">
                  Press ↵ or Run
                </span>
              </div>
              <button
                type="submit"
                className="px-4 py-2.5 bg-[#00f0ff] text-black font-mono font-bold text-xs rounded-xl hover:bg-white transition-all shrink-0 flex items-center gap-1.5"
              >
                <span>RUN</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10">{agentStatus}</span>
            </div>
          </div>

          {/* Main Studio View: Left (Preview & Media) + Right (Agent Chat & Inspector) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] sm:min-h-[420px] border-b border-white/10">
            
            {/* Video Viewport Area (Left 8 Cols) */}
            <div className="lg:col-span-8 bg-[#050608] p-4 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-white/10">
              
              {/* Top Viewport Metadata Overlay */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2 z-10">
                <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                  <span className="text-[#00ff66] font-bold">PREVIEW MONITOR</span>
                  <span className="text-slate-500">|</span>
                  <span className="text-white">00:01:24:18</span>
                </div>
                <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                  <span>FIT: 100%</span>
                  <Maximize2 className="w-3 h-3 text-slate-400" />
                </div>
              </div>

              {/* Viewport Canvas Simulation */}
              <div className="relative flex-1 rounded-2xl overflow-hidden bg-slate-950 border border-white/10 flex items-center justify-center min-h-[220px]">
                
                {/* Background Video Frame */}
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop"
                  alt="Video frame preview"
                  className="w-full h-full object-cover opacity-85"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* AI Detection Bounding Box & Smart Tracking Overlays */}
                <div className="absolute inset-x-12 inset-y-8 border border-dashed border-[#00f0ff]/60 rounded-xl pointer-events-none flex flex-col justify-between p-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#00f0ff] bg-black/60 px-2 py-0.5 rounded w-fit backdrop-blur-sm">
                    <span>FACE_DETECT: 99.4% • GAZE_LOCK</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-amber-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      LUT: TEAL_ORANGE_V2 [APPLIED]
                    </span>
                    <span className="text-[10px] font-mono text-[#00ff66] bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      SUBTITLE: AUTO_SYNC
                    </span>
                  </div>
                </div>

                {/* Subtitle Caption Overlay */}
                <div className="absolute bottom-6 px-6 py-2 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-center text-xs font-mono text-white">
                  <span>"Turning timeline-based operations into conversational intent."</span>
                </div>
              </div>

              {/* Viewport Playback Transport Bar */}
              <div className="mt-3 pt-2 flex items-center justify-between text-slate-400 text-xs">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center justify-center"
                    aria-label="Play / Pause"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 text-[#00ff66]" /> : <Play className="w-4 h-4 text-[#00ff66] fill-[#00ff66]" />}
                  </button>
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors">
                    <Rewind className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors">
                    <FastForward className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors">
                    <Scissors className="w-3.5 h-3.5 text-[#00f0ff]" />
                  </button>
                </div>

                <div className="font-mono text-[11px] text-slate-400">
                  <span className="text-white">00:01:24:18</span> / <span className="text-slate-500">00:04:12:00</span>
                </div>
              </div>

            </div>

            {/* Right Side: AI Agent Chat & Inspector (Right 4 Cols) */}
            <div className="lg:col-span-4 bg-[#0a0c12] p-4 flex flex-col justify-between">
              
              {/* Tab Selector */}
              <div className="flex items-center gap-1 p-1 bg-white/5 rounded-xl border border-white/10 mb-3 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('agent')}
                  className={`flex-1 py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === 'agent' ? 'bg-[#00f0ff] text-black font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>AGENT LOG</span>
                </button>

                <button
                  onClick={() => setActiveTab('inspector')}
                  className={`flex-1 py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === 'inspector' ? 'bg-[#00f0ff] text-black font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>INSPECTOR</span>
                </button>
              </div>

              {/* Tab Body */}
              {activeTab === 'agent' ? (
                <div className="flex-1 flex flex-col justify-between space-y-3 font-mono text-xs">
                  
                  {/* User Request Bubble */}
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-200">
                    <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">USER INTENT</p>
                    <p className="text-xs text-[#00f0ff]">
                      "{commandInput}"
                    </p>
                  </div>

                  {/* Agent Reasoning Stream */}
                  <div className="p-3.5 rounded-xl bg-black/40 border border-[#00f0ff]/20 space-y-2 flex-1 overflow-y-auto max-h-[220px]">
                    <div className="flex items-center gap-2 text-[11px] text-[#00ff66] font-bold">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>AGENT REASONING & EXECUTION</span>
                    </div>

                    <div className="space-y-1.5 text-[11px] text-slate-300">
                      {editraProject.agentSteps.map((step, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`flex items-start gap-2 ${
                            idx === agentStepIndex ? 'text-[#00ff66] font-bold bg-[#00ff66]/10 p-1.5 rounded' : 'text-slate-400'
                          }`}
                        >
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${idx <= agentStepIndex ? 'text-[#00ff66]' : 'text-slate-600'}`} />
                          <span>{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Agent Status Chip */}
                  <div className="p-2.5 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-between text-[11px]">
                    <span className="text-slate-300">Non-Destructive Layer:</span>
                    <span className="text-[#00f0ff] font-bold">SYNCED (CMD+Z SAFE)</span>
                  </div>

                </div>
              ) : (
                <div className="flex-1 space-y-4 font-mono text-xs">
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase font-bold block mb-1.5">Color LUT Grade</label>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span>Cinematic Teal & Orange</span>
                      <span className="text-[#00ff66] text-[10px]">100% OPACITY</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 uppercase font-bold block mb-1.5">Silence Threshold</label>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span>-42 dB (Speech Silence)</span>
                      <span className="text-[#00f0ff] text-[10px]">AUTO-DETECT</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 uppercase font-bold block mb-1.5">Auto-Captions Style</label>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span>Syne Bold • Neon Highlight</span>
                      <span className="text-purple-400 text-[10px]">ANIMATED</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* =======================================================
              MULTI-TRACK TIMELINE (VIDEO, AUDIO & AI ACTION TRACK)
             ======================================================= */}
          <div className="bg-[#07080c] p-4 sm:p-6 select-none">
            
            {/* Timeline Header & Timecodes */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-3">
                <span className="text-white font-bold">TIMELINE EDITOR</span>
                <span className="text-slate-600">|</span>
                <span className="text-[#00f0ff]">SNAP: ON (1 FRAME)</span>
              </div>
              <div className="flex items-center gap-6 text-[10px] text-slate-500">
                <span>00:00</span>
                <span>00:15</span>
                <span className="text-[#00ff66] font-bold">00:30 (CUT)</span>
                <span>00:45</span>
                <span>01:00</span>
                <span>01:15</span>
              </div>
            </div>

            {/* Tracks Stack */}
            <div className="space-y-2 relative">
              
              {/* Playhead Vertical Line */}
              <div className="absolute top-0 bottom-0 left-[34%] w-[2px] bg-[#00ff66] z-30 shadow-[0_0_10px_#00ff66] pointer-events-none">
                <div className="w-3 h-3 bg-[#00ff66] rotate-45 -top-1.5 -left-[5px] absolute" />
              </div>

              {/* TRACK 1: AI ACTION TRACK (HIGHLIGHT) */}
              <div className="flex items-center gap-3">
                <div className="w-20 shrink-0 text-[11px] font-mono font-bold text-[#00f0ff] flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5" />
                  <span>AI_TRACK</span>
                </div>
                <div className="flex-1 h-9 rounded-lg bg-black/60 border border-[#00f0ff]/30 p-1 flex items-center gap-2 overflow-hidden relative">
                  <div className="h-full px-3 rounded bg-[#00f0ff]/20 border border-[#00f0ff]/50 flex items-center gap-1.5 text-[10px] font-mono text-[#00f0ff] whitespace-nowrap">
                    <Scissors className="w-3 h-3" />
                    <span>Cut Silence [00:12 - 00:18]</span>
                  </div>
                  <div className="h-full px-3 rounded bg-[#00ff66]/20 border border-[#00ff66]/50 flex items-center gap-1.5 text-[10px] font-mono text-[#00ff66] whitespace-nowrap">
                    <Sparkles className="w-3 h-3" />
                    <span>Cross-Dissolve 0.5s</span>
                  </div>
                  <div className="h-full px-3 rounded bg-purple-500/20 border border-purple-500/50 flex items-center gap-1.5 text-[10px] font-mono text-purple-300 whitespace-nowrap">
                    <Sliders className="w-3 h-3" />
                    <span>Auto-LUT: Cyberpunk</span>
                  </div>
                </div>
              </div>

              {/* TRACK 2: VIDEO TRACK V2 (B-ROLL) */}
              <div className="flex items-center gap-3">
                <div className="w-20 shrink-0 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <FileVideo className="w-3.5 h-3.5 text-blue-400" />
                  <span>V2 (B-ROLL)</span>
                </div>
                <div className="flex-1 h-8 rounded-lg bg-black/40 border border-white/10 p-1 flex items-center gap-2 overflow-hidden">
                  <div className="w-[15%] h-full rounded bg-blue-500/20 border border-blue-400/40 text-[9px] font-mono text-blue-300 flex items-center px-2">
                    B-Roll_A.mov
                  </div>
                  <div className="w-[28%] h-full rounded bg-blue-500/20 border border-blue-400/40 text-[9px] font-mono text-blue-300 flex items-center px-2">
                    Overlay_Graphics_v1.mp4
                  </div>
                </div>
              </div>

              {/* TRACK 3: VIDEO TRACK V1 (A-ROLL MAIN) */}
              <div className="flex items-center gap-3">
                <div className="w-20 shrink-0 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <FileVideo className="w-3.5 h-3.5 text-[#00ff66]" />
                  <span>V1 (A-ROLL)</span>
                </div>
                <div className="flex-1 h-8 rounded-lg bg-black/40 border border-white/10 p-1 flex items-center gap-1 overflow-hidden">
                  <div className="w-[32%] h-full rounded bg-[#00ff66]/15 border border-[#00ff66]/40 text-[9px] font-mono text-[#00ff66] flex items-center px-2">
                    Main_Interview_Part1.4k
                  </div>
                  <div className="w-2 h-full bg-amber-400 rounded-xs" title="Cut point" />
                  <div className="w-[50%] h-full rounded bg-[#00ff66]/15 border border-[#00ff66]/40 text-[9px] font-mono text-[#00ff66] flex items-center px-2">
                    Main_Interview_Part2.4k
                  </div>
                </div>
              </div>

              {/* TRACK 4: AUDIO TRACK A1 (SPEECH DIALOGUE) */}
              <div className="flex items-center gap-3">
                <div className="w-20 shrink-0 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-yellow-400" />
                  <span>A1 (VOICE)</span>
                </div>
                <div className="flex-1 h-7 rounded-lg bg-black/40 border border-white/10 p-1 flex items-center gap-1 overflow-hidden">
                  <div className="w-[32%] h-full rounded bg-yellow-500/15 border border-yellow-500/30 text-[8px] font-mono text-yellow-300 flex items-center px-2">
                    ||||||||||||||||||||||||||||||||||||||||
                  </div>
                  <div className="w-[12%] h-full rounded bg-red-500/10 border border-dashed border-red-500/30 text-[8px] font-mono text-red-400 flex items-center justify-center">
                    SILENCE REMOVED
                  </div>
                  <div className="w-[45%] h-full rounded bg-yellow-500/15 border border-yellow-500/30 text-[8px] font-mono text-yellow-300 flex items-center px-2">
                    ||||||||||||||||||||||||||||||||||||||||||||||||
                  </div>
                </div>
              </div>

            </div>
          </div>

        </motion.div>

        {/* Feature Cards Grid for Editra AI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {editraProject.coreCapabilities.map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#00f0ff]/40 transition-all duration-300 group glow-card"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#00f0ff] group-hover:text-black transition-all">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-white group-hover:text-[#00f0ff] transition-colors mb-2">
                {cap.title}
              </h3>
              <p className="text-xs font-mono text-slate-400 leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* PITCH DECK PLACEHOLDER MODAL */}
      <AnimatePresence>
        {showPitchModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPitchModal(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0d0f15] border border-white/15 rounded-3xl p-8 shadow-2xl z-10 space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] text-xs font-mono font-bold uppercase border border-[#00f0ff]/30">
                    PITCH DECK SUMMARY
                  </span>
                  <span className="text-xs font-mono text-slate-400">EDITRA AI</span>
                </div>
                <button
                  onClick={() => setShowPitchModal(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 font-mono text-xs text-slate-300">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-white text-sm mb-1">Problem & Thesis</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Traditional video editing tools (Premiere, Resolve, Final Cut) have steep learning curves and require manual, repetitive timeline operations. Editra AI brings an Antigravity/Cursor-style agent layer directly to the timeline.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-white text-sm mb-1">Architecture & Model</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Multimodal agent architecture translating natural language intentions into non-destructive sub-frame timeline cuts, LUT applications, transcript alignment, and audio ducking.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200">
                  <p className="font-bold uppercase text-[11px] mb-1">Status: Pre-MVP / Active Development</p>
                  <p className="text-[11px] text-amber-300/90">
                    Currently architecting the agent runtime and desktop interaction model. Full pitch deck & investor memo available upon direct request.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <a
                  href="mailto:surineni.shreyansh@klh.edu.in?subject=Editra%20AI%20Pitch%20Deck%20Request"
                  className="w-full py-3.5 bg-[#00f0ff] text-black font-mono font-bold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors"
                >
                  <span>REQUEST FULL DECK VIA EMAIL</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
