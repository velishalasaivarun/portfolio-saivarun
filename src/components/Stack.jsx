import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Sparkles, Cpu, Layers, GitBranch, ShieldCheck } from 'lucide-react';

const Stack = () => {
  const stackGroups = [
    {
      title: "Languages",
      subtitle: "Core Programming",
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      accentGradient: "from-cyan-500/20 via-violet-500/10 to-transparent",
      borderColor: "hover:border-cyan-400/40",
      iconBg: "bg-cyan-500/10 border-cyan-400/30",
      items: ["Java", "Python", "C++"]
    },
    {
      title: "Foundations",
      subtitle: "Computer Science",
      icon: <Cpu className="w-6 h-6 text-pink-400" />,
      accentGradient: "from-pink-500/20 via-violet-500/10 to-transparent",
      borderColor: "hover:border-pink-400/40",
      iconBg: "bg-pink-500/10 border-pink-400/30",
      items: ["Data Structures & Algorithms", "OOP", "DBMS"]
    },
    {
      title: "Web",
      subtitle: "Full-Stack Development",
      icon: <Layout className="w-6 h-6 text-violet-400" />,
      accentGradient: "from-violet-500/20 via-cyan-500/10 to-transparent",
      borderColor: "hover:border-violet-400/40",
      iconBg: "bg-violet-500/10 border-violet-400/30",
      items: ["React.js", "Node.js", "Express.js", "MongoDB", "SQL"]
    },
    {
      title: "Tooling",
      subtitle: "DevOps & Environments",
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
      accentGradient: "from-emerald-500/20 via-cyan-500/10 to-transparent",
      borderColor: "hover:border-emerald-400/40",
      iconBg: "bg-emerald-500/10 border-emerald-400/30",
      items: ["Git", "GitHub", "Linux"]
    }
  ];

  // All skills flattened for the floating marquee ribbon
  const allSkills = [
    "React.js", "Node.js", "Express.js", "Python", "Java", "C++",
    "PostgreSQL", "MongoDB", "SQL", "Data Structures & Algorithms",
    "OOP", "DBMS", "Git", "GitHub", "Linux"
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" id="stack">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-cyan-300 mb-4 border border-cyan-400/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities • Toolchain</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white light:text-slate-900 mb-4">
            Engineering <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-slate-300 light:text-slate-600 text-base sm:text-lg">
            A battle-tested foundation bridging core algorithmic theory with production-grade full-stack architecture.
          </p>
        </div>

        {/* Orbiting / Scrolling Marquee Ribbon */}
        <div className="relative mb-16 overflow-hidden rounded-full glass-card py-3.5 border border-white/10 shadow-lg">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B0B14] light:from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B0B14] light:from-white to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max animate-marquee space-x-4">
            {[...allSkills, ...allSkills].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-1.5 rounded-full glass-pill border border-white/10 text-xs sm:text-sm font-mono text-slate-200 light:text-slate-800 whitespace-nowrap flex items-center gap-2 hover:border-cyan-400 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Asymmetric Bento Grid (4 Cards with tilt and straightening on hover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stackGroups.map((group, index) => {
            // Alternating tilt for asymmetric organic feel
            const tiltClasses = index % 2 === 0 ? 'lg:-rotate-1' : 'lg:rotate-1';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-[32px] glass-card p-7 border border-white/10 ${group.borderColor} shadow-xl transition-all duration-500 transform ${tiltClasses} hover:rotate-0 hover:scale-[1.02] flex flex-col justify-between`}
              >
                {/* Ambient glow inside card */}
                <div className={`absolute inset-0 rounded-[32px] bg-gradient-to-br ${group.accentGradient} opacity-30 pointer-events-none`} />

                <div className="relative z-10">
                  {/* Top Icon Squircle */}
                  <div className={`w-14 h-14 rounded-2.5xl ${group.iconBg} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    {group.icon}
                  </div>

                  {/* Group Titles */}
                  <h3 className="text-xl font-bold font-display text-white light:text-slate-900 mb-1">
                    {group.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 light:text-slate-500 mb-6">
                    {group.subtitle}
                  </p>

                  {/* Chips Container */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full glass-pill border border-white/10 group-hover:border-white/20 text-slate-200 light:text-slate-700 flex items-center gap-2 hover:bg-white/10 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom subtle category code pill */}
                <div className="relative z-10 mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Category 0{index + 1}</span>
                  <span className="text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity">Active</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Stack;
