import React from "react";
import { BookOpen, Code2, ExternalLink } from 'lucide-react';
 export function AboutMeCard() {
  const skills = [
    "React.js",
    "Tailwind CSS",
    "Frontend Dev",
    "Backend Dev",
    "Figma Design",
    "JavaScript",
    "node.js/node.js(mongoDb)",
    "GitHub",
    "Netlify",
    "Vercel",
    "TypeScript",
    "Vs Code",

  ];

  return (
     <>
    <section className="relative py-24 bg-white text-gray-800 px-6 md:px-16  font-sans overflow-hidden">
      
    
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
          ABOUT <span className="text-green-500">ME</span>
        </h2>
        <p className="mt-3 text-gray-500 text-sm tracking-widest uppercase font-bold">
          Who I am & what I do
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
    
        <div className="flex justify-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
            <img
              src="pic2.jpg"
              alt="Tuyikunde Jackson"
              className="  transition duration-700"
            />
          </div>
        </div>

     
        <div className="space-y-8">
          <div className="text-gray-700 space-y-6 text-lg">
            <p>
              Hi! I'm <span className="font-bold text-black">Tuyikunde Jackson</span>, a 
              <span className="text-green-500 font-bold italic"> web developer</span> passionate about building clean, modern, and user-friendly websites.
            </p>
            <p>
              I specialize in frontend development, turning creative designs into pixel-perfect, responsive applications using 
              <span className="font-bold text-black ml-1">React, Tailwind CSS, and Node.js</span>. I love solving real-world problems with elegant code.
            </p>
          </div>

         
          <div>
            <h3 className="font-black text-2xl mb-4 uppercase italic tracking-tight">Some Of Skills & Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-green-500 text-white px-3 py-1 rounded-xl font-bold text-sm uppercase tracking-wide"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

       
          
        </div>

      </div>
    </section>
<section className=" py-24 px-6 font-sans">
  <div className="max-w-4xl mx-auto">
  

   
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      
      <div className="bg-white p-8 rounded-2xl shadow-lg border hover:bg-blue-50 transition">
        <div className="flex items-center gap-3 mb-4">
          
          <h4 className="text-xl font-bold text-slate-800">Some Of My Certificates </h4>
        </div>

        <ul className="space-y-3 text-slate-600">
          <li>High School Diploma (MCE)</li>
          <li>Full-stack Development - Alight Coding School</li>
          <li>Duolingo International Certificate</li>
            <li>Certified English Communications (IELTS Academic)</li>
          <li>Entrepreneurship Challenge Innovator</li>
        </ul>
      </div>

     
      <div className="bg-white p-8 rounded-2xl shadow-lg border hover:bg-blue-50 transition">
        <div className="flex items-center gap-3 mb-4">
         
          <h4 className="text-xl font-bold text-slate-800">Languages</h4>
        </div>

        <ul className="space-y-3 text-slate-600">
          <li>Kinyarwanda (Native)</li>
          <li>English </li>
        </ul>
      </div>

    </div>

  </div>
</section>
    </>
  );
}

export default AboutMeCard;