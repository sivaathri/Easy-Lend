import React, { useState, useRef, useEffect } from 'react';
import { 
  User, 
  Phone, 
  LayoutGrid, 
  ChevronDown, 
  ArrowRight, 
  Check, 
  RotateCcw,
  ShieldCheck,
  HeartHandshake,
  Users,
  Send
} from 'lucide-react';

const serviceGroups = [
  {
    category: 'Loans',
    badgeColor: 'bg-[#e6f4ed] text-[#004737]',
    items: [
      { id: 'home-loan', name: 'Home Loan', image: '/assets/icon-home-hd.jpg', desc: 'Fulfill dream of a home' },
      { id: 'personal-loan', name: 'Personal Loan', image: '/assets/icon-personal-laptop-hd.jpg', desc: 'Easy access to personal funds' },
      { id: 'business-loan', name: 'Business Loan', image: '/assets/icon-business-hd.jpg', desc: 'Scale business ambitions' },
      { id: 'mortgage-loan', name: 'Mortgage Loan', image: '/assets/icon-mortgage-hd.jpg', desc: 'Secured property financing' },
      { id: 'working-capital', name: 'Working Capital', image: '/assets/icon-capital-hd.jpg', desc: 'OD / CC / UCL for your business' }
    ]
  },
  {
    category: 'Insurance',
    badgeColor: 'bg-[#fef5e7] text-[#b87a14]',
    items: [
      { id: 'health-insurance', name: 'Health Insurance', image: '/assets/icon-health-hd.jpg', desc: 'Comprehensive medical cover' },
      { id: 'life-insurance', name: 'Life Insurance', image: '/assets/icon-life-hd.jpg', desc: "Secure your family's future" },
      { id: 'term-insurance', name: 'Term Insurance', image: '/assets/icon-term-hd.jpg', desc: 'Life coverage for your family' },
      { id: 'vehicle-insurance', name: 'Vehicle Insurance', image: '/assets/icon-vehicle-hd.jpg', desc: 'Complete journey security' },
      { id: 'stock-insurance', name: 'Stock Insurance', image: '/assets/icon-stock-hd.jpg', desc: 'Protect inventory & goods' },
      { id: 'shop-insurance', name: 'Shop Insurance', image: '/assets/icon-shop-hd.jpg', desc: 'Secure your retail business' },
      { id: 'property-insurance', name: 'Property Insurance', image: '/assets/icon-property-hd.jpg', desc: 'Asset & property security' }
    ]
  }
];

export default function FreeConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: null
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectService = (srv) => {
    setFormData(prev => ({ ...prev, service: srv }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      service: null
    });
    setIsSubmitted(false);
  };

  return (
    <section id="free-consultation" className="w-full px-2.5 xs:px-3.5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-5 sm:py-7 md:py-9 pb-20 sm:pb-28 scroll-mt-20 sm:scroll-mt-24 relative z-20">
      {/* Anchor alias for #contact */}
      <div id="contact" className="sr-only" />
      
      <div className="w-full max-w-[1720px] mx-auto">
        
        {/* ================= MAIN WIDE HORIZONTAL BANNER (Exact Reference Match) ================= */}
        <div className="w-full bg-[#fcfbf9] border border-[#ede7dc] rounded-2xl md:rounded-[28px] relative shadow-[0_2px_14px_rgba(0,0,0,0.03)]">
          
          {/* Top-Right Decorative Mint Arc Accent */}
          <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 h-20 sm:h-24 pointer-events-none select-none z-0 overflow-hidden rounded-tr-2xl md:rounded-tr-[28px] opacity-50">
            <svg className="w-full h-full" viewBox="0 0 240 80" preserveAspectRatio="none" fill="none">
              <path d="M0,0 C80,35 160,20 240,65 L240,0 Z" fill="#d8ede2" opacity="0.6" />
              <path d="M60,0 C120,25 180,15 240,45 L240,0 Z" fill="#c3e5d1" opacity="0.4" />
            </svg>
          </div>

          {/* Banner Horizontal Layout */}
          <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-between">
            
            {/* ================= 1. FAR LEFT: Advisor Photo ================= */}
            <div className="w-full lg:w-[17%] xl:w-[16%] 2xl:w-[15%] flex-shrink-0 relative bg-[#f3efe6]/40 min-h-[180px] sm:min-h-[200px] lg:min-h-full rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl md:rounded-l-[28px] overflow-hidden flex items-end">
              <img 
                src="/assets/consultation-advisor-hd.png" 
                alt="Ashok - Managing Director & Financial Advisor" 
                className="w-full h-full object-cover object-top select-none pointer-events-none"
                loading="lazy"
              />
            </div>

            {/* ================= 2. LEFT-CENTER: "About Us" ================= */}
            <div className="w-full lg:w-[27%] xl:w-[27%] 2xl:w-[27%] p-4 sm:p-5 lg:p-4 xl:p-5 flex flex-col justify-center border-t lg:border-t-0 border-[#ede7dc]/60">
              {/* Heading */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#004737] tracking-tight mb-2 leading-tight">
                About Us
              </h3>

              {/* Description Paragraph */}
              <p className="text-[11.5px] sm:text-xs text-gray-600 leading-relaxed font-normal mb-3 max-w-md">
                At Eazy Lend, we are committed to helping individuals and businesses achieve their financial goals with the right loan and insurance solutions. With expert guidance, transparent process, and dedicated support, we make your financial journey simple and stress-free.
              </p>

              {/* Signature & Title */}
              <div className="flex flex-col">
                <span className="font-signature text-2xl sm:text-3xl text-[#004737] font-semibold tracking-wide leading-none select-none">
                  Ashok
                </span>
                <span className="text-[11px] sm:text-xs text-gray-500 font-medium mt-1">
                  (Managing Director)
                </span>
              </div>
            </div>

            {/* ================= 3. CENTER: Metrics & Authorized Advisor ================= */}
            <div className="w-full lg:w-[26%] xl:w-[26%] 2xl:w-[26%] p-4 sm:p-5 lg:p-4 xl:p-5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#ede7dc]/80">
              
              {/* Top Row: 3 Stat Counters */}
              <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-6 mb-4 sm:mb-5">
                
                {/* Stat 1: 100+ Happy Clients */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="text-[#c98218] mb-1">
                    <Users className="w-5 h-5 text-[#c98218]" />
                  </div>
                  <span className="text-base sm:text-lg font-bold text-[#004737] leading-tight">
                    100+
                  </span>
                  <span className="text-[10.5px] sm:text-[11px] text-gray-500 font-medium mt-0.5">
                    Happy Clients
                  </span>
                </div>

                {/* Vertical Divider */}
                <div className="h-9 w-[1px] bg-gray-200 self-center hidden sm:block" />

                {/* Stat 2: 5+ Years of Experience */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="text-[#c98218] mb-1">
                    <ShieldCheck className="w-5 h-5 text-[#c98218]" />
                  </div>
                  <span className="text-base sm:text-lg font-bold text-[#004737] leading-tight">
                    5+
                  </span>
                  <span className="text-[10.5px] sm:text-[11px] text-gray-500 font-medium mt-0.5">
                    Years of Experience
                  </span>
                </div>

                {/* Stat 3: Multiple Products & Solutions */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="text-[#c98218] mb-1">
                    <HeartHandshake className="w-5 h-5 text-[#c98218]" />
                  </div>
                  <span className="text-base sm:text-lg font-bold text-[#004737] leading-tight">
                    Multiple
                  </span>
                  <span className="text-[10.5px] sm:text-[11px] text-gray-500 font-medium mt-0.5">
                    Products & Solutions
                  </span>
                </div>

              </div>

              {/* Bottom Row: Authorized Advisor Section */}
              <div className="pt-2 border-t border-gray-100 sm:border-0 sm:pt-0">
                <div className="text-[11px] sm:text-xs text-[#004737]/80 font-semibold mb-2">
                  Authorized Advisor of
                </div>
                
                {/* Logo Row: IRDAI | TATA AIA & TATA AIG */}
                <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                  {/* IRDAI */}
                  <span className="text-base sm:text-lg font-black tracking-wider text-[#1e3a8a] select-none">
                    IRDAI
                  </span>

                  {/* Vertical Divider */}
                  <span className="text-gray-300 font-light text-base sm:text-lg select-none">
                    |
                  </span>

                  {/* TATA AIA Life Insurance */}
                  <img 
                    src="/assets/partners/tata-aia-official.svg" 
                    alt="TATA AIA Life Insurance" 
                    className="h-6 sm:h-7 w-auto object-contain select-none"
                    loading="lazy"
                  />

                  {/* Ampersand */}
                  <span className="text-gray-400 font-bold text-xs sm:text-sm select-none">
                    &
                  </span>

                  {/* TATA AIG Insurance */}
                  <img 
                    src="/assets/partners/tata-aig-badge.svg" 
                    alt="TATA AIG Insurance" 
                    className="h-8 sm:h-9 w-auto object-contain select-none"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

            {/* ================= 4. FAR RIGHT: "Get in Touch" Card ================= */}
            <div className="w-full lg:w-[30%] xl:w-[31%] 2xl:w-[32%] p-2.5 sm:p-3 lg:p-3.5 xl:p-4 flex flex-col justify-center relative z-20">
              <div className="w-full bg-[#edf6f0] border border-[#d6ecde] rounded-xl sm:rounded-2xl p-4 sm:p-4.5 shadow-2xs relative">
                
                {/* Form Header */}
                <div className="mb-2.5">
                  <h4 className="text-base sm:text-lg font-bold text-[#004737] leading-tight">
                    Get in Touch
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-600 leading-snug mt-0.5">
                    Talk to our expert and find the right loan or insurance plan for you.
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-2">
                    
                    {/* Row 1: Your Name & Your Mobile Number side-by-side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      
                      {/* Your Name */}
                      <div className="relative flex items-center bg-white rounded-lg border border-gray-200/90 shadow-2xs focus-within:border-[#004737] focus-within:ring-1 focus-within:ring-[#004737]/20 transition-all">
                        <User className="w-3.5 h-3.5 text-gray-400 ml-2.5 mr-1.5 flex-shrink-0 pointer-events-none" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full py-2 pr-2.5 bg-transparent text-xs text-gray-800 placeholder-gray-400 focus:outline-none"
                        />
                      </div>

                      {/* Your Mobile Number */}
                      <div className="relative flex items-center bg-white rounded-lg border border-gray-200/90 shadow-2xs focus-within:border-[#004737] focus-within:ring-1 focus-within:ring-[#004737]/20 transition-all">
                        <Phone className="w-3.5 h-3.5 text-gray-400 ml-2.5 mr-1.5 flex-shrink-0 pointer-events-none" />
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                          placeholder="Your Mobile Number"
                          className="w-full py-2 pr-2.5 bg-transparent text-xs text-gray-800 placeholder-gray-400 focus:outline-none"
                        />
                      </div>

                    </div>

                    {/* Row 2: Select Service dropdown */}
                    <div className="relative z-30" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full flex items-center justify-between bg-white rounded-lg border py-2 px-2.5 shadow-2xs text-left cursor-pointer transition-all ${
                          isDropdownOpen 
                            ? 'border-[#004737] ring-1 ring-[#004737]/20' 
                            : 'border-gray-200/90 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 overflow-hidden min-w-0">
                          {formData.service ? (
                            <>
                              <img 
                                src={formData.service.image} 
                                alt={formData.service.name} 
                                className="w-4 h-4 object-contain flex-shrink-0"
                              />
                              <span className="text-xs text-gray-900 font-bold truncate">
                                {formData.service.name}
                              </span>
                            </>
                          ) : (
                            <>
                              <LayoutGrid className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                              <span className="text-xs text-gray-400 truncate">
                                Select Service
                              </span>
                            </>
                          )}
                        </div>
                        <ChevronDown className={`w-3.5 h-3.5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-[#004737]' : ''}`} />
                      </button>

                      {/* Dropdown Menu Options */}
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl shadow-[0_16px_40px_rgba(0,0,0,0.22)] border border-gray-200/90 py-2 z-50 max-h-64 overflow-y-auto animate-in fade-in-50 duration-150 [scrollbar-width:thin] [scrollbar-color:#004737/30_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#004737]/30 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                          {serviceGroups.map((group, gIdx) => (
                            <div key={group.category} className={gIdx > 0 ? 'mt-2 pt-2 border-t border-gray-100' : ''}>
                              {/* Category Header */}
                              <div className="px-3 py-1 flex items-center justify-between">
                                <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                                  {group.category}
                                </span>
                                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${group.badgeColor}`}>
                                  {group.items.length} Products
                                </span>
                              </div>

                              {/* Items */}
                              {group.items.map((srv) => {
                                const isSelected = formData.service?.id === srv.id;
                                return (
                                  <button
                                    key={srv.id}
                                    type="button"
                                    onClick={() => handleSelectService(srv)}
                                    className={`w-full px-3 py-1.5 text-xs flex items-center justify-between transition-colors text-left cursor-pointer group ${
                                      isSelected 
                                        ? 'bg-[#e8f5ec] text-[#004737]' 
                                        : 'text-gray-700 hover:bg-[#f4f9f6] hover:text-[#004737]'
                                    }`}
                                  >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                      <div className="w-6 h-6 rounded-lg bg-[#fafbfb] border border-gray-200/80 p-0.5 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-all">
                                        <img 
                                          src={srv.image} 
                                          alt={srv.name} 
                                          className="max-h-full max-w-full object-contain"
                                          loading="lazy"
                                        />
                                      </div>
                                      <div className="flex flex-col min-w-0">
                                        <span className="font-bold text-xs text-gray-900 group-hover:text-[#004737] truncate">
                                          {srv.name}
                                        </span>
                                        <span className="text-[10px] text-gray-400 truncate leading-tight">
                                          {srv.desc}
                                        </span>
                                      </div>
                                    </div>
                                    {isSelected && (
                                      <div className="w-3.5 h-3.5 rounded-full bg-[#004737] text-white flex items-center justify-center flex-shrink-0 ml-1.5 shadow-2xs">
                                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                                      </div>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Row 3: Submit Button */}
                    <div className="pt-0.5">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#004737] hover:bg-[#00362a] active:scale-[0.99] text-white font-bold text-xs sm:text-[13px] py-2.5 px-4 rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer disabled:opacity-75"
                      >
                        {isSubmitting ? (
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5 fill-white text-white -rotate-12" />
                            <span>Get a Free Consultation</span>
                            <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                ) : (
                  /* Clean Success State */
                  <div className="py-4 text-center flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-[#e8f5ec] text-[#004737] flex items-center justify-center mb-2 shadow-2xs">
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>
                    <h5 className="text-sm font-bold text-[#004737] mb-0.5">
                      Thank you, {formData.name}!
                    </h5>
                    <p className="text-[11px] text-gray-600 max-w-xs mx-auto mb-3 leading-relaxed">
                      Your request has been received. Our Puducherry advisor will call you at{' '}
                      <span className="font-bold text-[#004737]">+91 {formData.phone}</span> shortly.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004737] hover:text-[#c98218] transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Submit Another Request</span>
                    </button>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
