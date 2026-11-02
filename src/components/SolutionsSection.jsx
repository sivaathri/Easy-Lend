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
    <section className="w-full px-4 sm:px-8 lg:px-12 py-5 sm:py-7">
      <div className="flex flex-col lg:flex-row gap-5 items-stretch w-full">
        
        {/* ================= LOAN SOLUTIONS (5 Cards) ================= */}
        <div id="loan-solutions" className="flex-1 lg:w-[57%] flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="mb-3">
              <h2 className="text-xl sm:text-[22px] font-bold tracking-tight">
                <span className="text-[#05372d]">Loan </span>
                <span className="text-[#c98218]">Solutions</span>
              </h2>
              <p className="text-xs sm:text-[13px] text-gray-500 mt-0.5">
                Flexible loan options to help you achieve your goals.
              </p>
            </div>

            {/* 5 Cards Row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-2.5">
              {loanProducts.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-xl p-2.5 pt-3 pb-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#edebe7] hover:border-[#f3cca0] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-between text-center cursor-pointer min-h-[155px]"
                >
                  <div className="w-full flex items-center justify-center h-14 mb-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col items-center my-auto">
                    <h3 className="text-xs font-bold text-[#05372d] group-hover:text-[#c98218] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-gray-500 leading-tight mt-1 max-w-[105px]">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-2 w-5 h-5 rounded-full border border-[#f3cca0] bg-[#fffaf3] text-[#d97706] group-hover:bg-[#d97706] group-hover:text-white transition-all flex items-center justify-center">
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= INSURANCE SOLUTIONS (4 Cards) ================= */}
        <div 
          id="insurance-solutions" 
          className="lg:w-[43%] bg-[#f2faf5] border border-[#d6ecdf] rounded-2xl p-4 sm:p-4 flex flex-col justify-between"
        >
          <div>
            {/* Header */}
            <div className="mb-3">
              <h2 className="text-xl sm:text-[22px] font-bold tracking-tight">
                <span className="text-[#05372d]">Insurance </span>
                <span className="text-[#c98218]">Solutions</span>
              </h2>
              <p className="text-xs sm:text-[13px] text-gray-500 mt-0.5">
                Comprehensive insurance plans for a secure tomorrow.
              </p>
            </div>

            {/* 4 Cards Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-2.5">
              {insuranceProducts.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-xl p-2.5 pt-3 pb-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#e2eee6] hover:border-[#f3cca0] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-between text-center cursor-pointer min-h-[155px]"
                >
                  <div className="w-full flex items-center justify-center h-14 mb-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col items-center my-auto">
                    <h3 className="text-xs font-bold text-[#05372d] group-hover:text-[#c98218] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-gray-500 leading-tight mt-1 max-w-[105px]">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-2 w-5 h-5 rounded-full border border-[#f3cca0] bg-[#fffaf3] text-[#d97706] group-hover:bg-[#d97706] group-hover:text-white transition-all flex items-center justify-center">
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
