import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Upload,
  MessageSquare,
  Globe,
  Shield
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    purpose: "",
    specialty: "",
    message: "",
    files: null as FileList | null
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, files: e.target.files }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
      variant: "default"
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      purpose: "",
      specialty: "",
      message: "",
      files: null
    });

    setIsSubmitting(false);
  };

  const countries = [
    "United States", "Canada", "United Kingdom", "Australia", "Germany",
    "France", "Japan", "South Korea", "Singapore", "UAE", "Saudi Arabia",
    "Nigeria", "South Africa", "Brazil", "Mexico", "Other"
  ];

  const specialties = [
    "Cardiology", "Neurology", "Oncology", "Orthopedics", "Gastroenterology",
    "Transplant Surgery", "Pediatrics", "Gynecology", "Urology", "Ophthalmology",
    "Dermatology", "Plastic Surgery", "General Surgery", "Other"
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your healthcare journey? Contact our medical coordinators for personalized assistance and treatment planning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Book Consultation or Send Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and our team will respond within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 234 567 8900"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country} value={country.toLowerCase().replace(/\s+/g, '-')}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Purpose */}
                  <div className="space-y-3">
                    <Label>Purpose of Contact *</Label>
                    <RadioGroup
                      value={formData.purpose}
                      onValueChange={(value) => handleInputChange("purpose", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="patient" id="patient" />
                        <Label htmlFor="patient">Patient - Seeking Medical Treatment</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="partner" id="partner" />
                        <Label htmlFor="partner">Partner - Hospital/Clinic Wanting to Join</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="inquiry" id="inquiry" />
                        <Label htmlFor="inquiry">General Inquiry</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Medical Specialty (show only for patients) */}
                  {formData.purpose === "patient" && (
                    <div className="space-y-2">
                      <Label htmlFor="specialty">Medical Specialty</Label>
                      <Select value={formData.specialty} onValueChange={(value) => handleInputChange("specialty", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select medical specialty" />
                        </SelectTrigger>
                        <SelectContent>
                          {specialties.map((specialty) => (
                            <SelectItem key={specialty} value={specialty.toLowerCase().replace(/\s+/g, '-')}>
                              {specialty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder={
                        formData.purpose === "patient" 
                          ? "Please describe your medical condition, treatment requirements, or any specific questions you have..."
                          : formData.purpose === "partner"
                          ? "Tell us about your hospital/clinic and why you'd like to join our network..."
                          : "How can we help you today?"
                      }
                      rows={5}
                      required
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="files">
                      Upload Medical Reports or Documents (Optional)
                    </Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <Input
                        id="files"
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <Label htmlFor="files" className="cursor-pointer">
                        <span className="text-primary hover:text-primary/80">
                          Click to upload files
                        </span>
                        <span className="text-muted-foreground"> or drag and drop</span>
                      </Label>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, JPG, PNG, DOC files up to 10MB each
                      </p>
                    </div>
                    {formData.files && (
                      <div className="mt-2">
                        <p className="text-sm text-muted-foreground">
                          {formData.files.length} file(s) selected
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    variant="hero" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Get in touch with our medical coordinators
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@medconnect.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">New Delhi, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-muted-foreground">24/7 Support</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Why Choose MedConnect?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-success mt-1" />
                  <div>
                    <p className="font-medium text-sm">Global Experience</p>
                    <p className="text-xs text-muted-foreground">
                      Helping international patients for over 10 years
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-success mt-1" />
                  <div>
                    <p className="font-medium text-sm">Trusted Partners</p>
                    <p className="text-xs text-muted-foreground">
                      Network of top-rated hospitals and doctors
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-success mt-1" />
                  <div>
                    <p className="font-medium text-sm">24/7 Support</p>
                    <p className="text-xs text-muted-foreground">
                      Round-the-clock assistance and guidance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="shadow-medium bg-accent-light border-accent">
              <CardHeader>
                <CardTitle className="text-accent">Emergency Contact</CardTitle>
                <CardDescription>
                  For urgent medical consultations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="accent" className="w-full">
                  Call Emergency Line
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Available 24/7 for critical cases
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;