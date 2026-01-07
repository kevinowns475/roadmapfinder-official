
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is Roadmapfinder free?",
      answer: "Yes, our web version (roadmapfinder.tech) is 100% free and always will be. It contains all our core roadmaps and curated resources. The mobile app offers premium features like AI personalization, progress tracking, and mentorship."
    },
    {
      question: "What's the difference between the web and app?",
      answer: "The web is a content hub; the app is a learning system. The app uses AI to tailor roadmaps to your schedule, gives you assignments to complete, tracks your XP/streaks, and provides an AI Mentor to help you when you get stuck."
    },
    {
      question: "Who is this for?",
      answer: "Anyone from complete beginners looking to start their first tech journey to experienced developers looking to pick up a new framework efficiently without the clutter of disorganized tutorials."
    },
    {
      question: "How is this different from roadmap.sh?",
      answer: "Roadmap.sh is an incredible resource for high-level concepts. Roadmapfinder takes it a step further by providing the actual curated learning resources (videos, docs, blogs) and an interactive system (app) to help you actually *finish* that roadmap."
    },
    {
      question: "Is the app subscription-based?",
      answer: "Yes, we have a very affordable monthly (₹199) and yearly (₹1,499) plan. This helps us keep the AI models running and continuously update roadmaps with the latest industry standards."
    },
    {
      question: "Do I need prior experience?",
      answer: "Absolutely not. We have 'Absolute Beginner' tracks that start from zero—explaining how a computer works before diving into code."
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl font-bold text-white">Got Questions?</h1>
          <p className="text-slate-400">Everything you need to know about Roadmapfinder.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-slate-900/50 rounded-2xl border transition-all overflow-hidden ${
                openIndex === idx ? 'border-sky-500/50 ring-1 ring-sky-500/20' : 'border-slate-800'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <span className="font-bold text-white pr-4">{faq.question}</span>
                <div className="flex-shrink-0">
                  {openIndex === idx ? <Minus className="text-sky-400" /> : <Plus className="text-slate-500" />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm sm:text-base border-t border-slate-800/50 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-sky-900/10 border border-sky-900/30 p-8 rounded-3xl">
          <h3 className="text-white font-bold text-xl mb-2">Still have questions?</h3>
          <p className="text-slate-400 mb-6 text-sm">We're happy to help you with anything else you need.</p>
          <a 
            href="mailto:support@roadmapfinder.com" 
            className="inline-flex items-center space-x-2 text-sky-400 hover:text-sky-300 font-bold"
          >
            <span>Email us at support@roadmapfinder.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
