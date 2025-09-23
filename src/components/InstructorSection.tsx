import { Button } from "@/components/ui/button";
import { Heart, Award, Users } from "lucide-react";

const InstructorSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Instructor Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-medium bg-gradient-subtle">
              {/* Placeholder for instructor image - you can replace with actual photo */}
              <div className="w-full h-full bg-gradient-to-br from-teal/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-teal to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-16 h-16 text-white" />
                  </div>
                  <p className="font-body text-muted-foreground">Instructor Photo</p>
                </div>
              </div>
            </div>
            
            {/* Floating Achievement Cards */}
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-lg shadow-soft border border-border">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-terracotta" />
                <span className="font-body text-sm font-semibold text-foreground">500+ Sessions</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-lg shadow-soft border border-border">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-teal" />
                <span className="font-body text-sm font-semibold text-foreground">200+ Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Instructor Content */}
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Meet Your Wellness Guide
              </h2>
              <h3 className="font-heading text-xl text-accent mb-6">
                Yves Urbain - Certified Yoga & Massage Therapist
              </h3>
            </div>

            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                With over 8 years of dedicated practice in holistic wellness, Yves brings a unique 
                blend of traditional healing techniques and modern therapeutic approaches to every session.
              </p>
              
              <p>
                Certified in multiple massage therapies including Deep Tissue, Thai Yoga, and Reflexology, 
                Yves believes in the body's natural ability to heal when given the right environment and care.
              </p>
              
              <p>
                His philosophy centers on creating a sacred space where clients can reconnect with their 
                inner wisdom and discover lasting peace through mindful movement and therapeutic touch.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
              <div className="space-y-2">
                <h4 className="font-heading font-semibold text-foreground">Certifications</h4>
                <ul className="font-body text-sm text-muted-foreground space-y-1">
                  <li>• RYT 500 Yoga Alliance</li>
                  <li>• Deep Tissue Massage Therapy</li>
                  <li>• Thai Yoga Massage</li>
                  <li>• Reflexology Practitioner</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-heading font-semibold text-foreground">Specializations</h4>
                <ul className="font-body text-sm text-muted-foreground space-y-1">
                  <li>• Stress Relief & Relaxation</li>
                  <li>• Pain Management</li>
                  <li>• Energy Balancing</li>
                  <li>• Holistic Healing</li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg"
                className="bg-teal hover:bg-teal/90 text-teal-foreground font-semibold px-8 shadow-soft hover:shadow-medium transition-smooth hover-lift"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;