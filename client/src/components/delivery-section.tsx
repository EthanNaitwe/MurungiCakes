import { Bike, Calendar, Zap, CheckCircle, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const deliveryOptions = [
  {
    icon: Bike,
    title: "Same Day Delivery",
    description: "Order before 2 PM for same-day delivery within Kampala",
    price: "FREE",
    bgColor: "bg-warm-gold"
  },
  {
    icon: Calendar,
    title: "Scheduled Delivery",
    description: "Plan ahead for special occasions and events",
    price: "FREE",
    bgColor: "bg-sweet-pink"
  },
  {
    icon: Zap,
    title: "Express Delivery",
    description: "Emergency orders delivered within 2 hours",
    price: "UGX 5,000",
    bgColor: "bg-chocolate-brown"
  }
];

const deliveryAreas = [
  "Mulago", "Wandegeya", "Kawempe", "Makerere",
  "Nakawa", "Ntinda", "Kamwokya"
];

export function DeliverySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-brown mb-4">
            Delivery Services
          </h2>
          <p className="text-lg text-dark-brown max-w-2xl mx-auto">
            We bring our delicious baked goods directly to your doorstep across Kampala and surrounding areas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {deliveryOptions.map((option, index) => (
            <Card key={index} className="bg-moccasin">
              <CardContent className="text-center p-8">
                <div className={`${option.bgColor} p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center`}>
                  <option.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-dark-brown mb-4">
                  {option.title}
                </h3>
                <p className="text-dark-brown mb-4">
                  {option.description}
                </p>
                <span className="text-warm-gold font-bold">
                  {option.price}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Delivery Areas */}
        <Card className="bg-cream-bg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-playfair font-semibold text-dark-brown text-center mb-8">
              Delivery Coverage Areas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {deliveryAreas.map((area, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <CheckCircle className="text-warm-gold mx-auto mb-2 h-6 w-6" />
                  <p className="text-dark-brown font-medium">{area}</p>
                </div>
              ))}
              <div className="bg-white p-4 rounded-lg">
                <Plus className="text-sweet-pink mx-auto mb-2 h-6 w-6" />
                <p className="text-dark-brown font-medium">More Areas</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
