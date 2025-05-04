
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { User, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-prohome-blue">
              Aweni
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="font-medium text-gray-600 hover:text-prohome-blue transition-colors">
              Home
            </Link>
            <Link to="/services" className="font-medium text-gray-600 hover:text-prohome-blue transition-colors">
              Services
            </Link>
            <Link to="/how-it-works" className="font-medium text-gray-600 hover:text-prohome-blue transition-colors">
              How It Works
            </Link>
            <Link to="/professionals" className="font-medium text-gray-600 hover:text-prohome-blue transition-colors">
              Find Pros
            </Link>
            <Link to="/contact" className="font-medium text-gray-600 hover:text-prohome-blue transition-colors">
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/signin">
                <User className="h-5 w-5 mr-2" /> Sign In
              </Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Join Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="font-medium text-gray-600 hover:text-prohome-blue py-2 px-2">
                Home
              </Link>
              <Link to="/services" className="font-medium text-gray-600 hover:text-prohome-blue py-2 px-2">
                Services
              </Link>
              <Link to="/how-it-works" className="font-medium text-gray-600 hover:text-prohome-blue py-2 px-2">
                How It Works
              </Link>
              <Link to="/professionals" className="font-medium text-gray-600 hover:text-prohome-blue py-2 px-2">
                Find Pros
              </Link>
              <Link to="/contact" className="font-medium text-gray-600 hover:text-prohome-blue py-2 px-2">
                Contact
              </Link>
              <div className="pt-4 flex flex-col space-y-3">
                <Button variant="outline" size="sm" className="justify-start" asChild>
                  <Link to="/signin">
                    <User className="h-5 w-5 mr-2" /> Sign In
                  </Link>
                </Button>
                <Button className="justify-start" asChild>
                  <Link to="/signup">Join Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
