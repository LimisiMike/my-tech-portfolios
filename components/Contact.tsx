
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to reclaim 20 hours a week?</h2>
          <p className="text-lg text-slate-400 mb-12 leading-relaxed">
            I'm currently accepting new automation projects and Tier 3 support consulting roles. 
            If your support volume is scaling faster than your team, let's talk.
          </p>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400">
                <i className="fas fa-location-dot"></i>
              </div>
              <div>
                <h4 className="font-bold text-white">Location</h4>
                <p className="text-slate-400">Based in Nairobi, Kenya (GMT+3) <br /> Available for Global Async Work.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4 className="font-bold text-white">Direct Email</h4>
                <a href="mailto:michaellimisi7@gmail.com" className="text-slate-400 hover:text-white transition-colors">michaellimisi7@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div>
                <h4 className="font-bold text-white">WhatsApp / Mobile</h4>
                <a href="https://wa.me/254715787403" className="text-slate-400 hover:text-white transition-colors">"Prefer a quick chat? Message me on WhatsApp." (https://wa.me/254715787403)
</a>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-all">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-all">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-all">
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>

        <div className="glass-card p-10 rounded-[32px] border border-slate-800 shadow-2xl">
          <form action="https://formspree.io/f/mdalgben" method="POST" className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="John Doe" 
                  className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 ml-1">Work Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="john@company.com" 
                  className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-400 ml-1">What is your biggest bottleneck?</label>
              <select 
                name="bottleneck"
                className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all appearance-none"
                required
              >
                <option value="">Select an option</option>
                <option value="high-ticket-volume">High Ticket Volume</option>
                <option value="manual-data-entry">Manual Data Entry</option>
                <option value="api-errors">API Errors / Scaling Issues</option>
                <option value="other">Other / General Strategy</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-400 ml-1">Tell me about your tech stack</label>
              <textarea 
                rows={4} 
                name="message"
                placeholder="Briefly describe your current support ops or automation needs..." 
                className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-500/20 transition-all transform active:scale-[0.98]"
            >
              Send Audit Request
            </button>
            <div className="text-center">
                <a 
                  href="https://calendly.com/michaellimisi7/system-audit" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-4 transition-colors"
                >
                  Hate forms? Book a 15-min System Audit.
                </a>
              </div>
            <p className="text-center text-xs text-slate-500">
              Response time: typically under 12 hours.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
