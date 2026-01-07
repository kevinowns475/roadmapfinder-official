
import React from 'react';
import { Check, ShieldCheck, Zap, Info } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="pt-32 pb-32 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
          <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tighter">Pure Value. <span className="text-sky-500">No Fluff.</span></h1>
          <p className="text-slate-400 text-xl font-medium leading-relaxed">
            Invest in your future with the most powerful tech learning ecosystem available today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
          {/* Monthly Plan */}
          <div className="bg-slate-900/30 p-10 rounded-[2.5rem] border border-slate-800 flex flex-col hover:border-slate-700 transition-all duration-500 backdrop-blur-sm group">
            <h3 className="text-sm font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Foundation</h3>
            <h2 className="text-3xl font-black text-white mb-2">Monthly</h2>
            <p className="text-slate-500 text-sm font-bold mb-8">Pay as you go. No contracts.</p>
            <div className="flex items-baseline space-x-2 mb-10">
              <span className="text-5xl font-black text-white">₹199</span>
              <span className="text-slate-500 font-black uppercase tracking-widest text-[10px]">/ month</span>
            </div>
            
            <ul className="space-y-5 mb-12 flex-grow">
              {[
                "AI-personalized learning roadmaps",
                "Assignments & proof submission",
                "AI mentor for doubts & clarity",
                "Progress tracking & consistency",
                "Full Resource Library"
              ].map((feat, i) => (
                <li key={i} className="flex items-center space-x-4 text-slate-300">
                  <div className="bg-sky-500/10 p-1 rounded-md border border-sky-500/20 group-hover:bg-sky-500/20 transition-colors">
                    <Check size={14} className="text-sky-400 flex-shrink-0" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wide">{feat}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-5 px-8 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg active:scale-[0.98]">
              Select Monthly
            </button>
          </div>

          {/* Yearly Plan */}
          <div className="bg-slate-900 p-12 rounded-[3rem] border-2 border-sky-500 flex flex-col relative shadow-[0_30px_70px_-20px_rgba(56,189,248,0.4)] scale-105 md:scale-110 z-10 transition-transform duration-500 hover:scale-[1.08]">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-2xl">
              Elite Status • Save 37%
            </div>
            
            <h3 className="text-sm font-black text-sky-400 uppercase tracking-[0.3em] mb-4">Career Acceleration</h3>
            <h2 className="text-3xl font-black text-white mb-2">Yearly</h2>
            <p className="text-slate-500 text-sm font-bold mb-8">The professional choice.</p>
            <div className="flex items-baseline space-x-2 mb-2">
              <span className="text-5xl font-black text-white">₹1,499</span>
              <span className="text-slate-500 font-black uppercase tracking-widest text-[10px]">/ year</span>
            </div>
            <p className="text-sky-400 text-xs font-black uppercase tracking-widest mb-10">Only ₹125/month</p>
            
            <ul className="space-y-5 mb-12 flex-grow">
              {[
                "Everything in Monthly",
                "Elite projects & certification",
                "Priority AI neural processing",
                "Offline Roadmap Access",
                "Private Beta Invites"
              ].map((feat, i) => (
                <li key={i} className="flex items-center space-x-4 text-slate-100">
                  <div className="bg-sky-500 p-1 rounded-md shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                    <Zap size={14} className="text-white fill-white flex-shrink-0" />
                  </div>
                  <span className="text-sm font-black uppercase tracking-wide">{feat}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-5 px-8 bg-sky-600 hover:bg-sky-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-sky-900/60 active:scale-[0.98]">
              Upgrade to Elite
            </button>
          </div>
        </div>

        {/* Trust Footer */}
        <div className="mt-40 max-w-4xl mx-auto">
          <div className="bg-slate-950 border border-slate-900 rounded-[2rem] p-12 text-center space-y-8 relative group overflow-hidden">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-sky-500/5 blur-[40px]"></div>
            <div className="flex justify-center">
              <ShieldCheck className="text-sky-500 w-16 h-16 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl font-black text-white uppercase tracking-tight">Zero-Risk Learning</h4>
              <p className="text-slate-400 text-lg font-medium">
                Try the <a href="https://roadmapfinder.tech" className="text-sky-400 underline underline-offset-8 font-black hover:text-sky-300 transition-colors">Free Web Platform</a> first. No strings attached. Pay only for the AI features and progress tracking when you're ready to accelerate.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-6 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">
              <span className="flex items-center"><Info size={12} className="mr-2" /> SSL Encrypted</span>
              <span className="flex items-center"><Info size={12} className="mr-2" /> PCI Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
