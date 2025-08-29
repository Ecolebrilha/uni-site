import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    about: {
      heroTitle: 'Nossa História',
      heroSubtitle: 'Conheça a Uni Hospitalar',
      introTitle: 'Sobre Nós',
      introText: 'A Uni Hospitalar é referência nacional na distribuição de medicamentos e produtos para saúde, combinando excelência operacional com um profundo compromisso com a saúde dos brasileiros. Nossa jornada de mais de duas décadas é marcada por inovação, qualidade e relacionamentos duradouros com clientes e parceiros.',
      whoWeAreTitle: 'Quem Somos',
      whoWeAreText: 'Há mais de 20 anos no mercado, a Uni Hospitalar se destaca na distribuição de medicamentos, com solidez e confiança. Nosso compromisso vai além da entrega: unimos ética, integridade, inovação e qualidade para fortalecer parcerias e contribuir com a saúde e o bem-estar da sociedade. Oferecemos produtos seguros e de alto padrão, apoiados por uma visão estratégica e aprofundada do mercado farmacêutico.',
      missionTitle: 'Missão',
      missionText: 'Tornar medicamentos acessíveis em todo o Brasil com integridade, agilidade e cuidado humano, atuando como ponte entre qualidade e pessoas e combinando inovação operacional com um atendimento caloroso que inspira confiança em clientes, parceiros e colaboradores.',
      visionTitle: 'Visão',
      visionText: 'Ser reconhecida como a distribuidora de medicamentos que faz a diferença no Norte e Nordeste do Brasil, guiada por ética, integridade, inovação e excelência, crescendo de forma responsável e cuidando de cada pessoa que toca nossa jornada.',
      valuesTitle: 'No que acreditamos',
      valuesText: 'Nosso compromisso é promover a saúde com ética e integridade, inspirando confiança por meio da inovação e da qualidade.',
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
      introText: 'Uni Hospitalar is a national leader in the distribution of medicines and healthcare products, combining operational excellence with a deep commitment to the health of Brazilians. Our journey spanning more than two decades is marked by innovation, quality, and strong relationships with customers and partners.',
      whoWeAreTitle: 'Who We Are',
      whoWeAreText: 'For over 20 years in the market, Uni Hospitalar has stood out in the distribution of pharmaceuticals, with strength and reliability. Our commitment goes beyond delivery: we combine ethics, integrity, innovation, and quality to strengthen partnerships and contribute to the health and well-being of society. We offer safe, high-quality products, backed by a strategic and in-depth understanding of the pharmaceutical market.',
      missionTitle: 'Mission',
      missionText: 'To make medications accessible throughout Brazil with integrity, agility, and human care, acting as a bridge between quality and people, and combining operational innovation with warm service that inspires trust in clients, partners, and collaborators.',
      visionTitle: 'Vision',
      visionText: 'To be recognized as the pharmaceutical distributor that makes a difference in the North and Northeast of Brazil, guided by ethics, integrity, innovation, and excellence, growing responsibly and caring for every person who is part of our journey.',
      valuesTitle: 'What we believe',
      valuesText: 'Our commitment is to promote health with ethics and integrity, inspiring trust through innovation and quality.',
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
      introText: 'Uni Hospitalar es líder nacional en la distribución de medicamentos y productos sanitarios, combinando la excelencia operativa con un profundo compromiso con la salud de los brasileños. Nuestra trayectoria de más de dos décadas se caracteriza por la innovación, la calidad y la sólida relación con clientes y socios.',
      whoWeAreTitle: 'Quiénes Somos',
      whoWeAreText: 'Con más de 20 años en el mercado, Uni Hospitalar se destaca en la distribución de medicamentos, con solidez y confianza. Nuestro compromiso va más allá de la entrega: unimos ética, integridad, innovación y calidad para fortalecer alianzas y contribuir con la salud y el bienestar de la sociedad. Ofrecemos productos seguros y de alto estándar, respaldados por una visión estratégica y profunda del mercado farmacéutico.',
      missionTitle: 'Misión',
      missionText: 'Hacer que los medicamentos sean accesibles en todo Brasil con integridad, agilidad y cuidado humano, actuando como un puente entre la calidad y las personas, y combinando innovación operativa con una atención cálida que inspire confianza en clientes, socios y colaboradores.',
      visionTitle: 'Visión',
      visionText: 'Ser reconocida como la distribuidora de medicamentos que marca la diferencia en el Norte y Nordeste de Brasil, guiada por la ética, la integridad, la innovación y la excelencia, creciendo de forma responsable y cuidando a cada persona que forma parte de nuestro camino.',
      valuesTitle: 'Lo que creemos',
      valuesText: 'Nuestro compromiso es promover la salud con ética e integridad, inspirando confianza a través de la innovación y la calidad.',
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
