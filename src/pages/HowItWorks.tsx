
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowItWorksComponent from '@/components/HowItWorks';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">How Aweni Works</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Connecting families with trusted home service professionals in just a few easy steps.
            </p>
            
            <HowItWorksComponent />
            
            <div className="mt-16 text-center">
              <Button size="lg" asChild className="mr-4">
                <a href="/services">Explore Services</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/professionals">Find Professionals</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
