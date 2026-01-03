import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('classification');

  const slogans = [
    'Пятилетку — за четыре года!',
    'Строим города для народа!',
    'Каждой семье — отдельную квартиру!',
    'Слава советским строителям!',
    'Плановое хозяйство — наша сила!',
    'Вперёд к победе коммунизма!'
  ];

  const sections = [
    {
      id: 'classification',
      title: 'Классификация территорий',
      icon: 'LayoutGrid',
      description: 'Типы территориальных зон социалистического города',
      gallery: [
        { title: 'Микрорайон ХХI съезда КПСС', image: 'https://cdn.poehali.dev/projects/9ee78f5d-8a1c-4080-b917-68f9a9c1f8cd/files/65a7e91b-4cf6-47b6-a9d3-0343d47be88d.jpg', desc: 'Типовая жилая застройка серии К-7', year: '1967', stats: '12 000 жителей' },
        { title: 'Дворец культуры ЗИЛ', image: 'https://cdn.poehali.dev/projects/9ee78f5d-8a1c-4080-b917-68f9a9c1f8cd/files/efb072bd-2aa1-41f3-a56d-afae997643ed.jpg', desc: 'Общественно-культурный центр', year: '1937', stats: '500 000 посетителей/год' },
        { title: 'Уралмаш, Свердловск', image: 'https://cdn.poehali.dev/projects/9ee78f5d-8a1c-4080-b917-68f9a9c1f8cd/files/461810e9-c788-46e3-893f-09cf5e7be035.jpg', desc: 'Производственный соцгород', year: '1933', stats: '40 000 рабочих' },
        { title: 'Парк Горького', image: 'https://cdn.poehali.dev/projects/9ee78f5d-8a1c-4080-b917-68f9a9c1f8cd/files/7aec4727-f36a-496b-ab1c-8844596e2f3f.jpg', desc: 'Центральный парк культуры и отдыха', year: '1928', stats: '120 га' },
      ],
      content: [
        { title: 'Жилые микрорайоны', desc: '5-9 этажная застройка по индустриальным сериям', emoji: '🏢', color: 'bg-primary/10', stats: '9-12 м² на человека' },
        { title: 'Общественные центры', desc: 'Дворцы культуры, кинотеатры, библиотеки', emoji: '🏛️', color: 'bg-secondary/20', stats: '1 центр на район' },
        { title: 'Промышленные зоны', desc: 'Заводы, комбинаты с соцгородами', emoji: '⚙️', color: 'bg-destructive/10', stats: 'СЗЗ 500-1000 м' },
        { title: 'Парки культуры', desc: 'Зоны отдыха трудящихся', emoji: '🌲', color: 'bg-accent/20', stats: '12 м² на жителя' },
      ]
    },
    {
      id: 'planning',
      title: 'Планирование',
      icon: 'Map',
      description: 'Советская система градостроительного проектирования',
      content: [
        { title: 'Генеральный план города', desc: 'Госплан СССР: 15-20 летние перспективы', emoji: '📋', color: 'bg-primary/10', stats: 'Разработка: 2-3 года' },
        { title: 'Проект детальной планировки', desc: 'ПДП микрорайона: школы, сады, магазины', emoji: '📐', color: 'bg-secondary/20', stats: 'Радиус: 400-500 м' },
        { title: 'Типовое проектирование', desc: 'ЦНИИЭП: серии жилых домов', emoji: '🏗️', color: 'bg-destructive/10', stats: 'Экономия 30-40%' },
        { title: 'Социальные нормативы', desc: 'СНиП II-60-75: обеспечение населения', emoji: '📊', color: 'bg-accent/20', stats: 'Детсад: 1 место на 5 семей' },
      ]
    },
    {
      id: 'infrastructure',
      title: 'Инфраструктура',
      icon: 'Network',
      description: 'Системы жизнеобеспечения социалистического города',
      gallery: [
        { title: 'Метрополитен Москвы', image: 'https://cdn.poehali.dev/projects/9ee78f5d-8a1c-4080-b917-68f9a9c1f8cd/files/a525ffa7-6cc7-43fc-a4b0-1a4e12722706.jpg', desc: 'Подземные дворцы для народа', year: '1935', stats: '196 станций' },
        { title: 'ТЭЦ-22 Москва', image: 'https://cdn.poehali.dev/projects/9ee78f5d-8a1c-4080-b917-68f9a9c1f8cd/files/45732f93-9713-4696-a754-6df239435a80.jpg', desc: 'Централизованное теплоснабжение', year: '1985', stats: '1000 МВт' },
        { title: 'Школа №1 Автозавод', image: 'https://cdn.poehali.dev/projects/9ee78f5d-8a1c-4080-b917-68f9a9c1f8cd/files/d5f7b57b-6db0-491a-8e4f-f83757fd1e40.jpg', desc: 'Типовая школа на 960 мест', year: '1973', stats: '3 смены' },
        { title: 'АТС-4 Ленинград', image: 'https://cdn.poehali.dev/projects/9ee78f5d-8a1c-4080-b917-68f9a9c1f8cd/files/18229943-e240-42a3-912d-18890d375a97.jpg', desc: 'Автоматическая телефонная станция', year: '1968', stats: '10 000 номеров' },
      ],
      content: [
        { title: 'Общественный транспорт', desc: 'Метро, трамвай, автобус — основа мобильности', emoji: '🚇', color: 'bg-primary/10', stats: '5 коп. за проезд' },
        { title: 'Коммунальное хозяйство', desc: 'ТЭЦ, водоканал — централизованные системы', emoji: '⚡', color: 'bg-secondary/20', stats: '100% охват' },
        { title: 'Народное образование', desc: 'Школы, ПТУ, техникумы в шаговой доступности', emoji: '🎓', color: 'bg-destructive/10', stats: 'Бесплатное обучение' },
        { title: 'Связь и радио', desc: 'Телефонизация, радиоточки, телецентры', emoji: '📻', color: 'bg-accent/20', stats: '1 точка на квартиру' },
      ]
    },
    {
      id: 'housing',
      title: 'Жилищное строительство',
      icon: 'Building2',
      description: 'Массовая застройка и решение жилищной проблемы',
      content: [
        { title: 'Хрущёвки (1959-1985)', desc: 'Серии 1-464, 1-335: первое жильё миллионам', emoji: '🏢', color: 'bg-primary/10', stats: '18-32 м² квартира' },
        { title: 'Брежневки (1965-1985)', desc: 'Серии П-44, II-49: улучшенная планировка', emoji: '🏘️', color: 'bg-secondary/20', stats: '40-60 м² квартира' },
        { title: 'Соцгорода', desc: 'Комплексная застройка при заводах', emoji: '🏭', color: 'bg-destructive/10', stats: 'Жильё от предприятия' },
        { title: 'Кооперативное жильё', desc: 'ЖСК: участие населения в строительстве', emoji: '🏗️', color: 'bg-accent/20', stats: '30% стоимости взнос' },
      ]
    },
    {
      id: 'achievements',
      title: 'Достижения СССР',
      icon: 'Star',
      description: 'Социалистическое градостроительство в цифрах',
      content: [
        { 
          title: '1922-1991: 69 лет строительства', 
          desc: 'От разрухи к сверхдержаве через планомерное развитие территорий', 
          emoji: '⭐', 
          color: 'bg-primary/10',
          stats: '1.6 млрд м² жилья',
          year: '1922-1991'
        },
        { 
          title: '15 социалистических республик', 
          desc: 'Единая система расселения от Калининграда до Владивостока', 
          emoji: '🗺️', 
          color: 'bg-secondary/20',
          stats: '22.4 млн км²',
          year: 'СССР'
        },
        { 
          title: '1024 города к 1989 году', 
          desc: 'Новые города: Магнитогорск, Комсомольск-на-Амуре, Набережные Челны', 
          emoji: '🏙️', 
          color: 'bg-destructive/10',
          stats: '+700 городов за 70 лет',
          year: '1989'
        },
        { 
          title: '66% городского населения', 
          desc: 'Урбанизация: от аграрной страны к индустриальной державе', 
          emoji: '📈', 
          color: 'bg-accent/20',
          stats: 'Рост с 18% (1926)',
          year: '1989'
        },
      ]
    }
  ];

  const features = [
    {
      title: 'ПЛАНОВАЯ ЭКОНОМИКА',
      desc: 'Госплан определяет развитие каждого города на десятилетия',
      icon: 'Target',
      color: 'text-primary',
      stats: '5-летние планы'
    },
    {
      title: 'ТИПОВОЕ ПРОЕКТИРОВАНИЕ',
      desc: 'Индустриальные серии жилых домов и общественных зданий',
      icon: 'Copy',
      color: 'text-secondary',
      stats: 'Экономия 40%'
    },
    {
      title: 'СОЦИАЛЬНЫЕ НОРМАТИВЫ',
      desc: 'Школы, сады, поликлиники в радиусе 500 метров от жилья',
      icon: 'Users',
      color: 'text-destructive',
      stats: 'СНиП обязателен'
    },
    {
      title: 'БЕСПЛАТНОЕ ЖИЛЬЁ',
      desc: 'Распределение квартир от государства и предприятий',
      icon: 'Home',
      color: 'text-accent',
      stats: 'Очередь 5-7 лет'
    }
  ];

  const currentSection = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/40 to-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="relative mb-12 overflow-hidden bg-primary">
          <div className="absolute inset-0 bg-gradient-to-r from-destructive via-primary to-secondary opacity-90"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-secondary"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-secondary"></div>
          
          <div className="relative z-10 text-primary-foreground px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary flex items-center justify-center">
                  <Icon name="Building2" size={36} className="text-foreground" />
                </div>
                <div className="flex-1">
                  <Badge variant="outline" className="mb-2 border-secondary bg-secondary/20 text-secondary-foreground font-bold">
                    СССР 1922-1991
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    ГРАДОСТРОИТЕЛЬСТВО<br/>СОВЕТСКОГО СОЮЗА
                  </h1>
                </div>
              </div>
              <p className="text-lg md:text-xl leading-relaxed border-l-4 border-secondary pl-4">
                Социалистическая система планирования и застройки территорий: от микрорайонов до генпланов республик
              </p>
            </div>
          </div>
        </div>

        {/* Пропагандистские плакаты */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden border-4 border-primary group">
            <img 
              src="https://cdn.poehali.dev/projects/9ee78f5d-8a1c-4080-b917-68f9a9c1f8cd/files/adc38809-f254-4de4-9438-40a5ab4235ff.jpg"
              alt="Строим города"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-primary/95 p-4 border-t-4 border-secondary">
              <p className="text-primary-foreground font-bold text-xl text-center uppercase">
                Строим города для народа!
              </p>
            </div>
          </div>
          
          <div className="relative overflow-hidden border-4 border-secondary group">
            <img 
              src="https://cdn.poehali.dev/projects/9ee78f5d-8a1c-4080-b917-68f9a9c1f8cd/files/1907d75c-4476-42d8-b658-b20a71b950a1.jpg"
              alt="Пятилетка"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-secondary/95 p-4 border-t-4 border-primary">
              <p className="text-foreground font-bold text-xl text-center uppercase">
                Пятилетку — за четыре года!
              </p>
            </div>
          </div>
          
          <div className="relative overflow-hidden border-4 border-destructive group">
            <img 
              src="https://cdn.poehali.dev/projects/9ee78f5d-8a1c-4080-b917-68f9a9c1f8cd/files/b0f85859-6615-41aa-bac2-4c11ddec444b.jpg"
              alt="Конструктивизм"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-destructive/95 p-4 border-t-4 border-secondary">
              <p className="text-primary-foreground font-bold text-xl text-center uppercase">
                Слава советским строителям!
              </p>
            </div>
          </div>
        </div>

        {/* Бегущая строка лозунгов */}
        <div className="mb-12 bg-destructive border-y-4 border-secondary py-3 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            {[...slogans, ...slogans].map((slogan, index) => (
              <span key={index} className="inline-block mx-8 text-primary-foreground font-bold text-xl">
                ★ {slogan}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 text-primary">
              ОСНОВЫ СОВЕТСКОГО ГРАДОСТРОИТЕЛЬСТВА
            </h2>
            <div className="w-32 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-4 border-foreground/20 hover:border-primary transition-all duration-300 bg-card hover:shadow-xl"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
                      <Icon name={feature.icon} size={32} className={feature.color} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{feature.desc}</p>
                      <Badge className="bg-secondary text-secondary-foreground">{feature.stats}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 bg-transparent h-auto p-0 mb-8">
              {sections.map((section) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="flex flex-col items-center gap-2 p-4 bg-card border-4 border-foreground/20 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:border-secondary transition-all h-auto"
                >
                  <Icon name={section.icon} size={24} />
                  <span className="text-xs font-bold text-center leading-tight uppercase">{section.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {sections.map((section) => (
              <TabsContent key={section.id} value={section.id} className="mt-8">
                <div className="mb-8 text-center bg-primary/10 py-6 border-y-4 border-primary">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary uppercase">
                    {section.title}
                  </h2>
                  <p className="text-lg text-muted-foreground uppercase tracking-wide">{section.description}</p>
                </div>

                {section.gallery && (
                  <div className="mb-12">
                    <div className="flex items-center gap-4 mb-6 bg-secondary/20 p-4 border-y-2 border-secondary">
                      <Icon name="Award" size={32} className="text-primary" />
                      <h3 className="text-2xl md:text-3xl font-bold text-center uppercase flex-1">Примеры объектов социалистического строительства</h3>
                      <Icon name="Award" size={32} className="text-primary" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.gallery.map((project, index) => (
                        <Card 
                          key={`gallery-${index}`}
                          className="border-4 border-foreground/20 hover:border-primary transition-all duration-300 overflow-hidden group bg-card relative"
                        >
                          <div className="absolute top-3 left-3 z-10">
                            <Badge className="bg-primary text-primary-foreground font-bold text-sm px-3 py-1">
                              ★
                            </Badge>
                          </div>
                          <div className="relative h-56 overflow-hidden bg-muted">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 right-4">
                              <Badge className="bg-secondary text-secondary-foreground font-bold text-base px-3 py-1">
                                {project.year}
                              </Badge>
                            </div>
                          </div>
                          <CardContent className="pt-6">
                            <h4 className="font-bold text-xl mb-2 uppercase">{project.title}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{project.desc}</p>
                            <Badge variant="outline" className="font-bold">{project.stats}</Badge>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.id === 'achievements' ? (
                    section.content.map((item, index) => (
                      <Card 
                        key={`achievement-${index}`}
                        className="border-4 border-foreground/20 hover:border-primary transition-all duration-300 bg-card md:col-span-2"
                      >
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-6">
                            <div className="text-6xl">{item.emoji}</div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <h3 className="text-2xl font-bold uppercase">{item.title}</h3>
                                <Badge className="bg-secondary text-secondary-foreground">{item.year}</Badge>
                              </div>
                              <p className="text-muted-foreground mb-3 text-lg">{item.desc}</p>
                              <div className="flex gap-2">
                                <Badge variant="outline" className="font-bold text-base px-4 py-2">{item.stats}</Badge>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    section.content.map((item, index) => (
                      <Card 
                        key={`content-${index}`}
                        className={`border-4 border-foreground/20 hover:border-primary transition-all duration-300 ${item.color} group`}
                      >
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="text-4xl">{item.emoji}</div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold mb-2 uppercase">{item.title}</h3>
                              <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                              {item.stats && (
                                <Badge variant="outline" className="font-bold">{item.stats}</Badge>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-16 text-center bg-primary text-primary-foreground py-8 border-t-4 border-secondary">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-secondary flex items-center justify-center">
              <Icon name="Hammer" size={24} className="text-foreground" />
            </div>
            <p className="text-2xl font-bold uppercase">
              Пролетарии всех стран, соединяйтесь!
            </p>
          </div>
          <p className="text-sm uppercase tracking-wide">
            Материал подготовлен на основе архивов Госстроя СССР
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;