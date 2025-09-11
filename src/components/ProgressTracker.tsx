import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Award, 
  Clock, 
  Target,
  BookOpen,
  CheckCircle2,
  Zap,
  Calendar
} from "lucide-react";

interface ProgressData {
  overallProgress: number;
  completedModules: number;
  totalModules: number;
  skillsMastered: string[];
  weeklyGoal: number;
  weeklyProgress: number;
  streak: number;
  timeSpent: string;
  achievements: Achievement[];
  recentActivity: Activity[];
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: string;
}

interface Activity {
  id: string;
  type: string;
  title: string;
  timestamp: string;
  progress?: number;
}

interface ProgressTrackerProps {
  data: ProgressData;
}

export function ProgressTracker({ data }: ProgressTrackerProps) {
  const progressPercentage = (data.completedModules / data.totalModules) * 100;

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass-card border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-success" />
              <div>
                <p className="text-sm text-muted-foreground">Overall Progress</p>
                <p className="text-2xl font-bold gradient-text">{data.overallProgress}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Modules</p>
                <p className="text-2xl font-bold">{data.completedModules}/{data.totalModules}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-warning" />
              <div>
                <p className="text-sm text-muted-foreground">Streak</p>
                <p className="text-2xl font-bold">{data.streak} days</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Time Spent</p>
                <p className="text-2xl font-bold">{data.timeSpent}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Goal */}
        <Card className="glass-card border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-primary" />
              <span>Weekly Goal</span>
            </CardTitle>
            <CardDescription>Track your weekly learning progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Progress this week</span>
                <span className="text-sm font-medium">{data.weeklyProgress}/{data.weeklyGoal} hours</span>
              </div>
              <Progress 
                value={(data.weeklyProgress / data.weeklyGoal) * 100} 
                className="h-3"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {data.weeklyGoal - data.weeklyProgress} hours remaining
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Skills Mastered */}
        <Card className="glass-card border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-primary" />
              <span>Skills Mastered</span>
            </CardTitle>
            <CardDescription>Your learning achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {data.skillsMastered.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-success/20 text-success border-success/50"
                >
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <Card className="glass-card border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-primary" />
            <span>Recent Achievements</span>
          </CardTitle>
          <CardDescription>Your latest learning milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-lg bg-gradient-secondary border border-border"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div>
                    <h4 className="font-semibold">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    <p className="text-xs text-primary mt-1">{achievement.unlockedAt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="glass-card border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-primary" />
            <span>Recent Activity</span>
          </CardTitle>
          <CardDescription>Your learning timeline</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/20">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <h4 className="font-medium">{activity.title}</h4>
                  <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
                </div>
                {activity.progress && (
                  <Badge variant="outline" className="bg-primary/10">
                    {activity.progress}% complete
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}