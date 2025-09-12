import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FloatingObjects3D } from "@/components/FloatingObjects3D";
import { 
  Building2, 
  Handshake, 
  Trophy, 
  Users, 
  Target,
  ExternalLink,
  Mail,
  Globe,
  Star,
  Heart,
  Zap
} from "lucide-react";

const sponsorTiers = [
  {
    tier: "Title Sponsor",
    color: "from-yellow-500/20 to-yellow-300/20",
    textColor: "text-yellow-500",
    benefits: [
      "Logo on main stage and all promotional materials",
      "Dedicated booth space (10x10m)",
      "Speaking slot in main event",
      "Access to all attendee data",
      "Custom branded swag distribution",
      "Social media mentions (50+ posts)"
    ],
    investment: "$50,000+",
    sponsors: [
      { name: "TechCorp", logo: "🚀", description: "Leading AI innovation company" }
    ]
  },
  {
    tier: "Platinum Sponsor",
    color: "from-gray-400/20 to-gray-200/20",
    textColor: "text-gray-400",
    benefits: [
      "Logo on event materials and website",
      "Premium booth space (8x8m)",
      "Workshop/demo session slot",
      "Networking event access",
      "Branded merchandise opportunity",
      "Social media mentions (20+ posts)"
    ],
    investment: "$25,000+",
    sponsors: [
      { name: "InnovateX", logo: "⚡", description: "Cloud solutions provider" },
      { name: "DataFlow", logo: "📊", description: "Analytics platform" }
    ]
  },
  {
    tier: "Gold Sponsor",
    color: "from-yellow-600/20 to-yellow-400/20",
    textColor: "text-yellow-600",
    benefits: [
      "Logo on website and registration page",
      "Standard booth space (6x6m)",
      "Networking session participation",
      "Swag bag insertion",
      "Social media mentions (10+ posts)",
      "Resume collection access"
    ],
    investment: "$15,000+",
    sponsors: [
      { name: "StartupHub", logo: "🌟", description: "Startup accelerator" },
      { name: "CodeBase", logo: "💻", description: "Developer tools" },
      { name: "FutureNet", logo: "🌐", description: "Network infrastructure" }
    ]
  },
  {
    tier: "Community Partner",
    color: "from-blue-500/20 to-blue-300/20",
    textColor: "text-blue-500",
    benefits: [
      "Logo on community partner page",
      "Networking opportunities",
      "Event promotion support",
      "Social media cross-promotion",
      "Access to event photos/videos"
    ],
    investment: "Partnership",
    sponsors: [
      { name: "DevCommunity", logo: "👥", description: "Developer community" },
      { name: "TechMeetup", logo: "🤝", description: "Local tech meetup" },
      { name: "StudentOrg", logo: "🎓", description: "University student org" }
    ]
  }
];

const sponsorshipPackages = [
  {
    title: "Event Sponsorship",
    description: "Sponsor individual events and hackathons",
    icon: Trophy,
    benefits: ["Brand exposure", "Talent acquisition", "Product showcase", "Networking"],
    startingPrice: "$5,000"
  },
  {
    title: "Platform Partnership",
    description: "Long-term partnership across all events",
    icon: Handshake,
    benefits: ["Year-round visibility", "Multiple events", "Custom integrations", "Priority support"],
    startingPrice: "$25,000"
  },
  {
    title: "Community Sponsorship",
    description: "Support the developer community",
    icon: Heart,
    benefits: ["Community impact", "Brand goodwill", "Talent pipeline", "CSR benefits"],
    startingPrice: "$2,500"
  }
];

const stats = [
  { label: "Total Participants", value: "50K+", icon: Users },
  { label: "Events Hosted", value: "200+", icon: Target },
  { label: "Partner Companies", value: "150+", icon: Building2 },
  { label: "Success Rate", value: "95%", icon: Star }
];

export default function Sponsors() {
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
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Partner With Innovation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join leading companies in empowering the next generation of tech talent through events, hackathons, and competitions
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-2 mx-auto">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sponsorship Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold gradient-text mb-4">Sponsorship Opportunities</h2>
            <p className="text-muted-foreground">Choose the perfect partnership model for your company</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsorshipPackages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="group"
              >
                <Card className="glass-card border-primary/20 h-full hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <pkg.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{pkg.title}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {pkg.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center text-sm">
                          <Zap className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-4">
                        Starting at {pkg.startingPrice}
                      </div>
                      <Button className="w-full glow-primary" variant="hero">
                        <Mail className="h-4 w-4 mr-2" />
                        Get Started
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Sponsors by Tier */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold gradient-text mb-4">Our Amazing Sponsors</h2>
            <p className="text-muted-foreground">Thank you to our partners who make these events possible</p>
          </div>

          <div className="space-y-8">
            {sponsorTiers.map((tier, tierIndex) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: tierIndex * 0.2 + 1 }}
              >
                <Card className={`glass-card border-primary/20 bg-gradient-to-r ${tier.color}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className={`text-2xl ${tier.textColor}`}>{tier.tier}</CardTitle>
                        <CardDescription>Investment: {tier.investment}</CardDescription>
                      </div>
                      <Badge className={`${tier.textColor} bg-current/20`}>
                        {tier.sponsors.length} Partner{tier.sponsors.length !== 1 ? 's' : ''}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Sponsors */}
                      <div>
                        <h4 className="font-semibold mb-3">Current Sponsors</h4>
                        <div className="space-y-3">
                          {tier.sponsors.map((sponsor) => (
                            <div
                              key={sponsor.name}
                              className="flex items-center p-3 bg-card/50 rounded-lg backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer"
                            >
                              <div className="text-2xl mr-3">{sponsor.logo}</div>
                              <div>
                                <div className="font-medium">{sponsor.name}</div>
                                <div className="text-sm text-muted-foreground">{sponsor.description}</div>
                              </div>
                              <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
                            </div>
                          ))}
                          
                          {/* Available Slot */}
                          <div className="flex items-center p-3 bg-muted/20 rounded-lg border-2 border-dashed border-muted-foreground/30 hover:border-primary/50 transition-colors cursor-pointer group">
                            <div className="text-2xl mr-3 text-muted-foreground group-hover:text-primary transition-colors">+</div>
                            <div>
                              <div className="font-medium text-muted-foreground group-hover:text-primary transition-colors">Your Company Here</div>
                              <div className="text-sm text-muted-foreground">Become our next sponsor</div>
                            </div>
                            <Mail className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="font-semibold mb-3">Sponsor Benefits</h4>
                        <div className="space-y-2">
                          {tier.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-start text-sm">
                              <Star className={`h-4 w-4 mr-2 mt-0.5 flex-shrink-0 ${tier.textColor}`} />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Card className="glass-card border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10 text-center">
            <CardHeader>
              <CardTitle className="text-3xl gradient-text mb-4">Ready to Partner With Us?</CardTitle>
              <CardDescription className="text-lg">
                Join the community of forward-thinking companies investing in the future of tech talent
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="glow-primary" variant="hero">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Us
                </Button>
                <Button size="lg" variant="ghost">
                  <Globe className="h-5 w-5 mr-2" />
                  Download Sponsorship Deck
                </Button>
              </div>
              
              <div className="text-sm text-muted-foreground">
                Questions? Reach out to our partnerships team at <span className="text-primary">sponsors@eventplatform.com</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}