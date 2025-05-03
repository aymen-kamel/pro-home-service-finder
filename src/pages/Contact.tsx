
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Have questions about our services or need support? We're here to help your family find the perfect solution.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <Input id="name" placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <Input id="email" type="email" placeholder="Your email address" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea id="message" placeholder="Tell us what you need" className="min-h-32" />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
              
              <div>
                <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                  <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-prohome-blue mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-gray-600">123 Family Street, Suite 100<br />New York, NY 10001</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-prohome-blue mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-gray-600">(123) 456-7890</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-prohome-blue mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-gray-600">contact@aweni.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
