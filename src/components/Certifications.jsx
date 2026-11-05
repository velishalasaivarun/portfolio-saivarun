import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: "Crash Course on Python",
      date: "Sep '24",
      issuer: "Foundational Programming",
      accent: "from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-400/30",
      glow: "hover:border-cyan-400/50"
    },
    {
      title: "Cloud Computing",
      date: "Apr '25",
      issuer: "Infrastructure & Systems",
      accent: "from-violet-500/20 to-purple-500/20 text-violet-300 border-violet-400/30",
      glow: "hover:border-violet-400/50"
    },
    {
      title: "Spring & Angular Full Stack Developer",
      date: "Aug '25",
      issuer: "Enterprise Web Architecture",
      accent: "from-pink-500/20 to-rose-500/20 text-pink-300 border-pink-400/30",
      glow: "hover:border-pink-400/50"
    },
    {
      title: "Prompt Engineering for Developers",
      date: "Feb '26",
      issuer: "Applied Generative AI",
      accent: "from-amber-500/20 to-yellow-500/20 text-amber-300 border-amber-400/30",
      glow: "hover:border-amber-400/50"
    }
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" id="certifications">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-cyan-300 mb-4 border border-cyan-400/20">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white light:text-slate-900">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        {/* 2x2 Bento Grid with Large Rounded Shapes and Asymmetric Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certs.map((cert, index) => {
            const tilt = index % 2 === 0 ? 'sm:-rotate-1' : 'sm:rotate-1';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-[28px] glass-card p-6 sm:p-7 border border-white/10 ${cert.glow} shadow-lg transition-all duration-400 transform ${tilt} hover:rotate-0 hover:scale-[1.02] flex flex-col justify-between`}
              >
                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-5 h-5 text-cyan-400" />
                    </span>
                    <span className="text-xs font-mono text-pink-300 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-400/20">
                      {cert.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white light:text-slate-900 mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                {/* Subtitle / Field */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 light:text-slate-500">
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
