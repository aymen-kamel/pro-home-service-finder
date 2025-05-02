
import React from 'react';
import SearchBar from './SearchBar';

const Hero: React.FC = () => {
  return (
    <div className="hero-pattern py-16 md:py-28 px-4 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Family home" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Your Family's Home Service Solution
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Connect with trusted local experts for all your home needs. From plumbing to landscaping, find family-friendly professionals near you.
        </p>
        <SearchBar className="max-w-3xl mx-auto shadow-lg rounded-lg overflow-hidden" />
        <div className="mt-6 text-sm text-gray-300">
          Popular: Plumbing, Electrical, HVAC, House Cleaning, Lawn Care
        </div>
      </div>
    </div>
  );
};

export default Hero;
