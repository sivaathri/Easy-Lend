import React from 'react';

export default function TrustedPartners({ className = '', centered = true }) {
  return (
    <div className={`w-full flex flex-col select-none ${centered ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      
      {/* 1. Heading: Our Trusted Partners ── */}
      <div className={`flex items-center gap-2.5 mb-1 ${centered ? 'justify-center' : 'justify-start'}`}>
        <h3 className="text-lg xs:text-xl sm:text-2xl md:text-[26px] font-bold tracking-tight leading-snug">
          <span className="text-[#004737]">Our Trusted </span>
          <span className="text-[#c48318]">Partners</span>
        </h3>
        {/* Golden Dash / Horizontal Accent Line */}
        <span className="inline-block w-9 sm:w-12 md:w-14 h-[3px] sm:h-[3.5px] bg-[#c48318] rounded-full align-middle ml-1" />
      </div>

      {/* 2. Subheading: IRDAI Authorized Advisor of */}
      <p className="text-xs xs:text-sm sm:text-base text-gray-700 font-semibold mb-4 sm:mb-5 tracking-wide">
        IRDAI Authorized Advisor of
      </p>

      {/* 3. Logos Row matching the exact reference (Enlarged) */}
      <div className="flex items-center flex-wrap justify-center gap-x-5 sm:gap-x-7 md:gap-x-8 gap-y-3.5">
        
        {/* Logo 1: IRDAI */}
        <div className="flex items-center">
          <span className="text-2xl xs:text-3xl sm:text-4xl md:text-[40px] font-black text-[#0052cc] tracking-tight leading-none font-sans">
            IRDAI
          </span>
        </div>

        {/* Vertical Divider Line */}
        <div className="h-8 xs:h-9 sm:h-11 md:h-12 w-[2px] bg-gray-300 self-center" />

        {/* Logo 2: TATA AIA Life Insurance */}
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline leading-none">
            <span className="text-xl xs:text-2xl sm:text-3xl md:text-[32px] font-black text-[#0050a0] tracking-tight">
              TATA
            </span>
            <span className="text-xl xs:text-2xl sm:text-3xl md:text-[32px] font-black text-[#e40046] tracking-tight ml-1.5">
              AIA
            </span>
          </div>
          {/* Dual Color Blocks & Text */}
          <div className="flex items-center gap-1.5 mt-1.5">
            <span className="w-3.5 sm:w-4 md:w-5 h-2 sm:h-2.5 bg-[#0050a0] inline-block rounded-[1px]" />
            <span className="w-3.5 sm:w-4 md:w-5 h-2 sm:h-2.5 bg-[#e40046] inline-block rounded-[1px]" />
            <span className="text-[10px] xs:text-[11px] sm:text-xs md:text-[13px] font-bold text-[#0f172a] tracking-wider uppercase leading-none ml-1">
              LIFE INSURANCE
            </span>
          </div>
        </div>

        {/* Green Ampersand (&) */}
        <div className="text-2xl xs:text-3xl sm:text-4xl md:text-[40px] font-serif font-bold text-[#004737] self-center leading-none mx-1">
          &amp;
        </div>

        {/* Logo 3: TATA AIG Insurance */}
        <div className="flex flex-col items-center">
          {/* Blue Emblem Badge */}
          <div className="bg-[#004b9b] rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 text-center shadow-sm border border-white/90">
            <div className="text-[11px] xs:text-[12px] sm:text-[14px] md:text-[15px] font-black text-white tracking-widest leading-none">
              TATA
            </div>
            <div className="text-[14px] xs:text-[15px] sm:text-[17px] md:text-[19px] font-black text-white tracking-widest leading-none my-0.5">
              AIG
            </div>
            <div className="text-[7.5px] xs:text-[8px] sm:text-[9.5px] md:text-[10px] font-bold text-white tracking-widest leading-none uppercase">
              INSURANCE
            </div>
          </div>
          {/* Slogan */}
          <span className="text-[8.5px] xs:text-[9.5px] sm:text-[10.5px] md:text-[11.5px] font-bold text-[#004b9b] tracking-wider mt-1.5 text-center whitespace-nowrap leading-tight">
            WITH YOU ALWAYS
          </span>
        </div>

      </div>

    </div>
  );
}
