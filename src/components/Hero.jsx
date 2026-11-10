import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafbfb] border-b border-gray-100/60">
      <div className="relative w-full flex items-center justify-center">
        {/* Full Official Banner Image */}
        <img 
          src="/assets/Eazy Lend Financial Guidance Banner.png" 
          alt="Eazy Lend - The Right Loan. The Right Protection. Financial Guidance Banner"
          className="w-full h-auto max-h-[460px] md:max-h-[500px] lg:max-h-[540px] xl:max-h-[580px] object-cover object-center block select-none"
          loading="eager"
        />
      </div>
    </section>
  );
}