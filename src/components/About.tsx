import { Card } from "@/components/ui/card";
import { User, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            О <span className="bg-gradient-primary bg-clip-text text-transparent">студии</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Zero Code Studio - это место, где идеи превращаются в реальность
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 bg-card border-border hover:border-primary transition-colors group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow">
              <User className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Кто я</h3>
            <p className="text-muted-foreground leading-relaxed">
              Профессиональный разработчик с 5+ годами опыта в создании современных веб-решений. 
              Специализируюсь на full-stack разработке и no-code платформах.
            </p>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary transition-colors group">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Моя миссия</h3>
            <p className="text-muted-foreground leading-relaxed">
              Делать сложные технологии доступными для всех. Создаю решения, которые работают 
              эффективно и выглядят превосходно.
            </p>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary transition-colors group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Мой подход</h3>
            <p className="text-muted-foreground leading-relaxed">
              Быстрая разработка без ущерба качеству. Использую современные инструменты 
              и лучшие практики для достижения результата.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
