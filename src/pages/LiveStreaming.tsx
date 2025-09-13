import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ParticleSystem3D } from "@/components/ParticleSystem3D";
import { 
  Video, 
  Mic, 
  Users, 
  Settings, 
  Share2, 
  Play, 
  Pause,
  Volume2,
  MessageCircle,
  Heart,
  Eye,
  Zap,
  Monitor,
  Camera,
  Radio
} from "lucide-react";

export default function LiveStreaming() {
  const liveStreams = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      speaker: "Dr. Sarah Chen",
      viewers: 1234,
      category: "Technology",
      status: "live",
      thumbnail: "tech-summit.jpg",
      duration: "45 min"
    },
    {
      id: 2,
      title: "Future of AI in Business",
      speaker: "Mark Rodriguez", 
      viewers: 867,
      category: "Business",
      status: "live",
      thumbnail: "ai-business.jpg",
      duration: "60 min"
    },
    {
      id: 3,
      title: "Design Thinking Workshop",
      speaker: "Emma Wilson",
      viewers: 543,
      category: "Design",
      status: "starting-soon",
      thumbnail: "design-workshop.jpg",
      duration: "90 min"
    }
  ];

  const upcomingStreams = [
    {
      title: "Blockchain & Web3 Fundamentals",
      speaker: "Alex Thompson",
      startTime: "2:00 PM",
      category: "Technology"
    },
    {
      title: "Startup Pitch Competition",
      speaker: "Various Speakers",
      startTime: "4:30 PM", 
      category: "Business"
    },
    {
      title: "Creative AI Art Session",
      speaker: "Luna Martinez",
      startTime: "6:00 PM",
      category: "Art"
    }
  ];

  const features = [
    {
      icon: Video,
      title: "4K Quality Streaming",
      description: "Crystal clear video with adaptive bitrate"
    },
    {
      icon: MessageCircle,
      title: "Real-time Chat",
      description: "Interactive audience engagement"
    },
    {
      icon: Share2,
      title: "Multi-platform Streaming",
      description: "Stream to multiple platforms simultaneously"
    },
    {
      icon: Monitor,
      title: "Screen Sharing",
      description: "Share presentations and demos"
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
              <Radio className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold gradient-text mb-6">
            Live Event Streaming
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Broadcast your events to global audiences with professional-grade streaming technology and interactive features.
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="default" className="glow-primary">
              <Video className="h-4 w-4 mr-2" />
              Start Streaming
            </Button>
            <Button variant="outline" className="neon-border">
              <Settings className="h-4 w-4 mr-2" />
              Stream Settings
            </Button>
          </div>

          <div className="flex justify-center items-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-neon-text">12.5K</div>
              <div className="text-sm text-muted-foreground">Live Viewers</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-neon-text">47</div>
              <div className="text-sm text-muted-foreground">Active Streams</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-neon-text">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Live Streams Grid */}
      <section className="relative z-10 container mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Live Now</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {liveStreams.map((stream, index) => (
              <motion.div
                key={stream.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="holographic-card animate-hover-lift overflow-hidden">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-card flex items-center justify-center">
                      <Play className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge 
                        className={`${
                          stream.status === 'live' 
                            ? 'bg-red-600 animate-pulse' 
                            : 'bg-yellow-600'
                        } text-white`}
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        {stream.status === 'live' ? 'LIVE' : 'SOON'}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-black/50 text-white">
                        <Users className="h-3 w-3 mr-1" />
                        {stream.viewers}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <Badge variant="outline" className="bg-black/50 text-white border-white/20">
                        {stream.duration}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg line-clamp-2">{stream.title}</CardTitle>
                    </div>
                    <CardDescription>by {stream.speaker}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="neon-border">
                        {stream.category}
                      </Badge>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="default" className="glow-primary">
                          Watch
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Streaming Features */}
      <section className="relative z-10 container mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="holographic-card animate-hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Upcoming Streams */}
      <section className="relative z-10 container mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Coming Up Next</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {upcomingStreams.map((stream, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <Card className="holographic-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">{stream.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">by {stream.speaker}</p>
                        <Badge variant="outline" className="neon-border">
                          {stream.category}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold gradient-neon-text mb-1">
                          {stream.startTime}
                        </div>
                        <Button size="sm" variant="outline" className="neon-border">
                          Set Reminder
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stream Control Panel */}
      <section className="relative z-10 container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="holographic-card glow-holographic max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl gradient-text flex items-center justify-center">
                <Zap className="h-6 w-6 mr-2" />
                Quick Stream Setup
              </CardTitle>
              <CardDescription>Start broadcasting in seconds with our one-click setup</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Stream Title</label>
                  <Input placeholder="Enter your stream title..." className="neon-border" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <select className="w-full p-2 bg-input border border-border rounded-md neon-border">
                    <option>Technology</option>
                    <option>Business</option>
                    <option>Design</option>
                    <option>Marketing</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <Button variant="outline" className="neon-border">
                  <Camera className="h-4 w-4 mr-2" />
                  Test Camera
                </Button>
                <Button variant="outline" className="neon-border">
                  <Mic className="h-4 w-4 mr-2" />
                  Test Audio
                </Button>
                <Button variant="default" className="glow-primary">
                  <Radio className="h-4 w-4 mr-2" />
                  Go Live
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}