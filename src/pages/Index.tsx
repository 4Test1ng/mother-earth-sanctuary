import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import InstructorSection from "@/components/InstructorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import RetreatsSection from "@/components/RetreatsSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesSection />
      <InstructorSection />
      <TestimonialsSection />
      <BlogSection />
      <RetreatsSection />
    </Layout>
  );
};

export default Index;
