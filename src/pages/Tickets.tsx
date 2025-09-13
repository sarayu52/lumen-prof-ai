import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ParticleSystem3D } from "@/components/ParticleSystem3D";
import { Ticket, Star, Crown, Zap, CheckCircle, Gift } from "lucide-react";

export default function Tickets() {
  const ticketTiers = [
    {
      name: "Explorer",
      price: "Free",
      features: ["Access to 3 events/month", "Basic networking", "Standard support"],
      popular: false,
      icon: Ticket,
      gradient: "from-muted to-muted"
    },
    {
      name: "Pro",
      price: "$29/mo",
      features: ["Unlimited events", "AI matching", "Priority support", "Analytics"],
      popular: true,
      icon: Star,
      gradient: "from-primary to-accent"
    },
    {
      name: "Enterprise",
      price: "$99/mo", 
      features: ["Everything in Pro", "Custom events", "White-label", "Dedicated manager"],
      popular: false,
      icon: Crown,
      gradient: "from-accent to-success"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleSystem3D />
      <section className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-holographic rounded-full flex items-center justify-center glow-holographic animate-pulse-glow">
              <Ticket className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold gradient-text mb-6">Event Tickets & Pricing</h1>
          <p className="text-xl text-muted-foreground mb-12">Choose your perfect plan and unlock the future of event networking</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ticketTiers.map((tier, index) => (
            <motion.div key={tier.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Card className={`holographic-card animate-hover-lift relative ${tier.popular ? 'glow-holographic scale-105' : ''}`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tier.gradient} rounded-full flex items-center justify-center mx-auto mb-4 glow-primary`}>
                    <tier.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold gradient-neon-text">{tier.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-success mr-3" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button variant={tier.popular ? "default" : "outline"} className={`w-full ${tier.popular ? 'glow-primary' : 'neon-border'}`}>
                    {tier.price === "Free" ? "Get Started" : "Upgrade Now"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}