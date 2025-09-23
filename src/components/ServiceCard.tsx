import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  link: string;
}

const ServiceCard = ({ title, description, image, price, duration, link }: ServiceCardProps) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-smooth hover-lift">
      {/* Service Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
        />
      </div>

      {/* Service Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-smooth">
            {title}
          </h3>
          <p className="font-body text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Price and Duration */}
        <div className="flex items-center justify-between text-sm font-medium">
          <span className="text-terracotta font-semibold">{price}</span>
          <span className="text-muted-foreground">{duration}</span>
        </div>

        {/* Learn More Button */}
        <div className="pt-2">
          <Link to={link}>
            <Button 
              variant="outline" 
              className="w-full group/btn border-teal text-teal hover:bg-teal hover:text-teal-foreground transition-smooth"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;