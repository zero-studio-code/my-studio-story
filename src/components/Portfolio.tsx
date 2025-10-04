import { Card } from "@/components/ui/card";
import { Code2 } from "lucide-react";

const projects = [];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Мои <span className="bg-gradient-primary bg-clip-text text-transparent">проекты</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Здесь появятся мои разработки и эксперименты
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-12 bg-card border-border border-dashed text-center">
            <Code2 className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Скоро здесь будут проекты</h3>
            <p className="text-muted-foreground">
              Сейчас я работаю над интересными разработками, которые появятся в этой секции
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
