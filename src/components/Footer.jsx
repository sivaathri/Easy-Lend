import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#00382b] text-white border-t border-[#00241b] mt-10 sm:mt-14 overflow-hidden relative selection:bg-white/20">
      
      {/* ================= EXACT HORIZONTAL FOOTER BAR (Exact Match to User Asset) ================= */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-3.5 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-3 xl:gap-4">
        
        {/* 1. BRAND LOGO (Left) */}
        <a 
          href="#" 
          className="flex-shrink-0 select-none flex items-center group py-0.5"
          title="Eazy Lend - Get loan, Buy insurance"
        >
          <img 
            src="/assets/footer-logo-transparent.png" 
            alt="Eazy Lend - Get loan, Buy insurance" 
            className="h-8 xs:h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </a>

        {/* Divider 1 */}
        <div className="hidden lg:block w-[1px] h-7 bg-white/25 flex-shrink-0" />

        {/* 2. CALL US */}
        <a 
          href="tel:9659590505" 
          className="flex items-center gap-2.5 sm:gap-3 group select-none hover:opacity-90 transition-opacity flex-shrink-0"
          title="Call Eazy Lend"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
            <Phone className="w-3.5 h-3.5 text-white fill-white -rotate-12" />
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10.5px] sm:text-[11px] text-white/80 font-normal">
              Call us
            </span>
            <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight whitespace-nowrap">
              9659590505 / 9585831478
            </span>
          </div>
        </a>

        {/* Divider 2 */}
        <div className="hidden lg:block w-[1px] h-7 bg-white/25 flex-shrink-0" />

        {/* 3. EMAIL ID */}
        <a 
          href="mailto:eazylend.fs@gmail.com" 
          className="flex items-center gap-2.5 sm:gap-3 group select-none hover:opacity-90 transition-opacity flex-shrink-0"
          title="Email Eazy Lend"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
            <Mail className="w-3.5 h-3.5 text-white" />
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10.5px] sm:text-[11px] text-white/80 font-normal">
              Email id
            </span>
            <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight whitespace-nowrap">
              eazylend.fs@gmail.com
            </span>
          </div>
        </a>

        {/* Divider 3 */}
        <div className="hidden lg:block w-[1px] h-7 bg-white/25 flex-shrink-0" />

        {/* 4. OUR OFFICE */}
        <div className="flex items-start gap-2.5 sm:gap-3 select-none flex-shrink-0 max-w-sm">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white flex items-center justify-center flex-shrink-0 mt-0.5">
            <MapPin className="w-3.5 h-3.5 text-white fill-white" />
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10.5px] sm:text-[11px] text-white/80 font-normal">
              Our Office
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-white/95 leading-snug">
              No. 59, 1st Floor, Iyyanar Kovil Street,<br />
              Delarshpet, Puducherry – 605009
            </span>
          </div>
        </div>

        {/* Divider 4 */}
        <div className="hidden lg:block w-[1px] h-7 bg-white/25 flex-shrink-0" />

        {/* 5. MAP PREVIEW & "FIND US ON MAP" BUTTON (Right) */}
        <div className="relative rounded-full overflow-hidden flex items-center gap-2.5 flex-shrink-0 pr-2 pl-3 py-1.5 border border-white/20 shadow-xs">
          
          {/* Real Street Map Graphic Background */}
          <img 
            src="/assets/footer-map-bg.svg" 
            alt="Puducherry Map" 
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          />

          {/* Amber Map Pin */}
          <div className="relative z-10 flex-shrink-0 select-none">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-sm" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#f59e0b" />
              <circle cx="12" cy="9" r="2.2" fill="#ffffff" />
            </svg>
          </div>

          {/* Deep Dark Forest Green Pill Button */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=No.+59,+1st+Floor,+Iyyanar+Kovil+Street,+Delarshpet,+Puducherry+605009"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-1.5 sm:gap-2 bg-[#002b21] hover:bg-[#001f18] text-white text-xs sm:text-[12.5px] font-semibold px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 shadow-xs transition-all duration-200 group active:scale-95 whitespace-nowrap select-none cursor-pointer"
            title="Open location in Google Maps"
          >
            <span>Find us on Map</span>
            <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Far-Right Vertical Accent Line */}
        <div className="hidden xl:block w-[1px] h-7 bg-white/25 flex-shrink-0" />

      </div>

      {/* Discrete Copyright Bottom Bar */}
      <div className="w-full border-t border-white/10 py-1.5 text-center text-[10.5px] sm:text-[11px] text-white/50 select-none">
        &copy; {new Date().getFullYear()} Eazy Lend. All Rights Reserved.
      </div>

    </footer>
  );
}
