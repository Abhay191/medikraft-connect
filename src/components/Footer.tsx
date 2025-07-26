import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">MedConnect</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Connecting international patients with India's top hospitals for world-class medical treatment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary text-sm block transition-colors">
                Home
              </Link>
              <Link to="/hospitals" className="text-muted-foreground hover:text-primary text-sm block transition-colors">
                Hospitals
              </Link>
              <Link to="/treatments" className="text-muted-foreground hover:text-primary text-sm block transition-colors">
                Treatments
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm block transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">Medical Tourism</p>
              <p className="text-muted-foreground text-sm">Hospital Partnerships</p>
              <p className="text-muted-foreground text-sm">Treatment Coordination</p>
              <p className="text-muted-foreground text-sm">Patient Support</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4" />
                <span>info@medconnect.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 MedConnect. All rights reserved. Your trusted partner in medical tourism.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;