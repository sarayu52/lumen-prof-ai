import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { FloatingObjects3D } from "@/components/FloatingObjects3D";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { 
  User, 
  Mail, 
  Phone, 
  School, 
  Trophy, 
  Calendar,
  MapPin,
  Users,
  CheckCircle,
  CreditCard,
  Shield
} from "lucide-react";

export default function Registration() {
  const [step, setStep] = useState(1);
  const [registrationData, setRegistrationData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      university: "",
      year: "",
      major: ""
    },
    eventSelection: {
      eventId: "1",
      teamName: "",
      teamMembers: "",
      experience: "",
      motivation: ""
    },
    payment: {
      method: "free",
      promoCode: ""
    }
  });

  const selectedEvent = {
    title: "HackTech 2024",
    date: "Dec 15-17, 2024",
    location: "Tech Hub, San Francisco",
    price: "Free",
    spots: 50
  };

  const handleInputChange = (section: string, field: string, value: string) => {
    setRegistrationData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
      toast.success("Step completed successfully!");
    }
  };

  const handleSubmitRegistration = () => {
    toast.success("Registration submitted successfully! Check your email for confirmation.");
    // Reset form or redirect
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold gradient-text mb-2">Personal Information</h2>
              <p className="text-muted-foreground">Tell us about yourself</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={registrationData.personalInfo.firstName}
                  onChange={(e) => handleInputChange("personalInfo", "firstName", e.target.value)}
                  className="glass-card border-primary/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={registrationData.personalInfo.lastName}
                  onChange={(e) => handleInputChange("personalInfo", "lastName", e.target.value)}
                  className="glass-card border-primary/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={registrationData.personalInfo.email}
                onChange={(e) => handleInputChange("personalInfo", "email", e.target.value)}
                className="glass-card border-primary/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={registrationData.personalInfo.phone}
                onChange={(e) => handleInputChange("personalInfo", "phone", e.target.value)}
                className="glass-card border-primary/20"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="university">University/Institution *</Label>
                <Input
                  id="university"
                  value={registrationData.personalInfo.university}
                  onChange={(e) => handleInputChange("personalInfo", "university", e.target.value)}
                  className="glass-card border-primary/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="major">Field of Study *</Label>
                <Input
                  id="major"
                  value={registrationData.personalInfo.major}
                  onChange={(e) => handleInputChange("personalInfo", "major", e.target.value)}
                  className="glass-card border-primary/20"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold gradient-text mb-2">Event Details</h2>
              <p className="text-muted-foreground">Configure your participation</p>
            </div>

            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{selectedEvent.title}</span>
                  <Badge className="bg-success/20 text-success">Selected</Badge>
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {selectedEvent.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {selectedEvent.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {selectedEvent.spots} spots left
                  </div>
                </div>
              </CardHeader>
            </Card>

            <div className="space-y-2">
              <Label htmlFor="teamName">Team Name (Optional)</Label>
              <Input
                id="teamName"
                value={registrationData.eventSelection.teamName}
                onChange={(e) => handleInputChange("eventSelection", "teamName", e.target.value)}
                className="glass-card border-primary/20"
                placeholder="Leave empty if participating solo"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Previous Experience</Label>
              <Textarea
                id="experience"
                value={registrationData.eventSelection.experience}
                onChange={(e) => handleInputChange("eventSelection", "experience", e.target.value)}
                className="glass-card border-primary/20"
                placeholder="Tell us about your relevant experience..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="motivation">Why do you want to participate?</Label>
              <Textarea
                id="motivation"
                value={registrationData.eventSelection.motivation}
                onChange={(e) => handleInputChange("eventSelection", "motivation", e.target.value)}
                className="glass-card border-primary/20"
                placeholder="Share your motivation..."
                rows={3}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold gradient-text mb-2">Confirmation</h2>
              <p className="text-muted-foreground">Review and confirm your registration</p>
            </div>

            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-success" />
                  Registration Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Event:</span>
                  <span className="font-medium">{selectedEvent.title}</span>
                </div>
                <div className="flex justify-between">
                  <span>Participant:</span>
                  <span className="font-medium">
                    {registrationData.personalInfo.firstName} {registrationData.personalInfo.lastName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Email:</span>
                  <span className="font-medium">{registrationData.personalInfo.email}</span>
                </div>
                <div className="flex justify-between">
                  <span>University:</span>
                  <span className="font-medium">{registrationData.personalInfo.university}</span>
                </div>
                {registrationData.eventSelection.teamName && (
                  <div className="flex justify-between">
                    <span>Team:</span>
                    <span className="font-medium">{registrationData.eventSelection.teamName}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold">
                  <span>Registration Fee:</span>
                  <span className="text-success">{selectedEvent.price}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20 bg-success/5">
              <CardContent className="flex items-center p-4">
                <Shield className="h-5 w-5 mr-3 text-success" />
                <div>
                  <p className="font-medium text-success">Secure Registration</p>
                  <p className="text-sm text-muted-foreground">Your data is protected and encrypted</p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* 3D Floating Objects Background */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingObjects3D />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Event Registration
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the most exciting tech events and competitions
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                    stepNumber <= step
                      ? "bg-primary text-primary-foreground glow-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {stepNumber}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Personal Info</span>
              <span>Event Details</span>
              <span>Confirmation</span>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass-card border-primary/20">
              <CardContent className="p-6">
                {renderStepContent()}
                
                <div className="flex justify-between pt-6">
                  {step > 1 && (
                    <Button
                      variant="ghost"
                      onClick={() => setStep(step - 1)}
                    >
                      Previous
                    </Button>
                  )}
                  
                  <div className="ml-auto">
                    {step < 3 ? (
                      <Button
                        onClick={handleNextStep}
                        className="glow-primary"
                        variant="hero"
                      >
                        Next Step
                      </Button>
                    ) : (
                      <Button
                        onClick={handleSubmitRegistration}
                        className="glow-primary"
                        variant="hero"
                      >
                        <Trophy className="h-4 w-4 mr-2" />
                        Complete Registration
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}