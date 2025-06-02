import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    direitosHumanos: {
      heroTitle: 'Direitos Humanos',
      heroSubtitle: 'Respeito, Dignidade e Igualdade para Todos',
      manifestoBadge: 'Nosso Compromisso',
      manifestoTitle: 'Defendemos os Direitos Humanos em Todas as Nossas Ações',
      manifestoText: 'A Uni Hospitalar reconhece que o respeito aos direitos humanos é fundamental para uma sociedade justa e equitativa. Estamos comprometidos em promover, proteger e respeitar os direitos humanos em todas as nossas operações, relações comerciais e na comunidade onde atuamos.',
      principlesTitle: 'Nossos Princípios Fundamentais',
      principles: {
        equality: {
          title: 'Igualdade e Não Discriminação',
          description: 'Promovemos a igualdade de oportunidades e tratamento justo para todos, independentemente de raça, gênero, religião, orientação sexual ou qualquer outra característica pessoal.'
        },
        dignity: {
          title: 'Dignidade Humana',
          description: 'Respeitamos a dignidade inerente de cada pessoa, garantindo que todos sejam tratados com respeito, cortesia e consideração em todas as nossas interações.'
        },
        inclusion: {
          title: 'Inclusão e Diversidade',
          description: 'Valorizamos a diversidade e promovemos um ambiente inclusivo onde todas as pessoas se sintam valorizadas, respeitadas e capazes de contribuir plenamente.'
        },
        respect: {
          title: 'Respeito aos Direitos Fundamentais',
          description: 'Reconhecemos e respeitamos os direitos fundamentais estabelecidos na Declaração Universal dos Direitos Humanos e em outras convenções internacionais.'
        },
        justice: {
          title: 'Justiça e Equidade',
          description: 'Promovemos práticas justas e equitativas em todas as nossas operações, garantindo que todos tenham acesso igual a oportunidades e recursos.'
        }
      },
      commitmentsTitle: 'Nossos Compromissos em Ação',
      commitments: {
        workplace: {
          title: 'Ambiente de Trabalho',
          description: 'Garantimos um ambiente de trabalho seguro, saudável e livre de discriminação, onde todos os colaboradores são tratados com dignidade e respeito.'
        },
        patients: {
          title: 'Cuidado com Pacientes',
          description: 'Asseguramos que todos os pacientes recebam cuidados de qualidade, respeitando sua dignidade, privacidade e direitos fundamentais.'
        },
        suppliers: {
          title: 'Cadeia de Fornecimento',
          description: 'Exigimos que nossos fornecedores e parceiros comerciais compartilhem nosso compromisso com os direitos humanos e práticas éticas.'
        },
        community: {
          title: 'Impacto Comunitário',
          description: 'Contribuímos positivamente para as comunidades onde operamos, respeitando os direitos locais e promovendo o desenvolvimento sustentável.'
        }
      },
      actionsTitle: 'Políticas e Ações Concretas',
      actions: {
        policies: {
          title: 'Políticas Internas',
          description: 'Implementamos políticas abrangentes que garantem o respeito aos direitos humanos em todas as nossas operações e processos internos.',
          items: {
            antiDiscrimination: 'Política Anti-Discriminação',
            equalOpportunity: 'Igualdade de Oportunidades',
            safeworkplace: 'Ambiente de Trabalho Seguro'
          }
        },
        training: {
          title: 'Capacitação e Treinamento',
          description: 'Oferecemos treinamentos regulares sobre direitos humanos para todos os colaboradores, garantindo conscientização e aplicação prática.'
        },
        communication: {
          title: 'Canais de Comunicação',
          description: 'Mantemos canais abertos e seguros para relatos de violações de direitos humanos, garantindo confidencialidade e proteção.'
        },
        monitoring: {
          title: 'Monitoramento Contínuo',
          description: 'Realizamos avaliações regulares de nossas práticas para identificar e corrigir possíveis violações aos direitos humanos.'
        },
        reporting: {
          title: 'Canal de Denúncias',
          description: 'Disponibilizamos um canal seguro e confidencial para relatos de violações, garantindo investigação adequada e medidas corretivas.'
        }
      },
      ctaTitle: 'Juntos na Defesa dos Direitos Humanos',
      ctaText: 'Acreditamos que a proteção dos direitos humanos é uma responsabilidade compartilhada. Conheça mais sobre nossas políticas de compliance ou entre em contato para esclarecer dúvidas.',
      ctaButtons: {
        compliance: 'Ver Compliance',
        contact: 'Fale Conosco'
      }
    }
  },
  en: {
    direitosHumanos: {
      heroTitle: 'Human Rights',
      heroSubtitle: 'Respect, Dignity and Equality for All',
      manifestoBadge: 'Our Commitment',
      manifestoTitle: 'We Defend Human Rights in All Our Actions',
      manifestoText: 'Uni Hospitalar recognizes that respect for human rights is fundamental to a just and equitable society. We are committed to promoting, protecting and respecting human rights in all our operations, business relationships and in the community where we operate.',
      principlesTitle: 'Our Fundamental Principles',
      principles: {
        equality: {
          title: 'Equality and Non-Discrimination',
          description: 'We promote equal opportunities and fair treatment for all, regardless of race, gender, religion, sexual orientation or any other personal characteristic.'
        },
        dignity: {
          title: 'Human Dignity',
          description: 'We respect the inherent dignity of each person, ensuring that everyone is treated with respect, courtesy and consideration in all our interactions.'
        },
        inclusion: {
          title: 'Inclusion and Diversity',
          description: 'We value diversity and promote an inclusive environment where all people feel valued, respected and able to contribute fully.'
        },
        respect: {
          title: 'Respect for Fundamental Rights',
          description: 'We recognize and respect the fundamental rights established in the Universal Declaration of Human Rights and other international conventions.'
        },
        justice: {
          title: 'Justice and Equity',
          description: 'We promote fair and equitable practices in all our operations, ensuring that everyone has equal access to opportunities and resources.'
        }
      },
      commitmentsTitle: 'Our Commitments in Action',
      commitments: {
        workplace: {
          title: 'Work Environment',
          description: 'We guarantee a safe, healthy and discrimination-free work environment, where all employees are treated with dignity and respect.'
        },
        patients: {
          title: 'Patient Care',
          description: 'We ensure that all patients receive quality care, respecting their dignity, privacy and fundamental rights.'
        },
        suppliers: {
          title: 'Supply Chain',
          description: 'We require our suppliers and business partners to share our commitment to human rights and ethical practices.'
        },
        community: {
          title: 'Community Impact',
          description: 'We contribute positively to the communities where we operate, respecting local rights and promoting sustainable development.'
        }
      },
      actionsTitle: 'Concrete Policies and Actions',
      actions: {
        policies: {
          title: 'Internal Policies',
          description: 'We implement comprehensive policies that ensure respect for human rights in all our operations and internal processes.',
          items: {
            antiDiscrimination: 'Anti-Discrimination Policy',
            equalOpportunity: 'Equal Opportunities',
            safeworkplace: 'Safe Workplace'
          }
        },
        training: {
          title: 'Training and Development',
          description: 'We offer regular human rights training for all employees, ensuring awareness and practical application.'
        },
        communication: {
          title: 'Communication Channels',
          description: 'We maintain open and secure channels for reporting human rights violations, ensuring confidentiality and protection.'
        },
        monitoring: {
          title: 'Continuous Monitoring',
          description: 'We conduct regular assessments of our practices to identify and correct possible human rights violations.'
        },
        reporting: {
          title: 'Reporting Channel',
          description: 'We provide a secure and confidential channel for reporting violations, ensuring proper investigation and corrective measures.'
        }
      },
      ctaTitle: 'Together in Defense of Human Rights',
      ctaText: 'We believe that protecting human rights is a shared responsibility. Learn more about our compliance policies or contact us to clarify doubts.',
      ctaButtons: {
        compliance: 'View Compliance',
        contact: 'Contact Us'
      }
    }
  },
  es: {
    direitosHumanos: {
      heroTitle: 'Derechos Humanos',
      heroSubtitle: 'Respeto, Dignidad e Igualdad para Todos',
      manifestoBadge: 'Nuestro Compromiso',
      manifestoTitle: 'Defendemos los Derechos Humanos en Todas Nuestras Acciones',
      manifestoText: 'Uni Hospitalar reconoce que el respeto a los derechos humanos es fundamental para una sociedad justa y equitativa. Estamos comprometidos en promover, proteger y respetar los derechos humanos en todas nuestras operaciones, relaciones comerciales y en la comunidad donde operamos.',
      principlesTitle: 'Nuestros Principios Fundamentales',
      principles: {
        equality: {
          title: 'Igualdad y No Discriminación',
          description: 'Promovemos la igualdad de oportunidades y trato justo para todos, independientemente de raza, género, religión, orientación sexual o cualquier otra característica personal.'
        },
        dignity: {
          title: 'Dignidad Humana',
          description: 'Respetamos la dignidad inherente de cada persona, garantizando que todos sean tratados con respeto, cortesía y consideración en todas nuestras interacciones.'
        },
        inclusion: {
          title: 'Inclusión y Diversidad',
          description: 'Valoramos la diversidad y promovemos un ambiente inclusivo donde todas las personas se sientan valoradas, respetadas y capaces de contribuir plenamente.'
        },
        respect: {
          title: 'Respeto a los Derechos Fundamentales',
          description: 'Reconocemos y respetamos los derechos fundamentales establecidos en la Declaración Universal de los Derechos Humanos y otras convenciones internacionales.'
        },
        justice: {
          title: 'Justicia y Equidad',
          description: 'Promovemos prácticas justas y equitativas en todas nuestras operaciones, garantizando que todos tengan acceso igual a oportunidades y recursos.'
        }
      },
      commitmentsTitle: 'Nuestros Compromisos en Acción',
      commitments: {
        workplace: {
          title: 'Ambiente de Trabajo',
          description: 'Garantizamos un ambiente de trabajo seguro, saludable y libre de discriminación, donde todos los colaboradores son tratados con dignidad y respeto.'
        },
        patients: {
          title: 'Cuidado de Pacientes',
          description: 'Aseguramos que todos los pacientes reciban cuidados de calidad, respetando su dignidad, privacidad y derechos fundamentales.'
        },
        suppliers: {
          title: 'Cadena de Suministro',
          description: 'Exigimos que nuestros proveedores y socios comerciales compartan nuestro compromiso con los derechos humanos y prácticas éticas.'
        },
        community: {
          title: 'Impacto Comunitario',
          description: 'Contribuimos positivamente a las comunidades donde operamos, respetando los derechos locales y promoviendo el desarrollo sostenible.'
        }
      },
      actionsTitle: 'Políticas y Acciones Concretas',
      actions: {
        policies: {
          title: 'Políticas Internas',
          description: 'Implementamos políticas integrales que garantizan el respeto a los derechos humanos en todas nuestras operaciones y procesos internos.',
          items: {
            antiDiscrimination: 'Política Anti-Discriminación',
            equalOpportunity: 'Igualdad de Oportunidades',
            safeworkplace: 'Ambiente de Trabajo Seguro'
          }
        },
        training: {
          title: 'Capacitación y Entrenamiento',
          description: 'Ofrecemos entrenamientos regulares sobre derechos humanos para todos los colaboradores, garantizando concientización y aplicación práctica.'
        },
        communication: {
          title: 'Canales de Comunicación',
          description: 'Mantenemos canales abiertos y seguros para reportes de violaciones de derechos humanos, garantizando confidencialidad y protección.'
        },
        monitoring: {
          title: 'Monitoreo Continuo',
          description: 'Realizamos evaluaciones regulares de nuestras prácticas para identificar y corregir posibles violaciones a los derechos humanos.'
        },
        reporting: {
          title: 'Canal de Denuncias',
          description: 'Disponibilizamos un canal seguro y confidencial para reportes de violaciones, garantizando investigación adecuada y medidas correctivas.'
        }
      },
      ctaTitle: 'Juntos en la Defensa de los Derechos Humanos',
      ctaText: 'Creemos que la protección de los derechos humanos es una responsabilidad compartida. Conozca más sobre nuestras políticas de compliance o contáctenos para aclarar dudas.',
      ctaButtons: {
        compliance: 'Ver Compliance',
        contact: 'Contáctanos'
      }
    }
  }
})

export function useHumanRightsTranslation() {
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
