import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "E-commerce платформа",
    description: "Современный интернет-магазин с интеграцией платежных систем и системой управления заказами",
    image: project1,
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    status: "Завершен",
  },
  {
    title: "Мобильное приложение для бизнеса",
    description: "PWA приложение для управления бизнес-процессами с аналитикой и отчетностью",
    image: project2,
    tags: ["PWA", "TypeScript", "Firebase", "Analytics"],
    status: "В разработке",
  },
  {
    title: "Корпоративный сайт",
    description: "Многостраничный корпоративный сайт с системой управления контентом",
    image: project3,
    tags: ["Lovable", "React", "CMS", "SEO"],
    status: "Завершен",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Мое <span className="bg-gradient-primary bg-clip-text text-transparent">портфолио</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Проекты, которые я создал для своих клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary transition-all hover:shadow-card group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                  <ExternalLink className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <Badge variant={project.status === "Завершен" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="border-primary/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
