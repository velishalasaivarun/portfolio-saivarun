import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitCommit, GitBranch, Sparkles, Terminal, CheckCircle2, ChevronRight, Layers, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      title: "AI-powered School Management System",
      date: "Jan '26–Present",
      hash: "a1b2c3d",
      status: "In Active Development",
      description: "Full-stack platform serving five roles: Admin, Teacher, Student, Parent, Accountant.",
      points: [
        "Anthropic Claude-powered chat assistant for parents/students to query attendance, grades, fees in natural language",
        "Predictive analytics module flagging at-risk students from attendance/performance trends",
        "11+ table normalized PostgreSQL schema via Prisma ORM, JWT auth, role-based access control"
      ],
      tags: [
        { name: "React Native", color: "from-cyan-400/20 to-blue-500/20 text-cyan-300 border-cyan-400/30" },
        { name: "Node.js", color: "from-emerald-400/20 to-teal-500/20 text-emerald-300 border-emerald-400/30" },
        { name: "PostgreSQL", color: "from-blue-400/20 to-indigo-500/20 text-blue-300 border-blue-400/30" },
        { name: "Prisma", color: "from-violet-400/20 to-purple-500/20 text-violet-300 border-violet-400/30" },
        { name: "Claude API", color: "from-pink-400/20 to-rose-500/20 text-pink-300 border-pink-400/30" },
        { name: "RBAC", color: "from-amber-400/20 to-yellow-500/20 text-amber-300 border-amber-400/30" },
      ],
      featuredBadge: "Flagship Project",
      accentBorder: "group-hover:border-violet-500/50",
      accentGlow: "from-violet-600/20 via-cyan-500/10 to-transparent",
    },
    {
      title: "Imagify — AI Text-to-Image Generator",
      date: "Shipped",
      hash: "f4e5d6c",
      status: "Production Shipped",
      description: "React + Node/Express app generating images from text prompts via the ClipDrop API.",
      points: [
        "PostgreSQL schema for user accounts, credit balances, transaction history",
        "JWT-based signup/login protecting generation routes"
      ],
      tags: [
        { name: "React", color: "from-cyan-400/20 to-blue-500/20 text-cyan-300 border-cyan-400/30" },
        { name: "Node.js", color: "from-emerald-400/20 to-teal-500/20 text-emerald-300 border-emerald-400/30" },
        { name: "PostgreSQL", color: "from-blue-400/20 to-indigo-500/20 text-blue-300 border-blue-400/30" },
        { name: "ClipDrop API", color: "from-pink-400/20 to-rose-500/20 text-pink-300 border-pink-400/30" },
        { name: "JWT", color: "from-amber-400/20 to-yellow-500/20 text-amber-300 border-amber-400/30" },
      ],
      featuredBadge: "Generative AI",
      accentBorder: "group-hover:border-cyan-500/50",
      accentGlow: "from-cyan-500/20 via-pink-500/10 to-transparent",
    }
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-cyan-300 mb-4 border border-cyan-400/20">
              <GitCommit className="w-3.5 h-3.5 text-cyan-400" />
              <span>Git-Commit Timeline • Production Builds</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white light:text-slate-900">
              Featured <span className="gradient-text">Project History</span>
            </h2>
          </div>

          {/* Quick tab switcher pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-full glass-pill border border-white/10 self-start md:self-auto">
            {projects.map((project, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeTab === idx
                    ? 'text-white light:text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-white light:text-slate-600'
                }`}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="project-tab-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 shadow-[0_0_15px_rgba(124,58,237,0.5)] -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="flex items-center gap-2">
                  <GitBranch className="w-3.5 h-3.5" />
                  {idx === 0 ? 'School Management' : 'Imagify AI'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Stacked Asymmetric Bento Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Active Featured Card (Wide showcase) */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 group relative rounded-[32px] sm:rounded-[40px] glass-card p-6 sm:p-10 border border-white/10 hover:border-cyan-400/40 shadow-2xl transition-all duration-500 transform lg:-rotate-1 hover:rotate-0"
          >
            {/* Subtle card ambient gradient wash */}
            <div className={`absolute inset-0 rounded-[32px] sm:rounded-[40px] bg-gradient-to-br ${projects[activeTab].accentGlow} opacity-30 pointer-events-none`} />

            {/* Top Commit & Date Meta Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
              <div className="flex items-center gap-3">
                {/* Git commit badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-400/30 text-xs font-mono text-cyan-300 shadow-sm">
                  <GitCommit className="w-3.5 h-3.5 text-violet-400" />
                  <span>commit {projects[activeTab].hash}</span>
                </div>
                
                {/* Date pill */}
                <span className="text-xs font-mono font-medium text-pink-300 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-400/20">
                  {projects[activeTab].date}
                </span>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{projects[activeTab].status}</span>
              </div>
            </div>

            {/* Project Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white light:text-slate-900 mb-4 group-hover:text-cyan-300 transition-colors relative z-10">
              {projects[activeTab].title}
            </h3>

            {/* Description */}
            <p className="text-slate-300 light:text-slate-700 text-base sm:text-lg leading-relaxed mb-6 relative z-10">
              {projects[activeTab].description}
            </p>

            {/* Project Highlights / Bullets */}
            <div className="space-y-3.5 mb-8 relative z-10">
              {projects[activeTab].points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-400 p-[1px] flex items-center justify-center">
                    <span className="w-full h-full bg-[#0B0B14] rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    </span>
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills with vibrant colors */}
            <div className="pt-6 border-t border-white/10 relative z-10">
              <span className="block text-xs font-mono text-slate-400 light:text-slate-500 uppercase tracking-wider mb-3">
                Technologies & Architecture
              </span>
              <div className="flex flex-wrap gap-2.5">
                {projects[activeTab].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`text-xs font-mono font-medium px-4 py-1.5 rounded-full bg-gradient-to-r ${tag.color} border backdrop-blur-sm hover:scale-105 transition-transform cursor-default`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Bento Column: Secondary Project Peek & Interactive Deck List */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs font-mono text-slate-400 light:text-slate-500 uppercase tracking-wider block px-2">
              Timeline Index ({projects.length} Commits)
            </span>

            {projects.map((proj, idx) => {
              const isSelected = activeTab === idx;
              return (
                <motion.div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`cursor-pointer rounded-[28px] sm:rounded-[32px] p-6 transition-all duration-300 border ${
                    isSelected
                      ? 'glass-card border-cyan-400/60 shadow-[0_0_30px_rgba(34,211,238,0.2)] bg-gradient-to-br from-violet-950/40 to-[#121124]'
                      : 'glass-card border-white/10 hover:border-violet-400/40 opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <GitCommit className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                      <span className="text-xs font-mono text-slate-300">
                        {proj.hash}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-pink-300 bg-pink-500/10 px-2.5 py-0.5 rounded-full border border-pink-400/20">
                      {proj.date}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-base sm:text-lg text-white light:text-slate-900 mb-2 line-clamp-1">
                    {proj.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 line-clamp-2 mb-4">
                    {proj.description}
                  </p>

                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                    <span>{proj.tags.length} modules linked</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View details <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {/* Quick Repository Metrics Pill Card */}
            <div className="rounded-[28px] p-5 glass-pill border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-400 p-[1px] flex items-center justify-center">
                  <div className="w-full h-full bg-[#0B0B14] rounded-full flex items-center justify-center text-cyan-400">
                    <Terminal className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Architecture</div>
                  <div className="text-sm font-semibold text-white light:text-slate-900">Modular Monorepos & Microservices</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
