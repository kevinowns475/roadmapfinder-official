import React from 'react';
// Fix: Using namespace import for react-router-dom to resolve "no exported member" errors
import * as ReactRouterDOM from 'react-router-dom';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

const { Link } = ReactRouterDOM;

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <Logo showText size={32} className="mb-8" />
            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
              Revolutionizing tech education with structured AI-personalized paths. Stop guessing, start mastering.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="bg-slate-900 p-2.5 rounded-lg text-slate-400 hover:text-sky-400 border border-slate-800 hover:border-sky-500/50 transition-all"><Twitter size={20} /></a>
              <a href="#" className="bg-slate-900 p-2.5 rounded-lg text-slate-400 hover:text-sky-400 border border-slate-800 hover:border-sky-500/50 transition-all"><Github size={20} /></a>
              <a href="#" className="bg-slate-900 p-2.5 rounded-lg text-slate-400 hover:text-sky-400 border border-slate-800 hover:border-sky-500/50 transition-all"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-extrabold mb-8 uppercase tracking-widest text-xs">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">The Mission</Link></li>
              <li><Link to="/pricing" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Pricing Plans</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Common Questions</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-extrabold mb-8 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Terms of Use</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Contact Support</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-extrabold mb-8 uppercase tracking-widest text-xs">Community</h4>
            <p className="text-slate-500 text-xs font-bold mb-4 uppercase tracking-wider">Join 50,000+ Learners</p>
            <div className="flex p-1 bg-slate-900 rounded-xl border border-slate-800 focus-within:border-sky-500/50 transition-colors">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent px-4 py-2 text-sm text-white w-full focus:outline-none"
              />
              <button className="bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-lg text-xs font-black uppercase transition-colors">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} RoadmapFinder Global. All rights reserved.
          </p>
          <div className="flex items-center text-slate-500 text-xs font-bold">
            <span className="bg-sky-500/10 text-sky-400 px-3 py-1 rounded-full border border-sky-500/20">RoadmapFinder v2.4.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;