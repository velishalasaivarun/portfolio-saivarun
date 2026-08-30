import React from 'react';
import { HeartHandshake, PenTool } from 'lucide-react';

const Volunteering = () => {
  return (
    <section className="bg-white py-20 lg:py-32" id="volunteering">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-12">Volunteering & Writing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-navy/20 transition-colors">
            <HeartHandshake className="w-10 h-10 text-navy mb-6 bg-white p-2 rounded-xl shadow-sm" />
            <h3 className="text-xl font-bold text-ink mb-4">College Technical Fest Coordinator</h3>
            <p className="text-slate leading-relaxed">
              Organized for 150+ participants, mentored juniors in Git and web development.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-navy/20 transition-colors">
            <PenTool className="w-10 h-10 text-navy mb-6 bg-white p-2 rounded-xl shadow-sm" />
            <h3 className="text-xl font-bold text-ink mb-4">Published Article</h3>
            <p className="text-slate leading-relaxed mb-4">
              REST API development with Node.js & Express
            </p>
            <a href="#" className="inline-flex items-center text-navy font-medium hover:text-navy/80 group">
              Read on GitHub/Medium 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
