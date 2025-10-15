import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Clock } from "lucide-react";
import { Course } from "@/data/courses";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const navigate = useNavigate();

  const colorClasses = {
    emerald: "bg-course-emerald text-course-emerald-foreground",
    blue: "bg-course-blue text-course-blue-foreground",
    orange: "bg-course-orange text-course-orange-foreground",
    amber: "bg-course-amber text-course-amber-foreground",
    purple: "bg-course-purple text-course-purple-foreground",
    cyan: "bg-course-cyan text-course-cyan-foreground",
    red: "bg-course-red text-course-red-foreground",
    slate: "bg-course-slate text-course-slate-foreground",
  };

  const difficultyVariant = {
    Beginner: "secondary" as const,
    Intermediate: "default" as const,
    Advanced: "destructive" as const,
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className={`p-6 ${colorClasses[course.color]}`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
            <BookOpen className="h-6 w-6" />
          </div>
          <Badge variant={difficultyVariant[course.difficulty]} className="bg-white/90 text-foreground border-0">
            {course.difficulty}
          </Badge>
        </div>
        <h3 className="text-2xl font-bold mb-1">{course.title}</h3>
        <p className="text-sm opacity-90">{course.category}</p>
      </div>
      
      <div className="p-6 bg-card">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>{course.lessons} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
        </div>
        
        <Button 
          className={`w-full ${colorClasses[course.color]} hover:opacity-90`}
          onClick={() => navigate(`/course/${course.id}`)}
        >
          Start Learning
        </Button>
      </div>
    </Card>
  );
};
