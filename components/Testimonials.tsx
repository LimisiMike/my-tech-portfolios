
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="bg-gradient-to-br from-indigo-900/20 to-emerald-900/20 rounded-[40px] p-8 md:p-16 border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20"></div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
              <i className="fas fa-quote-left text-3xl text-indigo-400"></i>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What Operations Leaders Say</h2>
            <p className="text-xl text-slate-300 italic mb-8 leading-relaxed">
              "Michael doesn't just fix problems; he eliminates them. His ability to dive into our SQL mess and then build an AI agent that prevents the same ticket from ever happening again changed our whole workflow."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-slate-700 overflow-hidden border-2 border-indigo-500">
                <img src="https://picsum.photos/id/64/200" alt="Testimonial" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-white">Sarah Jenkins</p>
                <p className="text-sm text-slate-400 text-indigo-400">Head of Operations at CloudScale</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-2xl">
              <p className="text-3xl font-bold text-white mb-2">40%</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Ticket Deflection</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <p className="text-3xl font-bold text-white mb-2">20h+</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Time Saved/Week</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <p className="text-3xl font-bold text-white mb-2">99%</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Resolution Rate</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <p className="text-3xl font-bold text-white mb-2">1M+</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Users Supported</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
