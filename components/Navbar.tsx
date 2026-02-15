
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
             <i className="fas fa-code text-white text-sm"></i>
          </div>
          <span className="text-xl font-bold text-white font-mono tracking-tighter">Michael.Dev</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#expertise" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Expertise</a>
          <a href="#portfolio" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Portfolio</a>
          <a href="#testimonials" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Testimonials</a>
          <a href="#contact" className="bg-white/5 hover:bg-white/10 text-white px-5 py-2 rounded-full text-sm font-semibold border border-white/10 transition-all">
            Book a System Audit
          </a>
        </div>

        <button className="md:hidden text-white text-2xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
