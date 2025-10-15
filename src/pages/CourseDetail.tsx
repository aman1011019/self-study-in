import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { ModuleCard } from "@/components/ModuleCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Clock, Award } from "lucide-react";
import { courses } from "@/data/courses";
import { courseModules } from "@/data/modules";

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const course = courses.find((c) => c.id === courseId);
  const modules = courseModules[courseId || ""] || [];

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-8">
          <p>Course not found</p>
        </div>
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className={`${colorClasses[course.color]} py-12`}>
        <div className="container">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 text-white hover:bg-white/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Button>
          
          <div className="flex items-start gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <BookOpen className="h-10 w-10" />
            </div>
            
            <div className="flex-1">
              <Badge className="mb-3 bg-white/90 text-foreground">
                {course.difficulty}
              </Badge>
              <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
              <p className="text-lg opacity-90 mb-4">{course.category}</p>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  <span>Certificate included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <main className="container py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Course Modules</h2>
          <p className="text-muted-foreground">
            {modules.length} modules • Progress through each module at your own pace
          </p>
        </div>
        
        <div className="grid gap-4">
          {modules.map((module, index) => (
            <ModuleCard key={module.id} module={module} index={index} />
          ))}
        </div>
        
        {modules.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No modules available yet. Check back soon!</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default CourseDetail;
