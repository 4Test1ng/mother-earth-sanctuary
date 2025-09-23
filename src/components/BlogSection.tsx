import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

const BlogSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Wellness Wisdom
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest insights on yoga, wellness, and holistic living 
            to support your journey toward inner peace and vitality.
          </p>
        </div>

        {/* Featured Blog Post */}
        <div className="bg-card rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-smooth hover-lift max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Blog Image */}
            <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-teal/20 to-accent/20">
              <div className="w-full h-full flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-teal" />
              </div>
            </div>

            {/* Blog Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-4">
                
                {/* Category & Date */}
                <div className="flex items-center space-x-4 text-sm">
                  <span className="bg-teal/10 text-teal px-3 py-1 rounded-full font-medium">
                    Wellness Tips
                  </span>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    April 16, 2024
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                  Top 10 Yoga Benefits You Need to Know
                </h3>

                {/* Excerpt */}
                <p className="font-body text-muted-foreground leading-relaxed">
                  Discover the transformative power of yoga and how regular practice can 
                  improve your flexibility, strength, mental clarity, and overall well-being. 
                  From stress relief to better sleep, explore the science-backed benefits 
                  that make yoga essential for modern life.
                </p>

                {/* Benefits Preview */}
                <div className="grid grid-cols-2 gap-2 py-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-teal rounded-full"></div>
                    <span>Improved Flexibility</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span>Increased Strength</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-terracotta rounded-full"></div>
                    <span>Stress Relief</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-teal rounded-full"></div>
                    <span>Better Sleep</span>
                  </div>
                </div>

                {/* Read More Button */}
                <div className="pt-4">
                  <Link to="/blog/top-10-yoga-benefits">
                    <Button 
                      variant="outline"
                      className="border-teal text-teal hover:bg-teal hover:text-teal-foreground group"
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Blog Posts CTA */}
        <div className="text-center mt-12">
          <Link to="/blog">
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 transition-smooth hover-lift"
            >
              Explore All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;