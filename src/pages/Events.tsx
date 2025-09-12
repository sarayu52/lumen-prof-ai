import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FloatingObjects3D } from "@/components/FloatingObjects3D";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Trophy,
  Search,
  Filter,
  Heart,
  Share2,
  ExternalLink
} from "lucide-react";

const mockEvents = [
  {
    id: 1,
    title: "HackTech 2024",
    description: "48-hour hackathon focused on AI and sustainability solutions",
    date: "Dec 15-17, 2024",
    location: "Tech Hub, San Francisco",
    participants: 500,
    prize: "$50,000",
    category: "Hackathon",
    image: "/api/placeholder/400/250",
    tags: ["AI", "Sustainability", "48hrs"],
    registrationDeadline: "Dec 10, 2024",
    difficulty: "Intermediate"
  },
  {
    id: 2,
    title: "DevFest Mumbai",
    description: "Google Developer Festival with workshops and networking",
    date: "Jan 20, 2025",
    location: "Mumbai, India",
    participants: 1200,
    prize: "Certificates",
    category: "Conference",
    image: "/api/placeholder/400/250",
    tags: ["Google", "Android", "Web"],
    registrationDeadline: "Jan 15, 2025",
    difficulty: "Beginner"
  },
  {
    id: 3,
    title: "AI Innovation Challenge",
    description: "Showcase your AI skills and win amazing prizes",
    date: "Feb 5-7, 2025",
    location: "Virtual",
    participants: 800,
    prize: "$25,000",
    category: "Competition",
    image: "/api/placeholder/400/250",
    tags: ["AI", "Machine Learning", "Virtual"],
    registrationDeadline: "Jan 30, 2025",
    difficulty: "Advanced"
  }
];

export default function Events() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = ["All", "Hackathon", "Conference", "Competition", "Workshop"];

  const filteredEvents = mockEvents.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "All" || event.category === selectedCategory)
  );

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
            Discover Amazing Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hackathons, conferences, and competitions that shape the future of technology
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between"
        >
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glass-card border-primary/20"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "glow-primary" : ""}
              >
                <Filter className="h-4 w-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              onHoverStart={() => setHoveredCard(event.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group"
            >
              <Card className="glass-card border-primary/20 overflow-hidden h-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
                    <Trophy className="h-16 w-16 text-primary/60" />
                  </div>
                  <Badge 
                    className="absolute top-3 right-3 bg-primary/80 text-primary-foreground"
                  >
                    {event.category}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {event.participants} participants
                    </div>
                    <Badge variant="secondary" className="bg-success/20 text-success">
                      {event.prize}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4 flex gap-2">
                    <Button 
                      className="flex-1 glow-primary"
                      variant="hero"
                    >
                      Register Now
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <Card className="glass-card border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl gradient-text">Why Join Our Events?</CardTitle>
              <CardDescription>Unlock opportunities and grow your network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Win Big Prizes</h3>
                  <p className="text-sm text-muted-foreground">Compete for cash prizes and recognition</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold">Network & Learn</h3>
                  <p className="text-sm text-muted-foreground">Connect with industry experts and peers</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto">
                    <ExternalLink className="h-6 w-6 text-success" />
                  </div>
                  <h3 className="font-semibold">Build Your Portfolio</h3>
                  <p className="text-sm text-muted-foreground">Showcase your skills and projects</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}