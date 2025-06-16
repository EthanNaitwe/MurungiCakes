import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-warm-gold">
              Murungi Cakes
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-dark-brown hover:text-warm-gold px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-dark-brown hover:text-warm-gold px-3 py-2 text-sm font-medium transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-dark-brown hover:text-warm-gold px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-dark-brown hover:text-warm-gold px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('order')}
              className="bg-warm-gold text-white hover:bg-chocolate-brown"
            >
              Order Now
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-dark-brown hover:text-warm-gold"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-dark-brown hover:text-warm-gold"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="block w-full text-left px-3 py-2 text-dark-brown hover:text-warm-gold"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-dark-brown hover:text-warm-gold"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-dark-brown hover:text-warm-gold"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('order')}
              className="w-full mt-2 bg-warm-gold text-white hover:bg-chocolate-brown"
            >
              Order Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
