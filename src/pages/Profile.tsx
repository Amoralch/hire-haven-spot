import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { User, Building2, Mail, Phone, MapPin, FileText, Award, Briefcase } from "lucide-react";

const Profile = () => {
  const [userType, setUserType] = useState<"jobseeker" | "employer">("jobseeker");
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Профиль сохранен",
      description: "Ваши данные успешно обновлены",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <nav className="bg-background/90 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              JobPortal
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <Button variant="ghost" onClick={() => window.location.href = "/"}>
              Главная
            </Button>
            <Button variant="ghost" onClick={() => window.location.href = "/jobs"}>
              Вакансии
            </Button>
            <Button variant="outline" onClick={() => window.location.href = "/login"}>
              Выход
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border-primary/10">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary">
                Мой Профиль
              </CardTitle>
              <CardDescription>
                Управляйте своей информацией и настройками
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={userType} onValueChange={(value) => setUserType(value as "jobseeker" | "employer")}>
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="jobseeker" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Соискатель
                  </TabsTrigger>
                  <TabsTrigger value="employer" className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    Работодатель
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="jobseeker" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Имя</Label>
                      <Input id="firstName" placeholder="Введите имя" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Фамилия</Label>
                      <Input id="lastName" placeholder="Введите фамилию" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="email" type="email" placeholder="email@example.com" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="phone" placeholder="+7 (999) 123-45-67" className="pl-10" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Город</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="location" placeholder="Москва" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Желаемая должность</Label>
                    <Input id="position" placeholder="Frontend разработчик" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salary">Желаемая зарплата</Label>
                    <Input id="salary" placeholder="от 100 000 руб." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Опыт работы</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите опыт" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no-experience">Без опыта</SelectItem>
                        <SelectItem value="1-3">1-3 года</SelectItem>
                        <SelectItem value="3-6">3-6 лет</SelectItem>
                        <SelectItem value="6+">Более 6 лет</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Ключевые навыки</Label>
                    <div className="relative">
                      <Award className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="skills" placeholder="React, TypeScript, Node.js" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="about">О себе</Label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Textarea 
                        id="about" 
                        placeholder="Расскажите о себе, своем опыте и достижениях..." 
                        rows={6}
                        className="pl-10 pt-10"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="employer" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Название компании</Label>
                      <Input id="companyName" placeholder="ООО Рога и копыта" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companySize">Размер компании</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите размер" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="startup">Стартап (1-10)</SelectItem>
                          <SelectItem value="small">Малая (11-50)</SelectItem>
                          <SelectItem value="medium">Средняя (51-200)</SelectItem>
                          <SelectItem value="large">Крупная (200+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Отрасль</Label>
                      <Input id="industry" placeholder="IT, Финансы, Производство..." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Сайт компании</Label>
                      <Input id="website" placeholder="https://company.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyEmail">Email компании</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="companyEmail" type="email" placeholder="hr@company.com" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyPhone">Телефон компании</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="companyPhone" placeholder="+7 (495) 123-45-67" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyLocation">Адрес компании</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="companyLocation" placeholder="г. Москва, ул. Тверская, 1" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Контактное лицо</Label>
                    <Input id="contactPerson" placeholder="Иван Иванов" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Должность</Label>
                    <Input id="position" placeholder="HR-менеджер" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyDescription">О компании</Label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Textarea 
                        id="companyDescription" 
                        placeholder="Расскажите о вашей компании, миссии, ценностях и преимуществах работы у вас..." 
                        rows={6}
                        className="pl-10 pt-10"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-end mt-8">
                <Button onClick={handleSave} className="px-8">
                  Сохранить изменения
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;