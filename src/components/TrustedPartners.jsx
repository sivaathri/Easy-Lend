import React from 'react';
import { Award } from 'lucide-react';

// ================= 1. BANKING PARTNERS (10 Banks) =================
const bankingPartners = [
  {
    id: 'sbi',
    name: 'State Bank of India',
    category: 'Public Sector Bank',
    logoSrc: '/assets/partners/sbi.svg'
  },
  {
    id: 'axis-bank',
    name: 'Axis Bank',
    category: 'Private Sector Bank',
    logoSrc: '/assets/partners/axis-bank.svg'
  },
  {
    id: 'hdfc-bank',
    name: 'HDFC Bank',
    category: 'Private Sector Bank',
    logoSrc: '/assets/partners/hdfc-bank.svg'
  },
  {
    id: 'icici-bank',
    name: 'ICICI Bank',
    category: 'Private Sector Bank',
    logoSrc: '/assets/partners/icici-bank.svg'
  },
  {
    id: 'indian-bank',
    name: 'Indian Bank',
    category: 'Public Sector Bank',
    logoSrc: '/assets/partners/indian-bank.svg'
  },
  {
    id: 'kotak-bank',
    name: 'Kotak Mahindra Bank',
    category: 'Private Sector Bank',
    logoSrc: '/assets/partners/kotak-bank.svg'
  },
  {
    id: 'esaf-bank',
    name: 'ESAF Small Finance Bank',
    category: 'Small Finance Bank',
    logoSrc: '/assets/partners/esaf-bank.svg'
  },
  {
    id: 'indusind-bank',
    name: 'IndusInd Bank',
    category: 'Private Sector Bank',
    logoSrc: '/assets/partners/indusind-bank.svg'
  },
  {
    id: 'dcb-bank',
    name: 'DCB Bank',
    category: 'Private Sector Bank',
    logoSrc: '/assets/partners/dcb-bank.svg'
  },
  {
    id: 'bandhan-bank',
    name: 'Bandhan Bank',
    category: 'Private Sector Bank',
    logoSrc: '/assets/partners/bandhan-bank.svg'
  }
];

// ================= 2. NBFC PARTNERS (8 Institutions) =================
const nbfcPartners = [
  {
    id: 'icici-home-finance',
    name: 'ICICI Home Finance',
    category: 'Housing Finance',
    logoSrc: '/assets/partners/icici-home-finance.png'
  },
  {
    id: 'lic-hfl',
    name: 'LIC Housing Finance Ltd',
    category: 'Housing Finance',
    logoSrc: '/assets/partners/lic-hfl.svg'
  },
  {
    id: 'aditya-birla-capital',
    name: 'Aditya Birla Capital Ltd',
    category: 'Financial Services',
    logoSrc: '/assets/partners/aditya-birla-capital.png'
  },
  {
    id: 'aditya-birla-housing',
    name: 'Aditya Birla Housing Finance LTD',
    category: 'Housing Finance',
    logoSrc: '/assets/partners/aditya-birla-housing.png'
  },
  {
    id: 'homefirst-finance',
    name: 'Home First Finance India LTD',
    category: 'Affordable Housing Finance',
    logoSrc: '/assets/partners/homefirst-finance.svg'
  },
  {
    id: 'bajaj-finance',
    name: 'Bajaj Finance LTD',
    category: 'Non-Banking Financial Company',
    logoSrc: '/assets/partners/bajaj-finance.svg'
  },
  {
    id: 'veritas-finance',
    name: 'Veritas Finance LTD',
    category: 'MSME Loan Finance',
    logoSrc: '/assets/partners/veritas-finance.png'
  },
  {
    id: 'aadhar-housing',
    name: 'Aadhar Housing Finance Ltd',
    category: 'Housing Finance',
    logoSrc: '/assets/partners/aadhar-housing.png'
  }
];

// ================= 3. INSURANCE PARTNERS (10 Insurers) =================
const insurancePartners = [
  {
    id: 'tata-aia',
    name: 'TATA AIA Life Insurance',
    category: 'Life Insurance',
    logoSrc: '/assets/partners/tata-aia.svg'
  },
  {
    id: 'tata-aig',
    name: 'TATA AIG General Insurance',
    category: 'General Insurance',
    logoSrc: '/assets/partners/tata-aig.png'
  },
  {
    id: 'star-health',
    name: 'Star Health Insurance',
    category: 'Health Insurance',
    logoSrc: '/assets/partners/star-health.svg'
  },
  {
    id: 'icici-lombard',
    name: 'ICICI Lombard General Insurance',
    category: 'General Insurance',
    logoSrc: '/assets/partners/icici-lombard.png'
  },
  {
    id: 'hdfc-ergo',
    name: 'HDFC ERGO General Insurance',
    category: 'General Insurance',
    logoSrc: '/assets/partners/hdfc-ergo.svg'
  },
  {
    id: 'aditya-birla-sunlife',
    name: 'Aditya Birla Sun Life Insurance',
    category: 'Life Insurance',
    logoSrc: '/assets/partners/aditya-birla-sunlife.png'
  },
  {
    id: 'aditya-birla-health',
    name: 'Aditya Birla Health Insurance',
    category: 'Health Insurance',
    logoSrc: '/assets/partners/aditya-birla-health.png'
  },
  {
    id: 'kotak-life',
    name: 'Kotak Life Insurance',
    category: 'Life Insurance',
    logoSrc: '/assets/partners/kotak-life.svg'
  },
  {
    id: 'bajaj-allianz',
    name: 'Bajaj Allianz General Insurance',
    category: 'General Insurance',
    logoSrc: '/assets/partners/bajaj-allianz.png'
  }
  
];

// ================= 4. DSA PARTNERS (8 Distribution Partners) =================
const dsaPartners = [
  {
    id: 'rajalakshmi',
    name: 'Rajalakshmi Associates',
    category: 'DSA Partner',
    logoSrc: '/assets/partners/rajalakshmi.png'
  },
  {
    id: 'capital-grow',
    name: 'Capital Grow',
    category: 'DSA Partner',
    logoSrc: '/assets/partners/capital-grow.png'
  },
  {
    id: 'finwizz',
    name: 'Finwizz',
    category: 'DSA Partner',
    logoSrc: '/assets/partners/finwizz.png'
  },
  {
    id: 'andromeda',
    name: 'Andromeda',
    category: 'DSA Partner',
    logoSrc: '/assets/partners/andromeda.png'
  },
  {
    id: 'ruloans',
    name: 'RU Loans',
    category: 'DSA Partner',
    logoSrc: '/assets/partners/ruloans.png'
  },
  {
    id: 'aadifidelis',
    name: 'Aadifidelis',
    category: 'DSA Partner',
    logoSrc: '/assets/partners/aadifidelis.png'
  },
  {
    id: 'starpowerz',
    name: 'Starpowerz',
    category: 'DSA Partner',
    logoSrc: '/assets/partners/starpowerz.png'
  },
  {
    id: 'digi-loans',
    name: 'Digi Loans',
    category: 'DSA Partner',
    logoSrc: '/assets/partners/digi-loans.png'
  }
];

// ================= 5. PARTNER SECTIONS CONFIGURATION =================
const partnerSections = [
  {
    id: 'banking-partners',
    tabLabel: 'Banking Partners',
    headingTitle: 'Our Banking',
    headingHighlight: 'Partners',
    badgeText: 'RBI & Banking Network Authorized',
    subtitleText: "Direct Lending Tie-ups with India's Premier Scheduled Commercial & Retail Banks",
    partners: bankingPartners
  },
  {
    id: 'nbfc-partners',
    tabLabel: 'NBFC Partners',
    headingTitle: 'Our NBFC',
    headingHighlight: 'Partners',
    badgeText: 'Institutional Credit Network',
    subtitleText: 'Flexible Credit, MSME & Housing Finance Partnerships for Fast Sanctions',
    partners: nbfcPartners
  },
  {
    id: 'insurance-partners',
    tabLabel: 'Insurance Partners',
    headingTitle: 'Our Insurance',
    headingHighlight: 'Partners',
    badgeText: 'IRDAI Authorized Advisory',
    subtitleText: "Direct Institutional Tie-ups with India's Premier Life, Health & General Insurers",
    partners: insurancePartners
  },
  {
    id: 'dsa-partners',
    tabLabel: 'DSA Partners',
    headingTitle: 'Our DSA',
    headingHighlight: 'Partners',
    badgeText: 'Pan-India Distribution Network',
    subtitleText: 'Pan-India Loan Sourcing & Direct Selling Associate Network',
    partners: dsaPartners
  }
];

export default function TrustedPartners({ className = '', centered = true }) {
  return (
    <div id="partners" className={`w-full flex flex-col select-none scroll-mt-24 ${centered ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      
     

      {/* 1. Four Dedicated Separate Sections Stacked Sequentially */}
      <div className="w-full flex flex-col gap-10 sm:gap-14">
        {partnerSections.map((sec, idx) => (
          <section key={sec.id} id={sec.id} className="w-full flex flex-col items-center text-center scroll-mt-24">
            
            {/* Section Header with Golden Accent Dash */}
            <div className="flex items-center gap-2.5 mb-1.5 justify-center">
              <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-[30px] font-bold tracking-tight leading-snug">
                <span className="text-[#004737]">{sec.headingTitle} </span>
                <span className="text-[#c48318]">{sec.headingHighlight}</span>
              </h3>
              <span className="inline-block w-10 sm:w-14 md:w-16 h-[3px] sm:h-[3.5px] bg-[#c48318] rounded-full align-middle ml-1" />
            </div>

            {/* Subheading & Regulatory Highlight */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-semibold mb-5 sm:mb-7 flex-wrap justify-center max-w-2xl px-2">
              <span className="inline-flex items-center gap-1.5 bg-[#fae5c3] border border-[#f3d299] px-3 py-0.5 rounded-full text-xs font-bold text-[#004737] shrink-0">
                <Award className="w-3.5 h-3.5 text-[#004737]" />
                <span>{sec.badgeText}</span>
              </span>
              <span className="hidden sm:inline text-gray-400">•</span>
              <span className="text-gray-600 text-xs sm:text-sm">{sec.subtitleText}</span>
            </div>

            {/* Grid of Cards for this Specific Category */}
            <div className="w-full flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-4.5 max-w-6xl mx-auto">
              {sec.partners.map((item) => (
                <div
                  key={item.id}
                  title={`${item.name} (${item.category})`}
                  className="w-[calc(50%-8px)] sm:w-[calc(33.333%-12px)] md:w-[calc(25%-14px)] lg:w-[160px] xl:w-[172px] h-[82px] sm:h-[88px] md:h-[94px] bg-white rounded-xl sm:rounded-2xl border border-gray-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center p-3.5 sm:p-4 cursor-pointer overflow-hidden group"
                >
                  <img
                    src={item.logoSrc}
                    alt={item.name}
                    className="max-h-[46px] sm:max-h-[52px] max-w-[88%] w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextSibling) {
                        e.currentTarget.nextSibling.style.display = 'block';
                      }
                    }}
                  />
                  <span className="hidden text-xs font-bold text-gray-700 tracking-tight text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Refined Divider between sections */}
            {idx < partnerSections.length - 1 && (
              <div className="w-full max-w-4xl mx-auto mt-10 sm:mt-14 border-t border-gray-200/70" />
            )}
          </section>
        ))}
      </div>

      {/* 2. Minimalist Compliance Note */}
      <div className="mt-8 sm:mt-12 text-center">
        <p className="text-[11px] sm:text-xs text-gray-500 max-w-xl mx-auto leading-relaxed">
          *Eazy Lend provides certified financial advisory in association with RBI-regulated banks, NBFCs, and IRDAI-registered insurance companies. 
          All loan sanctions, disbursements, and policy terms are fulfilled directly by the respective institutional partner.
        </p>
      </div>

    </div>
  );
}
