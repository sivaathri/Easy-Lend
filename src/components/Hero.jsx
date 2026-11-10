import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafbfb] border-b border-gray-100/60">
      <div className="relative w-full">
        {/* Full Official Banner Image */}
        <img 
          src="/assets/Eazy Lend Financial Guidance Banner.png" 
          alt="Eazy Lend - The Right Loan. The Right Protection. Financial Guidance Banner"
          className="w-full h-auto object-cover sm:object-contain block select-none"
          loading="eager"
        />

        {/* Interactive Clickable Hotspot 1: Explore Loan Options */}
        <a
          href="#loan-solutions"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('loan-solutions');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="absolute cursor-pointer rounded-lg sm:rounded-xl transition-all hover:bg-black/5 active:scale-95"
          style={{
            left: '1.2%',
            top: '58.5%',
            width: '17.2%',
            height: '12%'
          }}
          title="Explore Loan Options"
          aria-label="Explore Loan Options"
        />

        {/* Interactive Clickable Hotspot 2: Get Insurance Guidance */}
        <a
          href="#insurance-solutions"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('insurance-solutions');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="absolute cursor-pointer rounded-lg sm:rounded-xl transition-all hover:bg-black/5 active:scale-95"
          style={{
            left: '18.6%',
            top: '58.5%',
            width: '14.8%',
            height: '12%'
          }}
          title="Get Insurance Guidance"
          aria-label="Get Insurance Guidance"
        />
      </div>
    </section>
  );
}
