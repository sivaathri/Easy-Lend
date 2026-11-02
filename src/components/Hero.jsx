import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 pt-2 sm:pt-3 pb-6 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-4">
        
        {/* Left Content Column */}
        <div className="lg:col-span-5 z-10 flex flex-col items-start text-left pt-2 lg:pt-0">
          
          {/* Eyebrow Tagline */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-[2px] bg-[#d97706] inline-block rounded-full"></span>
            <span className="text-[11px] sm:text-xs font-bold text-[#064438] tracking-[0.16em] uppercase">
              YOUR TRUSTED FINANCIAL PARTNER
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.12] mb-3">
            <span className="text-[#05372d] block">The Right Loan.</span>
            <span className="text-[#c98218] block">The Right Protection.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-500 font-normal mb-6 max-w-md leading-relaxed">
            Personal guidance for loans and insurance, all in one place.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
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

        {/* Right Photo Column */}
        <div className="lg:col-span-7 relative flex justify-end items-center mt-4 lg:mt-0">
          <div className="relative w-full rounded-2xl overflow-hidden flex justify-end">
            {/* Soft fade-in mask on the left for seamless blend */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fafbfb] via-[#fafbfb]/80 to-transparent z-10 pointer-events-none" />
            
            <img 
              src="/assets/hero-clean.png" 
              alt="Financial consultation session at Eazy Lend"
              className="w-full max-h-[300px] sm:max-h-[340px] lg:max-h-[330px] object-cover object-right sm:object-center rounded-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
