import { Card } from "@/components/ui/card";
import { Globe, Smartphone, Palette, Database, Code, Rocket } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Веб-разработка",
    description: "Современные веб-приложения и сайты с адаптивным дизайном и высокой производительностью",
  },
  {
    icon: Smartphone,
    title: "Мобильные приложения",
    description: "PWA и мобильные web-приложения, которые работают как нативные",
  },
  {
    icon: Palette,
    title: "UI/UX дизайн",
    description: "Продуманный пользовательский интерфейс и опыт взаимодействия",
  },
  {
    icon: Database,
    title: "Backend разработка",
    description: "Надежные серверные решения, API и интеграции с базами данных",
  },
  {
    icon: Code,
    title: "No-code решения",
    description: "Быстрая разработка на платформах Lovable, Bubble, Webflow",
  },
  {
    icon: Rocket,
    title: "Оптимизация",
    description: "Улучшение производительности и SEO существующих проектов",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Чем я <span className="bg-gradient-primary bg-clip-text text-transparent">занимаюсь</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный спектр услуг для создания вашего цифрового продукта
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all hover:shadow-card group cursor-pointer"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:animate-glow">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
