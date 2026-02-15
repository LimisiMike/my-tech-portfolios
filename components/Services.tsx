
import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Dual-Threat Advantage</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Expertise that spans deep technical troubleshooting and modern AI-driven efficiency.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side - The Shield */}
        <div className="group p-10 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-indigo-500/50 transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 transform group-hover:scale-110 transition-transform">
            <i className="fas fa-shield-alt text-8xl text-indigo-500"></i>
          </div>
          <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/20">
            <i className="fas fa-server text-2xl text-indigo-400"></i>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">SaaS Technical Support (Tier 3)</h3>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            "Safe Hands for your API logs, SQL databases, and 1M+ users. I handle the hard stuff."
          </p>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex items-center gap-3">
              <i className="fas fa-check text-indigo-500"></i>
              SQL performance tuning & complex query debugging
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-check text-indigo-500"></i>
              API architecture & 3rd party integration troubleshooting
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-check text-indigo-500"></i>
              Incident management & post-mortem documentation
            </li>
          </ul>
        </div>

        {/* Right Side - The Rocket */}
        <div className="group p-10 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-emerald-500/50 transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 transform group-hover:scale-110 transition-transform">
            <i className="fas fa-rocket text-8xl text-emerald-500"></i>
          </div>
          <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
            <i className="fas fa-brain text-2xl text-emerald-400"></i>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">AI Automation Strategy</h3>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            "Google Certified Prompt Engineer. I build Make.com workflows and AI agents that deflect 40% of volume."
          </p>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex items-center gap-3">
              <i className="fas fa-check text-emerald-500"></i>
              Custom AI Support Agents (OpenAI Assistants API)
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-check text-emerald-500"></i>
              Complex multi-step Make.com & Zapier workflows
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-check text-emerald-500"></i>
              Automated data entry & CRM sync systems
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
