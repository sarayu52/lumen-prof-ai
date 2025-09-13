import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ParticleSystem3D } from "@/components/ParticleSystem3D";
import { Gift, Star, Trophy, Zap, Crown, Diamond, Target, Award } from "lucide-react";

export default function Rewards() {
  const rewards = [
    {
      id: 1,
      title: "Event Explorer",
      description: "Attend 5 events to unlock this badge",
      points: 100,
      progress: 60,
      icon: Target,
      rarity: "common",
      unlocked: false
    },
    {
      id: 2,
      title: "Networking Master",
      description: "Connect with 25 people at events",
      points: 250,
      progress: 100,
      icon: Trophy,
      rarity: "rare",
      unlocked: true
    },
    {
      id: 3,
      title: "Speaker Superstar",
      description: "Host or speak at 3 events",
      points: 500,
      progress: 33,
      icon: Crown,
      rarity: "epic",
      unlocked: false
    },
    {
      id: 4,
      title: "Innovation Champion",
      description: "Win hackathon or innovation challenge",
      points: 1000,
      progress: 0,
      icon: Diamond,
      rarity: "legendary",
      unlocked: false
    }
  ];

  const perks = [
    {
      title: "VIP Event Access",
      description: "Early access to exclusive events",
      pointsCost: 500,
      available: true
    },
    {
      title: "Premium Networking",
      description: "AI-powered networking recommendations",
      pointsCost: 300,
      available: true
    },
    {
      title: "Custom Avatar",
      description: "Personalize your 3D avatar",
      pointsCost: 200,
      available: false
    },
    {
      title: "Event Hosting Credits",
      description: "Free credits to host your own event",
      pointsCost: 800,
      available: true
    }
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleSystem3D />
      
      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-holographic rounded-full flex items-center justify-center glow-holographic animate-pulse-glow">
              <Gift className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold gradient-text mb-6">
            Rewards & Achievements
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Unlock exclusive perks, earn badges, and level up your event experience with our gamified reward system.
          </p>
          
          <div className="flex justify-center items-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-neon-text">1,250</div>
              <div className="text-sm text-muted-foreground">Total Points</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-neon-text">Level 8</div>
              <div className="text-sm text-muted-foreground">Current Level</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-neon-text">12</div>
              <div className="text-sm text-muted-foreground">Badges Earned</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Achievement Progress */}
      <section className="relative z-10 container mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Achievement Progress</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {rewards.map((reward, index) => (
              <motion.div
                key={reward.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`holographic-card animate-hover-lift ${reward.unlocked ? 'glow-success' : ''}`}>
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      reward.rarity === 'common' ? 'bg-muted' :
                      reward.rarity === 'rare' ? 'bg-gradient-to-r from-primary to-accent' :
                      reward.rarity === 'epic' ? 'bg-gradient-to-r from-accent to-success' :
                      'bg-gradient-holographic'
                    } glow-${reward.rarity === 'legendary' ? 'holographic' : 'primary'}`}>
                      <reward.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{reward.title}</CardTitle>
                      <CardDescription>{reward.description}</CardDescription>
                    </div>
                    <Badge variant={reward.unlocked ? "default" : "secondary"} className="ml-2">
                      {reward.points} pts
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{reward.progress}%</span>
                      </div>
                      <Progress 
                        value={reward.progress} 
                        className="h-2"
                      />
                      {reward.unlocked && (
                        <Badge className="bg-success text-white">
                          <Award className="h-3 w-3 mr-1" />
                          Unlocked
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Reward Store */}
      <section className="relative z-10 container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Reward Store</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="holographic-card animate-hover-lift h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{perk.title}</CardTitle>
                    <CardDescription>{perk.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold gradient-neon-text mb-4">
                      {perk.pointsCost} pts
                    </div>
                    <Button 
                      variant={perk.available ? "default" : "secondary"}
                      disabled={!perk.available}
                      className="w-full glow-primary"
                    >
                      {perk.available ? "Redeem" : "Coming Soon"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}