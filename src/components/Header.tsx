import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "./ThemeToggle";
import { useSearch } from "@/contexts/SearchContext";
import logo from "@/assets/logo.jpg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => navigate("/")}
        >
          <img 
            src={logo} 
            alt="Self Study In Logo" 
            className="h-10 w-10 rounded-lg object-cover"
          />
          <div>
            <h1 className="text-lg font-bold">Self Study In</h1>
            <p className="text-xs text-muted-foreground">Learn at your own pace</p>
          </div>
        </div>
        
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search courses..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
};
