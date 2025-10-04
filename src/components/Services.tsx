import { Card } from "@/components/ui/card";
import { Globe, Smartphone, Palette, Database, Code, Rocket } from "lucide-react";

const skills = [
  {
    icon: Globe,
    title: "Веб-разработка",
    description: "Разработка современных веб-приложений с использованием React, TypeScript и других технологий",
  },
  {
    icon: Smartphone,
    title: "PWA приложения",
    description: "Создание прогрессивных веб-приложений, которые работают как нативные",
  },
  {
    icon: Palette,
    title: "UI/UX",
    description: "Проектирование интерфейсов с акцентом на пользовательский опыт",
  },
  {
    icon: Database,
    title: "Backend",
    description: "Работа с серверной частью, API и базами данных",
  },
  {
    icon: Code,
    title: "No-code платформы",
    description: "Опыт работы с Lovable, Bubble, Webflow для быстрого прототипирования",
  },
  {
    icon: Rocket,
    title: "Оптимизация",
    description: "Улучшение производительности и SEO веб-приложений",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Мои <span className="bg-gradient-primary bg-clip-text text-transparent">навыки</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Технологии и инструменты, с которыми я работаю
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all hover:shadow-card group"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:animate-glow">
                <skill.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
