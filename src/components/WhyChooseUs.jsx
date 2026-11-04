import React from 'react';

const features = [
  {
    id: 'guidance',
    title: 'Personalized Guidance',
    descLine1: '1-to-1 expert advice based on',
    descLine2: 'your unique needs and goals.',
    icon: (
      // 3 People Group Icon
      <svg className="w-5 h-5 text-[#c48318] fill-current" viewBox="0 0 24 24">
        {/* Center Person */}
        <circle cx="12" cy="7" r="3" />
        <path d="M12 11.5c-2.8 0-6 1.4-6 3.8V17h12v-1.7c0-2.4-3.2-3.8-6-3.8z" />
        {/* Left Person */}
        <circle cx="6" cy="9" r="2.2" opacity="0.9" />
        <path d="M6 12.5c-1.8 0-4 1-4 2.6V17h3v-1.8c0-1 .4-1.9 1-2.7z" opacity="0.9" />
        {/* Right Person */}
        <circle cx="18" cy="9" r="2.2" opacity="0.9" />
        <path d="M18 12.5c1.8 0 4 1 4 2.6V17h-3v-1.8c0-1-.4-1.9-1-2.7z" opacity="0.9" />
      </svg>
    ),
  },
  {
    id: 'solutions',
    title: 'Trusted Solutions',
    descLine1: 'Wide range of loan and',
    descLine2: 'insurance options under one roof.',
    icon: (
      // Target / Bullseye with Arrow Icon
      <svg className="w-5 h-5 text-[#c48318]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <path d="m15.5 8.5 4.5-4.5" />
        <path d="M20 4h-4" />
        <path d="M20 4v4" />
      </svg>
    ),
  },
  {
    id: 'advisor',
    title: 'Authorized Advisor',
    descLine1: 'IRDAI authorized advisor for',
    descLine2: 'reliable and genuine services.',
    icon: (
      // Solid Golden Shield Icon
      <svg className="w-5 h-5 text-[#c48318] fill-current" viewBox="0 0 24 24">
        <path d="M12 2L4 5v6.5c0 5.25 3.4 10.15 8 11.5 4.6-1.35 8-6.25 8-11.5V5l-8-3z" />
      </svg>
    ),
  },
  {
    id: 'support',
    title: 'End-to-End Support',
    descLine1: 'We are with you at every step, from',
    descLine2: 'consultation to application and beyond.',
    icon: (
      // Headset / Support Icon
      <svg className="w-5 h-5 text-[#c48318]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" fill="currentColor" fillOpacity="0.15" />
        <path d="M14 19a2 2 0 0 1-2 2h-2" />
        <circle cx="10" cy="21" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8">
      <div className="w-full">
        {/* Centered Heading */}
        <h2 className="text-center font-bold text-lg sm:text-xl md:text-[22px] text-[#004737] mb-3.5 sm:mb-4 tracking-tight">
          Why Choose Eazy Lend?
        </h2>

        {/* Horizontal Container Bar */}
        <div className="w-full bg-[#f4f9f6] border border-[#e1eee6] rounded-2xl md:rounded-3xl p-4 sm:p-5 md:py-4 md:px-6 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 lg:gap-0 lg:divide-x lg:divide-[#d6e5dc]">
            {features.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center gap-3 sm:gap-3.5 ${
                  index === 0
                    ? 'lg:pr-5'
                    : index === features.length - 1
                    ? 'lg:pl-5'
                    : 'lg:px-5'
                }`}
              >
                {/* Circular Golden Border Icon */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#c48318] flex items-center justify-center flex-shrink-0 bg-transparent">
                  {item.icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col min-w-0">
                  <h3 className="text-xs sm:text-[13px] md:text-sm font-bold text-[#004737] leading-tight mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-[11.5px] text-gray-500 leading-snug">
                    <span className="block">{item.descLine1}</span>
                    <span className="block">{item.descLine2}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
