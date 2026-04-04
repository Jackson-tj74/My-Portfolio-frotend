/** @format */
import { useState } from "react";
import { FaHome, FaUser, FaCog, FaBars, FaSignOutAlt, FaLeaf} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";


export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { logout, user } = useAuth(); // Assuming user is available in AuthContext

  const menuItems = [
    { name: "Home", icon: FaHome, path: "/dashboard" },
    { name: "SignUp", icon: FaUser, path: "/signup" },
    { name: "Settings", icon: FaCog, path: "/settings" },
  ];

  return (
    <div className="flex min-h-screen font-sans">
     
      <div
        className={`bg-gradient-to-b from-green-950 via-green-900 to-emerald-950 text-white p-5 pt-8 relative duration-500 ease-in-out border-r border-white/10 shadow-2xl ${
          open ? "w-72" : "w-24"
        }`}
      >
        
        <div 
          className={`absolute -right-3 top-9 bg-emerald-500 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer border-2 border-green-950 hover:bg-green-400 transition-all ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
           <FaBars size={12} />
        </div>

       
        <div className="flex items-center gap-x-4 mb-12">
          {open && (
            <div className="overflow-hidden">
              <h1 className="text-xl font-extrabold tracking-tight whitespace-nowrap">MY PORTFOLIO</h1>
              <p className="text-[10px] text-emerald-400 font-medium uppercase tracking-widest">dashboard</p>
            </div>
          )}
        </div>

        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="group flex items-center gap-x-4 cursor-pointer p-3.5 rounded-xl transition-all duration-200 hover:bg-white/10 hover:shadow-inner hover:backdrop-blur-md"
            >
              <item.icon className={`text-xl transition-colors ${open ? "text-emerald-400 group-hover:text-white" : "mx-auto text-emerald-400"}`} />
              {open && (
                <span className="font-medium text-emerald-50 group-hover:text-white">
                  {item.name}
                </span>
              )}
             
              {!open && (
                 <div className="absolute left-20 bg-emerald-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                    {item.name}
                 </div>
              )}
            </div>
          ))}
        </nav>

        <div className="absolute bottom-8 left-0 right-0 px-5">
          {open && user && (
             <div className="mb-4 p-3 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                <p className="text-[10px] text-emerald-400 uppercase font-bold">Active User</p>
                <p className="text-sm font-medium truncate">{user.name || "Tuyikunde J."}</p>
             </div>
          )}
          
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className={`w-full flex items-center gap-x-4 cursor-pointer p-3.5 rounded-xl transition-all duration-300 border border-transparent ${
              open 
                ? "bg-red-500/10 hover:bg-red-600 hover:border-red-400 text-red-400 hover:text-white" 
                : "text-red-400 hover:bg-red-500 hover:text-white"
            }`}
          >
            <FaSignOutAlt className={!open && "mx-auto text-xl"} />
            {open && <span className="font-semibold">Sign Out</span>}
          </button>
        </div>
      </div>

     
      <main className="flex-1 bg-emerald-50/30 p-10 overflow-y-auto">
        <header className="mb-8">
           <h1 className="text-3xl font-black text-green-950">Dashboard Overview</h1>
           <p className="text-green-700/60 font-medium">Welcome back to dasboard portal.</p>
        </header>
        
       
      </main>
    </div>
  );
}