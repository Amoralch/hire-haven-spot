import { Button } from "@/components/ui/button";
import { LogIn, UserPlus, Home, Search, Building2, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
const Navigation = () => {
  const location = useLocation();
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold bg-gradient-brand bg-clip-text text-transparent">Репетиторы Онлайн</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}>
            <Home className="h-4 w-4" />
            <span>Главная</span>
          </Link>
          <Link to="/tutors" className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/tutors' ? 'text-primary' : 'text-muted-foreground'}`}>
            <Search className="h-4 w-4" />
            <span>Репетиторы</span>
          </Link>
          <Link to="/profile" className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/profile' ? 'text-primary' : 'text-muted-foreground'}`}>
            <User className="h-4 w-4" />
            <span>Профиль</span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login" className="flex items-center space-x-2">
              <LogIn className="h-4 w-4" />
              <span>Войти</span>
            </Link>
          </Button>
          <Button size="sm" asChild className="bg-gradient-brand hover:opacity-90 transition-opacity">
            <Link to="/register" className="flex items-center space-x-2">
              <UserPlus className="h-4 w-4" />
              <span>Регистрация</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>;
};
export default Navigation;