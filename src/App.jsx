import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import SolutionsSection from './components/SolutionsSection';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#fafbfb] text-gray-800 flex flex-col font-brand antialiased selection:bg-[#064438]/10 selection:text-[#064438] overflow-x-hidden">
      {/* 1. Header with Logo, Puducherry location, and Dual Phone Numbers */}
      <Navbar />

      {/* 2. Hero Section with Full-Bleed Right Visual */}
      <Hero />

      {/* 3. Full-Width Trust Badges Bar */}
      <TrustBar />

      {/* 4. Full-Width Product Solutions Section (Loan & Insurance) */}
      <SolutionsSection />
    </div>
  );
}
