import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Share2, Heart, ArrowLeft, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();

  // Sample blog post data - in a real app, this would come from a CMS or API
  const blogPost = {
    title: "Top 10 Yoga Benefits You Need to Know",
    category: "Wellness Tips", 
    date: "April 16, 2024",
    readTime: "5 min read",
    author: "Yves Urbain",
    excerpt: "Discover the transformative power of yoga and how regular practice can improve your flexibility, strength, mental clarity, and overall well-being.",
    content: [
      {
        type: "paragraph",
        content: "Yoga has been practiced for thousands of years, originating in ancient India as a holistic approach to physical, mental, and spiritual well-being. Today, millions of people worldwide have discovered the incredible benefits that regular yoga practice can bring to their lives."
      },
      {
        type: "heading",
        content: "1. Improved Flexibility"
      },
      {
        type: "paragraph", 
        content: "One of the most obvious benefits of yoga is increased flexibility. Regular practice helps lengthen and stretch muscles, improving your range of motion and reducing stiffness. This enhanced flexibility can help prevent injuries and improve your overall quality of life."
      },
      {
        type: "heading",
        content: "2. Increased Strength"
      },
      {
        type: "paragraph",
        content: "Yoga poses require you to support your body weight in various positions, naturally building strength throughout your entire body. This functional strength helps with daily activities and can complement other forms of exercise."
      },
      {
        type: "heading", 
        content: "3. Stress Relief"
      },
      {
        type: "paragraph",
        content: "The combination of physical movement, controlled breathing, and meditation in yoga creates a powerful stress-reduction tool. Regular practice helps lower cortisol levels and activates the body's relaxation response."
      },
      {
        type: "heading",
        content: "4. Better Posture"
      },
      {
        type: "paragraph",
        content: "Yoga strengthens the core muscles that support good posture and increases awareness of body alignment. This is particularly beneficial for those who spend long hours at a desk or have developed poor postural habits."
      },
      {
        type: "heading",
        content: "5. Increased Energy" 
      },
      {
        type: "paragraph",
        content: "Rather than depleting your energy, yoga practice actually increases vitality by improving circulation, enhancing oxygen flow, and balancing the nervous system. Many practitioners report feeling more energized throughout the day."
      },
      {
        type: "heading",
        content: "6. Improved Sleep"
      },
      {
        type: "paragraph",
        content: "The relaxation techniques learned in yoga help calm the mind and prepare the body for rest. Studies have shown that regular yoga practice can improve sleep quality and help with insomnia."
      },
      {
        type: "heading",
        content: "7. Enhanced Focus and Concentration"
      },
      {
        type: "paragraph",
        content: "The mindful nature of yoga practice trains your attention and improves concentration. The focus required to maintain poses and coordinate breath with movement carries over into daily life activities."
      },
      {
        type: "heading",
        content: "8. Boosted Immune System"
      },
      {
        type: "paragraph",
        content: "Yoga's stress-reducing effects and the physical benefits of movement help strengthen the immune system. The practice also stimulates the lymphatic system, which helps remove toxins from the body."
      },
      {
        type: "heading",
        content: "9. Increased Mind-Body Connection" 
      },
      {
        type: "paragraph",
        content: "Yoga cultivates awareness of how your body feels and moves, creating a stronger connection between mind and body. This awareness can help you make better choices about your health and well-being."
      },
      {
        type: "heading",
        content: "10. Inner Peace and Happiness"
      },
      {
        type: "paragraph",
        content: "Perhaps the most profound benefit of yoga is the sense of inner peace and contentment it can bring. The practice helps you develop equanimity and a more positive outlook on life, leading to greater overall happiness and life satisfaction."
      },
      {
        type: "paragraph",
        content: "At Mother Earth Yoga Sanctuary, we've witnessed these transformative benefits in our clients every day. Whether you're a complete beginner or an experienced practitioner, our supportive environment and expert guidance can help you discover the incredible healing power of yoga for yourself."
      }
    ]
  };

  return (
    <Layout>
      {/* Back to Blog */}
      <section className="py-8 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article className="max-w-4xl mx-auto">
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
              <span className="bg-teal/10 text-teal px-3 py-1 rounded-full font-medium">
                {blogPost.category}
              </span>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                {blogPost.date}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                {blogPost.readTime}
              </div>
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {blogPost.title}
            </h1>

            {/* Author & Sharing */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-teal to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">YU</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">By {blogPost.author}</p>
                  <p className="text-sm text-muted-foreground">Founder & Wellness Practitioner</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Like
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-[16/9] mb-12 rounded-2xl overflow-hidden shadow-medium bg-gradient-to-br from-teal/20 to-accent/20">
              <div className="w-full h-full flex items-center justify-center">
                <Tag className="w-16 h-16 text-teal" />
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {blogPost.content.map((section, index) => {
                if (section.type === 'heading') {
                  return (
                    <h2 key={index} className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
                      {section.content}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="font-body text-muted-foreground leading-relaxed mb-6">
                    {section.content}
                  </p>
                );
              })}
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <span className="font-body text-sm text-muted-foreground">Share this article:</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Facebook</Button>
                    <Button variant="outline" size="sm">Twitter</Button>
                    <Button variant="outline" size="sm">LinkedIn</Button>
                  </div>
                </div>
                
                <Button 
                  className="bg-teal hover:bg-teal/90 text-teal-foreground"
                >
                  Book a Yoga Session
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
              Related Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "5 Natural Stress Relief Techniques That Actually Work",
                  category: "Mental Health",
                  readTime: "4 min read"
                },
                {
                  title: "Understanding Reflexology: Key Pressure Points Explained", 
                  category: "Alternative Healing",
                  readTime: "6 min read"
                }
              ].map((article, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-smooth hover-lift">
                  <div className="space-y-3">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                      <Link to="#" className="text-teal hover:text-accent text-sm font-medium">
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;