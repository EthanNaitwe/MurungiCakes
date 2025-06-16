import { Truck, Clock, Heart, Award } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Within Kampala",
    bgColor: "bg-warm-gold"
  },
  {
    icon: Clock,
    title: "Fresh Daily",
    description: "Made to order",
    bgColor: "bg-sweet-pink"
  },
  {
    icon: Heart,
    title: "Custom Orders",
    description: "Personalized designs",
    bgColor: "bg-chocolate-brown"
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Premium ingredients",
    bgColor: "bg-warm-gold"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-moccasin">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-brown mb-6">
              About Murungi Cakes
            </h2>
            <p className="text-lg text-dark-brown mb-6 leading-relaxed">
              Located in the heart of Mulago, Kampala, Murungi Cakes has been serving the community 
              with exceptional baked goods made from the finest ingredients. Our commitment to quality 
              and creativity ensures every customer receives products that exceed expectations.
            </p>
            <p className="text-lg text-dark-brown mb-8 leading-relaxed">
              From intimate celebrations to grand events, we specialize in creating memorable experiences 
              through our delicious cakes, cupcakes, cookies, and traditional daddies. Every item is 
              carefully crafted with attention to detail and a passion for perfection.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className={`${feature.bgColor} p-3 rounded-full mr-4`}>
                    <feature.icon className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-brown">{feature.title}</h4>
                    <p className="text-sm text-dark-brown">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional bakery kitchen with baker decorating cakes" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            {/* Location Badge */}
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-sweet-pink rounded-full mr-3"></div>
                <div>
                  <h5 className="font-semibold text-dark-brown">Our Location</h5>
                  <p className="text-sm text-dark-brown">Mulago, Kampala Uganda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
