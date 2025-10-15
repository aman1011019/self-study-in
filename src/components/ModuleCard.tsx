import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Clock, CheckCircle } from "lucide-react";
import { Module } from "@/data/modules";

interface ModuleCardProps {
  module: Module;
  index: number;
}

export const ModuleCard = ({ module, index }: ModuleCardProps) => {
  return (
    <Card className="group p-6 transition-all duration-300 hover:shadow-lg hover:border-primary cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
          {index + 1}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {module.title}
            </h3>
            {module.completed && (
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
            )}
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            {module.description}
          </p>
          
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="gap-1">
              <PlayCircle className="h-3 w-3" />
              {module.videos} videos
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Clock className="h-3 w-3" />
              {module.duration}
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
};
