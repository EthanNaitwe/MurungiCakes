import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    category: "Celebration Cakes",
    description: "Custom birthday, wedding, and special occasion cakes",
    price: "From UGX 50,000",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  },
  {
    category: "Cupcakes",
    description: "Individual treats perfect for any occasion",
    price: "UGX 3,500 each",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  },
  {
    category: "Cookies",
    description: "Crispy, chewy, and perfectly sweet cookies",
    price: "UGX 2,000 each",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  },
  {
    category: "Daddies",
    description: "Traditional favorites and specialty pastries",
    price: "UGX 1,500 each",
    image: "https://images.unsplash.com/photo-1549388604-817d15aa0968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  }
];

const featuredProducts = [
  {
    name: "Chocolate Wedding Cake",
    description: "Multi-layered chocolate cake with elegant decorations",
    price: "UGX 150,000",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Red Velvet Cupcakes",
    description: "Classic red velvet with cream cheese frosting",
    price: "UGX 4,000 each",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Artisan Cookie Collection",
    description: "Premium cookies with nuts and chocolate",
    price: "UGX 2,500 each",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
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
