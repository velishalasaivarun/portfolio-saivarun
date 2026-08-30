import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Engineering, Computer Science Engineering",
      institution: "Chandigarh University, Mohali, India",
      date: "Jan '23–Present"
    },
    {
      degree: "Intermediate, PCM",
      institution: "Sr Junior College, Warangal, India",
      date: "Jan '21–Jan '23"
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-32" id="education">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-12 flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-navy" />
          Education
        </h2>

        <div className="space-y-8">
          {educationList.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-gray-50 p-6 sm:p-8 rounded-2xl hover:bg-gray-100 transition-colors">
              <div className="md:w-1/3 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-navy font-mono font-medium bg-white px-4 py-2 rounded-lg w-fit shadow-sm">
                  <Calendar className="w-4 h-4 text-gold" />
                  {edu.date}
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-ink mb-2">{edu.degree}</h3>
                <p className="text-slate text-lg">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
