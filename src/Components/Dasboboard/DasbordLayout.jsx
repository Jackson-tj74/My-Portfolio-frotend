import { useState } from "react";
import { FaHome, FaUser, FaCog, FaBars, FaSignOutAlt } from "react-icons/fa";


const NavItem = ({ icon: Icon, label, open }) => (
  <div className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
    <Icon />
    {open && <span>{label}</span>}
  </div>
);

export default function DashboardLayout() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
    
      <aside
        className={`bg-gray-900 text-white p-5 pt-8 duration-300 ${
          open ? "w-64" : "w-20"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          {open && <h1 className="text-xl font-bold">My Dashboard</h1>}
          <FaBars
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        <nav className="space-y-4">
          <NavItem icon={FaHome} label="Home" open={open} />
          <NavItem icon={FaUser} label="Profile" open={open} />
          <NavItem icon={FaCog} label="Settings" open={open} />
        </nav>

     
        <div className="absolute bottom-10">
          <NavItem icon={FaSignOutAlt} label="Logout" open={open} />
        </div>
      </aside>

     
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <span className="font-medium">User</span>
          </div>
        </header>

     
        <main className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl shadow">
              <h3 className="font-semibold text-lg">Card 1</h3>
              <p className="text-gray-500">Some content here</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow">
              <h3 className="font-semibold text-lg">Card 2</h3>
              <p className="text-gray-500">Some content here</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow">
              <h3 className="font-semibold text-lg">Card 3</h3>
              <p className="text-gray-500">Some content here</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
