import React from 'react';
import { BookOpen, Code2, Award, Languages, ExternalLink } from 'lucide-react';

function AboutMeCard() {
  return (
    <section className="bg-slate-50 py-24 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-slate-900 tracking-tight mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Bio Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          <div className="md:flex">
            {/* Left Column: Bio */}
            <div className="p-8 md:p-12 md:w-2/3 border-b md:border-b-0 md:border-r border-slate-100">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Developer Journey
                </span>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                Hello! I'm Tuyikunde Jackson.
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I am an aspiring <span className="text-slate-900 font-semibold underline decoration-blue-500 decoration-2">web developer</span>, 
                passionate about creating clean, modern, and user-friendly web applications. 
                My path started at <span className="font-medium text-slate-800">High School</span>, where my fascination 
                with problem-solving sparked a deep dive into the digital world.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                I formalized my training at <span className="font-medium text-slate-800">Nyabiheke Alight Coding School</span>, 
                mastering both ends of the stack to build solutions that matter.
              </p>
            </div>

            {/* Right Column: Key Stats/Quick Info */}
            <div className="bg-slate-900 p-8 md:p-12 md:w-1/3 text-white flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h4 className="text-blue-400 font-bold flex items-center gap-2 mb-2">
                    <Code2 size={20} /> Tech Stack
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    React, Tailwind CSS, Node.js, Express, SQL/NoSQL
                  </p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-bold flex items-center gap-2 mb-2">
                    <Languages size={20} /> Communication
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Academic English (B1/B2), Business Speaking
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid: Certificates & Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-slate-100">
            {/* Education Section */}
            <div className="p-8 hover:bg-blue-50 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg text-white">
                  <Award size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-800">Certifications</h4>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <div className="min-w-[6px] h-[6px] bg-blue-600 rounded-full mt-2.5"></div>
                  <span>High School Diploma (MCE) </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-[6px] h-[6px] bg-blue-600 rounded-full mt-2.5"></div>
                  <span>Full-stack Development - Alight Coding School</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-[6px] h-[6px] bg-blue-600 rounded-full mt-2.5"></div>
                  <span>Duolingo International Certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-[6px] h-[6px] bg-blue-600 rounded-full mt-2.5"></div>
                  <span>Entrepreneurship Challenge Innovator</span>
                </li>
              </ul>
            </div>

            {/* Specialties Section */}
            <div className="p-8 bg-slate-50 md:bg-white hover:bg-blue-50 transition-colors duration-300 border-l border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-800 rounded-lg text-white">
                  <BookOpen size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-800">Specialized Skills</h4>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <div className="min-w-[6px] h-[6px] bg-slate-800 rounded-full mt-2.5"></div>
                  <span>Academic English (Vocabulary Certified)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-[6px] h-[6px] bg-slate-800 rounded-full mt-2.5"></div>
                  <span>Adaptive Communication (A0 to C1)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-[6px] h-[6px] bg-slate-800 rounded-full mt-2.5"></div>
                  <span>Full-stack System Architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Verification Tag */}
        <p className="text-center mt-8 text-slate-400 text-sm italic">
          * All listed academic and professional certificates are verified and authentic.
        </p>
      </div>
    </section>
  );
}

export default AboutMeCard;