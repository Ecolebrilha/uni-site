import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    services: {
      heroTitle: 'Nossa Estrutura',
      heroSubtitle: 'Soluções completas para o setor de saúde',
      introTitle: 'Como podemos ajudar',
      introText: 'A Uni Hospitalar oferece soluções integradas para o setor de saúde, com foco em eficiência, qualidade e atendimento personalizado. Nossos serviços são projetados para atender às necessidades específicas de cada segmento do mercado.',
      mainServiceTitle: 'Nosso Foco',
      mainServiceText: 'Combinando eficiência, qualidade e um atendimento verdadeiramente humano, a Uni Hospitalar se consolida como parceira estratégica nos segmentos público e privado. Nossa atuação em Medicamentos Oncológicos e Hospitalares reflete a dedicação em entregar soluções completas, que geram impacto real no setor.',
      privateSegmentTitle: 'Segmento Privado',
      privateSegmentText: 'Nossa estrutura combina tecnologia de ponta e automações inteligentes à dedicação de um time especializado. Esse equilíbrio garante <strong>respostas rápidas e eficazes</strong>, assegurando uma experiência completa e de alta qualidade, com o <strong>cuidado humano</strong> como nosso principal diferencial.',
      privateFeatures: {
        feature1: 'Atendimento personalizado',
        feature2: 'Consultoria especializada',
        feature3: 'Respostas rápidas e eficazes',
        feature4: 'Equipe dedicada'
      },
      publicSegmentTitle: 'Segmento Público',
      publicSegmentText: 'O Setor de Licitações da Uni Hospitalar conta com uma equipe robusta e altamente qualificada, sempre atualizada com as tendências do mercado e em total conformidade com a legislação vigente. Aliando expertise técnica a tecnologias de ponta, conduzimos os processos licitatórios com agilidade, precisão e transparência. Essa integração garante eficiência em cada etapa e reafirma nosso compromisso em entregar soluções que geram valor para o mercado.',
      publicFeatures: {
        feature1: 'Especialização em processos licitatórios',
        feature2: 'Monitoramento e análise de editais',
        feature3: 'Equipe técnica capacitada',
        feature4: 'Atuação em conformidade com a legislação'
      },
      processTitle: 'Nosso Processo',
      processIntro: 'Conheça como trabalhamos para garantir a excelência em nossos serviços',
      processSteps: {
        step1: {
          title: 'Equipe de vendas de alta performance',
          description: 'Profissionais especializados e conectados nas maiores tendências do mercado.'
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
      benefitsTitle: 'Pontos Fortes',
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
      heroTitle: 'Structure Uni Hospitalar',
      heroSubtitle: 'Complete solutions for the healthcare sector',
      introTitle: 'How we can help',
      introText: 'Uni Hospitalar offers integrated solutions for the healthcare sector, focusing on efficiency, quality and personalized service. Our services are designed to meet the specific needs of each market segment.',
      mainServiceTitle: 'Our Focus',
      mainServiceText: 'Combining efficiency, quality, and truly humane service, Uni Hospitalar has established itself as a strategic partner in both the public and private sectors. Our work in Oncology and Hospital Medications reflects our dedication to delivering comprehensive solutions that generate a real impact on the sector.',
      privateSegmentTitle: 'Private Segment',
      privateSegmentText: 'Our structure combines cutting-edge technology and smart automation with the dedication of a specialized team. This balance ensures <strong>fast and effective responses</strong>, delivering a complete, high-quality experience with <strong>human care</strong> as our main differentiator.',
      privateFeatures: {
        feature1: 'Personalized service',
        feature2: 'Specialized consulting',
        feature3: 'Quick and effective responses',
        feature4: 'Dedicated team'
      },
      publicSegmentTitle: 'Public Segment',
      publicSegmentText: 'Uni Hospitalar\'s Bidding Department boasts a robust and highly qualified team, always up-to-date with market trends and fully compliant with current legislation. Combining technical expertise with cutting-edge technologies, we conduct bidding processes with agility, precision, and transparency. This integration ensures efficiency at every stage and reaffirms our commitment to delivering solutions that generate value for the market.',
      publicFeatures: {
        feature1: 'Specialization in bidding processes',
        feature2: 'Monitoring and analysis of notices',
        feature3: 'Qualified technical team',
        feature4: 'Acting in accordance with legislation'
      },
      processTitle: 'Our Process',
      processIntro: 'Learn how we work to ensure excellence in our services',
      processSteps: {
        step1: {
          title: 'High-performance sales team',
          description: 'Specialized professionals connected to the biggest market trends.'
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
      benefitsTitle: 'Key Strengths',
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
      heroTitle: 'Estructura Uni Hospitalar',
      heroSubtitle: 'Soluciones completas para el sector sanitario',
      introTitle: 'Cómo podemos ayudar',
      introText: 'Uni Hospitalar ofrece soluciones integradas para el sector sanitario, con enfoque en eficiencia, calidad y atención personalizada. Nuestros servicios están diseñados para satisfacer las necesidades específicas de cada segmento del mercado.',
      mainServiceTitle: 'Nuestro enfoque',
      mainServiceText: 'Combinando eficiencia, calidad y un servicio verdaderamente humano, Uni Hospitalar se ha consolidado como un socio estratégico tanto en el sector público como en el privado. Nuestra labor en Oncología y Medicamentos Hospitalarios refleja nuestra dedicación a brindar soluciones integrales que generen un impacto real en el sector.',
      privateSegmentTitle: 'Segmento Privado',
      privateSegmentText: 'Nuestra estructura combina tecnología de punta y automatizaciones inteligentes con la dedicación de un equipo especializado. Este equilibrio garantiza <strong>respuestas rápidas y eficaces</strong>, asegurando una experiencia completa y de alta calidad, con el <strong>cuidado humano</strong> como nuestro principal diferencial.',
      privateFeatures: {
        feature1: 'Atención personalizada',
        feature2: 'Consultoría especializada',
        feature3: 'Respuestas rápidas y eficaces',
        feature4: 'Equipo dedicado'
      },
      publicSegmentTitle: 'Segmento Público',
      publicSegmentText: 'El Departamento de Licitaciones de Uni Hospitalar cuenta con un equipo sólido y altamente cualificado, siempre al día con las tendencias del mercado y en total cumplimiento de la legislación vigente. Combinando experiencia técnica con tecnologías de vanguardia, llevamos a cabo los procesos de licitación con agilidad, precisión y transparencia. Esta integración garantiza la eficiencia en cada etapa y reafirma nuestro compromiso de ofrecer soluciones que generen valor para el mercado.',
      publicFeatures: {
        feature1: 'Especialización en procesos de licitación',
        feature2: 'Seguimiento y análisis de avisos',
        feature3: 'Equipo técnico cualificado',
        feature4: 'Actuar de conformidad con la legislación'
      },
      processTitle: 'Nuestro Proceso',
      processIntro: 'Conozca cómo trabajamos para garantizar la excelencia en nuestros servicios',
      processSteps: {
        step1: {
          title: 'Equipo de ventas de alto rendimiento',
          description: 'Profesionales especializados conectados con las mayores tendencias del mercado.'
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
      benefitsTitle: 'Aspectos Fuertes',
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
