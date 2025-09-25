import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Award, Users, Leaf, Star, Target } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About Mother Earth Yoga Sanctuary
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Discover the story behind Accra's premier wellness destination, where ancient healing 
              traditions meet modern therapeutic practices in a sanctuary of peace and transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Story Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium bg-gradient-subtle">
                <div className="w-full h-full bg-gradient-to-br from-teal/20 to-accent/20 flex items-center justify-center">
                  <Leaf className="w-24 h-24 text-teal" />
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold text-foreground">
                Our Journey to Wellness
              </h2>
              
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Mother Earth Yoga Sanctuary was born from a deep passion for holistic healing 
                  and the belief that everyone deserves access to transformative wellness experiences. 
                  Founded in 2016 in the heart of Accra, our sanctuary has become a haven for 
                  those seeking balance, peace, and genuine healing.
                </p>
                
                <p>
                  What started as a small yoga studio has evolved into a comprehensive wellness 
                  center, offering everything from therapeutic massage to healing retreats. 
                  Our approach combines time-tested traditional healing methods with modern 
                  therapeutic techniques, creating a unique healing experience.
                </p>
                
                <p>
                  Located in the peaceful Dzorwulu neighborhood, our sanctuary provides an 
                  escape from the bustling city life, offering our clients a tranquil space 
                  to reconnect with themselves and their inner wisdom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-teal/10 rounded-full">
                  <Heart className="h-6 w-6 text-teal" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed">
                To provide a sacred space where individuals can experience profound healing, 
                personal transformation, and lasting wellness through the integration of yoga, 
                therapeutic massage, and holistic practices rooted in ancient wisdom.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed">
                To be Ghana's leading wellness sanctuary, inspiring a community of individuals 
                who embrace holistic living, inner peace, and conscious well-being as pathways 
                to a more fulfilling and balanced life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Instructor */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet Your Healing Guide
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about the passionate practitioner behind Mother Earth Yoga Sanctuary 
              and his journey to holistic wellness.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Instructor Photo */}
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-medium bg-gradient-subtle">
                  <div className="w-full h-full bg-gradient-to-br from-teal/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-teal to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Heart className="w-16 h-16 text-white" />
                      </div>
                      <p className="font-body text-muted-foreground">Yves Urbain</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-card p-4 rounded-lg shadow-soft">
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-terracotta">8+</div>
                    <div className="font-body text-xs text-muted-foreground">Years</div>
                  </div>
                </div>
              </div>

              {/* Instructor Bio */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    Yves Urbain
                  </h3>
                  <p className="font-body text-lg text-accent mb-4">
                    Founder & Lead Wellness Practitioner
                  </p>
                </div>

                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Yves Urbain is a certified yoga instructor and massage therapist with over 
                    8 years of experience in holistic wellness. His journey began during his 
                    own healing process, where he discovered the transformative power of 
                    combining physical therapy with mindful movement.
                  </p>
                  
                  <p>
                    Trained in multiple modalities including Deep Tissue Massage, Thai Yoga 
                    Massage, and Reflexology, Yves brings a comprehensive understanding of 
                    the body's healing mechanisms. His gentle yet effective approach has 
                    helped hundreds of clients find relief from chronic pain, stress, and 
                    emotional tension.
                  </p>
                  
                  <p>
                    Beyond his technical skills, Yves is known for his intuitive healing 
                    approach and his ability to create a safe, nurturing space where clients 
                    feel comfortable to release and heal deeply.
                  </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="space-y-2">
                    <h4 className="font-heading font-semibold text-foreground text-sm">Education</h4>
                    <ul className="font-body text-xs text-muted-foreground space-y-1">
                      <li>• BSc. Physiotherapy</li>
                      <li>• Advanced Massage Therapy</li>
                      <li>• Yoga Teacher Training (500hr)</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-heading font-semibold text-foreground text-sm">Certifications</h4>
                    <ul className="font-body text-xs text-muted-foreground space-y-1">
                      <li>• Licensed Massage Therapist</li>
                      <li>• Reflexology Practitioner</li>
                      <li>• Thai Yoga Massage Certified</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Mother Earth Yoga Sanctuary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "We approach every client with deep empathy and understanding, creating a safe space for healing and growth."
              },
              {
                icon: Star,
                title: "Excellence", 
                description: "We maintain the highest standards in our practices, continuously learning and improving our healing methods."
              },
              {
                icon: Users,
                title: "Community",
                description: "We foster a supportive community where individuals connect, grow, and inspire each other's wellness journey."
              },
              {
                icon: Leaf,
                title: "Natural Healing",
                description: "We honor traditional healing methods and work in harmony with the body's natural ability to restore itself."
              },
              {
                icon: Target,
                title: "Personalized Care",
                description: "Every session is tailored to meet individual needs, ensuring the most effective and meaningful healing experience."
              },
              {
                icon: Award,
                title: "Integrity",
                description: "We practice with honesty, transparency, and ethical standards, building trust through authentic care."
              }
            ].map((value, index) => (
              <div 
                key={value.title}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-smooth text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-teal/10 rounded-full">
                    <value.icon className="h-6 w-6 text-teal" />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-accent text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Ready to Begin Your Wellness Journey?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Join our community of wellness seekers and discover the transformative 
              power of holistic healing at Mother Earth Yoga Sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                asChild
                className="bg-terracotta hover:bg-terracotta/90 text-terracotta-foreground font-semibold px-8 shadow-soft"
              >
                <Link to="/contact">Book Your First Session</Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-teal text-teal hover:bg-teal hover:text-teal-foreground font-semibold px-8"
              >
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;