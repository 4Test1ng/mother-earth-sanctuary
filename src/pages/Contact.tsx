import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Navigation
} from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-16 lg:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Ready to begin your wellness journey? Get in touch with us to book a session, 
              ask questions, or learn more about our healing services and retreats.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  We'd love to hear from you. Whether you're looking to book a session, 
                  have questions about our services, or want to learn about our retreats, 
                  we're here to help you on your wellness journey.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-smooth">
                  <div className="p-3 bg-teal/10 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">Visit Our Sanctuary</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      Dzorwulu Pillar 2<br />
                      Aunty Mary Street<br />
                      Accra - Ghana
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-smooth">
                  <div className="p-3 bg-accent/10 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">Call Us</h3>
                    <p className="font-body text-muted-foreground">
                      <a href="tel:+233543800082" className="hover:text-accent transition-smooth">
                        +233 543 800 082
                      </a>
                    </p>
                    <p className="font-body text-xs text-muted-foreground mt-1">
                      Available 8:00 AM - 8:00 PM (Mon-Sat)
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-smooth">
                  <div className="p-3 bg-terracotta/10 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">Email Us</h3>
                    <p className="font-body text-muted-foreground">
                      <a href="mailto:yves.urbain@gmail.com" className="hover:text-accent transition-smooth">
                        yves.urbain@gmail.com
                      </a>
                    </p>
                    <p className="font-body text-xs text-muted-foreground mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-smooth">
                  <div className="p-3 bg-teal/10 rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">Operating Hours</h3>
                    <div className="font-body text-muted-foreground space-y-1">
                      <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                      <p>Saturday: 8:00 AM - 6:00 PM</p>
                      <p>Sunday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <Button 
                  className="w-full bg-terracotta hover:bg-terracotta/90 text-terracotta-foreground font-semibold shadow-soft hover:shadow-medium transition-smooth justify-start"
                >
                  <Calendar className="mr-3 h-5 w-5" />
                  Book an Appointment
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-teal text-teal hover:bg-teal hover:text-teal-foreground font-semibold transition-smooth justify-start"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  WhatsApp Chat
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold transition-smooth justify-start"
                >
                  <Navigation className="mr-3 h-5 w-5" />
                  Get Directions
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl shadow-medium">
              <div className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Send us a Message
                </h2>
                <p className="font-body text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form className="space-y-6">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-body text-sm font-medium text-foreground">
                      Full Name *
                    </label>
                    <Input 
                      placeholder="Your full name"
                      className="bg-background border-input"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-body text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      className="bg-background border-input"
                    />
                  </div>
                </div>

                {/* Phone & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-body text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <Input 
                      placeholder="+233 xxx xxx xxx"
                      className="bg-background border-input"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-body text-sm font-medium text-foreground">
                      Service Interest
                    </label>
                    <select className="w-full p-3 bg-background border border-input rounded-md font-body text-sm">
                      <option value="">Select a service</option>
                      <option value="deep-tissue">Deep Tissue Massage</option>
                      <option value="reflexology">Reflexology</option>
                      <option value="thai-yoga">Thai Yoga Massage</option>
                      <option value="yoga-classes">Yoga Classes</option>
                      <option value="retreats">Wellness Retreats</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="font-body text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <Input 
                    placeholder="What can we help you with?"
                    className="bg-background border-input"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="font-body text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us more about what you're looking for..."
                    rows={5}
                    className="bg-background border-input resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  className="w-full bg-teal hover:bg-teal/90 text-teal-foreground font-semibold py-3 shadow-soft hover:shadow-medium transition-smooth"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>

                <p className="font-body text-xs text-muted-foreground text-center">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Find Us in Accra
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Located in the peaceful Dzorwulu neighborhood, our sanctuary is easily 
              accessible and offers ample parking for your convenience.
            </p>
          </div>

          {/* Map Container */}
          <div className="aspect-[16/9] bg-card rounded-2xl overflow-hidden shadow-medium">
            {/* Placeholder for embedded map */}
            <div className="w-full h-full bg-gradient-to-br from-teal/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-teal mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Interactive Map
                </h3>
                <p className="font-body text-muted-foreground">
                  Embed Google Maps or similar mapping service here
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4 border-teal text-teal hover:bg-teal hover:text-teal-foreground"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-card rounded-xl shadow-soft">
              <MapPin className="h-8 w-8 text-teal mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-foreground mb-2">Convenient Location</h3>
              <p className="font-body text-muted-foreground text-sm">
                Easily accessible from all parts of Accra with public transport links nearby
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl shadow-soft">
              <Navigation className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-foreground mb-2">Free Parking</h3>
              <p className="font-body text-muted-foreground text-sm">
                Complimentary parking available on-site for all our clients
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl shadow-soft">
              <Clock className="h-8 w-8 text-terracotta mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-foreground mb-2">Flexible Hours</h3>
              <p className="font-body text-muted-foreground text-sm">
                Extended hours Monday-Saturday to accommodate your schedule
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;