import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Star, Phone, Mail, Clock, Users } from "lucide-react";
import hospital1 from "@/assets/hospital-1.jpg";
import hospital2 from "@/assets/hospital-2.jpg";
import hospital3 from "@/assets/hospital-3.jpg";

const Hospitals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const hospitals = [
    {
      id: 1,
      name: "AIIMS Delhi",
      location: "New Delhi",
      city: "delhi",
      image: hospital1,
      specialties: ["Cardiology", "Neurology", "Oncology", "Orthopedics"],
      rating: 4.9,
      reviews: 1250,
      established: "1956",
      beds: 2500,
      description: "Premier medical institute with cutting-edge technology and internationally trained doctors.",
      contact: {
        phone: "+91 11 2658 8500",
        email: "info@aiims.edu"
      },
      features: ["24/7 Emergency", "International Patients", "Advanced ICU", "Organ Transplant"]
    },
    {
      id: 2,
      name: "Apollo Hospitals",
      location: "Mumbai",
      city: "mumbai",
      image: hospital2,
      specialties: ["Transplants", "Cardiac Surgery", "Gastroenterology", "Neurosurgery"],
      rating: 4.8,
      reviews: 980,
      established: "1983",
      beds: 1800,
      description: "Leading private healthcare provider with state-of-the-art facilities and expert medical team.",
      contact: {
        phone: "+91 22 2692 7777",
        email: "info@apollohospitals.com"
      },
      features: ["Robotic Surgery", "International JCI Accredited", "Telemedicine", "Medical Tourism"]
    },
    {
      id: 3,
      name: "Fortis Healthcare",
      location: "Bangalore",
      city: "bangalore",
      image: hospital3,
      specialties: ["Neurosurgery", "Oncology", "Gastroenterology", "Cardiology"],
      rating: 4.7,
      reviews: 856,
      established: "2001",
      beds: 1200,
      description: "Modern healthcare facility focused on patient-centric care and advanced medical treatments.",
      contact: {
        phone: "+91 80 6621 4444",
        email: "info@fortishealthcare.com"
      },
      features: ["Minimally Invasive Surgery", "Cancer Center", "Emergency Care", "Patient Support"]
    },
    {
      id: 4,
      name: "Max Healthcare",
      location: "Gurgaon",
      city: "gurgaon",
      image: hospital1,
      specialties: ["Orthopedics", "Cardiology", "Neurology", "Oncology"],
      rating: 4.6,
      reviews: 742,
      established: "2000",
      beds: 1000,
      description: "Multi-specialty hospital known for excellence in orthopedic and cardiac care.",
      contact: {
        phone: "+91 124 629 4444",
        email: "info@maxhealthcare.com"
      },
      features: ["Joint Replacement", "Heart Center", "Stroke Unit", "International Desk"]
    },
    {
      id: 5,
      name: "Medanta Hospital",
      location: "Gurgaon",
      city: "gurgaon",
      image: hospital2,
      specialties: ["Liver Transplant", "Heart Surgery", "Neurosurgery", "Oncology"],
      rating: 4.8,
      reviews: 920,
      established: "2009",
      beds: 1600,
      description: "Super-specialty hospital with world-class infrastructure and renowned medical experts.",
      contact: {
        phone: "+91 124 414 4444",
        email: "info@medanta.org"
      },
      features: ["Liver Transplant Center", "Robotic Surgery", "Critical Care", "Medical Research"]
    },
    {
      id: 6,
      name: "Narayana Health",
      location: "Bangalore",
      city: "bangalore",
      image: hospital3,
      specialties: ["Cardiac Surgery", "Pediatric Care", "Nephrology", "Neurology"],
      rating: 4.5,
      reviews: 680,
      established: "2000",
      beds: 1400,
      description: "Affordable healthcare with high-quality medical services and compassionate care.",
      contact: {
        phone: "+91 80 7122 2222",
        email: "info@narayanahealth.org"
      },
      features: ["Pediatric Heart Surgery", "Affordable Care", "Community Outreach", "Medical Education"]
    }
  ];

  const cities = [
    { value: "all", label: "All Cities" },
    { value: "delhi", label: "New Delhi" },
    { value: "mumbai", label: "Mumbai" },
    { value: "bangalore", label: "Bangalore" },
    { value: "gurgaon", label: "Gurgaon" }
  ];

  const specialties = [
    { value: "all", label: "All Specialties" },
    { value: "cardiology", label: "Cardiology" },
    { value: "neurology", label: "Neurology" },
    { value: "oncology", label: "Oncology" },
    { value: "orthopedics", label: "Orthopedics" },
    { value: "transplants", label: "Transplants" },
    { value: "gastroenterology", label: "Gastroenterology" }
  ];

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hospital.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === "all" || hospital.city === selectedCity;
    const matchesSpecialty = selectedSpecialty === "all" || 
                            hospital.specialties.some(spec => 
                              spec.toLowerCase().includes(selectedSpecialty.toLowerCase())
                            );
    
    return matchesSearch && matchesCity && matchesSpecialty;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Partner Hospitals
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover India's top medical institutions offering world-class healthcare services for international patients
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg shadow-soft p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Search Hospitals
              </label>
              <Input
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Filter by City
              </label>
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger>
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city.value} value={city.value}>
                      {city.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Filter by Specialty
              </label>
              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger>
                  <SelectValue placeholder="Select specialty" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty.value} value={specialty.value}>
                      {specialty.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Found {filteredHospitals.length} hospital{filteredHospitals.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Hospitals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredHospitals.map((hospital) => (
            <Card key={hospital.id} className="shadow-medium hover:shadow-strong transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={hospital.image} 
                  alt={hospital.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="font-semibold text-sm">{hospital.rating}</span>
                  <span className="text-xs text-muted-foreground">({hospital.reviews})</span>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{hospital.name}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{hospital.location}</span>
                    </div>
                  </div>
                  <Badge variant="outline">Est. {hospital.established}</Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{hospital.description}</p>

                {/* Specialties */}
                <div>
                  <h4 className="font-semibold text-sm mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {hospital.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-sm mb-2">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {hospital.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Hospital Stats */}
                <div className="grid grid-cols-2 gap-4 py-3 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {hospital.beds} beds
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      24/7 Care
                    </span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 py-3 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{hospital.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{hospital.contact.email}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button variant="hero" className="flex-1">
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results */}
        {filteredHospitals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No hospitals found matching your criteria. Please try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hospitals;