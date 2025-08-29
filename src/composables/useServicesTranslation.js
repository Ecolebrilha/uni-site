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
      mainServiceText: 'A Uni Hospitalar reúne eficiência, qualidade e atendimento humano para entregar saúde com confiança. Nossas unidades de negócio <strong>— Medicamentos Oncológicos, Hospitalares e Colírios —</strong> refletem nosso compromisso em oferecer soluções completas para diferentes demandas do setor.',
      privateSegmentTitle: 'Segmento Privado',
      privateSegmentText: 'Nossa estrutura de vendas combina a força de um <strong>telemarketing interno</strong> com a atuação estratégica de <strong>consultores externos</strong>. Essa integração garante não apenas agilidade, mas também um atendimento humano e especializado para superar as expectativas dos nossos clientes.',
      privateFeatures: {
        feature1: 'Atendimento personalizado',
        feature2: 'Consultoria especializada',
        feature3: 'Respostas rápidas e eficazes',
        feature4: 'Equipe dedicada'
      },
      publicSegmentTitle: 'Segmento Público',
      publicSegmentText: 'Nosso segmento público é conduzido por um <strong>Setor de Licitações</strong> formado por profissionais qualificados, responsáveis por analisar e acompanhar editais de forma criteriosa, garantindo a conformidade legal e a participação eficiente nos processos oficiais. Essa atuação é fortalecida por uma equipe preparada para atender às exigências normativas e assegurar qualidade em cada etapa do processo.',
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
      mainServiceText: 'Uni Hospitalar combines efficiency, quality, and humane service to deliver healthcare with confidence. Our business units <strong>— Oncology Medications, Hospital Medications, and Eye Drops —</strong> reflect our commitment to offering comprehensive solutions for a variety of healthcare needs.',
      privateSegmentTitle: 'Private Segment',
      privateSegmentText: 'Our sales structure combines the strength of an <strong>internal telemarketing team</strong> with the strategic work of <strong>external consultants</strong>. This integration ensures not only agility but also a humanized and specialized service that exceeds our customers expectations.',
      privateFeatures: {
        feature1: 'Personalized service',
        feature2: 'Specialized consulting',
        feature3: 'Quick and effective responses',
        feature4: 'Dedicated team'
      },
      publicSegmentTitle: 'Public Segment',
      publicSegmentText: 'Our public sector is led by a <strong>Bidding Department</strong> comprised of qualified professionals responsible for carefully analyzing and monitoring bidding documents, ensuring legal compliance and efficient participation in official processes. This work is reinforced by a team prepared to meet regulatory requirements and ensure quality at every stage of the process.',
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
      mainServiceText: 'Uni Hospitalar combina eficiencia, calidad y un servicio humano para brindar atención médica con confianza. Nuestras unidades de negocio <strong>— Medicamentos Oncológicos, Medicamentos Hospitalarios y Gotas Oftálmicas —</strong> reflejan nuestro compromiso de ofrecer soluciones integrales para diversas necesidades de atención médica.',
      privateSegmentTitle: 'Segmento Privado',
      privateSegmentText: 'Nuestra estructura de ventas combina la fuerza de un <strong>equipo interno de telemercadeo</strong> con la actuación estratégica de <strong>consultores externos</strong>. Esta integración garantiza no solo agilidad, sino también una atención humana y especializada que supera las expectativas de nuestros clientes.',
      privateFeatures: {
        feature1: 'Atención personalizada',
        feature2: 'Consultoría especializada',
        feature3: 'Respuestas rápidas y eficaces',
        feature4: 'Equipo dedicado'
      },
      publicSegmentTitle: 'Segmento Público',
      publicSegmentText: 'Nuestro sector público está liderado por un <strong>Departamento de Licitaciones</strong>, compuesto por profesionales cualificados, responsables de analizar y supervisar minuciosamente los pliegos de licitación, garantizando el cumplimiento legal y una participación eficiente en los procesos oficiales. Esta labor se ve reforzada por un equipo preparado para cumplir con los requisitos regulatorios y garantizar la calidad en cada etapa del proceso.',
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
