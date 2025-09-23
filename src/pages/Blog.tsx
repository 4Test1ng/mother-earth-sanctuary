import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      slug: "top-10-yoga-benefits",
      title: "Top 10 Yoga Benefits You Need to Know", 
      excerpt: "Discover the transformative power of yoga and how regular practice can improve your flexibility, strength, mental clarity, and overall well-being.",
      category: "Wellness Tips",
      date: "April 16, 2024",
      readTime: "5 min read",
      featured: true
    },
    {
      slug: "deep-tissue-massage-guide",
      title: "The Complete Guide to Deep Tissue Massage",
      excerpt: "Learn everything about deep tissue massage therapy, its benefits, what to expect, and how it can help with chronic pain relief.",
      category: "Massage Therapy",
      date: "April 10, 2024", 
      readTime: "7 min read",
      featured: false
    },
    {
      slug: "stress-relief-techniques",
      title: "5 Natural Stress Relief Techniques That Actually Work",
      excerpt: "Explore proven natural methods to reduce stress and anxiety, from breathing exercises to mindful movement practices.",
      category: "Mental Health",
      date: "April 5, 2024",
      readTime: "4 min read", 
      featured: false
    },
    {
      slug: "reflexology-pressure-points",
      title: "Understanding Reflexology: Key Pressure Points Explained",
      excerpt: "Discover the ancient art of reflexology and learn about the key pressure points that can promote healing and relaxation.",
      category: "Alternative Healing",
      date: "March 28, 2024",
      readTime: "6 min read",
      featured: false
    },
    {
      slug: "thai-yoga-massage-benefits",
      title: "Why Thai Yoga Massage Is Perfect for Modern Life",
      excerpt: "Explore how this ancient healing practice can address the physical and mental challenges of contemporary living.",
      category: "Massage Therapy", 
      date: "March 22, 2024",
      readTime: "5 min read",
      featured: false
    },
    {
      slug: "workplace-wellness-tips",
      title: "Workplace Wellness: Simple Stretches for Office Workers",
      excerpt: "Combat desk job fatigue with these easy stretches and wellness practices you can do right at your workstation.",
      category: "Wellness Tips",
      date: "March 15, 2024",
      readTime: "3 min read",
      featured: false
    }
  ];

  const categories = ["All", "Wellness Tips", "Massage Therapy", "Mental Health", "Alternative Healing"];

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-16 lg:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <BookOpen className="h-8 w-8 text-accent" />
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
                Wellness Blog
              </h1>
            </div>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Explore our collection of wellness articles, healing insights, and practical tips 
              to support your journey toward holistic well-being and inner peace.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
              Featured Article
            </h2>
            
            <div className="bg-card rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-smooth hover-lift max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                
                {/* Featured Image */}
                <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-teal/20 to-accent/20">
                  <div className="w-full h-full flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-teal" />
                  </div>
                </div>

                {/* Featured Content */}
                <div className="p-8 lg:p-12">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="bg-teal/10 text-teal px-3 py-1 rounded-full font-medium">
                        Wellness Tips
                      </span>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        April 16, 2024
                      </div>
                    </div>

                    <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                      Top 10 Yoga Benefits You Need to Know
                    </h3>

                    <p className="font-body text-muted-foreground leading-relaxed">
                      Discover the transformative power of yoga and how regular practice can 
                      improve your flexibility, strength, mental clarity, and overall well-being. 
                      From stress relief to better sleep, explore the science-backed benefits.
                    </p>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        5 min read
                      </div>
                      
                      <Link to="/blog/top-10-yoga-benefits">
                        <div className="inline-flex items-center text-teal hover:text-accent transition-smooth font-medium">
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium transition-smooth
                         bg-card text-muted-foreground hover:bg-teal hover:text-teal-foreground
                         border border-border hover:border-teal"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <article 
                key={post.slug}
                className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-smooth hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Post Image */}
                <div className="aspect-[16/10] bg-gradient-to-br from-teal/20 to-accent/20">
                  <div className="w-full h-full flex items-center justify-center">
                    <Tag className="w-8 h-8 text-teal" />
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="space-y-3">
                    
                    {/* Category & Date */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-lg font-semibold text-foreground leading-tight hover:text-accent transition-smooth">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                      
                      <Link to={`/blog/${post.slug}`}>
                        <div className="inline-flex items-center text-sm text-teal hover:text-accent transition-smooth font-medium">
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-teal/10 text-teal hover:bg-teal hover:text-teal-foreground rounded-lg font-medium transition-smooth">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;