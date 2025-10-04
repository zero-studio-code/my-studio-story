import { Card } from "@/components/ui/card";
import { User, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            О <span className="bg-gradient-primary bg-clip-text text-transparent">разработчике</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Zero Code Studio - мой личный проект для разработки и экспериментов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 bg-card border-border hover:border-primary transition-colors group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow">
              <User className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Кто я</h3>
            <p className="text-muted-foreground leading-relaxed">
              Разработчик с опытом в создании современных веб-приложений. 
              Работаю с full-stack разработкой и no-code платформами.
            </p>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary transition-colors group">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Что меня интересует</h3>
            <p className="text-muted-foreground leading-relaxed">
              Изучение новых технологий и создание интересных проектов. 
              Эксперименты с современными инструментами разработки.
            </p>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary transition-colors group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Мой подход</h3>
            <p className="text-muted-foreground leading-relaxed">
              Фокус на качестве и эффективности разработки. 
              Использую современные инструменты и актуальные практики.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
