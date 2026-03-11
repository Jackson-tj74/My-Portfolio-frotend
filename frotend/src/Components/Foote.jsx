
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function ShortFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-100 py-4 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Brand & Copyright */}
        <div className="flex items-center gap-3">
          <span className="text-lg font-black italic tracking-tighter">
            Jackson<span className="text-green-500">.</span>
          </span>
          <span className="text-gray-200 text-sm">|</span>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © {year} All Rights Reserved
          </p>
        </div>

        {/* Center: Status */}
        <div className="hidden md:flex items-center gap-2">
          <div className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">
            Available for new projects
          </span>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-5 text-gray-400">
          <a href="https://github.com/Jackson-tj74" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
            <Github size={16} />
          </a>
          <a href="https://linkedin.com/in/tuyikunde-jackson" target="_blank" rel="noreferrer" className="hover:text-[#0077b5] transition-colors">
            <Linkedin size={16} />
          </a>
          <a href="mailto:tuyikundejackson74@email.com" className="hover:text-green-600 transition-colors">
            <Mail size={16} />
          </a>
        </div>
     
      </div>
      <footer className="py-12 text-center border- border-gray-100">
        <p className="text-gray-400">© 2026 Tuyikunde Jackson. Built with React & Tailwind.</p>
      </footer>
    </footer>
  );
}

export default ShortFooter;