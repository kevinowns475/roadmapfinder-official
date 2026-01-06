import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Check, Lock, ChevronRight, User, Terminal, Code2 } from "lucide-react";
import logo from "@assets/logo.png";

export function Emulator() {
  const [screenIndex, setScreenIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setScreenIndex((prev) => (prev + 1) % 3);
    }, 4000); // Change screen every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="relative mx-auto w-[280px] h-[580px] bg-gray-900 rounded-[2.5rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl z-20"></div>

      {/* Screen Content */}
      <div className="relative w-full h-full bg-background overflow-hidden flex flex-col">
        {/* Status Bar */}
        <div className="h-8 w-full flex justify-between items-center px-6 pt-2 text-[10px] text-gray-400 z-10">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-gray-600 rounded-full" />
            <div className="w-3 h-3 bg-gray-600 rounded-full" />
          </div>
        </div>

        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            {screenIndex === 0 && (
              <motion.div
                key="splash"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
              >
                <div className="w-24 h-24 bg-white/5 rounded-2xl p-4 mb-6 animate-pulse">
                  <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Roadmapfinder</h3>
                <p className="text-primary text-sm font-medium">Clear Roadmaps. Real Progress.</p>
              </motion.div>
            )}

            {screenIndex === 1 && (
              <motion.div
                key="setup"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col p-6"
              >
                <h3 className="text-xl font-bold text-white mb-6 mt-8">What's your goal?</h3>
                
                <div className="space-y-3">
                  <div className="bg-primary/10 border border-primary/50 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Code2 size={20} className="text-primary" />
                      <div>
                        <div className="text-white font-semibold text-sm">Web Development</div>
                        <div className="text-xs text-primary">Popular Choice</div>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-primary border border-primary shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
                  </div>
                  
                  <div className="bg-secondary/50 border border-white/5 p-4 rounded-xl flex items-center justify-between opacity-60">
                    <div className="flex items-center gap-3">
                      <Terminal size={20} className="text-muted-foreground" />
                      <div className="text-muted-foreground font-medium text-sm">Data Science</div>
                    </div>
                    <div className="w-4 h-4 rounded-full border border-gray-600"></div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 mt-8">Current Level?</h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-primary text-primary-foreground font-bold text-xs py-3 rounded-lg text-center shadow-lg shadow-primary/20">Beginner</div>
                  <div className="bg-secondary border border-white/5 text-muted-foreground text-xs py-3 rounded-lg text-center">Interm.</div>
                  <div className="bg-secondary border border-white/5 text-muted-foreground text-xs py-3 rounded-lg text-center">Advanced</div>
                </div>

                <div className="mt-auto">
                   <button className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-xl shadow-lg shadow-primary/20">
                     Generate Roadmap
                   </button>
                </div>
              </motion.div>
            )}

            {screenIndex === 2 && (
              <motion.div
                key="roadmap"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col"
              >
                <div className="px-6 pb-4 pt-2 border-b border-white/5">
                  <div className="flex justify-between items-center mb-2">
                     <h4 className="text-white font-bold">Frontend Dev</h4>
                     <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">32%</span>
                  </div>
                  <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[32%] bg-primary rounded-full"></div>
                  </div>
                </div>

                <div className="flex-1 overflow-hidden p-4 space-y-4">
                  {/* Step 1: HTML */}
                  <div className="relative pl-8 pb-4 border-l border-primary">
                     <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary"></div>
                     <div className="bg-secondary/50 p-3 rounded-xl border border-primary/30 flex items-center justify-between">
                        <div>
                          <div className="text-white font-medium text-sm">HTML5 Basics</div>
                          <div className="text-xs text-green-400 flex items-center gap-1 mt-1"><Check size={10} /> Completed</div>
                        </div>
                     </div>
                  </div>

                  {/* Step 2: CSS */}
                  <div className="relative pl-8 pb-4 border-l border-primary/30">
                     <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
                     <div className="bg-secondary p-3 rounded-xl border border-primary flex flex-col gap-2 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
                        <div>
                          <div className="text-white font-medium text-sm">CSS Flexbox & Grid</div>
                          <div className="text-xs text-primary mt-1">In Progress</div>
                        </div>
                        <button className="text-xs bg-primary/20 text-primary py-1.5 rounded-lg border border-primary/20 hover:bg-primary/30 transition-colors">
                          Start Lesson
                        </button>
                     </div>
                  </div>

                  {/* Step 3: JS */}
                  <div className="relative pl-8 border-l border-gray-700">
                     <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                     <div className="bg-secondary/30 p-3 rounded-xl border border-white/5 flex items-center justify-between opacity-60">
                        <div>
                          <div className="text-white font-medium text-sm">JavaScript Basics</div>
                          <div className="text-xs text-muted-foreground mt-1">Locked</div>
                        </div>
                        <Lock size={14} className="text-muted-foreground" />
                     </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
