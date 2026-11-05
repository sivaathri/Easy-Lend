import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

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
  const scrollToConsultation = (serviceName) => {
    const el = document.getElementById('free-consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 space-y-10 sm:space-y-12">
      
      {/* ================= 1. LOAN SOLUTIONS (Full Width, 5 Spacious Cards) ================= */}
      <div id="loan-solutions" className="w-full">
        {/* Header */}
        <div className="mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#e8f4ee] text-[#004737] border border-[#004737]/15 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#c48318]" />
            <span>Tailored Financing Options</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-[28px] font-bold tracking-tight">
            <span className="text-[#004737]">Loan </span>
            <span className="text-[#c48318]">Solutions</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl leading-relaxed">
            Flexible, competitive loan options designed to empower your personal milestones and scale your business ambitions.
          </p>
        </div>

        {/* 5 Cards Grid: 5 columns on desktop/laptop 1024px, 3 on tablet, 2 on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-3.5 md:gap-4 lg:gap-5">
          {loanProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => scrollToConsultation(item.title)}
              role="button"
              tabIndex={0}
              className={`group relative bg-white rounded-2xl p-3.5 sm:p-4 md:p-4.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-[#edebe7] hover:border-[#c48318]/50 hover:shadow-[0_12px_28px_rgba(0,71,55,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-between text-center cursor-pointer min-h-[195px] sm:min-h-[215px] ${
                item.isFifth ? 'col-span-2 sm:col-span-1 max-w-[280px] sm:max-w-none mx-auto w-full' : ''
              }`}
            >
              {/* 3D Illustration */}
              <div className="w-full flex items-center justify-center h-16 sm:h-20 mb-2.5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-108"
                  loading="lazy"
                />
              </div>

              {/* Text Info */}
              <div className="flex flex-col items-center my-auto w-full px-0.5">
                <h3 className="text-xs sm:text-sm md:text-[15px] font-bold text-[#004737] group-hover:text-[#c48318] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-500 group-hover:text-gray-600 transition-colors leading-relaxed mt-1 line-clamp-2">
                  {item.subtitle}
                </p>
              </div>

              {/* Circular Action Indicator */}
              <div className="mt-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#f3cca0] bg-[#fffaf3] text-[#c48318] group-hover:bg-[#004737] group-hover:border-[#004737] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs flex-shrink-0">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= 2. INSURANCE SOLUTIONS (Full Width, 4 Spacious Cards in Soft Frame) ================= */}
      <div 
        id="insurance-solutions" 
        className="w-full bg-gradient-to-br from-[#f5f9f6] via-[#fafdfb] to-[#f3f8f5] border border-[#dfede5] rounded-2xl sm:rounded-3xl p-4.5 xs:p-6 sm:p-7 md:p-8 shadow-[0_2px_12px_rgba(0,71,55,0.02)]"
      >
        {/* Header */}
        <div className="mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#fef5e7] text-[#9e6209] border border-[#c48318]/25 mb-2.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c48318]" />
            <span>IRDAI Certified Protection Plans</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-[28px] font-bold tracking-tight">
            <span className="text-[#004737]">Insurance </span>
            <span className="text-[#c48318]">Solutions</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl leading-relaxed">
            Authorized partner for Tata AIA and Tata AIG, offering transparent family protection and asset security with zero hidden fees.
          </p>
        </div>

        {/* 4 Cards Grid: 4 columns on desktop/laptop 1024px, 2 on tablet/mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-3.5 md:gap-4 lg:gap-5">
          {insuranceProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => scrollToConsultation(item.title)}
              role="button"
              tabIndex={0}
              className="group relative bg-white rounded-2xl p-3.5 sm:p-4 md:p-4.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-[#edebe7] hover:border-[#c48318]/50 hover:shadow-[0_12px_28px_rgba(0,71,55,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-between text-center cursor-pointer min-h-[195px] sm:min-h-[215px]"
            >
              {/* 3D Illustration */}
              <div className="w-full flex items-center justify-center h-16 sm:h-20 mb-2.5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-108"
                  loading="lazy"
                />
              </div>

              {/* Text Info */}
              <div className="flex flex-col items-center my-auto w-full px-0.5">
                <h3 className="text-xs sm:text-sm md:text-[15px] font-bold text-[#004737] group-hover:text-[#c48318] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-500 group-hover:text-gray-600 transition-colors leading-relaxed mt-1 line-clamp-2">
                  {item.subtitle}
                </p>
              </div>

              {/* Circular Action Indicator */}
              <div className="mt-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#f3cca0] bg-[#fffaf3] text-[#c48318] group-hover:bg-[#004737] group-hover:border-[#004737] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs flex-shrink-0">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
