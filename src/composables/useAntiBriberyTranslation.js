import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    praticasAntissuborno: {
      heroTitle: 'Práticas Antissuborno',
      heroSubtitle: 'Tolerância Zero à Corrupção e Suborno',
      
      principlesTitle: 'Nossos Princípios Fundamentais',
      principlesSubtitle: 'Baseamos nossas práticas antissuborno em princípios sólidos que orientam todas as nossas ações e decisões.',
      
      principles: {
        integrity: {
          title: 'Integridade Absoluta',
          description: 'Mantemos os mais altos padrões de integridade em todas as nossas operações, sem exceções ou compromissos.'
        },
        transparency: {
          title: 'Transparência Total',
          description: 'Todas as nossas transações e relacionamentos são conduzidos com total transparência e abertura.'
        },
        compliance: {
          title: 'Conformidade Rigorosa',
          description: 'Seguimos rigorosamente todas as leis e regulamentações antissuborno nacionais e internacionais.'
        }
      },
      
      zeroTolerance: {
        badge: 'Política Oficial',
        title: 'Tolerância Zero',
        description: 'A Uni Hospitalar mantém uma política de tolerância zero contra qualquer forma de corrupção, suborno ou práticas antiéticas. Nossa posição é clara e inflexível.',
        visual: 'Proteção Integral',
        items: {
          bribery: 'Suborno em qualquer forma',
          corruption: 'Corrupção ativa ou passiva',
          kickbacks: 'Comissões ilegais ou propinas',
          facilitation: 'Pagamentos de facilitação'
        }
      },
      
      proceduresTitle: 'Procedimentos de Prevenção',
      proceduresSubtitle: 'Implementamos procedimentos rigorosos para detectar, prevenir e combater práticas de suborno.',
      
      procedures: {
        detection: {
          title: 'Detecção Proativa',
          description: 'Sistemas avançados de monitoramento identificam possíveis irregularidades antes que se tornem problemas.'
        },
        reporting: {
          title: 'Canais de Denúncia',
          description: 'Múltiplos canais seguros e confidenciais para reportar suspeitas de práticas inadequadas.'
        },
        investigation: {
          title: 'Investigação Rigorosa',
          description: 'Todas as denúncias são investigadas de forma imparcial e completa por equipe especializada.'
        },
        action: {
          title: 'Ações Corretivas',
          description: 'Medidas imediatas e efetivas são tomadas quando irregularidades são confirmadas.'
        }
      },
      
      trainingTitle: 'Programa de Treinamento',
      trainingDescription: 'Investimos continuamente na educação e conscientização de todos os colaboradores sobre práticas antissuborno.',
      
      training: {
        regular: {
          title: 'Treinamentos Regulares',
          description: 'Sessões periódicas de capacitação para manter todos atualizados sobre políticas e procedimentos.'
        },
        comprehensive: {
          title: 'Cobertura Abrangente',
          description: 'Todos os colaboradores, parceiros e fornecedores recebem treinamento adequado ao seu nível de exposição.'
        },
        updated: {
          title: 'Conteúdo Atualizado',
          description: 'Material de treinamento constantemente atualizado com as melhores práticas e mudanças regulatórias.'
        }
      },
      
      stats: {
        coverage: 'Cobertura de Funcionários',
        frequency: 'Treinamentos por Ano',
        response: 'Tempo de Resposta'
      },
      
      reportingTitle: 'Canal de Denúncias',
      reportingSubtitle: 'Disponibilizamos múltiplos canais seguros para reportar suspeitas de práticas inadequadas.',
      
      channels: {
        phone: {
          title: 'Linha Direta',
          description: 'Canal telefônico disponível de segunda a sexta em horário comercial.',
          number: '+55 (81) 3472 7201'
        },
        email: {
          title: 'E-mail Seguro',
          description: 'Canal de comunicação criptografado para máxima segurança.',
          address: 'compliance@unihospitalar.com.br'
        },
        online: {
          title: 'Portal Online',
          description: 'Formulário online seguro e anônimo para denúncias.',
          link: 'Acessar Portal'
        }
      },
      
      guarantee: {
        title: 'Garantia de Confidencialidade',
        description: 'Todas as denúncias são tratadas com absoluta confidencialidade e os denunciantes são protegidos contra retaliações.'
      }
    }
  },
  en: {
    praticasAntissuborno: {
      heroTitle: 'Anti-Bribery Practices',
      heroSubtitle: 'Zero Tolerance for Corruption and Bribery',
      
      principlesTitle: 'Our Fundamental Principles',
      principlesSubtitle: 'We base our anti-bribery practices on solid principles that guide all our actions and decisions.',
      
      principles: {
        integrity: {
          title: 'Absolute Integrity',
          description: 'We maintain the highest standards of integrity in all our operations, without exceptions or compromises.'
        },
        transparency: {
          title: 'Total Transparency',
          description: 'All our transactions and relationships are conducted with complete transparency and openness.'
        },
        compliance: {
          title: 'Rigorous Compliance',
          description: 'We rigorously follow all national and international anti-bribery laws and regulations.'
        }
      },
      
      zeroTolerance: {
        badge: 'Official Policy',
        title: 'Zero Tolerance',
        description: 'Uni Hospitalar maintains a zero tolerance policy against any form of corruption, bribery or unethical practices. Our position is clear and inflexible.',
        visual: 'Comprehensive Protection',
        items: {
          bribery: 'Bribery in any form',
          corruption: 'Active or passive corruption',
          kickbacks: 'Illegal commissions or bribes',
          facilitation: 'Facilitation payments'
        }
      },
      
      proceduresTitle: 'Prevention Procedures',
      proceduresSubtitle: 'We implement rigorous procedures to detect, prevent and combat bribery practices.',
      
      procedures: {
        detection: {
          title: 'Proactive Detection',
          description: 'Advanced monitoring systems identify possible irregularities before they become problems.'
        },
        reporting: {
          title: 'Reporting Channels',
          description: 'Multiple secure and confidential channels to report suspected inappropriate practices.'
        },
        investigation: {
          title: 'Rigorous Investigation',
          description: 'All reports are investigated impartially and completely by specialized staff.'
        },
        action: {
          title: 'Corrective Actions',
          description: 'Immediate and effective measures are taken when irregularities are confirmed.'
        }
      },
      
      trainingTitle: 'Training Program',
      trainingDescription: 'We continuously invest in the education and awareness of all employees about anti-bribery practices.',
      
      training: {
        regular: {
          title: 'Regular Training',
          description: 'Periodic training sessions to keep everyone updated on policies and procedures.'
        },
        comprehensive: {
          title: 'Comprehensive Coverage',
          description: 'All employees, partners and suppliers receive training appropriate to their level of exposure.'
        },
        updated: {
          title: 'Updated Content',
          description: 'Training material constantly updated with best practices and regulatory changes.'
        }
      },
      
      stats: {
        coverage: 'Employee Coverage',
        frequency: 'Training per Year',
        response: 'Response Time'
      },
      
      reportingTitle: 'Reporting Channel',
      reportingSubtitle: 'We provide multiple secure channels to report suspected inappropriate practices.',
      
      channels: {
        phone: {
          title: 'Direct Line',
          description: 'Telephone channel available Monday to Friday during business hours.',
          number: '+55 (81) 3472 7201'
        },
        email: {
          title: 'Secure Email',
          description: 'Encrypted communication channel for maximum security.',
          address: 'compliance@unihospitalar.com.br'
        },
        online: {
          title: 'Online Portal',
          description: 'Secure and anonymous online form for reports.',
          link: 'Access Portal'
        }
      },
      
      guarantee: {
        title: 'Confidentiality Guarantee',
        description: 'All reports are treated with absolute confidentiality and whistleblowers are protected against retaliation.'
      }
    }
  },
  es: {
    praticasAntissuborno: {
      heroTitle: 'Prácticas Antisoborno',
      heroSubtitle: 'Tolerancia Cero a la Corrupción y Soborno',
      
      principlesTitle: 'Nuestros Principios Fundamentales',
      principlesSubtitle: 'Basamos nuestras prácticas antisoborno en principios sólidos que orientan todas nuestras acciones y decisiones.',
      
      principles: {
        integrity: {
          title: 'Integridad Absoluta',
          description: 'Mantenemos los más altos estándares de integridad en todas nuestras operaciones, sin excepciones o compromisos.'
        },
        transparency: {
          title: 'Transparencia Total',
          description: 'Todas nuestras transacciones y relaciones se conducen con total transparencia y apertura.'
        },
        compliance: {
          title: 'Cumplimiento Riguroso',
          description: 'Seguimos rigurosamente todas las leyes y regulaciones antisoborno nacionales e internacionales.'
        }
      },
      
      zeroTolerance: {
        badge: 'Política Oficial',
        title: 'Tolerancia Cero',
        description: 'Uni Hospitalar mantiene una política de tolerancia cero contra cualquier forma de corrupción, soborno o prácticas antiéticas. Nuestra posición es clara e inflexible.',
        visual: 'Protección Integral',
        items: {
          bribery: 'Soborno en cualquier forma',
          corruption: 'Corrupción activa o pasiva',
          kickbacks: 'Comisiones ilegales o sobornos',
          facilitation: 'Pagos de facilitación'
        }
      },
      
      proceduresTitle: 'Procedimientos de Prevención',
      proceduresSubtitle: 'Implementamos procedimientos rigurosos para detectar, prevenir y combatir prácticas de soborno.',
      
      procedures: {
        detection: {
          title: 'Detección Proactiva',
          description: 'Sistemas avanzados de monitoreo identifican posibles irregularidades antes de que se conviertan en problemas.'
        },
        reporting: {
          title: 'Canales de Denuncia',
          description: 'Múltiples canales seguros y confidenciales para reportar sospechas de prácticas inadecuadas.'
        },
        investigation: {
          title: 'Investigación Rigurosa',
          description: 'Todas las denuncias son investigadas de forma imparcial y completa por personal especializado.'
        },
        action: {
          title: 'Acciones Correctivas',
          description: 'Se toman medidas inmediatas y efectivas cuando se confirman irregularidades.'
        }
      },
      
      trainingTitle: 'Programa de Entrenamiento',
      trainingDescription: 'Invertimos continuamente en la educación y concientización de todos los empleados sobre prácticas antisoborno.',
      
      training: {
        regular: {
          title: 'Entrenamientos Regulares',
          description: 'Sesiones periódicas de capacitación para mantener a todos actualizados sobre políticas y procedimientos.'
        },
        comprehensive: {
          title: 'Cobertura Integral',
          description: 'Todos los empleados, socios y proveedores reciben entrenamiento apropiado a su nivel de exposición.'
        },
        updated: {
          title: 'Contenido Actualizado',
          description: 'Material de entrenamiento constantemente actualizado con las mejores prácticas y cambios regulatorios.'
        }
      },
      
      stats: {
        coverage: 'Cobertura de Empleados',
        frequency: 'Entrenamientos por Año',
        response: 'Tiempo de Respuesta'
      },
      
      reportingTitle: 'Canal de Denuncias',
      reportingSubtitle: 'Proporcionamos múltiples canales seguros para reportar sospechas de prácticas inadecuadas.',
      
      channels: {
        phone: {
          title: 'Línea Directa',
          description: 'Canal telefónico disponible de lunes a viernes en horario comercial.',
          number: '+55 (81) 3472 7201'
        },
        email: {
          title: 'Email Seguro',
          description: 'Canal de comunicación encriptado para máxima seguridad.',
          address: 'compliance@unihospitalar.com.br'
        },
        online: {
          title: 'Portal Online',
          description: 'Formulario online seguro y anónimo para denuncias.',
          link: 'Acceder al Portal'
        }
      },
      
      guarantee: {
        title: 'Garantía de Confidencialidad',
        description: 'Todas las denuncias son tratadas con absoluta confidencialidad y los denunciantes están protegidos contra represalias.'
      }
    }
  }
})

export function useAntiBriberyTranslation() {
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
