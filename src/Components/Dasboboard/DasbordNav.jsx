/** @format */
import React from "react";
import { Sun, Bell, Settings, Leaf, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const DashboardNav = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    return (
        <nav className="fixed top-0 right-0 z-40 w-full h-20 px-6 lg:px-12 flex justify-between items-center bg-white/70 backdrop-blur-xl border-b border-green-100 shadow-sm font-sans">


            <div className="hidden md:block">
                <h2 className="text-green-950 font-bold text-lg">
                    Hello, <span className="text-emerald-600">{user?.name?.split(' ')[0] || "Jackson"}</span> 👋
                </h2>
                <p className="text-[11px] text-green-700/60 font-semibold uppercase tracking-wider">
                    Marketplace Overview
                </p>
            </div>


            <div className="flex items-center gap-3 lg:gap-6">


                <div className="hidden sm:flex items-center bg-green-50 border border-green-100 px-4 py-1.5 rounded-2xl gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[12px] font-bold text-green-800">System Live</span>
                </div>

                {/* Theme Toggle */}
                <button className="p-2.5 bg-white text-green-800 rounded-xl border border-green-100 hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300">
                    <Sun size={20} strokeWidth={2.5} />
                </button>




                <div className="h-8 w-[1px] bg-green-100 mx-1" />


                <div
                    onClick={() => navigate("/settings")}
                    className="flex items-center gap-3 p-1.5 pr-4 rounded-2xl bg-white border border-green-100 hover:border-emerald-400 hover:shadow-md cursor-pointer transition-all group"
                >
                    <div className="h-10 w-10 lg:h-11 lg:w-11 rounded-xl overflow-hidden border-2 border-emerald-100 group-hover:border-emerald-400 transition-colors">
                        <div className="h-10 w-10 lg:h-11 lg:w-11 rounded-xl overflow-hidden border-2 border-emerald-100 flex items-center justify-center bg-emerald-50">
                            {user?.avatar ? (
                                <img
                                    src={user.avatar}
                                    alt="User profile"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <User size={24} className="text-emerald-600" />
                            )}
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <p className="text-xs font-black text-green-950 leading-tight">
                            {user?.name || "Tuyikunde Jackson"}
                        </p>
                        <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-tighter">
                            Developer
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default DashboardNav;