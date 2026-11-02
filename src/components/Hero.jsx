import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafbfb] border-b border-gray-100/60">
      
      {/* Full-bleed Right Photo extending to top, bottom & right edge */}
      <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[62%] lg:w-[58%] pointer-events-none z-0 overflow-hidden">
        <img 
          src="/assets/hero-advisor.jpg" 
          alt="Financial consultation session at Eazy Lend"
          className="w-full h-full object-cover object-right"
        />
        {/* Soft fade-in gradient mask on the left */}
        <div className="absolute inset-y-0 left-0 w-28 lg:w-40 bg-gradient-to-r from-[#fafbfb] via-[#fafbfb]/85 to-transparent pointer-events-none" />
      </div>

      {/* Content Container (Full Width Edge-to-Edge) */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 flex flex-col justify-center min-h-[280px] sm:min-h-[320px]">
        
        {/* Hero Left Content Column */}
        <div className="w-full max-w-lg lg:max-w-xl text-left">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
            <span className="w-5 h-[2px] bg-[#d97706] inline-block rounded-full"></span>
            <span className="text-[11px] sm:text-xs font-bold text-[#064438] tracking-[0.16em] uppercase">
              YOUR TRUSTED FINANCIAL PARTNER
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.12] mb-2.5 sm:mb-3">
            <span className="text-[#05372d] block">The Right Loan.</span>
            <span className="text-[#c98218] block">The Right Protection.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-[15px] text-gray-600 font-normal mb-5 sm:mb-6 max-w-md leading-relaxed">
            Personal guidance for loans and insurance, all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#loan-solutions"
              className="group inline-flex items-center justify-center gap-2 bg-[#064438] hover:bg-[#04332a] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
            >
              <span>Explore Loan Options</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#insurance-solutions"
              className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-[#fffdf8] text-[#064438] border border-[#e5c388] hover:border-[#c98218] text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200 cursor-pointer"
            >
              <span>Get Insurance Guidance</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#064438] transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
