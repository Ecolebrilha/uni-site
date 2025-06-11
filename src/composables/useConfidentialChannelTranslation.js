import { ref, reactive } from 'vue'

const currentLanguage = ref('pt')

const translations = reactive({
  pt: {
    confidential: {
      heroTitle: 'Canal Confidencial',
      heroSubtitle: 'Um ambiente seguro para relatos éticos e transparentes',
      introTitle: 'Nosso Compromisso com a Ética e Transparência',
      introText: 'O Canal Confidencial da Uni Hospitalar é uma ferramenta essencial para manter os mais altos padrões éticos em nossa organização. Oferecemos um ambiente seguro e confidencial onde colaboradores, parceiros e terceiros podem reportar situações que violem nossos valores e políticas internas.',
      highlight: {
        title: 'Ambiente Seguro e Protegido',
        text: 'Garantimos total confidencialidade e proteção contra retaliações para todos que utilizarem nosso canal de forma responsável e de boa-fé.'
      },
      principlesTitle: 'Nossos Princípios Fundamentais',
      principles: {
        anonymity: {
          title: 'Garantia do Anonimato',
          text: 'Asseguramos total anonimato e confidencialidade dos relatos. Nenhum colaborador da Uni Hospitalar tem acesso à identidade dos relatores que optarem pelo anonimato.'
        },
        independence: {
          title: 'Independência na Investigação',
          text: 'Todo processo investigativo é conduzido de forma sigilosa e exclusivamente pela área de Compliance, atuando com imparcialidade e isonomia.'
        },
        confidentiality: {
          title: 'Confidencialidade das Informações',
          text: 'Nossa área de Compliance mantém o compromisso de preservar todas as informações relacionadas às investigações de forma segura e confidencial.'
        },
        noRetaliation: {
          title: 'Política de Não Retaliação',
          text: 'A Uni Hospitalar garante um ambiente seguro onde nenhum relator de boa-fé será punido ou retaliado, independentemente do cargo ou resultado da investigação.'
        },
        agility: {
          title: 'Agilidade no Tratamento',
          text: 'Todos os relatos são analisados e tratados com a máxima agilidade possível, respeitando os prazos estabelecidos e mantendo o denunciante informado sobre o andamento.'
        },
        transparency: {
          title: 'Transparência e Justiça',
          text: 'Conduzimos todas as investigações com transparência nos processos e aplicação justa de medidas corretivas, sempre baseadas em evidências e análises imparciais.'
        }
      },
      howItWorksTitle: 'Como Funciona o Processo',
      steps: {
        report: {
          title: 'Relato',
          text: 'Faça seu relato através do nosso formulário seguro, de forma anônima ou identificada.'
        },
        receipt: {
          title: 'Recebimento',
          text: 'Você receberá um código único para acompanhar o andamento da investigação.'
        },
        investigation: {
          title: 'Investigação',
          text: 'Nossa equipe de Compliance conduzirá uma investigação imparcial e sigilosa.'
        },
        resolution: {
          title: 'Resolução',
          text: 'Medidas apropriadas serão tomadas conforme os resultados da investigação.'
        }
      },
      whatToReportTitle: 'Situações que Devem ser Reportadas',
      categories: {
        corruption: {
          title: 'Corrupção e Suborno',
          text: 'Oferecimento, solicitação ou recebimento de vantagens indevidas'
        },
        fraud: {
          title: 'Fraudes',
          text: 'Falsificação de documentos, informações ou processos'
        },
        harassment: {
          title: 'Assédio',
          text: 'Assédio moral, sexual ou qualquer forma de intimidação'
        },
        discrimination: {
          title: 'Discriminação',
          text: 'Tratamento desigual baseado em características pessoais'
        },
        safety: {
          title: 'Segurança',
          text: 'Violações de normas de segurança e saúde ocupacional'
        },
        compliance: {
          title: 'Violações de Compliance',
          text: 'Descumprimento de políticas internas e regulamentações'
        },
        privacy: {
          title: 'Violação de Privacidade',
          text: 'Uso indevido de dados pessoais ou informações confidenciais'
        },
        moneyLaundering: {
          title: 'Lavagem de Dinheiro',
          text: 'Operações financeiras suspeitas ou irregulares'
        },
        conflictOfInterest: {
          title: 'Conflito de Interesses',
          text: 'Situações que comprometem a imparcialidade nas decisões'
        },
        environmental: {
          title: 'Questões Ambientais',
          text: 'Violações de normas ambientais e sustentabilidade'
        },
        abuseOfPower: {
          title: 'Abuso de Poder',
          text: 'Uso inadequado de autoridade ou posição hierárquica'
        },
        contractual: {
          title: 'Irregularidades Contratuais',
          text: 'Violações em contratos, licitações ou processos de compra'
        }
      },
      notice: {
        title: 'Importante',
        text: 'Este canal não substitui os canais oficiais para emergências médicas ou situações que exijam ação imediata. Em casos urgentes, utilize os procedimentos padrão da instituição.',
        redirectTitle: 'Para situações específicas, utilize:',
        redirect1: {
          title: 'Emergências Médicas:',
          text: 'Contate imediatamente o setor de emergência ou segurança da unidade.'
        },
        redirect2: {
          title: 'Questões Trabalhistas:',
          text: 'Procure o departamento de Recursos Humanos para orientações específicas.'
        }
      },
      actionIntro: {
        title: 'Pronto para fazer um relato?',
        text: 'Acesse nosso canal seguro e faça seu relato de forma confidencial.'
      },
      actions: {
        makeReport: {
          title: 'Fazer um Relato',
          text: 'Relate situações que violem nossos princípios éticos e políticas internas.',
          button: 'Fazer Relato'
        },
        trackReport: {
          title: 'Acompanhar Relato',
          text: 'Consulte o status do seu relato utilizando o código fornecido.',
          button: 'Acompanhar Status'
        }
      },
      modal: {
        title: 'Acompanhar Relato',
        description: 'Digite o número do relato e o código de acesso para consultar o status da sua denúncia.',
        reportNumber: 'Número do Protocolo',
        reportNumberPlaceholder: 'Ex: REL-2024-001',
        accessCode: 'Código de Acesso',
        accessCodePlaceholder: 'Digite seu código de acesso',
        cancel: 'Cancelar',
        search: 'Consultar',
        searching: 'Consultando...',
        error: 'Não foi possível encontrar o relato. Verifique os dados informados.',
        result: {
          title: 'Status do Relato',
          protocol: 'Protocolo',
          code: 'Código',
          date: 'Data do Relato',
          status: 'Status',
          statusTypes: {
            'received': 'Recebido',
            'in-progress': 'Em Análise',
            'investigating': 'Em Investigação',
            'completed': 'Concluído',
            'pending': 'Pendente'
          },
          descriptions: {
            'received': 'Seu relato foi recebido e está aguardando análise inicial.',
            'in-progress': 'Seu relato está sendo analisado pela equipe de Compliance.',
            'investigating': 'Uma investigação formal foi iniciada com base no seu relato.',
            'completed': 'A investigação foi concluída e as medidas necessárias foram tomadas.',
            'pending': 'Aguardando informações adicionais para prosseguir com a análise.'
          }
        }
      }
    }
  },
  en: {
    confidential: {
      heroTitle: 'Confidential Channel',
      heroSubtitle: 'A safe environment for ethical and transparent reports',
      introTitle: 'Our Commitment to Ethics and Transparency',
      introText: 'Uni Hospitalar\'s Confidential Channel is an essential tool to maintain the highest ethical standards in our organization. We offer a safe and confidential environment where employees, partners and third parties can report situations that violate our values and internal policies.',
      highlight: {
        title: 'Safe and Protected Environment',
        text: 'We guarantee total confidentiality and protection against retaliation for all who use our channel responsibly and in good faith.'
      },
      principlesTitle: 'Our Fundamental Principles',
      principles: {
        anonymity: {
          title: 'Anonymity Guarantee',
          text: 'We ensure total anonymity and confidentiality of reports. No Uni Hospitalar employee has access to the identity of reporters who choose anonymity.'
        },
        independence: {
          title: 'Investigation Independence',
          text: 'Every investigative process is conducted confidentially and exclusively by the Compliance area, acting with impartiality and equality.'
        },
        confidentiality: {
          title: 'Information Confidentiality',
          text: 'Our Compliance area maintains the commitment to preserve all information related to investigations in a secure and confidential manner.'
        },
        noRetaliation: {
          title: 'Non-Retaliation Policy',
          text: 'Uni Hospitalar guarantees a safe environment where no good faith reporter will be punished or retaliated against, regardless of position or investigation outcome.'
        },
        agility: {
          title: 'Treatment Agility',
          text: 'All reports are analyzed and treated with maximum possible agility, respecting established deadlines and keeping the reporter informed about progress.'
        },
        transparency: {
          title: 'Transparency and Justice',
          text: 'We conduct all investigations with transparency in processes and fair application of corrective measures, always based on evidence and impartial analysis.'
        }
      },
      howItWorksTitle: 'How the Process Works',
      steps: {
        report: {
          title: 'Report',
          text: 'Make your report through our secure form, anonymously or identified.'
        },
        receipt: {
          title: 'Receipt',
          text: 'You will receive a unique code to track the investigation progress.'
        },
        investigation: {
          title: 'Investigation',
          text: 'Our Compliance team will conduct an impartial and confidential investigation.'
        },
        resolution: {
          title: 'Resolution',
          text: 'Appropriate measures will be taken according to the investigation results.'
        }
      },
      whatToReportTitle: 'Situations That Should Be Reported',
      categories: {
        corruption: {
          title: 'Corruption and Bribery',
          text: 'Offering, requesting or receiving undue advantages'
        },
        fraud: {
          title: 'Fraud',
          text: 'Falsification of documents, information or processes'
        },
        harassment: {
          title: 'Harassment',
          text: 'Moral, sexual harassment or any form of intimidation'
        },
        discrimination: {
          title: 'Discrimination',
          text: 'Unequal treatment based on personal characteristics'
        },
        safety: {
          title: 'Safety',
          text: 'Violations of safety and occupational health standards'
        },
        compliance: {
          title: 'Compliance Violations',
          text: 'Non-compliance with internal policies and regulations'
        },
        privacy: {
          title: 'Privacy Violation',
          text: 'Misuse of personal data or confidential information'
        },
        moneyLaundering: {
          title: 'Money Laundering',
          text: 'Suspicious or irregular financial operations'
        },
        conflictOfInterest: {
          title: 'Conflict of Interest',
          text: 'Situations that compromise impartiality in decisions'
        },
        environmental: {
          title: 'Environmental Issues',
          text: 'Violations of environmental and sustainability standards'
        },
        abuseOfPower: {
          title: 'Abuse of Power',
          text: 'Inappropriate use of authority or hierarchical position'
        },
        contractual: {
          title: 'Contractual Irregularities',
          text: 'Violations in contracts, bidding or purchasing processes'
        }
      },
      notice: {
        title: 'Important',
        text: 'This channel does not replace official channels for medical emergencies or situations requiring immediate action. In urgent cases, use the institution\'s standard procedures.',
        redirectTitle: 'For specific situations, use:',
        redirect1: {
          title: 'Medical Emergencies:',
          text: 'Immediately contact the emergency or security sector of the unit.'
        },
        redirect2: {
          title: 'Labor Issues:',
          text: 'Contact the Human Resources department for specific guidance.'
        }
      },
      actionIntro: {
        title: 'Ready to make a report?',
        text: 'Access our secure channel and make your report confidentially.'
      },
      actions: {
        makeReport: {
          title: 'Make a Report',
          text: 'Report situations that violate our ethical principles and internal policies.',
          button: 'Make Report'
        },
        trackReport: {
          title: 'Track Report',
          text: 'Check the status of your report using the provided code.',
          button: 'Track Status'
        }
      },
      modal: {
        title: 'Track Report',
        description: 'Enter the report number and access code to check the status of your complaint.',
        reportNumber: 'Protocol Number',
        reportNumberPlaceholder: 'Ex: REL-2024-001',
        accessCode: 'Access Code',
        accessCodePlaceholder: 'Enter your access code',
        cancel: 'Cancel',
        search: 'Search',
        searching: 'Searching...',
        error: 'Could not find the report. Please check the information provided.',
        result: {
          title: 'Report Status',
          protocol: 'Protocol',
          code: 'Code',
          date: 'Report Date',
          status: 'Status',
          statusTypes: {
            'received': 'Received',
            'in-progress': 'Under Analysis',
            'investigating': 'Under Investigation',
            'completed': 'Completed',
            'pending': 'Pending'
          },
          descriptions: {
            'received': 'Your report has been received and is awaiting initial analysis.',
            'in-progress': 'Your report is being analyzed by the Compliance team.',
            'investigating': 'A formal investigation has been initiated based on your report.',
            'completed': 'The investigation has been completed and necessary measures have been taken.',
            'pending': 'Awaiting additional information to proceed with the analysis.'
          }
        }
      }
    }
  },
  es: {
    confidential: {
      heroTitle: 'Canal Confidencial',
      heroSubtitle: 'Un ambiente seguro para reportes éticos y transparentes',
      introTitle: 'Nuestro Compromiso con la Ética y Transparencia',
      introText: 'El Canal Confidencial de Uni Hospitalar es una herramienta esencial para mantener los más altos estándares éticos en nuestra organización. Ofrecemos un ambiente seguro y confidencial donde colaboradores, socios y terceros pueden reportar situaciones que violen nuestros valores y políticas internas.',
      highlight: {
        title: 'Ambiente Seguro y Protegido',
        text: 'Garantizamos total confidencialidad y protección contra represalias para todos los que utilicen nuestro canal de forma responsable y de buena fe.'
      },
      principlesTitle: 'Nuestros Principios Fundamentales',
      principles: {
        anonymity: {
          title: 'Garantía del Anonimato',
          text: 'Aseguramos total anonimato y confidencialidad de los reportes. Ningún colaborador de Uni Hospitalar tiene acceso a la identidad de los reportadores que opten por el anonimato.'
        },
        independence: {
          title: 'Independencia en la Investigación',
          text: 'Todo proceso investigativo es conducido de forma sigilosa y exclusivamente por el área de Compliance, actuando con imparcialidad e igualdad.'
        },
        confidentiality: {
          title: 'Confidencialidad de las Informaciones',
          text: 'Nuestra área de Compliance mantiene el compromiso de preservar todas las informaciones relacionadas a las investigaciones de forma segura y confidencial.'
        },
        noRetaliation: {
          title: 'Política de No Represalia',
          text: 'Uni Hospitalar garantiza un ambiente seguro donde ningún reportador de buena fe será castigado o represaliado, independientemente del cargo o resultado de la investigación.'
        },
        agility: {
          title: 'Agilidad en el Tratamiento',
          text: 'Todos los reportes son analizados y tratados con la máxima agilidad posible, respetando los plazos establecidos y manteniendo al denunciante informado sobre el progreso.'
        },
        transparency: {
          title: 'Transparencia y Justicia',
          text: 'Conducimos todas las investigaciones con transparencia en los procesos y aplicación justa de medidas correctivas, siempre basadas en evidencias y análisis imparciales.'
        }
      },
      howItWorksTitle: 'Cómo Funciona el Proceso',
      steps: {
        report: {
          title: 'Reporte',
          text: 'Haga su reporte a través de nuestro formulario seguro, de forma anónima o identificada.'
        },
        receipt: {
          title: 'Recepción',
          text: 'Recibirá un código único para acompañar el progreso de la investigación.'
        },
        investigation: {
          title: 'Investigación',
          text: 'Nuestro equipo de Compliance conducirá una investigación imparcial y sigilosa.'
        },
        resolution: {
          title: 'Resolución',
          text: 'Se tomarán medidas apropiadas conforme a los resultados de la investigación.'
        }
      },
      whatToReportTitle: 'Situaciones que Deben ser Reportadas',
      categories: {
        corruption: {
          title: 'Corrupción y Soborno',
          text: 'Ofrecimiento, solicitud o recepción de ventajas indebidas'
        },
        fraud: {
          title: 'Fraudes',
          text: 'Falsificación de documentos, informaciones o procesos'
        },
        harassment: {
          title: 'Acoso',
          text: 'Acoso moral, sexual o cualquier forma de intimidación'
        },
        discrimination: {
          title: 'Discriminación',
          text: 'Tratamiento desigual basado en características personales'
        },
        safety: {
          title: 'Seguridad',
          text: 'Violaciones de normas de seguridad y salud ocupacional'
        },
        compliance: {
          title: 'Violaciones de Compliance',
          text: 'Incumplimiento de políticas internas y regulaciones'
        },
        privacy: {
          title: 'Violación de Privacidad',
          text: 'Uso indebido de datos personales o informaciones confidenciales'
        },
        moneyLaundering: {
          title: 'Lavado de Dinero',
          text: 'Operaciones financieras sospechosas o irregulares'
        },
        conflictOfInterest: {
          title: 'Conflicto de Intereses',
          text: 'Situaciones que comprometen la imparcialidad en las decisiones'
        },
        environmental: {
          title: 'Cuestiones Ambientales',
          text: 'Violaciones de normas ambientales y sostenibilidad'
        },
        abuseOfPower: {
          title: 'Abuso de Poder',
          text: 'Uso inadecuado de autoridad o posición jerárquica'
        },
        contractual: {
          title: 'Irregularidades Contractuales',
          text: 'Violaciones en contratos, licitaciones o procesos de compra'
        }
      },
      notice: {
        title: 'Importante',
        text: 'Este canal no sustituye los canales oficiales para emergencias médicas o situaciones que requieran acción inmediata. En casos urgentes, utilice los procedimientos estándar de la institución.',
        redirectTitle: 'Para situaciones específicas, utilice:',
        redirect1: {
          title: 'Emergencias Médicas:',
          text: 'Contacte inmediatamente el sector de emergencia o seguridad de la unidad.'
        },
        redirect2: {
          title: 'Cuestiones Laborales:',
          text: 'Busque el departamento de Recursos Humanos para orientaciones específicas.'
        }
      },
      actionIntro: {
        title: '¿Listo para hacer un reporte?',
        text: 'Acceda a nuestro canal seguro y haga su reporte de forma confidencial.'
      },
      actions: {
        makeReport: {
          title: 'Hacer un Reporte',
          text: 'Reporte situaciones que violen nuestros principios éticos y políticas internas.',
          button: 'Hacer Reporte'
        },
        trackReport: {
          title: 'Acompañar Reporte',
          text: 'Consulte el estado de su reporte utilizando el código proporcionado.',
          button: 'Acompañar Estado'
        }
      },
      modal: {
        title: 'Acompañar Reporte',
        description: 'Digite el número del reporte y el código de acceso para consultar el estado de su denuncia.',
        reportNumber: 'Número del Protocolo',
        reportNumberPlaceholder: 'Ej: REL-2024-001',
        accessCode: 'Código de Acceso',
        accessCodePlaceholder: 'Digite su código de acceso',
        cancel: 'Cancelar',
        search: 'Consultar',
        searching: 'Consultando...',
        error: 'No fue posible encontrar el reporte. Verifique los datos informados.',
        result: {
          title: 'Estado del Reporte',
          protocol: 'Protocolo',
          code: 'Código',
          date: 'Fecha del Reporte',
          status: 'Estado',
          statusTypes: {
            'received': 'Recibido',
            'in-progress': 'En Análisis',
            'investigating': 'En Investigación',
            'completed': 'Concluido',
            'pending': 'Pendiente'
          },
          descriptions: {
            'received': 'Su reporte fue recibido y está aguardando análisis inicial.',
            'in-progress': 'Su reporte está siendo analizado por el equipo de Compliance.',
            'investigating': 'Una investigación formal fue iniciada basada en su reporte.',
            'completed': 'La investigación fue concluida y las medidas necesarias fueron tomadas.',
            'pending': 'Aguardando informaciones adicionales para proceder con el análisis.'
          }
        }
      }
    }
  }
})

export function useConfidentialChannelTranslation() {
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
