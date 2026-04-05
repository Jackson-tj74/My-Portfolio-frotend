/** @format */
import { useState } from "react";
import { FaHome, FaUser, FaCog, FaBars, FaSignOutAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { useProfile } from "../../Hooks/useProfileHooks";
import { APIsRequestService } from "../../Services/APIsRequestService";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();

  const menuItems = [
    { name: "Home", icon: FaHome, path: "/dashboard" },
    { name: "SignUp", icon: FaUser, path: "/signup" },
    { name: "Settings", icon: FaCog, path: "/settings" },
  ];
  const {data,loading}=useProfile();

  const userData={
    name:data?.data?.name || "user"
  }


  const email = data?.data?.email

  const handleLogout = async () => {
    try {
      const response = await APIsRequestService.LogOutAPI();
      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message);
        return;
      }

      toast.success(data.message);


      setTimeout(() => {
        localStorage.removeItem("token");
        navigate(isProviderPath ? "/provider-login" : "/login");
      }, 1500);

    } catch (error) {
      console.error("Failed Error:", error);
      toast.error("Logout failed");
    }
  };

  return (
    <div className="flex min-h-screen font-sans">
      
 
      <div
        className={`bg-[#34C759] text-white p-5 pt-8 relative duration-300 shadow-xl ${
          open ? "w-72" : "w-20"
        }`}
      >
        
       
        <div
          className={`absolute -right-3 top-9 bg-white text-[#34C759] w-7 h-7 rounded-full flex items-center justify-center cursor-pointer shadow-md transition ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        >
          <FaBars size={12} />
        </div>

     
        <div className="flex items-center gap-x-3 mb-12">
          {open && (
            <div>
              <h1 className="text-xl font-bold tracking-wide">
                MY PORTFOLIO
              </h1>
              <p className="text-xs opacity-80 uppercase tracking-widest">
                dashboard
              </p>
            </div>
          )}
        </div> 

    
        <nav className="space-y-3">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <div
                key={index}
                onClick={() => navigate(item.path)}
                className={`group flex items-center gap-x-4 cursor-pointer p-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-white text-[#34C759] shadow-md"
                    : "hover:bg-white/20"
                }`}
              >
                <item.icon
                  className={`text-lg ${
                    isActive ? "text-[#34C759]" : "text-white"
                  }`}
                />

                {open && (
                  <span className="font-medium">{item.name}</span>
                )}

          
                {!open && (
                  <div className="absolute left-20 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition z-50">
                    {item.name}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="absolute bottom-6 left-0 right-0 px-5">
          
       
          {open && user && (
            <div className="mb-4 p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <p className="text-xs opacity-80">Active User</p>
              <p className="text-sm font-semibold truncate">
                {userData.name || "User"}
              </p>
            </div>
          )}

          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className={`w-full flex items-center gap-x-4 p-3 rounded-xl transition ${
              open
                ? "bg-white text-red-500 hover:bg-red-500 hover:text-white"
                : "text-white hover:bg-red-500"
            }`}
          >
            <FaSignOutAlt className={!open && "mx-auto"} />
            {open && <span className="font-semibold" onClick={handleLogout}>Logout</span>}
          </button>
        </div>
      </div>
    </div>
  );
}







