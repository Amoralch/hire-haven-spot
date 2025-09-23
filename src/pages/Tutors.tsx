import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import { Search, MapPin, Briefcase, Clock, Building2, Heart, Filter, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const Tutors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [employment, setEmployment] = useState("");

  const mockTutors = [
    {
      id: 1,
      name: "Анна Петрова",
      subject: "Математика",
      location: "Москва",
      price: "1 500 ₽/час",
      format: "Онлайн / Очно",
      experience: "8 лет",
      description: "Преподаю математику с 2015 года. Специализируюсь на подготовке к ЕГЭ и ОГЭ. Индивидуальный подход к каждому ученику.",
      skills: ["ЕГЭ", "ОГЭ", "Алгебра", "Геометрия", "Высшая математика"],
      rating: 4.9,
      reviews: 47,
      education: "МГУ, механико-математический факультет",
      avatar: "👩‍🏫"
    },
    {
      id: 2,
      name: "Михаил Иванов",
      subject: "Физика",
      location: "Санкт-Петербург / Онлайн",
      price: "1 800 ₽/час",
      format: "Онлайн",
      experience: "12 лет",
      description: "Кандидат физико-математических наук. Помогаю студентам и школьникам понять сложные концепции физики.",
      skills: ["ЕГЭ", "Механика", "Электродинамика", "Термодинамика", "Квантовая физика"],
      rating: 5.0,
      reviews: 89,
      education: "СПбГУ, физический факультет, к.ф.-м.н.",
      avatar: "👨‍🔬"
    },
    {
      id: 3,
      name: "Елена Смирнова",
      subject: "Английский язык",
      location: "Москва",
      price: "2 000 ₽/час",
      format: "Очно / Онлайн",
      experience: "6 лет",
      description: "Сертифицированный преподаватель английского языка. IELTS 8.5, опыт работы в Великобритании.",
      skills: ["IELTS", "TOEFL", "Разговорный английский", "Бизнес-английский", "Грамматика"],
      rating: 4.8,
      reviews: 62,
      education: "МГЛУ, сертификат CELTA",
      avatar: "👩‍💼"
    },
    {
      id: 4,
      name: "Дмитрий Козлов",
      subject: "Информатика",
      location: "Новосибирск / Онлайн",
      price: "1 600 ₽/час",
      format: "Онлайн",
      experience: "5 лет",
      description: "Программист с опытом преподавания. Готовлю к ЕГЭ по информатике и обучаю основам программирования.",
      skills: ["Python", "C++", "ЕГЭ Информатика", "Алгоритмы", "ООП"],
      rating: 4.7,
      reviews: 34,
      education: "НГУ, факультет информационных технологий",
      avatar: "👨‍💻"
    },
    {
      id: 5,
      name: "Ольга Васильева",
      subject: "Химия",
      location: "Екатеринбург / Онлайн",
      price: "1 400 ₽/час",
      format: "Онлайн / Очно",
      experience: "10 лет",
      description: "Преподаватель химии высшей категории. Специализируюсь на подготовке к ЕГЭ и олимпиадам по химии.",
      skills: ["ЕГЭ", "Органическая химия", "Неорганическая химия", "Физическая химия", "Олимпиады"],
      rating: 4.9,
      reviews: 73,
      education: "УрФУ, химический факультет",
      avatar: "👩‍🔬"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-8 px-4">
        <div className="container mx-auto">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Поиск репетиторов</h1>
            <p className="text-muted-foreground">Найдено {mockTutors.length} репетиторов</p>
          </div>
          
          {/* Search Form */}
          <Card className="mb-8 border-0 shadow-card bg-gradient-card">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Предмет, имя репетитора"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Город"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={experience} onValueChange={setExperience}>
                  <SelectTrigger>
                    <SelectValue placeholder="Опыт преподавания" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-3">1-3 года</SelectItem>
                    <SelectItem value="3-6">3-6 лет</SelectItem>
                    <SelectItem value="6-10">6-10 лет</SelectItem>
                    <SelectItem value="10+">Более 10 лет</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button className="bg-gradient-brand hover:opacity-90 transition-opacity text-white shadow-brand">
                  <Search className="h-4 w-4 mr-2" />
                  Найти
                </Button>
              </div>
              
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                <Select value={employment} onValueChange={setEmployment}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Формат занятий" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online">Онлайн</SelectItem>
                    <SelectItem value="offline">Очно</SelectItem>
                    <SelectItem value="both">Онлайн и очно</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-white">
                  <Filter className="h-4 w-4 mr-2" />
                  Фильтры
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Jobs List */}
          <div className="space-y-6">
            {mockTutors.map((tutor) => (
              <Card key={tutor.id} className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{tutor.avatar}</div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                          {tutor.name}
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center space-x-1">
                            <Building2 className="h-4 w-4" />
                            <span>{tutor.subject}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{tutor.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-warning fill-warning" />
                            <span>{tutor.rating} ({tutor.reviews} отзывов)</span>
                          </div>
                        </div>
                        <div className="text-lg font-semibold text-primary mb-3">
                          {tutor.price}
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {tutor.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tutor.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-4">
                    <strong>Образование:</strong> {tutor.education}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{tutor.format}</span>
                      </div>
                      <span>•</span>
                      <span>Опыт: {tutor.experience}</span>
                    </div>
                    
                    <Button size="sm" className="bg-gradient-accent hover:opacity-90 transition-opacity text-white shadow-accent">
                      Связаться
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              Показать больше репетиторов
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutors;