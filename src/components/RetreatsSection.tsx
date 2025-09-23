import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Sunrise } from "lucide-react";

const RetreatsSection = () => {
  const upcomingRetreats = [
    {
      title: "Weekend Wellness Retreat",
      date: "November 15-17, 2024",
      location: "Akosombo, Eastern Region",
      participants: "12 spaces available",
      price: "₵850",
      description: "A transformative 3-day retreat combining yoga, meditation, massage therapy, and nature connection beside Lake Volta.",
      highlights: ["Daily Yoga Sessions", "Therapeutic Massages", "Meditation by the Lake", "Healthy Meals"]
    },
    {
      title: "New Year Renewal Retreat", 
      date: "January 3-5, 2025",
      location: "Cape Coast, Central Region",
      participants: "8 spaces available", 
      price: "₵950",
      description: "Start the new year with intention through beach yoga, sound healing, and personalized wellness consultations.",
      highlights: ["Beach Yoga at Sunrise", "Sound Healing Sessions", "Personal Wellness Plan", "Ocean Meditation"]
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Sunrise className="h-8 w-8 text-accent" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              Upcoming Yoga Retreats
            </h2>
          </div>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Escape the everyday and immerse yourself in transformative wellness experiences 
            in Ghana's most beautiful natural settings.
          </p>
        </div>

        {/* Retreats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {upcomingRetreats.map((retreat, index) => (
            <div 
              key={retreat.title}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-smooth hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Retreat Header */}
              <div className="p-8 pb-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {retreat.title}
                  </h3>
                  <span className="bg-terracotta/10 text-terracotta px-3 py-1 rounded-full text-sm font-semibold">
                    {retreat.price}
                  </span>
                </div>

                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {retreat.description}
                </p>

                {/* Retreat Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm">
                    <Calendar className="h-4 w-4 text-teal" />
                    <span className="font-medium text-foreground">{retreat.date}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">{retreat.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Users className="h-4 w-4 text-terracotta" />
                    <span className="text-muted-foreground">{retreat.participants}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-heading text-sm font-semibold text-foreground mb-3">
                    What's Included:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {retreat.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-teal rounded-full"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Now Button */}
                <Button 
                  className="w-full bg-teal hover:bg-teal/90 text-teal-foreground font-semibold shadow-soft hover:shadow-medium transition-smooth"
                >
                  Reserve Your Spot
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-subtle rounded-2xl p-8 lg:p-12 shadow-soft">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
            Ready for Your Retreat Experience?
          </h3>
          <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join us for an unforgettable journey of healing, growth, and connection. 
            Our retreats are designed to provide deep restoration and lasting transformation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-soft hover:shadow-medium transition-smooth hover-lift"
            >
              View All Retreats
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-teal text-teal hover:bg-teal hover:text-teal-foreground font-semibold px-8 transition-smooth"
            >
              Contact for Custom Retreats
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetreatsSection;