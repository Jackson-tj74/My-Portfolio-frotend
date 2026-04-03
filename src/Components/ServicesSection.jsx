import React, { useState } from "react";
import { Code2, Monitor, BarChart3, ShieldCheck, ChevronRight,Layers, X } from "lucide-react";

function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Backend Dev",
      shortDesc: "I design and build secure, scalable backend systems using Node.js.",
      longDesc: `I can help you build robust systems (APIs), manage databases like MongoDB or PostgreSQL, and ensure that your users' data remains completely secure and private.`,
      Icon: Code2,
    },
    {
      title: "Frontend Dev",
      shortDesc: "Creating fast and responsive user interfaces using React.js.",
      longDesc: `I specialize in crafting modern interfaces similar to the high-quality designs you've seen. I use React and Tailwind CSS to ensure your site looks great on both mobile and desktop.`,
      Icon: Monitor,
    },
    {
      title: "UI/UX Design",
      shortDesc: "I design clean, modern interfaces that improve user experience and engagement.",
      longDesc: `I create intuitive and visually appealing user interfaces that focus on usability and performance. 
       From wireframes to final designs, I ensure every detail enhances the user journey and aligns with your brand identity.`,
      Icon:`🎨` ,
    },
    {
  title: "Full-Stack Development",
  shortDesc: "I build complete web applications from frontend to backend.",
  longDesc: `I combine frontend and backend technologies to create full web solutions. 
  From UI design to database integration, I deliver complete, scalable, and production-ready applications.`,
  Icon: Layers,
},
  ];

  return (
    <section id="services" className="py-24 bg-[#fcfcfc] px-6 md:px-16 md:py-50 font-sans relative">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20 relative">
          <h2 className="text-5xl md:text-7xl font-black text-gray-100 absolute inset-0 -top-10 select-none uppercase tracking-widest opacity-40">
            SERVICES
          </h2>
          <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-[#5e3bee] uppercase">
            WHAT I PROVIDE
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-[#5e3bee] rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-purple-200">
                <service.Icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-6">{service.shortDesc}</p>

              <button
                onClick={() => setSelectedService(service)}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#5e3bee] hover:underline"
              >
                Know More <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md p-8 rounded-[2rem] shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <div className="w-16 h-16 bg-[#5e3bee] rounded-2xl flex items-center justify-center mb-6">
              <selectedService.Icon className="text-white" size={32} />
            </div>

            <h3 className="text-2xl font-black mb-4">{selectedService.title}</h3>
            <p className="text-gray-600 leading-relaxed italic">
              "{selectedService.longDesc}"
            </p>

            <button
              onClick={() => setSelectedService(null)}
              className="w-full mt-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-[#5e3bee] transition-colors"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ServicesSection;