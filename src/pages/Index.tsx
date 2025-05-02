
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedServices from '@/components/FeaturedServices';
import HowItWorks from '@/components/HowItWorks';
import ProviderCard from '@/components/ProviderCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Calendar } from 'lucide-react';

const Index = () => {
  // Sample data for featured providers
  const featuredProviders = [
    {
      name: "Reliable Plumbing Co.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
      rating: 4.8,
      reviewCount: 127,
      location: "New York, NY",
      verified: true,
      badges: ["Licensed", "Insured", "5+ Years"],
      services: ["Plumbing Repair", "Water Heater Installation", "Drain Cleaning"]
    },
    {
      name: "Elite Electrical Services",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.9,
      reviewCount: 94,
      location: "New York, NY",
      verified: true,
      badges: ["Licensed", "Insured", "Background Checked"],
      services: ["Electrical Repairs", "Lighting Installation", "Panel Upgrades"]
    },
    {
      name: "Premier Painting Pros",
      image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.7,
      reviewCount: 89,
      location: "Brooklyn, NY",
      verified: true,
      badges: ["Insured", "Highly Rated"],
      services: ["Interior Painting", "Exterior Painting", "Cabinet Refinishing"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero />
        
        <FeaturedServices />
        
        <HowItWorks />
        
        {/* Featured Professionals */}
        <section id="professionals" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Top-Rated Professionals</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover highly rated service providers in your area with proven track records of customer satisfaction.
              </p>
            </div>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {featuredProviders.map((provider, index) => (
                <ProviderCard
                  key={index}
                  {...provider}
                />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button size="lg">View All Professionals</Button>
            </div>
          </div>
        </section>
        
        {/* Trust Indicators */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-10">Why Choose ProHome</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="rounded-full bg-prohome-light-blue w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-prohome-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Verified Professionals</h3>
                  <p className="text-gray-600">All service providers undergo background checks and licensing verification for your peace of mind.</p>
                </div>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="rounded-full bg-prohome-light-green w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-prohome-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Customer Reviews</h3>
                  <p className="text-gray-600">Authentic reviews from real customers help you choose the right professional for your needs.</p>
                </div>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="rounded-full bg-prohome-light-orange w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-prohome-orange" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Easy Booking</h3>
                  <p className="text-gray-600">Schedule appointments online at your convenience with our simple booking system.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-prohome-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Home Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Find qualified professionals for any home service need. Get started today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-prohome-blue hover:bg-gray-100">
                Find a Pro
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Join as a Professional
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
