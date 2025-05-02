
import React from 'react';
import ServiceCard from './ServiceCard';
import { Wrench, Paint, Shower, Lightbulb, Ruler, Leaf } from 'lucide-react';

const FeaturedServices: React.FC = () => {
  const services = [
    {
      title: 'Plumbing',
      icon: <Wrench className="h-10 w-10 text-prohome-blue" />,
      description: 'From leaks to installations, our verified plumbers can handle any job.',
      color: 'bg-prohome-light-blue'
    },
    {
      title: 'Painting',
      icon: <Paint className="h-10 w-10 text-prohome-blue" />,
      description: 'Professional painters for interior and exterior home painting projects.',
      color: 'bg-prohome-light-blue'
    },
    {
      title: 'Bathroom Remodel',
      icon: <Shower className="h-10 w-10 text-prohome-green" />,
      description: 'Transform your bathroom with expert remodelers and designers.',
      color: 'bg-prohome-light-green'
    },
    {
      title: 'Electrical',
      icon: <Lightbulb className="h-10 w-10 text-prohome-green" />,
      description: 'Licensed electricians for repairs, installations, and upgrades.',
      color: 'bg-prohome-light-green'
    },
    {
      title: 'Home Remodeling',
      icon: <Ruler className="h-10 w-10 text-prohome-orange" />,
      description: 'Complete home renovations and custom remodeling projects.',
      color: 'bg-prohome-light-orange'
    },
    {
      title: 'Lawn & Garden',
      icon: <Leaf className="h-10 w-10 text-prohome-orange" />,
      description: 'Landscaping, lawn care, and garden maintenance services.',
      color: 'bg-prohome-light-orange'
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Home Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover top-rated professionals for all your home service needs. All service providers are verified and reviewed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              color={service.color}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#all-services" className="text-prohome-blue hover:text-prohome-blue/80 font-medium">
            View all services →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
