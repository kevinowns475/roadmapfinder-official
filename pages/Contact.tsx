
import React from 'react';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
          <p className="text-slate-400">Have a suggestion? Found a bug? Or just want to say hi?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-900 flex items-start space-x-4">
              <div className="bg-sky-500/10 p-3 rounded-xl text-sky-400">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wider">Email Us</h4>
                <p className="text-slate-400 text-sm">support@roadmapfinder.com</p>
                <p className="text-slate-400 text-sm">partners@roadmapfinder.com</p>
              </div>
            </div>
            
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-900 flex items-start space-x-4">
              <div className="bg-sky-500/10 p-3 rounded-xl text-sky-400">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wider">Socials</h4>
                <p className="text-slate-400 text-sm">DM us on Twitter @roadmapfinder</p>
                <p className="text-slate-400 text-sm">LinkedIn /company/roadmapfinder</p>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-900 flex items-start space-x-4">
              <div className="bg-sky-500/10 p-3 rounded-xl text-sky-400">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wider">Location</h4>
                <p className="text-slate-400 text-sm">Remote-first team</p>
                <p className="text-slate-400 text-sm">Based in Bengaluru, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full sm:w-auto px-10 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-sky-900/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
