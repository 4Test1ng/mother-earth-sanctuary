import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Akosua Mensah",
      role: "Marketing Executive",
      content: "The deep tissue massage at Mother Earth completely transformed how I feel. Yves has incredible healing hands and creates such a peaceful atmosphere. I leave feeling renewed every time.",
      rating: 5,
      location: "Accra"
    },
    {
      name: "Kwame Asante", 
      role: "Business Owner",
      content: "I've tried many massage places in Accra, but nothing compares to the holistic approach here. The Thai yoga massage helped with my chronic back pain better than any treatment I've had.",
      rating: 5,
      location: "East Legon"
    },
    {
      name: "Ama Osei",
      role: "Teacher",
      content: "The reflexology sessions have been life-changing for my stress levels. Yves is not just skilled but genuinely cares about your wellbeing. This place is truly a sanctuary.",
      rating: 5,
      location: "Dzorwulu"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-terracotta text-terracotta' : 'text-muted'}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how Mother Earth Yoga Sanctuary has transformed the lives of our clients 
            through healing, peace, and holistic wellness.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-smooth hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="h-8 w-8 text-teal/60" />
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="font-body text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="border-t border-border pt-4">
                <h4 className="font-heading font-semibold text-foreground">
                  {testimonial.name}
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  {testimonial.role} • {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-terracotta">500+</div>
            <div className="font-body text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-teal">8+</div>
            <div className="font-body text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-accent">15+</div>
            <div className="font-body text-sm text-muted-foreground">Healing Services</div>
          </div>
          <div className="space-y-2">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-terracotta">4.9/5</div>
            <div className="font-body text-sm text-muted-foreground">Client Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;