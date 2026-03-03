
import React from "react";

function AboutMe() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen font-sans text-gray-900 overflow-x-hidden">
      
      {/* Editorial Header */}
      <section className="pt-32 pb-16 px-6 md:px-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#5D87FF] font-black uppercase tracking-[0.3em] text-xs mb-4">Discovery</p>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            ABOUT <span className="text-transparent stroke-text opacity-40">JACKSON</span>
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
          
          {/* Left Column: Bio Story */}
          <div className="md:col-span-7 space-y-12">
            <div className="relative">
              <span className="text-[120px] font-black absolute -top-16 -left-4 text-gray-100 -z-10 select-none">01</span>
              <h2 className="text-3xl font-bold mb-6">The Journey</h2>
              <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-[#5D87FF] pl-6">
                "My name is <span className="text-black font-bold">Tuyikunde Jackson</span>. I am an aspiring freelance developer, passionate about creating clean, modern, and user-friendly web applications."
              </p>
              <p className="text-lg text-gray-500 leading-relaxed mt-6">
                I completed my high school studies at <span className="font-semibold text-black">GS Nyabiheke</span> (MCE Combination). 
                Driven by a strong interest in software development, I transitioned from independent learning to formal training at 
                <span className="font-semibold text-black"> Nyabiheke Alight Coding School</span>, specializing in Full-stack architecture.
              </p>
            </div>

            {/* Certification Grid */}
            <div className="pt-10">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#5D87FF] mb-8">Verified Credentials</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "High School Diploma (MCE)",
                  "Alight Coding School Certificate",
                  "Duolingo International Certificate",
                  "Entrepreneurship Challenge Winner",
                  "Academic English (B1 & B2)",
                  "ReallyEnglish Vocabulary Cert"
                ].map((cert, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-50 hover:border-[#5D87FF] transition">
                    <div className="w-2 h-2 bg-[#5D87FF] rounded-full"></div>
                    <span className="text-sm font-bold text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Skills & Labels */}
          <div className="md:col-span-5 space-y-8">
            
            {/* Coding Skills Card */}
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
               <h3 className="text-xl font-black mb-6 flex justify-between items-center">
                 Skills <span className="text-xs font-medium text-gray-400">02</span>
               </h3>
               <div className="space-y-6">
                 <div>
                   <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Frontend</p>
                   <div className="flex flex-wrap gap-2">
                     {['React', 'Tailwind', 'JS', 'HTML/CSS'].map(s => <span key={s} className="px-4 py-1.5 bg-gray-50 rounded-full text-xs font-black">{s}</span>)}
                   </div>
                 </div>
                 <div>
                   <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Backend</p>
                   <div className="flex flex-wrap gap-2">
                     {['Node.js', 'Express', 'SQL/NoSQL'].map(s => <span key={s} className="px-4 py-1.5 bg-gray-50 rounded-full text-xs font-black">{s}</span>)}
                   </div>
                 </div>
               </div>
            </div>

            {/* Language Box */}
            <div className="bg-gray-900 text-white p-8 rounded-[40px] shadow-xl relative overflow-hidden group">
               <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#5D87FF] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition"></div>
               <h3 className="text-xl font-black mb-6">Languages</h3>
               <ul className="space-y-4 text-sm font-medium">
                 <li className="flex justify-between border-b border-white/10 pb-2">
                   <span className="text-gray-400 tracking-widest uppercase text-[10px]">Academic English</span>
                   <span className="text-[#5D87FF]">B2 Proficiency</span>
                 </li>
                 <li className="flex justify-between border-b border-white/10 pb-2">
                   <span className="text-gray-400 tracking-widest uppercase text-[10px]">Practical English</span>
                   <span className="text-[#5D87FF]">A0 — C1 Adaptive</span>
                 </li>
                 <li className="flex justify-between">
                   <span className="text-gray-400 tracking-widest uppercase text-[10px]">Business Speaking</span>
                   <span className="text-[#5D87FF]">Intermediate</span>
                 </li>
               </ul>
            </div>

            {/* Call to Action Mini-Card */}
            <div className="p-8 border-2 border-dashed border-gray-200 rounded-[40px] text-center">
               <p className="text-sm text-gray-400 font-medium mb-4">Interested in my background?</p>
               <button className="bg-black text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-[#5D87FF] transition shadow-lg">
                 Download Resume
               </button>
            </div>

          </div>
        </div>
      </section>

      {/* Global Style for Outline Text */}
      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text {
          -webkit-text-stroke: 1.5px black;
        }
      `}} />
    </div>
  );
}

export default AboutMe;