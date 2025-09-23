import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "./ServiceCard";
import deepTissueImage from "@/assets/deep-tissue-massage.jpg";
import reflexologyImage from "@/assets/reflexology.jpg";
import thaiYogaImage from "@/assets/thai-yoga.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Deep Tissue Massage",
      description: "Therapeutic massage using sustained pressure to target inner muscle layers and connective tissues. Perfect for chronic pain relief and sports injuries.",
      image: deepTissueImage,
      price: "₵200",
      duration: "60 min",
      link: "/services/deep-tissue-massage"
    },
    {
      title: "Reflexology",
      description: "Healing massage focusing on pressure points in feet, hands, and ears. Promotes natural body function and improves circulation throughout the body.",
      image: reflexologyImage,
      price: "₵150", 
      duration: "45 min",
      link: "/services/reflexology"
    },
    {
      title: "Thai Yoga Massage",
      description: "Oil-free healing practice combining yoga postures with palming and thumbing techniques. Enhances flexibility and balances energy systems.",
      image: thaiYogaImage,
      price: "₵180",
      duration: "75 min", 
      link: "/services/thai-yoga-massage"
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Healing Services
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of therapeutic treatments designed to restore balance, 
            relieve tension, and promote holistic wellness for mind, body, and spirit.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={service.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 transition-smooth hover-lift"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;