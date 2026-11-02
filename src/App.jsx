import React from 'react';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import SolutionsSection from './components/SolutionsSection';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#fafbfb] text-gray-800 flex flex-col font-brand antialiased selection:bg-[#064438]/10 selection:text-[#064438] overflow-x-hidden">
      {/* 1. Full-screen Hero Banner with Integrated Top Bar (Logo & Call Now) */}
      <Hero />

      {/* 2. Full-screen Feature / Trust Badges Bar */}
      <TrustBar />

      {/* 3. Full-screen Product Solutions Section (Loan & Insurance) */}
      <SolutionsSection />
    </div>
  );
}
