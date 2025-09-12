import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FloatingObjects3D } from "@/components/FloatingObjects3D";
import { NavLink } from "react-router-dom";
import { 
  Calendar, 
  Trophy, 
  Users, 
  TrendingUp,
  Clock,
  MapPin,
  Award,
  Target,
  CheckCircle,
  Star,
  Zap
} from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "HackTech 2024",
    date: "Dec 15-17, 2024",
    timeLeft: "5 days",
    status: "Registered",
    progress: 75
  },
  {
    id: 2,
    title: "AI Innovation Challenge", 
    date: "Feb 5-7, 2025",
    timeLeft: "45 days",
    status: "Open",
    progress: 0
  }
];

const achievements = [
  {
    id: 1,
    title: "Event Champion",
    description: "Won 1st place in a hackathon",
    icon: "🏆",
    unlockedAt: "2 days ago"
  },
  {
    id: 2,
    title: "Network Builder",
    description: "Connected with 50+ participants",
    icon: "🤝",
    unlockedAt: "1 week ago"
  }
];

const stats = [
  { label: "Events Joined", value: "12", icon: Calendar },
  { label: "Competitions Won", value: "3", icon: Trophy },
  { label: "Network Size", value: "156", icon: Users },
  { label: "Skill Rating", value: "95%", icon: TrendingUp }
];

export default function Dashboard() {
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
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Welcome Back, Alex! 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            Ready to participate in your next amazing event?
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Card className="glass-card border-primary/20 text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/20 rounded-full mb-2 mx-auto">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="glass-card border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    Upcoming Events
                  </CardTitle>
                  <CardDescription>Your registered and upcoming events</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className="flex items-center justify-between p-4 bg-card/50 rounded-lg backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{event.title}</h3>
                          <Badge className={
                            event.status === "Registered" 
                              ? "bg-success/20 text-success" 
                              : "bg-primary/20 text-primary"
                          }>
                            {event.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {event.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {event.timeLeft}
                          </span>
                        </div>
                        {event.progress > 0 && (
                          <div className="mt-2">
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span>Preparation Progress</span>
                              <span>{event.progress}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-1.5">
                              <div 
                                className="bg-primary h-1.5 rounded-full transition-all duration-300"
                                style={{ width: `${event.progress}%` }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      <Button size="sm" variant="ghost">
                        View Details
                      </Button>
                    </div>
                  ))}
                  
                  <Button className="w-full glow-primary" variant="hero" asChild>
                    <NavLink to="/events">
                      <Zap className="h-4 w-4 mr-2" />
                      Discover More Events
                    </NavLink>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Achievements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="glass-card border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-yellow-500" />
                    Recent Achievements
                  </CardTitle>
                  <CardDescription>Your latest accomplishments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="flex items-center p-3 bg-card/50 rounded-lg backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer"
                    >
                      <div className="text-2xl mr-3">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className="font-medium">{achievement.title}</div>
                        <div className="text-sm text-muted-foreground">{achievement.description}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">{achievement.unlockedAt}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="glass-card border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="glass" className="w-full justify-start" asChild>
                    <NavLink to="/events">
                      <Calendar className="h-4 w-4 mr-2" />
                      Browse Events
                    </NavLink>
                  </Button>
                  <Button variant="glass" className="w-full justify-start" asChild>
                    <NavLink to="/registration">
                      <Users className="h-4 w-4 mr-2" />
                      Register for Event
                    </NavLink>
                  </Button>
                  <Button variant="glass" className="w-full justify-start">
                    <Trophy className="h-4 w-4 mr-2" />
                    View Leaderboard
                  </Button>
                  <Button variant="glass" className="w-full justify-start">
                    <Star className="h-4 w-4 mr-2" />
                    Rate Past Events
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Today's Schedule */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="glass-card border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-accent" />
                    Today's Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center">
                      <CheckCircle className="h-3 w-3 mr-2 text-success" />
                      Team standup
                    </span>
                    <span className="text-muted-foreground">10:00 AM</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-2 text-primary" />
                      Coding session
                    </span>
                    <span className="text-muted-foreground">2:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center">
                      <Users className="h-3 w-3 mr-2 text-accent" />
                      Team demo
                    </span>
                    <span className="text-muted-foreground">5:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center">
                      <Trophy className="h-3 w-3 mr-2 text-yellow-500" />
                      Results announcement
                    </span>
                    <span className="text-muted-foreground">8:00 PM</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Network Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
            >
              <Card className="glass-card border-primary/20 bg-gradient-to-r from-accent/10 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-lg">Network Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Connections Made</span>
                    <span className="font-bold">156</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Messages Sent</span>
                    <span className="font-bold">342</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Profile Views</span>
                    <span className="font-bold">89</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Mentor Sessions</span>
                    <span className="font-bold">7</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}