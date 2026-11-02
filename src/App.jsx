import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import SolutionsSection from './components/SolutionsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafbfb] text-gray-800 flex flex-col font-brand antialiased selection:bg-[#064438]/10 selection:text-[#064438]">
      {/* Exact UI Design Top Section */}
      <div className="w-full bg-gradient-to-b from-[#fbfdfc] via-[#f7faf8] to-[#fafbfb]">
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Feature / Trust Badges Bar */}
        <TrustBar />

        {/* Product Solutions Section (Loan & Insurance) */}
        <SolutionsSection />
      </div>
    </div>
  );
}

