import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafbfb] border-b border-gray-100/60">
      
      {/* 1. Exact Wavy Cream / Sand Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img 
          src="/assets/hero-text-bg.jpg" 
          alt="Abstract wavy cream background"
          className="w-full h-full object-cover object-left md:object-left-top"
        />
      </div>

      {/* 2. Desktop / Tablet Consultation Photo (Full-bleed right edge with transparent fade mask) */}
      <div 
        className="hidden md:block absolute right-0 top-0 bottom-0 w-[55%] lg:w-[58%] xl:w-[60%] pointer-events-none z-0 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 22%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 22%, black 100%)'
        }}
      >
        <img 
          src="/assets/Modern Financial Consultation Meeting.png" 
          alt="Financial consultation session at Eazy Lend"
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* 3. Hero Content Wrapper (Exact Design Match) */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 py-5 sm:py-6 md:py-8 lg:py-10 flex flex-col justify-center">
        <div className="w-full max-w-2xl text-left">
          
          {/* Eyebrow Tagline Badge with Gold Shield Check */}
          <div className="inline-flex items-center gap-2 bg-[#fae5c3] border border-[#f3d299] px-3 sm:px-3.5 py-1.5 rounded-full mb-3 sm:mb-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            <div className="w-5 h-5 rounded-full bg-[#f4d193] flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-[#004737]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-[#004737] tracking-wider uppercase">
              YOUR TRUSTED FINANCIAL PARTNER
            </span>
          </div>

          {/* Main Headline (Serif Editorial: The Right Loan. The Right Protection.) */}
          <h1 className="font-serif tracking-tight leading-[1.12] mb-3 sm:mb-4">
            <span className="text-[#004737] font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] block">
              The Right Loan.
            </span>
            <span className="relative inline-block mt-0.5">
              <span className="text-[#b87a14] italic font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px]">
                The Right Protection.
              </span>
              {/* Golden tapered swoosh curve right below Protection */}
              <svg 
                className="absolute -bottom-2 right-0 w-36 xs:w-44 sm:w-56 lg:w-64 text-[#c48318] h-2 sm:h-2.5 pointer-events-none" 
                viewBox="0 0 200 10" 
                fill="currentColor"
              >
                <path d="M0,8 C50,2 150,0 200,5 C140,4 60,7 0,8 Z" />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-700 font-normal mb-6 sm:mb-7 max-w-md leading-relaxed">
            Personal guidance for loans and insurance,<br className="hidden xs:inline" /> all in one place.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 w-full xs:w-auto">
            
            {/* Button 1: Solid Dark Green with Hand holding Rupee icon */}
            <a
              href="#loan-solutions"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#004d3d] hover:bg-[#00382c] active:scale-95 text-white text-xs sm:text-sm font-semibold px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer text-center"
            >
              {/* Hand with Rupee Coin SVG */}
              <svg 
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white flex-shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.9" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {/* Coin with ₹ symbol */}
                <circle cx="16" cy="6.5" r="4" />
                <path d="M14.5 5h3" />
                <path d="M14.5 6.5h3" />
                <path d="M14.5 5v3a1.5 1.5 0 0 0 3 0" />
                {/* Cupped Hand */}
                <path d="M3 18h4l4-3 5 1a2 2 0 0 1 1 1.7v1.3a2 2 0 0 1-2 2H8l-5-3z" />
              </svg>
              <span>Explore Loan Options</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Button 2: White with dark green border & Gold Shield icon */}
            <a
              href="#insurance-solutions"
              className="group inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#fffdf8] active:scale-95 text-[#004d3d] border border-[#004d3d] text-xs sm:text-sm font-semibold px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer text-center"
            >
              {/* Gold Shield with Checkmark */}
              <svg 
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#b87a14] flex-shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>Get Insurance Guidance</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#004d3d] transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Four Trust Badges Underneath CTAs (Exact Layout) */}
          <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-200/70 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 sm:gap-2 max-w-xl">
            
            {/* 1. Quick & Simple Process */}
            <div className="flex items-center gap-2.5 flex-1 min-w-[120px]">
              <svg 
                className="w-5 h-5 text-[#b87a14] flex-shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              <div className="text-left leading-tight">
                <div className="text-xs font-semibold text-gray-800">Quick & Simple</div>
                <div className="text-xs font-semibold text-gray-800">Process</div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-7 w-[1px] bg-gray-200/90" />

            {/* 2. Personalized Guidance */}
            <div className="flex items-center gap-2.5 flex-1 min-w-[120px]">
              <svg 
                className="w-5 h-5 text-[#b87a14] flex-shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M11 17l-5-5a2.83 2.83 0 0 1 0-4l1-1a2.83 2.83 0 0 1 4 0l1 1 3-3a2.83 2.83 0 0 1 4 0l1 1a2.83 2.83 0 0 1 0 4l-5 5" />
                <path d="M14 14l-3 3" />
                <path d="M7 11l-3 3" />
                <path d="M17 7l3 3" />
              </svg>
              <div className="text-left leading-tight">
                <div className="text-xs font-semibold text-gray-800">Personalized</div>
                <div className="text-xs font-semibold text-gray-800">Guidance</div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-7 w-[1px] bg-gray-200/90" />

            {/* 3. Trusted & Secure */}
            <div className="flex items-center gap-2.5 flex-1 min-w-[120px]">
              <svg 
                className="w-5 h-5 text-[#b87a14] flex-shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <div className="text-left leading-tight">
                <div className="text-xs font-semibold text-gray-800">Trusted</div>
                <div className="text-xs font-semibold text-gray-800">& Secure</div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-7 w-[1px] bg-gray-200/90" />

            {/* 4. End-to-End Support */}
            <div className="flex items-center gap-2.5 flex-1 min-w-[120px]">
              <svg 
                className="w-5 h-5 text-[#b87a14] flex-shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                <path d="M19 19v1a2 2 0 0 1-2 2h-1"></path>
              </svg>
              <div className="text-left leading-tight">
                <div className="text-xs font-semibold text-gray-800">End-to-End</div>
                <div className="text-xs font-semibold text-gray-800">Support</div>
              </div>
            </div>

          </div>

        </div>

        {/* Mobile-only consultation image block */}
        <div className="md:hidden mt-6 w-full rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <img 
            src="/assets/Modern Financial Consultation Meeting.png" 
            alt="Financial consultation session at Eazy Lend"
            className="w-full h-44 xs:h-52 sm:h-56 object-cover object-center"
            loading="eager"
          />
        </div>

      </div>
    </section>
  );
}
