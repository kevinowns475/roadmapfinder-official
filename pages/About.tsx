
import React from 'react';
import { Target, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Built for the self-taught.</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            We're on a mission to remove the confusion from learning technology. No fluff, no gatekeeping, just pure direction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-white mb-6">The "Tutorial Hell" Problem.</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Every day, millions of people start learning code. They open YouTube, find a "10-hour masterclass," and by hour three, they're lost. Why? Because watching a video isn't the same as learning.
              </p>
              <p>
                Roadmapfinder was born from this frustration. We realized that what learners needed wasn't *more* content—the internet has plenty. They needed a map. A clear path from Point A to Point B with checkpoints along the way.
              </p>
              <p className="font-semibold text-sky-400">
                Our vision is simple: To empower anyone to master any tech skill without feeling overwhelmed.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 bg-slate-900 rounded-3xl p-1 aspect-square md:aspect-video relative overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/techlearn/800/600" 
              alt="Team collaborating" 
              className="w-full h-full object-cover rounded-[1.4rem] opacity-50 group-hover:opacity-70 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#020617]/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700 text-center">
                <p className="text-white font-bold text-xl italic">"Clarity is the ultimate shortcut."</p>
                <p className="text-slate-400 text-sm mt-2">— Roadmapfinder Philosophy</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Learner-First", 
              desc: "We don't serve algorithms or advertisers. We serve the person sitting in front of a computer trying to build a better future.", 
              icon: <Heart className="text-red-400" /> 
            },
            { 
              title: "Quality over Quantity", 
              desc: "We don't give you 100 links. We give you the *best* link. Our curation process is rigorous and focused on real-world utility.", 
              icon: <Target className="text-sky-400" /> 
            },
            { 
              title: "Founder-Built", 
              desc: "Born in the trenches of self-learning. We build tools we actually use ourselves every single day.", 
              icon: <Users className="text-emerald-400" /> 
            }
          ].map((item, i) => (
            <div key={i} className="bg-slate-950 p-8 rounded-2xl border border-slate-900 text-center space-y-4">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-4 border border-slate-800">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
