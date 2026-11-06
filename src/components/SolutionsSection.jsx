import React from 'react';
import { ArrowRight } from 'lucide-react';

const loanProducts = [
  {
    id: 'home-loan',
    title: 'Home Loan',
    subtitle: 'Fulfill Your Dream of a Home',
    image: '/assets/icon-home.png',
  },
  {
    id: 'personal-loan',
    title: 'Personal Loan',
    subtitle: 'Easy Access to Personal Funds',
    image: '/assets/icon-personal.png',
  },
  {
    id: 'business-loan',
    title: 'Business Loan',
    subtitle: 'Scale Your Business Ambitions',
    image: '/assets/icon-business.png',
  },
  {
    id: 'mortgage-loan',
    title: 'Mortgage Loan',
    subtitle: 'Secured Property Financing',
    image: '/assets/icon-mortgage.png',
  },
  {
    id: 'working-capital',
    title: 'Working Capital',
    subtitle: 'OD / CC / UCL for Your Business',
    image: '/assets/icon-capital.png',
    isFifth: true,
  },
];

const insuranceProducts = [
  {
    id: 'health-insurance',
    title: 'Health Insurance',
    subtitle: 'Comprehensive Health Coverage',
    image: '/assets/icon-health.png',
  },
  {
    id: 'life-insurance',
    title: 'Life Insurance',
    subtitle: "Secure Your Family's Future",
    image: '/assets/icon-life.png',
  },
  {
    id: 'term-insurance',
    title: 'Term Insurance',
    subtitle: 'Life Coverage for Your Family',
    image: '/assets/icon-term.png',
  },
  {
    id: 'vehicle-insurance',
    title: 'Vehicle Insurance',
    subtitle: 'Secure Your Journey',
    image: '/assets/icon-vehicle.png',
  },
];

export default function SolutionsSection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 xl:gap-10 items-stretch w-full">
        
        {/* ================= LOAN SOLUTIONS (5 Cards) ================= */}
        <div id="loan-solutions" className="flex-1 lg:w-[56%] flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="mb-3.5 sm:mb-4">
              <h2 className="text-xl xs:text-2xl sm:text-[24px] font-bold tracking-tight">
                <span className="text-[#05372d]">Loan </span>
                <span className="text-[#c98218]">Solutions</span>
              </h2>
              <p className="text-xs sm:text-[13px] md:text-sm text-gray-500 mt-0.5">
                Flexible loan options to help you achieve your goals.
              </p>
            </div>

            {/* 5 Cards Responsive Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-2.5 sm:gap-3">
              {loanProducts.map((item) => (
                <div
                  key={item.id}
                  className={`group bg-white rounded-xl p-2.5 xs:p-3 sm:p-2.5 md:p-3 pt-3 pb-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#edebe7] hover:border-[#f3cca0] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-between text-center cursor-pointer min-h-[148px] xs:min-h-[155px] ${
                    item.isFifth ? 'col-span-2 sm:col-span-1 max-w-[240px] xs:max-w-[280px] sm:max-w-none mx-auto w-full' : ''
                  }`}
                >
                  <div className="w-full flex items-center justify-center h-12 xs:h-14 sm:h-14 mb-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col items-center my-auto px-0.5">
                    <h3 className="text-[11px] xs:text-xs font-bold text-[#05372d] group-hover:text-[#c98218] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[9px] xs:text-[10px] text-gray-500 leading-tight mt-1 max-w-[105px]">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-2 w-5 h-5 rounded-full border border-[#f3cca0] bg-[#fffaf3] text-[#d97706] group-hover:bg-[#d97706] group-hover:text-white transition-all flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= INSURANCE SOLUTIONS (4 Cards) ================= */}
        <div id="insurance-solutions" className="lg:w-[44%] flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="mb-3.5 sm:mb-4">
              <h2 className="text-xl xs:text-2xl sm:text-[24px] font-bold tracking-tight">
                <span className="text-[#05372d]">Insurance </span>
                <span className="text-[#c98218]">Solutions</span>
              </h2>
              <p className="text-xs sm:text-[13px] md:text-sm text-gray-500 mt-0.5">
                Comprehensive insurance plans for a secure tomorrow.
              </p>
            </div>

            {/* 4 Cards Responsive Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2.5 sm:gap-3">
              {insuranceProducts.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-xl p-2.5 xs:p-3 sm:p-2.5 md:p-3 pt-3 pb-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#edebe7] hover:border-[#f3cca0] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-between text-center cursor-pointer min-h-[148px] xs:min-h-[155px]"
                >
                  <div className="w-full flex items-center justify-center h-12 xs:h-14 sm:h-14 mb-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col items-center my-auto px-0.5">
                    <h3 className="text-[11px] xs:text-xs font-bold text-[#05372d] group-hover:text-[#c98218] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[9px] xs:text-[10px] text-gray-500 leading-tight mt-1 max-w-[105px]">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-2 w-5 h-5 rounded-full border border-[#f3cca0] bg-[#fffaf3] text-[#d97706] group-hover:bg-[#d97706] group-hover:text-white transition-all flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
