import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ParticleSystem3D } from "@/components/ParticleSystem3D";
import { MessageSquare, Star, ThumbsUp, Users, BarChart3 } from "lucide-react";

export default function Feedback() {
  const ratings = [1, 2, 3, 4, 5];
  
  return (
    <div className="min-h-screen relative">
      <ParticleSystem3D />
      <section className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-holographic rounded-full flex items-center justify-center glow-holographic animate-pulse-glow">
              <MessageSquare className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold gradient-text mb-6">Event Feedback</h1>
          <p className="text-xl text-muted-foreground mb-12">Help us improve by sharing your experience</p>
        </motion.div>
        
        <Card className="holographic-card max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl gradient-text">Rate Your Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center gap-2">
              {ratings.map((rating) => (
                <button key={rating} className="p-2 hover:scale-110 transition-transform">
                  <Star className="h-8 w-8 text-muted-foreground hover:text-yellow-400" />
                </button>
              ))}
            </div>
            <Textarea placeholder="Share your thoughts about the event..." className="min-h-32 neon-border" />
            <Button className="w-full glow-primary">
              <ThumbsUp className="h-4 w-4 mr-2" />
              Submit Feedback
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}