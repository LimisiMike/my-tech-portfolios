
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid">
      {/* Animated Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for New Projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
            Stabilize Your Support Ops. <br />
            <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Automate Your Busy Work.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I bridge the gap between Tier 3 Technical Support and AI Agentic Workflows. 
            Stop drowning in tickets—let's build a system that <span className="text-emerald-400 font-semibold underline decoration-emerald-500/30">solves them for you.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-1">
              Book a System Audit
              <i className="fas fa-arrow-right ml-2 text-sm opacity-70"></i>
            </a>
            <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 glass-card hover:bg-slate-800 text-white rounded-xl font-bold text-lg transition-all border border-slate-700">
              View My Systems
            </a>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2"><i className="fab fa-aws text-2xl"></i> <span className="font-bold">AWS</span></div>
             <div className="flex items-center gap-2"><i className="fas fa-database text-2xl"></i> <span className="font-bold">PostgreSQL</span></div>
             <div className="flex items-center gap-2"><i className="fas fa-robot text-2xl"></i> <span className="font-bold">OpenAI</span></div>
             <div className="flex items-center gap-2"><i className="fas fa-cog text-2xl"></i> <span className="font-bold">Make.com</span></div>
             <div className="flex items-center gap-2"><i className="fab fa-python text-2xl"></i> <span className="font-bold">Python</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
