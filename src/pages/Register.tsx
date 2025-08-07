import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/ui/navigation";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Building2, User, Briefcase } from "lucide-react";
import { useState } from "react";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("");
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-md">
          <Card className="border-0 shadow-card bg-gradient-card">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Building2 className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold bg-gradient-brand bg-clip-text text-transparent">Бизнес сфера</span>
              </div>
              <CardTitle className="text-2xl">Создать аккаунт</CardTitle>
              <CardDescription>Присоединяйтесь к тысячам специалистов на Бизнес сфере</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="userType">Тип аккаунта</Label>
                <Select value={userType} onValueChange={setUserType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип аккаунта" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="candidate">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>Соискатель</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="employer">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="h-4 w-4" />
                        <span>Работодатель</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Имя</Label>
                  <Input id="firstName" placeholder="Ваше имя" className="transition-all duration-300 focus:shadow-card" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Фамилия</Label>
                  <Input id="lastName" placeholder="Ваша фамилия" className="transition-all duration-300 focus:shadow-card" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="ваш@email.com" className="transition-all duration-300 focus:shadow-card" />
              </div>
              
              {userType === "employer" && <div className="space-y-2">
                  <Label htmlFor="company">Название компании</Label>
                  <Input id="company" placeholder="ООО Ваша компания" className="transition-all duration-300 focus:shadow-card" />
                </div>}
              
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" placeholder="+7 (999) 999-99-99" className="transition-all duration-300 focus:shadow-card" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <div className="relative">
                  <Input id="password" type={showPassword ? "text" : "password"} placeholder="Придумайте пароль" className="pr-10 transition-all duration-300 focus:shadow-card" />
                  <Button type="button" variant="ghost" size="sm" className="absolute right-0 top-0 h-full px-3" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff className="h-4 w-4 text-muted-foreground" /> : <Eye className="h-4 w-4 text-muted-foreground" />}
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                <Input id="confirmPassword" type="password" placeholder="Повторите пароль" className="transition-all duration-300 focus:shadow-card" />
              </div>
              
              <div className="flex items-start space-x-2">
                <input type="checkbox" id="terms" className="rounded border-border mt-1" />
                <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                  Я согласен с{" "}
                  <Link to="#" className="text-primary hover:underline">
                    Условиями использования
                  </Link>{" "}
                  и{" "}
                  <Link to="#" className="text-primary hover:underline">
                    Политикой конфиденциальности
                  </Link>
                </label>
              </div>
              
              <Button className="w-full bg-gradient-brand hover:opacity-90 transition-opacity shadow-brand">
                Создать аккаунт
              </Button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    или
                  </span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Продолжить с Google
              </Button>
              
              <div className="text-center text-sm text-muted-foreground">
                Уже есть аккаунт?{" "}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Войти
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default Register;