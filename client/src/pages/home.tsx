import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProductShowcase } from "@/components/product-showcase";
import { GallerySection } from "@/components/gallery-section";
import { AboutSection } from "@/components/about-section";
import { DeliverySection } from "@/components/delivery-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <GallerySection />
      <AboutSection />
      <DeliverySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
