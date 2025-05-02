
import React from 'react';
import { Search, ClipboardCheck, Calendar, Star } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-white" />,
      title: 'Find Services',
      description: 'Search for the service you need and browse local professionals.',
      bgColor: 'bg-prohome-blue'
    },
    {
      icon: <ClipboardCheck className="h-10 w-10 text-white" />,
      title: 'Compare Quotes',
      description: 'Review prices, ratings, and detailed profiles to choose the right pro.',
      bgColor: 'bg-prohome-green'
    },
    {
      icon: <Calendar className="h-10 w-10 text-white" />,
      title: 'Book Your Service',
      description: 'Schedule appointments easily and get updates on your booking.',
      bgColor: 'bg-prohome-orange'
    },
    {
      icon: <Star className="h-10 w-10 text-white" />,
      title: 'Leave a Review',
      description: 'Share your experience to help others find quality service.',
      bgColor: 'bg-prohome-blue'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Finding and hiring qualified professionals has never been easier. Follow these simple steps to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`rounded-full p-5 mb-6 ${step.bgColor}`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
