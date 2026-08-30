import React from 'react';
import { GitCommit } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-powered School Management System",
      date: "Jan '26–Present",
      hash: "a1b2c3d",
      description: "Full-stack platform serving five roles: Admin, Teacher, Student, Parent, Accountant.",
      points: [
        "Anthropic Claude-powered chat assistant for parents/students to query attendance, grades, fees in natural language",
        "Predictive analytics module flagging at-risk students from attendance/performance trends",
        "11+ table normalized PostgreSQL schema via Prisma ORM, JWT auth, role-based access control"
      ],
      tags: ["React Native", "Node.js", "PostgreSQL", "Prisma", "Claude API", "RBAC"]
    },
    {
      title: "Imagify — AI Text-to-Image Generator",
      date: "Shipped",
      hash: "f4e5d6c",
      description: "React + Node/Express app generating images from text prompts via the ClipDrop API.",
      points: [
        "PostgreSQL schema for user accounts, credit balances, transaction history",
        "JWT-based signup/login protecting generation routes"
      ],
      tags: ["React", "Node.js", "PostgreSQL", "ClipDrop API", "JWT"]
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-32" id="projects">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-12 flex items-center gap-3">
          <GitCommit className="w-8 h-8 text-navy" />
          Project History
        </h2>
        
        <div className="relative border-l-2 border-gray-200 ml-4 sm:ml-8">
          {projects.map((project, index) => (
            <div key={index} className="mb-16 ml-8 relative group">
              <span className="absolute -left-[41px] flex items-center justify-center w-5 h-5 rounded-full bg-navy ring-4 ring-white group-hover:scale-110 transition-transform"></span>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 mb-3">
                <span className="font-mono text-sm font-semibold text-navy bg-navy/10 px-2 py-1 rounded">
                  commit {project.hash}
                </span>
                <span className="text-sm font-mono text-gold font-medium">
                  {project.date}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-ink mb-3">{project.title}</h3>
              <p className="text-slate mb-4 text-lg">{project.description}</p>
              
              <ul className="list-disc list-outside ml-5 text-slate mb-6 space-y-2">
                {project.points.map((point, idx) => (
                  <li key={idx} className="leading-relaxed">{point}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-mono font-medium bg-gray-100 text-slate px-3 py-1 rounded-md hover:bg-gray-200 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
