import { Card } from "@/components/ui/card";
import { User, Target, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.about.title} <span className="bg-gradient-primary bg-clip-text text-transparent">{t.about.titleHighlight}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 bg-card border-border hover:border-primary transition-colors group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow">
              <User className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t.about.card1.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.about.card1.description}
            </p>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary transition-colors group">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t.about.card2.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.about.card2.description}
            </p>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary transition-colors group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t.about.card3.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.about.card3.description}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
