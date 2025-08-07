import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import { ArrowRight, Users, Building2, MapPin, Star, CheckCircle, Briefcase, Target, Shield } from "lucide-react";
import { Link } from "react-router-dom";
const Landing = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Star className="h-4 w-4 mr-2 text-primary" />
            #1 платформа для поиска работы
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Найди работу <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              своей мечты
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Более 50,000 вакансий от ведущих компаний России. 
            Найди идеальную работу за считанные минуты.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="bg-gradient-brand hover:opacity-90 transition-opacity shadow-brand text-white">
              <Link to="/jobs" className="flex items-center">
                Найти вакансии
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 border-accent text-accent hover:bg-accent hover:text-white">
              <Link to="/register">
                Разместить вакансию
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-sm text-muted-foreground">Активных вакансий</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12,000+</div>
              <div className="text-sm text-muted-foreground">Компаний</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1M+</div>
              <div className="text-sm text-muted-foreground">Пользователей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25,000+</div>
              <div className="text-sm text-muted-foreground">Трудоустройств</div>
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
              Мы делаем поиск работы простым и эффективным
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-card hover:shadow-accent transition-all duration-300 bg-gradient-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-accent">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Точный поиск</h3>
                <p className="text-muted-foreground">
                  Умные фильтры и алгоритмы подбора помогут найти идеальную вакансию за минуты
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
                  Все компании проходят проверку. Ваши данные надежно защищены
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-card hover:shadow-accent transition-all duration-300 bg-gradient-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-warning text-warning-foreground rounded-full flex items-center justify-center mx-auto mb-6 shadow-accent">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Карьерный рост</h3>
                <p className="text-muted-foreground">
                  Персональные рекомендации и советы для развития карьеры
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
              Три простых шага до работы мечты
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Создайте профиль</h3>
              <p className="text-muted-foreground">
                Заполните информацию о себе, опыте работы и навыках
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Ищите вакансии</h3>
              <p className="text-muted-foreground">
                Используйте фильтры по зарплате, локации и требованиям
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Получите работу</h3>
              <p className="text-muted-foreground">
                Откликайтесь на вакансии и получайте приглашения на собеседования
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы начать поиск работы?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам специалистов, которые уже нашли работу через HireHaven
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
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Бизнес сфера</span>
          </div>
          <p className="text-muted-foreground">© 2024 Бизнес сфера. Все права защищены.</p>
        </div>
      </footer>
    </div>;
};
export default Landing;