import React from 'react';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full pt-4 pb-2 px-4 sm:px-8 lg:px-12 max-w-[1360px] mx-auto flex items-center justify-between">
      {/* Brand Logo */}
      <a href="#" className="flex items-center gap-3 select-none">
        <img 
          src="/assets/logo.png" 
          alt="Eazy Lend - Get loan, Buy insurance" 
          className="h-10 sm:h-12 w-auto object-contain"
        />
      </a>

      {/* Call Now Pill Button */}
      <a 
        href="tel:9659590505" 
        className="group flex items-center gap-2.5 bg-[#033d32] hover:bg-[#022c24] text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer"
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <Phone className="w-4 h-4 text-white fill-white transition-transform group-hover:rotate-12" />
        </div>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] sm:text-[11px] font-medium text-emerald-100/90 tracking-wide">
            Call Now
          </span>
          <span className="text-xs sm:text-sm font-bold tracking-wider text-white">
            9659590505
          </span>
        </div>
      </a>
    </header>
  );
}
