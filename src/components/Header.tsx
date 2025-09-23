import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-teal-foreground group-hover:bg-accent transition-smooth">
              <Leaf className="h-6 w-6" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading text-xl font-bold text-foreground">
                Mother Earth Yoga Sanctuary
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-body text-sm font-medium transition-smooth relative
                  ${isActive(item.href) 
                    ? "text-accent" 
                    : "text-foreground hover:text-accent"
                  }
                  after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
                  after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right 
                  after:transition-transform after:duration-300 hover:after:scale-x-100 
                  hover:after:origin-bottom-left
                  ${isActive(item.href) ? "after:scale-x-100" : ""}
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="hidden md:flex">
            <Button 
              variant="default"
              className="bg-terracotta hover:bg-terracotta/90 text-terracotta-foreground font-medium shadow-soft hover:shadow-medium transition-smooth"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md font-body text-sm font-medium transition-smooth
                    ${isActive(item.href)
                      ? "bg-accent/10 text-accent"
                      : "text-foreground hover:bg-muted hover:text-accent"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <Button 
                  variant="default"
                  className="w-full bg-terracotta hover:bg-terracotta/90 text-terracotta-foreground"
                >
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;