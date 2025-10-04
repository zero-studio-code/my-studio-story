import { Card } from "@/components/ui/card";
import { Globe, Smartphone, Palette, Database, Code, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const skills = [
    {
      icon: Globe,
      title: t.skills.items.web.title,
      description: t.skills.items.web.description,
    },
    {
      icon: Smartphone,
      title: t.skills.items.pwa.title,
      description: t.skills.items.pwa.description,
    },
    {
      icon: Palette,
      title: t.skills.items.uiux.title,
      description: t.skills.items.uiux.description,
    },
    {
      icon: Database,
      title: t.skills.items.backend.title,
      description: t.skills.items.backend.description,
    },
    {
      icon: Code,
      title: t.skills.items.nocode.title,
      description: t.skills.items.nocode.description,
    },
    {
      icon: Rocket,
      title: t.skills.items.optimization.title,
      description: t.skills.items.optimization.description,
    },
  ];
  
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.skills.title} <span className="bg-gradient-primary bg-clip-text text-transparent">{t.skills.titleHighlight}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.skills.description}
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
