import React, { useState } from 'react';
// Fix: Using namespace import for react-router-dom to resolve "no exported member" errors in some environments
import * as ReactRouterDOM from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const { Link, useLocation } = ReactRouterDOM;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-[#020617]/90 backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="hover:opacity-90 transition-opacity">
            <Logo showText size={36} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path) ? 'text-sky-400 font-bold' : 'text-slate-400 hover:text-white font-medium'
                } transition-all text-sm uppercase tracking-wider`}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-px h-6 bg-slate-800 mx-2"></div>
            <a
              href="https://roadmapfinder.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-slate-300 hover:text-white transition-colors uppercase tracking-wider"
            >
              Web Free
            </a>
            <Link
              to="/pricing"
              className="bg-sky-600 hover:bg-sky-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-sky-900/40 hover:-translate-y-0.5"
            >
              Install App
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#020617] border-b border-slate-800 animate-in slide-in-from-top duration-300 px-6 py-8">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-bold ${
                  isActive(link.path) ? 'text-sky-400' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://roadmapfinder.tech"
              className="text-xl font-bold text-slate-300"
            >
              Web Version
            </a>
            <Link
              to="/pricing"
              onClick={() => setIsOpen(false)}
              className="bg-sky-600 text-white px-6 py-4 rounded-2xl text-center font-bold"
            >
              Install App
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;