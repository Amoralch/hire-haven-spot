import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/ui/navigation";
import { ArrowRight, Users, Building2, MapPin, Star, CheckCircle, Briefcase, Target, Shield, GraduationCap, BookOpen, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Landing = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const navigate = useNavigate();

  const subjects = [
    "Математика", "Физика", "Химия", "Биология", "География", "История", 
    "Обществознание", "Русский язык", "Литература", "Английский язык", 
    "Немецкий язык", "Французский язык", "Информатика", "Экономика", 
    "Философия", "Психология", "Подготовка к ЕГЭ", "Подготовка к ОГЭ"
  ];

  const handleFindTutor = () => {
    if (selectedSubject) {
      navigate(`/tutors?subject=${encodeURIComponent(selectedSubject)}`);
    } else {
      navigate('/tutors');
    }
  };

  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Star className="h-4 w-4 mr-2 text-primary" />
            #1 платформа поиска репетиторов
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Найди идеального <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              репетитора
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Более 15,000 проверенных репетиторов по всем предметам. 
            Найди идеального преподавателя за считанные минуты.
          </p>

          {/* Subject Selection */}
          <div className="max-w-lg mx-auto mb-8">
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Выберите предмет</h3>
                <div className="flex gap-4">
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Выберите предмет" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button onClick={handleFindTutor} className="bg-gradient-brand hover:opacity-90 transition-opacity shadow-brand text-white">
                    <Search className="h-4 w-4 mr-2" />
                    Найти
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="bg-gradient-brand hover:opacity-90 transition-opacity shadow-brand text-white">
              <Link to="/tutors" className="flex items-center">
                Все репетиторы
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 border-accent text-accent hover:bg-accent hover:text-white">
              <Link to="/register">
                Стать репетитором
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15,000+</div>
              <div className="text-sm text-muted-foreground">Репетиторов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Предметов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100,000+</div>
              <div className="text-sm text-muted-foreground">Учеников</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Довольных учеников</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают именно нас?</h2>
            <p className="text-xl text-muted-foreground">
              Мы делаем поиск репетитора простым и эффективным
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-card hover:shadow-accent transition-all duration-300 bg-gradient-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-accent">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Опытные преподаватели</h3>
                <p className="text-muted-foreground">
                  Все репетиторы проходят проверку квалификации и имеют подтвержденное образование
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-card hover:shadow-accent transition-all duration-300 bg-gradient-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6 shadow-brand">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Безопасность</h3>
                <p className="text-muted-foreground">
                  Все репетиторы проходят проверку. Ваши данные надежно защищены
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-card hover:shadow-accent transition-all duration-300 bg-gradient-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-warning text-warning-foreground rounded-full flex items-center justify-center mx-auto mb-6 shadow-accent">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Индивидуальный подход</h3>
                <p className="text-muted-foreground">
                  Персональные программы обучения и методики для каждого ученика
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How it works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Как это работает</h2>
            <p className="text-xl text-muted-foreground">
              Три простых шага до идеального обучения
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Создайте профиль</h3>
              <p className="text-muted-foreground">
                Расскажите о своих целях обучения и предпочтениях
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Найдите репетитора</h3>
              <p className="text-muted-foreground">
                Выберите подходящего преподавателя по предмету и цене
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Начните обучение</h3>
              <p className="text-muted-foreground">
                Свяжитесь с репетитором и начните индивидуальные занятия
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы начать обучение?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам учеников, которые уже улучшили свои знания с нашими репетиторами
          </p>
          <Button size="lg" variant="secondary" asChild className="bg-warning text-warning-foreground hover:bg-warning/90 font-semibold border-0 shadow-lg">
            <Link to="/register" className="flex items-center">
              Начать сейчас
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 bg-secondary/30">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Репетиторы Онлайн</span>
          </div>
          <p className="text-muted-foreground">© 2024 Репетиторы Онлайн. Все права защищены.</p>
        </div>
      </footer>
    </div>;
};
export default Landing;