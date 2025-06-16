import { useState } from "react";
import { Phone, User, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertOrderSchema } from "@shared/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

type OrderFormData = z.infer<typeof insertOrderSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm<OrderFormData>({
    resolver: zodResolver(insertOrderSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: OrderFormData) => {
      const response = await apiRequest('POST', '/api/orders', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Order Submitted Successfully!",
        description: "Manager Sharon will contact you within 24 hours to confirm details and pricing.",
      });
      reset();
      queryClient.invalidateQueries({ queryKey: ['/api/orders'] });
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "Please check your information and try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: OrderFormData) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-moccasin">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-brown mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-dark-brown max-w-2xl mx-auto">
            Ready to place an order or have questions? Contact Manager Sharon directly or fill out our inquiry form.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-playfair font-semibold text-dark-brown mb-8">
              Contact Information
            </h3>
            
            {/* Manager Info */}
            <Card className="mb-6 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-warm-gold p-3 rounded-full mr-4">
                    <User className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-brown text-lg">Manager Sharon</h4>
                    <p className="text-dark-brown text-sm">Order Coordinator & Customer Service</p>
                  </div>
                </div>
                
                {/* Phone Numbers */}
                <div className="space-y-3 mb-4">
                  <a 
                    href="tel:0770952685" 
                    className="flex items-center p-3 bg-moccasin rounded-lg hover:bg-warm-gold hover:text-white transition-colors group"
                  >
                    <Phone className="group-hover:text-white text-sweet-pink mr-3 h-5 w-5" />
                    <span className="font-medium">0770 952 685</span>
                  </a>
                  <a 
                    href="tel:0755038382" 
                    className="flex items-center p-3 bg-moccasin rounded-lg hover:bg-warm-gold hover:text-white transition-colors group"
                  >
                    <Phone className="group-hover:text-white text-sweet-pink mr-3 h-5 w-5" />
                    <span className="font-medium">0755 038 382</span>
                  </a>
                </div>
                
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/256770952685" 
                  className="flex items-center justify-center w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <MessageSquare className="mr-3 h-5 w-5" />
                  <span className="font-medium">Chat on WhatsApp</span>
                </a>
              </CardContent>
            </Card>
            
            {/* Location */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-sweet-pink p-3 rounded-full mr-4">
                    <MapPin className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-brown text-lg">Our Location</h4>
                    <p className="text-dark-brown">Mulago, Kampala Uganda</p>
                  </div>
                </div>
                
                {/* Map Placeholder */}
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="text-gray-400 mx-auto mb-2 h-12 w-12" />
                    <p className="text-gray-500 text-sm">Interactive Map Coming Soon</p>
                    <p className="text-gray-500 text-xs">Click to view on Google Maps</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Order Form */}
          <Card id="order" className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-semibold text-dark-brown mb-6">
                Place Your Order
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Customer Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="customerName">Full Name *</Label>
                    <Input
                      id="customerName"
                      {...register("customerName")}
                      placeholder="Your full name"
                      className={errors.customerName ? "border-red-500" : ""}
                    />
                    {errors.customerName && (
                      <p className="text-red-500 text-sm mt-1">{errors.customerName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="customerPhone">Phone Number *</Label>
                    <Input
                      id="customerPhone"
                      {...register("customerPhone")}
                      placeholder="0700 000 000"
                      className={errors.customerPhone ? "border-red-500" : ""}
                    />
                    {errors.customerPhone && (
                      <p className="text-red-500 text-sm mt-1">{errors.customerPhone.message}</p>
                    )}
                  </div>
                </div>
                
                {/* Product Selection */}
                <div>
                  <Label htmlFor="productType">Product Type *</Label>
                  <Select onValueChange={(value) => setValue("productType", value)}>
                    <SelectTrigger className={errors.productType ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cake">Celebration Cake</SelectItem>
                      <SelectItem value="cupcakes">Cupcakes</SelectItem>
                      <SelectItem value="cookies">Cookies</SelectItem>
                      <SelectItem value="daddies">Daddies</SelectItem>
                      <SelectItem value="custom">Custom Order</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.productType && (
                    <p className="text-red-500 text-sm mt-1">{errors.productType.message}</p>
                  )}
                </div>
                
                {/* Delivery Information */}
                <div>
                  <Label htmlFor="deliveryAddress">Delivery Address *</Label>
                  <Textarea
                    id="deliveryAddress"
                    {...register("deliveryAddress")}
                    placeholder="Complete delivery address in Kampala"
                    rows={3}
                    className={errors.deliveryAddress ? "border-red-500" : ""}
                  />
                  {errors.deliveryAddress && (
                    <p className="text-red-500 text-sm mt-1">{errors.deliveryAddress.message}</p>
                  )}
                </div>
                
                {/* Event Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eventDate">Needed Date *</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      {...register("eventDate")}
                      className={errors.eventDate ? "border-red-500" : ""}
                    />
                    {errors.eventDate && (
                      <p className="text-red-500 text-sm mt-1">{errors.eventDate.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="eventTime">Preferred Time</Label>
                    <Input
                      id="eventTime"
                      type="time"
                      {...register("eventTime")}
                    />
                  </div>
                </div>
                
                {/* Special Requirements */}
                <div>
                  <Label htmlFor="specialRequirements">Special Requirements</Label>
                  <Textarea
                    id="specialRequirements"
                    {...register("specialRequirements")}
                    placeholder="Any special decorations, flavors, dietary requirements, or custom messages..."
                    rows={4}
                  />
                </div>
                
                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-warm-gold text-white hover:bg-chocolate-brown"
                  size="lg"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Submitting..." : "Submit Order Request"}
                </Button>
                
                <p className="text-sm text-dark-brown text-center">
                  Manager Sharon will contact you within 24 hours to confirm your order and discuss pricing.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
