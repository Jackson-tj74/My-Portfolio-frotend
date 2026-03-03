import React from "react";

 export function AboutMeCard() {
  const skills = [
    "React.js",
    "Tailwind CSS",
    "Frontend Dev",
    "Backend Dev",
    "Node.js (MongoDB)",
    "Problem Solving",
  ];

  return (
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

          {/* Skills */}
          <div>
            <h3 className="font-black text-2xl mb-4 uppercase italic tracking-tight">Skills & Expertise</h3>
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

          {/* Things I Love */}
          <div>
            <h3 className="font-black text-2xl mb-4 uppercase italic tracking-tight">Things I Love</h3>
            <div className="flex gap-6 text-3xl">
              <span title="React">⚛️</span>
              <span title="Web">🌐</span>
              <span title="Design">🎨</span>
              <span title="Coffee">☕</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutMeCard;