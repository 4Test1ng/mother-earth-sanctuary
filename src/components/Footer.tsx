import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter,
  Leaf
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Address Column */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
              Visit Our Sanctuary
            </h3>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <div className="font-body text-muted-foreground">
                <p>Dzorwulu Pillar 2</p>
                <p>Aunty Mary Street</p>
                <p>Accra - Ghana</p>
              </div>
            </div>
          </div>

          {/* Contacts Column */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <a 
                  href="tel:+233543800082" 
                  className="font-body text-muted-foreground hover:text-accent transition-smooth"
                >
                  +233 543 800 082
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a 
                  href="mailto:yves.urbain@gmail.com" 
                  className="font-body text-muted-foreground hover:text-accent transition-smooth"
                >
                  yves.urbain@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
              Stay Connected
            </h3>
            <div className="space-y-3">
              <p className="font-body text-sm text-muted-foreground">
                Subscribe to receive wellness tips and updates about our services.
              </p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email address"
                  className="flex-1 bg-background border-input"
                />
                <Button 
                  variant="default"
                  className="bg-teal hover:bg-teal/90 text-teal-foreground px-6"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            
            {/* Logo and Brand */}
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal text-teal-foreground">
                <Leaf className="h-4 w-4" />
              </div>
              <span className="font-heading text-sm font-semibold text-foreground">
                Mother Earth Yoga Sanctuary
              </span>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Copyright and Links */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <p className="font-body text-xs text-muted-foreground">
              © 2024 Mother Earth Yoga Sanctuary. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/privacy" 
                className="font-body text-xs text-muted-foreground hover:text-accent transition-smooth"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="font-body text-xs text-muted-foreground hover:text-accent transition-smooth"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;