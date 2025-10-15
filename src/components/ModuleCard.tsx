import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle, Clock, CheckCircle, ChevronDown, ChevronUp, FileText, Trophy } from "lucide-react";
import { Module } from "@/data/modules";

interface ModuleCardProps {
  module: Module;
  index: number;
}

export const ModuleCard = ({ module, index }: ModuleCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const { courseId } = useParams();

  const handleStart = () => {
    navigate(`/course/${courseId}/module/${module.id}`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
            {index + 1}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-semibold text-lg">
                {module.title}
              </h3>
              {module.completed && (
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
              )}
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              {module.description}
            </p>
            
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary" className="gap-1">
                <PlayCircle className="h-3 w-3" />
                {module.videos} videos
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Clock className="h-3 w-3" />
                {module.duration}
              </Badge>
            </div>

            <Button 
              variant="ghost" 
              className="w-full justify-between"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span>View Options</span>
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-border bg-muted/50 p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            <Button onClick={handleStart} className="w-full">
              <PlayCircle className="mr-2 h-4 w-4" />
              Start Learning
            </Button>
            <Button variant="outline" className="w-full">
              <FileText className="mr-2 h-4 w-4" />
              Practice Problems
            </Button>
            <Button variant="outline" className="w-full">
              <Trophy className="mr-2 h-4 w-4" />
              Take Quiz
            </Button>
            <Button variant="outline" className="w-full">
              <FileText className="mr-2 h-4 w-4" />
              Resources
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};
