import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafbfb] border-b border-gray-100/60">
      
      {/* Desktop / Tablet Background Photo (Full-bleed right edge) */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[55%] lg:w-[58%] xl:w-[60%] pointer-events-none z-0 overflow-hidden">
        <img 
          src="/assets/hero-advisor.jpg" 
          alt="Financial consultation session at Eazy Lend"
          className="w-full h-full object-cover object-right"
        />
        {/* Soft fade-in gradient mask on the left */}
        <div className="absolute inset-y-0 left-0 w-24 lg:w-40 bg-gradient-to-r from-[#fafbfb] via-[#fafbfb]/80 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Wrapper */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="w-full max-w-xl lg:max-w-xl text-left">
          
          {/* Eyebrow Tagline */}
          <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
            <span className="w-4 sm:w-5 h-[2px] bg-[#d97706] inline-block rounded-full"></span>
            <span className="text-[10px] sm:text-xs font-bold text-[#064438] tracking-[0.14em] sm:tracking-[0.16em] uppercase">
              YOUR TRUSTED FINANCIAL PARTNER
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold tracking-tight leading-[1.14] mb-2 sm:mb-3">
            <span className="text-[#05372d] block">The Right Loan.</span>
            <span className="text-[#c98218] block">The Right Protection.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs xs:text-sm sm:text-[15px] md:text-base text-gray-600 font-normal mb-5 sm:mb-6 max-w-md leading-relaxed">
            Personal guidance for loans and insurance, all in one place.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-3.5 w-full xs:w-auto">
            <a
              href="#loan-solutions"
              className="group inline-flex items-center justify-center gap-2 bg-[#064438] hover:bg-[#04332a] active:scale-95 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer text-center"
            >
              <span>Explore Loan Options</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#insurance-solutions"
              className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-[#fffdf8] active:scale-95 text-[#064438] border border-[#e5c388] hover:border-[#c98218] text-xs sm:text-sm font-semibold px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-lg shadow-sm transition-all duration-200 cursor-pointer text-center"
            >
              <span>Get Insurance Guidance</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#064438] transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>

        {/* Mobile-only consultation image block (Clean and perfectly framed under CTAs on small screens) */}
        <div className="md:hidden mt-6 w-full rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <img 
            src="/assets/hero-advisor.jpg" 
            alt="Financial consultation session at Eazy Lend"
            className="w-full h-48 xs:h-56 object-cover object-center"
            loading="eager"
          />
        </div>

      </div>
    </section>
  );
}
