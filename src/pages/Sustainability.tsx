import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ParticleSystem3D } from "@/components/ParticleSystem3D";
import { Leaf, Recycle, Globe, TreePine, Award, Target } from "lucide-react";

export default function Sustainability() {
  const initiatives = [
    { icon: Leaf, title: "Carbon Neutral Events", description: "100% offset event emissions" },
    { icon: Recycle, title: "Zero Waste Goal", description: "Comprehensive recycling programs" },
    { icon: TreePine, title: "Tree Planting", description: "1 tree planted per attendee" },
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleSystem3D />
      <section className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-holographic rounded-full flex items-center justify-center glow-holographic animate-pulse-glow">
              <Globe className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold gradient-text mb-6">Sustainable Events</h1>
          <p className="text-xl text-muted-foreground mb-12">Building a greener future through eco-conscious event practices</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {initiatives.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Card className="holographic-card animate-hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-success">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}