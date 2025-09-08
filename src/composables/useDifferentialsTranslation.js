import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    differentials: {
      heroTitle: 'Nossos Diferenciais',
      heroSubtitle: 'O que nos torna únicos no mercado',
      introTitle: 'Por que escolher a Uni Hospitalar',
      introText: 'Na Uni Hospitalar, nossa trajetória é guiada por princípios que fazem a diferença.<br />Com ética, inovação e responsabilidade, entregamos soluções com qualidade, agilidade e transparência. Nosso compromisso com a integridade e a objetividade garante confiança em cada atendimento.<br /><br /> Conheça os diferenciais que tornam a Uni Hospitalar a escolha certa para quem valoriza excelência com propósito.',
      features: {
        inventory: {
          title: 'Gestão de Estoque Inovadora',
          description: 'Gestão inteligente de estoque, garantindo disponibilidade contínua e evitando rupturas, com controle rigoroso das condições de armazenamento, conforme determina a legislação sanitária brasileira vigente, utilizando tecnologia de ponta e automações para melhorar a produtividade e aumentar a eficiência operacional.',
          feature1: 'Tecnologia de Ponta:',
          feature1Description: 'Nossa infraestrutura conta com um sistema de climatização avançado, que assegura um controle preciso e constante da temperatura, monitoramento em tempo real e sistema de WMS',
          feature2: 'Operação sem Falhas:',
          feature2Description: 'Com gerador de emergência para todas as áreas, a continuidade das operações é garantida, sem comprometer a qualidade do seu armazenamento.'
        },
        logistics: {
          title: 'Logística Ágil e Eficiente',
          description: 'A logística é um dos nossos pilares. Nossa estratégia é baseada em soluções que garantem entregas rápidas e precisas, por meio de uma rede estruturada que atende às necessidades dos nossos clientes com agilidade e segurança.',
          feature1: 'Rede Ampliada:',
          feature1Description: 'Cobertura nacional com serviços de entrega rápida.',
          feature2: 'Frota Própria:',
          feature2Description: 'Contamos com frota própria, o que garante maior controle, agilidade e segurança nas entregas.'
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
          number: '26',
          label: 'Estados Atendidos e DF'
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
      introText: 'At Uni Hospitalar, our journey is guided by principles that make a difference.<br />With ethics, innovation, and responsibility, we deliver solutions with quality, agility, and transparency. Our commitment to integrity and objectivity ensures trust in every service.<br /><br /> Discover the differentiators that make Uni Hospitalar the right choice for those who value excellence with purpose.',
      features: {
        inventory: {
          title: 'Innovative Inventory Management',
          description: 'Intelligent inventory management ensures continuous availability and prevents stockouts, with strict control over storage conditions, as determined by current Brazilian health legislation, using cutting-edge technology and automation to improve productivity and increase operational efficiency.',
          feature1: 'Cutting-edge Technology:',
          feature1Description: 'Our infrastructure has an advanced air conditioning system, which ensures precise and constant temperature control, real-time monitoring and a WMS system.',
          feature2: 'Flawless Operation:',
          feature2Description: 'With an emergency generator for all areas, the continuity of operations is guaranteed, without compromising the quality of your storage.'
        },
        logistics: {
          title: 'Agile and Efficient Logistics',
          description: 'Logistics is one of our pillars. Our strategy is based on solutions that ensure fast and accurate deliveries through a structured network that meets our clients’ needs with agility and safety.',
          feature1: 'Expanded Network:',
          feature1Description: 'National coverage with fast delivery services.',
          feature2: 'Own Fleet:',
          feature2Description: 'We have our own fleet, ensuring greater control, agility, and safety in deliveries.'
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
          number: '26',
          label: 'States Served and FD'
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
      introText: 'En Uni Hospitalar, nuestra trayectoria está guiada por principios que marcan la diferencia.<br />Con ética, innovación y responsabilidad, ofrecemos soluciones con calidad, agilidad y transparencia. Nuestro compromiso con la integridad y la objetividad garantiza confianza en cada atención.<br /><br /> Conozca los diferenciales que hacen de Uni Hospitalar la elección correcta para quienes valoran la excelencia con propósito.',
      features: {
        inventory: {
          title: 'Gestión de Inventario Innovadora',
          description: 'La gestión inteligente de inventarios garantiza la disponibilidad continua y evita el desabastecimiento, con un estricto control de las condiciones de almacenamiento, conforme a lo determinado por la legislación sanitaria brasileña vigente, utilizando tecnología de punta y automatizaciones para mejorar la productividad y aumentar la eficiencia operativa.',
          feature1: 'Tecnología de Vanguardia',
          feature1Description: 'Nuestra infraestructura cuenta con un avanzado sistema de aire acondicionado, que asegura un control preciso y constante de la temperatura, monitoreo en tiempo real y un sistema WMS.',
          feature2: 'Funcionamiento impecable:',
          feature2Description: 'Con un generador de emergencia para todas las áreas, se garantiza la continuidad de las operaciones, sin comprometer la calidad de su almacenamiento.'
        },
        logistics: {
          title: 'Logística Ágil y Eficiente',
          description: 'La logística es uno de nuestros pilares. Nuestra estrategia se basa en soluciones que garantizan entregas rápidas y precisas, a través de una red estructurada que satisface las necesidades de nuestros clientes con agilidad y seguridad.',
          feature1: 'Red Ampliada:',
          feature1Description: 'Cobertura nacional con servicios de entrega rápida.',
          feature2: 'Flota Propia:',
          feature2Description: 'Contamos con flota propia, lo que garantiza mayor control, agilidad y seguridad en las entregas.'
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
          number: '26',
          label: 'Estados Atendidos y DF'
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
