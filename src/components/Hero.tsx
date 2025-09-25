import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-sanctuary.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import VideoModal from "./VideoModal";

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage}
            alt="Serene yoga sanctuary interior with natural lighting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Find Your Inner Peace at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-accent">
                Mother Earth Yoga Sanctuary
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Experience transformative wellness through yoga, massage therapy, and healing retreats 
              in the heart of Accra. Your journey to holistic well-being begins here.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button 
                size="lg"
                asChild
                className="bg-terracotta hover:bg-terracotta/90 text-terracotta-foreground font-semibold px-8 py-3 shadow-medium hover:shadow-strong transition-smooth hover-lift group"
              >
                <Link to="/contact">
                  Book Your Session
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setIsVideoModalOpen(true)}
                className="border-2 border-teal text-teal hover:bg-teal hover:text-teal-foreground font-semibold px-8 py-3 transition-smooth hover-lift group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm font-body text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal rounded-full"></div>
                <span>Professional Certified Instructors</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Holistic Wellness Approach</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                <span>Peaceful Sanctuary Environment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
      </section>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title="Our Story - Mother Earth Yoga Sanctuary"
      />
    </>
  );
};

export default Hero;