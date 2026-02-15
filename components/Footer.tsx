
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-500/20 rounded flex items-center justify-center">
               <i className="fas fa-code text-indigo-400 text-[10px]"></i>
            </div>
            <span className="text-lg font-bold text-white font-mono tracking-tighter italic">Michael.Dev</span>
          </div>
          
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Michael Alusa Limisi. All rights reserved. 
            <span className="mx-3 text-slate-800">|</span> 
            SaaS Technical Support & AI Automation Specialist.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Terms</a>
            <a href="#hero" className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition-all">
              <i className="fas fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
