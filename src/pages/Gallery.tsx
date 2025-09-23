import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Camera, Filter, Grid, Eye } from "lucide-react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const galleryCategories = [
    "All", "Sanctuary", "Retreats", "Classes", "Massage Therapy", "Events"
  ];

  const galleryImages = [
    {
      id: 1,
      category: "Sanctuary",
      title: "Peaceful Meditation Space",
      description: "Our serene meditation area with natural lighting",
    },
    {
      id: 2, 
      category: "Classes",
      title: "Morning Yoga Session",
      description: "Group yoga class in our main studio",
    },
    {
      id: 3,
      category: "Massage Therapy",
      title: "Therapeutic Treatment Room", 
      description: "Calming massage therapy environment",
    },
    {
      id: 4,
      category: "Retreats",
      title: "Weekend Retreat at Akosombo",
      description: "Participants enjoying lakeside yoga",
    },
    {
      id: 5,
      category: "Sanctuary", 
      title: "Reception & Waiting Area",
      description: "Welcoming entrance with natural elements",
    },
    {
      id: 6,
      category: "Events",
      title: "Workshop Session",
      description: "Educational wellness workshop in progress",
    },
    {
      id: 7,
      category: "Retreats",
      title: "Beach Meditation",
      description: "Sunset meditation at Cape Coast retreat",
    },
    {
      id: 8,
      category: "Classes",
      title: "Thai Yoga Massage Class",
      description: "Learning traditional healing techniques",
    },
    {
      id: 9,
      category: "Massage Therapy",
      title: "Reflexology Session",
      description: "Peaceful foot massage therapy",
    }
  ];

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-16 lg:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Camera className="h-8 w-8 text-accent" />
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
                Gallery
              </h1>
            </div>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Take a visual journey through Mother Earth Yoga Sanctuary. Explore our peaceful spaces, 
              healing sessions, retreat experiences, and the transformative moments we share with our community.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-surface sticky top-16 z-40 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Filter className="h-5 w-5 text-muted-foreground mr-2" />
            <span className="font-medium text-muted-foreground">Filter by:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {galleryCategories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={`transition-smooth ${
                  activeFilter === category 
                    ? "bg-teal text-teal-foreground shadow-soft" 
                    : "border-border text-muted-foreground hover:border-teal hover:text-teal"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Grid className="h-4 w-4" />
              <span>Showing {filteredImages.length} image{filteredImages.length !== 1 ? 's' : ''}</span>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className="group relative bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-smooth hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Image Container */}
                <div className="aspect-[4/3] bg-gradient-to-br from-teal/20 to-accent/20 relative overflow-hidden">
                  
                  {/* Placeholder for actual images */}
                  <div className="w-full h-full flex items-center justify-center">
                    <Camera className="w-12 h-12 text-teal" />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button 
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 text-primary hover:bg-white"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Full Size
                      </Button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-background/90 text-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>

                {/* Image Info */}
                <div className="p-4">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-smooth">
                    {image.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                No images found
              </h3>
              <p className="font-body text-muted-foreground">
                Try selecting a different category to view more images.
              </p>
            </div>
          )}

          {/* Load More */}
          {filteredImages.length > 0 && (
            <div className="text-center mt-12">
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-teal text-teal hover:bg-teal hover:text-teal-foreground font-semibold px-8 transition-smooth"
              >
                Load More Images
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-16 bg-gradient-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Experience the Sanctuary Yourself
            </h2>
            <p className="font-body text-lg text-white/90 mb-8">
              These images only capture a glimpse of the peace and healing you'll find at 
              Mother Earth Yoga Sanctuary. Come visit us and experience the transformation firsthand.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-teal hover:bg-white/90 font-semibold px-8 shadow-soft"
              >
                Book a Visit
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-teal font-semibold px-8"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;