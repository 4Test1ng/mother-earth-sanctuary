import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, Star, Heart, Zap, Shield, Calendar, Phone } from "lucide-react";
import deepTissueImage from "@/assets/deep-tissue-massage.jpg";
import reflexologyImage from "@/assets/reflexology.jpg";
import thaiYogaImage from "@/assets/thai-yoga.jpg";

const ServiceDetail = () => {
  const { serviceName } = useParams();

  const serviceData: Record<string, any> = {
    "deep-tissue-massage": {
      title: "Deep Tissue Massage",
      price: "₵200",
      duration: "60 minutes",
      image: deepTissueImage,
      description: "Deep tissue massage is primarily used to treat musculoskeletal issues, such as strains and sports injuries. It involves applying sustained pressure using slow, deep strokes to target the inner layers of your muscles and connective tissues.",
      benefits: [
        { icon: Heart, title: "Alleviates Chronic Pain", description: "Targets deep muscle layers to relieve persistent aches and pains" },
        { icon: Zap, title: "Relieves Muscle Tension", description: "Breaks up muscle adhesions and knots for improved flexibility" },
        { icon: Star, title: "Improves Blood Circulation", description: "Enhances blood flow to promote faster healing and recovery" },
        { icon: Shield, title: "Reduces Inflammation", description: "Helps decrease swelling and promotes tissue repair" }
      ],
      process: [
        "Initial consultation to assess your specific needs and pain points",
        "Preparation of the treatment room with calming ambiance",
        "Application of therapeutic oils suited to your skin type",
        "Targeted massage using sustained pressure and slow, deep strokes",
        "Focus on problem areas with specialized techniques",
        "Cool-down period with gentle stretching and relaxation"
      ],
      ideal: [
        "Individuals with chronic muscle tension or pain",
        "Athletes recovering from sports injuries",
        "Office workers with neck and shoulder stiffness",
        "Those seeking relief from stress-related muscle tension"
      ]
    },
    "reflexology": {
      title: "Reflexology",
      price: "₵150",
      duration: "45 minutes", 
      image: reflexologyImage,
      description: "Reflexology is a type of massage that involves applying different amounts of pressure to the feet, hands, and ears. It's based on a theory that these body parts are connected to certain organs and body systems.",
      benefits: [
        { icon: Heart, title: "Relieves Tension", description: "Reduces stress and promotes deep relaxation throughout the body" },
        { icon: Zap, title: "Improves Circulation", description: "Enhances blood flow and lymphatic drainage" },
        { icon: Star, title: "Promotes Natural Function", description: "Supports the body's natural healing processes" },
        { icon: Shield, title: "Balances Energy", description: "Restores harmony between mind, body, and spirit" }
      ],
      process: [
        "Comfortable positioning in our relaxation chair",
        "Assessment of pressure points on feet, hands, and ears",
        "Gentle cleansing and preparation of treatment areas",
        "Systematic application of pressure to specific reflex points",
        "Personalized attention to areas of concern",
        "Integration period with calming herbal tea"
      ],
      ideal: [
        "Those seeking stress relief and relaxation",
        "People with circulation issues",
        "Individuals looking for natural healing support",
        "Anyone wanting to improve overall well-being"
      ]
    },
    "thai-yoga-massage": {
      title: "Thai Yoga Massage (No Oil)",
      price: "₵180",
      duration: "75 minutes",
      image: thaiYogaImage,
      description: "Thai yoga massage is a unique healing system where the practitioner guides the client through a series of yoga postures, while palming and thumbing along the body's energy lines and pressure points.",
      benefits: [
        { icon: Heart, title: "Improves Flexibility", description: "Enhances range of motion through assisted stretching" },
        { icon: Zap, title: "Relieves Joint & Muscle Tension", description: "Releases stiffness and promotes mobility" },
        { icon: Star, title: "Balances Energy Systems", description: "Harmonizes the body's energy flow along meridian lines" },
        { icon: Shield, title: "Enhances Mental Clarity", description: "Promotes mindfulness and mental focus" }
      ],
      process: [
        "Comfortable positioning on our specialized Thai massage mat",
        "Assessment of your flexibility and energy flow",
        "Gentle warm-up movements and breathing exercises",
        "Guided yoga postures with practitioner assistance",
        "Rhythmic palming and thumbing along energy lines",
        "Integration and grounding with meditation"
      ],
      ideal: [
        "Yoga practitioners seeking deeper stretches",
        "Athletes looking to improve flexibility",
        "Those with joint stiffness or limited mobility",
        "Anyone interested in energy balancing"
      ]
    }
  };

  const service = serviceData[serviceName!];

  if (!service) {
    return (
      <Layout>
        <div className="py-16 text-center">
          <h1 className="font-heading text-2xl text-foreground">Service not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {service.title}
            </h1>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              {service.description}
            </p>
            
            {/* Price & Duration */}
            <div className="flex items-center space-x-8 mb-8">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-terracotta" />
                <span className="font-heading text-2xl font-bold text-terracotta">{service.price}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-teal" />
                <span className="font-body text-muted-foreground">{service.duration}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                asChild
                className="bg-terracotta hover:bg-terracotta/90 text-terracotta-foreground font-semibold px-8 shadow-medium hover:shadow-strong transition-smooth hover-lift"
              >
                <Link to="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book This Service
                </Link>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.open('https://wa.me/233543800082?text=I have a question about ' + service.title, '_blank')}
                className="border-2 border-teal text-teal hover:bg-teal hover:text-teal-foreground font-semibold px-8 transition-smooth"
              >
                <Phone className="mr-2 h-5 w-5" />
                Ask Questions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Benefits & Healing Effects
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the transformative benefits of {service.title} therapy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {service.benefits.map((benefit: any, index: number) => (
              <div 
                key={benefit.title}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-teal/10 rounded-full flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Treatment Process */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                What to Expect
              </h2>
              <div className="space-y-4">
                {service.process.map((step: string, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal/10 rounded-full flex items-center justify-center">
                      <span className="text-teal font-semibold text-sm">{index + 1}</span>
                    </div>
                    <p className="font-body text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Perfect For
              </h2>
              <div className="space-y-4">
                {service.ideal.map((point: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="font-body text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>

              {/* Booking Section */}
              <div className="mt-8 p-6 bg-gradient-subtle rounded-xl">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Ready to Experience Healing?
                </h3>
                <p className="font-body text-muted-foreground mb-4 text-sm">
                  Book your {service.title} session today and take the first step 
                  toward pain-free living and holistic wellness.
                </p>
                <Button 
                  asChild
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-soft hover:shadow-medium transition-smooth"
                >
                  <Link to="/contact">Schedule Your Session Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;