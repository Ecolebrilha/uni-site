import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    differentials: {
      heroTitle: 'Nossos Diferenciais',
      heroSubtitle: 'O que nos torna únicos no mercado',
      introTitle: 'Por que escolher a Uni Hospitalar',
      introText: 'Nossa excelência é construída sobre pilares sólidos de inovação, qualidade e compromisso. Conheça os diferenciais que fazem da Uni Hospitalar a escolha ideal para suas necessidades.',
      features: {
        inventory: {
          title: 'Gestão de Estoque Inovadora',
          description: 'Nossa gestão de estoque é projetada para garantir a máxima eficiência e controle rigoroso das condições de armazenamento. Com tecnologia de ponta, oferecemos rastreamento em tempo real e automação para evitar desperdícios e melhorar a eficiência operacional.',
          feature1: 'Tecnologia Avançada:',
          feature1Description: 'Soluções de rastreamento e monitoramento em tempo real.',
          feature2: 'Automação:',
          feature2Description: 'Redução de erros humanos e aumento da eficiência.'
        },
        logistics: {
          title: 'Logística Ágil e Eficiente',
          description: 'A logística é um dos nossos pilares. Nossa estratégia é baseada em soluções que garantem entregas rápidas e precisas, com uma rede bem estruturada que atende às suas necessidades com agilidade.',
          feature1: 'Rede Ampliada:',
          feature1Description: 'Cobertura nacional com serviços de entrega rápida.',
          feature2: 'Otimização de Rota:',
          feature2Description: 'Redução de tempo de entrega e custos operacionais.'
        },
        expansion: {
          title: 'Expansão Estratégica',
          description: 'Estamos em constante expansão para atender melhor às suas necessidades. Nossas unidades de negócios estão localizadas estrategicamente para oferecer um atendimento mais próximo e eficaz.',
          feature1: 'Novas Localizações:',
          feature1Description: 'Expansão para áreas com alta demanda.',
          feature2: 'Equipe Localizada:',
          feature2Description: 'Atendimento personalizado e suporte eficiente.'
        },
        quality: {
          title: 'Compromisso com a Qualidade',
          description: 'Nosso compromisso com a qualidade vai além dos padrões exigidos. Investimos continuamente em nossa equipe e processos para garantir um serviço superior e satisfatório.',
          feature1: 'Treinamento Contínuo:',
          feature1Description: 'Equipe qualificada e atualizada com as melhores práticas.',
          feature2: 'Controle de Qualidade:',
          feature2Description: 'Monitoramento rigoroso para garantir a excelência.'
        }
      },
      metricsTitle: 'Nossos Resultados',
      metrics: {
        delivery: {
          number: '98%',
          label: 'Entregas no Prazo'
        },
        accuracy: {
          number: '99.7%',
          label: 'Precisão de Inventário'
        },
        satisfaction: {
          number: '95%',
          label: 'Satisfação do Cliente'
        },
        coverage: {
          number: '27',
          label: 'Estados Atendidos'
        }
      },
      testimonialsTitle: 'O que nossos clientes dizem',
      testimonials: {
        testimonial1: {
          text: 'A Uni Hospitalar se destacou pela qualidade e eficiência. Seus serviços superaram nossas expectativas em todos os aspectos.',
          authorName: 'Ana Costa',
          authorPosition: 'Gerente de Compras',
          authorInitials: 'AC'
        },
        testimonial2: {
          text: 'A logística é impecável. Recebemos nossos produtos sempre no prazo e em perfeito estado.',
          authorName: 'Carlos Oliveira',
          authorPosition: 'Diretor de Operações',
          authorInitials: 'CO'
        }
      },
      ctaTitle: 'Pronto para experimentar a diferença?',
      ctaText: 'Entre em contato conosco e descubra como nossos diferenciais podem beneficiar seu negócio.',
      ctaButton: 'Fale Conosco'
    }
  },
  en: {
    differentials: {
      heroTitle: 'Our Differentials',
      heroSubtitle: 'What makes us unique in the market',
      introTitle: 'Why choose Uni Hospitalar',
      introText: 'Our excellence is built on solid pillars of innovation, quality and commitment. Discover the differentials that make Uni Hospitalar the ideal choice for your needs.',
      features: {
        inventory: {
          title: 'Innovative Inventory Management',
          description: 'Our inventory management is designed to ensure maximum efficiency and rigorous control of storage conditions. With cutting-edge technology, we offer real-time tracking and automation to avoid waste and improve operational efficiency.',
          feature1: 'Advanced Technology:',
          feature1Description: 'Real-time tracking and monitoring solutions.',
          feature2: 'Automation:',
          feature2Description: 'Reduction of human errors and increased efficiency.'
        },
        logistics: {
          title: 'Agile and Efficient Logistics',
          description: 'Logistics is one of our pillars. Our strategy is based on solutions that guarantee fast and accurate deliveries, with a well-structured network that meets your needs with agility.',
          feature1: 'Expanded Network:',
          feature1Description: 'National coverage with fast delivery services.',
          feature2: 'Route Optimization:',
          feature2Description: 'Reduction of delivery time and operational costs.'
        },
        expansion: {
          title: 'Strategic Expansion',
          description: 'We are constantly expanding to better serve your needs. Our business units are strategically located to offer closer and more effective service.',
          feature1: 'New Locations:',
          feature1Description: 'Expansion to high-demand areas.',
          feature2: 'Localized Team:',
          feature2Description: 'Personalized service and efficient support.'
        },
        quality: {
          title: 'Commitment to Quality',
          description: 'Our commitment to quality goes beyond required standards. We continuously invest in our team and processes to ensure superior and satisfactory service.',
          feature1: 'Continuous Training:',
          feature1Description: 'Qualified team updated with best practices.',
          feature2: 'Quality Control:',
          feature2Description: 'Rigorous monitoring to ensure excellence.'
        }
      },
      metricsTitle: 'Our Results',
      metrics: {
        delivery: {
          number: '98%',
          label: 'On-Time Deliveries'
        },
        accuracy: {
          number: '99.7%',
          label: 'Inventory Accuracy'
        },
        satisfaction: {
          number: '95%',
          label: 'Customer Satisfaction'
        },
        coverage: {
          number: '27',
          label: 'States Served'
        }
      },
      testimonialsTitle: 'What our clients say',
      testimonials: {
        testimonial1: {
          text: 'Uni Hospitalar stood out for its quality and efficiency. Their services exceeded our expectations in all aspects.',
          authorName: 'Ana Costa',
          authorPosition: 'Purchasing Manager',
          authorInitials: 'AC'
        },
        testimonial2: {
          text: 'The logistics is impeccable. We always receive our products on time and in perfect condition.',
          authorName: 'Carlos Oliveira',
          authorPosition: 'Operations Director',
          authorInitials: 'CO'
        }
      },
      ctaTitle: 'Ready to experience the difference?',
      ctaText: 'Contact us and discover how our differentials can benefit your business.',
      ctaButton: 'Contact Us'
    }
  },
  es: {
    differentials: {
      heroTitle: 'Nuestros Diferenciales',
      heroSubtitle: 'Lo que nos hace únicos en el mercado',
      introTitle: 'Por qué elegir Uni Hospitalar',
      introText: 'Nuestra excelencia se construye sobre pilares sólidos de innovación, calidad y compromiso. Conozca los diferenciales que hacen de Uni Hospitalar la elección ideal para sus necesidades.',
      features: {
        inventory: {
          title: 'Gestión de Inventario Innovadora',
          description: 'Nuestra gestión de inventario está diseñada para garantizar la máxima eficiencia y control riguroso de las condiciones de almacenamiento. Con tecnología de punta, ofrecemos seguimiento en tiempo real y automatización para evitar desperdicios y mejorar la eficiencia operacional.',
          feature1: 'Tecnología Avanzada:',
          feature1Description: 'Soluciones de seguimiento y monitoreo en tiempo real.',
          feature2: 'Automatización:',
          feature2Description: 'Reducción de errores humanos y aumento de la eficiencia.'
        },
        logistics: {
          title: 'Logística Ágil y Eficiente',
          description: 'La logística es uno de nuestros pilares. Nuestra estrategia se basa en soluciones que garantizan entregas rápidas y precisas, con una red bien estructurada que atiende sus necesidades con agilidad.',
          feature1: 'Red Ampliada:',
          feature1Description: 'Cobertura nacional con servicios de entrega rápida.',
          feature2: 'Optimización de Ruta:',
          feature2Description: 'Reducción del tiempo de entrega y costos operacionales.'
        },
        expansion: {
          title: 'Expansión Estratégica',
          description: 'Estamos en constante expansión para atender mejor sus necesidades. Nuestras unidades de negocio están ubicadas estratégicamente para ofrecer un servicio más cercano y eficaz.',
          feature1: 'Nuevas Ubicaciones:',
          feature1Description: 'Expansión a áreas de alta demanda.',
          feature2: 'Equipo Localizado:',
          feature2Description: 'Atención personalizada y soporte eficiente.'
        },
        quality: {
          title: 'Compromiso con la Calidad',
          description: 'Nuestro compromiso con la calidad va más allá de los estándares requeridos. Invertimos continuamente en nuestro equipo y procesos para garantizar un servicio superior y satisfactorio.',
          feature1: 'Entrenamiento Continuo:',
          feature1Description: 'Equipo calificado y actualizado con las mejores prácticas.',
          feature2: 'Control de Calidad:',
          feature2Description: 'Monitoreo riguroso para garantizar la excelencia.'
        }
      },
      metricsTitle: 'Nuestros Resultados',
      metrics: {
        delivery: {
          number: '98%',
          label: 'Entregas a Tiempo'
        },
        accuracy: {
          number: '99.7%',
          label: 'Precisión de Inventario'
        },
        satisfaction: {
          number: '95%',
          label: 'Satisfacción del Cliente'
        },
        coverage: {
          number: '27',
          label: 'Estados Atendidos'
        }
      },
      testimonialsTitle: 'Lo que dicen nuestros clientes',
      testimonials: {
        testimonial1: {
          text: 'Uni Hospitalar se destacó por su calidad y eficiencia. Sus servicios superaron nuestras expectativas en todos los aspectos.',
          authorName: 'Ana Costa',
          authorPosition: 'Gerente de Compras',
          authorInitials: 'AC'
        },
        testimonial2: {
          text: 'La logística es impecable. Siempre recibimos nuestros productos a tiempo y en perfecto estado.',
          authorName: 'Carlos Oliveira',
          authorPosition: 'Director de Operaciones',
          authorInitials: 'CO'
        }
      },
      ctaTitle: '¿Listo para experimentar la diferencia?',
      ctaText: 'Contáctanos y descubre cómo nuestros diferenciales pueden beneficiar tu negocio.',
      ctaButton: 'Contáctanos'
    }
  }
})

export function useDifferentialsTranslation() {
  const setLanguage = (lang) => {
    currentLanguage.value = lang
    localStorage.setItem('language', lang)
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLanguage.value]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  // Inicializar com idioma salvo
  const savedLang = localStorage.getItem('language')
  if (savedLang && ['pt', 'en', 'es'].includes(savedLang)) {
    currentLanguage.value = savedLang
  }

  return {
    currentLanguage,
    setLanguage,
    t
  }
}
