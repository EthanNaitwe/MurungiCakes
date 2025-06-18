import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import cake1 from "@assets/WhatsApp Image 2025-06-18 at 10.28.55_1750255387618.jpeg";
import cake2 from "@assets/WhatsApp Image 2025-06-18 at 10.28.56_1750255387617.jpeg";
import cake3 from "@assets/WhatsApp Image 2025-06-18 at 10.28.56 (1)_1750255387617.jpeg";
import cake4 from "@assets/WhatsApp Image 2025-06-18 at 10.28.56 (2)_1750255387617.jpeg";
import cake5 from "@assets/WhatsApp Image 2025-06-18 at 10.28.57_1750255387616.jpeg";
import cake6 from "@assets/WhatsApp Image 2025-06-18 at 10.28.57 (1)_1750255387616.jpeg";
import cake7 from "@assets/WhatsApp Image 2025-06-18 at 10.28.57 (2)_1750255387615.jpeg";
import cake8 from "@assets/WhatsApp Image 2025-06-18 at 10.28.58_1750255387615.jpeg";
import cake9 from "@assets/WhatsApp Image 2025-06-18 at 10.28.58 (1)_1750255387614.jpeg";
import cake10 from "@assets/WhatsApp Image 2025-06-18 at 10.28.58 (2)_1750255387614.jpeg";

const galleryImages = [
  {
    title: "Celebration Cake",
    description: "Custom decorated birthday cake",
    image: cake1
  },
  {
    title: "Special Occasion",
    description: "Beautifully crafted party cake",
    image: cake2
  },
  {
    title: "Wedding Delight",
    description: "Elegant wedding celebration cake",
    image: cake3
  },
  {
    title: "Anniversary Special",
    description: "Multi-layer anniversary cake",
    image: cake4
  },
  {
    title: "Birthday Creation",
    description: "Colorful birthday cake design",
    image: cake5
  },
  {
    title: "Premium Design",
    description: "Handcrafted premium cake",
    image: cake6
  },
  {
    title: "Festive Cake",
    description: "Special celebration cake",
    image: cake7
  },
  {
    title: "Signature Style",
    description: "Our signature cake creation",
    image: cake8
  },
  {
    title: "Custom Order",
    description: "Personalized cake design",
    image: cake9
  },
  {
    title: "Masterpiece",
    description: "Artisan crafted masterpiece",
    image: cake10
  }
];

export function GallerySection() {
  return (
    <section className="py-20 bg-moccasin">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-brown mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-dark-brown max-w-2xl mx-auto">
            Take a look at some of our recent creations made fresh at Murungi Cakes in Mulago, Kampala.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative group">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-playfair font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-dark-brown text-lg">
            Ready to create something special? Contact Manager Sharon to discuss your custom cake needs.
          </p>
        </div>
      </div>
    </section>
  );
}