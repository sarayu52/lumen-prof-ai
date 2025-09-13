import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ParticleSystem3D } from "@/components/ParticleSystem3D";
import { 
  Brain, 
  Users, 
  Zap, 
  Target, 
  MessageSquare,
  Calendar,
  Briefcase,
  GraduationCap,
  Heart,
  Star,
  Coffee,
  Handshake,
  Sparkles
} from "lucide-react";

export default function AIMatching() {
  const recommendations = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "AI Research Engineer",
      company: "TechCorp",
      matchScore: 95,
      commonInterests: ["Machine Learning", "Neural Networks", "Python"],
      location: "San Francisco, CA",
      avatar: "👩‍💻",
      reason: "Both interested in AI ethics and have similar research backgrounds"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      title: "Product Manager",
      company: "InnovateLab",
      matchScore: 88,
      commonInterests: ["Product Strategy", "UX Design", "Innovation"],
      location: "New York, NY", 
      avatar: "👨‍💼",
      reason: "Complementary skills in product development and shared startup experience"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      title: "Blockchain Developer",
      company: "CryptoStart",
      matchScore: 82,
      commonInterests: ["Blockchain", "DeFi", "Smart Contracts"],
      location: "Austin, TX",
      avatar: "👩‍🔬",
      reason: "Both working on similar blockchain solutions and seeking technical collaboration"
    }
  ];

  const networkingEvents = [
    {
      title: "AI Innovators Meetup",
      date: "Tomorrow, 6:00 PM",
      attendees: 45,
      matchPotential: "High",
      category: "Technology"
    },
    {
      title: "Startup Founder Roundtable", 
      date: "Friday, 3:00 PM",
      attendees: 32,
      matchPotential: "Medium",
      category: "Business"
    },
    {
      title: "Women in Tech Summit",
      date: "Next Week",
      attendees: 128,
      matchPotential: "High",
      category: "Diversity"
    }
  ];

  const aiInsights = [
    {
      icon: Brain,
      title: "Smart Skill Matching",
      description: "AI analyzes your skills and matches you with complementary professionals"
    },
    {
      icon: Target,
      title: "Goal Alignment",
      description: "Finds people with similar career goals and project interests"
    },
    {
      icon: Sparkles,
      title: "Personality Compatibility", 
      description: "Considers communication styles and working preferences"
    },
    {
      icon: Handshake,
      title: "Mutual Benefit Analysis",
      description: "Identifies opportunities where both parties can benefit"
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
              <Brain className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold gradient-text mb-6">
            AI-Powered Networking
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let artificial intelligence find your perfect networking matches based on skills, interests, goals, and compatibility.
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="default" className="glow-primary">
              <Zap className="h-4 w-4 mr-2" />
              Find Matches
            </Button>
            <Button variant="outline" className="neon-border">
              <MessageSquare className="h-4 w-4 mr-2" />
              AI Chat Assistant
            </Button>
          </div>

          <div className="flex justify-center items-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-neon-text">1,247</div>
              <div className="text-sm text-muted-foreground">AI Matches Made</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-neon-text">94%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-neon-text">2.3k</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* AI Matching Recommendations */}
      <section className="relative z-10 container mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Your AI Matches</h2>
          <div className="space-y-6 max-w-4xl mx-auto mb-12">
            {recommendations.map((match, index) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="holographic-card animate-hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{match.avatar}</div>
                        <div>
                          <h3 className="text-xl font-semibold">{match.name}</h3>
                          <p className="text-muted-foreground">{match.title}</p>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <Briefcase className="h-3 w-3 mr-1" />
                            {match.company} • {match.location}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center mb-2">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-2xl font-bold gradient-neon-text">
                            {match.matchScore}%
                          </span>
                        </div>
                        <Badge className="bg-success text-white">
                          High Match
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Match Reason:</h4>
                      <p className="text-sm text-muted-foreground mb-3">{match.reason}</p>
                      
                      <h4 className="text-sm font-semibold mb-2">Common Interests:</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {match.commonInterests.map((interest, i) => (
                          <Badge key={i} variant="outline" className="neon-border text-xs">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Compatibility Score</span>
                        <span>{match.matchScore}%</span>
                      </div>
                      <Progress value={match.matchScore} className="h-2" />
                    </div>

                    <div className="flex gap-3">
                      <Button variant="default" className="glow-primary flex-1">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Connect
                      </Button>
                      <Button variant="outline" className="neon-border">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="neon-border">
                        <Calendar className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* AI Insights */}
      <section className="relative z-10 container mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold gradient-text mb-8 text-center">How AI Matching Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {aiInsights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="holographic-card animate-hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
                      <insight.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Recommended Events */}
      <section className="relative z-10 container mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold gradient-text mb-8 text-center">AI-Recommended Events</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {networkingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <Card className="holographic-card animate-hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {event.date}
                          </span>
                          <span className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {event.attendees} attendees
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="neon-border">
                            {event.category}
                          </Badge>
                          <Badge 
                            className={`${
                              event.matchPotential === 'High' 
                                ? 'bg-success' 
                                : 'bg-accent'
                            } text-white`}
                          >
                            {event.matchPotential} Match Potential
                          </Badge>
                        </div>
                      </div>
                      <Button variant="default" className="glow-primary ml-4">
                        <Coffee className="h-4 w-4 mr-2" />
                        Join Event
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* AI Assistant CTA */}
      <section className="relative z-10 container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="holographic-card glow-holographic max-w-3xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl gradient-text flex items-center justify-center">
                <Sparkles className="h-6 w-6 mr-2" />
                AI Networking Assistant
              </CardTitle>
              <CardDescription>Get personalized networking advice and conversation starters</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-muted-foreground">
                Our AI assistant can help you craft the perfect introduction message, 
                suggest conversation topics, and provide networking strategy advice.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-card rounded-lg neon-border">
                  <MessageSquare className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Message Templates</h3>
                  <p className="text-xs text-muted-foreground">AI-generated intro messages</p>
                </div>
                <div className="p-4 bg-gradient-card rounded-lg neon-border">
                  <Target className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Goal Setting</h3>
                  <p className="text-xs text-muted-foreground">Define networking objectives</p>
                </div>
                <div className="p-4 bg-gradient-card rounded-lg neon-border">
                  <Brain className="h-8 w-8 text-success mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Smart Insights</h3>
                  <p className="text-xs text-muted-foreground">Behavioral analysis tips</p>
                </div>
              </div>
              <Button variant="default" className="glow-primary">
                <Brain className="h-4 w-4 mr-2" />
                Chat with AI Assistant
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}