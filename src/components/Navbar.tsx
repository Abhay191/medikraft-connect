import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">MedConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/hospitals"
              className={`text-sm font-medium transition-colors ${
                isActive("/hospitals") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Hospitals
            </Link>
            <Link
              to="/treatments"
              className={`text-sm font-medium transition-colors ${
                isActive("/treatments") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Treatments
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive("/contact") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contact
            </Link>
            <Button variant="hero" size="sm" asChild>
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className={`block text-sm font-medium transition-colors ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/hospitals"
              className={`block text-sm font-medium transition-colors ${
                isActive("/hospitals") ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Hospitals
            </Link>
            <Link
              to="/treatments"
              className={`block text-sm font-medium transition-colors ${
                isActive("/treatments") ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Treatments
            </Link>
            <Link
              to="/contact"
              className={`block text-sm font-medium transition-colors ${
                isActive("/contact") ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button variant="hero" size="sm" className="w-full" asChild>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Book Appointment
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;