import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function HeroSection() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-moccasin to-cream-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-dark-brown mb-6">
              Sweetness <span className="text-warm-gold">Made Perfect</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-brown mb-8 leading-relaxed">
              Experience the finest cakes, cookies, and cupcakes in Mulago, Kampala. 
              Fresh, delicious, and made with love for every celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToProducts}
                className="bg-warm-gold text-white px-8 py-3 hover:bg-chocolate-brown"
                size="lg"
              >
                View Our Products
              </Button>
              <Button 
                asChild
                className="bg-sweet-pink text-white px-8 py-3 hover:bg-pink-600"
                size="lg"
              >
                <a href="tel:0770952685">
                  <Phone className="mr-2 h-5 w-5" />
                  Order Now
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Assorted colorful cupcakes and cakes" 
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
