
import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafbfb] border-b border-gray-100/60">

      <div className="relative w-full">

        {/* Banner Image */}
        <img
          src="/assets/Eazy Lend Financial Guidance Banner Original.png"
          alt="Eazy Lend - Financial Guidance"
          className="w-full h-auto max-h-[460px] md:max-h-[500px] lg:max-h-[540px] xl:max-h-[610px] object-cover object-center block select-none"
          loading="eager"
        />

        {/* Talk to an Advisor Button */}
        <a
          href="#free-consultation"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('free-consultation');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="absolute left-[6.5%] bottom-[17%]
          inline-flex items-center justify-center gap-1.5 sm:gap-2.5 md:gap-3
          px-3.5 py-1.5 xs:px-4 xs:py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3.5
          rounded-full
          bg-gradient-to-b from-[#07875b] to-[#004b34]
          text-white font-semibold
          text-xs sm:text-sm md:text-base lg:text-lg
          shadow-lg shadow-green-900/20
          border border-green-700/30
          hover:from-[#069b68] hover:to-[#006343]
          hover:scale-105 active:scale-95
          transition-all duration-300
          whitespace-nowrap cursor-pointer z-10"
        >
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white fill-white" />

          <span>Talk to an Advisor</span>

          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </a>

      </div>
    </section>
  );
}
