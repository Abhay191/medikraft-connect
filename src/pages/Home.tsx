import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Shield, 
  Users, 
  Star, 
  ArrowRight, 
  MapPin,
  Stethoscope,
  Brain,
  Bone,
  Activity
} from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";
import treatmentsImage from "@/assets/treatments-grid.jpg";
import hospital1 from "@/assets/hospital-1.jpg";
import hospital2 from "@/assets/hospital-2.jpg";
import hospital3 from "@/assets/hospital-3.jpg";

const Home = () => {
  const treatments = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Advanced heart surgeries and treatments",
      procedures: "500+ procedures"
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Brain and nervous system treatments",
      procedures: "300+ procedures"
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Joint replacement and bone surgeries",
      procedures: "800+ procedures"
    },
    {
      icon: Activity,
      title: "Oncology",
      description: "Comprehensive cancer treatment",
      procedures: "400+ procedures"
    },
    {
      icon: Stethoscope,
      title: "General Surgery",
      description: "Wide range of surgical procedures",
      procedures: "1000+ procedures"
    },
    {
      icon: Shield,
      title: "Transplants",
      description: "Organ transplantation services",
      procedures: "200+ procedures"
    }
  ];

  const hospitals = [
    {
      id: 1,
      name: "AIIMS Delhi",
      location: "New Delhi",
      image: hospital1,
      specialties: ["Cardiology", "Neurology", "Oncology"],
      rating: 4.9,
      established: "1956"
    },
    {
      id: 2,
      name: "Apollo Hospitals",
      location: "Mumbai",
      image: hospital2,
      specialties: ["Transplants", "Orthopedics", "Cardiac Surgery"],
      rating: 4.8,
      established: "1983"
    },
    {
      id: 3,
      name: "Fortis Healthcare",
      location: "Bangalore",
      image: hospital3,
      specialties: ["Neurosurgery", "Oncology", "Gastroenterology"],
      rating: 4.7,
      established: "2001"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "USA",
      treatment: "Heart Surgery",
      rating: 5,
      text: "Exceptional care and world-class facilities. The medical team was incredibly professional and caring throughout my treatment."
    },
    {
      name: "Ahmed Al-Rashid",
      country: "UAE",
      treatment: "Knee Replacement",
      rating: 5,
      text: "Outstanding results at a fraction of the cost. The hospital staff made me feel comfortable and confident in my treatment."
    },
    {
      name: "Maria Santos",
      country: "Brazil",
      treatment: "Cancer Treatment",
      rating: 5,
      text: "Life-changing experience. The doctors were experts in their field and the recovery process was smooth and well-managed."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Medical professionals" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/60" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            World-Class Healthcare in{" "}
            <span className="bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent">
              India
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Connect with India's top hospitals for affordable, high-quality medical treatment with international standards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/hospitals">Explore Hospitals</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Services */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Indian Healthcare?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience world-class medical care with significant cost savings, minimal waiting times, and internationally trained doctors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-medium hover:shadow-strong transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Expert Medical Care</CardTitle>
                <CardDescription>
                  Internationally trained doctors with years of experience in advanced medical procedures
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-medium hover:shadow-strong transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-success" />
                </div>
                <CardTitle>Cost-Effective Treatment</CardTitle>
                <CardDescription>
                  Save up to 80% on medical costs while receiving the same quality of care as Western countries
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-medium hover:shadow-strong transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Personalized Support</CardTitle>
                <CardDescription>
                  Dedicated patient coordinators to assist you throughout your medical journey
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Treatments
            </h2>
            <p className="text-xl text-muted-foreground">
              Specialized medical procedures offered by our partner hospitals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <treatment.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{treatment.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {treatment.procedures}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{treatment.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/treatments">
                View All Treatments
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Top Hospitals */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Top Partner Hospitals
            </h2>
            <p className="text-xl text-muted-foreground">
              World-renowned medical institutions across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hospitals.map((hospital) => (
              <Card key={hospital.id} className="shadow-medium hover:shadow-strong transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={hospital.image} 
                    alt={hospital.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{hospital.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{hospital.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-semibold">{hospital.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {hospital.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Established: {hospital.established}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/hospitals">
                View All Hospitals
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Partner Network
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Are you a hospital or clinic looking to connect with international patients? 
            Join our growing network of healthcare providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/contact">Become a Partner</Link>
            </Button>
            <Button variant="secondary" size="lg">
              <Link to="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Patient Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from patients who trusted us with their healthcare journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.country} • {testimonial.treatment}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Healthcare Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get in touch with our medical coordinators for a free consultation and personalized treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl">
              <Link to="/hospitals">Browse Hospitals</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;