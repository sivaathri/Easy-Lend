import React from 'react';

export default function TrustBar() {
  const trustItems = [
    {
      id: 'personal-guidance',
      title: 'Personal Guidance',
      subtitle: 'Solutions tailored to your needs',
      icon: (
        <svg 
          className="w-5 h-5 sm:w-6 sm:h-6 text-[#064438] fill-current" 
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          <path d="M4.5 10.5c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5S2 6.62 2 8s1.12 2.5 2.5 2.5zm0 1.5C2.83 12 0 12.83 0 14.5V16h5v-1.5c0-.98.39-1.87 1.05-2.54-.5-.14-1.04-.21-1.55-.21z" opacity="0.85" />
          <path d="M19.5 10.5c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5S17 6.62 17 8s1.12 2.5 2.5 2.5zm0 1.5c-.51 0-1.05.07-1.55.21.66.67 1.05 1.56 1.05 2.54V16h5v-1.5c0-1.67-2.83-2.5-4.5-2.5z" opacity="0.85" />
        </svg>
      )
    },
    {
      id: 'transparent-process',
      title: 'Transparent Process',
      subtitle: 'Clear information, no hidden charges',
      icon: (
        <svg 
          className="w-5 h-5 sm:w-6 sm:h-6 text-[#064438]" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
        </svg>
      )
    },
    {
      id: 'support-every-step',
      title: 'Support at Every Step',
      subtitle: 'From enquiry to approval and beyond',
      icon: (
        <svg 
          className="w-5 h-5 sm:w-6 sm:h-6 text-[#064438]" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          viewBox="0 0 24 24"
        >
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-[#eef6f2] border-y border-[#e2efe7]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-3 sm:py-3.5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0 items-center">
          {trustItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex items-center gap-3 justify-start md:justify-center ${
                index > 0 ? 'md:border-l md:border-[#cfe4d7] md:pl-8' : ''
              } ${index < trustItems.length - 1 ? 'md:pr-8' : ''}`}
            >
              <div className="flex-shrink-0 text-[#064438]">
                {item.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-[13px] font-bold text-[#063d33] tracking-tight">
                  {item.title}
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-500 font-normal">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
