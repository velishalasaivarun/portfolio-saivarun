import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, PenTool, ArrowUpRight, Sparkles, BookOpen, Users } from 'lucide-react';

const Volunteering = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" id="volunteering">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-cyan-300 mb-4 border border-cyan-400/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Community & Publications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white light:text-slate-900">
            Volunteering & <span className="gradient-text">Writing</span>
          </h2>
        </div>

        {/* Two Asymmetric Bento Tiles with Different Sizes, Gradient Icons, Hover Lift & Glow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Bento Tile 1: Volunteering (7 Cols - Wider) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 group relative rounded-[36px] glass-card p-8 sm:p-10 border border-white/10 hover:border-violet-500/50 shadow-2xl transition-all duration-500 transform lg:-rotate-1 hover:rotate-0 hover:-translate-y-2 flex flex-col justify-between"
          >
            {/* Ambient Violet Glow */}
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-violet-600/15 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="relative z-10">
              {/* Gradient Icon Container */}
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-[1.5px] mb-8 shadow-neon-violet group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full bg-[#121124] rounded-3xl flex items-center justify-center">
                  <HeartHandshake className="w-8 h-8 text-cyan-300" />
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-mono text-violet-300 mb-4 border border-violet-400/20">
                <Users className="w-3.5 h-3.5" />
                Leadership & Mentorship
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white light:text-slate-900 mb-4 group-hover:text-cyan-300 transition-colors">
                College Technical Fest Coordinator
              </h3>

              <p className="text-slate-300 light:text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
                Organized for 150+ participants, mentored juniors in Git and web development.
              </p>
            </div>

            {/* Metric pill */}
            <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Impact</span>
              <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-400/20">
                150+ Students Guided
              </span>
            </div>
          </motion.div>

          {/* Bento Tile 2: Writing & Publication (5 Cols - Compact) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 group relative rounded-[36px] glass-card p-8 sm:p-10 border border-white/10 hover:border-pink-500/50 shadow-2xl transition-all duration-500 transform lg:rotate-1 hover:rotate-0 hover:-translate-y-2 flex flex-col justify-between"
          >
            {/* Ambient Pink Glow */}
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-pink-500/15 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="relative z-10">
              {/* Gradient Icon Container */}
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-pink-500 to-amber-400 p-[1.5px] mb-8 shadow-neon-pink group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full bg-[#121124] rounded-3xl flex items-center justify-center">
                  <PenTool className="w-8 h-8 text-pink-300" />
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-mono text-pink-300 mb-4 border border-pink-400/20">
                <BookOpen className="w-3.5 h-3.5" />
                Technical Article
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white light:text-slate-900 mb-4 group-hover:text-pink-300 transition-colors">
                Published Article
              </h3>

              <p className="text-slate-300 light:text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
                REST API development with Node.js & Express
              </p>
            </div>

            {/* Read Link Button */}
            <div className="relative z-10 pt-6 border-t border-white/10">
              <a
                href="https://github.com/velishalasaivarun"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-400/40 text-slate-200 hover:text-white transition-all group/link"
              >
                <span className="font-medium text-sm">Read on GitHub/Medium</span>
                <ArrowUpRight className="w-4 h-4 text-pink-400 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Volunteering;
