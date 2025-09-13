import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ParticleSystem3D } from "@/components/ParticleSystem3D";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  Target, 
  Award, 
  Zap,
  Eye,
  Heart,
  Share2,
  Download
} from "lucide-react";

export default function Analytics() {
  const eventData = [
    { month: 'Jan', events: 12, attendees: 450 },
    { month: 'Feb', events: 18, attendees: 680 },
    { month: 'Mar', events: 15, attendees: 520 },
    { month: 'Apr', events: 22, attendees: 890 },
    { month: 'May', events: 28, attendees: 1200 },
    { month: 'Jun', events: 32, attendees: 1450 },
  ];

  const categoryData = [
    { name: 'Tech', value: 35, color: '#00ccff' },
    { name: 'Business', value: 25, color: '#cc00ff' },
    { name: 'Design', value: 20, color: '#00ff88' },
    { name: 'Marketing', value: 15, color: '#ffcc00' },
    { name: 'Other', value: 5, color: '#ff6600' },
  ];

  const engagementData = [
    { day: 'Mon', views: 1200, interactions: 340, shares: 89 },
    { day: 'Tue', views: 1890, interactions: 420, shares: 112 },
    { day: 'Wed', views: 2300, interactions: 680, shares: 145 },
    { day: 'Thu', views: 1980, interactions: 580, shares: 134 },
    { day: 'Fri', views: 2800, interactions: 890, shares: 234 },
    { day: 'Sat', views: 2100, interactions: 620, shares: 167 },
    { day: 'Sun', views: 1650, interactions: 480, shares: 123 },
  ];

  const stats = [
    {
      title: "Total Events",
      value: "127",
      change: "+23%",
      trend: "up",
      icon: Calendar,
      description: "This month"
    },
    {
      title: "Total Attendees",
      value: "5,240",
      change: "+18%",
      trend: "up",
      icon: Users,
      description: "Across all events"
    },
    {
      title: "Engagement Rate",
      value: "78.5%",
      change: "+12%",
      trend: "up",
      icon: Heart,
      description: "Average interaction"
    },
    {
      title: "Success Score",
      value: "9.2/10",
      change: "+0.8",
      trend: "up",
      icon: Award,
      description: "Based on feedback"
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
              <BarChart className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold gradient-text mb-6">
            Event Analytics
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Deep insights into your event performance, audience engagement, and growth metrics powered by AI analytics.
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="default" className="glow-primary">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button variant="outline" className="neon-border">
              <Share2 className="h-4 w-4 mr-2" />
              Share Dashboard
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Stats Grid */}
      <section className="relative z-10 container mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="holographic-card animate-hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                    <Badge 
                      variant="default" 
                      className={`${stat.trend === 'up' ? 'bg-success' : 'bg-destructive'} text-white`}
                    >
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="text-3xl font-bold gradient-neon-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {stat.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Charts Section */}
      <section className="relative z-10 container mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Event Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="holographic-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  Event Growth Trend
                </CardTitle>
                <CardDescription>Monthly events and attendance</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={eventData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1a1a2e', 
                        border: '1px solid #00ccff',
                        borderRadius: '8px'
                      }} 
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="events" 
                      stroke="#00ccff" 
                      strokeWidth={3}
                      dot={{ fill: '#00ccff', strokeWidth: 2, r: 6 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="attendees" 
                      stroke="#cc00ff" 
                      strokeWidth={3}
                      dot={{ fill: '#cc00ff', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Category Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="holographic-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-accent" />
                  Event Categories
                </CardTitle>
                <CardDescription>Distribution by category</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1a1a2e', 
                        border: '1px solid #00ccff',
                        borderRadius: '8px'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Engagement Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="holographic-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2 text-success" />
                Weekly Engagement Metrics
              </CardTitle>
              <CardDescription>Views, interactions, and shares over the past week</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="day" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1a1a2e', 
                      border: '1px solid #00ccff',
                      borderRadius: '8px'
                    }} 
                  />
                  <Legend />
                  <Bar dataKey="views" fill="#00ccff" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="interactions" fill="#cc00ff" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="shares" fill="#00ff88" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* AI Insights */}
      <section className="relative z-10 container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="holographic-card glow-holographic">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl gradient-text flex items-center justify-center">
                <Eye className="h-6 w-6 mr-2" />
                AI-Powered Insights
              </CardTitle>
              <CardDescription>Smart recommendations to improve your event success</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-card rounded-lg neon-border">
                  <h3 className="font-semibold text-success mb-2">🎯 Optimization Tip</h3>
                  <p className="text-sm text-muted-foreground">
                    Friday events show 40% higher engagement. Consider scheduling more events on Fridays.
                  </p>
                </div>
                <div className="p-4 bg-gradient-card rounded-lg neon-border">
                  <h3 className="font-semibold text-accent mb-2">📈 Growth Opportunity</h3>
                  <p className="text-sm text-muted-foreground">
                    Tech events have the highest attendance rate. Expand your tech event offerings.
                  </p>
                </div>
                <div className="p-4 bg-gradient-card rounded-lg neon-border">
                  <h3 className="font-semibold text-primary mb-2">⚡ Performance Alert</h3>
                  <p className="text-sm text-muted-foreground">
                    Your events are performing 23% above industry average. Keep up the great work!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}