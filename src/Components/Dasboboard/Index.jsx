import React, { useState } from "react";
import DashboardNav from "./DasbordNav";
import Sidebar from "./SideBar";


export function DashboardLayout() {
  const [visible, setVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleVisible = () => setVisible(!visible);

  return (
    <div className="flex flex-col h-screen bg-gray-100 overflow-hidden">
      {/* Top Navigation */}
      <DashboardNav />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Overlay (mobile) */}
        {!isExpanded && (
          <div
            className="fixed inset-0 bg-black/50 z-20 xl:hidden"
            onClick={() => setIsExpanded(true)}
          />
        )}

        {/* Sidebar */}
        <div className="fixed inset-y-0 left-0 z-50 xl:relative">
          <Sidebar
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        </div>

        {/* Main Content */}
        <main
          className={`flex-1 overflow-y-auto transition-all duration-300 ease-in-out ${
            isExpanded ? "xl:ml-64" : "xl:ml-20"
          }`}
        >
          <div className="p-6">
           
           
          </div>
        </main>
      </div>

    
    </div>
  );
}
