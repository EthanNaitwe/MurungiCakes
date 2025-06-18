import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import cake1 from "@assets/WhatsApp Image 2025-06-18 at 10.28.55_1750255387618.jpeg";
import cake2 from "@assets/WhatsApp Image 2025-06-18 at 10.28.56_1750255387617.jpeg";
import cake3 from "@assets/WhatsApp Image 2025-06-18 at 10.28.56 (1)_1750255387617.jpeg";
import cake4 from "@assets/WhatsApp Image 2025-06-18 at 10.28.57_1750255387616.jpeg";
import cake5 from "@assets/WhatsApp Image 2025-06-18 at 10.28.57 (1)_1750255387616.jpeg";
import cake6 from "@assets/WhatsApp Image 2025-06-18 at 10.28.57 (2)_1750255387615.jpeg";
import cake7 from "@assets/WhatsApp Image 2025-06-18 at 10.28.58_1750255387615.jpeg";

const products = [
  {
    category: "Celebration Cakes",
    description: "Custom birthday, wedding, and special occasion cakes",
    price: "From UGX 50,000",
    image: cake1
  },
  {
    category: "Cupcakes",
    description: "Individual treats perfect for any occasion",
    price: "UGX 3,500 each",
    image: cake2
  },
  {
    category: "Cookies",
    description: "Crispy, chewy, and perfectly sweet cookies",
    price: "UGX 2,000 each",
    image: cake3
  },
  {
    category: "Daddies",
    description: "Traditional favorites and specialty pastries",
    price: "UGX 1,500 each",
    image: cake4
  }
];

const featuredProducts = [
  {
    name: "Celebration Special",
    description: "Beautiful custom decorated cakes for special occasions",
    price: "UGX 150,000",
    image: cake5
  },
  {
    name: "Premium Treats",
    description: "Delicious handcrafted sweets made with love",
    price: "UGX 4,000 each",
    image: cake6
  },
  {
    name: "Signature Creation",
    description: "Our finest baked goods with premium ingredients",
    price: "UGX 2,500 each",
    image: cake7
  }
];

export function ProductShowcase() {
  const scrollToOrder = () => {
    const element = document.getElementById('order');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-brown mb-4">
            Our Delicious Products
          </h2>
          <p className="text-lg text-dark-brown max-w-2xl mx-auto">
            From celebration cakes to daily treats, every product is crafted with premium ingredients and attention to detail.
          </p>
        </div>
        
        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="bg-moccasin hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <img 
                  src={product.image} 
                  alt={product.category}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-playfair font-semibold text-dark-brown mb-2">
                  {product.category}
                </h3>
                <p className="text-dark-brown text-sm mb-4">
                  {product.description}
                </p>
                <span className="text-warm-gold font-semibold">
                  {product.price}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Featured Products Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h4 className="text-xl font-playfair font-semibold text-dark-brown mb-2">
                  {product.name}
                </h4>
                <p className="text-dark-brown text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-warm-gold font-bold text-lg">
                    {product.price}
                  </span>
                  <Button 
                    onClick={scrollToOrder}
                    className="bg-sweet-pink text-white hover:bg-pink-600"
                    size="sm"
                  >
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}