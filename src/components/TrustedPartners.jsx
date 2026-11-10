import React, { useState } from 'react';
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
    logoSrc: '/assets/partners/indian-bank-clean.png'
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

// ================= 2. NBFC PARTNERS (7 Institutions) =================
const nbfcPartners = [
  {
    id: 'icici-home-finance',
    name: 'ICICI Home Finance',
    category: 'Housing Finance',
    logoSrc: '/assets/partners/icici-home-finance.png'
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
  },
  {
    id: 'irdai-auth',
    name: 'IRDAI Authorized Advisory',
    category: 'Regulatory Authority',
    logoSrc: '/assets/partners/irdai.svg'
  }
];

// ================= 4. DSA PARTNERS (7 Distribution Partners) =================
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
  }
];

export default function TrustedPartners({ className = '', centered = true }) {
  const [activeTab, setActiveTab] = useState('all');

  // Compute active partner roster and titles
  let displayedPartners = [];
  let headingTitle = 'Our Trusted Financial';
  let headingHighlight = 'Partners';
  let subtitleText = "Direct Institutional Tie-ups with India's Premier Banks, NBFCs & Insurers";

  if (activeTab === 'banking') {
    displayedPartners = bankingPartners;
    headingTitle = 'Our Banking';
    headingHighlight = 'Partners';
    subtitleText = "Direct Lending Tie-ups with India's Premier Scheduled Commercial & Retail Banks";
  } else if (activeTab === 'nbfc') {
    displayedPartners = nbfcPartners;
    headingTitle = 'Our NBFC';
    headingHighlight = 'Partners';
    subtitleText = 'Institutional Credit & Housing Finance Partnerships for Flexible Loan Sanctions';
  } else if (activeTab === 'insurance') {
    displayedPartners = insurancePartners;
    headingTitle = 'Our Insurance';
    headingHighlight = 'Partners';
    subtitleText = "IRDAI Authorized Advisor • Representing India's Leading Life, Health & General Insurers";
  } else if (activeTab === 'dsa') {
    displayedPartners = dsaPartners;
    headingTitle = 'Our DSA';
    headingHighlight = 'Partners';
    subtitleText = 'Pan-India Loan Sourcing & Direct Selling Associate Network';
  } else {
    displayedPartners = [
      ...bankingPartners,
      ...nbfcPartners,
      ...insurancePartners,
      ...dsaPartners
    ];
    headingTitle = 'Our Trusted Financial & Insurance';
    headingHighlight = 'Partners';
    subtitleText = 'Comprehensive Institutional Network of 34+ Leading Banks, NBFCs, Insurers & DSA Partners';
  }

  return (
    <div className={`w-full flex flex-col select-none ${centered ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      
      {/* 1. Header with Golden Accent Dash */}
      <div className={`flex items-center gap-2.5 mb-1.5 ${centered ? 'justify-center' : 'justify-start'}`}>
        <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-[30px] font-bold tracking-tight leading-snug">
          <span className="text-[#004737]">{headingTitle} </span>
          <span className="text-[#c48318]">{headingHighlight}</span>
        </h3>
        <span className="inline-block w-10 sm:w-14 md:w-16 h-[3px] sm:h-[3.5px] bg-[#c48318] rounded-full align-middle ml-1" />
      </div>

      {/* 2. Subheading & Regulatory Highlight */}
      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-semibold mb-4 sm:mb-6 flex-wrap justify-center">
        <span className="inline-flex items-center gap-1.5 bg-[#fae5c3] border border-[#f3d299] px-3 py-0.5 rounded-full text-xs font-bold text-[#004737]">
          <Award className="w-3.5 h-3.5 text-[#004737]" />
          <span>IRDAI &amp; Banking Network Authorized</span>
        </span>
        <span className="hidden sm:inline text-gray-400">•</span>
        <span className="text-gray-600 text-xs sm:text-sm">{subtitleText}</span>
      </div>

      {/* 3. Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
            activeTab === 'all'
              ? 'bg-[#004737] text-white border-[#004737] shadow-xs'
              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
          }`}
        >
          All Partners ({bankingPartners.length + nbfcPartners.length + insurancePartners.length + dsaPartners.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('banking')}
          className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
            activeTab === 'banking'
              ? 'bg-[#004737] text-white border-[#004737] shadow-xs'
              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
          }`}
        >
          Banking ({bankingPartners.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('nbfc')}
          className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
            activeTab === 'nbfc'
              ? 'bg-[#004737] text-white border-[#004737] shadow-xs'
              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
          }`}
        >
          NBFC ({nbfcPartners.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('insurance')}
          className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
            activeTab === 'insurance'
              ? 'bg-[#004737] text-white border-[#004737] shadow-xs'
              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
          }`}
        >
          Insurance ({insurancePartners.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('dsa')}
          className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
            activeTab === 'dsa'
              ? 'bg-[#004737] text-white border-[#004737] shadow-xs'
              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
          }`}
        >
          DSA Partners ({dsaPartners.length})
        </button>
      </div>

      {/* 4. EXACT UPLOAD IMAGE STYLE: Clean White Rounded Rectangle Cards with Authentic Official Logos */}
      <div className="w-full flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-4.5 max-w-6xl mx-auto">
        {displayedPartners.map((item) => (
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
                // Graceful fallback if any image asset fails
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

      {/* 5. Minimalist Compliance Note */}
      <div className="mt-6 sm:mt-8 text-center">
        <p className="text-[11px] sm:text-xs text-gray-500 max-w-xl mx-auto leading-relaxed">
          *Eazy Lend provides certified financial advisory in association with RBI-regulated banks, NBFCs, and IRDAI-registered insurance companies. 
          All loan sanctions, disbursements, and policy terms are fulfilled directly by the respective institutional partner.
        </p>
      </div>

    </div>
  );
}
