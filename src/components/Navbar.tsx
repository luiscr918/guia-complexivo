import React from "react";
import { Link } from "react-router-dom";
import sprintLogo from "../assets/sprintLogo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="relative w-full border-b border-slate-200 bg-white">
      
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link to={"/"} className="flex items-center gap-3">
          
          <img 
            src={sprintLogo} 
            alt="Spring Logo" 
            className="h-12 md:h-14 w-auto object-contain"
          />

         

        </Link>

        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          <Link to={"/"}>
            <span className="hover:text-[#6db33f]">Home</span>
          </Link>
          <span className="hover:text-[#6db33f]">Community</span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
