import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, PlayCircle } from "lucide-react";
import { courses } from "@/data/courses";
import { courseModules } from "@/data/modules";

const VideoPlayer = () => {
  const { courseId, moduleId } = useParams();
  const navigate = useNavigate();
  
  const course = courses.find((c) => c.id === courseId);
  const modules = courseModules[courseId || ""] || [];
  const currentModule = modules.find((m) => m.id === moduleId);

  if (!course || !currentModule) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-8">
          <p>Module not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(`/course/${courseId}`)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Course
        </Button>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <PlayCircle className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">
                  Video player will be integrated here
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Upload your videos to display them
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{currentModule.title}</h1>
                <p className="text-muted-foreground">{currentModule.description}</p>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <Badge variant="secondary">
                  {currentModule.videos} videos
                </Badge>
                <span className="text-muted-foreground">{currentModule.duration}</span>
              </div>
            </div>
          </div>

          {/* Module List Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg border border-border p-4">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <h2 className="font-semibold">Course Modules</h2>
              </div>
              
              <div className="space-y-2">
                {modules.map((module, index) => (
                  <button
                    key={module.id}
                    onClick={() => navigate(`/course/${courseId}/module/${module.id}`)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      module.id === moduleId
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                        module.id === moduleId
                          ? "bg-primary-foreground text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm line-clamp-2">{module.title}</p>
                        <p className="text-xs opacity-75 mt-1">{module.videos} videos • {module.duration}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoPlayer;
