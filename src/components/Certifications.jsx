import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certs = [
    { title: "Crash Course on Python", date: "Sep '24" },
    { title: "Cloud Computing", date: "Apr '25" },
    { title: "Spring & Angular Full Stack Developer", date: "Aug '25" },
    { title: "Prompt Engineering for Developers", date: "Feb '26" }
  ];

  return (
    <section className="bg-cream py-20 lg:py-32" id="certifications">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-12 flex items-center gap-3">
          <Award className="w-8 h-8 text-navy" />
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certs.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group hover:border-navy/30 transition-colors">
              <h3 className="text-lg font-bold text-ink leading-tight">{cert.title}</h3>
              <span className="text-sm font-mono text-slate bg-gray-50 px-3 py-1 rounded-md whitespace-nowrap">
                {cert.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
