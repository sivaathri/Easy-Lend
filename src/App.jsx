import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SolutionsSection from './components/SolutionsSection';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#fafbfb] text-gray-800 flex flex-col font-brand antialiased selection:bg-[#064438]/10 selection:text-[#064438] overflow-x-hidden">
      {/* 1. Header with Logo, Puducherry location, and Dual Phone Numbers */}
      <Navbar />

      {/* 2. Hero Section with Exact Content Styling & Integrated Trust Badges */}
      <Hero />

      {/* 3. Full-Width Product Solutions Section (Loan & Insurance) */}
      <SolutionsSection />

      {/* 4. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 5. Luxury Footer with Golden Wave Accent */}
      <Footer />
    </div>
  );
}
