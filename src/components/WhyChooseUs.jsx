import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Zap, 
  UserCheck, 
  CheckCircle2,
  Sparkles,
  PhoneCall,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  BadgePercent,
  Check
} from 'lucide-react';

const partnerBanks = [
  { name: 'SBI', type: 'Public Bank' },
  { name: 'HDFC Bank', type: 'Private Bank' },
  { name: 'ICICI Bank', type: 'Private Bank' },
  { name: 'Axis Bank', type: 'Private Bank' },
  { name: 'Kotak Bank', type: 'Private Bank' },
  { name: 'Bajaj Finserv', type: 'NBFC' },
  { name: 'Tata AIG', type: 'Insurance' },
  { name: 'Star Health', type: 'Health' },
  { name: 'HDFC ERGO', type: 'General' },
];

const stats = [
  { 
    value: '₹500 Cr+', 
    label: 'Total Loans Disbursed', 
    subtext: 'Across Home, Business & Mortgages',
    icon: <TrendingUp className="w-5 h-5 text-[#b87a14]" /> 
  },
  { 
    value: '15,000+', 
    label: 'Happy Families & Businesses', 
    subtext: 'Guided with personal care',
    icon: <UserCheck className="w-5 h-5 text-[#004737]" /> 
  },
  { 
    value: '30+', 
    label: 'Banking & NBFC Partners', 
    subtext: 'India’s top financial institutions',
    icon: <Building2 className="w-5 h-5 text-[#b87a14]" /> 
  },
  { 
    value: '99.2%', 
    label: 'Approval Success Rate', 
    subtext: 'Thorough pre-qualification checks',
    icon: <Award className="w-5 h-5 text-[#004737]" /> 
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#fcfdfd] border-t border-gray-100/80 px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="w-full">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 bg-[#fdf5e8] border border-[#f5dfbc] px-3.5 py-1.5 rounded-full mb-3.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#b87a14]" />
            <span className="text-[11px] sm:text-xs font-bold text-[#004737] tracking-wider uppercase">
              WHY CHOOSE EAZY LEND
            </span>
          </div>

          {/* Editorial Serif Title */}
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#004737] leading-[1.2] mb-3.5">
            Your Trusted Partner In{' '}
            <span className="relative inline-block text-[#b87a14] italic">
              Financial Growth
              {/* Golden Swoosh Curve */}
              <svg 
                className="absolute -bottom-2 right-0 w-32 xs:w-44 sm:w-52 text-[#c48318] h-2.5 pointer-events-none" 
                viewBox="0 0 200 10" 
                fill="currentColor"
              >
                <path d="M0,8 C50,2 150,0 200,5 C140,4 60,7 0,8 Z" />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs xs:text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
            We simplify the entire borrowing and insurance journey with transparent guidance, 
            exclusive bank rates, and dedicated support every step of the way.
          </p>
        </div>

        {/* ================= ASYMMETRIC BENTO GRID (4 DISTINCT CARDS) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mb-12 sm:mb-16">
          
          {/* ---------------- CARD 1: 30+ BANKING & INSURANCE PARTNERS (Wide: 7 cols) ---------------- */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-[#e8ece9] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#ebd2b0] transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Top Row: Icon + Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#eef7f2] border border-[#d2ecd9] flex items-center justify-center text-[#004737] group-hover:scale-105 transition-transform">
                  <Building2 className="w-6 h-6 text-[#004737]" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full bg-[#fdf5e8] text-[#b87a14] border border-[#f7dcaf]">
                  <BadgePercent className="w-3.5 h-3.5" />
                  Best Interest Rates
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#004737] group-hover:text-[#b87a14] transition-colors mb-2">
                30+ Banking & Insurance Partners
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal mb-5">
                We compare multiple top-tier public & private banks and certified insurers to secure you the absolute lowest interest rates and best coverage.
              </p>

              {/* Visual Showcase: Partner Cloud */}
              <div className="bg-[#f9fbf9] rounded-xl p-4 border border-[#e6eee8]">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                    Our Comparison Network
                  </span>
                  <span className="text-[11px] font-bold text-[#004737]">
                    30+ Top Institutions
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {partnerBanks.map((bank) => (
                    <span 
                      key={bank.name}
                      className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-gray-200/80 text-gray-700 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#004737]"></span>
                      {bank.name}
                    </span>
                  ))}
                  <span className="inline-flex items-center text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-lg bg-[#fae5c3]/40 border border-[#f5dfbc] text-[#935e07]">
                    +21 More Partners
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Highlight */}
            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="text-[#004737] font-semibold flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#004737]" />
                Single application compares all rates
              </span>
              <span className="text-gray-400 font-medium hidden sm:inline">Save up to 1.5% on EMI</span>
            </div>
          </div>

          {/* ---------------- CARD 2: RAPID & HASSLE-FREE SANCTIONS (5 cols) ---------------- */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-[#e8ece9] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#ebd2b0] transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Top Row: Icon + Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#fff7ea] border border-[#f5dfbc] flex items-center justify-center text-[#b87a14] group-hover:scale-105 transition-transform">
                  <Zap className="w-6 h-6 text-[#b87a14]" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full bg-[#fdf5e8] text-[#b87a14] border border-[#f7dcaf]">
                  <Clock className="w-3.5 h-3.5" />
                  Quick Disbursal
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#004737] group-hover:text-[#b87a14] transition-colors mb-2">
                Rapid & Hassle-Free Sanctions
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal mb-5">
                Minimal paperwork with streamlined digital processing. Experience rapid approvals and prompt disbursals directly to your account.
              </p>

              {/* Visual 3-Step Express Journey */}
              <div className="bg-[#fffdf9] rounded-xl p-4 border border-[#f5edd9] space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#eef7f2] border border-[#a8dac0] flex items-center justify-center text-[11px] font-bold text-[#004737] flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-800">5-Minute Instant Eligibility Check</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#eef7f2] border border-[#a8dac0] flex items-center justify-center text-[11px] font-bold text-[#004737] flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-800">Doorstep / Digital Document Pickup</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#004737] flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-[#004737]">Fast Disbursal into Your Account</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Highlight */}
            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="text-[#004737] font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#004737]" />
                Zero bank branch queues
              </span>
              <span className="text-[#b87a14] font-bold">24-48 Hr Fast Track</span>
            </div>
          </div>

          {/* ---------------- CARD 3: 100% TRANSPARENT PROCESS (5 cols) ---------------- */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-[#e8ece9] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#ebd2b0] transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Top Row: Icon + Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#f0f7f3] border border-[#d2ecd9] flex items-center justify-center text-[#004737] group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-[#004737]" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full bg-[#fdf5e8] text-[#b87a14] border border-[#f7dcaf]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Zero Hidden Costs
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#004737] group-hover:text-[#b87a14] transition-colors mb-2">
                100% Transparent Process
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal mb-5">
                Zero hidden fees, zero surprise charges. We ensure complete clarity on processing fees, interest structures, and policy terms from day one.
              </p>

              {/* Visual Transparency Checklist */}
              <div className="bg-[#f9fbf9] rounded-xl p-4 border border-[#e6eee8] space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                  <div className="w-4 h-4 rounded-full bg-[#004737] flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span>Full disclosure of bank processing fees upfront</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                  <div className="w-4 h-4 rounded-full bg-[#004737] flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span>Clear amortization schedule & interest calculations</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                  <div className="w-4 h-4 rounded-full bg-[#004737] flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span>Zero hidden brokerage or mystery deductions</span>
                </div>
              </div>
            </div>

            {/* Bottom Highlight */}
            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="text-[#004737] font-semibold flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#004737]" />
                100% Honest Guidance
              </span>
              <span className="text-gray-400 font-medium">Plain-language policy</span>
            </div>
          </div>

          {/* ---------------- CARD 4: DEDICATED FINANCIAL ADVISOR (Wide: 7 cols) ---------------- */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-[#e8ece9] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#ebd2b0] transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Top Row: Icon + Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#fff7ea] border border-[#f5dfbc] flex items-center justify-center text-[#b87a14] group-hover:scale-105 transition-transform">
                  <UserCheck className="w-6 h-6 text-[#b87a14]" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full bg-[#fdf5e8] text-[#b87a14] border border-[#f7dcaf]">
                  <Sparkles className="w-3.5 h-3.5" />
                  End-to-End Support
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#004737] group-hover:text-[#b87a14] transition-colors mb-2">
                Dedicated Financial Advisor
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal mb-5">
                Personalized 1-on-1 guidance tailored to your specific financial situation, credit profile, and future wealth protection needs.
              </p>

              {/* Visual Personal Advisor Desk Widget */}
              <div className="bg-[#fcfaf6] rounded-xl p-4 border border-[#f3e6cf] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-11 h-11 rounded-full bg-[#004737] text-white flex items-center justify-center font-bold text-sm">
                      EL
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white"></span>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#004737]">
                      Puducherry Advisory Desk
                    </h4>
                    <p className="text-[11px] text-gray-500">
                      Direct phone & in-person consultation
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="tel:9659590505"
                    className="inline-flex items-center gap-1.5 bg-white border border-[#e2d5c2] hover:border-[#b87a14] px-3 py-1.5 rounded-lg text-xs font-bold text-[#004737] shadow-sm transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#b87a14]" />
                    <span>9659590505</span>
                  </a>
                  <a
                    href="tel:9585831478"
                    className="inline-flex items-center gap-1.5 bg-white border border-[#e2d5c2] hover:border-[#b87a14] px-3 py-1.5 rounded-lg text-xs font-bold text-[#004737] shadow-sm transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#b87a14]" />
                    <span>9585831478</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Highlight */}
            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="text-[#004737] font-semibold flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#004737]" />
                Personal advisor stays with you until disbursal
              </span>
              <span className="text-gray-400 font-medium">Free eligibility consultation</span>
            </div>
          </div>

        </div>

        {/* ================= STATS & TRUST COUNTERS STRIP ================= */}
        <div className="w-full bg-[#f4f9f6] border border-[#d6ecdf] rounded-2xl p-6 sm:p-8 md:p-10 mb-10 sm:mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6 items-center">
            {stats.map((stat, idx) => (
              <div 
                key={stat.label}
                className={`${idx > 0 ? 'md:border-l md:border-[#cfe4d7]' : ''} px-2 sm:px-4 text-center md:text-left`}
              >
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#d8ece0] flex items-center justify-center shadow-xs">
                    {stat.icon}
                  </div>
                  <span className="font-serif text-2xl xs:text-3xl sm:text-3xl font-bold text-[#004737] tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-800 leading-snug">
                  {stat.label}
                </div>
                <div className="text-[11px] sm:text-xs text-gray-500 font-normal mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CALLOUT BANNER / CONSULTATION CTA ================= */}
        <div className="w-full bg-gradient-to-r from-[#00382b] via-[#004737] to-[#05372d] text-white rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-[#005542]">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-xs border border-white/20 px-3 py-1 rounded-full text-xs font-semibold text-[#f5d996] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Financial Consultation</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-2">
              Ready to find the right loan or insurance plan?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/80 font-normal max-w-xl">
              Talk directly to our Puducherry finance specialists today for free eligibility check and personalized guidance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto flex-shrink-0">
            <a
              href="tel:9659590505"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#b87a14] hover:bg-[#a2680d] active:scale-95 text-white text-xs sm:text-sm font-bold px-5 py-3.5 rounded-xl shadow-sm transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call 9659590505</span>
            </a>
            
            <a
              href="#loan-solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 active:scale-95 text-white border border-white/20 text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-xl transition-all"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
