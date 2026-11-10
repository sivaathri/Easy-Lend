import React from 'react';
import { Target, Eye, Users } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about-us" className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
      <div className="w-full">
        
        {/* ================= EXACT "ABOUT US" HORIZONTAL BANNER ================= */}
        <div className="w-full bg-white border border-[#edebe7] rounded-2xl md:rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden relative">
          
          {/* Decorative Mint-Green Flowing Waves (Right Corner) */}
          <div className="absolute bottom-0 right-0 w-36 sm:w-48 md:w-60 h-full pointer-events-none overflow-hidden select-none">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 240 130" 
              preserveAspectRatio="none" 
              fill="none"
            >
              {/* Outer soft mint wave */}
              <path 
                d="M100,130 C130,85 160,35 240,15 L240,130 Z" 
                fill="#e4f3ea" 
                opacity="0.8" 
              />
              {/* Middle mint accent wave */}
              <path 
                d="M140,130 C165,90 190,45 240,40 L240,130 Z" 
                fill="#d2ebd9" 
                opacity="0.7" 
              />
              {/* Inner darker mint swoop */}
              <path 
                d="M180,130 C200,105 215,75 240,70 L240,130 Z" 
                fill="#b8e0c3" 
                opacity="0.5" 
              />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-between">
            
            {/* ================= 1. LEFT: Plant & Coins Visual ================= */}
            <div className="lg:w-[28%] xl:w-[27%] flex-shrink-0 relative overflow-hidden flex items-center justify-center bg-gradient-to-r from-[#f7fbf8] to-white lg:bg-none">
              <img 
                src="/assets/about-plant-coins-hd.jpg" 
                alt="Eazy Lend Financial Growth - Investment and Savings" 
                className="w-full h-48 xs:h-52 sm:h-56 lg:h-full object-cover lg:object-left object-center [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)] lg:[mask-image:linear-gradient(to_right,black_86%,transparent_100%)] select-none pointer-events-none"
                loading="lazy"
              />
            </div>

            {/* ================= 2. CENTER: "Who We Are" ================= */}
            <div className="flex-1 px-5 sm:px-7 md:px-8 py-5 sm:py-6 lg:py-7 flex flex-col justify-center">
              
              {/* Eyebrow: ABOUT US ── */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs sm:text-[13px] font-bold text-[#c98218] tracking-wider uppercase">
                  ABOUT US    
                </span>
                <span className="inline-block w-8 sm:w-10 h-[2px] bg-[#c98218] rounded-full" />
              </div>

              {/* Title: Who We Are */}
              <h2 className="font-serif text-2xl xs:text-3xl sm:text-[32px] lg:text-[34px] font-bold text-[#004737] tracking-tight leading-tight mb-2 sm:mb-2.5">
                Who We Are
              </h2>

              {/* Subtext */}
              <p className="text-xs sm:text-[13px] md:text-sm text-gray-700 leading-relaxed font-normal max-w-xl">
                <strong className="text-[#004737] font-bold">Eazy Lend</strong> is a customer-first financial services platform, 
                helping individuals and businesses access the right loan and insurance solutions with ease, transparency, and expert support.
              </p>
            </div>

            {/* ================= 3. VERTICAL DIVIDER LINE (Desktop) ================= */}
            <div className="hidden lg:block w-[1.5px] h-28 bg-[#ebd4aa]/80 self-center mx-1 xl:mx-3 flex-shrink-0" />

            {/* ================= 4. RIGHT: Our Mission, Our Vision, Our Values ================= */}
            <div className="lg:w-[38%] xl:w-[37%] px-5 sm:px-7 md:px-8 py-5 sm:py-6 lg:py-7 flex flex-col justify-center space-y-3 sm:space-y-3.5 relative z-10 border-t lg:border-t-0 border-gray-100/90">
              
              {/* Item 1: Our Mission */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#e8f5ec] border border-[#d6ecdf] flex items-center justify-center flex-shrink-0 text-[#004737] mt-0.5">
                  <Target className="w-4 h-4 text-[#004737]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-[#004737] leading-tight mb-0.5">
                    Our Mission
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-600 leading-snug">
                    To make loans and insurance simple, accessible, and transparent for everyone.
                  </p>
                </div>
              </div>

              {/* Item 2: Our Vision */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#e8f5ec] border border-[#d6ecdf] flex items-center justify-center flex-shrink-0 text-[#004737] mt-0.5">
                  <Eye className="w-4 h-4 text-[#004737]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-[#004737] leading-tight mb-0.5">
                    Our Vision
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-600 leading-snug">
                    To be a trusted financial partner for every individual and business across India.
                  </p>
                </div>
              </div>

              {/* Item 3: Our Values */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#e8f5ec] border border-[#d6ecdf] flex items-center justify-center flex-shrink-0 text-[#004737] mt-0.5">
                  <Users className="w-4 h-4 text-[#004737]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-[#004737] leading-tight mb-0.5">
                    Our Values
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-600 leading-snug flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
                    <span>Trust</span>
                    <span className="text-gray-300">|</span>
                    <span>Transparency</span>
                    <span className="text-gray-300">|</span>
                    <span>Customer Focus</span>
                    <span className="text-gray-300">|</span>
                    <span>Long-term Support</span>
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
