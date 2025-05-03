
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProviderCard from '@/components/ProviderCard';
import { Button } from '@/components/ui/button';

const Professionals = () => {
  // Sample data for featured providers (same as in Index.tsx)
  const featuredProviders = [
    {
      name: "Family First Plumbing",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
      rating: 4.8,
      reviewCount: 127,
      location: "New York, NY",
      verified: true,
      badges: ["Licensed", "Insured", "Family-Friendly"],
      services: ["Family Plumbing Repair", "Water Heater Installation", "Child-Safe Fixtures"]
    },
    {
      name: "Safe Home Electrical",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.9,
      reviewCount: 94,
      location: "New York, NY",
      verified: true,
      badges: ["Licensed", "Insured", "Background Checked"],
      services: ["Child-Safe Electrical", "Lighting Installation", "Safety Inspections"]
    },
    {
      name: "Family Spaces Painting",
      image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.7,
      reviewCount: 89,
      location: "Brooklyn, NY",
      verified: true,
      badges: ["Insured", "Non-Toxic Paints", "Family-Approved"],
      services: ["Interior Painting", "Nursery Painting", "Child-Safe Materials"]
    },
    {
      name: "Green Garden Landscaping",
      image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.6,
      reviewCount: 76,
      location: "Queens, NY",
      verified: true,
      badges: ["Eco-Friendly", "Pet-Safe", "Child-Safe"],
      services: ["Lawn Care", "Garden Design", "Playground Safety"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Family-Friendly Professionals</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Connect with our network of verified professionals who specialize in family-friendly home services.
            </p>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {featuredProviders.map((provider, index) => (
                <ProviderCard
                  key={index}
                  {...provider}
                />
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button size="lg" asChild>
                <a href="/">Back to Home</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Professionals;
