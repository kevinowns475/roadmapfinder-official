
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy & Terms</h1>
        <p className="text-slate-500 mb-12">Last updated: May 15, 2024</p>
        
        <div className="prose prose-invert prose-sky max-w-none space-y-12 text-slate-400">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              At Roadmapfinder, we prioritize your privacy. This policy outlines how we handle your data across our website and mobile applications. We believe in transparency and strictly avoid marketing buzzwords or hidden agendas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Data We Collect</h2>
            <p>
              We collect minimal information required to provide you with a personalized experience:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Info:</strong> Email and name for account creation and synchronization.</li>
              <li><strong>Learning Progress:</strong> Which modules you've completed, your XP, and your streaks.</li>
              <li><strong>Preferences:</strong> Skills you're interested in and your stated skill level.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. No Selling of Data</h2>
            <p className="bg-sky-900/10 border-l-4 border-sky-500 p-4 text-sky-100 italic">
              "We will NEVER sell your personal data to third parties. Your learning journey is yours alone."
            </p>
            <p className="mt-4">
              We make money through honest subscriptions, not through the exploitation of user data. Any third-party services we use (like analytics or payment processors) are strictly vetted for privacy compliance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. AI Mentorship & Ethics</h2>
            <p>
              When you interact with our AI Mentor, the conversation is used to help the AI understand context and provide better answers. We do not use these conversations for marketing or profiling purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. User Rights</h2>
            <p>
              You have the right to request a copy of your data or ask for the deletion of your account at any time. Simply email us at support@roadmapfinder.com, and we will process your request within 48 hours.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-900">
            <h2 className="text-2xl font-bold text-white mb-4">Terms of Service</h2>
            <p>
              By using Roadmapfinder, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the platform for lawful learning purposes.</li>
              <li>Not attempt to scrape our proprietary roadmaps or AI logic.</li>
              <li>Respect the intellectual property of the resources we curate (official docs, etc.).</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
