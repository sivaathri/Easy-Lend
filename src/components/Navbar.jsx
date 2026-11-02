import React from 'react';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      <div className="w-full px-4 sm:px-8 lg:px-12 py-2.5 sm:py-3 flex items-center justify-between">
        
        {/* Brand Logo (Left) */}
        <a href="#" className="flex items-center select-none flex-shrink-0">
          <img 
            src="/assets/logo.png" 
            alt="Eazy Lend - Get loan, Buy insurance" 
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </a>

        {/* Right Info: Location & Contact */}
        <div className="flex items-center gap-2.5 sm:gap-4 md:gap-5 flex-shrink-0">
          
        

          {/* Thin Vertical Divider */}
          <div />

          {/* Phone Numbers Capsule Button */}
          <a 
            href="tel:9659590505" 
            className="group flex items-center gap-2 sm:gap-2.5 bg-[#033d32] hover:bg-[#022c24] text-white px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow-sm transition-all duration-200 hover:shadow cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-white transition-transform group-hover:rotate-12 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-bold tracking-wide text-white whitespace-nowrap">
              9659590505 / 9585831478
            </span>
          </a>

        </div>

      </div>
    </header>
  );
}
