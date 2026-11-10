
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
          className="w-full h-auto max-h-[460px] md:max-h-[500px] lg:max-h-[540px] xl:max-h-[580px] object-cover object-center block select-none"
          loading="eager"
        />

        {/* Talk to an Advisor Button */}
        <a
          href="#contact"
          className="absolute left-[6.5%] bottom-[17%]
          inline-flex items-center justify-center gap-3
          px-5 py-2.5 md:px-7 md:py-3.5
          rounded-full
          bg-gradient-to-b from-[#07875b] to-[#004b34]
          text-white font-semibold
          text-sm md:text-base lg:text-lg
          shadow-lg shadow-green-900/20
          border border-green-700/30
          hover:from-[#069b68] hover:to-[#006343]
          hover:scale-105
          transition-all duration-300
          whitespace-nowrap"
        >
          <Phone size={20} fill="white" />

          <span>Talk to an Advisor</span>

          <ArrowRight size={20} />
        </a>

      </div>
    </section>
  );
}
