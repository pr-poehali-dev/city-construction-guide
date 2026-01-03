import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('classification');

  const sections = [
    {
      id: 'classification',
      title: 'Классификация территорий',
      icon: 'LayoutGrid',
      description: 'Типы территориальных зон и их назначение',
      content: [
        { title: 'Жилые зоны', desc: 'Территории для размещения жилых домов различной этажности', emoji: '🏘️', color: 'bg-blue-100' },
        { title: 'Общественно-деловые', desc: 'Зоны административных, торговых и культурных объектов', emoji: '🏢', color: 'bg-purple-100' },
        { title: 'Производственные', desc: 'Территории промышленных предприятий и складов', emoji: '🏭', color: 'bg-orange-100' },
        { title: 'Рекреационные', desc: 'Парки, скверы, зоны отдыха и спорта', emoji: '🌳', color: 'bg-green-100' },
      ]
    },
    {
      id: 'planning',
      title: 'Планирование',
      icon: 'Map',
      description: 'Основы территориального планирования',
      content: [
        { title: 'Генеральный план', desc: 'Стратегический документ развития территории на 20-25 лет', emoji: '📋', color: 'bg-indigo-100' },
        { title: 'Правила землепользования', desc: 'ПЗЗ: регламенты использования земельных участков', emoji: '📜', color: 'bg-cyan-100' },
        { title: 'Проект планировки', desc: 'Детальная проработка территории с красными линиями', emoji: '🗺️', color: 'bg-teal-100' },
        { title: 'Градостроительный план', desc: 'ГПЗУ: основа для проектирования конкретного участка', emoji: '📐', color: 'bg-lime-100' },
      ]
    },
    {
      id: 'infrastructure',
      title: 'Инфраструктура',
      icon: 'Network',
      description: 'Системы жизнеобеспечения города',
      content: [
        { title: 'Транспортная', desc: 'Дороги, метро, трамвайные линии, велодорожки', emoji: '🚇', color: 'bg-red-100' },
        { title: 'Инженерная', desc: 'Водоснабжение, канализация, электро- и теплосети', emoji: '⚡', color: 'bg-yellow-100' },
        { title: 'Социальная', desc: 'Школы, поликлиники, детские сады по нормативам', emoji: '🏥', color: 'bg-pink-100' },
        { title: 'Цифровая', desc: 'Связь, интернет, умные системы управления городом', emoji: '📡', color: 'bg-violet-100' },
      ]
    },
    {
      id: 'zones',
      title: 'Типы застройки',
      icon: 'Building2',
      description: 'Жилые, коммерческие и общественные зоны',
      content: [
        { title: 'Многоэтажная жилая', desc: 'Высотная застройка 9+ этажей с развитой инфраструктурой', emoji: '🏙️', color: 'bg-blue-100' },
        { title: 'Малоэтажная жилая', desc: 'Индивидуальные дома и таунхаусы до 3 этажей', emoji: '🏡', color: 'bg-green-100' },
        { title: 'Торговые центры', desc: 'Крупные ТРЦ с парковками и транспортной доступностью', emoji: '🛍️', color: 'bg-orange-100' },
        { title: 'Образовательные', desc: 'Школы, вузы, детские сады с озеленёнными территориями', emoji: '🎓', color: 'bg-purple-100' },
      ]
    },
    {
      id: 'green',
      title: 'Озеленение',
      icon: 'Trees',
      description: 'Зелёные зоны и экология города',
      content: [
        { title: 'Городские парки', desc: 'Крупные парковые зоны от 10 га с развитой инфраструктурой', emoji: '🌲', color: 'bg-emerald-100' },
        { title: 'Скверы и бульвары', desc: 'Малые зелёные зоны до 2 га в жилых районах', emoji: '🌿', color: 'bg-lime-100' },
        { title: 'Защитные насаждения', desc: 'Санитарно-защитные зоны вдоль дорог и предприятий', emoji: '🌳', color: 'bg-teal-100' },
        { title: 'Дворовые территории', desc: 'Озеленение дворов: 40% площади по нормам', emoji: '🪴', color: 'bg-green-100' },
      ]
    },
    {
      id: 'examples',
      title: 'Примеры',
      icon: 'Star',
      description: 'Успешные проекты градостроительства',
      content: [
        { 
          title: 'Зарядье, Москва', 
          desc: 'Парк на месте гостиницы Россия: 13 га инноваций с амфитеатром, подземным музеем и "парящим" мостом', 
          emoji: '🎪', 
          color: 'bg-blue-100',
          image: 'https://cdn.poehali.dev/projects/9ee78f5d-8a1c-4080-b917-68f9a9c1f8cd/files/d20ed598-3df0-4553-8a1b-ab3307c3262e.jpg',
          year: '2017',
          stats: '13 га • 25 000 посетителей/день'
        },
        { 
          title: 'Новая Голландия, СПб', 
          desc: 'Реконструкция исторического острова XVIII века в современный культурный кластер с парком и коворкингами', 
          emoji: '🏛️', 
          color: 'bg-indigo-100',
          image: 'https://cdn.poehali.dev/projects/9ee78f5d-8a1c-4080-b917-68f9a9c1f8cd/files/3d8c8b32-6a08-4525-9693-6c54d3b93ddf.jpg',
          year: '2016',
          stats: '7.6 га • 2 млн посетителей/год'
        },
        { 
          title: 'Академический, Екб', 
          desc: 'Новый микрорайон с продуманной инфраструктурой: школы, детсады, поликлиники в шаговой доступности', 
          emoji: '🏗️', 
          color: 'bg-purple-100',
          image: 'https://cdn.poehali.dev/projects/9ee78f5d-8a1c-4080-b917-68f9a9c1f8cd/files/cff5611a-0716-4413-b696-f6dd69fb1185.jpg',
          year: '2015',
          stats: '600 га • 100 000 жителей'
        },
        { 
          title: 'Иннополис, Казань', 
          desc: 'IT-город с цифровой инфраструктурой, беспилотным транспортом и умными системами управления', 
          emoji: '💡', 
          color: 'bg-cyan-100',
          image: 'https://cdn.poehali.dev/projects/9ee78f5d-8a1c-4080-b917-68f9a9c1f8cd/files/46a4e8dc-a50f-4a85-9d89-8efb1c5c91aa.jpg',
          year: '2012',
          stats: '2.2 км² • 5 000 жителей'
        },
      ]
    }
  ];

  const features = [
    {
      title: 'Климатические особенности',
      desc: 'От -50°C на Севере до +40°C на Юге: 8 климатических зон',
      icon: 'CloudSnow',
      color: 'text-blue-500'
    },
    {
      title: 'Региональные различия',
      desc: '85 субъектов: от мегаполисов до малых городов',
      icon: 'MapPin',
      color: 'text-purple-500'
    },
    {
      title: 'Нормативная база',
      desc: 'Градостроительный кодекс РФ, СП, СанПиН, региональные нормы',
      icon: 'FileText',
      color: 'text-orange-500'
    },
    {
      title: 'Транспортная система',
      desc: 'Интеграция авто, ЖД, метро, общественного транспорта',
      icon: 'Train',
      color: 'text-green-500'
    },
    {
      title: 'Экологические требования',
      desc: 'Зелёные зоны, очистка выбросов, устойчивое развитие',
      icon: 'Leaf',
      color: 'text-emerald-500'
    }
  ];

  const currentSection = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="relative mb-16 overflow-hidden rounded-3xl shadow-2xl animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 z-10"></div>
          <img 
            src="https://cdn.poehali.dev/projects/9ee78f5d-8a1c-4080-b917-68f9a9c1f8cd/files/5cc4eb06-809e-4a8c-bb56-096c5d066120.jpg" 
            alt="Градостроительство" 
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white px-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Icon name="Building2" size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              Градостроительство России
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-center text-white/90">
              Комплексная инструкция по территориальному планированию с учётом климатических, региональных и нормативных особенностей РФ
            </p>
          </div>
        </div>

        <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ключевые особенности
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-scale hover:shadow-xl transition-all duration-300 border-2 bg-card/50 backdrop-blur-sm animate-fade-in group"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon name={feature.icon} size={24} className={feature.color} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-2xl border-2">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b">
            <CardTitle className="text-2xl md:text-3xl">Основные разделы</CardTitle>
            <CardDescription>Выберите раздел для изучения детальной информации</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 h-auto bg-muted/50 p-2">
                {sections.map((section) => (
                  <TabsTrigger 
                    key={section.id} 
                    value={section.id}
                    className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Icon name={section.icon} size={20} />
                    <span className="text-xs font-medium text-center leading-tight">{section.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {sections.map((section) => (
                <TabsContent key={section.id} value={section.id} className="mt-8">
                  <div className="mb-8 text-center">
                    <Badge variant="outline" className="mb-4 text-sm px-4 py-2">
                      <Icon name={section.icon} size={16} className="mr-2" />
                      {section.title}
                    </Badge>
                    <p className="text-muted-foreground text-lg">{section.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.id === 'examples' && section.content.map((item, index) => (
                      <Card 
                        key={`example-${index}`}
                        className="hover-scale hover:shadow-2xl transition-all duration-300 border-2 overflow-hidden group animate-scale-in md:col-span-2"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="grid md:grid-cols-5 gap-0">
                          <div className="relative md:col-span-2 h-48 md:h-auto overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4 flex gap-2">
                              <Badge className="bg-white/90 text-foreground backdrop-blur-sm">
                                <Icon name="Calendar" size={14} className="mr-1" />
                                {item.year}
                              </Badge>
                            </div>
                          </div>
                          <div className="md:col-span-3 p-6 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center gap-3 mb-3">
                                <span className="text-4xl">{item.emoji}</span>
                                <div>
                                  <h3 className="text-2xl font-bold">{item.title}</h3>
                                  <p className="text-sm text-muted-foreground">{item.stats}</p>
                                </div>
                              </div>
                              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Badge variant="outline" className="text-xs">
                                <Icon name="Award" size={12} className="mr-1" />
                                Реализован
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                <Icon name="Users" size={12} className="mr-1" />
                                Публичное пространство
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                    {section.id !== 'examples' && (
                      <>
                    {section.id === 'green' && (
                      <Card className="md:col-span-2 overflow-hidden border-2 animate-scale-in">
                        <div className="relative h-48 md:h-64">
                          <img 
                            src="https://cdn.poehali.dev/projects/9ee78f5d-8a1c-4080-b917-68f9a9c1f8cd/files/f29ef4ca-d778-4bf9-808f-d051dbb319a6.jpg" 
                            alt="Зелёные зоны города" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                            <div className="p-6 text-white">
                              <h3 className="text-2xl font-bold mb-2">Зелёные зоны города</h3>
                              <p className="text-white/90">Парки, скверы и защитные насаждения для комфортной городской среды</p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    )}
                    {section.id === 'infrastructure' && (
                      <Card className="md:col-span-2 overflow-hidden border-2 animate-scale-in">
                        <div className="relative h-48 md:h-64">
                          <img 
                            src="https://cdn.poehali.dev/projects/9ee78f5d-8a1c-4080-b917-68f9a9c1f8cd/files/c7e9b9db-276f-4bda-8505-fdfde7de22b8.jpg" 
                            alt="Инфраструктура города" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                            <div className="p-6 text-white">
                              <h3 className="text-2xl font-bold mb-2">Умная инфраструктура</h3>
                              <p className="text-white/90">Современные системы жизнеобеспечения и цифровые технологии</p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    )}
                    {section.content.map((item, index) => (
                      <Card 
                        key={index}
                        className="hover-scale hover:shadow-xl transition-all duration-300 border-2 overflow-hidden group animate-scale-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <CardHeader className={`${item.color} transition-all duration-300 group-hover:scale-105`}>
                          <div className="flex items-center gap-3">
                            <span className="text-4xl">{item.emoji}</span>
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                    </>
                    )}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Card className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 border-2">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Icon name="Info" size={24} className="text-primary" />
                <div className="text-left">
                  <p className="font-semibold mb-1">Образовательный портал</p>
                  <p className="text-sm text-muted-foreground">
                    Материалы актуализированы в соответствии с действующим законодательством РФ
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;