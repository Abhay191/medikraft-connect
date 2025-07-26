import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Brain, Bone, Eye, Stethoscope, Activity, Clock, Users, Star, MapPin } from "lucide-react";
import treatmentCardiology from "@/assets/treatment-cardiology.jpg";
import treatmentNeurology from "@/assets/treatment-neurology.jpg";
import treatmentOrthopedics from "@/assets/treatment-orthopedics.jpg";
import treatmentOphthalmology from "@/assets/treatment-ophthalmology.jpg";
import treatmentGastroenterology from "@/assets/treatment-gastroenterology.jpg";
import treatmentFertility from "@/assets/treatment-fertility.jpg";

const Treatments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");

  const treatments = [
    {
      id: 1,
      name: "Cardiac Bypass Surgery",
      category: "cardiology",
      icon: Heart,
      image: treatmentCardiology,
      description: "Advanced heart surgery to improve blood flow when coronary arteries are blocked.",
      duration: "4-6 hours",
      recovery: "2-3 weeks",
      priceRange: "premium",
      startingPrice: "$8,000",
      successRate: 98,
      topHospitals: ["AIIMS Delhi", "Apollo Chennai", "Fortis Bangalore"],
      features: ["Minimally Invasive", "24/7 Monitoring", "International Standards", "Expert Surgeons"],
      details: {
        procedure: "Coronary artery bypass grafting using advanced surgical techniques",
        benefits: ["Improved blood flow", "Reduced chest pain", "Better quality of life"],
        preparation: "Pre-operative tests, medication review, lifestyle adjustments"
      }
    },
    {
      id: 2,
      name: "Brain Tumor Surgery",
      category: "neurology",
      icon: Brain,
      image: treatmentNeurology,
      description: "Precise neurosurgical procedures to remove brain tumors with minimal invasive techniques.",
      duration: "6-8 hours",
      recovery: "3-4 weeks",
      priceRange: "premium",
      startingPrice: "$12,000",
      successRate: 95,
      topHospitals: ["AIIMS Delhi", "Medanta Gurgaon", "Apollo Mumbai"],
      features: ["Robotic Surgery", "Neuro Navigation", "Real-time Monitoring", "Specialized ICU"],
      details: {
        procedure: "Advanced microsurgical techniques with intraoperative imaging",
        benefits: ["Tumor removal", "Preserved brain function", "Improved prognosis"],
        preparation: "MRI scans, neurological assessment, anesthesia consultation"
      }
    },
    {
      id: 3,
      name: "Hip Replacement",
      category: "orthopedics",
      icon: Bone,
      image: treatmentOrthopedics,
      description: "Total hip replacement surgery using latest prosthetic technology for improved mobility.",
      duration: "2-3 hours",
      recovery: "6-8 weeks",
      priceRange: "moderate",
      startingPrice: "$5,500",
      successRate: 97,
      topHospitals: ["Max Healthcare", "Fortis Bangalore", "Apollo Chennai"],
      features: ["Ceramic Implants", "Computer Navigation", "Rapid Recovery", "Physiotherapy"],
      details: {
        procedure: "Replacement of damaged hip joint with prosthetic components",
        benefits: ["Pain relief", "Restored mobility", "Improved quality of life"],
        preparation: "X-rays, blood tests, pre-operative counseling"
      }
    },
    {
      id: 4,
      name: "LASIK Eye Surgery",
      category: "ophthalmology",
      icon: Eye,
      image: treatmentOphthalmology,
      description: "Laser vision correction surgery to reduce dependency on glasses and contact lenses.",
      duration: "30 minutes",
      recovery: "1-2 weeks",
      priceRange: "affordable",
      startingPrice: "$800",
      successRate: 99,
      topHospitals: ["Apollo Mumbai", "Fortis Delhi", "Narayana Bangalore"],
      features: ["Bladeless Technology", "Custom Wavefront", "Quick Recovery", "Lifetime Support"],
      details: {
        procedure: "Corneal reshaping using advanced laser technology",
        benefits: ["Clear vision", "Reduced dependency on glasses", "Quick results"],
        preparation: "Comprehensive eye exam, corneal mapping, pre-op instructions"
      }
    },
    {
      id: 5,
      name: "Liver Transplant",
      category: "gastroenterology",
      icon: Activity,
      image: treatmentGastroenterology,
      description: "Life-saving liver transplantation with excellent success rates and post-operative care.",
      duration: "8-12 hours",
      recovery: "3-6 months",
      priceRange: "premium",
      startingPrice: "$25,000",
      successRate: 92,
      topHospitals: ["Medanta Gurgaon", "Apollo Chennai", "AIIMS Delhi"],
      features: ["Living Donor Option", "Advanced ICU", "Immunosuppression", "Long-term Follow-up"],
      details: {
        procedure: "Surgical replacement of diseased liver with healthy donor liver",
        benefits: ["Life-saving procedure", "Restored liver function", "Improved survival"],
        preparation: "Extensive evaluation, donor matching, pre-transplant optimization"
      }
    },
    {
      id: 6,
      name: "IVF Treatment",
      category: "fertility",
      icon: Heart,
      image: treatmentFertility,
      description: "Advanced fertility treatments with high success rates using latest reproductive technology.",
      duration: "2-6 weeks",
      recovery: "2 weeks",
      priceRange: "moderate",
      startingPrice: "$3,500",
      successRate: 65,
      topHospitals: ["Apollo Mumbai", "Fortis Delhi", "Max Healthcare"],
      features: ["Advanced Lab", "Genetic Testing", "Frozen Embryo", "Counseling Support"],
      details: {
        procedure: "Assisted reproductive technology for conception",
        benefits: ["Pregnancy achievement", "Genetic screening", "Multiple options"],
        preparation: "Hormone testing, ultrasounds, lifestyle modifications"
      }
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "cardiology", label: "Cardiology" },
    { value: "neurology", label: "Neurology" },
    { value: "orthopedics", label: "Orthopedics" },
    { value: "ophthalmology", label: "Ophthalmology" },
    { value: "gastroenterology", label: "Gastroenterology" },
    { value: "fertility", label: "Fertility" }
  ];

  const priceRanges = [
    { value: "all", label: "All Price Ranges" },
    { value: "affordable", label: "Affordable (Under $2,000)" },
    { value: "moderate", label: "Moderate ($2,000 - $10,000)" },
    { value: "premium", label: "Premium ($10,000+)" }
  ];

  const filteredTreatments = treatments.filter(treatment => {
    const matchesSearch = treatment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         treatment.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || treatment.category === selectedCategory;
    const matchesPriceRange = selectedPriceRange === "all" || treatment.priceRange === selectedPriceRange;
    
    return matchesSearch && matchesCategory && matchesPriceRange;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Medical Treatments
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of world-class medical treatments offered by India's top hospitals
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg shadow-soft p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Search Treatments
              </label>
              <Input
                placeholder="Search by treatment name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Category
              </label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Price Range
              </label>
              <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
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
            Found {filteredTreatments.length} treatment{filteredTreatments.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredTreatments.map((treatment) => {
            const IconComponent = treatment.icon;
            return (
              <Card key={treatment.id} className="shadow-medium hover:shadow-strong transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={treatment.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-semibold text-sm">{treatment.successRate}%</span>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{treatment.name}</CardTitle>
                      <Badge variant="secondary" className="mb-2">
                        {categories.find(c => c.value === treatment.category)?.label}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{treatment.startingPrice}</p>
                      <p className="text-xs text-muted-foreground">Starting from</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{treatment.description}</p>

                  {/* Treatment Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p className="text-sm font-medium">{treatment.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Recovery</p>
                        <p className="text-sm font-medium">{treatment.recovery}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {treatment.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Top Hospitals */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Available At</h4>
                    <div className="space-y-1">
                      {treatment.topHospitals.slice(0, 2).map((hospital, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{hospital}</span>
                        </div>
                      ))}
                      {treatment.topHospitals.length > 2 && (
                        <p className="text-xs text-muted-foreground">
                          +{treatment.topHospitals.length - 2} more hospitals
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button variant="hero" className="flex-1">
                      Book Consultation
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No results */}
        {filteredTreatments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No treatments found matching your criteria. Please try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Treatments;