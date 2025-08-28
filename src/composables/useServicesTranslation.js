import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    services: {
      heroTitle: 'Nossos Serviços',
      heroSubtitle: 'Soluções completas para o setor de saúde',
      introTitle: 'Como podemos ajudar',
      introText: 'A Uni Hospitalar oferece soluções integradas para o setor de saúde, com foco em eficiência, qualidade e atendimento personalizado. Nossos serviços são projetados para atender às necessidades específicas de cada segmento do mercado.',
      mainServiceTitle: 'Nossos Serviços',
      mainServiceText: 'A Uni Hospitalar busca atender de forma eficiente os segmentos públicos e privados, através de profissionais capacitados para interpretar o mercado e assim dar respostas compatíveis e definitivas para o bom atendimento da cadeia de distribuição.',
      privateSegmentTitle: 'Segmento Privado',
      privateSegmentText: 'Formado internamente por um telemarketing que funciona alinhado com uma equipe de consultores externos, visando sempre dar respostas rápidas e eficazes, a fim de atender o nosso cliente da melhor forma possível.',
      privateFeatures: {
        feature1: 'Atendimento personalizado',
        feature2: 'Consultoria especializada',
        feature3: 'Respostas rápidas e eficazes',
        feature4: 'Equipe dedicada'
      },
      publicSegmentTitle: 'Segmento Público',
      publicSegmentText: 'Formado internamente por um Setor de Licitações, composto por profissionais capacitados e orientados para o mercado, buscando informações através da captação de editais e outras formas a fim de gerar novos negócios. Este setor se completa através da presença de consultores externos que visitam sistematicamente todos os órgãos públicos que trabalhamos.',
      publicFeatures: {
        feature1: 'Especialistas em licitações',
        feature2: 'Captação de editais',
        feature3: 'Consultores externos dedicados',
        feature4: 'Acompanhamento sistemático'
      },
      processTitle: 'Nosso Processo',
      processIntro: 'Conheça como trabalhamos para garantir a excelência em nossos serviços',
      processSteps: {
        step1: {
          title: 'Equipe de vendas de alta performance',
          description: 'Profissionais especializados e antenados nas maiores tendências do mercado.'
        },
        step2: {
          title: 'Logística otimizada',
          description: 'Agilidade e organização para garantir rapidez e qualidade.'
        },
        step3: {
          title: 'Controle de qualidade rigoroso',
          description: 'Inspeção detalhada de todos os produtos para assegurar a conformidade com a legislação sanitária.'
        },
        step4: {
          title: 'Suporte pós-venda especializado',
          description: 'Acompanhamento contínuo para garantir a satisfação total do cliente.'
        }
      },
      benefitsTitle: 'Benefícios dos Nossos Serviços',
      benefits: {
        efficiency: {
          title: 'Eficiência Operacional',
          description: 'Otimizamos processos para garantir maior eficiência e redução de custos.'
        },
        security: {
          title: 'Segurança e Conformidade',
          description: 'Garantimos que todos os processos estejam em conformidade com as normas regulatórias.'
        },
        partnerships: {
          title: 'Parcerias Estratégicas',
          description: 'Desenvolvemos relacionamentos de longo prazo com nossos clientes e fornecedores.'
        },
        agility: {
          title: 'Agilidade nas Respostas',
          description: 'Oferecemos soluções rápidas e eficazes para as demandas do mercado.'
        }
      },
      ctaTitle: 'Vamos trabalhar juntos?',
      ctaText: 'Entre em contato conosco para descobrir como nossos serviços podem impulsionar seu negócio.',
      ctaButton: 'Solicite uma Proposta'
    }
  },
  en: {
    services: {
      heroTitle: 'Our Services',
      heroSubtitle: 'Complete solutions for the healthcare sector',
      introTitle: 'How we can help',
      introText: 'Uni Hospitalar offers integrated solutions for the healthcare sector, focusing on efficiency, quality and personalized service. Our services are designed to meet the specific needs of each market segment.',
      mainServiceTitle: 'Our Services',
      mainServiceText: 'Uni Hospitalar seeks to efficiently serve public and private segments, through qualified professionals to interpret the market and thus provide compatible and definitive responses for the good service of the distribution chain.',
      privateSegmentTitle: 'Private Segment',
      privateSegmentText: 'Internally formed by telemarketing that works aligned with a team of external consultants, always aiming to provide quick and effective responses, in order to serve our client in the best possible way.',
      privateFeatures: {
        feature1: 'Personalized service',
        feature2: 'Specialized consulting',
        feature3: 'Quick and effective responses',
        feature4: 'Dedicated team'
      },
      publicSegmentTitle: 'Public Segment',
      publicSegmentText: 'Internally formed by a Bidding Sector, composed of qualified professionals oriented to the market, seeking information through the capture of notices and other forms in order to generate new business. This sector is completed through the presence of external consultants who systematically visit all public agencies we work with.',
      publicFeatures: {
        feature1: 'Bidding specialists',
        feature2: 'Notice capture',
        feature3: 'Dedicated external consultants',
        feature4: 'Systematic monitoring'
      },
      processTitle: 'Our Process',
      processIntro: 'Learn how we work to ensure excellence in our services',
      processSteps: {
        step1: {
          title: 'High-performance sales team',
          description: 'Specialized professionals who are up to date with the biggest market trends.'
        },
        step2: {
          title: 'Optimized logistics',
          description: 'Agility and organization to ensure speed and quality.'
        },
        step3: {
          title: 'Rigorous quality control',
          description: 'Detailed inspection of all products to ensure compliance with health legislation.'
        },
        step4: {
          title: 'Specialized after-sales support',
          description: 'Continuous monitoring to ensure total customer satisfaction.'
        }
      },
      benefitsTitle: 'Benefits of Our Services',
      benefits: {
        efficiency: {
          title: 'Operational Efficiency',
          description: 'We optimize processes to ensure greater efficiency and cost reduction.'
        },
        security: {
          title: 'Security and Compliance',
          description: 'We ensure that all processes are in compliance with regulatory standards.'
        },
        partnerships: {
          title: 'Strategic Partnerships',
          description: 'We develop long-term relationships with our clients and suppliers.'
        },
        agility: {
          title: 'Response Agility',
          description: 'We offer quick and effective solutions for market demands.'
        }
      },
      ctaTitle: 'Shall we work together?',
      ctaText: 'Contact us to discover how our services can boost your business.',
      ctaButton: 'Request a Proposal'
    }
  },
  es: {
    services: {
      heroTitle: 'Nuestros Servicios',
      heroSubtitle: 'Soluciones completas para el sector sanitario',
      introTitle: 'Cómo podemos ayudar',
      introText: 'Uni Hospitalar ofrece soluciones integradas para el sector sanitario, con enfoque en eficiencia, calidad y atención personalizada. Nuestros servicios están diseñados para satisfacer las necesidades específicas de cada segmento del mercado.',
      mainServiceTitle: 'Nuestros Servicios',
      mainServiceText: 'Uni Hospitalar busca atender de manera eficiente los segmentos públicos y privados, a través de profesionales capacitados para interpretar el mercado y así dar respuestas compatibles y definitivas para el buen servicio de la cadena de distribución.',
      privateSegmentTitle: 'Segmento Privado',
      privateSegmentText: 'Formado internamente por un telemarketing que funciona alineado con un equipo de consultores externos, buscando siempre dar respuestas rápidas y eficaces, para atender a nuestro cliente de la mejor manera posible.',
      privateFeatures: {
        feature1: 'Atención personalizada',
        feature2: 'Consultoría especializada',
        feature3: 'Respuestas rápidas y eficaces',
        feature4: 'Equipo dedicado'
      },
      publicSegmentTitle: 'Segmento Público',
      publicSegmentText: 'Formado internamente por un Sector de Licitaciones, compuesto por profesionales capacitados y orientados al mercado, buscando información a través de la captación de edictos y otras formas para generar nuevos negocios. Este sector se completa a través de la presencia de consultores externos que visitan sistemáticamente todos los órganos públicos con los que trabajamos.',
      publicFeatures: {
        feature1: 'Especialistas en licitaciones',
        feature2: 'Captación de edictos',
        feature3: 'Consultores externos dedicados',
        feature4: 'Seguimiento sistemático'
      },
      processTitle: 'Nuestro Proceso',
      processIntro: 'Conozca cómo trabajamos para garantizar la excelencia en nuestros servicios',
      processSteps: {
        step1: {
          title: 'Equipo de ventas de alto rendimiento',
          description: 'Profesionales especializados y actualizados con las mayores tendencias del mercado.'
        },
        step2: {
          title: 'Logística optimizada',
          description: 'Agilidad y organización para garantizar rapidez y calidad.'
        },
        step3: {
          title: 'Control de calidad riguroso',
          description: 'Inspección detallada de todos los productos para garantizar el cumplimiento de la legislación sanitaria.'
        },
        step4: {
          title: 'Soporte postventa especializado',
          description: 'Seguimiento continuo para garantizar la satisfacción total del cliente.'
        }
      },
      benefitsTitle: 'Beneficios de Nuestros Servicios',
      benefits: {
        efficiency: {
          title: 'Eficiencia Operacional',
          description: 'Optimizamos procesos para garantizar mayor eficiencia y reducción de costos.'
        },
        security: {
          title: 'Seguridad y Cumplimiento',
          description: 'Garantizamos que todos los procesos estén en conformidad con las normas regulatorias.'
        },
        partnerships: {
          title: 'Alianzas Estratégicas',
          description: 'Desarrollamos relaciones a largo plazo con nuestros clientes y proveedores.'
        },
        agility: {
          title: 'Agilidad en las Respuestas',
          description: 'Ofrecemos soluciones rápidas y eficaces para las demandas del mercado.'
        }
      },
      ctaTitle: '¿Trabajemos juntos?',
      ctaText: 'Contáctanos para descubrir cómo nuestros servicios pueden impulsar tu negocio.',
      ctaButton: 'Solicitar una Propuesta'
    }
  }
})

export function useServicesTranslation() {
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
