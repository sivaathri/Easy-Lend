import React from 'react';
import { 
  Home, 
  Car, 
  GraduationCap, 
  ShieldCheck, 
  Coins, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full relative mt-12 sm:mt-16 overflow-hidden">
      
      {/* ================= 1. LUXURY WAVE & GOLDEN RIBBON HEADER ================= */}
      <div className="w-full leading-none -mb-[1px]">
        <svg 
          className="w-full h-14 xs:h-16 sm:h-20 md:h-24 lg:h-28 block preserve-3d" 
          viewBox="0 0 1440 120" 
          fill="none" 
          preserveAspectRatio="none"
        >
          <defs>
            {/* Rich Metallic Gold Gradient */}
            <linearGradient id="goldRibbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cf9128" />
              <stop offset="18%" stopColor="#f7d478" />
              <stop offset="38%" stopColor="#c3851b" />
              <stop offset="55%" stopColor="#fae7a0" />
              <stop offset="78%" stopColor="#d5982e" />
              <stop offset="100%" stopColor="#aa6d0f" />
            </linearGradient>

            {/* Deep Green Wave Gradient */}
            <linearGradient id="footerGreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#003529" />
              <stop offset="100%" stopColor="#00241b" />
            </linearGradient>

            {/* Soft Shadow Filter for 3D Layered Depth */}
            <filter id="ribbonShadow" x="-5%" y="-20%" width="110%" height="150%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* Top-Right Secondary Decorative Wave Accent */}
          <path
            d="M920,50 C1100,10 1280,20 1440,0 L1440,65 C1320,50 1140,45 920,50 Z"
            fill="#014a3a"
            opacity="0.5"
          />

          {/* Main Footer Emerald Green Wave Background */}
          <path 
            d="M0,38 C140,82 320,10 560,18 C780,26 980,68 1180,42 C1290,28 1370,12 1440,0 L1440,120 L0,120 Z" 
            fill="url(#footerGreenGrad)" 
          />

          {/* Golden Ribbon Glow Underlayer */}
          <path 
            d="M0,38 C140,82 320,10 560,18 C780,26 980,68 1180,42 C1290,28 1370,12 1440,0" 
            stroke="url(#goldRibbonGrad)" 
            strokeWidth="5" 
            strokeLinecap="round"
            filter="url(#ribbonShadow)"
            fill="none" 
          />

          {/* Crisp Metallic Gold Highlight Line */}
          <path 
            d="M0,38 C140,82 320,10 560,18 C780,26 980,68 1180,42 C1290,28 1370,12 1440,0" 
            stroke="#fff1b5" 
            strokeWidth="1.2" 
            strokeOpacity="0.8"
            fill="none" 
          />

          {/* Subtle Secondary Golden Accent Trace */}
          <path 
            d="M0,43 C140,87 320,15 560,23 C780,31 980,73 1180,47 C1290,33 1370,17 1440,5" 
            stroke="url(#goldRibbonGrad)" 
            strokeWidth="1" 
            strokeOpacity="0.45"
            fill="none" 
          />
        </svg>
      </div>

      {/* ================= 2. FOOTER MAIN BODY ================= */}
      <div className="w-full bg-[#00241b] text-white">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-10">
          
          {/* Main 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-6 lg:gap-8 mb-10 sm:mb-12">
            
            {/* COLUMN 1: Logo, Mission & Social Icons (Span 4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                {/* Brand Logo matching exact uploaded asset */}
                <a href="#" className="inline-block select-none mb-3 sm:mb-4 group">
                  <img 
                    src="/logo.png" 
                    alt="EazyLend Loans & Insurance" 
                    className="h-10 xs:h-11 sm:h-12 w-auto object-contain -ml-1 transition-transform duration-200 group-hover:scale-[1.02]"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/footer-logo.png';
                    }}
                  />
                </a>

                {/* Subtitle / Paragraph */}
                <p className="text-xs sm:text-[13px] text-emerald-100/80 leading-relaxed font-normal max-w-sm mb-6">
                  Your trusted financial partner for loans, insurance, and long-term financial security.
                </p>
              </div>

            
            </div>

            {/* COLUMN 2: Our Services (Span 3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-bold text-base sm:text-[17px] tracking-tight">
                Our Services
              </h3>
              {/* Golden underline bar */}
              <div className="w-9 h-[2.5px] bg-[#d49228] mt-2 mb-4 rounded-full" />
              
              <ul className="space-y-3">
                <li>
                  <a href="#loan-solutions" className="group flex items-center gap-2.5 text-xs sm:text-[13px] text-gray-200 hover:text-white transition-colors">
                    <Home className="w-4 h-4 text-[#e5a93b] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span>Home Loan</span>
                  </a>
                </li>
                <li>
                  <a href="#loan-solutions" className="group flex items-center gap-2.5 text-xs sm:text-[13px] text-gray-200 hover:text-white transition-colors">
                    <Car className="w-4 h-4 text-[#e5a93b] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span>Car Loan</span>
                  </a>
                </li>
                <li>
                  <a href="#loan-solutions" className="group flex items-center gap-2.5 text-xs sm:text-[13px] text-gray-200 hover:text-white transition-colors">
                    <GraduationCap className="w-4 h-4 text-[#e5a93b] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span>Education Loan</span>
                  </a>
                </li>
                <li>
                  <a href="#loan-solutions" className="group flex items-center gap-2.5 text-xs sm:text-[13px] text-gray-200 hover:text-white transition-colors">
                    <ShieldCheck className="w-4 h-4 text-[#e5a93b] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span>Insurance Plans</span>
                  </a>
                </li>
                <li>
                  <a href="#loan-solutions" className="group flex items-center gap-2.5 text-xs sm:text-[13px] text-gray-200 hover:text-white transition-colors">
                    <Coins className="w-4 h-4 text-[#e5a93b] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span>Loan Advisory</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* COLUMN 3: Quick Links (Span 2 cols) */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-base sm:text-[17px] tracking-tight">
                Quick Links
              </h3>
              {/* Golden underline bar */}
              <div className="w-9 h-[2.5px] bg-[#d49228] mt-2 mb-4 rounded-full" />

              <ul className="space-y-3">
                <li>
                  <a href="#about-us" className="group flex items-center gap-2 text-xs sm:text-[13px] text-gray-200 hover:text-white transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#e5a93b] flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a href="#loan-solutions" className="group flex items-center gap-2 text-xs sm:text-[13px] text-gray-200 hover:text-white transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#e5a93b] flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span>Our Services</span>
                  </a>
                </li>
                <li>
                  <a href="#why-choose-us" className="group flex items-center gap-2 text-xs sm:text-[13px] text-gray-200 hover:text-white transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#e5a93b] flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span>Why Choose Us</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center gap-2 text-xs sm:text-[13px] text-gray-200 hover:text-white transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#e5a93b] flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span>FAQs</span>
                  </a>
                </li>
                <li>
                  <a href="tel:9659590505" className="group flex items-center gap-2 text-xs sm:text-[13px] text-gray-200 hover:text-white transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#e5a93b] flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span>Contact Us</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* COLUMN 4: Contact Us (Span 3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-bold text-base sm:text-[17px] tracking-tight">
                Contact Us
              </h3>
              {/* Golden underline bar */}
              <div className="w-9 h-[2.5px] bg-[#d49228] mt-2 mb-4 rounded-full" />

              <div className="space-y-3.5">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#e5a93b]/15 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-3.5 h-3.5 text-[#e5a93b] fill-[#e5a93b]" />
                  </div>
                  <a 
                    href="tel:9659590505" 
                    className="text-xs sm:text-[13px] text-gray-200 hover:text-[#e5a93b] transition-colors"
                  >
                    +91 9659590505 / +91 9585831478
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#e5a93b]/15 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-3.5 h-3.5 text-[#e5a93b]" />
                  </div>
                  <a 
                    href="mailto:support@eazylend.in" 
                    className="text-xs sm:text-[13px] text-gray-200 hover:text-[#e5a93b] transition-colors"
                  >
                    support@eazylend.in
                  </a>
                </div>

                {/* Location Pin */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#e5a93b]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#e5a93b] fill-[#e5a93b]" />
                  </div>
                  <p className="text-xs sm:text-[13px] text-gray-200 leading-snug">
                    Pondicherry, Puducherry – 605001, India
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* ================= 3. BOTTOM COPYRIGHT & LEGAL BAR ================= */}
          <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] sm:text-xs text-emerald-100/70">
            <div>
              &copy; {new Date().getFullYear()} Eazy Lend. All Rights Reserved.
            </div>

         
          </div>

        </div>
      </div>

    </footer>
  );
}

