import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  X, 
  Sparkles, 
  User, 
  FileText, 
  CheckCircle2 
} from 'lucide-react';

const loanProducts = [
  {
    id: 'home-loan',
    title: 'Home Loan',
    subtitle: 'Fulfill Your Dream of a Home',
    image: '/assets/icon-home-hd.jpg',
  },
  {
    id: 'personal-loan',
    title: 'Personal Loan',
    subtitle: 'Easy Access to Personal Funds',
    image: '/assets/icon-personal-laptop-hd.jpg',
  },
  {
    id: 'business-loan',
    title: 'Business Loan',
    subtitle: 'Scale Your Business Ambitions',
    image: '/assets/icon-business-hd.jpg',
  },
  {
    id: 'mortgage-loan',
    title: 'Mortgage Loan',
    subtitle: 'Secured Property Financing',
    image: '/assets/icon-mortgage-hd.jpg',
  },
  {
    id: 'working-capital',
    title: 'Working Capital',
    subtitle: 'OD / CC / UCL for Your Business',
    image: '/assets/icon-capital-hd.jpg',
  },
];

const insuranceProducts = [
  {
    id: 'health-insurance',
    title: 'Health Insurance',
    subtitle: 'Comprehensive Health Coverage',
    image: '/assets/icon-health-hd.jpg',
  },
  {
    id: 'life-insurance',
    title: 'Life Insurance',
    subtitle: "Secure Your Family's Future",
    image: '/assets/icon-life-hd.jpg',
  },
  {
    id: 'term-insurance',
    title: 'Term Insurance',
    subtitle: 'Life Coverage for Your Family',
    image: '/assets/icon-term-hd.jpg',
  },
  {
    id: 'vehicle-insurance',
    title: 'Vehicle Insurance',
    subtitle: 'Secure Your Journey',
    image: '/assets/icon-vehicle-hd.jpg',
  },
  {
    id: 'stock-insurance',
    title: 'Stock Insurance',
    subtitle: 'Protect Your Inventory',
    image: '/assets/icon-stock-hd.jpg',
  },
  {
    id: 'shop-insurance',
    title: 'Shop Insurance',
    subtitle: 'Secure Your Retail Business',
    image: '/assets/icon-shop-hd.jpg',
  },
  {
    id: 'property-insurance',
    title: 'Property Insurance',
    subtitle: 'Comprehensive Asset Security',
    image: '/assets/icon-property-hd.jpg',
  },
];

const serviceModalDetails = {
  'home-loan': {
    id: 'home-loan',
    title: 'Home Loan',
    badge: 'PSU & Private Banks',
    subtitle: 'Fulfill your dream of a home • Complete details, criteria & documents',
    image: '/assets/icon-home-hd.jpg',
    applyLabel: 'Apply for Home Loan',
    guidance: 'Need guidance? Our Puducherry advisors are ready to assist with full documentation.',
    benefits: [
      'Attractive interest rates from top PSU & Private banks',
      'Longest repayment tenure up to 30 years',
      'PMAY Subsidy assistance & Balance Transfer facility',
      'Up to 80% to 90% property value financing'
    ],
    eligibility: [
      'Salaried & self-employed individuals',
      'Age between 21 and 65 years',
      'Stable source of regular income',
      'Clear legal title of the property'
    ],
    documents: [
      'Basic KYC (Applicant & Co-applicant): Aadhaar, PAN',
      'If both are salaried: Last 3 months payslips, last 6 months bank account statement',
      'If one is salaried & one is business (Salaried): Last 3 months payslips, last 6 months bank account statement',
      'If one is salaried & one is business (Business): Last 2 years IT papers, GST certificate, MSME certificate, last 1 year bank account statement (current/savings/OD)',
      'Property documents: Full set including mother document / parent document, patta, EC, house tax, EB bill, water tax',
      'For construction: Approval copy or plan and estimation copy',
      'Photos: 3 passport size photos each for applicant and co-applicant',
      'Note: Additional income (rental, home business, other business, agricultural, etc.) can also be considered with valid supporting documents as per lender policy.'
    ]
  },
  'personal-loan': {
    id: 'personal-loan',
    title: 'Personal Loan',
    badge: 'Instant Approval & Disbursal',
    subtitle: 'Easy access to personal funds • Complete details, criteria & documents',
    image: '/assets/icon-personal-laptop-hd.jpg',
    applyLabel: 'Apply for Personal Loan',
    guidance: 'Need funds quickly? Our Puducherry advisors are ready to assist with rapid approval.',
    benefits: [
      'No collateral or guarantor required',
      'Quick approval & disbursal within 24-48 hours',
      'Flexible repayment tenure from 12 to 60 months',
      'Competitive interest rates with minimal documentation'
    ],
    eligibility: [
      'Salaried employees & self-employed professionals',
      'Age between 21 and 60 years',
      'Minimum monthly net income of ₹20,000',
      'CIBIL score of 700+ preferred'
    ],
    documents: [
      'Aadhaar Card',
      'PAN Card',
      'Last 3 months payslips',
      'Last 6 months bank account statement',
      'Employee ID card',
      'Form 16'
    ]
  },
  'business-loan': {
    id: 'business-loan',
    title: 'Business Loan',
    badge: 'Up to ₹1 Crore Collateral-Free',
    subtitle: 'Scale your business ambitions • Complete details, criteria & documents',
    image: '/assets/icon-business-hd.jpg',
    applyLabel: 'Apply for Business Loan',
    guidance: 'Looking to expand? Our Puducherry advisors are ready to assist with customized business funding.',
    benefits: [
      'Loan amounts up to ₹1 Crore for eligible businesses',
      'Collateral-free CGTMSE options available',
      'Flexible EMI structures matching business cash flows',
      'Special schemes for MSMEs and Women Entrepreneurs'
    ],
    eligibility: [
      'Proprietorships, Partnerships & Pvt Ltd Companies',
      'Minimum 2 years of operational business vintage',
      'Annual business turnover of ₹20 Lakhs+',
      'Clean financial track record & banking history'
    ],
    documents: [
      'Basic KYC (Applicant & Co-applicant): Aadhaar, PAN',
      'Bank account statement (6 months or 1 year) - Current / Savings / OD',
      'Last 2 years IT papers',
      'GST certificate',
      'MSME certificate',
      'Selfie photo',
      'Own house proof'
    ]
  },
  'mortgage-loan': {
    id: 'mortgage-loan',
    title: 'Mortgage Loan',
    badge: 'Funding Up to 75% LTV',
    subtitle: 'Secured property financing • Complete details, criteria & documents',
    image: '/assets/icon-mortgage-hd.jpg',
    applyLabel: 'Apply for Mortgage Loan',
    guidance: 'Unlock property equity. Our Puducherry advisors are ready to assist with high-value mortgage financing.',
    benefits: [
      'High LTV funding up to 75% of market valuation',
      'Much lower interest rates compared to personal loans',
      'Extended repayment tenure up to 15 years',
      'Retain ownership while utilizing the property equity'
    ],
    eligibility: [
      'Individuals, business owners & property title holders',
      'Clear, marketable & unencumbered property title',
      'Adequate repayment capacity based on income',
      'Property located in Puducherry or Tamilnadu'
    ],
    documents: [
      'Basic KYC (Applicant & Co-applicant): Aadhaar, PAN',
      'If both are salaried: Last 3 months payslips, last 6 months bank account statement',
      'If one is salaried & one is business (Salaried): Last 3 months payslips, last 6 months bank account statement',
      'If one is salaried & one is business (Business): Last 2 years IT papers, GST certificate, MSME certificate, last 1 year bank account statement (current/savings/OD)',
      'Property documents: Full set including mother document / parent document, Patta, EC, house tax, EB bill, water tax',
      'Photos: 3 passport size photos each for applicant and co-applicant',
      'Note: Additional income (rental, home business, other business, agricultural, etc.) can also be submitted and considered as per lender policy.'
    ]
  },
  'working-capital': {
    id: 'working-capital',
    title: 'Working Capital',
    badge: 'OD / CC / UCL Facilities',
    subtitle: 'Fuel your daily business operations • Complete details, criteria & documents',
    image: '/assets/icon-capital-hd.jpg',
    applyLabel: 'Apply for Working Capital',
    guidance: 'Optimize business cash flow. Our Puducherry advisors are ready to assist with customized credit limits.',
    benefits: [
      'Flexible Overdraft (OD) & Cash Credit (CC) limits',
      'Pay interest only on the utilized amount, not sanctioned limit',
      'Smooth vendor payments, inventory purchase & payroll funding',
      'Easy annual renewal with credit enhancement options'
    ],
    eligibility: [
      'Manufacturers, traders, retailers, wholesalers & service providers',
      'Minimum 2 to 3 years of operational business vintage',
      'Healthy annual turnover with active current account history',
      'Satisfactory credit score (CIBIL 700+ preferred)'
    ],
    documents: [
      'Basic KYC (Applicant, Co-applicant, Partners or Directors): Aadhaar, PAN',
      'Bank account statement (last 12 months) - All Current, Savings & CC/OD accounts',
      'Last 2 to 3 years audited financials (Balance Sheet, P&L, ITR with computation)',
      'GST returns (last 12 months) & GST registration certificate',
      'Business registration: Partnership Deed / MOA & AOA / MSME Udyam Certificate',
      'Sanction letters of existing loan/OD/CC facilities (if applicable)',
      'Property collateral documents or stock statements (as per lender requirement)'
    ]
  },
  'health-insurance': {
    id: 'health-insurance',
    title: 'Health Insurance',
    badge: 'Cashless Hospitalization Across India',
    subtitle: 'Comprehensive medical protection • Complete plans, benefits & documents',
    image: '/assets/icon-health-hd.jpg',
    applyLabel: 'Get Health Insurance Quote',
    guidance: 'Protect your family against rising medical costs. Our Puducherry advisors are ready to assist.',
    card1: {
      icon: Sparkles,
      iconColor: 'text-[#d97706]',
      title: 'POPULAR POLICY OPTIONS',
      titleColor: 'text-[#8b1820]',
      borderColor: 'border-[#ffe2e6]',
      bg: 'bg-[#fff9fa]',
      border: 'border-[#ffe8eb]',
      bulletType: 'dot',
      dotColor: 'bg-[#8b1820]',
      items: [
        { title: 'Individual Health Cover', desc: 'Dedicated sum insured for single person medical protection.' },
        { title: 'Family Floater Health Plan', desc: 'Single umbrella policy covering spouse, children, and parents.' },
        { title: 'Senior Citizen Health Plan', desc: 'Tailored medical coverage for parents including pre-existing diseases.' },
        { title: 'Critical Illness Protection', desc: 'Lump sum payout upon diagnosis of major critical illnesses.' }
      ]
    },
    card2: {
      icon: CheckCircle2,
      iconColor: 'text-[#8b1820]',
      title: 'KEY BENEFITS & COVERAGE',
      titleColor: 'text-[#0f2d59]',
      borderColor: 'border-[#e2e8f0]',
      bg: 'bg-[#f8fafc]',
      border: 'border-[#e2e8f0]',
      bulletType: 'check',
      checkColor: 'text-[#8b1820]',
      items: [
        'Extensive cashless hospital network across India',
        'Pre- and post-hospitalization expenses, as specified in the policy',
        'Tax deduction under Section 80D, as per applicable tax rules',
        'Cumulative No Claim Bonus (NCB) booster, subject to policy terms'
      ]
    },
    card3: {
      icon: FileText,
      iconColor: 'text-[#a16207]',
      title: 'DOCUMENTS REQUIRED',
      titleColor: 'text-[#a16207]',
      borderColor: 'border-[#fef08a]/60',
      bg: 'bg-[#fffcf3]',
      border: 'border-[#fef08a]/80',
      bulletType: 'check',
      checkColor: 'text-[#a16207]',
      items: [
        'Aadhaar Card & PAN Card of proposer',
        'Age proof & medical history details of insured members',
        'Past medical records / prescriptions (if any pre-existing disease)',
        'Passport size photograph'
      ]
    }
  },
  'life-insurance': {
    id: 'life-insurance',
    title: 'Life Insurance',
    badge: 'High Sum Assured Protection',
    subtitle: "Secure your family's financial future • Complete plans, benefits & documents",
    image: '/assets/icon-life-hd.jpg',
    applyLabel: 'Get Life Insurance Quote',
    guidance: "Safeguard your loved ones' dreams. Our Puducherry advisors are ready to help you choose the ideal plan.",
    card1: {
      icon: Sparkles,
      iconColor: 'text-[#d97706]',
      title: 'POPULAR POLICY OPTIONS',
      titleColor: 'text-[#8b1820]',
      borderColor: 'border-[#ffe2e6]',
      bg: 'bg-[#fff9fa]',
      border: 'border-[#ffe8eb]',
      bulletType: 'dot',
      dotColor: 'bg-[#8b1820]',
      items: [
        { title: 'Term Life Insurance', desc: 'High financial cover at competitive premiums for peace of mind.' },
        { title: 'Guaranteed Savings Plans', desc: 'Family protection combined with assured benefits, subject to policy terms.' },
        { title: 'Child Education Plans', desc: "Ensure your child's dream education funding even in your absence." },
        { title: 'Retirement & Pension Plans', desc: 'Planned monthly income to enjoy your golden post-retirement years.' }
      ]
    },
    card2: {
      icon: CheckCircle2,
      iconColor: 'text-[#8b1820]',
      title: 'KEY BENEFITS & COVERAGE',
      titleColor: 'text-[#0f2d59]',
      borderColor: 'border-[#e2e8f0]',
      bg: 'bg-[#f8fafc]',
      border: 'border-[#e2e8f0]',
      bulletType: 'check',
      checkColor: 'text-[#8b1820]',
      items: [
        'High sum assured options at competitive premiums',
        'Tax benefits and guaranteed/assured benefits, subject to policy terms and applicable tax laws',
        'Critical illness & accidental death benefit riders',
        'Dedicated claim assistance throughout the claim process'
      ]
    },
    card3: {
      icon: FileText,
      iconColor: 'text-[#a16207]',
      title: 'DOCUMENTS REQUIRED',
      titleColor: 'text-[#a16207]',
      borderColor: 'border-[#fef08a]/60',
      bg: 'bg-[#fffcf3]',
      border: 'border-[#fef08a]/80',
      bulletType: 'check',
      checkColor: 'text-[#a16207]',
      items: [
        'Aadhaar Card & PAN Card',
        'Last 3 months payslips or 2 years ITR (Income proof)',
        'Last 6 months bank account statement',
        'Recent passport size photograph'
      ]
    }
  },
  'term-insurance': {
    id: 'term-insurance',
    title: 'Term Insurance',
    badge: 'Pure High-Cover Life Protection',
    subtitle: 'Maximum financial security for family at nominal premiums • Complete plans, benefits & documents',
    image: '/assets/icon-term-hd.jpg',
    applyLabel: 'Get Term Insurance Quote',
    guidance: 'Ensure your family is financially secure. Our Puducherry advisors are ready to help you find the highest cover at lowest rates.',
    card1: {
      icon: Sparkles,
      iconColor: 'text-[#d97706]',
      title: 'POPULAR POLICY OPTIONS',
      titleColor: 'text-[#8b1820]',
      borderColor: 'border-[#ffe2e6]',
      bg: 'bg-[#fff9fa]',
      border: 'border-[#ffe8eb]',
      bulletType: 'dot',
      dotColor: 'bg-[#8b1820]',
      items: [
        { title: 'Pure Level Term Plan', desc: 'Constant high sum assured payout throughout policy tenure.' },
        { title: 'Return of Premium (TROP)', desc: '100% of all paid premiums refunded upon surviving policy term.' },
        { title: 'Increasing Sum Assured', desc: 'Cover automatically increases annually to counteract inflation.' },
        { title: 'Income Replacement Option', desc: 'Monthly staggered payouts to support family household expenses.' }
      ]
    },
    card2: {
      icon: CheckCircle2,
      iconColor: 'text-[#8b1820]',
      title: 'KEY BENEFITS & COVERAGE',
      titleColor: 'text-[#0f2d59]',
      borderColor: 'border-[#e2e8f0]',
      bg: 'bg-[#f8fafc]',
      border: 'border-[#e2e8f0]',
      bulletType: 'check',
      checkColor: 'text-[#8b1820]',
      items: [
        'Up to ₹1 Crore+ life cover starting at affordable monthly premiums',
        'Add-on riders: Critical Illness, Accidental Total Disability & Terminal Illness',
        'Tax deductions under Section 80C & tax-free claim payouts under 10(10D)',
        'Quick policy issuance with paperless KYC and prompt claim settlement'
      ]
    },
    card3: {
      icon: FileText,
      iconColor: 'text-[#a16207]',
      title: 'DOCUMENTS REQUIRED',
      titleColor: 'text-[#a16207]',
      borderColor: 'border-[#fef08a]/60',
      bg: 'bg-[#fffcf3]',
      border: 'border-[#fef08a]/80',
      bulletType: 'check',
      checkColor: 'text-[#a16207]',
      items: [
        'Aadhaar Card & PAN Card of applicant',
        'Last 3 months salary slips or last 2 years ITR with computation',
        'Last 6 months bank account statements',
        'Recent passport size photograph'
      ]
    }
  },
  'vehicle-insurance': {
    id: 'vehicle-insurance',
    title: 'Vehicle Insurance',
    badge: 'Instant Policy Issuance & Cashless Claims',
    subtitle: 'Comprehensive coverage for 2-wheelers, 4-wheelers & commercial fleets • Complete plans, benefits & documents',
    image: '/assets/icon-vehicle-hd.jpg',
    applyLabel: 'Get Vehicle Insurance Quote',
    guidance: 'Drive with complete peace of mind. Our Puducherry advisors are ready to assist with instant policy generation.',
    card1: {
      icon: Sparkles,
      iconColor: 'text-[#d97706]',
      title: 'POPULAR POLICY OPTIONS',
      titleColor: 'text-[#8b1820]',
      borderColor: 'border-[#ffe2e6]',
      bg: 'bg-[#fff9fa]',
      border: 'border-[#ffe8eb]',
      bulletType: 'dot',
      dotColor: 'bg-[#8b1820]',
      items: [
        { title: 'Comprehensive Motor Plan', desc: 'Complete protection against accidents, theft, fire & third-party liabilities.' },
        { title: 'Zero Depreciation (Bumper to Bumper)', desc: 'Full claim payout without any deduction for depreciation of vehicle parts.' },
        { title: 'Third-Party Liability Only', desc: 'Mandatory legal protection covering property damage & bodily injury to others.' },
        { title: 'Commercial Vehicle & Fleet Cover', desc: 'Tailored protection for taxis, trucks, delivery vans and commercial autos.' }
      ]
    },
    card2: {
      icon: CheckCircle2,
      iconColor: 'text-[#8b1820]',
      title: 'KEY BENEFITS & COVERAGE',
      titleColor: 'text-[#0f2d59]',
      borderColor: 'border-[#e2e8f0]',
      bg: 'bg-[#f8fafc]',
      border: 'border-[#e2e8f0]',
      bulletType: 'check',
      checkColor: 'text-[#8b1820]',
      items: [
        'Network of 5,000+ cashless network garages across India and Puducherry',
        'Essential add-ons: Engine Protector, Roadside Assistance, Tyre & Consumables cover',
        'Seamless No Claim Bonus (NCB) transfer up to 50% from prior insurer',
        'Instant digital policy renewal with zero inspection for unexpired policies'
      ]
    },
    card3: {
      icon: FileText,
      iconColor: 'text-[#a16207]',
      title: 'DOCUMENTS REQUIRED',
      titleColor: 'text-[#a16207]',
      borderColor: 'border-[#fef08a]/60',
      bg: 'bg-[#fffcf3]',
      border: 'border-[#fef08a]/80',
      bulletType: 'check',
      checkColor: 'text-[#a16207]',
      items: [
        'Vehicle Registration Certificate (RC Book / Smart Card)',
        'Previous year insurance policy copy (for renewals & NCB verification)',
        'Aadhaar Card & PAN Card of vehicle owner',
        'Driving license copy of owner/driver'
      ]
    }
  },
  'stock-insurance': {
    id: 'stock-insurance',
    title: 'Stock Insurance',
    badge: 'Inventory & Goods-in-Storage Shield',
    subtitle: 'Protect valuable stock, raw materials & finished goods • Complete plans, benefits & documents',
    image: '/assets/icon-stock-hd.jpg',
    applyLabel: 'Get Stock Insurance Quote',
    guidance: 'Shield your working capital inventory. Our Puducherry advisors provide tailored stock valuation and risk cover.',
    card1: {
      icon: Sparkles,
      iconColor: 'text-[#d97706]',
      title: 'POPULAR POLICY OPTIONS',
      titleColor: 'text-[#8b1820]',
      borderColor: 'border-[#ffe2e6]',
      bg: 'bg-[#fff9fa]',
      border: 'border-[#ffe8eb]',
      bulletType: 'dot',
      dotColor: 'bg-[#8b1820]',
      items: [
        { title: 'Floater Stock Policy', desc: 'Single policy covering fluctuating inventory stored across multiple godowns.' },
        { title: 'Declaration Policy', desc: 'Pay premiums based on monthly average stock value reports for seasonal trade.' },
        { title: 'Fire & Special Perils Cover', desc: 'Protection against fire, storm, flood, cyclone, lightning & explosion damages.' },
        { title: 'Burglary & Housebreaking Protection', desc: 'Security against forceful break-in, theft and hold-up losses.' }
      ]
    },
    card2: {
      icon: CheckCircle2,
      iconColor: 'text-[#8b1820]',
      title: 'KEY BENEFITS & COVERAGE',
      titleColor: 'text-[#0f2d59]',
      borderColor: 'border-[#e2e8f0]',
      bg: 'bg-[#f8fafc]',
      border: 'border-[#e2e8f0]',
      bulletType: 'check',
      checkColor: 'text-[#8b1820]',
      items: [
        'Comprehensive coverage for raw materials, semi-finished & finished stock',
        'Protection against natural calamities (STFI), riots, strikes and malicious damages',
        'Cover for goods in transit between godowns and retail distribution points',
        'Fast-track surveyor deputation and transparent claim settlements'
      ]
    },
    card3: {
      icon: FileText,
      iconColor: 'text-[#a16207]',
      title: 'DOCUMENTS REQUIRED',
      titleColor: 'text-[#a16207]',
      borderColor: 'border-[#fef08a]/60',
      bg: 'bg-[#fffcf3]',
      border: 'border-[#fef08a]/80',
      bulletType: 'check',
      checkColor: 'text-[#a16207]',
      items: [
        'GST Registration Certificate & Business PAN Card',
        'Latest stock inventory statement / stock register book',
        'Previous 2 years audited balance sheets & financial statements',
        'Rental agreement or ownership proof of godown / warehouse',
        'Basic KYC of business owner / partner / director (Aadhaar & PAN)'
      ]
    }
  },
  'shop-insurance': {
    id: 'shop-insurance',
    title: 'Shop Insurance',
    badge: 'All-in-One Retail Business Package',
    subtitle: 'Protect retail store structure, interior, stock & public liability • Complete plans, benefits & documents',
    image: '/assets/icon-shop-hd.jpg',
    applyLabel: 'Get Shop Insurance Quote',
    guidance: 'Keep your retail business safe and sound. Our Puducherry advisors provide on-site evaluation and custom policies.',
    card1: {
      icon: Sparkles,
      iconColor: 'text-[#d97706]',
      title: 'POPULAR POLICY OPTIONS',
      titleColor: 'text-[#8b1820]',
      borderColor: 'border-[#ffe2e6]',
      bg: 'bg-[#fff9fa]',
      border: 'border-[#ffe8eb]',
      bulletType: 'dot',
      dotColor: 'bg-[#8b1820]',
      items: [
        { title: 'Retail Shopkeeper Package', desc: 'Unified package covering building, furniture, signage, glass & contents.' },
        { title: 'Money-in-Transit & Safe Cover', desc: 'Protection against cash theft from cashier counter, safe or during bank deposit.' },
        { title: 'Public Liability Insurance', desc: 'Shield against legal claims for accidental injury to customers inside premises.' },
        { title: 'Electronic Equipment & Appliance Cover', desc: 'Protection for POS billing systems, CCTV, computers, ACs and freezers.' }
      ]
    },
    card2: {
      icon: CheckCircle2,
      iconColor: 'text-[#8b1820]',
      title: 'KEY BENEFITS & COVERAGE',
      titleColor: 'text-[#0f2d59]',
      borderColor: 'border-[#e2e8f0]',
      bg: 'bg-[#f8fafc]',
      border: 'border-[#e2e8f0]',
      bulletType: 'check',
      checkColor: 'text-[#8b1820]',
      items: [
        'All-risk coverage against fire, lightning, flooding, cyclone and burglary',
        'Accidental breakage cover for plate glass windows and neon signboards',
        'Protection for employee dishonesty (Fidelity Guarantee) and business interruption',
        'Cost-effective combined policy with hassle-free single premium payment'
      ]
    },
    card3: {
      icon: FileText,
      iconColor: 'text-[#a16207]',
      title: 'DOCUMENTS REQUIRED',
      titleColor: 'text-[#a16207]',
      borderColor: 'border-[#fef08a]/60',
      bg: 'bg-[#fffcf3]',
      border: 'border-[#fef08a]/80',
      bulletType: 'check',
      checkColor: 'text-[#a16207]',
      items: [
        'Shop & Establishment License / Trade License / Municipal Tax receipt',
        'Business GST Certificate & Business PAN Card',
        'Shop rental lease agreement or property ownership proof',
        'Approximate asset list (fixtures, electronic equipment, stock estimate)',
        'Basic KYC of proprietor / partners (Aadhaar & PAN)'
      ]
    }
  },
  'property-insurance': {
    id: 'property-insurance',
    title: 'Property Insurance',
    badge: 'Residential & Commercial Asset Shield',
    subtitle: 'Comprehensive physical protection for buildings, homes & contents • Complete plans, benefits & documents',
    image: '/assets/icon-property-hd.jpg',
    applyLabel: 'Get Property Insurance Quote',
    guidance: 'Preserve your valuable real estate assets. Our Puducherry advisors are ready to customize structural and contents coverage.',
    card1: {
      icon: Sparkles,
      iconColor: 'text-[#d97706]',
      title: 'POPULAR POLICY OPTIONS',
      titleColor: 'text-[#8b1820]',
      borderColor: 'border-[#ffe2e6]',
      bg: 'bg-[#fff9fa]',
      border: 'border-[#ffe8eb]',
      bulletType: 'dot',
      dotColor: 'bg-[#8b1820]',
      items: [
        { title: 'Home Structure & Contents Policy', desc: 'Complete protection for residential building together with valuable household goods.' },
        { title: 'Commercial Building Cover', desc: 'Asset security for office complexes, shopping centers, hotels and schools.' },
        { title: 'Industrial All-Risk (IAR) Policy', desc: 'Large-scale manufacturing plant, machinery breakdown and factory protection.' },
        { title: 'Tenant Protection Plan', desc: 'Dedicated coverage for internal furniture, electronics and rented home contents.' }
      ]
    },
    card2: {
      icon: CheckCircle2,
      iconColor: 'text-[#8b1820]',
      title: 'KEY BENEFITS & COVERAGE',
      titleColor: 'text-[#0f2d59]',
      borderColor: 'border-[#e2e8f0]',
      bg: 'bg-[#f8fafc]',
      border: 'border-[#e2e8f0]',
      bulletType: 'check',
      checkColor: 'text-[#8b1820]',
      items: [
        'Natural catastrophe protection against earthquakes, cyclones, floods and lightning',
        'Structural damage cover for explosion, aircraft damage, burst water pipes and fire',
        'Reinstatement value basis ensuring full reconstruction cost reimbursement',
        'Alternative accommodation expense reimbursement during building repair period'
      ]
    },
    card3: {
      icon: FileText,
      iconColor: 'text-[#a16207]',
      title: 'DOCUMENTS REQUIRED',
      titleColor: 'text-[#a16207]',
      borderColor: 'border-[#fef08a]/60',
      bg: 'bg-[#fffcf3]',
      border: 'border-[#fef08a]/80',
      bulletType: 'check',
      checkColor: 'text-[#a16207]',
      items: [
        'Property title deed / Mother document / Patta copy or Approved building plan',
        'Recent property tax / House tax receipt or Electricity (EB) bill',
        'Valuation report or carpet / built-up area measurement details',
        'List of valuable contents, equipment or machinery (if contents covered)',
        'Basic KYC of property owner (Aadhaar Card, PAN Card & Photos)'
      ]
    }
  }
};

function getCardConfig(modalData) {
  if (!modalData) return null;
  if (modalData.card1) {
    return {
      card1: modalData.card1,
      card2: modalData.card2,
      card3: modalData.card3,
    };
  }
  return {
    card1: {
      icon: Sparkles,
      iconColor: 'text-[#d97706]',
      title: 'KEY BENEFITS & FEATURES',
      titleColor: 'text-[#8b1820]',
      borderColor: 'border-[#ffe2e6]',
      bg: 'bg-[#fff9fa]',
      border: 'border-[#ffe8eb]',
      bulletType: 'check',
      checkColor: 'text-[#8b1820]',
      items: modalData.benefits || []
    },
    card2: {
      icon: User,
      iconColor: 'text-[#0f2d59]',
      title: 'ELIGIBILITY CRITERIA',
      titleColor: 'text-[#0f2d59]',
      borderColor: 'border-[#e2e8f0]',
      bg: 'bg-[#f8fafc]',
      border: 'border-[#e2e8f0]',
      bulletType: 'dot',
      dotColor: 'bg-[#0f2d59]',
      items: modalData.eligibility || []
    },
    card3: {
      icon: FileText,
      iconColor: 'text-[#a16207]',
      title: 'DOCUMENTS REQUIRED',
      titleColor: 'text-[#a16207]',
      borderColor: 'border-[#fef08a]/60',
      bg: 'bg-[#fffcf3]',
      border: 'border-[#fef08a]/80',
      bulletType: 'check',
      checkColor: 'text-[#a16207]',
      items: modalData.documents || []
    }
  };
}

export default function SolutionsSection() {
  const [showAllLoans, setShowAllLoans] = useState(false);
  const [showAllInsurance, setShowAllInsurance] = useState(false);
  const [activeModalId, setActiveModalId] = useState(null);

  const displayedLoans = showAllLoans ? loanProducts : loanProducts.slice(0, 4);
  const displayedInsurance = showAllInsurance ? insuranceProducts : insuranceProducts.slice(0, 4);

  const currentModalData = activeModalId ? serviceModalDetails[activeModalId] : null;
  const cardsConfig = getCardConfig(currentModalData);

  // Close modal on Escape key and manage body overflow lock
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setActiveModalId(null);
      }
    }
    if (activeModalId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalId]);

  const handleCardClick = (item) => {
    if (serviceModalDetails[item.id]) {
      setActiveModalId(item.id);
    } else {
      // Smoothly navigate to free consultation and pre-select service
      window.dispatchEvent(new CustomEvent('select-service', { detail: item.id }));
      const consultationEl = document.getElementById('free-consultation');
      if (consultationEl) {
        consultationEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleApplyClick = (serviceId) => {
    setActiveModalId(null);
    window.dispatchEvent(new CustomEvent('select-service', { detail: serviceId }));
    const consultationEl = document.getElementById('free-consultation');
    if (consultationEl) {
      consultationEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full px-2.5 xs:px-3.5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 md:py-10">
      <div className="w-full max-w-[1720px] mx-auto">
        
        {/* ================= 1. SECTION HEADER (Centered) ================= */}
        <div className="flex flex-col items-center text-center mb-5 sm:mb-7 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight text-[#004737]">
            Our Services
          </h2>
          {/* Golden accent dash */}
          <div className="w-10 h-[2.5px] bg-[#d97706] rounded-full mt-1.5 mb-1.5" />
          <p className="text-xs sm:text-[13px] md:text-sm text-gray-500 font-normal">
            Complete financial solutions for every stage of life.
          </p>
        </div>

        {/* ================= 2. TWO SIDE-BY-SIDE PANELS (Equal 50/50 balance) ================= */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 lg:gap-5 xl:gap-6 items-stretch w-full">
          
          {/* ================= LOANS PANEL (4 in row, View All expandable) ================= */}
          <div 
            id="loan-solutions" 
            className="flex-1 lg:w-1/2 bg-[#fcfbf7] border border-[#ede7dc] rounded-2xl md:rounded-[24px] p-3.5 sm:p-4.5 md:p-5 lg:p-6 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)] scroll-mt-24 transition-all duration-300"
          >
            <div>
              {/* Header with View All Toggle Button */}
              <div className="flex items-center justify-between gap-3 mb-4 sm:mb-4.5">
                <div className="flex items-center gap-3">
                  <img 
                    src="/assets/header-loan-coins-hd.jpg" 
                    alt="Loan Services" 
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain flex-shrink-0 drop-shadow-2xs mix-blend-multiply" 
                  />
                  <div>
                    <h3 className="text-base sm:text-lg md:text-[20px] font-bold text-[#004737] tracking-tight leading-snug">
                      Loans
                    </h3>
                    <p className="text-[11.5px] sm:text-xs text-gray-500 leading-tight mt-0.5">
                      Flexible loan solutions to help you achieve your dreams.
                    </p>
                  </div>
                </div>

                {/* View All (5) / Show Less Toggle Button */}
                {loanProducts.length > 4 && (
                  <button
                    type="button"
                    onClick={() => setShowAllLoans(prev => !prev)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004737] hover:text-[#c98218] bg-[#e6f4ed] hover:bg-[#d5ede0] active:scale-95 px-3 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap shadow-2xs"
                    title={showAllLoans ? "Show only top 4" : "View all loan services"}
                  >
                    <span>{showAllLoans ? 'Show Less' : `View All (${loanProducts.length})`}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showAllLoans ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>

              {/* 4 Cards in a Row Grid (Expandable) */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-3.5">
                {displayedLoans.map((item) => {
                  const hasModal = Boolean(serviceModalDetails[item.id]);
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleCardClick(item)}
                      className="group bg-white rounded-xl sm:rounded-2xl p-2.5 xs:p-3 sm:p-3 md:p-3.5 pt-3.5 pb-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#edebe7] hover:border-[#f3cca0] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-between text-center cursor-pointer min-h-[152px] xs:min-h-[160px] animate-in fade-in-50 duration-200 relative"
                      title={hasModal ? `Click to view ${item.title} details & documents` : `Learn more about ${item.title}`}
                    >
                      {/* Badge indicator on cards with details modal */}
                      {hasModal && (
                        <div className="absolute top-2 right-2 text-[9px] font-bold text-[#b45309] bg-[#fefce8] px-1.5 py-0.5 rounded-full border border-[#fef08a] shadow-2xs opacity-90 group-hover:opacity-100 transition-opacity">
                          Details
                        </div>
                      )}

                      <div className="w-full flex items-center justify-center h-14 xs:h-16 sm:h-18 mb-1.5">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-2xs"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex flex-col items-center my-auto px-0.5 w-full">
                        <h4 className="text-[11.5px] xs:text-xs sm:text-[13px] font-bold text-[#004737] group-hover:text-[#c98218] transition-colors leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[9.5px] xs:text-[10.5px] text-gray-500 leading-tight mt-1 max-w-[130px]">
                          {item.subtitle}
                        </p>
                      </div>

                      <div className="mt-2.5 w-5 h-5 rounded-full border border-[#f3cca0] bg-[#fffaf3] text-[#d97706] group-hover:bg-[#d97706] group-hover:border-[#d97706] group-hover:text-white transition-all flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-2.5 h-2.5" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================= INSURANCE PANEL (4 in row, View All expandable) ================= */}
          <div 
            id="insurance-solutions" 
            className="flex-1 lg:w-1/2 bg-[#fcfbf7] border border-[#ede7dc] rounded-2xl md:rounded-[24px] p-3.5 sm:p-4.5 md:p-5 lg:p-6 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)] scroll-mt-24 transition-all duration-300"
          >
            <div>
              {/* Header with View All Toggle Button */}
              <div className="flex items-center justify-between gap-3 mb-4 sm:mb-4.5">
                <div className="flex items-center gap-3">
                  <img 
                    src="/assets/header-insurance-shield-hd.jpg" 
                    alt="Insurance Services" 
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain flex-shrink-0 drop-shadow-2xs mix-blend-multiply" 
                  />
                  <div>
                    <h3 className="text-base sm:text-lg md:text-[20px] font-bold text-[#004737] tracking-tight leading-snug">
                      Insurance 
                    </h3>
                    <p className="text-[11.5px] sm:text-xs text-gray-500 leading-tight mt-0.5">
                      Comprehensive insurance plans for a secure tomorrow.
                    </p>
                  </div>
                </div>

                {/* View All (7) / Show Less Toggle Button */}
                {insuranceProducts.length > 4 && (
                  <button
                    type="button"
                    onClick={() => setShowAllInsurance(prev => !prev)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004737] hover:text-[#c98218] bg-[#e6f4ed] hover:bg-[#d5ede0] active:scale-95 px-3 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap shadow-2xs"
                    title={showAllInsurance ? "Show only top 4" : "View all insurance services"}
                  >
                    <span>{showAllInsurance ? 'Show Less' : `View All (${insuranceProducts.length})`}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showAllInsurance ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>

              {/* 4 Cards in a Row Grid (Expandable) */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-3.5">
                {displayedInsurance.map((item) => {
                  const hasModal = Boolean(serviceModalDetails[item.id]);
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleCardClick(item)}
                      className="group bg-white rounded-xl sm:rounded-2xl p-2.5 xs:p-3 sm:p-3 md:p-3.5 pt-3.5 pb-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#edebe7] hover:border-[#f3cca0] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-between text-center cursor-pointer min-h-[152px] xs:min-h-[160px] animate-in fade-in-50 duration-200 relative"
                      title={hasModal ? `Click to view ${item.title} details & documents` : `Learn more about ${item.title}`}
                    >
                      {/* Badge indicator on cards with details modal */}
                      {hasModal && (
                        <div className="absolute top-2 right-2 text-[9px] font-bold text-[#b45309] bg-[#fefce8] px-1.5 py-0.5 rounded-full border border-[#fef08a] shadow-2xs opacity-90 group-hover:opacity-100 transition-opacity">
                          Details
                        </div>
                      )}

                      <div className="w-full flex items-center justify-center h-14 xs:h-16 sm:h-18 mb-1.5">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-2xs"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex flex-col items-center my-auto px-0.5 w-full">
                        <h4 className="text-[11.5px] xs:text-xs sm:text-[13px] font-bold text-[#004737] group-hover:text-[#c98218] transition-colors leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[9.5px] xs:text-[10.5px] text-gray-500 leading-tight mt-1 max-w-[130px]">
                          {item.subtitle}
                        </p>
                      </div>

                      <div className="mt-2.5 w-5 h-5 rounded-full border border-[#f3cca0] bg-[#fffaf3] text-[#d97706] group-hover:bg-[#d97706] group-hover:border-[#d97706] group-hover:text-white transition-all flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-2.5 h-2.5" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ================= DETAILS MODAL WITH EXACT 3-CARD LAYOUT ================= */}
      {currentModalData && cardsConfig && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center p-3 xs:p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-modal-backdrop"
          onClick={() => setActiveModalId(null)}
        >
          {/* Modal Container */}
          <div 
            className="w-full max-w-5xl xl:max-w-6xl bg-white rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,71,55,0.4)] border border-[#ede7dc] overflow-hidden flex flex-col max-h-[94vh] animate-modal-content relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 1. MODAL HEADER */}
            <div className="bg-gradient-to-r from-[#003d2f] via-[#004737] to-[#015240] text-white p-3.5 sm:p-4 md:p-5 relative flex items-center justify-between border-b border-white/10 shadow-xs flex-shrink-0">
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-1 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <img 
                    src={currentModalData.image} 
                    alt={currentModalData.title} 
                    className="max-h-full max-w-full object-contain drop-shadow-xs"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-xl md:text-2xl font-bold tracking-tight text-white leading-tight">
                      {currentModalData.title}
                    </h3>
                    <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider bg-[#d97706] text-white px-2 py-0.5 rounded-full shadow-2xs">
                      {currentModalData.badge}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs md:text-[13px] text-emerald-100/85 leading-tight mt-0.5 truncate">
                    {currentModalData.subtitle}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalId(null)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer flex-shrink-0 active:scale-95 ml-2"
                title="Close (Esc)"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* 2. MODAL BODY (3-Card Layout matching user reference) */}
            <div className="p-3.5 sm:p-5 md:p-6 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#c2d6ce_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-[#004737]/30 [&::-webkit-scrollbar-thumb]:rounded-full flex-1">
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 md:gap-4.5 xl:gap-5 items-stretch">
                
                {/* ================= CARD 1 ================= */}
                <div className={`${cardsConfig.card1.bg} border ${cardsConfig.card1.border} rounded-2xl md:rounded-[22px] p-4 sm:p-5 shadow-xs flex flex-col justify-start`}>
                  {/* Card Header */}
                  <div className={`flex items-center gap-2 pb-3 border-b ${cardsConfig.card1.borderColor}`}>
                    {React.createElement(cardsConfig.card1.icon, {
                      className: `w-4 h-4 ${cardsConfig.card1.iconColor} flex-shrink-0`
                    })}
                    <h4 className={`text-xs sm:text-[13px] font-bold ${cardsConfig.card1.titleColor} tracking-wider uppercase`}>
                      {cardsConfig.card1.title}
                    </h4>
                  </div>

                  {/* Items List */}
                  <div className="mt-3.5 space-y-3">
                    {cardsConfig.card1.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        {cardsConfig.card1.bulletType === 'dot' ? (
                          <span className={`w-1.5 h-1.5 rounded-full ${cardsConfig.card1.dotColor || 'bg-[#8b1820]'} flex-shrink-0 mt-1.5`} />
                        ) : (
                          <CheckCircle2 className={`w-4 h-4 ${cardsConfig.card1.checkColor || 'text-[#8b1820]'} flex-shrink-0 mt-0.5`} strokeWidth={2.2} />
                        )}
                        {typeof item === 'string' ? (
                          <span className="text-xs sm:text-[12.5px] text-gray-800 leading-snug font-medium">
                            {item}
                          </span>
                        ) : (
                          <div className="flex flex-col">
                            <span className="text-xs sm:text-[12.5px] font-bold text-gray-900 leading-tight">
                              {item.title}
                            </span>
                            <span className="text-[11px] sm:text-xs text-gray-600 leading-tight mt-0.5">
                              {item.desc}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ================= CARD 2 ================= */}
                <div className={`${cardsConfig.card2.bg} border ${cardsConfig.card2.border} rounded-2xl md:rounded-[22px] p-4 sm:p-5 shadow-xs flex flex-col justify-start`}>
                  {/* Card Header */}
                  <div className={`flex items-center gap-2 pb-3 border-b ${cardsConfig.card2.borderColor}`}>
                    {React.createElement(cardsConfig.card2.icon, {
                      className: `w-4 h-4 ${cardsConfig.card2.iconColor} flex-shrink-0`
                    })}
                    <h4 className={`text-xs sm:text-[13px] font-bold ${cardsConfig.card2.titleColor} tracking-wider uppercase`}>
                      {cardsConfig.card2.title}
                    </h4>
                  </div>

                  {/* Items List */}
                  <div className="mt-3.5 space-y-3">
                    {cardsConfig.card2.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        {cardsConfig.card2.bulletType === 'dot' ? (
                          <span className={`w-1.5 h-1.5 rounded-full ${cardsConfig.card2.dotColor || 'bg-[#0f2d59]'} flex-shrink-0 mt-1.5`} />
                        ) : (
                          <CheckCircle2 className={`w-4 h-4 ${cardsConfig.card2.checkColor || 'text-[#8b1820]'} flex-shrink-0 mt-0.5`} strokeWidth={2.2} />
                        )}
                        <span className="text-xs sm:text-[12.5px] text-gray-800 leading-snug font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ================= CARD 3 ================= */}
                <div className={`${cardsConfig.card3.bg} border ${cardsConfig.card3.border} rounded-2xl md:rounded-[22px] p-4 sm:p-5 shadow-xs flex flex-col justify-start`}>
                  {/* Card Header */}
                  <div className={`flex items-center gap-2 pb-3 border-b ${cardsConfig.card3.borderColor}`}>
                    {React.createElement(cardsConfig.card3.icon, {
                      className: `w-4 h-4 ${cardsConfig.card3.iconColor} flex-shrink-0`
                    })}
                    <h4 className={`text-xs sm:text-[13px] font-bold ${cardsConfig.card3.titleColor} tracking-wider uppercase`}>
                      {cardsConfig.card3.title}
                    </h4>
                  </div>

                  {/* Items List */}
                  <div className={`mt-3.5 ${cardsConfig.card3.items.some(d => (typeof d === 'string' ? d.length > 75 : false)) ? 'space-y-2.5' : 'space-y-3'}`}>
                    {cardsConfig.card3.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 ${cardsConfig.card3.checkColor || 'text-[#a16207]'} flex-shrink-0 mt-0.5`} strokeWidth={2.2} />
                        <span className={`${cardsConfig.card3.items.some(d => (typeof d === 'string' ? d.length > 75 : false)) ? 'text-[11px] sm:text-[11.5px]' : 'text-xs sm:text-[12.5px]'} text-gray-800 leading-snug font-medium`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* 3. MODAL FOOTER */}
            <div className="bg-[#fcfbf7] border-t border-[#ede7dc] px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2.5 flex-shrink-0">
              <div className="text-[11px] sm:text-xs text-gray-500 text-center sm:text-left">
                {currentModalData.guidance}
              </div>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveModalId(null)}
                  className="w-1/2 sm:w-auto px-4 py-2 text-xs font-bold text-gray-700 hover:text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 rounded-xl transition-all cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#free-consultation"
                  onClick={() => handleApplyClick(currentModalData.id)}
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#004737] hover:bg-[#00362a] active:scale-95 text-white text-xs sm:text-[12.5px] font-bold px-4 sm:px-5 py-2 rounded-xl shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>{currentModalData.applyLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
