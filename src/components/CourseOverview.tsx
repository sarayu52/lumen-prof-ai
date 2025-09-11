import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  BookOpen, 
  Clock, 
  Target, 
  PlayCircle, 
  CheckCircle2, 
  Star,
  Users,
  Award,
  MessageSquare
} from "lucide-react";
import type { Course } from "./CourseGenerator";

interface CourseOverviewProps {
  course: Course;
  progress?: number;
  onStartCourse: () => void;
  onAskProfessor: () => void;
}

export function CourseOverview({ course, progress = 0, onStartCourse, onAskProfessor }: CourseOverviewProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-success";
      case "intermediate": return "bg-warning";
      case "advanced": return "bg-destructive";
      default: return "bg-primary";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Course Header */}
      <Card className="glass-card border-primary/20 bg-gradient-card">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="text-2xl gradient-text">{course.title}</CardTitle>
              <CardDescription className="text-base">
                {course.description}
              </CardDescription>
            </div>
            <Badge 
              variant="secondary" 
              className={`${getDifficultyColor(course.difficulty)} text-white capitalize`}
            >
              {course.difficulty}
            </Badge>
          </div>

          {/* Course Stats */}
          <div className="flex items-center space-x-6 pt-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm">{course.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm">{course.modules.length} Modules</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm">{course.skills.length} Skills</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-warning" />
              <span className="text-sm">4.9 Rating</span>
            </div>
          </div>
        </CardHeader>

        {progress > 0 && (
          <CardContent className="pt-0">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Progress</span>
                <span className="text-sm font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </CardContent>
        )}
      </Card>

      {/* Skills Section */}
      <Card className="glass-card border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-primary" />
            <span>Skills You'll Learn</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {course.skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-secondary/50 hover:bg-secondary/70 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Modules Section */}
      <Card className="glass-card border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span>Course Modules</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {course.modules.map((module, index) => (
            <div key={module.id} className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold">{module.title}</h4>
                    <Badge variant="outline" className="text-xs">
                      {module.duration}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground ml-8">
                    {module.description}
                  </p>
                  <div className="ml-8">
                    <div className="flex flex-wrap gap-1 mt-2">
                      {module.topics.map((topic, topicIndex) => (
                        <Badge 
                          key={topicIndex} 
                          variant="outline" 
                          className="text-xs bg-muted/50"
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs text-primary mt-2">
                      Assessment: {module.assessment}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  {progress > (index + 1) * 25 ? (
                    <CheckCircle2 className="h-5 w-5 text-success" />
                  ) : progress > index * 25 ? (
                    <PlayCircle className="h-5 w-5 text-warning" />
                  ) : (
                    <div className="h-5 w-5 rounded-full border-2 border-muted" />
                  )}
                </div>
              </div>
              {index < course.modules.length - 1 && <Separator />}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={onStartCourse}
          className="flex-1 glow-primary"
          size="lg"
        >
          <PlayCircle className="h-5 w-5 mr-2" />
          {progress > 0 ? "Continue Learning" : "Start Course"}
        </Button>
        <Button 
          onClick={onAskProfessor}
          variant="outline"
          size="lg"
          className="flex-1 border-primary/50 hover:bg-primary/10"
        >
          <MessageSquare className="h-5 w-5 mr-2" />
          Ask AI Professor
        </Button>
      </div>
    </motion.div>
  );
}