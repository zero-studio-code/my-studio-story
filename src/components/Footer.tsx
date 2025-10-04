import { Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg">Zero Code Studio</span>
          </div>

          <p className="text-muted-foreground text-sm">
            © {currentYear} Zero Code Studio. Все права защищены.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              О студии
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
              Портфолио
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
