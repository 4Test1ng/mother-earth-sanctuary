import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import deepTissueImage from "@/assets/deep-tissue-massage.jpg";
import reflexologyImage from "@/assets/reflexology.jpg";
import thaiYogaImage from "@/assets/thai-yoga.jpg";

const Services = () => {
  const allServices = [
    {
      title: "Deep Tissue Massage",
      description: "Therapeutic massage using sustained pressure to target inner muscle layers and connective tissues. Ideal for chronic pain, sports injuries, and muscle tension relief.",
      image: deepTissueImage,
      price: "₵200",
      duration: "60 min",
      link: "/services/deep-tissue-massage"
    },
    {
      title: "Reflexology",
      description: "Healing massage focusing on pressure points in feet, hands, and ears. Promotes natural body function, improves circulation, and reduces stress.",
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
    },
    {
      title: "Hot Stone Massage",
      description: "Therapeutic massage using heated stones to relax muscles and improve circulation. The warmth penetrates deep into tissues for ultimate relaxation.",
      image: deepTissueImage, // Reusing for now
      price: "₵220",
      duration: "60 min", 
      link: "/services/hot-stone-massage"
    },
    {
      title: "Aromatherapy Massage",
      description: "Relaxing massage using essential oils to enhance both physical and emotional well-being. Each session is customized with oils suited to your needs.",
      image: reflexologyImage, // Reusing for now
      price: "₵190",
      duration: "60 min", 
      link: "/services/aromatherapy-massage"
    },
    {
      title: "Cupping Therapy",
      description: "Ancient healing technique using suction cups to promote blood flow, reduce inflammation, and relieve muscle tension and pain.",
      image: thaiYogaImage, // Reusing for now
      price: "₵170",
      duration: "45 min", 
      link: "/services/cupping-therapy"
    },
    {
      title: "Acupuncture Healing",
      description: "Traditional Chinese medicine using fine needles to restore energy balance, reduce pain, and promote the body's natural healing processes.",
      image: deepTissueImage, // Reusing for now
      price: "₵250",
      duration: "50 min", 
      link: "/services/acupuncture-healing"
    },
    {
      title: "Prenatal Yoga Classes",
      description: "Gentle yoga sessions specifically designed for expecting mothers. Improves flexibility, reduces pregnancy discomfort, and prepares for childbirth.",
      image: reflexologyImage, // Reusing for now
      price: "₵120",
      duration: "75 min", 
      link: "/services/prenatal-yoga"
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-16 lg:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our Healing Services
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              Discover our comprehensive range of therapeutic treatments designed to restore balance, 
              relieve tension, and promote holistic wellness for mind, body, and spirit.
            </p>
            <Button 
              size="lg"
              className="bg-terracotta hover:bg-terracotta/90 text-terracotta-foreground font-semibold px-8 shadow-soft hover:shadow-medium transition-smooth hover-lift"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Massage Therapies */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Massage Therapies
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Professional therapeutic massages to release tension, reduce pain, and promote deep relaxation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.slice(0, 6).map((service, index) => (
                <div key={service.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>

          {/* Holistic Practices */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Holistic Practices
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Ancient healing methods and yoga practices for comprehensive wellness and spiritual growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {allServices.slice(6, 8).map((service, index) => (
                <div key={service.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>

          {/* Service Packages */}
          <div className="bg-surface p-8 lg:p-12 rounded-2xl shadow-soft text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Wellness Packages Available
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
              Combine multiple services for enhanced healing and better value. 
              Our wellness packages are designed to provide comprehensive care and lasting results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h3 className="font-heading font-semibold text-foreground mb-2">Stress Relief Package</h3>
                <p className="font-body text-sm text-muted-foreground mb-3">
                  Deep Tissue + Reflexology + Aromatherapy
                </p>
                <div className="text-terracotta font-semibold">₵480 <span className="text-xs text-muted-foreground line-through">₵560</span></div>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h3 className="font-heading font-semibold text-foreground mb-2">Pain Relief Package</h3>
                <p className="font-body text-sm text-muted-foreground mb-3">
                  Deep Tissue + Cupping + Hot Stone
                </p>
                <div className="text-terracotta font-semibold">₵520 <span className="text-xs text-muted-foreground line-through">₵590</span></div>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h3 className="font-heading font-semibold text-foreground mb-2">Complete Wellness</h3>
                <p className="font-body text-sm text-muted-foreground mb-3">
                  Thai Yoga + Reflexology + Acupuncture
                </p>
                <div className="text-terracotta font-semibold">₵550 <span className="text-xs text-muted-foreground line-through">₵600</span></div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-teal hover:bg-teal/90 text-teal-foreground font-semibold px-8 shadow-soft hover:shadow-medium transition-smooth"
            >
              Explore Packages
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;