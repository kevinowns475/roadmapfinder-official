import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Emulator } from "@/components/Emulator";
import { ContactForm } from "@/components/ContactForm";
import { Check, ArrowRight, Brain, Map, Trophy, Target, Shield, Smartphone, Globe, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Side */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-white/10 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">Beta Available Now</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-6">
                Learn Tech Skills With <span className="gradient-text">Clear Roadmaps</span> — Not Guesswork.
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Roadmapfinder gives you structured learning paths, best resources, and an AI-powered app that keeps you consistent until you actually finish.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="h-12 px-8 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-cyan-400 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2">
                  Install the App <ArrowRight size={18} />
                </button>
                <a 
                  href="https://roadmapfinder.tech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-12 px-8 rounded-xl font-bold border border-white/20 text-white hover:bg-white/5 transition-all flex items-center justify-center"
                >
                  Continue on Web (Free)
                </a>
              </div>
              
              <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-gray-700"></div>
                  ))}
                </div>
                <p>Trusted by 10,000+ developers</p>
              </div>
            </div>

            {/* Emulator Side */}
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full -z-10" />
              <Emulator />
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why-us" className="py-20 bg-secondary/10 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Roadmapfinder?</h2>
            <p className="text-muted-foreground">
              Most developers quit because they get lost in tutorial hell. We fix that by giving you structure and accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Map className="w-10 h-10 text-primary" />,
                title: "Structured Paths",
                desc: "No more jumping between random tutorials. Follow a proven step-by-step path from zero to hired."
              },
              {
                icon: <Brain className="w-10 h-10 text-purple-400" />,
                title: "AI Mentor",
                desc: "Stuck on a concept? Our built-in AI explains complex topics simply and debugs your code instantly."
              },
              {
                icon: <Target className="w-10 h-10 text-green-400" />,
                title: "Progress Tracking",
                desc: "Visual progress bars and streaks gamify your learning, making consistency addictive."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-secondary/30 border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-all hover:bg-secondary/50 group"
              >
                <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <div className="relative">
                 <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-xl rounded-full"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop" 
                   alt="Coding workspace" 
                   className="relative rounded-2xl border border-white/10 shadow-2xl"
                 />
                 {/* Decorative overlay card */}
                 <div className="absolute -bottom-6 -right-6 bg-secondary border border-white/10 p-4 rounded-xl shadow-xl max-w-[200px] backdrop-blur-md hidden md:block">
                   <div className="flex items-center gap-2 mb-2">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                     <span className="text-xs font-bold text-white">Live Tracking</span>
                   </div>
                   <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                     <div className="h-full w-[75%] bg-green-500 rounded-full"></div>
                   </div>
                   <div className="mt-2 text-[10px] text-muted-foreground">75% Complete</div>
                 </div>
               </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">How It Works</h2>
              <div className="space-y-8">
                {[
                  { title: "Choose Your Skill", desc: "Select from Web Dev, Python, Data Science, and more." },
                  { title: "Follow the Roadmap", desc: "Interactive checklist guides you through concepts in the right order." },
                  { title: "Complete Assignments", desc: "Don't just watch—do. Practical tasks reinforce every lesson." },
                  { title: "Track & Master", desc: "Mark progress, earn badges, and build a portfolio ready for jobs." }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center border border-primary/20">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web vs App */}
      <section className="py-20 bg-secondary/20 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Web vs App</h2>
            <p className="text-muted-foreground mt-4">Why upgrade to the app experience?</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden">
            {/* Web Side */}
            <div className="p-8 md:p-12 bg-secondary/30 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                <Globe size={32} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Web Version</h3>
              <p className="text-primary font-bold mb-6">Free Forever</p>
              <ul className="space-y-4 text-left w-full max-w-xs mx-auto">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check size={16} /> Generic Roadmaps
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check size={16} /> Basic Resource Links
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground opacity-50">
                  <span className="w-4 h-[1px] bg-gray-500"></span> No Progress Tracking
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground opacity-50">
                  <span className="w-4 h-[1px] bg-gray-500"></span> No AI Assistance
                </li>
              </ul>
              <a 
                href="https://roadmapfinder.tech" 
                target="_blank"
                className="mt-8 text-sm font-semibold text-white border-b border-white/20 hover:border-white transition-all pb-0.5"
              >
                Go to Website
              </a>
            </div>

            {/* App Side */}
            <div className="p-8 md:p-12 bg-secondary/80 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary/20 text-primary text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">Recommended</div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20">
                <Smartphone size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mobile App</h3>
              <p className="text-primary font-bold mb-6">Personalized</p>
              <ul className="space-y-4 text-left w-full max-w-xs mx-auto">
                <li className="flex items-center gap-3 text-sm text-white font-medium">
                  <div className="bg-primary/20 p-0.5 rounded-full"><Check size={12} className="text-primary" /></div> 
                  AI-Personalized Paths
                </li>
                <li className="flex items-center gap-3 text-sm text-white font-medium">
                  <div className="bg-primary/20 p-0.5 rounded-full"><Check size={12} className="text-primary" /></div>
                  Track Every Step
                </li>
                <li className="flex items-center gap-3 text-sm text-white font-medium">
                  <div className="bg-primary/20 p-0.5 rounded-full"><Check size={12} className="text-primary" /></div>
                  AI Mentor & Chat
                </li>
                <li className="flex items-center gap-3 text-sm text-white font-medium">
                  <div className="bg-primary/20 p-0.5 rounded-full"><Check size={12} className="text-primary" /></div>
                  Offline Mode
                </li>
              </ul>
              <button className="mt-8 text-sm font-bold bg-primary text-primary-foreground px-6 py-2 rounded-lg shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                Download App
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground">
              Invest in your career for less than the cost of a coffee.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly */}
            <div className="bg-secondary/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Monthly</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">₹199</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <p className="text-sm text-muted-foreground mb-8 pb-8 border-b border-white/5">
                Great for short-term learning goals.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-white"><Check size={16} className="text-primary" /> Full App Access</li>
                <li className="flex items-center gap-3 text-sm text-white"><Check size={16} className="text-primary" /> AI Mentor Support</li>
                <li className="flex items-center gap-3 text-sm text-white"><Check size={16} className="text-primary" /> Progress Analytics</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-white/20 text-white font-bold hover:bg-white/5 transition-colors">
                Choose Monthly
              </button>
            </div>

            {/* Yearly */}
            <div className="bg-secondary/80 border border-primary/50 rounded-2xl p-8 relative shadow-2xl shadow-primary/5 transform md:scale-105 z-10">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                BEST VALUE • 37% OFF
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Yearly</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">₹1,499</span>
                <span className="text-muted-foreground">/yr</span>
              </div>
              <p className="text-sm text-muted-foreground mb-8 pb-8 border-b border-white/10">
                Commit to mastering your craft.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-white"><Check size={16} className="text-primary" /> Everything in Monthly</li>
                <li className="flex items-center gap-3 text-sm text-white"><Check size={16} className="text-primary" /> Priority AI Response</li>
                <li className="flex items-center gap-3 text-sm text-white"><Check size={16} className="text-primary" /> Offline Downloads</li>
                <li className="flex items-center gap-3 text-sm text-white"><Check size={16} className="text-primary" /> Exclusive Community</li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">
                Choose Yearly
              </button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <Shield size={14} className="text-green-400" />
              <p className="text-xs text-muted-foreground">
                <span className="text-white font-medium">Note:</span> Web version is always free. You only pay for app features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is Roadmapfinder really free?", a: "Yes! The web version at roadmapfinder.tech is 100% free forever. The mobile app has a premium subscription for advanced features like AI mentoring and progress tracking." },
              { q: "How is this different from roadmap.sh?", a: "Roadmap.sh is great for static maps. We take it further by making them interactive, tracking your progress, and providing an AI mentor to help you when you get stuck." },
              { q: "Can I cancel my subscription?", a: "Anytime. No questions asked. You'll keep access until the end of your billing period." },
              { q: "Is the content suitable for absolute beginners?", a: "Absolutely. We have specific paths designed for people writing their first line of code." }
            ].map((item, i) => (
              <div key={i} className="bg-secondary/30 border border-white/5 rounded-xl p-6 hover:bg-secondary/50 transition-colors">
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <ChevronDown size={18} className="text-primary" /> {item.q}
                </h4>
                <p className="text-muted-foreground pl-7 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Still have questions?</h2>
               <p className="text-muted-foreground text-lg mb-8">
                 We're building this for you. If you have feature requests, bugs, or just want to say hi, drop us a message.
               </p>
               <div className="space-y-6">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                     <Globe size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-white">Visit Website</h4>
                     <a href="https://roadmapfinder.tech" className="text-sm text-muted-foreground hover:text-primary transition-colors">roadmapfinder.tech</a>
                   </div>
                 </div>
                 {/* Add more contact info if needed */}
               </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
