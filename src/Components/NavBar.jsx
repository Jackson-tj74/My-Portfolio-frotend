
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all bg-[#D9D9D9]/20 border-b border-gray-400 duration-300 px-[60px] ${
        scrolled 
          ? "py-4 bg-[#D9D9D9]/20 backdrop-blur-lg border-b border-gray-400 shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
       
        <div className="text-2xl font-black tracking-tighter text-gray-900">
          MY<span className="text-secondary">PORTFOLIO.</span>
        </div>

        
        <div className="hidden md:flex items-center space-x-10 font-semibold text-gray-700">
          <Link to="/" className="hover:text-transition-colors hover:text-indigo-500">Home</Link>
          <Link to="/about" className="hover:text-transition-colors hover:text-indigo-500">About</Link>
          <Link to="/services" className="hover:text-transition-colors hover:text-indigo-500">Services</Link>
          <Link to="/projects" className="hover:text-transition-colors hover:text-indigo-500">Projects</Link>
           <Link to="/contact-us" className="hover:text-transition-colors hover:text-indigo-500">Contactus</Link>
          
        </div>

        
        <button
          className="md:hidden p-2 text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-900 transition-opacity ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>

      
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-50 flex flex-col p-8 space-y-6 md:hidden animate-in slide-in-from-top-5 duration-300">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-800 hover:text-indigo-500">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-800 hover:text-indigo-500">About</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-800 hover:text-indig0-500">Services</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)} className="bg-indigo-300 text-black text-center py-4 rounded-xl  hover:bg-indigo-500">Projects</Link>
         <Link to="/contact-us" onClick={() => setIsOpen(false)} className="bg-indigo-300 text-black text-center py-4 rounded-xl  hover:bg-indigo-500">Contactus</Link>
        
        </div>
      )}
    </nav>
  );
}