import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Sparkles, Award } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Engineering, Computer Science Engineering",
      institution: "Chandigarh University, Mohali, India",
      date: "Jan '23–Present",
      current: true,
      tag: "Undergraduate",
      details: "Focusing on Software Architecture, Cloud Paradigms, Database Systems, and Advanced Data Structures."
    },
    {
      degree: "Intermediate, PCM",
      institution: "Sr Junior College, Warangal, India",
      date: "Jan '21–Jan '23",
      current: false,
      tag: "Higher Secondary",
      details: "Physics, Chemistry, and Mathematics foundation with rigorous analytical training."
    }
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" id="education">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-cyan-300 mb-4 border border-cyan-400/20">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white light:text-slate-900">
            Formal <span className="gradient-text">Education</span>
          </h2>
        </div>

        {/* Vertical Glowing Timeline */}
        <div className="relative pl-6 sm:pl-10">
          
          {/* Glowing vertical gradient spine */}
          <div className="absolute left-[13px] sm:left-[21px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-violet-500 via-cyan-400 to-pink-500 shadow-[0_0_12px_rgba(34,211,238,0.5)]" />

          <div className="space-y-12">
            {educationList.map((edu, index) => {
              const tilt = index % 2 === 0 ? 'sm:-rotate-1' : 'sm:rotate-1';

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Glowing Node with Pulse */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-7 flex items-center justify-center">
                    <span className="relative flex h-5 w-5">
                      {edu.current && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      )}
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-[#0B0B14] border-2 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      </span>
                    </span>
                  </div>

                  {/* Card Container (rounded-[32px] with glassmorphism & tilt) */}
                  <div className={`rounded-[32px] glass-card p-6 sm:p-8 border border-white/10 hover:border-cyan-400/40 shadow-xl transition-all duration-400 transform ${tilt} hover:rotate-0 hover:scale-[1.01]`}>
                    
                    {/* Top Row: Date pill & Tag */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-600/15 border border-violet-400/30 text-xs font-mono text-cyan-300">
                        <Calendar className="w-3.5 h-3.5 text-violet-400" />
                        <span>{edu.date}</span>
                      </div>

                      <span className="text-xs font-mono text-pink-300 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-400/20">
                        {edu.tag}
                      </span>
                    </div>

                    {/* Degree Title */}
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white light:text-slate-900 mb-2 group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <div className="flex items-center gap-2 text-slate-300 light:text-slate-600 font-medium text-sm sm:text-base mb-3">
                      <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{edu.institution}</span>
                    </div>

                    <p className="text-slate-400 light:text-slate-500 text-sm leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
