import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    condutaEtica: {
      heroTitle: 'Conduta Ética',
      heroSubtitle: 'Integridade e Transparência em Todas as Ações',
      overviewTitle: 'Compromisso com a Ética',
      overviewText: 'A Uni Hospitalar adota práticas que asseguram a conduta ética em todas as suas operações. Nosso compromisso é garantir que os valores de integridade e transparência sejam sempre mantidos, promovendo um ambiente de confiança e respeito mútuo.',
      values: {
        integrity: {
          title: 'Integridade',
          description: 'Atuamos com honestidade e transparência em todas as nossas relações, mantendo sempre os mais altos padrões éticos.'
        },
        trust: {
          title: 'Confiança',
          description: 'Construímos relações duradouras baseadas na confiança mútua e no respeito aos nossos valores fundamentais.'
        },
        responsibility: {
          title: 'Responsabilidade',
          description: 'Assumimos a responsabilidade por nossas ações e decisões, sempre priorizando o bem-estar de todos os envolvidos.'
        }
      },
      principlesTitle: 'Nossos Princípios Éticos',
      principles: {
        legalCompliance: {
          title: 'Conformidade Legal',
          description: 'Seguimos rigorosamente todas as leis e regulamentações aplicáveis ao setor de saúde e farmacêutico.'
        },
        transparency: {
          title: 'Transparência',
          description: 'Mantemos comunicação clara e aberta em todas as nossas operações e relacionamentos.'
        },
        mutualRespect: {
          title: 'Respeito Mútuo',
          description: 'Promovemos um ambiente de trabalho baseado no respeito e na valorização de todos os colaboradores.'
        },
        confidentiality: {
          title: 'Confidencialidade',
          description: 'Protegemos informações sensíveis e dados pessoais com os mais altos padrões de segurança.'
        },
        antiCorruption: {
          title: 'Anti-Corrupção',
          description: 'Mantemos tolerância zero contra qualquer forma de corrupção ou suborno em nossas operações.'
        },
        socialResponsibility: {
          title: 'Responsabilidade Social',
          description: 'Assumimos nosso papel na sociedade, contribuindo para o desenvolvimento sustentável e bem-estar social.'
        }
      },
      contactTitle: 'Canal de Comunicação',
      contactText: 'Para dúvidas, sugestões ou relatos relacionados à conduta ética, entre em contato conosco através dos nossos canais oficiais.',
      contactButton: 'Entre em Contato'
    }
  },
  en: {
    condutaEtica: {
      heroTitle: 'Ethical Conduct',
      heroSubtitle: 'Integrity and Transparency in All Actions',
      overviewTitle: 'Commitment to Ethics',
      overviewText: 'Uni Hospitalar adopts practices that ensure ethical conduct in all its operations. Our commitment is to guarantee that the values of integrity and transparency are always maintained, promoting an environment of trust and mutual respect.',
      values: {
        integrity: {
          title: 'Integrity',
          description: 'We act with honesty and transparency in all our relationships, always maintaining the highest ethical standards.'
        },
        trust: {
          title: 'Trust',
          description: 'We build lasting relationships based on mutual trust and respect for our fundamental values.'
        },
        responsibility: {
          title: 'Responsibility',
          description: 'We take responsibility for our actions and decisions, always prioritizing the well-being of everyone involved.'
        }
      },
      principlesTitle: 'Our Ethical Principles',
      principles: {
        legalCompliance: {
          title: 'Legal Compliance',
          description: 'We rigorously follow all laws and regulations applicable to the health and pharmaceutical sector.'
        },
        transparency: {
          title: 'Transparency',
          description: 'We maintain clear and open communication in all our operations and relationships.'
        },
        mutualRespect: {
          title: 'Mutual Respect',
          description: 'We promote a work environment based on respect and appreciation for all employees.'
        },
        confidentiality: {
          title: 'Confidentiality',
          description: 'We protect sensitive information and personal data with the highest security standards.'
        },
        antiCorruption: {
          title: 'Anti-Corruption',
          description: 'We maintain zero tolerance against any form of corruption or bribery in our operations.'
        },
        socialResponsibility: {
          title: 'Social Responsibility',
          description: 'We assume our role in society, contributing to sustainable development and social well-being.'
        }
      },
      contactTitle: 'Communication Channel',
      contactText: 'For questions, suggestions or reports related to ethical conduct, contact us through our official channels.',
      contactButton: 'Contact Us'
    }
  },
  es: {
    condutaEtica: {
      heroTitle: 'Conducta Ética',
      heroSubtitle: 'Integridad y Transparencia en Todas las Acciones',
      overviewTitle: 'Compromiso con la Ética',
      overviewText: 'Uni Hospitalar adopta prácticas que aseguran la conducta ética en todas sus operaciones. Nuestro compromiso es garantizar que los valores de integridad y transparencia se mantengan siempre, promoviendo un ambiente de confianza y respeto mutuo.',
      values: {
        integrity: {
          title: 'Integridad',
          description: 'Actuamos con honestidad y transparencia en todas nuestras relaciones, manteniendo siempre los más altos estándares éticos.'
        },
        trust: {
          title: 'Confianza',
          description: 'Construimos relaciones duraderas basadas en la confianza mutua y el respeto a nuestros valores fundamentales.'
        },
        responsibility: {
          title: 'Responsabilidad',
          description: 'Asumimos la responsabilidad por nuestras acciones y decisiones, siempre priorizando el bienestar de todos los involucrados.'
        }
      },
      principlesTitle: 'Nuestros Principios Éticos',
      principles: {
        legalCompliance: {
          title: 'Conformidad Legal',
          description: 'Seguimos rigurosamente todas las leyes y regulaciones aplicables al sector de la salud y farmacéutico.'
        },
        transparency: {
          title: 'Transparencia',
          description: 'Mantenemos comunicación clara y abierta en todas nuestras operaciones y relaciones.'
        },
        mutualRespect: {
          title: 'Respeto Mutuo',
          description: 'Promovemos un ambiente de trabajo basado en el respeto y la valoración de todos los empleados.'
        },
        confidentiality: {
          title: 'Confidencialidad',
          description: 'Protegemos información sensible y datos personales con los más altos estándares de seguridad.'
        },
        antiCorruption: {
          title: 'Anti-Corrupción',
          description: 'Mantenemos tolerancia cero contra cualquier forma de corrupción o soborno en nuestras operaciones.'
        },
        socialResponsibility: {
          title: 'Responsabilidad Social',
          description: 'Asumimos nuestro papel en la sociedad, contribuyendo al desarrollo sostenible y bienestar social.'
        }
      },
      contactTitle: 'Canal de Comunicación',
      contactText: 'Para dudas, sugerencias o reportes relacionados con la conducta ética, contáctanos a través de nuestros canales oficiales.',
      contactButton: 'Contáctanos'
    }
  }
})

export function useEthicalConductTranslation() {
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
