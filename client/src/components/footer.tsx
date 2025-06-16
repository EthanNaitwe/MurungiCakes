import { Phone, MapPin, User, MessageSquare, Facebook, Instagram } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-chocolate-brown text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-warm-gold mb-4">
              Murungi Cakes
            </h3>
            <p className="text-white mb-4">
              Creating sweet memories with every bite. Your trusted bakery in Mulago, Kampala Uganda.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/256770952685" 
                className="text-white hover:text-warm-gold transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-6 w-6" />
              </a>
              <a 
                href="tel:0770952685" 
                className="text-white hover:text-warm-gold transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-warm-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-warm-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-warm-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-white hover:text-warm-gold transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-white hover:text-warm-gold transition-colors"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white hover:text-warm-gold transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white hover:text-warm-gold transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('order')}
                  className="text-white hover:text-warm-gold transition-colors"
                >
                  Place Order
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-warm-gold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="text-sweet-pink mr-3 h-5 w-5" />
                <span className="text-white">Mulago, Kampala Uganda</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-sweet-pink mr-3 h-5 w-5" />
                <span className="text-white">0770 952 685</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-sweet-pink mr-3 h-5 w-5" />
                <span className="text-white">0755 038 382</span>
              </div>
              <div className="flex items-center">
                <User className="text-sweet-pink mr-3 h-5 w-5" />
                <span className="text-white">Manager Sharon</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-stone-600 mt-8 pt-8 text-center">
          <p className="text-white">
            &copy; 2024 Murungi Cakes. All rights reserved. Made with ❤️ in Kampala, Uganda.
          </p>
        </div>
      </div>
    </footer>
  );
}
