
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="expertise" className="py-24">
          <Services />
        </section>
        <section id="portfolio" className="py-24 bg-slate-950/50">
          <Portfolio />
        </section>
        <section id="testimonials" className="py-24">
          <Testimonials />
        </section>
        <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
