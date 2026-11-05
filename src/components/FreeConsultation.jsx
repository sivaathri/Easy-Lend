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
  RotateCcw
} from 'lucide-react';

const serviceGroups = [
  {
    category: 'Loan Solutions',
    badgeColor: 'bg-[#e6f4ed] text-[#004737]',
    items: [
      { id: 'home-loan', name: 'Home Loan', image: '/assets/icon-home.png', desc: 'Fulfill dream of a home' },
      { id: 'personal-loan', name: 'Personal Loan', image: '/assets/icon-personal.png', desc: 'Instant personal funds' },
      { id: 'business-loan', name: 'Business Loan', image: '/assets/icon-business.png', desc: 'Scale business ambitions' },
      { id: 'mortgage-loan', name: 'Mortgage Loan', image: '/assets/icon-mortgage.png', desc: 'Secured property finance' },
      { id: 'working-capital', name: 'Working Capital', image: '/assets/icon-capital.png', desc: 'OD / CC / UCL facilities' }
    ]
  },
  {
    category: 'Insurance Solutions',
    badgeColor: 'bg-[#fef5e7] text-[#b87a14]',
    items: [
      { id: 'health-insurance', name: 'Health Insurance', image: '/assets/icon-health.png', desc: 'Comprehensive medical cover' },
      { id: 'life-insurance', name: 'Life Insurance', image: '/assets/icon-life.png', desc: "Secure your family's future" },
      { id: 'term-insurance', name: 'Term Insurance', image: '/assets/icon-term.png', desc: 'High sum assured protection' },
      { id: 'vehicle-insurance', name: 'Vehicle Insurance', image: '/assets/icon-vehicle.png', desc: 'Complete journey security' }
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
    <section id="free-consultation" className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-14">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* ================= ENLARGED CONSULTATION CARD ================= */}
        <div className="w-full bg-[#f4f9f6] border border-[#e1eee6] rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
          
          {/* Header */}
          <div className="mb-5 sm:mb-6">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-[34px] font-bold tracking-tight leading-tight">
              <span className="text-[#004737]">Get a Free </span>
              <span className="text-[#c98218]">Consultation</span>
            </h2>
            <p className="text-sm xs:text-base sm:text-[17px] text-gray-600 mt-1.5 font-normal">
              Talk to our expert and find the right loan or insurance plan for you.
            </p>
          </div>

          {!isSubmitted ? (
            /* Form matching uploaded layout exactly with Larger Inputs */
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5">
              
              {/* Row 1: Your Name & Your Mobile Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 md:gap-5">
                {/* Your Name */}
                <div className="relative flex items-center bg-white rounded-xl sm:rounded-2xl border border-gray-200/90 shadow-2xs focus-within:border-[#004737] focus-within:ring-2 focus-within:ring-[#004737]/15 transition-all">
                  <div className="pl-4 pr-2.5 text-gray-500 flex items-center justify-center pointer-events-none">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full py-3.5 sm:py-4 pr-4 bg-transparent text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none"
                  />
                </div>

                {/* Your Mobile Number */}
                <div className="relative flex items-center bg-white rounded-xl sm:rounded-2xl border border-gray-200/90 shadow-2xs focus-within:border-[#004737] focus-within:ring-2 focus-within:ring-[#004737]/15 transition-all">
                  <div className="pl-4 pr-2.5 text-gray-500 flex items-center justify-center pointer-events-none">
                    <Phone className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                    placeholder="Your Mobile Number"
                    className="w-full py-3.5 sm:py-4 pr-4 bg-transparent text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Custom Select Service with Images & Your Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 md:gap-5">
                
                {/* Custom Image-Rich Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full flex items-center justify-between bg-white rounded-xl sm:rounded-2xl border shadow-2xs py-3.5 sm:py-4 px-4 transition-all cursor-pointer text-left ${
                      isDropdownOpen 
                        ? 'border-[#004737] ring-2 ring-[#004737]/15' 
                        : 'border-gray-200/90 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      {formData.service ? (
                        <>
                          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                            <img 
                              src={formData.service.image} 
                              alt={formData.service.name} 
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                          <span className="text-sm sm:text-base text-gray-900 font-bold truncate">
                            {formData.service.name}
                          </span>
                        </>
                      ) : (
                        <>
                          <LayoutGrid className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-400 truncate">
                            Select Service
                          </span>
                        </>
                      )}
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-[#004737]' : ''}`} />
                  </button>

                  {/* Luxury Floating Options Menu with 3D Icons */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.15)] border border-gray-200 py-2.5 z-50 max-h-84 overflow-y-auto animate-in fade-in-50 duration-150">
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
                                className={`w-full px-4 py-2.5 text-sm flex items-center justify-between transition-colors text-left cursor-pointer group ${
                                  isSelected 
                                    ? 'bg-[#e8f5ec] text-[#004737]' 
                                    : 'text-gray-700 hover:bg-[#f4f9f6] hover:text-[#004737]'
                                }`}
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  {/* 3D Product Image Thumbnail */}
                                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#fafbfb] border border-gray-200/80 p-1.5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-white transition-all shadow-2xs">
                                    <img 
                                      src={srv.image} 
                                      alt={srv.name} 
                                      className="max-h-full max-w-full object-contain"
                                      loading="lazy"
                                    />
                                  </div>
                                  
                                  {/* Title & Subtitle */}
                                  <div className="flex flex-col min-w-0">
                                    <span className="font-bold text-sm text-gray-900 group-hover:text-[#004737] truncate">
                                      {srv.name}
                                    </span>
                                    <span className="text-[11px] text-gray-400 truncate leading-tight">
                                      {srv.desc}
                                    </span>
                                  </div>
                                </div>

                                {/* Active Selection Pill */}
                                {isSelected && (
                                  <div className="w-5 h-5 rounded-full bg-[#004737] text-white flex items-center justify-center flex-shrink-0 ml-2 shadow-2xs">
                                    <Check className="w-3.5 h-3.5 stroke-[3]" />
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

                {/* Location Input with MapPin Icon */}
                <div className="relative flex items-center bg-white rounded-xl sm:rounded-2xl border border-gray-200/90 shadow-2xs focus-within:border-[#004737] focus-within:ring-2 focus-within:ring-[#004737]/15 transition-all">
                  <div className="pl-4 pr-2.5 text-gray-500 flex items-center justify-center pointer-events-none">
                    <MapPin className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Your City / Location"
                    className="w-full py-3.5 sm:py-4 pr-4 bg-transparent text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Your Message */}
              <div className="relative flex items-start bg-white rounded-xl sm:rounded-2xl border border-gray-200/90 shadow-2xs focus-within:border-[#004737] focus-within:ring-2 focus-within:ring-[#004737]/15 transition-all">
                <div className="pl-4 pr-2.5 pt-4 text-gray-500 flex items-center justify-center pointer-events-none">
                  <MessageSquare className="w-5 h-5 text-gray-400" />
                </div>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your Message"
                  className="w-full py-3.5 sm:py-4 pr-4 bg-transparent text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none resize-y min-h-[75px] sm:min-h-[85px]"
                />
              </div>

              {/* Full Width Submit Button */}
              <div className="pt-2 sm:pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#004737] hover:bg-[#00362a] active:scale-[0.99] text-white font-bold text-sm sm:text-base md:text-[17px] py-4 sm:py-4.5 px-6 rounded-xl sm:rounded-2xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Get a Free Consultation</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* Clean Success State */
            <div className="py-8 sm:py-10 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#e8f5ec] text-[#004737] flex items-center justify-center mb-3.5 shadow-xs">
                <Check className="w-7 h-7 stroke-[3]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#004737] mb-1.5">
                Thank you, {formData.name}!
              </h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto mb-5 leading-relaxed">
                Your consultation request has been received. Our Puducherry advisor will call you at{' '}
                <span className="font-bold text-[#004737]">+91 {formData.phone}</span>
                {formData.service ? (
                  <> regarding <span className="font-semibold text-[#b87a14]">{formData.service.name}</span></>
                ) : null} shortly.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#004737] hover:text-[#c98218] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Submit Another Request</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
