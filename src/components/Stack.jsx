import React from 'react';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const Stack = () => {
  const stackGroups = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6 text-navy" />,
      items: ["Java", "Python", "C++"]
    },
    {
      title: "Foundations",
      icon: <Database className="w-6 h-6 text-navy" />,
      items: ["Data Structures & Algorithms", "OOP", "DBMS"]
    },
    {
      title: "Web",
      icon: <Layout className="w-6 h-6 text-navy" />,
      items: ["React.js", "Node.js", "Express.js", "MongoDB", "SQL"]
    },
    {
      title: "Tooling",
      icon: <Terminal className="w-6 h-6 text-navy" />,
      items: ["Git", "GitHub", "Linux"]
    }
  ];

  return (
    <section className="bg-cream py-20 lg:py-32" id="stack">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-12 text-center">Tech Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stackGroups.map((group, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center mb-6">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold text-ink mb-5">{group.title}</h3>
              <ul className="space-y-4">
                {group.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate font-medium">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
