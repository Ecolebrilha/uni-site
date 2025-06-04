import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    about: {
      heroTitle: 'Nossa História',
      heroSubtitle: 'Conheça a Uni Hospitalar',
      introTitle: 'Sobre Nós',
      introText: 'A Uni Hospitalar é referência nacional na distribuição de medicamentos e produtos para saúde, combinando excelência operacional com um profundo compromisso com o bem-estar dos brasileiros. Nossa jornada de quase duas décadas é marcada por inovação, qualidade e relacionamentos duradouros com clientes e parceiros.',
      whoWeAreTitle: 'Quem Somos',
      whoWeAreText: 'Há 19 anos no mercado, a Uni Hospitalar vem conquistando espaço na distribuição de medicamentos de forma sólida e consolidada, comprometida com a saúde e bem-estar da sociedade. Fornecemos produtos de alta qualidade e serviços excepcionais, sempre com uma visão aprofundada do mercado farmacêutico.',
      missionTitle: 'Missão',
      missionText: 'Ser uma empresa sólida e confiável na distribuição de medicamentos, surpreendendo os clientes com a melhor prestação de serviços, e fornecer soluções de saúde acessíveis, inovadoras e de alta qualidade. Contribuímos para o bem-estar e qualidade de vida das pessoas, sempre com ética, responsabilidade e compromisso com nossos valores.',
      visionTitle: 'Visão',
      visionText: 'Ser reconhecida como a principal distribuidora de medicamentos do Brasil, expandindo nossas operações para novas regiões e setores, sempre buscando excelência em tudo o que fazemos, mantendo a transparência e respeito com as relações humanas.',
      valuesTitle: 'Valores',
      valuesText: 'Nosso trabalho é guiado pelos seguintes valores fundamentais:',
      values: [
        'Ética',
        'Qualidade',
        'Inovação',
        'Responsabilidade',
        'Compromisso',
        'Transparência',
        'Agilidade',
        'Objetividade',
        'Integridade'
      ],
      stats: {
        experience: {
          number: '19',
          label: 'Anos de Experiência'
        },
        clients: {
          number: '1000+',
          label: 'Clientes Satisfeitos'
        },
        products: {
          number: '5000+',
          label: 'Produtos Distribuídos'
        },
        states: {
          number: '27',
          label: 'Estados Atendidos'
        }
      },
      differentials: {
        title: 'Nossos Diferenciais',
        items: [
          {
            title: 'Qualidade Premium',
            description: 'Produtos com certificação internacional e rigoroso controle de qualidade'
          },
          {
            title: 'Entrega Rápida',
            description: 'Logística otimizada para atender suas necessidades com agilidade'
          },
          {
            title: 'Suporte Especializado',
            description: 'Equipe técnica qualificada para orientação e suporte completo'
          },
          {
            title: 'Confiabilidade',
            description: 'Parceria sólida construída com base na confiança e transparência'
          },
          {
            title: 'Soluções Personalizadas',
            description: 'Adaptamos nossos serviços às necessidades específicas de cada cliente'
          },
          {
            title: 'Inovação Constante',
            description: 'Sempre em busca das melhores tecnologias e práticas do mercado'
          }
        ]
      },
      keyPoints: {
        tradition: {
          title: 'Tradição e Confiança',
          description: 'Anos de experiência no mercado hospitalar'
        },
        team: {
          title: 'Equipe Especializada',
          description: 'Profissionais qualificados e dedicados'
        },
        reach: {
          title: 'Alcance Nacional',
          description: 'Atendimento em todo território brasileiro'
        }
      },
      badges: {
        excellence: 'Excelência em Saúde'
      },
      buttons: {
        knowMore: 'Conheça Mais'
      },
      ctaTitle: 'Faça parte da nossa história',
      ctaText: 'Entre em contato conosco e descubra como podemos trabalhar juntos.',
      ctaButton: 'Fale Conosco'
    }
  },
  en: {
    about: {
      heroTitle: 'Our History',
      heroSubtitle: 'Get to know Uni Hospitalar',
      introTitle: 'About Us',
      introText: 'Uni Hospitalar is a national reference in the distribution of medicines and health products, combining operational excellence with a deep commitment to the well-being of Brazilians. Our journey of almost two decades is marked by innovation, quality and lasting relationships with clients and partners.',
      whoWeAreTitle: 'Who We Are',
      whoWeAreText: 'For 19 years in the market, Uni Hospitalar has been gaining space in drug distribution in a solid and consolidated way, committed to the health and well-being of society. We provide high-quality products and exceptional services, always with an in-depth view of the pharmaceutical market.',
      missionTitle: 'Mission',
      missionText: 'To be a solid and reliable company in drug distribution, surprising customers with the best service provision, and providing accessible, innovative and high-quality health solutions. We contribute to people\'s well-being and quality of life, always with ethics, responsibility and commitment to our values.',
      visionTitle: 'Vision',
      visionText: 'To be recognized as the main drug distributor in Brazil, expanding our operations to new regions and sectors, always seeking excellence in everything we do, maintaining transparency and respect in human relations.',
      valuesTitle: 'Values',
      valuesText: 'Our work is guided by the following fundamental values:',
      values: [
        'Ethics',
        'Quality',
        'Innovation',
        'Responsibility',
        'Commitment',
        'Transparency',
        'Agility',
        'Objectivity',
        'Integrity'
      ],
      stats: {
        experience: {
          number: '19',
          label: 'Years of Experience'
        },
        clients: {
          number: '1000+',
          label: 'Satisfied Clients'
        },
        products: {
          number: '5000+',
          label: 'Distributed Products'
        },
        states: {
          number: '27',
          label: 'States Served'
        }
      },
      differentials: {
        title: 'Our Differentials',
        items: [
          {
            title: 'Premium Quality',
            description: 'Products with international certification and rigorous quality control'
          },
          {
            title: 'Fast Delivery',
            description: 'Optimized logistics to meet your needs with agility'
          },
          {
            title: 'Specialized Support',
            description: 'Qualified technical team for guidance and complete support'
          },
          {
            title: 'Reliability',
            description: 'Solid partnership built on trust and transparency'
          },
          {
            title: 'Customized Solutions',
            description: 'We adapt our services to the specific needs of each client'
          },
          {
            title: 'Constant Innovation',
            description: 'Always seeking the best technologies and market practices'
          }
        ]
      },
      keyPoints: {
        tradition: {
          title: 'Tradition and Trust',
          description: 'Years of experience in the hospital market'
        },
        team: {
          title: 'Specialized Team',
          description: 'Qualified and dedicated professionals'
        },
        reach: {
          title: 'National Reach',
          description: 'Service throughout Brazilian territory'
        }
      },
      badges: {
        excellence: 'Excellence in Health'
      },
      buttons: {
        knowMore: 'Learn More'
      },
      ctaTitle: 'Be part of our story',
      ctaText: 'Contact us and discover how we can work together.',
      ctaButton: 'Contact Us'
    }
  },
  es: {
    about: {
      heroTitle: 'Nuestra Historia',
      heroSubtitle: 'Conozca Uni Hospitalar',
      introTitle: 'Sobre Nosotros',
      introText: 'Uni Hospitalar es una referencia nacional en la distribución de medicamentos y productos para la salud, combinando excelencia operacional con un profundo compromiso con el bienestar de los brasileños. Nuestro viaje de casi dos décadas está marcado por la innovación, calidad y relaciones duraderas con clientes y socios.',
      whoWeAreTitle: 'Quiénes Somos',
      whoWeAreText: 'Hace 19 años en el mercado, Uni Hospitalar viene conquistando espacio en la distribución de medicamentos de forma sólida y consolidada, comprometida con la salud y bienestar de la sociedad. Proporcionamos productos de alta calidad y servicios excepcionales, siempre con una visión profunda del mercado farmacéutico.',
      missionTitle: 'Misión',
      missionText: 'Ser una empresa sólida y confiable en la distribución de medicamentos, sorprendiendo a los clientes con la mejor prestación de servicios, y proporcionar soluciones de salud accesibles, innovadoras y de alta calidad. Contribuimos al bienestar y calidad de vida de las personas, siempre con ética, responsabilidad y compromiso con nuestros valores.',
      visionTitle: 'Visión',
      visionText: 'Ser reconocida como la principal distribuidora de medicamentos de Brasil, expandiendo nuestras operaciones a nuevas regiones y sectores, siempre buscando excelencia en todo lo que hacemos, manteniendo la transparencia y respeto en las relaciones humanas.',
      valuesTitle: 'Valores',
      valuesText: 'Nuestro trabajo está guiado por los siguientes valores fundamentales:',
      values: [
        'Ética',
        'Calidad',
        'Innovación',
        'Responsabilidad',
        'Compromiso',
        'Transparencia',
        'Agilidad',
        'Objetividad',
        'Integridad'
      ],
      stats: {
        experience: {
          number: '19',
          label: 'Años de Experiencia'
        },
        clients: {
          number: '1000+',
          label: 'Clientes Satisfechos'
        },
        products: {
          number: '5000+',
          label: 'Productos Distribuidos'
        },
        states: {
          number: '27',
          label: 'Estados Atendidos'
        }
      },
      differentials: {
        title: 'Nuestros Diferenciales',
        items: [
          {
            title: 'Calidad Premium',
            description: 'Productos con certificación internacional y riguroso control de calidad'
          },
          {
            title: 'Entrega Rápida',
            description: 'Logística optimizada para atender sus necesidades con agilidad'
          },
          {
            title: 'Soporte Especializado',
            description: 'Equipo técnico calificado para orientación y soporte completo'
          },
          {
            title: 'Confiabilidad',
            description: 'Asociación sólida construida sobre la base de confianza y transparencia'
          },
          {
            title: 'Soluciones Personalizadas',
            description: 'Adaptamos nuestros servicios a las necesidades específicas de cada cliente'
          },
          {
            title: 'Innovación Constante',
            description: 'Siempre en busca de las mejores tecnologías y prácticas del mercado'
          }
        ]
      },
      keyPoints: {
        tradition: {
          title: 'Tradición y Confianza',
          description: 'Años de experiencia en el mercado hospitalario'
        },
        team: {
          title: 'Equipo Especializado',
          description: 'Profesionales calificados y dedicados'
        },
        reach: {
          title: 'Alcance Nacional',
          description: 'Atención en todo el territorio brasileño'
        }
      },
      badges: {
        excellence: 'Excelencia en Salud'
      },
      buttons: {
        knowMore: 'Conoce Más'
      },
      ctaTitle: 'Forma parte de nuestra historia',
      ctaText: 'Contáctanos y descubre cómo podemos trabajar juntos.',
      ctaButton: 'Contáctanos'
    }
  }
})

export function useAboutTranslation() {
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
