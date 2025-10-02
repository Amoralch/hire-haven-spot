import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/ui/navigation";
import { User, BookOpen, Mail, Phone, MapPin, FileText, Award, GraduationCap } from "lucide-react";

const Profile = () => {
  const [userType, setUserType] = useState<"student" | "tutor">("student");
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Профиль сохранен",
      description: "Ваши данные успешно обновлены",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 sm:pt-24 pb-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Мой профиль</h1>
            <p className="text-sm sm:text-base text-muted-foreground">Управляйте своим аккаунтом и настройками</p>
          </div>

          <Card className="border-0 shadow-card bg-gradient-card">
            <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
              <Tabs value={userType} onValueChange={(value) => setUserType(value as "student" | "tutor")}>
                <TabsList className="grid w-full grid-cols-2 h-auto">
                  <TabsTrigger value="student" className="flex items-center justify-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm py-2 sm:py-2.5">
                    <User className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span className="hidden xs:inline">Профиль ученика</span>
                    <span className="xs:hidden">Ученик</span>
                  </TabsTrigger>
                  <TabsTrigger value="tutor" className="flex items-center justify-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm py-2 sm:py-2.5">
                    <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span className="hidden xs:inline">Профиль репетитора</span>
                    <span className="xs:hidden">Репетитор</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
              <Tabs value={userType}>
                <TabsContent value="student" className="space-y-4 sm:space-y-6 mt-0">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="firstName" className="text-sm">Имя</Label>
                      <Input id="firstName" defaultValue="Иван" className="h-10" />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="lastName" className="text-sm">Фамилия</Label>
                      <Input id="lastName" defaultValue="Иванов" className="h-10" />
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="email" className="text-sm">Email</Label>
                    <Input id="email" type="email" defaultValue="ivan@example.com" className="h-10" />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="phone" className="text-sm">Телефон</Label>
                    <Input id="phone" type="tel" defaultValue="+7 (999) 999-99-99" className="h-10" />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="city" className="text-sm">Город</Label>
                    <Input id="city" defaultValue="Москва" className="h-10" />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="interests" className="text-sm">Предметы для изучения</Label>
                    <Textarea id="interests" placeholder="Математика, Физика, Химия..." defaultValue="Математика, Физика" className="min-h-20 sm:min-h-24" />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="goals" className="text-sm">Цели обучения</Label>
                    <Textarea id="goals" placeholder="Расскажите о своих целях..." defaultValue="Подготовка к ЕГЭ по математике и физике" className="min-h-20 sm:min-h-24" />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="bio" className="text-sm">О себе</Label>
                    <Textarea id="bio" placeholder="Расскажите немного о себе..." defaultValue="Студент 11 класса, планирую поступать в технический вуз" className="min-h-20 sm:min-h-24" />
                  </div>
                </TabsContent>

                <TabsContent value="tutor" className="space-y-4 sm:space-y-6 mt-0">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="tutorFirstName" className="text-sm">Имя</Label>
                      <Input id="tutorFirstName" defaultValue="Анна" className="h-10" />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="tutorLastName" className="text-sm">Фамилия</Label>
                      <Input id="tutorLastName" defaultValue="Петрова" className="h-10" />
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="tutorEmail" className="text-sm">Email</Label>
                    <Input id="tutorEmail" type="email" defaultValue="anna@example.com" className="h-10" />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="tutorPhone" className="text-sm">Телефон</Label>
                    <Input id="tutorPhone" type="tel" defaultValue="+7 (999) 123-45-67" className="h-10" />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="subjects" className="text-sm">Преподаваемые предметы</Label>
                    <Input id="subjects" defaultValue="Математика, Алгебра, Геометрия" className="h-10" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="experience" className="text-sm">Опыт (лет)</Label>
                      <Input id="experience" type="number" defaultValue="8" className="h-10" />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="price" className="text-sm">Цена (₽/час)</Label>
                      <Input id="price" type="number" defaultValue="1500" className="h-10" />
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="education" className="text-sm">Образование</Label>
                    <Input id="education" defaultValue="МГУ, механико-математический факультет" className="h-10" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="format" className="text-sm">Формат занятий</Label>
                      <Select defaultValue="both">
                        <SelectTrigger className="h-10">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="online">Онлайн</SelectItem>
                          <SelectItem value="offline">Очно</SelectItem>
                          <SelectItem value="both">Онлайн и очно</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="tutorCity" className="text-sm">Город</Label>
                      <Input id="tutorCity" defaultValue="Москва" className="h-10" />
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="tutorBio" className="text-sm">О себе и методике</Label>
                    <Textarea id="tutorBio" placeholder="Расскажите о своем опыте..." defaultValue="Преподаю математику с 2015 года. Специализируюсь на подготовке к ЕГЭ и ОГЭ. Индивидуальный подход к каждому ученику." className="min-h-24 sm:min-h-32" />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="achievements" className="text-sm">Достижения</Label>
                    <Textarea id="achievements" placeholder="Ваши достижения..." defaultValue="Средний балл учеников на ЕГЭ: 85+. 95% учеников поступают в желаемые вузы." className="min-h-20 sm:min-h-24" />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-end mt-6 sm:mt-8">
                <Button onClick={handleSave} className="bg-gradient-brand hover:opacity-90 transition-opacity shadow-brand px-6 sm:px-8 h-10 sm:h-11 w-full sm:w-auto">
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