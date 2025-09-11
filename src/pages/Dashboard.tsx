import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AIProfessor3D } from "@/components/AIProfessor3D";
import { CourseGenerator, type Course } from "@/components/CourseGenerator";
import { CourseOverview } from "@/components/CourseOverview";
import { ProgressTracker } from "@/components/ProgressTracker";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import {
  Brain,
  BookOpen,
  TrendingUp,
  MessageSquare,
  Sparkles,
  Rocket,
  GraduationCap,
  Zap
} from "lucide-react";

export default function Dashboard() {
  const [generatedCourse, setGeneratedCourse] = useState<Course | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [professorActive, setProfessorActive] = useState(true);
  const [professorSpeaking, setProfessorSpeaking] = useState(false);
  const [micEnabled, setMicEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Mock progress data
  const progressData = {
    overallProgress: 67,
    completedModules: 3,
    totalModules: 4,
    skillsMastered: ["JavaScript", "React", "CSS3", "HTML5"],
    weeklyGoal: 10,
    weeklyProgress: 7.5,
    streak: 12,
    timeSpent: "32h",
    achievements: [
      {
        id: "1",
        title: "First Steps",
        description: "Completed your first module",
        icon: "🎯",
        unlockedAt: "2 days ago"
      },
      {
        id: "2",
        title: "Streak Master",
        description: "10 day learning streak",
        icon: "🔥",
        unlockedAt: "1 day ago"
      },
      {
        id: "3",
        title: "Code Ninja",
        description: "Built your first project",
        icon: "👨‍💻",
        unlockedAt: "Today"
      }
    ],
    recentActivity: [
      {
        id: "1",
        type: "module",
        title: "Completed React Fundamentals",
        timestamp: "2 hours ago",
        progress: 100
      },
      {
        id: "2",
        type: "assessment",
        title: "Passed JavaScript Quiz",
        timestamp: "1 day ago",
        progress: 85
      },
      {
        id: "3",
        type: "project",
        title: "Started Portfolio Project",
        timestamp: "2 days ago",
        progress: 30
      }
    ]
  };

  const handleCourseGenerated = async (course: Course) => {
    setIsGenerating(true);
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    setGeneratedCourse(course);
    setIsGenerating(false);
    setProfessorSpeaking(true);
    setTimeout(() => setProfessorSpeaking(false), 3000);
  };

  const handleStartCourse = () => {
    toast.success("Course started! Ready to learn?");
    setProfessorSpeaking(true);
    setTimeout(() => setProfessorSpeaking(false), 2000);
  };

  const handleAskProfessor = () => {
    toast.info("AI Professor is ready to help!");
    setProfessorSpeaking(true);
    setTimeout(() => setProfessorSpeaking(false), 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            AI-Powered EdTech Platform
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your learning journey with personalized AI courses and a 3D AI professor
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              <Brain className="h-3 w-3 mr-1" />
              AI-Powered
            </Badge>
            <Badge variant="secondary" className="bg-success/20 text-success">
              <Sparkles className="h-3 w-3 mr-1" />
              Interactive 3D
            </Badge>
            <Badge variant="secondary" className="bg-accent/20 text-accent">
              <Rocket className="h-3 w-3 mr-1" />
              Project-Based
            </Badge>
          </div>
        </motion.div>

        <Tabs defaultValue="generator" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px] mx-auto bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="generator" className="flex items-center space-x-2">
              <Zap className="h-4 w-4" />
              <span>Generate</span>
            </TabsTrigger>
            <TabsTrigger value="course" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Course</span>
            </TabsTrigger>
            <TabsTrigger value="progress" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Progress</span>
            </TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Main Content */}
            <div className="space-y-6">
              <TabsContent value="generator" className="mt-0">
                <CourseGenerator 
                  onCourseGenerated={handleCourseGenerated}
                  isGenerating={isGenerating}
                />
              </TabsContent>

              <TabsContent value="course" className="mt-0">
                {generatedCourse ? (
                  <CourseOverview 
                    course={generatedCourse}
                    progress={progressData.overallProgress}
                    onStartCourse={handleStartCourse}
                    onAskProfessor={handleAskProfessor}
                  />
                ) : (
                  <Card className="glass-card border-primary/20">
                    <CardContent className="flex flex-col items-center justify-center py-16 space-y-4">
                      <GraduationCap className="h-16 w-16 text-muted-foreground" />
                      <h3 className="text-xl font-semibold text-muted-foreground">No Course Generated</h3>
                      <p className="text-center text-muted-foreground">
                        Generate your first AI-powered course to get started with your learning journey
                      </p>
                      <Button
                        variant="hero"
                        onClick={() => {
                          const generatorTab = document.querySelector('[data-state="inactive"][value="generator"]') as HTMLElement;
                          if (generatorTab) generatorTab.click();
                        }}
                      >
                        <Zap className="h-4 w-4 mr-2" />
                        Generate Course
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="progress" className="mt-0">
                <ProgressTracker data={progressData} />
              </TabsContent>
            </div>

            {/* Right Column - AI Professor */}
            <div className="space-y-6">
              <AIProfessor3D
                isActive={professorActive}
                isSpeaking={professorSpeaking}
                onToggleMic={() => setMicEnabled(!micEnabled)}
                onToggleSound={() => setSoundEnabled(!soundEnabled)}
                micEnabled={micEnabled}
                soundEnabled={soundEnabled}
              />

              {/* Quick Actions */}
              <Card className="glass-card border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>Quick Actions</span>
                  </CardTitle>
                  <CardDescription>
                    Interact with your AI Professor
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    variant="glass" 
                    className="w-full justify-start"
                    onClick={handleAskProfessor}
                  >
                    <Brain className="h-4 w-4 mr-2" />
                    Ask a Question
                  </Button>
                  <Button 
                    variant="glass" 
                    className="w-full justify-start"
                    onClick={() => toast.info("Getting personalized recommendations...")}
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Get Recommendations
                  </Button>
                  <Button 
                    variant="glass" 
                    className="w-full justify-start"
                    onClick={() => toast.info("Reviewing your progress...")}
                  >
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Review Progress
                  </Button>
                  <Button 
                    variant="glass" 
                    className="w-full justify-start"
                    onClick={() => toast.info("Starting practice session...")}
                  >
                    <Rocket className="h-4 w-4 mr-2" />
                    Start Practice
                  </Button>
                </CardContent>
              </Card>

              {/* Learning Stats */}
              <Card className="glass-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Today's Learning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Time Spent</span>
                    <span className="font-medium">2h 15m</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Modules Completed</span>
                    <span className="font-medium">1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Questions Asked</span>
                    <span className="font-medium">7</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Streak</span>
                    <span className="font-medium flex items-center">
                      🔥 {progressData.streak} days
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}