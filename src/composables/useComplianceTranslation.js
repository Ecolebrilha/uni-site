import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    compliance: {
      heroTitle: 'Compliance',
      heroSubtitle: 'Integridade e Transparência',
      confidentialChannel: {
        title: 'Canal Confidencial',
        subtitle: 'Relatos seguros e sigilosos para questões de compliance e ética',
        makeReport: {
          title: 'Fazer um Relato',
          description: 'Reporte violações, irregularidades ou questões éticas de forma segura e confidencial.',
          button: 'Fazer Relato Agora'
        },
        learnMore: {
          title: 'Saiba Mais',
          description: 'Conheça como funciona nosso canal confidencial e suas garantias de proteção.',
          button: 'Conhecer o Canal'
        },
        features: {
          secure: 'Totalmente Seguro',
          anonymous: 'Relatos Anônimos',
          confidential: 'Confidencial'
        },
        guarantee: 'Todas as informações são tratadas com máxima confidencialidade e garantimos proteção contra qualquer forma de retaliação.'
      },    
      overviewTitle: 'Compliance e Código de Conduta',
      overviewText: 'O nosso compromisso é com a integridade, transparência e conformidade. Explore o Código de Conduta que guia as práticas éticas da Uni Hospitalar e garante o respeito às normas e regulamentos aplicáveis.',
      values: {
        integrity: {
          title: 'Integridade',
          description: 'Atuamos com honestidade e ética em todas as nossas relações comerciais e profissionais, mantendo sempre os mais altos padrões.'
        },
        transparency: {
          title: 'Transparência',
          description: 'Mantemos uma comunicação clara e aberta com todos os nossos stakeholders, promovendo confiança e credibilidade mútua sempre.'
        },
        compliance: {
          title: 'Conformidade',
          description: 'Seguimos rigorosamente todas as leis, regulamentos e normas aplicáveis ao nosso setor farmacêutico e hospitalar com excelência.'
        }
      },
      conductTitle: 'Nosso Código de Conduta',
      conductSectionTitle: 'Diretrizes Éticas e Comportamentais',
      conductText: 'Nosso Código de Conduta é um guia para todos os colaboradores, parceiros e fornecedores, assegurando um comportamento ético em todas as nossas atividades.',
      conductLinks: {
        ethics: 'Conduta Ética e Integridade',
        socialResponsibility: 'Responsabilidade Social e Sustentabilidade',
        humanRights: 'Respeito aos Direitos Humanos'
      },
      policiesTitle: 'Políticas e Regulamentos',
      policiesIntro: 'Acesse nossas políticas que reforçam o compromisso com a conformidade e a ética.',
      policies: {
        regularTraining: {
          title: 'Treinamentos',
          description: 'Promovemos capacitação contínua de nossos colaboradores em práticas éticas e conformidade regulatória.'
        },
        antiBribery: {
          title: 'Práticas Antissuborno',
          description: 'Mantemos tolerância zero contra qualquer forma de corrupção ou suborno em nossas operações.'
        },
        sectorCompliance: {
          title: 'Conformidade com Normas Setoriais',
          description: 'Seguimos rigorosamente todas as normas e regulamentações específicas do setor de saúde.'
        }
      },
      correctiveTitle: 'Implementação e Monitoramento',
      correctiveSectionTitle: 'Como Aplicamos Nossas Políticas',
      correctiveText: 'Conheça como implementamos e monitoramos nossas políticas de compliance na prática, garantindo efetividade e transparência em todos os processos.',
      correctiveLinks: {
        regularTraining: 'Treinamentos',
        antiBribery: 'Monitoramento Antissuborno',
        sectorCompliance: 'Auditoria de Normas Setoriais'
      },
      correctiveButton: 'Entre em Contato',
      learnMore: 'Saiba mais'
    }
  },
  en: {
    compliance: {
      heroTitle: 'Compliance',
      heroSubtitle: 'Integrity and Transparency',
      confidentialChannel: {
        title: 'Confidential Channel',
        subtitle: 'Safe and confidential reports for compliance and ethics issues',
        makeReport: {
          title: 'Make a Report',
          description: 'Report violations, irregularities or ethical issues safely and confidentially.',
          button: 'Make Report Now'
        },
        learnMore: {
          title: 'Learn More',
          description: 'Learn how our confidential channel works and its protection guarantees.',
          button: 'Know the Channel'
        },
        features: {
          secure: 'Completely Secure',
          anonymous: 'Anonymous Reports',
          confidential: 'Confidential'
        },
        guarantee: 'All information is treated with maximum confidentiality and we guarantee protection against any form of retaliation.'
      },
      overviewTitle: 'Compliance and Code of Conduct',
      overviewText: 'Our commitment is to integrity, transparency and compliance. Explore the Code of Conduct that guides Uni Hospitalar\'s ethical practices and ensures respect for applicable laws and regulations.',
      values: {
        integrity: {
          title: 'Integrity',
          description: 'We act with honesty and ethics in all our business and professional relationships, always maintaining the highest standards.'
        },
        transparency: {
          title: 'Transparency',
          description: 'We maintain clear and open communication with all our stakeholders, always promoting mutual trust and credibility.'
        },
        compliance: {
          title: 'Compliance',
          description: 'We rigorously follow all laws, regulations and standards applicable to our pharmaceutical and hospital sector with excellence.'
        }
      },
      conductTitle: 'Our Code of Conduct',
      conductSectionTitle: 'Ethical and Behavioral Guidelines',
      conductText: 'Our Code of Conduct is a guide for all employees, partners and suppliers, ensuring ethical behavior in all our activities.',
      conductLinks: {
        ethics: 'Ethical Conduct and Integrity',
        socialResponsibility: 'Social Responsibility and Sustainability',
        humanRights: 'Respect for Human Rights'
      },
      policiesTitle: 'Policies and Regulations',
      policiesIntro: 'Access our policies that reinforce our commitment to compliance and ethics.',
      policies: {
        regularTraining: {
          title: 'Training',
          description: 'We promote continuous training of our employees in ethical practices and regulatory compliance.'
        },
        antiBribery: {
          title: 'Anti-Bribery Practices',
          description: 'We maintain zero tolerance against any form of corruption or bribery in our operations.'
        },
        sectorCompliance: {
          title: 'Compliance with Sector Standards',
          description: 'We rigorously follow all standards and regulations specific to the healthcare sector.'
        }
      },
      correctiveTitle: 'Implementation and Monitoring',
      correctiveSectionTitle: 'How We Apply Our Policies',
      correctiveText: 'Learn how we implement and monitor our compliance policies in practice, ensuring effectiveness and transparency in all processes.',
      correctiveLinks: {
        regularTraining: 'Training',
        antiBribery: 'Anti-Bribery Monitoring',
        sectorCompliance: 'Sector Standards Audit'
      },
      correctiveButton: 'Contact Us',
      learnMore: 'Learn more'
    }
  },
  es: {
    compliance: {
      heroTitle: 'Compliance',
      heroSubtitle: 'Integridad y Transparencia',
      confidentialChannel: {
        title: 'Canal Confidencial',
        subtitle: 'Reportes seguros y confidenciales para cuestiones de compliance y ética',
        makeReport: {
          title: 'Hacer un Reporte',
          description: 'Reporte violaciones, irregularidades o cuestiones éticas de forma segura y confidencial.',
          button: 'Hacer Reporte Ahora'
        },
        learnMore: {
          title: 'Saber Más',
          description: 'Conozca cómo funciona nuestro canal confidencial y sus garantías de protección.',
          button: 'Conocer el Canal'
        },
        features: {
          secure: 'Totalmente Seguro',
          anonymous: 'Reportes Anónimos',
          confidential: 'Confidencial'
        },
        guarantee: 'Todas las informaciones son tratadas con máxima confidencialidad y garantizamos protección contra cualquier forma de represalia.'
      },
      overviewTitle: 'Compliance y Código de Conducta',
      overviewText: 'Nuestro compromiso es con la integridad, transparencia y conformidad. Explore el Código de Conducta que guía las prácticas éticas de Uni Hospitalar y garantiza el respeto a las normas y regulaciones aplicables.',
      values: {
        integrity: {
          title: 'Integridad',
          description: 'Actuamos con honestidad y ética en todas nuestras relaciones comerciales y profesionales, manteniendo siempre los más altos estándares.'
        },
        transparency: {
          title: 'Transparencia',
          description: 'Mantenemos una comunicación clara y abierta con todos nuestros stakeholders, promoviendo siempre confianza y credibilidad mutua.'
        },
        compliance: {
          title: 'Conformidad',
          description: 'Seguimos rigurosamente todas las leyes, regulaciones y normas aplicables a nuestro sector farmacéutico y hospitalario con excelencia.'
        }
      },
      conductTitle: 'Nuestro Código de Conducta',
      conductSectionTitle: 'Directrices Éticas y Comportamentales',
      conductText: 'Nuestro Código de Conducta es una guía para todos los colaboradores, socios y proveedores, asegurando un comportamiento ético en todas nuestras actividades.',
      conductLinks: {
        ethics: 'Conducta Ética e Integridad',
        socialResponsibility: 'Responsabilidad Social y Sostenibilidad',
        humanRights: 'Respeto a los Derechos Humanos'
      },
      policiesTitle: 'Políticas y Regulaciones',
      policiesIntro: 'Acceda a nuestras políticas que refuerzan el compromiso con la conformidad y la ética.',
      policies: {
        regularTraining: {
          title: 'Entrenamientos',
          description: 'Promovemos la capacitación continua de nuestros colaboradores en prácticas éticas y conformidad regulatoria.'
        },
        antiBribery: {
          title: 'Prácticas Antisoborno',
          description: 'Mantenemos tolerancia cero contra cualquier forma de corrupción o soborno en nuestras operaciones.'
        },
        sectorCompliance: {
          title: 'Conformidad con Normas Sectoriales',
          description: 'Seguimos rigurosamente todas las normas y regulaciones específicas del sector de la salud.'
        }
      },
      correctiveTitle: 'Implementación y Monitoreo',
      correctiveSectionTitle: 'Cómo Aplicamos Nuestras Políticas',
      correctiveText: 'Conozca cómo implementamos y monitoreamos nuestras políticas de compliance en la práctica, garantizando efectividad y transparencia en todos los procesos.',
      correctiveLinks: {
        regularTraining: 'Entrenamientos',
        antiBribery: 'Monitoreo Antisoborno',
        sectorCompliance: 'Auditoría de Normas Sectoriales'
      },
      correctiveButton: 'Contáctanos',
      learnMore: 'Saber más'
    }
  }
})

export function useComplianceTranslation() {
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
