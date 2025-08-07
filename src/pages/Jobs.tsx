import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import { Search, MapPin, Briefcase, Clock, Building2, Heart, Filter, ChevronRight } from "lucide-react";
import { useState } from "react";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [employment, setEmployment] = useState("");

  const mockJobs = [
    {
      id: 1,
      title: "Frontend разработчик (React)",
      company: "Яндекс",
      location: "Москва",
      salary: "200 000 - 350 000 ₽",
      employment: "Полная занятость",
      experience: "3-6 лет",
      description: "Разработка пользовательских интерфейсов с использованием React, TypeScript, Redux. Участие в проектировании архитектуры фронтенда.",
      skills: ["React", "TypeScript", "Redux", "CSS3", "HTML5"],
      posted: "2 дня назад",
      logo: "🟡"
    },
    {
      id: 2,
      title: "Python Backend разработчик",
      company: "Сбербанк",
      location: "Москва / Удаленно",
      salary: "180 000 - 300 000 ₽",
      employment: "Полная занятость",
      experience: "3-6 лет",
      description: "Разработка высоконагруженных микросервисов на Python. Работа с Django, PostgreSQL, Redis, Docker.",
      skills: ["Python", "Django", "PostgreSQL", "Docker", "Redis"],
      posted: "1 день назад",
      logo: "🟢"
    },
    {
      id: 3,
      title: "UX/UI дизайнер",
      company: "Тинькофф",
      location: "Москва",
      salary: "150 000 - 250 000 ₽",
      employment: "Полная занятость",
      experience: "2-5 лет",
      description: "Создание пользовательских интерфейсов для мобильных и веб-приложений. Проведение UX-исследований.",
      skills: ["Figma", "Sketch", "Prototyping", "User Research", "Design Systems"],
      posted: "3 дня назад",
      logo: "🟡"
    },
    {
      id: 4,
      title: "DevOps инженер",
      company: "Mail.ru Group",
      location: "Москва",
      salary: "220 000 - 400 000 ₽",
      employment: "Полная занятость",
      experience: "4-6 лет",
      description: "Настройка и поддержка CI/CD пайплайнов, работа с Kubernetes, мониторинг и логирование систем.",
      skills: ["Kubernetes", "Docker", "Jenkins", "AWS", "Terraform"],
      posted: "5 дней назад",
      logo: "🔵"
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "Ozon",
      location: "Москва / Удаленно",
      salary: "200 000 - 350 000 ₽",
      employment: "Полная занятость",
      experience: "3-5 лет",
      description: "Анализ больших данных, построение ML-моделей для рекомендательных систем и прогнозирования.",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "Pandas"],
      posted: "1 неделю назад",
      logo: "🟣"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-8 px-4">
        <div className="container mx-auto">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Поиск вакансий</h1>
            <p className="text-muted-foreground">Найдено {mockJobs.length} вакансий</p>
          </div>
          
          {/* Search Form */}
          <Card className="mb-8 border-0 shadow-card bg-gradient-card">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Должность, ключевые слова"
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
                    <SelectValue placeholder="Опыт работы" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-experience">Без опыта</SelectItem>
                    <SelectItem value="1-3">1-3 года</SelectItem>
                    <SelectItem value="3-6">3-6 лет</SelectItem>
                    <SelectItem value="6+">Более 6 лет</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button className="bg-gradient-brand hover:opacity-90 transition-opacity">
                  <Search className="h-4 w-4 mr-2" />
                  Найти
                </Button>
              </div>
              
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                <Select value={employment} onValueChange={setEmployment}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Тип занятости" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Полная занятость</SelectItem>
                    <SelectItem value="part-time">Частичная занятость</SelectItem>
                    <SelectItem value="remote">Удаленная работа</SelectItem>
                    <SelectItem value="freelance">Фриланс</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Фильтры
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Jobs List */}
          <div className="space-y-6">
            {mockJobs.map((job) => (
              <Card key={job.id} className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{job.logo}</div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                          {job.title}
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center space-x-1">
                            <Building2 className="h-4 w-4" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.posted}</span>
                          </div>
                        </div>
                        <div className="text-lg font-semibold text-primary mb-3">
                          {job.salary}
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
                    {job.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.employment}</span>
                      </div>
                      <span>•</span>
                      <span>{job.experience}</span>
                    </div>
                    
                    <Button size="sm" className="bg-gradient-brand hover:opacity-90 transition-opacity">
                      Откликнуться
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Показать больше вакансий
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;