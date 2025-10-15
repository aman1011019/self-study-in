import { Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CourseFiltersProps {
  onCategoryChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
}

export const CourseFilters = ({ onCategoryChange, onDifficultyChange }: CourseFiltersProps) => {
  return (
    <div className="rounded-lg border border-border bg-card p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5" />
        <h3 className="font-semibold">Filter Courses</h3>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium mb-2 block">Category</label>
          <Select onValueChange={onCategoryChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Computer Science">Computer Science</SelectItem>
              <SelectItem value="Development">Development</SelectItem>
              <SelectItem value="Programming">Programming</SelectItem>
              <SelectItem value="AI & ML">AI & ML</SelectItem>
              <SelectItem value="Architecture">Architecture</SelectItem>
              <SelectItem value="Cloud">Cloud</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Difficulty</label>
          <Select onValueChange={onDifficultyChange}>
            <SelectTrigger>
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
