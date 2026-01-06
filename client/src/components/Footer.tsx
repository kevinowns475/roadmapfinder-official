import { Link } from "wouter";
import { Twitter, Instagram, Linkedin, Mail, Github } from "lucide-react";
import logo from "@assets/Screenshot_(82)_1767703844656.png";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-white/5 p-1">
                <img src={logo} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-lg text-white">Roadmapfinder</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Stop guessing your learning path. Get structured roadmaps, personalized assignments, and an AI mentor to guide your journey.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Product</h4>
            <ul className="space-y-3">
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-primary text-sm transition-colors">How it Works</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary text-sm transition-colors">Pricing</a></li>
              <li><a href="https://roadmapfinder.tech" className="text-muted-foreground hover:text-primary text-sm transition-colors">Web Version</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Download App</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Community</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary text-sm transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Roadmapfinder. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-2">
            Made with <span className="text-red-500">♥</span> for developers
          </p>
        </div>
      </div>
    </footer>
  );
}
