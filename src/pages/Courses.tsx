import { useState } from "react";
import { Header } from "@/components/Header";
import { CourseCard } from "@/components/CourseCard";
import { CourseFilters } from "@/components/CourseFilters";
import { courses } from "@/data/courses";
import { useSearch } from "@/contexts/SearchContext";

const Courses = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const { searchQuery } = useSearch();

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = categoryFilter === "all" || course.category === categoryFilter;
    const matchesDifficulty = difficultyFilter === "all" || course.difficulty === difficultyFilter;
    const matchesSearch = searchQuery === "" || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Explore Our Courses</h1>
          <p className="text-muted-foreground">
            Master programming, algorithms, and computer science fundamentals
          </p>
        </div>
        
        <CourseFilters
          onCategoryChange={setCategoryFilter}
          onDifficultyChange={setDifficultyFilter}
        />
        
        <div className="mb-4 text-sm text-muted-foreground">
          Showing {filteredCourses.length} courses
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
      
      <footer className="border-t border-border mt-16 py-8">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            Self Study In
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Empowering learners worldwide with quality education
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Courses;
