import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    lgpd: {
      heroTitle: 'LGPD',
      heroSubtitle: 'Lei Geral de Proteção de Dados',
      introTitle: 'Protegendo seus dados com responsabilidade',
      introSubtitle: 'Nosso compromisso com a segurança e a LGPD',
      introText: 'Na Uni Hospitalar, valorizamos a segurança e a privacidade dos nossos clientes, parceiros e colaboradores. Estamos comprometidos com a proteção dos seus dados pessoais e com o cumprimento da Lei Geral de Proteção de Dados.',
      gpoTitle: 'Encarregado de Proteção de Dados (GPO)',
      gpoName: 'Responsável',
      gpoEmail: 'E-mail de Contato',
      cards: {
        card1: {
          text: 'Somos a Uni Hospitalar, uma empresa dedicada à excelência em serviços de saúde e comprometida com a proteção dos seus dados pessoais. Valorizamos a segurança e a privacidade dos nossos clientes, parceiros e colaboradores.'
        },
        card2: {
          text: 'Na Uni Hospitalar, reconhecemos a importância da Lei Geral de Proteção de Dados (LGPD) e reafirmamos nosso compromisso em tratar seus dados pessoais com responsabilidade e transparência. Implementamos medidas rigorosas de segurança para garantir que suas informações estejam protegidas.'
        },
        card3: {
          text: 'Para mais detalhes sobre como tratamos seus dados, você pode acessar nossa Política de Privacidade e os Termos Legais de Uso do nosso site. Esses documentos explicam de forma clara e detalhada como utilizamos, armazenamos e protegemos suas informações.',
          privacyButton: 'Política de Privacidade',
          termsButton: 'Termos Legais de Uso'
        },
        card4: {
          text: 'Caso tenha dúvidas sobre como seus dados são tratados ou precise de mais informações, entre em contato conosco. Estamos à disposição para esclarecer qualquer questão.',
          contactButton: 'FALE CONOSCO'
        }
      },
      principlesTitle: 'Nossos Princípios',
      principles: {
        finality: {
          title: 'Finalidade',
          description: 'Tratamento para propósitos legítimos, específicos e explícitos.'
        },
        adequacy: {
          title: 'Adequação',
          description: 'Compatibilidade do tratamento com as finalidades informadas.'
        },
        necessity: {
          title: 'Necessidade',
          description: 'Limitação do tratamento ao mínimo necessário para suas finalidades.'
        },
        security: {
          title: 'Segurança',
          description: 'Medidas técnicas e administrativas adequadas para proteção dos dados.'
        }
      },
      ctaTitle: 'Seus dados são importantes para nós',
      ctaText: 'Conheça mais sobre como a Uni Hospitalar protege suas informações e cumpre com a LGPD.',
      ctaButtons: {
        privacy: 'Política de Privacidade',
        contact: 'Fale Conosco'
      }
    }
  },
  en: {
    lgpd: {
      heroTitle: 'LGPD',
      heroSubtitle: 'General Data Protection Law',
      introTitle: 'Protecting your data responsibly',
      introSubtitle: 'Our commitment to security and LGPD',
      introText: 'At Uni Hospitalar, we value the security and privacy of our clients, partners and employees. We are committed to protecting your personal data and complying with the General Data Protection Law.',
      gpoTitle: 'Data Protection Officer (DPO)',
      gpoName: 'Responsible',
      gpoEmail: 'Contact Email',
      cards: {
        card1: {
          text: 'We are Uni Hospitalar, a company dedicated to excellence in healthcare services and committed to protecting your personal data. We value the security and privacy of our clients, partners and employees.'
        },
        card2: {
          text: 'At Uni Hospitalar, we recognize the importance of the General Data Protection Law (LGPD) and reaffirm our commitment to treating your personal data with responsibility and transparency. We implement rigorous security measures to ensure your information is protected.'
        },
        card3: {
          text: 'For more details on how we handle your data, you can access our Privacy Policy and Legal Terms of Use of our website. These documents clearly and detailed explain how we use, store and protect your information.',
          privacyButton: 'Privacy Policy',
          termsButton: 'Legal Terms of Use'
        },
        card4: {
          text: 'If you have questions about how your data is handled or need more information, contact us. We are available to clarify any questions.',
          contactButton: 'CONTACT US'
        }
      },
      principlesTitle: 'Our Principles',
      principles: {
        finality: {
          title: 'Purpose',
          description: 'Treatment for legitimate, specific and explicit purposes.'
        },
        adequacy: {
          title: 'Adequacy',
          description: 'Compatibility of treatment with the informed purposes.'
        },
        necessity: {
          title: 'Necessity',
          description: 'Limitation of treatment to the minimum necessary for its purposes.'
        },
        security: {
          title: 'Security',
          description: 'Adequate technical and administrative measures for data protection.'
        }
      },
      ctaTitle: 'Your data is important to us',
      ctaText: 'Learn more about how Uni Hospitalar protects your information and complies with LGPD.',
      ctaButtons: {
        privacy: 'Privacy Policy',
        contact: 'Contact Us'
      }
    }
  },
  es: {
    lgpd: {
      heroTitle: 'LGPD',
      heroSubtitle: 'Ley General de Protección de Datos',
      introTitle: 'Protegiendo sus datos con responsabilidad',
      introSubtitle: 'Nuestro compromiso con la seguridad y la LGPD',
      introText: 'En Uni Hospitalar, valoramos la seguridad y privacidad de nuestros clientes, socios y colaboradores. Estamos comprometidos con la protección de sus datos personales y con el cumplimiento de la Ley General de Protección de Datos.',
      gpoTitle: 'Oficial de Protección de Datos (GPO)',
      gpoName: 'Responsable',
      gpoEmail: 'Correo de Contacto',
      cards: {
        card1: {
          text: 'Somos Uni Hospitalar, una empresa dedicada a la excelencia en servicios de salud y comprometida con la protección de sus datos personales. Valoramos la seguridad y privacidad de nuestros clientes, socios y colaboradores.'
        },
        card2: {
          text: 'En Uni Hospitalar, reconocemos la importancia de la Ley General de Protección de Datos (LGPD) y reafirmamos nuestro compromiso en tratar sus datos personales con responsabilidad y transparencia. Implementamos medidas rigurosas de seguridad para garantizar que sus informaciones estén protegidas.'
        },
        card3: {
          text: 'Para más detalles sobre cómo tratamos sus datos, puede acceder a nuestra Política de Privacidad y los Términos Legales de Uso de nuestro sitio. Estos documentos explican de forma clara y detallada cómo utilizamos, almacenamos y protegemos sus informaciones.',
          privacyButton: 'Política de Privacidad',
          termsButton: 'Términos Legales de Uso'
        },
        card4: {
          text: 'Si tiene dudas sobre cómo sus datos son tratados o necesita más informaciones, contáctenos. Estamos a disposición para aclarar cualquier cuestión.',
          contactButton: 'CONTÁCTENOS'
        }
      },
      principlesTitle: 'Nuestros Principios',
      principles: {
        finality: {
          title: 'Finalidad',
          description: 'Tratamiento para propósitos legítimos, específicos y explícitos.'
        },
        adequacy: {
          title: 'Adecuación',
          description: 'Compatibilidad del tratamiento con las finalidades informadas.'
        },
        necessity: {
          title: 'Necesidad',
          description: 'Limitación del tratamiento al mínimo necesario para sus finalidades.'
        },
        security: {
          title: 'Seguridad',
          description: 'Medidas técnicas y administrativas adecuadas para protección de los datos.'
        }
      },
      ctaTitle: 'Sus datos son importantes para nosotros',
      ctaText: 'Conozca más sobre cómo Uni Hospitalar protege sus informaciones y cumple con la LGPD.',
      ctaButtons: {
        privacy: 'Política de Privacidad',
        contact: 'Contáctenos'
      }
    }
  }
})

export function useLGPDTranslation() {
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
