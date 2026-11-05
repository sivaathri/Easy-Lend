import React, { useState } from 'react';
import { 
  User, 
  Phone, 
  LayoutGrid, 
  ChevronDown, 
  MessageSquare, 
  ArrowRight,
  Check,
  RotateCcw
} from 'lucide-react';

const services = [
  'Home Loan',
  'Personal Loan',
  'Business Loan',
  'Mortgage Loan',
  'Working Capital',
  'Health Insurance',
  'Life Insurance',
  'Term Insurance',
  'Vehicle Insurance',
  'Other Advisory'
];

export default function FreeConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      service: '',
      location: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="free-consultation" className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
      <div className="w-full max-w-4xl mx-auto">
        
        {/* ================= EXACT CONSULTATION CARD ================= */}
        <div className="w-full bg-[#f4f9f6] border border-[#e1eee6] rounded-2xl md:rounded-3xl p-5 sm:p-7 md:p-8 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
          
          {/* Header */}
          <div className="mb-4 sm:mb-5">
            <h2 className="text-xl xs:text-2xl sm:text-[26px] font-bold tracking-tight leading-tight">
              <span className="text-[#004737]">Get a Free </span>
              <span className="text-[#c98218]">Consultation</span>
            </h2>
            <p className="text-xs sm:text-[13px] md:text-sm text-gray-600 mt-1">
              Talk to our expert and find the right loan or insurance plan for you.
            </p>
          </div>

          {!isSubmitted ? (
            /* Form matching uploaded layout exactly */
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
              
              {/* Row 1: Your Name & Your Mobile Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {/* Your Name */}
                <div className="relative flex items-center bg-white rounded-lg sm:rounded-xl border border-gray-200/90 shadow-2xs focus-within:border-[#004737] focus-within:ring-1 focus-within:ring-[#004737] transition-all">
                  <div className="pl-3.5 pr-2 text-gray-500 flex items-center justify-center pointer-events-none">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full py-2.5 sm:py-3 pr-3.5 bg-transparent text-xs sm:text-sm text-gray-800 placeholder-gray-500 focus:outline-none"
                  />
                </div>

                {/* Your Mobile Number */}
                <div className="relative flex items-center bg-white rounded-lg sm:rounded-xl border border-gray-200/90 shadow-2xs focus-within:border-[#004737] focus-within:ring-1 focus-within:ring-[#004737] transition-all">
                  <div className="pl-3.5 pr-2 text-gray-500 flex items-center justify-center pointer-events-none">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                    placeholder="Your Mobile Number"
                    className="w-full py-2.5 sm:py-3 pr-3.5 bg-transparent text-xs sm:text-sm text-gray-800 placeholder-gray-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Select Service & Your Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {/* Select Service Dropdown */}
                <div className="relative flex items-center bg-white rounded-lg sm:rounded-xl border border-gray-200/90 shadow-2xs focus-within:border-[#004737] focus-within:ring-1 focus-within:ring-[#004737] transition-all">
                  <div className="pl-3.5 pr-2 text-gray-500 flex items-center justify-center pointer-events-none">
                    <LayoutGrid className="w-4 h-4" />
                  </div>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full py-2.5 sm:py-3 pr-8 bg-transparent text-xs sm:text-sm text-gray-800 focus:outline-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-gray-400">
                      Select Service
                    </option>
                    {services.map((srv) => (
                      <option key={srv} value={srv} className="text-gray-800">
                        {srv}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 pointer-events-none text-gray-500">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Location / Additional Field */}
                <div className="relative flex items-center bg-white rounded-lg sm:rounded-xl border border-gray-200/90 shadow-2xs focus-within:border-[#004737] focus-within:ring-1 focus-within:ring-[#004737] transition-all">
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Your City / Location"
                    className="w-full py-2.5 sm:py-3 px-3.5 bg-transparent text-xs sm:text-sm text-gray-800 placeholder-gray-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Your Message */}
              <div className="relative flex items-start bg-white rounded-lg sm:rounded-xl border border-gray-200/90 shadow-2xs focus-within:border-[#004737] focus-within:ring-1 focus-within:ring-[#004737] transition-all">
                <div className="pl-3.5 pr-2 pt-3 text-gray-500 flex items-center justify-center pointer-events-none">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your Message"
                  className="w-full py-2.5 sm:py-3 pr-3.5 bg-transparent text-xs sm:text-sm text-gray-800 placeholder-gray-500 focus:outline-none resize-y min-h-[52px]"
                />
              </div>

              {/* Full Width Submit Button */}
              <div className="pt-1 sm:pt-1.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#004737] hover:bg-[#00362a] active:scale-[0.99] text-white font-bold text-xs sm:text-sm md:text-base py-3 sm:py-3.5 px-6 rounded-lg sm:rounded-xl shadow-xs transition-all duration-200 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Get a Free Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* Clean Success State */
            <div className="py-6 sm:py-8 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ec] text-[#004737] flex items-center justify-center mb-3">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#004737] mb-1">
                Thank you, {formData.name}!
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mb-4">
                Your consultation request has been received. Our Puducherry advisor will call you at{' '}
                <span className="font-bold text-[#004737]">{formData.phone}</span> shortly.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004737] hover:text-[#c98218] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Submit Another Request</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
