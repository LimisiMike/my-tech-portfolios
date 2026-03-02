
import React from 'react';

const projects = [
  {
    title: "Scaling Arucy to 1M Users",
    description: "Architected the technical support infrastructure for a high-growth SaaS startup, reducing escalation response time by 60%.",
    image: "/my-tech-portfolios/Scalings.png",
    tags: ["SQL", "AWS", "Support Operations"],
    icon: "fa-chart-line"
  },
  {
    title: "The AI Agent That Drafts Emails",
    description: "Built a custom LLM-powered agent using Make.com that drafts context-aware responses to 80% of incoming Tier 1 tickets.",
    image: "/my-tech-portfolios/The_AI_Agent.png",
    tags: ["Make.com", "OpenAI", "Python"],
    icon: "fa-envelope-open-text"
  },
  {
    title: "Midjourney & Content Automation",
    description: "Developed a Discord-based workflow to automate high-fidelity asset generation for marketing teams using prompting and API bridges.",
    image: "/my-tech-portfolios/Midjourney.png",
    tags: ["Prompting", "Discord API", "Node.js"],
    icon: "fa-magic"
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Proof of Work</h2>
          <p className="text-slate-400 max-w-xl">A glimpse into the systems I've built to save thousands of hours and handle millions of requests.</p>
        </div>
        <a href="https://github.com" className="text-indigo-400 font-semibold hover:text-indigo-300 flex items-center gap-2 group">
          View all on GitHub <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group glass-card rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col h-full border border-slate-800 hover:border-slate-600">
            <div className="relative h-48 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20">
                  <i className={`fas ${project.icon} text-white`}></i>
                </div>
              </div>
            </div>
            <div className="p-8 flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>
            <div className="px-8 pb-8">
              <button className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                Case Study Coming Soon
                <i className="fas fa-lock text-[10px] opacity-50"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
