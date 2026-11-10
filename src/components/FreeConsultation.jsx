import React, { useState, useRef, useEffect } from 'react';
import { 
  User, 
  Phone, 
  LayoutGrid, 
  ChevronDown, 
  MapPin, 
  MessageSquare, 
  ArrowRight, 
  Check, 
  RotateCcw,
  Headphones,
  ShieldCheck,
  HeartHandshake,
  Clock,
  Send
} from 'lucide-react';

const serviceGroups = [
  {
    category: 'Loan Solutions',
    badgeColor: 'bg-[#e6f4ed] text-[#004737]',
    items: [
      { id: 'home-loan', name: 'Home Loan', image: '/assets/icon-home-hd.jpg', desc: 'Fulfill dream of a home' },
      { id: 'personal-loan', name: 'Personal Loan', image: '/assets/icon-personal-hd.jpg', desc: 'Instant personal funds' },
      { id: 'business-loan', name: 'Business Loan', image: '/assets/icon-business-hd.jpg', desc: 'Scale business ambitions' },
      { id: 'mortgage-loan', name: 'Mortgage Loan', image: '/assets/icon-mortgage-hd.jpg', desc: 'Secured property finance' },
      { id: 'working-capital', name: 'Working Capital', image: '/assets/icon-capital-hd.jpg', desc: 'OD / CC / UCL facilities' }
    ]
  },
  {
    category: 'Insurance Solutions',
    badgeColor: 'bg-[#fef5e7] text-[#b87a14]',
    items: [
      { id: 'health-insurance', name: 'Health Insurance', image: '/assets/icon-health-hd.jpg', desc: 'Comprehensive medical cover' },
      { id: 'life-insurance', name: 'Life Insurance', image: '/assets/icon-life-hd.jpg', desc: "Secure your family's future" },
      { id: 'term-insurance', name: 'Term Insurance', image: '/assets/icon-term-hd.jpg', desc: 'High sum assured protection' },
      { id: 'vehicle-insurance', name: 'Vehicle Insurance', image: '/assets/icon-vehicle-hd.jpg', desc: 'Complete journey security' }
    ]
  }
];

export default function FreeConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: null,
    location: '',
    message: ''
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
      service: null,
      location: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="free-consultation" className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 scroll-mt-20 sm:scroll-mt-24">
      {/* Anchor alias for #contact */}
      <div id="contact" className="sr-only" />
      
      <div className="w-full max-w-7xl mx-auto">
        
        {/* ================= MAIN WARM BANNER CARD (Exact Reference Match) ================= */}
        <div className="w-full bg-[#fbf9f5] border border-[#ede7dc] rounded-3xl md:rounded-[32px] overflow-hidden relative shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          
          {/* Top-Right Decorative Emerald & Mint Swooshes */}
          <div className="absolute top-0 right-0 w-36 sm:w-48 md:w-64 h-24 sm:h-32 pointer-events-none select-none z-0 overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 240 120" preserveAspectRatio="none" fill="none">
              <path d="M80,0 C140,25 185,65 240,120 L240,0 Z" fill="#024233" opacity="0.95" />
              <path d="M120,0 C160,20 195,50 240,90 L240,0 Z" fill="#d7eee0" opacity="0.65" />
            </svg>
          </div>

          {/* Bottom-Left Warm Golden Accent Arc */}
          <div className="absolute -bottom-10 -left-10 w-52 sm:w-64 h-52 sm:h-64 rounded-full bg-[#f6da8c]/45 pointer-events-none z-0" />

          {/* Bottom Dark Emerald Green Wave Accent */}
          <div className="absolute bottom-0 left-0 right-0 w-full leading-none pointer-events-none select-none z-0">
            <svg className="w-full h-6 sm:h-8 md:h-10" viewBox="0 0 1200 45" preserveAspectRatio="none" fill="none">
              <path d="M0,18 C280,38 520,6 800,22 C960,30 1100,14 1200,10 L1200,45 L0,45 Z" fill="#00382b" />
              <path d="M0,18 C280,38 520,6 800,22 C960,30 1100,14 1200,10" stroke="#ffffff" strokeWidth="2" opacity="0.9" fill="none" />
            </svg>
          </div>

          {/* Main Content Grid: Left Info & Advisor + Right White Consultation Form */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center p-5 sm:p-7 md:p-9 lg:p-10">
            
            {/* ================= LEFT COLUMN: Advisor & Value Highlights ================= */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between">
              <div>
                {/* Pill Badge: Free Consultation with Headset */}
                <div className="inline-flex items-center gap-2 bg-[#fef1db] border border-[#f9dfbe] px-3.5 py-1.5 rounded-full mb-3 shadow-2xs w-fit">
                  <Headphones className="w-3.5 h-3.5 text-[#b87a14]" />
                  <span className="text-[11.5px] sm:text-xs font-bold text-[#1f382b] tracking-wide">
                    Free Consultation
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight leading-[1.12] mb-2 sm:mb-2.5">
                  <span className="text-[#05372d] block">Get a Free</span>
                  <span className="text-[#c98218] block">Consultation</span>
                </h2>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-gray-600 mb-5 sm:mb-6 max-w-sm leading-relaxed font-normal">
                  Talk to our financial experts and find the right loan or insurance plan for you.
                </p>
              </div>

              {/* Layout of Advisor Photo & 3 Trust Feature Points */}
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 md:gap-5 mt-1 sm:mt-2">
                
                {/* Advisor Photo with Laptop and gesture */}
                <div className="w-44 xs:w-48 sm:w-52 md:w-56 lg:w-48 xl:w-56 flex-shrink-0 relative">
                  <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-gray-200/60 bg-white">
                    <img 
                      src="/assets/consultation-advisor-hd.jpg" 
                      alt="Eazy Lend Financial Advisor"
                      className="w-full h-auto object-cover object-top select-none hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* 3 Trust Feature Points with Amber Badges (Exact match to reference) */}
                <div className="space-y-3.5 sm:space-y-4 pb-1 flex-1">
                  
                  {/* Point 1: Expert Guidance */}
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#fde8c2] flex items-center justify-center flex-shrink-0 shadow-2xs">
                      <svg className="w-5 h-5 text-[#043d30]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L4 5.5v5.5c0 5.2 3.4 10 8 11.2 4.6-1.2 8-6 8-11.2V5.5L12 2z" />
                        <path d="M8.5 12l2.5 2.5 4.8-4.8" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[14px] sm:text-[15px] md:text-base font-bold text-[#043d30] tracking-tight">
                      Expert Guidance
                    </span>
                  </div>

                  {/* Point 2: Personalized Solutions */}
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#fde8c2] flex items-center justify-center flex-shrink-0 shadow-2xs">
                      <svg className="w-5 h-5 text-[#043d30]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4.2c-.8-1-2.1-1.3-3.1-.6-.9.8-1 2.2-.2 3.1l3.3 3.3 3.3-3.3c.8-.9.7-2.3-.2-3.1-1-.7-2.3-.4-3.1.6z" />
                        <path d="M2 13h3v5H2v-5zm4 1.5c0-.8.7-1.5 1.5-1.5H11c.4 0 .8.2 1.1.5l2.2 2.2c.3.3.7.5 1.1.5H21c.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7l-3-2c-.3-.2-.5-.5-.5-.9V11c0-.6-.4-1-1-1h-3.7c-.5 0-1 .2-1.3.5L10 12V11c0-.6-.4-1-1-1H6v4.5z" />
                      </svg>
                    </div>
                    <span className="text-[14px] sm:text-[15px] md:text-base font-bold text-[#043d30] tracking-tight">
                      Personalized Solutions
                    </span>
                  </div>

                  {/* Point 3: Quick & Hassle-Free Process */}
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#fde8c2] flex items-center justify-center flex-shrink-0 shadow-2xs">
                      <svg className="w-5 h-5 text-[#043d30]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="8.5" />
                        <polyline points="12 7.5 12 12 15 14.5" />
                      </svg>
                    </div>
                    <span className="text-[14px] sm:text-[15px] md:text-base font-bold text-[#043d30] tracking-tight">
                      Quick & Hassle-Free Process
                    </span>
                  </div>

                </div>

              </div>

            </div>

            {/* ================= RIGHT COLUMN: Floating White Consultation Form ================= */}
            <div className="lg:col-span-7 xl:col-span-7">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-[0_12px_36px_rgba(0,0,0,0.06)] border border-[#ede8dd] border-b-[3px] border-r-[3px] border-b-[#e8c88e] border-r-[#e8c88e] relative">
                
                {/* Form Header */}
                <div className="mb-4 sm:mb-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#05372d] tracking-tight">
                    Request a Consultation
                  </h3>
                  {/* Golden underline bar */}
                  <div className="w-10 h-[2.5px] bg-[#c98218] rounded-full mt-1.5" />
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                    
                    {/* Row 1: Your Name & Your Mobile Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                      
                      {/* Your Name */}
                      <div className="relative flex items-center bg-white rounded-xl sm:rounded-2xl border border-gray-200/90 shadow-2xs focus-within:border-[#004737] focus-within:ring-2 focus-within:ring-[#004737]/15 transition-all">
                        <div className="pl-3.5 pr-2 text-gray-400 flex items-center justify-center pointer-events-none">
                          <User className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full py-3 sm:py-3.5 pr-3.5 bg-transparent text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                        />
                      </div>

                      {/* Your Mobile Number */}
                      <div className="relative flex items-center bg-white rounded-xl sm:rounded-2xl border border-gray-200/90 shadow-2xs focus-within:border-[#004737] focus-within:ring-2 focus-within:ring-[#004737]/15 transition-all">
                        <div className="pl-3.5 pr-2 text-gray-400 flex items-center justify-center pointer-events-none">
                          <Phone className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                          placeholder="Your Mobile Number"
                          className="w-full py-3 sm:py-3.5 pr-3.5 bg-transparent text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                        />
                      </div>

                    </div>

                    {/* Row 2: Select Service & Your City/Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                      
                      {/* Custom Image-Rich Service Dropdown */}
                      <div className="relative" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className={`w-full flex items-center justify-between bg-white rounded-xl sm:rounded-2xl border shadow-2xs py-3 sm:py-3.5 px-3.5 transition-all cursor-pointer text-left ${
                            isDropdownOpen 
                              ? 'border-[#004737] ring-2 ring-[#004737]/15' 
                              : 'border-gray-200/90 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 overflow-hidden">
                            {formData.service ? (
                              <>
                                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                                  <img 
                                    src={formData.service.image} 
                                    alt={formData.service.name} 
                                    className="max-h-full max-w-full object-contain"
                                  />
                                </div>
                                <span className="text-xs sm:text-sm text-gray-900 font-bold truncate">
                                  {formData.service.name}
                                </span>
                              </>
                            ) : (
                              <>
                                <LayoutGrid className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                <span className="text-xs sm:text-sm text-gray-400 truncate">
                                  Select Service
                                </span>
                              </>
                            )}
                          </div>
                          <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-[#004737]' : ''}`} />
                        </button>

                        {/* Luxury Floating Options Menu with 3D Icons */}
                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.15)] border border-gray-200 py-2.5 z-50 max-h-80 overflow-y-auto animate-in fade-in-50 duration-150">
                            {serviceGroups.map((group, gIdx) => (
                              <div key={group.category} className={gIdx > 0 ? 'mt-2.5 pt-2.5 border-t border-gray-100' : ''}>
                                {/* Category Header */}
                                <div className="px-4 py-1.5 flex items-center justify-between">
                                  <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">
                                    {group.category}
                                  </span>
                                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${group.badgeColor}`}>
                                    {group.items.length} Products
                                  </span>
                                </div>

                                {/* Category Items with 3D Icons */}
                                {group.items.map((srv) => {
                                  const isSelected = formData.service?.id === srv.id;
                                  return (
                                    <button
                                      key={srv.id}
                                      type="button"
                                      onClick={() => handleSelectService(srv)}
                                      className={`w-full px-4 py-2 text-sm flex items-center justify-between transition-colors text-left cursor-pointer group ${
                                        isSelected 
                                          ? 'bg-[#e8f5ec] text-[#004737]' 
                                          : 'text-gray-700 hover:bg-[#f4f9f6] hover:text-[#004737]'
                                      }`}
                                    >
                                      <div className="flex items-center gap-3 min-w-0">
                                        <div className="w-8 h-8 rounded-xl bg-[#fafbfb] border border-gray-200/80 p-1 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-white transition-all shadow-2xs">
                                          <img 
                                            src={srv.image} 
                                            alt={srv.name} 
                                            className="max-h-full max-w-full object-contain"
                                            loading="lazy"
                                          />
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                          <span className="font-bold text-xs sm:text-sm text-gray-900 group-hover:text-[#004737] truncate">
                                            {srv.name}
                                          </span>
                                          <span className="text-[10px] sm:text-[11px] text-gray-400 truncate leading-tight">
                                            {srv.desc}
                                          </span>
                                        </div>
                                      </div>
                                      {isSelected && (
                                        <div className="w-4 h-4 rounded-full bg-[#004737] text-white flex items-center justify-center flex-shrink-0 ml-2 shadow-2xs">
                                          <Check className="w-3 h-3 stroke-[3]" />
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

                      {/* Your City / Location */}
                      <div className="relative flex items-center bg-white rounded-xl sm:rounded-2xl border border-gray-200/90 shadow-2xs focus-within:border-[#004737] focus-within:ring-2 focus-within:ring-[#004737]/15 transition-all">
                        <div className="pl-3.5 pr-2 text-gray-400 flex items-center justify-center pointer-events-none">
                          <MapPin className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="Your City / Location"
                          className="w-full py-3 sm:py-3.5 pr-3.5 bg-transparent text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                        />
                      </div>

                    </div>

                    {/* Row 3: Your Message (Optional) */}
                    <div className="relative flex items-start bg-white rounded-xl sm:rounded-2xl border border-gray-200/90 shadow-2xs focus-within:border-[#004737] focus-within:ring-2 focus-within:ring-[#004737]/15 transition-all">
                      <div className="pl-3.5 pr-2 pt-3 text-gray-400 flex items-center justify-center pointer-events-none">
                        <MessageSquare className="w-4 h-4 text-gray-400" />
                      </div>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Your Message (Optional)"
                        className="w-full py-3 sm:py-3.5 pr-3.5 bg-transparent text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none resize-y min-h-[65px] sm:min-h-[75px]"
                      />
                    </div>

                    {/* Full Width Submit Button with Send icon and ArrowRight */}
                    <div className="pt-1.5 sm:pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2.5 bg-[#004737] hover:bg-[#00362a] active:scale-[0.99] text-white font-bold text-xs sm:text-sm md:text-[15px] py-3.5 sm:py-4 px-6 rounded-xl sm:rounded-2xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer disabled:opacity-75"
                      >
                        {isSubmitting ? (
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4 fill-white text-white -rotate-12" />
                            <span>Get a Free Consultation</span>
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                ) : (
                  /* Clean Success State */
                  <div className="py-6 sm:py-8 text-center flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#e8f5ec] text-[#004737] flex items-center justify-center mb-3 shadow-xs">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#004737] mb-1">
                      Thank you, {formData.name}!
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mb-4 leading-relaxed">
                      Your consultation request has been received. Our Puducherry advisor will call you at{' '}
                      <span className="font-bold text-[#004737]">+91 {formData.phone}</span>
                      {formData.service ? (
                        <> regarding <span className="font-semibold text-[#b87a14]">{formData.service.name}</span></>
                      ) : null} shortly.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#004737] hover:text-[#c98218] transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
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
