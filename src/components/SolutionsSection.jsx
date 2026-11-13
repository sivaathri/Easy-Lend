import React from 'react';
import { ArrowRight } from 'lucide-react';

const loanProducts = [
  {
    id: 'home-loan',
    title: 'Home Loan',
    subtitle: 'Fulfill Your Dream of a Home',
    image: '/assets/icon-home-hd.jpg',
  },
  {
    id: 'personal-loan',
    title: 'Personal Loan',
    subtitle: 'Easy Access to Personal Funds',
    image: '/assets/icon-personal-laptop-hd.jpg',
  },
  {
    id: 'business-loan',
    title: 'Business Loan',
    subtitle: 'Scale Your Business Ambitions',
    image: '/assets/icon-business-hd.jpg',
  },
  {
    id: 'mortgage-loan',
    title: 'Mortgage Loan',
    subtitle: 'Secured Property Financing',
    image: '/assets/icon-mortgage-hd.jpg',
  },
  {
    id: 'working-capital',
    title: 'Working Capital',
    subtitle: 'OD / CC / UCL for Your Business',
    image: '/assets/icon-capital-hd.jpg',
    isFifth: true,
  },
];

const insuranceProducts = [
  {
    id: 'health-insurance',
    title: 'Health Insurance',
    subtitle: 'Comprehensive Health Coverage',
    image: '/assets/icon-health-hd.jpg',
  },
  {
    id: 'life-insurance',
    title: 'Life Insurance',
    subtitle: "Secure Your Family's Future",
    image: '/assets/icon-life-hd.jpg',
  },
  {
    id: 'term-insurance',
    title: 'Term Insurance',
    subtitle: 'Life Coverage for Your Family',
    image: '/assets/icon-term-hd.jpg',
  },
  {
    id: 'vehicle-insurance',
    title: 'Vehicle Insurance',
    subtitle: 'Secure Your Journey',
    image: '/assets/icon-vehicle-hd.jpg',
  },
];

export default function SolutionsSection() {
  return (
    <section className="w-full px-2.5 xs:px-3.5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 md:py-10">
      <div className="w-full max-w-[1720px] mx-auto">
        
        {/* ================= 1. SECTION HEADER (Centered) ================= */}
        <div className="flex flex-col items-center text-center mb-5 sm:mb-7 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight text-[#004737]">
            Our Services
          </h2>
          {/* Golden accent dash */}
          <div className="w-10 h-[2.5px] bg-[#d97706] rounded-full mt-1.5 mb-1.5" />
          <p className="text-xs sm:text-[13px] md:text-sm text-gray-500 font-normal">
            Complete financial solutions for every stage of life.
          </p>
        </div>

        {/* ================= 2. TWO SIDE-BY-SIDE PANELS ================= */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 lg:gap-5 xl:gap-6 items-stretch w-full">
          
          {/* ================= LOAN SERVICES PANEL (5 Cards, ~56% width) ================= */}
          <div 
            id="loan-solutions" 
            className="flex-1 lg:w-[56%] bg-[#fcfbf7] border border-[#ede7dc] rounded-2xl md:rounded-[24px] p-3.5 sm:p-4.5 md:p-5 lg:p-6 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)] scroll-mt-24"
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-4 sm:mb-4.5">
                <img 
                  src="/assets/header-loan-coins-hd.jpg" 
                  alt="Loan Services" 
                  className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain flex-shrink-0 drop-shadow-2xs mix-blend-multiply" 
                />
                <div>
                  <h3 className="text-base sm:text-lg md:text-[20px] font-bold text-[#004737] tracking-tight leading-snug">
                    Loan 
                  </h3>
                  <p className="text-[11.5px] sm:text-xs text-gray-500 leading-tight mt-0.5">
                    Flexible loan solutions to help you achieve your dreams.
                  </p>
                </div>
              </div>

              {/* 5 Cards Responsive Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-2.5 sm:gap-3 md:gap-3.5">
                {loanProducts.map((item) => (
                  <div
                    key={item.id}
                    className={`group bg-white rounded-xl sm:rounded-2xl p-2.5 xs:p-3 sm:p-3 md:p-3.5 pt-3.5 pb-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#edebe7] hover:border-[#f3cca0] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-between text-center cursor-pointer min-h-[152px] xs:min-h-[160px] ${
                      item.isFifth ? 'col-span-2 sm:col-span-1 max-w-[240px] xs:max-w-[280px] sm:max-w-none mx-auto w-full' : ''
                    }`}
                  >
                    <div className="w-full flex items-center justify-center h-14 xs:h-16 sm:h-18 mb-1.5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-2xs"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex flex-col items-center my-auto px-0.5 w-full">
                      <h4 className="text-[11.5px] xs:text-xs sm:text-[13px] font-bold text-[#004737] group-hover:text-[#c98218] transition-colors leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[9.5px] xs:text-[10.5px] text-gray-500 leading-tight mt-1 max-w-[130px]">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="mt-2.5 w-5 h-5 rounded-full border border-[#f3cca0] bg-[#fffaf3] text-[#d97706] group-hover:bg-[#d97706] group-hover:text-white transition-all flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= INSURANCE SERVICES PANEL (4 Cards, ~44% width) ================= */}
          <div 
            id="insurance-solutions" 
            className="lg:w-[44%] bg-[#fcfbf7] border border-[#ede7dc] rounded-2xl md:rounded-[24px] p-3.5 sm:p-4.5 md:p-5 lg:p-6 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)] scroll-mt-24"
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-4 sm:mb-4.5">
                <img 
                  src="/assets/header-insurance-shield-hd.jpg" 
                  alt="Insurance Services" 
                  className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain flex-shrink-0 drop-shadow-2xs mix-blend-multiply" 
                />
                <div>
                  <h3 className="text-base sm:text-lg md:text-[20px] font-bold text-[#004737] tracking-tight leading-snug">
                    Insurance 
                  </h3>
                  <p className="text-[11.5px] sm:text-xs text-gray-500 leading-tight mt-0.5">
                    Comprehensive insurance plans for a secure tomorrow.
                  </p>
                </div>
              </div>

              {/* 4 Cards Responsive Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-3.5">
                {insuranceProducts.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white rounded-xl sm:rounded-2xl p-2.5 xs:p-3 sm:p-3 md:p-3.5 pt-3.5 pb-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#edebe7] hover:border-[#f3cca0] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-between text-center cursor-pointer min-h-[152px] xs:min-h-[160px]"
                  >
                    <div className="w-full flex items-center justify-center h-14 xs:h-16 sm:h-18 mb-1.5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-2xs"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex flex-col items-center my-auto px-0.5 w-full">
                      <h4 className="text-[11.5px] xs:text-xs sm:text-[13px] font-bold text-[#004737] group-hover:text-[#c98218] transition-colors leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[9.5px] xs:text-[10.5px] text-gray-500 leading-tight mt-1 max-w-[130px]">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="mt-2.5 w-5 h-5 rounded-full border border-[#f3cca0] bg-[#fffaf3] text-[#d97706] group-hover:bg-[#d97706] group-hover:text-white transition-all flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
