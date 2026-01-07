
import React, { useState, useEffect } from 'react';
import { CheckCircle2, Lock, ChevronRight, User } from 'lucide-react';
import Logo from './Logo';

const Emulator: React.FC = () => {
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setScreen((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const renderScreen = () => {
    switch (screen) {
      case 0: // Splash Screen
        return (
          <div className="h-full w-full flex flex-col items-center justify-center bg-[#020617] p-8 animate-in fade-in zoom-in duration-1000">
            <Logo size={100} className="mb-10" />
            <h2 className="text-3xl font-black text-white mb-2 text-center tracking-tight">Roadmap<span className="text-sky-400">Finder</span></h2>
            <p className="text-sky-500/60 text-xs font-bold uppercase tracking-[0.3em] text-center">Mastery Awaits</p>
          </div>
        );
      case 1: // Personalization
        return (
          <div className="h-full w-full bg-[#020617] p-6 animate-in slide-in-from-right duration-700">
            <div className="flex items-center justify-between mb-10">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg shadow-black/40">
                <User size={22} className="text-sky-400" />
              </div>
              <div className="flex space-x-1.5">
                <div className="w-10 h-1.5 bg-sky-500 rounded-full"></div>
                <div className="w-10 h-1.5 bg-sky-500 rounded-full"></div>
                <div className="w-10 h-1.5 bg-slate-800 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-2xl font-black text-white mb-8 tracking-tight">Set your target.</h3>
            
            <div className="space-y-5">
              <div className="p-5 rounded-2xl border border-sky-500/40 bg-sky-500/10 shadow-lg shadow-sky-500/5">
                <p className="text-[10px] font-black text-sky-400 uppercase tracking-widest mb-2">Learning Goal</p>
                <p className="text-base font-bold text-white">Advanced React Architecture</p>
              </div>
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Current Proficiency</p>
                <p className="text-base font-bold text-white">Intermediate</p>
              </div>
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Daily Commitment</p>
                <p className="text-base font-bold text-white">45 mins • Focused</p>
              </div>
            </div>

            <button className="mt-10 w-full py-4 bg-sky-600 rounded-2xl text-white text-sm font-black uppercase tracking-widest flex items-center justify-center space-x-3 shadow-xl shadow-sky-900/30">
              <span>Initiate AI Build</span>
              <ChevronRight size={18} />
            </button>
          </div>
        );
      case 2: // Roadmap View
        return (
          <div className="h-full w-full bg-[#020617] p-6 animate-in zoom-in-95 duration-700 overflow-hidden">
            <div className="flex justify-between items-start mb-10">
              <div>
                <p className="text-[10px] font-black text-sky-400 uppercase tracking-widest mb-1">Active Track</p>
                <h3 className="text-2xl font-black text-white tracking-tight">Frontend Path</h3>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl">
                <span className="text-xs font-black text-emerald-400 uppercase tracking-tighter">LVL 4</span>
              </div>
            </div>

            {/* XP Bar */}
            <div className="w-full h-4 bg-slate-900 rounded-full mb-12 relative overflow-hidden ring-1 ring-slate-800">
              <div className="absolute top-0 left-0 h-full w-[45%] bg-gradient-to-r from-sky-600 to-sky-400 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.6)]"></div>
              <div className="absolute inset-0 flex items-center justify-end pr-4 text-[8px] font-black text-white/40 uppercase">3.2k / 8k XP</div>
            </div>

            <div className="space-y-8 relative">
              <div className="absolute left-[13px] top-2 bottom-2 w-[2px] bg-slate-800"></div>
              
              <div className="flex items-start space-x-5 relative">
                <div className="z-10 bg-[#020617] p-1.5 ring-2 ring-emerald-500/50 rounded-full">
                  <CheckCircle2 className="text-emerald-500 w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-tight">Module 1: Semantic Core</h4>
                  <p className="text-[10px] font-bold text-emerald-500/80 uppercase">Fully Mastered</p>
                </div>
              </div>

              <div className="flex items-start space-x-5 relative scale-105">
                <div className="z-10 bg-sky-500 rounded-full p-2 ring-4 ring-sky-500/20 shadow-lg shadow-sky-500/40">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-tight">Module 2: Logic Loops</h4>
                  <p className="text-[10px] font-bold text-sky-400 uppercase">In Progress • 80%</p>
                </div>
              </div>

              <div className="flex items-start space-x-5 relative opacity-30 grayscale">
                <div className="z-10 bg-[#020617] p-1.5 ring-2 ring-slate-700 rounded-full">
                  <Lock className="text-slate-600 w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-300 uppercase tracking-tight">Module 3: State Zen</h4>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Awaiting LVL 6</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative mx-auto w-[300px] sm:w-[340px] aspect-[9/19] bg-slate-900 rounded-[3.5rem] p-3.5 border-[8px] border-slate-800 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8),0_0_80px_-40px_rgba(56,189,248,0.3)] transform transition-transform hover:scale-[1.02] duration-700">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-slate-800 rounded-b-3xl z-20"></div>
      
      {/* Inner Screen */}
      <div className="w-full h-full bg-[#020617] rounded-[2.8rem] overflow-hidden border border-slate-700/30">
        {renderScreen()}
      </div>

      {/* Side Buttons */}
      <div className="absolute top-28 -right-[10px] w-1.5 h-16 bg-slate-700 rounded-l-lg border-l border-slate-600"></div>
      <div className="absolute top-48 -right-[10px] w-1.5 h-24 bg-slate-700 rounded-l-lg border-l border-slate-600"></div>
    </div>
  );
};

export default Emulator;
