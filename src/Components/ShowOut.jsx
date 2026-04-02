import React from "react";
import { Outlet, Link } from "react-router-dom";
import ModernBentoFooter from "./Footer";
import { NavBar } from "./NavBar";

export const ShowOut = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div>
        <NavBar />
      

      <main className="p-8">
        <Outlet />
      </main>

     <ModernBentoFooter />
    </div>
  );
};