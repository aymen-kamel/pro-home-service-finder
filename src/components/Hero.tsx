
import React from 'react';
import SearchBar from './SearchBar';

const Hero: React.FC = () => {
  return (
    <div className="hero-pattern py-16 md:py-28 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Find Trusted Home Service Professionals
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with verified local experts for your home projects. From plumbing to landscaping, find top-rated professionals near you.
        </p>
        <SearchBar className="max-w-3xl mx-auto shadow-lg rounded-lg overflow-hidden" />
        <div className="mt-6 text-sm text-gray-500">
          Popular: Plumbing, Electrical, HVAC, House Cleaning, Lawn Care
        </div>
      </div>
    </div>
  );
};

export default Hero;
