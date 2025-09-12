import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FloatingObjects3D } from "@/components/FloatingObjects3D";
import { NavLink } from "react-router-dom";
import { 
  Calendar, 
  UserPlus, 
  Building2, 
  Trophy, 
  Users, 
  Zap,
  Target,
  Star,
  ArrowRight,
  Play
} from "lucide-react";

const featuredEvents = [
  {
    id: 1,
    title: "HackTech 2024",
    date: "Dec 15-17, 2024",
    participants: 500,
    prize: "$50,000",
    category: "Hackathon"
  },
  {
    id: 2,
    title: "AI Innovation Challenge",
    date: "Feb 5-7, 2025",
    participants: 800,
    prize: "$25,000", 
    category: "Competition"
  },
  {
    id: 3,
    title: "DevFest Mumbai",
    date: "Jan 20, 2025",
    participants: 1200,
    prize: "Certificates",
    category: "Conference"
  }
];

const stats = [
  { label: "Active Events", value: "50+", icon: Calendar },
  { label: "Registered Users", value: "25K+", icon: Users },
  { label: "Prize Money", value: "$500K+", icon: Trophy },
  { label: "Success Rate", value: "95%", icon: Target }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* 3D Floating Objects Background */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingObjects3D />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Next-Gen Event Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover, participate, and excel in hackathons, conferences, and competitions. 
            Connect with innovators, showcase your skills, and win amazing prizes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="glow-primary text-lg px-8" variant="hero" asChild>
              <NavLink to="/events">
                <Calendar className="h-5 w-5 mr-2" />
                Explore Events
              </NavLink>
            </Button>
            <Button size="lg" variant="ghost" className="text-lg px-8">
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Badge variant="secondary" className="bg-primary/20 text-primary px-4 py-2">
              <Zap className="h-4 w-4 mr-2" />
              Interactive 3D Experience
            </Badge>
            <Badge variant="secondary" className="bg-success/20 text-success px-4 py-2">
              <Trophy className="h-4 w-4 mr-2" />
              Real Prizes & Recognition
            </Badge>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <Card className="glass-card border-primary/20 text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4 mx-auto">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold gradient-text mb-4">Featured Events</h2>
            <p className="text-muted-foreground">Join the most exciting events happening now</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.8 }}
                className="group"
              >
                <Card className="glass-card border-primary/20 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-primary/80 text-primary-foreground">
                        {event.category}
                      </Badge>
                      <Star className="h-4 w-4 text-yellow-500" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {event.title}
                    </CardTitle>
                    <CardDescription>{event.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {event.participants} participants
                      </div>
                      <Badge variant="secondary" className="bg-success/20 text-success">
                        {event.prize}
                      </Badge>
                    </div>
                    <Button className="w-full" variant="hero">
                      Join Event
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="ghost" size="lg" asChild>
              <NavLink to="/events">
                View All Events
                <ArrowRight className="h-4 w-4 ml-2" />
              </NavLink>
            </Button>
          </div>
        </motion.div>

        {/* CTA Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Card className="glass-card border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text flex items-center">
                  <UserPlus className="h-6 w-6 mr-3" />
                  For Participants
                </CardTitle>
                <CardDescription>
                  Join competitions, learn new skills, and win amazing prizes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    Access to exclusive events and competitions
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    Network with industry professionals
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    Win prizes and gain recognition
                  </li>
                </ul>
                <Button className="w-full glow-primary" variant="hero" asChild>
                  <NavLink to="/registration">
                    Start Your Journey
                  </NavLink>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
          >
            <Card className="glass-card border-primary/20 bg-gradient-to-r from-accent/10 to-accent/5">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text flex items-center">
                  <Building2 className="h-6 w-6 mr-3" />
                  For Sponsors
                </CardTitle>
                <CardDescription>
                  Partner with us to reach talented developers and innovators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-accent mr-2" />
                    Brand visibility across events
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-accent mr-2" />
                    Access to top talent for recruitment
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-accent mr-2" />
                    Showcase products to target audience
                  </li>
                </ul>
                <Button className="w-full" variant="hero" asChild>
                  <NavLink to="/sponsors">
                    Become a Sponsor
                  </NavLink>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
