
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedServices from '@/components/FeaturedServices';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Discover our family-friendly home service solutions designed to make your life easier.
              All of our providers are background-checked and vetted for quality.
            </p>
            
            <FeaturedServices />
            
            <div className="mt-16 text-center">
              <Button size="lg" asChild>
                <a href="/professionals">
                  Find Professionals <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
