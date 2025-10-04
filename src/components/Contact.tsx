import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t, language } = useLanguage();
  
  const content = {
    ru: {
      startProject: 'Начните свой проект',
      projectDesc: 'Расскажите о своей идее, и я помогу воплотить её в жизнь. Отвечу на все вопросы и предложу оптимальное решение.',
      socials: 'Социальные сети',
      socialsDesc: 'Следите за моими проектами и новостями в социальных сетях',
      tip: 'Подсказка:',
      tipText: 'Обычно отвечаю в течение 24 часов. Для срочных вопросов пишите в Telegram.'
    },
    en: {
      startProject: 'Start Your Project',
      projectDesc: 'Tell me about your idea, and I will help bring it to life. I will answer all questions and suggest the best solution.',
      socials: 'Social Media',
      socialsDesc: 'Follow my projects and news on social media',
      tip: 'Tip:',
      tipText: 'I usually respond within 24 hours. For urgent questions, write to Telegram.'
    },
    de: {
      startProject: 'Starten Sie Ihr Projekt',
      projectDesc: 'Erzählen Sie mir von Ihrer Idee, und ich werde helfen, sie zum Leben zu erwecken. Ich werde alle Fragen beantworten und die beste Lösung vorschlagen.',
      socials: 'Soziale Medien',
      socialsDesc: 'Folgen Sie meinen Projekten und Neuigkeiten in sozialen Medien',
      tip: 'Tipp:',
      tipText: 'Ich antworte normalerweise innerhalb von 24 Stunden. Für dringende Fragen schreiben Sie an Telegram.'
    }
  };
  
  const currentContent = content[language];
  
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.contact.title} <span className="bg-gradient-primary bg-clip-text text-transparent">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">{currentContent.startProject}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {currentContent.projectDesc}
                </p>

                <div className="space-y-4">
                  <a 
                    href="mailto:hello@zero-code-studio.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    hello@zero-code-studio.com
                  </a>

                  <a 
                    href="https://t.me/zerocodestudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-accent" />
                    </div>
                    Telegram
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">{currentContent.socials}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {currentContent.socialsDesc}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-border hover:border-primary"
                    asChild
                  >
                    <a href="https://github.com/zerocodestudio" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  </Button>

                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-border hover:border-primary"
                    asChild
                  >
                    <a href="https://linkedin.com/company/zero-code-studio" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>

                <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
                  <p className="text-sm text-muted-foreground">
                    💡 <strong>{currentContent.tip}</strong> {currentContent.tipText}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
