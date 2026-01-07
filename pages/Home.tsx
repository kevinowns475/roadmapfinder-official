import React, { useState } from 'react';
// Fix: Using namespace import for react-router-dom to resolve "no exported member" errors
import * as ReactRouterDOM from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  Map, 
  CheckCircle2, 
  Zap, 
  Cpu, 
  Trophy, 
  MessageSquare,
  ChevronRight,
  Plus,
  Minus,
  Check,
  Star,
  Quote
} from 'lucide-react';
import Emulator from '../components/Emulator';

const { Link } = ReactRouterDOM;

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Frontend Dev @ Google",
      image: "https://i.pravatar.cc/150?u=sarah",
      text: "Roadmapfinder gave me the structure I was missing. I finally broke out of tutorial hell and landed my dream job.",
      rating: 5
    },
    {
      name: "Rahul Sharma",
      role: "Final Year CS Student",
      image: "https://i.pravatar.cc/150?u=rahul",
      text: "The AI Mentor is like having a private tutor 24/7. It explains complex concepts in simple terms exactly when I'm stuck.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Self-taught Engineer",
      image: "https://i.pravatar.cc/150?u=james",
      text: "Clear, concise, and incredibly effective. The XP tracking and streaks keep me consistent in a way YouTube never could.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Product Designer",
      image: "https://i.pravatar.cc/150?u=elena",
      text: "Even as a designer, the tech roadmaps were perfect for understanding the dev side. It's the most polished learning app I've used.",
      rating: 4
    }
  ];

  const faqs = [
    {
      question: "Is Roadmapfinder free?",
      answer: "Yes, our web version (roadmapfinder.tech) is 100% free. The mobile app offers premium AI-powered features for serious learners."
    },
    {
      question: "Difference between Web vs App?",
      answer: "Web is a content hub for basic roadmaps. The app is a complete tracking system with AI Mentors, personalized paths, and XP tracking."
    }
  ];

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 lg:pt-32 lg:pb-48">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#007BFF]/10 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Hero Left Content */}
            <div className="text-center lg:text-left space-y-10 max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center space-x-3 px-4 py-2 bg-[#007BFF]/10 border border-[#007BFF]/30 rounded-full">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#007BFF] animate-pulse"></span>
                <span className="text-[#007BFF] text-xs font-black uppercase tracking-[0.2em]">Next-Gen Learning Engine</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.05]">
                Learn Tech With <span className="text-gradient">Clear Roadmaps.</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-400 leading-relaxed font-medium">
                RoadmapFinder provides structured learning paths, elite resources, and an AI-powered ecosystem to ensure you <span className="text-white font-extrabold italic">actually finish</span> what you start.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto px-10 py-5 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-2xl font-black text-lg transition-all shadow-2xl shadow-blue-900/40 flex items-center justify-center space-x-3 group active:scale-95"
                >
                  <span className="uppercase tracking-widest">Install App</span>
                  <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
                <a
                  href="https://roadmapfinder.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-10 py-5 bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-500 rounded-2xl font-black text-lg transition-all flex items-center justify-center space-x-3 uppercase tracking-widest active:scale-95"
                >
                  <span>Web Version</span>
                </a>
              </div>
            </div>

            {/* Hero Right Visual */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#007BFF]/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
              <Emulator />
            </div>
          </div>
        </div>
      </section>

      {/* About Section Summary */}
      <section className="py-24 bg-slate-950/50 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-[#007BFF] font-black uppercase tracking-widest text-xs">Our Mission</h2>
              <h3 className="text-4xl font-black text-white">Built for the self-taught.</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                We realized that learners didn't need more content—they needed a map. 
                Roadmapfinder removes the confusion from learning technology by providing 
                clear, industry-standard paths.
              </p>
              <Link to="/about" className="inline-flex items-center text-[#007BFF] font-bold group">
                Read our full story <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 text-center">
                <div className="text-white text-3xl font-black mb-2">50K+</div>
                <div className="text-slate-500 text-[10px] font-black uppercase">Learners</div>
              </div>
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 text-center">
                <div className="text-white text-3xl font-black mb-2">120+</div>
                <div className="text-slate-500 text-[10px] font-black uppercase">Roadmaps</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#007BFF]/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-[#007BFF] font-black tracking-[0.4em] uppercase text-xs">Success Stories</h2>
            <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Trusted by 50,000+ Students Worldwide.</h3>
            <p className="text-slate-400 text-xl font-medium">Join a community of learners who stopped guessing and started building.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/40 p-8 rounded-[2.5rem] border border-slate-800 hover:border-[#007BFF]/30 transition-all group relative"
              >
                <Quote className="absolute top-6 right-8 text-slate-800 group-hover:text-[#007BFF]/20 transition-colors" size={40} />
                
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={`${i < t.rating ? 'text-[#007BFF] fill-[#007BFF]' : 'text-slate-700'}`} 
                    />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-8 italic relative z-10 font-medium">
                  "{t.text}"
                </p>

                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#007BFF] rounded-full blur-sm opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-12 h-12 rounded-full border-2 border-slate-800 relative z-10 object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-sm uppercase tracking-tight">{t.name}</h4>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <div className="inline-flex items-center space-x-4 bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-slate-800">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i+10}`} 
                    className="w-8 h-8 rounded-full border-2 border-[#020617] object-cover" 
                    alt="Learner"
                  />
                ))}
              </div>
              <span className="text-slate-400 text-xs font-black uppercase tracking-widest">
                and 49,995+ others
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#007BFF] font-black uppercase tracking-widest text-xs mb-4">Invest in Yourself</h2>
            <h3 className="text-4xl font-black text-white">Simple, transparent pricing.</h3>
          </div>
          <div className="max-w-3xl mx-auto bg-slate-900/50 border border-slate-800 rounded-[3rem] p-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-grow space-y-4">
              <h4 className="text-2xl font-black text-white uppercase tracking-tight">Yearly Elite</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-400 text-sm"><Check size={16} className="text-sky-500 mr-2" /> AI-Personalized Path</li>
                <li className="flex items-center text-slate-400 text-sm"><Check size={16} className="text-sky-500 mr-2" /> AI Doubt Solving</li>
                <li className="flex items-center text-slate-400 text-sm"><Check size={16} className="text-sky-500 mr-2" /> Progress Tracking</li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <div className="text-5xl font-black text-white mb-2">₹1,499</div>
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6">/ year (Save 37%)</div>
              <Link to="/pricing" className="bg-[#007BFF] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm inline-block shadow-xl shadow-blue-900/20">
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Summary */}
      <section className="py-24 bg-slate-950/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#007BFF] font-black uppercase tracking-widest text-xs mb-4">Questions</h2>
            <h3 className="text-4xl font-black text-white">Got Questions?</h3>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-900/40 rounded-2xl border border-slate-800 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 flex justify-between items-center text-left"
                >
                  <span className="font-bold text-white tracking-tight">{faq.question}</span>
                  {openFaq === idx ? <Minus size={20} className="text-[#007BFF]" /> : <Plus size={20} className="text-slate-500" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/faq" className="text-slate-400 hover:text-white font-bold underline underline-offset-4">
              View all FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;