import React from 'react';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] sticky top-0 z-50">
      <div className="w-full px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 flex items-center justify-between gap-3">
        
        {/* Brand Logo (Left) */}
        <a href="#" className="flex items-center select-none flex-shrink-0">
          <img 
            src="/assets/logo.png" 
            alt="Eazy Lend - Get loan, Buy insurance" 
            className="h-10 xs:h-11 sm:h-13 md:h-14 lg:h-15 w-auto object-contain"
          />
        </a>

        {/* Right Info: Exact Uploaded Style (Call Us Block + WhatsApp Button) */}
        <div className="flex items-center gap-3 sm:gap-5 md:gap-7 flex-shrink-0">
          
          {/* 1. "Call us" Block with Dark Green Circle + Dual Phone Numbers */}
          <a
            href="tel:9659590505"
            className="flex items-center gap-2 sm:gap-2.5 md:gap-3 group cursor-pointer select-none transition-transform active:scale-95"
            title="Call Eazy Lend"
          >
            {/* Dark Green Phone Circle Icon */}
            <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full bg-[#023933] group-hover:bg-[#034d45] flex items-center justify-center flex-shrink-0 shadow-xs transition-colors duration-200">
              <Phone className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 text-white fill-white -rotate-12 transition-transform duration-200 group-hover:scale-110" />
            </div>

            {/* Text Details (Call us + Numbers) */}
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[11px] sm:text-xs text-gray-500 font-medium tracking-tight">
                Call us
              </span>
              <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#023933] tracking-tight whitespace-nowrap">
                <span className="hidden sm:inline">9659590505 / 9585831478</span>
                <span className="sm:hidden">9659590505</span>
              </span>
            </div>
          </a>

          {/* 2. "Chat on WhatsApp" Button */}
          <a
            href="https://wa.me/919659590505?text=Hi%20Eazy%20Lend%2C%20I%20am%20interested%20in%20your%20Loan%20and%20Insurance%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 sm:gap-2 bg-[#16a75d] hover:bg-[#129452] active:scale-95 text-white px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm md:text-[14.5px] shadow-[0_2px_6px_rgba(22,167,93,0.25)] hover:shadow-md transition-all duration-200 cursor-pointer whitespace-nowrap flex-shrink-0"
            title="Chat with Eazy Lend on WhatsApp"
          >
            {/* Official WhatsApp Vector Icon */}
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current shrink-0" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Chat on WhatsApp</span>
          </a>

        </div>

      </div>
    </header>
  );
}