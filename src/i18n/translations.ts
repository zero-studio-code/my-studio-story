export type Language = 'ru' | 'en' | 'de';

export const translations = {
  ru: {
    nav: {
      about: 'О себе',
      skills: 'Навыки',
      projects: 'Проекты',
      contact: 'Контакты'
    },
    hero: {
      studio: 'Zero Code Studio',
      title1: 'Разработка',
      title2: 'веб-приложений',
      description: 'Персональная страница разработчика. Эксперименты с современными веб-технологиями.',
      cta1: 'Мои проекты',
      cta2: 'Узнать больше',
      stats: {
        experience: 'Лет опыта',
        projects: 'Проектов',
        quality: 'Качество'
      }
    },
    about: {
      title: 'О',
      titleHighlight: 'разработчике',
      description: 'Zero Code Studio - мой личный проект для разработки и экспериментов',
      card1: {
        title: 'Кто я',
        description: 'Разработчик с опытом в создании современных веб-приложений. Работаю с full-stack разработкой и no-code платформами.'
      },
      card2: {
        title: 'Что меня интересует',
        description: 'Изучение новых технологий и создание интересных проектов. Эксперименты с современными инструментами разработки.'
      },
      card3: {
        title: 'Мой подход',
        description: 'Фокус на качестве и эффективности разработки. Использую современные инструменты и актуальные практики.'
      }
    },
    skills: {
      title: 'Мои',
      titleHighlight: 'навыки',
      description: 'Технологии и инструменты, с которыми я работаю',
      items: {
        web: {
          title: 'Веб-разработка',
          description: 'Разработка современных веб-приложений с использованием React, TypeScript и других технологий'
        },
        pwa: {
          title: 'PWA приложения',
          description: 'Создание прогрессивных веб-приложений, которые работают как нативные'
        },
        uiux: {
          title: 'UI/UX',
          description: 'Проектирование интерфейсов с акцентом на пользовательский опыт'
        },
        backend: {
          title: 'Backend',
          description: 'Работа с серверной частью, API и базами данных'
        },
        nocode: {
          title: 'No-code платформы',
          description: 'Опыт работы с Lovable, Bubble, Webflow для быстрого прототипирования'
        },
        optimization: {
          title: 'Оптимизация',
          description: 'Улучшение производительности и SEO веб-приложений'
        }
      }
    },
    portfolio: {
      title: 'Мои',
      titleHighlight: 'проекты',
      description: 'Здесь появятся мои разработки и эксперименты',
      empty: {
        title: 'Скоро здесь будут проекты',
        description: 'Сейчас я работаю над интересными разработками, которые появятся в этой секции'
      }
    },
    contact: {
      title: 'Свяжитесь',
      titleHighlight: 'со мной',
      description: 'Буду рад ответить на ваши вопросы',
      form: {
        name: 'Имя',
        email: 'Email',
        message: 'Сообщение',
        send: 'Отправить сообщение',
        sending: 'Отправка...'
      }
    },
    footer: {
      description: 'Персональная страница разработчика',
      rights: 'Все права защищены'
    }
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      studio: 'Zero Code Studio',
      title1: 'Web Application',
      title2: 'Development',
      description: 'Developer\'s personal page. Experiments with modern web technologies.',
      cta1: 'My Projects',
      cta2: 'Learn More',
      stats: {
        experience: 'Years Experience',
        projects: 'Projects',
        quality: 'Quality'
      }
    },
    about: {
      title: 'About',
      titleHighlight: 'Developer',
      description: 'Zero Code Studio - my personal project for development and experiments',
      card1: {
        title: 'Who I Am',
        description: 'Developer with experience in creating modern web applications. Working with full-stack development and no-code platforms.'
      },
      card2: {
        title: 'What Interests Me',
        description: 'Learning new technologies and creating interesting projects. Experimenting with modern development tools.'
      },
      card3: {
        title: 'My Approach',
        description: 'Focus on quality and development efficiency. Using modern tools and current practices.'
      }
    },
    skills: {
      title: 'My',
      titleHighlight: 'Skills',
      description: 'Technologies and tools I work with',
      items: {
        web: {
          title: 'Web Development',
          description: 'Building modern web applications using React, TypeScript and other technologies'
        },
        pwa: {
          title: 'PWA Applications',
          description: 'Creating progressive web apps that work like native applications'
        },
        uiux: {
          title: 'UI/UX',
          description: 'Designing interfaces with focus on user experience'
        },
        backend: {
          title: 'Backend',
          description: 'Working with server-side, APIs and databases'
        },
        nocode: {
          title: 'No-code Platforms',
          description: 'Experience with Lovable, Bubble, Webflow for rapid prototyping'
        },
        optimization: {
          title: 'Optimization',
          description: 'Improving performance and SEO of web applications'
        }
      }
    },
    portfolio: {
      title: 'My',
      titleHighlight: 'Projects',
      description: 'My developments and experiments will appear here',
      empty: {
        title: 'Projects Coming Soon',
        description: 'Currently working on interesting developments that will appear in this section'
      }
    },
    contact: {
      title: 'Get in',
      titleHighlight: 'Touch',
      description: 'I\'ll be happy to answer your questions',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...'
      }
    },
    footer: {
      description: 'Developer\'s personal page',
      rights: 'All rights reserved'
    }
  },
  de: {
    nav: {
      about: 'Über mich',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      contact: 'Kontakt'
    },
    hero: {
      studio: 'Zero Code Studio',
      title1: 'Webanwendungs',
      title2: 'Entwicklung',
      description: 'Persönliche Seite des Entwicklers. Experimente mit modernen Webtechnologien.',
      cta1: 'Meine Projekte',
      cta2: 'Mehr erfahren',
      stats: {
        experience: 'Jahre Erfahrung',
        projects: 'Projekte',
        quality: 'Qualität'
      }
    },
    about: {
      title: 'Über',
      titleHighlight: 'Entwickler',
      description: 'Zero Code Studio - mein persönliches Projekt für Entwicklung und Experimente',
      card1: {
        title: 'Wer ich bin',
        description: 'Entwickler mit Erfahrung in der Erstellung moderner Webanwendungen. Arbeit mit Full-Stack-Entwicklung und No-Code-Plattformen.'
      },
      card2: {
        title: 'Was mich interessiert',
        description: 'Erlernen neuer Technologien und Erstellen interessanter Projekte. Experimente mit modernen Entwicklungswerkzeugen.'
      },
      card3: {
        title: 'Mein Ansatz',
        description: 'Fokus auf Qualität und Entwicklungseffizienz. Verwendung moderner Tools und aktueller Praktiken.'
      }
    },
    skills: {
      title: 'Meine',
      titleHighlight: 'Fähigkeiten',
      description: 'Technologien und Werkzeuge, mit denen ich arbeite',
      items: {
        web: {
          title: 'Webentwicklung',
          description: 'Entwicklung moderner Webanwendungen mit React, TypeScript und anderen Technologien'
        },
        pwa: {
          title: 'PWA-Anwendungen',
          description: 'Erstellung progressiver Web-Apps, die wie native Anwendungen funktionieren'
        },
        uiux: {
          title: 'UI/UX',
          description: 'Gestaltung von Benutzeroberflächen mit Fokus auf Benutzererfahrung'
        },
        backend: {
          title: 'Backend',
          description: 'Arbeit mit serverseitigen Systemen, APIs und Datenbanken'
        },
        nocode: {
          title: 'No-Code-Plattformen',
          description: 'Erfahrung mit Lovable, Bubble, Webflow für schnelles Prototyping'
        },
        optimization: {
          title: 'Optimierung',
          description: 'Verbesserung der Leistung und SEO von Webanwendungen'
        }
      }
    },
    portfolio: {
      title: 'Meine',
      titleHighlight: 'Projekte',
      description: 'Hier werden meine Entwicklungen und Experimente erscheinen',
      empty: {
        title: 'Projekte kommen bald',
        description: 'Arbeite derzeit an interessanten Entwicklungen, die in diesem Bereich erscheinen werden'
      }
    },
    contact: {
      title: 'Kontaktieren',
      titleHighlight: 'Sie mich',
      description: 'Ich freue mich, Ihre Fragen zu beantworten',
      form: {
        name: 'Name',
        email: 'E-Mail',
        message: 'Nachricht',
        send: 'Nachricht senden',
        sending: 'Wird gesendet...'
      }
    },
    footer: {
      description: 'Persönliche Seite des Entwicklers',
      rights: 'Alle Rechte vorbehalten'
    }
  }
};
