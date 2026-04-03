
import { Github, Linkedin, Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";

const BentoCard = ({ children, className = "" }) => (
  <div className={`bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-500 ${className}`}>
    {children}
  </div>
);

function ModernBentoFooter() {
 

  return (
    <footer className=" text-gray-900 px-6 md:px-11 py-20">
      <div className="max-w-7xl mx-auto">
        
      
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-10">
          
       
          <BentoCard className="md:col-span-6 flex flex-col justify-between min-h-[250px] bg-gradient-to-br from-white to-green-50/30">
            <div>
              <h2 className="text-4xl font-black tracking-tighter">
                Jackson<span className="text-green-500">.</span>
              </h2>
              <p className="mt-4 text-gray-500 max-w-sm leading-relaxed text-sm">
                Software Developer carving out meaningful digital experiences. 
                Let's turn your vision into a high-performance reality.
              </p>
            </div>
            <div className="flex gap-3">
              <a href="https://github.com/Jackson-tj74" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-full text-xs font-bold hover:bg-green-600 transition-all group">
                GitHub <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="https://linkedin.com/in/tuyikunde-jackson" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-full text-xs font-bold hover:bg-white transition-all group">
                LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </BentoCard>

         
          <BentoCard className="md:col-span-3 flex flex-col justify-center items-center text-center space-y-4">
             <div className="p-4 bg-green-100 text-green-600 rounded-3xl">
                <Mail size={24} />
             </div>
             <h3 className="font-bold text-sm">Say Hello</h3>
             <a href="mailto:tuyikundejackson74@email.com" className="text-xs text-gray-500 break-all hover:text-green-600 font-medium">
               tuyikundejackson74@email.com
             </a>
          </BentoCard>

          
          <BentoCard className="md:col-span-3 flex flex-col justify-center items-center text-center space-y-4 bg-gray-900 text-white">
             <div className="p-4 bg-white/10 text-green-400 rounded-3xl">
                <MapPin size={24} />
             </div>
             <h3 className="font-bold text-sm">Location</h3>
             <p className="text-xs text-gray-400 uppercase tracking-widest">Kigali, Rwanda</p>
          </BentoCard>
             
        
        
        </div>

        
        <footer className="py-12 bg-[#D9D9D9]/20  text-center border- border-gray-100">
        <p className="text-gray-400">© 2026 Tuyikunde Jackson. Built with React & Tailwind.</p>
        </footer>

        
      </div>
      
    </footer>
  );
}

export default ModernBentoFooter;