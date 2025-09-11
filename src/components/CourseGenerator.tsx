import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Brain, BookOpen, Target, Clock, Users, Zap } from "lucide-react";
import { toast } from "sonner";

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  modules: CourseModule[];
  skills: string[];
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  topics: string[];
  assessment: string;
}

interface CourseGeneratorProps {
  onCourseGenerated: (course: Course) => void;
  isGenerating: boolean;
}

export function CourseGenerator({ onCourseGenerated, isGenerating }: CourseGeneratorProps) {
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState("beginner");
  const [duration, setDuration] = useState("4 weeks");
  const [goals, setGoals] = useState("");

  const generateCourse = async () => {
    if (!topic.trim()) {
      toast.error("Please enter a topic to generate a course");
      return;
    }

    // Simulate AI course generation
    const mockCourse: Course = {
      id: `course-${Date.now()}`,
      title: `Complete ${topic} Mastery`,
      description: `A comprehensive course covering all aspects of ${topic} from ${level} to advanced level. Learn through interactive lessons, hands-on projects, and real-world applications.`,
      duration: duration,
      difficulty: level,
      skills: generateSkills(topic),
      modules: generateModules(topic, level),
    };

    toast.success("Course generated successfully!");
    onCourseGenerated(mockCourse);
  };

  const generateSkills = (topic: string): string[] => {
    const skillMap: { [key: string]: string[] } = {
      "web development": ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Database Design"],
      "machine learning": ["Python", "TensorFlow", "Data Analysis", "Neural Networks", "Statistics"],
      "mobile development": ["React Native", "Flutter", "iOS", "Android", "UI/UX Design"],
      "data science": ["Python", "R", "SQL", "Machine Learning", "Data Visualization", "Statistics"],
      "cybersecurity": ["Network Security", "Ethical Hacking", "Risk Assessment", "Cryptography"],
    };

    return skillMap[topic.toLowerCase()] || ["Fundamentals", "Practical Application", "Advanced Concepts", "Best Practices"];
  };

  const generateModules = (topic: string, level: string): CourseModule[] => {
    const baseModules: CourseModule[] = [
      {
        id: "module-1",
        title: `${topic} Fundamentals`,
        description: `Introduction to core concepts and principles of ${topic}`,
        duration: "1 week",
        topics: ["Overview", "Key Concepts", "Tools & Setup"],
        assessment: "Quiz and Practical Exercise",
      },
      {
        id: "module-2",
        title: "Hands-on Practice",
        description: "Apply your knowledge through guided exercises",
        duration: "1 week",
        topics: ["Guided Projects", "Problem Solving", "Best Practices"],
        assessment: "Project-based Assessment",
      },
      {
        id: "module-3",
        title: "Advanced Concepts",
        description: "Deep dive into advanced topics and techniques",
        duration: "1 week",
        topics: ["Advanced Techniques", "Optimization", "Industry Standards"],
        assessment: "Capstone Project",
      },
      {
        id: "module-4",
        title: "Real-world Application",
        description: "Build a complete project from scratch",
        duration: "1 week",
        topics: ["Project Planning", "Implementation", "Deployment"],
        assessment: "Final Portfolio Project",
      },
    ];

    return baseModules;
  };

  const difficultyLevels = [
    { value: "beginner", label: "Beginner", color: "bg-success" },
    { value: "intermediate", label: "Intermediate", color: "bg-warning" },
    { value: "advanced", label: "Advanced", color: "bg-destructive" },
  ];

  const durationOptions = [
    "2 weeks", "4 weeks", "6 weeks", "8 weeks", "12 weeks"
  ];

  return (
    <Card className="glass-card border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-primary" />
          <span className="gradient-text">AI Course Generator</span>
        </CardTitle>
        <CardDescription>
          Let AI create a personalized learning path tailored to your goals
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="topic">What do you want to learn?</Label>
            <Input
              id="topic"
              placeholder="e.g., Web Development, Machine Learning, Data Science"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label>Difficulty Level</Label>
            <div className="flex space-x-2 mt-2">
              {difficultyLevels.map((diff) => (
                <Button
                  key={diff.value}
                  variant={level === diff.value ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setLevel(diff.value)}
                  className={level === diff.value ? "glow-primary" : ""}
                >
                  {diff.label}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <Label>Course Duration</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {durationOptions.map((dur) => (
                <Button
                  key={dur}
                  variant={duration === dur ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDuration(dur)}
                  className={duration === dur ? "glow-primary" : ""}
                >
                  {dur}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="goals">Learning Goals (Optional)</Label>
            <Textarea
              id="goals"
              placeholder="Describe what you want to achieve with this course..."
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              className="mt-1"
              rows={3}
            />
          </div>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>~{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Target className="h-4 w-4" />
              <span className="capitalize">{level}</span>
            </div>
          </div>

          <Button
            onClick={generateCourse}
            disabled={isGenerating || !topic.trim()}
            className="glow-primary"
          >
            {isGenerating ? (
              <>
                <Zap className="h-4 w-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Zap className="h-4 w-4 mr-2" />
                Generate Course
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}