import React from 'react';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] sticky top-0 z-50">
      <div className="w-full px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 py-2.5 sm:py-3 flex items-center justify-between gap-2">
        
        {/* Brand Logo (Left) */}
        <a href="#" className="flex items-center select-none flex-shrink-0">
          <img 
            src="/assets/logo.png" 
            alt="Eazy Lend - Get loan, Buy insurance" 
            className="h-10 xs:h-12 sm:h-14 md:h-16 lg:h-16 w-auto object-contain"
          />
        </a>

        {/* Right Info: Location & Contact */}
        <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-5 flex-shrink-0">
        

         

          {/* Phone Numbers Capsule Button */}
          <a 
            href="tel:9659590505" 
            className="group flex items-center gap-1.5 sm:gap-2.5 bg-[#033d32] hover:bg-[#022c24] active:scale-95 text-white px-2.5 py-1.5 sm:px-3.5 sm:py-2 md:px-4 md:py-2 rounded-lg sm:rounded-xl shadow-sm transition-all duration-200 hover:shadow cursor-pointer"
            title="Call Eazy Lend"
          >
            <Phone className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-white fill-white transition-transform group-hover:rotate-12 flex-shrink-0" />
            <span className="text-[11px] xs:text-xs sm:text-sm font-bold tracking-wide text-white whitespace-nowrap">
              {/* Show full dual numbers on screen >= 540px */}
              <span className="hidden sm:inline">9659590505 / 9585831478</span>
              {/* Show primary number on compact screens */}
              <span className="sm:hidden">9659590505</span>
            </span>
          </a>

        </div>

      </div>
    </header>
  );
}
