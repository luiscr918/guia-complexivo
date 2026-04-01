import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#6db33f] rounded-full flex items-center justify-center shadow-inner">
            <span className="text-white font-black text-xl italic">D</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 leading-none">
              DevStandard
            </h1>
            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-tighter">
              Reference Guide v6.1.5
            </p>
          </div>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          <Link to={"/"}>
            <span className="cursor-help hover:text-[#6db33f]">Home</span>
          </Link>
          <span className="cursor-help hover:text-[#6db33f]">Community</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
